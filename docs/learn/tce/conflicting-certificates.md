---
sidebar_position: 2
---

# Conflicting Certificates

Like any distributed systems/blockchain, the TCE is vulnerable to double-spending attacks.

In the event that a subnet has been taken over by an adversary, honest subnet participants’ funds cannot be stolen funds since signatures cannot be forged by the adversary. On the other hand, if the adversary controls enough of the ICE-FROST participants, it can sign two certificates which conflict with each other. Equivocating the adversary can then effectively send the same transaction twice, one in each of the certificates.

In Topos, certificates from a given subnet are totally ordered and states are sequential and build on top of one another, such that each zk-STARK proofs of certificates are linked, even across different certificates: for each zk-STARK proof, its input corresponds to the previous proof’s output

Two certificates `Cert_k,a` and `Cert_k,b` are said to be conflicting if both are valid with respect to `Cert_k-1` but the operations associated with the two certificates do not have a legal sequential history. In other words, when taking the output state of `Cert_k,a` (resp. `Cert_k,b`) and passing it as input to `Cert_k,b`’s (resp. `Cert_k,a`) zk-STARK, the verification will fail.

Without a mechanism to prevent conflicting certificates, a compromised subnet would be able to double-spend and break consistency of the ecosystem.

In order to prevent such situations, the TCE implements a [reliable broadcast primitive](/learn/tce/trb) to ensure that two conflicting certificates cannot be delivered by the TCE.
