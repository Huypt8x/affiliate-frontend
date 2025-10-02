import React, { useMemo, useState } from "react";

export default function AffiliateTable({ categories, filter, sort }) {
  const [selected, setSelected] = useState(null);

  const parseNumber = (val) => {
    if (!val) return 0;
    return parseFloat(val.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const parseTraffic = (val) => {
    if (!val) return 0;
    let num = parseFloat(val.toString().replace(/[^0-9.]/g, "")) || 0;
    if (/k/i.test(val)) num *= 1000;
    if (/m/i.test(val)) num *= 1000000;
    return num;
  };

  const computeStats = (programs) => {
    if (!programs || programs.length === 0) return {};
    const totalPrograms = programs.length;
    const totalViews = programs.reduce((sum, p) => sum + parseTraffic(p.traffic), 0);
    const avgEpu = (
      programs.reduce((sum, p) => sum + parseNumber(p.epu), 0) / totalPrograms
    ).toFixed(2);
    const avgMonthlyTraffic = (totalViews / totalPrograms).toFixed(0);
    const top3 = programs
      .sort((a, b) => parseNumber(b.epu) - parseNumber(a.epu))
      .slice(0, 3)
      .map((p) => p.name);
    return { totalPrograms, totalViews, avgEpu, avgMonthlyTraffic, top3 };
  };

  const filteredAndSorted = useMemo(() => {
    let data = [...categories];

    // ✅ Lọc theo category
    if (filter !== "ALL") {
      data = data.filter(
        (item) => item.categoryLabel === filter || item.category === filter
      );
    }

    switch (sort.toLowerCase()) {
      case "epu":
        data.sort((a, b) => {
          const aStats = computeStats(a.programs);
          const bStats = computeStats(b.programs);
          return bStats.avgEpu - aStats.avgEpu;
        });
        break;
      case "traffic":
        data.sort((a, b) => {
          const aStats = computeStats(a.programs);
          const bStats = computeStats(b.programs);
          return bStats.avgMonthlyTraffic - aStats.avgMonthlyTraffic;
        });
        break;
      case "a-z":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return data;
  }, [categories, filter, sort]);

  const handleSelect = (i) => setSelected(selected === i ? null : i);

  return (
    <table className="w-full text-sm border-collapse">
      <thead className="text-left text-slate-500">
        <tr>
          <th>Category</th>
          <th>Avg EPU</th>
          <th>Top 3 Programs</th>
          <th>Total Programs</th>
          <th>Total Views</th>
          <th>Avg Monthly Traffic</th>
        </tr>
      </thead>
      <tbody>
        {filteredAndSorted.map((item, i) => {
          const stats = computeStats(item.programs);
          return (
            <React.Fragment key={item.id}>
              {/* Row hiển thị Category */}
              <tr
                onClick={() => handleSelect(i)}
                className={`border-t cursor-pointer transition-colors ${
                  selected === i ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <td className="py-3 font-semibold">{item.name}</td>
                <td>{stats.avgEpu}</td>
                <td>{stats.top3?.join(", ")}</td>
                <td>{stats.totalPrograms}</td>
                <td>{stats.totalViews}</td>
                <td>{stats.avgMonthlyTraffic}</td>
              </tr>

              {/* Row hiển thị list programs */}
              {selected === i && item.programs && (
                <tr className="bg-gray-50">
                  <td colSpan="6" className="p-4">
                    <table className="w-full text-xs border">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="p-2">Program</th>
                          <th>EPU</th>
                          <th>Traffic</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.programs.map((p) => (
                          <tr
                            key={p.id}
                            className="border-t cursor-pointer hover:bg-blue-50"
                            onClick={() => window.open(p.url, "_blank")} // ✅ click row mở link
                          >
                            <td className="p-2">
                              {p.name}
                              <button
                                className="ml-2 text-blue-600 underline"
                                onClick={(e) => {
                                  e.stopPropagation(); // tránh trigger row
                                  window.open(p.url, "_blank"); // mở link riêng
                                }}
                              >
                                Start Earning
                              </button>
                            </td>
                            <td>{p.epu}</td>
                            <td>{p.traffic}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
