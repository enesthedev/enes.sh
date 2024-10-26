import { PostsCount } from '@/app/features/overview'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

export default async function Page() {
  return (
    <SidebarLayout>
      <ContentLayout title='Overview'>
        <div className='mt-0 grid sm:grid-cols-2 lg:grid-cols-3'>
          <PostsCount />
        </div>
      </ContentLayout>
    </SidebarLayout>
  )
}
