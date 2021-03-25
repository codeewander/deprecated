---
title: 認識 React Hook
id: react-hook
---

### Hook 是什麼？

Hook 是函式，是一種重複使用邏輯的方法，能用來在不同的 Component 之間重複使用邏輯，可以讓 function component 使用原本只有 class component 有的 state 和生命週期功能。

> Q: 使用 React Hook 有什麼限制嗎？

1. 只能在 functional component 中呼叫 Hook，class component 不能使用
2. 只能在最上層呼叫，不能在迴圈、條件式或巢狀函式內呼叫，以確保 Hook 被呼叫的順序

---

### useState

```javascript
//useState是函式，會回傳一個值 state ，以及更新該 state 的方法（setState）

const [state, setState] = useState(initialState);
```

useState 是用來在 function component 裡面保留 local state。一般情況下，變數會在 function 結束時消失，但 state 變數會被 React 保留起來，因此，在重新渲染時元件仍會保留這個 state。使用 setState 方法將會更新 state，不會直接修改 state 而是給一個 newState 。

一個元件內可以宣告多個 state ，因此，不用將各種無關的 state 放在同一個物件內。

注意： **setState 不會即時更新，是非同步的**

> 關於 initialState

initialState 參數只會在第一次渲染時使用，後續渲染時不會用到，但每次渲染時還是會跑一次 initialState。
如果初始 state 需要通過複雜的計算來獲得，可以傳入 function，並回傳初始值

```javascript
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

要注意的是因為每次渲染都還是會跑 initialState，基於效能可量，要避免以下的寫法：

```
const [state, setState] = useState(someExpensiveComputation(props));
```

否則，每次渲染都會執行 someExpensiveComputation(props)

### useEffect

```
useEffect(didUpdate);
```

預設情況下，useEffect 會在每一個完整 render 結束後執行裡面的程式碼

---

### useContext

```
const value = useContext(MyContext);
```

useContext 可用於元件之間共享狀態，父層再也不需要透過 props 一層層傳狀態到子層，類似於任意門，適用於接收資料層與父層層級過多的狀況

首先，先使用 createContext 創建一個 Context，在最上層使用 Context.provider，並將要傳遞的資料放到 value，要接收資料的子層 component 可以透過 useContext 取得 values 的資料

```javascript
// 建立一個 Context
const AuthContext = React.createContext();

// 父層使用 AuthContext.Provider
function App() {
  return (
    <AuthContext.Provider
      value={{
        id: 1234,
      }}
    >
      <ChildComponent />
    </ContextStore.Provider>
  );
}
```

```javascript
// 子層使用 useContext 拿到資料
function ChildComponent() {
  const value = React.useContext(AuthContext);

  return <span>value.id</span>;
}
```

---

### useRef

ref 有兩個特點：

1. 每次渲染 useRef 的回傳值都是同一個(相同的 reference)
2. ref.current 變化時，不會造成元件重新渲染

useRef 有兩個常見的使用情境，一個是儲存元件生命週期內部不需要變化的值，一個是抓取 DOM 節點

**1. 儲存不需變化的值**

useRef 的回傳值不會導致 re-render。useRef 會回傳一個可變的 ref 物件，它的 .current 屬性被初始化為傳入的參數，回傳的 object 在元件的生命週期都不會變化。

**2. 抓取 DOM 節點**

使用 useRef 建立出一個物件實體，null 表示初始值設定為 null，將建立好的物件丟入要抓取的 DOM 元素的 ref attribute 中，之後透過 inputEl.current 取得 input 的 DOM 物件

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已掛載到 DOM 上的文字輸入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
```

倘若希望在 ref 掛載完成後執行某些事情，則需要使用 callback ref

```javascript
function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      //getBoundingClientRect 用於取得元素相對於視窗的座標位置
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}
```

---

### 效能優化：useMemo、useCallback 和 memo

#### useMemo

useMemo 主要用在記憶複雜的程式碼或運算出來的回傳值，如此，重新渲染時，除非 dependency 改變，否則不用再次執行運算。

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

舉例來說:

```javascript
function WithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  function expensive() {
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }

  return (
    <div>
      <h4>
        {count}-{val}-{expensive()}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}
```

WithoutMemo 中有兩個 state，且每次渲染時都會執行 expensive 函式拿到某個值。然而，無論是修改 count 還是 val，都會重新渲染元件並觸法 expensive 的執行，但是，expensive 只和 count 值有關。在這種情況下，就可以使用 useMemo，只在 count 值修改時，執行 expensive 計算。

```javascript
export default function WithMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");
  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h4>
        {count}-{val}-{expensive()}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}
```

#### useCallback

useCallback 跟 useMemo 很類似，但回傳的是已記憶的函式，除非 dependency 改變時才會重新渲染此函式

`useCallback(fn, deps)等同於 useMemo(() => fn, deps)`

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

---

#### React.memo

```javascript
//兩個參數分別為
1. 需要做效能優化、比較props的元件
2. 自定義比較 props的方法
React.memo(CustomComponent, areEqual)
```

React.memo 是一個 high order component，當父層狀態改變，底下的每個子元件都會重新渲染，就算它依賴的 props 或 state 沒有改變。因此，React 提供了 memo，memo 會幫忙檢測 props 是否有變動，`當 props 沒改變時， component 就不會重新渲染`。React.memo 是專用於 Component 的方法

memo 是利用淺層比較(shallowly compare) 的方法確認 props 的值是否一樣， 淺層比較 在 props 是基本資料型別時比較的是值(value)，但當 props 是 Object 時，比較的卻是記憶體位置（reference）。
