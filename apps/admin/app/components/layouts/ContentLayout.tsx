'use client'

import { Breadcrumbs, Navbar } from '@/app/components/sections'
import React from 'react'

interface ContentLayoutProps {
  title?: string
  actions?: React.ReactNode
  children: React.ReactNode
}

const ContentLayout = ({ title, children, actions }: ContentLayoutProps) => {
  return (
    <div>
      <Navbar title={title} />
      <div className='container flex flex-col px-4 pb-8 pt-8 sm:px-8'>
        <div className='flex flex-row items-center justify-between'>
          <Breadcrumbs />
          {actions}
        </div>
        {children}
      </div>
    </div>
  )
}

export { ContentLayout }
