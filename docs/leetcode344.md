---
id: leetcode344
title: LeetCode 344. Reverse String
keywords:
  - Algorithm
  - Two Pointers
---

### 題目

> Write a function that reverses a string. The input string is given as an array of characters char[].
>
> Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
>
> You may assume all the characters consist of printable ascii characters.

Example 1:

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

Example 2:

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### 思考

1. 題目要求反轉元素，但不能新增另個陣列，只能修改原陣列。陣列元素都是 ASCII 可印出的字符
2. 直覺想到的解法是將陣列元素合併成字串，再由後往前遍歷字串回傳原陣列
3. 陣列可使用 Two Pointer 分別指向陣列頭部和尾部，兩者的值交換，直到抵達中間值為止

### 解法

#### 1. 字串反轉

- 將陣列元素合併成字串
- 從字串尾部開始遍歷，回傳至原陣列

```javascript
var reverseString = function (s) {
  //判斷陣列是否為空
  if (s.length === 0) return s;
  //定義空字串
  let str = "";
  //陣列元素合併為字串
  for (let x of s) {
    str = str + x;
  }
  //從字串尾部遍歷並將值輸出原陣列
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    s[j] = str[i];
  }
  //回傳原陣列
  return s;
};
```

#### 2. Two Pointers

- 定義兩個指針，分別指向陣列頭部和尾部
- 兩個指針指向的值互相交換直到中間值
- 終止條件：
  1. 如果為偶數，當頭指針 - 1 等於尾指針時終止
  2. 如果為基數，當頭指針等於尾指針時終止

```javascript
var reverseString = function (s) {
  //判斷陣列是否為空
  if (s.length === 0) return s;
  //定義兩個指針
  let i = 0;
  let j = s.length - 1;
  // 兩指針反向移動
  while (i < j) {
    // 兩個指針指向的值交換
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  // 回傳原陣列
  return s;
};
```
