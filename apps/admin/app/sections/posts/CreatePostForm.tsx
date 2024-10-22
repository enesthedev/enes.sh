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

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  lagnuage: z.string({
    required_error: 'Please select an language to display.'
  })
})

const CreatePostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      lagnuage: 'tr'
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast(
      <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
        <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
      </pre>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
                name='lagnuage'
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

export { CreatePostForm }
