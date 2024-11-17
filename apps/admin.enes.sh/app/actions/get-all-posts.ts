'use server'

import { prisma } from '@enes-sh/db'

const getAllPosts = async () => {
  const posts = await prisma.content.findMany({
    where: {
      type: 'POST'
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return {
    posts
  }
}

export { getAllPosts }
