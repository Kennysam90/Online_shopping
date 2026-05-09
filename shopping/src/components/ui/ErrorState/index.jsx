export default function ErrorState({ message = 'Something went wrong.' }) {
  return <section className="component-block"><h3>Error State</h3><p>{message}</p></section>
}
