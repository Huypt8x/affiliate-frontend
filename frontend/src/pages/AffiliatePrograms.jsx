import { useState, useMemo } from "react";
import AffiliateFilter from "../components/affiliate/AffiliateFilter";
import AffiliateSort from "../components/affiliate/AffiliateSort";
import categories from "../seed/programs"; // import mảng category

export default function AffiliatePrograms() {
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("az");
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Trải phẳng mảng categories để lấy toàn bộ programs
  const allPrograms = categories.flatMap((cat) => cat.programs);

  // Lọc & sắp xếp dữ liệu
  const filteredPrograms = useMemo(() => {
    let data = [...allPrograms];

    if (filter !== "ALL") {
      data = data.filter((p) => p.categoryLabel === filter || p.category === filter);
    }

    switch (sort) {
      case "epu":
        data.sort(
          (a, b) =>
            parseFloat(b.epu.replace(/[^0-9.]/g, "")) -
            parseFloat(a.epu.replace(/[^0-9.]/g, ""))
        );
        break;
      case "traffic":
        data.sort((a, b) => {
          const parseTraffic = (t) => {
            let num = parseFloat(t.replace(/[^0-9.]/g, "")) || 0;
            if (/k/i.test(t)) num *= 1000;
            if (/m/i.test(t)) num *= 1000000;
            return num;
          };
          return parseTraffic(b.traffic) - parseTraffic(a.traffic);
        });
        break;
      case "az":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return data;
  }, [filter, sort, allPrograms]);

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const paginatedPrograms = filteredPrograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Affiliate Programs</h1>

      <div className="flex gap-4 mb-4">
        <AffiliateFilter filter={filter} setFilter={setFilter} />
        <AffiliateSort sort={sort} setSort={setSort} />
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">EPU</th>
            <th className="p-2 text-left">Commission</th>
            <th className="p-2 text-left">Monthly Traffic</th>
            <th className="p-2 text-left">Recurring</th>
            <th className="p-2 text-left">Pricing</th>
            <th className="p-2 text-left">Country</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPrograms.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              {/* ✅ Hiển thị category nhỏ dưới tên */}
              <td className="p-2">
                <div className="flex flex-col">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-xs text-gray-500">
                    {p.categoryLabel || p.category}
                  </span>
                </div>
              </td>
              <td className="p-2">{p.epu}</td>
              <td className="p-2">{p.commission}</td>
              <td className="p-2">{p.traffic}</td>
              <td className="p-2">{p.recurring}</td>
              <td className="p-2">{p.pricing}</td>
              <td className="p-2">{p.country}</td>
              <td className="p-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
