'use client'

import Link from 'next/link'

import {
  buttonVariants,
  Dock,
  DockIcon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Transition
} from '@enes-sh/ui'
import { cn } from '@enes-sh/utils'
import { LibraryBig, NotebookTabs, Signature, SquareArrowOutUpRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-10 z-30 mb-4 flex h-full max-h-14 origin-bottom justify-center'>
      <Transition delay={0.5}>
        <Dock
          distance={10}
          className='pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center rounded-full border-0 bg-accent px-3 text-black'
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='test'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-10 rounded-full'
                  )}
                >
                  <Signature className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>test</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='test2'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-9 rounded-full'
                  )}
                >
                  <NotebookTabs className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>test</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='test3'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-9 rounded-full'
                  )}
                >
                  <LibraryBig className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>test3</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='test'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-10 rounded-full'
                  )}
                >
                  <SquareArrowOutUpRight className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>test</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </Transition>
    </div>
  )
}

export { Navbar }
