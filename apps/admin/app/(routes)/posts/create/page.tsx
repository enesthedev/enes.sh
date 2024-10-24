import { createPost } from '@/app/actions'
import { ContentLayout, SidebarLayout } from '@/app/components/layouts'
import { CreatePostForm } from '@/app/components/sections/posts'

import '@mdxeditor/editor/style.css'

export default async function Page() {
  const handleSubmit = async (values: string) => {
    'use server'
    return createPost(JSON.parse(values))
  }

  return (
    <SidebarLayout>
      <ContentLayout title='Create Post'>
        <CreatePostForm submit={handleSubmit} />
      </ContentLayout>
    </SidebarLayout>
  )
}
