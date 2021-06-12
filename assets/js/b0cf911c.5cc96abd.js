(self.webpackChunk=self.webpackChunk||[]).push([[3983],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(n),g=a,y=h["".concat(l,".").concat(g)]||h[g]||u[g]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5847:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],p={slug:"/polyglot/openapi/",title:"Wechaty OpenAPI",sidebar_label:"OpenAPI"},l={unversionedId:"polyglot/openapi/overview",id:"polyglot/openapi/overview",isDocsHomePage:!1,title:"Wechaty OpenAPI",description:"Wechaty OpenAPI",source:"@site/docs/polyglot/openapi/overview.md",sourceDirName:"polyglot/openapi",slug:"/polyglot/openapi/",permalink:"/docs/polyglot/openapi/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/overview.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1623526353,formattedLastUpdatedAt:"6/12/2021",sidebar_label:"OpenAPI",frontMatter:{slug:"/polyglot/openapi/",title:"Wechaty OpenAPI",sidebar_label:"OpenAPI"},sidebar:"docs",previous:{title:"Polyglot Wechaty",permalink:"/docs/polyglot/"},next:{title:"TypeScript Wechaty",permalink:"/docs/polyglot/typescript/"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/openapi"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-OpenAPI-6a4",alt:"Wechaty OpenAPI"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/openapi"},"https://github.com/wechaty/openapi")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/openapi-wechaty-getting-started.git\ncd openapi-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#openapi"},"https://wechaty.js.org/tags.html#openapi")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}u.isMDXComponent=!0}}]);