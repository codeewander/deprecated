---
id: leetcode704
title: LeetCode 704. Binary Search
keywords:
  - Algorithm
  - Binary Search
---

### 題目

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

Example 1:

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

Example 2:

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

**Constraints:**

- 1 <= nums.length <= 104
- -9999 <= nums[i], target <= 9999
- All the integers in nums are unique.
- nums is sorted in an ascending order.

### 說明

給定一個裝有整數的陣列(陣列元素升冪排列)和目標值，創建一個函式搜尋該目標值，若存在則回傳 index，反之，則回傳 -1

### 思路

1. 由於元素數字介於正負 9999 間，因此，在計算中間數時不用擔心頭尾相加超過 Number.MAX_SAFE_INTEGER 的問題

### 解法

```javascript
var search = function (nums, target) {
  let head = 0;
  let end = nums.length - 1;

  while (head <= end) {
    const mid = Math.floor((head + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      head = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
```
