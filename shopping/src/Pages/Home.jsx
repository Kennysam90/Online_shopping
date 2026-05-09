import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import BackToTop from '../components/layout/BackToTop'
import SideNav from '../components/layout/SideNav/SideNav'

const spotlightTiles = [
  { title: 'Official Stores', note: 'Shop trusted brands', color: 'orange' },
  { title: 'Up to 80% Off', note: 'Daily flash deals', color: 'red' },
  { title: 'Buy 2 Save More', note: 'Combo offers', color: 'blue' },
  { title: 'Call To Order', note: '0700-600-0000', color: 'pink' },
  { title: 'Pay Small Small', note: 'Flexible payments', color: 'gold' },
  { title: 'Free Delivery', note: 'On selected items', color: 'teal' },
]

const categoryStrips = [
  'Phone Deals',
  'Generators',
  'Groceries',
  'Cooking Essentials',
  'Men Fashion',
  'Sneakers',
  'Skincare',
  'Televisions',
]

const dealSections = [
  {
    title: 'Flash Sales',
    subtitle: 'Time Left: 19h : 58m : 40s',
    tone: 'red',
    items: ['Freezer', 'Blender', 'Pressing Iron', 'Steam Iron', 'Phone', 'Speaker'],
  },
  {
    title: 'Top Deals',
    subtitle: 'Best picks for you',
    tone: 'orange',
    items: ['Smartphone', 'LED TV', 'Laptop', 'Microwave', 'Airpods', 'Washing Machine'],
  },
  {
    title: 'Limited Stock Deals',
    subtitle: 'Up to 50% off',
    tone: 'yellow',
    items: ['Fan', 'Sneakers', 'Tablet', 'Mini Fridge', 'Power Bank', 'Smart Watch'],
  },
  {
    title: 'Top selling items',
    subtitle: 'Popular across the store',
    tone: 'orange',
    items: ['Perfume', 'Gaming Pad', 'Earbuds', 'Phone Case', 'Clipper', 'Printer'],
  },
  {
    title: 'Last 24hr Deal',
    subtitle: 'Fresh markdowns',
    tone: 'yellow',
    items: ['Kitchen Set', 'Tool Box', 'Bags', 'Skincare', 'Menswear', 'Slippers'],
  },
  {
    title: 'Phone Deals',
    subtitle: 'Flagships and budget phones',
    tone: 'orange',
    items: ['Android Phone', 'Feature Phone', 'Charger', 'Bluetooth Speaker', 'Power Bank', 'Phone Stand'],
  },
  {
    title: 'Appliance Deals',
    subtitle: 'Essentials for home',
    tone: 'yellow',
    items: ['Standing Fan', 'Curtains', 'Toaster', 'Kettle', 'Generator', 'Deep Freezer'],
  },
  {
    title: 'The Gaming Hub',
    subtitle: 'Save on consoles and accessories',
    tone: 'orange',
    items: ['Gaming Phone', 'Monitor', 'Gaming Chair', 'Controller', 'Headset', 'Keyboard'],
  },
  {
    title: 'Beauty Deals',
    subtitle: 'Glow-up essentials',
    tone: 'pink',
    items: ['Facial Cleanser', 'Body Lotion', 'Lip Gloss', 'Sunscreen', 'Serum', 'Hair Cream'],
  },
  {
    title: 'Kitchen Deals',
    subtitle: 'Cook smarter',
    tone: 'yellow',
    items: ['Knife Set', 'Cookware', 'Storage Jar', 'Gas Cooker', 'Tableware', 'Air Fryer'],
  },
  {
    title: 'Fashion deals',
    subtitle: 'Clothes, footwear and more',
    tone: 'orange',
    items: ['Female Dress', 'Watch', 'Sneakers', 'Loafers', 'Boots', 'Slides'],
  },
  {
    title: 'Official Store Deals',
    subtitle: 'Authentic brands only',
    tone: 'yellow',
    items: ['Remote', 'Body Spray', 'Shaver', 'Toiletries', 'Baby Care', 'Accessories'],
  },
]

