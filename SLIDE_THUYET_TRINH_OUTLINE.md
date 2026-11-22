# KỊCH BẢN THUYẾT TRÌNH & HƯỚNG DẪN DEMO MINI PROJECT (5 - 7 PHÚT)
## ĐỀ TÀI: HỆ THỐNG ĐẶT LỊCH HẸN CẮT TÓC TRÊN PUBLIC CLOUD (BARBERSHOP BOOKING)

---

### PHẦN I: CẤU TRÚC SLIDE THUYẾT TRÌNH (10 SLIDES CHUẨN)

* **Slide 1: Trang bìa**
  * Tên đề tài: *Nghiên cứu & Triển khai Hệ thống Đặt lịch Hẹn Cắt tóc & Quản trị Salon trên Public Cloud*.
  * Tên môn học: *Điện toán Đám mây & Thiết kế hệ thống*.
  * Danh sách thành viên nhóm và phân công vai trò.
* **Slide 2: Đặt vấn đề & Nhu cầu thực tế**
  * Nỗi đau khách hàng: Chờ đợi lâu (30–60p), không được chọn thợ quen.
  * Nỗi đau của Salon: Trùng lịch (double-booking), ghi chép sổ sách thủ công dễ nhầm lẫn, khó thống kê doanh thu.
* **Slide 3: Mục tiêu & Phạm vi bài toán**
  * Input (Khách hàng, Dịch vụ, Thợ, Giờ hẹn) -> Xử lý (Chống xung đột khung giờ, sinh mã QR) -> Output (Vé điện tử, Lịch làm việc cho thợ, Dashboard doanh số).
* **Slide 4: Kiến trúc hệ thống & Thiết kế CSDL**
  * Biểu đồ Use Case 3 tác nhân: Khách hàng, Stylist, Admin.
  * Lược đồ CSDL quan hệ ERD (Users, Stylists, Services, Appointments, Appointment_Services).
* **Slide 5: Lựa chọn dịch vụ Public Cloud & Lý do**
  * Frontend: **Vercel** (Edge CDN, SSL tự động, 0đ).
  * Backend: **Render.com** (Node.js Web Service, CI/CD tự động, 0đ).
  * Database: **Neon.tech / Supabase** (PostgreSQL Serverless, bảo mật, 0đ).
  * **Điểm cộng lớn:** Hoàn toàn miễn phí, không cần add thẻ tín dụng, triệt tiêu rủi ro tài chính.
* **Slide 6: Quy trình triển khai (Deployment Pipeline)**
  * Sơ đồ Git Push -> GitHub -> Vercel & Render tự động Build & Deploy -> Khởi tạo CSDL.
* **Slide 7: Kết quả đạt được - Phân hệ Khách hàng**
  * Đặt lịch 3 bước nhanh chóng.
  * Thuật toán khóa giờ đã trùng.
  * Xuất vé điện tử QR Code để check-in tức thì tại quầy.
* **Slide 8: Kết quả đạt được - Phân hệ Quản trị & Stylist**
  * Bảng điều khiển KPI (Doanh thu hôm nay, Lịch chờ).
  * Biểu đồ doanh thu Chart.js thời gian thực.
  * Cập nhật trạng thái phục vụ 1 chạm.
* **Slide 9: Video / Ảnh chụp Demo thực tế**
  * Minh chứng các ca kiểm thử đạt kết quả tốt trên môi trường Cloud.
* **Slide 10: Kết luận & Hướng phát triển**
  * Đạt 100% mục tiêu đề bài.
  * Hướng phát triển: Tích hợp VNPAY/MoMo đặt cọc giữ chỗ, AI nhận diện khuôn mặt gợi ý kiểu tóc nam.

---

### PHẦN II: KỊCH BẢN LIVE DEMO TRỰC TIẾP (3 - 4 PHÚT)
*(Lưu ý: Mở sẵn 2 tab trình duyệt trên máy tính chiếu lên máy chiếu hoặc 1 tab trên máy tính và 1 tab trên điện thoại)*

