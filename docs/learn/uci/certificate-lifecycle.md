---
sidebar_position: 5
---

# Certificate Lifecycle

## Production

Topos does not enforce any rule as to how often and when subnets should submit their certificates, and as such leaves the definition of the triggers responsible for certificate production at the discretion of subnet developers.

Producing a certificate comes down to creating a data structure that complies with the UCI, e.g., authenticates the submitting subnet and proves the validity of its included state transitions.

## Propagation

When a subnet wants to submit a new certificate, it needs to propagate it to the rest of the Topos ecosystem. Certificate delivery is handled by the [TCE](/learn/tce/overview) network built on top of the [Topos Reliable Broadcast](/learn/tce/trb) primitive.

Subnets are all connected to _random_ sets of TCE nodes with which they interact in order to propagate certificates, and therefore cross-subnet transactions.

:::info
It is important to note that subnets can choose which TCE nodes to connect to without impacting the security of the Topos protocol.
:::

Interactions between subnet nodes and TCE nodes are twofold:

- Subnets send certificates to TCE nodes.
- Subnets listen for certificates from other subnets for any incoming cross-subnet transactions.

Once received by the TCE nodes connected to the submitting subnet, the certificate is reliably propagated to the rest of the TCE network, and delivered by all TCE nodes.

## Validation

Upon delivering the certificate, all the TCE nodes execute the **certificate validation function**, ensuring that:

1. The [ICE-FROST](/learn/uci/authentication) signature is valid;
2. The certificate is well-formed;
3. The zk-STARK proof is valid.

## Inclusion

Once validated, the certificate is consumed by the receiving subnets, i.e., they apply the corresponding cross-subnet transactions to their state. These transactions will eventually be reflected in their next certificates, as part of the state transitions validated by zk-STARK proofs.