const footerTextBlocks = [
  'Jumia Nigeria - Nigeria’s No. 1 Shopping Destination',
  'Shop for everything you need from electronics and mobile phones to groceries, fashion, beauty products and home appliances. Discover trusted brands, competitive prices and frequent limited-time promotions designed to mirror the marketplace feel of the reference page.',
  'Whether you are searching for a new smartphone, a freezer, an air fryer, skincare essentials or comfortable fashion picks, this homepage layout is structured to surface multiple deal bands, clear promotional entry points and dense product discovery in the same spirit as major online marketplaces.',
]

function PromoTile({ title, note, color }) {
  return (
    <article className={`promo-tile promo-tile--${color}`}>
      <strong>{title}</strong>
      <span>{note}</span>
    </article>
  )
}

function ProductCard({ name, price, oldPrice, accent }) {
  return (
    <article className="market-product-card">
      <div className={`market-product-card__media market-product-card__media--${accent}`}>
        <span>{name}</span>
      </div>
      <div className="market-product-card__body">
        <h3>{name}</h3>
        <p className="market-product-card__price">₦{price.toLocaleString()}</p>
        <p className="market-product-card__old-price">₦{oldPrice.toLocaleString()}</p>
      </div>
    </article>
  )
}

function DealSection({ title, subtitle, tone, items }) {
  return (
    <section className="deal-section card">
      <header className={`deal-section__header deal-section__header--${tone}`}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className="deal-section__grid">
        {items.map((item, index) => (
          <ProductCard
            key={`${title}-${item}`}
            name={item}
            price={24000 + index * 3500}
            oldPrice={32000 + index * 3900}
            accent={['sand', 'sky', 'ash', 'peach', 'mint', 'slate'][index % 6]}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div id="top" className="app-shell app-shell--marketplace">
      <Header />

      <main className="market-home">
        <div className="container">
          <section className="hero-market-grid">
            <SideNav />

            <div className="hero-market-main card">
              <div className="hero-market-banner">
                <div>
                  <p className="eyebrow">JUST FOR YOU</p>
                  <h1>Just Got Paid Deals just dropped</h1>
                  <p>Up to 20% off electronics, fashion, appliances and daily essentials.</p>
                </div>
                <div className="hero-market-banner__visual">
                  <div className="hero-market-banner__shape hero-market-banner__shape--orange" />
                  <div className="hero-market-banner__shape hero-market-banner__shape--blue" />
                  <div className="hero-market-banner__badge">JUMIA FORCE</div>
                </div>
              </div>

              <div className="hero-market-tiles">
                {spotlightTiles.map((tile) => (
                  <PromoTile key={tile.title} {...tile} />
                ))}
              </div>
            </div>

            <aside className="hero-market-side">
              <div className="hero-market-side__card card">
                <strong>Sell on Jumia</strong>
                <span>Start earning in minutes</span>
              </div>
              <div className="hero-market-side__card card">
                <strong>Buy airtime</strong>
                <span>Fast digital delivery</span>
              </div>
              <div className="hero-market-side__card card hero-market-side__card--orange">
                <strong>Jumia Force</strong>
                <span>Earn commissions daily</span>
              </div>
            </aside>
          </section>

          <section className="category-strip card">
            {categoryStrips.map((item) => (
              <div key={item} className="category-strip__item">
                <span className="category-strip__icon" />
                <p>{item}</p>
              </div>
            ))}
          </section>

          {dealSections.map((section) => (
            <DealSection key={section.title} {...section} />
          ))}

          <section className="skeleton-band card">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skeleton-band__item">
                <div className="skeleton-band__media" />
                <div className="skeleton-band__line" />
                <div className="skeleton-band__line skeleton-band__line--short" />
              </div>
            ))}
          </section>

          <section className="market-copy card">
            {footerTextBlocks.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
