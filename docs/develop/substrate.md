---
sidebar_position: 2
---

# Substrate

Topos software is based on [Substrate](https://substrate.io/), a blockchain framework developed by [Parity](https://www.parity.io/) and written in rust.

Originally the base project of [Polkadot](https://polkadot.network/), [Substrate](https://substrate.io/) packages a fully functional blockchain backbone and exposes a framework-in-the-framework ([FRAME](#frame)) tailored for custom _on-chain_ business logic—the **runtime**.

:::info

Refer to the [**Substrate Developer Hub**](https://docs.substrate.io/) for a complete overview of Substrate.

:::

## FRAME

Developing a [Substrate](https://substrate.io/) runtime with FRAME comes down to writing domain-specific modules called **Pallets**. FRAME pallets implement a common interface that eases runtime development by clearly encapsulating the declaration of runtime specifc objects and methods (e.g. storage element, storage mutation functions).

A large part of the blockchain backbone exposed by Substrate is itself developed in FRAME both as system/meta pallets that build FRAME itself and as pallets that define core components of a blockchain (e.g. block production mechanism).

:::note Example: block production mechanism

With regards to the block production mechanism of a Substrate blockchain—i.e. selecting the leaders who author blocks—FRAME exposes multiple solutions: the _Aura_ pallet introduces the Aura block production mechanism where known authorities take turns producting blocks, the _Babe_ pallet introduces the Babe block production mechanism where publicly verifiable randomness is used along with stake distribution to randomly designate block authors.

:::

The composition of FRAME prebuilt pallets and ones defining custom business logic is what makes a Substrate blockchain specific.

:::info

More details about FRAME [**here**](https://docs.substrate.io/v3/runtime/frame/).

:::
