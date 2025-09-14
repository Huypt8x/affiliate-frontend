import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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
