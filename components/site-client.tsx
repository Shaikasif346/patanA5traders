"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUp,
  ChevronDown,
  ExternalLink,
  Filter,
  Mail,
  Menu,
  Moon,
  Phone,
  Search,
  Send,
  Sun,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  certifications,
  chooseUs,
  company,
  contactCards,
  faqs,
  gallery,
  markets,
  navItems,
  process,
  products,
  services,
  stats,
  values
} from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const TradeScene = dynamic(() => import("./trade-scene").then((mod) => mod.TradeScene), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent" />
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-navy-900 dark:text-white md:text-5xl">{title}</h2>
      <div className="gold-line mx-auto my-5" />
      {text && <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p>}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = saved ? saved === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/95 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95">
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" className="focus-ring rounded-full">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-gold-600 dark:text-slate-200 dark:hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-900 transition hover:border-gold-300 dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-5 py-3 text-sm font-bold text-navy-950 shadow-gold transition hover:shadow-gold"
          >
            <Send className="h-4 w-4" />
            Request Quote
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-900 dark:border-white/15 dark:bg-white/10 dark:text-white lg:hidden"
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-navy-950 lg:hidden">
          <div className="container grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 font-bold dark:border-white/15"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                Theme
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-3 font-bold text-navy-950"
              >
                <Send className="h-5 w-5" />
                Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-navy-950 pt-20 text-white">
      <Image
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=85"
        alt="International cargo port with shipping containers"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,37,0.96),rgba(4,18,37,0.78),rgba(4,18,37,0.32))]" />
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute -right-24 top-24 hidden h-[620px] w-[620px] rounded-full border border-gold-300/20 bg-gold-300/10 blur-3xl xl:block" />
      <div className="absolute inset-y-20 right-0 hidden w-[58vw] xl:block">
        <TradeScene />
      </div>
      <div className="container relative grid min-h-[calc(92vh-80px)] items-center gap-10 py-16 xl:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-gold-300/40 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
            {company.businessType}
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">{company.displayName}</h1>
          <p className="mt-5 text-2xl font-semibold text-gold-300">{company.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">{company.description}</p>
          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Verified Sourcing", "Global Logistics", "Made in India"].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-4 font-bold text-navy-950 shadow-gold transition hover:shadow-gold"
            >
              <Send className="h-5 w-5" />
              Request Quotation
            </a>
            <a
              href={`tel:+91${company.phone}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </motion.div>
        <div className="min-h-[420px] rounded-[8px] border border-white/10 bg-white/5 xl:hidden">
          <TradeScene />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-white dark:bg-navy-950">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative min-h-[520px] overflow-hidden rounded-[8px] shadow-premium"
        >
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
            alt="Professional logistics team reviewing global trade plans"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-[8px] border border-white/20 bg-navy-950/88 p-6 text-white backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-300">Global Business Network</p>
            <p className="mt-2 text-2xl font-bold">Reliable sourcing, verified supply, confident delivery.</p>
          </div>
        </motion.div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-300">
            About Company
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-900 dark:text-white md:text-5xl">
            A trusted Indian trade partner for serious international buyers.
          </h2>
          <div className="gold-line my-5" />
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            PatanA5Traders was created to connect dependable Indian products with global markets through transparent
            sourcing, careful supplier selection, practical logistics, and customer-first communication.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {values.map(([title, text, Icon]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="premium-panel rounded-[8px] p-5 dark:border-white/10 dark:bg-white/5"
              >
                <Icon className="mb-4 h-7 w-7 text-gold-500" />
                <h3 className="font-bold text-navy-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {[
              "Mission-led international trade",
              "Clear vision for global expansion",
              "Commitment to quality",
              "Reliable logistics",
              "Ethical business practices",
              "Customer satisfaction"
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);
  const filtered = products.filter((product) => {
    const matchesQuery = `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <section id="products" className="section section-surface dark:bg-navy-900">
      <div className="container">
        <SectionIntro
          eyebrow="Product Categories"
          title="Export-ready Indian products"
          text="Each product can be supplied with Made in India origin, buyer-specific packaging, quality inspection, and documentation support."
        />
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_260px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search rice, spices, fruits..."
              className="focus-ring h-14 w-full rounded-[8px] border border-slate-200 bg-white pl-12 pr-4 text-navy-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
          </label>
          <label className="relative block">
            <Filter className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="focus-ring h-14 w-full appearance-none rounded-[8px] border border-slate-200 bg-white pl-12 pr-4 font-semibold text-navy-900 shadow-sm dark:border-white/10 dark:bg-navy-950 dark:text-white"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <motion.article
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="overflow-hidden rounded-[8px] premium-panel transition duration-300 hover:-translate-y-2 hover:shadow-premium dark:border-white/10 dark:bg-navy-950"
            >
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={`${product.name} export product`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300">
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
                <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <p>
                    <strong>Origin:</strong> Made in India
                  </p>
                  <p>
                    <strong>Packaging:</strong> {product.packaging}
                  </p>
                  <p>
                    <strong>MOQ:</strong> {product.moq}
                  </p>
                  <div>
                    <strong>Specifications:</strong>
                    <ul className="mt-2 space-y-1">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-gold-500 to-gold-300" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-white dark:bg-navy-950">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="Complete import-export support"
          text="From supplier verification and product procurement to logistics, freight forwarding, and door-to-door delivery coordination."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([title, text, Icon]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="premium-panel rounded-[8px] p-5 dark:border-white/10 dark:bg-white/5"
            >
              <Icon className="mb-4 h-7 w-7 text-gold-500" />
              <h3 className="font-bold text-navy-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1600, bounce: 0 });
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (inView) count.set(numeric);
  }, [count, inView, numeric]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function TrustSections() {
  return (
    <>
      <section className="section relative overflow-hidden bg-navy-950 text-white">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {stats.map(([value, label]) => (
              <div key={label} className="relative rounded-[8px] border border-white/10 bg-white/10 p-5 text-center shadow-premium backdrop-blur">
                <p className="font-display text-4xl font-bold text-gold-300">
                  <CountUp value={value} />
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-surface dark:bg-navy-900">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Built for dependable B2B trade"
              text="A practical, transparent, and professional approach to international sourcing and export supply."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {chooseUs.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] premium-panel p-4 font-semibold text-slate-700 dark:border-white/10 dark:bg-navy-950 dark:text-slate-200"
                >
                  <span className="mr-2 text-gold-500">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionIntro eyebrow="Certifications" title="Compliance-ready documentation" />
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] premium-panel p-5 dark:border-white/10 dark:bg-navy-950"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-600 dark:text-gold-300">
                    Certificate
                  </p>
                  <h3 className="mt-2 font-bold text-navy-900 dark:text-white">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MarketsAndProcess() {
  return (
    <section id="markets" className="section bg-white dark:bg-navy-950">
      <div className="container">
        <SectionIntro
          eyebrow="Global Markets"
          title="Trading links across high-demand regions"
          text="Serving buyers across India, Gulf markets, North America, Europe, Asia, and Africa."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[8px] bg-navy-900 p-6 shadow-premium">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World map showing international trade markets"
              fill
              className="object-contain p-8 opacity-70 invert"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="relative z-10 flex flex-wrap gap-3">
              {markets.map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-gold-300/40 bg-white/10 px-4 py-2 text-sm font-bold text-gold-100 backdrop-blur"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold text-navy-900 dark:text-white">Our Process</h3>
            <div className="gold-line my-5" />
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="premium-panel flex items-center gap-4 rounded-[8px] p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-gold-500 to-gold-300 font-bold text-navy-950">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-surface dark:bg-navy-900">
      <div className="container">
        <SectionIntro
          eyebrow="Gallery"
          title="International logistics in motion"
          text="Professional trade visuals covering cargo movement, container handling, inspection, packaging, and documentation."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="group relative h-72 overflow-hidden rounded-[8px]">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-300">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-bold text-navy-900 dark:text-white md:text-5xl">
              Common buyer questions
            </h2>
            <div className="gold-line my-5" />
            <p className="leading-8 text-slate-600 dark:text-slate-300">
              Quick answers for quotations, products, MOQ, samples, packaging, payment, shipping, and documentation.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="rounded-[8px] border border-slate-200 bg-white dark:border-white/10 dark:bg-navy-950">
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navy-900 dark:text-white"
                >
                  {question}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
                </button>
                {open === index && <p className="px-5 pb-5 leading-7 text-slate-600 dark:text-slate-300">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-white dark:bg-navy-950">
      <div className="container">
        <SectionIntro
          eyebrow="Contact Us"
          title="Request a quote or start a trade discussion"
          text="Share your product, quantity, country, and packaging requirements. The team will respond with practical next steps."
        />
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            className="premium-panel rounded-[8px] p-6 dark:border-white/10 dark:bg-white/5"
            action={`mailto:${company.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Full Name", "text"],
                ["Company Name", "text"],
                ["Country", "text"],
                ["Email Address", "email"],
                ["Phone Number", "tel"],
                ["WhatsApp Number", "tel"],
                ["Product Interested In", "text"],
                ["Quantity Required", "text"]
              ].map(([label, type]) => (
                <label key={label} className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  {label}
                  <input
                    required={["Full Name", "Email Address", "Product Interested In"].includes(label)}
                    name={label}
                    type={type}
                    className="focus-ring h-12 rounded-[8px] border border-slate-200 bg-white px-4 font-normal text-navy-900 dark:border-white/10 dark:bg-navy-950 dark:text-white"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="Message"
                rows={5}
                className="focus-ring rounded-[8px] premium-panel p-4 font-normal text-navy-900 dark:border-white/10 dark:bg-navy-950 dark:text-white"
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-4 font-bold text-navy-950 shadow-gold hover:bg-gold-300"
              >
                <Mail className="h-5 w-5" />
                Submit Inquiry
              </button>
              <a
                href={`https://wa.me/91${company.whatsapp}?text=Hello%20PatanA5Traders%2C%20I%20would%20like%20to%20request%20a%20quotation.`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-navy-900 px-7 py-4 font-bold text-navy-900 hover:bg-navy-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-950"
              >
                <Send className="h-5 w-5" />
                Request Quote
              </a>
            </div>
          </form>
          <div className="space-y-4">
            {contactCards.map(([label, value, href, Icon]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring premium-panel flex items-center gap-4 rounded-[8px] p-5 transition hover:-translate-y-1 hover:border-gold-300 dark:border-white/10 dark:bg-white/5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-300">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.16em] text-gold-600 dark:text-gold-300">
                    {label}
                  </span>
                  <span className="mt-1 block font-semibold text-slate-700 dark:text-slate-200">{value}</span>
                </span>
              </a>
            ))}
            <div className="overflow-hidden rounded-[8px] border border-slate-200 dark:border-white/10">
              <iframe
                title="Kadapa Andhra Pradesh India map"
                src="https://www.google.com/maps?q=Kadapa%20Andhra%20Pradesh%20India&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessCardSection() {
  return (
    <section className="section section-surface dark:bg-navy-900" aria-labelledby="business-card-title">
      <div className="container">
        <SectionIntro
          eyebrow="Business Card"
          title="Your trusted global trading partner"
          text="Connect directly with Patan Mahaboob Subhani, Founder & Owner of PatanA5Traders."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[8px] border border-slate-200 bg-navy-950 p-2 shadow-premium dark:border-white/10"
        >
          <h2 id="business-card-title" className="sr-only">
            PatanA5Traders business card
          </h2>
          <Image
            src="/brand/a5-business-card.png"
            alt="Patan Mahaboob Subhani Founder and Owner business card for A5 Traders"
            width={1661}
            height={947}
            className="h-auto w-full rounded-[6px]"
            sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-slate-300">{company.description}</p>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-bold text-gold-300 hover:text-gold-100"
          >
            LinkedIn <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div>
          <h3 className="font-bold text-gold-300">Legal</h3>
          <div className="mt-4 grid gap-3 text-slate-300">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gold-300">Newsletter</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Receive trade updates and product availability notes.</p>
          <form className="mt-4 flex gap-2" action={`mailto:${company.email}`} method="post" encType="text/plain">
            <input
              name="Newsletter Email"
              type="email"
              placeholder="Email address"
              className="focus-ring min-w-0 flex-1 rounded-[8px] border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
            />
            <button className="focus-ring grid w-12 place-items-center rounded-[8px] bg-gold-500 text-navy-950" aria-label="Subscribe">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 grid gap-3">
      <a
        href={`https://wa.me/91${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="focus-ring grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Send className="h-6 w-6" />
      </a>
      <a
        href={`tel:+91${company.phone}`}
        className="focus-ring grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-gold-500 to-gold-300 text-navy-950 shadow-lg"
        aria-label="Call PatanA5Traders"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="#home"
        className="focus-ring grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-white shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}

export function SiteClient() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <TrustSections />
        <MarketsAndProcess />
        <GalleryFaq />
        <Contact />
        <BusinessCardSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
