/**
 * BARBERSHOP SYSTEM DATA & STORAGE MANAGEMENT
 * Updated: Sơn là Chủ tiệm (Master Stylist)
 */

const DEFAULT_SERVICES = [
  {
    id: "srv-1",
    name: "Cắt Tóc Tạo Kiểu Barber",
    category: "Cắt tóc",
    price: 90000,
    duration: 35,
    description: "Tư vấn kiểu tóc phù hợp khuôn mặt (Fade, Undercut, Mullet, Sidepart), cạo viền sắc nét và sấy tạo kiểu bằng sáp cao cấp.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-2",
    name: "Combo Cắt Gội Massage Đế Vương",
    category: "Combo VIP",
    price: 160000,
    duration: 55,
    description: "Trọn gói 7 bước: Rửa mặt, tẩy da chết bã cà phê, hút mụn, massage bấm huyệt tai gáy, gội đầu dưỡng sinh, cắt tóc và tạo phom vuốt wax.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-3",
    name: "Uốn Tóc Thời Thượng (Texture / Premlock / Foil)",
    category: "Uốn tóc",
    price: 280000,
    duration: 60,
    description: "Uốn phồng chân tóc, tạo sóng nhẹ tự nhiên hoặc uốn con sâu cá tính. Giữ nếp lâu 3-4 tháng kèm dưỡng phục hồi Keratin.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-4",
    name: "Nhuộm Tóc Màu Thời Trang",
    category: "Nhuộm tóc",
    price: 250000,
    duration: 60,
    description: "Đa dạng tông màu: Nâu tây, Xám khói, Than chì, Nâu hạt dẻ... Thuốc nhuộm hữu cơ an toàn cho da đầu, lên màu chuẩn bóng mượt.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-5",
    name: "Cạo Râu Truyền Thống & Xông Tinh Dầu",
    category: "Chăm sóc",
    price: 60000,
    duration: 25,
    description: "Khăn nóng làm mềm râu, cạo êm ái bằng dao cạo chuyên dụng sát da không rát, dưỡng da sau cạo với tinh dầu bạc hà sảng khoái.",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-6",
    name: "Dưỡng Tóc Phục Hồi Chuyên Sâu",
    category: "Chăm sóc",
    price: 120000,
    duration: 40,
    description: "Hấp dầu phục hồi Nano protein cho tóc khô xơ, hư tổn do hóa chất, giúp tóc dày khỏe, giảm gãy rụng rõ rệt.",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80"
  }
];

const DEFAULT_STYLISTS = [
  {
    id: "sty-3",
    name: "Sơn",
    role: "Chủ tiệm (Master Stylist)",
    rating: 5.0,
    reviewsCount: 520,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experience: "8 năm kinh nghiệm",
    specialty: "Sidepart 7/3 Hàn Quốc lãng tử, Uốn phồng chân tóc, Kỹ thuật cắt phom chuẩn Master",
    status: "available"
  },
  {
    id: "sty-1",
    name: "Đức bếch khăm",
    role: "Senior VIP Barber",
    rating: 4.2,
    reviewsCount: 450,
    avatar: "images/duc-beckham.jpg",
    experience: "10 năm kinh nghiệm",
    specialty: "Classic Pompadour, Undercut vuốt sáp, Tỉa cạo râu chuẩn quý ông Anh Quốc",
    status: "available"
  },
  {
    id: "sty-2",
    name: "Hùng ha mét",
    role: "Creative Barber & Colorist",
    rating: 4.5,
    reviewsCount: 380,
    avatar: "images/hung-hamet.jpg",
    experience: "6 năm kinh nghiệm",
    specialty: "Taper Fade sắc nét, Modern Mullet cá tính, Uốn sóng Texture thịnh hành",
    status: "available"
  }
];

const TIME_SLOTS = [
  "08:30", "09:15", "10:00", "10:45", "11:30",
  "13:30", "14:15", "15:00", "15:45", "16:30",
  "17:15", "18:00", "18:45", "19:30", "20:15"
];

