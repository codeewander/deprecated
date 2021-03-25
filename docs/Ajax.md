---
id: ajax
title: 理解 Ajax 與跨來源請求
keywords:
  - Ajax
  - Axios
  - Fetch
  - HTTP
  - Cors
---

## HTTP

HTTP(Hypertext Transport Protocol)，中文稱「超文本傳輸協議」，用於規範瀏覽器與伺服器之間互相溝通的規則

### 請求(request)

請求的格式與參數如下：

`1. Request-Line ：<Method> <Request-URI> <HTTP-Version>`

```
GET http://www.w3.org/pub/WWW/TheProject.html HTTP/1.1
```

2. Request Header

```
Host: developer.mozilla.org
Accept-Language: fr
Content-type: application/x-www-form-urlencoded
User-Agent 說明瀏覽器為 Chrome/4
```

### 響應(response)
