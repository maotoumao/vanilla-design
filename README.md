<p align="center">
  <a href="https://github.com/maotoumao/vanilla-design">
    <img width="160" src="./vanilla-design.svg">
  </a>
</p>

<h1 align="center">Vanilla Design</h1>

<div align="center">
  A super lightweight, ultra high-performance React UI library.
</div>

English | [中文](./README-zh_CN.md)

## ✨ Introduction

`Vanilla Design` is a super lightweight, ultra high-performance React UI library. [Vanilla Design Team](https://github.com/maotoumao)  places a great emphasis on code size and performance, drawing inspiration from the [nocode](https://github.com/kelseyhightower/nocode) philosophy, which has significantly boosted the security and maintainability of `Vanilla Design`. It's like they've added an extra layer of bulletproofing and polish to their creation! 

## 📦 Install

You only need to execute the following command to use `Vanilla Design` in your React application:

```bash
npm install vanilla-design
```


## 🔨 Getting Started

`Vanilla Design` is committed to offering developers a superior development experience. You can integrate `Vanilla Design` with minimal effort and cost.

### Usage

First, we need to import `Vanilla Design`'s styles at the outermost layer of the application:

``` tsx
import "vanilla-design/styles.css";
```

Next, you can joyfully make use of all the components provided by Vanilla Design:

``` tsx
import { div } from "vanilla-design";

import "vanilla-design/styles.css";


function App(){

  return <div>Awesome Vanilla Design!</div>
}
```

What? You think this isn't "React" enough? No worries, we've got your developer habits covered. `Vanilla Design` offers an alternative way to import components:

``` tsx
import { Div } from "vanilla-design";

import "vanilla-design/styles.css";


function App(){

  return <Div>Awesome Vanilla Design!</Div>
}
```

Wow, now that's super `React`!

### Import on Demand

As a high-performance component library, on-demand loading is an absolute must. Unlike other UI libraries, `Vanilla Design` has taken on-demand loading to the extreme:

#### CSS On-demand Importing

If your boss doesn't care about how much code you've written, you can completely skip importing styles:

```tsx
import { Div } from "vanilla-design";

// import "vanilla-design/styles.css"; Simply comment out that line!


function App(){

  return <Div>Awesome Vanilla Design!</Div>
}
```

#### Component On-demand Importing

Similarly, if you go all lowercase with `Vanilla Design`, you don't even need to import anything. Your code can be simplified to:

``` tsx
// import { Div } from "vanilla-design"; Simply comment out that line!

// import "vanilla-design/styles.css"; Simply comment out that line!


function App(){

  return <div>Awesome Vanilla Design!</div>
}
```

Isn't that pretty cool, right?


## ❤️ Who's Using?

Even though most companies don't openly declare it, they're secretly sipping from the `Vanilla Design` well or crafting their own customized component libraries based on it. 😉：

```
Facebook  Google  YouTube  Yahoo  Wikipedia  Windows  Twitter  Amazon  LinkedIn  MSN
eBay  Microsoft  Apple  Pinterest  PayPal  Reddit  Netflix  Stack Overflow ...
```
These companies typically pair `Vanilla Design` with [Vanilla JS](http://vanilla-js.com/), significantly boosting development efficiency. It's like a perfect harmony of flavors for web development! 🍦🚀


## 🕛 When to use it? 

In many scenarios, using `Vanilla Design` is a fantastic choice:
- 💡 When your boss insists on using a UI library and wants to play favorites among them.
- 💡 When your boss is code-blind and only cares about how much spaghetti code you've cooked up.
- 💡 When your colleagues are in a never-ending battle over which UI library is the best and declare the rest as garbage.
- 💡 When you see someone reinventing the wheel by creating yet another component library.
- 💡 And the list goes on...

You can also find more information about `Vanilla Design` right [here](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element). 


The [repository](https://github.com/maotoumao/vanilla-design) is open source based on the WTFPL protocol. Don't hesitate to use it in your next project!
