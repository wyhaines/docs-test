---
sidebar_position: 2
---

# Conflicting Certificates

In the event that a subnet has been taken over by an adversary, honest subnet participants’ funds cannot be stolen since signatures cannot be forged by the adversary. On the other hand, if the adversary controls enough of the ICE-FROST participants, they can sign two certificates which conflict with each other. In this situation, equivocating allows the adversary to send the same funds twice, once in each of the certificates.

In Topos, outgoing certificates from a given subnet are totally ordered, states are sequential and build on top of one another.

Two certificates `Cert_k,a` and `Cert_k,b` are said to be conflicting if both are valid with respect to the previous certificate `Cert_k-1` but the operations associated with the two certificates do not have a legal sequential history. In other words, when taking the output state of `Cert_k,a` (resp. `Cert_k,b`) and passing it as input to `Cert_k,b`’s (resp. `Cert_k,a`) zkSTARK, the verification will fail.

Without a mechanism to prevent conflicting certificates, a compromised subnet would be able to double-spend and break consistency of the ecosystem.

In order to prevent such situations, the TCE implements a [reliable broadcast primitive](/learn/tce/wcprb) to ensure that two conflicting certificates cannot be delivered by the TCE.
