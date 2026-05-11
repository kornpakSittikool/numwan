import type {
  HeroFeature,
  NavItem,
  Product,
  PromoBanner,
  VideoFeature,
} from "@/types/site";

const images = {
  hero: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  cleanse:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
  sunscreen:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  industrialTools:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  factoryParts:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
  warehouseStock:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  machineLine:
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  safetyGear:
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=80",
  maintenance:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  packagingStock:
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  spareParts:
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80",
  autoService:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
  autoParts:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  autoExterior:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  performanceCar:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  autoDetailing:
    "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=900&q=80",
  garageCar:
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
  sportsCar:
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
  carAccessories:
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
};

export const siteConfig = {
  name: "Numwan",
  description:
    "An industrial and automotive product storefront with ready-stock categories.",
  links: {
    reference: "https://woodmart.xtemos.com/makeup/",
    bootstrap: "https://getbootstrap.com/",
  },
} as const;

export const shopCategories: NavItem[] = [
  { label: "สินค้าอุตสาหกรรม", href: "#industrial-products-heading" },
  { label: "สินค้าประเภทรถยนต์", href: "#automotive-products-heading" },
];

export const heroFeature: HeroFeature = {
  eyebrow: "",
  title: "สินค้าประเภทอุตสาหกรรม",
  description:
    "รวมอะไหล่ เครื่องมือ อุปกรณ์โรงงาน และสินค้าสำหรับงานซ่อมบำรุงที่คัดมาให้ค้นหาและสั่งซื้อได้ง่ายขึ้น",
  ctaLabel: "ดูสินค้า",
  href: "#industrial-products-heading",
  image: images.hero,
  note: "สินค้าอุตสาหกรรมพร้อมสำหรับงานหน้างานและโรงงาน",
};

export const heroPromos: PromoBanner[] = [
  {
    eyebrow: "สินค้าประเภทรถยนต์",
    title: "อะไหล่และอุปกรณ์รถยนต์",
    description:
      "รวมอะไหล่ อุปกรณ์ซ่อมบำรุง และสินค้าดูแลรถยนต์สำหรับงานช่างและการใช้งานประจำวัน",
    ctaLabel: "ดูสินค้า",
    href: "#automotive-products-heading",
    image: images.cleanse,
    theme: "light",
  },
  {
    eyebrow: "สินค้าขายดี",
    title: "สินค้ายอดนิยมพร้อมส่ง",
    description:
      "รวมสินค้าที่ลูกค้าสั่งซื้อบ่อย ทั้งงานอุตสาหกรรม รถยนต์ และอุปกรณ์สำหรับงานแพ็กสินค้า",
    ctaLabel: "ดูสินค้า",
    href: "#ready-stock-heading",
    image: images.sunscreen,
    theme: "dark",
  },
];

export const shippingMessages = [
  "สินค้าอุตสาหกรรมและอะไหล่พร้อมส่ง",
  "ขอใบเสนอราคาได้สำหรับงานโรงงาน",
  "จัดหาสินค้ารถยนต์และอุปกรณ์ซ่อมบำรุง",
  "วัสดุแพ็กสินค้าและอุปกรณ์เครื่องแพ็ก",
  "รองรับงานสั่งซื้อจำนวนมาก",
  "จัดส่งถึงหน้างานและโรงงาน",
] as const;

