import React from 'react'

const sortOptions = [
  { value: "A-Z", label: "A–Z" },
  { value: "Z-A", label: "Z–A" },
  { value: "Commission", label: "Commission" },
  { value: "EPU", label: "EPU" },
  { value: "Traffic", label: "Monthly Traffic" },
  { value: "Programs", label: "Total Programs" }
];

export default function AffiliateSort({ sort, setSort }) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Sort:</label>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
