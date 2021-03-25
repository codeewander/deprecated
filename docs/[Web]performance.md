---
id: seo
title: 使用結構化資料優化 SEO
---

結構化資料（通常稱為 Schema 或是 Schema.org）是利用 Google、Bing、Yandex 和 Yahoo!所共同認可的特定標籤或詞彙加到 HTML 中以改進頁面在搜尋結果顯示方式的作法。

Google 目前支援三種結構化資料格式

1. JSON-LD(主要推薦)：使用 script 方式嵌入。

> - 結構化資料語意標記內容請參考[schema.org](https://schema.org/docs/documents.html)。
> - 寫完之後可以到[結構化資料測試工具](https://search.google.com/structured-data/testing-tool/u/0/)進行測試

範例：

```html
<html>
  <head>
    <title>Party Coffee Cake</title>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "Party Coffee Cake",
        "author": {
          "@type": "Person",
          "name": "Mary Stone"
        }
      }
    </script>
  </head>
  <body>
    <h2>Party coffee cake recipe</h2>
  </body>
</html>
```

2. Microdata
3. RDFa

參考文件：[Google 結構化資料](https://developers.google.com/search/docs/guides/intro-structured-data)
