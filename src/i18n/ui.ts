export const languages = {
  en: 'English',
  ar: 'عربي',
};

export const defaultLang = 'en';
export const locales = ["en", "ar"]
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		ar: 'blog'
	},
}

export const ui = {
  en: {
    'nav.title': 'Ialamic Fatwas',
    'home': 'Home',
    'nav.fatwas': 'Fatwas',
    'nav.audios': 'Audios',
    'nav.search': 'Search',
    'nav.lang': 'عربي',
    'categories': 'Categories',
    'more': 'View all',
    'backtotop': 'Back to top',
    'next': 'Next',
    'prev': 'Prev',
    'source': 'Source(s)',
    'muftis': 'Mufti(s)',
    'featured': 'Featured',
    'gettoknow': 'Get to know',
    'shareon': 'Share on',
    'articles': 'Articles',
    'audiowarning': 'Your browser does not support the audio element.',
  },
  ar: {
    'nav.title': 'فتاوى إسلامية',
    'home': 'الرئيسية',
    'nav.fatwas': 'الفتاوى',
    'nav.audios': 'صوتيات',
    'nav.search': 'البحث',
    'nav.lang': 'English',
    'categories': 'التصنيفات',
    'more': 'المزيد',
    'backtotop': 'العودة إلى أعلى',
    'next': 'التالي',
    'prev': 'السابق',
    'source': 'المصدر',
    'muftis': 'المفتي',
    'featured': 'Featured',
    'gettoknow': 'تعرف',
    'shareon': 'شارك على',
    'articles': 'مقالات',
    'audiowarning': 'لا يدعم متصفحك عنصر الصوت',
  },
} as const;
