---
sidebar_position: 3
---

# State Transitions Validity

Topos is an ecosystem of interoperable blockchains, each of them called a subnet. The _state_ of a blockchain represents information, which includes account balances and public identities. Transactions between the accounts, within a subnet or across multiple subnets, change the state of the subnet(s); that is, lead to a state transition. In the case of Topos cross-subnet transactions, these transactions are aggregated in a certificate by a sending subnet and then processed by the receiving subnets. The internal state of subnets is private, but the cross-subnet transactions are public. For the integrity of the Topos ecosystem, it is important that the state transition computation at each subnet is done correctly (the state transition is _valid_), and is verifiable efficiently.

In a trustless setup, where the verifier does not trust the certificate producer, verifying each individual transaction and its corresponding state transition would be computationally prohibitive for a large number of transactions, thus impeding scalability. This bottleneck can be removed if the verifier checks the integrity of the computation provided by the prover without checking each transaction. In addition, the zero-knowledge property of the produced certificate proofs allows a sending subnet to prove the validity of its current state without compromising private internal information, such as account addresses or account balances. Topos achieves both scalability and privacy by adapting and designing a zk-STARK as discussed in more details below.

## zk-STARK

zk-STARK is one of the cryptographic technologies that achieves both scalability and privacy, two of the most important properties for blockchains. It relies on Computational integrity (CI) proofs for scalability and zero knowledge for privacy.

### Computational Integrity

Computational integrity (CI) means that the computations were done correctly. A proof of computational integrity is used to convince the verifier that the state transitions of a subnet were computed correctly (with a very high probability) without the verifier having to perform these transitions themselves. This is extremely efficient if the number of state transitions is large, and the CI proof is both computable and verifiable efficiently, leading to high capacity.

### Zero-knowledge Proofs

Zero-knowledge proofs allow one party (called the _prover_) to prove to other parties (called the _verifiers_) the validity of a certain statement, without revealing any extra information about the statement itself. For example, assume that party A would like to prove to party B that it has enough funds to complete a transaction, without actually showing how much funds it has. Such technology has received major attention in the field of blockchains for enhancing privacy.

### General zk-STARK Description

The term _zk-STARK_ stands for "zero-knowledge Scalable Transparent ARgument of Knowledge". These arguments can be interactive or non-interactive, depending on whether the verifying party needs to interact with the prover during the generation of a proof. STARKs are specifically used to prove computational integrity, meaning that the verifying party can attest to the validity of the computation (i.e. the correctness of its output). With the zero-knowledge, it helps to maintain the opaqueness of the input, and thus providing privacy.

The "S" in _zk-STARK_ stands for _scalable_: the computations do not become prohibitively slow and costly as the number of statements to be proven increases. This can be achieved, if the computations and storage can be performed off-chain, and then the prover generates STARK proofs for computational integrity, and then puts it on chain for verification by the verifier. The time required for verification by the verifier is significantly small, which facilitates further the interoperability of the subnets. The prover runs in quasi-linear time (a statement twice as large will take almost twice as much time to prove) and the verifier runs in logarithmic time and in practice is extremely fast. This , along with easy parallelizability of prover computations, enables efficient computation of large statements.

The "T" stands for _transparent_: unlike most of the previous proof systems, no trusted third party is required for the setup. Transparency adds an extra layer of security, and decentralization. The cryptographic primitive used in zk-STARK proof is collision resistant hash functions. These hash functions are currently known to be quantum-resistant; that is, invulnerable to attacks by quantum computers, which paves a way to obtaining quantum-safe blockchains.

The "ARK" stands for _ARgument of Knowledge_: the piece of information given by a (computationally bounded) prover to a verifier allows the latter to verify the validity of the statement efficiently.

In practice, CI proofs using STARK are first converted to sequences of machine states called execution traces. Any two consecutive states in the execution trace are related by a set of polynomials called constraints. This algebraic representation of CI proofs is called _algebraic intermediate representation_ (AIR). The columns of the execution trace are interpolated and then combined to form a polynomial of low degree called the composition polynomial. The prover then commits to this composition polynomial in a Merkle tree. The CI proof verification by verifier then turns into an [Interactive Oracle Proofs of Proximity](https://eccc.weizmann.ac.il/report/2017/134/download/). This reduction of problem has the advantage that prover's proof length and the computation is quasi-linear in the size of input whereas verifier's time is logarithmic in the size of input. This proof can be made non-interactive in the Random Oracle Model.

## STARKs in Topos XSP

Topos XSP uses zk-STARK where each subnet proves the validity of its state transition to the rest of the ecosystem, without revealing its internal state. More specifically, Topos XSP leverages zk-STARK proofs to achieve interoperability between its heterogeneous subnets, and more generally, to the other blockchains.The outline of how STARK is used in the Topos ecosystem is discussed below.

On the sending subnet, all the outgoing cross-subnet transactions are batched into certificates, with a fixed number of transactions per certificate. These certificates provide the following necessary checks in a form of STARK proofs that, for each transaction (recall the current Topos STARK proofs operate on the account-based model):

- The amount to be sent is positive.

- The amount to be sent is smaller than the sender's balance.

- The transaction is signed by the sender.

- The receiving account is correctly identified.

- The state transition is done correctly (i.e., the account balances are accurately updated following the state update, along with the sender's nonce being incremented by one).

On a receiving subnet of the certificate, STARK proof checks that the receiving account(s) are accurately updated.

For an internal transaction, STARK proofs additionally check that the receiver's account is accurately updated on the subnet.

### Statements Verified by the Topos STARK Proof

A Topos XSP STARK proof checks the following:

- The sender has enough funds to do the transaction using range proofs.

- The Merkle tree, which represents the current state of the sending subnet is updated at the appropriate leaf, representing the sender's account balance, where the account balance of the sender is deducted by the amount of transaction and the nonce is updated for the number of transactions completed by this sender. The leaves of this tree are formed by the Rescue hash of the concatenation of the public key of the account, the account balance and the nonce, which represents the number of outgoing transactions done by the account holder.

- The Schnorr signature of the sender is valid.

- The public key of the receiver is properly identified.

At the moment, each certificate has at most 14 STARK proofs. The prover is the certificate producing entity, and the verifiers are the TCE nodes and the receiving subnets. However, note that any entity can verify this certificate, since the public inputs are the Merkle roots of the previous and current certificates.

For an internal transaction or at a receiving subnet of the certificate, the STARK proof additionally checks that the Merkle leaf of receiver(s), and consequently, the Merkle tree of the subnet is correctly updated.
