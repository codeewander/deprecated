---
id: big-0-notation-time-complexity
title: 評量演算法：時間複雜度和空間複雜度
keywords:
  - Algorithm
  - Big 0
  - Time Complexity
---

## 什麼是演算法

> 演算法的簡單理解：輸入＋演算法 = 輸出

簡單來說，就是輸入一個東西，想要得到輸出，中間經過的過程就是所謂的演算法。假設我們輸入一個 2 還有一個 3，如果想要得到 6，我們需要在中間加上一個演算法「乘號 X」，讓 2 x 3 = 6。

## 評量演算法

同樣的問題可以用不同的演算法解決，哪一種演算法比較好？因此，會需要一些評量的指標。在演算法中，有兩個常見的評量指標：

- `時間複雜度`：花的時間
- `空間複雜度`：佔用記憶體空間

理所當然的，花的時間越少、佔用記憶體空間越少就是越好的演算法。

### 時間複雜度(Time Complexity)

通常會使用 Big O Notation (簡稱 `Big O`)來衡量時間複雜度，會根據輸入資料量(n)與總執行時間的關係來作為衡量的標準，以 T(n) 來表示，即 T(n) = O(f(n))。

> `Big O` 通常會省略所有係數，例如 Big O(2n² + n)，會簡化成 O(n²)。

> `Big O` 代表演算法時間函式的上限，表示在最壞的情況下，演算法的執行時間不會超過 Big 0

常見的四種時間複雜度如下：

#### 1.`O(1)` - 固定時間(Constant Run Time)

表示演算法的執行時間是固定的，不會隨著輸入資料量的增加而增加。

例如：讀取陣列中特定索引值的資料

```javascript
/**
 * Big O Notation: O(1)
 * 不會隨著輸入的資料量越大而使得執行時間增加
 **/
let arr1 = ["red", "green", "red"];
let arr2 = ["red", "green", "red", "black", "white"];

function print(arr) {
  console.log(arr[1]);
}
print(arr1); // green
print(arr2); // green
```

此時，不論陣列有多長，都不會影響讀取陣列中索引值為 1 資料的時間。

#### 2. `O(n)` - 時間線性成長(Linear Run Time)

表示演算法的執行時間隨著輸入資料量(n)成等比例成長。

例如：簡易搜尋

```javascript
/**
 * Big O Notation: O(n)
 * 隨著輸入資料量成等比例成長
 **/

let arr1 = ["red", "green", "red"];
let arr2 = ["red", "green", "red", "black", "white"];

function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "green") {
      console.log("o");
    } else {
      console.log("x");
    }
  }
}

print(arr1); // x , o , x
print(arr2); // x , o , x , x , x
```

Big O 會以最壞情況為前提，以上面的例子來說，最壞的情況就是到陣列最後一個才找到 green，所以時間複雜度是 Big O(n)。

#### 3. `O(log n)` - 時間對數成長(Logarithmic Run Time)

表示演算法的執行時間隨著資料量增加成對數成長。以數字來說，輸入資料量為 n ，執行步驟為 log n。

例如：二分搜尋法(binary search)

```javascript
/**
 * Big O Notation: O (log n)
 * 執行時間隨著資料量增加成對數成長
 **/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = arr[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(arr1, 3));
console.log(binarySearch(arr2, 3));
```

#### 4. `O(n²)` - 時間指數成長(Exponential Run Time)

表示演算法的執行時間隨著資料量增加呈指數成長。以數字來說，輸入資料量為 n ，執行步驟為 n 平方。

例如：2 個 for 迴圈

```javascript
/**
 * Big O Notation: O(n^2)
 * 執行時間隨著資料量增加呈指數成長
 **/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(arr) {
  for (let item1 of arr) {
    for (let item2 of arr) {
      console.log(item1, item2);
    }
  }
}
print(arr1); // print 25 次
print(arr2); // print 100 次
```

其他還有`O(nlogn)`和`O(2^n)`等時間複雜度。

### Big O Notation 圖表

把上面四種時間複雜度以圖表呈現，縱軸是時間，橫軸是輸入資料量

![Time Complexity](https://i.imgur.com/jHS22Ut.png)

### 空間複雜度(Space Complexity)

執行演算法所耗費的儲存空間與輸入資料量的關係，用 S(n)來表示。同時間複雜度，會根據輸入資料量(n)與佔用空間的關係來作為衡量的標準，也用 Big O 來計算，即 S(n) = O(f(n))。

常見的空間複雜度如`O(1)`、`O(n)`、`O(n^2)`

舉例來說：
i 、 j 、m 所佔用的空間都不會隨著資料量變化而增加，因此空間複雜度為 O(1)

```javascript
let i = 1;
let j = 2;
i += 1;
j += 1;
let m = i + j;
```

### 小結

- `Big O`: 評量演算法的時間複雜度和空間複雜度的方法
- 時間複雜度 Big O 不以秒，而是以`步驟次數`計算
- 演算法優劣：`O(1)` > `O(log n)` > `O(n)` > `O(n^2)`
- `Big O`會省略所有係數

參考資料：

- [初學者學演算法-談什麼是演算法和時間複雜度](https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E8%AB%87%E4%BB%80%E9%BA%BC%E6%98%AF%E6%BC%94%E7%AE%97%E6%B3%95%E5%92%8C%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6-b1f6908e4b80)
- [初學者學演算法｜從時間複雜度認識常見演算法](https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E5%BE%9E%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6%E8%AA%8D%E8%AD%98%E5%B8%B8%E8%A6%8B%E6%BC%94%E7%AE%97%E6%B3%95-%E4%B8%80-b46fece65ba5)
- [[演算法] Big O Notation & Time Complexity](https://pjchender.blogspot.com/2017/09/big-o-notation-time-complexity.html)
