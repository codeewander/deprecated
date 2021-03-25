---
id: js-keywords
title: JS keywords
---

## Scope 作用域

> Scope is the accessibility of variables. Outside of its scope, the variable is inaccessible. JS have two lexical scopes : global and function

- 變數在程式中可被存取的範圍，可分為`區域變數`和`全域變數`

![](https://i.imgur.com/9HKJxtN.png)

舉例來說，上圖中變數 a 為 global scope，而 x, b 和 bar 的 scope 則是 function foo，c,y 的 scope 為 function bar。

[更多關於 Scope 整理](js-scope.md)

## Hoisting 提升

> JavaScript’s default behavior of moving declarations to the top.

```javascript
var a = 0;
function a() {}
a(); // Uncaught TypeError: a is not a function
```

```javascript
// 實際上
function a() {} //function 先提升
var a = undefined;
a = 0;
a();
```

#### 延伸問題: 那 let 跟 const 有 hoisting 嗎？

> All declarations are “hoisted”, the difference between var/function declarations and let/const/class declarations is the initialization.

還是有 hoisting ，只是初始化行為跟 var 不同

- var: 變數會被初始化為 undefined
- let , const : 不會先被初始化所以在賦值之前的 Temporal Dead Zone(TDZ, 時間死區) 取值會發生錯誤。

相關閱讀：
[我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)

## Prototype 原型

> A prototype is an object that can inherit other object properties.
> Every JavaScript object has a prototype. All JavaScript objects inherit their properties and methods from their prototype.

透過「原型」繼承可以讓本來沒有某個屬性的物件去存取其他物件的屬性。

![](https://i.imgur.com/zpF3LW1.png)

## this

> Depends on how the function is called. the JavaScript this keyword refers to the object it belongs to.

> 每一個 function 在被執行的時候都會有一個 reference 指向所屬的環境，這就是 this，有四種函數調用方法

- In normal function calls 一般呼叫涵式: this refers to the global object.
- Within methods on objects 方法調用: this refers to the owner object.
- Within an object that has been constructed 建構函式調用: this refers to the object that has been constructed
- A function invoked with .call, .apply, or bind 隱式調用: can refer this to any object.

## Array 陣列

- 複數：多個
- 有順序性，可以放任何類型的資料，但建議最好放資料類型相似的一組資料
- 適合資料處理
- JS 是弱型別，可放不同型別，但強型別語言只放相同型別

> [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) @MDN

## Object 物件

- 單數(一個)
- 描述單體的屬性/方法集合（可能相關，可能不相關）
- key-value pair，key 為命名，value 為屬性/方法
- 化抽象為具體
- 與類別 Class 的差異：

舉例：狗是 class，一隻狗是 object
創造一個水壺，會將水壺屬性資料抽項出來成 class，class 可以實例化(建構)成 object。
一個 class 可以創造多個 object

## JSON

- 資料型別：String
- 功能：資料交換的格式
- 輕便(與之前的 XML 格式比較)、傳 API、紀錄資料
- JSON.parse(): 丟 json(String) 吐出 Object
- JSON.stringify(): 丟 Object 吐出 json(String)

> [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) @MDN

## Callback

- 是一個 function
- 把 function 當做參數傳入另一個 function，這個 function 參數就是 callback
- 需要等待某個 function 執行完才會執行的 function
- 依序執行、有順序性
- 異步常使用 callback

## Function 函式

- 一段可重複使用的程式碼，可當參數、也可接受參數，不同參數可能會有不同結果
- 一連串的指令給個名字，有助語意化
- 特性：
  1. 私有的命名環境 function scope
  2. 表現「動作」
  3. 可作為建構式、一般用法
  4. 執行結束後不留痕跡(除非有 return)

兩種 function 撰寫方式：

1. function expression(具名函式，類似環保筷，重複使用)
2. function statement（匿名函式，類似免洗筷，一次使用）

> [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function) @MDN

## Asynchronous 非同步

- 目的：防止阻塞，不等待
- 由瀏覽器協助，等待執行環境的通知執行
- 因應 js 特性(單執行緒)而把需要等待的事情丟到排隊佇列，等待 js 內部檢查機制重新拉回來，達到不阻塞
- 會放到事件佇列的 function
  舉例：點餐排隊：一人猶豫要點什麼，於是請他在旁邊等待，瀏覽器(協助)通知，之後再插入排隊隊伍

> [Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) @MDN

## Closure 閉包

> Closure is when a function “remembers” its lexical scope even when the function is executed outside that lexical scope

- 閉包是捕捉了外部函式變數（或使之繼續存活）的函式，它包含了一個函式，以及函式被建立時所在的環境
- 在 function 產生的當下記住語彙環境，在執行環境消失後仍可使用
- 目的：避免全域污染，讓 function 能夠有 private 變數(ES6 可使用 let)
- 用程式碼來解釋閉包：

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

var inner = outer();
inner(); //10
```

當 outer 函式執行結束，照理說變數 a 的記憶體空間應該會被釋放，但呼叫 inner 函式時仍然存取的到 a，換句話說，a 變數被關在 inner 函式中，只要 inner 函式仍然存在 a 就會在。

- 利用閉包特性：可將變數隱藏在函數內外部無法存取

> [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) @MDN

## Array.prototype.map()

- 由 map 中的 callback 可自訂要對 array item 做的事情
- immutable method
- 遍歷 array 中的每一個值，執行一個方法，並回傳一個跟原陣列長度相同的新陣列，不影響原來的 array
- 所有輸出都和輸入有關(一對一映射)

> [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) @MDN

## Loop

-重複做一件事直到不合條件 -在特定的條件下執行重複的程式碼

```js
for  //知道次數
do...while //不知道次數，至少1次
while //不知道次數
```

> [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) @ MDN

## Switch

- 由上而下進行條件(強制 === )判斷，符合後執行直到 break 才停止
- 多條件判斷
- if...else 的一種特例
- 用法：

```js
//example 1
let d = new Date().getDay();
switch (d) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
    Default: console.log("It is not weekend");
}
//example 2

let n = 7;
switch (true) {
  case n < 0:
    console.log("n<0");
    break;
  case n < 5:
    console.log("0<=n<5");
    break;
  default:
    console.log("n>=5");
}
```

> [Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) @MDN

## iterate 迭代

- 一個移到下一個
