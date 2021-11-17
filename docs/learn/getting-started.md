---
sidebar_position: 1
---

# Getting Started

Topos XSP is an open blockchain protocol that does not compromise in creating an ecosystem that permits full interoperability between participating **subnets**. Typical trust assumptions are replaced by zk-based cryptographic constructions that allow for friction-less cross-chain communication. Topos XSP does not require any specific blockchain architecture or framework from subnet developers and ensures global consistency between heterogeneous **private** and **public** blockchains via a core [probabilistic secure reliable broadcast](/learn/tce/psrb) mechanism, where existing multi-chain projects commonly rely on a central consensus layer that has authority over the rest of the network chains.

Subnets in the Topos ecosystem prove the validity of their state transitions by computing [zkSTARKs](/learn/zkSTARK) which are published in [Certificates](/learn/certificate). On one hand [zkSTARKs](/learn/zkSTARK) are publicly verifiable by participants in and out of the protocol, and on the other hand [Certificates](/learn/certificate) are signed by known identities on each blockchain via a [threshold signature](/learn/threshold-signature) scheme. **It's the combination of publicly verifiable zk proofs and robust distributed signatures that allow Topos XSP to rely on a consensus-less deterministic reliable broadcast of state transition certificates to ensure the global consistency of the ecosystem.**
