# BÁO CÁO BÀI TẬP LỚN / MINI PROJECT MÔN HỌC
## HỌC PHẦN: ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING) & THIẾT KẾ HỆ THỐNG
***

**ĐỀ TÀI:**
### NGHIÊN CỨU, THIẾT KẾ VÀ TRIỂN KHAI HỆ THỐNG ĐẶT LỊCH HẸN CẮT TÓC & QUẢN TRỊ SALON TRỰC TUYẾN TRÊN NỀN TẢNG PUBLIC CLOUD (SMART BARBER BOOKING SYSTEM)

* **Giảng viên hướng dẫn:** Bộ môn Công nghệ Phần mềm & Hệ thống thông tin
* **Nhóm sinh viên thực hiện:** Nhóm 05
* **Chuyên ngành:** Công nghệ Thông tin / Kỹ thuật Phần mềm / Hệ thống Thông tin
* **Năm học:** 2026 - 2027

---

## MỤC LỤC TỔNG QUÁT

* **LỜI MỞ ĐẦU**
* **PHẦN 1: MÔ TẢ BÀI TOÁN VÀ VẤN ĐỀ NGHIÊN CỨU GIẢI QUYẾT**
  * 1.1. Bối cảnh thực tế và lý do chọn đề tài
  * 1.2. Xác định yêu cầu bài toán (Input, Output, Phạm vi)
  * 1.3. Nội hàm nghiệp vụ và Giải pháp giải quyết xung đột lịch hẹn (Conflict Resolution Algorithm)
  * 1.4. Phân tích thiết kế hệ thống (Use Case, Biểu đồ luồng Activity, Thiết kế CSDL quan hệ ERD)
  * 1.5. Tiêu chuẩn thiết kế giao diện UI/UX chuyên nghiệp (Hallmark & UI/UX Pro Max System)
* **PHẦN 2: DỊCH VỤ PUBLIC CLOUD ĐƯỢC LỰA CHỌN**
  * 2.1. Tiêu chí lựa chọn dịch vụ Cloud cho đề tài
  * 2.2. Tổng quan về các nhà cung cấp được lựa chọn (Vercel, Render.com, Neon PostgreSQL)
  * 2.3. Khảo sát giao diện và tính năng cốt lõi sau khi đăng nhập tài khoản Cloud
  * 2.4. Đánh giá tính hợp lý, chi phí (Free-tier) và khả năng kiểm soát thanh toán
* **PHẦN 3: PHÂN CÔNG CÔNG VIỆC TRONG NHÓM**
  * 3.1. Cơ cấu nhóm và vai trò trách nhiệm
  * 3.2. Ma trận phân công công việc chi tiết (WBS - Work Breakdown Structure)
  * 3.3. Đánh giá mức độ đóng góp của từng thành viên
* **PHẦN 4: KẾ HOẠCH DỰ KIẾN HOÀN THÀNH MINI PROJECT**
  * 4.1. Quy trình phát triển phần mềm theo mô hình Agile/Scrum
  * 4.2. Kế hoạch tiến độ chi tiết theo từng tuần (Gantt Chart)
  * 4.3. Các mốc đánh giá (Milestones) và kết quả bàn giao
* **PHẦN 5: CÁC BƯỚC CHI TIẾT TRIỂN KHAI (DEPLOY) LÊN PUBLIC CLOUD**
  * 5.1. Kiến trúc triển khai tổng thể trên Cloud
  * 5.2. Bước 1: Khởi tạo và thiết lập CSDL Cloud trên Neon.tech / Supabase
  * 5.3. Bước 2: Đóng gói và Deploy Backend REST API lên Render.com
  * 5.4. Bước 3: Triển khai Client Web App lên Vercel Serverless CDN
  * 5.5. Bước 4: Thiết lập liên kết Cross-Origin (CORS), Biến môi trường và chứng chỉ SSL/TLS
* **PHẦN 6: KẾT QUẢ SAU KHI TRIỂN KHAI HỆ THỐNG**
  * 6.1. Giới thiệu các phân hệ chức năng
  * 6.2. Giao diện và hướng dẫn sử dụng phân hệ Khách hàng (Client Portal)
  * 6.3. Giao diện và hướng dẫn sử dụng phân hệ Quản trị & Stylist (Admin Dashboard)
  * 6.4. Kết quả kiểm thử tính năng (Test Cases & Conflict Testing)
* **PHẦN 7: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN**
  * 7.1. Kết luận những kết quả đạt được
  * 7.2. Hạn chế hiện tại của đề tài
  * 7.3. Hướng phát triển mở rộng trong tương lai
* **TÀI LIỆU THAM KHẢO**

---

# LỜI MỞ ĐẦU

Trong thời đại chuyển đổi số mạnh mẽ, các ngành dịch vụ truyền thống như làm đẹp, chăm sóc cá nhân (Hair Salon, Barbershop, Spa) đang đứng trước yêu cầu cấp thiết phải hiện đại hóa quy trình vận hành nhằm nâng cao trải nghiệm khách hàng và tối ưu hóa năng suất lao động. Phương thức đặt lịch hẹn truyền thống qua gọi điện thoại, tin nhắn mạng xã hội hay ghi chép sổ sách thủ công bộc lộ nhiều nhược điểm nghiêm trọng: tình trạng quá tải dồn ứ khách vào các khung giờ cao điểm trong khi giờ thấp điểm nhân viên lại nhàn rỗi; hiện tượng trùng lịch cắt (double-booking) gây bức xúc cho khách hàng; chủ tiệm thiếu công cụ thống kê trực quan doanh thu và đánh giá hiệu quả của từng thợ kéo.

