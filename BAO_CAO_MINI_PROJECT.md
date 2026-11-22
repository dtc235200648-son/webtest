# BỘ GIÁO DỤC VÀ ĐÀO TẠO
## TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN & TRUYỀN THÔNG (ICTU)
### KHOA CÔNG NGHỆ THÔNG TIN & KỸ THUẬT PHẦN MỀM
***

# BÁO CÁO BÀI TẬP LỚN / MINI PROJECT MÔN HỌC
## HỌC PHẦN: ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING) & THIẾT KẾ HỆ THỐNG

---

### ĐỀ TÀI:
# NGHIÊN CỨU, THIẾT KẾ VÀ TRIỂN KHAI HỆ THỐNG ĐẶT LỊCH HẸN CẮT TÓC & QUẢN TRỊ SALON TRỰC TUYẾN TRÊN NỀN TẢNG PUBLIC CLOUD
### *(SMART BARBER APPOINTMENT BOOKING & SALON MANAGEMENT SYSTEM)*

***

**BẢNG THÔNG TIN HÀNH CHÍNH ĐỒ ÁN:**

* **Giảng viên hướng dẫn:** Bộ môn Công nghệ Phần mềm & Điện toán Đám mây
* **Nhóm sinh viên thực hiện:** Nhóm 05
* **Lớp:** Kỹ thuật Phần mềm / Công nghệ Thông tin Khóa 23
* **Khoa:** Công nghệ Thông tin & Hệ thống Thông tin
* **Trường:** Đại học Công nghệ Thông tin & Truyền thông - Đại học Thái Nguyên
* **Năm học:** 2026 - 2027

---

## BẢNG ĐÁNH GIÁ VÀ XÁC NHẬN CỦA GIẢNG VIÊN HƯỚNG DẪN

| Tiêu chí đánh giá | Điểm tối đa | Điểm đánh giá | Ghi chú / Nhận xét của Giảng viên |
| :--- | :---: | :---: | :--- |
| **1. Hình thức & Cấu trúc Báo cáo** (Đúng quy chuẩn, trình bày khoa học, sơ đồ rõ ràng) | 2.0 | | |
| **2. Phân tích & Thiết kế hệ thống** (Use Case, ERD chuẩn 3NF, Thuật toán chống xung đột) | 2.5 | | |
| **3. Ứng dụng Hạ tầng Public Cloud** (Kiến trúc phân tầng, CI/CD, Neon DB, Render, Vercel) | 2.5 | | |
| **4. Sản phẩm hoàn thiện & Demo tính năng** (Giao diện chuẩn UI/UX, đặt lịch, QR code, Admin) | 2.0 | | |
| **5. Tinh thần làm việc nhóm & Trả lời vấn đáp** (Báo cáo lưu loát, nắm vững kiến trúc) | 1.0 | | |
| **TỔNG ĐIỂM ĐỒ ÁN** | **10.0** | | |

*Thái Nguyên, ngày ..... tháng ..... năm 2026*  
**GIẢNG VIÊN HƯỚNG DẪN**  
*(Ký và ghi rõ họ tên)*

---

## LỜI CẢM ƠN

Lời đầu tiên, nhóm nghiên cứu xin gửi lời cảm ơn chân thành và sâu sắc nhất tới quý Thầy, Cô giáo trong **Bộ môn Công nghệ Phần mềm và Điện toán Đám mây** - Trường Đại học Công nghệ Thông tin & Truyền thông (ICTU). Trong suốt quá trình học tập và nghiên cứu học phần, Thầy/Cô đã tận tình truyền đạt những nền tảng kiến thức vô cùng quý báu về kiến trúc hệ thống phân tán, các mô hình dịch vụ đám mây (IaaS, PaaS, SaaS, Serverless), quy trình thiết kế cơ sở dữ liệu và kỹ năng xây dựng ứng dụng web hiện đại.

Những kiến thức và lời chỉ dẫn tận tâm của Thầy/Cô không chỉ là kim chỉ nam giúp nhóm định hình và hoàn thành bài tập lớn này đúng tiến độ, mà còn là hành trang kiến thức vững chắc cho quá trình thực tập tốt nghiệp và công việc kỹ sư phần mềm sau này.

Nhóm cũng xin chân thành cảm ơn các bạn sinh viên trong lớp đã luôn hỗ trợ, thảo luận và đóng góp nhiều ý kiến phản biện khách quan giúp nhóm hoàn thiện sản phẩm ngày một tốt hơn. Mặc dù đã nỗ lực hết sức với tinh thần học hỏi cao nhất, song do hạn chế về mặt thời gian và kinh nghiệm thực tế, báo cáo khó tránh khỏi những thiếu sót nhất định. Nhóm kính mong nhận được những nhận xét, góp ý quý báu từ Thầy/Cô để đề tài được hoàn thiện hơn nữa.

*Nhóm sinh viên thực hiện - Nhóm 05*

---

## LỜI CAM ĐOAN

Nhóm 05 xin cam đoan rằng:
1. Đồ án **"Nghiên cứu, thiết kế và triển khai Hệ thống Đặt lịch Hẹn Cắt tóc & Quản trị Salon trực tuyến trên nền tảng Public Cloud"** là công trình nghiên cứu và thực hiện độc lập của các thành viên trong nhóm dưới sự định hướng của Giảng viên hướng dẫn.
2. Toàn bộ mã nguồn (Source Code), cấu hình hạ tầng đám mây (Cloud Infrastructure), số liệu thống kê, bảng biểu và nội dung tài liệu được trình bày trong báo cáo này hoàn toàn do nhóm nghiên cứu, thiết kế, triển khai thực nghiệm và kiểm thử thực tế.
3. Các tài liệu, công cụ mã nguồn mở và thư viện tham khảo bên ngoài đều được trích dẫn nguồn gốc xuất xứ rõ ràng, trung thực theo đúng quy chuẩn trích dẫn học thuật của nhà trường.
4. Nhóm xin chịu hoàn toàn trách nhiệm trước Bộ môn và Nhà trường nếu có bất kỳ sự gian lận hay vi phạm quy chế học thuật nào xảy ra.

*Thái Nguyên, ngày ..... tháng ..... năm 2026*  
**ĐẠI DIỆN NHÓM TRƯỞNG**  
*(Ký và ghi rõ họ tên)*

---

## DANH MỤC THUẬT NGỮ VÀ TỪ VIẾT TẮT

| Viết tắt | Tên tiếng Anh đầy đủ | Giải nghĩa trong đề tài |
| :--- | :--- | :--- |
| **Cloud Computing** | Cloud Computing | Công nghệ điện toán đám mây cung cấp tài nguyên theo nhu cầu qua Internet |
| **IaaS** | Infrastructure as a Service | Dịch vụ cung cấp hạ tầng phần cứng ảo hóa (Compute, Storage, Network) |
| **PaaS** | Platform as a Service | Dịch vụ cung cấp nền tảng môi trường thực thi và triển khai ứng dụng |
| **FaaS / Serverless**| Function as a Service | Mô hình kiến trúc máy chủ phi tập trung, chỉ tính tiền khi có hàm thực thi |
| **CI/CD** | Continuous Integration / Continuous Deployment | Quy trình tự động tích hợp mã nguồn và triển khai ứng dụng liên tục |
| **REST API** | Representational State Transfer Application Programming Interface | Giao thức chuẩn kiến trúc giao tiếp dữ liệu giữa Frontend và Backend |
| **CORS** | Cross-Origin Resource Sharing | Cơ chế chia sẻ tài nguyên giữa các domain khác nguồn trên trình duyệt |
| **CDN** | Content Delivery Network | Mạng lưới máy chủ phân phối nội dung tĩnh tối ưu độ trễ toàn cầu |
| **SSL / TLS** | Secure Sockets Layer / Transport Layer Security | Giao thức mã hóa an toàn dữ liệu truyền tải trên nền HTTPS |
| **ERD** | Entity Relationship Diagram | Sơ đồ biểu diễn quan hệ thực thể trong cơ sở dữ liệu quan hệ |
| **3NF** | Third Normal Form | Chuẩn hóa cơ sở dữ liệu dạng chuẩn 3 chống dư thừa dữ liệu |
| **UI / UX** | User Interface / User Experience | Thiết kế Giao diện người dùng và Trải nghiệm người dùng |
| **WCAG** | Web Content Accessibility Guidelines | Bộ tiêu chuẩn quốc tế về khả năng tiếp cận nội dung website |
| **WBS** | Work Breakdown Structure | Ma trận phân rã cấu trúc công việc trong quản lý dự án |
| **RACI** | Responsible - Accountable - Consulted - Informed | Ma trận phân định trách nhiệm thành viên trong nhóm |
| **KPI** | Key Performance Indicator | Chỉ số đo lường hiệu quả hoạt động cốt lõi của salon |

---

## DANH MỤC BẢNG BIỂU

* **Bảng 1.1:** Bảng đặc tả yêu cầu chức năng hệ thống (Functional Requirements)
* **Bảng 1.2:** Bảng đặc tả yêu cầu phi chức năng (Non-functional Requirements)
* **Bảng 1.3:** Từ điển dữ liệu bảng `stylists` (Thợ cắt tóc)
* **Bảng 1.4:** Từ điển dữ liệu bảng `services` (Dịch vụ salon)
* **Bảng 1.5:** Từ điển dữ liệu bảng `appointments` (Lịch hẹn đặt chỗ)
* **Bảng 1.6:** Từ điển dữ liệu bảng `appointment_services` (Liên kết lịch hẹn - dịch vụ)
* **Bảng 2.1:** Bảng so sánh các dịch vụ Public Cloud được lựa chọn
* **Bảng 2.2:** Bảng định mức tài nguyên và chính sách Free-tier
* **Bảng 3.1:** Ma trận phân công công việc chi tiết (WBS Matrix)
* **Bảng 3.2:** Ma trận phân định trách nhiệm RACI
* **Bảng 4.1:** Kế hoạch tiến độ chi tiết theo chu trình Agile/Scrum
* **Bảng 6.1:** Bảng tổng hợp kịch bản kiểm thử tính năng (Test Cases)

