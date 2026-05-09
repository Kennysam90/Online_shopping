import { Link } from 'react-router-dom'
import NewsletterSignup from './NewsletterSignup.jsx'

const footerColumns = [
  {
    title: 'Need Help?',
    links: ['Chat with us', 'Help Center', 'Contact Us', 'How to shop on Jumia'],
  },
  {
    title: 'About Jumia',
    links: ['About us', 'Jumia careers', 'Jumia Express', 'Terms and Conditions'],
  },
  {
    title: 'Make Money With Jumia',
    links: ['Sell on Jumia', 'Vendor hub', 'Become a sales consultant', 'Become a logistics partner'],
  },
  {
    title: 'Jumia International',
    links: ['Algeria', 'Egypt', 'Ghana', 'Kenya'],
  },
]

export default function Footer() {
  return (
    <footer className="jumia-footer">
      <section className="jumia-footer__newsletter">
        <div className="container jumia-footer__newsletter-inner">
          <div className="jumia-footer__brand">
            <div className="jumia-footer__logo">JUMIA</div>
            <p>Nigeria's no. 1 online destination for shopping, deals and convenience.</p>
          </div>
          <NewsletterSignup />
          <div className="jumia-footer__app">
            <h3>DOWNLOAD JUMIA FREE APP</h3>
            <p>Get access to exclusive offers.</p>
            <div className="jumia-footer__stores">
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </section>

      <section className="jumia-footer__links">
        <div className="container jumia-footer__links-grid">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="jumia-footer__bottom">
        <div className="container jumia-footer__bottom-inner">
          <div className="jumia-footer__socials">
            <span>Follow us</span>
            <i>f</i>
            <i>x</i>
            <i>ig</i>
            <i>yt</i>
          </div>
          <p>Terms & Privacy • Cookie Notice • 2026 Jumia Clone</p>
        </div>
      </section>
    </footer>
  )
}
