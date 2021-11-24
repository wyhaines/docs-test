---
sidebar_position: 2
---

# Probabilistic Secure Reliable Broadcast

The main responsibility of the TCE network is to execute a broadcast primitive named **Probabilistic Secure Reliable Broadcast** (PSRB) that safely propagates certificates across the XSP ecosystem.

The protocol satisfies the following key **properties**:

#### Integrity

For every signed message received, any honest TCE node _delivers_ it at most once and, if the signer is honest, only if the signer _broadcast_ it.

#### Validity

For every (sender, receiver) tuple of honest TCE nodes, if the sender _broadcast_ a message, then the receiver _delivers_ it.

#### Agreement

For every couple of honest TCE nodes, if one _delivers_ a message, then the other one also _delivers_ it.

#### Source ordering

For every couple of honest TCE nodes which _deliver_ two messages, both nodes _deliver_ them in the same order.

## Setup

To correctly execute the PSRB protocol, TCE nodes locally hold the following **variables**:

#### $history (subnet)$

The local set of **incoming and outgoing** certificates involving the corresponding _subnet_.

#### $digest (subnet)$

The local set of **incoming** certificates involving the corresponding _subnet_ **since its last outgoing certificate**.

#### $mempool$

The local set of certificates pending for acceptation (not yet accepted nor included).

:::tip
A certificate is **incoming** if it contains a cross-subnet transaction addressed to the corresponding subnet, and **outgoing** if produced by the corresponding subnet.
:::

## Sampling

A new TCE node, once it has joined the TCE network, has successfully built three samples of peers:

- An _Echo_ sample and its associated threshold $E$
- A _Ready_ sample and its associated threshold $R$
- A _Delivery_ sample and its associated threshold $D$

Starting from this basis, a TCE node node starts exchanging sample-specific subcription messages with its _Echo_ and _Ready_ peers.

Upon receiving similar messages from other nodes, a TCE node adds the corresponding message originators in its samples in the following manner:

- Originators of _Echo_ subscription messages are added to a **new** _Echo\*_ sample
- Originators of _Ready_ subscription messages are added to a **new** _Ready\*_ sample

A TCE node interacts with its samples as follows:

- It **listens for messages** coming from peers in _Echo_, _Ready_, and _Delivery_
- It **sends messages** to peers in _Echo\*_ and _Ready\*_

:::tip
In the TCE, the per node communication is **logarithmic** in the size of the system, this allows the TCE to seamlessly scalable to billions of processes.
:::

## Protocol

To submit a certificate $Cert$, a subnet $subnet_j$ sends a ($Cert$, $digest(subnet_j)$) message to the TCE nodes it is connected to. Upon receiving this message, the TCE nodes broadcast it to the rest of the TCE network via _gossip_ **if and only if** the following $valid$ function returns $true$:

#### $valid(Cert, digest(subnet_j))$

- Every preceding certificate submitted by $subnet_j$ has been validated
- The certificates from $digest(subnet_j)$ have all been validated and exist in the $history(subnet)$ of their originating subnets.

:::tip Reminder
$digest(subnet_j)$ contains incoming (from the point of view of $subnet_j$) certificates sent by other subnets.
:::

### Echo

Upon receiving the gossiped ($Cert$, $digest(subnet_j)$) message, a TCE node executes locally $valid(Cert, digest(subnet_j))$ and, if validated, sends the same message as an **Echo message** to all its peers in its _Echo\*_ sample.

### Ready

Upon receiving more than $E$ Echo messages from its _Echo_ sample, a TCE node sends the same message as a **Ready message** to all its peers in its _Ready\*_ sample.

Similarly, a TCE node sends this Ready message to its peers in its _Ready\*_ sample upon receiving more than $R$ Ready messages from its _Ready_ sample.

### Delivery

Upon receiving more than $D$ Ready message from its _Delivery_ sample, a TCE node delivers the message, adds it to its local $mempool$ and validates its by running the $valid$ function. The validation is run after the delivery because enough TCE nodes have validated the message at the Echo stage.

Subnets connected to this TCE node are notified of the new certificate and can proceed with its full validation (TODO: add link to the relevant part). Once validated, the certificate can be included in the subnet's local state.

:::info Updating TCE node variables
In parallel, upon inserting a certificate in its mempool, a TCE node updates $history(subnet_i)$ by including $digest(subnet_i)$ as well as the delivered certificate, and $digest(subnet)$ of any subnet addressed to in the list of cross-subnet transactions included in the delivered certificate by including that certificate.
:::
