---
sidebar_position: 1
---

# Substrate DevKit

Topos's first DevKit is built on top of [Substrate](https://substrate.io/), a blockchain framework developed by [Parity](https://www.parity.io/).

## Substrate

Originally part of [Polkadot](https://polkadot.network/), Substrate packages a fully functional blockchain backbone and exposes a framework-in-the-framework ([FRAME](#frame)) tailored for custom _on-chain_ business logic—the **runtime**.

:::tip
Refer to the [**Substrate Developer Hub**](https://docs.substrate.io/) for a complete overview of Substrate.
:::

### FRAME

Developing a Substrate runtime with [FRAME](https://docs.substrate.io/v3/runtime/frame/) comes down to writing domain-specific modules called **Pallets**. FRAME pallets implement a common interface that eases runtime development by clearly encapsulating the declaration of runtime specifc objects and methods (e.g. storage element, storage mutation functions).

A large part of the blockchain backbone exposed by Substrate is itself developed in FRAME both as system/meta pallets that build FRAME itself and as pallets that define core components of a blockchain (e.g. block production mechanism).

## The DevKit

:::info
The Substrate Devkit is **still under development**. More information will be shared soon!
:::
