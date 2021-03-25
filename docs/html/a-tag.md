---
id: a-tag
title: <a> 標籤
keywords:
  - html5
  - a
---

### a 標籤定義

> [MDN 定義](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
>
> The HTML a element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```html
<a href="https://example.com">Website</a>
<a href="mailto:m.bluth@example.com">Email</a>
<a href="tel:+123456789">Phone</a>
```

### 說明

- a 為 anchor(錨點)的縮寫， 帶有 href 屬性可創建一個超連結至網頁、檔案、email、地址等
- 倘若沒有 href 屬性，則不能有 target、download、ping、rel、hreflang、type 等屬性

```html
This website is all about <abbr title="HyperText Markup Language">HTML</abbr>.
```

### 標籤屬性

#### type

#### href

#### hreflang

#### rel

#### download: 下載 URL，並跳出視窗提示使用者儲存至本地

> download 只支援同源 URL 下載

#### target: 連結在哪裡開啟

- `_self`: 目前的視窗 (預設值)
- `_blank`: 新分頁
- `_parent`: 父層框架。若無父層則同\_self
- `_top`: 最上層視窗。若無上層則同\_self

> \_parent 和 \_top 的開啟行為：可參考[\_top 案例](https://www.tagindex.net/html/frame/example_t01.html) 和 [\_parent 案例](https://www.tagindex.net/html/frame/example_t03.html)

#### ping: 點擊連結時發送通知的列表

常用於追蹤點擊。當使用者點擊連結時，瀏覽器會發送簡短的 HTTP Post 請求至 ping 的 url

```
<a href="https://www.123.com" ping="https://www.456.com/trackpings">
```
