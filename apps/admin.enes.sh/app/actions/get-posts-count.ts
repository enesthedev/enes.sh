'use server'

import { prisma } from '@enes-sh/db'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const getPostsCount = async () => {
  await delay(3000)

  const count = await prisma.content.count({
    where: {
      type: 'POST'
    }
  })
  return {
    count
  }
}

export { getPostsCount }
