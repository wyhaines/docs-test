---
sidebar_position: 2
---

# Subnets

**Subnets** are independant networks that can safely exchange messages within the Topos XSP ecosystem.

Topos XSP has been designed from the ground up around the core concept that participating networks should not, for the sake of interoperabillity, give up their freedom to build their own structure and keep their data private. The protocol makes **near-zero assumptions** on their underlying construction thanks to the [UCI](#), a global interface implemented by all subnets to provide the necessarity pieces of information for seamless interoperability.

## Types of subnets

Topos XSP subnets can come in various forms:

- Blockchains developed with [Topos Subnet DevKit](#)
- Non-Topos blockchains
- Non-blockchain networks

:::info

While for now Topos Subnet DevKit is our top priority, the participation of the community in the development of language-specific UCI client implementations is welcomed!

:::

## Lifecycle

### Connection to the TCE

Once it has integrated a UCI implementation, a subset starts connecting to the [TCE](#)—the auxiliary network supporting the XSP transport layer—to start interacting with other subnets participating in Topos XSP. The initial TCE node discovery mechanism is based on hardcoded DNS seeds which serve dynamic lists of available TCE nodes IP:port tuples.

### Registration

Once connected to TCE nodes, a subnet registers itself to the TCE. The subnet registration consists in the submission of a [Registration Certificate](learn/uci/subnet-registration), a data structure that includes the genesis state of the subnet—relatively to its life time in the Topos XSP network—and its static public key (read more in [authentication](learn/uci/authentication)).

### Interactions in Topos XSP

Once known to the rest of the Topos XSP network, a subnet can start interacting with other subnets—i.e. exchanging [Cross-Subnet Transactions](#cross-subnet-transactions)—by submitting [Certificates](#) that implement the UCI.

## Cross-Subnet Transactions

Cross-Subnet (XS) Transactions allow subnets to exchange TOPOS transactions with each other.

:::info

Although only TOPOS XS transactions are supported for now, a future iteration will allow for any type of XS transaction.

:::
