'use client'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@enes-sh/ui'

import { ForwardRefEditor } from '@/app/components'
import { CreatePostSchema } from '@/app/schemas'
import { Content } from '@enes-sh/db'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export type CreatePostFormProps = {
  submit: (values: string) => Promise<Content | null>
}

const CreatePostForm = ({ submit }: CreatePostFormProps) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      language: 'tr',
      body: ''
    }
  })

  const handleSubmit = async (values: z.infer<typeof CreatePostSchema>) => {
    const content = await submit(JSON.stringify({ ...values, type: 'POST' }))
    if (content == null) {
      toast.error('Failed to create post')
    }
    toast.success('Post created successfully')
    router.push('/posts')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-5'>
        <div className='rounded-xl border bg-white p-5'>
          <div className='flex flex-row space-x-5'>
            <div className='w-full'>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Post Title</FormLabel>
                      <FormControl>
                        <Input {...field} error={form.formState.errors?.title} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            </div>
            <div className='w-1/4'>
              <FormField
                control={form.control}
                name='language'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select language of content' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='tr'>Turkish</SelectItem>
                        <SelectItem value='en'>English</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-4 rounded-xl border bg-white p-5'>
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Content</FormLabel>
                <ForwardRefEditor
                  contentEditableClassName='!px-1 !py-2 leading-3'
                  className='prose max-w-full'
                  markdown={field.value}
                  onChange={field.onChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' disabled={form.formState.isSubmitting} className='px-6'>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export { CreatePostForm }