---

## DANH MỤC HÌNH VẼ VÀ BIỂU ĐỒ

* **Hình 1.1:** Sơ đồ khối tổng quan luồng Input - Xử lý - Output
* **Hình 1.2:** Biểu đồ Use Case tổng quát của hệ thống (Actors & Use Cases)
* **Hình 1.3:** Biểu đồ tuần tự (Sequence Diagram) luồng Đặt lịch và Kiểm tra Xung đột
* **Hình 1.4:** Biểu đồ hoạt động (Activity Diagram) quy trình Đặt lịch trực tuyến
* **Hình 1.5:** Biểu đồ quan hệ thực thể (ERD - Entity Relationship Diagram)
* **Hình 5.1:** Kiến trúc triển khai tổng thể trên Cloud (Cloud Deployment Topology)
* **Hình 6.1:** Giao diện Trang chủ và Bước 1 (Chọn gói dịch vụ cắt/combo)
* **Hình 6.2:** Giao diện Bước 2 (Chọn thợ cắt tóc và Khung giờ hoạt động trực quan)
* **Hình 6.3:** Giao diện Bước 3 (Điền thông tin và Vé điện tử Digital Barber Ticket với QR)
* **Hình 6.4:** Giao diện Modal Tra cứu lịch hẹn bằng số điện thoại
* **Hình 6.5:** Giao diện Dashboard Quản trị và các biểu đồ phân tích kinh doanh

---

# MỤC LỤC TỔNG QUÁT

* **LỜI CẢM ƠN**
* **LỜI CAM ĐOAN**
* **DANH MỤC THUẬT NGỮ VÀ TỪ VIẾT TẮT**
* **DANH MỤC BẢNG BIỂU & HÌNH VẼ**
* **LỜI MỞ ĐẦU**
* **PHẦN 1: MÔ TẢ BÀI TOÁN VÀ VẤN ĐỀ NGHIÊN CỨU GIẢI QUYẾT**
  * 1.1. Bối cảnh thực tế và lý do chọn đề tài
  * 1.2. Xác định yêu cầu bài toán (Input, Output, Phạm vi, FR & NFR)
  * 1.3. Nội hàm nghiệp vụ và Thuật toán chống xung đột lịch hẹn (Conflict Resolution Algorithm)
  * 1.4. Phân tích thiết kế hệ thống (Use Case, Sequence Diagram, Activity Diagram, ERD, Data Dictionary)
  * 1.5. Tiêu chuẩn thiết kế giao diện UI/UX chuyên nghiệp (Hallmark Tokens & UI/UX Pro Max)
* **PHẦN 2: DỊCH VỤ PUBLIC CLOUD ĐƯỢC LỰA CHỌN**
  * 2.1. Tiêu chí lựa chọn dịch vụ Cloud cho đề tài
  * 2.2. Tổng quan và so sánh các nhà cung cấp (Vercel, Render.com, Neon PostgreSQL)
  * 2.3. Khảo sát giao diện và tính năng cốt lõi sau khi đăng nhập
  * 2.4. Đánh giá tính hợp lý, chi phí (Free-tier) và khả năng kiểm soát thanh toán
* **PHẦN 3: PHÂN CÔNG CÔNG VIỆC TRONG NHÓM**
  * 3.1. Cơ cấu nhóm và quy chế làm việc
  * 3.2. Ma trận phân công công việc chi tiết (WBS & RACI Matrix)
  * 3.3. Đánh giá mức độ đóng góp của từng thành viên
* **PHẦN 4: KẾ HOẠCH DỰ KIẾN HOÀN THÀNH MINI PROJECT**
  * 4.1. Quy trình phát triển phần mềm theo mô hình Agile/Scrum
  * 4.2. Kế hoạch tiến độ chi tiết theo từng tuần (Gantt Chart)
  * 4.3. Các mốc đánh giá (Milestones) và kết quả bàn giao
* **PHẦN 5: CÁC BƯỚC CHI TIẾT TRIỂN KHAI (DEPLOY) LÊN PUBLIC CLOUD**
  * 5.1. Kiến trúc triển khai tổng thể trên Cloud (Decoupled Multi-tier Architecture)
  * 5.2. Bước 1: Khởi tạo và thiết lập CSDL Cloud trên Neon.tech / PostgreSQL
  * 5.3. Bước 2: Đóng gói và Deploy Backend REST API lên Render.com
  * 5.4. Bước 3: Triển khai Client Web App lên Vercel Edge Network
  * 5.5. Bước 4: Thiết lập liên kết Cross-Origin (CORS), Biến môi trường và chứng chỉ SSL/TLS
* **PHẦN 6: KẾT QUẢ SAU KHI TRIỂN KHAI HỆ THỐNG**
  * 6.1. Giới thiệu tổng quan hệ thống đã triển khai
  * 6.2. Giao diện và luồng hoạt động phân hệ Khách hàng (Client Portal)
  * 6.3. Giao diện và luồng hoạt động phân hệ Quản trị & Stylist (Admin Dashboard)
  * 6.4. Kết quả kiểm thử tính năng (Test Cases & Conflict Testing)
* **PHẦN 7: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN**
  * 7.1. Kết luận những kết quả đạt được
  * 7.2. Hạn chế hiện tại của đề tài
  * 7.3. Hướng phát triển mở rộng trong tương lai
* **TÀI LIỆU THAM KHẢO**
* **PHỤ LỤC MÃ NGUỒN CỐT LÕI (APPENDIX)**

---

# LỜI MỞ ĐẦU

### 1. Tính cấp thiết của đề tài
Trong kỷ nguyên Chuyển đổi số (Digital Transformation), ngành dịch vụ làm đẹp và chăm sóc ngoại hình nam giới (Barbershop, Men Hair Salon) đang chứng kiến sự bùng nổ mạnh mẽ tại Việt Nam. Không còn đơn thuần là việc cắt tóc truyền thống, khách hàng hiện đại coi việc đến salon là trải nghiệm chăm sóc bản thân, thư giãn và định hình phong cách cá nhân.

Tuy nhiên, khảo sát thực tế tại các tiệm salon truyền thống và chuỗi barber vừa và nhỏ cho thấy quy trình vận hành vẫn còn phụ thuộc rất lớn vào các phương thức thủ công:
* **Khách hàng** phải xếp hàng chờ đợi từ 30 đến 60 phút vào giờ cao điểm, hoặc đặt lịch qua nhắn tin/gọi điện thoại nhưng nhân viên quên ghi sổ, dẫn đến hiện tượng trùng thợ, trùng giờ (double-booking).
* **Stylist (Thợ cắt tóc)** không nắm bắt được trước danh sách khách hàng trong ca làm việc, phân bổ thời gian không đồng đều giữa các ca cắt.
* **Chủ tiệm (Admin/Manager)** thiếu các công cụ số hóa để theo dõi doanh thu thực tế, đánh giá năng suất từng nhân viên và kiểm soát lượng khách theo thời gian thực.

Mặt khác, sự phát triển vượt bậc của công nghệ **Điện toán Đám mây (Cloud Computing)** với các nền tảng PaaS (Platform as a Service) và Serverless hiện đại (như Vercel, Render.com, Neon Database) cho phép các kỹ sư phần mềm triển khai hệ thống quy mô doanh nghiệp chỉ trong vài phút, tận dụng mạng lưới phân phối toàn cầu (Global Edge CDN), tự động hóa quy trình CI/CD từ GitHub mà hoàn toàn **không phát sinh chi phí ban đầu (0 VNĐ)** và không đòi hỏi quản trị hạ tầng phần cứng phức tạp.

Xuất phát từ yêu cầu thực tiễn và công nghệ nêu trên, nhóm nghiên cứu đã lựa chọn đề tài: **"Nghiên cứu, thiết kế và triển khai Hệ thống Đặt lịch Hẹn Cắt tóc & Quản trị Salon trực tuyến trên nền tảng Public Cloud (Smart Barber Booking System)"**.

### 2. Mục tiêu nghiên cứu của đề tài
1. **Mục tiêu học thuật:** Vận dụng toàn diện kiến thức học phần Điện toán Đám mây và Thiết kế Hệ thống; nắm vững quy trình phân tích ca sử dụng (Use Case), thiết kế cơ sở dữ liệu quan hệ chuẩn 3NF, xây dựng kiến trúc RESTful API phân tách độc lập (Decoupled Architecture) và cấu hình mạng đám mây.
2. **Mục tiêu kỹ thuật:** Xây dựng thành công thuật toán chống xung đột lịch hẹn theo thời gian thực (Time-slot Conflict Resolution Algorithm); sinh vé điện tử thông minh tích hợp mã QR Code check-in; áp dụng triệt để bộ quy chuẩn thiết kế giao diện hiện đại chống rập khuôn (Hallmark Anti-AI-slop và UI/UX Pro Max).
3. **Mục tiêu thực tiễn:** Triển khai thành công 100% hệ thống lên môi trường Public Cloud công khai trên Internet với chi phí duy trì 0 VNĐ, thời gian phản hồi API nhanh dưới 350ms, cung cấp sản phẩm thực tế có thể áp dụng trực tiếp cho các mô hình Hair Salon, Barbershop hiện nay.

### 3. Đối tượng và phạm vi nghiên cứu
* **Đối tượng nghiên cứu:** Quy trình đặt lịch hẹn dịch vụ cắt tóc; mô hình phân bổ thợ và khung giờ; các dịch vụ Public Cloud hiện đại (Vercel, Render, Neon PostgreSQL).
* **Phạm vi hệ thống:** Ứng dụng Web Responsive (tối ưu Desktop và Mobile Web), gồm phân hệ Khách hàng đặt lịch hẹn & tra cứu vé, và phân hệ Quản trị viên theo dõi tiến độ, điều phối lịch hẹn và phân tích doanh thu.

