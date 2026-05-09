const categories = [
  'Supermarket',
  'Health & Beauty',
  'Home & Office',
  'Phones & Tablets',
  'Computing',
  'Electronics',
  'Fashion',
  'Baby Products',
  'Gaming',
  'Sporting Goods',
  'Automobile',
  'Garden & Outdoors',
]

export default function SideNav() {
  return (
    <aside className="jumia-side-nav">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href="/products">{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
