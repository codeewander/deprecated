(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,d=s["".concat(l,".").concat(O)]||s[O]||u[O]||r;return n?c.a.createElement(d,b(b({ref:t},o),{},{components:n})):c.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<r;o++)l[o]=n[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),r=(n(0),n(146)),l={id:"canvas-basic",title:"Canvas 2D\u7e6a\u5716\u57fa\u790e",keywords:["canvas","p5.js"]},b={unversionedId:"creative-coding/canvas-basic",id:"creative-coding/canvas-basic",isDocsHomePage:!1,title:"Canvas 2D\u7e6a\u5716\u57fa\u790e",description:"\u4ec0\u9ebc\u662f Canvas?",source:"@site/docs/creative-coding/canvas-basic.md",slug:"/creative-coding/canvas-basic",permalink:"/docs/creative-coding/canvas-basic",version:"current",sidebar:"creative",next:{title:"P5\u5be6\u4f5c",permalink:"/docs/creative-coding/data-visualization"}},i=[{value:"\u4ec0\u9ebc\u662f Canvas?",id:"\u4ec0\u9ebc\u662f-canvas",children:[]},{value:"Canvas \u7279\u6027",id:"canvas-\u7279\u6027",children:[]},{value:"\u4f7f\u7528 Canvas",id:"\u4f7f\u7528-canvas",children:[]},{value:"\u5ea7\u6a19\u7cfb\u7d71",id:"\u5ea7\u6a19\u7cfb\u7d71",children:[]},{value:"\u57fa\u672c\u5716\u6027\u7e6a\u88fd",id:"\u57fa\u672c\u5716\u6027\u7e6a\u88fd",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u4ec0\u9ebc\u662f-canvas"},"\u4ec0\u9ebc\u662f Canvas?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6700\u65e9\u7531 Apple \u70ba Mac OS X Dashboard \u6240\u63d0\u51fa\uff0c\u800c\u5f8c Canvas \u88ab HTML5 \u6a19\u6e96\u52a0\u4ee5\u5b9a\u7fa9\u70ba canvas \u5143\u7d20\uff0c\u73fe\u5df2\u652f\u63f4\u591a\u6578\u4e3b\u6d41\u700f\u89bd\u5668"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e JavaScript \u4e32\u63a5 Canvas API \uff0c\u7372\u53d6 Canvas \u7269\u4ef6\u7684\u5167\u90e8\u65b9\u6cd5\uff0c\u85c9\u6b64\u5728\u7db2\u9801\u4e0a\u7e6a\u88fd\u8a31\u591a\u7d30\u7dfb\u7684\u7279\u6548\u6216\u52d5\u756b")),Object(r.b)("p",null,"\u7c21\u800c\u8a00\u4e4b\uff0c\u53ef\u4ee5\u628a canvas \u60f3\u50cf\u6210\u7db2\u9801\u4e2d\u4e00\u5f35\u53ef\u4ee5\u81ea\u7531\u63ee\u7051\u7684\u756b\u5e03\u5143\u7d20\uff0c\u900f\u904e JavaScript \u7372\u53d6 Canvas \u7269\u4ef6\uff0c\u4e26\u5229\u7528\u7269\u4ef6\u88e1\u7684\u65b9\u6cd5\u5728\u756b\u5e03\u4e0a\u7e6a\u88fd\u7dda\u689d\u3001\u5f62\u72c0\u8207\u984f\u8272"),Object(r.b)("h3",{id:"canvas-\u7279\u6027"},"Canvas \u7279\u6027"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u53ef\u4ee5\u81ea\u7531\u7e6a\u88fd\u7684\u5143\u4ef6\u5340\u57df"),Object(r.b)("li",{parentName:"ol"},"\u53ef\u4ee5\u63a7\u5236\u6bcf\u50cf\u7d20\u7684\u984f\u8272\u548c\u7e6a\u88fd"),Object(r.b)("li",{parentName:"ol"},"\u6709\u9ad8\u7684\u64cd\u63a7\u5ea6\uff0c\u76f8\u5c0d\u9ad8\u7684\u6280\u8853\u9580\u6abb"),Object(r.b)("li",{parentName:"ol"},"\u985e\u4f3c\u4e00\u5f35\u52d5\u614b\u53ef\u6539\u5beb\u7684\u5716\u7247")),Object(r.b)("h3",{id:"\u4f7f\u7528-canvas"},"\u4f7f\u7528 Canvas"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u63d2\u5165 HTML Canvas \u6a19\u7c64\n\u5728 HTML \u4e2d\u52a0\u5165 canvas \u5143\u7d20\uff0c\u9810\u8a2d\u7684\u756b\u5e03\u5bec\u9ad8\u70ba 300px x 150px\u3002\u6211\u5011\u53ef\u4ee5\u900f\u904e HTML \u7684\u5bec\u9ad8\u5c6c\u6027\u81ea\u8a02\u5927\u5c0f\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528 CSS \u6307\u5b9a\u5bec\u9ad8\uff08\u4f46\u5167\u90e8\u5f71\u50cf\u4e5f\u6703\u8ddf\u8457\u7e2e\u653e\uff09")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<canvas id="canvas1" width="150" height="150"></canvas>\n')),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u4f7f\u7528 JS \u7522\u751f\u6e32\u67d3\u74b0\u5883")),Object(r.b)("p",null,"\u5148\u900f\u904e DOM \u9078\u53d6\u5668\u6307\u5b9a canvas \u5143\u7d20\uff0c\u518d\u5229\u7528 getContext() \u7372\u53d6 Canvas \u7e6a\u5716\u7269\u4ef6\uff0c\u50b3\u5165\u53c3\u6578 '2d' \u5f97\u5230 CanvasRenderingContext2D \u7269\u4ef6\u4f5c\u70ba Canvas 2D \u7684\u6e32\u67d3\u74b0\u5883"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"const canvas = document.getElementById('canvas1');\nconst ctx = canvas.getContext('2d');\n")),Object(r.b)("p",null,"\u4e5f\u53ef\u4ee5\u5229\u7528 JS \u8abf\u6574\u756b\u5e03\u5927\u5c0f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"canvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"getContext()"),"\u63a5\u53d7\u5169\u500b\u53c3\u6578\uff0c\u7b2c\u4e00\u500b\u662f\u985e\u578b\uff0c\u53ef\u4ee5\u662f\u5e73\u9762\u7684 2d\uff0c\u6216\u662f 3D \u7acb\u9ad4\u7684 webgl \u7b49\uff1b\u7b2c\u4e8c\u500b\u662f\u76f8\u95dc\u5c6c\u6027"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext"},"\u53c3\u8003\uff1agetContext@MDN"))),Object(r.b)("h3",{id:"\u5ea7\u6a19\u7cfb\u7d71"},"\u5ea7\u6a19\u7cfb\u7d71"),Object(r.b)("p",null,"Canvas 2D \u7684\u5ea7\u6a19\u7cfb\u7d71\u4ee5\u5de6\u4e0a\u89d2\u70ba\u539f\u9ede\uff0c\u5411\u53f3\u6b63\u5c04\u51fa X \u8ef8\uff0c\u5411\u4e0b\u6b63\u5c04\u51fa Y \u8ef8\uff0c\u9806\u6642\u91dd\u70ba\u65cb\u8f49\u65b9\u5411\u3002"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ucaRfDl.png",alt:null})),Object(r.b)("h3",{id:"\u57fa\u672c\u5716\u6027\u7e6a\u88fd"},"\u57fa\u672c\u5716\u6027\u7e6a\u88fd"),Object(r.b)("h4",{id:"\u77e9\u578b"},"\u77e9\u578b"),Object(r.b)("p",null,"\u4e0d\u540c\u65bc SVG\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"<canvas>"),"\u53ea\u652f\u63f4\u4e00\u7a2e\u539f\u59cb\u5716\u5f62\uff0c\u77e9\u5f62\uff0c\u77e9\u5f62\u5171\u6709\u4e09\u500b\u7e6a\u5716\u51fd\u6578\uff1a"),Object(r.b)("p",null,"x, y \u4ee3\u8868\u5f9e\u539f\u9ede\u51fa\u767c\u7684\u5ea7\u6a19\u4f4d\u7f6e\uff0cwidth, height \u4ee3\u8868\u77e9\u5f62\u7684\u5bec\u9ad8"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// \u7e6a\u88fd\u586b\u8272\u77e9\u5f62\nctx.fillRect(150, 50, 100, 50);\n\n// \u7e6a\u88fd\u77e9\u5f62\u908a\u6846\nctx.strokeRect(150, 150, 100, 50);\n\n// \u6e05\u9664\u77e9\u5f62\u5167\u7684\u5167\u5bb9\nctx.clearRect(x, y, width, height);\n")),Object(r.b)("h4",{id:"\u8def\u5f91"},"\u8def\u5f91"),Object(r.b)("p",null,"\u985e\u4f3c\u756b\u7b46\u7684\u539f\u7406\u3002\u4e0b\u7b46\u4e4b\u524d\uff0c\u9700\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"beginPath()")," \u5ba3\u544a\uff0c\u63a5\u4e0b\u4f86\u6703\u628a\u756b\u7684\u8def\u5f91\u5b58\u9032\u4e00\u500b\u6e05\u55ae\u5167\uff0c\u6210\u70ba\u8def\u5f91\u96c6\u5408\u3002\u6bcf\u6b21\u547c\u53eb",Object(r.b)("inlineCode",{parentName:"p"},"beginPath()"),"\uff0c\u8def\u5f91\u6e05\u55ae\u6703\u88ab\u91cd\u8a2d\uff0c\u7136\u5f8c\u5c31\u53ef\u4ee5\u91cd\u65b0\u7e6a\u88fd\u5f92\u5211"),Object(r.b)("p",null,"\u7b2c\u4e00\u6b21\u4e0b\u7b46\u6642\u8981\u5148\u78ba\u5b9a\u4e0b\u7b46\u7684\u9ede\u3002",Object(r.b)("inlineCode",{parentName:"p"},"moveTo()")," \u6703\u5c07\u756b\u7b46\u79fb\u52d5\u5230\uff08\u7b2c\u4e00\u500b\uff09\u4e0b\u7b46\u7684\u9ede\u3002"),Object(r.b)("p",null,"\u7576\u5716\u5f62\u5df2\u7d93\u9589\u5408\u6216\u662f\u53ea\u542b\u4e00\u500b\u9ede\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"closePath()"),"\u4e0d\u4e00\u5b9a\u9700\u8981"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'//\u7e6a\u88fd\u4e00\u500b\u4e09\u89d2\u5f62\nctx.beginPath(); // \u958b\u59cb\u7e6a\u88fd\u8def\u5f91;\nctx.moveTo(75, 50); //\u79fb\u52d5\u5230\u5ea7\u6a19\nctx.lineTo(100, 75); //\u756b\u76f4\u7dda\nctx.lineTo(100, 25);\nctx.fill(); //\u586b\u8272\nctx.closePath(); // \u81ea\u52d5\u5c01\u9589\u8def\u5f91\nctx.strokeStyle = "red"; // \u6307\u5b9a\u7dda\u6846\u984f\u8272\nctx.stroke(); // \u7dda\u6846\u4e0a\u8272\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7576\u547c\u53eb",Object(r.b)("inlineCode",{parentName:"p"},"fill()"),"\uff0c\u4efb\u4f55\u958b\u653e\u7684\u5716\u5f62\u90fd\u6703\u81ea\u52d5\u586b\u6eff\u9589\u5408\uff0c\u4f46\u82e5\u6b64\u6642\u7528",Object(r.b)("inlineCode",{parentName:"p"},"stroke()"),"\u7e6a\u88fd\u6846\u7dda\uff0c\u53ef\u767c\u73fe\u53ea\u6709\u5169\u689d\u6846\u7dda\uff0c\u4ecd\u7136\u9700\u8981\u4f7f\u7528 closePath()\uff0c\u624d\u53ef\u756b\u51fa\u5b8c\u6574\u7684\u6846\u7dda")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8a9e\u6cd5\u5c0f\u6574\u7406\uff1a"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8def\u5f91\u958b\u59cb\u8207\u5c01\u9589\uff1abeginPath / closePath")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u79fb\u52d5\u8207\u756b\u7dda\uff1amoveTo / lineTo / arc ...")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u586b\u8272\u6216\u7dda\u689d\u984f\u8272: fillStyle / strokeStyle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u586b\u8272\u6216\u8def\u5f91\u586b\u8272\uff1afill / stroke")))),Object(r.b)("h4",{id:"\u5f27\u5f62"},"\u5f27\u5f62"),Object(r.b)("p",null,"\u5728 Canvas \u4e2d\uff0c\u5713\u5f62\u4e5f\u5c6c\u65bc\u8def\u5f91\u7684\u4e00\u7a2e\uff0c\u4e0d\u50cf\u77e9\u5f62\u53ef\u4ee5\u55ae\u7368\u7e6a\u88fd\uff0c\u9700\u8981\u5148\u5ba3\u544a ",Object(r.b)("inlineCode",{parentName:"p"},"beginPath()")," \uff0c\u518d\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"arc(cx, cy, r, startAngle, endAngle, counterclockwise?")," \u4f86\u7e6a\u88fd\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cx"),"\u548c",Object(r.b)("inlineCode",{parentName:"li"},"cy"),"\u4ee3\u8868\u5713\u5fc3\u7684\u4f4d\u7f6e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"startAngle")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"endAngle")," \u5206\u5225\u4ee3\u8868\u8d77\u9ede\u5f27\u5ea6\u8207\u7d42\u9ede\u5f27\u5ea6\uff080 \u5ea6- 360 \u5ea6\uff09\uff0c\u53ef\u4ee5\u7528 0 - 2","*","Math.PI \u4f86\u8868\u793a\uff080 \u5ea6\u70ba x \u8ef8\u65b9\u5411\uff09"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"counterclockwis")," \u70ba\u53ef\u9078\u53c3\u6578\uff0c\u503c\u70ba boolean\uff0c\u9810\u8a2d\u70ba false\uff0c\u4ee3\u8868\u9806\u6642\u91dd\u7e6a\u88fd\u3002")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"arc()"),"\u7528\u7684\u662f\u5f27\u5ea6(radians)\u800c\u975e\u89d2\u5ea6(degrees)\nradians = (Math.PI/180) ","*"," degrees")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"ctx.beginPath();\n//\u756b\u4e00\u500b\u5713\nctx.arc(50, 50, 50, 0, 2 * Math.PI, false);\nctx.closePath();\n//\u756b\u5916\u6846\nctx.stroke();\n")),Object(r.b)("h4",{id:"\u6587\u5b57"},"\u6587\u5b57"),Object(r.b)("p",null,"Canvas \u4e5f\u652f\u63f4\u6587\u5b57\u7e6a\u88fd\u4ee5\u53ca\u5b57\u578b\u5927\u5c0f\u3001\u5b57\u9ad4\u3001\u65b9\u5411\u4ee5\u53ca\u5c0d\u9f4a\u65b9\u5f0f\u7b49\u8a2d\u5b9a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'// \u7e6a\u88fd\u6587\u5b57\nctx.fillText("Hellow World!", x, y);\n\n// \u7e6a\u88fd\u6709\u80cc\u666f\u7684\u6587\u5b57\nctx.strokeText(text, x, y); // text \u70ba\u5b57\u4e32\n\n// \u8a2d\u5b9a\u6587\u5b57\u5927\u5c0f\u3001\u5b57\u9ad4\u8207\u7c97\u9ad4\nctx.font = \'bold 18px "Microsoft JhengHei"\';\n\n// \u8a2d\u5b9a\u6587\u5b57\u6c34\u5e73\u5c0d\u9f4a\u65b9\u5f0f\uff08start\u3001end\u3001left\u3001right\u3001center\uff0c\u9810\u8a2d\u70ba start\uff09\nctx.textAlign = "center";\n\n// \u8a2d\u5b9a\u6587\u5b57\u5782\u76f4\u5c0d\u9f4a\u65b9\u5f0f\uff08top\u3001hanging\u3001middle\u3001alphabetic\u3001ideographic\u3001bottom\uff0c\u9810\u8a2d\u70ba alphabetic\uff09\nctx.textBaseline = "middle";\n')),Object(r.b)("p",null,"\u53c3\u8003\u8cc7\u6599\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial"},"Canvas tutorial@MDN")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://test.domojyun.net/MEMO/Canvas/"},"Canvas 2D \u5b78\u7fd2\u7b46\u8a18"))))}p.isMDXComponent=!0}}]);