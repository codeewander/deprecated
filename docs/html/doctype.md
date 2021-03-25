---
id: doctype
title: DOCTYPE
keywords:
  - HTML5
  - DOCTYPE
---

DOCTYPE 為 document type (檔案類別)的縮寫。Doctype 是一種宣告，而非「標籤」，所有的 HTML 檔案都需要 DOCTYPE，透過 DOCTYPE 告知瀏覽器使用的 HTML/XHTML 版本以及瀏覽器要用哪一種解析方法。

HTML5 的 DOCTYPE 宣告如下：

```html
<!DOCTYPE html>
```

瀏覽器的排版引擎有三種解析方式：

1. 怪異模式（Quirks mode）
   模擬 Navigator 4 和 IE 5 中的非標準行為
2. 接近標準模式（Almost standards mode）
3. 標準模式（Standards mode）

> Q: 倘若 HTML 沒有宣告 DOCTYPE 會發生什麼事？

瀏覽器會預設使用 Quirks mode(怪異模式)進行解析，使得瀏覽器無法在 Standards mode (標準模式)下顯示正確的 CSS 效果

參考資料：

- [DOCTYPE@MDN](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
