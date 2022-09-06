---
sidebar_position: 1
---

# Overview

**Subnets** are independent networks that:

- Devise their own consensus rules;
- Control their own asset;
- Safely exchange transactions with each other.

Subnets are by design interoperable and, as such, can exchange cross-subnet messages without the need to trust each other or any middlemen for guaranteeing intrinsic validity of messages.

## Subnet Framework

The first subnet client released to the community will be based on [Substrate](https://substrate.dev) ([Substrate DevKit](/build/devkits/substrate)).

As any Substrate native blockchain, subnets build with the Substrate DevKit can implement their own consensus protocol and state transition function by customizing their own set of runtime FRAME pallets. One significant extension of Substrate is the integration of the [Topos zkVM](/learn/zkvm/overview) as the core smart contract execution environment for subnets in the Topos ecosystem.

Using future DevKits, subnets from any platforms will be able to exchange cross-subnet transactions in the Topos ecosystem.

:::tip Info
While the Substrate DevKit is our priority for now, development of platform-specific DevKits by the community is welcome!
:::
