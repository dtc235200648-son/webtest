-- ==========================================================
-- DATABASE SCHEMA: BARBER APPOINTMENT BOOKING SYSTEM
-- Compatible with PostgreSQL (Neon.tech / Supabase / AWS RDS)
-- ==========================================================

-- 1. Create Extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Drop existing tables if re-running
DROP TABLE IF EXISTS appointment_services CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS stylists CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 3. Users Table (Customers, Stylists, Admins)
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'USR-' || substr(md5(random()::text), 1, 8),
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100),
    role VARCHAR(20) DEFAULT 'customer' CHECK (role IN ('customer', 'stylist', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Stylists Table (Hairdressers)
CREATE TABLE stylists (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role_title VARCHAR(100) NOT NULL,
    rating NUMERIC(2, 1) DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    avatar_url TEXT NOT NULL,
    experience_years VARCHAR(50),
    specialty TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Services Table
CREATE TABLE services (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    duration_minutes INT NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Appointments Table (Main Booking Record)
CREATE TABLE appointments (
    id VARCHAR(50) PRIMARY KEY, -- Example: BK-8821
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    customer_email VARCHAR(100),
    stylist_id VARCHAR(50) REFERENCES stylists(id) ON DELETE SET NULL,
    appointment_date DATE NOT NULL,
    start_time VARCHAR(10) NOT NULL, -- Format HH:mm (e.g., 09:15)
    total_price INT NOT NULL DEFAULT 0,
    total_duration INT NOT NULL DEFAULT 30,
    status VARCHAR(30) DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'in-progress', 'completed', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for fast slot conflict check
CREATE INDEX idx_appointments_conflict ON appointments (stylist_id, appointment_date, start_time, status);

-- 7. Appointment Services Mapping (Many-to-Many)
CREATE TABLE appointment_services (
    appointment_id VARCHAR(50) REFERENCES appointments(id) ON DELETE CASCADE,
    service_id VARCHAR(50) REFERENCES services(id) ON DELETE RESTRICT,
    price_at_booking INT NOT NULL,
    PRIMARY KEY (appointment_id, service_id)
);

-- ==========================================================
-- SEED DATA (INITIAL SAMPLES)
-- ==========================================================

INSERT INTO stylists (id, name, role_title, rating, reviews_count, avatar_url, experience_years, specialty) VALUES
('sty-3', 'Sơn', 'Trưởng tiệm (Master Stylist)', 5.0, 520, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', '8 năm kinh nghiệm', 'Sidepart 7/3 Hàn Quốc lãng tử, Uốn phồng chân tóc, Kỹ thuật cắt phom chuẩn Master'),
('sty-1', 'Đức bếch khăm', 'Senior VIP Barber', 4.9, 450, 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', '10 năm kinh nghiệm', 'Classic Pompadour, Undercut vuốt sáp, Tỉa cạo râu chuẩn quý ông Anh Quốc'),
('sty-2', 'Hùng ha mét', 'Creative Barber & Colorist', 4.9, 380, 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', '6 năm kinh nghiệm', 'Taper Fade sắc nét, Modern Mullet cá tính, Uốn sóng Texture thịnh hành');

INSERT INTO services (id, name, category, price, duration_minutes, description, image_url) VALUES
('srv-1', 'Cắt Tóc Tạo Kiểu Barber', 'Cắt tóc', 90000, 35, 'Tư vấn kiểu tóc phù hợp khuôn mặt, cạo viền sắc nét và sấy tạo kiểu bằng sáp cao cấp.', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'),
('srv-2', 'Combo Cắt Gội Massage Đế Vương', 'Combo VIP', 160000, 55, 'Trọn gói 7 bước thư giãn hoàng gia, gội đầu dưỡng sinh, massage tai gáy và tạo phom vuốt wax.', 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80'),
('srv-3', 'Uốn Tóc Thời Thượng (Texture / Premlock / Foil)', 'Uốn tóc', 280000, 60, 'Uốn phồng chân tóc, tạo sóng nhẹ tự nhiên hoặc uốn con sâu cá tính. Giữ nếp lâu 3-4 tháng.', 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80'),
('srv-4', 'Nhuộm Tóc Màu Thời Trang', 'Nhuộm tóc', 250000, 60, 'Đa dạng tông màu: Nâu tây, Xám khói, Than chì... Thuốc nhuộm hữu cơ an toàn bóng mượt.', 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80'),
('srv-5', 'Cạo Râu Truyền Thống & Xông Tinh Dầu', 'Chăm sóc', 60000, 25, 'Khăn nóng làm mềm râu, cạo êm ái sát da không rát, dưỡng da với tinh dầu bạc hà.', 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80');

INSERT INTO appointments (id, customer_name, customer_phone, customer_email, stylist_id, appointment_date, start_time, total_price, total_duration, status, notes) VALUES
('BK-8821', 'Nguyễn Văn Hùng', '0901234567', 'hung.nguyen@gmail.com', 'sty-1', CURRENT_DATE, '09:15', 160000, 55, 'completed', 'Tóc mềm, muốn giữ độ dài mái'),
('BK-8822', 'Trần Minh Quân', '0912345678', 'quan.tran@gmail.com', 'sty-2', CURRENT_DATE, '10:00', 370000, 95, 'in-progress', 'Uốn sóng nhẹ tự nhiên'),
('BK-8823', 'Lê Hoàng Long', '0987654321', 'long.le@gmail.com', 'sty-1', CURRENT_DATE, '14:15', 90000, 35, 'confirmed', 'Cắt sát chân taper fade');
