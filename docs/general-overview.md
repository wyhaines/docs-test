---
sidebar_position: 2
---

# General overview

Topos is a **generalized interoperability protocol** for transmitting messages across sovereign [subnets](/learn/subnets/overview) (blockchains) without making any compromises on their **privacy**. Typical trust assumptions in third parties and sharing of internal state are replaced by cryptographic proofs that allow for frictionless cross-subnet communication. With a fast and unlimitedly scalable transmission layer, the protocol is built for efficiency and resilience, and aims at bridging all blockchains and legacy systems in a seamless way.

Joining the Topos ecosystem as a new subnet boils down to running one of the compatible [DevKits](#devkits) implementing the **Topos zkVM**, the **Universal Certification Interface** and interacting with the **Transmission Control Engine** to start exchanging cross-subnet messages with the rest of the protocol participants.

## Topos zkVM

The [Topos zkVM](/learn/zkvm/overview) is a zero-knowledge virtual machine playing a central role in the Topos ecosystem. A core component of all subnets, the Topos zkVM offers a programming environment for smart contracts whose executions are provable no matter which program is executed. Developers can leverage a Turing-complete programming language to write any type of smart contract and deploy them on any subnets.

## Universal Certification Interface

The protocol abstracts the internal structure of a subnet by means of the [Universal Certification Interface](/learn/uci/certificate), a shared interface implemented by all subnets to communicate in a standardized manner.

Specifications laid down by the UCI detail the requirements for subnets to exchange messages with each other: state transitions validity must be proven, and messages must be authenticated.

A [cross-subnet message](/learn/subnets/cross-subnet-messages)—asset transfer or arbitrary contract call—exchanged between subnets is delivered as part of a [certificate](/learn/uci/certificate), a data structure that complies with the UCI, i.e., is correctly constructed, is signed with a valid signature, and contains a valid state transition.

## Transmission Control Engine

Global consistency of messages exchanged between various **public** and **private** subnets is not ensured by consensus but by a **reliable broadcast primitive** executed by the [Transmission Control Engine](/learn/tce/overview). This is in clear contrast with other multi-chain projects which typically rely on a consensus layer to enforce total ordering of cross-chain messages.

The Transmission Control Engine is supported by a network of auxiliary nodes (TCE nodes) that receive certificates submitted by subnets to safely propagate and deliver them to all relevant subnets.

## DevKits

Built as extensions of blockchain and legacy system frameworks, [DevKits](/build/overview#devkits) allow new systems to be built from scratch with the desired platform (e.g., Substrate). With the specifications defined in the UCI, developers can implement them as new DevKits or use existing DevKits to start building subnets and interact with the Topos ecosystem right away.

:::info
DevKits integrate **TCE clients** that allow subnet participants to interact with the TCE network.
:::
