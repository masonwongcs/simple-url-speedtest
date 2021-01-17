# simple-url-speedtest

A very simple url testing based on ping response

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

[comment]: <> (## Demo)

[comment]: <> (![]&#40;demo.gif&#41;)

[comment]: <> (Link to demo: https://react-simple-marquee.surge.sh)

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

SpeedTest(urlList, (data) => {
  /**
   * Data response will be in this format
   * {
   *   url: string
   *   ping: number //in milliseconds
   * }
   */
  console.log(data)
});

```
