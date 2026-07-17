"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/data/content";
import { slideLeft, slideRight, staggerContainer, viewport } from "@/lib/motion";

export default function Timeline() {
  return (
    <motion.div
      className="timeline"
      id="timeline"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {TIMELINE.map((item, index) => {
        const isEven = index % 2 === 1;
        const content = (
          <div className="tl-content" style={isEven ? { paddingRight: 0, paddingLeft: "3rem" } : undefined}>
            <div className="tl-year">{item.year}</div>
            <h3 className="tl-title">{item.title}</h3>
            <div style={{ fontSize: ".7rem", color: "var(--gold)", marginBottom: ".4rem" }}>
              {item.company}
            </div>
            <p className="tl-text">{item.text}</p>
          </div>
        );

        return (
          <motion.div
            key={`${item.year}-${item.title}`}
            className="tl-item"
            variants={isEven ? slideRight : slideLeft}
          >
            {!isEven ? content : <div className="tl-spacer" />}
            <motion.div
              className="tl-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            />
            {isEven ? content : <div className="tl-spacer" />}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
