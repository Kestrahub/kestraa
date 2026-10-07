#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env};

#[contracttype]
pub enum DataKey {
    /// Saved balance per account.
    Balance(Address),
}

#[contract]
pub struct Vault;

#[contractimpl]
impl Vault {
    /// Deposit `amount` into the caller's savings balance.
    pub fn deposit(env: Env, from: Address, amount: i128) -> i128 {
        from.require_auth();
        assert!(amount > 0, "amount must be positive");

        let key = DataKey::Balance(from.clone());
        let balance = env.storage().persistent().get(&key).unwrap_or(0i128);
        let new_balance = balance + amount;

        env.storage().persistent().set(&key, &new_balance);
        new_balance
    }

    /// Withdraw `amount` from the caller's savings balance.
    pub fn withdraw(env: Env, to: Address, amount: i128) -> i128 {
        to.require_auth();
        assert!(amount > 0, "amount must be positive");

        let key = DataKey::Balance(to.clone());
        let balance = env.storage().persistent().get(&key).unwrap_or(0i128);
        assert!(balance >= amount, "insufficient balance");
        let new_balance = balance - amount;

        env.storage().persistent().set(&key, &new_balance);
        new_balance
    }
}

#[cfg(test)]
mod test;
