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

![Widget](https://res.cloudinary.com/dfkuxnesz/image/upload/v1755634192/Screenshot_2025-08-19_at_21.08.55_wvgifh.png)

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

## Using Widget in Mintlify
To use the widget in Mintlify, you'll have to create a `snippets` folder and add the `BonadocsWidget.jsx` file. After which, you paste this component below. Within it, we use the CDN `https://cdn.jsdelivr.net/npm/@bonadocs/widget@1` to render the component inside the React component.

```js
// snippets/BonadocsWidget.jsx

import React from 'react';

// Web component wrapper for Bonadocs Widget
export const BonadocsWidget = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="@bonadocs/widget"]')) {
      setIsLoaded(true);
      return;
    }

    // Load the Bonadocs Widget script from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@bonadocs/widget@1';
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = () => {
      setHasError(true);
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="@bonadocs/widget"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  if (hasError) {
    return (
      <div 
        style={{
          padding: '24px',
          border: '2px solid #EF4444',
          borderRadius: '8px',
          backgroundColor: '#FEF2F2',
          color: '#DC2626'
        }}
      >
        <h3 style={{ margin: '0 0 12px 0' }}>Widget Loading Error</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Failed to load the Bonadocs Widget from CDN. Please check your internet connection.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div 
        style={{
          padding: '24px',
          border: '2px solid #E5E7EB',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          color: '#1F2937'
        }}
      >
        <div 
          style={{
            width: '20px',
            height: '20px',
            border: '2px solid #6385ff',
            borderTop: '2px solid #6385ff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 8px auto'
          }}
        />
        <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>Loading Bonadocs Widget...</p>
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Use the web component with React.createElement */}
      {React.createElement('bonadocs-widget', {
        'widget-config-uri': props.widgetConfigUri, 
        'contract': props.contract,
        'function-key': props.functionKey.split('.').pop()
      })}
    </div>
  );
};

export default BonadocsWidget;

```

We then go into our `mdx` and import the component and use it with the correct params.

```js
---
title: 'Basic Widget Example'
description: 'A simple example of the Bonadocs Widget in action'
---

import { BonadocsWidget } from '/snippets/BonadocsWidget.jsx'

## Live Widget Demo

Here's a live example of the Bonadocs Widget integrated directly into this documentation:

<BonadocsWidget
  widgetConfigUri="ipfs://QmYPy1Ab294wYeN4HyYQmv39WentRdR56p4UHDvAeKhBX4"
  contract="0x83140"
  functionKey="0x83140.function.0xaea9467d"
/>
```
