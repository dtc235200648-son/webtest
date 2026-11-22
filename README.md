# THE GENTLEMAN BARBER - HỆ THỐNG ĐẶT LỊCH HẸN VÀ QUẢN TRỊ SALON TRỰC TUYẾN
> **Đồ án môn học / Mini Project:** Điện toán Đám mây (Cloud Computing) & Phân tích Thiết kế Hệ thống  
> **Nền tảng Cloud triển khai:** Vercel (Frontend CDN) + Render.com (Backend API) + Neon.tech (PostgreSQL Database)  
> **Chi phí vận hành:** 0 VNĐ (Hoàn toàn nằm trong Free-tier, an toàn không cần quẹt thẻ tín dụng)

---

## 🌟 CÁC TÍNH NĂNG NỔI BẬT ĐÁP ỨNG ĐÚNG YÊU CẦU ĐỒ ÁN

1. **Không phải web tĩnh đơn thuần:**
   - Đầy đủ quy trình phân tích thiết kế hệ thống (Use Case, ERD 5 bảng chuẩn hóa 3NF, Biểu đồ luồng trạng thái).
   - **Thuật toán kiểm tra xung đột thời gian thực (Slot Collision Detection):** Ngăn chặn 100% tình trạng hai khách đặt trùng một thợ tại cùng một khung giờ.
   - **Tạo mã đặt chỗ & QR Code E-Ticket:** Tự động sinh vé điện tử kèm mã QR check-in tại quầy cho khách.
2. **Hai phân hệ người dùng độc lập:**
   - **Khách hàng (Client Portal):** Quy trình đặt lịch 3 bước trực quan, tự động tính tổng tiền & thời gian, tra cứu lịch hẹn đã đặt bằng số điện thoại.
   - **Quản trị & Thợ (Admin/Stylist Dashboard):** Thống kê KPI tự động, quản lý lịch hẹn dạng bảng thời gian thực, đổi trạng thái 1 chạm, biểu đồ doanh thu và phân bổ dịch vụ bằng **Chart.js**.
3. **Sẵn sàng triển khai ngay lập tức lên Public Cloud:**
   - Chạy được ở chế độ Standalone (mở trực tiếp `public/index.html` không cần cài đặt thêm phần mềm) hoặc kết nối RESTful API với backend Node.js.
   - Có sẵn file cấu hình `vercel.json`, `render.yaml`, `Dockerfile` và `database.sql`.

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN

```
textAI/
├── public/                       # Phân hệ giao diện Web (Client & Admin)
│   ├── index.html                # Giao diện Khách hàng đặt lịch (Client 3-step Wizard)
│   ├── admin.html                # Giao diện Quản trị viên & Stylist (Dashboard & Charts)
│   ├── css/
│   │   └── style.css             # Theme Barbershop Vintage/Modern, Ticket styles, Badges
│   └── js/
│       ├── data.js               # Quản lý Data, LocalStorage & REST API connector
│       ├── app.js                # Logic đặt lịch, validation, QR ticket generator
│       └── admin.js              # Logic thống kê doanh thu, cập nhật trạng thái, Chart.js
├── backend/                      # Phân hệ RESTful API Server
│   ├── server.js                 # Express API server (Conflict check, Health-check, Services, Stylists)
│   ├── package.json              # Node dependencies
│   └── database.sql              # PostgreSQL DDL & Seed data cho Neon.tech / Supabase
├── cloud-deploy/                 # Cấu hình triển khai Public Cloud
│   ├── render.yaml               # Render Blueprint (Infrastructure-as-Code)
│   ├── Dockerfile                # Docker containerization
│   └── vercel.json               # Vercel Deployment rules
├── BAO_CAO_MINI_PROJECT.md       # BÁO CÁO TOÀN DIỆN 07 PHẦN (Chuẩn 20 trang A4 theo đúng format yêu cầu)
├── SLIDE_THUYET_TRINH_OUTLINE.md # Đề cương 10 Slides & Kịch bản Live Demo 5 phút
└── README.md                     # Tài liệu hướng dẫn sử dụng
```

---

## 🚀 HƯỚNG DẪN TRẢI NGHIỆM NHANH (KHÔNG CẦN CÀI ĐẶT)

1. Mở thư mục `public/` trên máy tính của bạn.
2. Nhấp đúp chuột vào file `public/index.html` để mở giao diện Đặt lịch của Khách hàng trên trình duyệt (Chrome / Edge / Cốc Cốc).
3. Nhấp đúp chuột vào file `public/admin.html` để mở giao diện Bảng điều khiển Quản trị viên & Stylist.
4. Bạn có thể test trực tiếp tính năng:
   * Đặt 1 lịch hẹn tại một giờ bất kỳ.
   * Quay lại đặt tiếp lịch với cùng thợ đó -> Giờ đó sẽ hiển thị chữ **"Kín"** và bị gạch chéo.
   * Sang trang `admin.html` để xem lịch vừa xuất hiện, đổi trạng thái sang "Hoàn thành" để xem doanh thu nhảy số ngay lập tức!

---

## ☁️ HƯỚNG DẪN TRIỂN KHAI LÊN PUBLIC CLOUD (3 BƯỚC)

### Bước 1: Khởi tạo Database trên Neon.tech (2 phút)
1. Truy cập [https://neon.tech](https://neon.tech) -> Đăng nhập bằng GitHub.
2. Tạo Project mới -> Vào mục **SQL Editor** -> Copy toàn bộ nội dung file `backend/database.sql` và dán vào rồi nhấn **Run**.

### Bước 2: Deploy Backend lên Render.com (3 phút)
1. Đẩy project lên GitHub cá nhân.
2. Truy cập [https://render.com](https://render.com) -> Chọn **New Web Service** -> Chọn Repo của bạn.
3. Điền:
   * Build Command: `cd backend && npm install`
   * Start Command: `cd backend && node server.js`
4. Vào mục Environment Variables thêm: `PORT=10000`, `DATABASE_URL=(link lấy ở Bước 1)`.

### Bước 3: Deploy Frontend lên Vercel (1 phút)
1. Truy cập [https://vercel.com](https://vercel.com) -> Đăng nhập GitHub -> Nhấn **Import Project**.
2. Chọn thư mục dự án và nhấn **Deploy**.
3. Bạn sẽ nhận được đường link website chính thức dạng: `https://barber-booking-app.vercel.app` để báo cáo với giảng viên!

---

## 📄 TÀI LIỆU BÁO CÁO & SLIDE THUYẾT TRÌNH

* File báo cáo chi tiết 07 phần chuẩn học thuật: [BAO_CAO_MINI_PROJECT.md](file:///c:/Users/Tuong/Desktop/textAI/BAO_CAO_MINI_PROJECT.md)
* File kịch bản thuyết trình và Demo trước hội đồng: [SLIDE_THUYET_TRINH_OUTLINE.md](file:///c:/Users/Tuong/Desktop/textAI/SLIDE_THUYET_TRINH_OUTLINE.md)
