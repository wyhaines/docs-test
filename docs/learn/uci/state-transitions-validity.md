---
sidebar_position: 4
---

# State Transitions Validity

Transactions between accounts of a subnet or across multiple subnets mutate and modify the internal states of the involved subnets. These actions are called **state transitions**.

In the Topos ecosystem, the state of subnets is not known to other subnets and, as such, the validity of state transitions cannot be trivially guaranteed. Subnets must rely on a computational integrity proving system whose verification is fast enough for the ecosystem to scale as the number of subnets increases, and to ensure global consistency across subnets without depending on known identities to assess validity of the so-called state transitions.

## zkSTARKs

For this purpose, the Topos protocol leverages [zero-knowledge STARKs](https://eprint.iacr.org/2018/046.pdf) by batching all subnet transactions in order to generate a proof attesting to the validity of these transactions. These generated proofs, as well as all cross-subnet transactions, are included into certificates to be propagated to the rest of the ecosystem. Upon reception, the fast verification of zkSTARK proofs included in certificates allows the ecosystem to verify a very large number of state transitions and hence scale exponentially.

zkSTARKs (in the sense of FRI-based zkSTARKs as the Topos protocol is relying on) are a relatively recent cryptographic technology to enforce computational integrity while preserving privacy, and which verification scales exponentially faster than the underlying computation size. In addition, the construction is specifically tailored for repeated executions of a given computation, making it perfectly suited for blockchain applications. The zero-knowledge property of the STARK proof is a fundamental property leveraged by Topos to maintain subnet privacy while enforcing correct state transitions.

The certificate STARKs can prove the correct execution of any arbitrary subnet state transition and can be verified by anyone. As such, subnets can define their own business logic, and thus developers are given the freedom to build any type of applications which can be composable with all existing applications in the ecosystem.

Subnet's certificate creators batch transactions together to output STARK proofs attesting to the validity of the state transitions.
