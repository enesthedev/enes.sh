'use server'

import { Content, prisma } from '@enes-sh/db'

const createPost = async (post: Content): Promise<Content> => {
  return await prisma.content.create({ data: post })
}

export { createPost }
