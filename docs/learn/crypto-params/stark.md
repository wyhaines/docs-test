---
sidebar_position: 1
---

# STARKs

## Curve

Cheetah is Topos’s STARK-friendly elliptic curve defined over a sextic extension of $p = 2^{62} + 2^{56} + 2^{55} + 1$ and defined as follows:

$E(\mathbb{F}_{p^6}): y^2 = x^3 + x + B$

where:

- $\mathbb{F}_{p^2} \vcentcolon= \mathbb{F}_p[X]/(X^2 - 2X - 2) \\ \quad\ \ \ = \left\lbrace a + b.u \mid (a,b) \in (\mathbb{F}_p)^2,\ u^2 - 2u - 2 = 0\right\rbrace$
- $\mathbb{F}_{p^6} \vcentcolon=\mathbb{F}_{p^2}[X]/(X^3 + X + 1) \\ \quad\ \ \ = \left\lbrace a + b.v + c.v^2 \mid (a,b,c) \in (\mathbb{F}_{p^2})^3,\ v^2 + v + 1 = 0\right\rbrace$
- $B = (1200866201009650596 u + 1935817186716799185).v^2\\\qquad \quad + (3999205700308519553u + 3518137720867787056).v\\ \qquad \qquad + 2508413708960025374u + 1526905369741321712$
- $q = 17278877126736494933592566161653303514319447234579276854188469089485337225893$ (prime order of the curve)

The curve defines a large group of 373 bits, containing a 254-bit prime order $q$ subgroup on which we perform all our curve operations, including our Schnorr signature scheme.

The base point of the curve, is defined as:

$$G = (G_x:G_y:G_z),\ \mathrm{with:}\\{ }\\ G_x = (288076929228681448u + 2633256936270674947).v^2 + (1056103921720638754u + 3052857668015466949).v + 4508025770867562887u + 2398517019392108645\\{ }\\G_y = (3289504647774244396u + 4227116334258416103).v^2 + (3024200307602630234u + 1961556908722893436)v + 1225290585625954719u + 3894155704139868264\\{ }\\G_z = 1$$
