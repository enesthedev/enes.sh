import { BooksCountText, BooksCountTextSkeleton } from '@/app/features/overview'
import { Card, CardContent, CardHeader, CardTitle } from '@enes-sh/ui'
import { BookMarked } from 'lucide-react'
import { Suspense } from 'react'

const BooksCount = () => {
  return (
    <Card className='border bg-transparent shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-1'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Books Count</CardTitle>
        <BookMarked className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='pb-4'>
        <Suspense fallback={<BooksCountTextSkeleton />}>
          <BooksCountText />
        </Suspense>
      </CardContent>
    </Card>
  )
}

export { BooksCount }
