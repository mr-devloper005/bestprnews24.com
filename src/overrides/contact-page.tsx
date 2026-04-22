import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(57,19,71,0.08)] sm:p-8">
          <h1 className="text-center text-4xl font-bold tracking-tight text-[#1f0b29] sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#5d3853]">
            Reach out for release publishing support, distribution questions, and campaign planning help from our media team.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="rounded-2xl border border-[#ecd3ee] bg-[#faf6fc] p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="h-11 rounded-xl border border-[#dec2e1] bg-white px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Contact Name *" />
                <input className="h-11 rounded-xl border border-[#dec2e1] bg-white px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Phone Number" />
                <input className="h-11 rounded-xl border border-[#dec2e1] bg-white px-4 text-sm outline-none focus:border-[#640D5F] md:col-span-2" placeholder="Email *" />
              </div>

              <p className="mt-5 text-sm font-medium text-[#4f2a42]">Help us understand your needs a little more.</p>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <select className="h-11 rounded-xl border border-[#dec2e1] bg-white px-3 text-sm outline-none focus:border-[#640D5F]">
                  <option>Select organization type</option>
                  <option>Startup</option>
                  <option>Agency</option>
                  <option>Entrepreneur</option>
                  <option>Enterprise</option>
                </select>
                <select className="h-11 rounded-xl border border-[#dec2e1] bg-white px-3 text-sm outline-none focus:border-[#640D5F]">
                  <option>Subject: How may we help you?</option>
                  <option>Pricing</option>
                  <option>Release distribution</option>
                  <option>Technical support</option>
                </select>
              </div>

              <textarea className="mt-4 min-h-32 w-full rounded-xl border border-[#dec2e1] bg-white p-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Message / Comment *" />

              <button type="submit" className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#EB5B00] px-7 text-sm font-semibold text-white transition hover:bg-[#B12C00]">
                Submit Now
              </button>
            </form>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#ecd3ee] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">Telephone Hours</p>
                <p className="mt-3 text-sm text-[#4f2a42]">Monday to Friday</p>
                <p className="text-sm text-[#4f2a42]">8:30am to 5:00pm Pacific (PDT)</p>
              </div>

              <div className="rounded-2xl border border-[#ecd3ee] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">Toll Free Telephone</p>
                <p className="mt-3 text-sm text-[#4f2a42]">1-888-880-9539</p>
                <p className="text-sm text-[#4f2a42]">(646) 417-8294</p>
              </div>

              <div className="rounded-2xl border border-[#ecd3ee] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">US Address</p>
                <p className="mt-3 text-sm text-[#4f2a42]">Suite 1400 - 505 Second Avenue</p>
                <p className="text-sm text-[#4f2a42]">Seattle, WA 98104, USA</p>
              </div>

              <div className="rounded-2xl border border-[#ecd3ee] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a4569a]">Canada Address</p>
                <p className="mt-3 text-sm text-[#4f2a42]">Suite 203 - 901 West 3rd St</p>
                <p className="text-sm text-[#4f2a42]">North Vancouver, BC V7P 3P9, Canada</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
