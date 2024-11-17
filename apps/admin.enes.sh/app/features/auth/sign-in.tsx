'use client'

import { useSignInErrors } from '@/app/hooks'
import { CenteredLayout } from '@/app/layouts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@enes-sh/ui'
import { signIn } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { SignInForm } from './sign-in-form'

export type SignInProps = {
  error: string | null
  callbackUrl: string
}

const SignIn = ({ error, callbackUrl }: SignInProps) => {
  const [loading, setLoading] = useState(false)
  const errors = useSignInErrors()

  useEffect(() => {
    if (error) {
      toast.error(errors[error] || errors.default)
    }
  }, [error, errors])

  const handleSignIn = useCallback(async () => {
    setLoading(true)
    await signIn('google', {
      callbackUrl: callbackUrl
    })
    setLoading(false)
  }, [callbackUrl])

  return (
    <CenteredLayout>
      <Card className='mx-5 max-w-[450px]'>
        <CardHeader>
          <CardTitle className='text-lg'>Welcome</CardTitle>
          <CardDescription>
            Please sign-in with your Google account to access the application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm disabled={loading} onSubmit={handleSignIn} />
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}

export { SignIn }
