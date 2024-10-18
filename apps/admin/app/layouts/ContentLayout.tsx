'use client'

import { Breadcrumbs, Navbar } from '@/app/sections'

interface ContentLayoutProps {
  title?: string
  children: React.ReactNode
}

const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  return (
    <div>
      <Navbar title={title} />
      <div className='container flex flex-col px-4 pb-8 pt-8 sm:px-8'>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  )
}

export { ContentLayout }
