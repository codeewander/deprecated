---
id: react-i18next
title: React-i18next多語系設定
---

![](https://i.imgur.com/6ZKmkBk.png)

> [i18next 官網](https://www.i18next.com/)

i18next 是用 JS 編寫的多語系框架，提供標準的國際化功能，可以套用在不同前端框架和語言上。

> 小知識：i18n 等於國際化(internationalization)，因為 i 到 n 之間有 18 個英文字母，因此常以 i18n 代替

## 安裝

```
yarn add i18next react-i18next
```

使用 i18next 函式庫進行設定，並使用 react-i18next 將其多語系功能串連至 React

## 檔案架構

```
├─src
    ├─local
      └─langauge //翻譯內容
        ├─en.json
        ├─zh-CN.json
        └─zh-TW.json
    ├─resource.js
    ├─i18n.js //i18n 設定檔
├─index.js
```

## i18n 設定（初始化）

i18n.js 是專案的 i18n 設定檔，會在此實例化 i18n 並在 index.js 內引入。

i18n.js

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resource from "./resource";

i18n
  .use(LanguageDetector) //偵測瀏覽器語言
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // 若當前語言沒有對應的翻譯則使用這個語言
    lng: "en", //預設語言
    resources, //引入字典檔
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，因為 React.js 已經做了，這裡設成 false
      escapeValue: false,
    },
  });

export default i18n;
```

resource.js

```javascript
import en from "./language/en.json";
import cn from "./language/zh-CN.json";
import tw from "./language/zh-TW.json";

const resources = {
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  },
  tw: {
    translation: tw,
  },
};

export default resources;
```

index.js

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./i18n";

ReactDOM.render(<App />, document.getElementById("root"));
```

字典檔

字典檔是以 json 格式撰寫

```json
//en
{
    test: 'Test'
}
//zh-CN
{
    test: '测试'
}
//zh-TW
{
    test: '測試'
}
```

## 元件內進行翻譯

使用 `useTranslation` hook

react-i18next 內建的 `useTranslation` hook 可以直接在 functional components 中使用 `t(‘xxx’)` 的語法取得語言資料。

```javascript
import React from "react";
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t("test")}</h1>;
}
```

### 複雜的翻譯(加樣式、複數處理、變數等)

若要翻譯的內容結構較為複雜(像是包含標籤、變數、樣式等)，可以使用 react-i18next 提供的 `Trans` 元件。

> [Trans 元件](https://react.i18next.com/latest/trans-component)

```javascript
import React from "react";
import { Trans } from "react-i18next";

function MyComponent({ person, messages }) {
  const { name } = person;
  const count = messages.length;

  return (
    <Trans i18nKey="userMessagesUnread" count={count}>
      Hello <strong>{{ name }}</strong>, you have{{ count }} unread message.
    </Trans>
  );
}
```

```json
//en.json
{
  "userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message."
}
```

其數字<1>為對應的節點位置

```
Trans.children = [
  'Hello ',                          // index 0: 字串
  { children: [{ name: 'Jan'  }] },  // index 1: element strong -> child object for interpolation
  ', you have',                      // index 2: 字串
  { count: 10 },                     // index 3: object for interpolation
  ' unread message. ',               // index 4
]
```

透過 `count` 變數也可處理複數問題，在 count 數字大於 0 時，在 message 後面加上 s。

```json
{
  "userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message.",
  "userMessagesUnread_plural": "Hello <1>{{name}}</1>, you have {{count}} unread messages."
}
```

> 更詳細的複數處理說明可參考[官方文件](https://www.i18next.com/translation-function/plurals)

## 切換語言

使用 `changeLanguage` 來切換語言

```javascript
const { t, i18n } = useTranslation();
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};
<div>
  <button onClick={() => changeLanguage("zh-tw")}>中文</button>
  <button onClick={() => changeLanguage("en")}>English</button>
</div>;
```
