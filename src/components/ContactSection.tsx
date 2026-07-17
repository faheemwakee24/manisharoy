"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: "var(--dark)" }}>
      <motion.div
        style={{ textAlign: "center", marginBottom: "4rem" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="sec-eyebrow">Get In Touch</div>
        <h2 className="sec-title">
          Let&apos;s Create <span>Together</span>
        </h2>
        <div className="divider divider-animated" />
      </motion.div>
      <div className="contact-grid">
        <motion.div
          className="contact-info"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3>Reach Out</h3>
          {[
            { icon: "📍", text: "Mumbai, India" },
            { icon: "✉️", text: "manisharoy6916@gmail.com" },
            {
              icon: "✈️",
              text: (
                <a
                  href="https://t.me/lovemanisha691666/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  Telegram — Message Me
                </a>
              ),
            },
            { icon: "🕒", text: "Available Mon–Sat, 10am–7pm IST" },
          ].map((item) => (
            <motion.div
              key={String(item.text)}
              className="contact-item"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="contact-icon">{item.icon}</div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="contact-form"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {["Your Name", "Your Email", "Subject"].map((placeholder) => (
            <motion.input
              key={placeholder}
              type={placeholder === "Your Email" ? "email" : "text"}
              placeholder={placeholder}
              variants={slideRight}
              whileFocus={{ scale: 1.01, borderColor: "var(--gold)" }}
            />
          ))}
          <motion.textarea
            placeholder="Tell me about your project…"
            variants={slideRight}
            whileFocus={{ scale: 1.01 }}
          />
          <motion.button
            type="button"
            className="btn btn-gold"
            style={{ width: "100%", cursor: "pointer" }}
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
