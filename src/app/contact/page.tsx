import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact · Manisha Roy",
  description: "Contact Manisha Roy for custom couture, brand collaborations, and fashion direction.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Start Your Next Project"
        subtitle="Connect with Manisha for custom couture, brand collaborations, studio consulting, fashion direction, or forex trading discussions."
      />
      <section style={{ background: "var(--dark)" }}>
        <div className="container">
          <div className="contact-grid reveal">
            <div className="contact-info">
              <h3>Reach Out</h3>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>Mumbai, India</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <span>manisharoy6916@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✈️</div>
                <span>
                  <a
                    href="https://t.me/lovemanisha691666/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--gold)", textDecoration: "none" }}
                  >
                    Telegram — Message Me
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <span>Available Mon–Sat, 10am–7pm IST</span>
              </div>
            </div>
            <div className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Tell me about your project…" />
              <button type="button" className="btn btn-gold" style={{ width: "100%", cursor: "pointer" }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
