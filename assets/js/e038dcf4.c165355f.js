(self.webpackChunk=self.webpackChunk||[]).push([[9685],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=u(n),h=o,y=f["".concat(i,".").concat(h)]||f[h]||l[h]||a;return n?r.createElement(y,c(c({ref:e},p),{},{components:n})):r.createElement(y,c({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9826:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),c=["components"],s={},i={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1623526353,formattedLastUpdatedAt:"6/12/2021",frontMatter:{}},u=[],p={toc:u};function l(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}l.isMDXComponent=!0}}]);