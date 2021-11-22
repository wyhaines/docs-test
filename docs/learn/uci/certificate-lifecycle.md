---
sidebar_position: 4
---

# Certificate Lifecycle

## Production

Topos XSP does not enforce any rule as to how often and when subnets should submit their certificates, and as such leaves the definition of the triggers responsible for certificate production at the discretion of subnet developers.

Producing a certificate comes down to creating a data structure that complies with the UCI, i.e., authenticates the emitting subnet and proves the validity of its included state transitions.

## Propagation

When a subnet wants to emit a new certificate, it needs to propagate it to the rest of the Topos XSP network. The propagation is conducted by the [TCE](#) network built around the [PSRB](/learn/tce/psrb) broadcast primitive.

Subnets are all connected to a random set of TCE nodes with which they can interact. [Subnet node]—[TCE node] interactions are twofold:

- Subnets send certificates to TCE nodes.
- Subnets listen for certificates from other subnets for any incoming XS transactions.

Once accepted by the TCE nodes connected to the emitting subnet, the new certificate is safely propagated through the rest of the TCE network, and validated by all TCE nodes.

## Validation

Validating a certificate, a logic executed by all TCE nodes, consists in the following steps:

1. The certificate is authenticated: the ICE-FROST signature included in the certificate is verified against the ICE-FROST static public key of the emitting subnet.
2. The certificate zkSTARK proof is verified: the state transitions included in the certificate are all valid with regard to the previous state commitment (the previous certificate).
3. The dependencies of the certificate have already been received and validated.

:::tip
The dependencies of a certificate are the previous certificate the former refers to and the certificates from other subnets that involve that same subnet and were emitted since the previous certificate.
:::