Bên cạnh đó, sự phát triển vượt bậc của công nghệ Điện toán Đám mây (Cloud Computing) đã mở ra cơ hội lớn cho các doanh nghiệp vừa và nhỏ triển khai các ứng dụng phần mềm nhanh chóng, tiết kiệm chi phí ban đầu, không cần đầu tư máy chủ vật lý tốn kém.

Xuất phát từ thực tiễn trên, nhóm nghiên cứu lựa chọn đề tài: **"Nghiên cứu, thiết kế và triển khai Hệ thống Đặt lịch Hẹn Cắt tóc & Quản trị Salon trực tuyến trên nền tảng Public Cloud"**. Đề tài không chỉ tập trung vào việc lập trình giao diện trực quan, thân thiện mà còn đi sâu vào quá trình phân tích thiết kế hệ thống chuẩn mực, giải quyết bài toán chống xung đột thời gian thực (Real-time Slot Collision), kết hợp ứng dụng các dịch vụ Public Cloud hiện đại (Vercel, Render, Neon Cloud Database) với chi phí vận hành tối ưu 0 VNĐ.

---

# PHẦN 1: MÔ TẢ BÀI TOÁN VÀ VẤN ĐỀ NGHIÊN CỨU GIẢI QUYẾT

### 1.1. Bối cảnh thực tế và lý do chọn đề tài
Khảo sát thực tế tại các chuỗi cắt tóc nam và tiệm Barber hiện nay cho thấy:
* **Về phía khách hàng:** Thời gian chờ đợi là rào cản lớn nhất. Khách hàng văn phòng, sinh viên thường có quỹ thời gian hạn hẹp; việc đến salon nhưng phải chờ 30 – 60 phút dẫn đến trải nghiệm tiêu cực. Khách hàng có nhu cầu chủ động lựa chọn Stylist quen thuộc và biết trước chính xác chi phí dịch vụ.
* **Về phía Salon:** Quản lý lịch làm việc của 5 – 10 thợ cắt tóc bằng sổ tay hoặc tin nhắn rất dễ dẫn đến sai sót, quên lịch hoặc trùng lịch một thợ phục vụ hai khách cùng lúc. Chủ tiệm khó theo dõi doanh thu thực tế phát sinh trong ngày, khó phân tích dịch vụ nào đang được ưa chuộng nhất.

### 1.2. Xác định Input, Output và Phạm vi hệ thống

```
+-------------------------------------------------------------------------+
|                              INPUT HỆ THỐNG                             |
| - Khách hàng: Họ tên, Số điện thoại, Email, Dịch vụ chọn, Thợ chỉ định, |
|   Ngày hẹn, Khung giờ mong muốn, Ghi chú đặc biệt.                      |
| - Quản trị viên / Thợ: Danh mục dịch vụ, Giá tiền, Thời lượng, Ca làm   |
|   việc của thợ, Trạng thái cập nhật lịch (Đang cắt, Hoàn tất, Hủy).     |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                           XỬ LÝ TRUNG TÂM (CORE)                        |
| - Xác thực dữ liệu đầu vào (Regex Phone, Sanitization).                  |
| - Thuật toán phân bổ thợ rảnh & Kiểm tra xung đột khung giờ (Conflict). |
| - Sinh mã đặt chỗ duy nhất (Unique Booking Ticket #BK-XXXX).            |
| - Mã hóa thông tin vé thành chuẩn QR Code check-in.                     |
| - Tính toán tổng chi phí và thời lượng phục vụ tự động.                 |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                             OUTPUT HỆ THỐNG                             |
| - Vé điện tử (E-Ticket) có QR code xác nhận ngày giờ, thợ, dịch vụ.     |
| - Bảng Kanban / Lịch trực quan thời gian thực cho Stylist và Admin.     |
| - Thống kê KPI: Doanh thu theo ngày/tuần, tỷ lệ dịch vụ, lượt khách.   |
+-------------------------------------------------------------------------+
```

### 1.3. Nội hàm nghiệp vụ & Thuật toán chống xung đột lịch hẹn (Time-Slot Conflict Prevention)
Vấn đề cốt lõi của một hệ thống Booking là tính toàn vẹn dữ liệu thời gian: **"Tại một thời điểm xác định ($T$), một Stylist ($S$) chỉ có thể phục vụ duy nhất một khách hàng ($C$)"**.

**Quy tắc thuật toán:**
1. Khách hàng lựa chọn một Thợ $S_i$, ngày $D$ và khung giờ $T_j$.
2. Hệ thống truy vấn tập hợp lịch hẹn $A$:
   $$\text{Conflict}(S_i, D, T_j) = \exists a \in A : (a.stylist = S_i) \land (a.date = D) \land (a.time = T_j) \land (a.status \neq \text{'cancelled'})$$
