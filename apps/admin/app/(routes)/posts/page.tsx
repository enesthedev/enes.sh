import { ContentLayout, SidebarLayout } from '@/app/layouts'
import { CreatePostButton } from '@/app/sections/posts'

const PageActions = () => {
  return (
    <>
      <CreatePostButton />
    </>
  )
}

export default async function Page() {
  return (
    <SidebarLayout>
      <ContentLayout actions={<PageActions />}>
        <div className='h-[2000px]'>test</div>
      </ContentLayout>
    </SidebarLayout>
  )
}
