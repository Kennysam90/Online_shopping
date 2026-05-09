export default function NewsletterSignup() {
  return (
    <form className="newsletter-signup">
      <label htmlFor="newsletter-email">Join our newsletter</label>
      <div className="newsletter-signup__controls">
        <input id="newsletter-email" type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  )
}
