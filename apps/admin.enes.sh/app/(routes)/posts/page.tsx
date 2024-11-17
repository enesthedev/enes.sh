import { getAllPosts } from '@/app/actions'
import { RedirectButton } from '@/app/components'
import { PostsDataTable, PostsDataTableColumns } from '@/app/features/posts'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

const PageActions = () => {
  return (
    <>
      <RedirectButton href='/posts/create'>Create Post</RedirectButton>
    </>
  )
}

export default async function Page() {
  const data = await getAllPosts()

  return (
    <SidebarLayout>
      <ContentLayout actions={<PageActions />}>
        <PostsDataTable columns={PostsDataTableColumns} data={data.posts} />
      </ContentLayout>
    </SidebarLayout>
  )
}
