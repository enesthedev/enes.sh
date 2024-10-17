import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type SidebarSettings = { disabled: boolean; isHoverOpen: boolean }

type SidebarStore = {
  isOpen: boolean
  isHover: boolean
  settings: SidebarSettings
  toggleOpen: () => void
  setIsOpen: (isOpen: boolean) => void
  setIsHover: (isHover: boolean) => void
  getOpenState: () => boolean
  setSettings: (settings: Partial<SidebarSettings>) => void
}

export const defaultSidebar = {
  isOpen: true,
  isHover: false,
  settings: { disabled: false, isHoverOpen: false },
  toggleOpen: () => {},
  setIsOpen: (isOpen: boolean) => {},
  setIsHover: (isHover: boolean) => {},
  getOpenState: () => true,
  setSettings: (settings: Partial<SidebarSettings>) => {}
}

export const useSidebar = create(
  persist<SidebarStore>(
    (set, get) => ({
      isOpen: true,
      isHover: false,
      settings: { disabled: false, isHoverOpen: false },
      toggleOpen: () => {
        set({ isOpen: !get().isOpen })
      },
      setIsOpen: (isOpen: boolean) => {
        set({ isOpen })
      },
      setIsHover: (isHover: boolean) => {
        set({ isHover })
      },
      getOpenState: () => {
        const state = get()
        return state.isOpen || (state.settings.isHoverOpen && state.isHover)
      },
      setSettings: (settings: Partial<SidebarSettings>) => {
        set((state) => ({
          settings: {
            ...state.settings,
            ...settings
          }
        }))
      }
    }),
    {
      name: 'sidebar',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
