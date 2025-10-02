import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translations = {
  "Home": "Home",
  "Affiliate": "Affiliate",
  "Pricing": "Pricing",
  "Theme": "Theme",
  "Sign In": "Sign In",
  "Top Affiliate Programs": "Top Affiliate Programs",
  "Apply Filters": "Apply Filters",
  "Clear All": "Clear All",
  "Trending": "Trending",
  "Weekly": "Weekly",
  "Visit": "Visit",
  "Search Programs": "Search Programs"
};

const resources = {
  en: { translation: translations },
  vi: {
    translation: {
      "Home": "Trang chủ",
      "Affiliate": "Affiliate",
      "Pricing": "Bảng giá",
      "Theme": "Giao diện",
      "Sign In": "Đăng nhập",
      "Top Affiliate Programs": "Top chương trình Affiliate",
      "Apply Filters": "Áp dụng bộ lọc",
      "Clear All": "Xóa",
      "Trending": "Thịnh hành",
      "Weekly": "Hàng tuần",
      "Visit": "Truy cập",
      "Search Programs": "Tìm kiếm chương trình"
    }
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "Affiliate": "Affiliation",
      "Pricing": "Tarification",
      "Theme": "Thème",
      "Sign In": "Se connecter",
      "Top Affiliate Programs": "Meilleurs programmes d'affiliation",
      "Apply Filters": "Appliquer les filtres",
      "Clear All": "Tout effacer",
      "Trending": "Tendance",
      "Weekly": "Hebdomadaire",
      "Visit": "Visiter",
      "Search Programs": "Rechercher des programmes"
    }
  },
  de: {
    translation: {
      "Home": "Startseite",
      "Affiliate": "Partnerprogramm",
      "Pricing": "Preise",
      "Theme": "Thema",
      "Sign In": "Anmelden",
      "Top Affiliate Programs": "Top-Partnerprogramme",
      "Apply Filters": "Filter anwenden",
      "Clear All": "Alles löschen",
      "Trending": "Trend",
      "Weekly": "Wöchentlich",
      "Visit": "Besuchen",
      "Search Programs": "Programme suchen"
    }
  },
  es: {
    translation: {
      "Home": "Inicio",
      "Affiliate": "Afiliado",
      "Pricing": "Precios",
      "Theme": "Tema",
      "Sign In": "Iniciar sesión",
      "Top Affiliate Programs": "Mejores programas de afiliados",
      "Apply Filters": "Aplicar filtros",
      "Clear All": "Borrar todo",
      "Trending": "Tendencias",
      "Weekly": "Semanal",
      "Visit": "Visitar",
      "Search Programs": "Buscar programas"
    }
  },
  zh: {
    translation: {
      "Home": "首页",
      "Affiliate": "联盟",
      "Pricing": "价格",
      "Theme": "主题",
      "Sign In": "登录",
      "Top Affiliate Programs": "顶级联盟计划",
      "Apply Filters": "应用筛选",
      "Clear All": "清除全部",
      "Trending": "趋势",
      "Weekly": "每周",
      "Visit": "访问",
      "Search Programs": "搜索项目"
    }
  },
  ja: {
    translation: {
      "Home": "ホーム",
      "Affiliate": "アフィリエイト",
      "Pricing": "料金",
      "Theme": "テーマ",
      "Sign In": "ログイン",
      "Top Affiliate Programs": "トップアフィリエイトプログラム",
      "Apply Filters": "フィルターを適用",
      "Clear All": "すべてクリア",
      "Trending": "トレンド",
      "Weekly": "毎週",
      "Visit": "訪問",
      "Search Programs": "プログラムを検索"
    }
  },
  hi: {
    translation: {
      "Home": "मुखपृष्ठ",
      "Affiliate": "सहबद्ध",
      "Pricing": "मूल्य निर्धारण",
      "Theme": "थीम",
      "Sign In": "साइन इन करें",
      "Top Affiliate Programs": "शीर्ष सहबद्ध कार्यक्रम",
      "Apply Filters": "फ़िल्टर लागू करें",
      "Clear All": "सभी हटाएं",
      "Trending": "ट्रेंडिंग",
      "Weekly": "साप्ताहिक",
      "Visit": "देखें",
      "Search Programs": "प्रोग्राम खोजें"
    }
  }
  // 👉 bạn có thể thêm ko, th, ar, ru, pt, id, tr... theo nhu cầu
};

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
