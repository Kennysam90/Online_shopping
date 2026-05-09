import NavMenu from './NavMenu.jsx'
import MegaMenu from './MegaMenu.jsx'
import SearchBar from './SearchBar.jsx'
import CartIcon from './CartIcon.jsx'
import WishlistIcon from './WishlistIcon.jsx'
import AccountIcon from './AccountIcon.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="/">
        ShopSphere
      </a>
      <NavMenu />
      <SearchBar />
      <div className="site-header__actions">
        <WishlistIcon count={3} />
        <CartIcon count={2} />
        <AccountIcon />
      </div>
      <MegaMenu />
    </header>
  )
}
