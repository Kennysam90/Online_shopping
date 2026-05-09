export default function WishlistIcon({ count = 0 }) {
  return (
    <a className="header-icon" href="/wishlist" aria-label={`Wishlist with ${count} items`}>
      Wishlist <span>{count}</span>
    </a>
  )
}
