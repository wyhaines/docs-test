---
sidebar_position: 2
---

# Integration Flow

## Connection to the TCE

Once built on top of a UCI implementation, a subnet connects to the [TCE](/learn/tce/overview) to start interacting with other subnets in the ecosystem. The TCE node discovery mechanism is based on hardcoded DNS seeds which serve dynamic lists of TCE node IP addresses.

## Registration

Upon connecting to TCE nodes, a subnet registers itself with the TCE. The subnet registration consists in the submission of a [registration certificate](/learn/uci/subnet-registration), a certificate that includes the initial state of the subnet—relatively to its lifetime in the TCE—and its long-lived public key (for certificate [authentication](/learn/uci/authentication)). The initial state is stored by TCE nodes to validate subsequent state transitions, while both TCE nodes and subnets save the long-lived public key to authenticate future certificates.

## Interactions with other subnets

Once known to the rest of the Topos ecosystem, a subnet can start interacting with other subnets, i.e., exchanging [cross-subnet transactions](#cross-subnet-transactions), by submitting [certificates](/learn/uci/overview#certificate) that comply with the specifications defined in the UCI.
