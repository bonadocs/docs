---
sidebar_position: 2
---

# Widget

## Introduction

When reading the documentation, the explanation of the protocol contracts is great. However, developers have to set up a basic testing environment to interact with the contracts to better understand the contract behavior.

The widget eliminates this by enabling developers to interact with the contract methods directly within the documentation. This greatly reduces integration time and the context switching that would otherwise be required, making protocols more developer-friendly.

Bonadocs widget allows you to enable interactivity within your docs through widgets.

## Getting Started

> Make sure you've first learnt how to create a [playground](/docs/guides/Playground/Create.md).

We generate the widget inside the playground. All you have to do is open a contract dropdown and select the method for which widget you want to create. After which, you click on `Generate Widget`.

![Widget](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728630939/Screenshot_2024-10-11_at_07.38.05_kocjys.png)

It opens up this modal below:

![Widget](https://res.cloudinary.com/dfkuxnesz/image/upload/v1728628747/Screenshot_2024-10-11_at_07.38.18_l1j5u6.png)

Within the modal, we can see how to import and use the `<BonadocsWidget/>` component

## Using Widget in Docs

The widget is an open-source library: [@bonadocs/widget](https://www.npmjs.com/package/@bonadocs/widget).

You’ll have to install the  widget using

```bash
npm i @bonadocs/widget
```

Then, we import the `BonadocsWidget` component into our docs’ `md` page.

```js
import BonadocsWidget from "@bonadocs/widget"

# MorphoBlue

In this demo, you can test out these two methods from the `Morpho Blue` contract.

## owner

<BonadocsWidget widgetConfigUri="ipfs://bafkreia4ww7vqu7musrojcort35mpyiob6e5xbjeicw3sdrm4f6ud6hrai" contract="MorphBlue" functionKey="owner" />

## withdraw

<BonadocsWidget widgetConfigUri="ipfs://bafkreia4ww7vqu7musrojcort35mpyiob6e5xbjeicw3sdrm4f6ud6hrai" contract="MorphBlue" functionKey="withdraw" />
```

This codeblock is a sample for the [Morpho](https://morpho.org/) protocol.

Try it out: https://morpho-demo.netlify.app/contracts/morphoblue/

Github: https://github.com/bonadocs/morpho-demo
