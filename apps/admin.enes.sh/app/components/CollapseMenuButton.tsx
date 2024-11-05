'use client'

import { ChevronDown, Dot, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@enes-sh/ui'

import { cn } from '@enes-sh/utils'

import { Submenu } from '@/shared/types'
import { usePathname } from 'next/navigation'

interface CollapseMenuButtonProps {
  icon: LucideIcon
  label: string
  active: boolean
  submenus: Submenu[]
  isOpen: boolean | undefined
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  submenus,
  isOpen
}: CollapseMenuButtonProps) {
  const pathname = usePathname()
  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active === undefined ? submenu.href === pathname : submenu.active
  )
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive)

  return isOpen ? (
    <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed} className='w-full px-0'>
      <CollapsibleTrigger className='mb-1 [&[data-state=open]>div>div>svg]:rotate-180' asChild>
        <Button variant={'link'} className='h-10 w-full justify-start px-0'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-4'>
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  'max-w-[150px] truncate',
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                'whitespace-nowrap',
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
              )}
            >
              <ChevronDown size={18} className='transition-transform duration-200' />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden'>
        {submenus.map(({ href, label, active }, index) => (
          <Button
            key={index}
            variant='link'
            className={cn(
              'mb-1 h-10 w-auto justify-start px-0',
              (href == pathname ||
                (active === undefined && href !== '/' && pathname.startsWith(href)) ||
                active) &&
                'underline'
            )}
            asChild
          >
            <Link href={href}>
              <span className='ml-2 mr-4'>
                <Dot size={18} />
              </span>
              <p
                className={cn(
                  'max-w-[170px] truncate',
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isSubmenuActive ? 'secondary' : 'ghost'}
              className='mb-1 h-10 w-full justify-start'
            >
              <div className='flex w-full items-center justify-between'>
                <div className='flex items-center'>
                  <span className={cn(isOpen === false ? '' : 'mr-4')}>
                    <Icon size={18} />
                  </span>
                  <p
                    className={cn(
                      'max-w-[200px] truncate',
                      isOpen === false ? 'opacity-0' : 'opacity-100'
                    )}
                  >
                    {label}
                  </p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side='right' align='start' alignOffset={2}>
          {label}
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side='right' sideOffset={25} align='start'>
        <DropdownMenuLabel className='max-w-[190px] truncate'>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label, active }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link
              className={`cursor-pointer ${
                ((active === undefined && pathname === href) || active) && 'bg-secondary'
              }`}
              href={href}
            >
              <p className='max-w-[180px] truncate'>{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className='fill-border' />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
