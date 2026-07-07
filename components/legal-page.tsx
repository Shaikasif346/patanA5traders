import Link from "next/link";
import { Logo } from "@/components/logo";
import { company } from "@/data/site";

export function LegalPage({
  title,
  updated,
  children
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-navy-900 dark:bg-navy-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white py-5 dark:border-white/10 dark:bg-navy-950">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/" className="focus-ring rounded-full">
            <Logo />
          </Link>
          <Link
            href="/"
            className="focus-ring rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950"
          >
            Back Home
          </Link>
        </div>
      </header>
      <article className="container py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-300">
          {company.name}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Last updated: {updated}</p>
        <div className="mt-10 max-w-4xl space-y-8 rounded-[8px] border border-slate-200 bg-white p-6 leading-8 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
          {children}
        </div>
      </article>
    </main>
  );
}
