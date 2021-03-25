---
id: address-tag
title: <address> 標籤
keywords:
  - html5
  - address
---

### address 標籤定義

> [HTML Standard 定義](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)
>
> The address element represents the `contact information` for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.

> [MDN 定義](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
>
> The HTML address element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

**說明**

- address 標籤用於表示聯絡資訊，可為個人或組織
- 若 address 位於 body 內則代表此聯絡資訊適用全站
- address 標籤內可包含任何類型的聯絡資訊，包括：地址、email、電話、社群帳號、地理座標等，以及該人或組織的名字
- address 預設為 block 元素，裡面的文字預設樣式為斜體`<i>`和粗體`<em>`

### 適用情境

1. 頁尾的聯絡資訊

```html
<footer>
  <address>
    For more details, contact
    <a href="mailto:js@example.com">John Smith</a>.
  </address>
  <p><small>© copyright 2021 Example Corp.</small></p>
</footer>
```

2. 文章作者的聯絡資訊

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### 錯誤使用情境

1. address 不能作為地址使用，除非這個地址是聯絡資訊的一部分(p 標籤通常是表示地址的合適元素)

2. address 不能包含聯絡資訊外的資訊，例如最後修改日期

```html
<address>Last Modified: 1999/12/24 23:37:50</address>
```

### 參考資料

1. [address @WHATWG](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)
2. [address @MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
