---
title: 本地環境手機測試和 debug
id: mobile-testing
---

## 手機連上 local 環境

1. 確認手機裝置和電腦在同一個網域底下
2. 找到自己的 IP 位置

第一種方法：打開 Terminal 輸入指令

```bash
ifconfig //macOS
ipconfig //windows
```

![](https://i.imgur.com/W1MOn15.jpg)

第二種方法：點擊 Wi-Fi 圖示，打開網路偏好設定

![](https://i.imgur.com/htEojDZ.jpg)

## 使用指定的 IP 位置開 local 環境

輸入以下指令和預設 port 號（需安裝 python）

```bash
python -m SimpleHTTPServer [port]
```

若為 React 專案，直接輸入 yarn run start，就會自動產生了
![](https://i.imgur.com/SrdZKvR.jpg)

而後在手機瀏覽器貼上 http://192.XXX.X.XXX:3001/ 就可以了

## 使用 Android 裝置 debug Chrome

1. 在電腦開啟分頁，輸入 chrome://inspect/#devices
2. 打開 DevTools 設定遠端 debug：打開 DevTools > Main Menu > More tools > Remote devices
3. 開啟 Android 裝置的遠端除錯選項：Settings > Developer Options > Enable USB Debugging
4. 將手機用 USB 線接上電腦
5. 打開 chrome 開發工具，開始 debug

## 使用 iOS 裝置 debug

iOS 只能使用原生的 Safari 環境，無法使用 Chrome debug

1. 下載並開啟 xcode
2. 開啟 iOS 裝置的遠端除錯選項：Setting > Safari > Advanced，打開 Web Inspector
3. 將手機用 USB 線接上電腦
4. 打開 safari 開發工具，開始 debug
