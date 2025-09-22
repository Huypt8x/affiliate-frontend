import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

export default function TopPrograms() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Gọi API /top-programs
    fetch(`${API_BASE_URL}/top-programs`)
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching top programs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading top programs...</p>;

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">🏆 Top Affiliate Programs</h2>
      {programs.length === 0 ? (
        <p>No top programs available</p>
      ) : (
        <ul className="space-y-4">
          {programs.map((prog) => (
            <li key={prog.id} className="border-b pb-2">
              <h3 className="font-semibold">{prog.title}</h3>
              <p className="text-gray-600">{prog.description}</p>
              <a
                href={prog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🔗 Visit Program
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
