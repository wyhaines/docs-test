---
sidebar_position: 2
---

# Subnets

**Subnets** are independant networks that can safely exchange messages within the Topos XSP ecosystem.

Topos XSP has been designed from the ground up around the core concept that participating networks should not, for the sake of interoperabillity, give up their freedom to build their own structure and keep their data private. The protocol makes **near-zero assumptions** on subnets' underlying construction thanks to the [UCI](#), a global interface implemented by all subnets to provide the information needed for seamless interoperability.

## Types of subnets

Topos XSP subnets can come in various forms:

- Blockchains developed with [Topos Subnet DevKit](#)
- Blockchains developed with other frameworks (_available in future iterations_)
- Networks which are not blockchains (_available in future iterations_)

The UCI is the center piece that allows projects not built with Topos Subnet DevKit to be compatible with the Topos XSP ecosystem: using future UCI client implementations, projects of any form will be able to produce data ready to be certified and accepted by all other subnets.

:::info
Read more about the [UCI](#).
:::

:::tip
While Topos Subnet DevKit is our top priority for now, development of language-specific UCI client implementations by the community is welcome!
:::

## Lifecycle

### Connection to the TCE

Once it has integrated a UCI implementation, a subset starts connecting to the [TCE](#)—the auxiliary network supporting the XSP transport layer—to start interacting with other subnets participating in Topos XSP. The initial TCE node discovery mechanism is based on hardcoded DNS seeds which serve dynamic lists of available TCE nodes IP:port tuples.

### Registration

Once connected to TCE nodes, a subnet registers itself with the TCE. The subnet registration consists in the submission of a [Registration Certificate](uci/subnet-registration), a data structure that includes the genesis state of the subnet—relatively to its lifetime in the TCE—and its static public key (read more in [authentication](uci/authentication)).

### Interactions with other subnets

Once known to the rest of the XSP ecosystem, a subnet can start interacting with other subnets, i.e., exchanging [Cross-Subnet Transactions](#cross-subnet-transactions), by submitting [Certificates](#) that implement the UCI.

## Cross-Subnet Transactions

Cross-Subnet (XS) Transactions allow subnets to exchange TOPOS transactions with each other.

:::info

Although only TOPOS XS transactions are supported for now, future iterations will support transactions of any type of tokens as well as arbitrary messages.

:::
