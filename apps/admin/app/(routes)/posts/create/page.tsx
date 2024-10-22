import { ContentLayout, SidebarLayout } from '@/app/layouts'
import { CreatePostForm } from '@/app/sections/posts'

import '@mdxeditor/editor/style.css'

export default async function Page() {
  const handleSubmit = async (values) => {
    'use server'
    console.log(values)
  }

  return (
    <SidebarLayout>
      <ContentLayout title='Create Post'>
        <CreatePostForm submit={handleSubmit} />
      </ContentLayout>
    </SidebarLayout>
  )
}
