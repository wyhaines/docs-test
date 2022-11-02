---
sidebar_position: 2
---

# Schnorr signature scheme

The Topos protocol adapts a Schnorr signature scheme for efficient verification inside the Topos STARK proving system, by replacing the commonly used binary hash function to an algebraically efficient one, the Rescue-Prime hash function.

The internal design of the signing process (and hence of the verification algorithm as well) follows the specification used in libsecp256k1, deviating from the original version by a difference in the output of the signing phase. This design choice is justified by Bellare, et al.<sup>[1](#ref-a)</sup> showing that Schnorr signatures as implemented in libsecp256k1 can achieve semi-strong unforgeability, while the original construction of Claus Schnorr can only provide normal unforgeability.

<sub>[1] <a id="ref-1" href="https://www.iacr.org/archive/eurocrypt2004/30270269/bnn.pdf">https://www.iacr.org/archive/eurocrypt2004/30270269/bnn.pdf</a></sub>
