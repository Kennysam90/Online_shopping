import { Link } from 'react-router-dom'

const links = [
  ['Flash Sale', '/sale'],
  ['Phones & Tablets', '/products'],
  ['Appliances', '/products'],
  ['Health & Beauty', '/products'],
  ['Official Stores', '/products'],
  ['Jumia Force', '/about'],
]

export default function NavMenu() {
  return (
    <nav className="jumia-nav-menu" aria-label="Primary navigation">
      {links.map(([label, href]) => (
        <Link key={label} to={href}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
