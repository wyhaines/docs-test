---
sidebar_position: 2
---

# Integration Flow

## Connection to the TCE

Once built on top of a UCI implementation, a subnet connects to the [TCE](/learn/tce/overview) to start interacting with other subnets in the ecosystem. The TCE node discovery mechanism is based on hardcoded DNS seeds which serve dynamic lists of TCE node IP addresses.

## Registration

Upon connecting to TCE nodes, a subnet registers itself with the [Topos subnet](/learn/subnets/topos-subnet). The subnet registration consists in the submission of a dedicated transaction that includes the long-lived public key (for certificate [authentication](/learn/uci/authentication)). Subnets save the long-lived public key to authenticate future certificates.

## Interactions with other subnets

Once known to the rest of the Topos ecosystem, a subnet can start interacting with other subnets, i.e., exchanging [cross-subnet transactions](#cross-subnet-transactions), by submitting [certificates](/learn/uci/overview#certificate) that comply with the specifications defined in the UCI.
