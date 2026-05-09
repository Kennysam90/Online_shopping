import { Link } from 'react-router-dom'

export default function CartIcon({ count = 0 }) {
  return (
    <Link className="jumia-header-action" to="/cart" aria-label={`Cart with ${count} items`}>
      <span className="jumia-header-action__icon">🛒</span>
      <span>Cart</span>
      <strong>{count}</strong>
    </Link>
  )
}
