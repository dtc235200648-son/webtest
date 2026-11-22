/**
 * BARBERSHOP ADMIN & STYLIST DASHBOARD CONTROLLER
 * Redesigned adhering to Hallmark & UI/UX Pro Max Guidelines
 */

document.addEventListener("DOMContentLoaded", () => {
  let revenueChartInstance = null;
  let servicesChartInstance = null;

  // DOM Elements
  const statsTodayBookings = document.getElementById("stat-today-bookings");
  const statsPending = document.getElementById("stat-pending");
  const statsRevenue = document.getElementById("stat-revenue");
  const statsCompleted = document.getElementById("stat-completed");

  const appointmentTableBody = document.getElementById("appointment-table-body");
  const filterDateInput = document.getElementById("filter-date");
  const filterStatusSelect = document.getElementById("filter-status");
  const filterStylistSelect = document.getElementById("filter-stylist");
  const searchInput = document.getElementById("search-input");

  const btnResetData = document.getElementById("btn-reset-data");
  const btnRefresh = document.getElementById("btn-refresh-data");

  // Format currency
  function formatMoney(amount) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  }

  // Populate filter stylists
  function initStylistsFilter() {
    const stylists = window.barberStorage.getStylists();
    filterStylistSelect.innerHTML = `
      <option value="all">Tất cả Thợ cắt tóc</option>
      ${stylists.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
    `;
  }

  // Calculate & Render KPI Cards
  function renderKPIs() {
    const appointments = window.barberStorage.getAppointments();
    const today = window.getTodayString(0);

    const todayList = appointments.filter(a => a.date === today && a.status !== "cancelled");
    const pendingList = appointments.filter(a => a.status === "confirmed");
    const completedList = appointments.filter(a => a.status === "completed");

    const todayRevenue = todayList.reduce((sum, a) => sum + (a.status === "completed" ? a.totalPrice : 0), 0);

    if (statsTodayBookings) statsTodayBookings.innerText = todayList.length;
    if (statsPending) statsPending.innerText = pendingList.length;
    if (statsRevenue) statsRevenue.innerText = formatMoney(todayRevenue);
    if (statsCompleted) statsCompleted.innerText = completedList.length;
  }

  // Render Appointments Table
  function renderAppointments() {
    let list = window.barberStorage.getAppointments();

    const selectedDate = filterDateInput.value;
    const selectedStatus = filterStatusSelect.value;
    const selectedStylist = filterStylistSelect.value;
    const query = searchInput.value.trim().toLowerCase();

    // Filters
    if (selectedDate) {
      list = list.filter(a => a.date === selectedDate);
    }
    if (selectedStatus !== "all") {
      list = list.filter(a => a.status === selectedStatus);
    }
    if (selectedStylist !== "all") {
      list = list.filter(a => a.stylistId === selectedStylist);
    }
    if (query) {
      list = list.filter(a => 
        a.id.toLowerCase().includes(query) ||
        a.customerName.toLowerCase().includes(query) ||
        a.customerPhone.includes(query)
      );
    }

    if (list.length === 0) {
      appointmentTableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-[#94a3b8]">
            <i class="far fa-folder-open text-2xl mb-2 text-[#64748b] block"></i>
            Không có lịch hẹn nào phù hợp với bộ lọc hiện tại.
          </td>
        </tr>
      `;
      return;
    }

    appointmentTableBody.innerHTML = list.map(a => {
      let statusBadge = "";
      if (a.status === "confirmed") {
        statusBadge = `<span class="badge badge-confirmed">Chờ phục vụ</span>`;
      } else if (a.status === "in-progress") {
        statusBadge = `<span class="badge badge-in-progress">Đang cắt tóc</span>`;
      } else if (a.status === "completed") {
        statusBadge = `<span class="badge badge-completed">Hoàn thành</span>`;
      } else {
        statusBadge = `<span class="badge badge-cancelled">Đã hủy</span>`;
      }

      return `
        <tr class="border-b border-[#263244] hover:bg-[#141923] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-[#d4af37]">#${a.id}</td>
          <td class="py-3.5 px-4">
            <div class="font-bold text-[#f8fafc]">${a.customerName}</div>
            <div class="text-xs text-[#94a3b8] font-mono">${a.customerPhone}</div>
          </td>
          <td class="py-3.5 px-4">
            <div class="text-[#d4af37] font-medium">${a.stylistName}</div>
          </td>
          <td class="py-3.5 px-4 text-sm">
            <div class="font-semibold text-[#f8fafc] flex items-center gap-1.5">
              <i class="far fa-clock text-[#d4af37] text-xs"></i> ${a.time}
            </div>
            <div class="text-xs text-[#94a3b8]">Ngày ${a.date}</div>
          </td>
          <td class="py-3.5 px-4">
            <div class="text-xs text-[#cbd5e1] max-w-[200px] truncate" title="${a.services.join(', ')}">
              ${a.services.join(", ")}
            </div>
            <div class="text-[#d4af37] font-bold text-xs mt-0.5">${formatMoney(a.totalPrice)}</div>
          </td>
          <td class="py-3.5 px-4">${statusBadge}</td>
          <td class="py-3.5 px-4 text-right">
            <div class="inline-flex items-center gap-1.5">
              <select class="status-selector bg-[#0c0f14] border border-[#263244] text-[#cbd5e1] text-xs rounded-lg px-2 py-1 focus:border-[#d4af37] focus:outline-none" data-id="${a.id}">
                <option value="confirmed" ${a.status === 'confirmed' ? 'selected' : ''}>Chờ phục vụ</option>
                <option value="in-progress" ${a.status === 'in-progress' ? 'selected' : ''}>Đang cắt</option>
                <option value="completed" ${a.status === 'completed' ? 'selected' : ''}>Hoàn thành</option>
                <option value="cancelled" ${a.status === 'cancelled' ? 'selected' : ''}>Hủy lịch</option>
              </select>
              <button class="btn-delete-apt p-1.5 text-[#64748b] hover:text-[#ef4444] transition-colors rounded-lg" data-id="${a.id}" title="Xóa bản ghi" aria-label="Xóa lịch hẹn">
                <i class="fas fa-trash-alt text-xs"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    // Attach Status Change Listener
    appointmentTableBody.querySelectorAll(".status-selector").forEach(select => {
      select.addEventListener("change", () => {
        const id = select.getAttribute("data-id");
        const newStatus = select.value;
        window.barberStorage.updateAppointmentStatus(id, newStatus);
        renderKPIs();
        renderCharts();
        renderAppointments();
      });
    });

    // Attach Delete Listener
    appointmentTableBody.querySelectorAll(".btn-delete-apt").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (confirm(`Bạn có chắc chắn muốn xóa bản ghi lịch hẹn #${id}?`)) {
          window.barberStorage.deleteAppointment(id);
          renderKPIs();
          renderCharts();
          renderAppointments();
        }
      });
    });
  }

  // Render Analytics Charts using Chart.js with Tailored Brass Palette
  function renderCharts() {
    const appointments = window.barberStorage.getAppointments();

    // Chart 1: Daily Revenue (Last 5 days)
    const days = [
      window.getTodayString(-3),
      window.getTodayString(-2),
      window.getTodayString(-1),
      window.getTodayString(0),
      window.getTodayString(1)
    ];

    const revenuePerDay = days.map(d => {
      return appointments
        .filter(a => a.date === d && a.status !== "cancelled")
        .reduce((sum, a) => sum + a.totalPrice, 0) / 1000; // in thousands (K VND)
    });

    const dayLabels = days.map(d => {
      const parts = d.split("-");
      return `${parts[2]}/${parts[1]}`;
    });

    const revCtx = document.getElementById("revenueChart");
    if (revCtx) {
      if (revenueChartInstance) revenueChartInstance.destroy();

      revenueChartInstance = new Chart(revCtx, {
        type: "bar",
        data: {
          labels: dayLabels,
          datasets: [{
            label: "Doanh số (Nghìn VNĐ)",
            data: revenuePerDay,
            backgroundColor: "rgba(212, 175, 55, 0.8)",
            borderColor: "#d4af37",
            borderWidth: 1,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#cbd5e1" } }
          },
          scales: {
            y: {
              grid: { color: "rgba(255, 255, 255, 0.05)" },
              ticks: { color: "#94a3b8" }
            },
            x: {
              grid: { display: false },
              ticks: { color: "#94a3b8" }
            }
          }
        }
      });
    }

    // Chart 2: Services Popularity (Doughnut)
    const servicesCount = {};
    appointments.forEach(a => {
      if (a.status !== "cancelled") {
        a.services.forEach(s => {
          servicesCount[s] = (servicesCount[s] || 0) + 1;
        });
      }
    });

    const srvCtx = document.getElementById("servicesChart");
    if (srvCtx) {
      if (servicesChartInstance) servicesChartInstance.destroy();

      servicesChartInstance = new Chart(srvCtx, {
        type: "doughnut",
        data: {
          labels: Object.keys(servicesCount),
          datasets: [{
            data: Object.values(servicesCount),
            backgroundColor: [
              "#d4af37",
              "#38bdf8",
              "#10b981",
              "#a855f7",
              "#f59e0b",
              "#ef4444"
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: "#cbd5e1", boxWidth: 10, font: { size: 11 } }
            }
          }
        }
      });
    }
  }

  // Filter Listeners
  filterDateInput.addEventListener("change", renderAppointments);
  filterStatusSelect.addEventListener("change", renderAppointments);
  filterStylistSelect.addEventListener("change", renderAppointments);
  searchInput.addEventListener("input", renderAppointments);

  btnRefresh.addEventListener("click", () => {
    renderKPIs();
    renderAppointments();
    renderCharts();
  });

  btnResetData.addEventListener("click", () => {
    if (confirm("Khôi phục lại dữ liệu mẫu ban đầu cho toàn bộ hệ thống?")) {
      window.barberStorage.resetDefaults();
      renderKPIs();
      renderAppointments();
      renderCharts();
      alert("Đã khôi phục dữ liệu mẫu thành công!");
    }
  });

  // Init
  initStylistsFilter();
  renderKPIs();
  renderAppointments();
  renderCharts();
});
