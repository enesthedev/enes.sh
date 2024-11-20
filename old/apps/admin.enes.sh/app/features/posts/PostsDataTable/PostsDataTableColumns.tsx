'use client'

import { DataTableColumnHeader } from '@/app/components'
import { LANGUAGE_CODES } from '@/app/constants'
import { Content } from '@enes-sh/db'
import { Badge } from '@enes-sh/ui'
import { ColumnDef } from '@tanstack/react-table'
import { PostsDataTableActions } from './PostsDataTableActions'

export const PostsDataTableColumns: ColumnDef<Content>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' className='mx-4' />
    ),
    cell: ({ row }) => (
      <span className='max-w-32 truncate px-4 font-medium sm:max-w-72 md:max-w-[31rem]'>
        {row.getValue('title')}
      </span>
    )
  },
  {
    accessorKey: 'language',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Language' />,
    cell: ({ row }) => (
      <Badge variant='outline' className='px-4'>
        {LANGUAGE_CODES.get(row.getValue('language'))}
      </Badge>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <PostsDataTableActions row={row} />
  }
]
