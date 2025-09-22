import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./LangSwitch";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/programs?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="w-full header-shadow bg-blue-600 dark:bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Super Affiliate
        </Link>
        <nav className="flex items-center gap-4">
          {/* 🔍 Ô tìm kiếm ngay trên top bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Programs..."
              className="pl-8 pr-3 py-1 rounded-full text-black dark:text-white bg-white dark:bg-slate-800 border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </form>

          <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
            {t("Home")}
          </NavLink>
          <NavLink to="/affiliate" className={({ isActive }) => (isActive ? "underline" : "")}>
            {t("Affiliate")}
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => (isActive ? "underline" : "")}>
            {t("Pricing")}
          </NavLink>

          <LangSwitch />
          <ThemeToggle />

          {/* 🚫 Tạm ẩn Sign In - Bỏ comment khi muốn bật lại */}
          {/*
          <button className="ml-2 bg-white text-blue-600 px-4 py-1 rounded-full font-medium">
            {t("Sign In")}
          </button>
          */}
        </nav>
      </div>
    </header>
  );
}
