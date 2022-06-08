---
sidebar_position: 1
slug: /
---

# Introduction

Welcome to **Topos Docs**, the official documentation to help you get familiar with the **Topos protocol** and join the ecosystem!

:::info Disclaimer
Topos Docs is **WIP**! The following content is subject to change and will be extended in the future.
:::

## Why Topos?

Today's Web 2.0 remains a network of highly centralized computers and services managed by a handful of big tech companies. Concerns from users about how their data is handled and to which extent it is controlled and owned by such companies are getting stronger every day.

Blockchain has paved the way for Web 3.0, a new era of distributed and decentralized web services that give back the control to application users. Yet, more than a decade later, the promised revolution hasn't landed. Facing **scalability**, **interoperability** and **privacy** issues, blockchain technology hasn't been able to reach full adoption.

### Scalability

Blockchain scalability is closely pegged to two of its upmost metrics: its **latency** (_speed_) and its **throughput** (_capacity_). Latency represents the time a transaction takes to be inserted in a block and for the latter to be accepted by the network, while throughput relates to the number of transactions the network is capable of adding on chain per unit of time. For uncertain reasons, these concepts are often made misleading and thus prevent the community from gauging the performance of a blockchain system.

**Transaction finality**, probabilistic or deterministic, **has to be considered** when evaluating blockchain performance. In this context, latency is defined as the time it takes for a transaction to be finalized, while throughput is defined as the number of finalized transactions per unit of time.

A latter phase in blockchain technology history has seen the generalization of deterministic finality, commonly achieved by means of classic BFT algorithms. Such algorithms have shown their limitations in terms of scalability for they come with a quadratic message complexity, and as such lead to higher settlement latency as the number of validators increases.

:::info Multi-chain projects
Multi-chain projects based on sharding assign validators to shards in order to verify their state transitions. A bounded number of validators greatly impacts the scalability of such system as it limits the theoretical number of available shards.
:::

### Interoperability

Interoperability lies in the capacity of multiple systems to interface with each other. A truly **open**, i.e., permissionless, interoperability protocol is key to the adoption of blockchain technology: research<sup>[1](#ref-1)</sup> has shown that the vast majority of organizations switching to blockchain favor creating their own network to remain in control of their data. Interoperability paves the way for a universal bridge between any type of public and private blockchains.

### Privacy

Historically, privacy has remained a rarity in the blockchain scene, transactions being by design available in clear to all network participants. Although privacy protocols have emerged in the recent years, interoperability offered by multi-chain systems has typically been requiring either trust or sharing internal state. Privacy must be generalized in cross-chain communication so that businesses can freely collaborate the way they are collaborating today via classic APIs.

---

**As a permissionless, unlimitedly scalable, and privacy-enhancing interoperability protocol, Topos aims at giving back the control and freedom to service users and leading the way for a true open and decentralized Internet.**

## How does Topos work?

Continue with the [General overview](/general-overview) section to learn more about Topos.

---

<sup>[1] <a id="ref-1" target="blank" href="https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/blockchain/ey-public-blockchain-opportunity-snapshot.pdf">Seize The Day: Public Blockchain Is On The Horizon</a></sup>
