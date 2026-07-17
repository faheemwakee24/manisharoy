import { BRANDS } from "@/data/content";

export default function BrandsMarquee() {
  const items = [...BRANDS, ...BRANDS];

  return (
    <div className="brands-strip">
      <div className="brands-marquee" id="marquee">
        {items.map((brand, index) => (
          <div key={`${brand}-${index}`} className="brand-item">
            <span>·</span> {brand}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
