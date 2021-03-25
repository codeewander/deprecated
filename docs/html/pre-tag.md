---
id: pre-tag
title: <pre> 標籤
keywords:
  - html5
  - pre
---

> [MDN 定義](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
>
> The HTML pre element represents `preformatted text` which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional ("monospace") font. Whitespace inside this element is displayed as written.

- pre 標籤呈現了保留格式的文字，包括斷行、空白字元、tab 等
- 預設呈現字體為「等寬字體」

```
<pre> Contents... </pre>
```

### 適用情境

**1. 呈現使用者在 textarea 輸入的段落文字**

在網頁開發過程中，有時候會遇到使用者填表單時輸入多段文字的狀況，而後送出資料前會讓使用者預覽該段文字。文字輸入框常會使用 `<textarea>` 讓使用者編輯多個段落，若需要完整顯示使用者輸入的內容，這時候就需要用到 pre 標籤。

**2. 搭配 code 標籤**

可以呈現易閱讀的程式碼格式

```html
<pre>
    <code>
        function test(a,b) {
            return a + b    
        }
    </code>
</pre>
```

**3. 現代詩**

現代詩的空白和斷行有其意義，呈現須保留

```
<pre>                maxling

it is with a          heart
               heavy

that i admit loss of a feline
        so           loved

a friend lost to the
        unknown
                                (night)

~cdr 11dec07</pre>
```

### pre 標籤 v.s. white-space 屬性

`<pre>` 標籤可以完整呈現文字格式及內容，包含換行符號、空格等

舉例來說：同樣一段文字使用 pre 標籤和 p 標籤呈現的結果大不相同

![](https://i.imgur.com/8JX2Mdf.png)

p 標籤會自動移除換行，並將連續的空白合併，而 pre 標籤則能夠完整保留所有格式。

這其中的關鍵在於 `white-space` 屬性

### white-space 屬性

white-space 屬性([white-space@MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space))會決定文字段落的空白字元該如何呈現，有以下幾種選項：

**1. normal**

連續的空白會被合併，換行字元視為空白，文字超過容器時會自動換行

**2. nowrap**

連續的空白會被合併，換行字元視為空白，但文字超過容器不換行

**3. pre**

連續的空白會被保留，文字超過容器不換行，只有遇到換行符號時會換行

**4. pre-wrap**

連續的空白會被保留，遇到換行符號或文字超過容器時會自動換行

**5. pre-line**

連續的空白字元會被合併，遇到換行符號或文字超過容器時會自動換行

**6. break-space**

基本上同 pre-wrap，然而其保留的空白會佔用空間，甚至是會換行

> pre-wrap 和 break space 的差異可參考此[案例](https://stackoverflow.com/questions/64699828/css-property-white-space-example-for-break-spaces)

整理不同屬性的差異：

![](https://i.imgur.com/5M2Rg0i.png)

### 用 white-space 屬性理解 p 和 pre 標籤

p 標籤的 white-space 預設為 normal ，因此，所有的換行字符被視作空白，且連續的空白會被合併，而 pre 標籤 的 white-space 預設為 pre ，因此空白、換行都能夠完整呈現。

由此可推斷修改 p 標籤的 white-space 屬性，就能夠擁有跟 pre 標籤一樣可以保留斷行和空白。

然而實際測試之後，發現畫面呈現上仍然有一點差異，原因是 pre 標籤預設使用等寬字體，倘若兩者設定為同一字體則視覺上就一致了。

參考資料：

- [WHATWG Spec](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element)
- [white-space@MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
- [pre: The Preformatted Text element@MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
