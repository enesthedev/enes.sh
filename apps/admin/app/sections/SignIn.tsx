'use client'

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@enes-sh/ui'
import { signIn } from 'next-auth/react'
import { useCallback, useEffect } from 'react'
import { toast } from 'sonner'

const errors: Record<string, string> = {
  AccessDenied: 'Access denied. Please retry again.',
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.'
}

export type SignInProps = {
  error: string | null
  callbackUrl: string
}

const SignIn = ({ error, callbackUrl }: SignInProps) => {
  useEffect(() => {
    if (error) {
      toast.error(errors[error] || errors.default)
    }
  }, [error])

  const handleSignIn = useCallback(async () => {
    await signIn('google', { callbackUrl: callbackUrl })
  }, [callbackUrl])

  return (
    <Card className='mx-5 max-w-[450px]'>
      <CardHeader>
        <CardTitle className='text-lg'>Welcome</CardTitle>
        <CardDescription>
          Please sign-in with your Google account to access the application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className='w-full text-sm' onClick={handleSignIn}>
          Sign In
        </Button>
      </CardContent>
    </Card>
  )
}

export { SignIn }
