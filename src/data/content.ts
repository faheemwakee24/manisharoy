export type Product = {
  name: string;
  desc: string;
  images: string[];
};

export type Skill = {
  name: string;
  tag: string;
  icon: string;
  img: string;
  desc: string;
  progress: number;
  products: Product[];
};

export type TimelineItem = {
  year: string;
  title: string;
  company: string;
  text: string;
};

export type GalleryItem = {
  src: string;
  label: string;
  cat: string;
  desc: string;
  images: string[];
};

export const SKILLS: Skill[] = [
  {
    name: "Ladies Fashion Wear",
    tag: "Women's Couture",
    icon: "👗",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    desc: "Elegant, wearable women's collections blending traditional craftsmanship with modern silhouettes.",
    progress: 95,
    products: [
      {
        name: "Evening Gown Collection",
        desc: "Floor-length silk gowns with hand-embroidery, sequin work, and custom draping for formal occasions.",
        images: [
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=80",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
        ],
      },
      {
        name: "Casual Summer Line",
        desc: "Breathable cotton and linen pieces — wide-leg trousers, crop tops, and flowy midi dresses.",
        images: [
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80",
          "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&q=80",
        ],
      },
      {
        name: "Ethnic Fusion Kurta Set",
        desc: "Modern kurtas with palazzo pants, inspired by Rajasthani block prints and Lucknowi chikankari.",
        images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80",
          "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=300&q=80",
          "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300&q=80",
        ],
      },
      {
        name: "Office Workwear Collection",
        desc: "Structured blazers, pencil skirts, and tailored trousers for the modern professional woman.",
        images: [
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
          "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=300&q=80",
          "https://images.unsplash.com/photo-1551803091-e20673f15770?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Baby & Kids Fashion",
    tag: "Children's Wear",
    icon: "👶",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
    desc: "Cute, safe, trend-forward children's clothing using hypoallergenic fabrics and playful designs.",
    progress: 90,
    products: [
      {
        name: "Newborn Gift Sets",
        desc: "Soft organic cotton onesies, bibs, and caps sets — perfect for gifting, in pastels and prints.",
        images: [
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&q=80",
          "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&q=80",
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=80",
        ],
      },
      {
        name: "Toddler Party Wear",
        desc: "Frilly frocks, bow ties, and velvet jackets for celebrations and festivals.",
        images: [
          "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=300&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
          "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&q=80",
        ],
      },
      {
        name: "Kids School Uniform Line",
        desc: "Durable, comfortable, and washable school uniforms in standard and custom school colours.",
        images: [
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&q=80",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&q=80",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Fashion Designing",
    tag: "Design & Craft",
    icon: "✂️",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    desc: "Sketching, draping, pattern making, and fabric selection — the full design pipeline from concept to garment.",
    progress: 98,
    products: [
      {
        name: "Couture Sketch Portfolios",
        desc: "Hand-illustrated fashion plates and digital sketches across 10+ seasonal themes.",
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80",
        ],
      },
      {
        name: "Pattern Making Service",
        desc: "Precise pattern drafting for womenswear — from basic blocks to complex structured garments.",
        images: [
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
          "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=300&q=80",
          "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=300&q=80",
        ],
      },
      {
        name: "Fabric Sourcing & Selection",
        desc: "Curating premium fabrics from Indian mills and international suppliers — silks, crepes, organzas, and more.",
        images: [
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=80",
        ],
      },
      {
        name: "Bespoke Bridal Design",
        desc: "One-of-a-kind bridal lehengas and gowns with intricate embellishments and heirloom-quality finish.",
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&q=80",
          "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Runway / Ramp Walk",
    tag: "Show Direction",
    icon: "🎭",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    desc: "Choreographing runway narratives — model casting, staging, lighting brief, and show direction.",
    progress: 88,
    products: [
      {
        name: "Mumbai Fashion Week Shows",
        desc: "Direction of 20+ MFW shows across seasons — styling, walk coordination, and backstage management.",
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
        ],
      },
      {
        name: "Brand Launch Runway Events",
        desc: "Full production for brand launches — from set design brief to final bow coordination.",
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80",
        ],
      },
      {
        name: "Model Training Workshops",
        desc: "Ramp walk training and grooming workshops for aspiring models in Mumbai.",
        images: [
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80",
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&q=80",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Fashion Studio",
    tag: "Studio Management",
    icon: "🏭",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    desc: "End-to-end studio operations — production pipeline, team management, and quality control.",
    progress: 85,
    products: [
      {
        name: "Studio Setup Consultancy",
        desc: "Full setup planning for fashion studios — equipment, workflow systems, and team hiring guidance.",
        images: [
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=80",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&q=80",
        ],
      },
      {
        name: "Production Management",
        desc: "Overseeing end-to-end garment production — from first sample to final delivery.",
        images: [
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=80",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
        ],
      },
      {
        name: "Quality Audit Services",
        desc: "Third-party quality audits for garment factories and ateliers to meet export standards.",
        images: [
          "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=300&q=80",
          "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=300&q=80",
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Freelance – International Brands",
    tag: "Adidas · Nike & More",
    icon: "🌍",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    desc: "Seasonal design direction and collaboration for leading global sportswear and fashion labels.",
    progress: 92,
    products: [
      {
        name: "Sportswear Collection Design",
        desc: "Designed seasonal activewear lines for Adidas India — mesh panels, performance cuts, and colourways.",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&q=80",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&q=80",
        ],
      },
      {
        name: "Nike Lifestyle Capsule",
        desc: "Limited capsule collection bridging streetwear and South Asian aesthetics for the Indian market.",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
        ],
      },
      {
        name: "H&M & Zara Collaborations",
        desc: "Trend forecasting and design input for fast-fashion giants targeting the South Asian demographic.",
        images: [
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80",
        ],
      },
      {
        name: "Export Buyer Sampling",
        desc: "Custom sampling services for international buyers placing export orders in India.",
        images: [
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80",
          "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=300&q=80",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Inventory Planning",
    tag: "Supply Chain",
    icon: "📦",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    desc: "Procurement planning, stock management, and supply chain coordination for fashion labels.",
    progress: 80,
    products: [
      {
        name: "Seasonal Buy Planning",
        desc: "Forecasting and open-to-buy planning aligned with fashion seasons and sales history.",
        images: [
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&q=80",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
        ],
      },
      {
        name: "Vendor Management",
        desc: "Building and maintaining relationships with fabric vendors, trims suppliers, and contract manufacturers.",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&q=80",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
        ],
      },
      {
        name: "Stock Audit & Liquidation",
        desc: "Physical stock audits and end-of-season liquidation strategy for fashion retailers.",
        images: [
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80",
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&q=80",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Special Orders",
    tag: "Bespoke & Custom",
    icon: "💎",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    desc: "Bespoke and custom design for discerning individual clients — from concept to fitting to final delivery.",
    progress: 93,
    products: [
      {
        name: "Wedding Trousseau",
        desc: "Complete bridal trousseau design — lehengas, sarees, salwar sets — custom made for the bride's vision.",
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&q=80",
          "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=300&q=80",
        ],
      },
      {
        name: "Celebrity Styling Orders",
        desc: "Custom looks designed for film, TV, and influencer clients for red carpets and shoots.",
        images: [
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
        ],
      },
      {
        name: "Corporate Gifting Fashion",
        desc: "Bespoke scarves, stoles, and accessories for corporate gift hampers and luxury brand giveaways.",
        images: [
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=80",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80",
          "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&q=80",
        ],
      },
      {
        name: "Festival Collection Orders",
        desc: "Custom festive outfits for Diwali, Eid, and Christmas — ordered in bulk for families and groups.",
        images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80",
          "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=300&q=80",
          "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300&q=80",
        ],
      },
    ],
  },
  {
    name: "Forex & Trading",
    tag: "Markets · Analysis",
    icon: "📈",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    desc: "Active forex and financial market trader — chart analysis, risk management, and disciplined trade execution across major currency pairs.",
    progress: 88,
    products: [
      {
        name: "Technical Chart Analysis",
        desc: "Price-action and indicator-based analysis across major and minor forex pairs — structure, levels, and high-probability setups.",
        images: [
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&q=80",
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&q=80",
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&q=80",
        ],
      },
      {
        name: "Risk & Position Management",
        desc: "Structured risk frameworks — position sizing, stop placement, and capital preservation for consistent long-term trading.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&q=80",
        ],
      },
      {
        name: "Market Mentorship Sessions",
        desc: "One-to-one sessions covering market psychology, trade journaling, and building a personal trading routine.",
        images: [
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&q=80",
          "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=300&q=80",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80",
        ],
      },
      {
        name: "Multi-Timeframe Strategy",
        desc: "Combining higher-timeframe bias with lower-timeframe entries for cleaner trade selection and better timing.",
        images: [
          "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=300&q=80",
          "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=300&q=80",
          "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=300&q=80",
        ],
      },
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024–Present",
    title: "International Freelance Director",
    company: "Adidas · Nike · Global Brands",
    text: "Delivering seasonal collections and design direction for leading global sportswear and fashion labels.",
  },
  {
    year: "2021–Present",
    title: "Forex & Markets Trader",
    company: "Independent · Global Markets",
    text: "Active forex trader focusing on major currency pairs, technical analysis, and disciplined risk management alongside design work.",
  },
  {
    year: "2022–2024",
    title: "Fashion Studio Director",
    company: "Mumbai Fashion Studio",
    text: "Managed full production pipeline from concept to runway-ready garments for 3 in-house labels.",
  },
  {
    year: "2020–2022",
    title: "Runway Show Director",
    company: "Mumbai Fashion Week Circuit",
    text: "Directed 40+ runway shows — model casting, staging, lighting brief, and post-show reviews.",
  },
  {
    year: "2018–Present",
    title: "Founder & Owner",
    company: "Fashormen Ladies & Baby Wear",
    text: "Founded and currently own Fashormen — a retail brand specialising in ladies' fashion and baby wear, serving customers across Mumbai.",
  },
  {
    year: "2018–2020",
    title: "Senior Fashion Designer",
    company: "Ladies & Baby Wear Label",
    text: "Led women's and children's line development, trending across 3 consecutive seasons.",
  },
  {
    year: "2015–2018",
    title: "Junior Designer",
    company: "Boutique Fashion House, Mumbai",
    text: "Specialised in bespoke special orders and inventory management for exclusive clientele.",
  },
  {
    year: "2010–2015",
    title: "Fashion Graduate & Intern",
    company: "NIFT Mumbai",
    text: "Graduated with distinction from NIFT and interned with 3 leading Mumbai ateliers.",
  },
];

export const BRANDS = [
  "FASHORMEN",
  "ADIDAS",
  "NIKE",
  "H&M",
  "ZARA",
  "FOREVER 21",
  "LIFESTYLE",
  "PANTALOONS",
  "MAX FASHION",
  "MANGO",
  "TOMMY HILFIGER",
  "WILLS INDIA",
  "FOREX MARKETS",
  "AND OTHERS",
];

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    label: "Runway SS2025",
    cat: "Runway",
    desc: "A high-energy seasonal runway presentation featuring flowing silhouettes, gold accents, and contemporary Indian couture for Mumbai Fashion Week.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80",
    label: "Ladies Collection",
    cat: "Ladies",
    desc: "Wearable women's fashion blending traditional craftsmanship with modern cuts — evening wear, casual lines, and ethnic fusion for everyday elegance.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80",
    label: "Baby Wear Line",
    cat: "Baby",
    desc: "Soft, safe, and playful children's clothing crafted with hypoallergenic fabrics — from newborn gift sets to festive toddler party wear.",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80",
    label: "Studio Session",
    cat: "Studio",
    desc: "Behind-the-scenes moments from the atelier — fittings, fabric selection, and production workflow inside the Mumbai fashion studio.",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    label: "Editorial Shoot",
    cat: "Ladies",
    desc: "Fashion editorial storytelling with dramatic lighting and refined styling — capturing the emotion and movement of each garment.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    label: "Special Orders",
    cat: "Bespoke",
    desc: "One-of-a-kind custom commissions for private clients — wedding trousseaus, occasion wear, and heirloom-quality finishes.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    label: "Brand Collab – Adidas",
    cat: "Brands",
    desc: "Seasonal sportswear and lifestyle collaboration work with Adidas — performance cuts, colourways, and market-ready capsules.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80",
    label: "Celebrity Styling",
    cat: "Bespoke",
    desc: "Red-carpet and on-camera looks for film, TV, and influencer clients — tailored silhouettes designed for the spotlight.",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
    label: "Ramp Walk Direction",
    cat: "Runway",
    desc: "Full runway show direction — model casting, walk choreography, staging cues, and backstage coordination for brand launches.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    label: "Forex Trading Desk",
    cat: "Trading",
    desc: "Live market analysis and trade planning across major forex pairs — charts, levels, and disciplined execution from the trading desk.",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
];
