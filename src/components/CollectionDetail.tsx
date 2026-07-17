"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GALLERY } from "@/data/content";
import { easeOut, fadeUp, staggerContainer, viewport } from "@/lib/motion";

type CollectionDetailProps = {
  id: number;
};

export default function CollectionDetail({ id }: CollectionDetailProps) {
  const collection = GALLERY[id];
  if (!collection) notFound();

  const images = collection.images || [collection.src];
  const prev = id > 0 ? id - 1 : null;
  const next = id < GALLERY.length - 1 ? id + 1 : null;

  return (
    <>
      <section className="skill-hero">
        <motion.div
          className="skill-hero-bg"
          style={{ backgroundImage: `url('${collection.src}')` }}
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
            <Link href="/gallery" className="skill-back">
              ← Back to Gallery
            </Link>
          </motion.div>
          <motion.div className="sec-eyebrow" variants={fadeUp}>
            {collection.cat} Collection
          </motion.div>
          <motion.h1 className="page-title" variants={fadeUp}>
            {collection.label}
          </motion.h1>
          <motion.div className="skill-meta" variants={fadeUp}>
            <span className="skill-meta-chip">{collection.cat}</span>
            <span className="skill-meta-chip">{images.length} Images</span>
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
          <p>{collection.desc}</p>
        </motion.div>
        <motion.div
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="sec-eyebrow">Lookbook</div>
          <h2 className="sec-title">
            Collection <span>Gallery</span>
          </h2>
          <div className="divider divider-animated" />
        </motion.div>
        <motion.div
          className="collection-gallery-grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {images.map((image, imageIndex) => (
            <motion.figure
              key={`${collection.label}-${imageIndex}`}
              className="collection-shot"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <Image src={image} alt={collection.label} width={800} height={1067} />
            </motion.figure>
          ))}
        </motion.div>
        <div className="skill-nav-row">
          {prev !== null ? (
            <Link href={`/collections/${prev}`} className="skill-nav-btn">
              ← {GALLERY[prev].label}
            </Link>
          ) : (
            <span />
          )}
          {next !== null ? (
            <Link href={`/collections/${next}`} className="skill-nav-btn">
              {GALLERY[next].label} →
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="skill-detail-cta">
          <Link href="/contact" className="btn btn-gold">
            Enquire About This Collection
          </Link>
        </div>
      </section>
    </>
  );
}
