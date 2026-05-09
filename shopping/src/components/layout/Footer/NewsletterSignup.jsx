export default function NewsletterSignup() {
  return (
    <form className="jumia-newsletter">
      <label htmlFor="newsletter-email">NEW TO JUMIA?</label>
      <p>Subscribe to our newsletter to get updates on our latest offers.</p>
      <div className="jumia-newsletter__controls">
        <input id="newsletter-email" type="email" placeholder="Enter e-mail address" />
        <button type="submit">Male</button>
        <button type="button">Female</button>
      </div>
    </form>
  )
}
