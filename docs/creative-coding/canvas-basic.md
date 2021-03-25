---
id: canvas-basic
title: Canvas 2D繪圖基礎
keywords:
  - canvas
  - p5.js
---

### 什麼是 Canvas?

- 最早由 Apple 為 Mac OS X Dashboard 所提出，而後 Canvas 被 HTML5 標準加以定義為 canvas 元素，現已支援多數主流瀏覽器
- 可以透過 JavaScript 串接 Canvas API ，獲取 Canvas 物件的內部方法，藉此在網頁上繪製許多細緻的特效或動畫

簡而言之，可以把 canvas 想像成網頁中一張可以自由揮灑的畫布元素，透過 JavaScript 獲取 Canvas 物件，並利用物件裡的方法在畫布上繪製線條、形狀與顏色

### Canvas 特性

1. 可以自由繪製的元件區域
2. 可以控制每像素的顏色和繪製
3. 有高的操控度，相對高的技術門檻
4. 類似一張動態可改寫的圖片

### 使用 Canvas

1. 插入 HTML Canvas 標籤
   在 HTML 中加入 canvas 元素，預設的畫布寬高為 300px x 150px。我們可以透過 HTML 的寬高屬性自訂大小，也可以利用 CSS 指定寬高（但內部影像也會跟著縮放）

```html
<canvas id="canvas1" width="150" height="150"></canvas>
```

2. 使用 JS 產生渲染環境

先透過 DOM 選取器指定 canvas 元素，再利用 getContext() 獲取 Canvas 繪圖物件，傳入參數 '2d' 得到 CanvasRenderingContext2D 物件作為 Canvas 2D 的渲染環境

```
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
```

也可以利用 JS 調整畫布大小

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

> `getContext()`接受兩個參數，第一個是類型，可以是平面的 2d，或是 3D 立體的 webgl 等；第二個是相關屬性
>
> [參考：getContext@MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)

### 座標系統

Canvas 2D 的座標系統以左上角為原點，向右正射出 X 軸，向下正射出 Y 軸，順時針為旋轉方向。

![](https://i.imgur.com/ucaRfDl.png)

### 基本圖性繪製

#### 矩型

不同於 SVG，`<canvas>`只支援一種原始圖形，矩形，矩形共有三個繪圖函數：

x, y 代表從原點出發的座標位置，width, height 代表矩形的寬高

```javascript
// 繪製填色矩形
ctx.fillRect(150, 50, 100, 50);

// 繪製矩形邊框
ctx.strokeRect(150, 150, 100, 50);

// 清除矩形內的內容
ctx.clearRect(x, y, width, height);
```

#### 路徑

類似畫筆的原理。下筆之前，需以 `beginPath()` 宣告，接下來會把畫的路徑存進一個清單內，成為路徑集合。每次呼叫`beginPath()`，路徑清單會被重設，然後就可以重新繪製徒刑

第一次下筆時要先確定下筆的點。`moveTo()` 會將畫筆移動到（第一個）下筆的點。

當圖形已經閉合或是只含一個點，`closePath()`不一定需要

```javascript
//繪製一個三角形
ctx.beginPath(); // 開始繪製路徑;
ctx.moveTo(75, 50); //移動到座標
ctx.lineTo(100, 75); //畫直線
ctx.lineTo(100, 25);
ctx.fill(); //填色
ctx.closePath(); // 自動封閉路徑
ctx.strokeStyle = "red"; // 指定線框顏色
ctx.stroke(); // 線框上色
```

> 當呼叫`fill()`，任何開放的圖形都會自動填滿閉合，但若此時用`stroke()`繪製框線，可發現只有兩條框線，仍然需要使用 closePath()，才可畫出完整的框線

> 語法小整理：
>
> - 路徑開始與封閉：beginPath / closePath
>
> - 移動與畫線：moveTo / lineTo / arc ...
>
> - 填色或線條顏色: fillStyle / strokeStyle
>
> - 填色或路徑填色：fill / stroke

#### 弧形

在 Canvas 中，圓形也屬於路徑的一種，不像矩形可以單獨繪製，需要先宣告 `beginPath()` ，再透過 `arc(cx, cy, r, startAngle, endAngle, counterclockwise?` 來繪製。

- `cx`和`cy`代表圓心的位置
- `startAngle` 和 `endAngle` 分別代表起點弧度與終點弧度（0 度- 360 度），可以用 0 - 2\*Math.PI 來表示（0 度為 x 軸方向）
- `counterclockwis` 為可選參數，值為 boolean，預設為 false，代表順時針繪製。

> 注意：`arc()`用的是弧度(radians)而非角度(degrees)
> radians = (Math.PI/180) \* degrees

```javascript
ctx.beginPath();
//畫一個圓
ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
ctx.closePath();
//畫外框
ctx.stroke();
```

#### 文字

Canvas 也支援文字繪製以及字型大小、字體、方向以及對齊方式等設定

```javascript
// 繪製文字
ctx.fillText("Hellow World!", x, y);

// 繪製有背景的文字
ctx.strokeText(text, x, y); // text 為字串

// 設定文字大小、字體與粗體
ctx.font = 'bold 18px "Microsoft JhengHei"';

// 設定文字水平對齊方式（start、end、left、right、center，預設為 start）
ctx.textAlign = "center";

// 設定文字垂直對齊方式（top、hanging、middle、alphabetic、ideographic、bottom，預設為 alphabetic）
ctx.textBaseline = "middle";
```

參考資料：

- [Canvas tutorial@MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Canvas 2D 學習筆記](http://test.domojyun.net/MEMO/Canvas/)
