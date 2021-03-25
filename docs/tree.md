---
id: tree
title: 樹狀結構 (Tree)
keywords:
  - Algorithm
  - Tree
---

## 樹狀結構

樹由一個或以上的節點（Node）組成，最頂部的節點稱為樹根（Root），樹的節點可以互相連結但不能有迴圈。

## 相關名詞

![](https://i.imgur.com/bRhrJVh.png)

- 樹根(Root): 最上層的節點，唯一一個沒有父節點的節點
- 分支度（Degree）：每個節點有多少個子節點。
  - F 的分支度為 2，A 的分支度為 0。
- 階層（Level）：樹的層級，通常樹根所在的那一層為第一層。
  - F 為 Level 1，C 則為 Level 3。
- 高度（Height）：樹的最大階層數。
  - 此樹之高度為 4
- 父節點（Parent）：每個節點有連結的上一層父節點，每個 Node 只有一個以內的父節點。
  - B 之父節點為 F
  - C 之父節點為 D
- 子節點（Children）：每個節點有連結的下一層節點，每個 Node 的子節點不一定相同。
  - D 有 C、E 兩個 children
- 祖先(ancestor)和子孫(descendant)：祖先為樹根到該點前所有的節點，子孫為該節點往下的子樹中的任一節點。
  - H 的祖先有 I、G、F
  - 除了 F 外的所有點皆是 F 的子孫
- 兄弟節點(siblings)：具有同一個父親的子節點
  - C 和 E、A 和 D

## 集合關係

![](https://i.imgur.com/sSe6pZG.png)
