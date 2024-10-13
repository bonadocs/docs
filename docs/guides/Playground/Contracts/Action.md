---
sidebar_position: 2
---

# Actions

Actions allow us to interact with our contracts using a JavaScript environment; similar to the front end of an application. Multiple smart contract method calls and transactions are required to complete certain complex actions. For example, executing a Swap action on Uniswap involves at least two calls for most tokens: approve tokens (`approve`), and execute swap (`swapExactTokensForTokens`). Actions allow us to complete these kinds of interactions on smart contracts.

To create an action, click on the `Add` icon as shown below:

![Action creation](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658794/Screenshot_2024-10-11_at_15.52.40_arpijl.png)

Add your action `name` and select the `network` you want to run your actions on. The `network` you select is determined by which networks your contracts are deployed on.

![Actions](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658675/Screenshot_2024-10-11_at_15.53.25_ktdwux.png)

## Built-in Variables

We have certain built-in variables that allow developers to access and initialize their contracts, etc.

![Actions code](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728658945/Screenshot_2024-10-11_at_16.02.09_ilteg3.png)

The most used built-in variables includes:

- Ethers variables (`parseUnits`, `formatUnits`, `ZeroAddress`, etc).

```js
const { Contract, formatUnits, parseUnits, BigNumber, ZeroAddress } = ethers;
```

- `bonadocs.contracts`: This contains all the contracts inside the playground.
  In the example below, we want to use the `SablierV2LockupLinear` contract in our playground.

```js
const { address: sablierV2LockupLinearAddress, abi: sablierV2LockupLinearAbi } =
  bonadocs.contracts.SablierV2LockupLinear;
```

Once you add your contracts, you can destructure it to get the address, and ABI of the contract. Similarly, you can also get the `chainId` and `name` of the contract.

- `bonadocs.commonAbis.erc20`: basic `erc20` abi in a format supported by `ethers`.

```js
const erc20Abi = bonadocs.commonAbis.erc20;
```

- `SimulationProvider` from [zimulatoor](https://www.npmjs.com/package/@bonadocs/zimulatoor). This allows us create simulated signers for any address, which is used to initialize the contracts and make queries.

```js
const { SimulationProvider } = zimulatoor;
```

When we use them together, we create the `provider` using the `chainId`. Then, we use the `provider.getImpersonatedSigner()` to create the signer (`wealthySigner`) for our `wealthyAddress`.

The `sablier` contract is now initiated using:

- `sablierV2LockupLinearAddress`
- `sablierV2LockupLinearAbi`
- `wealthySigner`

```js
const { Contract, formatUnits, parseUnits, BigNumber, ZeroAddress } = ethers;

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

Once we initiate the `sablier` contract, we can now use it to query methods. Below, we use it to query the `createWithDurations` method.

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

P.S: We make use of `parseEthersError` to properly parse errors. It's built into the action code environment; not imported from `ethers`.

## Self

Actions run in a dedicated worker in the browser, so they can access any browser API using `self`.

In the example below, we use `self.crypto` the same way you use `window.crypto` in your browser.

```ts
 const encrypted = await self.crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP'
    },
    publicKey: CryptoKey,
    dataBuffer: Uint8Array
  );
```

## Packages

You can add custom NPM packages to your actions. Click on `Packages` and the `Add` icon below

![Add Packages](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659304/Screenshot_2024-10-11_at_16.05.35_jdue6u.png)

After which, you search for your preferred package and click on the `Add Package` button.

![Add Packages](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659304/Screenshot_2024-10-11_at_16.07.02_k9e4dn.png)

This opens up a modal to select the version that you need. Finally, click `Download`.

![Package version](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728659306/Screenshot_2024-10-11_at_16.07.47_zotdiy.png)

Here's how you make use of the package inside your action. In this case, `lodash`.

```js
const _ = require("lodash");

const object1 = { a: 1, b: { c: 2 } };
const object2 = { a: 1, b: { c: 2 } };

const areObjectsEqual = _.isEqual(object1, object2);

console.log(areObjectsEqual);
```

P.S: Only packages with `esm` modules need the `require` function to get the module data. `umd` modules are accessible directly with the global object added by the module, i.e, `ethers` above.

## Run Your Action

Click on the `Run` button below and you'll get your response on the right.

![Action](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728709605/Screenshot_2024-10-12_at_06.05.37_ubae6g.png)