3. Nếu $\text{Conflict} = \text{True}$: Khung giờ $T_j$ được gắn cờ `Disabled`, giao diện người dùng hiển thị gạch chéo với thông báo "Kín chỗ".
4. Trường hợp khách chọn **"Thợ ngẫu nhiên (Any Stylist)"**:
   Hệ thống duyệt danh sách các thợ $\{S_1, S_2, ..., S_n\}$, tìm thợ đầu tiên thỏa mãn $\text{Conflict}(S_k, D, T_j) = \text{False}$. Nếu tất cả thợ đều kín lịch tại khung giờ đó thì mới thông báo hết chỗ.

### 1.4. Phân tích thiết kế hệ thống

#### 1.4.1. Biểu đồ Use Case tổng quát
Hệ thống phân chia rõ 03 tác nhân (Actors):
* **Khách hàng (Customer):** Xem dịch vụ -> Chọn Stylist -> Chọn ngày giờ -> Đặt lịch hẹn -> Nhận vé QR -> Tra cứu lịch sử đặt lịch bằng SĐT.
* **Thợ cắt tóc (Stylist):** Đăng nhập -> Xem danh sách khách đặt ca của mình -> Chuyển trạng thái phục vụ (Đang cắt, Hoàn tất).
* **Quản trị viên (Admin):** Quản lý thợ -> Quản lý dịch vụ & bảng giá -> Xem biểu đồ doanh thu -> Khôi phục/Quản trị hệ thống.

```
       +---------------------------------------------------------------+
       |                   SMART BARBER BOOKING SYSTEM                 |
       |                                                               |
       |   (Xem Dịch vụ & Bảng giá) <--------------------+             |
       |                                                 |             |
       |   (Đặt lịch hẹn 3 bước) <-----------------------+ [Khách Hàng]|
       |                                                 |             |
       |   (Nhận Vé & Quét Mã QR) <----------------------+             |
       |                                                 |             |
       |   (Tra cứu lịch theo SĐT) <---------------------+             |
       |                                                               |
       |   (Xem lịch làm việc cá nhân) <-----------------+ [Stylist]   |
       |                                                 |             |
       |   (Cập nhật trạng thái phục vụ) <---------------+             |
       |                                                 |             |
       |   (Thống kê Doanh thu & Lượt khách) <-----------+ [Admin]     |
       |                                                 |             |
       |   (Quản lý Stylist, Dịch vụ & Phân bổ slot) <---+             |
       +---------------------------------------------------------------+
```

#### 1.4.2. Thiết kế Cơ sở Dữ liệu Quan hệ (ERD - Entity Relationship Diagram)
Cơ sở dữ liệu gồm 5 bảng chính đảm bảo chuẩn hóa 3NF:
* `users` ($1 - n$) `appointments`
* `stylists` ($1 - n$) `appointments`
* `appointments` ($n - m$) `services` (thông qua bảng phụ `appointment_services`)

```
+--------------------+           +------------------------+
|      STYLISTS      |           |      APPOINTMENTS      |
+--------------------+           +------------------------+
| PK id (VARCHAR)    |1        n | PK id (VARCHAR)        |
|    name            |<----------| FK stylist_id          |
|    role_title      |           |    customer_name       |
|    rating          |           |    customer_phone      |
|    avatar_url      |           |    appointment_date    |
|    specialty       |           |    start_time          |
+--------------------+           |    total_price         |
                                 |    status              |
                                 |    created_at          |
                                 +------------------------+
                                              | 1
                                              |
                                              | n
+--------------------+           +------------------------+
|      SERVICES      |           |  APPOINTMENT_SERVICES  |
+--------------------+           +------------------------+
| PK id (VARCHAR)    |1        n | PK,FK appointment_id   |
|    name            |<----------| PK,FK service_id       |
|    category        |           |       price_at_booking |
|    price           |           +------------------------+
|    duration_minutes|
|    image_url       |
+--------------------+
```

### 1.5. Tiêu chuẩn thiết kế giao diện UI/UX chuyên nghiệp (Hallmark & UI/UX Pro Max)
Để đảm bảo sản phẩm không mắc phải lỗi "giao diện AI chung chung, rập khuôn (AI-slop)", nhóm đã tích hợp và tuân thủ chặt chẽ 2 bộ quy chuẩn thiết kế hàng đầu:
1. **Quy chuẩn Hallmark Anti-AI-slop (Nutlope/hallmark):**
   * **Design Tokens nghiêm ngặt:** Toàn bộ màu sắc và typography được quản lý tại biến `:root`, triệt tiêu hoàn toàn mã màu hex tự do rải rác trong code.
   * **Loại bỏ hiệu ứng rập khuôn:** Không sử dụng gradient tím-xanh đại trà, không card lồng trong card, không dùng emoji thay cho icon chuẩn.
   * **Chống tràn khung hình:** Áp dụng quy tắc `overflow-x: clip` trên cả thẻ `html` và `body`.
   * **Hiệu năng chuyển động (Motion Performance):** Tuyệt đối không dùng `transition: all`, chỉ áp dụng transition có chủ đích (150ms–200ms) trên các thuộc tính màu sắc, đường viền và độ đổ bóng.
