module.exports = {
  locales: ['en', 'uz', 'ru'], // Add your supported locales here
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/about': ['about'],
  },
  loadLocaleFrom: (lang, ns) => import(`./locales/${lang}/${ns}.json`).then(m => m.default),
}
