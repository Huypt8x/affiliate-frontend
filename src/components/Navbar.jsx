import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./LangSwitch";
import programs from "../seed/programs";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const itemRefs = useRef([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleFocusSearch = () => {
      if (inputRef.current) {
        inputRef.current.focus();
        setShowSuggestions(true);
      }
    };
    window.addEventListener("focusSearch", handleFocusSearch);
    return () => window.removeEventListener("focusSearch", handleFocusSearch);
  }, []);

  const suggestions = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return [];
    return programs
      .filter((p) => p.name.toLowerCase().includes(keyword))
      .slice(0, 8);
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/?search=${encodeURIComponent(search)}`);
    else navigate("/");
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  const handleSelectSuggestion = (name) => {
    setSearch(name);
    navigate(`/?search=${encodeURIComponent(name)}`);
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSuggestions(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const highlightMatch = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="text-blue-600 dark:text-blue-400 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const newIndex = (prev + 1) % suggestions.length;
        scrollIntoView(newIndex);
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const newIndex = prev <= 0 ? suggestions.length - 1 : prev - 1;
        scrollIntoView(newIndex);
        return newIndex;
      });
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeIndex].name);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveIndex(-1);
    }
  };

  const scrollIntoView = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full header-shadow bg-blue-600 dark:bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* ✅ Logo với chữ S lớn */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow">
            <span className="text-blue-600 font-bold text-3xl">S</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-semibold text-xl leading-none">
              Super Affiliate
            </div>
            <div className="text-white/80 text-xs -mt-0.5">
              superaffiliatetool.com
            </div>
          </div>
        </Link>

        {/* 🔍 Search + Menu */}
        <nav className="flex items-center gap-4 relative">
          <form onSubmit={handleSearch} className="relative" ref={dropdownRef}>
            <input
              ref={inputRef}
              type="text"
              value={search}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search Programs..."
              className="pl-8 pr-3 py-1 rounded-full text-black dark:text-white bg-white dark:bg-slate-800 border focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            {/* suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute top-full mt-1 left-0 w-full z-50">
                <ul className="bg-white dark:bg-slate-800 border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((s, idx) => (
                      <li
                        key={s.id}
                        ref={(el) => (itemRefs.current[idx] = el)}
                        onClick={() => handleSelectSuggestion(s.name)}
                        className={`px-4 py-2 cursor-pointer flex justify-between items-center ${
                          idx === activeIndex
                            ? "bg-blue-100 dark:bg-slate-700"
                            : "hover:bg-blue-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-black dark:text-white">
                          {highlightMatch(s.name, search)}
                        </span>
                        {s.categoryLabel && (
                          <span className="text-gray-400 text-xs ml-3">
                            {s.categoryLabel}
                          </span>
                        )}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-400 text-sm">
                      No results
                    </li>
                  )}
                </ul>
              </div>
            )}
          </form>

          {/* Links */}
          <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
            Home
          </NavLink>
          <NavLink to="/affiliate" className={({ isActive }) => (isActive ? "underline" : "")}>
            Affiliate
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => (isActive ? "underline" : "")}>
            Pricing
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "underline" : "")}>
            Blog
          </NavLink>

          <LangSwitch />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
