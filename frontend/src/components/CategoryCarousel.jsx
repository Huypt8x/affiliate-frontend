import React, { useRef } from "react";
import categories from "../seed/categories";

export default function CategoryCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mb-6">
      {/* Nút trái */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        ◀
      </button>

      {/* Thanh categories */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-3 px-10 py-2 no-scrollbar"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex-none bg-gray-100 px-4 py-2 rounded-lg shadow text-sm font-medium"
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Nút phải */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        ▶
      </button>
    </div>
  );
}
