---
sidebar_position: 2
---

# Probabilistic Secure Reliable Broadcast

## System Model

TODO: to be removed? (too technical for topos-docs)

## Setup

TODO: to be removed? (too technical for topos-docs)

## Sampling

A new TCE node, once it has joined the TCE network, has successfully built three samples of peers:

- An _Echo_ sample and its associated threshold $E$
- A _Ready_ sample and its associated threshold $R$
- A _Delivery_ sample and its associated threshold $D$

Starting from this basis, a TCE node node starts exchanging sample-specific subcription messages with its _Echo_ and _Ready_ peers.

Upon receiving such messages from other nodes, a TCE node adds them in its samples in the following manner:

- Originators of _Echo_ subscription messages are added to a new _Echo\*_ sample
- Originators of _Ready_ subscription messages are added to a new _Ready\*_ sample

A TCE node interacts with its samples as follows:

- It **listens for messages** coming from peers in _Echo_, _Ready_, and _Delivery_
- It **sends messages** to peers in _Echo\*_ and _Ready\*_

:::tip
TCE nodes have a **partial view** of the TCE network, i.e., they only know their sampled peers.
:::

## Protocol

## Properties

Four main properties are inherent from Topos XCP Probabilistic
