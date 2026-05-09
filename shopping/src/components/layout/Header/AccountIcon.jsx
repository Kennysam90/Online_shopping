import { Link } from 'react-router-dom'

export default function AccountIcon() {
  return (
    <Link className="jumia-header-action" to="/account" aria-label="Account">
      <span className="jumia-header-action__icon">👤</span>
      <span>Account</span>
    </Link>
  )
}
