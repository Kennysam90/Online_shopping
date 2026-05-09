import { useState } from 'react'

export default function useToast() {
  const [toasts, setToasts] = useState([])
  const pushToast = (message) => setToasts((current) => [...current, message])
  const clearToasts = () => setToasts([])
  return { toasts, pushToast, clearToasts }
}
