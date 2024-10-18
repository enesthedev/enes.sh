'use client'

import { Navbar } from '@/app/sections'

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  return (
    <div>
      <Navbar title={title} />
      <div className='container px-4 pb-8 pt-8 sm:px-8'>{children}</div>
    </div>
  )
}

export { ContentLayout }
