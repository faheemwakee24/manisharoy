"use client";

import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import BusinessSection from "@/components/BusinessSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import VisitCounter from "@/components/VisitCounter";
import { fadeUp, viewport } from "@/lib/motion";

function SectionHeading({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      style={{ textAlign: center ? "center" : undefined, marginBottom: center ? undefined : 0 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title" style={center ? { textAlign: "center" } : undefined}>
        {title}
      </h2>
      <div className="divider divider-animated" />
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisitCounter />
      <AboutSection />
      <BusinessSection />
      <section id="skills" className="skills-section">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Skills &<br />
              <span>Productions</span>
            </>
          }
        />
        <SkillsGrid />
      </section>
      <section id="experience" style={{ background: "var(--noir)" }}>
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              Career <span>Milestones</span>
            </>
          }
        />
        <Timeline />
      </section>
      <BrandsMarquee />
      <section id="gallery" className="gallery-section">
        <motion.div
          style={{ textAlign: "center", marginBottom: "2rem" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="sec-eyebrow" style={{ marginBottom: ".5rem" }}>
            Portfolio
          </div>
          <h2 className="sec-title">
            Featured <span>Collections</span>
          </h2>
        </motion.div>
        <GallerySection />
      </section>
      <ContactSection />
    </>
  );
}
