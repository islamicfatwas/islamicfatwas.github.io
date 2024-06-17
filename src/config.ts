import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://salafmanhaj.github.io/", // replace this with your deployed domain
  author: "Dr.Rashid Al-Almani",
  desc: "Knowledge of Shariah",
  title: "Manhaj of The Salaf",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const ENGLISH: English = {
  url: "https://salafmanhaj.github.io/", // replace this with your deployed domain
  muftis: "Mufti(s)",
  copyright: "All rights reserved",
  title: "Manhaj of The Salaf",
  home: "Home",
  audios: "Audios",
  backtotop: "Back to top",
  next: "Next",
  prev: "Prev",
  articles: "Articles",
  comments: "Cooments",
  more: "More",
  rssfeed: "RSS Feed",
  categories: "Categories",
  fatwas: "Fatwas",
  source: "Source(s)",
  english: "English",
  search: "Search",
  featured: "Featured",
  notfound: "Page not found",
  poweredby: "Powered by",
  buildwith: "Build with",
  github: "Github",
  shareto: "Share on",
  goback: "Go back",
  gotohome: "Go to home",
};

export const ARABIC: Arabic = {
  url: "https://salafmanhaj.github.io/ar", // replace this with your deployed domain
  muftis: "المفتي",
  copyright: "جميع الحقوق محفوظة",
  title: "منهج السلف",
  home: "الرئيسية",
  audios: "صوتيات",
  backtotop: "العودة إلى أعلى",
  next: "التالي",
  prev: "السابق",
  articles: "مقالات",
  comments: "التعليقات",
  more: "المزيد",
  rssfeed: "تغذية RSS",
  categories: "التصنيفات",
  fatwas: "الفتاوى",
  source: "المصدر",
  english: "English",
  search: "البحث",
  featured: "Featured",
  notfound: "الصفحة التي طلبتها غير موجودة",
  poweredby: "مدعوم من",
  buildwith: "Build with",
  github: "جيت هب",
  shareto: "شارك على",
  goback: "Go back",
  gotohome: "الانتقال للصفحة الرئيسية",
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/salafmanhaj",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/Alsalafiyyah",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Rss",
    href: "/rss",
    linkTitle: `${SITE.title} on RSS`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
