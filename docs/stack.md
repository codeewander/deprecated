---
id: stack
title: 堆疊(Stack)
keywords:
  - Algorithm
  - Stack
---

## 概念

![](https://i.imgur.com/Hrlu1p2.png)

- 【概念】Last-In-First-Out 後進先出
- 【用途】紀錄之前的狀態，只能取得 Stack 最尾端的資料，無法使用 index
- 【情境】瀏覽器回到「上一頁」

## 時間複雜度

- 遍歷：O(n)
- Pop: O(1)
- Push: O(1)
- Peek: O(1)

## 實作 Stack

屬性方法：

- `push`：存放資料至頂端，回傳新的堆疊
- `pop` ：刪除頂端資料，並回傳新的堆疊
- `isEmpty`：判斷堆疊是否為空
- `peek`: 查看堆疊最頂端的資料
- `clear`: 移除堆疊的所有元素
- `size`: 回傳堆疊內的元素個數，也就是資料長度

使用`陣列`實作 Stack

```javascript
class Stack {
  constructor() {
    this.items = []; //使用陣列儲存 Stack 的元素
  }

  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
}

//建立實體
const stack1 = new Stack();
```

#### 相關 LeetCode 題目

- [LeetCode 739. Daily Temperatures](leetcode739.md)
- LeetCode 735. Asteroid Collision
- LeetCode 20. Valid Parentheses
- LeetCode 496. Next Greater Element I
