---
sidebar_position: 1
---

# Getting Started

Core to the Topos XSP ecosystem, the **Transmission Control Engine** (TCE) serves as the foundation for consistent cross-subnet communication. Supported by an unlimitedly scalable network of dedicated nodes that run a fully asynchronous broadcast protocol, the TCE innovates by its consensusless approach to reaching fastly and securely agreement on partially ordered sets of certificates.

:::info
The TCE is **not a blockchain**!
:::

## Partial ordering

To ensure a consistent global state with no conflict between certificates, Topos XSP does not involve consensus at the ecosystem level. Consensus enforces total ordering of messages, but **causal ordering** is sufficient for Topos's goals, i.e., certificates from the same subnet do not commute, while two independent certificates from two different subnets do. Causal ordering is needed to make sure that the protocol processes all dependencies of a specific certificate.

Relying on causal—hence partial—ordering rather than total ordering as enforced by common consensus mechanisms allows the TCE to be built on top of a much weaker primitive: a **reliable broadcast** protocol.

## Unbound Scalability

The [Probabilistic Secure Reliable Broadcast](/learn/tce/psrb) (PSRB), the broadcast primitive driving the TCE, enforces a consistent broadcast of certificates **without the need for a traditional BFT protocol** where known participants synchronously exchange messages to decide as a group on some data. This makes the TCE network **much more scalable** than common consensus-based networks that are inherently limited by a quadratic message complexity and as such cannot expand by more than a few hundreds of participants.

## Asynchrony

Topos's PSRB is fully **asynchronous**: TCE nodes need _not_ wait for other nodes to proceed at any stage of the algorithm. The innovative broadcast construction allows agreement to be reached without any time bound on message transmission and doesn't halt to wait for synchronization between participants.

:::tip
**Partial ordering**, **unbound scalability**, and **asynchrony** are key differentiators which all combined result in a **simpler**, **more efficient**, and **more robust** cross-subnet transport layer than total order broadcast- and consensus-based solutions.
:::
