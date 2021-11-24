---
sidebar_position: 1
---

# Getting Started

Core to the Topos XSP ecosystem, the **Transmission Control Engine** (TCE) serves as the foundation for safe cross-subnet communication.

## Partial ordering

To ensure a consistent global state, Topos XSP relies on a **causal ordering** of [certificates](#): while dependencies in certificates need to be consolidated in the final ordering, two independent certificates from two different subnets can commute, i.e., they can be ordered in one way or the other.

Relying on partial ordering rather than total ordering as enforced by common consensus mechanisms allows Topos XSP to be built on top of much weaker primitives and therefore be more secure.

## Unbound Scalability

The [Probabilistic Secure Reliable Broadcast](/learn/tce/psrb) (PSRB), the broadcast primitive at the heart of TCE, enforces a consistent ordering of certificates **without the need for a BFT protocol**. This makes the TCE network **much more scalable** than common consensus-based networks that are inherently limited by a quadratic message complexity.

## Asynchrony

Topos's PSRB is fully **asynchronous**: TCE nodes need _not_ wait for other nodes to proceed at any stage of the algorithm. The innovative broadcast construction allows agreement to be reached without any time bound on message transmission and doesn't halt to wait for synchronization between participants.

:::tip
**Partial ordering**, **unbound scalability**, and **asynchrony** are key differentiators which all combined result in a **simpler**, **more efficient**, and **more robust** cross-subnet transport mechanism than consensus mechanisms.
:::
