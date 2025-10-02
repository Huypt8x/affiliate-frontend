// src/seed/programs.js
const programs = [
  // === AI Ads ===
  { id: 4, name: "Foreplay", categoryLabel: "AI Ads", epu: "$80", traffic: "600K", commission: "30%", recurring: "12 months", pricing: "$12 - $59", country: "US", url: "https://foreplay.co/?via=huy-do" },
  { id: 5, name: "PiPiAds", categoryLabel: "AI Ads", epu: "$70", traffic: "500K", commission: "20%", recurring: "12 months", pricing: "$9 - $49", country: "US", url: " https://www.pipiads.com/?invite=HUY888" },
  { id: 6, name: "Quickads", categoryLabel: "AI Ads", epu: "$60", traffic: "450K", commission: "25%", recurring: "12 months", pricing: "$10 - $59", country: "US", url: "https://www.quickads.ai/?ref=huyquang" },

  // === AI All In One ===
  { id: 7, name: "Monica", categoryLabel: "AI All In One", epu: "$43.5", traffic: "9.8M", commission: "25%", recurring: "12 months", pricing: "$4.1 - $24.9", country: "CN", url: "https://monica.im/invitation-affiliate?ref=njmwmdn&ref_aff=njmwmdn" },
  { id: 8, name: "Sider", categoryLabel: "AI All In One", epu: "$49.68", traffic: "5.2M", commission: "15%", recurring: "Lifetime", pricing: "$6.7 - $30", country: "US", url: "https://sider.trackdesk.com/sign-up?referralAccountId=cb391350-f4d1-46dd-9f1a-b2b03900e1b1" },
  { id: 9, name: "Merlin AI", categoryLabel: "AI All In One", epu: "$118.8", traffic: "2.1M", commission: "30%", recurring: "Lifetime", pricing: "$15 - $29", country: "US", url: "https://www.getmerlin.in/chat?ref=nzc0zje" },

  // === AI Assistant ===
  { id: 10, name: "Any.do", categoryLabel: "AI Assistant", epu: "$18", traffic: "1.3M", commission: "20%", recurring: "12 months", pricing: "$4.99 - $9.99", country: "IL", url: "https://ambassadors.any.do/?fpr=huy96" },
  { id: 11, name: "Cody", categoryLabel: "AI Assistant", epu: "$65", traffic: "200K", commission: "25%", recurring: "12 months", pricing: "$10 - $50", country: "US", url: "https://meetcody.ai?fpr=huy89" },

  // === AI Audio ===
  { id: 12, name: "ElevenLabs", categoryLabel: "AI Audio", epu: "$136.18", traffic: "23.6M", commission: "22%", recurring: "12 months", pricing: "$4.17 - $99", country: "US", url: "https://try.elevenlabs.io/v7et6xitaycw" },
  { id: 14, name: "Mubert", categoryLabel: "AI Audio", epu: "$55", traffic: "1.5M", commission: "25%", recurring: "Lifetime", pricing: "$8 - $49", country: "US", url: "https://mubert.com/render/pricing?via=huy-do" },

  // === AI Chatbot ===
  { id: 15, name: "LiveChat", categoryLabel: "AI Chatbot", epu: "$149.31", traffic: "2.0M", commission: "20%", recurring: "Lifetime", pricing: "$20 - $59", country: "US", url: "https://www.livechat.com/?a=oLMr9IqHR&utm_campaign=pp_livechat-default&utm_source=PP" },
  { id: 16, name: "ChatBot", categoryLabel: "AI Chatbot", epu: "$70", traffic: "300K", commission: "25%", recurring: "12 months", pricing: "$15 - $79", country: "US", url: "https://fastbots.ai/?via=huy-do" },
  { id: 17, name: "Dante AI", categoryLabel: "AI Chatbot", epu: "$80", traffic: "400K", commission: "20%", recurring: "12 months", pricing: "$19 - $49", country: "US", url: "https://dante-ai.com/?via=huy" },

  // === AI Design ===
  { id: 18, name: "Fotor", categoryLabel: "AI Design", epu: "$42.12", traffic: "16.2M", commission: "25%-35%", recurring: "12 months", pricing: "$8 - $99", country: "CN", url: "https://fotor.com" },
  { id: 19, name: "Kittl", categoryLabel: "AI Design", epu: "$120", traffic: "3.0M", commission: "20%", recurring: "12 months", pricing: "$10 - $90", country: "DE", url: "https://kittl.com" },
  { id: 20, name: "Looka", categoryLabel: "AI Design", epu: "$33.75", traffic: "2.4M", commission: "25%", recurring: "Lifetime", pricing: "$96 - $129", country: "CA", url: "https://looka.com" },

  // === AI Detector ===
  { id: 21, name: "Scispace", categoryLabel: "AI Detector", epu: "$9.18", traffic: "5.2M", commission: "18%", recurring: "One time", pricing: "$12 - $90", country: "IN", url: "https://scispace.com/?via=huy-do" },
  { id: 22, name: "Originality.ai", categoryLabel: "AI Detector", epu: "$288", traffic: "1.8M", commission: "25%", recurring: "12 months", pricing: "$12.95 - $179", country: "CA", url: "https://originality.ai" },

  // === AI Music ===

  // === AI Productivity ===
  { id: 24, name: "SlidesAI", categoryLabel: "AI Productivity", epu: "$50", traffic: "500K", commission: "20%", recurring: "12 months", pricing: "$10 - $30", country: "US", url: "slidesai.io/?ref=huy8b" },
  { id: 25, name: "Taskade", categoryLabel: "AI Productivity", epu: "$80", traffic: "700K", commission: "25%", recurring: "12 months", pricing: "$15 - $50", country: "US", url: "https://taskade.com/?via=knwzed" },

  // === AI SEO ===
  { id: 26, name: "Rank Math", categoryLabel: "AI SEO", epu: "$102.57", traffic: "1.1M", commission: "30%", recurring: "2 months", pricing: "$83.88 - $599.88", country: "IN", url: "https://rankmath.com" },
  { id: 27, name: "Frase", categoryLabel: "AI SEO", epu: "$75", traffic: "200K", commission: "20%", recurring: "12 months", pricing: "$15 - $99", country: "US", url: "https://www.frase.io/?via= huy57" },

  // === AI Social Media ===
  { id: 28, name: "Typefully", categoryLabel: "AI Social Media", epu: "$90", traffic: "600K", commission: "20%", recurring: "12 months", pricing: "$10 - $29", country: "US", url: "https://typefully.com/?via=huy-do" },

  // === AI Video ===
  { id: 30, name: "VEED", categoryLabel: "AI Video", epu: "$104.4", traffic: "11.6M", commission: "30%", recurring: "12 months", pricing: "$9 - $49", country: "GB", url: "https://veed.cello.so/omxUH90NcJs" },
  { id: 31, name: "Invideo AI", categoryLabel: "AI Video", epu: "$27.75", traffic: "7.4M", commission: "25%-50%", recurring: "One time", pricing: "$28 - $120", country: "US", url: "https://invideo.io/i/huyd-77f61190-ws" },
  { id: 32, name: "HeyGen", categoryLabel: "AI Video", epu: "$75.6", traffic: "7.0M", commission: "20%", recurring: "12 months", pricing: "$24 - $39", country: "US", url: "https://heygen.com" },
  { id: 33, name: "Kapwing", categoryLabel: "AI Video", epu: "$144", traffic: "5.2M", commission: "25%", recurring: "12 months", pricing: "$16 - $64", country: "US", url: "https://www.kapwing.com" },
  { id: 34, name: "Vidnoz", categoryLabel: "AI Video", epu: "$98.16", traffic: "4.6M", commission: "50%-70%", recurring: "4 months", pricing: "$6.74 - $74.99", country: "US", url: "https://vidnoz.com" },

  // === AI Workflow ===
  { id: 46, name: "Make", categoryLabel: "AI Workflow", epu: "$103.68", traffic: "5.7M", commission: "20%", recurring: "24 months", pricing: "$9 - $34.12", country: "CZ", url: "https://www.make.com/en/register?pc=huyauto" },

  // === AI Tools ===
  { id: 47, name: "GoHighLevel", categoryLabel: "AI Tools", epu: "$945.6", traffic: "8.5M", commission: "40%", recurring: "12 months", pricing: "$97 - $297", country: "US", url: "https://www.gohighlevel.com/?fp_ref=huy-quang49" },

  // === AI Writing ===
  { id: 48, name: "Writesonic", categoryLabel: "AI Writing", epu: "$120", traffic: "5M", commission: "30%", recurring: "12 months", pricing: "$19 - $99", country: "US", url: "https://writesonic.com" },
  { id: 49, name: "Rytr", categoryLabel: "AI Writing", epu: "$90", traffic: "3M", commission: "25%", recurring: "12 months", pricing: "$9 - $29", country: "US", url: "https://rytr.me/?via=huy-quang" },

  // === AI Notetaker ===
  { id: 50, name: "Fireflies", categoryLabel: "AI Notetaker", epu: "$88", traffic: "1.5M", commission: "25%", recurring: "12 months", pricing: "$10 - $49", country: "US", url: "https://fireflies.ai/?fpr=huy-quang69" },

  // === AI Photo ===
  { id: 51, name: "ProfilePicture.AI", categoryLabel: "AI Photo", epu: "$45", traffic: "600K", commission: "20%", recurring: "One time", pricing: "$8 - $49", country: "US", url: "https://www.profilepicture.ai/?via=huy-quang" },

  // === AI Thumbnail ===
  { id: 52, name: "1of10", categoryLabel: "AI Thumbnail", epu: "$60", traffic: "250K", commission: "30%", recurring: "One time", pricing: "$10 - $39", country: "US", url: "https://1of10.com/?via=huy-quang" },
];

export default programs;
