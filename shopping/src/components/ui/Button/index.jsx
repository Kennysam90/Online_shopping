export default function Button({ children = 'Button', type = 'button' }) {
  return <button type={type}>{children}</button>
}
