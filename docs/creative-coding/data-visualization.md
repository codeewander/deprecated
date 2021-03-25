---
id: data-visualization
title: P5實作
keywords:
  - data-visualization
  - p5.js
---

### 作品成果

![](https://i.imgur.com/kZtUFAf.gif)

### 載入外部資料

#### 常見的資料形式：`JSON` 與 `CSV`

`JSON(JavaScript Object Notation)` ：一種類似 JavaScript 物件格式的資料結構，是常用的資料格式

例如：

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City"
}
```

`CSV(Comma-Separated Values)` ：單純用文字、逗號（,）與換行符號（\n）組成的資料格式，可以使用 excel 等文書工具編輯

例如：

```csv
Year,Make,Model,Description,Price
1997,Ford,E350,"ac, abs, moon",3000.00
1999,Chevy,"Venture ""Extended Edition""","",4900.00
```

#### 常見的資料來源

- [政府開發資料平台](https://data.gov.tw/)
  若要編輯或整理資料，可載 CSV 檔進行編輯，而後再利用工具轉成 JSON 格式供程式讀取

#### 工具

1.  [JSON Editor Online](https://jsoneditoronline.org/): JSON 線上編輯器，可用來分析 JSON 資料結構
2.  [CSVJSON](https://csvjson.com/): 將 CSV 轉成 JSON 格式。

### 將資料轉換成藝術

使用政府開放資料的[林業生產-森林主產物生產量(樹種)資料](https://data.gov.tw/dataset/40267)

創作概念：用長條圖呈現不同年度樹種的生產狀況

- `Step1` - JSON 檔案上傳到 OpenProcessing 的 Files

- `Step2` - 新增一個全域變數，在 preload()裡面使用 loadJSON()讀取上傳的 JSON 檔，或是讀取外部 URL

```javascript
let treeData;
function preload() {
  treeData = loadJSON("openData.json");
}
```

- `Step3` - 將物件轉成陣列：`Object.values()`，方便後續遞迴裡面的資料

```js
function setup() {
  ...
  treeData = Object.values(treeData);
}
```

### 資料繪製

- 在印出資料前先標準化：`let h = map(d.value,0,8000,0,height)` // 8000 是所有資料的最大值
- 篩選特定資料

```javascript
function setup() {
  ...
  let useData = [];
  for (let d of treeData) {
    //只使用相思樹的資料
    if (d.dname1 == "相思樹") {
      useData.push(d);
    }
  }
}
```

- 畫出相思樹生產量的長條圖(樹幹): 當生產量越高，樹幹越寬且越長

```javascript
function draw() {
  background(0);
  //使長條圖由下往上長，且 x 軸從 10 開始
  translate(10, height - 20);
  noStroke();
  let startColor = color(158, 111, 31);
  let endColor = color(255, 212, 145);

  for (let i = 0; i < useData.length; i += 2) {
    let d = useData[i];
    let ratio = map(d.value, 0, 8000, 0.1, 1);
    //樹幹顏色介於startColor和endColor之間
    let midColor = lerpColor(startColor, endColor, ratio);
    fill(midColor);

    push();
    //調整樹幹之間的間距
    translate(i * 25, 0);
    //調整樹幹高度的相對比例
    let h = map(pow(d.value, 0.9), 0, 8000, 0, -height);
    //畫出樹幹
    rect(0, 0, 25 * ratio, h);

    //標示年份文字
    fill(255);
    textSize(20);
    text(d.date, 0, 0);
    pop();
  }
}
```

- 加上樹葉

```javascript
function draw (){
  ...
  let startColorG=color(24,102,23)
  let endColorG=color(153,249,57)

  for(let i=0;i<useData.length;i+=2){
		let d = useData[i]
		let ratio = map(d.value,0,8000,0.1,1)
    //樹葉的顏色介於 startColorG 和 endColorG 間
		let midColorG = lerpColor(startColorG,endColorG,ratio)
		...
		push()
			translate(i*25,0)

			let h = map(pow(d.value,0.9),0,8000,0,-height)

			fill(midColorG)
			ellipse(20*ratio,h-20*ratio,120*ratio)
			ellipse(-30*ratio,h-10*ratio,120* ratio)
			ellipse(30*ratio,h+10*ratio,120* ratio)
      ...
		pop()
	}

}
```

- 增加繪製的樣式

```javascript
function setUp() {
  ...
  //加上陰影以及設定陰影位置
  drawingContext.shadowColor = color(0, 30);
  drawingContext.shadowOffsetX = 20;
  drawingContext.shadowOffsetY = 20;
  ...
}
```

- 動畫：讓樹隨著時間增長

```javascript
//使用 easing function
function easeOutQuart(x) {
  return 1 - pow(1 - x, 4);
}

function draw() {
  //樹幹隨著frameCount增加而增加，map 加上 true 以限制 map 的上限
  let animationProgress = easeOutQuart(map(frameCount, 0, 200, 0, 1, true));
  //樹葉一開始不長，過一段時間才長
  let animationProgressG = easeOutQuart(map(frameCount, 50, 250, 0, 1, true));

  for (let i = 0; i < useData.length; i += 2) {
    let d = useData[i];
    //樹葉顏色會隨時間變化
    let ratio = map(d.value, 0, 8000, 0.1, 1) * animationProgressG;
    let midColor = lerpColor(startColor, endColor, ratio);
    let midColorG = lerpColor(startColorG, endColorG, ratio);

    fill(midColor);
    push();
    translate(i * 25, 0);
    //樹幹高度會隨時間變化
    let h = map(pow(d.value, 0.9), 0, 8000, 0, -height) * animationProgress;
    rect(0, 0, 25 * ratio, h);

    fill(midColorG);
    ellipse(20 * ratio, h - 20 * ratio, 120 * ratio);
    ellipse(-30 * ratio, h - 10 * ratio, 120 * ratio);
    ellipse(30 * ratio, h + 10 * ratio, 120 * ratio);

    pop();
  }
}
```

- 改成以中心點為主的圓環繞呈現

```javascript
function draw() {
	//畫布以中心點為起點
	translate(width/2,height/2)

	for(let i=0;i<useData.length;i+=2){
    ...
		push()
      //每個長條圖旋轉不同角度(360度/資料筆數)加一點空白
			rotate(i*(2*PI/(useData.length+5)))
      //設定離圓心距離
			translate(0,-50)
      //旋轉文字
			rotate(-PI/2)
      push()
        //文字顏色為白色
        fill(255)
			  text(Number(d.date),0,0)
      pop()
		pop()
	}
}
```

- 畫上樹的生產量刻度

```javascript
function draw() {

  //樹的生產量刻度
	push()
    //旋轉畫布防止文字被樹擋到
		rotate(-PI/8)
		noFill()
		stroke(255,100)
	for(let i=0;i<5;i++){
    //刻度高度的調整參數0.9需與下面樹幹高度一致
		let h = map(pow(i*2000,0.9),0,8000,0,-height)* animationProgress
    //下方樹幹移動了-50，因此刻度移動 *2 等於 -100
		ellipse(0,0,h*2 -100)
    //文字刻度
		text(i*2000,0,h-50)
	}
	pop()

	for(let i=0;i<useData.length;i+=2){
		let d = useData[i]
		let ratio = map(d.value,0,8000,0.1,1)* animationProgressG

		push()
      ...
			translate(0,-50)
			let h = map(pow(d.value,0.9),0,8000,0,-height) * animationProgress
			rect(0,0,25*ratio,h)
      ...
		pop()
	}
```
