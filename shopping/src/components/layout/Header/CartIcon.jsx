export default function CartIcon({ count = 0 }) {
  return (
    <a className="header-icon" href="/cart" aria-label={`Cart with ${count} items`}>
      Cart <span>{count}</span>
    </a>
  )
}