#### Phút 1: Giới thiệu link Cloud thực tế
* **Lời nói:** *"Kính thưa thầy cô và các bạn, đây là sản phẩm của nhóm đã được triển khai hoàn chỉnh 100% trên nền tảng Public Cloud. Đường link truy cập công khai có chứng chỉ bảo mật HTTPS tại địa chỉ Vercel..."*
* **Thao tác:** Mở trang chủ `index.html` của hệ thống.

#### Phút 2: Đóng vai Khách hàng đặt lịch
* **Lời nói:** *"Bây giờ em xin phép đóng vai một khách hàng đến tiệm cắt tóc..."*
* **Thao tác:**
  1. Chọn dịch vụ: Chọn **"Combo Cắt Gội Massage Đế Vương (160k)"** và **"Cạo Râu Truyền Thống (60k)"**. Chỉ cho thầy cô thấy thanh bên phải tự động nhảy tổng tiền là **220.000 ₫**.
  2. Bấm nút **"Tiếp Tục Chọn Thợ & Giờ"**.
  3. Chọn thợ: Chọn **"Alex Tuấn (Master Barber)"**.
  4. Chọn giờ: Chọn khung giờ trống (Ví dụ: `15:00`).
  5. Bấm **"Tiếp Tục Điền Thông Tin"** -> Nhập Tên: *Nguyễn Văn Thắng*, SĐT: *0988776655*.
  6. Bấm **"Xác Nhận Đặt Lịch"**.
  7. **Kết quả:** Màn hình xuất hiện ngay **Vé Đặt Chỗ Barber** kèm **Mã QR Code** và mã vé `#BK-XXXX`. Nhấn nút *"In Hoá Đơn / Vé"* để chứng minh tính năng in ấn cho khách.

#### Phút 3: Minh chứng Thuật toán Chống Trùng Lịch (Double-booking Prevention)
* **Lời nói:** *"Và đây là điểm đặc biệt trong thuật toán phân tích thiết kế hệ thống của nhóm em: Thuật toán kiểm tra xung đột thời gian thực."*
* **Thao tác:**
  1. Bấm nút *"Đặt thêm lịch hẹn khác"*.
  2. Chọn lại thợ **"Alex Tuấn"** và ngày hôm nay.
  3. **Chỉ vào màn hình:** Khung giờ `15:00` lúc nãy vừa đặt **đã tự động bị gạch chéo và khóa bấm với chữ "Kín"**. Người khác không thể nào chọn trùng vào khung giờ này được nữa!
  4. Thầy cô sẽ đánh giá cực kỳ cao tính năng này vì thể hiện rõ tư duy thiết kế hệ thống chứ không phải làm web tĩnh!

#### Phút 4: Chuyển sang Phân hệ Quản trị (Admin Dashboard)
* **Lời nói:** *"Bây giờ em chuyển sang giao diện của Chủ tiệm hoặc Thợ cắt tóc..."*
* **Thao tác:**
  1. Mở trang `admin.html`.
  2. Lịch hẹn của bạn *Nguyễn Văn Thắng (0988776655)* lúc nãy vừa đặt đã xuất hiện ngay ở hàng đầu tiên với trạng thái **"Chờ phục vụ"**.
  3. Thao tác đổi dropdown trạng thái sang **"Hoàn thành"**.
  4. Chỉ cho thầy cô thấy: Số tiền ở ô **"Doanh Thu Hôm Nay"** lập tức tăng thêm 220.000 ₫ và biểu đồ doanh số cập nhật ngay tức thì!

#### Phút 5: Mở Dashboard Cloud chứng minh
* **Lời nói:** *"Cuối cùng, em xin mở bảng điều khiển Cloud trên Render và Vercel để thầy cô thấy hệ thống đang vận hành trực tiếp trên Cloud."*
* **Thao tác:** Chuyển qua tab Dashboard Render.com/Vercel, chỉ vào mục Build Logs và Live Status. Kết thúc phần trình bày tự tin và chào hội đồng.
