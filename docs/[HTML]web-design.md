---
id: web-design
title: 切版觀念
---

## HTML5 語意化標籤

```
<header>  頁首
<nav>     導航欄(連結換頁)
<main>    主要區塊
<article> 文章區塊
<section> 區塊
<aside>   側欄
<footer>  頁尾
<time>    時間
<mark>    強調內容
<figure>  圖像
<figcaption> 圖像標題
<cite>    引用其他文獻
```

## 排版原則

- 單一職責原則（Single responsibility principle）：每層標籤/類別應該只負責單一功能/作用
- 格線系統(Grid system)
  - container: 容器，固定寬度使用
  - row,col: 流動排版，row 用於群組，column 一定在 row 內
- Margin v.s Padding
  - margin : 元件和元件間，注意 margin 塌陷
  - padding : 元件內部
