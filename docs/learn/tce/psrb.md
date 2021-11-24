---
sidebar_position: 2
---

# Probabilistic Secure Reliable Broadcast

The main responsibility of the TCE network is to execute a broadcast primitive named **Probabilistic Secure Reliable Broadcast** (PSRB) that safely propagates certificates across the XSP ecosystem.

The protocol satisfies the following key **properties**:

#### Integrity

For every signed message received, any honest TCE node _delivers_ it at most once and, if the signer is honest, only if the signer _broadcast_ it.

#### Validity

For every (sender, receiver) tuple of honest TCE nodes, if the sender _broadcast_ a message, then the receiver _delivers_ it.

#### Agreement

For every couple of honest TCE nodes, if one _delivers_ a message, then the other one also _delivers_ it.

#### Source ordering

For every couple of honest TCE nodes which _deliver_ two messages, both nodes _deliver_ them in the same order.

## Setup

To correctly execute the PSRB protocol, TCE nodes locally hold the following **variables**:

#### $history (subnet)$

The local set of **incoming and outgoing** certificates involving the corresponding _subnet_.

#### $digest (subnet)$

The local set of **incoming** certificates involving the corresponding _subnet_ **since its last outgoing certificate**.

#### $mempool$

The local set of certificates pending for acceptation (not yet accepted nor included).

:::tip
A certificate is **incoming** if it contains a cross-subnet transaction addressed to the corresponding subnet, and **outgoing** if produced by the corresponding subnet.
:::

## Sampling

A new TCE node, once it has joined the TCE network, has successfully built three samples of peers:

- An _Echo_ sample and its associated threshold $E$
- A _Ready_ sample and its associated threshold $R$
- A _Delivery_ sample and its associated threshold $D$

Starting from this basis, a TCE node node starts exchanging sample-specific subcription messages with its _Echo_ and _Ready_ peers.

Upon receiving similar messages from other nodes, a TCE node adds the corresponding message originators in its samples in the following manner:

- Originators of _Echo_ subscription messages are added to a **new** _Echo\*_ sample
- Originators of _Ready_ subscription messages are added to a **new** _Ready\*_ sample

A TCE node interacts with its samples as follows:

- It **listens for messages** coming from peers in _Echo_, _Ready_, and _Delivery_
- It **sends messages** to peers in _Echo\*_ and _Ready\*_

:::tip
In the TCE, the per node communication is **logarithmic** in the size of the system, this allows the TCE to seamlessly scalable to billions of processes.
:::

## Protocol

To submit a certificate, a subnet $subnet_j$ sends a (certificate, $digest(subnet_j)$) message to its connected TCE nodes which _gossip_ it across the whole TCE network if:

- The certificate is valid (TODO: add a link to the right section).
- Any preceding certificate emitted by $subnet_j$ have been validated.
- The certificates from $digest(subnet_j)$ have all been validated and exist in the related $history(subnet)$.
