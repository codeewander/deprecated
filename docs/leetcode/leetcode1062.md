---
id: leetcode1062
title: LeetCode 1062. Longest Repeating Substring
keywords:
  - Algorithm
  - Binary Search
---

### 題目

> Given a string S, find out the length of the longest repeating substring(s). Return 0 if no repeating substring exists.

Example 1:

```
Input: "abcd"
Output: 0
Explanation: There is no repeating substring.
```

Example 2:

```
Input: "abbaba"
Output: 2
Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
```

Example 3:

```
Input: "aabcaabdaab"
Output: 3
Explanation: The longest repeating substring is "aab", which occurs 3 times.

```

Example 4:

```
Input: "aaaaa"
Output: 4
Explanation: The longest repeating substring is "aaaa", which occurs twice.
```

Constraints:

1. The string S consists of only lowercase English letters from 'a' - 'z'.
2. 1 <= S.length <= 1500

### 思考

- 最長的 substring 長度值為一有範圍的區間 0 至 n-1，例如：字串長度為 4 的最長 substring 長度為 3

### 解法

1. Binary Search

- 假設 mid 值為答案(最長的 substring 長度)
- 將 mid 丟入驗證函式 verifyLengthOfLRS，回傳 boolean
- 倘若為 true ，則該長度為可能解

```javascript
function longestRepeatingSubstring(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let mid = Math.floor(l + (r - l + 1) / 2);
    //驗證最長的substring長度是否正確
    if (verifyLengthOfLRS(s, mid)) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
}

//判斷 mid 是否為 substring 合理長度
function verifyLengthOfLRS(s, mid) {
  let arr = [];
  for (let i = 0; i <= s.length - mid; i++) {
    //擷取該特定長度的字串
    let j = i + mid - 1;
    let sub = s.substring(i, j + 1);
    //倘若陣列中含有該字串(即有重複)，則回傳 true
    if (arr.includes(sub)) {
      return true;
    }
    arr.push(sub);
  }
  return false;
}
```
