---
sidebar_position: 2
---

# zkSTARK (DEPRECATED)

## Zero-knowledge Proofs

Zero-knowledge protocols are such that allow one party to prove the validity of a given statement without revealing any information from it to another—verifying—party. Such technology has received major attraction in the field of blockchain for it is privacy enhancing, a property that is central to multi-chain networks open to both public and private ledgers.

Topos XCP leverages zero-knowledge proofs in how a blockchain proves the validity of its state transitions to the rest of the ecosystem. More specifically, Topos XCP leverages zkSTARKs.

## zkSTARKs

zkSTARK stands for zero-knowledge scalable transparent argument of knowledge. Such proofs can be **non-interactive**, i.e. the verifying party need not interact with the prover to verify the proof. zkSNARKs are specifically used to prove **computation integrity**, meaning given a known computation specified by an alegbraic intermediate representation (AIR) or by a permuted algebraic intermediate representation (PAIR), the verifying party can attest the validity of the computation. The "zk" in zkSTARK adds the property that some inputs to that computation remain opaque to the verifier.
