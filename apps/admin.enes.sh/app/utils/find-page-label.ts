import { NAVIGATION } from '@/app/constants'

export function findPageLabel(pathname: string): string {
  for (const group of NAVIGATION) {
    const match = group.menus.find((menu) => menu.href === pathname)
    if (match) {
      return match.label
    }
  }
  return ''
}
