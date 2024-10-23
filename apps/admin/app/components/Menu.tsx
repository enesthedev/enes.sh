'use client'

import Link from 'next/link'

import { Ellipsis, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { CollapseMenuButton } from '@/app/components'
import { Group } from '@/app/types'
import { Button, ScrollArea, Tooltip, TooltipContent, TooltipTrigger } from '@enes-sh/ui'
import { cn } from '@enes-sh/utils'
import { signOut } from 'next-auth/react'

export type MenuProps = {
  isOpen: boolean | undefined
  items: Group[]
}

export function Menu({ isOpen, items }: MenuProps) {
  const pathname = usePathname()

  return (
    <ScrollArea className='[&>div>div[style]]:!block'>
      <nav className='h-full w-full px-2 pt-4'>
        <ul className='flex h-full flex-col items-start space-y-1 px-2'>
          {items.map(({ groupLabel, menus }, index) => (
            <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className='max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground'>
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <Tooltip delayDuration={100}>
                  <TooltipTrigger className='w-full'>
                    <div className='flex w-full items-center justify-center'>
                      <Ellipsis className='h-5 w-5' />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p>{groupLabel}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <p className='pb-2'></p>
              )}
              {menus.map(({ href, label, icon: Icon, active, submenus }, index) =>
                !submenus || submenus.length === 0 ? (
                  <div className='w-full' key={index}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Button
                          variant='link'
                          className={cn(
                            'mb-1 h-10 w-auto justify-start px-0',
                            (pathname == href ||
                              (active === undefined && href !== '/' && pathname.startsWith(href)) ||
                              active) &&
                              'underline'
                          )}
                          asChild
                        >
                          <Link href={href}>
                            <span className={cn(isOpen === false ? '' : 'mr-4')}>
                              <Icon size={18} />
                            </span>
                            <p
                              className={cn(
                                'max-w-[200px] truncate',
                                isOpen === false
                                  ? '-translate-x-96 opacity-0'
                                  : 'translate-x-0 opacity-100'
                              )}
                            >
                              {label}
                            </p>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      {isOpen === false && <TooltipContent side='right'>{label}</TooltipContent>}
                    </Tooltip>
                  </div>
                ) : (
                  <div className='w-full' key={index}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active === undefined ? pathname.startsWith(href) : active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  </div>
                )
              )}

              <div className='w-full'>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Button
                      variant='link'
                      className={cn('mb-1 h-10 w-auto justify-start px-0')}
                      onClick={() => signOut()}
                      asChild
                    >
                      <Link href='javascript:void(0)'>
                        <span className={cn(isOpen === false ? '' : 'mr-4')}>
                          <LogOut size={18} />
                        </span>
                        <p
                          className={cn(
                            'max-w-[200px] truncate',
                            isOpen === false
                              ? '-translate-x-96 opacity-0'
                              : 'translate-x-0 opacity-100'
                          )}
                        >
                          Sign Out
                        </p>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  {isOpen === false && <TooltipContent side='right'>Sign Out</TooltipContent>}
                </Tooltip>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  )
}
