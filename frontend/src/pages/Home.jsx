import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import programs from "../seed/programs";

const categories = [
  "All Programs",
  "AI Ads",
  "AI All In One",
  "AI Assistant",
  "AI Audio",
  "AI Chatbot",
  "AI Design",
  "AI Detector",
  "AI Music",
  "AI Productivity",
  "AI SEO",
  "AI Social Media",
  "AI Video",
  "AI Workflow",
  "AI Notetaker",
  "AI Tools",
  "AI Writing",
  "AI Photo",
  "AI Thumbnail",
];

function CategoryCarousel({ active, setActive }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full my-4">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        {"<"}
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-3 px-10 scrollbar-hide"
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 border rounded-full whitespace-nowrap transition ${
              active === c
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-blue-600 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        {">"}
      </button>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [page, setPage] = useState(1);
  const pageSize = 20;

  // ✅ Lọc theo categoryLabel
  const filteredPrograms =
    activeCategory === "All Programs"
      ? programs
      : programs.filter((p) => p.categoryLabel === activeCategory);

  // ✅ Phân trang
  const totalPages = Math.ceil(filteredPrograms.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentData = filteredPrograms.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center mb-6">
        {t("Top Affiliate Programs")}
      </h1>

      {/* Filters */}
      <div className="flex gap-3 mb-4 justify-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
          {t("Trending")}
        </button>
        <button className="px-4 py-2 border rounded-full">
          {t("Weekly")}
        </button>
      </div>

      {/* ✅ Category Carousel */}
      <CategoryCarousel active={activeCategory} setActive={setActiveCategory} />

      {/* Table */}
      <div className="table-card">
        <div className="table-wrapper">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                <th>{t("Name")}</th>
                <th>{t("EPU")}</th>
                <th>{t("Commission")}</th>
                <th>{t("Monthly Traffic")}</th>
                <th>{t("Recurring")}</th>
                <th>{t("Pricing")}</th>
                <th>{t("Country")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((p) => (
                <tr
                  key={p.id}
                  className="border-t hover:bg-blue-50 cursor-pointer"
                >
                  <td className="py-4">
                    {/* ✅ Logo + Name */}
                    <div className="flex items-center gap-2 font-semibold">
                      {p.logo && (
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="w-5 h-5 rounded"
                          onError={(e) =>
                            (e.target.src =
                              "https://cdn-icons-png.flaticon.com/512/4712/4712027.png")
                          }
                        />
                      )}
                      {p.name}
                    </div>
                    {/* ✅ Chữ mờ category */}
                    <div className="text-xs text-slate-400">
                      {p.categoryLabel}
                    </div>
                  </td>
                  <td>{p.epu}</td>
                  <td>{p.commission}</td>
                  <td>{p.traffic}</td>
                  <td>{p.recurring}</td>
                  <td>{p.pricing}</td>
                  <td>{p.country}</td>
                  <td>
                    <a
                      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Start Earning
                    </a>
                  </td>
                </tr>
              ))}
              {filteredPrograms.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-slate-400">
                    {t("No programs found")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              {t("Prev")}
            </button>
            <span>
              {t("Page")} {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              {t("Next")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