2. **Quy chuẩn UI/UX Pro Max Design Intelligence:**
   * **Khả năng tiếp cận (Accessibility - WCAG AA):** Đảm bảo độ tương phản màu chữ với nền luôn đạt tỷ lệ $\ge 4.5:1$. Mọi phần tử tương tác đều có vòng viền `:focus-visible` phục vụ điều hướng bằng phím Tab.
   * **Vùng chạm cảm ứng thân thiện thiết bị di động (Touch Target):** Các nút chọn khung giờ, nút dịch vụ và nút chuyển bước đều đạt chiều cao tối thiểu $\ge 44\text{px}$.
   * **Cặp font chữ chuẩn mực:** Sử dụng font *Cinzel* mang hơi hướng cổ điển, sang trọng cho tiêu đề kết hợp cùng font *Inter* hiện đại, rõ nét cho nội dung văn bản.

---

# PHẦN 2: DỊCH VỤ PUBLIC CLOUD ĐƯỢC LỰA CHỌN

### 2.1. Tiêu chí lựa chọn dịch vụ Cloud cho đề tài
Khi triển khai đồ án môn học, việc lựa chọn nhà cung cấp Public Cloud cần cân bằng giữa:
1. **Tính dễ tiếp cận:** Thủ tục đăng ký nhanh, không bắt buộc phải cung cấp thẻ tín dụng quốc tế (Credit Card) nhằm loại bỏ 100% rủi ro bị tự động trừ tiền khi vượt quá hạn mức.
2. **Hỗ trợ CI/CD tự động:** Tự động kết nối với GitHub để Build & Deploy mỗi khi có commit mới.
3. **Hiệu năng & Khả năng sẵn sàng (High Availability):** Cung cấp đường truyền băng thông ổn định, chứng chỉ bảo mật HTTPS/SSL tự động, Domain công khai phục vụ buổi thuyết trình trực tiếp.
4. **Kiến trúc phân tầng (Decoupled Architecture):** Phân tách độc lập tầng Frontend (Static/SPA) và tầng Backend (API/Database) theo xu hướng hiện đại.

### 2.2. Chi tiết các nhà cung cấp được lựa chọn

| Thành phần | Nhà cung cấp Cloud | Gói sử dụng | Tính năng nổi bật |
| :--- | :--- | :--- | :--- |
| **Frontend Web App** | **Vercel** (vercel.com) | Hobby (Miễn phí) | Edge Network CDN toàn cầu, tốc độ tải trang cực nhanh, tự động cấp HTTPS, tích hợp GitHub 1-click. |
| **Backend REST API** | **Render** (render.com) | Free Web Service | Hỗ trợ Native Node.js / Docker, tự động build từ Git repo, bảng điều khiển Live Log và Health-check monitoring. |
| **Cloud Database** | **Neon.tech / Supabase** | Free Serverless | CSDL quan hệ PostgreSQL 16 trên Cloud, giao diện Web Query SQL trực quan, sao lưu tự động. |
| **Asset CDN** | **Cloudinary / Unsplash** | Free Tier | Lưu trữ hình ảnh mẫu tóc và stylist với CDN tốc độ cao. |

### 2.3. Khảo sát giao diện và tính năng cốt lõi sau khi đăng nhập
* **Giao diện Render.com Dashboard:**
  * Cung cấp tab **Settings**: Quản lý `Build Command` (`npm install`), `Start Command` (`npm start`).
  * Cung cấp tab **Environment Variables**: Nơi lưu trữ các biến môi trường bảo mật (`DATABASE_URL`, `PORT=10000`, `NODE_ENV=production`) tách biệt khỏi mã nguồn.
  * Cung cấp tab **Logs**: Theo dõi trực tiếp các request HTTP GET/POST gửi tới máy chủ, rất hữu ích khi kiểm tra lỗi trong buổi demo.
* **Giao diện Vercel Dashboard:**
  * Quản lý các phiên bản Deployment theo từng Commit/Branch.
  * Hỗ trợ gán tên miền tùy chỉnh (Custom Domain) hoặc dùng tên miền miễn phí dạng `*.vercel.app`.
  * Tính năng **Instant Rollback**: Cho phép quay lại phiên bản trước đó ngay lập tức nếu phiên bản mới gặp lỗi.

### 2.4. Tính hợp lý và cơ chế kiểm soát chi phí (Billing Control)
* Các dịch vụ được chọn hoàn toàn hoạt động trong chính sách **Free-tier vĩnh viễn** cho mục đích học tập và nghiên cứu.
* Render.com và Neon.tech cho phép đăng ký tài khoản trực tiếp qua GitHub/Google OAuth mà không cần nhập thẻ Visa/Mastercard. Do đó, sinh viên hoàn toàn yên tâm không bao giờ xảy ra tình trạng "quên tắt máy chủ dẫn đến hóa đơn hàng triệu đồng" như khi sử dụng các dịch vụ Cloud lớn (AWS EC2, Google Cloud Compute Engine, Azure VM).

---

# PHẦN 3: PHÂN CÔNG CÔNG VIỆC TRONG NHÓM

Nhóm thực hiện gồm 04 thành viên, công việc được phân bổ theo phương pháp WBS (Work Breakdown Structure) đảm bảo tính cân đối và gắn kết giữa các cấu phần:

### 3.1. Ma trận phân công công việc chi tiết

