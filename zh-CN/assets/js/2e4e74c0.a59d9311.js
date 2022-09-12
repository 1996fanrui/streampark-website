"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[3068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"6-use",title:"use",sidebar_position:6},i=void 0,o={unversionedId:"flinksql/syntax/6-use",id:"flinksql/syntax/6-use",title:"use",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/6-use.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/6-use",permalink:"/zh-CN/docs/flinksql/syntax/6-use",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/6-use.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"6-use",title:"use",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"insert",permalink:"/zh-CN/docs/flinksql/syntax/5-insert"},next:{title:"select",permalink:"/zh-CN/docs/flinksql/syntax/7-select"}},s={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"USE CATALOG",id:"use-catalog",level:2},{value:"USE MODULES",id:"use-modules",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:3},{value:"USE",id:"use",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"USE\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u6570\u636e\u5e93\u6216catalog\uff0c\u6216\u66f4\u6539\u6a21\u5757\u7684\u89e3\u6790\u987a\u5e8f\u548c\u542f\u7528\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"use-catalog"},"USE CATALOG"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE CATALOG catalog_name\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5f53\u524dcatalog\u3002\u6240\u6709\u672a\u663e\u5f0f\u6307\u5b9acatalog\u7684\u540e\u7eed\u547d\u4ee4\u90fd\u5c06\u4f7f\u7528\u6b64catalog\u3002 \u5982\u679c\u63d0\u4f9b\u7684catalog\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002\u9ed8\u8ba4\u5f53\u524dcatalog\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"default_catalog"),"\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"flink sql"),"\u4e2d\u521b\u5efa\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hive catalog"),"\uff0c\u518d\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"use"),"\u8bed\u53e5\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hive catalog"),"\u4e4b\u540e\uff0cflink \u5c31\u8fde\u63a5\u4e0a\u4e86 hive \u7684\u5143\u6570\u636e\uff0c\n\u4e4b\u540e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u521b\u5efa\u7684\u975e\u4e34\u65f6\u8868\uff0c\u5176\u5143\u6570\u636e\u5c31\u4f1a\u88ab\u4fdd\u5b58\u5230 hive \u7684\u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u5728\u6bcf\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"flink sql"),"\u4efb\u52a1\u4e2d\u91cd\u590d\u521b\u5efa\u8fde\u63a5\u5916\u90e8\u7cfb\u7edf\u7684\u865a\u62df\u8868\uff0c\u5c31\u53ef\u4ee5\u53ea\u5728\u7b2c\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"flink sql"),"\u4efb\u52a1\u4e2d\u521b\u5efa\u4e00\u6b21\u8868\uff0c\u4e4b\u540e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"flink sql"),"\u4efb\u52a1\u5c31\u4e0d\u518d\u9700\u8981\u7f16\u5199\u5efa\u8868\u8bed\u53e5\u4e86\uff0c\n\u53ea\u8981\u6709\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"hive catalog"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"use catalog hive"),"\u8bed\u53e5\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"use-modules"},"USE MODULES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE MODULES module_name1[, module_name2, ...]\n")),(0,r.kt)("p",null,"\u6309\u7167\u58f0\u660e\u7684\u987a\u5e8f\u8bbe\u7f6e\u5df2\u542f\u7528\u7684\u6a21\u5757\u3002\u6240\u6709\u540e\u7eed\u547d\u4ee4\u5c06\u89e3\u6790\u542f\u7528\u6a21\u5757\u4e2d\u7684\u5143\u6570\u636e(\u51fd\u6570/\u7528\u6237\u5b9a\u4e49\u7c7b\u578b/\u89c4\u5219\u7b49)\uff0c\u5e76\u9075\u5faa\u58f0\u660e\u987a\u5e8f\u3002"),(0,r.kt)("p",null,"\u6a21\u5757\u5728\u52a0\u8f7d\u65f6\u88ab\u9ed8\u8ba4\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528USE modules\u8bed\u53e5\uff0c\u52a0\u8f7d\u7684\u6a21\u5757\u5c06\u88ab\u7981\u7528\u3002\u9ed8\u8ba4\u52a0\u8f7d\u548c\u542f\u7528\u7684\u6a21\u5757\u662fcore\u3002\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u8bed\u53e5\u542f\u52a8\u6a21\u5757\uff0c\u5219\u4e0d\u5728\u8be5\u8bed\u53e5\u4e2d\u7684\u6a21\u5757\u90fd\u5c06\u88ab\u7981\u7528\u3002"),(0,r.kt)("h3",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use hive, core;\n")),(0,r.kt)("p",null,"\u8868\u793a\u540e\u7eed\u4f7f\u7528\u5230\u7684\u51fd\u6570/\u7528\u6237\u5b9a\u4e49\u7c7b\u578b/\u89c4\u5219\u7b49\uff0c\u4f1a\u5148\u6309\u7167 hive \u6765\u89e3\u6790\uff0c\u5982\u679c hive \u89e3\u6790\u4e0d\u4e86\u7684\uff0c\u518d\u7528 flink \u6765\u89e3\u6790\u3002"),(0,r.kt)("h2",{id:"use"},"USE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [catalog_name.]database_name\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5f53\u524d\u6570\u636e\u5e93\u3002\u6240\u6709\u672a\u663e\u5f0f\u6307\u5b9a\u6570\u636e\u5e93\u7684\u540e\u7eed\u547d\u4ee4\u90fd\u5c06\u4f7f\u7528\u6b64\u6570\u636e\u5e93\u3002\u5982\u679c\u63d0\u4f9b\u7684\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002\u9ed8\u8ba4\u7684\u5f53\u524d\u6570\u636e\u5e93\u662fdefault_database\u3002"))}p.isMDXComponent=!0}}]);