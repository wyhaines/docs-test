---
sidebar_position: 4
---

# Sybil Control

The Topos Reliable Broadcast protocol of the TCE must tolerate up to a fraction `f` of Byzantine processes in order to ensure its properties of validity and agreement. Such requirement is simple to achieve in a permissioned setting as malicious participants can be excluded from the system, but this is a notoriously hard task in open systems with free membership like the TCE. Like any permissionless system, the TCE is vulnerable to adversarial behaviors consisting in creating fake identities, i.e., Sybil attacks.

There are well-known protocols providing safety in a permissionless setting and effectively preventing Sybil attacks. Among such protocols are Proof-of-Work and Proof-of-Stake which, for an adversary to create new blocks, enforce a large computational cost or the possession of a large enough stake relative to the total supply. However such protocols are undesireable in the context of the TCE. The TCE is designed for maximum efficiency and, as such, does not revolve around burning time and energy on solving cryptographic puzzles.

Topos is developing a new class of **Sybil control mechanism** which does not rely on resource consumption like computational power or stake. Topos's Sybil control mechanism will allow to preserve decentralization.

:::info
The TCE's Sybil control mechanism is currently under heavy research in collaboration with research institute the [CEA](https://www.cea.fr/english/Pages/Welcome.aspx).
:::
