---
sidebar_position: 5
---

# TCE Nodes

## Peer Discovery

When newly joining the TCE network, a TCE node queries oracles—e.g. DNS seeds—to receive a dynamic list of peers that are ready to accept incoming connections. Once connected, the new peers share their own peers expanding the network discovery of the querying TCE node.

This peer discovery mechanism is very common in the blockchain field. The TCE differs in that peer discovery is used to construct role-specific **samples** of nodes that will each participate in their own way in setting up the broadcast protocol.
