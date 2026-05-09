import { Link } from 'react-router-dom'

export default function WishlistIcon({ count = 0 }) {
  return (
    <Link className="jumia-header-action" to="/wishlist" aria-label={`Wishlist with ${count} items`}>
      <span className="jumia-header-action__icon">❤</span>
      <span>Saved</span>
      <strong>{count}</strong>
    </Link>
  )
}
