import { getPosts } from '@/app/actions'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

export default async function Page() {
  const posts = await getPosts({})
  console.log(posts)

  return (
    <SidebarLayout>
      <ContentLayout title='Create Post'>
        <div className='h-[2000px]'>test</div>
      </ContentLayout>
    </SidebarLayout>
  )
}
