'use client'

import { CenteredLayout } from '@/app/layouts'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@enes-sh/ui'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'

const SignOut = () => {
  const handleSignout = useCallback(async () => {
    await signOut({
      callbackUrl: '/'
    })
  }, [])

  return (
    <CenteredLayout>
      <Card className='mx-5 max-w-[450px]'>
        <CardHeader>
          <CardTitle className='text-lg'>Warning</CardTitle>
          <CardDescription>
            Are you sure you want to log out? You will need to sign in again to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className='w-full text-sm' variant='danger' onClick={handleSignout}>
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}

export { SignOut }
