---
sidebar_position: 2
---

# zk-STARK

## Zero-knowledge Proofs

Zero-knowledge protocols allow one party (called the "prover") to prove to other parties (called "verifiers") the validity of a certain statement without revealing any extra information about the statement itself. For example, party A would like to prove to party B that it has enough tokens to complete a transaction, without showing how many tokens it has. Such technology has received major attention in the field of blockchain for enhancing privacy, as this is a fundamental property of all multi-chain networks open to both public and private subnets.
Topos (Cross Chain Protocol) XCP leverages zero-knowledge proofs when each subnet proves the validity of its state transitions to the rest of the ecosystem. More specifically, Topos XCP leverages zk-STARK proof to achieve interoperability between its subnets of the ecosystem, and more generally, to the other blockchains.

## zk-STARKs

The term "zk-STARK" stands for "zero-knowledge Scalable Transparent ARgument of Knowledge". These arguments can be non-interactive or interactive depending on whether the verifying party needs to interact with the prover. zk-STARKs are specifically used to prove computation integrity, meaning that the verifying party can attest to the validity of the computation (i.e. the correctness of its output), maintaining the opaqueness of the input, and thus providing a zero knowledge privacy.

The "S" in "zk-STARK" stands for scalable: i.e. the computations do not become prohibitively slow and costly as the length of the blockchain increases. For example, the computations and storage can be done off-chain, and then prover generate STARK proofs for computational integrity and then be placed on chain for verification by verifier. The time required by verifier is then really small, this facilitates the interoperability of the subnets further. This efficiency, along with parallelizability, enables a large number of computations to occur.

The "T" stands for transparent: meaning that, unlike most of the previous proof systems, no trusted third party is required.  Transparency adds an extra layer of privacy and security.  Another added layer of  security provided is  use of hash functions in computations involved in zk-STARKs. These  hash functions are  currently known to be quantum resistant -- that is, invulnerable to attack by quantum computers.

## How does STARK works in XCP?
