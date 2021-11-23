---
sidebar_position: 1
---

# Getting Started

Topos XSP is an open protocol of **interoperable** [subnets](/learn/ledger) that makes no compromises on their **privacy**. Typical trust assumptions are replaced by a zero-knowledge proof construction that allows for frictionless cross-subnet communication.

Topos XSP remains agnostic as to the internal structure of a subnet and global consistency over messages exchanged between heterogeneous **private** and **public** subnets is not ensured by consensus but by an open [probabilistic secure reliable broadcast](/learn/tce/psrb) primitive. This is in clear contrast with other multi-chain projects which commonly rely on a central consensus layer to enforce a consistent state.

Subnets in the Topos ecosystem prove the validity of their state transitions by computing [zkSTARKs](/learn/uci/state-transitions-validity) which are included in [certificates](/learn/uci/getting-started#certificate). On one hand zkSTARKs are publicly verifiable in and out of the protocol, and on the other hand certificates are signed by known identities on each subnet via our in-house made [threshold signature](/learn/uci/authentication#threshold-signatures-ice-frost) scheme.
