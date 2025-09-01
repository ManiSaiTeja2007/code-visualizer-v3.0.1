// i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Define your supported locales
  const locales = ['en', 'es'];
  const defaultLocale = 'en';

  // If incoming locale isn’t in the list, fallback
  const currentLocale = locales.includes(locale) ? locale : defaultLocale;

  try {
    return {
      locale: currentLocale, // ✅ required
      messages: (await import(`./src/i18n/messages/${currentLocale}.json`)).default
    };
  } catch {
    return {
      locale: defaultLocale, // ✅ required
      messages: (await import(`./src/i18n/messages/${defaultLocale}.json`)).default
    };
  }
});
