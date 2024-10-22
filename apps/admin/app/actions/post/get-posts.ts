'use server'

import { PaginationParams } from '@/app/types'
import { prisma } from '@enes-sh/db'

const getPosts = async ({ page = 1, pageSize = 10 }: PaginationParams) => {
  const skip = (page - 1) * pageSize

  const posts = await prisma.content.findMany({
    where: {
      type: 'POST'
    },
    skip,
    take: pageSize,
    orderBy: {
      createdAt: 'desc'
    }
  })

  const totalPosts = await prisma.content.count({ where: { type: 'POST' } })

  return {
    posts,
    pagination: {
      totalPosts,
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalPosts / pageSize)
    }
  }
}

export { getPosts }
