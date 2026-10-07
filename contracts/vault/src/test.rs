#![cfg(test)]
use super::{Vault, VaultClient};
use soroban_sdk::{testutils::Address as _, Address, Env};

#[test]
fn deposit_then_withdraw() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register(Vault, ());
    let client = VaultClient::new(&env, &contract_id);
    let user = Address::generate(&env);

    assert_eq!(client.deposit(&user, &100), 100);
    assert_eq!(client.deposit(&user, &50), 150);
    assert_eq!(client.withdraw(&user, &60), 90);
}

#[test]
#[should_panic(expected = "insufficient balance")]
fn cannot_overdraw() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register(Vault, ());
    let client = VaultClient::new(&env, &contract_id);
    let user = Address::generate(&env);

    client.deposit(&user, &10);
    client.withdraw(&user, &20);
}
