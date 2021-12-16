---
sidebar_position: 3
---

# Cross-Subnet Transactions

## Definition

**Cross-subnet** transactions are transfers of assets or arbitrary data that subnets exchange with each other.

:::info
Cross-subnet transactions are **under development**. More information will be available soon!
:::

## Composition

A cross-subnet transaction is defined as:

- `subnet ID`: A value uniquely identifying the receiving subnet of the transaction;
- `nonce`: A scalar value equal to the number of transactions sent by the sending account;
- `to`: The address of the receiving account;
- `value`: A scalar value equal to the amount of the transaction;
- `data`: Data related to transactions that are not asset transfers;
- `sig`: Signature of the transaction.
