const groups = {
  Trending: ['Summer Edit', 'Best Sellers', 'New Arrivals'],
  Explore: ['Gift Cards', 'Loyalty', 'Referral'],
  Support: ['Size Guide', 'Shipping Info', 'Returns'],
}

export default function MegaMenu() {
  return (
    <section className="mega-menu">
      {Object.entries(groups).map(([title, items]) => (
        <div key={title} className="mega-menu__group">
          <h3>{title}</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
