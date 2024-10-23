import { createPost } from '@/app/actions/post'
import { ContentLayout, SidebarLayout } from '@/app/layouts'
import { CreatePostForm } from '@/app/sections/posts'

import '@mdxeditor/editor/style.css'

export default async function Page() {
  const handleSubmit = async (values: string) => {
    'use server'
    console.log(values)
    const post = await createPost(JSON.parse(values))
    console.log(post)
  }

  return (
    <SidebarLayout>
      <ContentLayout title='Create Post'>
        <CreatePostForm submit={handleSubmit} />
      </ContentLayout>
    </SidebarLayout>
  )
}
