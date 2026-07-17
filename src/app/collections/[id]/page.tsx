import type { Metadata } from "next";
import CollectionDetail from "@/components/CollectionDetail";
import { GALLERY } from "@/data/content";

type CollectionPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return GALLERY.map((_, index) => ({ id: String(index) }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { id } = await params;
  const collection = GALLERY[Number(id)];
  if (!collection) return { title: "Collection not found · Manisha Roy" };
  return {
    title: `${collection.label} · Manisha Roy`,
    description: collection.desc,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { id } = await params;
  return <CollectionDetail id={Number(id)} />;
}
