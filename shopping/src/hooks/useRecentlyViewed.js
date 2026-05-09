import { useState } from 'react'

export default function useRecentlyViewed() {
  const [items, setItems] = useState([])
  const addViewedItem = (item) => setItems((current) => [item, ...current].slice(0, 8))
  return { items, addViewedItem }
}
