---
id: queue
title: 佇列(Queue)
keywords:
  - Algorithm
  - Queue
---

## 概念

![](https://i.imgur.com/sfiqRM9.png)

- 【概念】First-In-First-Out 先進先出
- 【用途】多個城市的排程(schedule)
- 【情境】排隊買票，先到的人先買完離開

## 時間複雜度

- 遍歷：O(n)
- Pop: O(1)
- Push: O(1)
- Peek: O(1)

## 實作 Queue

屬性方法：

- `enqueue`：尾端新增一個元素
- `dequeue` ：刪除頭部第一個元素
- `front`: 查看佇列第一個元素
- `isEmpty`：判斷佇列是否為空
- `clear`: 移除佇列的所有元素
- `size`: 回傳佇列內的元素個數，也就是資料長度

使用`陣列`實作 Queue

```javascript
class Queue {
  constructor() {
    this.items = []; //使用陣列儲存 Queue 的元素
  }

  enqueue(element) {
    this.item.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
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
const queue = new Queue();
```
