---
id: apply-call-bind
title: apply v.s. call v.s. bind
keywords:
  - javascript
  - apply
  - bind
  - call
---

當函式被執行時，JS 會建立執行環境，並創建 this(函式的接收者)，有時候可能會需要自訂接收者，而 apply 、call 和 bind 是讓我們可以`自行設定 this 的內建方法`

### apply()

接受參數陣列(或類陣列物件)，並把陣列中每個元素作為個別參數來呼叫函式

```javascript
func.apply(this, [argsArray]);
```

#### 說明

- 第一個參數：指定 this 物件。倘若為 null 或 undefined，在非嚴格模式下其代表 global object，嚴格模式下為 undefined
- 第二個以後的參數：要帶入的參數陣列(或類陣列)
- 直接執行，回傳函式執行後的結果

案例：

```javascript
const numbers = [1, 3, 4];
console.log(Math.max.apply(null, [1, 3, 4])); //4
// 參數為類陣列
console.log(Math.max.apply(null, new Array(1, 3, 4))); //4
```

> [apply@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### call()

使用 this 參數以及分別給定的參數來呼叫某個函式

```javascript
fun.call(this, arg1, arg2, ...)
```

案例：

```javascript
const numbers = [1, 3, 4];
console.log(Math.max.call(null, ...numbers)); //4
```

#### 說明

- 第一個參數：指定 this 對象
- 第二個以後的參數：要帶入的參數
- 直接執行，回傳函式執行後的結果

### call 和 apply 的使用情境

**1. 自訂接收者呼叫函式**

```javascript
let car = {
  registrationNumber: "GA12345",
  brand: "Toyota",
};
//全域函式
function displayDetails(owner) {
  console.log(this.registrationNumber, this.brand, owner);
}
//使用 apply 讓 car 物件呼叫 displayDetails 函式
displayDetails.apply(car, ["Kira"]); // GA12345 Toyota Kira

//使用 call 也可以做到同樣的事情，僅參數形式不同
displayDetails.call(car, "Kira"); // GA12345 Toyota Kira
```

**2. 使用 apply 將兩陣列合併**

合併陣列有許多方法，push 方法可將陣列元素一個一個加入 ; concat 也可以用來合併陣列，但會創建新的陣列。倘若想要把陣列直接合併至舊陣列，apply 可以做到。

```javascript
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

---

### bind()

透過已建立的函式 func 創建新的函式 boundFunc ，並將 this 綁定到指定物件上

```
let boundFunc = func.bind(this, arg1, arg2...)
```

#### 說明

- 第一個參數：指定 this 物件
- 第二個以後的參數：要帶入的參數
- 回傳綁定 this 後的函式，一但被綁定，其 this 無法再被修改

### bind 的使用情境

**1. 借用某物件中的方法**

```javascript
// displayDetails 是 car 物件的方法
let car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function (owner) {
    console.log(this.registrationNumber, this.brand, owner);
  },
};
//可以很簡單的呼叫 car 的 displayDetails方法
car.displayDetails("Kira"); // GA12345 Toyota Kira
```

但如果想要借用 displayDetails 方法怎麼辦？ 這時候就可以使用 bind

```javascript
//沒有作用，因為此時 this 指向 global
let myCarDetails = car.displayDetails;
myCarDetails("Kira"); //undefined undefined Kira

//使用 bind 創建一個新函式並指定 this
let myCarDetails2 = car.displayDetails.bind(car, "Kira");
myCarDetails2(); // GA12345 Toyota Kira
```

**2. 函式柯里化**

簡單來說，科里化就是一個「將接收 n 個參數的函式拆解為一連串 n 個只接受一個參數的函式」(Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument)的過程。

```javascript
// 原本函式
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// 柯里化後
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(1)(2));
```

bind 可以用來建立柯里化函式，利用 bind 加上閉包製作出可複用的函式

```javascript
function add(a, b) {
  return a + b;
}
// 建立add10函式，指定自己(add函式)為this，並帶入10這個參數
let add10 = add.bind(this, 10);
```

10 這個參數將是 add10 函式的永久參數值，鎖在 add10 閉包內，就如同：

```javascript
function add(a, b) {
  let a = 10;
  return a + b;
}
```

柯里化後就可以寫成下面，且延伸製作自己需要的函式

```javascript
let add10 = add.bind(this, 10);
console.log(add10(5)); //15

let add2 = add.bind(this, 2);
console.log(add2(5)); //7
```
