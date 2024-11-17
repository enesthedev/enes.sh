import { getBooksCount } from '@/app/actions'

const BooksCountText = async () => {
  const { count } = await getBooksCount()
  return <div className='text-2xl font-bold'>{count}</div>
}

export { BooksCountText }
