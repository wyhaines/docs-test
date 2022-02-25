---
sidebar_position: 1
---

# STARKs

## Curve

Cheetah is Topos’s STARK-friendly elliptic curve defined over a sextic extension of $p = 2^{64} - 2^{32} + 1$ and defined as follows:

$E(\mathbb{F}_{p^6}): y^2 = x^3 + x + B$

where:

- $\mathbb{F}_{p^6} \vcentcolon=\mathbb{F}_{p}[X]/(X^6 - 7) \\ \quad\ \ \ = \left\lbrace a + b.u + c.u^2 + d.u^3 + e.u^4 + f.u^5 \mid (a,b,c,d,e,f) \in (\mathbb{F}_{p})^6,\ u^6 - 7 = 0\right\rbrace$
- $B = u + 395$
- $q = 55610362957290864006699123731285679659474893560816383126640993521607086746831$ (prime order of the curve's subgroup)
- $h = 708537115134665106932687062569690615370$ (cofactor of the curve)

The curve defines a large group of 384 bits, containing a 255-bit prime order $q$ subgroup on which we perform all our curve operations, including our Schnorr signature scheme.

The base point of the curve, obtained by applying the SSWU hash-to-curve algorithm to the "Cheetah" ASCII string, is defined as:

$G = (G_x:G_y:G_z),\ \mathrm{with:}\\{ }\\ G_x = 12938930721685970739.u^5 + 375185138577093320.u^4 + 4830863958577994148.u^3 + 10526511002404673680.u^2 + 8599518745794843693.u + 2754611494552410273\\{ }\\G_y = 9990732138772505951.u^5 + 13187678623570541764.u^4 + 10708493419890101954.u^3 + 14375303400746062753.u^2 + 2774812795997841935.u + 15384029202802550068\\{ }\\G_z = 1$
