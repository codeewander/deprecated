(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(144)),i={id:"stack",title:"\u5806\u758a(Stack)",keywords:["Algorithm","Stack"]},l={unversionedId:"stack",id:"stack",isDocsHomePage:!1,title:"\u5806\u758a(Stack)",description:"\u6982\u5ff5",source:"@site/docs/stack.md",slug:"/stack",permalink:"/docs/stack",version:"current",sidebar:"Docs",previous:{title:"Binary Search",permalink:"/docs/algorithm/binary-search"},next:{title:"\u4f47\u5217(Queue)",permalink:"/docs/queue"}},o=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"\u6642\u9593\u8907\u96dc\u5ea6",id:"\u6642\u9593\u8907\u96dc\u5ea6",children:[]},{value:"\u5be6\u4f5c Stack",id:"\u5be6\u4f5c-stack",children:[]}],u={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/Hrlu1p2.png",alt:null})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u3010\u6982\u5ff5\u3011Last-In-First-Out \u5f8c\u9032\u5148\u51fa"),Object(c.b)("li",{parentName:"ul"},"\u3010\u7528\u9014\u3011\u7d00\u9304\u4e4b\u524d\u7684\u72c0\u614b\uff0c\u53ea\u80fd\u53d6\u5f97 Stack \u6700\u5c3e\u7aef\u7684\u8cc7\u6599\uff0c\u7121\u6cd5\u4f7f\u7528 index"),Object(c.b)("li",{parentName:"ul"},"\u3010\u60c5\u5883\u3011\u700f\u89bd\u5668\u56de\u5230\u300c\u4e0a\u4e00\u9801\u300d")),Object(c.b)("h2",{id:"\u6642\u9593\u8907\u96dc\u5ea6"},"\u6642\u9593\u8907\u96dc\u5ea6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u904d\u6b77\uff1aO(n)"),Object(c.b)("li",{parentName:"ul"},"Pop: O(1)"),Object(c.b)("li",{parentName:"ul"},"Push: O(1)"),Object(c.b)("li",{parentName:"ul"},"Peek: O(1)")),Object(c.b)("h2",{id:"\u5be6\u4f5c-stack"},"\u5be6\u4f5c Stack"),Object(c.b)("p",null,"\u5c6c\u6027\u65b9\u6cd5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"push"),"\uff1a\u5b58\u653e\u8cc7\u6599\u81f3\u9802\u7aef\uff0c\u56de\u50b3\u65b0\u7684\u5806\u758a"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pop")," \uff1a\u522a\u9664\u9802\u7aef\u8cc7\u6599\uff0c\u4e26\u56de\u50b3\u65b0\u7684\u5806\u758a"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"isEmpty"),"\uff1a\u5224\u65b7\u5806\u758a\u662f\u5426\u70ba\u7a7a"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"peek"),": \u67e5\u770b\u5806\u758a\u6700\u9802\u7aef\u7684\u8cc7\u6599"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"clear"),": \u79fb\u9664\u5806\u758a\u7684\u6240\u6709\u5143\u7d20"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"size"),": \u56de\u50b3\u5806\u758a\u5167\u7684\u5143\u7d20\u500b\u6578\uff0c\u4e5f\u5c31\u662f\u8cc7\u6599\u9577\u5ea6")),Object(c.b)("p",null,"\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"\u9663\u5217"),"\u5be6\u4f5c Stack"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"class Stack {\n  constructor() {\n    this.items = []; //\u4f7f\u7528\u9663\u5217\u5132\u5b58 Stack \u7684\u5143\u7d20\n  }\n\n  push(element) {\n    this.item.push(element);\n  }\n  pop() {\n    return this.items.pop();\n  }\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n  isEmpty() {\n    return this.items.length === 0;\n  }\n  clear() {\n    this.items = [];\n  }\n  size() {\n    return this.items.length;\n  }\n}\n\n//\u5efa\u7acb\u5be6\u9ad4\nconst stack1 = new Stack();\n")),Object(c.b)("h4",{id:"\u76f8\u95dc-leetcode-\u984c\u76ee"},"\u76f8\u95dc LeetCode \u984c\u76ee"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/leetcode739"},"LeetCode 739. Daily Temperatures")),Object(c.b)("li",{parentName:"ul"},"LeetCode 735. Asteroid Collision"),Object(c.b)("li",{parentName:"ul"},"LeetCode 20. Valid Parentheses"),Object(c.b)("li",{parentName:"ul"},"LeetCode 496. Next Greater Element I")))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,O=b["".concat(i,".").concat(m)]||b[m]||s[m]||c;return n?a.a.createElement(O,l(l({ref:t},u),{},{components:n})):a.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);