import type { Metadata } from "next";
import SkillDetail from "@/components/SkillDetail";
import { SKILLS } from "@/data/content";

type SkillPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return SKILLS.map((_, index) => ({ id: String(index) }));
}

export async function generateMetadata({ params }: SkillPageProps): Promise<Metadata> {
  const { id } = await params;
  const skill = SKILLS[Number(id)];
  if (!skill) return { title: "Skill not found · Manisha Roy" };
  return {
    title: `${skill.name} · Manisha Roy`,
    description: skill.desc,
  };
}

export default async function SkillPage({ params }: SkillPageProps) {
  const { id } = await params;
  return <SkillDetail id={Number(id)} />;
}
