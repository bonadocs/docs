---
sidebar_position: 2
---

# Actions

Actions

![Action creation](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658794/Screenshot_2024-10-11_at_15.52.40_arpijl.png)

![Actions](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658675/Screenshot_2024-10-11_at_15.53.25_ktdwux.png)

## Built-in Variables

![Actions code](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658945/Screenshot_2024-10-11_at_16.02.09_ilteg3.png)

```js
const { SimulationProvider } = zimulatoor;
const { Contract, formatUnits, parseUnits, BigNumber, ZeroAddress } = ethers;

const { address: daiTokenAddress, abi: daiTokenAbi } =
  bonadocs.contracts.DAIToken;
const { address: sablierV2LockupLinearAddress, abi: sablierV2LockupLinearAbi } =
  bonadocs.contracts.SablierV2LockupLinear;
const chainId = 1;
const provider = new SimulationProvider(chainId);
const wealthyAddress = "0x1eED63EfBA5f81D95bfe37d82C8E736b974F477b";

const wealthySigner = await provider.getImpersonatedSigner(wealthyAddress);
const sablier = new Contract(
  sablierV2LockupLinearAddress,
  sablierV2LockupLinearAbi,
  wealthySigner
);
```


```js
try {
  const streamTx = await sablier.createWithDurations([
    wealthyAddress,
    recipientAddress,
    amountStreamed,
    daiTokenAddress,
    true,
    true,
    [BigInt(23456), BigInt(31449600)],
    [ZeroAddress, 0n],
  ]);

  const streamRct = await streamTx.wait();

  const streamLog = streamRct.logs.find(
    (l) => l.fragment?.name === "CreateLockupLinearStream"
  );

  console.log("emittedStream", {
    streamId: streamLog.args.streamId,
    sender: streamLog.args.sender,
    recipient: streamLog.args.recipient,
    amounts: streamLog.args.amounts,
    asset: streamLog.args.asset,
    cancelable: streamLog.args.cancelable,
    transferable: streamLog.args.transferable,
    timestamps: streamLog.args.timestamps,
    broker: streamLog.args.broker,
  });

  streamId = streamLog.args.streamId;
} catch (error) {
  parseEthersError(error, sablier);
  console.error(error);
}
```


## Packages

![Add Packages](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659304/Screenshot_2024-10-11_at_16.05.35_jdue6u.png)

![Add Packages](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659304/Screenshot_2024-10-11_at_16.07.02_k9e4dn.png)

![Package version](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659306/Screenshot_2024-10-11_at_16.07.47_zotdiy.png)

```js
const _ = require("lodash")

const object1 = { a: 1, b: { c: 2 } };
const object2 = { a: 1, b: { c: 2 } };

const areObjectsEqual = _.isEqual(object1, object2);

console.log(areObjectsEqual);
```
