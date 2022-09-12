"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[2372],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=c(n),f=a,s=k["".concat(o,".").concat(f)]||k[f]||d[f]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3463:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"9-print",title:"Print",sidebar_position:9},i=void 0,p={unversionedId:"flinksql/connector/9-print",id:"flinksql/connector/9-print",title:"Print",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/connector/9-print.md",sourceDirName:"flinksql/connector",slug:"/flinksql/connector/9-print",permalink:"/zh-CN/docs/flinksql/connector/9-print",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/connector/9-print.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"9-print",title:"Print",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"DataGen",permalink:"/zh-CN/docs/flinksql/connector/8-data-gen"},next:{title:"BlackHole",permalink:"/zh-CN/docs/flinksql/connector/10-black-hole"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u521b\u5efaPrint\u8868",id:"\u521b\u5efaprint\u8868",level:2},{value:"\u8fde\u63a5\u5668\u53c2\u6570",id:"\u8fde\u63a5\u5668\u53c2\u6570",level:2}],m={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sink")),(0,a.kt)("p",null,"Print \u8fde\u63a5\u5668\u5141\u8bb8\u5c06\u6bcf\u4e00\u884c\u5199\u5165\u6807\u51c6\u8f93\u51fa\u6d41\u6216\u8005\u6807\u51c6\u9519\u8bef\u6d41\u3002"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u76ee\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u6d41\u4f5c\u4e1a\u6d4b\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u751f\u4ea7\u8c03\u8bd5\u5e26\u6765\u6781\u5927\u4fbf\u5229\u3002")),(0,a.kt)("p",null,"\u56db\u79cd format \u9009\u9879\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6253\u5370\u5185\u5bb9"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6761\u4ef6 1"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6761\u4ef6 2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bc6\u7b26:\u4efb\u52a1 ID>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u63d0\u4f9b\u524d\u7f00\u6253\u5370\u6807\u8bc6\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bc6\u7b26>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u63d0\u4f9b\u524d\u7f00\u6253\u5370\u6807\u8bc6\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1 ID>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u9700\u8981\u63d0\u4f9b\u524d\u7f00\u6253\u5370\u6807\u8bc6\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u9700\u8981\u63d0\u4f9b\u524d\u7f00\u6253\u5370\u6807\u8bc6\u7b26"),(0,a.kt)("td",{parentName:"tr",align:"left"},"parallelism == 1")))),(0,a.kt)("p",null,"\u8f93\u51fa\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"$row_kind(f0,f1,f2\u2026)"),"\uff0crow_kind\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"RowKind")," \u7c7b\u578b\u7684\u77ed\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("strong",{parentName:"p"},"+I(1,1)")," \u3002"),(0,a.kt)("p",null,"Print \u8fde\u63a5\u5668\u662f\u5185\u7f6e\u7684\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u4f7f\u7528 Print Sinks \u6253\u5370\u8bb0\u5f55\uff0c\u9700\u8981\u6ce8\u610f\u89c2\u5bdf\u4efb\u52a1\u65e5\u5fd7\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efaprint\u8868"},"\u521b\u5efaPrint\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE print_table (\n    f0 INT,\n    f1 INT,\n    f2 STRING,\n    f3 DOUBLE\n) WITH (\n    'connector' = 'print'\n)\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIKE")," \u5b50\u53e5 \u57fa\u4e8e\u5df2\u6709\u8868\u7684\u7ed3\u6784\u53bb\u521b\u5efa\u65b0\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE print_table WITH ('connector' = 'print')\nLIKE source_table (EXCLUDING ALL)\n")),(0,a.kt)("h2",{id:"\u8fde\u63a5\u5668\u53c2\u6570"},"\u8fde\u63a5\u5668\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9009"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connector"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u6b64\u5904\u5e94\u4e3a ",(0,a.kt)("strong",{parentName:"td"},"print")," \u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"print-identifier"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u4e00\u4e2a\u6807\u8bc6\u7b26\u4f5c\u4e3a\u8f93\u51fa\u6570\u636e\u7684\u524d\u7f00\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"standard-error"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c format \u9700\u8981\u6253\u5370\u4e3a\u6807\u51c6\u9519\u8bef\u800c\u4e0d\u662f\u6807\u51c6\u8f93\u51fa\uff0c\u5219\u4e3a ",(0,a.kt)("strong",{parentName:"td"},"True")," \u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sink.parallelism"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e3a Print sink \u7b97\u5b50\u5b9a\u4e49\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u7531\u6846\u67b6\u51b3\u5b9a\uff0c\u548c\u94fe\u5728\u4e00\u8d77\u7684\u4e0a\u6e38\u7b97\u5b50\u4e00\u81f4\u3002")))))}d.isMDXComponent=!0}}]);