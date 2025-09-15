import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("❌ Lỗi gọi API:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>⏳ Đang tải dữ liệu...</p>;

  return (
    <div>
      <h2>🛍️ Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.category} - {p.payout}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
