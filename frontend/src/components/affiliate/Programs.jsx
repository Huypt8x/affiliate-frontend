import React, { useState } from "react";
import programs from "../../seed/programs";
import AffiliateFilter from "./AffiliateFilter";
import AffiliateSort from "./AffiliateSort";
import AffiliateTable from "./AffiliateTable";

export default function Programs() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");
  const [view, setView] = useState("table"); // ✅ Chế độ hiển thị: table | card

  // ✅ Lọc dữ liệu theo category
  const filtered = filter === "All"
    ? programs
    : programs.filter((p) => p.categoryLabel === filter);

  // ✅ Sắp xếp dữ liệu
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "A-Z") return a.name.localeCompare(b.name);
    if (sort === "Z-A") return b.name.localeCompare(a.name);
    if (sort === "High EPU") return parseFloat(b.epu) - parseFloat(a.epu);
    if (sort === "Low EPU") return parseFloat(a.epu) - parseFloat(b.epu);
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Tiêu đề + chuyển view */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Affiliate Programs</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 rounded ${view === "table" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            Table View
          </button>
          <button
            onClick={() => setView("card")}
            className={`px-3 py-1 rounded ${view === "card" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            Card View
          </button>
        </div>
      </div>

      {/* Bộ lọc + Sắp xếp */}
      <div className="flex gap-4 flex-wrap">
        <AffiliateFilter value={filter} onChange={setFilter} />
        <AffiliateSort value={sort} onChange={setSort} />
      </div>

      {/* Hiển thị dữ liệu */}
      {view === "table" ? (
        <AffiliateTable data={sorted} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p) => (
            <div
              key={p.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg p-4 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full font-bold">
                  {p.name[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-xs text-gray-400">{p.categoryLabel}</p>
                </div>
              </div>

              <div className="mt-3 text-sm space-y-1">
                <p><strong>EPU:</strong> {p.epu || "-"}</p>
                <p><strong>Commission:</strong> {p.commission || "-"}</p>
                <p><strong>Traffic:</strong> {p.traffic || "-"}</p>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Start Earning
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
