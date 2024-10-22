import { getPosts } from '@/app/actions'
import { ContentLayout, SidebarLayout } from '@/app/layouts'
import { CreatePostForm } from '@/app/sections/posts'

export default async function Page() {
  const posts = await getPosts({})
  console.log(posts)
  return (
    <SidebarLayout>
      <ContentLayout title='Create Post'>
        <CreatePostForm />
      </ContentLayout>
    </SidebarLayout>
  )
}
