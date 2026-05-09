import { useState } from 'react'

export default function useFilters(initialFilters = {}) {
  const [filters, setFilters] = useState(initialFilters)
  const resetFilters = () => setFilters(initialFilters)
  return { filters, setFilters, resetFilters }
}
