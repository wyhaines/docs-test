---
sidebar_position: 5
---

# Certificate Lifecycle

## Production

Topos does not enforce any rules as to how often and when subnets should submit their certificates, and as such leaves the definition of the triggers responsible for certificate production at the discretion of subnet developers.

Producing a certificate comes down to creating and submitting a data structure that complies with the UCI, i.e., is authenticated and proves the validity of the included state transition.

## Propagation to the TCE

When a subnet wants to submit a new certificate, it needs to propagate it to the rest of the Topos ecosystem. To that end, certain subnet participants, e.g., subnet validators, are also participating in the [TCE](/learn/tce/overview) network, allowing them to collectively create, authenticate, and broadcast <b>certificate messages</b> that encapsulate certificates and their dependencies.

The role of these specific subnet participants is twofold:

- They create, authenticate, and broadcast certificate messages to the TCE network.
- They verify certificate messages received from other subnets and execute cross-subnet messages that are addressed to their subnet.

## Validation and Broadcast

Certificates are validated both intrinsically and extrinsically:

- They are **intrinsically** valid if they are well formed, if their included zkSTARK proof is valid, and if their included cross-subnet messages are verified to be part of the proven state transition.
- They are **extrinsically** valid if their dependencies are valid, i.e., are part of the history of their respectiving subnets (read more [here](/learn/tce/wcprb)).

This validation is performed by a TCE node before it broadcasts the certificate message, and by all TCE nodes before they deliver it.

The broadcast is performed via the [Weak Causally Probabilistic Reliable Broadcast primitive](/learn/tce/wcprb) implemented by all TCE nodes.

## Inclusion

Once delivered, the certificate is consumed by the receiving subnets, i.e., they apply the included cross-subnet messages to their state. These transactions will eventually be reflected in their next certificate, as part of their new state transition.
