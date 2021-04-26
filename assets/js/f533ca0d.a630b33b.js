(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(165)),c={id:"leetcode739",title:"LeetCode 739. Daily Temperatures",keywords:["Algorithm","Stack"]},i={unversionedId:"leetcode739",id:"leetcode739",isDocsHomePage:!1,title:"LeetCode 739. Daily Temperatures",description:"\u984c\u76ee",source:"@site/docs/leetcode739.md",slug:"/leetcode739",permalink:"/docs/leetcode739",version:"current"},l=[{value:"\u984c\u76ee",id:"\u984c\u76ee",children:[]},{value:"\u601d\u8003",id:"\u601d\u8003",children:[]},{value:"\u89e3\u6cd5",id:"\u89e3\u6cd5",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u984c\u76ee"},"\u984c\u76ee"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.\nFor example, given the list of temperatures T = ","[73, 74, 75, 71, 69, 72, 76, 73]",", your output should be ","[1, 1, 4, 2, 1, 1, 0, 0]",".\nNote: The length of temperatures will be in the range ","[1, 30000]",". Each temperature will be an integer in the range ","[30, 100]",".")),Object(o.b)("p",null,"\u8f38\u5165\u4e00\u500b\u7d00\u9304\u6eab\u5ea6\u7684\u9663\u5217",Object(o.b)("inlineCode",{parentName:"p"},"T = [73, 74, 75, 71, 69, 72, 76, 73]"),"\uff0c\u6c42\u9663\u5217\u4e2d\u4e0b\u6b21\u6bd4\u5b83\u9ad8\u7684\u6eab\u5ea6\u5f8c\u7d00\u9304\u5728\u53e6\u5916\u4e00\u500b\u9663\u5217\u4e2d\u3002\u4f8b\u5982 T","[0]","=73\uff0c\u4e0b\u4e00\u500b\u6bd4 73 \u9ad8\u7684\u6eab\u5ea6\u70ba 74\uff0c\u7d93\u904e\u4e86 1 \u5929\uff0c\u65bc\u662f\u5c07 1 \u653e\u5165\u53e6\u4e00\u500b\u9663\u5217\uff0c\u4ee5\u6b64\u985e\u63a8\uff0c\u8f38\u51fa\u70ba ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 1, 4, 2, 1, 1, 0, 0]"),"\uff0c"),Object(o.b)("h3",{id:"\u601d\u8003"},"\u601d\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u91dd\u5c0d arr","[i]"," \u627e\u5230\u6bd4\u5b83\u6eab\u5ea6\u9ad8\u7684\u4e0b\u4e00\u500b\u5143\u7d20\u7684\u8ddd\u96e2")),Object(o.b)("h3",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Stack"),Object(o.b)("p",{parentName:"li"},"\u5c07\u7b2c x \u5929\u6eab\u5ea6\u7684 x \u503c push \u81f3 Stack\u3002\u7576 Stack \u4e0d\u70ba\u7a7a\u6642\uff0c\u6aa2\u67e5\u662f\u5426\u7b2c y \u5929\u7684\u6eab\u5ea6\u6709\u9ad8\u65bc\u76ee\u524d Stack \u6700\u4e0a\u65b9\u5c0d\u61c9\u7684\u6eab\u5ea6\uff0c\u5982\u679c\u6709\u5247\u53ef\u7b97\u51fa y - x \u70ba\u7b2c x \u5929\u7684\u7b54\u6848\uff1b\u5982\u679c\u6c92\u6709\u9ad8\u65bc Stack \u6700\u4e0a\u65b9\u7684\u6eab\u5ea6\u5247\u63db\u4e0b\u4e00\u5929\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function dailyTemperatures(arr) {\n  let n = arr.length;\n  let ans = new Array(n).fill(0);\n  let stack = [];\n  stack.push(0);\n  for (let i = 1; i < n; i++) {\n    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {\n      ans[stack[stack.length - 1]] = i - stack[stack.length - 1];\n      stack.pop();\n    }\n    stack.push(i);\n  }\n  return ans;\n}\n")),Object(o.b)("p",null,"\u53c3\u8003\u8cc7\u6599\uff1a\n",Object(o.b)("a",{parentName:"p",href:"https://medium.com/@authentic_pumpkin_jackal_935"},"[LeetCode] 739. Daily Temperatures"),"\n",Object(o.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/daily-temperatures/solution/739-mei-ri-wen-du-dan-diao-zhan-xiang-ji-8kl5/"},"739. \u6bcf\u65e5\u6e29\u5ea6\u3010\u5355\u8c03\u6808\u3011\u8be6\u89e3\uff01")))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);