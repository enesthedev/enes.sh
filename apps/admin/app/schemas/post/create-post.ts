import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  language: z.string({
    required_error: 'Please select an language to display.'
  }),
  content: z.string().min(2, { message: 'Content is required.' })
})

export { createPostSchema }
