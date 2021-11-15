---
sidebar_position: 2
---

# zk-STARK

## Zero-knowledge Proofs

[Zero-knowledge proofs](https://dl.acm.org/doi/10.1145/62212.62222) allow one party (called the "prover") to prove to other parties (called "verifiers") the validity of a certain statement without revealing any extra information about the statement itself. For example, party A would like to prove to party B that it has enough tokens to complete a transaction, without showing how many tokens it has. Such technology has received major attention in the field of [blockchains](https://docs.ethhub.io/ethereum-roadmap/privacy/) for enhancing privacy, as this is a fundamental property of all multi-chain networks open to both public and private subnets.
Topos (Cross Chain Protocol) XSP leverages zero-knowledge proofs when each subnet proves the validity of its state transitions to the rest of the ecosystem. More specifically, Topos XSP leverages [zk-STARK proof](https://eprint.iacr.org/2018/046.pdf) to achieve interoperability between its subnets of the ecosystem, and more generally, to the other blockchains.

## zk-STARKs

The term "zk-STARK" stands for "zero-knowledge Scalable Transparent ARgument of Knowledge". These arguments can be non-interactive or interactive depending on whether the verifying party needs to interact with the prover. zk-STARKs are specifically used to prove computation integrity, meaning that the verifying party can attest to the validity of the computation (i.e. the correctness of its output), maintaining the opaqueness of the input, and thus providing a zero knowledge privacy. These computations are specified by formal algebraic statements, called algebraic intermediate representation(AIR).
The "S" in "zk-STARK" stands for scalable: the computations do not become prohibitively slow and costly as the length of the blockchain increases. For example, the computations and storage can be done off-chain, and then prover generate STARK proofs for computational integrity and then be placed on chain for verification by verifier. The time required by verifier is then really small, this facilitates the interoperability of the subnets further. This efficiency, along with parallelizability, enables a large number of computations to occur.

The "T" stands for transparent: meaning that, unlike most of the previous proof systems, no trusted third party is required.  Transparency adds an extra layer of privacy and security.  Another added layer of security provided is  use of hash functions in computations involved in zk-STARKs. These  hash functions are currently known to be quantum resistant -- that is, invulnerable to attack by quantum computers.

## How does STARK work in XSP?

On a sidechain ("SC"), all the outgoing cross-chain transactions are batched into certificates, with a fixed number of transactions per certificate.
These certificates provide the following necessary checks in form of STARK proofs:
-that the sender has enough tokens to do this transfer;
-that the transaction was approved by the sender;
-that the receiving account is correctly identified; and
-that the state transition was done correctly (i.e. that the account balances are accurately updated following the transactions listed in the certificate).
​

### What is Verified by STARK Proof?

To be precise, a STARK proof checks the following:
-that the sender has enough tokens to do the transactions using range proofs;
-that the Merkle tree which represents the current state of the sidechain is updated at the appropriate leaf representing the sender (the account balance of the sender is deducted by the amount of transaction and the nonce is updated for the number of transactions completed by this sender). The leaves of this tree are formed by the rescue-hash of the concatenation of public key of the process holding the account, account balance and the "nonce", which represents the number of outgoing transactions done by the account holder;
-that the Schnorr signature checks out for the sender; and
-that the public key of the receiver is properly identified.

At the moment, each certificate has at most 14 STARK proofs.
The STARK proofs are non-interactive, the prover being the certificate producing entity (the set of validators), and the verifiers being the listening XSP nodes. However, any entity can verify this certificate, since the public inputs are the Merkle roots of the previous and current certificate.

## Future direction

The current STARK proofs require custom made AIR, one for each of different kind of statements. This restricts the kinds of proofs that can be proven by the given STARK.
The next step would be to remove this bottleneck by constructing a [virtual machine](https://github.com/GuildOfWeavers/distaff) such that execution of proof of arbitrary statements on this machine can be verified with a single STARK proof.

## Future direction

WIP
