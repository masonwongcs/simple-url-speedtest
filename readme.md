# simple-url-speedtest

A very simple url testing based on ping response

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Demo

![](https://media.giphy.com/media/KIRRjswUNPxAlHcg9a/giphy.gif)

Link to demo: https://simple-url-speedtest.surge.sh

## Installation

```sh
npm i simple-url-speedtest --save
```

## Usage

Import SpeedTest function into your Application

```jsx
import SpeedTest from "simple-url-speedtest";

const urlList = [
  "https://www.facebook.com",
  "https://www.google.com",
  "https://www.apple.com",
  "https://www.cnn.com",
  "https://www.whatsapp.com",
  "https://www.yahoo.com",
  "https://www.samsung.com",
  "https://www.lg.com",
];

/**
 * Data arrays response will be in this format
 * 
 * {
 *    url: string
 *    ping: number // In milliseconds
 * }
 * 
*/

// Data can be access using function callback method
SpeedTest(urlList, (data) => {
  console.log(data)
});

// or using Promise callback method
SpeedTest(urlList).then(data => {
  console.log(data)
});

```
