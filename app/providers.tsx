'use client'

import { TooltipProvider } from '@components/ui'

export function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
}
