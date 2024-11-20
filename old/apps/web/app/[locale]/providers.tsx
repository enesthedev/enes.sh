import { TooltipProvider } from '@enes-sh/ui'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export async function Providers({ children }: { children: React.ReactNode }) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </NextIntlClientProvider>
  )
}
