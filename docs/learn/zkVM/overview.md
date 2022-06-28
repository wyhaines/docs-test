---
sidebar_position: 1
---

# Overview

Subnets implement the **Topos zkVM**, a zero-knowledge virtual machine that exposes a Turing complete programming language which allows instructions to be provable with zero-knowledge proofs.

## Smart Contracts

dApp developers can write any type of application and deploy them on any subnets in the form of smart contracts whose executions are provable. Developers can as such leverage the composability offered by the Topos protocol by composing their applications with other zkVM-compatible applications deployed on any subnets in the Topos ecosystem. 

## Instructions

The Topos zkVM has been conceived to offer a set of instructions efficiently verifiable with our zkSTARK proof system. This instruction set, while small and simple, remains expressive enough for developers to easily write any kind of application on subnets. We also include into the default instruction set additional operation-specific instructions (e.g., range check, curve point addition, hash evaluation, etc.), to allow programmers to execute common operations directly without the burden of writing them with the original instruction set. The Topos zkVM execution remains extremely fast to verify—maintaining the overall scalability of the system—even when extending the original instruction set with custom complex ones.

