import React from "react";

export default function ProgramTable({ programs }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">EPU</th>
            <th className="text-left p-2">Commission</th>
            <th className="text-left p-2">Monthly Traffic</th>
            <th className="text-left p-2">Recurring</th>
            <th className="text-left p-2">Pricing</th>
            <th className="text-left p-2">Country</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <div className="flex flex-col">
                  {/* 🔥 Đây là phần thêm category mờ */}
                  <span className="font-semibold">{p.name}</span>
                  {p.category && (
                    <span className="text-gray-400 text-sm">{p.category}</span>
                  )}
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
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
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
