import { getAllPosts } from '@/app/actions'
import { CreatePostButton, PostsDataTable, PostsDataTableColumns } from '@/app/features/posts'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

const PageActions = () => {
  return (
    <>
      <CreatePostButton />
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
