---
id: noreferrer-noopener
title: 為什麼target="_blank"要加 rel="noreferrer noopener"？
keywords:
  - noopenner
  - norefferer
  - HTML
---

當點擊連結要另開視窗時，通常會使用 `<a target="_blank">` 的寫法，然而，若在 React 專案中使用 `ESLint` (react/jsx-no-target-blank rule)就會跳出警告建議在 a 標籤中加上 rel="noreferrer noopener"，這篇文章主要來探討這兩個屬性值的作用

### rel 的作用‘

rel 的意思是 relationship ，是用來`定義目前網站與連結網站/資源之間的關係`。常見的使用情境像是引入 CSS 的時候：

```html
<link rel="stylesheet" href="/custom.css" />
```

以上述例子來說，就是定義此連結為一份 stylesheet。

rel 可用的屬性值非常多，可參考 [MDN：HTML attribute: rel - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel) @MDN

### nooppener

`noopener` 可以阻擋新開的網站使用 `window.opener`
而 `window.opener` 可以將原始網站跳轉至其他網頁，也可以取得原始網站的內容

```javascript
window.opener.href = "https://www.google.com"; // 重新導向
window.opener.document.getElementById("foo"); // 獲取節點
```

這些操作對於原始網站的安全性有很大的威脅 ，rel 加上 noopener 則可以避免這個問題發生，讓新開的網站無法使用 opener。

### norefferer

referrer 指的是在送出請求時 headers 上的 Referer。使用 noreferrer 的話，在新網站上發送的 `HTTP 請求的標頭不會帶上 Referer`。此屬性值對於原本的網站沒有影響，但會影響新網站的流量分析和 SEO。在網站追蹤工具上會使用 referer 這個欄位來判斷來源網站，如果設定 noreferrer，該次造訪就會被視為直接流量(direct)，而非引薦(referral)。

> 💡 在設定內部連結時，千萬別加上 noreferrer 這個屬性值，否則會影響 SEO

> Q: referer v.s referrer？
>
> http headers 內的 referer 其實是 referrer 的錯誤拼字。在 [referer 文件](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)內有提到 referer is actually a misspelling of the word "referrer".

### nofollow

除了上述兩個屬性值之外，還有個也常被使用的屬性值：nofollow。這個屬性值主要用於`告訴搜尋引擎忽視兩個網站間的關聯`，對於原本的網站沒有影響，但會影響新網站的流量分析和 SEO，

backlink 是 Google SEO 的主要計算指標之一，倘若 backlink 很多且來自知名網站，就會提升該網站的 SEO，因此，有些人會在知名網站留下自身網站的連結以提高 SEO 排名，此時連結加上 nofollow 屬性值，就可以阻止有人透過垃圾連結來提高自身網站排名的行為。

### 小整理

- noopener：阻擋新視窗操作原本的網站，提升網站安全性
- noreferrer：移除 HTTP 請求時的 referer header，影響新視窗流量來源的追蹤
- nofollow：取消 SEO backlink 的追蹤，影響新視窗的 SEO

參考來源：

- [What rel=”noreferrer noopener” Mean and How it Affects SEO](https://www.reliablesoft.net/noreferrer-noopener/)
- [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)
- [When should I use rel=noreferrer?](https://stackoverflow.com/questions/50773152/when-should-i-use-rel-noreferrer) @stackoverflow
- [Prevent usage of unsafe target='\_blank' (react/jsx-no-target-blank)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md) @Github
- [html 暗藏玄機的跨域連結與 rel 屬性應用](https://vii120.coderbridge.io/2020/11/18/html-rel/)
