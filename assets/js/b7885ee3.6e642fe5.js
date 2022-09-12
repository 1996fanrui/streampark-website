"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[9699],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=c(t),m=i,u=k["".concat(o,".").concat(m)]||k[m]||s[m]||l;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const l={id:"2-performance-tuning",title:"\u6027\u80fd\u8c03\u6574",sidebar_position:2},r=void 0,p={unversionedId:"flinksql/2-performance-tuning",id:"flinksql/2-performance-tuning",title:"\u6027\u80fd\u8c03\u6574",description:"\u4ecb\u7ecd",source:"@site/docs/flinksql/2-performance-tuning.md",sourceDirName:"flinksql",slug:"/flinksql/2-performance-tuning",permalink:"/docs/flinksql/2-performance-tuning",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/2-performance-tuning.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"2-performance-tuning",title:"\u6027\u80fd\u8c03\u6574",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u914d\u7f6e",permalink:"/docs/flinksql/1-query-config"},next:{title:"\u8bfb\u5199hive",permalink:"/docs/flinksql/3-read-write-hive"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"MiniBatch\u805a\u5408",id:"minibatch\u805a\u5408",level:2},{value:"Local-Global",id:"local-global",level:2},{value:"\u5207\u5206DISTINCT\u805a\u5408",id:"\u5207\u5206distinct\u805a\u5408",level:2},{value:"\u5728DISTINCT\u4e0a\u4f7f\u7528FILTER\u6539\u8fdb",id:"\u5728distinct\u4e0a\u4f7f\u7528filter\u6539\u8fdb",level:2}],d={toc:c};function s(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"SQL\u662f\u6570\u636e\u5206\u6790\u4e2d\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u8bed\u8a00\u3002Flink\u7684Table API\u548cSQL\u4f7f\u7528\u6237\u53ef\u4ee5\u7528\u66f4\u5c11\u7684\u65f6\u95f4\u548c\u7cbe\u529b\u53bb\u5f00\u53d1\u9ad8\u6548\u7684\u6d41\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u3002\n\u6b64\u5916\uff0cFlink Table API\u548cSQL\u90fd\u88ab\u8fdb\u884c\u4e86\u6709\u6548\u7684\u4f18\u5316\uff0c\u96c6\u6210\u4e86\u5927\u91cf\u67e5\u8be2\u4f18\u5316\u548c\u7b97\u5b50\u4f18\u5316\u5b9e\u73b0\u3002\u4f46\u662f\u5e76\u4e0d\u662f\u6240\u6709\u7684\u4f18\u5316\u90fd\u662f\u9ed8\u8ba4\u542f\u7528\u7684\uff0c\u6240\u4ee5\u5bf9\u4e8e\u67d0\u4e9b\u67e5\u8be2\u4efb\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f\u4e00\u4e9b\u914d\u7f6e\u6765\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u7528\u7684\u4f18\u5316\u9009\u9879\u548c\u6d41\u805a\u5408\u7684\u5185\u90e8\u7ed3\u6784\uff0c\u8fd9\u4e9b\u914d\u7f6e\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u6027\u80fd\u4f18\u5316\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u63d0\u5230\u7684\u6d41\u805a\u5408\u4f18\u5316\u73b0\u5728\u90fd\u652f\u6301\u5206\u7ec4\u805a\u5408\u548c\u7a97\u53e3TVF\u805a\u5408\u3002"),(0,i.kt)("h2",{id:"minibatch\u805a\u5408"},"MiniBatch\u805a\u5408"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5206\u7ec4\u805a\u5408\u7b97\u5b50\u4f1a\u9010\u4e2a\u5904\u7406\u8f93\u5165\u8bb0\u5f55\uff0c\u5373\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"state"),"\u72b6\u6001\u8bfb\u53d6",(0,i.kt)("inlineCode",{parentName:"li"},"\u7d2f\u52a0\u5668")),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u8bb0\u5f55",(0,i.kt)("inlineCode",{parentName:"li"},"\u7d2f\u52a0/\u64a4\u56de"),"\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"\u7d2f\u52a0\u5668")),(0,i.kt)("li",{parentName:"ol"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"\u7d2f\u52a0\u5668"),"\u5199",(0,i.kt)("inlineCode",{parentName:"li"},"\u56de\u72b6\u6001")),(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u4e00\u4e2a\u8bb0\u5f55\u5c06\u4ece(1)\u518d\u6b21\u8fdb\u884c\u5904\u7406\u3002")),(0,i.kt)("p",null,"\u8fd9\u79cd\u5904\u7406\u6a21\u5f0f\u53ef\u80fd\u4f1a\u589e\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"StateBackend"),"\u7684\u5f00\u9500(\u7279\u522b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"RocksDB StateBackend"),")\u3002\u6b64\u5916\uff0c\u751f\u4ea7\u4e2d\u5e38\u89c1\u7684\u6570\u636e\u503e\u659c\u4f1a\u4f7f\u95ee\u9898\u66f4\u52a0\u4e25\u91cd\uff0c\u4f7f\u4efb\u52a1\u66f4\u5bb9\u6613\u5904\u4e8e\u53cd\u538b\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MiniBatch"),"\u5fae\u6279\u5904\u7406\u805a\u5408\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c06\u5927\u91cf\u8f93\u5165\u7f13\u5b58\u5230\u805a\u5408\u7b97\u5b50\u5185\u90e8\u7684\u7f13\u51b2\u533a\u4e2d\u3002\u5f53\u8f93\u5165\u8bb0\u5f55\u96c6\u5408\u88ab\u89e6\u53d1\u8fdb\u884c\u5904\u7406\u65f6\uff0c\u6bcf\u4e2akey\u53ea\u9700\u8981\u8bbf\u95ee\u4e00\u6b21\u72b6\u6001\u3002\u8fd9\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u72b6\u6001\u5f00\u9500\u5e76\u83b7\u5f97\u66f4\u597d\u7684\u541e\u5410\u91cf\u3002\n\u4f46\u8fd9\u53ef\u80fd\u4f1a\u589e\u52a0\u4e00\u4e9b\u5ef6\u8fdf\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5148\u7f13\u51b2\u4e00\u4e9b\u8bb0\u5f55\u800c\u4e0d\u662f\u7acb\u5373\u5904\u7406\u5b83\u4eec\u3002\u8fd9\u662f\u541e\u5410\u91cf\u548c\u5ef6\u8fdf\u4e4b\u95f4\u7684\u6743\u8861\u3002"),(0,i.kt)("p",null,"\u4e0b\u56fe\u89e3\u91ca\u4e86MiniBatch\u5904\u7406\u805a\u5408\u5982\u4f55\u51cf\u5c11\u72b6\u6001\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:t(306).Z,width:"501",height:"407"})),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a\u4e0a\u9762\u662f\u4e00\u4e2a\u8bb0\u5f55\u8bfb\u53d6\u4e00\u6b21\u72b6\u6001\uff0c\u5199\u5165\u4e00\u6b21\u72b6\u6001\u3002\u4e0b\u9762\u662f\u591a\u4e2a\u76f8\u540ckey\u7684\u8bb0\u5f55\u7f13\u5b58\u4e4b\u540e\uff0c\u8bbf\u95ee\u4e00\u6b21\u72b6\u6001\uff0c\u5199\u5165\u4e00\u6b21\u72b6\u6001\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5206\u7ec4\u805a\u5408\u4f1a\u7981\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"MiniBatch"),"\u4f18\u5316\u3002\n\u4e3a\u4e86\u542f\u7528\u6b64\u4f18\u5316\uff0c\u9700\u8981\u8bbe\u7f6e",(0,i.kt)("strong",{parentName:"p"},"table.exec.mini-batch.enabled"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"table.exec.mini-batch.allow-latency"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"table.exec.mini-batch.size"),"\u3002\n\u8be6\u60c5\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"1-1-query-config"},"\u67e5\u8be2\u914d\u7f6e"),"\u9875\u9762\u3002"),(0,i.kt)("p",null,"\u65e0\u8bba\u4e0a\u8ff0\u914d\u7f6e\u5982\u4f55\uff0c\u7a97\u53e3TVF\u805a\u5408\u59cb\u7ec8\u542f\u7528MiniBatch\u4f18\u5316\u3002\u7a97\u53e3TVF\u805a\u5408\u7f13\u51b2\u533a\u8bb0\u5f55\u5728\u6258\u7ba1\u5185\u5b58\u4e2d\uff0c\u800c\u4e0d\u662fJVM\u5806\u4e2d\uff0c\u56e0\u6b64\u6ca1\u6709\u8fc7\u8f7dGC\u6216OOM\u95ee\u9898\u7684\u98ce\u9669\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u542f\u7528\u8fd9\u4e9b\u9009\u9879\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set 'table.exec.mini-batch.enabled' = 'true';       -- \u542f\u7528mini-batch\nset 'table.exec.mini-batch.allow-latency' = '5 s';  -- \u4f7f\u75285s\u65f6\u95f4\u53bb\u7f13\u5b58\u8f93\u5165\u8bb0\u5f55\nset 'table.exec.mini-batch.size' = '5000';          -- \u6bcf\u4e2a\u805a\u5408\u7b97\u5b50\u4efb\u52a1\u6700\u591a\u53ef\u4ee5\u7f13\u5b58\u7684\u6700\u5927\u8bb0\u5f55\u6570\u91cf\n")),(0,i.kt)("h2",{id:"local-global"},"Local-Global"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"local-global"),"\u7b97\u6cd5\u901a\u8fc7\u5c06\u5206\u7ec4\u805a\u5408\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\u6765\u89e3\u51b3\u6570\u636e\u503e\u659c\u95ee\u9898\uff0c\u5373\u5148\u5728\u4e0a\u6e38\u8fdb\u884c\u5c40\u90e8\u805a\u5408\uff0c\u7136\u540e\u5728\u4e0b\u6e38\u8fdb\u884c\u5168\u5c40\u805a\u5408\uff0c\u7c7b\u4f3c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"MapReduce"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Combine + Reduce"),"\u6a21\u5f0f\u3002\u4f8b\u5982\u6709\u4ee5\u4e0bSQL\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT color, sum(id)\nFROM T\nGROUP BY color;\n")),(0,i.kt)("p",null,"\u6570\u636e\u6d41\u4e2d\u7684\u8bb0\u5f55\u53ef\u80fd\u662f\u503e\u659c\u7684\uff0c\u56e0\u6b64\u4e00\u4e9b\u805a\u5408\u7b97\u5b50\u7684\u5b9e\u4f8b\u5fc5\u987b\u5904\u7406\u6bd4\u5176\u4ed6\u5b9e\u4f8b\u591a\u5f97\u591a\u7684\u8bb0\u5f55\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e86\u70ed\u70b9\u95ee\u9898\u3002\n\u672c\u5730\u805a\u5408\u53ef\u4ee5\u5728\u4e0a\u6e38\u5148\u5c06\u5177\u6709\u76f8\u540c\u952e\u7684\u4e00\u5b9a\u6570\u91cf\u7684\u8f93\u5165\u79ef\u7d2f\u5230\u5355\u4e2a\u7d2f\u52a0\u5668\u4e2d\uff0c\u5168\u5c40\u805a\u5408\u5c06\u53ea\u63a5\u6536\u5c11\u91cf\u7684\u7d2f\u52a0\u5668\uff0c\u800c\u4e0d\u662f\u5927\u91cf\u7684\u539f\u59cb\u8f93\u5165\u3002\n\u8fd9\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u7f51\u7edcshuffle\u548c\u72b6\u6001\u8bbf\u95ee\u7684\u6210\u672c\u3002\u672c\u5730\u805a\u5408\u6bcf\u6b21\u7d2f\u79ef\u7684\u8f93\u5165\u8bb0\u5f55\u6570\u91cf\u57fa\u4e8e\u5fae\u6279\u805a\u5408\u7684\u65f6\u95f4\u95f4\u9694\u3002\u8fd9\u610f\u5473\u7740\u672c\u5730\u805a\u5408\u4f9d\u8d56\u4e8e\u542f\u7528\u5fae\u6279\u805a\u5408\u3002"),(0,i.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u672c\u5730-\u5168\u5c40\u805a\u5408\u5982\u4f55\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:t(7549).Z,width:"726",height:"325"})),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a\u5de6\u8fb9\u805a\u5408\uff0c\u805a\u5408\u7b97\u5b50\u4f1a\u6536\u96c6\u6240\u6709\u8f93\u5165\uff0c\u56e0\u6b64\u4e0a\u9762\u7684\u805a\u5408\u7b97\u5b50\u6536\u5230\u5f88\u591a\u539f\u59cb\u8bb0\u5f55\uff0c\u9020\u6210\u4e86\u70ed\u70b9\u95ee\u9898\u3002\n\u53f3\u8fb9\u805a\u5408\uff0c\u4e0a\u6e38\u7684\u672c\u5730\u805a\u5408\u4f1a\u5148\u5c06\u8f93\u5165\u5728\u8fdb\u884c\u548c\u805a\u5408\u7b97\u5b50\u76f8\u540c\u7684\u64cd\u4f5c\uff0c\u5c06\u8f93\u5165\u6839\u636ekey\u6765\u8fdb\u884c\u805a\u5408\uff0c\u4e0b\u6e38\u7684\u805a\u5408\u7b97\u5b50\u53ea\u9700\u8981\u63a5\u6536\u4e0a\u6e38\u672c\u5730\u805a\u5408\u4e4b\u540e\u7684\u7d2f\u52a0\u5668\u5373\u53ef\uff0c\u56e0\u6b64\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u4e0b\u6e38\u805a\u5408\u7b97\u5b50\u7684\u8f93\u5165\u6570\u636e\u91cf\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u8bf4\u660e\u5982\u4f55\u542f\u7528\u672c\u5730-\u5168\u5c40\u805a\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set 'table.exec.mini-batch.enabled' = 'true';           -- \u672c\u5730-\u5168\u5c40\u805a\u5408\u4f9d\u8d56\u4e8e\u5f00\u542f\u5fae\u6279\u805a\u5408\nset 'table.exec.mini-batch.allow-latency' = '5 s';      -- \u4f7f\u75285s\u65f6\u95f4\u53bb\u7f13\u5b58\u8f93\u5165\u8bb0\u5f55\nset 'table.exec.mini-batch.size' = '5000';              -- \u6bcf\u4e2a\u805a\u5408\u7b97\u5b50\u4efb\u52a1\u6700\u591a\u53ef\u4ee5\u7f13\u5b58\u7684\u6700\u5927\u8bb0\u5f55\u6570\u91cf\nset 'table.optimizer.agg-phase-strategy' = 'TWO_PHASE'; -- \u542f\u7528\u4e24\u9636\u6bb5\u805a\u5408\u7b56\u7565\uff0c\u6bd4\u5982\uff1a\u672c\u5730-\u5168\u5c40\u805a\u5408\n")),(0,i.kt)("h2",{id:"\u5207\u5206distinct\u805a\u5408"},"\u5207\u5206DISTINCT\u805a\u5408"),(0,i.kt)("p",null,"\u672c\u5730-\u5168\u5c40\u4f18\u5316\u5bf9\u4e8e\u4e00\u822c\u805a\u5408(",(0,i.kt)("inlineCode",{parentName:"p"},"SUM"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"MAX"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"MIN"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"AVG"),")\u7684\u6570\u636e\u503e\u659c\u662f\u6709\u6548\u7684\uff0c\u4f46\u5728\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"distinct\u805a\u5408"),"\u65f6\u6027\u80fd\u5e76\u4e0d\u7406\u60f3\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u5206\u6790\u4eca\u5929\u6709\u591a\u5c11\u72ec\u7acb\u7528\u6237\u767b\u5f55\u3002\u6211\u4eec\u53ef\u80fd\u4f1a\u8fdb\u884c\u4ee5\u4e0b\u67e5\u8be2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT day, COUNT(DISTINCT user_id)\nFROM T\nGROUP BY day;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT"),"\u4e0d\u64c5\u957f\u4e8e\u51cf\u5c11\u8bb0\u5f55\uff0c\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT"),"\u952e(\u5373user_id)\u7684\u503c\u662f\u7a00\u758f\u7684\uff0c\u5373\u4f7f\u542f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"\u672c\u5730-\u5168\u5c40"),"\u4f18\u5316\uff0c\u4e5f\u6ca1\u6709\u591a\u5927\u5e2e\u52a9\u3002\n\u56e0\u4e3a\u7d2f\u52a0\u5668\u4ecd\u7136\u5305\u542b\u51e0\u4e4e\u6240\u6709\u7684\u539f\u59cb\u8bb0\u5f55\uff0c\u5168\u5c40\u805a\u5408\u5c06\u6210\u4e3a\u74f6\u9888(\u5927\u591a\u6570\u91cd\u91cf\u7ea7\u7d2f\u52a0\u5668\u90fd\u7531\u4e00\u4e2a\u4efb\u52a1\u5904\u7406\uff0c\u5373\u5728\u540c\u4e00\u5929)\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5207\u5206distinct\u805a\u5408\u4f18\u5316"),"\u7684\u601d\u60f3\u662f\u5c06\u4e0d\u540c\u7684\u805a\u5408(\u4f8b\u5982COUNT(distinct col))\u5206\u89e3\u4e3a\u4e24\u4e2a\u5c42\u6b21\u3002\u7b2c\u4e00\u4e2a\u805a\u5408\u6309",(0,i.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4\u952e"),"\u548c\u9644\u52a0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"bucket"),"\u603b\u6570\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"shuffle"),"\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"bucket\u952e"),"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"HASH_CODE(distinct_key) % BUCKET_NUM"),"\u8ba1\u7b97\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"BUCKET_NUM"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"1024"),"\n\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"table.optimizer.distinct-agg.split.bucket-num"),"\u914d\u7f6e\u3002\n\u7b2c\u4e8c\u4e2a\u805a\u5408\u6309\u539f\u59cb\u5206\u7ec4\u952e\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"shuffle"),"\uff0c\u5e76\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SUM"),"\u805a\u5408\u6765\u81ea\u4e0d\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"bucket"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT"),"\u503c\u3002\u56e0\u4e3a\u76f8\u540c\u7684distinct\u5b57\u6bb5\u503c\u53ea\u4f1a\u5728\u76f8\u540c\u7684bucket\u4e2d\u8ba1\u7b97\uff0c\u6240\u4ee5\u8f6c\u6362\u662f\u7b49\u4ef7\u7684\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"bucket\u952e"),"\u4f5c\u4e3a\u4e00\u4e2a\u989d\u5916\u7684\u5206\u7ec4\u952e\uff0c\u5206\u62c5\u5206\u7ec4\u952e\u4e2d\u70ed\u70b9\u7684\u8d1f\u62c5\u3002bucket\u952e\u4f7f\u4efb\u52a1\u5177\u6709\u53ef\u4f38\u7f29\u6027\uff0c\u4ee5\u89e3\u51b3distinct\u805a\u5408\u4e2d\u7684\u6570\u636e\u503e\u659c/\u70ed\u70b9\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u62c6\u5206\u4e0d\u540c\u7684\u805a\u5408\u540e\uff0c\u4e0a\u9762\u7684\u67e5\u8be2\u5c06\u88ab\u81ea\u52a8\u91cd\u5199\u4e3a\u4e0b\u9762\u7684\u67e5\u8be2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT day, SUM(cnt)\nFROM (\n    SELECT day, COUNT(DISTINCT user_id) as cnt\n    FROM T\n    GROUP BY day, MOD(HASH_CODE(user_id), 1024)\n    )\nGROUP BY day;\n")),(0,i.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u5206\u5272distinct\u805a\u5408\u5982\u4f55\u63d0\u9ad8\u6027\u80fd(\u5047\u8bbe\u989c\u8272\u4ee3\u8868\u5929\u6570\uff0c\u5b57\u6bcd\u4ee3\u8868user_id)\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:t(6581).Z,width:"698",height:"341"})),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a\u5de6\u56fe\u805a\u5408\uff0c\u672c\u5730\u805a\u5408\u4f1a\u5148\u5bf9\u76f8\u540c\u952e\u8fdb\u884c\u805a\u5408\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u5168\u5c40\u805a\u5408\u7684\u4e00\u4e2a\u7b97\u5b50\u4e5f\u8fd8\u662f\u4f1a\u6536\u5230\u6240\u6709\u4ed6\u6240\u5e94\u8be5\u805a\u5408\u7684\u6240\u6709\u540c\u4e00\u5929\u7684\u7d2f\u52a0\u5668\u3002\n\u53f3\u56fe\u805a\u5408\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"agg1"),"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"bucket"),"\u4e3a4\uff0c\u7136\u540e\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"\u7684\u8f93\u5165\u503c\u901a\u8fc7\u5929\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"hash"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"bucket"),"\u53d6\u4f59\uff0c\u653e\u5230\u4e0d\u540c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"agg1"),"\u5e76\u884c\u5ea6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"agg1"),"\u63a5\u6536\u5230\u6570\u636e\u540e\uff0c\u8fdb\u884c\u805a\u5408\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"agg2"),"\u53ea\u9700\u8981\u63a5\u6536\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"agg1"),"\u91cc\u4e0d\u540c\u989c\u8272\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"user_id"),"\u7684\u6570\u91cf\u5373\u53ef\uff08\u4e00\u4e2a\u989c\u8272\u4e2d\u6709\u4e24\u4e2auser_id\uff0c\u5c31\u4f20\u9012\u6570\u5b572\uff09\uff0c\u7136\u540e\u5bf9\u63a5\u6536\u5230\u7684\u6570\u91cf\u8fdb\u884c\u7d2f\u52a0\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0a\u4f8b\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u3002\u9664\u6b64\u4e4b\u5916\uff0cFlink\u8fd8\u652f\u6301\u5206\u5272\u66f4\u590d\u6742\u7684\u805a\u5408\u67e5\u8be2\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2adistinct\u805a\u5408"),"\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0d\u540c\u7684distinct\u952e"),"(\u4f8b\u5982COUNT(distinct a)\uff0c SUM(distinct b))\uff0c\n\u4e0e\u5176\u4ed6\u975e\u4e0d\u540c\u7684\u805a\u5408(\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MIN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT"),")\u4e00\u8d77\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u5206\u5272\u4f18\u5316\u4e0d\u652f\u6301\u5305\u542b\u7528\u6237\u81ea\u5b9a\u4e49\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7684\u805a\u5408\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u542f\u7528\u5206\u5272distinct\u805a\u5408\u4f18\u5316\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set 'table.optimizer.distinct-agg.split.enabled' = 'true'   -- \u542f\u7528distinct\u805a\u5408\u5206\u5272\n")),(0,i.kt)("h2",{id:"\u5728distinct\u4e0a\u4f7f\u7528filter\u6539\u8fdb"},"\u5728DISTINCT\u4e0a\u4f7f\u7528FILTER\u6539\u8fdb"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u80fd\u9700\u8981\u8ba1\u7b97\u6765\u81ea\u4e0d\u540c\u7ef4\u5ea6\u7684UV(\u552f\u4e00\u8bbf\u95ee\u8005)\u7684\u6570\u91cf\uff0c\u4f8b\u5982\u6765\u81eaAndroid\u7684UV\uff0c\u6765\u81eaiPhone\u7684UV\uff0c\u6765\u81eaWeb\u7684UV\u548c\u603bUV\u3002\u5f88\u591a\u7528\u6237\u4f1a\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"CASE WHEN"),"\u6765\u5b9e\u73b0\u8fd9\u4e2a\u9700\u6c42\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    day,\n    COUNT(DISTINCT user_id) AS total_uv,\n    COUNT(DISTINCT CASE WHEN flag IN ('android', 'iphone') THEN user_id ELSE NULL END) AS app_uv,\n    COUNT(DISTINCT CASE WHEN flag IN ('wap', 'other') THEN user_id ELSE NULL END) AS web_uv\nFROM T\nGROUP BY day;\n")),(0,i.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER\u8bed\u6cd5"),"\u800c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"CASE WHEN"),"\u3002\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER"),"\u66f4\u7b26\u5408SQL\u6807\u51c6\uff0c\u4e14\u80fd\u83b7\u5f97\u66f4\u5927\u7684\u6027\u80fd\u4f18\u5316\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER"),"\u662f\u7528\u4e8e\u805a\u5408\u51fd\u6570\u7684\u4fee\u9970\u7b26\uff0c\u7528\u4e8e\u9650\u5236\u805a\u5408\u4e2d\u4f7f\u7528\u7684\u503c\u3002\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u66ff\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER"),"\u4fee\u9970\u7b26\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    day,\n    COUNT(DISTINCT user_id) AS total_uv,\n    COUNT(DISTINCT user_id) FILTER (WHERE flag IN ('android', 'iphone')) AS app_uv,\n    COUNT(DISTINCT user_id) FILTER (WHERE flag IN ('wap', 'other')) AS web_uv\nFROM T\nGROUP BY day\n")),(0,i.kt)("p",null,"Flink SQL\u4f18\u5316\u5668\u53ef\u4ee5\u8bc6\u522b\u76f8\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"distinct"),"\u952e\u4e0a\u7684\u4e0d\u540c\u7b5b\u9009\u5668\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6240\u6709\u4e09\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT"),"\u90fd\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"user_id"),"\u5217\u4e0a\u3002\n\u8fd9\u6837\uff0cFlink\u5c31\u53ef\u4ee5\u53ea\u4f7f\u7528\u4e00\u4e2a\u5171\u4eab\u72b6\u6001\u5b9e\u4f8b\u800c\u4e0d\u662f\u4e09\u4e2a\u72b6\u6001\u5b9e\u4f8b\u6765\u51cf\u5c11\u72b6\u6001\u8bbf\u95ee\u6b21\u6570\u548c\u72b6\u6001\u5927\u5c0f\u3002\u5728\u67d0\u4e9b\u4efb\u52a1\u4e2d\u53ef\u4ee5\u83b7\u5f97\u663e\u8457\u7684\u6027\u80fd\u4f18\u5316\u3002"))}s.isMDXComponent=!0},7549:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/local-global-agg-239b36f51c18e179a5d5a62b6d860f0b.png"},306:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mini-batch-75061cfdbcca35a05cd0b64ec900c838.png"},6581:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/split-distinct-d6d0f32c3f870a9c5cc8088a8bf25d4c.png"}}]);