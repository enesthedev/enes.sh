import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  localePrefix: 'as-needed',
  defaultLocale: 'tr',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
