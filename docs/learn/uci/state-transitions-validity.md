---
sidebar_position: 2
---

# State Transitions Validity

The "state" of a blockchain represents information, including account balances. Transactions between the accounts change the state of the blockchain; that is, lead to a state transition. In the case of cross chain transactions, these transactions are aggregated in a certificate by a sidechain. For the integrity of the blockchain-ecosystem, it is important that state transition computation is done correctly (the state transition is valid). In a trustless setup, where the verifier does not trust the certificate producer, verifying each individual transaction and its corresponding state transition will be computationally prohibitive for a large number of transactions, thus impeding scalability. This bottleneck can be removed if the verifiers check the integrity of the computation provided by the prover without checking each transaction.

## Computational Integrity

Computational integrity implies that the computations were done correctly. A proof of Computational integrity (CI) can be used to convince the verifier that state transitions were computed correctly, with a very high probability, without the verifier having to compute
these transitions themselves. This is extremely efficient if the number of state transitions is large, and the CI proof is small, leading to scalability. Additionally, the CI proof does not reveal
any additional information other than the validity of proof, maintaining privacy. Zk-STARK is one of the technologies which achieves both scalability and privacy, two of the most important properties of blockchains.

# zk-STARK

## Zero-knowledge Proofs

Zero-knowledge proofs allow one party (called the prover) to prove to other parties (called the verifiers) the validity of a certain statement without revealing any extra information about the statement itself. For example, assume that party A would like to prove to party
B that it has enough tokens to complete a transaction, without actually showing how many tokens it has. Such technology has received major attention in the field of blockchains for enhancing privacy, as this is a fundamental property of all multi-chain networks open to
both public and private ledgers. Topos (Cross Subnet Protocol) XSP leverages zero-knowledge proofs when each ledger proves the validity of its state transitions to the rest of the ecosystem. More specifically, Topos XSP leverages zk-STARK proof to achieve interoperability between its ledgers of the ecosystem, and more generally, to the other blockchains.

## What is a zk-STARK?

The term "zk-STARK" stands for "zero-knowledge Scalable Transparent ARgument of Knowledge". These arguments can be non-interactive or interactive depending on whether the verifying party needs to interact with the prover. zk-STARKs are specifically used to prove computation integrity, meaning that the verifying party can attest to the validity of the computation (i.e. the correctness of its output), maintaining the opaqueness of the input, and thus providing a zero knowledge privacy.

The "S" in "zk-STARK" stands for scalable: the computations do not become prohibitively slow and costly as the length of the blockchain increases. For example, the computations and storage can be performed off-chain, and then prover generates STARK proofs for computational integrity, and after that places it on chain for verification by verifier. The time required by verifier is significantly small, which facilitates further the interoperability of the ledgers. This efficiency, along with parallelizability, enables a large number of computations to occur.

The "T" stands for transparent: meaning that, unlike most of the previous proof systems, no trusted third party is required for setup. Transparency adds an extra layer of privacy and security. Another added layer of security provided is the use of hash functions in computations involved in zk-STARKs. These hash functions-based constructions are currently known to be quantum-resistant. That is, invulnerable to attack by quantum computers, which paves a way to
obtaining quantum-safe blockchains.

CI proofs are first converted to sequence of machine states called an execution trace. Any two consecutive states in the execution trace are related by a set of polynomials called constraints. This algebraic representation of CI proofs is called algebraic intermediate representation (AIR). The columns of the execution trace are interpolated to a polynomial of low degree, and then CI proof verification turns into [Interactive Oracle Proofs of Proximity](https://eccc.weizmann.ac.il/report/2017/134/download/). This reduction of problem has the advantage that prover's proofs length and the computation is linear in the size of input and whereas verfier's proof length and time is logarthmic in the size of input.

## STARKs in XSP

On a sidechain, all the outgoing cross-chain transactions are batched into certificates, with a fixed number of transactions per certificate. These certificates provide the following necessary checksin form of STARK proofs that:

the sender has enough tokens to do this transfer;

the transaction was approved by the sender;

the receiving account is correctly identified; and

the state transition was done correctly (i.e. that the account balances are accurately updated following the transactions listed in the certificate).

### What is Verified by STARK Proof?

A STARK proof checks the following:

the sender has enough tokens to do the transactions using range proofs;

the Merkle tree, which represents the current state of the sidechain is updated at the appropriate leaf, representing the sender, where the account balance of the sender is deducted by the amount of transaction and the nonce is updated for the number of transactions completed by this sender. The leaves of this tree are formed by the Rescue-hash of the concatenation of public key of the process holding the account, account balance and the nonce, which represents the number of outgoing transactions done by the account holder;

the Schnorr signature checks out for the sender; and

the public key of the receiver is properly identified.

At the moment, each certificate has at most 14 STARK proofs. The STARK proofs are non-interactive. The prover is the certificate producing entity (the set of validators), and the verifier is any listening XSP node. However, note that any entity can verify this certificate, since the public inputs are the Merkle roots of the previous and current certificates.

## Future direction

Current STARK proofs require custom-made AIRs: one for each of different kind of statement. This customization restricts the kinds of proofs that can be proven by the given STARK. The next step would be to remove this bottleneck by constructing a virtual machine such that execution of proof of arbitrary statements on this machine can be verified using a single STARK proof.
