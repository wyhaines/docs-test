---
sidebar_position: 4
---

# Cross-Subnet Messages

## Definition

A **cross-subnet message** represents a request from a user on a subnet to execute a transaction in a remote subnet. The requesting user calls a dedicated protocol-level smart contract, called the **Topos Core contract**, on the sending subnet. This call, once received by the remote subnet, is interpreted as another function to call (e.g., token mint). 

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
Cross-subnet messages are **under development**. More information will be available soon!
:::

## Transmission Flow

Topos allows for interoperability between subnets via the following transmission flow of cross-subnet messages:

<div style={{textAlign: 'center'}}>
    <img src="/img/transmission-flow.jpg" width="90%" style={{margin: '2rem 0'}}/>
</div>

Following the rules of the [UCI](/learn/uci/overview), a cross-subnet message that has been included on the canonical chain of the sending subnet is grouped with an arbitrary amount of transactions to form a new state transition to be certifified. The certificate message contains a proof of the validity of the state transition and is authenticated. Once delivered throughout the [TCE](/learn/tce/overview) network, via the [reliable broadcast primitive](/learn/tce/wcprb), the message is collected by the subnet it is addressed to.

:::tip Validity and Authentication

Thanks to the validity and authentication properties guaranteed by the UCI and the consistent delivery ensured by the TCE, the receiving subnet can trustlessly and securely interpret the cross-subnet message and execute the request transaction locally.

:::