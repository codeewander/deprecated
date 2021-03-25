---
id: leetcode739
title: LeetCode 739. Daily Temperatures
keywords:
  - Algorithm
  - Stack
---

### 題目

> Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
> For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
> Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

輸入一個紀錄溫度的陣列`T = [73, 74, 75, 71, 69, 72, 76, 73]`，求陣列中下次比它高的溫度後紀錄在另外一個陣列中。例如 T[0]=73，下一個比 73 高的溫度為 74，經過了 1 天，於是將 1 放入另一個陣列，以此類推，輸出為 `[1, 1, 4, 2, 1, 1, 0, 0]`，

### 思考

- 針對 arr[i] 找到比它溫度高的下一個元素的距離

### 解法

1. Stack

   將第 x 天溫度的 x 值 push 至 Stack。當 Stack 不為空時，檢查是否第 y 天的溫度有高於目前 Stack 最上方對應的溫度，如果有則可算出 y - x 為第 x 天的答案；如果沒有高於 Stack 最上方的溫度則換下一天。

```javascript
function dailyTemperatures(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(0);
  let stack = [];
  stack.push(0);
  for (let i = 1; i < n; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      ans[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  return ans;
}
```

參考資料：
[[LeetCode] 739. Daily Temperatures](https://medium.com/@authentic_pumpkin_jackal_935)
[739. 每日温度【单调栈】详解！](https://leetcode-cn.com/problems/daily-temperatures/solution/739-mei-ri-wen-du-dan-diao-zhan-xiang-ji-8kl5/)
