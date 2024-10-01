'use client'

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@enes-sh/ui'
import { signIn } from 'next-auth/react'
import { useCallback } from 'react'

const SignInCard = () => {
  const handleSignIn = useCallback(async () => {
    await signIn('google', {
      callbackUrl: '/'
    })
  }, [])

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

export { SignInCard }
