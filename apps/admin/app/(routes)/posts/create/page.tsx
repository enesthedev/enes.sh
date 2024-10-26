import { createPost } from '@/app/actions'
import { CreatePostForm } from '@/app/features/posts'
import { ContentLayout, SidebarLayout } from '@/app/layouts'

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
