---
sidebar_position: 1
---

# Getting Started

Topos XSP is an open protocol of **interoperable** [subnets](/learn/subnets) that makes no compromises on their **privacy**. Typical trust assumptions are replaced by a zero-knowledge proof construction that allows for frictionless cross-subnet communication.

The protocol remains agnostic as to the internal structure of a subnet, by means of the [Unified Certification Interface](/learn/uci/getting-started), and global consistency over messages exchanged between heterogeneous **private** and **public** subnets is not ensured by consensus but by an open broadcast primitive executed by the [Transmission Control Engine](/learn/tce/getting-started). This is in clear contrast with other multi-chain projects which commonly rely on a central consensus layer to enforce total ordering of messages.

Subnets in the Topos XSP ecosystem communicate with each other by submitting [certificates](/learn/uci/getting-started#certificate) that comply with the UCI, i.e., contain cross-subnet transactions which are supported by state transition validity proofs.
