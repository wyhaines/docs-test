---
sidebar_position: 2
---

# General overview

Topos is an protocol of **interoperable** [subnets](/learn/subnets/overview) (blockchains) that makes no compromises on their **privacy**. Typical trust assumptions and sharing of internal state are replaced by cryptographic proofs that allow for frictionless cross-subnet communication. With a fast and unlimitedly scalable transmission layer, the protocol is built for efficiency and resilience, and aims at bridging all blockchains and legacy systems in a seamless way.

Joining the Topos ecosystem as a new subnet boils down to running one of the compatible [DevKits](#devkits) implementing the **Universal Certification Interface** and interacting with the **Transmission Control Engine** to start exchanging cross-subnet messages with the rest of the protocol participants.

## Universal Certification Interface

The protocol abstracts the internal structure of a subnet by means of the [Universal Certification Interface](/learn/uci/overview), a shared interface implemented by all subnets to communicate in a standardized manner.

Specifications laid down by the UCI detail the requirements for subnets to exchange messages with each other: state transitions validity must be proven, and messages must be authenticated.

A message exchanged between subnets takes the form of a [certificate](/learn/uci/overview#certificate), a data structure that complies with the UCI, i.e., is correctly constructed, is signed with a valid signature, and contains a valid state transition.

## Transmission Control Engine

Global consistency of messages exchanged between various **public** and **private** subnets is not ensured by consensus but by a **reliable broadcast primitive** executed by the [Transmission Control Engine](/learn/tce/overview). This is in clear contrast with other multi-chain projects which typically rely on a consensus layer to enforce total ordering of cross-chain messages.

The Transmission Control Engine is supported by a network of auxiliary nodes (TCE nodes) that receive certificates submitted by subnets to safely propagate and deliver them to all relevant subnets.

## DevKits

Built as extensions of blockchain and legacy system frameworks, [DevKits](/build/overview#devkits) allow new systems to be built from scratch with the desired platform (e.g. Substrate). With the specifications defined in the UCI, developers can implement them as new DevKits or use existing DevKits to start building subnets and interact with the Topos ecosystem right away.

:::info
DevKits integrate **TCE clients** that allow subnets to interact with the TCE network.
:::
