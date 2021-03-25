---
id: html-tags
title: HTML5 語意化標籤摘要
keywords:
  - html5
---

### 1. Section 區塊元素

```
<body>      文件內容
<article>   文章
<section>   區塊
<nav>       導航欄
<aside>     側欄
<h1> - <h6> 標題
<header>    頁首
<footer>    頁尾
<address>   聯絡資訊
<hgroup>    標題群組
```

> [address 標籤](./address-tag)

### 2. Grouping Content 群組內容元素

```
<p>           段落
<hr>          水平線
<pre>         保留格式的文字區塊
<blockquote>  引用
<figure>      圖像
<figcaption>  圖像標題
<menu>        選單
<main>        主要區塊
<div>         區塊
```

> [pre 標籤](./pre-tag)

### 3. 文字元素

```
<a>         連結
<em>        強調文字
<strong>    更為強烈的強調文字
<small>     小號字型
<s>         加刪除線文字
<cite>      引用參考文獻
<q>         短的引用
<dfn>       定義
<abbr>      縮寫
<ruby>      發音註解(和<rt><rp>搭配使用)
<time>      時間
<code>      程式碼
<var>       變數
<samp>      程式輸入文字
<kbd>       鍵盤文字
<sub>       下標文字
<sup>       上標文字
<i>         斜體
<b>         粗體
<u>         加下底線文字
<mark>      螢光底色文字
<bdi>       標籤內文字方向不受父層影響
<bdo>       覆蓋預設的文字方向
<span>      inline元素
<br>        換行
<wbr>       單字換行
<del>       被刪除文字
<ins>       被插入文字
```

### 4. 列表元素

```
<ol>  有序列表
<ul>  無序列表
<li>  列表項目
<dl>  自定義列表
<dt>  自定義列表項目
<dd>  自定義列表描述
```

---

### 5. 表格元素

```
<table>    表格
<thead>    表格頁首
<tbody>    表格主體
<tfoot>    表格頁尾
<caption>  標題
<th>       表頭
<tr>       行
<td>       單元格
```

### 6. 表單元素

```
<form>      表單
<input>     輸入框
<textarea>  輸入文字框(多行)
<label>     input 標籤文字
<fieldset>  表單區塊
<legend>    表單區塊的標題
<select>    選單
<option>    選單項目
<button>    按鈕
```

### 7. 嵌入元素

```
<img>        圖片
<source>     檔案來源
<picture>    根據不同情況獲取不同來源的圖片
<iframe>     內嵌網頁
<embed>      外嵌內容或套件
<object>     外嵌物件
<video>      影片
<audio>      音檔
<track>      字幕
<map>        影像地圖
<area>       可點擊的影像地圖區塊(僅能在 map 中使用)
<canvas>     繪布
<progress>   進度條
```

參考資料：

- [whatwg: HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#link-type-nofollow)
- [HTML5 標籤 cheat sheet](https://www.wpkube.com/html5-cheat-sheet/)
