---
sidebar_position: 1
---

# Probabilistic Secure Reliable Broadcast

## Security Model

## Setup

## Sampling

## [OLD - TO BE REARRANGERED AND REWRITTEN]

## Causal Ordering

To ensure a consistent global state, Topos XCP relies on a causal ordering of Certificates: while dependencies in Certificates need be consolidated in the final ordering, two independent Certificates from two different blockchains can commute, i.e. they can be ordered in one way or the other.

Relying on causal ordering vs. total ordering as enforced by common consensus mechanisms allows Topos XCP to be built on top of much weaker primitives. This results in a simpler, more efficient, and more robust cross-chain transport mechanism.

## Double-Echo Broadcast

At the heart of Topos XCP Probabilistic Reliable Broadcast transport mechanism stands a **Double-Echo broadcast protocol**, a mechanism that relies on the construction of multiple role-specific samples of peers and on thresholds on the number of messages received by peers that take part in these samples.

### Peer Discovery

When joining the network for the first time, an XCP node queries oracles—e.g. DNS seeds—to receive a dynamic list of peers that are ready to accept incoming connections. Once connected, the new peers share their own peers expanding the network discovery of the new XCP node.

This peer discovery mechanism is very common in the blockchain field. Topos XCP differs in that peer discovery is used to construct role-specific **samples** of nodes that will each participate in their own way in setting up the broadcast protocol.

### Sampling

A correct Topos XCP node, once it has joined the Topos XCP network, has successfully built multiple samples of peers:

- A _Gossip_ sample
- An _Echo_ sample and its associated threshold $E$
- A _Ready_ sample and its associated threshold $R$
- A _Delivery_ sample and its associated threshold $D$

Starting from this basis, a correct Topos XCP node starts exchanging sample-specific subcription messages with its _Echo_ and _Ready_ sampled peers.

Upon receiving such messages from other nodes, a correct Topos XCP node adds them in its samples in a sample-specific manner:

- Originators of _Echo_ subscription messages are added to a new _Echo\*_ sample
- Originators of _Ready_ subscription messages are added to a new _Ready\*_ sample

A correct Topos XCP node interacts with its samples as follows:

- It **listens for messages** coming from peers in _Echo_, _Ready_, and _Delivery_
- It **sends messages** to peers in _Echo\*_ and _Ready\*_

:::tip

Topos XCP nodes have a **partial view** of the Topox XCP network that consists solely in their samples.

:::

## Properties

Four main properties are inherent from Topos XCP Probabilistic
