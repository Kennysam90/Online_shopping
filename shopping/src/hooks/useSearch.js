import { useState } from 'react'

export default function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  return { query, setQuery, results, setResults }
}