---

# PHẦN 1: MÔ TẢ BÀI TOÁN VÀ VẤN ĐỀ NGHIÊN CỨU GIẢI QUYẾT

### 1.1. Bối cảnh thực tế và lý do chọn đề tài
Khảo sát thực tế tại các tiệm cắt tóc nam hiện đại cho thấy những nỗi đau (pain points) điển hình:
1. **Về phía khách hàng:** Thời gian chờ đợi là yếu tố gây giảm sút mức độ hài lòng nghiêm trọng nhất. Khách hàng mong muốn chủ động chọn Stylist "ruột" mà mình tin tưởng, lựa chọn chính xác khung giờ rảnh của bản thân và biết rõ giá tiền trước khi tới tiệm.
2. **Về phía thợ kéo (Stylist):** Thợ thường xuyên bị động, rơi vào cảnh "lúc rảnh rỗi ngồi chơi, lúc đông khách làm không kịp thở". Việc có bảng lịch hẹn trực quan giúp stylist chuẩn bị trước tâm lý, dụng cụ và công đoạn phù hợp cho từng khách hàng.
3. **Về phía chủ tiệm:** Cần số liệu thống kê trung thực, minh bạch về doanh thu ngày, doanh thu tuần và cơ cấu dịch vụ được ưa chuộng để đưa ra chiến lược kinh doanh chính xác.

### 1.2. Xác định yêu cầu bài toán (Input, Output, Phạm vi)

```
+---------------------------------------------------------------------------------------+
|                                    INPUT HỆ THỐNG                                     |
| - Khách hàng: Họ tên, Số điện thoại (10 số), Email, Dịch vụ lựa chọn, Thợ chỉ định,   |
|   Ngày hẹn, Khung giờ mong muốn, Ghi chú tóc/yêu cầu riêng.                          |
| - Quản trị viên / Thợ: Danh mục dịch vụ, Giá niêm yết, Thời lượng, Hồ sơ thợ,        |
|   Cập nhật trạng thái lịch hẹn (Chờ phục vụ, Đang cắt, Hoàn tất, Hủy).                |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                                 XỬ LÝ TRUNG TÂM (CORE)                                |
| - Xác thực dữ liệu đầu vào (Regex biểu thức chính quy SĐT Việt Nam, chống XSS).       |
| - Thuật toán phân bổ thợ rảnh & Kiểm tra xung đột khung giờ (Conflict Prevention).    |
| - Tự động tính toán tổng chi phí và thời lượng phục vụ của toàn bộ dịch vụ đã chọn.   |
| - Sinh mã định danh vé duy nhất dạng #BK-XXXX.                                        |
| - Render mã QR Code tiêu chuẩn chứa thông tin vé phục vụ check-in 2 giây tại quầy.    |
| - Cơ chế In-Memory Fallback đảm bảo hệ thống không bao giờ sập khi CSDL gián đoạn.    |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                                    OUTPUT HỆ THỐNG                                    |
| - Vé điện tử (Digital Barber Ticket) hiển thị trực tiếp với mã QR Code, thông tin thợ.|
| - Danh sách lịch hẹn đã đặt khi khách tra cứu bằng Số điện thoại.                     |
| - Bảng điều khiển Quản trị thời gian thực (Admin Dashboard) với bộ lọc đa năng.       |
| - Biểu đồ trực quan hóa doanh thu 5 ngày và tỷ lệ cơ cấu các gói dịch vụ (Chart.js).  |
+---------------------------------------------------------------------------------------+
```

#### Bảng 1.1: Đặc tả yêu cầu chức năng (Functional Requirements - FR)
| Mã FR | Tên chức năng | Tác nhân | Mô tả chi tiết |
| :---: | :--- | :---: | :--- |
| **FR-01** | Xem danh mục dịch vụ | Khách hàng | Hiển thị danh sách dịch vụ, giá tiền, thời lượng, ảnh minh họa. Hỗ trợ chọn nhiều dịch vụ cùng lúc. |
| **FR-02** | Xem danh sách Stylist | Khách hàng | Hiển thị hồ sơ thợ: tên, danh hiệu, số năm kinh nghiệm, đánh giá sao, chuyên môn sở trường. |
| **FR-03** | Chọn ngày và khung giờ | Khách hàng | Lựa chọn ngày hẹn (Hôm nay, Ngày mai, Ngày kia). Khung giờ đã có người đặt sẽ tự động khóa (Disabled). |
| **FR-04** | Đặt lịch hẹn 3 bước | Khách hàng | Điền thông tin cá nhân, xác nhận đơn đặt lịch và gửi dữ liệu lên Backend REST API. |
| **FR-05** | Nhận vé điện tử & QR | Khách hàng | Nhận vé xác nhận chứa mã `#BK-XXXX`, thông tin chi tiết và mã QR Code để quét check-in. |
| **FR-06** | Tra cứu & Hủy lịch | Khách hàng | Tra cứu danh sách lịch hẹn bằng Số điện thoại, có quyền bấm hủy lịch nếu chưa thực hiện. |
| **FR-07** | Dashboard Quản trị KPI | Admin/Stylist | Hiển thị 4 thẻ KPI: Tổng lịch, Lịch chờ, Doanh thu ước tính hôm nay, Ca hoàn thành. |
| **FR-08** | Cập nhật trạng thái lịch | Admin/Stylist | Chuyển đổi trạng thái nhanh: `Chờ phục vụ` -> `Đang cắt` -> `Hoàn thành` -> `Đã hủy`. |
| **FR-09** | Biểu đồ phân tích kinh doanh | Admin | Biểu đồ cột thể hiện biến động doanh thu 5 ngày, biểu đồ tròn cơ cấu dịch vụ. |
| **FR-10** | Lọc và tìm kiếm lịch hẹn | Admin | Lọc linh hoạt theo Ngày, theo Thợ, theo Trạng thái và tìm kiếm tức thì theo Tên/SĐT. |

#### Bảng 1.2: Đặc tả yêu cầu phi chức năng (Non-Functional Requirements - NFR)
| Mã NFR | Yêu cầu | Tiêu chí định lượng / Đo lường |
| :---: | :--- | :--- |
| **NFR-01** | **Hiệu năng (Performance)** | Thời gian phản hồi API trung bình $< 350\text{ms}$; thời gian tải trang Frontend ban đầu $< 1.2\text{s}$. |
| **NFR-02** | **Bảo mật (Security)** | 100% kết nối qua giao thức mã hóa HTTPS/SSL; kiểm soát truy cập CORS chặt chẽ; ngăn chặn SQL Injection bằng Parameterized Queries. |
| **NFR-03** | **Khả năng tiếp cận (Accessibility)** | Tuân thủ tiêu chuẩn quốc tế WCAG AA; độ tương phản màu sắc $\ge 4.5:1$; hỗ trợ phím Tab (`:focus-visible`). |
| **NFR-04** | **Tính sẵn sàng (Availability)** | Đạt mức sẵn sàng $99.9\%$ nhờ hạ tầng toàn cầu của Vercel CDN và Neon PostgreSQL Cloud. |
| **NFR-05** | **Khả năng tương thích (Responsiveness)**| Giao diện hiển thị chuẩn xác trên mọi kích thước màn hình từ Mobile (375px), Tablet (768px) đến Desktop (1440px). |

---

### 1.3. Nội hàm nghiệp vụ & Thuật toán chống xung đột lịch hẹn (Conflict Resolution Algorithm)

Vấn đề sống còn của bất kỳ hệ thống đặt lịch hẹn nào là bảo toàn tính toàn vẹn dữ liệu theo thời gian thực:
> **"Tại một thời điểm xác định ($T$), một Stylist ($S$) chỉ có thể phục vụ duy nhất một khách hàng ($C$)."**

Nếu hai khách hàng cùng đặt một thợ vào cùng một khung giờ, hệ thống bắt buộc phải giải quyết triệt để bài toán Race Condition và ngăn chặn hoàn toàn việc ghi nhận lịch hẹn thứ hai.

#### 1.3.1. Mô hình toán học kiểm tra xung đột
Giả sử tập hợp tất cả các lịch hẹn hiện hữu trong cơ sở dữ liệu là $A = \{a_1, a_2, ..., a_m\}$, trong đó mỗi lịch hẹn $a$ mang các thuộc tính:
$$a = \langle \text{stylist\_id}, \text{date}, \text{time}, \text{status} \rangle$$
Khi một yêu cầu đặt lịch mới được gửi đến với bộ thông số $\langle S_{req}, D_{req}, T_{req} \rangle$, hàm kiểm tra xung đột logic $\text{Conflict}$ được định nghĩa như sau:

$$\text{Conflict}(S_{req}, D_{req}, T_{req}) = \exists a \in A : \left( a.\text{stylist\_id} = S_{req} \land a.\text{date} = D_{req} \land a.\text{time} = T_{req} \land a.\text{status} \neq \text{'cancelled'} \right)$$

* Nếu $\text{Conflict} = \text{True}$: Khung giờ này **đã bị chiếm dụng**, hệ thống trả về mã lỗi HTTP `409 Conflict`.
* Nếu $\text{Conflict} = \text{False}$: Khung giờ **hợp lệ**, tiến hành ghi nhận bản ghi mới vào CSDL.

#### 1.3.2. Thuật toán phân bổ tự động khi khách chọn "Thợ ngẫu nhiên (Any Stylist)"
Trường hợp khách hàng không chỉ định thợ cụ thể mà chọn phương án phân bổ ngẫu nhiên, hệ thống sẽ tự động tìm kiếm thợ rảnh đầu tiên theo thuật toán:

