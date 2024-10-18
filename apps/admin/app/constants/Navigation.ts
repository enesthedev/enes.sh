import { BookMarked, LayoutGrid, LogOut, Notebook } from 'lucide-react'

export const Navigation = [
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
      },
      {
        href: '/sign-out',
        label: 'Sign Out',
        icon: LogOut
      }
    ]
  }
]
