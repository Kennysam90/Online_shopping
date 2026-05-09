const groups = {
  TopDeals: ['Flash Sale', 'Daily Deals', 'Clearance'],
  Essentials: ['Groceries', 'Home Appliances', 'Phones'],
  Services: ['Pay on Delivery', 'Pickup Stations', 'Easy Returns'],
}

export default function MegaMenu() {
  return (
    <section className="jumia-mega-menu">
      {Object.entries(groups).map(([title, items]) => (
        <div key={title} className="jumia-mega-menu__group">
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
