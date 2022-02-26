import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export interface Store {
  searchTag: string
  setSearchTag: (searchTag: string) => void
  searchInput: string
  setSearchInput: (searchInput: string) => void
}

export const store = createVanilla<Store>(
  persist(
    (set) => ({
      searchTag: '',
      setSearchTag: (searchTag: string) => {
        set(state => ({ ...state, searchTag }))
      },
      searchInput: '',
      setSearchInput: (searchInput: string) => {
        set(state => ({ ...state, searchInput }))
      },
    }),

    {
      name: 'main-store',
    },
  ),
)

export const useStore = create<Store>(store)
