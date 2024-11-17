import { BooksCount, PostsCount } from '@/app/features/overview'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

export default async function Page() {
  return (
    <SidebarLayout>
      <ContentLayout title='Overview'>
        <div className='mt-0 grid space-y-5 sm:grid-cols-2 sm:space-x-5 sm:space-y-0'>
          <PostsCount />
          <BooksCount />
        </div>
      </ContentLayout>
    </SidebarLayout>
  )
}
