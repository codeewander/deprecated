---
title: ES6箭頭函式 Arrow Function
id: js-arrow-function
---

## 箭頭函式的特性(與一般函式不同點）

- 匿名函式
- this 在創建時被綁定，apply、call、bind 無法改變 this
- 沒有 arguments
- 箭頭函式不能當作建構式

## Arrow Function 的優點

1. 簡潔的語法

   - 寫法為 () => {}
   - 參數只有一個時，可以省略小括號 ()
   - 省略大括號 {} 的話，代表直接 return 第一行程式碼
   - 如果有多行程式，需要加上大括號 {}

ES5 一般函式的寫法

```js
function timesTwo(params) {
  return params * 2;
}

timesTwo(4); //8
```

正常箭頭函式的寫法

```js
var timesTwo = (params) => {
  return params * 2;
};

timesTwo(4); //8
```

箭頭函式縮寫語法

```js
var timesTwo = (params) => params * 2;

timesTwo(4); //8
```

2. 在創建函式時綁定 this

箭頭函式跟一般函式很大的不同就是 this 。箭頭函數的 this 會依據函式在哪裡建立而決定，可以**取代舊有使用 self=this 或 .bind(this) 綁定 this 到指定物件**的情況。

直接來看程式碼

一般函式

```js
let obj = {
  id: 1,
  print: function () {
    console.log(this.id); //1

    setTimeout(function () {
      console.log(this.id); //undefined
    }, 1000);
  },
};
obj.print();
```

由於 setTimeout 執行的時間會是在整個 JS execution context 都被執行完後才會執行，因此 this 指向會是全域物件，兩者的 this 不一致。

常見的解決方法像是

1. 使用 self = this 或 that = this ，將 this 指向儲存成變數

```js
let obj = {
  id: 1,

  print: function () {
    let self = this;
    console.log(this.id); //1

    setTimeout(function () {
      console.log(self.id); //1
    }, 1000);
  },
};
obj.print();
```

2. 使用 bind、call 或 apply

```js
let obj = {
  id: 1,

  print: function () {
    console.log(this.id); //1

    setTimeout(
      function () {
        console.log(this.id); //1
      }.bind(this),
      1000
    );
  },
};
obj.print();
```

這時候，使用箭頭功能可以更乾淨地解決此問題

```js
let obj = {
  id: 1,

  print: function () {
    console.log(this.id); //1

    setTimeout(() => {
      console.log(this.id); //1
    }, 1000);
  },
};
obj.print();
```

## 什麼時候不適合使用 Arrow Function

1. 物件方法

```js
let obj = {
  id: 1,
  add: () => {
    this.id++;
  },
};

obj.add(); //undefined
```

此時箭頭函式中的 this 指向全域

2. 物件 prototype 屬性方法

```js
function MyCat(name) {
  this.catName = name;
}

MyCat.prototype.sayCatName = () => this.catName;

const cat = new MyCat("Kiki");

cat.sayCatName(); // undefined
```

同上的概念，此時箭頭函式中的 this 指向全域

3. 建構函式
   箭頭函式沒有 constructor，直接使用 new 時會拋出例外產生錯誤。

```js
const Message = (text) => {
  this.text = text;
};

const helloMessage = new Message("Hello World!"); //"TypeError: Message is not a constructor"
```

參考文章：

- [Why Are JavaScript Arrow Functions Useful?](https://medium.com/better-programming/why-javascript-arrow-functions-are-useful-aa023bad403a)(2020.02 updated)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- [[筆記] JavaScript ES6 中的箭頭函數（arrow function）及對 this 的影響](https://pjchender.blogspot.com/2017/01/es6-arrow-function.html)
