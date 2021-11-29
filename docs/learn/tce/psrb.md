---
sidebar_position: 2
---

# Probabilistic Secure Reliable Broadcast

The main responsibility of the TCE network is to execute a broadcast primitive named **Probabilistic Secure Reliable Broadcast** (PSRB) that safely propagates certificates across the XSP ecosystem to prevent conflicting certificates.

The protocol does not involve consensus at the ecosystem level. Consensus enforces total ordering of messages, but it is sufficient to have causal ordering for our purposes, i.e., certificates from the same subnet do not commute, while two independent certificates from two different subnets commute. Causal ordering is needed to make sure that the protocol processed all dependencies of a specific certificate before delivering it.

This results in a simpler, more efficient and more robust implementation than consensus-based solution, which is great from a security perspective.
The protocol is permissionless and allows for dynamic reconfiguration.

The PSRB exposes the following interface:

- $broadcast(m)$: used by a process inside the system to broadcast a message $m$.
- $deliver(p,m)$: used by a process inside the system to handle the delivery of a message $m$ from sender $p$.

And satisfies the following key **properties**:

**Integrity:** For all processes $p$ and message $m$, an honest process executes $deliver(p,m)$ at most once and, if $p$ is honest, only if $p$ executed $broadcast(m)$.

**Validity:** If $p$ and $q$ are honest and $p$ executes $broadcast(m)$, then $q$ executes $deliver(p,m)$.

**Agreement:** If $p$ and $q$ are honest processes and $p$ execute $deliver(r,m)$, then $q$ executes $deliver(r,m)$.

**Source ordering:** If $p$ and $q$ are honest processes and both execute $deliver(r,m)$ and $deliver(r,m')$, then they do so in the same relative order.

## Setup

To correctly execute the PSRB protocol, TCE nodes locally hold the following **variables**:

${\sf history}(S_j)$: The local set of accepted **incoming and outgoing** certificates involving subnet $S_j$.

${\sf digest}(S_i)$: The local set of **incoming** certificates involving subnet $S_i$ **since its last outgoing certificate**.

${\sf mempool}$: The local set of certificates pending for acceptation (not yet accepted nor included).

:::tip
A certificate is **incoming** if it contains a cross-subnet transaction addressed to the corresponding subnet, and **outgoing** if produced by the corresponding subnet.
:::

## Sampling

A new TCE node, once it has joined the TCE network, has successfully built three samples of peers:

- An _Echo_ sample $\mathcal{E}$ and its associated threshold $E < \vert \mathcal{E} \vert$
- A _Ready_ sample $\mathcal{R}$ and its associated threshold $R < \vert \mathcal{R} \vert$
- A _Delivery_ sample $\mathcal{D}$ and its associated threshold $D < \vert \mathcal{D} \vert$

Note that each sample has size logarithmic in the size of the system.

Starting from this basis, a TCE node node starts exchanging sample-specific subcription messages with its _Echo_ and _Ready_ peers.

Upon receiving similar messages from other nodes, a TCE node adds the corresponding message originators in new samples in the following manner:

- Originators of _Echo_ subscription messages are added to a **new** $\tilde \mathcal{E}$ set;
- Originators of _Ready_ subscription messages are added to a **new** $\tilde \mathcal{R}$ set.

A TCE node interacts with its samples as follows:

- It **only listens for messages** coming from peers in samples $\mathcal{E}$, $\mathcal{R}$, and $\mathcal{D}$;
- It **only sends messages** to peers in sets $\tilde \mathcal{E}$ and $\tilde \mathcal{R}$.

:::tip
In the TCE, the per-node communication is **logarithmic** in the size of the system and the overall communication complexity of the system is quasilinear. This allows the TCE to seamlessly scale to billions of processes and to be in sharp contrast with traditional BFT algorithm which scale poorly as they typically have quadratic communication complexity.
:::

## Protocol overview

To submit a certificate $Cert$, the subnet validator broadcasts a message $m = (Cert, {\sf digest}(S_j)$) to the TCE nodes it is connected to. Upon receiving this message, the TCE nodes propagate it to the rest of the TCE network via _gossip_.

:::tip Reminder
${\sf digest}(S_j)$ contains incoming (from the point of view of subnet $S_j$) certificates sent by other subnets since $S_j$'s last certificate.
:::

The ICE-FROST signed certificate message $m$ eventually reaches all the TCE nodes. After a correct node receives $m$, it verifies the message signature and if correct, it sends an _Echo_ message to all nodes in its $\tilde \mathcal{E}$ set.

Each correct node issues a _Ready_ message to all the nodes in $\tilde \mathcal{R}$​ if it has received more than $E$ _Echo_ (resp. $R$ _Ready_) messages from $\mathcal{E}$ (resp. $\mathcal{R}$).

At this point, the message containing the certificate is yet to be delivered. In order for a correct node to deliver the certificate message, it needs to have received more than $D$ Ready messages from its delivery sample $\mathcal{D}$.

Upon delivery, a correct node checks if $m$ is well-formed, and then adds it to the pool of messages pending validation ${\sf mempool}$.

Before applying the certificate from subnet $S_j$​ to its state, a correct TCE node validates the certificate via the validation function.

Once a certificate passes validation, the TCE node applies the certificate to its local state. Applying a certificate means that the TCE node adds the certificate $Cert$ and its digest ${\sf digest}(S_j)$ to the history of subnet $S_j$​.

:::tip Amplification step
Having the ready sample $\mathcal{E}$ is crucial for the _totality_ property of the PSRB, as it creates a feedback loop. Consequently, either all correct processes will eventually deliver m, or none of them will.
:::
