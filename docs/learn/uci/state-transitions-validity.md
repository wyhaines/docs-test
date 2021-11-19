---
sidebar_position: 2
---

# State Transitions Validity

Topos is an ecosystem of interoperable blockchains, each of them called a subnet. The *state* of a blockchain represents information, which includes account balances and public identities. Transactions between the accounts change the state of the subnet; that is, lead to a state transition.  In the case of Topos cross-subnet transactions, these transactions are aggregated in a certificate by a sending subnet (Initial) and then processed by the receiving subnet (Terminal). The internal state of subnets are private, but the cross-subnet transactions are public. For the integrity of the Topos ecosystem, it is important that the state transition computation at each subnet is done correctly (the state transition is *valid*), and is verifiable efficiently.

In general, in a trustless setup, where the verifier does not trust the certificate producer, verifying each individual transaction and its corresponding state transition would be computationally prohibitive for a large number of transactions, thus impeding scalability. This bottleneck can be removed if the verifier checks the integrity of the computation provided by the prover without checking each transaction. In addition, the zero-knowledge property of the produced certificate proofs allows an Initial to prove the validity of its current state without compromising private internal information, such as account addresses or account balances. Topos achieves both  and privacy by designing a  zk-STARK as discussed in more details below. 


# zk-STARK 

 zk-STARK is one of the cryptographic technologies that achieves both scalability and privacy, two of the most important properties for blockchains. It relies on Computational integrity(CI) proofs for  and zero knowledge for privacy. 

## Computational Integrity

Computational integrity (CI) means that the computations were done correctly. A proof of computational integrity is used to convince the verifier that state transitions of a subnet were computed correctly (with a very high probability) without the verifier having to perform these transitions themselves. This is extremely efficient if the number of state transitions is large, and the CI proof is both computable and verifiable efficiently, leading to high capacity. 

## Zero-knowledge Proofs

Zero-knowledge proofs allow one party (called the *prover*) to prove to other parties (called the *verifiers*) the validity of a certain statement, without revealing any extra information about the statement itself. For example, assume that party A would like to prove to party B that it has enough funds to complete a transaction, without actually showing how much funds it has. Such technology has received major attention in the field of blockchains for enhancing privacy.

## General zk-STARK Description

The term *zk-STARK* stands for "zero-knowledge Scalable Transparent ARgument of Knowledge". These arguments can be interactive or non-interactive, depending on whether the verifying party needs to interact with the prover during the generation of a proof. STARKs are specifically used to prove computational integrity, meaning that the verifying party can attest to the validity of the computation (i.e. the correctness of its output).  With the zero knowledge, it helps maintaining the opaqueness of the input, and thus providing privacy.

The "S" in *zk-STARK* stands for *scalable*: the computations do not become prohibitively slow and costly as the number of statements to be proven increases. This can be achieved, if  the computations and storage can be performed off-chain, and then the prover generates STARK proofs for computational integrity, and then puts it on chain for verification by the verifier. The time required for verification by the verifier is significantly small, which facilitates further the interoperability of the subnets. The prover runs in linear time (a statement twice as large will take about twice as much time to prove) and the verifier runs in logarithmic time, and in practice is extremely fast. This efficiency, along with parallelizability of prover computations, enables a large number of computations to occur.

The "T" stands for *transparent*: meaning that, unlike most of the previous proof systems, no trusted third party is required for setup. Transparency adds an extra layer of  security, and decentralization. The cryptographic primitive used in STARK are collision resisitant hash functions. Since hash functions are currently known to be quantum-resistant; that is, invulnerable to attacks by quantum computers, which paves a way to obtaining quantum-safe blockchains.

The "ARK" stands for Argument of Knowledge: meaning that, the piece of information given by (computationally bounded) prover to the verifier allows the latter to verify the validity of the statement efficiently. 

In practice, CI proofs used STARK  are first converted to sequences of machine states called execution traces. Any two consecutive states in the execution trace are related by a set of polynomials called constraints. This algebraic representation of CI proofs is called *algebraic intermediate representation* (AIR). The columns of the execution trace are interpolated and then combined to form a polynomial of low degree called the composition polynomial. The prover then commits to this composition polynomial in Merkle tree. This turns CI proof verification turns into an [Interactive Oracle Proofs of Proximity](https://eccc.weizmann.ac.il/report/2017/134/download/). This reduction of problem has the advantage that prover's proof length and the computation are linear in the size of input whereas verifier's time is logarithmic in the size of input.  This proof can be made non-interactive and zero-knowledge.

# STARKs in Topos XSP

Topos XSP uses zero-knowledge proofs where each subnet proves the validity of its state transition to the rest of the ecosystem, without revealing its internal state. More specifically, Topos XSP leverages zk-STARK proofs to achieve interoperability between its heterogeneous subnets, and more generally, to the other blockchains. Additionally, if the CI proof does not reveal any additional information other than the validity of the computation, this leads to maintaining zero-knowledge (zk) privacy.

The outline of  how STARK is used in Topos ecosystem is discussed below. On a subnet, all the outgoing cross-subnet transactions are batched into certificates, with a fixed number of transactions per certificate. These certificates provide the following necessary checks in a form of STARK proofs that, for each transaction (recall the current Topos STARK proofs operate on the account-based model):

- The amount to be send is positive.

- The amount to be send is smaller than the sender's balance.

- The transaction is signed by the sender.

- The receiving account is correctly identified.

- The state transition is done correctly (i.e., the account balances are accurately updated following the state update, along with the sender's nonce being incremented by one).



## Statements Verified by the Topos STARK Proof
A Topos XSP STARK proof checks the following:

- The sender has enough funds to do the transaction using range proofs.

- The Merkle tree, which represents the current state of the Initial is updated at the appropriate leaf, representing the sender's account balance, where the account balance of the sender is deducted by the amount of transaction and the nonce is updated for the number of transactions completed by this sender. The leaves of this tree are formed by the Rescue hash of the concatenation of the public key of the account, the account balance and the nonce, which represents the number of outgoing transactions done by the account holder.

- The Schnorr signature checks out for the sender.

- The public key of the receiver is properly identified.

At the moment, each certificate has at most 14 STARK proofs. The prover is the certificate producing entity, and the verifiers are the TCE nodes and the Terminals. However, note that any entity can verify this certificate, since the public inputs are the Merkle roots of the previous and current certificates.



## Future Work and Next Steps
Current STARK proofs require custom-made AIRs. This customization restricts the kinds of proofs that can be proven by the given STARK. The next step would be to remove this bottleneck by constructing a virtual machine such that execution of proof of arbitrary statements on this machine can be verified using a single STARK proof.
