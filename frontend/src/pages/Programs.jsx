import { useEffect, useState, useMemo } from "react";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("az");
  const [commissionFilter, setCommissionFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  const handleTrackClick = async (id, url) => {
    try {
      await fetch(`http://localhost:4000/api/programs/track/${id}`, {
        method: "POST",
      });
      window.open(url, "_blank");
    } catch (error) {
      console.error("Tracking failed:", error);
      window.open(url, "_blank");
    }
  };

  const filteredPrograms = useMemo(() => {
    let result = [...programs];

    if (filter) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (commissionFilter) {
      result = result.filter(
        (p) => parseInt(p.commission) >= parseInt(commissionFilter)
      );
    }

    result.sort((a, b) => {
      if (sortOrder === "az") return a.name.localeCompare(b.name);
      if (sortOrder === "za") return b.name.localeCompare(a.name);
      return 0;
    });

    return result;
  }, [programs, filter, sortOrder, commissionFilter]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Affiliate Programs</h1>

      {/* Ô search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />

      {/* Bộ lọc + sắp xếp */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={commissionFilter}
          onChange={(e) => setCommissionFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All</option>
          <option value="5">≥ 5%</option>
          <option value="10">≥ 10%</option>
          <option value="20">≥ 20%</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="az">Name A → Z</option>
          <option value="za">Name Z → A</option>
        </select>
      </div>

      {/* Danh sách chương trình */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="border rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
          >
            {/* 🔥 Tên + category (chữ mờ) */}
            <div className="mb-2">
              <h2 className="text-xl font-semibold">{program.name}</h2>
              {program.category && (
                <p className="text-gray-400 text-sm">{program.category}</p>
              )}
            </div>

            {/* Thông tin commission */}
            <p className="text-gray-600 mb-4">
              Commission:{" "}
              <span className="font-medium">{program.commission}</span>
            </p>

            {/* Nút bấm */}
            <button
              onClick={() => handleTrackClick(program.id, program.url)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-auto"
            >
              Visit Program
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
