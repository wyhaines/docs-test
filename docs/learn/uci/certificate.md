---
sidebar_position: 2
---

# Certificate

## What is a certificate?

Cross-subnet communication in Topos lies in the submission of **certificates**—data structures that certify cross-subnet transactions. Any subnet participants can send an outgoing transaction towards another subnet.

It is the role of every subnet to:

- identify key participants;
- batch such transactions in a certificate;
- include a cryptographic proof of the [validity of the state transition](/learn/uci/state-transitions-validity) since the previously committed state;
- [sign](/learn/uci/authentication) the certificate.

:::tip
The **previously committed state** is the state committed in the previous certificate, or the initial state committed during [registration](/learn/uci/subnet-registration).
:::

Once broadcast and delivered by the TCE, the certificate can be verified and the cross-subnet transaction included in the receiving subnet.

## Composition

A certificate is defined as:

- `subnet_id` is the unique identifier of the subnet;
- `cert_prev` is the reference to subnet's previous certificate;
- `sig` is the Schnorr-based signature that authenticates the certificate;
- `XS_list` represents the list of included cross-subnet transactions;
- `proofs` is the list of STARK proofs;
- `proofs_pub_inputs` is the set of STARK public inputs against which the proofs are verified;

Additionally, a [registration certificate](/learn/uci/subnet-registration) includes:

- `sig_pub_key` is the subnet's signature public key;
- `init_state_comm` is the commitment of the subnet's initial state.
