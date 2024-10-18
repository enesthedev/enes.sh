'use client'

import { usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@enes-sh/ui'

import Link from 'next/link'
import { Fragment } from 'react'

const Breadcrumbs = () => {
  const pathname = usePathname()

  const pathSegments = pathname.split('/').filter((segment) => segment)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = segment.charAt(0).toUpperCase() + segment.slice(1)
    return {
      label,
      href
    }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>Overview</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { Breadcrumbs }
