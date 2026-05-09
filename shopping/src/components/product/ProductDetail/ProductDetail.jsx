import VariantSelector from './VariantSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import StockIndicator from './StockIndicator.jsx'

export default function ProductDetailBlock() {
  return (
    <section className="component-block">
      <h3>Product Detail</h3>
      <VariantSelector />
      <QuantitySelector />
      <StockIndicator />
    </section>
  )
}