export const bestSellerProducts: Product[] = [
  {
    name: "เครื่องมือช่างและอุปกรณ์ซ่อมบำรุง",
    category: "งานซ่อมบำรุงโรงงาน",
    price: "ดูสินค้า",
    badge: "ยอดนิยม",
    rating: "พร้อมจัดหา",
    image: images.industrialTools,
  },
  {
    name: "อะไหล่เครื่องจักรและชิ้นส่วนโรงงาน",
    category: "อะไหล่อุตสาหกรรม",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.factoryParts,
  },
  {
    name: "วัสดุสิ้นเปลืองและสต็อกโรงงาน",
    category: "ของใช้ประจำไลน์ผลิต",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.warehouseStock,
  },
  {
    name: "อุปกรณ์ระบบลำเลียงและไลน์ผลิต",
    category: "เครื่องจักรและระบบผลิต",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.machineLine,
  },
  {
    name: "อุปกรณ์ความปลอดภัยในโรงงาน",
    category: "Safety & PPE",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.safetyGear,
  },
  {
    name: "อุปกรณ์ไฟฟ้าและงานควบคุม",
    category: "ไฟฟ้าอุตสาหกรรม",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.maintenance,
  },
  {
    name: "วัสดุแพ็กสินค้าและอุปกรณ์แพ็กกิ้ง",
    category: "Packaging",
    price: "ดูสินค้า",
    badge: "พร้อมส่ง",
    rating: "พร้อมจัดหา",
    image: images.packagingStock,
  },
  {
    name: "น็อต สกรู ลูกปืน และอะไหล่ทั่วไป",
    category: "ชิ้นส่วนมาตรฐาน",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.spareParts,
  },
  {
    name: "สายพานลำเลียงและลูกกลิ้งอุตสาหกรรม",
    category: "ระบบลำเลียง",
    price: "ดูสินค้า",
    badge: "พร้อมส่ง",
    rating: "พร้อมจัดหา",
    image: images.machineLine,
  },
  {
    name: "ปั๊มน้ำอุตสาหกรรมและซีลอะไหล่",
    category: "ปั๊มและซีล",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.factoryParts,
  },
  {
    name: "วาล์ว ข้อต่อ และฟิตติ้งสแตนเลส",
    category: "งานท่อโรงงาน",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.spareParts,
  },
  {
    name: "มอเตอร์ไฟฟ้าและเกียร์ทดรอบ",
    category: "Power Transmission",
    price: "ดูสินค้า",
    badge: "ยอดนิยม",
    rating: "พร้อมจัดหา",
    image: images.maintenance,
  },
  {
    name: "เซนเซอร์และอุปกรณ์ควบคุมไลน์ผลิต",
    category: "Automation",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.machineLine,
  },
  {
    name: "ตลับลูกปืนและชุดส่งกำลัง",
    category: "Bearing",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.industrialTools,
  },
  {
    name: "ใบมีด ฟิล์ม และอะไหล่เครื่องแพ็ก",
    category: "เครื่องแพ็กสินค้า",
    price: "ดูสินค้า",
    badge: "พร้อมส่ง",
    rating: "พร้อมจัดหา",
    image: images.packagingStock,
  },
  {
    name: "สายไฟ รางไฟ และอุปกรณ์ตู้คอนโทรล",
    category: "Electrical",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.maintenance,
  },
  {
    name: "ล้อรถเข็นและอุปกรณ์ขนถ่าย",
    category: "Material Handling",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.warehouseStock,
  },
  {
    name: "น้ำมันหล่อลื่นและเคมีภัณฑ์โรงงาน",
    category: "Maintenance Supply",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.safetyGear,
  },
];

