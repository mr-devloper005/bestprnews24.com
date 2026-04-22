import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const metrics = [
  { label: 'Releases Published', value: '35K+' },
  { label: 'Media Mentions Generated', value: '280M+' },
  { label: 'Brands Supported', value: '9.2K+' },
]

const pillars = [
  {
    title: 'Built for credibility',
    text: 'Every release page is structured for readability, trust, and media consumption on any device.',
  },
  {
    title: 'Built for speed',
    text: 'From draft to distribution, your newsroom workflow stays fast and clear without unnecessary steps.',
  },
  {
    title: 'Built for growth',
    text: 'Publish once, track engagement, and scale campaigns with repeatable release operations.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-[#28093d] px-6 py-12 text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCC00]">About Us</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">The media release partner behind {SITE_CONFIG.name}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ead3ef]">
            We help startups, agencies, and global teams turn announcements into visibility-ready stories with premium publishing design and performance-minded distribution workflows.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#EB5B00] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#B12C00]">
              Contact Us
            </Link>
            <Link href="/pricing" className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-[#e7cfe9] bg-white p-5">
              <p className="text-3xl font-bold text-[#2f1139]">{metric.value}</p>
              <p className="mt-2 text-sm text-[#5d3853]">{metric.label}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-[#e7cfe9] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#2f1139]">Our mission</h2>
            <p className="mt-4 text-sm leading-8 text-[#5d3853]">
              We believe every organization should have access to high-quality release publishing that feels modern, trustworthy, and discoverable.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#5d3853]">
              Instead of generic posting templates, we focus on narrative clarity, visual hierarchy, and conversion-ready page architecture.
            </p>
          </article>
          <img
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1000&q=80"
            alt="About our team"
            className="h-full min-h-[280px] w-full rounded-3xl border border-[#e7cfe9] object-cover"
          />
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-[#e7cfe9] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#301339]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5d3853]">{pillar.text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
