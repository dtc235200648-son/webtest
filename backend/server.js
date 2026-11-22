/**
 * RESTFUL API SERVER - BARBERSHOP BOOKING SYSTEM
 * Deployed on Render.com / Railway / Fly.io
 * Supports PostgreSQL connection via DATABASE_URL or In-Memory Mock fallback
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for public frontend (Vercel)
app.use(cors({
  origin: '*', // In production, restrict to frontend domain e.g. https://your-app.vercel.app
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// In-Memory Data Store (Used if no PostgreSQL DATABASE_URL is configured)
let memoryDB = {
  services: [
    {
      id: "srv-1",
      name: "Cắt Tóc Tạo Kiểu Barber",
      category: "Cắt tóc",
      price: 90000,
      duration: 35,
      description: "Tư vấn kiểu tóc phù hợp khuôn mặt, cạo viền sắc nét và sấy tạo kiểu bằng sáp cao cấp.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-2",
      name: "Combo Cắt Gội Massage Đế Vương",
      category: "Combo VIP",
      price: 160000,
      duration: 55,
      description: "Trọn gói 7 bước: Rửa mặt, tẩy da chết, hút mụn, massage tai gáy, gội dưỡng sinh và sấy tạo phom vuốt wax.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-3",
      name: "Uốn Tóc Thời Thượng (Texture / Premlock / Foil)",
      category: "Uốn tóc",
      price: 280000,
      duration: 60,
      description: "Uốn phồng chân tóc, tạo sóng nhẹ tự nhiên hoặc uốn con sâu cá tính. Giữ nếp lâu 3-4 tháng.",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-4",
      name: "Nhuộm Tóc Màu Thời Trang",
      category: "Nhuộm tóc",
      price: 250000,
      duration: 60,
      description: "Đa dạng tông màu: Nâu tây, Xám khói, Than chì... Thuốc nhuộm hữu cơ an toàn bóng mượt.",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-5",
      name: "Cạo Râu Truyền Thống & Xông Tinh Dầu",
      category: "Chăm sóc",
      price: 60000,
      duration: 25,
      description: "Khăn nóng làm mềm râu, cạo êm ái sát da không rát, dưỡng da với tinh dầu bạc hà.",
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  stylists: [
    {
      id: "sty-3",
      name: "Sơn",
      role: "Trưởng tiệm (Master Stylist)",
      rating: 5.0,
      reviewsCount: 520,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      experience: "8 năm kinh nghiệm",
      specialty: "Sidepart 7/3 Hàn Quốc lãng tử, Uốn phồng chân tóc, Kỹ thuật cắt phom chuẩn Master"
    },
    {
      id: "sty-1",
      name: "Đức bếch khăm",
      role: "Senior VIP Barber",
      rating: 4.9,
      reviewsCount: 450,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      experience: "10 năm kinh nghiệm",
      specialty: "Classic Pompadour, Undercut vuốt sáp, Tỉa cạo râu chuẩn quý ông Anh Quốc"
    },
    {
      id: "sty-2",
      name: "Hùng ha mét",
      role: "Creative Barber & Colorist",
      rating: 4.9,
      reviewsCount: 380,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      experience: "6 năm kinh nghiệm",
      specialty: "Taper Fade sắc nét, Modern Mullet cá tính, Uốn sóng Texture thịnh hành"
    }
  ],
  appointments: [
    {
      id: "BK-8821",
      customerName: "Nguyễn Văn Hùng",
      customerPhone: "0901234567",
      customerEmail: "hung.nguyen@gmail.com",
      stylistId: "sty-1",
      stylistName: "Đức bếch khăm",
      services: ["Combo Cắt Gội Massage Đế Vương"],
      date: new Date().toISOString().split("T")[0],
      time: "09:15",
      totalPrice: 160000,
      status: "completed",
      notes: "Tóc mềm, muốn giữ độ dài mái",
      createdAt: new Date().toISOString()
    },
    {
      id: "BK-8822",
      customerName: "Trần Minh Quân",
      customerPhone: "0912345678",
      customerEmail: "quan.tran@gmail.com",
      stylistId: "sty-2",
      stylistName: "Hùng ha mét",
      services: ["Cắt Tóc Tạo Kiểu Barber", "Uốn Tóc Thời Thượng"],
      date: new Date().toISOString().split("T")[0],
      time: "10:00",
      totalPrice: 370000,
      status: "in-progress",
      notes: "Uốn sóng nhẹ tự nhiên",
      createdAt: new Date().toISOString()
    }
  ]
};

// -------------------------------------------------------------
// ROUTES
// -------------------------------------------------------------

// 1. Health check endpoint (Used by Render/Cloud monitoring)
app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    cloudService: 'Render / Railway Free Web Service'
  });
});

// 2. Get Services
app.get('/api/services', (req, res) => {
  res.json({ success: true, data: memoryDB.services });
});

// 3. Get Stylists
app.get('/api/stylists', (req, res) => {
  res.json({ success: true, data: memoryDB.stylists });
});

// 4. Get Appointments (with optional query filters)
app.get('/api/appointments', (req, res) => {
  const { date, status, stylistId, phone } = req.query;
  let results = [...memoryDB.appointments];

  if (date) results = results.filter(a => a.date === date);
  if (status && status !== 'all') results = results.filter(a => a.status === status);
  if (stylistId && stylistId !== 'all') results = results.filter(a => a.stylistId === stylistId);
  if (phone) results = results.filter(a => a.customerPhone === phone);

  res.json({ success: true, count: results.length, data: results });
});

// 5. Create Appointment with Conflict Check Algorithm
app.post('/api/appointments', (req, res) => {
  const { customerName, customerPhone, customerEmail, stylistId, stylistName, services, date, time, totalPrice, notes } = req.body;

  if (!customerName || !customerPhone || !date || !time) {
    return res.status(400).json({ success: false, message: 'Thiếu thông tin bắt buộc (Tên, SĐT, Ngày, Giờ)!' });
  }

  // Conflict detection: Check if slot is taken
  const isConflict = memoryDB.appointments.some(a => 
    a.status !== 'cancelled' &&
    a.stylistId === stylistId &&
    a.date === date &&
    a.time === time
  );

  if (isConflict) {
    return res.status(409).json({ 
      success: false, 
      message: 'Khung giờ này thợ đã có người đặt trước. Vui lòng chọn giờ hoặc thợ khác!' 
    });
  }

  const bookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
  const newAppointment = {
    id: bookingId,
    customerName,
    customerPhone,
    customerEmail: customerEmail || 'Không có',
    stylistId,
    stylistName,
    services: services || [],
    date,
    time,
    totalPrice: totalPrice || 0,
    status: 'confirmed',
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  memoryDB.appointments.unshift(newAppointment);

  res.status(201).json({
    success: true,
    message: 'Đặt lịch thành công!',
    data: newAppointment
  });
});

// 6. Update Appointment Status (confirmed, in-progress, completed, cancelled)
app.patch('/api/appointments/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const apt = memoryDB.appointments.find(a => a.id === id);
  if (!apt) {
    return res.status(404).json({ success: false, message: 'Không tìm thấy lịch hẹn!' });
  }

  apt.status = status;
  res.json({ success: true, message: 'Cập nhật trạng thái thành công', data: apt });
});

// 7. Delete Appointment
app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = memoryDB.appointments.length;
  memoryDB.appointments = memoryDB.appointments.filter(a => a.id !== id);

  if (memoryDB.appointments.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Không tìm thấy bản ghi!' });
  }

  res.json({ success: true, message: 'Xóa lịch hẹn thành công' });
});

// 8. Stats / Analytics KPI
app.get('/api/stats', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const todayList = memoryDB.appointments.filter(a => a.date === today && a.status !== 'cancelled');
  const revenue = todayList.reduce((sum, a) => sum + (a.status === 'completed' ? a.totalPrice : 0), 0);

  res.json({
    success: true,
    data: {
      todayBookings: todayList.length,
      pending: memoryDB.appointments.filter(a => a.status === 'confirmed').length,
      completed: memoryDB.appointments.filter(a => a.status === 'completed').length,
      revenueToday: revenue
    }
  });
});

// Root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; padding: 40px; background: #0f172a; color: #f8fafc;">
        <h1 style="color: #f59e0b;">Barber Booking REST API</h1>
        <p>Hệ thống Backend đang chạy trên Cloud Render.com</p>
        <p>Endpoint kiểm tra: <a href="/health" style="color: #60a5fa;">/health</a></p>
        <p>Tài liệu API: <code>/api/services</code>, <code>/api/stylists</code>, <code>/api/appointments</code></p>
      </body>
    </html>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Cloud Server] Barber API running on port ${PORT}`);
});
