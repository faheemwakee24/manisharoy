"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SKILLS } from "@/data/content";
import { easeOut, fadeUp, staggerContainer, viewport } from "@/lib/motion";

function SkillCard({ skill, index }: { skill: (typeof SKILLS)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div variants={fadeUp}>
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: easeOut }}>
        <Link href={`/skills/${index}`} className="skill-card skill-card-link" ref={ref}>
          <div className="skill-header">
            <Image
              src={skill.img}
              alt={skill.name}
              fill
              sizes="(max-width: 900px) 100vw, 320px"
              style={{ objectFit: "cover" }}
            />
            <div className="skill-header-content">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-tag">{skill.tag}</div>
            </div>
          </div>
          <div className="skill-body">
            <p className="skill-desc">{skill.desc}</p>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
                transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
              />
            </div>
            <div className="products-label">{skill.products.length} Productions</div>
            <span className="skill-card-cta">View details →</span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  return (
    <motion.div
      className="skills-grid"
      id="skillsGrid"
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {SKILLS.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );
}
