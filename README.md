# Affiliate Frontend

🚀 Frontend cho hệ thống Affiliate.  
Ứng dụng được xây dựng bằng **React + Vite** và kết nối với Backend API.

## Cấu trúc dự án
- `src/components/` – Các component React
- `src/pages/` – Các trang chính
- `src/services/` – Kết nối API qua Axios
- `src/config.js` – Cấu hình API URL (lấy từ `.env.local`)

## Cách chạy project

### 1. Clone repository
```bash
git clone https://github.com/your-username/affiliate-frontend-moi.git
cd affiliate-frontend-moi
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy project (dev)
```bash
npm run dev
```

### 4. Build project (production)
```bash
npm run build
```

---
👉 Sau khi deploy lên **Vercel**, đừng quên cấu hình biến môi trường `VITE_API_URL` để frontend kết nối được với backend.
