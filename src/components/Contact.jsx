import SocialLinks from "./SocialLinks.jsx";

export default function Contact() {
  return (
    <section className="block" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">Contact</h2>
        <p className="lede">The quickest way to reach me is by email or LinkedIn.</p>
        <div className="contact-links">
          <SocialLinks labelled />
        </div>
      </div>
    </section>
  );
}
