import { NextAuthProvider } from '@/packages/auth/providers'
import { TooltipProvider } from '@enes-sh/ui'
import type { Metadata, Viewport } from 'next'
import { Toaster } from 'sonner'

import '@/app/styles/tailwind.css'

type LayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: 'noindex, nofollow'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'black' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default async function Layout({ children, params: { locale } }: LayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <NextAuthProvider>
          <Toaster richColors={true} />
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