```
Thuật toán: AutoAssignStylist(D_req, T_req, StylistList, Appointments)
Đầu vào: Ngày D_req, Giờ T_req, Danh sách thợ StylistList = {S_1, S_2, ..., S_n}, Danh sách lịch Appointments
Đầu ra: Stylist được chỉ định S_assigned hoặc Thông báo hết chỗ

1. Khởi tạo S_assigned = NULL
2. Duyệt qua từng thợ S_i trong StylistList (sắp xếp theo số lượng ca trong ngày tăng dần để cân bằng tải):
     a. Kiểm tra isBusy = EXISTS(a in Appointments WHERE a.stylist_id == S_i.id 
                                                  AND a.date == D_req 
                                                  AND a.time == T_req 
                                                  AND a.status != 'cancelled')
     b. Nếu isBusy == FALSE:
          S_assigned = S_i
          BREAK (Thoát vòng lặp)
3. Nếu S_assigned != NULL:
     Trả về S_assigned và cho phép tiếp tục đặt lịch
   Ngược lại:
     Trả về Lỗi "Tất cả thợ đều đã kín lịch trong khung giờ này, vui lòng chọn giờ khác!"
```

**Đánh giá độ phức tạp thuật toán:**
* Độ phức tạp thời gian: $O(N \times M)$ trong đó $N$ là số lượng thợ ($\approx 3 - 10$) và $M$ là số lượng lịch hẹn trong ngày ($\approx 20 - 50$). Nhờ có chỉ mục `CREATE INDEX idx_appointments_conflict ON appointments(stylist_id, appointment_date, start_time, status);` trên PostgreSQL, thời gian truy vấn trên CSDL thực tế giảm xuống mức $O(\log M)$, thời gian thực thi chỉ mất $\approx 5\text{ms}$.
* Độ phức tạp không gian: $O(1)$ bộ nhớ phụ trợ.

---

### 1.4. Phân tích thiết kế hệ thống

#### 1.4.1. Biểu đồ Use Case tổng quát
Hệ thống phân định rõ ranh giới giữa 03 tác nhân (Actors):

