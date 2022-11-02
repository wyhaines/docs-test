---
sidebar_position: 4
---

# Cross-Subnet Messages

## Definition

A **cross-subnet message** represents a request from a user on a subnet to execute a transaction in a remote subnet. In practice, it consists in a transaction on the sending subnet that is part of a state transition whose validity is ensured by the [UCI](/learn/uci/overview), which is settled on the [TCE](/learn/tce/overview), and delivered to the receiving subnet.

Topos allows for interoperability between subnets via the following transmission flow of cross-subnet messages:

<div style={{textAlign: 'center'}}>
    <img src="/img/transmission-flow.jpg" width="90%" style={{margin: '2rem 0'}}/>
</div>

:::tip Validity and Authentication

Thanks to the validity and authentication properties guaranteed by the UCI and the consistent delivery ensured by the TCE, the receiving subnet can trustlessly and securely interpret the cross-subnet message and execute the request transaction locally.

:::

While subnets are free to implement any specific cross-subnet messaging protocols built on top the [UCI](/learn/uci/overview) and the [TCE](/learn/tce/overview), we propose the **Topos Cross-Subnet Messaging Protocol**.

## Topos Cross-Subnet Messaging Protocol

The requesting user calls a dedicated protocol-level smart contract, the **Topos Core contract**, on the sending subnet. Once proven to be part of a verified state transition of the sending subnet, the call is executed on the receiving subnet.

The Topos Core contract function to call on the sending subnet depends on the type of message requested:

- **Asset transfer**: An asset is burnt/locked on the sending subnet and equivalently minted on the receiving one.

```
transferAsset(
    subnet_id: Identifier of the receiving subnet,
    asset_id: Identifier of the transferred asset,
    recipient_addr: Recipient’s address on the receiving subnet,
    amount: Amount to be transferred
)
```

- **Arbitrary contract call**: A contract on the receiving subnet is called from the sending subnet.

```
callArbitraryContract(
    subnet_id: Identifier of the receiving subnet,
    contract_addr: Address of the smart contract,
    func_name: Name of the function to call,
    func_args: Arguments to pass to the function call
)
```

:::info
The Topos Cross-Subnet Messaging Protocol is **under active development**. More information will be available soon!
:::
