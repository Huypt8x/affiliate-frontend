import React from "react";

export default function ProgramTable({ programs }) {
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-6 text-slate-400">
        No programs found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[900px] sm:min-w-full border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr className="border-b">
            <th className="text-left px-3 py-2">Name</th>
            <th className="text-left px-3 py-2">EPU</th>
            <th className="text-left px-3 py-2">Commission</th>
            <th className="text-left px-3 py-2">Monthly Traffic</th>
            <th className="text-left px-3 py-2">Recurring</th>
            <th className="text-left px-3 py-2">Pricing</th>
            <th className="text-left px-3 py-2">Country</th>
            <th className="text-left px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr
              key={p.id}
              className="border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => window.open(p.url, "_blank")}
            >
              <td className="px-3 py-2">
                <div className="flex flex-col">
                  <span className="font-semibold">{p.name}</span>
                  {p.category && (
                    <span className="text-gray-400 text-xs">{p.category}</span>
                  )}
                </div>
              </td>
              <td className="px-3 py-2">{p.epu}</td>
              <td className="px-3 py-2">{p.commission}</td>
              <td className="px-3 py-2">{p.traffic}</td>
              <td className="px-3 py-2">{p.recurring}</td>
              <td className="px-3 py-2">{p.pricing}</td>
              <td className="px-3 py-2">{p.country}</td>
              <td className="px-3 py-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // tránh click row 2 lần
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs hover:bg-blue-700"
                >
                  Start Earning
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
