"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";

export default function BusinessSection() {
  return (
    <section id="business" className="business-section">
      <motion.div
        style={{ textAlign: "center", marginBottom: "4rem" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="sec-eyebrow">My Business</div>
        <h2 className="sec-title">
          Founder &amp; Owner of
          <br />
          <span>Fashormen</span>
        </h2>
        <div className="divider divider-animated" />
      </motion.div>
      <div className="business-grid">
        <motion.div
          className="business-img"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Image
            src="/brandimage.png"
            alt="Fashormen Ladies and Baby Wear boutique"
            width={800}
            height={1000}
          />
        </motion.div>
        <motion.div
          className="business-card"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          whileHover={{ boxShadow: "0 24px 60px rgba(201,169,110,0.12)" }}
        >
          <span className="business-owner-badge">Founder &amp; Owner</span>
          <h3 className="business-name">
            Fashormen<em>Ladies &amp; Baby Wear</em>
          </h3>
          <p className="business-desc">
            I am the proud owner of Fashormen Ladies and Baby Wear — a dedicated fashion retail
            brand offering curated collections for women and little ones. From everyday essentials
            to festive occasion wear, every piece reflects quality fabrics, thoughtful design, and
            the same craftsmanship that defines my design studio work.
          </p>
          <div className="business-categories">
            <span className="business-cat">👗 Ladies Wear</span>
            <span className="business-cat">👶 Baby Wear</span>
            <span className="business-cat">🛍️ Retail &amp; Wholesale</span>
          </div>
          <div className="business-highlights">
            <div className="business-highlight">
              <div className="business-highlight-num">2</div>
              <div className="business-highlight-label">Core Categories</div>
            </div>
            <div className="business-highlight">
              <div className="business-highlight-num">100+</div>
              <div className="business-highlight-label">Styles Available</div>
            </div>
            <div className="business-highlight">
              <div className="business-highlight-num">Mumbai</div>
              <div className="business-highlight-label">Based in India</div>
            </div>
          </div>
          <Link href="/contact" className="btn btn-gold">
            Enquire About Fashormen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
