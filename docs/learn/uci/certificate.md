---
sidebar_position: 2
---

# Certificate

## What is a certificate?

Cross-subnet communication in Topos lies in the submission of **certificates**—data structures that certify subnet state transitions. Any subnet participants can send an outgoing message towards another subnet.

It is the role of every subnet to:

- identify key participants;
- batch transactions in a certificate;
- include a cryptographic proof of the [validity of the state transition](/learn/uci/state-transitions-validity);
- [sign](/learn/uci/authentication) the certificate.

Once broadcast and delivered by the TCE, the certificate can be verified and the cross-subnet transaction included in the receiving subnet.

## Composition

A certificate is defined as:

- `subnet_id` is the unique identifier of the subnet;
- `prev_state_hash` is the previous subnet state commitment (from the previous certificate);
- `state_hash` is the current subnet state commitment;
- `proof` is the zkSTARK proof of validity;
- `XS_list` represents the list of included cross-subnet messages;
- `proof_XS_list` is the list of inclusion proofs of cross-subnet messages in the proven
  state transition;
