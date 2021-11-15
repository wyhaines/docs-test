---
sidebar_position: 3
---

# Certificate (DEPRECATED)

## State Transitions

A blockchain participating in the Topos XCP is no different from a common blockchain: it is a distributed subnet that rests upon a p2p network which leverages a shared consensus mechanism to totally order propagated transactions and hence replicate a consistent state over the network.

A state transition in a blockchain is a set of transactions, i.e. state mutations, that from a given state commitment induce the next state commitment. New blocks are such state commitments that are validated by the consensus layer as valid state transitions from their preceding block.

## Proof of valid state transition

For Topos XCP to retain a consistent global state—i.e. blockchains can interact with one another and inconsistent state is prevented— participating blockchains construct proofs of the validity of their state transitions. Topos XCP is **privacy-enhancing** hence does not request blockchains to publicly share their blocks. Instead, another form of state commitments is used by all subnets: **Certificates**.

To prove the validity of their state transitions while exposing only a part of their internal state (more on that later), Topos XCP blockchains nodes compute [zkSTARK](/learn/uci/state-transitions-validity) proofs attesting the validity of every transaction that happened since the previous Certificate.

Other blockchains verify such state transitions by verifying Certificates which among other things equates to verifying the zkSTARK proof.

## Certificate composition

Beside containing zkSTARK proofs, Certificates include in clear the set of new—i.e. since the previous Certificate—cross-chain (XC) transactions that were emitted towards other Topos XCP blockchains.

Overall, Topos XCP blockchains construct Certificates with the following data:

- The subnet id
- A reference to the previous Certificate
- zkSTARK proofs of valid state transition (both exposed and non-exposed state)
- The list of outgoing XC transactions (exposed state)
- A signature of the Certificate

Certificates are signed by our [threshold signature](/learn/uci/authentication) scheme that is detailed in the next section.
