import { Link } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import BackToTop from '../components/layout/BackToTop'

const quickLinks = [
  { to: '/products', label: 'Shop products' },
  { to: '/sale', label: 'View sale' },
  { to: '/cart', label: 'Open cart' },
  { to: '/account', label: 'My account' },
]

export default function PageTemplate({ title, description }) {
  return (
    <div id="top" className="app-shell">
      <Header />
      <Breadcrumbs currentLabel={title} />
      <main className="page-shell container">
        <section className="page-hero card">
          <p className="eyebrow">Shopping Demo</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>

        <section className="page-actions card">
          <h2>Quick links</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link) => (
              <Link key={link.to} className="quick-link-card" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
