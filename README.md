# Kestra

**Transparent, non-custodial savings on Stellar.**

Kestra is a savings protocol built on **Stellar using Soroban smart contracts**. Save alone or in a group, in USDC, with every deposit, lock, and payout enforced on-chain — not by a company, but by code you can read and verify.

It brings together solo savings vaults (flexible / locked / goal) and transparent rotating group savings circles (ROSCA) under one protocol, with a clean web experience on top.

---

## Why Kestra

- **Non-custodial by design** — funds move only under rules written in a Soroban contract. No organizer or admin can touch your principal.
- **Dollar-denominated** — save in USDC as a hedge against local-currency depreciation; cash in/out in local currency via Stellar anchors.
- **Passwordless onboarding** — passkey smart wallets and sponsored fees mean your first deposit needs no seed phrase and no XLM.
- **Verifiable** — the savings logic is a few small, auditable contracts, not an opaque backend.

## Savings products

| Product     | Rule                                                                 |
| ----------- | -------------------------------------------------------------------- |
| Flexible    | Deposit and withdraw any time.                                       |
| Locked      | Funds locked until a chosen date; the contract enforces the lock.    |
| Goal        | Set a target, track progress on-chain.                               |
| Circles     | Rotating group savings — contributions each round, automatic payouts.|

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
