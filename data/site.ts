import {
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Plane,
  SearchCheck,
  ShieldCheck,
  Ship,
  Sprout,
  Truck,
  UsersRound,
  Warehouse
} from "lucide-react";

export const company = {
  name: "PatanA5Traders",
  displayName: "PatanA5Traders",
  tagline: "Connecting India to Global Markets.",
  description:
    "PatanA5Traders is a trusted Indian Import & Export company specializing in sourcing, supplying, and delivering high-quality products to international markets with reliability, transparency, and customer satisfaction.",
  businessType: "Proprietorship",
  email: "info@patana5traders.com",
  phone: "8977574355",
  whatsapp: "8977574355",
  address: "Kadapa District, Andhra Pradesh, India",
  linkedin:
    "https://www.linkedin.com/in/patan-mahaboob-subhani-a23619294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" }
];

export const products = [
  {
    name: "Rice",
    category: "Agricultural Products",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium Indian rice sourced through verified supply networks for export buyers, distributors, hotels, and food businesses.",
    specs: ["Long and short grain options", "Sortex-cleaned supply", "Moisture-controlled lots"],
    packaging: "PP bags, non-woven bags, private-label export packaging",
    moq: "Depends on customer requirement"
  },
  {
    name: "Spices",
    category: "Agricultural Products",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Authentic Indian spices selected for aroma, freshness, purity, and consistent quality across export consignments.",
    specs: ["Whole and ground spices", "Batch quality checks", "Custom grades available"],
    packaging: "Bulk cartons, pouches, jars, and buyer-specific packs",
    moq: "Depends on customer requirement"
  },
  {
    name: "Edible Cooking Oil",
    category: "Food Products",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Export-ready edible cooking oils procured from reliable processors with documentation and packaging support.",
    specs: ["Refined oil options", "Food-grade handling", "Container-ready dispatch"],
    packaging: "Bottles, tins, cans, drums, and flexi options",
    moq: "Depends on customer requirement"
  },
  {
    name: "Fresh Fruits",
    category: "Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fresh Indian fruits packed for international markets with attention to grade, shelf life, and cold-chain readiness.",
    specs: ["Seasonal availability", "Grade-wise sorting", "Export inspection support"],
    packaging: "Corrugated boxes, crates, and custom buyer packs",
    moq: "Depends on customer requirement"
  },
  {
    name: "Vegetables",
    category: "Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fresh vegetables sourced from trusted suppliers and packed for safe international movement.",
    specs: ["Fresh seasonal produce", "Sorting and grading", "Hygienic handling"],
    packaging: "Ventilated cartons, mesh bags, crates, and custom packs",
    moq: "Depends on customer requirement"
  }
];

export const services = [
  ["Import Services", "Reliable import coordination for buyers sourcing products into India.", Ship],
  ["Export Services", "End-to-end export support from procurement to shipment.", Plane],
  ["Global Sourcing", "Supplier discovery and competitive sourcing across verified networks.", Globe2],
  ["Supplier Verification", "Checks for supplier credibility, capability, and documentation.", SearchCheck],
  ["Product Procurement", "Organized procurement based on buyer specifications and budgets.", PackageCheck],
  ["Product Sampling", "Sample coordination before bulk purchase decisions.", ClipboardCheck],
  ["International Logistics", "Shipment planning with dependable logistics partners.", Truck],
  ["Freight Forwarding", "Coordination for freight, documents, and route planning.", Boxes],
  ["Sea Freight", "Containerized sea freight support for global B2B shipments.", Ship],
  ["Door-to-Door Delivery", "Integrated movement support from pickup to final delivery.", Warehouse]
] as const;

export const certifications = [
  "Import Export Code (IEC)",
  "GST Registration",
  "MSME / Udyam Registration",
  "FSSAI License",
  "APEDA Registration",
  "Spice Board Registration",
  "Export Promotion Council Membership",
  "Other Government Certifications"
];

export const chooseUs = [
  "Premium Quality Products",
  "Verified Suppliers",
  "Competitive Pricing",
  "Reliable Global Network",
  "Worldwide Shipping",
  "Secure International Payments",
  "Quality Assurance",
  "Professional Customer Support",
  "Experienced Team",
  "Timely Delivery",
  "Transparent Business Practices",
  "Long-Term Business Relationships"
];

export const stats = [
  ["25+", "Countries Served"],
  ["50+", "Products Exported"],
  ["120+", "Happy Clients"],
  ["300+", "Shipments Completed"],
  ["5+", "Years of Experience"],
  ["98%", "Customer Satisfaction"]
] as const;

export const process = [
  "Inquiry",
  "Requirement Analysis",
  "Quotation",
  "Supplier Selection",
  "Product Procurement",
  "Quality Inspection",
  "Packaging",
  "Documentation",
  "Customs Clearance",
  "Shipping",
  "Delivery"
];

export const markets = [
  "India",
  "United Arab Emirates",
  "United States",
  "United Kingdom",
  "Singapore",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Asia",
  "Africa"
];

export const gallery = [
  {
    title: "Cargo Ships",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Shipping Containers",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Ports",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Product Packaging",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Quality Inspection",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Export Documentation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
  }
];

export const faqs = [
  ["What products do you export?", "We export rice, spices, edible cooking oil, fresh fruits, vegetables, and other buyer-specified Indian products."],
  ["What products do you import?", "We support import sourcing based on customer requirements, supplier availability, documentation, and compliance needs."],
  ["Which countries do you trade with?", "We focus on India, UAE, USA, UK, Singapore, Saudi Arabia, Qatar, Oman, Kuwait, wider Asia, and Africa."],
  ["How can I request a quotation?", "Use the inquiry form, WhatsApp, phone, or email with product name, quantity, destination country, and packaging preference."],
  ["What is the minimum order quantity?", "MOQ depends on customer requirement, product type, packaging, supplier availability, and shipment mode."],
  ["How long does shipping take?", "Shipping time depends on destination, freight mode, customs process, product readiness, and documentation."],
  ["Which payment methods do you accept?", "Payment terms are discussed case by case, with secure international payment methods preferred for B2B trade."],
  ["Do you provide custom packaging?", "Yes. Custom packaging and private-label options can be arranged depending on product and order quantity."],
  ["Can I request product samples?", "Yes. Product sampling can be arranged before bulk order confirmation."],
  ["Do you provide documentation support?", "Yes. We coordinate export documentation, customs support, inspection documents, and shipment paperwork."]
];

export const values = [
  ["Quality First", "Every shipment is approached with practical quality checks and supplier accountability.", BadgeCheck],
  ["Transparent Trade", "Clear communication, fair pricing, and honest documentation guide every deal.", ShieldCheck],
  ["Customer Focus", "We build long-term relationships through responsive service and dependable follow-through.", UsersRound],
  ["Ethical Practices", "We believe global trade works best when trust, compliance, and professionalism lead.", Handshake]
] as const;

export const contactCards = [
  ["Call Now", company.phone, `tel:+91${company.phone}`, Phone],
  ["WhatsApp", company.whatsapp, `https://wa.me/91${company.whatsapp}`, CheckCircle2],
  ["Email", company.email, `mailto:${company.email}`, Mail],
  ["Address", company.address, "https://maps.google.com/?q=Kadapa%20Andhra%20Pradesh%20India", MapPin]
] as const;

export const trustIcons = [Building2, FileCheck2, Sprout, Globe2];
