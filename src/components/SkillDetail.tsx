"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SKILLS } from "@/data/content";
import { easeOut, fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

type SkillDetailProps = {
  id: number;
};

export default function SkillDetail({ id }: SkillDetailProps) {
  const skill = SKILLS[id];
  if (!skill) notFound();

  const prev = id > 0 ? id - 1 : null;
  const next = id < SKILLS.length - 1 ? id + 1 : null;

  return (
    <>
      <section className="skill-hero">
        <motion.div
          className="skill-hero-bg"
          style={{ backgroundImage: `url('${skill.img}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: easeOut }}
        />
        <motion.div
          className="skill-hero-content"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Link href="/services" className="skill-back">
              ← Back to Services
            </Link>
          </motion.div>
          <motion.div className="skill-hero-icon" variants={scaleIn}>
            {skill.icon}
          </motion.div>
          <motion.div className="sec-eyebrow" variants={fadeUp}>
            {skill.tag}
          </motion.div>
          <motion.h1 className="page-title" variants={fadeUp}>
            {skill.name}
          </motion.h1>
          <motion.div className="skill-meta" variants={fadeUp}>
            <span className="skill-meta-chip">{skill.products.length} Productions</span>
            <span className="skill-meta-chip">Expertise {skill.progress}%</span>
          </motion.div>
        </motion.div>
      </section>
      <section className="skill-detail-body">
        <motion.div
          className="skill-detail-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p>{skill.desc}</p>
          <div className="skill-progress-wrap">
            <div className="skill-progress-label">
              <span>Mastery</span>
              <span>{skill.progress}%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: easeOut, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="sec-eyebrow">Productions & Products</div>
          <h2 className="sec-title">
            Featured <span>Work</span>
          </h2>
          <div className="divider divider-animated" />
        </motion.div>
        <motion.div
          className="skill-products-grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skill.products.map((product) => (
            <motion.article
              key={product.name}
              className="skill-product-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="skill-product-imgs">
                {product.images.map((image, imageIndex) => (
                  <Image
                    key={`${product.name}-${imageIndex}`}
                    src={image}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                ))}
              </div>
              <div className="skill-product-body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="skill-nav-row">
          {prev !== null ? (
            <Link href={`/skills/${prev}`} className="skill-nav-btn">
              ← {SKILLS[prev].name}
            </Link>
          ) : (
            <span />
          )}
          {next !== null ? (
            <Link href={`/skills/${next}`} className="skill-nav-btn">
              {SKILLS[next].name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="skill-detail-cta">
          <Link href="/contact" className="btn btn-gold">
            Enquire About This Service
          </Link>
        </div>
      </section>
    </>
  );
}
