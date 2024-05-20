import { CartItem } from "@/types"
import { create } from "zustand"
interface CartStore {
  isOpen: boolean
  isSheetLoaded: boolean
  lastUpdatedAt: number
  cart: CartItem | null

  openCart: () => void
  closeCart: () => void
  preloadSheet: () => void
  refresh: () => void

  setCart: (payload: CartItem | null) => void
}

export const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  lastUpdatedAt: 0,
  cart: null,
  isSheetLoaded: false,

  openCart: () => set(() => ({ isOpen: true, isSheetLoaded: true, lastUpdatedAt: Date.now() })),
  closeCart: () => set(() => ({ isOpen: false, isSheetLoaded: true, lastUpdatedAt: Date.now() })),
  preloadSheet: () => set(() => ({ isSheetLoaded: true })),
  refresh: () => set(() => ({ lastUpdatedAt: Date.now() })),
  setCart: (payload: CartItem | null) => set(() => ({ cart: payload })),
}))