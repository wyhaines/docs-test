---
sidebar_position: 2
---

# High level overview

Topos XSP is an open protocol of **interoperable** [subnets](/subnets) that makes no compromises on their **privacy**. Typical trust assumptions are replaced by a zero-knowledge proof construction that allows for frictionless cross-subnet communication.

The protocol remains agnostic as to the internal structure of a subnet, by means of the [Unified Certification Interface](/learn/uci/overview), and global consistency over messages exchanged between heterogeneous **private** and **public** subnets is not ensured by consensus but by an open broadcast primitive executed by the [Transmission Control Engine](/learn/tce/overview). This is in clear contrast with other multi-chain projects which commonly rely on a central consensus layer to enforce total ordering of cross-chain messages.

Subnets in the Topos XSP ecosystem communicate with each other by exchanging [certificates](/learn/uci/overview#certificate) that comply with the UCI, i.e., they are correctly constructed, are signed with a valid signature and contain a valid state transition.
