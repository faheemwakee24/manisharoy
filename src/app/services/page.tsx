import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SkillsGrid from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "Services · Manisha Roy",
  description:
    "Fashion services including couture, children's wear, runway production, bespoke design, and forex trading mentorship.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Build"
        title="Fashion, Shows, and Bespoke Work"
        subtitle="Detailed services for couture womenswear, children's fashion, runway production, studio management, special order design, and forex trading."
      />
      <section id="skills" className="skills-section">
        <div className="sec-eyebrow">Expertise</div>
        <h2 className="sec-title">
          Skills &<br />
          <span>Productions</span>
        </h2>
        <div className="divider" />
        <SkillsGrid />
      </section>
    </>
  );
}
