import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const defaultIcon =
  "https://cdn-icons-png.flaticon.com/512/4712/4712027.png";

const getFavicon = (url) => {
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(
      url
    ).hostname}&sz=32`;
  } catch {
    return defaultIcon;
  }
};

function parseTraffic(str) {
  if (!str) return 0;
  const val = parseFloat(str);
  if (str.toLowerCase().includes("k")) return val * 1000;
  if (str.toLowerCase().includes("m")) return val * 1_000_000;
  return val;
}

function CategoryCarousel({ active, setActive }) {
  const scrollRef = useRef(null);
  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <div className="relative w-full my-4">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <ChevronLeft size={20} />
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
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search") || "";

  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [page, setPage] = useState(1);
  const [filterMode, setFilterMode] = useState(null);
  const pageSize = 20;

  const tableRef = useRef(null);

  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setPage(1);
    if (searchTerm) setActiveCategory("All Programs");
    scrollToTop();
  }, [searchTerm]);

  useEffect(() => {
    scrollToTop();
  }, [activeCategory]);

  const search = searchTerm.trim().toLowerCase();

  let filteredPrograms = programs.filter((p) => {
    const name = (p?.name || "").toLowerCase();
    const category = (p?.categoryLabel || "").toLowerCase();
    const matchCategory =
      activeCategory === "All Programs" ||
      category === activeCategory.toLowerCase();
    const matchSearch =
      search === "" || name.includes(search) || category.includes(search);
    return matchCategory && matchSearch;
  });

  if (filterMode === "trending") {
    filteredPrograms = [...filteredPrograms]
      .filter((p) => parseTraffic(p.traffic) >= 500000)
      .sort((a, b) => parseTraffic(b.traffic) - parseTraffic(a.traffic));
  } else if (filterMode === "weekly") {
    filteredPrograms = [...filteredPrograms].filter((p) => {
      const months = parseInt(p.recurring);
      return !isNaN(months) && months <= 3;
    });
  }

  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const currentData = filteredPrograms.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center mb-6">
        {t("Top Affiliate Programs")}
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4 justify-center">
        <button
          className={`px-4 py-2 rounded-full ${
            filterMode === "trending"
              ? "bg-blue-600 text-white"
              : "border hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => {
            setFilterMode((prev) => (prev === "trending" ? null : "trending"));
            setPage(1);
            scrollToTop();
          }}
        >
          {t("Trending")}
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            filterMode === "weekly"
              ? "bg-blue-600 text-white"
              : "border hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => {
            setFilterMode((prev) => (prev === "weekly" ? null : "weekly"));
            setPage(1);
            scrollToTop();
          }}
        >
          {t("Weekly")}
        </button>

        {searchTerm && (
          <button
            onClick={() => {
              navigate("/");
              setActiveCategory("All Programs");
              setPage(1);
              setFilterMode(null);
              scrollToTop();
            }}
            className="px-4 py-2 border rounded-full text-slate-600 hover:bg-slate-100"
          >
            {t("Clear Filter")}
          </button>
        )}
      </div>

      {/* categories */}
      <CategoryCarousel active={activeCategory} setActive={setActiveCategory} />

      {/* table */}
      <div ref={tableRef} className="table-card">
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
              {currentData.map((p, idx) => (
                <tr
                  key={p.id ?? idx}
                  className="border-t hover:bg-blue-50 cursor-pointer"
                  onClick={() => window.open(p.url, "_blank")}
                >
                  <td className="py-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <img
                        loading="lazy"
                        src={
                          p.logo || (p.url && getFavicon(p.url)) || defaultIcon
                        }
                        alt={p.name}
                        className="w-6 h-6 rounded bg-slate-200 object-contain"
                        onError={(e) => (e.currentTarget.src = defaultIcon)}
                      />
                      {p.name}
                    </div>
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
                      onClick={(e) => e.stopPropagation()}
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

        {/* pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                scrollToTop();
              }}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              {t("Prev")}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => {
                  setPage(num);
                  scrollToTop();
                }}
                className={`px-3 py-1 border rounded ${
                  page === num
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                scrollToTop();
              }}
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
