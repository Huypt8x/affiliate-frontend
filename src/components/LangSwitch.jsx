import React from "react";
import i18n from "../i18n";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "tr", label: "Türkçe" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "ru", label: "Русский (Russian)" },
  { code: "zh", label: "中文 (Chinese)" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "it", label: "Italiano" },
  { code: "pl", label: "Polski" },
  { code: "th", label: "ไทย (Thai)" },
  { code: "nl", label: "Nederlands" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "sw", label: "Kiswahili" },
];

export default function LangSwitch() {
  const currentLang = i18n.language;

  const handleChange = (e) => {
    const lang = e.target.value;
    // ✅ Chuyển ngôn ngữ ngay lập tức
    i18n.changeLanguage(lang);
    // Lưu lựa chọn vào localStorage để giữ trạng thái khi refresh
    localStorage.setItem("lang", lang);
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      className="bg-transparent border rounded-md px-2 py-1 text-white dark:text-white"
    >
      {LANGUAGES.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className={`${
            lang.code === currentLang
              ? "font-semibold opacity-100"
              : "opacity-50 hover:opacity-80"
          } text-black dark:text-white`}
        >
          {lang.label}
        </option>
      ))}
    </select>
  );
}
