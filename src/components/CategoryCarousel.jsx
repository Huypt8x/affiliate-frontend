import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="relative w-full mb-6 flex items-center">
      {/* Nút trái */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="flex-shrink-0 mr-3 w-10 h-10 flex items-center justify-center 
                   bg-blue-600 text-white shadow rounded-full 
                   hover:bg-blue-700 transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Thanh categories */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-3 py-2 no-scrollbar"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex-none px-4 py-2 rounded-full border text-sm font-medium
                       hover:bg-blue-600 hover:text-white cursor-pointer transition"
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Nút phải */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="flex-shrink-0 ml-3 w-10 h-10 flex items-center justify-center 
                   bg-blue-600 text-white shadow rounded-full 
                   hover:bg-blue-700 transition"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
