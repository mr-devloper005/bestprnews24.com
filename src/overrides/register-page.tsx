import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <section className="rounded-3xl border border-[#e7cfe9] bg-white p-7">
          <h1 className="text-4xl font-bold tracking-tight text-[#2f1139]">Create a New {` `}
            <span className="brand-gradient-text">bestprnews24 Account</span>
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#5d3853]">
            Create a free account to submit press releases through the bestprnews24.com distribution workflow.
          </p>
          <form className="mt-6 grid gap-3">
            <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Company" />
            <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Email" />
            <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Phone" />
            <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Website" />
            <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Choose Username" />
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" type="password" placeholder="Password" />
              <input className="h-11 rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" type="password" placeholder="Confirm" />
            </div>
            <button type="submit" className="h-11 rounded-xl bg-[#640D5F] text-sm font-semibold text-white hover:bg-[#50094a]">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-[#5d3853]">
            Already have an account? <Link href="/login" className="font-semibold text-[#B12C00]">Sign In</Link>
          </p>
        </section>

        <section className="flex items-center rounded-3xl border border-[#e7cfe9] bg-white p-7">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2f1139]">Promote Your Business</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5d3853]">
              <li>Be found by prospects, journalists, and influencers.</li>
              <li>Increase search engine visibility.</li>
              <li>Generate social media engagement and authority.</li>
              <li>Stimulate new revenue streams with trusted release pages.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
