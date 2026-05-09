import { useState } from 'react'

export default function useCart() {
  const [items, setItems] = useState([])
  const addItem = (item) => setItems((current) => [...current, item])
  const clearCart = () => setItems([])
  return { items, addItem, clearCart }
}
