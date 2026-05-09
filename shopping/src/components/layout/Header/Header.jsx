import { Link } from 'react-router-dom'
import NavMenu from './NavMenu.jsx'
import SearchBar from './SearchBar.jsx'
import CartIcon from './CartIcon.jsx'
import WishlistIcon from './WishlistIcon.jsx'
import AccountIcon from './AccountIcon.jsx'

export default function Header() {
  return (
    <header className="jumia-header">
      <div className="jumia-header__top">
        <div className="container jumia-header__top-inner">
          <span>Sell on Jumia</span>
          <div className="jumia-header__top-links">
            <span>Jumia</span>
            <span>Pay</span>
            <span>Food</span>
            <span>Prime</span>
          </div>
        </div>
      </div>

      <div className="jumia-header__main">
        <div className="container jumia-header__main-inner">
          <Link className="jumia-header__logo" to="/">
            <span>JUMIA</span>
            <i />
          </Link>
          <SearchBar />
          <div className="jumia-header__actions">
            <AccountIcon />
            <Link className="jumia-header-action" to="/faq">
              <span className="jumia-header-action__icon">?</span>
              <span>Help</span>
            </Link>
            <WishlistIcon count={2} />
            <CartIcon count={3} />
          </div>
        </div>
      </div>

      <div className="jumia-header__nav">
        <div className="container jumia-header__nav-inner">
          <NavMenu />
          <div className="jumia-header__nav-badge">Free delivery on selected items</div>
        </div>
      </div>
    </header>
  )
}
