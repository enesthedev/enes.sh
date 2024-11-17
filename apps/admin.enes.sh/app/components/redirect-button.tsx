'use client'

import { Button } from '@enes-sh/ui'
import { useRouter } from 'next/navigation'

export type RedirectButtonProps = {
  children: React.ReactNode
  href: string
}

const RedirectButton = ({ children, href }: RedirectButtonProps) => {
  const router = useRouter()

  const handleClick = () => router.push(href)

  return (
    <Button variant='outline' onClick={handleClick}>
      {children}
    </Button>
  )
}

export { RedirectButton }
