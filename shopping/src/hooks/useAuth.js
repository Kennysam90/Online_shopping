import { useState } from 'react'

export default function useAuth() {
  const [user, setUser] = useState(null)
  return {
    user,
    login: (nextUser) => setUser(nextUser),
    logout: () => setUser(null),
  }
}
