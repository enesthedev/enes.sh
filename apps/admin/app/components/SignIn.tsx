'use client'

import { Button } from '@enes-sh/ui'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return <Button onClick={() => signIn('google')}>Sign in</Button>
}
