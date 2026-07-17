"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

const headerStagger = staggerContainer(0.12, 0.1);

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="section-header">
      <motion.div
        className="container"
        variants={headerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="sec-eyebrow" variants={fadeUp}>
          {eyebrow}
        </motion.div>
        <motion.h1 className="page-title" variants={fadeUp}>
          {title}
        </motion.h1>
        <motion.p className="page-sub" variants={fadeUp}>
          {subtitle}
        </motion.p>
        <motion.div className="divider divider-animated" variants={fadeUp} />
      </motion.div>
    </section>
  );
}
