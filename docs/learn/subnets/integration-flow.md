---
sidebar_position: 2
---

# Integration Flow

## Registration

Once built with a compatible DevKit, a subnet registers itself with the [Topos Subnet](/learn/subnets/topos-subnet). The subnet registration consists in the submission of a specific transaction that includes the long-lived public key (for certificate [authentication](/learn/uci/authentication)). Other subnets in the ecosystem gain access to the long-lived public key by accessing the state of the Topos Subnet and can therefore authenticate future certificates.

## Interactions with other subnets

Once registered with the Topos Subnet and known to the rest of the Topos ecosystem, a subnet can start interacting with other subnets, i.e., exchanging [cross-subnet transactions](#cross-subnet-transactions), by submitting [certificates](/learn/uci/overview#certificate) that comply with the specifications defined in the UCI.

To do so, subnet participants establish connections with [TCE](/learn/tce/overview) nodes, to whom they will submit outgoing certificates and listen for new incoming ones.
