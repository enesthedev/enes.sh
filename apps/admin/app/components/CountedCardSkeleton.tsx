import { Card, CardContent, CardHeader, CardTitle, Skeleton } from '@enes-sh/ui'

const CountedCardSkeleton = () => {
  return (
    <Card className='border-2 bg-transparent shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='w-full'>
          <Skeleton className='h-[8px] w-1/3' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='pt-2 text-2xl font-bold'>
          <Skeleton className='h-[8px] w-1/2' />
        </div>
      </CardContent>
    </Card>
  )
}
export { CountedCardSkeleton }
