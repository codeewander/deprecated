---
id: browser-theory
title: 瀏覽器(Chrome)運作原理
keywords:
  - browser
---

## 背景知識

### Chrome 運作機制

Chrome 是多程序(multi-process)架構，不同的 process 之間透過 IPC(Inter-process communication) 溝通。Process 包括：

- `browser process`: 瀏覽器功能，例如：網址列、書籤、送出網路請求等
- `renderer process`: 網頁渲染，基本上每個分頁擁有獨立運作的 renderer
- `plugin process`: 控制網頁使用的插件
- `GPU process`: 處理跨核心的工作與 3D 圖形繪製

process 下又可切分不同的 thread 負責不同功能

- browser process 下有 `ui thread` 、`network thread`
- renderer process 下有 `main thread`、`worker thread`。main thread 負責解析 HTML 字串並產生 DOM tree。若發現需下載的資源，就會透過 IPC 通知 browser process 的 network thread 來發出網路請求以取得該資源

### URL 是什麼？

URL 是 Uniform Resource Locator 的簡稱，中文為統一資源定位符，就是指訪問網路上資源的路徑，其格式為：

```
 https://localhost:3000/page/index.html?keyword=abc&name=abc#test-1

https - 協定類型
localhost - 伺服器位址
3000 - 埠號
/page - 資源層級 UNIX 檔案路徑
index.html - 檔案名
?keyword=abc&name=abc - 查詢(以問號 ? 開始，並以 & 分隔 )
#test-1 - 片段 ID，以 hash 開頭，常用於定位
```

### DNS 解析

解析 URL 並查找域名對應的 IP 地址，會透過下列步驟依序查找：
