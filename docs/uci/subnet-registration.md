---
sidebar_position: 1
---

# Subnet Registration

Subnets ready to participate in the Topos XSP ecosystem first need to **register** with the [TCE](/tce/psrb).

The registration process consists in submitting a **registration certificate** that is different from regular certificates in that it contains specific data for declaring the new subnet:

- The subnet's **genesis state**, i.e., the first state commitment the subnet participants intend to build from when certifying their future state transitions.
- The subnet's **ICE-FROST static public key** that allow it to digitally sign subsequent certificates and other Topos XSP subnets to authenticate
