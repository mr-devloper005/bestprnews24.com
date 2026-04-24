import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#22072f]">
      <NavbarShell />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <section className="rounded-3xl border border-[#e7cfe9] bg-white p-7">
          <h1 className="text-4xl font-bold tracking-tight text-[#2f1139]">Sign In</h1>
          <p className="mt-4 text-sm leading-7 text-[#5d3853]">
            Access your release dashboard, publishing workflow, and account analytics.
          </p>
          <form className="mt-6 space-y-3">
            <input className="h-11 w-full rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" placeholder="Username" />
            <input className="h-11 w-full rounded-xl border border-[#dcc0e0] px-4 text-sm outline-none focus:border-[#640D5F]" type="password" placeholder="Password" />
            <button type="submit" className="h-11 w-full rounded-xl bg-[#640D5F] text-sm font-semibold text-white hover:bg-[#50094a]">
              Sign In
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between text-sm">
            <Link href="/forgot-password" className="text-[#B12C00] hover:text-[#8f2500]">Forgot password?</Link>
            <Link href="/register" className="font-semibold text-[#640D5F]">Create account</Link>
          </div>
        </section>

        <section className="flex items-center rounded-3xl border border-[#e7cfe9] bg-white p-7">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2f1139]">Promote Your Business</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5d3853]">
              <li>Be found by prospects, journalists, and influencers.</li>
              <li>Increase search engine visibility.</li>
              <li>Manage online reputation through credible updates.</li>
              <li>Generate new demand through high-trust media pages.</li>
            </ul>
            <Link href="/register" className="mt-6 inline-flex rounded-full border border-[#cdaed2] px-5 py-2 text-sm font-semibold text-[#640D5F] hover:bg-[#f7eef9]">
              Create Free Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
