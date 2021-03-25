---
id: js-scope
title: Scope 作用域
keywords:
  - Scope
  - JavaScript
---

## 說明

變數的作用範圍

### 全域作用域(Global Scope)

1. 全域作用域在網頁打開時被創建，頁面關閉時被銷毀
2. 在全域中有 window 物件，代表一個瀏覽器窗口，由瀏覽器創建，可以直接調用
3. 全域中定義的變數和函式會作為 window 物件的屬性和方法保存

### 函式作用域(Function Scope)

1. 調用函式時，函式作用域被創建，函式執行完畢則函式作用域被銷毀
2. 每調用一次函式就會創建新的函式作用域，各個作用域彼此獨立

```javascript
function a() {
  console.log("a");
}
a(); //創建一作用域(獨立)
a(); //創建一作用域(獨立)
```

3. 函式作用域可以取得全域作用域的變數，函式外無法取得函式作用域內的變數
4. 函式作用域中讀取變數或函式時，會先在自身作用域查找，若找不到，會到上一層作用查找，一直到全域作用域(scope chain)

## 深入理解作用域

1. 當函式執行前(預編譯時期)，會先創建一個執行期上下文的內部物件 AO (此為作用域)
2. 當全域程式碼執行前也會創建一個執行期上下文物件 GO

### 補充：函式作用域預編譯

```javascript
function fn(a, c) {
  console.log(a); //func a
  var a = 123;
  console.log(a); //123
  console.log(c); //func c
  function a() {}
  if (false) {
    var d = 678;
  }
  console.log(d); //undefined
  console.log(b); //undefined
  var b = function e() {};
  console.log(b); //func e
  function c() {}
  console.log(c); //func c
}
fn(1, 2);
```

1. 創建 AO 物件

```javascript
AO{}
```

2. 找參數和變數聲明，並將之作為 AO 物件的的屬性名，值為 undefined

```javascript
AO{
  a:undefined
  c:undefined
  d:undefined
  b:undefined
}
```

3. 將傳入參數帶入值

```javascript
AO{
  a:undefined => 1
  c:undefined => 2
  d:undefined
  b:undefined
}
```

4. 找函式宣告，進行賦值

```javascript
AO{
  a:undefined => 1 => func a
  c:undefined => 2 => func c
  d:undefined
  b:undefined
}
```

相關閱讀：

- [Variable scope, closure](https://javascript.info/closure)
- [Lexical Scope](https://pulkitsinghal.gitbooks.io/advanced-javascript/content/scope.html)
- [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope/#4-module-scope)
- [你懂 JavaScript 嗎？#12 函式範疇與區塊範疇（Function vs Block Scope）](https://cythilya.github.io/2018/10/19/function-vs-block-scope/)
