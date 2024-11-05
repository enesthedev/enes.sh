import { Skeleton } from '@enes-sh/ui'

const PostsCountTextSkeleton = async () => {
  return (
    <div className='mt-2 flex flex-col space-y-2'>
      <Skeleton className='h-[8px] w-1/3' />
      <Skeleton className='h-[8px] w-1/2' />
    </div>
  )
}

export { PostsCountTextSkeleton }