export const newArrivalProducts: Product[] = [
  {
    name: "น้ำมันเครื่องและของเหลวรถยนต์",
    category: "ดูแลเครื่องยนต์",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.autoService,
  },
  {
    name: "อะไหล่ช่วงล่างและระบบเบรก",
    category: "อะไหล่รถยนต์",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.autoParts,
  },
  {
    name: "อุปกรณ์ภายนอกและชิ้นส่วนตัวถัง",
    category: "ตัวถังและตกแต่ง",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.autoExterior,
  },
  {
    name: "อะไหล่เครื่องยนต์และระบบส่งกำลัง",
    category: "เครื่องยนต์",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.performanceCar,
  },
  {
    name: "น้ำยาและอุปกรณ์ดูแลรถยนต์",
    category: "Car Care",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.autoDetailing,
  },
  {
    name: "เครื่องมือช่างสำหรับงานซ่อมรถ",
    category: "Garage Tools",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.garageCar,
  },
  {
    name: "ล้อ ยาง และอุปกรณ์ช่วงล่าง",
    category: "ล้อและยาง",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.sportsCar,
  },
  {
    name: "อุปกรณ์เสริมและของใช้ในรถยนต์",
    category: "Accessories",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.carAccessories,
  },
  {
    name: "ผ้าเบรกและจานเบรก",
    category: "ระบบเบรก",
    price: "ดูสินค้า",
    badge: "ใหม่",
    rating: "พร้อมจัดหา",
    image: images.autoParts,
  },
  {
    name: "โช้คอัพและสปริงช่วงล่าง",
    category: "ช่วงล่าง",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.garageCar,
  },
  {
    name: "ไส้กรองน้ำมันเครื่องและไส้กรองอากาศ",
    category: "Filter",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.autoService,
  },
  {
    name: "แบตเตอรี่และอุปกรณ์ไฟรถยนต์",
    category: "Electrical",
    price: "ดูสินค้า",
    badge: "พร้อมส่ง",
    rating: "พร้อมจัดหา",
    image: images.autoExterior,
  },
  {
    name: "สายพานหน้าเครื่องและลูกลอก",
    category: "เครื่องยนต์",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.performanceCar,
  },
  {
    name: "หัวเทียน คอยล์จุดระเบิด และเซนเซอร์",
    category: "Ignition",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.autoParts,
  },
  {
    name: "น้ำยาหม้อน้ำและอุปกรณ์ระบายความร้อน",
    category: "Cooling System",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.autoDetailing,
  },
  {
    name: "ลูกหมาก ปีกนก และบูชช่วงล่าง",
    category: "ช่วงล่าง",
    price: "ดูสินค้า",
    badge: "ยอดนิยม",
    rating: "พร้อมจัดหา",
    image: images.garageCar,
  },
  {
    name: "ยางปัดน้ำฝนและอุปกรณ์ภายนอก",
    category: "Exterior",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.autoExterior,
  },
  {
    name: "ชุดเครื่องมือฉุกเฉินประจำรถ",
    category: "Car Tools",
    price: "ดูสินค้า",
    rating: "พร้อมจัดหา",
    image: images.carAccessories,
  },
];

export const videoFeatures: VideoFeature[] = [
  {
    title: "สต็อกพร้อมส่งสำหรับงานโรงงาน",
    caption: "วัสดุสิ้นเปลือง อุปกรณ์ซ่อมบำรุง และสินค้าใช้งานประจำไลน์ผลิต",
    image: images.warehouseStock,
    href: "#industrial-products-heading",
  },
  {
    title: "เครื่องมือช่างยอดนิยม",
    caption: "ชุดเครื่องมือและอุปกรณ์สำหรับงานซ่อมหน้างานที่สั่งซ้ำบ่อย",
    image: images.industrialTools,
    href: "#industrial-products-heading",
  },
  {
    title: "อะไหล่รถยนต์พร้อมจัดหา",
    caption: "ชิ้นส่วนรถยนต์ งานช่วงล่าง งานเบรก และอุปกรณ์ซ่อมบำรุง",
    image: images.autoParts,
    href: "#automotive-products-heading",
  },
];

export const footerCategories: NavItem[] = [
  { label: "สินค้าอุตสาหกรรม", href: "#industrial-products-heading" },
  { label: "สินค้าประเภทรถยนต์", href: "#automotive-products-heading" },
  { label: "สินค้ายอดนิยมพร้อมส่ง", href: "#ready-stock-heading" },
  { label: "วัสดุแพ็กสินค้า", href: "#industrial-products-heading" },
  { label: "อะไหล่และเครื่องมือช่าง", href: "#automotive-products-heading" },
];

export const footerProductTypes: NavItem[] = [
  { label: "ติดตามคำสั่งซื้อ", href: "#shop-header" },
  { label: "เงื่อนไขการสั่งซื้อ", href: "#shop-header" },
  { label: "สำหรับโรงงาน", href: "#industrial-products-heading" },
  { label: "สำหรับอู่ซ่อมรถ", href: "#automotive-products-heading" },
];

export const footerUsefulLinks: NavItem[] = [
  { label: "เกี่ยวกับเรา", href: "#shop-header" },
  { label: "ติดต่อเรา", href: "#shop-header" },
  { label: "สินค้าพร้อมส่ง", href: "#ready-stock-heading" },
];
