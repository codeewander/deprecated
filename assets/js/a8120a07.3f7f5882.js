(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{141:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),c=(t(0),t(165)),i={id:"binary-search",title:"Binary Search",keywords:["Algorithm","Binary Search"]},o={unversionedId:"algorithm/binary-search",id:"algorithm/binary-search",isDocsHomePage:!1,title:"Binary Search",description:"\u6982\u5ff5",source:"@site/docs/algorithm/binary-search.md",slug:"/algorithm/binary-search",permalink:"/docs/algorithm/binary-search",version:"current",sidebar:"Docs",previous:{title:"\u6a39\u72c0\u7d50\u69cb (Tree)",permalink:"/docs/algorithm/tree"},next:{title:"\u700f\u89bd\u5668\u5206\u9801\u9593\u7684\u8cc7\u6599\u5171\u4eab",permalink:"/docs/web/cross-browser-sharing"}},l=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"\u6f14\u7b97\u6cd5\u5be6\u4f5c",id:"\u6f14\u7b97\u6cd5\u5be6\u4f5c",children:[]},{value:"LeetCode \u76f8\u95dc\u984c\u76ee",id:"leetcode-\u76f8\u95dc\u984c\u76ee",children:[]}],u={toc:l};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u3010\u7528\u9014\u3011\u91dd\u5c0d\u5df2\u6392\u5e8f\u597d\u7684\u5e8f\u5217\u4e2d\u9032\u884c\u641c\u5c0b"),Object(c.b)("li",{parentName:"ul"},"\u3010\u5be6\u4f5c\u3011\u8b8a\u6578: \u5de6\u908a\u503c(l), \u53f3\u908a\u503c(r), \u4e2d\u9593\u503c(mid)"),Object(c.b)("li",{parentName:"ul"},"\u3010\u539f\u5247\u3011",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\u6bcf\u6b21\u90fd\u8981\u7e2e\u6e1b\u641c\u5c0b\u7bc4\u570d"),Object(c.b)("li",{parentName:"ol"},"\u6bcf\u6b21\u7e2e\u6e1b\u4e0d\u80fd\u6392\u9664\u53ef\u80fd\u7b54\u6848"))),Object(c.b)("li",{parentName:"ul"},"\u3010\u6642\u9593\u8907\u96dc\u5ea6\u3011 O(logN)"),Object(c.b)("li",{parentName:"ul"},"\u3010\u8209\u4f8b\u3011\u7d42\u6975\u5bc6\u78bc\u904a\u6232")),Object(c.b)("h2",{id:"\u6f14\u7b97\u6cd5\u5be6\u4f5c"},"\u6f14\u7b97\u6cd5\u5be6\u4f5c"),Object(c.b)("p",null,"\u76ee\u6a19\uff1a\u900f\u904e binary search \u5728\u4e00\u500b\u9663\u5217\u4e2d\u627e\u51fa\u76ee\u6a19\u5143\u7d20\uff08target\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8a18\u5f97\u5728\u4f7f\u7528 binary search \u524d\u8981\u5148\u5c07\u9663\u5217\u5143\u7d20\u9032\u884c\u5347\u51aa\u6392\u5e8f`")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"function binarySearch(numberArr, target) {\n  // \u53d6\u5f97\u9663\u5217\u4e2d\u9593\u7684\u7d22\u5f15\u503c\n  let headIndex = 0;\n  let lastIndex = numberArr.length - 1;\n  let middleIndex = Math.floor((headIndex + lastIndex + 1) / 2);\n\n  // \u5982\u679c\u627e\u5230\u5c31\u56de\u50b3 true\n  if (numberArr[middleIndex] === target) {\n    return true;\n  }\n\n  // \u5982\u679c\u6c92\u627e\u5230\uff0c\u800c\u4e14\u9663\u5217\u53ea\u5269\u4e00\u500b\u5143\u7d20\uff0c\u8868\u793a\u627e\u4e0d\u5230\u56de\u50b3 false\n  if (numberArr.length === 1) {\n    return false;\n  }\n\n  // \u5982\u679c\u6c92\u627e\u5230\uff0c\u4e14 target \u5927\u65bc\u4e2d\u9593\u7684\u6578\u503c\uff0c\u5247\u53d6\u5f8c\u534a\u6bb5\u7684\u9663\u5217\u518d\u641c\u5c0b\n  if (target > numberArr[middleIndex]) {\n    return binarySearch(numberArr.slice(middleIndex, numberArr.length), target);\n    // \u5982\u679c target \u5c0f\u65bc\u4e2d\u9593\u7684\u6578\u503c\uff0c\u5247\u53d6\u524d\u534a\u6bb5\u7684\u9663\u5217\u518d\u641c\u5c0b\n  } else if (target < numberArr[middleIndex]) {\n    return binarySearch(numberArr.slice(0, middleIndex), target);\n  }\n}\n")),Object(c.b)("h2",{id:"leetcode-\u76f8\u95dc\u984c\u76ee"},"LeetCode \u76f8\u95dc\u984c\u76ee"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/leetcode/leetcode704"},"LeetCode 704. Binary Search(easy)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/leetcode/leetcode1062"},"LeetCode 1062. Reverse String(medium)"))))}b.isMDXComponent=!0},165:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return s}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=b(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(t),m=n,s=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return t?a.a.createElement(s,o(o({ref:r},u),{},{components:t})):a.a.createElement(s,o({ref:r},u))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);