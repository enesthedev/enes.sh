import { getPostsCount } from '@/app/actions'

const PostsCountText = async () => {
  const { count } = await getPostsCount()
  return <div className='text-2xl font-bold'>{count}</div>
}

export { PostsCountText }
