"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[4298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={id:"11-drop",title:"drop",sidebar_position:11},p=void 0,o={unversionedId:"flinksql/syntax/11-drop",id:"flinksql/syntax/11-drop",title:"drop",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/11-drop.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/11-drop",permalink:"/zh-CN/docs/flinksql/syntax/11-drop",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/11-drop.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"11-drop",title:"drop",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"explain",permalink:"/zh-CN/docs/flinksql/syntax/10-explain"},next:{title:"load",permalink:"/zh-CN/docs/flinksql/syntax/12-load"}},i={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"DROP CATALOG",id:"drop-catalog",level:3},{value:"DROP TABLE",id:"drop-table",level:3},{value:"DROP DATABASE",id:"drop-database",level:3},{value:"DROP VIEW",id:"drop-view",level:3},{value:"DROP FUNCTION",id:"drop-function",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"DROP\u8bed\u53e5\u7528\u4e8e\u4ece\u5f53\u524d\u6216\u6307\u5b9a\u7684Catalog\u4e2d\u5220\u9664\u5df2\u6ce8\u518c\u7684\u8868/\u89c6\u56fe/\u51fd\u6570\u3002 Flink SQL\u76ee\u524d\u652f\u6301\u4ee5\u4e0bDROP\u8bed\u53e5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DROP CATALOG\uff08\u4ece1.14.x\u5f00\u59cb\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"DROP TABLE"),(0,l.kt)("li",{parentName:"ul"},"DROP DATABASE"),(0,l.kt)("li",{parentName:"ul"},"DROP VIEW"),(0,l.kt)("li",{parentName:"ul"},"DROP FUNCTION")),(0,l.kt)("h3",{id:"drop-catalog"},"DROP CATALOG"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ece1.14.x\u5f00\u59cb\u652f\u6301"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP CATALOG [IF EXISTS] catalog_name\n")),(0,l.kt)("p",null,"\u5220\u9664\u6307\u5b9a\u7684 catalog\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")),(0,l.kt)("p",null,"\u5982\u679c\u8be5 catalog \u4e0d\u5b58\u5728\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002"),(0,l.kt)("h3",{id:"drop-table"},"DROP TABLE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [catalog_name.][db_name.]table_name\n")),(0,l.kt)("p",null,"\u5220\u9664\u6307\u5b9a\u8868\u540d\u7684\u8868\u3002\u5982\u679c\u8981\u5220\u9664\u7684\u8868\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY")),(0,l.kt)("p",null,"\u5220\u9664\u5177\u6709\u76ee\u5f55\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u4e34\u65f6\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")),(0,l.kt)("p",null,"\u5982\u679c\u8be5\u8868\u4e0d\u5b58\u5728\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002"),(0,l.kt)("h3",{id:"drop-database"},"DROP DATABASE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] [catalog_name.]db_name [ (RESTRICT | CASCADE) ]\n")),(0,l.kt)("p",null,"\u5220\u9664\u7ed9\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u7684\u6570\u636e\u5e93\u3002\u5982\u679c\u8981\u5220\u9664\u7684\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")),(0,l.kt)("p",null,"\u5982\u679c\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RESTRICT")),(0,l.kt)("p",null,"\u5220\u9664\u975e\u7a7a\u6570\u636e\u5e93\u5c06\u89e6\u53d1\u5f02\u5e38\u3002\u9ed8\u8ba4\u542f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CASCADE")),(0,l.kt)("p",null,"\u5220\u9664\u975e\u7a7a\u6570\u636e\u5e93\u65f6\u4e5f\u4f1a\u5220\u9664\u6240\u6709\u76f8\u5173\u7684\u8868\u548c\u51fd\u6570\u3002"),(0,l.kt)("h3",{id:"drop-view"},"DROP VIEW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] VIEW  [IF EXISTS] [catalog_name.][db_name.]view_name\n")),(0,l.kt)("p",null,"\u5220\u9664\u5177\u6709\u76ee\u5f55\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u89c6\u56fe\u3002\u5982\u679c\u8981\u5220\u9664\u7684\u89c6\u56fe\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY")),(0,l.kt)("p",null,"\u5220\u9664\u5177\u6709\u76ee\u5f55\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u4e34\u65f6\u89c6\u56fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")),(0,l.kt)("p",null,"\u5982\u679c\u89c6\u56fe\u4e0d\u5b58\u5728\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002Flink\u4e0d\u901a\u8fc7CASCADE/RESTRICT\u5173\u952e\u5b57\u7ef4\u62a4\u89c6\u56fe\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f53\u524d\u7684\u65b9\u5f0f\u662f\u5f53\u7528\u6237\u8bd5\u56fe\u5728\u89c6\u56fe\u7684\u5e95\u5c42\u8868\u88ab\u5220\u9664\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u89c6\u56fe\u65f6\u629b\u51fa\u5ef6\u8fdf\u9519\u8bef\u6d88\u606f\u3002"),(0,l.kt)("h3",{id:"drop-function"},"DROP FUNCTION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY|TEMPORARY SYSTEM] FUNCTION [IF EXISTS] [catalog_name.][db_name.]function_name\n")),(0,l.kt)("p",null,"\u5220\u9664\u5177\u6709\u76ee\u5f55\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u76ee\u5f55\u51fd\u6570\u3002\u5982\u679c\u8981\u5220\u9664\u7684\u51fd\u6570\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY")),(0,l.kt)("p",null,"\u5220\u9664\u5177\u6709\u76ee\u5f55\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u4e34\u65f6\u76ee\u5f55\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY SYSTEM")),(0,l.kt)("p",null,"\u5220\u9664\u6ca1\u6709\u547d\u540d\u7a7a\u95f4\u7684\u4e34\u65f6\u7cfb\u7edf\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")),(0,l.kt)("p",null,"\u5982\u679c\u51fd\u6570\u4e0d\u5b58\u5728\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002"))}c.isMDXComponent=!0}}]);