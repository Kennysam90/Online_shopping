import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import ProductDetail from './pages/ProductDetail'
import SearchResults from './pages/SearchResults'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Sale from './pages/Sale'
import Login from './pages/Login'
import Register from './pages/Register'
import AccountDashboard from './pages/AccountDashboard'
import OrderHistory from './pages/OrderHistory'
import Wishlist from './pages/Wishlist'
import AddressBook from './pages/AddressBook'
import PaymentMethods from './pages/PaymentMethods'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Returns from './pages/Returns'
import ShippingInfo from './pages/ShippingInfo'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiePolicy from './pages/CookiePolicy'
import Accessibility from './pages/Accessibility'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Loyalty from './pages/Loyalty'
import Referral from './pages/Referral'
import GiftCards from './pages/GiftCards'
import StoreLocator from './pages/StoreLocator'
import SizeGuide from './pages/SizeGuide'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<AccountDashboard />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/address-book" element={<AddressBook />} />
      <Route path="/payment-methods" element={<PaymentMethods />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/shipping-info" element={<ShippingInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/loyalty" element={<Loyalty />} />
      <Route path="/referral" element={<Referral />} />
      <Route path="/gift-cards" element={<GiftCards />} />
      <Route path="/store-locator" element={<StoreLocator />} />
      <Route path="/size-guide" element={<SizeGuide />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
