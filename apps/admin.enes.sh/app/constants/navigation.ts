import { BookMarked, LayoutGrid, Notebook } from 'lucide-react'

export const NAVIGATION = [
  {
    groupLabel: '',
    menus: [
      {
        href: '/',
        label: 'Overview',
        icon: LayoutGrid,
        submenus: []
      },
      {
        href: '/posts',
        label: 'Posts',
        icon: Notebook
      },
      {
        href: '/books',
        label: 'Books',
        icon: BookMarked
      }
    ]
  }
]
