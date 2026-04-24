import Link from 'next/link'
import { Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const plans = [
  {
    name: 'Basic',
    price: '$59',
    description: 'Great for solo founders launching early announcements.',
    features: ['Standard distribution', 'Basic analytics', 'Up to 1 media asset', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$129',
    description: 'Best for agencies and growth-stage brands.',
    features: ['Extended distribution', 'Detailed analytics', 'Up to 5 media assets', 'Priority support'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$279',
    description: 'Built for high-reach campaigns and enterprise launches.',
    features: ['Maximum media reach', 'Advanced performance dashboard', 'Unlimited media assets', 'Dedicated success manager'],
  },
]

const comparison = [
  ['Distribution level', 'Standard', 'Expanded', 'Maximum'],
  ['Analytics depth', 'Starter', 'Detailed', 'Advanced'],
  ['Estimated media reach', '50K+', '500K+', '2M+'],
  ['Review priority', 'Normal', 'Priority', 'Fast-track'],
]

const addons = [
  { title: 'Homepage Spotlight', price: '$49', text: 'Feature your release in premium homepage placement.' },
  { title: 'Editorial Polish', price: '$39', text: 'Professional headline and structure optimization.' },
  { title: 'Social Push Pack', price: '$29', text: 'Amplify visibility through social-ready formatting.' },
]

const faq = [
  { q: 'Can I change plans after publishing?', a: 'Yes. You can upgrade for future releases anytime from your account.' },
  { q: 'Do plans include SEO-ready page structure?', a: 'All plans include SEO-friendly release pages with strong readability and metadata support.' },
  { q: 'Is there agency billing support?', a: 'Yes. Pro and Premium users can manage multi-client workflows and billing support options.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-[#26093b] px-6 py-12 text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFCC00]">Business Wire Style Pricing</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Pricing plans built for serious press visibility</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ead3ef]">
            Choose a release plan based on your media reach goals, analytics depth, and campaign urgency.
          </p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 ${
                plan.popular
                  ? 'border-[#EB5B00] bg-white shadow-[0_24px_60px_rgba(176,44,0,0.16)]'
                  : 'border-[#e8d0e9] bg-white'
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[#EB5B00] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Most Popular
                </span>
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a558f]">{plan.name}</p>
              <p className="mt-3 text-4xl font-bold text-[#2f1139]">{plan.price}</p>
              <p className="mt-1 text-sm text-[#5d3853]">per release</p>
              <p className="mt-4 text-sm leading-7 text-[#5d3853]">{plan.description}</p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#41243e]">
                    <Check className="h-4 w-4 text-[#EB5B00]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/create/mediaDistribution"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
                  plan.popular ? 'bg-[#EB5B00] text-white hover:bg-[#B12C00]' : 'bg-[#640D5F] text-white hover:bg-[#4f094b]'
                }`}
              >
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-10 overflow-hidden rounded-3xl border border-[#e7cfe9] bg-white">
          <div className="border-b border-[#f0dff2] px-6 py-4">
            <h2 className="text-2xl font-semibold text-[#2f1139]">Feature comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-[#faf6fc] text-left text-sm text-[#5f3a55]">
                  <th className="px-6 py-3 font-semibold">Feature</th>
                  <th className="px-6 py-3 font-semibold">Basic</th>
                  <th className="px-6 py-3 font-semibold">Pro</th>
                  <th className="px-6 py-3 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]} className="border-t border-[#f0dff2] text-sm text-[#41243e]">
                    <td className="px-6 py-3 font-medium">{row[0]}</td>
                    <td className="px-6 py-3">{row[1]}</td>
                    <td className="px-6 py-3">{row[2]}</td>
                    <td className="px-6 py-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#e7cfe9] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2f1139]">Add-ons</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {addons.map((addon) => (
              <article key={addon.title} className="rounded-2xl border border-[#eddcf0] bg-[#faf6fc] p-4">
                <p className="text-base font-semibold text-[#33183d]">{addon.title}</p>
                <p className="mt-1 text-sm font-semibold text-[#EB5B00]">{addon.price}</p>
                <p className="mt-2 text-sm leading-7 text-[#5d3853]">{addon.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#e7cfe9] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2f1139]">Pricing FAQs</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faq.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`} className="border-[#f0dff2]">
                <AccordionTrigger className="text-base font-semibold text-[#2f1139] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-[#5d3853]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  )
}
