---
sidebar_position: 1
---

# Docgen

![Docgen](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728622454/1_c8u2wl9VOGwW9Z5XgyCbDg_xl3hr6.webp) 

## Introduction

Docgen allows developers go from their codebase to a beautiful and interactive documentation in a few seconds.

It’s a program that extracts documentation for a Solidity project and generates an interactive website from it using Docusaurus.

`@bonadocs/docgen` is based on `solidity-docgen`. If you already use `solidity-docgen`, you already know how to use `@bonadocs/docgen`. Hmmm, maybe 90% of it. The two main differences are:

- `@bonadocs/docgen` generates a website using Docusaurus, while `solidity-docgen` only generates Markdown files. You can turn off the website generation if you want to use a different static site generator and only markdown files will be generated, much like `solidity-docgen`. If you would like to use include widgets that make your documentation interactive, then this is a great option.
- `@bonadocs/docgen` generates widgets for deployed contracts, so developers can interact with the contracts directly from the documentation website. This is better than sending them off to Etherscan or worse, having them write their own scripts to interact with the contracts.

The markdown output is fully configurable through Handlebars templates, but the default templates should do a good job of displaying all of the information in the source code in Markdown format. If you don’t want to generate a website, the generated Markdown files can be used with a static site generator such as Docusaurus, Vuepress, MkDocs, Jekyll (GitHub Pages), etc., in order to publish a documentation website.

# **Widget?**

The widgets are interactive components that allow users to interact with the contracts directly from the documentation website. Widgets run simulations by default and enable developers to test without paying gas fees. Developers love to learn by doing, and this is the perfect way to let them do just that. The widgets are generated using [`@bonadocs/widget`](https://github.com/bonadocs/widget).

Note: widgets will only be generated for contracts with their deployment addresses specified. Refer to the configuration below

## Usage

Install `@bonadocs/docgen` from npm.

```bash
npm i @bonadocs/docgen
```

## Hardhat
Include the plugin in your Hardhat configuration.

```js
// hardhat.config.ts
+import '@bonadocs/docgen';
```

```js
// hardhat.config.ts
export default {
+  docgen: {
+    projectName: 'Your Protocol Name', // optional, a placeholder name will be used if omitted
+    projectDescription: 'An awesome web3 protocol.', // optional, a placeholder description will be used if omitted
+    outputDir: "./site",
+    deploymentAddresses: { // optional. If you want to generate widgets for deployed contracts
+      FirstContractName: [
+        {
+          chainId: 1, // mainnet
+          address: '0x...',
+        },
+        {
+          chainId: 42161, // arbitrum
+          address: '0x...',
+        },
+      ],
+      SecondContractName: [
+        {
+          chainId: 1, // mainnet
+          address: '0x...',
+        },
+        {
+          chainId: 42161, // arbitrum
+          address: '0x...',
+        },
+      ],
+    },
+  }, // if necessary to customize config
};
```
Then run with `npx hardhat docgen`.

This creates a new a new folder called `docs`. Next, run this command to go into the `docs` folder.

```js
cd docs
```
Finally, install your doc packages using `yarn`. Then, run `yarn start` to launch your interactive documentation.

![Generated screenshot for Origin USD (OUSD) protocol](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728625957/1_m8YG3bsZpJht-6pygNvJ5g_rfvx9m.webp) 

Try it out this sample: https://origin-protocol-sample.netlify.app/contracts/Governor - for the Origin USD (OUSD) protocol