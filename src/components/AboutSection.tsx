"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });
  const [stats, setStats] = useState({ years: 0, brands: 0, shows: 0, designs: 0 });

  useEffect(() => {
    if (!statsInView) return;

    const targets = { years: 14, brands: 50, shows: 240, designs: 1200 };
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setStats({
        years: Math.round(targets.years * eased),
        brands: Math.round(targets.brands * eased),
        shows: Math.round(targets.shows * eased),
        designs: Math.round(targets.designs * eased),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [statsInView]);

  return (
    <section id="about" style={{ background: "var(--noir)" }}>
      <div className="about-grid">
        <motion.div
          className="about-img"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"
            alt="Manisha Roy Fashion Designer"
            width={600}
            height={800}
          />
        </motion.div>
        <motion.div
          className="about-text"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="sec-eyebrow">About Me</div>
          <h2 className="sec-title">
            The Art of
            <br />
            <span>Crafted Beauty</span>
          </h2>
          <p className="about-bio">
            Mumbai-born fashion designer with over a decade of experience shaping trends across
            ladies&apos; wear, baby fashion, and international runway productions. I am also the
            founder and owner of{" "}
            <strong style={{ color: "var(--gold)", fontWeight: 500 }}>
              Fashormen Ladies and Baby Wear
            </strong>{" "}
            — bringing quality fashion directly to families across Mumbai.
          </p>
          <p className="about-bio">
            Beyond the atelier, I am an active{" "}
            <strong style={{ color: "var(--gold)", fontWeight: 500 }}>forex and markets trader</strong>{" "}
            — combining chart analysis, risk discipline, and a clear trading mindset with the same
            precision I bring to design.
          </p>
          <p className="about-bio">Every stitch carries a story. Every silhouette is a statement.</p>
          <div className="stats-grid" ref={statsRef}>
            <motion.div className="stat" variants={fadeUp} whileHover={{ y: -4 }}>
              <div className="stat-num">{stats.years}</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div className="stat" variants={fadeUp} whileHover={{ y: -4 }}>
              <div className="stat-num">{stats.brands}</div>
              <div className="stat-label">International Brands</div>
            </motion.div>
            <motion.div className="stat" variants={fadeUp} whileHover={{ y: -4 }}>
              <div className="stat-num">{stats.shows}</div>
              <div className="stat-label">Runway Shows</div>
            </motion.div>
            <motion.div className="stat" variants={fadeUp} whileHover={{ y: -4 }}>
              <div className="stat-num">{stats.designs}+</div>
              <div className="stat-label">Designs Created</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
