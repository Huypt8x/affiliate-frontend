import axios from "axios";

// Lấy URL backend từ biến môi trường (Vercel + .env.local)
// Nếu chưa có thì fallback về localhost để chạy dev
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

console.log("🔗 API URL =", baseURL);

// Tạo instance axios chung
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==========================
// Các hàm gọi API mẫu
// ==========================

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};

// Đăng nhập
export const login = async (email, password) => {
  const res = await api.post("/api/auth/login", { email, password });
  return res.data;
};

// Xuất mặc định instance để có thể xài trực tiếp
export default api;
