---
id: js-for
title: JS 遍歷方法 - for loop
---

本篇文章主要比較 for loop、for...in、for...of、forEach 的使用情境與差別。

## 遍歷物件操作

語法：

```javascript
//for loop
//([初始值]; [決定是否繼續循環的條件式]; [每次循環執行的表達式]) {}
for (let index = 0; index < array.length; index += 1) {}
//for in
for (const key in object) {
}
//for of
for (const interator of object) {
}
//forEach
array.forEach((item, index, array) => {});
```

```javascript
const list = ["a", "b", "c"];
const obj = {
  name: "Kira",
  gender: "female",
};
```

### for loop

- 作用對象：陣列
- 遍歷對象：無

```javascript
// 遍歷陣列
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // a b c
}
```

### for... in

- 作用對象：陣列、物件
- 遍歷對象：鍵(key)

```javascript
//遍歷陣列
for (const key in list) {
  console.log(key); // 0 1 2
}
//遍歷物件
for (const key in obj) {
  console.log(obj[key]); // Kira female
}
```

### for... of

- 作用對象：陣列
- 遍歷對象：值(value)

```javascript
//遍歷陣列
for (const value of list) {
  console.log(value); // a b c
}
//遍歷物件：報錯
for (const value of obj) {
  console.log(value); // Uncaught TypeError: obj is not iterable
}
//若要遍歷一般物件，可搭配Object.values
for (const value of Object.values(obj)) {
  console.log(value); //Kira female
}
//若要遍歷一般物件，可搭配Object.entries
for (const [key, value] of Object.entries(obj)) {
  console.log(key); // name gender
  console.log(value); // Kira female
}
```

## forEach

- 作用對象：陣列
- 遍歷對象：鍵(key)、值(value)、陣列(array)

```javascript
//遍歷陣列
list.forEach((item, index, array) => {
  console.log(item); // a b c
  console.log(index); // 0 1 2
});
//若要遍歷一般物件，可搭配Object.entries
Object.entries(obj).forEach((item) => {
  let [key, value] = item;
  console.log(key); // name gender
  console.log(value); // Kira female
});
```

## 比較：是否遍歷自定義屬性和原型鏈上的屬性

會：for...in
不會：for...of, forEach, for loop

```javascript
//在陣列的原型上加上屬性newType
Array.prototype.newType = "newValue";

//for loop
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // a b c
}

//for...in會遍歷自定義屬性和原型鏈上的屬性
for (const key in list) {
  console.log(key); // 0 1 2 newType
}

// for of
for (const value of list) {
  console.log(value); // a b c
}

// forEach
list.forEach((item) => {
  console.log(item); // a b c
});
```

由此可知，使用 for...in 時，會連同原型鏈上的屬性也一起遍歷，其他 3 種則不會。因此，遍歷陣列時應該避免使用 for...in。

## 比較：是否可中斷迴圈

可中斷：for...of, for...in, for loop
不可中斷：forEach

```javascript
const list = ["a", "b", "c"];

//for loop
for (let i = 0; i < list.length; i++) {
  if (list[i] === "b") {
    break;
  }
  console.log(i); //0
}

//for...in
for (const key in list) {
  if (list[key] === "b") {
    break;
  }
  console.log(key); //0
}

//for...of
for (const value of list) {
  if (value === "b") {
    break;
  }
  console.log(value); //a
}

//forEach: 無法中斷迴圈
arr.forEach((item) => {
  if (item === "b") {
    break;
  }
  console.log(index); // SyntaxError: Illegal break statement
});
```

forEach 使用 break 會發生錯誤，如果有中斷迴圈需求，需使用 for loop、for...in、for...of 方法
