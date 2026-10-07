const products = [
  {
    name: "Flexible",
    desc: "Deposit and withdraw any time. Your emergency buffer, fully liquid.",
  },
  {
    name: "Locked",
    desc: "Commit funds until a date you choose. The contract enforces the lock — no one can release it early.",
  },
  {
    name: "Goal",
    desc: "Set a target, track progress on-chain, and celebrate when you hit it.",
  },
  {
    name: "Circles",
    desc: "Rotating group savings (ROSCA). Members contribute each round; payouts rotate automatically and transparently.",
  },
];

const pillars = [
  {
    title: "Non-custodial by design",
    body: "Funds move only under rules written in a Soroban smart contract you can read. No organizer, no admin, can touch your principal.",
  },
  {
    title: "Dollar-denominated",
    body: "Save in USDC as a hedge against local-currency depreciation. Cash in and out in local currency through Stellar anchors.",
  },
  {
    title: "Passwordless onboarding",
    body: "Passkey smart wallets and sponsored fees mean your first deposit needs no seed phrase and no XLM.",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" />
      <span className="text-lg font-semibold tracking-tight">Kestra</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="https://github.com/Kestrahub/Kestra" className="hover:text-white">GitHub</a>
        </nav>
        <a
          href="https://github.com/Kestrahub/Kestra"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
        >
          Launch app
        </a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-sky-300">
            Built on Stellar · Soroban smart contracts
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Savings you can{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              actually verify
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Kestra is a non-custodial savings protocol. Save alone or in a group,
            in USDC, with every deposit, lock and payout enforced on-chain — not
            by a company, but by code you can read.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/Kestrahub/Kestra"
              className="w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Start saving
            </a>
            <a
              href="#products"
              className="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
            >
              Explore products
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Five ways to save, one transparent protocol
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          From a liquid buffer to a disciplined lock to a community circle —
          each product is its own set of on-chain rules.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400/80 to-indigo-500/80" />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section id="how" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your money. Your rules. On-chain.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          No seed phrases. No custodian. No hidden fees — Kestra earns only when
          you do.
        </p>
        <a
          href="https://github.com/Kestrahub/Kestra"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Get started
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <Logo />
          <p>© 2026 Kestra · MIT Licensed · Built on Stellar</p>
        </div>
      </footer>
    </main>
  );
}
