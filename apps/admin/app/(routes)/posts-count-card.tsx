import { getPostsCount } from '@/app/actions'
import { CountedCard } from '@/app/components'
import { Notebook } from 'lucide-react'

const PostsCountCard = async () => {
  const { count } = await getPostsCount()
  return <CountedCard title='Posts Count' count={count} icon={Notebook} />
}

export { PostsCountCard }
