(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(146)),o={id:"data-visualization",title:"P5\u5be6\u4f5c",keywords:["data-visualization","p5.js"]},i={unversionedId:"creative-coding/data-visualization",id:"creative-coding/data-visualization",isDocsHomePage:!1,title:"P5\u5be6\u4f5c",description:"\u4f5c\u54c1\u6210\u679c",source:"@site/docs/creative-coding/data-visualization.md",slug:"/creative-coding/data-visualization",permalink:"/docs/creative-coding/data-visualization",version:"current",sidebar:"creative",previous:{title:"Canvas 2D\u7e6a\u5716\u57fa\u790e",permalink:"/docs/creative-coding/canvas-basic"},next:{title:"\u4f5c\u54c1\u6848\u4f8b",permalink:"/docs/creative-coding/data-visualization-example"}},c=[{value:"\u4f5c\u54c1\u6210\u679c",id:"\u4f5c\u54c1\u6210\u679c",children:[]},{value:"\u8f09\u5165\u5916\u90e8\u8cc7\u6599",id:"\u8f09\u5165\u5916\u90e8\u8cc7\u6599",children:[]},{value:"\u5c07\u8cc7\u6599\u8f49\u63db\u6210\u85dd\u8853",id:"\u5c07\u8cc7\u6599\u8f49\u63db\u6210\u85dd\u8853",children:[]},{value:"\u8cc7\u6599\u7e6a\u88fd",id:"\u8cc7\u6599\u7e6a\u88fd",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u4f5c\u54c1\u6210\u679c"},"\u4f5c\u54c1\u6210\u679c"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/kZtUFAf.gif",alt:null})),Object(l.b)("h3",{id:"\u8f09\u5165\u5916\u90e8\u8cc7\u6599"},"\u8f09\u5165\u5916\u90e8\u8cc7\u6599"),Object(l.b)("h4",{id:"\u5e38\u898b\u7684\u8cc7\u6599\u5f62\u5f0f\uff1ajson-\u8207-csv"},"\u5e38\u898b\u7684\u8cc7\u6599\u5f62\u5f0f\uff1a",Object(l.b)("inlineCode",{parentName:"h4"},"JSON")," \u8207 ",Object(l.b)("inlineCode",{parentName:"h4"},"CSV")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"JSON(JavaScript Object Notation)")," \uff1a\u4e00\u7a2e\u985e\u4f3c JavaScript \u7269\u4ef6\u683c\u5f0f\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u662f\u5e38\u7528\u7684\u8cc7\u6599\u683c\u5f0f"),Object(l.b)("p",null,"\u4f8b\u5982\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "squadName": "Super hero squad",\n  "homeTown": "Metro City"\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"CSV(Comma-Separated Values)")," \uff1a\u55ae\u7d14\u7528\u6587\u5b57\u3001\u9017\u865f\uff08,\uff09\u8207\u63db\u884c\u7b26\u865f\uff08\\n\uff09\u7d44\u6210\u7684\u8cc7\u6599\u683c\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 excel \u7b49\u6587\u66f8\u5de5\u5177\u7de8\u8f2f"),Object(l.b)("p",null,"\u4f8b\u5982\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csv"},'Year,Make,Model,Description,Price\n1997,Ford,E350,"ac, abs, moon",3000.00\n1999,Chevy,"Venture ""Extended Edition""","",4900.00\n')),Object(l.b)("h4",{id:"\u5e38\u898b\u7684\u8cc7\u6599\u4f86\u6e90"},"\u5e38\u898b\u7684\u8cc7\u6599\u4f86\u6e90"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://data.gov.tw/"},"\u653f\u5e9c\u958b\u767c\u8cc7\u6599\u5e73\u53f0"),"\n\u82e5\u8981\u7de8\u8f2f\u6216\u6574\u7406\u8cc7\u6599\uff0c\u53ef\u8f09 CSV \u6a94\u9032\u884c\u7de8\u8f2f\uff0c\u800c\u5f8c\u518d\u5229\u7528\u5de5\u5177\u8f49\u6210 JSON \u683c\u5f0f\u4f9b\u7a0b\u5f0f\u8b80\u53d6")),Object(l.b)("h4",{id:"\u5de5\u5177"},"\u5de5\u5177"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://jsoneditoronline.org/"},"JSON Editor Online"),": JSON \u7dda\u4e0a\u7de8\u8f2f\u5668\uff0c\u53ef\u7528\u4f86\u5206\u6790 JSON \u8cc7\u6599\u7d50\u69cb"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://csvjson.com/"},"CSVJSON"),": \u5c07 CSV \u8f49\u6210 JSON \u683c\u5f0f\u3002")),Object(l.b)("h3",{id:"\u5c07\u8cc7\u6599\u8f49\u63db\u6210\u85dd\u8853"},"\u5c07\u8cc7\u6599\u8f49\u63db\u6210\u85dd\u8853"),Object(l.b)("p",null,"\u4f7f\u7528\u653f\u5e9c\u958b\u653e\u8cc7\u6599\u7684",Object(l.b)("a",{parentName:"p",href:"https://data.gov.tw/dataset/40267"},"\u6797\u696d\u751f\u7522-\u68ee\u6797\u4e3b\u7522\u7269\u751f\u7522\u91cf(\u6a39\u7a2e)\u8cc7\u6599")),Object(l.b)("p",null,"\u5275\u4f5c\u6982\u5ff5\uff1a\u7528\u9577\u689d\u5716\u5448\u73fe\u4e0d\u540c\u5e74\u5ea6\u6a39\u7a2e\u7684\u751f\u7522\u72c0\u6cc1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Step1")," - JSON \u6a94\u6848\u4e0a\u50b3\u5230 OpenProcessing \u7684 Files")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Step2")," - \u65b0\u589e\u4e00\u500b\u5168\u57df\u8b8a\u6578\uff0c\u5728 preload()\u88e1\u9762\u4f7f\u7528 loadJSON()\u8b80\u53d6\u4e0a\u50b3\u7684 JSON \u6a94\uff0c\u6216\u662f\u8b80\u53d6\u5916\u90e8 URL"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'let treeData;\nfunction preload() {\n  treeData = loadJSON("openData.json");\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Step3")," - \u5c07\u7269\u4ef6\u8f49\u6210\u9663\u5217\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"Object.values()"),"\uff0c\u65b9\u4fbf\u5f8c\u7e8c\u905e\u8ff4\u88e1\u9762\u7684\u8cc7\u6599")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function setup() {\n  ...\n  treeData = Object.values(treeData);\n}\n")),Object(l.b)("h3",{id:"\u8cc7\u6599\u7e6a\u88fd"},"\u8cc7\u6599\u7e6a\u88fd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728\u5370\u51fa\u8cc7\u6599\u524d\u5148\u6a19\u6e96\u5316\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"let h = map(d.value,0,8000,0,height)")," // 8000 \u662f\u6240\u6709\u8cc7\u6599\u7684\u6700\u5927\u503c"),Object(l.b)("li",{parentName:"ul"},"\u7be9\u9078\u7279\u5b9a\u8cc7\u6599")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function setup() {\n  ...\n  let useData = [];\n  for (let d of treeData) {\n    //\u53ea\u4f7f\u7528\u76f8\u601d\u6a39\u7684\u8cc7\u6599\n    if (d.dname1 == "\u76f8\u601d\u6a39") {\n      useData.push(d);\n    }\n  }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u756b\u51fa\u76f8\u601d\u6a39\u751f\u7522\u91cf\u7684\u9577\u689d\u5716(\u6a39\u5e79): \u7576\u751f\u7522\u91cf\u8d8a\u9ad8\uff0c\u6a39\u5e79\u8d8a\u5bec\u4e14\u8d8a\u9577")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function draw() {\n  background(0);\n  //\u4f7f\u9577\u689d\u5716\u7531\u4e0b\u5f80\u4e0a\u9577\uff0c\u4e14 x \u8ef8\u5f9e 10 \u958b\u59cb\n  translate(10, height - 20);\n  noStroke();\n  let startColor = color(158, 111, 31);\n  let endColor = color(255, 212, 145);\n\n  for (let i = 0; i < useData.length; i += 2) {\n    let d = useData[i];\n    let ratio = map(d.value, 0, 8000, 0.1, 1);\n    //\u6a39\u5e79\u984f\u8272\u4ecb\u65bcstartColor\u548cendColor\u4e4b\u9593\n    let midColor = lerpColor(startColor, endColor, ratio);\n    fill(midColor);\n\n    push();\n    //\u8abf\u6574\u6a39\u5e79\u4e4b\u9593\u7684\u9593\u8ddd\n    translate(i * 25, 0);\n    //\u8abf\u6574\u6a39\u5e79\u9ad8\u5ea6\u7684\u76f8\u5c0d\u6bd4\u4f8b\n    let h = map(pow(d.value, 0.9), 0, 8000, 0, -height);\n    //\u756b\u51fa\u6a39\u5e79\n    rect(0, 0, 25 * ratio, h);\n\n    //\u6a19\u793a\u5e74\u4efd\u6587\u5b57\n    fill(255);\n    textSize(20);\n    text(d.date, 0, 0);\n    pop();\n  }\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u52a0\u4e0a\u6a39\u8449")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function draw (){\n  ...\n  let startColorG=color(24,102,23)\n  let endColorG=color(153,249,57)\n\n  for(let i=0;i<useData.length;i+=2){\n        let d = useData[i]\n        let ratio = map(d.value,0,8000,0.1,1)\n    //\u6a39\u8449\u7684\u984f\u8272\u4ecb\u65bc startColorG \u548c endColorG \u9593\n        let midColorG = lerpColor(startColorG,endColorG,ratio)\n        ...\n        push()\n            translate(i*25,0)\n\n            let h = map(pow(d.value,0.9),0,8000,0,-height)\n\n            fill(midColorG)\n            ellipse(20*ratio,h-20*ratio,120*ratio)\n            ellipse(-30*ratio,h-10*ratio,120* ratio)\n            ellipse(30*ratio,h+10*ratio,120* ratio)\n      ...\n        pop()\n    }\n\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u589e\u52a0\u7e6a\u88fd\u7684\u6a23\u5f0f")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function setUp() {\n  ...\n  //\u52a0\u4e0a\u9670\u5f71\u4ee5\u53ca\u8a2d\u5b9a\u9670\u5f71\u4f4d\u7f6e\n  drawingContext.shadowColor = color(0, 30);\n  drawingContext.shadowOffsetX = 20;\n  drawingContext.shadowOffsetY = 20;\n  ...\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u52d5\u756b\uff1a\u8b93\u6a39\u96a8\u8457\u6642\u9593\u589e\u9577")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"//\u4f7f\u7528 easing function\nfunction easeOutQuart(x) {\n  return 1 - pow(1 - x, 4);\n}\n\nfunction draw() {\n  //\u6a39\u5e79\u96a8\u8457frameCount\u589e\u52a0\u800c\u589e\u52a0\uff0cmap \u52a0\u4e0a true \u4ee5\u9650\u5236 map \u7684\u4e0a\u9650\n  let animationProgress = easeOutQuart(map(frameCount, 0, 200, 0, 1, true));\n  //\u6a39\u8449\u4e00\u958b\u59cb\u4e0d\u9577\uff0c\u904e\u4e00\u6bb5\u6642\u9593\u624d\u9577\n  let animationProgressG = easeOutQuart(map(frameCount, 50, 250, 0, 1, true));\n\n  for (let i = 0; i < useData.length; i += 2) {\n    let d = useData[i];\n    //\u6a39\u8449\u984f\u8272\u6703\u96a8\u6642\u9593\u8b8a\u5316\n    let ratio = map(d.value, 0, 8000, 0.1, 1) * animationProgressG;\n    let midColor = lerpColor(startColor, endColor, ratio);\n    let midColorG = lerpColor(startColorG, endColorG, ratio);\n\n    fill(midColor);\n    push();\n    translate(i * 25, 0);\n    //\u6a39\u5e79\u9ad8\u5ea6\u6703\u96a8\u6642\u9593\u8b8a\u5316\n    let h = map(pow(d.value, 0.9), 0, 8000, 0, -height) * animationProgress;\n    rect(0, 0, 25 * ratio, h);\n\n    fill(midColorG);\n    ellipse(20 * ratio, h - 20 * ratio, 120 * ratio);\n    ellipse(-30 * ratio, h - 10 * ratio, 120 * ratio);\n    ellipse(30 * ratio, h + 10 * ratio, 120 * ratio);\n\n    pop();\n  }\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6539\u6210\u4ee5\u4e2d\u5fc3\u9ede\u70ba\u4e3b\u7684\u5713\u74b0\u7e5e\u5448\u73fe")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function draw() {\n    //\u756b\u5e03\u4ee5\u4e2d\u5fc3\u9ede\u70ba\u8d77\u9ede\n    translate(width/2,height/2)\n\n    for(let i=0;i<useData.length;i+=2){\n    ...\n        push()\n      //\u6bcf\u500b\u9577\u689d\u5716\u65cb\u8f49\u4e0d\u540c\u89d2\u5ea6(360\u5ea6/\u8cc7\u6599\u7b46\u6578)\u52a0\u4e00\u9ede\u7a7a\u767d\n            rotate(i*(2*PI/(useData.length+5)))\n      //\u8a2d\u5b9a\u96e2\u5713\u5fc3\u8ddd\u96e2\n            translate(0,-50)\n      //\u65cb\u8f49\u6587\u5b57\n            rotate(-PI/2)\n      push()\n        //\u6587\u5b57\u984f\u8272\u70ba\u767d\u8272\n        fill(255)\n              text(Number(d.date),0,0)\n      pop()\n        pop()\n    }\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u756b\u4e0a\u6a39\u7684\u751f\u7522\u91cf\u523b\u5ea6")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function draw() {\n\n  //\u6a39\u7684\u751f\u7522\u91cf\u523b\u5ea6\n    push()\n    //\u65cb\u8f49\u756b\u5e03\u9632\u6b62\u6587\u5b57\u88ab\u6a39\u64cb\u5230\n        rotate(-PI/8)\n        noFill()\n        stroke(255,100)\n    for(let i=0;i<5;i++){\n    //\u523b\u5ea6\u9ad8\u5ea6\u7684\u8abf\u6574\u53c3\u65780.9\u9700\u8207\u4e0b\u9762\u6a39\u5e79\u9ad8\u5ea6\u4e00\u81f4\n        let h = map(pow(i*2000,0.9),0,8000,0,-height)* animationProgress\n    //\u4e0b\u65b9\u6a39\u5e79\u79fb\u52d5\u4e86-50\uff0c\u56e0\u6b64\u523b\u5ea6\u79fb\u52d5 *2 \u7b49\u65bc -100\n        ellipse(0,0,h*2 -100)\n    //\u6587\u5b57\u523b\u5ea6\n        text(i*2000,0,h-50)\n    }\n    pop()\n\n    for(let i=0;i<useData.length;i+=2){\n        let d = useData[i]\n        let ratio = map(d.value,0,8000,0.1,1)* animationProgressG\n\n        push()\n      ...\n            translate(0,-50)\n            let h = map(pow(d.value,0.9),0,8000,0,-height) * animationProgress\n            rect(0,0,25*ratio,h)\n      ...\n        pop()\n    }\n")))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);