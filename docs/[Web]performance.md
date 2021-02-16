---
id: web-performance
title: 前端效能優化
---

## SEO 優化 - 結構化資料

在網頁寫上註釋，讓搜尋引擎可以更容易理解網頁內容資訊。

Google 支援三種方式

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

## 圖片優化

1. 延遲載入 lazy loading
