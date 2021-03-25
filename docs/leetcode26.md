---
id: leetcode26
title: LeetCode 26. Remove Duplicates From Sorted Array
keywords:
  - Algorithm
  - Two Pointers
---

### 題目

> Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
>
> Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
```

Example 2:

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
```

Constraints:

- 0 <= nums.length <= 3 \* 10^4
- -10^4 <= nums[i] <= 10^4
- `nums` is sorted in ascending order.

### 思考

1. 題目要求把陣列中重複的數字移掉，並計算移掉之後的陣列長度，且要求不允許創建新陣列
2. 陣列長度小於 30000，且元素皆為介於 -10000 至 10000 間的數字
3. 陣列已按照升冪排序

### 解法

#### 1. Two Pointers => 同向

- 定義兩個指針 i 和 j 位置分別為索引值 0 和 1
- 遍歷陣列，j 往陣列尾部移動，當 i 和 j 值不同時，i 往後移動一位置，且其值等於 j 值
- 終止條件：j 抵達陣列尾部

```javascript
var removeDuplicates = function (nums) {
  //空陣列則回傳0
  if (nums.length === 0) return 0;
  //定義 i 位置為 index 0， j 位置為 index 1
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    //當 i 和 j 值不同，表示為不重複數字，j往後移，把不重複的值放到i位置
    if (nums[i] !== nums[j]) {
      j++;
      nums[i]] = nums[j];
    }
  }
  //最後回傳長度為 i 所在位置 + 1 (i及i的左側皆為不重複數字)
  return i + 1;
};
```
