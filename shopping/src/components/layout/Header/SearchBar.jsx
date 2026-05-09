const suggestions = ['Running shoes', 'Denim jacket', 'Travel bag', 'Gift cards']

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search products, brands, and categories"
        list="site-search-suggestions"
      />
      <datalist id="site-search-suggestions">
        {suggestions.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  )
}
