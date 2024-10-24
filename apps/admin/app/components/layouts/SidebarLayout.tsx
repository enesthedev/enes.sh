'use client'

import { Sidebar } from '@/app/components/sections'
import { useStore } from '@/app/hooks'
import { defaultSidebar, useSidebar } from '@enes-sh/ui'
import { cn } from '@enes-sh/utils'

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const { getOpenState, settings } = useStore(useSidebar, (x) => x, defaultSidebar)
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-screen bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-72')
        )}
      >
        {children}
      </main>
    </>
  )
}

export { SidebarLayout }
