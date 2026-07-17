import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery · Manisha Roy",
  description: "Portfolio gallery of runway moments, bespoke orders, editorial shoots, and brand collaborations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Visual Stories from the Studio"
        subtitle="A curated gallery of runway moments, bespoke orders, editorial shoots, and collaborative brand work."
      />
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="sec-eyebrow">Portfolio</div>
          <h2 className="sec-title">
            Featured <span>Collections</span>
          </h2>
          <GallerySection />
        </div>
      </section>
    </>
  );
}
