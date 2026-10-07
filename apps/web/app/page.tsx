import type { ReactNode } from "react";

/* ---------------- icons ---------------- */
function Icon({ path }: { path: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {path}
    </svg>
  );
}

const icons = {
  flexible: <Icon path={<><path d="M3 12h18" /><path d="M7 8l-4 4 4 4" /><path d="M17 8l4 4-4 4" /></>} />,
  locked: <Icon path={<><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>} />,
  goal: <Icon path={<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" /></>} />,
  shield: <Icon path={<><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>} />,
  split: <Icon path={<><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8.5 7.5L15.5 15.5" /><path d="M18 9V6h-3" /></>} />,
  rotate: <Icon path={<><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v4h-4" /></>} />,
  wallet: <Icon path={<><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1" /></>} />,
  key: <Icon path={<><circle cx="8" cy="12" r="3" /><path d="M11 12h10" /><path d="M17 12v3" /><path d="M20 12v2" /></>} />,
  globe: <Icon path={<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>} />,
};

/* ---------------- data ---------------- */
const personal = [
  { icon: icons.flexible, name: "Flexible", desc: "Deposit and withdraw any time. A fully liquid emergency buffer." },
  { icon: icons.locked, name: "Locked", desc: "Commit funds until a date you choose. The contract enforces the lock — no early release, by anyone." },
  { icon: icons.goal, name: "Goal", desc: "Set a target, watch progress accrue on-chain, and know exactly when you've arrived." },
];

const group = [
  {
    icon: icons.shield,
    name: "Shared Vaults",
    tag: "Multi-sig",
    desc: "A shared pot for a goal like a vacation. Anyone contributes; withdrawals require M-of-N member approvals — no one moves the money alone.",
  },
  {
    icon: icons.split,
    name: "Split Pools",
    desc: "A group saves into one pool; the balance is split back to members by their agreed shares, settled on-chain.",
  },
  {
    icon: icons.rotate,
    name: "Circles (ROSCA)",
    desc: "Rotating savings. Members contribute each round and payouts rotate automatically and transparently.",
  },
];

const steps = [
  { n: "01", title: "Create a vault", body: "Open a personal vault in seconds, or spin up a shared one and set the approval threshold." },
  { n: "02", title: "Fund it in USDC", body: "Deposit with a passkey smart wallet — no seed phrase, and sponsored fees cover your first move." },
  { n: "03", title: "Withdraw by the rules", body: "Funds release only when the on-chain rules are met: your unlock date, your goal, or your group's signatures." },
];

const pillars = [
  { icon: icons.shield, title: "Non-custodial by design", body: "Funds move only under rules written in a Soroban contract. No organizer, admin, or company can touch your principal." },
  { icon: icons.globe, title: "Dollar-denominated", body: "Save in USDC to hedge against local-currency depreciation; cash in and out in local currency via Stellar anchors." },
  { icon: icons.key, title: "Passwordless onboarding", body: "Passkey smart wallets and sponsored fees mean your first deposit needs no seed phrase and no XLM." },
];

/* ---------------- components ---------------- */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-sm font-bold text-slate-950">
        K
      </div>
      <span className="text-lg font-semibold tracking-tight">Kestra</span>
    </div>
  );
}

const repo = "https://github.com/Kestrahub/Kestra";

/* ---------------- page ---------------- */
export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#07090f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#personal" className="hover:text-white">Personal</a>
            <a href="#group" className="hover:text-white">Group</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href={repo} className="hover:text-white">GitHub</a>
          </nav>
          <a href={repo} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
            Launch app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-8rem] top-[6rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Built on Stellar · Soroban smart contracts
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Save alone or together,
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              on rules you can verify
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Kestra is a non-custodial savings protocol — not just a group circle.
            Build personal savings on your own, or pool funds with people you
            trust in a multi-sig vault. Every deposit, lock, and payout is
            enforced on-chain in USDC.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={repo} className="w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto">
              Start saving
            </a>
            <a href="#group" className="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto">
              See group vaults
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>Non-custodial</span>
            <span className="text-slate-700">•</span>
            <span>USDC-denominated</span>
            <span className="text-slate-700">•</span>
            <span>No seed phrase</span>
            <span className="text-slate-700">•</span>
            <span>Works for one person or a hundred</span>
          </div>
        </div>
      </section>

      {/* Clarity band */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-center sm:grid-cols-3">
          {[
            ["5", "ways to save, one protocol"],
            ["1", "person is enough — groups are optional"],
            ["0", "custodians between you and your funds"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
                {stat}
              </div>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section id="personal" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Personal savings</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Just for you — no group required
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Every personal product works for a single person. No co-signers, no
          invites. Save solo today and invite others later, or never.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personal.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">{p.icon}</div>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Group */}
      <section id="group" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Group savings</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Save together, trust the code — not an organizer
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Pooling money with other people usually means trusting whoever holds
            it. Kestra replaces that trust with on-chain rules.
          </p>

          {/* Featured: Shared Vault */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-sky-500/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">{icons.shield}</div>
                <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200">
                  Multi-signature
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Shared Vaults</h3>
              <p className="mt-3 text-slate-300">
                The group-savings centerpiece. Picture four friends saving for a
                trip: everyone pays in whenever they can, and spending the money
                requires, say, <span className="font-semibold text-white">3 of 4</span> to sign off. The
                approval threshold is set on-chain at creation — no one can quietly
                change it or drain the pot alone.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {["Any member can contribute, any time", "Withdrawals need M-of-N approvals", "Perfect for vacation, rent, or household funds"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-sky-400">{icons.shield}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              {group.slice(1).map((g) => (
                <div key={g.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">{g.icon}</div>
                  <h3 className="mt-5 text-xl font-semibold">{g.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="text-5xl font-bold text-white/10">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky-300">{p.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Your money. Your rules. On-chain.</h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            No seed phrases. No custodian. No hidden fees — Kestra earns only when
            you do. Start solo, grow into a group whenever you want.
          </p>
          <a href={repo} className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            Get started
          </a>
        </div>
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
