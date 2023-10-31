<h1 align="center">Vanilla Design</h1>

<div align="center">
  一个超轻量的、超高性能的 React 组件库。
</div>


## ✨ 简介

Vanilla Design 是一个超轻量、超高性能的 React 组件库。[Vanilla Design 团队](https://github.com/maotoumao) 以体积和性能为抓手，并将 [nocode](https://github.com/kelseyhightower/nocode) 作为指导思想和方法论给 Vanilla Design 组件库赋能，大大提升了 Vanilla Design 的安全性和可维护性。


## 📦 安装

你只需执行如下指令，便可在你的 React 应用中使用 Vanilla Design：

```bash
npm install vanilla-design
```


## 🔨 快速上手

Vanilla Design 致力于为开发者提供优越的开发体验。你可以以极小的成本接入 Vanilla Design。

### 使用 Vanilla Design

首先，我们需要在应用的最外层引入 Vanilla Design 的样式：

``` tsx
import "vanilla-design/styles.css";
```

接下来，我们便可以愉快地使用 Vanilla Design 提供的所有组件了：

``` tsx
import { div } from "vanilla-design";

import "vanilla-design/styles.css";


function App(){

  return <div>Awesome Vanilla Design!</div>
}
```

什么？你觉得这不够 React？没关系，我们已经充分考虑到了开发者的习惯。Vanilla Design 提供了另一种引入组件的方式：

``` tsx
import { Div } from "vanilla-design";

import "vanilla-design/styles.css";


function App(){

  return <Div>Awesome Vanilla Design!</Div>
}
```

wow，这很 React。

### 按需加载

作为一个高性能的组件库，按需加载是必不可少的。不同于其他 UI 库，Vanilla Design 已经把按需加载做到极致：

#### css 按需加载

如果你的领导不检查代码量，你可以完全省略引入样式: 

```tsx
import { Div } from "vanilla-design";

// import "vanilla-design/styles.css"; 直接注释掉这一行即可


function App(){

  return <Div>Awesome Vanilla Design!</Div>
}
```

#### 组件按需加载

同样地，如果你以小写方式使用 Vanilla Design，你甚至不需要做任何引入，你的代码可以被简化为：

``` tsx
// import { Div } from "vanilla-design"; 直接注释掉这一行即可

// import "vanilla-design/styles.css"; 直接注释掉这一行即可


function App(){

  return <div>Awesome Vanilla Design!</div>
}
```

这是不是很酷呢？


## ❤️ 谁在使用？

尽管大多数公司都没有声明，但它们都使用了 Vanilla Design，或基于 Vanilla Design 定制化组件库：

```
Facebook  Google  YouTube  Yahoo  Wikipedia  Windows  Twitter  Amazon  LinkedIn  MSN
eBay  Microsoft  Apple  Pinterest  PayPal  Reddit  Netflix  Stack Overflow ...
```
这些公司通常会将 Vanilla Design 和 [Vanilla JS](http://vanilla-js.com/) 一起使用，从而大大提升开发效率。


## 🕛 何时使用？

很多场景下，使用 Vanilla Design 都是一种极佳的选择：
- 💡 你的老板非要让你使用 UI 库，并且在不同的 UI 库之间挑三拣四、指点江山时；
- 💡 你的老板菜的一批，只会检查代码量时；
- 💡 你的同事和你争论谁是最好的 UI 库，并且说其他库是垃圾时；
- 💡 你看到有人又在造组件库的轮子时；
- 💡 ……

你也可以在 [这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element) 获取到关于 Vanilla Design 的更多信息。
