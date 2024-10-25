import { Card, CardContent, CardHeader, CardTitle } from '@enes-sh/ui'
import { LucideIcon } from 'lucide-react'

export type CountedCardProps = {
  title: string
  count: number
  icon: LucideIcon
}

const CountedCard = ({ title, count, icon: Icon }: CountedCardProps) => {
  return (
    <Card className='border-2 bg-transparent shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-1'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>{title}</CardTitle>
        <Icon className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='pb-4'>
        <div className='text-2xl font-bold'>{count}</div>
      </CardContent>
    </Card>
  )
}
export { CountedCard }
