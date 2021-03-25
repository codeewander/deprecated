---
id: binary-search
title: Binary Search
keywords:
  - Algorithm
  - Binary Search
---

## 概念

- 【用途】針對已排序好的序列中進行搜尋
- 【實作】變數: 左邊值(l), 右邊值(r), 中間值(mid)
- 【原則】
  1. 每次都要縮減搜尋範圍
  2. 每次縮減不能排除可能答案
- 【時間複雜度】 O(logN)
- 【舉例】終極密碼遊戲

## 演算法實作

目標：透過 binary search 在一個陣列中找出目標元素（target）

> 記得在使用 binary search 前要先將陣列元素進行升冪排序`

```javascript
function binarySearch(numberArr, target) {
  // 取得陣列中間的索引值
  let headIndex = 0;
  let lastIndex = numberArr.length - 1;
  let middleIndex = Math.floor((headIndex + lastIndex + 1) / 2);

  // 如果找到就回傳 true
  if (numberArr[middleIndex] === target) {
    return true;
  }

  // 如果沒找到，而且陣列只剩一個元素，表示找不到回傳 false
  if (numberArr.length === 1) {
    return false;
  }

  // 如果沒找到，且 target 大於中間的數值，則取後半段的陣列再搜尋
  if (target > numberArr[middleIndex]) {
    return binarySearch(numberArr.slice(middleIndex, numberArr.length), target);
    // 如果 target 小於中間的數值，則取前半段的陣列再搜尋
  } else if (target < numberArr[middleIndex]) {
    return binarySearch(numberArr.slice(0, middleIndex), target);
  }
}
```

## LeetCode 相關題目

[LeetCode 704. Binary Search(easy)](../leetcode/leetcode704.md)
[LeetCode 1062. Reverse String(medium)](../leetcode/leetcode1062.md)
