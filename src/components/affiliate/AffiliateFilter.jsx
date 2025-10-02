import React, { useMemo } from "react";
import programs from "../../seed/programs"; // hoặc đường dẫn bạn dùng để import data

export default function AffiliateFilter({ filter, setFilter }) {
  // Tạo mảng category tự động từ dữ liệu
  const categories = useMemo(() => {
    const set = new Set();
    programs.forEach((p) => {
      if (p.categoryLabel) set.add(p.categoryLabel);
    });
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "ALL" ? "All" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}
