---
title: React Lifecycle 生命週期
id: react-lifecycle
---

## 生命週期是什麼？

指元件的生老病死。 class component 裡面有許多內建函式，分別對應元件從準備、渲染到頁面、狀態更新後重新渲染、從頁面上移除前等各個階段，就是所謂的生命週期。這些函式可以讓元件在某些特定時刻執行需要的函式，例如：渲染元件後去非同步抓資料等

## 生命週期的三個階段 - Mounting、Updating、Unmounting

### 1.Mounting 階段：元件創建

當元件被建立且加入 DOM tree 中時，其生命週期將會依照下列的順序呼叫這些方法：

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

### 2. Updating 階段： 元件更新

當 prop 或 state 有變化時，就會產生狀態更新。當一個 component 處於更新階段，其生命週期將會依照下列的順序呼叫這些方法：

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

### 3. Unmounting 階段：元件被移除

當一個元件被從 DOM 中移除時，以下方法將會被呼叫：

- componentWillUnmount()
