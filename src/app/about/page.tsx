import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import BusinessSection from "@/components/BusinessSection";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About · Manisha Roy",
  description:
    "Learn about Manisha Roy — Mumbai fashion designer, forex trader, and founder of Fashormen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Designer"
        title="Crafting Fashion with Vision"
        subtitle="Manisha Roy combines Mumbai heritage, international runway sensibility, and disciplined forex trading — creating wearable couture while navigating global markets."
      />
      <AboutSection />
      <BusinessSection />
      <section id="experience" style={{ background: "var(--noir)" }}>
        <div className="container">
          <div style={{ textAlign: "center" }} className="reveal">
            <div className="sec-eyebrow">Journey</div>
            <h2 className="sec-title">
              Career <span>Milestones</span>
            </h2>
            <div className="divider" />
          </div>
          <Timeline />
        </div>
      </section>
      <BrandsMarquee />
    </>
  );
}
