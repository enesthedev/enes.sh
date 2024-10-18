'use client'

import { Button } from '@enes-sh/ui'
import { useRouter } from 'next/navigation'

const CreatePostButton = () => {
  const router = useRouter()

  const handleCreatePost = () => router.push('/posts/create')

  return (
    <Button variant='outline' onClick={handleCreatePost}>
      Create Post
    </Button>
  )
}

export { CreatePostButton }