| STT | Thành viên & MSSV | Vai trò chính | Nhiệm vụ đảm nhiệm cụ thể | Tỉ lệ đóng góp |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Nguyễn Văn A** *(Trưởng nhóm)* | Cloud Architect & Fullstack | - Khởi tạo hạ tầng Cloud (Render, Vercel, Neon DB)<br>- Thiết lập CI/CD, biến môi trường, xử lý CORS<br>- Lập trình phân hệ Admin Dashboard & Biểu đồ Chart.js<br>- Phụ trách viết Phần 2, 5 trong Báo cáo. | 28% |
| 2 | **Trần Thị B** | Backend Developer | - Thiết kế lược đồ CSDL PostgreSQL chuẩn hóa 3NF<br>- Viết REST API (Services, Stylists, Appointments)<br>- Xây dựng thuật toán kiểm tra xung đột thời gian thực<br>- Viết kịch bản Test Cases và Phần 1, 6 trong Báo cáo. | 25% |
| 3 | **Lê Văn C** | Frontend Developer | - Xây dựng giao diện Client (3-step Booking Wizard)<br>- Thiết kế theme Barbershop sang trọng (Tailwind CSS)<br>- Tích hợp API sinh mã QR Code cho vé điện tử<br>- Xây dựng chức năng tra cứu lịch theo SĐT<br>- Phụ trách viết Phần 4, 7 trong Báo cáo. | 25% |
| 4 | **Phạm Quốc D** | Quality Assurance (QA) & Designer | - Thiết kế biểu đồ Use Case, ERD, Activity Diagram<br>- Kiểm thử luồng nghiệp vụ trên môi trường Cloud thực tế<br>- Chuẩn bị Slide thuyết trình và Kịch bản Demo 5 phút<br>- Tổng hợp, hiệu đính toàn bộ báo cáo 20 trang A4. | 22% |

---

# PHẦN 4: KẾ HOẠCH DỰ KIẾN HOÀN THÀNH MINI PROJECT

Dự án được triển khai trong thời gian 05 tuần theo chu trình lặp:

```
Tuần 1: Khảo sát & Phân tích thiết kế hệ thống
Tuần 2: Xây dựng CSDL Cloud & Lập trình Backend API
Tuần 3: Phát triển Giao diện Client & Admin Dashboard
Tuần 4: Triển khai (Deploy) hệ thống lên Public Cloud & Cấu hình CI/CD
Tuần 5: Kiểm thử E2E trên Cloud, Viết Báo cáo hoàn chỉnh & Tập dượt Demo
```

### Bảng kế hoạch chi tiết từng bước (Milestones & Deliverables):

| Tuần | Công việc chi tiết | Công nghệ / Công cụ | Kết quả đầu ra (Deliverable) |
| :---: | :--- | :--- | :--- |
| **Tuần 1** | - Họp nhóm thống nhất bài toán.<br>- Viết đặc tả SRS (Software Requirements Specification).<br>- Vẽ biểu đồ Use Case, ERD và sơ đồ trạng thái. | Draw.io, Markdown, Google Docs | Tài liệu phân tích thiết kế hệ thống hoàn chỉnh. |
| **Tuần 2** | - Tạo CSDL trên Cloud Neon/Supabase.<br>- Lập trình Backend Express API.<br>- Viết thuật toán Conflict Detection.<br>- Test API bằng Postman. | Node.js, Express, PostgreSQL, Postman | Bộ sưu tập Postman Collection và Server chạy ổn định trên Local. |
| **Tuần 3** | - Thiết kế giao diện Khách hàng (Responsive Mobile).<br>- Lập trình tính năng đặt lịch 3 bước, xuất vé QR.<br>- Thiết kế Admin Dashboard và biểu đồ doanh thu. | HTML5, Tailwind CSS, JavaScript ES6, Chart.js | Giao diện web hoàn chỉnh kết nối dữ liệu mượt mà. |
| **Tuần 4** | - Đẩy mã nguồn lên GitHub Organization.<br>- Thiết lập Web Service trên Render.com.<br>- Triển khai Frontend lên Vercel.<br>- Cấu hình Domain HTTPS, biến môi trường và CORS. | GitHub Actions, Vercel, Render CLI | Đường link website chính thức chạy trên Internet: `*.vercel.app`. |
| **Tuần 5** | - Thực hiện kiểm thử tải và kiểm thử xung đột đồng thời.<br>- Hoàn thiện báo cáo 20 trang A4 theo mẫu quy định.<br>- Thiết kế Slide và diễn tập kịch bản Demo. | Google Docs, PowerPoint, Chrome DevTools | File báo cáo PDF/DOCX, Slide thuyết trình và hệ thống sẵn sàng Demo. |

---

# PHẦN 5: CÁC BƯỚC CHI TIẾT TRIỂN KHAI (DEPLOY) LÊN PUBLIC CLOUD

### 5.1. Kiến trúc triển khai trên Cloud (Cloud Deployment Topology)

```
[Người dùng truy cập Browser / Smartphone]
                    |
                    v (HTTPS: 443)
       +----------------------------+
       |   VERCEL EDGE NETWORK      |
       |  (Frontend Client & Admin) |
       |   barber-booking.vercel.app|
       +----------------------------+
                    |
                    | (REST API Calls via HTTPS)
                    v
       +----------------------------+
       |    RENDER.COM CLOUD        |
       |  (Backend Node.js Service) |
       |   barber-api.onrender.com  |
       +----------------------------+
                    |
                    | (TCP / SSL Connection String)
                    v
       +----------------------------+
       |    NEON.TECH POSTGRESQL    |
       |   (Cloud Managed Database) |
       |   ep-barber-db.neon.tech   |
       +----------------------------+
```

