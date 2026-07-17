"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GALLERY } from "@/data/content";
import { easeOut, fadeUp, staggerContainer, viewport } from "@/lib/motion";

export default function GallerySection() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY.map((item) => item.cat)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery =
    activeCategory === "All"
      ? GALLERY
      : GALLERY.filter((item) => item.cat === activeCategory);

  return (
    <>
      <motion.div
        className="gallery-filters"
        id="galleryFilters"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            type="button"
            className={`filter-btn${activeCategory === category ? " active" : ""}`}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div className="gallery-grid" id="galleryGrid" layout>
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item) => {
            const index = GALLERY.indexOf(item);
            return (
              <motion.div
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: easeOut }}
              >
                <Link href={`/collections/${index}`} className="gallery-item" data-cat={item.cat}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 900px) 100vw, 260px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="gallery-overlay">
                    <span>{item.label}</span>
                    <small>{item.cat}</small>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
