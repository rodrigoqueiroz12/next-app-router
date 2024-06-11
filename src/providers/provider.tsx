'use client'

import { CartProvider } from '@/contexts/cart-context'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return <CartProvider>{children}</CartProvider>
}
