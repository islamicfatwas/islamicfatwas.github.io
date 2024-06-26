import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://islamicfatwas.github.io/", // replace this with your deployed domain
  author: "instagram @Alsalafiyyah",
  desc: "Knowledge of Shariah",
  title: "Islamic Fatwas",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
  pageSize: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const ARABIC: Arabic = {
  url: "/ar/",
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
  comment: "",
  more: "المزيد",
  rssfeed: "تغذية RSS",
  categories: "التصنيفات",
  fatwas: "الفتاوى",
  source: "المصدر",
  english: "English",
  search: "البحث",
  featured: "تعرف",
  gettoknow: "تعرف",
  notfound: "الصفحة التي طلبتها غير موجودة",
  poweredby: "مدعوم من",
  builtwith: "Built with",
  github: "جيت هب",
  shareto: "شارك على",
  goback: "Go back",
  gotohome: "الانتقال للصفحة الرئيسية",
  ar: "عربي",
  en: "En",
  xtwitter: "X تعتبر",
  telegram: "تيليجرام",
  whatsapp: "واتساب",
  facebook: "فيسبوك",
  instagram: "إنستقرام",
  tiktok: "تيك توك",
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const taggedAR: TagObjects = [
  {
    name: "الحج والعمرة",
    href: "/ar/tags/الحج/",
  },
  {
    name: "الصلاة",
    href: "/ar/tags/الصلاة/",
  },
  {
    name: "الصيام",
    href: "/ar/tags/الصيام/",
  },
  {
    name: "الزكاة",
    href: "/ar/tags/الزكاة/",
  },
  {
    name: "الطهارة",
    href: "/ar/tags/الطهارة/",
  },
  {
    name: "المعاملات",
    href: "/ar/tags/المعاملات/",
  },
  {
    name: "الجنائز",
    href: "/ar/tags/الجنائز/",
  },
];

export const SOCIALS_AR: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/islamicfatwas",
    linkTitle: `${ARABIC.title} on ${ARABIC.github}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/Alsalafiyyah",
    linkTitle: `${ARABIC.title} on ${ARABIC.instagram}`,
    active: true,
  },
  {
    name: "RSS",
    href: "/ar/rss",
    linkTitle: `${ARABIC.title} on ${ARABIC.rssfeed}`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:alsalafiyyah@icloud.com",
    linkTitle: `Send an email to ${ARABIC.title}`,
    active: true,
  },
];

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/islamicfatwas",
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
    name: "RSS",
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
