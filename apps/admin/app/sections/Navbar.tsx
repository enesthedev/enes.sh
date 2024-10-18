'use client'

import { Menu, Welcome } from '@/app/components'
import { Navigation } from '@/app/constants'
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  VisuallyHidden
} from '@enes-sh/ui'
import { MenuIcon } from 'lucide-react'

import { useState } from 'react'

export type NavbarProps = {
  title: string
}

const Navbar = ({ title }: NavbarProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-10 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/50'>
      <div className='mx-4 flex h-14 items-center sm:mx-8'>
        <div className='flex items-center justify-start space-x-2 lg:space-x-0'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle>
              <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
            </SheetTitle>
            <SheetTrigger className='lg:hidden' asChild>
              <Button className='h-8' variant='ghost' size='icon'>
                <MenuIcon size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className='flex h-full flex-col px-3 sm:w-72' side='left'>
              <SheetHeader className='items-start'>
                <Welcome />
              </SheetHeader>
              <Menu isOpen items={Navigation} />
            </SheetContent>
            <SheetDescription />
          </Sheet>
          <h1 className='font-bold'>{title}</h1>
        </div>
      </div>
    </header>
  )
}

export { Navbar }
