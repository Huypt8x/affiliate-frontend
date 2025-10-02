import React, { useMemo, useState } from "react";
import programsSeed from "../seed/programs";
import CategoryCard from "../components/affiliate/CategoryCard";

export default function AffiliatePage() {
  const categories = programsSeed;
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filterTrending, setFilterTrending] = useState(false);
  const [filterWeekly, setFilterWeekly] = useState(false);

  const filtered = useMemo(() => {
    let arr = [...categories];

    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      arr = arr.filter((c) => c.name.toLowerCase().includes(q));
    }

    if (filterTrending) arr = arr.filter((c) => c.trending);
    if (filterWeekly) arr = arr.filter((c) => c.weekly);

    if (sortBy === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }, [categories, filterText, sortBy, filterTrending, filterWeekly]);

  const handleExplore = (category) => {
    if (category.programs?.length > 0) {
      window.open(category.programs[0].url, "_blank");
    } else {
      console.warn("No program link found for category", category.name);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold">Affiliate Programs</h1>

        <div className="flex items-center gap-3">
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search categories..."
            className="border px-3 py-2 rounded-md w-56"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="featured">Featured</option>
            <option value="name">Name A → Z</option>
          </select>

          {(filterTrending || filterWeekly) && (
            <button
              onClick={() => {
                setFilterTrending(false);
                setFilterWeekly(false);
              }}
              className="text-sm text-blue-600 underline"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cat, idx) => (
          <CategoryCard
            key={cat.id ?? idx}
            data={cat}
            onExplore={handleExplore}
          />
        ))}
      </div>
    </div>
  );
}
