---
id: abbr-tag
title: <abbr> 標籤
keywords:
  - html5
  - abbr
---

### abbr 標籤定義

> [HTML Standard 定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)
>
> The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.

```html
This website is all about <abbr title="HyperText Markup Language">HTML</abbr>.
```

![](https://i.imgur.com/Sb5S2Kh.png)

當滑鼠 hover 至 abbr 標籤上面時，瀏覽器會預設使用 tooltip 呈現 title 屬性中的文字

** 說明 **

- abbr 為 Abbreviation 的縮寫
- abbr 標籤用於表示縮寫，title 屬性表示全文，標籤內文字呈現縮寫
- abbr 標籤預設為 inline 元素
- 每個 abbr 標籤皆是獨立的，不會自動將 title 加到同樣的縮寫文字上

### 適用情境

1. 和 dfn 標籤一起使用

用於定義特定名詞及縮寫

```html
<dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn>
```

2. 文件或頁面上首次出現該縮寫詞

可以幫助人們理解該名詞，對於不熟悉內容或名詞的人有幫助

參考資料：

- [abbr @MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
- [abbr @WHATWG](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)
