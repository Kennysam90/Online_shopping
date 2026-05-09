const links = [
  ['New In', '/products'],
  ['Women', '/products?category=women'],
  ['Men', '/products?category=men'],
  ['Sale', '/sale'],
  ['Blog', '/blog'],
]

export default function NavMenu() {
  return (
    <nav className="nav-menu" aria-label="Primary navigation">
      {links.map(([label, href]) => (
        <a key={label} href={href}>
          {label}
        </a>
      ))}
    </nav>
  )
}
