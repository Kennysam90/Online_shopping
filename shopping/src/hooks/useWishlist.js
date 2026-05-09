import { useState } from 'react'

export default function useWishlist() {
  const [items, setItems] = useState([])
  const toggleItem = (item) => setItems((current) => [...current, item])
  return { items, toggleItem }
}
