---
title: 好用的 React 相關套件
id: react-libraries
---

## 表單驗證

> [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)

![](https://i.imgur.com/jUXr7en.png)

說明：

1. Formik 是 [React 官方推薦](https://reactjs.org/docs/forms.html#fully-fledged-solutions)的函式庫
2. Formik 是表單函式庫，Yup 是驗證工具，Formik 的 validationSchema API 可和 Yup 互相搭配，可以將 Yup 回傳的錯誤訊息自動轉換成一個物件，key 值是欄位的名稱，而 value 是錯誤訊息

## Select Input

> [react-select](https://react-select.com/home)

![](https://i.imgur.com/6sLEI5F.png)

說明：

1. 功能強大的下拉單元件，支援多選、自動完成、動態搜尋/篩選、異步加載選項、自行創建選項等功能

## Drag & Drop

> [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

![](https://i.imgur.com/3fXchX4.png)

說明：

1. 支援拖曳動畫、鍵盤/滑鼠/觸碰拖曳支援
2. 主要有 3 個元件：
   - DragDropContext - 建立一個可使用的範圍
     不同事件：onDragStart、onDragUpdate、onDragEnd
   - Droppable - 建立可以被拖曳放入的區塊
   - Draggalbe - 可被拖拉的元件

## 圖片/影音畫面裁切

> [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop)

![](https://i.imgur.com/Gocts7v.png)

說明：

1. 支援拖動、縮放和旋轉
2. 提供圖片尺寸的像素和百分比資訊
3. 支持任何圖像格式（JPEG、PNG 甚至 GIF）作為 url 或 base 64 字串
4. 支援 HTML5 支援的任何 Video 格式

## 所見即所得編輯器

> [jodit-react](https://github.com/jodit/jodit-react)

![](https://i.imgur.com/S9RtmQ2.png)

說明：

1. 針對 React 專案的 jodit 編輯器
2. jodit 是使用 TypeScript 編輯的開源 WYSIWYG 編輯器
