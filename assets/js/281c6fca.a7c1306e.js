(self.webpackChunk=self.webpackChunk||[]).push([[2976],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<p;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},517:function(e,t,r){"use strict";var a=r(7378);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},6359:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7378),n=r(4309),p=r(8944),i="tabItem_c0e5",l="tabItemActive_28AG";var o=37,u=39;var s=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,n.Z)(),h=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(s),y=v[0],b=v[1],g=a.Children.toArray(e.children),w=[];if(null!=m){var P=h[m];null!=P&&P!==y&&c.some((function(e){return e.value===P}))&&b(P)}var N=function(e){var t=e.currentTarget,r=w.indexOf(t),a=c[r].value;b(a),null!=m&&(k(m,a),setTimeout((function(){var e,r,a,n,p,i,o,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,p=e.right,i=window,o=i.innerHeight,u=i.innerWidth,r>=0&&p<=u&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case o:var n=w.indexOf(e.target)-1;r=w[n]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,p.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4956:function(e,t,r){"use strict";var a=(0,r(7378).createContext)(void 0);t.Z=a},4309:function(e,t,r){"use strict";var a=r(7378),n=r(4956);t.Z=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6475:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=r(9603),n=r(120),p=(r(7378),r(5318)),i=r(6359),l=r(517),o=["components"],u={title:"Puppet Provider: Lark",sidebar_label:"Lark"},s={unversionedId:"puppet-providers/lark",id:"puppet-providers/lark",isDocsHomePage:!1,title:"Puppet Provider: Lark",description:"Wechaty Puppet Lark",source:"@site/docs/puppet-providers/lark.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/lark",permalink:"/docs/puppet-providers/lark",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/lark.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1623526353,formattedLastUpdatedAt:"6/12/2021",sidebar_label:"Lark",frontMatter:{title:"Puppet Provider: Lark",sidebar_label:"Lark"},sidebar:"docs",previous:{title:"Puppet Provider: Gitter",permalink:"/docs/puppet-providers/gitter"},next:{title:"Puppet Provider: PadLocal",permalink:"/docs/puppet-providers/padlocal"}},c=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"lark"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Lark-blueviolet",alt:"Wechaty Puppet Lark"}))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-lark/HEAD/docs/images/wechaty-puppet-lark.png",alt:"Wechaty Puppet Lark"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-lark"},(0,p.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-lark.svg",alt:"NPM Version"})),"\n",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-lark?activeTab=versions"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-lark/next.svg",alt:"npm (tag)"}))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Repo: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-lark"},"https://github.com/wechaty/wechaty-puppet-lark")),(0,p.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-lark/issues"},"https://github.com/wechaty/wechaty-puppet-lark/issues"))),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Send & receive messages")),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,p.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,p.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nset WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n")))),(0,p.kt)("h2",{id:"roadmap"},"Roadmap"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"to be added")),(0,p.kt)("h2",{id:"history"},"History"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"\u57fa\u4e8e\u5f00\u653e API \u5c01\u88c5 Wechaty \u63a5\u53e3\u4e0b\u7684\u98de\u4e66\u804a\u5929\u673a\u5668\u4eba, \u8303\u854a, Sep 30, 2020"))),(0,p.kt)("h2",{id:"maintainers"},"Maintainers"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/roxanne718"},"@Roxanne718"))))}d.isMDXComponent=!0},8944:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);