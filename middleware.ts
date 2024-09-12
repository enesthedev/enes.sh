import { routing } from '@app/i18n/routing'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(tr|en)/:path*']
}
