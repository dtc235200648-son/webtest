/**
 * THE GENTLEMAN BARBER - CLIENT EXPERIENCE CONTROLLER
 * Ultra-Luxury UI with Category Filtering, Shift-based Slots, and Instant Feedback
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    currentStep: 1,
    activeCategory: "all",
    selectedServices: [],
    selectedStylist: null,
    selectedDate: getTodayString(0),
    selectedTime: null,
    customerInfo: {
      name: "",
      phone: "",
      email: "",
      notes: ""
    },
    latestBooking: null
  };

  // DOM Elements
  const stepItems = document.querySelectorAll(".step-item");
  const stepContainers = [
    document.getElementById("step-1-container"),
    document.getElementById("step-2-container"),
    document.getElementById("step-3-container"),
    document.getElementById("step-success-container")
  ];

  const servicesListEl = document.getElementById("services-list");
  const stylistsListEl = document.getElementById("stylists-list");
  const datePickerEl = document.getElementById("date-selector");
  const timeSlotsEl = document.getElementById("time-slots");
  const categoryTabsEl = document.getElementById("category-filter-tabs");

  // Step Navigation Buttons
  const btnToStep2 = document.getElementById("btn-to-step-2");
  const btnBackTo1 = document.getElementById("btn-back-to-1");
  const btnToStep3 = document.getElementById("btn-to-step-3");
  const btnBackTo2 = document.getElementById("btn-back-to-2");
  const btnConfirmBooking = document.getElementById("btn-confirm-booking");
  const btnBookAnother = document.getElementById("btn-book-another");

  // Search Booking Modal
  const btnOpenSearch = document.getElementById("btn-open-search");
  const searchModal = document.getElementById("search-modal");
  const btnCloseSearch = document.getElementById("btn-close-search");
  const btnDoSearch = document.getElementById("btn-do-search");
  const searchPhoneInput = document.getElementById("search-phone-input");
  const searchResultsEl = document.getElementById("search-results");

  // Format currency
  function formatMoney(amount) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  }

  // --- RENDER CATEGORY FILTER TABS ---
  function renderCategoryTabs() {
    if (!categoryTabsEl) return;
    const categories = [
      { id: "all", name: "Tất Cả Dịch Vụ" },
      { id: "Cắt tóc", name: "Cắt Tóc & Tạo Kiểu" },
      { id: "Combo VIP", name: "Combo Hoàng Gia VIP" },
      { id: "Uốn tóc", name: "Uốn & Nhuộm" },
      { id: "Chăm sóc", name: "Chăm Sóc Râu & Da" }
    ];

    categoryTabsEl.innerHTML = categories.map(cat => {
      const isActive = state.activeCategory === cat.id;
      return `
        <button type="button" class="category-tab-btn ${isActive ? 'active' : ''}" data-cat="${cat.id}">
          ${cat.name}
        </button>
      `;
    }).join("");

    categoryTabsEl.querySelectorAll(".category-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeCategory = btn.getAttribute("data-cat");
        renderCategoryTabs();
        renderServices();
      });
    });
  }

  // --- RENDER SERVICES (STEP 1) ---
  function renderServices() {
    let services = window.barberStorage.getServices();
    
    // Filter by active category
    if (state.activeCategory !== "all") {
      if (state.activeCategory === "Uốn tóc") {
        services = services.filter(s => s.category === "Uốn tóc" || s.category === "Nhuộm tóc");
      } else {
        services = services.filter(s => s.category === state.activeCategory);
      }
    }

    if (services.length === 0) {
      servicesListEl.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <i class="fas fa-search text-3xl text-amber-500/50 mb-3 block"></i>
          <p>Không tìm thấy dịch vụ nào trong mục này.</p>
        </div>
      `;
      return;
    }

    servicesListEl.innerHTML = services.map(s => {
      const isSelected = state.selectedServices.some(item => item.id === s.id);
      return `
        <div class="luxury-service-card ${isSelected ? 'selected' : ''}" data-service-id="${s.id}">
          <div class="service-image-box">
            <img src="${s.image}" alt="${s.name}" loading="lazy"/>
            <div class="service-image-overlay"></div>
            <span class="service-category-tag">${s.category}</span>
            <span class="service-duration-tag">
              <i class="far fa-clock text-amber-400 mr-1"></i> ${s.duration} phút
            </span>
            ${isSelected ? '<div class="service-selected-badge"><i class="fas fa-check"></i></div>' : ''}
          </div>

          <div class="service-content">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="service-title">${s.name}</h3>
              <div class="service-price">${formatMoney(s.price)}</div>
            </div>
            <p class="service-description">${s.description}</p>
          </div>

          <div class="service-footer">
            <button type="button" class="btn-select-toggle ${isSelected ? 'btn-active' : ''}">
              <i class="fas ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
              <span>${isSelected ? 'Đã Chọn (+ ' + formatMoney(s.price) + ')' : 'Chọn Dịch Vụ Này'}</span>
            </button>
          </div>
        </div>
      `;
    }).join("");

    // Attach click events
    servicesListEl.querySelectorAll(".luxury-service-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-service-id");
        toggleServiceSelection(id);
      });
    });

    updateSummary();
    validateStep1();
  }

  function toggleServiceSelection(serviceId) {
    const services = window.barberStorage.getServices();
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    const index = state.selectedServices.findIndex(s => s.id === serviceId);
    if (index > -1) {
      state.selectedServices.splice(index, 1);
    } else {
      state.selectedServices.push(service);
    }

    renderServices();
  }

  function validateStep1() {
    const isValid = state.selectedServices.length > 0;
    btnToStep2.disabled = !isValid;
    if (isValid) {
      btnToStep2.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      btnToStep2.classList.add("opacity-50", "cursor-not-allowed");
    }
  }

  // --- RENDER STYLISTS & DATES & SLOTS (STEP 2) ---
  function renderStep2() {
    renderStylists();
    renderDateSelector();
    renderTimeSlots();
    validateStep2();
  }

  function renderStylists() {
    const stylists = window.barberStorage.getStylists();
    const anyOption = {
      id: "any",
      name: "Thợ Bất Kỳ (Sắp Xếp Nhanh Nhất)",
      role: "Hệ thống tự động xếp thợ đang rảnh",
      rating: 5.0,
      reviewsCount: 500,
      avatar: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      experience: "Đội ngũ thợ chuẩn tay nghề",
      specialty: "Phù hợp khi bạn cần cắt ngay không chờ đợi"
    };

    const allStylists = [anyOption, ...stylists];

    if (!state.selectedStylist) {
      state.selectedStylist = anyOption;
    }

    stylistsListEl.innerHTML = allStylists.map(st => {
      const isSelected = state.selectedStylist && state.selectedStylist.id === st.id;
      return `
        <div class="luxury-stylist-card ${isSelected ? 'selected' : ''}" data-stylist-id="${st.id}">
          <div class="stylist-avatar-wrap relative">
            <img src="${st.avatar}" alt="${st.name}"/>
            ${st.id === 'any' ? '<div class="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#d4af37] text-[#07090e] flex items-center justify-center text-[10px] font-black shadow-md"><i class="fas fa-bolt"></i></div>' : ''}
          </div>
          
          <div class="stylist-info">
            <div class="flex items-center justify-between gap-1 mb-1">
              <h4 class="stylist-name">${st.name}</h4>
              <div class="stylist-rating">
                <i class="fas fa-star text-amber-400"></i> ${st.rating}
              </div>
            </div>
            <div class="stylist-role">${st.role}</div>
            <div class="stylist-specialty">${st.specialty}</div>
          </div>

          <div class="stylist-radio-check">
            ${isSelected ? '<i class="fas fa-check"></i>' : ''}
          </div>
        </div>
      `;
    }).join("");

    stylistsListEl.querySelectorAll(".luxury-stylist-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-stylist-id");
        state.selectedStylist = allStylists.find(s => s.id === id);
        renderStylists();
        renderTimeSlots();
        validateStep2();
        updateSummary();
      });
    });
  }

  function renderDateSelector() {
    const dates = [
      { date: getTodayString(0), label: "Hôm nay", sub: new Date().toLocaleDateString("vi-VN", { weekday: "short", day: "numeric", month: "numeric" }) },
      { date: getTodayString(1), label: "Ngày mai", sub: new Date(Date.now() + 86400000).toLocaleDateString("vi-VN", { weekday: "short", day: "numeric", month: "numeric" }) },
      { date: getTodayString(2), label: "Ngày kia", sub: new Date(Date.now() + 86400000 * 2).toLocaleDateString("vi-VN", { weekday: "short", day: "numeric", month: "numeric" }) },
      { date: getTodayString(3), label: "Hôm tới", sub: new Date(Date.now() + 86400000 * 3).toLocaleDateString("vi-VN", { weekday: "short", day: "numeric", month: "numeric" }) }
    ];

    datePickerEl.innerHTML = dates.map(d => {
      const isSelected = state.selectedDate === d.date;
      return `
        <button type="button" class="luxury-date-btn ${isSelected ? 'selected' : ''}" data-date="${d.date}">
          <span class="date-title">${d.label}</span>
          <span class="date-subtitle">${d.sub}</span>
        </button>
      `;
    }).join("");

    datePickerEl.querySelectorAll(".luxury-date-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedDate = btn.getAttribute("data-date");
        renderDateSelector();
        renderTimeSlots();
        validateStep2();
        updateSummary();
      });
    });
  }

  // Grouped Time Slots (Morning, Afternoon, Evening) for superior UX!
  function renderTimeSlots() {
    const morningSlots = ["08:30", "09:15", "10:00", "10:45", "11:30"];
    const afternoonSlots = ["13:30", "14:15", "15:00", "15:45", "16:30", "17:15"];
    const eveningSlots = ["18:00", "18:45", "19:30", "20:15"];

    const stylistId = state.selectedStylist ? state.selectedStylist.id : "any";
    const date = state.selectedDate;

    function renderShift(title, icon, slots) {
      return `
        <div class="slot-shift-block mb-4">
          <div class="slot-shift-header">
            <i class="${icon} text-amber-400 mr-2"></i>
            <span>${title}</span>
          </div>
          <div class="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
            ${slots.map(time => {
              const isBooked = window.barberStorage.isSlotBooked(stylistId, date, time);
              const isSelected = state.selectedTime === time;

              return `
                <button type="button" class="luxury-slot-btn ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}" data-time="${time}" ${isBooked ? 'disabled' : ''}>
                  <i class="far ${isBooked ? 'fa-times-circle text-red-400' : 'fa-clock text-amber-400'} mr-1.5 text-xs"></i>
                  <span>${time}</span>
                  ${isBooked ? '<span class="slot-booked-tag">Kín</span>' : ''}
                </button>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }

    timeSlotsEl.innerHTML = `
      ${renderShift("Ca Sáng (08:30 - 11:30)", "fas fa-sun", morningSlots)}
      ${renderShift("Ca Chiều (13:30 - 17:15)", "fas fa-cloud-sun", afternoonSlots)}
      ${renderShift("Ca Tối (18:00 - 20:15)", "fas fa-moon", eveningSlots)}
    `;

    timeSlotsEl.querySelectorAll(".luxury-slot-btn:not(.booked)").forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedTime = btn.getAttribute("data-time");
        renderTimeSlots();
        validateStep2();
        updateSummary();
      });
    });
  }

  function validateStep2() {
    const isValid = state.selectedStylist && state.selectedDate && state.selectedTime;
    btnToStep3.disabled = !isValid;
    if (isValid) {
      btnToStep3.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      btnToStep3.classList.add("opacity-50", "cursor-not-allowed");
    }
  }

  // --- STEP 3: CUSTOMER CONFIRMATION ---
  function renderStep3() {
    const formReviewEl = document.getElementById("booking-review-details");
    const totalAmount = state.selectedServices.reduce((sum, s) => sum + s.price, 0);
    const totalDuration = state.selectedServices.reduce((sum, s) => sum + s.duration, 0);

    formReviewEl.innerHTML = `
      <div class="review-order-card">
        <div class="review-header">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
            <i class="fas fa-clipboard-check text-lg"></i>
            <span>Tóm Tắt Lịch Hẹn Đã Chọn</span>
          </div>
          <span class="text-xs bg-amber-400/10 text-amber-300 px-3 py-1 rounded-full font-semibold border border-amber-400/20">
            VIP Reservation
          </span>
        </div>

        <div class="review-body space-y-3">
          <div class="review-row">
            <span class="review-label">Dịch vụ phục vụ:</span>
            <span class="review-value font-bold text-white text-right">${state.selectedServices.map(s => s.name).join(", ")}</span>
          </div>
          <div class="review-row">
            <span class="review-label">Master Stylist:</span>
            <span class="review-value text-amber-300 font-bold">${state.selectedStylist.name}</span>
          </div>
          <div class="review-row">
            <span class="review-label">Thời gian hẹn:</span>
            <span class="review-value font-mono font-bold text-white bg-slate-900 px-2.5 py-1 rounded border border-slate-700">
              ${state.selectedTime} · Ngày ${state.selectedDate}
            </span>
          </div>
          <div class="review-row">
            <span class="review-label">Thời lượng dự kiến:</span>
            <span class="review-value text-slate-300">${totalDuration} phút thư giãn</span>
          </div>
          <div class="review-row total-row">
            <span class="text-white font-bold text-base">Tổng thanh toán tại tiệm:</span>
            <span class="total-price-tag">${formatMoney(totalAmount)}</span>
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP NAVIGATION HANDLERS ---
  function goToStep(stepIndex) {
    state.currentStep = stepIndex;

    // Update Stepper header icons
    stepItems.forEach((item, idx) => {
      item.classList.remove("active", "completed");
      if (idx + 1 === stepIndex) {
        item.classList.add("active");
      } else if (idx + 1 < stepIndex) {
        item.classList.add("completed");
      }
    });

    // Toggle container views
    stepContainers.forEach((c, idx) => {
      if (idx + 1 === stepIndex) {
        c.classList.remove("hidden");
      } else {
        c.classList.add("hidden");
      }
    });

    // Trigger step specifics
    if (stepIndex === 1) {
      renderServices();
    } else if (stepIndex === 2) {
      renderStep2();
    } else if (stepIndex === 3) {
      renderStep3();
    }

    const bookingAnchor = document.getElementById("booking-workflow-anchor");
    if (bookingAnchor) {
      bookingAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Update real-time summary float card
  function updateSummary() {
    const totalAmount = state.selectedServices.reduce((sum, s) => sum + s.price, 0);
    const totalDuration = state.selectedServices.reduce((sum, s) => sum + s.duration, 0);

    const countEl = document.getElementById("summary-services-count");
    const priceEl = document.getElementById("summary-total-price");
    const durationEl = document.getElementById("summary-total-duration");
    const stylistEl = document.getElementById("summary-stylist-name");
    const timeEl = document.getElementById("summary-time-slot");

    if (countEl) countEl.innerText = `${state.selectedServices.length} dịch vụ`;
    if (priceEl) priceEl.innerText = formatMoney(totalAmount);
    if (durationEl) durationEl.innerText = `${totalDuration} phút`;
    if (stylistEl) stylistEl.innerText = state.selectedStylist ? state.selectedStylist.name : "Chưa chọn";
    if (timeEl) timeEl.innerText = state.selectedTime ? `${state.selectedTime} (${state.selectedDate})` : "Chưa chọn";
  }

  // Event Listeners for Nav
  btnToStep2.addEventListener("click", () => goToStep(2));
  btnBackTo1.addEventListener("click", () => goToStep(1));
  btnToStep3.addEventListener("click", () => goToStep(3));
  btnBackTo2.addEventListener("click", () => goToStep(2));

  // --- SUBMIT BOOKING (CONFIRM) ---
  btnConfirmBooking.addEventListener("click", () => {
    const nameInput = document.getElementById("cust-name");
    const phoneInput = document.getElementById("cust-phone");
    const emailInput = document.getElementById("cust-email");
    const notesInput = document.getElementById("cust-notes");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const notes = notesInput.value.trim();

    // Validations
    if (!name) {
      alert("Vui lòng nhập họ và tên của bạn!");
      nameInput.focus();
      return;
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(phone)) {
      alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số, định dạng Việt Nam)!");
      phoneInput.focus();
      return;
    }

    // Check conflict one last time before saving
    let finalStylist = state.selectedStylist;
    if (finalStylist.id === "any") {
      finalStylist = window.barberStorage.getAvailableStylistForSlot(state.selectedDate, state.selectedTime);
      if (!finalStylist) {
        alert("Khung giờ này hiện tất cả thợ đều đã kín lịch. Vui lòng chọn khung giờ khác!");
        goToStep(2);
        return;
      }
    } else {
      if (window.barberStorage.isSlotBooked(finalStylist.id, state.selectedDate, state.selectedTime)) {
        alert(`Thợ ${finalStylist.name} vừa được đặt vào khung giờ ${state.selectedTime}. Vui lòng chọn khung giờ hoặc thợ khác!`);
        goToStep(2);
        return;
      }
    }

    // Generate unique Booking ID
    const bookingCode = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const totalAmount = state.selectedServices.reduce((sum, s) => sum + s.price, 0);

    const newBooking = {
      id: bookingCode,
      customerName: name,
      customerPhone: phone,
      customerEmail: email || "Không có",
      stylistId: finalStylist.id,
      stylistName: finalStylist.name,
      serviceIds: state.selectedServices.map(s => s.id),
      services: state.selectedServices.map(s => s.name),
      date: state.selectedDate,
      time: state.selectedTime,
      totalPrice: totalAmount,
      status: "confirmed",
      notes: notes || "Không có ghi chú",
      createdAt: new Date().toISOString()
    };

    // Save to storage
    window.barberStorage.saveAppointment(newBooking);
    state.latestBooking = newBooking;

    // Render Success Ticket
    renderSuccessTicket(newBooking);
    goToStep(4);
  });

  function renderSuccessTicket(booking) {
    const ticketBox = document.getElementById("success-ticket-content");

    ticketBox.innerHTML = `
      <div class="luxury-boarding-pass">
        <div class="pass-notch-left"></div>
        <div class="pass-notch-right"></div>
        
        <div class="pass-header">
          <div class="pass-status-pill">
            <i class="fas fa-check-circle mr-1"></i> Xác Nhận Giữ Chỗ Thành Công
          </div>
          <h2 class="pass-brand-title">THE GENTLEMAN BARBER CLUB</h2>
          <div class="pass-ticket-code">MÃ VÉ VIP: <span>#${booking.id}</span></div>
        </div>

        <div class="pass-body">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#222d3f] gap-1">
              <span class="pass-meta-label">Quý khách đặt lịch:</span>
              <div class="text-right">
                <span class="font-bold text-white text-base">${booking.customerName}</span>
                <span class="pass-phone-badge ml-2">${booking.customerPhone}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#222d3f] gap-1">
              <span class="pass-meta-label">Người thợ phục vụ:</span>
              <span class="text-amber-300 font-bold text-base">${booking.stylistName}</span>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#222d3f] gap-1">
              <span class="pass-meta-label">Thời gian phục vụ:</span>
              <div class="pass-time-highlight">
                <i class="far fa-clock text-amber-400 mr-1.5"></i>
                <span>${booking.time} · Ngày ${booking.date}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#222d3f] gap-1">
              <span class="pass-meta-label">Dịch vụ đã chọn:</span>
              <span class="text-slate-200 text-sm font-semibold text-right">${booking.services.join(", ")}</span>
            </div>

            ${booking.notes ? `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#222d3f] gap-1">
              <span class="pass-meta-label">Ghi chú yêu cầu:</span>
              <span class="text-slate-300 text-xs italic">${booking.notes}</span>
            </div>
            ` : ''}

            <div class="flex items-center justify-between pt-3">
              <div>
                <span class="pass-meta-label">Tổng thanh toán tại tiệm:</span>
                <span class="text-[11px] text-[#10b981]">Thanh toán sau khi hoàn tất dịch vụ</span>
              </div>
              <span class="pass-price-large">${formatMoney(booking.totalPrice)}</span>
            </div>
          </div>

          <div class="bg-[#0b0f17] border border-[#d4af37]/35 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-inner">
            <div id="booking-qr-code" class="bg-white p-3 rounded-xl shadow-md mb-3 inline-flex items-center justify-center"></div>
            <div class="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">
              <i class="fas fa-qrcode mr-1"></i> Mã QR Check-in Vé VIP
            </div>
            <p class="text-[11px] text-[#8b9bb4] leading-relaxed">
              Đưa mã này cho lễ tân hoặc quét bằng Camera / Zalo để xem nhanh thông tin vé <b class="text-white">#${booking.id}</b>
            </p>
          </div>
        </div>

        <div class="pass-footer">
          <i class="fas fa-info-circle text-amber-400 mr-1"></i> 
          Vui lòng đến trước 05-10 phút để thưởng thức cà phê hạt mộc và nhận trải nghiệm phục vụ tốt nhất. Hotline hỗ trợ: <b class="text-amber-400 font-mono">1900 8888</b>
        </div>
      </div>
    `;

    // Generate scannable QR code with full ticket info
    const qrContainer = document.getElementById("booking-qr-code");
    if (qrContainer) {
      const qrPlainText = [
        "THE GENTLEMAN BARBER CLUB",
        `Ma ve: #${booking.id}`,
        `Khach hang: ${booking.customerName} (${booking.customerPhone})`,
        `Stylist: ${booking.stylistName}`,
        `Thoi gian: ${booking.time} - Ngay ${booking.date}`,
        `Dich vu: ${booking.services.join(", ")}`,
        `Tong tien: ${formatMoney(booking.totalPrice)}`
      ].join("\n");

      if (typeof QRCode !== "undefined") {
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, {
          text: unescape(encodeURIComponent(qrPlainText)),
          width: 156,
          height: 156,
          colorDark: "#07090e",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        const encoded = encodeURIComponent(qrPlainText);
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=156x156&data=${encoded}" alt="QR Code #${booking.id}" width="156" height="156" class="rounded" />`;
      }
    }
  }

  btnBookAnother.addEventListener("click", () => {
    state.selectedServices = [];
    state.selectedStylist = null;
    state.selectedTime = null;
    document.getElementById("cust-name").value = "";
    document.getElementById("cust-phone").value = "";
    document.getElementById("cust-email").value = "";
    document.getElementById("cust-notes").value = "";
    goToStep(1);
  });

  // --- SEARCH BOOKINGS MODAL ---
  btnOpenSearch.addEventListener("click", () => {
    searchModal.classList.remove("hidden");
    searchModal.classList.add("flex");
    searchPhoneInput.value = "";
    searchResultsEl.innerHTML = '<p class="text-slate-400 text-center text-sm py-4">Nhập số điện thoại để tra cứu các lịch hẹn của bạn.</p>';
  });

  btnCloseSearch.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    searchModal.classList.remove("flex");
  });

  btnDoSearch.addEventListener("click", () => {
    const phone = searchPhoneInput.value.trim();
    if (!phone) {
      alert("Vui lòng nhập số điện thoại để tra cứu!");
      return;
    }

    const all = window.barberStorage.getAppointments();
    const myBookings = all.filter(b => b.customerPhone === phone);

    if (myBookings.length === 0) {
      searchResultsEl.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          <i class="far fa-calendar-times text-4xl mb-2 text-amber-400 block"></i>
          <p>Không tìm thấy lịch hẹn nào cho số điện thoại <b>${phone}</b>.</p>
        </div>
      `;
      return;
    }

    searchResultsEl.innerHTML = myBookings.map(b => {
      let statusBadge = '';
      if (b.status === 'confirmed') statusBadge = '<span class="status-pill status-confirmed">Chờ phục vụ</span>';
      else if (b.status === 'in-progress') statusBadge = '<span class="status-pill status-in-progress">Đang cắt</span>';
      else if (b.status === 'completed') statusBadge = '<span class="status-pill status-completed">Hoàn thành</span>';
      else statusBadge = '<span class="status-pill status-cancelled">Đã hủy</span>';

      return `
        <div class="search-item-card">
          <div class="flex items-center justify-between">
            <span class="font-mono font-bold text-amber-400">#${b.id}</span>
            ${statusBadge}
          </div>
          <div class="text-sm text-slate-200 mt-2 space-y-1">
            <div><b>Thời gian:</b> ${b.time} · Ngày ${b.date}</div>
            <div><b>Stylist:</b> ${b.stylistName}</div>
            <div><b>Dịch vụ:</b> ${b.services.join(", ")}</div>
            <div><b>Tổng tiền:</b> <span class="text-amber-400 font-bold">${formatMoney(b.totalPrice)}</span></div>
          </div>
          ${b.status === 'confirmed' ? `
            <div class="pt-3 text-right border-t border-slate-700/60 mt-2">
              <button class="btn-cancel-my-booking text-xs text-red-400 hover:text-red-300 font-semibold" data-id="${b.id}">
                <i class="fas fa-trash-alt mr-1"></i> Hủy lịch hẹn này
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }).join("");

    // Attach cancel event
    searchResultsEl.querySelectorAll(".btn-cancel-my-booking").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (confirm(`Bạn có chắc chắn muốn hủy lịch hẹn #${id} không?`)) {
          window.barberStorage.updateAppointmentStatus(id, "cancelled");
          btnDoSearch.click(); // refresh
        }
      });
    });
  });

  // Initial load
  renderCategoryTabs();
  renderServices();
});
