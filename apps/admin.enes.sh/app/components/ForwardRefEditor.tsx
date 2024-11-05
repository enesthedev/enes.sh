'use client'

import dynamic from 'next/dynamic'

import { Skeleton } from '@enes-sh/ui'
import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'
import { forwardRef } from 'react'

const Editor = dynamic(() => import('./InitializedMDXEditor'), {
  ssr: false,
  loading: () => (
    <div className='flex flex-col space-y-2'>
      <Skeleton className='h-4 w-full' />
      <div className='flex flex-row space-x-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-1/4' />
      </div>
    </div>
  )
})

const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editor {...props} editorRef={ref} />
))

ForwardRefEditor.displayName = 'ForwardRefEditor'

export { ForwardRefEditor }
