import { routing } from '@/app/i18n/routing';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './types';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`@/app/messages/${locale}.json`)).default,
  };
});
