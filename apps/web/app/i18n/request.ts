import { routing } from '@/app/i18n/routing'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as 'en' | 'tr')) notFound()
  return {
    messages: (await import(`@/app/messages/${locale}.json`)).default
  }
})
