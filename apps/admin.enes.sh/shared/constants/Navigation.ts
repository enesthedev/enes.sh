import { BookMarked, LayoutGrid, Notebook } from 'lucide-react'

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
      }
    ]
  }
]

export function findPageLabel(pathname: string): string {
  for (const group of Navigation) {
    const match = group.menus.find((menu) => menu.href === pathname)
    if (match) {
      return match.label
    }
  }
  return ''
}
