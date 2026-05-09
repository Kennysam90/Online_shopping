const suggestions = ['Phone', 'Sneakers', 'Refrigerator', 'Power bank', 'Air fryer', 'Television']

export default function SearchBar() {
  return (
    <form className="jumia-search-bar" role="search">
      <input
        className="jumia-search-bar__input"
        type="search"
        placeholder="Search products, brands and categories"
        list="site-search-suggestions"
      />
      <datalist id="site-search-suggestions">
        {suggestions.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      <button className="jumia-search-bar__button" type="submit">
        Search
      </button>
    </form>
  )
}
