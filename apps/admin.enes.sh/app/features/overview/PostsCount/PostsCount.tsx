import { PostsCountText, PostsCountTextSkeleton } from '@/app/features/overview'
import { Card, CardContent, CardHeader, CardTitle } from '@enes-sh/ui'
import { Notebook } from 'lucide-react'
import { Suspense } from 'react'

const PostsCount = () => {
  return (
    <Card className='border bg-transparent shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-1'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Posts Count</CardTitle>
        <Notebook className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='pb-4'>
        <Suspense fallback={<PostsCountTextSkeleton />}>
          <PostsCountText />
        </Suspense>
      </CardContent>
    </Card>
  )
}

export { PostsCount }
