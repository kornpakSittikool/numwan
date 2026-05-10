import type {
  CollectionHighlight,
  HeroStat,
  StarterFeature,
} from "@/types/site";

export const siteConfig = {
  name: "Numwan",
  description:
    "A premium product discovery landing page inspired by Material Kit 3 and built with Next.js 15 plus Bootstrap.",
  links: {
    materialKit: "https://demos.creative-tim.com/material-kit/index.html",
    bootstrap: "https://getbootstrap.com/",
  },
} as const;

export const heroStats: HeroStat[] = [
  {
    value: "12K+",
    label: "สินค้าพร้อมค้นหา",
    description: "คัดมาเป็นหมวดเพื่อให้เริ่ม shortlist ได้เร็วกว่าเดิม",
  },
  {
    value: "320+",
    label: "แบรนด์ที่คัดเลือก",
    description: "โฟกัสสินค้าที่บาลานซ์เรื่องคุณภาพ ฟังก์ชัน และดีไซน์",
  },
  {
    value: "4.9/5",
    label: "คะแนนเฉลี่ยจากลูกค้า",
    description: "รีวิวจริงช่วยลดเวลาตัดสินใจและเพิ่มความมั่นใจก่อนซื้อ",
  },
];

export const heroSignals = [
  "Hero เต็มจอ",
  "การ์ดลอยแบบ glass",
  "Bootstrap 5 layout",
] as const;

export const starterFeatures: StarterFeature[] = [
  {
    label: "Smart Picks",
    title: "คอลเลกชันของใช้ทุกวัน",
    description:
      "รวมสินค้าที่เหมาะกับการใช้งานจริงในแต่ละวัน พร้อมการจัดวางแบบ card-first ที่อ่านง่ายมาก",
    metric: "24 curated shelves",
  },
  {
    label: "Desk Setup",
    title: "โต๊ะทำงานที่ดูดีและทำงานลื่น",
    description:
      "ออกแบบให้คนเริ่มจากหมวดที่ชัดเจน เช่น โต๊ะทำงาน หูฟัง ไฟ และอุปกรณ์ productivity",
    metric: "8 focus bundles",
  },
  {
    label: "Home Comfort",
    title: "อัปเกรดบ้านให้น่าอยู่ขึ้น",
    description:
      "ใช้ visual hierarchy แบบ Material-inspired เพื่อดันหมวดที่คนอยากสำรวจต่อให้เด่นขึ้นทันที",
    metric: "15 top-rated picks",
  },
];

export const searchKeywords = [
  "หูฟังไร้สาย",
  "เก้าอี้ทำงาน",
  "โคมไฟตั้งโต๊ะ",
  "เครื่องฟอกอากาศ",
] as const;

export const starterChecklist = [
  "ตัด navbar menu ที่ไม่จำเป็น แล้วปล่อยให้ CTA หลักนำสายตาแทน",
  "ย้ายปุ่มหลักไปโฟกัสที่การค้นหาสินค้า ไม่ใช่การดาวน์โหลด",
  "ใช้ hero, stat cards และ collection cards แทนการกระจายลิงก์หลายจุด",
  "คง layout ให้ responsive และต่อยอดเป็นหน้า catalog ได้ง่าย",
] as const;

export const collectionHighlights: CollectionHighlight[] = [
  {
    tag: "New Drop",
    title: "หมวดอุปกรณ์โต๊ะทำงาน",
    description:
      "เมาส์ คีย์บอร์ด เก้าอี้ และไฟตั้งโต๊ะที่จัดเป็นชุดเพื่อให้เทียบตัวเลือกได้ไว",
  },
  {
    tag: "Top Rated",
    title: "เครื่องใช้ในบ้านรีวิวดี",
    description:
      "ดึงหมวดที่คนสนใจสูงขึ้นมานำเสนอในรูปแบบ card ที่อ่านจบได้ภายในไม่กี่วินาที",
  },
  {
    tag: "Fast Choice",
    title: "สินค้าเหมาะกับการซื้อไว",
    description:
      "เหมาะกับ flow ที่ผู้ใช้รู้คำค้นคร่าว ๆ อยู่แล้วและต้องการเข้าถึงสินค้าให้เร็วที่สุด",
  },
  {
    tag: "Curated",
    title: "คอลเลกชันตามสไตล์การใช้ชีวิต",
    description:
      "จาก work-from-home ไปจนถึงมุมพักผ่อน ทุกหมวดถูกจัดด้วย visual priority ที่ชัดเจน",
  },
];
