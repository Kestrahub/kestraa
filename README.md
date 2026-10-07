# Kestra

**A complete savings protocol on Stellar — personal and shared, all enforced on-chain.**

Kestra is a non-custodial savings protocol built on **Stellar using Soroban smart contracts**. It is **not just a rotating savings group (ROSCA)** — rotating circles are only one of several ways to save. Kestra gives individuals a place to build personal savings *and* gives groups a shared, rules-enforced place to save together, all in USDC, with every deposit, lock, approval, and payout enforced by code you can read and verify.

Think of it as a savings "operating system": one protocol, many savings shapes — from a solo emergency buffer, to a locked long-term goal, to a multi-signature pot a group of friends controls together.

**You don't need a group to use Kestra.** A single person can open and save into any vault entirely on their own — a Shared Vault with just one member is simply a personal savings account. Save alone, then invite others later, or never. Group features are always optional, never required.

---

## Why Kestra

- **Personal *and* group savings** — not a single mechanism. Save on your own, or pool funds with people you trust under shared rules.
- **Non-custodial by design** — funds move only under rules written in a Soroban contract. No organizer, admin, or company can touch the principal.
- **Dollar-denominated** — save in USDC as a hedge against local-currency depreciation; cash in/out in local currency via Stellar anchors.
- **Passwordless onboarding** — passkey smart wallets and sponsored fees mean a first deposit needs no seed phrase and no XLM.
- **Verifiable** — the savings logic is a few small, auditable contracts, not an opaque backend.

---

## Ways to save

Kestra deliberately supports a spectrum of savings styles so no one assumes it's "just a circle."

### Personal savings

Every product below works for a single person — no group, no co-signers, no invites required.

| Product     | Rule                                                              |
| ----------- | ----------------------------------------------------------------- |
| Flexible    | Deposit and withdraw any time — a fully liquid buffer.            |
| Locked      | Funds locked until a chosen date; the contract enforces the lock. |
| Goal        | Set a target amount and track progress on-chain.                  |

### Group savings

| Product              | Rule                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| **Shared Vaults** 🔐 | A **multi-signature** pot for a shared goal. Any member can contribute, but withdrawals require **M-of-N** member approvals — ideal for a **vacation fund, rent pool, or household savings** where no single person should be able to move the money alone. |
| Split Pools          | A group saves into one pool; the balance is split back to members by their agreed shares, settled on-chain. |
| Circles (ROSCA)      | Rotating group savings — members contribute each round and payouts rotate automatically and transparently. |

> **Shared Vaults are the group-savings centerpiece.** Imagine four friends saving for a trip: everyone pays into the vault whenever they can, and spending the money requires, say, 3 of the 4 to sign off. The approval threshold is set on-chain at creation and can't be quietly changed by one person.

---

## Repository structure

```text
kestra/
├── apps/
│   └── web/          # Next.js 16 landing page / app
├── contracts/
│   └── vault/        # Soroban savings vault (Rust)
├── packages/
│   └── shared/       # Shared types/utilities
└── scripts/          # Deployment & automation
```

---

## Getting started

### Prerequisites

- Node.js 18+
- Rust (stable) with the `wasm32-unknown-unknown` target
- [Stellar CLI](https://developers.stellar.org/docs/tools/developer-tools)

### Web

```bash
cd apps/web
npm install
npm run dev        # http://localhost:3000
```

### Smart contract

```bash
cd contracts
cargo test                                          # run unit tests
cargo build --target wasm32-unknown-unknown --release
```

The `vault` contract exposes two core functions:

- `deposit(from, amount)` — add to the caller's savings balance.
- `withdraw(to, amount)` — withdraw from the caller's balance (reverts if insufficient).

Both require the caller's authorization via Soroban's `require_auth`.

> **Roadmap:** the multi-signature **Shared Vault** contract (contribute + propose + M-of-N approve) is the next contract to land alongside `vault`.

### Deploy to testnet

```bash
stellar network add --global testnet \
  --rpc-url https://soroban-testnet.stellar.org:443 \
  --network-passphrase "Test SDF Network ; September 2015"

stellar keys generate --global alice --network testnet
curl "https://friendbot.stellar.org?addr=$(stellar keys address alice)"

stellar contract deploy \
  --wasm contracts/target/wasm32-unknown-unknown/release/kestra_vault.wasm \
  --source alice --network testnet
```

---

## License

MIT — see [LICENSE](LICENSE).
