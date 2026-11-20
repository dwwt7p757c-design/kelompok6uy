import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Product = {
  id: string; name: string; slug: string; description: string; price: number
  discount_price?: number | null; images: string[]; category: string; stock: number
  sizes: string[]; colors: string[]; featured?: boolean; new_arrival?: boolean
}
export type CartItem = { product: Product; size: string; color: string; quantity: number }

type CartContextType = {
  items: CartItem[]; count: number; subtotal: number; open: boolean
  setOpen: (open: boolean) => void; add: (item: CartItem) => void
  remove: (key: string) => void; update: (key: string, quantity: number) => void; clear: () => void
}
const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => JSON.parse(localStorage.getItem('k6-cart') || '[]'))
  const [open, setOpen] = useState(false)
  useEffect(() => localStorage.setItem('k6-cart', JSON.stringify(items)), [items])
  const keyOf = (item: CartItem) => `${item.product.id}-${item.size}-${item.color}`
  const add = (item: CartItem) => setItems(current => {
    const key = keyOf(item)
    const found = current.find(x => keyOf(x) === key)
    return found
      ? current.map(x => keyOf(x) === key ? { ...x, quantity: Math.min(x.quantity + item.quantity, x.product.stock) } : x)
      : [...current, item]
  })
  const remove = (key: string) => setItems(current => current.filter(x => keyOf(x) !== key))
  const update = (key: string, quantity: number) => setItems(current => current.map(x => keyOf(x) === key ? { ...x, quantity: Math.max(1, Math.min(quantity, x.product.stock)) } : x))
  const clear = () => setItems([])
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + (item.product.discount_price ?? item.product.price) * item.quantity, 0)
  const value = useMemo(() => ({ items, count, subtotal, open, setOpen, add, remove, update, clear }), [items, open, subtotal])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() {
  const value = useContext(CartContext)
  if (!value) throw new Error('useCart must be used within CartProvider')
  return value
}
