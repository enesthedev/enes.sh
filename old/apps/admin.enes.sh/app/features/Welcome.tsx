'use client'

import { Skeleton } from '@enes-sh/ui'
import { cn } from '@enes-sh/utils'
import { useSession } from 'next-auth/react'

const Welcome = () => {
  const { data: session, status } = useSession()

  return (
    <div className='mt-2 px-4'>
      {status == 'loading' ? (
        <Skeleton className='h-[24px] w-full' />
      ) : (
        <h1
          className={cn(
            'text-md whitespace-nowrap font-bold transition-[transform,opacity,display] duration-300 ease-in-out'
          )}
        >
          Welcome {session?.user?.name?.split(' ')[0]}
        </h1>
      )}
    </div>
  )
}

export { Welcome }
