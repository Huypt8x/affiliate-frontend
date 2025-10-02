import React from "react";

const BG_COLORS = [
  "bg-blue-50", "bg-indigo-50", "bg-pink-50", "bg-green-50",
  "bg-yellow-50", "bg-purple-50", "bg-rose-50", "bg-sky-50"
];

// Hàm helper lấy favicon
const getFavicon = (url) => {
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
  } catch {
    return null;
  }
};

export default function CategoryCard({ data }) {
  const color = BG_COLORS[data.id % BG_COLORS.length];

  // ✅ Ưu tiên lấy favicon từ URL -> nếu không có -> lấy từ program đầu tiên
  const sourceUrl = data.url || data.programs?.[0]?.url;
  const favicon = sourceUrl ? getFavicon(sourceUrl) : null;

  const fallbackIcon = "https://cdn-icons-png.flaticon.com/512/4712/4712027.png";
  const link = sourceUrl || `/programs?category=${encodeURIComponent(data.name)}`;

  return (
    <div className={`p-5 rounded-2xl border ${color} flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden">
              {favicon ? (
                <img
                  src={favicon}
                  alt={data.name}
                  className="w-8 h-8"
                  onError={(e) => (e.currentTarget.src = fallbackIcon)}
                />
              ) : data.logo ? (
                <img src={data.logo} alt={data.name} className="w-10 h-10 object-contain" />
              ) : (
                <img src={fallbackIcon} alt="default" className="w-8 h-8" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{data.name}</h3>
              <div className="text-sm text-slate-500 mt-0.5">
                Avg EPU: <span className="font-medium text-slate-700">{data.avgEpu}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            {data.popular && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                ⭐ Popular
              </span>
            )}
            {data.trending && (
              <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                🔥 Trending
              </span>
            )}
          </div>
        </div>

        {/* Top 3 programs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.top3?.map((p, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-white/60 backdrop-blur rounded-full border text-slate-700">
              {p}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
          <div>
            <div className="text-xs text-slate-400">Total Programs</div>
            <div className="font-medium text-slate-800">{data.totalPrograms ?? "-"}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Total Views</div>
            <div className="font-medium text-slate-800">{data.totalViews ?? "-"}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Avg Monthly</div>
            <div className="font-medium text-slate-800">{data.avgMonthlyTraffic ?? "-"}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Avg EPU</div>
            <div className="font-medium text-slate-800">{data.avgEpu ?? "-"}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <a
          href={link}
          target={sourceUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold shadow hover:scale-[1.02] transition text-center flex items-center gap-2"
        >
          🚀 Start Earning
        </a>

        <div className="text-xs text-slate-500">
          <div>{data.top3?.length ?? 0} featured</div>
        </div>
      </div>
    </div>
  );
}
