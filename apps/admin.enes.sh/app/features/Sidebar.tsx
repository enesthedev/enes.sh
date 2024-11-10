'use client'

import { Menu } from '@/app/components'
import { Navigation } from '@/app/constants'
import { Welcome } from '@/app/features'
import { useStore } from '@/app/hooks'
import { defaultSidebar, useSidebar } from '@enes-sh/ui'
import { cn } from '@enes-sh/utils'

const Sidebar = () => {
  const { getOpenState, setIsHover, settings } = useStore(useSidebar, (x) => x, defaultSidebar)
  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-screen -translate-x-full bg-white backdrop-blur transition-[width] duration-300 ease-in-out supports-[backdrop-filter]:bg-white/50 lg:translate-x-0',
        !getOpenState() ? 'w-[90px]' : 'w-72',
        settings.disabled && 'hidden'
      )}
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='relative flex h-full flex-col overflow-y-auto border-r px-3 py-4'
      >
        <Welcome />
        <Menu isOpen={getOpenState()} items={Navigation} />
      </div>
    </aside>
  )
}

export { Sidebar }
