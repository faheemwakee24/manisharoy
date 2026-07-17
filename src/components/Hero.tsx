"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "./Particles";
import { easeOut, fadeUp, staggerContainer } from "@/lib/motion";

const heroContainer = staggerContainer(0.15, 0.8);

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <Particles />
      <div className="hero-line" />
      <motion.div
        className="hero-content"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={fadeUp}>
          Mumbai · Fashion Designer · Trader · Since 2010
        </motion.div>
        <motion.h1 className="hero-name" variants={fadeUp}>
          MANISHA
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: easeOut }}
          >
            ROY
          </motion.span>
        </motion.h1>
        <motion.p className="hero-sub" variants={fadeUp}>
          Couture · Runway · Forex Trading
        </motion.p>
        <motion.div className="hero-cta" variants={fadeUp}>
          <Link href="/services" className="btn btn-gold">
            View Collections
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Work With Me
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="scroll-arrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2.2, duration: 0.6 },
          y: { delay: 2.8, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}
