"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[3093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=l,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={id:"12-load",title:"load",sidebar_position:12},o=void 0,i={unversionedId:"flinksql/syntax/12-load",id:"flinksql/syntax/12-load",title:"load",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/12-load.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/12-load",permalink:"/zh-CN/docs/flinksql/syntax/12-load",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/12-load.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"12-load",title:"load",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"drop",permalink:"/zh-CN/docs/flinksql/syntax/11-drop"},next:{title:"unload",permalink:"/zh-CN/docs/flinksql/syntax/13-unload"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"LOAD\u6a21\u5757",id:"load\u6a21\u5757",level:2},{value:"\u6848\u4f8b\u4ee3\u7801",id:"\u6848\u4f8b\u4ee3\u7801",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"LOAD\u8bed\u53e5\u7528\u4e8e\u52a0\u8f7d\u5185\u7f6e\u6216\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6a21\u5757\u3002"),(0,l.kt)("h2",{id:"load\u6a21\u5757"},"LOAD\u6a21\u5757"),(0,l.kt)("p",null,"\u8bed\u6cd5\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LOAD MODULE module_name [WITH ('key1' = 'val1', 'key2' = 'val2', ...)]\n")),(0,l.kt)("p",null,"module_name\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6807\u8bc6\u7b26\uff0c\u533a\u5206\u5927\u5c0f\u5199\u3002\u5b83\u5e94\u8be5\u4e0e\u6a21\u5757\u5de5\u5382\u4e2d\u5b9a\u4e49\u7684\u6a21\u5757\u7c7b\u578b\u76f8\u540c\uff0c\u5176\u7528\u4e8e\u6a21\u5757\u7684\u53d1\u73b0\u3002"),(0,l.kt)("p",null,"properties ('key1' = 'val1'\uff0c 'key2' = 'val2'\uff0c\u2026)\u662f\u4e00\u4e2a\u6620\u5c04\uff0c\u5305\u542b\u4e00\u7ec4\u952e\u503c\u5bf9(\u9664\u4e86key 'type')\uff0c\u4f20\u9012\u7ed9\u53d1\u73b0\u670d\u52a1\u76f8\u5bf9\u5e94\u7684\u6a21\u5757\u3002"),(0,l.kt)("h2",{id:"\u6848\u4f8b\u4ee3\u7801"},"\u6848\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u52a0\u8f7d hive \u6a21\u5757\nload module hive with ('hive-version' = '2.3.6');\n-- \u63a8\u8350\u4e0b\u9762\u8fd9\u79cd\u5199\u6cd5\uff0c\u4e0d\u6307\u5b9a hive \u7684\u7248\u672c\uff0c\u7531\u7cfb\u7edf\u53bb\u81ea\u52a8\u63d0\u53d6\u3002\nload module hive;\n")),(0,l.kt)("p",null,"\u7ed9\u5e73\u53f0\u6dfb\u52a0\u4e86 flink-connector-sql-hive \u4f9d\u8d56\u4e4b\u540e\uff0c\u5c31\u76f8\u5f53\u4e8e\u5df2\u7ecf\u6dfb\u52a0\u4e86 hive \u6a21\u5757\u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u53bb\u52a0\u8f7d hive \u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"flink sql")," \u4e2d\u52a0\u8f7d\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"hive"),"\u6a21\u5757\uff0c\u5e76\u4e14",(0,l.kt)("inlineCode",{parentName:"p"},"use"),"\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"hive"),"\u6a21\u5757\u4e4b\u540e\uff0c\u67e5\u8be2\u8bed\u53e5\u4e2d\u5c31\u53ef\u4ee5\u76f4\u63a5\u53bb\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"hive"),"\u4e2d\u7684\u51fd\u6570\u4e86\u3002"))}u.isMDXComponent=!0}}]);