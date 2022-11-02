---
sidebar_position: 1
---

# Overview

Core to the Topos ecosystem, the **Transmission Control Engine** (TCE) serves as the foundation for consistent cross-subnet communication. Supported by an unlimitedly scalable network of dedicated nodes that run a fully asynchronous broadcast protocol, the TCE innovates by reaching agreement on certificates without relying on consensus: the TCE is **consensusless**.

:::info

- The TCE is **not a blockchain**!
- Certificates are **not totally ordered**!

:::

## Causal ordering

To ensure a consistent global state with no conflict between certificates, Topos does not involve consensus at the ecosystem level. Consensus enforces total ordering of messages, but **causal ordering** is sufficient for Topos's goals, i.e., certificates from the same subnet do not commute, while two independent certificates from two different subnets do. Causal ordering makes sure that the protocol delivers certificates such that all cause-effect relations are respected.

Relying on causal—hence partial—ordering rather than total ordering as enforced by consensus algorithms allows for high parallelization enabling massive throughput.

## Unlimited Scalability

The [Weak Causal Probabilistic Reliable Broadcast](/learn/tce/wcprb) (WCPRB), the broadcast primitive powering the TCE, enforces consistent delivery of certificates **without the need for a classical BFT protocol**. This makes the TCE network **much more scalable** than common consensus-based blockchains that are inherently limited by a quadratic message complexity and as such cannot expand by more than a few hundreds or thousands of consensus participants. Indeed, the WCPRB's per-node message complexity is logarithmic in the size of the network (the total message complexity is quasilinear), making the TCE network extremely scalable.

## Asynchrony

Topos's WCPRB is fully **asynchronous**, and as such, is not vulnerable to adversaries arbitrarily delaying messages in order to slow down correct participants and thus break the correctness of the protocol. This broadcast primitive allows agreement to be reached without any time bound on message transmission, and does not halt to wait for synchronization between participants.

:::tip
**Causal ordering**, **unlimited scalability**, and **asynchrony** are key differentiators which, all combined, result in a **simpler**, **more efficient**, and **more robust** protocol than total order broadcast- and consensus-based solutions.
:::