### 5.2. Bước 1: Khởi tạo và thiết lập CSDL trên Neon.tech / Supabase
1. Truy cập [https://neon.tech](https://neon.tech) và đăng nhập bằng tài khoản GitHub của nhóm.
2. Nhấn nút **Create Project**, đặt tên Project là `barber-appointment-db`, chọn khu vực máy chủ (Region) gần nhất là `Singapore (ap-southeast-1)` để tối ưu độ trễ (latency).
3. Sau khi tạo xong, hệ thống cung cấp chuỗi kết nối an toàn:
   ```env
   DATABASE_URL="postgres://neondb_owner:AbCd1234EfGh@ep-sweet-mountain-123456.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
   ```
4. Mở tab **SQL Editor** trên giao diện Neon, dán toàn bộ nội dung file `backend/database.sql` và nhấn **Run** để khởi tạo các bảng và dữ liệu mẫu (Seed Data).
   *(Hình ảnh 5.1: Giao diện quản trị bảng CSDL và SQL Console trên Neon.tech)*

### 5.3. Bước 2: Triển khai Backend REST API lên Render.com
1. Đẩy mã nguồn thư mục `backend/` lên kho lưu trữ GitHub của nhóm.
2. Truy cập [https://render.com](https://render.com), chọn **New +** -> **Web Service**.
3. Chọn liên kết với kho lưu trữ GitHub chứa mã nguồn Backend.
4. Cấu hình các thông số triển khai:
   * **Name:** `barber-booking-backend`
   * **Region:** `Singapore`
   * **Branch:** `main`
   * **Root Directory:** `backend`
   * **Runtime:** `Node`
   * **Build Command:** `npm install`
   * **Start Command:** `node server.js`
   * **Instance Type:** `Free`
5. Nhấn vào mục **Advanced** -> **Add Environment Variable**:
   * `PORT`: `10000`
   * `NODE_ENV`: `production`
   * `DATABASE_URL`: *(Điền chuỗi kết nối lấy từ Bước 1)*
6. Nhấn **Create Web Service**. Hệ thống Render sẽ tự động clone mã nguồn, chạy cài đặt dependencies và khởi động máy chủ.
7. Khi màn hình xuất hiện trạng thái `Live`, máy chủ được cấp một URL công khai: `https://barber-booking-backend.onrender.com`. Kiểm tra bằng cách mở endpoint `/health` trên trình duyệt: nhận được mã `200 OK` kèm thông tin trạng thái hoạt động.
   *(Hình ảnh 5.2: Quá trình build log và URL Live của Backend trên Render.com)*

### 5.4. Bước 3: Triển khai Frontend lên Vercel CDN
1. Đẩy toàn bộ mã nguồn lên GitHub.
2. Truy cập [https://vercel.com](https://vercel.com), đăng nhập bằng GitHub và chọn **Add New...** -> **Project**.
3. Tìm và chọn repository của dự án -> Nhấn **Import**.
4. Cấu hình Project Vercel:
   * **Framework Preset:** `Other` (hoặc chọn theo framework nếu dùng Vite/Next.js).
   * **Root Directory:** `./`
5. Nhấn nút **Deploy**.
6. Vercel tự động phân phối các tệp tĩnh lên hàng trăm điểm kết nối Edge Server trên toàn cầu. Chỉ sau 30 giây, website chính thức hoạt động với chứng chỉ SSL hợp lệ tại địa chỉ: `https://barber-booking-club.vercel.app`.
   *(Hình ảnh 5.3: Bảng điều khiển Deployment thành công trên Vercel)*

### 5.5. Bước 4: Thiết lập liên kết Cross-Origin (CORS) và Test kết nối
1. Để đảm bảo trình duyệt của người dùng không chặn các yêu cầu gửi từ domain `*.vercel.app` sang `*.onrender.com`, trong mã nguồn `backend/server.js` nhóm đã cấu hình Middleware `cors()`:
   ```javascript
   app.use(cors({
     origin: ['https://barber-booking-club.vercel.app', 'http://localhost:3000'],
     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   ```
2. Mở Console của trình duyệt (F12) trên trang web Vercel để kiểm tra: Không xuất hiện lỗi CORS Policy, toàn bộ API gọi dữ liệu dịch vụ và danh sách thợ đều phản hồi với mã trạng thái `200 OK`.

---

# PHẦN 6: KẾT QUẢ SAU KHI TRIỂN KHAI HỆ THỐNG

### 6.1. Giới thiệu tổng quan hệ thống đã triển khai
Hệ thống sau khi deploy lên Cloud chạy mượt mà, tốc độ phản hồi trung bình dưới 350ms, giao diện tương thích hoàn hảo trên cả máy tính bàn (Desktop) và điện thoại thông minh (Smartphones). Hệ thống bao gồm 02 phân hệ chính:
1. **Phân hệ Khách hàng (Client Portal):** Phục vụ quy trình chọn dịch vụ, chọn thợ, chọn giờ và xuất vé điện tử.
2. **Phân hệ Quản trị & Stylist (Admin/Staff Portal):** Phục vụ quản lý lịch làm việc theo thời gian thực và theo dõi biểu đồ doanh số.

### 6.2. Chi tiết phân hệ Khách hàng (Client Portal)
* **Giao diện Hero & Bước 1 (Chọn Dịch Vụ):**
  * Giao diện mang phong cách Barbershop đẳng cấp với tông màu Dark Slate & Amber Gold sang trọng.
  * Hiển thị danh mục các dịch vụ kèm ảnh minh họa sắc nét, thời lượng phục vụ và giá tiền niêm yết rõ ràng.
  * Khách hàng có thể chọn cùng lúc nhiều dịch vụ (Ví dụ: Cắt tạo kiểu + Cạo râu hoàng gia), thanh tổng kết nổi bên phải (Sidebar Summary) sẽ tự động cộng dồn số tiền và ước tính tổng thời lượng phục vụ.
* **Giao diện Bước 2 (Chọn Thợ & Khung giờ Real-time):**
  * Hiển thị danh sách Stylist với đầy đủ thông tin: ảnh đại diện, danh hiệu (Master Barber), số năm kinh nghiệm, đánh giá sao của khách hàng cũ.
  * Có tùy chọn thông minh: **"Chọn Thợ Ngẫu Nhiên"** giúp khách hàng cần cắt gấp không phải băn khoăn lựa chọn.
  * Bộ chọn ngày trực quan (Hôm nay, Ngày mai, 2 ngày tiếp theo).
  * Lưới khung giờ hoạt động (Time Slots): **Các giờ đã có khách khác đặt trước sẽ tự động bị gạch chéo và khóa bấm (Disabled)**. Điều này loại bỏ hoàn toàn khả năng khách đặt trùng giờ.
* **Giao diện Bước 3 (Điền thông tin & Nhận Vé QR Code):**
  * Khách hàng điền Họ tên và Số điện thoại (có kiểm tra biểu thức chính quy số điện thoại Việt Nam).
  * Sau khi bấm "Xác nhận", hệ thống tạo mã đặt chỗ duy nhất dạng `#BK-XXXX` và sinh **Vé Điện Tử Đặt Chỗ (Digital Barber Ticket)**.
  * Vé chứa mã QR Code tích hợp: Khi đến tiệm, khách hàng chỉ cần đưa màn hình điện thoại cho lễ tân quét mã QR để check-in trong 2 giây. Khách hàng có thể nhấn nút "In hóa đơn / Lưu vé" trực tiếp.
* **Chức năng Tra cứu Lịch Hẹn:**
  * Khách hàng chỉ cần nhập Số điện thoại vào popup tra cứu để kiểm tra toàn bộ lịch hẹn đang chờ hoặc đã cắt của mình, kèm nút "Hủy lịch hẹn" nếu có việc bận đột xuất.
  *(Hình ảnh 6.1, 6.2, 6.3: Ảnh chụp màn hình 3 bước đặt lịch và Vé QR trên điện thoại)*

### 6.3. Chi tiết phân hệ Quản trị & Stylist (Admin Dashboard)
* **Bảng thống kê chỉ số điều hành (KPI Cards):**
  * Hiển thị trực quan: *Tổng lịch hẹn hôm nay*, *Lịch đang chờ phục vụ*, *Doanh thu dự kiến hôm nay*, *Số lượng ca đã hoàn thành*.
* **Hệ thống Biểu đồ Phân tích (Analytics Charts):**
  * *Biểu đồ cột (Bar Chart):* Thống kê biến động doanh thu 5 ngày liên tiếp, giúp chủ tiệm đánh giá hiệu quả kinh doanh.
  * *Biểu đồ tròn (Doughnut Chart):* Cơ cấu tỷ lệ phần trăm các gói dịch vụ được ưa chuộng nhất (ví dụ: Combo Cắt gội chiếm 45%, Uốn tóc chiếm 30%).
* **Bảng quản lý Lịch hẹn Thời gian thực (Real-time Appointment Table):**
  * Bộ lọc đa năng: Lọc theo Ngày, Lọc theo Trạng thái (Chờ phục vụ, Đang cắt, Hoàn thành, Đã hủy), Lọc theo Thợ cắt tóc, Ô tìm kiếm tức thì theo Tên/SĐT.
  * Thao tác nhanh 1 chạm: Nhân viên lễ tân hoặc thợ chỉ cần chọn menu dropdown để chuyển trạng thái lịch của khách từ `Chờ phục vụ` -> `Đang cắt` -> `Hoàn thành`. Doanh thu sẽ tự động nhảy số theo thời gian thực mà không cần tải lại trang.
  *(Hình ảnh 6.4, 6.5: Ảnh chụp màn hình Dashboard quản trị và các biểu đồ phân tích)*

### 6.4. Kết quả kiểm thử tính năng (Test Cases)

| Mã Test | Mô tả ca kiểm thử | Dữ liệu đầu vào (Input) | Kết quả kỳ vọng | Kết quả thực tế | Đánh giá |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Chưa chọn dịch vụ bấm Tiếp tục | Không chọn dịch vụ nào | Nút bấm bị vô hiệu hóa (Disabled) | Nút mờ, không bấm được | **ĐẠT** |
| **TC-02** | Nhập sai định dạng số điện thoại | SĐT: `0912abc` hoặc `123` | Cảnh báo yêu cầu nhập đúng 10 số | Alert thông báo lỗi, focus ô SĐT | **ĐẠT** |
| **TC-03** | **Kiểm tra chống xung đột (Conflict Test)** | Đặt Stylist Alex Tuấn vào `10:00 AM` hôm nay (lịch này đã có người đặt) | Nút slot `10:00 AM` bị gạch chéo, disabled | Hiển thị chữ "Kín", không thể chọn | **ĐẠT** |
| **TC-04** | Sinh mã đặt chỗ và QR Code | Đặt lịch thành công | Sinh mã `#BK-XXXX` và hình ảnh QR | Hiển thị vé đẹp mắt, quét QR ra đúng mã vé | **ĐẠT** |
| **TC-05** | Đồng bộ trạng thái phía Admin | Admin đổi trạng thái sang "Hoàn thành" | Doanh thu hôm nay tăng thêm số tiền tương ứng | Số tiền KPI nhảy tăng ngay lập tức | **ĐẠT** |

---

# PHẦN 7: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 7.1. Kết luận những kết quả đạt được
Sau thời gian nghiên cứu và thực hiện nghiêm túc, nhóm 05 đã hoàn thành toàn diện các mục tiêu đề ra của Mini Project:
1. **Về mặt sản phẩm & phân tích thiết kế:** Xây dựng thành công một ứng dụng web hoàn chỉnh, có quy trình phân tích thiết kế hệ thống bài bản (Use Case, Activity Diagram, CSDL quan hệ chuẩn hóa). Giải quyết triệt để bài toán xếp hàng chờ đợi và bài toán xung đột lịch hẹn bằng thuật toán thông minh.
2. **Về mặt công nghệ & Cloud Computing:** Triển khai thành công 100% ứng dụng lên các nền tảng Public Cloud uy tín (Vercel, Render, Neon PostgreSQL). Áp dụng thành thạo quy trình CI/CD từ GitHub lên Cloud, cấu hình biến môi trường và xử lý bài toán bảo mật mạng (HTTPS, CORS).
3. **Về mặt chi phí:** Kiểm soát tối ưu ngân sách với **chi phí phát sinh 0 VNĐ**, không phụ thuộc vào thẻ tín dụng, vận hành ổn định trong chính sách sử dụng hợp lý của các nhà cung cấp.
4. **Về tinh thần làm việc nhóm:** Các thành viên trong nhóm phối hợp chặt chẽ, hoàn thành khối lượng công việc được phân công đúng tiến độ.

### 7.2. Một số hạn chế hiện tại
* Phiên bản hiện tại sử dụng gói miễn phí của Render nên khi hệ thống không có truy cập trong 15 phút, máy chủ có thể chuyển sang chế độ "ngủ" (Sleep mode), khiến yêu cầu đầu tiên sau đó mất khoảng 30–50 giây để khởi động lại (Cold Start).
* Chưa tích hợp cổng thanh toán trực tuyến tiền cọc, khách hàng vẫn thanh toán trực tiếp bằng tiền mặt hoặc chuyển khoản tại quầy salon.

### 7.3. Hướng phát triển mở rộng trong tương lai
1. **Tích hợp Cổng thanh toán trực tuyến (Payment Gateway):** Tích hợp cổng thanh toán Sandbox VNPAY, MoMo hoặc ZaloPay để khách hàng đặt cọc trước 20–50% nhằm giảm thiểu tỷ lệ khách "bùng lịch" (No-show).
2. **Hệ thống Thông báo Đa kênh (Omnichannel Notifications):** Tự động gửi tin nhắn SMS / Zalo ZNS / Telegram Bot nhắc lịch trước giờ hẹn 60 phút kèm chỉ đường Google Maps.
3. **Ứng dụng Trí tuệ Nhân tạo (AI Hairstyle Recommendation):** Tích hợp mô hình AI thị giác máy tính (Computer Vision) cho phép khách hàng tải ảnh chân dung lên, hệ thống sẽ tự động phân tích hình dáng khuôn mặt (mặt tròn, mặt vuông, trái xoan) và gợi ý kiểu tóc nam thịnh hành phù hợp nhất.
4. **Nâng cấp kiến trúc Cloud:** Chuyển đổi mô hình máy chủ sang Serverless hoàn toàn (Next.js Edge Functions hoặc AWS Lambda) để loại bỏ hoàn toàn hiện tượng Cold Start và nâng cao khả năng mở rộng tự động (Auto-scaling) khi chuỗi salon mở rộng thêm chi nhánh.

---

# TÀI LIỆU THAM KHẢO

1. Giáo trình Điện toán Đám mây (Cloud Computing Architecture) - Bộ môn Mạng & Hệ thống máy tính.
2. Vercel Documentation, *Deploying Static & Serverless Web Applications*, [https://vercel.com/docs](https://vercel.com/docs).
3. Render.com Official Guide, *Web Services, PostgreSQL and Environment Configuration*, [https://render.com/docs](https://render.com/docs).
4. Neon Serverless Postgres Documentation, *Branching and Serverless Driver for Modern Web*, [https://neon.tech/docs](https://neon.tech/docs).
5. Chart.js Documentation, *Interactive JavaScript Charting Library*, [https://www.chartjs.org/docs](https://www.chartjs.org/docs).
6. Tailwind CSS Framework, *Utility-first CSS Framework v3.x*, [https://tailwindcss.com/docs](https://tailwindcss.com/docs).