function getTodayString(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

const DEFAULT_APPOINTMENTS = [
  {
    id: "BK-8821",
    customerName: "Nguyễn Văn Hùng",
    customerPhone: "0901234567",
    customerEmail: "hung.nguyen@gmail.com",
    stylistId: "sty-3",
    stylistName: "Sơn (Chủ tiệm)",
    serviceIds: ["srv-2"],
    services: ["Combo Cắt Gội Massage Đế Vương"],
    date: getTodayString(0),
    time: "09:15",
    totalPrice: 160000,
    status: "completed",
    notes: "Tóc mềm, muốn giữ độ dài mái",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: "BK-8822",
    customerName: "Trần Minh Quân",
    customerPhone: "0912345678",
    customerEmail: "quan.tran@gmail.com",
    stylistId: "sty-2",
    stylistName: "Hùng ha mét",
    serviceIds: ["srv-1", "srv-3"],
    services: ["Cắt Tóc Tạo Kiểu Barber", "Uốn Tóc Thời Thượng"],
    date: getTodayString(0),
    time: "10:00",
    totalPrice: 370000,
    status: "in-progress",
    notes: "Uốn sóng nhẹ tự nhiên",
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
  },
  {
    id: "BK-8823",
    customerName: "Lê Hoàng Long",
    customerPhone: "0987654321",
    customerEmail: "long.le@gmail.com",
    stylistId: "sty-1",
    stylistName: "Đức bếch khăm",
    serviceIds: ["srv-1"],
    services: ["Cắt Tóc Tạo Kiểu Barber"],
    date: getTodayString(0),
    time: "14:15",
    totalPrice: 90000,
    status: "confirmed",
    notes: "Cắt sát chân taper fade",
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  }
];

class BarberStorage {
  constructor() {
    this.init();
  }

  init() {
    // Force check: Ensure Sơn has role "Chủ tiệm" and stylists have updated photos
    try {
      const stored = JSON.parse(localStorage.getItem("barber_stylists") || "[]");
      const son = stored.find(s => s && s.name === "Sơn");
      const duc = stored.find(s => s && s.name === "Đức bếch khăm");
      if (!son || !son.role || !son.role.includes("Chủ tiệm") || !duc || !duc.avatar || !duc.avatar.includes("duc-beckham.jpg") || stored.length !== 3) {
        localStorage.setItem("barber_stylists", JSON.stringify(DEFAULT_STYLISTS));
      }
    } catch (e) {
      localStorage.setItem("barber_stylists", JSON.stringify(DEFAULT_STYLISTS));
    }

    try {
      const storedServices = JSON.parse(localStorage.getItem("barber_services") || "[]");
      const srv4 = storedServices.find(s => s && s.id === "srv-4");
      if (!srv4 || srv4.image.includes("517832606589")) {
        localStorage.setItem("barber_services", JSON.stringify(DEFAULT_SERVICES));
      }
    } catch (e) {
      localStorage.setItem("barber_services", JSON.stringify(DEFAULT_SERVICES));
    }

    try {
      const storedAppts = JSON.parse(localStorage.getItem("barber_appointments") || "[]");
      if (!storedAppts.length || storedAppts.some(a => a.stylistName && a.stylistName.includes("Alex Tuấn"))) {
        localStorage.setItem("barber_appointments", JSON.stringify(DEFAULT_APPOINTMENTS));
      }
    } catch (e) {
      localStorage.setItem("barber_appointments", JSON.stringify(DEFAULT_APPOINTMENTS));
    }
  }

  getServices() {
    return JSON.parse(localStorage.getItem("barber_services") || "[]");
  }

  getStylists() {
    return JSON.parse(localStorage.getItem("barber_stylists") || "[]");
  }

  getAppointments() {
    return JSON.parse(localStorage.getItem("barber_appointments") || "[]");
  }

  saveAppointment(appointment) {
    const list = this.getAppointments();
    list.unshift(appointment);
    localStorage.setItem("barber_appointments", JSON.stringify(list));
    return appointment;
  }

  updateAppointmentStatus(id, newStatus) {
    const list = this.getAppointments();
    const item = list.find(a => a.id === id);
    if (item) {
      item.status = newStatus;
      localStorage.setItem("barber_appointments", JSON.stringify(list));
      return item;
    }
    return null;
  }

  deleteAppointment(id) {
    let list = this.getAppointments();
    list = list.filter(a => a.id !== id);
    localStorage.setItem("barber_appointments", JSON.stringify(list));
    return true;
  }

  isSlotBooked(stylistId, date, time) {
    const list = this.getAppointments();
    return list.some(a => {
      if (a.status === "cancelled") return false;
      if (a.date !== date || a.time !== time) return false;
      if (stylistId === "any") return false;
      return a.stylistId === stylistId;
    });
  }

  getAvailableStylistForSlot(date, time) {
    const stylists = this.getStylists();
    for (const st of stylists) {
      if (!this.isSlotBooked(st.id, date, time)) {
        return st;
      }
    }
    return null;
  }

  resetDefaults() {
    localStorage.setItem("barber_services", JSON.stringify(DEFAULT_SERVICES));
    localStorage.setItem("barber_stylists", JSON.stringify(DEFAULT_STYLISTS));
    localStorage.setItem("barber_appointments", JSON.stringify(DEFAULT_APPOINTMENTS));
  }
}

// Global instance
window.barberStorage = new BarberStorage();
window.TIME_SLOTS = TIME_SLOTS;
window.getTodayString = getTodayString;
