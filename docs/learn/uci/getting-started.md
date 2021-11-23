---
sidebar_position: 1
---

# Getting Started

The Unified Certification Interface (UCI) is the common interface all subnets need to implement in order to participate in Topos XSP.

## Why UCI?

Topos XSP's core principle is to augment participating networks with interopetability capabilities while remaining agnostic as to their underlying construction and non intrusive with regards to their internal data. To that end, the protocol **abstracts the internal structure and composition of a subnet** and introduces a **unified interface** that describes the language it must speak to be interoperable with all the other subnets of the ecosystem.

## Certificate

Cross-subnet communication in Topos XSP lies in the submission of **certificates**—data structures that certify cross-subnet messages. Any participant in a subnet can send an outgoing transaction towards another subnet. It's the role of every subnet to identify key participants and have them gather such transactions in a certificate, include a cryptographic proof of the valid state transition since the previous state commitment, and [authenticate](/learn/uci/authentication) the certificate.

:::tip
The **previous state commitment** is the state committed in the previous certificate if any, otherwise the genesis state committed during [registration](/learn/uci/ledger-registration).
:::

Once broadcast and delivered by the TCE, the certificate can be verified and the cross-subnet transaction included in the Terminal.