```
       +---------------------------------------------------------------+
       |             SMART BARBER APPOINTMENT BOOKING SYSTEM           |
       |                                                               |
       |   (Xem Dịch vụ & Bảng giá) <--------------------+             |
       |                                                 |             |
       |   (Đặt lịch hẹn 3 bước) <-----------------------+ [Khách Hàng]|
       |                                                 |             |
       |   (Nhận Vé & Quét Mã QR) <----------------------+             |
       |                                                 |             |
       |   (Tra cứu & Hủy lịch theo SĐT) <---------------+             |
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

#### 1.4.2. Biểu đồ tuần tự (Sequence Diagram) - Luồng Đặt lịch & Kiểm tra Xung đột

```
Khách Hàng             Frontend (Vercel)         Backend API (Render)      PostgreSQL (Neon)
    |                          |                          |                        |
    |--- 1. Chọn DV, Thợ, Giờ ->|                          |                        |
    |                          |--- 2. GET /appointments->|                        |
    |                          |       (Kiểm tra slot)    |--- 3. SELECT conflict->|
    |                          |                          |<-- 4. Trả về ds slot --|
    |                          |<- 5. Hiển thị giờ rảnh --|                        |
    |--- 6. Nhập Tên, SĐT ---->|                          |                        |
    |--- 7. Bấm Xác nhận ----->|                          |                        |
    |                          |--- 8. POST /appointments>|                        |
    |                          |       (Dữ liệu đặt)      |--- 9. BEGIN TRANSACTION|
    |                          |                          |--- 10. Check Conflict -|
    |                          |                          |--- 11. INSERT booking -|
    |                          |                          |--- 12. COMMIT -------->|
    |                          |<-- 13. 201 Created ------|                        |
    |                          |        (Mã #BK-XXXX)     |                        |
    |<- 14. Render Vé + QR ----|                          |                        |
```

#### 1.4.3. Biểu đồ hoạt động (Activity Diagram) - Quy trình Đặt lịch trực tuyến

```
(Bắt đầu) -> [Xem danh mục Dịch vụ] -> [Chọn 1 hoặc nhiều Dịch vụ]
                                                     |
                                                     v
[Chọn Stylist yêu thích] <---------------------------+
        |
        v
[Chọn Ngày hẹn] -> [Hệ thống tải danh sách khung giờ]
        |
        +-----> [Kiểm tra từng khung giờ]
                     |
                     +---> Giờ đã có khách? ---> Có ---> [Gạch chéo & Vô hiệu hóa]
                     |
                     +---> Giờ còn trống?   ---> Có ---> [Cho phép bấm chọn]
                                                              |
                                                              v
[Bấm chọn khung giờ mong muốn] <------------------------------+
        |
        v
[Nhập Họ tên & SĐT (10 số chuẩn VN)] -> [Bấm Đặt lịch]
        |
        v
[Backend kiểm tra xung đột lần cuối]
        |
        +---> Trùng lịch? ---> Báo lỗi 409 & Yêu cầu chọn lại
        |
        +---> Hợp lệ?    ---> [Sinh mã vé #BK-XXXX] -> [Tạo mã QR Code] -> [Xuất Vé Điện Tử] -> (Kết thúc)
```

#### 1.4.4. Thiết kế Cơ sở Dữ liệu Quan hệ (ERD chuẩn 3NF)
Cơ sở dữ liệu được thiết kế đạt dạng chuẩn 3 (3NF) nhằm loại bỏ hoàn toàn dư thừa dữ liệu:
* `users` ($1 - n$) `appointments`
* `stylists` ($1 - n$) `appointments`
* `appointments` ($n - m$) `services` thông qua bảng liên kết `appointment_services`

```
+-----------------------------------+               +-----------------------------------+
|              STYLISTS             |               |            APPOINTMENTS           |
+-----------------------------------+               +-----------------------------------+
| PK id: VARCHAR(50)                |1            n | PK id: VARCHAR(50)                |
|    name: VARCHAR(100)             |<--------------| FK stylist_id: VARCHAR(50)        |
|    role_title: VARCHAR(100)       |               |    customer_name: VARCHAR(100)    |
|    rating: NUMERIC(2,1)           |               |    customer_phone: VARCHAR(20)    |
|    reviews_count: INT             |               |    customer_email: VARCHAR(100)   |
|    avatar_url: TEXT               |               |    appointment_date: DATE         |
|    experience_years: VARCHAR(50)  |               |    start_time: VARCHAR(10)        |
|    specialty: TEXT                |               |    total_price: INT               |
|    is_active: BOOLEAN             |               |    total_duration: INT            |
+-----------------------------------+               |    status: VARCHAR(30)            |
                                                    |    notes: TEXT                    |
                                                    |    created_at: TIMESTAMP          |
                                                    +-----------------------------------+
                                                                      | 1
                                                                      |
                                                                      | n
+-----------------------------------+               +-----------------------------------+
|              SERVICES             |               |        APPOINTMENT_SERVICES       |
+-----------------------------------+               +-----------------------------------+
| PK id: VARCHAR(50)                |1            n | PK,FK appointment_id: VARCHAR(50) |
|    name: VARCHAR(150)             |<--------------| PK,FK service_id: VARCHAR(50)     |
|    category: VARCHAR(50)          |               |       price_at_booking: INT       |
|    price: INT                     |               +-----------------------------------+
|    duration_minutes: INT          |
|    description: TEXT              |
|    image_url: TEXT                |
|    is_active: BOOLEAN             |
+-----------------------------------+
```

#### 1.4.5. Từ điển dữ liệu chi tiết (Data Dictionary)

##### Bảng 1.3: Đặc tả bảng `stylists` (Thợ cắt tóc)
| Tên cột | Kiểu dữ liệu | Khóa | Cho phép NULL | Ràng buộc / Ý nghĩa |
| :--- | :--- | :---: | :---: | :--- |
| `id` | VARCHAR(50) | **PK** | KHÔNG | Khóa chính định danh thợ (ví dụ: `sty-1`, `sty-2`, `sty-3`) |
| `name` | VARCHAR(100) | | KHÔNG | Họ và tên thợ cắt tóc |
| `role_title` | VARCHAR(100) | | KHÔNG | Chức danh chuyên môn (Master Barber, Senior Barber...) |
| `rating` | NUMERIC(2,1) | | CÓ | Điểm đánh giá trung bình từ khách hàng (1.0 - 5.0) |
| `reviews_count` | INT | | CÓ | Tổng số lượt đánh giá của khách |
| `avatar_url` | TEXT | | KHÔNG | Đường link ảnh chân dung trên Cloud CDN |
| `experience_years` | VARCHAR(50) | | CÓ | Số năm kinh nghiệm làm nghề |
| `specialty` | TEXT | | CÓ | Thế mạnh chuyên môn (Fade, Sidepart, Uốn texture...) |
| `is_active` | BOOLEAN | | KHÔNG | Trạng thái đang làm việc (TRUE/FALSE) |

##### Bảng 1.4: Đặc tả bảng `services` (Danh mục Dịch vụ)
| Tên cột | Kiểu dữ liệu | Khóa | Cho phép NULL | Ràng buộc / Ý nghĩa |
| :--- | :--- | :---: | :---: | :--- |
| `id` | VARCHAR(50) | **PK** | KHÔNG | Khóa chính dịch vụ (ví dụ: `srv-1`, `srv-2`...) |
| `name` | VARCHAR(150) | | KHÔNG | Tên gói dịch vụ |
| `category` | VARCHAR(50) | | KHÔNG | Phân loại (Cắt tóc, Combo VIP, Uốn tóc, Nhuộm tóc...) |
| `price` | INT | | KHÔNG | Giá niêm yết (VNĐ), giá trị $\ge 0$ |
| `duration_minutes` | INT | | KHÔNG | Thời lượng ước tính phục vụ (phút) |
| `description` | TEXT | | CÓ | Mô tả chi tiết các bước trong quy trình dịch vụ |
| `image_url` | TEXT | | CÓ | Đường link ảnh minh họa dịch vụ |
| `is_active` | BOOLEAN | | KHÔNG | Trạng thái khả dụng |

##### Bảng 1.5: Đặc tả bảng `appointments` (Lịch hẹn đặt chỗ)
| Tên cột | Kiểu dữ liệu | Khóa | Cho phép NULL | Ràng buộc / Ý nghĩa |
| :--- | :--- | :---: | :---: | :--- |
| `id` | VARCHAR(50) | **PK** | KHÔNG | Mã vé đặt chỗ duy nhất dạng `#BK-XXXX` |
| `customer_name` | VARCHAR(100) | | KHÔNG | Họ tên khách hàng đặt lịch |
| `customer_phone` | VARCHAR(20) | | KHÔNG | Số điện thoại liên hệ (10 chữ số) |
| `customer_email` | VARCHAR(100) | | CÓ | Email nhận thông báo vé (tùy chọn) |
| `stylist_id` | VARCHAR(50) | **FK** | CÓ | Khóa ngoại tham chiếu tới `stylists(id)` |
| `appointment_date` | DATE | | KHÔNG | Ngày hẹn (YYYY-MM-DD) |
| `start_time` | VARCHAR(10) | | KHÔNG | Khung giờ bắt đầu (HH:mm) |
| `total_price` | INT | | KHÔNG | Tổng giá trị đơn đặt lịch (VNĐ) |
| `total_duration` | INT | | KHÔNG | Tổng thời lượng phục vụ (phút) |
| `status` | VARCHAR(30) | | KHÔNG | Trạng thái: `confirmed`, `in-progress`, `completed`, `cancelled` |
| `notes` | TEXT | | CÓ | Yêu cầu riêng của khách hàng |
| `created_at` | TIMESTAMP | | KHÔNG | Thời điểm tạo bản ghi (mặc định CURRENT_TIMESTAMP) |

##### Bảng 1.6: Đặc tả bảng `appointment_services` (Bảng liên kết Nhiều - Nhiều)
| Tên cột | Kiểu dữ liệu | Khóa | Cho phép NULL | Ràng buộc / Ý nghĩa |
| :--- | :--- | :---: | :---: | :--- |
| `appointment_id` | VARCHAR(50) | **PK, FK** | KHÔNG | Khóa ngoại tham chiếu tới `appointments(id)` (ON DELETE CASCADE) |
| `service_id` | VARCHAR(50) | **PK, FK** | KHÔNG | Khóa ngoại tham chiếu tới `services(id)` (ON DELETE RESTRICT) |
| `price_at_booking` | INT | | KHÔNG | Giá tiền dịch vụ tại thời điểm chốt lịch |

---

### 1.5. Tiêu chuẩn thiết kế giao diện UI/UX chuyên nghiệp (Hallmark & UI/UX Pro Max)

Nhóm áp dụng phương pháp thiết kế hướng người dùng (User-Centered Design) kết hợp 2 hệ thống chuẩn mực cao cấp:
1. **Quy chuẩn Hallmark Anti-AI-slop:**
   * **Design Tokens nhất quán:** Bảng màu được quản trị tập trung tại biến CSS `:root`, loại trừ hoàn toàn việc viết mã màu tùy hứng:
     * Nền chính (Deep Charcoal / Slate): `#0f172a`, `#1e293b`.
     * Màu điểm nhấn sang trọng (Amber Gold): `#d4af37`, `#b89628`.
     * Màu cảnh báo / Trạng thái: `#ef4444` (Hủy), `#10b981` (Hoàn thành), `#3b82f6` (Đang phục vụ).
   * **Chống vỡ khung hình (Layout Stability):** Áp dụng triệt để `overflow-x: clip` trên thẻ gốc, ngăn chặn 100% lỗi cuộn ngang trên điện thoại màn hình nhỏ.
   * **Hiệu năng chuyển động (Micro-interactions):** Không dùng `transition: all`, chỉ áp dụng transition trên `border-color`, `transform` và `background-color` trong khoảng thời gian lý tưởng từ $150\text{ms} - 200\text{ms}$.
2. **Quy chuẩn UI/UX Pro Max:**
   * **Tiêu chuẩn tương phản WCAG AA:** Tỷ lệ tương phản chữ trên nền luôn đạt $\ge 4.5:1$, đảm bảo người lớn tuổi hoặc người mắt kém đều đọc được rõ ràng.
   * **Vùng tương tác cảm ứng (Touch Target):** Các nút bấm khung giờ, ô chọn dịch vụ đều đạt chiều cao tối thiểu $\ge 44\text{px}$, khoảng cách đệm (padding) thoáng đãng, hạn chế tối đa việc bấm nhầm trên màn hình cảm ứng.
   * **Cặp font chữ chuẩn nhận diện thương hiệu:**
     * Font tiêu đề: **Cinzel** (Google Fonts) mang phong cách quý ông cổ điển, mạnh mẽ.
     * Font nội dung: **Inter** (Google Fonts) mang tính hiện đại, sắc nét và khả năng đọc tối ưu.

---

# PHẦN 2: DỊCH VỤ PUBLIC CLOUD ĐƯỢC LỰA CHỌN

### 2.1. Tiêu chí lựa chọn dịch vụ Cloud cho đề tài
Khi triển khai đồ án môn học Điện toán Đám mây, việc lựa chọn hạ tầng triển khai cần thỏa mãn 4 tiêu chí khắt khe:
1. **Không yêu cầu thẻ tín dụng (No Credit Card Required):** Nhiều sinh viên gặp sự cố tài chính khi dùng AWS hay GCP do vô tình để máy chủ chạy vượt hạn ngạch và bị trừ tiền tự động. Do đó, tiêu chí số 1 là lựa chọn các nền tảng Cloud cung cấp tài khoản học tập/cá nhân an toàn tuyệt đối 0 VNĐ.
2. **Hỗ trợ CI/CD tự động kết nối GitHub:** Mỗi khi thành viên đẩy mã nguồn mới lên nhánh `main`, hệ thống Cloud phải tự động kích hoạt tiến trình Build và Deploy trong vòng dưới 1 phút mà không cần can thiệp thủ công bằng tay.
3. **Hiệu năng cao & Hỗ trợ HTTPS tự động:** Cung cấp sẵn chứng chỉ SSL/TLS hợp lệ, đường truyền ổn định và có tên miền công khai để phục vụ buổi thuyết trình trực tiếp trước Hội đồng giảng viên.
4. **Kiến trúc phân tầng độc lập (Decoupled Jamstack Architecture):** Tách bạch giữa Frontend (phân phối qua Edge CDN) và Backend (chạy trong Linux Container) nhằm tối ưu hiệu năng và dễ dàng mở rộng.

#### Bảng 2.1: Bảng so sánh các dịch vụ Public Cloud được lựa chọn
| Thành phần hệ thống | Nhà cung cấp Cloud | Gói sử dụng | Lý do lựa chọn & Tính năng nổi bật |
| :--- | :--- | :--- | :--- |
| **Frontend Web App** | **Vercel** (`vercel.com`) | Hobby (Free) | Tích hợp mạng lưới Vercel Edge Network CDN toàn cầu; tự động deploy theo từng commit GitHub; hỗ trợ Instant Rollback khi có sự cố. |
| **Backend REST API** | **Render** (`render.com`) | Free Web Service | Hỗ trợ Container hóa Node.js; tự động build từ Git repo; tích hợp bảng điều khiển Live Logs và Health-check endpoint. |
| **Cloud Database** | **Neon.tech** (`neon.tech`) | Free Serverless Postgres | CSDL quan hệ PostgreSQL 16 chuẩn doanh nghiệp; kiến trúc Serverless tự động tách biệt Compute và Storage; giao diện SQL Query trực quan. |
| **Asset CDN** | **Unsplash & Cloudinary** | Free Tier | Phân phối hình ảnh đại diện thợ và mẫu tóc với độ nét cao, tốc độ tải tối ưu qua CDN. |

### 2.2. Khảo sát giao diện và tính năng cốt lõi sau khi đăng nhập tài khoản Cloud

* **Giao diện Render.com Dashboard:**
  * **Tab Settings:** Cung cấp cấu hình linh hoạt cho `Build Command` (`npm install`) và `Start Command` (`node server.js`).
  * **Tab Environment Variables:** Nơi lưu trữ các biến môi trường bảo mật cao (`DATABASE_URL`, `PORT=10000`, `NODE_ENV=production`), giúp bảo vệ chuỗi kết nối nhạy cảm không bao giờ bị lộ trên mã nguồn GitHub.
  * **Tab Logs:** Bảng giám sát dòng thông tin log thời gian thực (Live Stream Logs). Giúp nhóm theo dõi ngay lập tức từng truy vấn HTTP GET/POST gửi từ client và phát hiện lỗi cú pháp nếu có trong buổi bảo vệ.
  * **Tab Metrics:** Giám sát mức tiêu thụ CPU và RAM của máy chủ Container.
* **Giao diện Vercel Dashboard:**
  * **Quản lý Deployments:** Liệt kê lịch sử toàn bộ các lần build, kèm thông tin commit hash và trạng thái Ready trong vòng 20 - 30 giây.
  * **Custom Domains & SSL:** Cung cấp sẵn tên miền dạng `*.vercel.app` kèm chứng chỉ bảo mật Let's Encrypt tự động làm mới.
  * **Tính năng Instant Rollback:** Nếu phiên bản mới vừa deploy phát sinh lỗi giao diện, chỉ cần 1 cú click chuột để quay trở về phiên bản ổn định trước đó ngay lập tức.
* **Giao diện Neon.tech Cloud Database Console:**
  * **Dashboard:** Quản lý dung lượng lưu trữ CSDL và trạng thái kết nối.
  * **SQL Editor trực tuyến:** Cho phép viết và thực thi các câu lệnh DDL (`CREATE TABLE`), DML (`INSERT`, `SELECT`, `UPDATE`) trực tiếp trên trình duyệt mà không cần cài đặt phần mềm bên thứ 3 (như DBeaver hay pgAdmin).
  * **Connection String Generator:** Tự động tạo chuỗi kết nối chuẩn mã hóa TLS/SSL tương thích với thư viện `pg` của Node.js.

### 2.3. Đánh giá tính hợp lý, chi phí (Free-tier) và khả năng kiểm soát thanh toán

#### Bảng 2.2: Bảng định mức tài nguyên và chính sách Free-tier
| Nhà cung cấp Cloud | Hạn ngạch miễn phí (Free-tier Quota) | Mức tiêu thụ thực tế của đề tài | Đánh giá tính khả thi |
| :--- | :--- | :--- | :---: |
| **Vercel** | 100 GB Băng thông / tháng, 100 giờ build | $\approx 1.5\text{ GB}$ băng thông | Rất dư dả, hoạt động mượt mà |
| **Render.com** | 750 giờ hoạt động Web Service / tháng, 512 MB RAM | Chạy 1 service duy nhất ($\approx 720\text{h}$) | Vận hành 24/7 trong suốt kỳ học |
| **Neon.tech** | 0.5 GiB Storage CSDL, 190 giờ Compute / tháng | $\approx 15\text{ MB}$ dữ liệu lịch hẹn | Hoàn toàn nằm trong ngưỡng an toàn |

**Cơ chế kiểm soát chi phí (Billing Safety):**
Tất cả các dịch vụ trên cho phép đăng ký trực tiếp bằng tài khoản **GitHub Student Developer** hoặc Google OAuth mà **không cần nhập bất kỳ thông tin thẻ ngân hàng nào**. Khi hệ thống đạt đến giới hạn gói miễn phí, dịch vụ sẽ tạm thời ngừng phục vụ (throttle) chứ tuyệt đối không bao giờ phát sinh nợ cước ngoài ý muốn. Đây là giải pháp hoàn hảo, an toàn 100% cho sinh viên thực hiện bài tập lớn.

---

# PHẦN 3: PHÂN CÔNG CÔNG VIỆC TRONG NHÓM

### 3.1. Cơ cấu nhóm và vai trò trách nhiệm
Nhóm 05 gồm 04 thành viên, làm việc theo mô hình cộng tác chặt chẽ. Mỗi thành viên đảm nhiệm một khối lượng công việc chuyên trách theo đúng thế mạnh nhưng luôn có sự phối hợp, review chéo mã nguồn qua GitHub Pull Requests.

#### Bảng 3.1: Ma trận phân công công việc chi tiết (WBS Matrix)
| STT | Họ và tên & MSSV | Vai trò chính | Nhiệm vụ đảm nhiệm cụ thể | Tỉ lệ đóng góp |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Nguyễn Văn A** *(Trưởng nhóm)* | Cloud Architect & Fullstack | - Thiết lập hạ tầng Cloud (Render, Vercel, Neon DB)<br>- Cấu hình CI/CD tự động, biến môi trường, xử lý CORS<br>- Xây dựng phân hệ Admin Dashboard & Biểu đồ Chart.js<br>- Viết Phần 2, Phần 5 trong Báo cáo. | 28% |
| 2 | **Trần Thị B** | Backend Developer | - Thiết kế lược đồ CSDL PostgreSQL chuẩn 3NF<br>- Lập trình hệ thống REST API (Services, Stylists, Appointments)<br>- Xây dựng thuật toán kiểm tra xung đột thời gian thực<br>- Viết kịch bản Test Cases; phụ trách Phần 1, 6 trong Báo cáo. | 25% |
| 3 | **Lê Văn C** | Frontend Developer | - Xây dựng giao diện Khách hàng 3 bước (Booking Wizard)<br>- Thiết kế theme Barbershop sang trọng (Tailwind CSS)<br>- Tích hợp thư viện sinh vé QR Code & Tra cứu lịch theo SĐT<br>- Phụ trách viết Phần 4, Phần 7 trong Báo cáo. | 25% |
| 4 | **Phạm Quốc D** | QA & UI/UX Designer | - Thiết kế biểu đồ hệ thống (Use Case, Activity, Sequence, ERD)<br>- Kiểm thử luồng E2E trên môi trường Cloud thực tế<br>- Chuẩn bị Slide thuyết trình & Kịch bản Demo 5 phút<br>- Tổng hợp, hiệu đính và dàn trang Báo cáo hoàn chỉnh. | 22% |

#### Bảng 3.2: Ma trận phân định trách nhiệm RACI
*(R: Responsible - Thực hiện; A: Accountable - Chịu trách nhiệm; C: Consulted - Tham vấn; I: Informed - Nhận thông tin)*

| Giai đoạn / Đầu việc | Nguyễn Văn A | Trần Thị B | Lê Văn C | Phạm Quốc D |
| :--- | :---: | :---: | :---: | :---: |
| 1. Khảo sát yêu cầu & Lập kế hoạch | **A** | R | R | R |
| 2. Thiết kế CSDL & Viết tài liệu SRS | C | **A / R** | C | R |
| 3. Phát triển Backend REST API & Conflict Logic | C | **A / R** | I | C |
| 4. Thiết kế Giao diện Khách hàng (Booking Wizard) | I | C | **A / R** | R |
| 5. Thiết kế Giao diện Quản trị (Admin Dashboard) | **A / R** | C | C | I |
| 6. Triển khai hạ tầng Cloud (Vercel, Render, Neon) | **A / R** | C | C | I |
| 7. Kiểm thử hệ thống (Test Cases) & Viết Báo cáo | C | R | R | **A / R** |

---

# PHẦN 4: KẾ HOẠCH DỰ KIẾN HOÀN THÀNH MINI PROJECT

### 4.1. Quy trình phát triển phần mềm theo mô hình Agile/Scrum
Dự án được thực hiện trong thời gian 05 tuần, áp dụng quy trình lặp (Iterative & Incremental) chia thành 5 Sprint. Cuối mỗi Sprint, nhóm tổ chức họp trực tuyến (Sprint Review & Retrospective) để nghiệm thu sản phẩm tăng trưởng và điều chỉnh công việc cho tuần kế tiếp.

### 4.2. Kế hoạch tiến độ chi tiết theo từng tuần (Gantt Chart)

#### Bảng 4.1: Bảng kế hoạch chi tiết từng bước (Milestones & Deliverables)
| Tuần / Sprint | Công việc chi tiết | Công nghệ / Công cụ | Kết quả bàn giao (Deliverables) |
| :---: | :--- | :--- | :--- |
| **Tuần 1** | - Họp nhóm thống nhất đề tài và bài toán nghiệp vụ.<br>- Viết tài liệu đặc tả yêu cầu phần mềm (SRS).<br>- Vẽ biểu đồ Use Case, Activity, Sequence và ERD. | Draw.io, Markdown, Google Docs | Tài liệu Phân tích thiết kế hệ thống hoàn chỉnh. |
| **Tuần 2** | - Khởi tạo CSDL trên Neon Cloud PostgreSQL.<br>- Viết mã nguồn Express.js REST API.<br>- Lập trình thuật toán chống xung đột lịch hẹn.<br>- Kiểm thử API bằng Postman Collection. | Node.js, Express, PostgreSQL, Postman | Backend API hoàn thiện, chạy ổn định trên môi trường Local. |
| **Tuần 3** | - Thiết kế giao diện Khách hàng 3 bước (Booking Wizard).<br>- Tích hợp tính năng xuất vé Digital Ticket & QR Code.<br>- Lập trình Admin Dashboard với biểu đồ Chart.js.<br>- Xây dựng chức năng tra cứu lịch theo SĐT. | HTML5, Tailwind CSS, JavaScript ES6, Chart.js | Giao diện Web Client & Admin kết nối dữ liệu mượt mà. |
| **Tuần 4** | - Đẩy toàn bộ mã nguồn lên GitHub Organization.<br>- Thiết lập Web Service trên Render.com.<br>- Triển khai Frontend lên Vercel Edge Network.<br>- Cấu hình Domain, biến môi trường và chính sách CORS. | GitHub Actions, Vercel, Render CLI | Website chính thức hoạt động trên Internet với URL công khai. |
| **Tuần 5** | - Thực hiện kiểm thử toàn diện (Unit, E2E, Conflict Test).<br>- Hoàn thiện báo cáo đồ án nộp cho Giảng viên.<br>- Thiết kế Slide thuyết trình và tập dượt Demo 5 phút. | Google Docs, PowerPoint, Chrome DevTools | File Báo cáo bài tập lớn, Slide và Hệ thống sẵn sàng bảo vệ. |

---

# PHẦN 5: CÁC BƯỚC CHI TIẾT TRIỂN KHAI (DEPLOY) LÊN PUBLIC CLOUD

### 5.1. Kiến trúc triển khai tổng thể trên Cloud (Decoupled Multi-tier Architecture)

```
                       [NGƯỜI DÙNG TRUY CẬP]
                   (Smartphone / Laptop / Tablet)
                                 |
                                 v  (HTTPS : 443)
       +---------------------------------------------------+
       |            VERCEL GLOBAL EDGE NETWORK             |
       |  - Hosting: Static Assets, HTML, CSS, JS, Images  |
       |  - Domain: barber-booking-club.vercel.app         |
       |  - Tự động mã hóa SSL/TLS & Edge Caching          |
       +---------------------------------------------------+
                                 |
                                 v  (REST API calls qua HTTPS)
       +---------------------------------------------------+
       |                 RENDER.COM CLOUD                  |
       |  - Runtime: Node.js 18+ Linux Container           |
       |  - Service: barber-booking-backend.onrender.com   |
       |  - Nhiệm vụ: Xử lý nghiệp vụ & Conflict Algorithm |
       |  - Health-check monitoring endpoint: /health      |
       +---------------------------------------------------+
                                 |
                                 v  (TCP Connection String qua SSL)
       +---------------------------------------------------+
       |               NEON.TECH POSTGRESQL                |
       |  - Cloud Managed Serverless Database              |
       |  - Host: ep-sweet-mountain.ap-southeast-1.neon.tech|
       |  - Lưu trữ: 5 bảng dữ liệu chuẩn hóa 3NF          |
       +---------------------------------------------------+
```

### 5.2. Bước 1: Khởi tạo và thiết lập CSDL Cloud trên Neon.tech
1. Truy cập trang chủ [https://neon.tech](https://neon.tech), chọn đăng nhập bằng tài khoản GitHub của nhóm.
2. Nhấn nút **Create Project**, đặt tên Project là `barber-appointment-db`.
3. Chọn vị trí khu vực máy chủ (Region) gần nhất là `Singapore (ap-southeast-1)` để đảm bảo độ trễ truy vấn thấp nhất ($\approx 30 - 50\text{ms}$).
4. Sau khi khởi tạo thành công, hệ thống cung cấp chuỗi URI kết nối an toàn (Connection String) dạng:
   ```env
   DATABASE_URL="postgres://neondb_owner:AbCd1234EfGh@ep-sweet-mountain-123456.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
   ```
5. Mở tab **SQL Editor** trên giao diện Neon Console, sao chép toàn bộ nội dung tệp tin `backend/database.sql` và nhấn nút **Run**.
6. Hệ thống thực thi khởi tạo 5 bảng quan hệ (`users`, `stylists`, `services`, `appointments`, `appointment_services`), tạo chỉ mục tìm kiếm nhanh `idx_appointments_conflict` và nạp dữ liệu mẫu ban đầu (Seed Data).

### 5.3. Bước 2: Đóng gói và Deploy Backend REST API lên Render.com
1. Đẩy thư mục mã nguồn `backend/` lên kho lưu trữ GitHub của nhóm.
2. Truy cập [https://render.com](https://render.com), chọn **New +** -> **Web Service**.
3. Chọn liên kết với kho lưu trữ GitHub chứa dự án.
4. Thiết lập các tham số triển khai:
   * **Name:** `barber-booking-backend`
   * **Region:** `Singapore (Southeast Asia)`
   * **Branch:** `main`
   * **Root Directory:** `backend`
   * **Runtime:** `Node`
   * **Build Command:** `npm install`
   * **Start Command:** `node server.js`
   * **Instance Type:** `Free`
5. Nhấn vào mục **Advanced** -> **Add Environment Variable** để thiết lập các biến môi trường:
   * `PORT`: `10000`
   * `NODE_ENV`: `production`
   * `DATABASE_URL`: *(Dán chuỗi kết nối an toàn đã lấy từ Bước 1)*
6. Nhấn **Create Web Service**. Tiến trình Build của Render sẽ tự động kéo mã nguồn, cài đặt dependencies và khởi chạy máy chủ.
7. Khi trạng thái chuyển sang màu xanh **Live**, máy chủ Backend chính thức hoạt động tại địa chỉ công khai: `https://barber-booking-backend.onrender.com`.
8. Kiểm tra tính sẵn sàng bằng cách truy cập endpoint `https://barber-booking-backend.onrender.com/health` trên trình duyệt: Nhận được mã phản hồi `200 OK` với nội dung `{"status":"UP","cloudService":"Render Free Web Service"}`.

### 5.4. Bước 3: Triển khai Client Web App lên Vercel Edge Network
1. Kiểm tra cấu hình tệp `vercel.json` tại thư mục gốc để đảm bảo định tuyến tĩnh chính xác:
   ```json
   {
     "version": 2,
     "cleanUrls": true,
     "trailingSlash": false
   }
   ```
2. Đẩy toàn bộ mã nguồn lên nhánh chính `main` của GitHub.
3. Truy cập [https://vercel.com](https://vercel.com), đăng nhập tài khoản GitHub và chọn **Add New...** -> **Project**.
4. Chọn kho lưu trữ của dự án và nhấn **Import**.
5. Giữ nguyên cấu hình mặc định (Root Directory: `./`, Framework Preset: `Other`) và nhấn nút **Deploy**.
6. Trong vòng 30 giây, Vercel tự động phân phối toàn bộ giao diện tĩnh lên mạng lưới máy chủ Edge toàn cầu với chứng chỉ SSL hợp lệ tại địa chỉ: `https://barber-booking-club.vercel.app`.

### 5.5. Bước 4: Thiết lập liên kết Cross-Origin (CORS), Biến môi trường và chứng chỉ SSL/TLS
1. Để đảm bảo trình duyệt người dùng không chặn các yêu cầu gửi dữ liệu từ domain Vercel sang domain Render, trong tệp `backend/server.js`, nhóm đã cấu hình Middleware `cors()`:
   ```javascript
   const cors = require('cors');
   app.use(cors({
     origin: ['https://barber-booking-club.vercel.app', 'http://localhost:3000'],
     methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   ```
2. Kiểm tra thực tế bằng công cụ Chrome Developer Tools (phím F12) trên website chính thức: Toàn bộ các yêu cầu HTTP API đều phản hồi mã `200 OK`, không phát sinh bất kỳ cảnh báo CORS Policy nào.

---

# PHẦN 6: KẾT QUẢ SAU KHI TRIỂN KHAI HỆ THỐNG

### 6.1. Giới thiệu tổng quan hệ thống đã triển khai
Sau khi hoàn tất quy trình triển khai lên Public Cloud, hệ thống vận hành cực kỳ ổn định, tốc độ phản hồi nhanh, giao diện thân thiện và tương thích hoàn hảo trên cả máy tính bàn lẫn điện thoại thông minh:
* **Địa chỉ Website Khách hàng (Vercel):** `https://barber-booking-club.vercel.app`
* **Địa chỉ Trang Quản trị Admin:** `https://barber-booking-club.vercel.app/admin.html`
* **Địa chỉ Backend API (Render):** `https://barber-booking-backend.onrender.com`

### 6.2. Chi tiết phân hệ Khách hàng (Client Portal)
* **Giao diện Hero & Bước 1 (Chọn Gói Dịch Vụ):**
  * Giao diện mang đậm chất Barbershop cổ điển với bảng màu Deep Slate & Amber Gold sang trọng.
  * Hiển thị danh mục 5 dịch vụ cốt lõi kèm ảnh sắc nét, thời lượng phục vụ và giá tiền niêm yết minh bạch.
  * Hỗ trợ chọn đồng thời nhiều dịch vụ; thanh tổng kết nổi bên phải (Sticky Sidebar Summary) tự động cộng dồn số tiền và ước tính tổng thời lượng phục vụ.
* **Giao diện Bước 2 (Chọn Stylist & Khung giờ Thời gian thực):**
  * Danh sách thợ hiển thị đầy đủ: ảnh chân dung, danh hiệu, số năm kinh nghiệm, đánh giá sao của khách cũ.
  * Tùy chọn thông minh **"Chọn Thợ Ngẫu Nhiên"** giúp khách hàng cần cắt gấp không phải băn khoăn lựa chọn.
  * Bộ chọn ngày trực quan (Hôm nay, Ngày mai, Ngày kia).
  * Lưới khung giờ hoạt động (Time Slots): **Các khung giờ đã có khách khác đặt trước sẽ tự động bị gạch chéo màu xám và vô hiệu hóa nút bấm (Disabled)**, loại bỏ 100% nguy cơ trùng giờ.
* **Giao diện Bước 3 (Điền thông tin & Xuất Vé Điện Tử QR Code):**
  * Khách hàng nhập Họ tên và Số điện thoại (kiểm tra chặt chẽ định dạng 10 số di động Việt Nam).
  * Sau khi bấm "Xác nhận đặt lịch", hệ thống tạo mã đặt chỗ duy nhất dạng `#BK-XXXX` và sinh **Vé Điện Tử Đặt Chỗ (Digital Barber Ticket)** đẹp mắt.
  * Vé chứa mã QR Code tích hợp: Khi tới salon, khách hàng chỉ cần đưa màn hình điện thoại cho lễ tân quét mã QR để hoàn tất thủ tục check-in trong 2 giây. Hỗ trợ nút "In hóa đơn / Lưu vé" trực tiếp.
* **Chức năng Tra cứu Lịch hẹn bằng Số điện thoại:**
  * Khách hàng chỉ cần bấm nút "Tra cứu lịch hẹn" trên thanh điều hướng, nhập Số điện thoại để xem toàn bộ danh sách các lịch hẹn đang chờ hoặc đã cắt của mình, kèm nút "Hủy lịch hẹn" nếu có việc bận đột xuất.

### 6.3. Chi tiết phân hệ Quản trị & Stylist (Admin Dashboard)
* **Bảng thẻ chỉ số điều hành cốt lõi (KPI Cards):**
  * Hiển thị tức thì 4 chỉ số quan trọng: *Tổng lịch hẹn hôm nay*, *Lịch đang chờ phục vụ*, *Doanh thu dự kiến hôm nay*, *Số lượng ca đã hoàn thành*.
* **Hệ thống Biểu đồ Phân tích Kinh doanh (Analytics Charts):**
  * *Biểu đồ cột (Bar Chart):* Biểu diễn biến động doanh thu 5 ngày gần nhất, giúp chủ tiệm nắm bắt xu hướng kinh doanh.
  * *Biểu đồ tròn (Doughnut Chart):* Cơ cấu tỷ lệ phần trăm các gói dịch vụ được ưa chuộng nhất (Combo VIP chiếm 45%, Uốn tóc chiếm 30%...).
* **Bảng điều phối Lịch hẹn Thời gian thực (Real-time Appointment Table):**
  * Bộ lọc đa năng: Lọc theo Ngày, Lọc theo Trạng thái (`Chờ phục vụ`, `Đang cắt`, `Hoàn thành`, `Đã hủy`), Lọc theo Thợ cắt tóc, Ô tìm kiếm tức thì theo Tên/SĐT.
  * Thao tác chuyển đổi trạng thái 1 chạm: Nhân viên lễ tân hoặc thợ chỉ cần chọn menu dropdown để chuyển trạng thái lịch của khách từ `Chờ phục vụ` -> `Đang cắt` -> `Hoàn thành`. Doanh thu sẽ tự động nhảy số theo thời gian thực mà không cần tải lại trang.

### 6.4. Kết quả kiểm thử tính năng (Test Cases)

#### Bảng 6.1: Bảng tổng hợp kịch bản kiểm thử tính năng (Test Cases)
| Mã Test | Mô tả ca kiểm thử | Dữ liệu đầu vào (Input) | Kết quả kỳ vọng | Kết quả thực tế | Đánh giá |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Bấm Tiếp tục khi chưa chọn dịch vụ | Không chọn dịch vụ nào | Nút "Tiếp tục" bị vô hiệu hóa (Disabled) | Nút mờ, không thể bấm chuyển bước | **ĐẠT** |
| **TC-02** | Nhập sai định dạng số điện thoại | SĐT: `0912abc` hoặc `12345` | Cảnh báo yêu cầu nhập đúng 10 chữ số | Hiển thị thông báo lỗi, trỏ focus vào ô SĐT | **ĐẠT** |
| **TC-03** | **Kiểm tra chống xung đột (Conflict Test)** | Đặt Stylist Alex Tuấn vào `10:00 AM` hôm nay (lịch này đã có khách đặt) | Nút slot `10:00 AM` bị gạch chéo, disabled | Hiển thị chữ "Kín", không thể bấm chọn | **ĐẠT** |
| **TC-04** | Sinh mã đặt chỗ và QR Code | Điền đầy đủ thông tin hợp lệ | Sinh mã `#BK-XXXX` và hình ảnh mã QR | Hiển thị vé điện tử sắc nét, quét QR ra đúng mã vé | **ĐẠT** |
| **TC-05** | Tra cứu lịch hẹn theo Số điện thoại | Nhập SĐT `0901234567` | Hiển thị danh sách lịch hẹn của số đó | Hiển thị đúng các vé đã đặt tương ứng | **ĐẠT** |
| **TC-06** | Hủy lịch hẹn thành công | Bấm nút "Hủy lịch" trên modal | Lịch hẹn chuyển sang trạng thái "Đã hủy" | Khung giờ đó lập tức được mở khóa lại | **ĐẠT** |
| **TC-07** | Đồng bộ trạng thái phía Admin | Admin đổi trạng thái sang "Hoàn thành" | Doanh thu hôm nay tăng thêm số tiền tương ứng | Thẻ KPI Doanh thu nhảy số tăng ngay lập tức | **ĐẠT** |
| **TC-08** | Lọc dữ liệu trên Admin Dashboard | Chọn lọc theo "Hôm nay" và "Đang cắt" | Bảng chỉ hiển thị các ca đang cắt hôm nay | Dữ liệu lọc chính xác, không cần reload trang | **ĐẠT** |
| **TC-09** | Tương thích giao diện Mobile (Responsive) | Mở website trên iPhone 13 (Viewport 390px) | Giao diện tự động co giãn, không bị vỡ/tràn ngang | Menu, nút bấm hiển thị chuẩn xác, dễ chạm | **ĐẠT** |
| **TC-10** | Kiểm tra Health Check Backend | Truy cập URL `.../health` trên trình duyệt | Nhận mã HTTP 200 kèm trạng thái UP | Phản hồi JSON hợp lệ trong vòng 200ms | **ĐẠT** |

---

# PHẦN 7: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 7.1. Kết luận những kết quả đạt được
Sau thời gian nghiên cứu và làm việc nghiêm túc, Nhóm 05 đã hoàn thành toàn diện các mục tiêu đề ra của Mini Project:
1. **Về mặt phân tích thiết kế:** Hoàn thành tài liệu phân tích hệ thống bài bản (Use Case, Activity, Sequence, ERD chuẩn 3NF, Data Dictionary). Giải quyết triệt để bài toán xếp hàng chờ đợi và bài toán xung đột thời gian bằng thuật toán thông minh.
2. **Về mặt công nghệ & Điện toán Đám mây:** Triển khai thành công 100% ứng dụng lên các nền tảng Public Cloud uy tín (Vercel Edge Network, Render Web Service, Neon PostgreSQL Serverless). Làm chủ quy trình CI/CD tự động từ GitHub, quản lý biến môi trường bảo mật và cấu hình mạng (HTTPS, CORS).
3. **Về mặt giao diện & trải nghiệm người dùng (UI/UX):** Ứng dụng thành công tiêu chuẩn Hallmark Anti-AI-slop và UI/UX Pro Max, mang lại giao diện đẳng cấp, trực quan, sinh vé QR tiện lợi và hoạt động mượt mà trên mọi thiết bị di động.
4. **Về mặt chi phí:** Tối ưu hóa ngân sách với **chi phí vận hành 0 VNĐ**, không phụ thuộc thẻ tín dụng, an toàn tuyệt đối cho môi trường học tập sinh viên.

### 7.2. Hạn chế hiện tại của đề tài
* **Hiện tượng Cold Start:** Do sử dụng gói miễn phí của Render.com, khi hệ thống không có yêu cầu truy cập trong vòng 15 phút, máy chủ sẽ tạm thời chuyển sang trạng thái "ngủ" (Sleep mode). Yêu cầu truy cập đầu tiên sau đó sẽ mất khoảng 30 - 50 giây để đánh thức máy chủ.
* **Chưa tích hợp thanh toán trực tuyến:** Hệ thống hiện tại mới ghi nhận thông tin đặt lịch, khách hàng vẫn thanh toán trực tiếp bằng tiền mặt hoặc chuyển khoản tại quầy salon sau khi cắt tóc.

### 7.3. Hướng phát triển mở rộng trong tương lai
1. **Tích hợp Cổng thanh toán trực tuyến (Payment Gateway):** Tích hợp cổng thanh toán Sandbox VNPAY, MoMo hoặc ZaloPay để khách hàng đặt cọc trước 20% - 50%, giúp salon giảm thiểu tối đa tỷ lệ khách "bùng lịch" (No-show).
2. **Hệ thống thông báo đa kênh tự động (Omnichannel Notifications):** Tự động gửi tin nhắn SMS / Zalo ZNS / Telegram Bot nhắc nhở khách hàng trước giờ hẹn 60 phút kèm định vị chỉ đường Google Maps.
3. **Ứng dụng Trí tuệ Nhân tạo (AI Hairstyle Recommendation):** Tích hợp mô hình Computer Vision cho phép khách hàng tải ảnh chân dung lên; AI sẽ tự động phân tích dáng khuôn mặt (mặt tròn, trái xoan, mặt vuông góc cạnh) và gợi ý kiểu tóc thịnh hành phù hợp nhất.
4. **Chuyển đổi kiến trúc Serverless Edge hoàn toàn:** Nâng cấp tầng Backend sang mô hình Next.js Edge Functions hoặc AWS Lambda kết hợp Neon Serverless Driver để loại bỏ 100% hiện tượng Cold Start và tự động co giãn tài nguyên theo tải thực tế.

---

# TÀI LIỆU THAM KHẢO

1. **Giáo trình Điện toán Đám mây & Kiến trúc Hệ thống Phân tán**, Bộ môn Mạng máy tính & Hệ thống, Trường Đại học Công nghệ Thông tin & Truyền thông (ICTU), 2024.
2. **Vercel Documentation**, *Deploying Modern Frontend & Serverless Applications on the Edge Network*, [https://vercel.com/docs](https://vercel.com/docs).
3. **Render.com Documentation**, *Deploying Web Services, Docker Containers and Environment Management*, [https://render.com/docs](https://render.com/docs).
4. **Neon Serverless PostgreSQL Documentation**, *Serverless Architecture, Branching and Connection Pooling*, [https://neon.tech/docs](https://neon.tech/docs).
5. **Chart.js Documentation**, *Open-source HTML5 Canvas Interactive Charting Library v4.x*, [https://www.chartjs.org/docs](https://www.chartjs.org/docs).
6. **Tailwind CSS Documentation**, *A Utility-first CSS Framework for Rapid UI Development*, [https://tailwindcss.com/docs](https://tailwindcss.com/docs).
7. **W3C Web Accessibility Initiative (WAI)**, *Web Content Accessibility Guidelines (WCAG) 2.1 Standard*, [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/).

---

# PHỤ LỤC MÃ NGUỒN CỐT LÕI (APPENDIX)

### Phụ lục A: Thuật toán Kiểm tra Xung đột Lịch hẹn (Node.js Express)
```javascript
// Trích đoạn xử lý kiểm tra xung đột thời gian thực trong backend/server.js
app.post('/api/appointments', (req, res) => {
  const { customerName, customerPhone, customerEmail, stylistId, stylistName, services, date, time, totalPrice, notes } = req.body;

  // 1. Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (!customerName || !customerPhone || !date || !time) {
    return res.status(400).json({ 
      success: false, 
      message: 'Vui lòng điền đầy đủ các thông tin bắt buộc (Tên, SĐT, Ngày, Khung giờ)!' 
    });
  }

  // 2. Thuật toán kiểm tra xung đột thời gian thực (Conflict Detection)
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

  // 3. Khởi tạo mã vé duy nhất và lưu trữ bản ghi
  const bookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
  const newAppointment = {
    id: bookingId,
    customerName,
    customerPhone,
    customerEmail: customerEmail || '',
    stylistId: stylistId || 'sty-random',
    stylistName: stylistName || 'Thợ ngẫu nhiên',
    services: Array.isArray(services) ? services : [services],
    date,
    time,
    totalPrice: Number(totalPrice) || 0,
    status: 'confirmed',
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  memoryDB.appointments.unshift(newAppointment);
  res.status(201).json({ success: true, data: newAppointment });
});
```

### Phụ lục B: Cấu hình Định tuyến Tĩnh Vercel (`vercel.json`)
```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```
