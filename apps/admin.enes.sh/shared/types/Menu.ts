import { LucideIcon } from 'lucide-react'
import { Submenu } from './Submenu'

export type Menu = {
  href: string
  label: string
  active?: boolean
  icon: LucideIcon
  submenus?: Submenu[]
}
