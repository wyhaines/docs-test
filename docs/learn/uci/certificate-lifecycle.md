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

All TCE nodes, once they have locally delivered a certificate, execute the **certificate validation function**:

1. The certificate is authenticated: the ICE-FROST signature included in the certificate is verified against the ICE-FROST static public key of the emitting subnet;
2. The certificate is well-formed;
3. The certificate zkSTARK proof is verified: the state transitions included in the certificate are all valid with regard to the previous state commitment (the previous certificate).
