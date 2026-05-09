export default function EmptyState({ message = 'Nothing to show yet.' }) {
  return <section className="component-block"><h3>Empty State</h3><p>{message}</p></section>
}
