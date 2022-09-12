"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[6912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,d=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(d,p(p({ref:t},k),{},{components:n})):a.createElement(d,p({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={id:"intro",title:"\u6846\u67b6\u4ecb\u7ecd",sidebar_position:1},p="StreamPark",l={unversionedId:"intro",id:"intro",title:"\u6846\u67b6\u4ecb\u7ecd",description:"make stream processing easier!!!",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/zh-CN/docs/intro",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"\u6846\u67b6\u4ecb\u7ecd",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5e73\u53f0\u90e8\u7f72",permalink:"/zh-CN/docs/user-guide/deployment"}},o={},m=[{value:"\ud83d\ude80 \u4ec0\u4e48\u662fStreamX",id:"-\u4ec0\u4e48\u662fstreamx",level:2},{value:"\ud83c\udf89 Features",id:"-features",level:2},{value:"\ud83c\udff3\u200d\ud83c\udf08 \u7ec4\u6210\u90e8\u5206",id:"-\u7ec4\u6210\u90e8\u5206",level:2},{value:"1\ufe0f\u20e3 streamx-core",id:"1\ufe0f\u20e3-streamx-core",level:3},{value:"2\ufe0f\u20e3 streamx-pump",id:"2\ufe0f\u20e3-streamx-pump",level:3},{value:"3\ufe0f\u20e3 streampark-console",id:"3\ufe0f\u20e3-streampark-console",level:3},{value:"\ud83d\udc7b \u4e3a\u4ec0\u4e48\u4e0d\u662f...\u2753",id:"-\u4e3a\u4ec0\u4e48\u4e0d\u662f",level:2},{value:"Apache Zeppelin",id:"apache-zeppelin",level:3},{value:"FlinkX",id:"flinkx",level:3}],k={toc:m};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"streampark"},"StreamPark"),(0,r.kt)("p",null,"make stream processing easier!!!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u795e\u5947\u7684\u6846\u67b6,\u8ba9\u6d41\u5904\u7406\u66f4\u7b80\u5355")),(0,r.kt)("h2",{id:"-\u4ec0\u4e48\u662fstreamx"},"\ud83d\ude80 \u4ec0\u4e48\u662fStreamX"),(0,r.kt)("p",null,"\u5b9e\u65f6\u5373\u672a\u6765,\u5728\u5b9e\u65f6\u5904\u7406\u6d41\u57df ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Spark")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Flink")," \u662f\u4e00\u4e2a\u4f1f\u5927\u7684\u8fdb\u6b65,\u5c24\u5176\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Flink"),"\u88ab\u666e\u904d\u8ba4\u4e3a\u662f\u4e0b\u4e00\u4ee3\u5927\u6570\u636e\u6d41\u8ba1\u7b97\u5f15\u64ce, \u6211\u4eec\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," \u65f6\u53d1\u73b0\u4ece\u7f16\u7a0b\u6a21\u578b, \u542f\u52a8\u914d\u7f6e\u5230\u8fd0\u7ef4\u7ba1\u7406\u90fd\u6709\u5f88\u591a\u53ef\u4ee5\u62bd\u8c61\u5171\u7528\u7684\u5730\u65b9, \u6211\u4eec\u5c06\u4e00\u4e9b\u597d\u7684\u7ecf\u9a8c\u56fa\u5316\u4e0b\u6765\u5e76\u7ed3\u5408\u4e1a\u5185\u7684\u6700\u4f73\u5b9e\u8df5, \u901a\u8fc7\u4e0d\u65ad\u52aa\u529b\u7ec8\u4e8e\u8bde\u751f\u4e86\u4eca\u5929\u7684\u6846\u67b6 \u2014\u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),", \u9879\u76ee\u7684\u521d\u8877\u662f \u2014\u2014 \u8ba9\u6d41\u5904\u7406\u66f4\u7b80\u5355,\n\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u5f00\u53d1,\u53ef\u4ee5\u6781\u5927\u964d\u4f4e\u5b66\u4e60\u6210\u672c\u548c\u5f00\u53d1\u95e8\u69db, \u8ba9\u5f00\u53d1\u8005\u53ea\u7528\u5173\u5fc3\u6700\u6838\u5fc3\u7684\u4e1a\u52a1,",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," \u89c4\u8303\u4e86\u9879\u76ee\u7684\u914d\u7f6e,\u9f13\u52b1\u51fd\u6570\u5f0f\u7f16\u7a0b,\u5b9a\u4e49\u4e86\u6700\u4f73\u7684\u7f16\u7a0b\u65b9\u5f0f,\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Connectors"),",\u6807\u51c6\u5316\u4e86\u914d\u7f6e\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u3001\u76d1\u63a7\u3001\u8fd0\u7ef4\u7684\u6574\u4e2a\u8fc7\u7a0b, \u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"scala"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u4e24\u5957api,\n\u5176\u6700\u7ec8\u76ee\u7684\u662f\u6253\u9020\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u5927\u6570\u636e\u5e73\u53f0,\u6d41\u6279\u4e00\u4f53,\u6e56\u4ed3\u4e00\u4f53\u7684\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("video",{src:"http://assets.streamxhub.com/streamx-video.mp4",controls:"controls",width:"100%",height:"100%"}),(0,r.kt)("h2",{id:"-features"},"\ud83c\udf89 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u811a\u624b\u67b6"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u7248\u672cFlink\u652f\u6301(1.11\u30011.12\u30011.13\u30011.14\u30011.15)"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684connectors"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u9879\u76ee\u7f16\u8bd1\u529f\u80fd(maven \u7f16\u8bd1)"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u53c2\u6570\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," \u6a21\u5f0f, ",(0,r.kt)("inlineCode",{parentName:"li"},"Yarn-Per-Job"),"\u6a21\u5f0f\u542f\u52a8"),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u6377\u7684\u65e5\u5e38\u64cd\u4f5c(\u4efb\u52a1",(0,r.kt)("inlineCode",{parentName:"li"},"\u542f\u52a8"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"\u505c\u6b62"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"savepoint"),"\u4ee5\u53ca\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"savepoint"),"\u6062\u590d)"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u706b\u7130\u56fe"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"notebook"),"(\u5728\u7ebf\u4efb\u52a1\u5f00\u53d1)"),(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u914d\u7f6e\u548c\u4f9d\u8d56\u7248\u672c\u5316\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4efb\u52a1\u5907\u4efd\u3001\u56de\u6eda(\u914d\u7f6e\u56de\u6eda)"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u7ba1\u7406\u4f9d\u8d56(maven pom)\u548c\u81ea\u5b9a\u4e49jar"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49udf\u3001\u8fde\u63a5\u5668\u7b49\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"Flink SQL WebIDE"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301catalog\u3001hive"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u8fd0\u884c\u5931\u8d25\u53d1\u9001\u544a\u8b66\u90ae\u4ef6\uff08\u652f\u6301\u9489\u9489\u3001\u5fae\u4fe1\u3001\u90ae\u4ef6\u3001\u98de\u4e66\u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5931\u8d25\u91cd\u542f\u91cd\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"\u4ece\u4efb\u52a1",(0,r.kt)("inlineCode",{parentName:"li"},"\u5f00\u53d1"),"\u9636\u6bb5\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"\u90e8\u7f72\u7ba1\u7406"),"\u5168\u94fe\u8def\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"-\u7ec4\u6210\u90e8\u5206"},"\ud83c\udff3\u200d\ud83c\udf08 \u7ec4\u6210\u90e8\u5206"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u6709\u4e09\u90e8\u5206\u7ec4\u6210,\u5206\u522b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"streamx-core"),",",(0,r.kt)("inlineCode",{parentName:"p"},"streamx-pump")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"streampark-console")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Streamx Archite",src:n(323).Z,width:"2428",height:"1236"})),(0,r.kt)("h3",{id:"1\ufe0f\u20e3-streamx-core"},"1\ufe0f\u20e3 streamx-core"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"streamx-core")," \u5b9a\u4f4d\u662f\u4e00\u4e2a\u5f00\u53d1\u65f6\u6846\u67b6,\u5173\u6ce8\u7f16\u7801\u5f00\u53d1,\u89c4\u8303\u4e86\u914d\u7f6e\u6587\u4ef6,\u6309\u7167\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1,\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u53d1\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"RunTime Content"),"\u548c\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Connector"),",\u6269\u5c55\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"DataStream"),"\u76f8\u5173\u7684\u65b9\u6cd5,\u878d\u5408\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"DataStream"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Flink sql")," api,\u7b80\u5316\u7e41\u7410\u7684\u64cd\u4f5c,\u805a\u7126\u4e1a\u52a1\u672c\u8eab,\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u548c\u5f00\u53d1\u4f53\u9a8c"),(0,r.kt)("h3",{id:"2\ufe0f\u20e3-streamx-pump"},"2\ufe0f\u20e3 streamx-pump"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pump")," \u662f\u62bd\u6c34\u673a,\u6c34\u6cf5\u7684\u610f\u601d,",(0,r.kt)("inlineCode",{parentName:"p"},"streamx-pump"),"\u7684\u5b9a\u4f4d\u662f\u4e00\u4e2a\u6570\u636e\u62bd\u53d6\u7684\u7ec4\u4ef6,\u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx"),",\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"streamx-core"),"\u4e2d\u63d0\u4f9b\u7684\u5404\u79cd",(0,r.kt)("inlineCode",{parentName:"p"},"connector"),"\u5f00\u53d1,\u76ee\u7684\u662f\u6253\u9020\u4e00\u4e2a\u65b9\u4fbf\u5feb\u6377,\u5f00\u7bb1\u5373\u7528\u7684\u5927\u6570\u636e\u5b9e\u65f6\u6570\u636e\u62bd\u53d6\u548c\u8fc1\u79fb\u7ec4\u4ef6,\u5e76\u4e14\u96c6\u6210\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"streampark-console"),"\u4e2d,\u89e3\u51b3\u5b9e\u65f6\u6570\u636e\u6e90\u83b7\u53d6\u95ee\u9898,\u76ee\u524d\u5728\u89c4\u5212\u4e2d"),(0,r.kt)("h3",{id:"3\ufe0f\u20e3-streampark-console"},"3\ufe0f\u20e3 streampark-console"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"streampark-console")," \u662f\u4e00\u4e2a\u7efc\u5408\u5b9e\u65f6\u6570\u636e\u5e73\u53f0,\u4f4e\u4ee3\u7801(",(0,r.kt)("inlineCode",{parentName:"p"},"Low Code"),")\u5e73\u53f0,\u53ef\u4ee5\u8f83\u597d\u7684\u7ba1\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"Flink"),"\u4efb\u52a1,\u96c6\u6210\u4e86\u9879\u76ee\u7f16\u8bd1\u3001\u53d1\u5e03\u3001\u53c2\u6570\u914d\u7f6e\u3001\u542f\u52a8\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"savepoint"),",\u706b\u7130\u56fe(",(0,r.kt)("inlineCode",{parentName:"p"},"flame graph"),"),",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL"),",\n\u76d1\u63a7\u7b49\u8bf8\u591a\u529f\u80fd\u4e8e\u4e00\u4f53,\u5927\u5927\u7b80\u5316\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Flink"),"\u4efb\u52a1\u7684\u65e5\u5e38\u64cd\u4f5c\u548c\u7ef4\u62a4,\u878d\u5408\u4e86\u8bf8\u591a\u6700\u4f73\u5b9e\u8df5\u3002\u65e7\u65f6\u738b\u8c22\u5802\u524d\u71d5,\u98de\u5165\u5bfb\u5e38\u767e\u59d3\u5bb6,\u8ba9\u5927\u516c\u53f8\u6709\u80fd\u529b\u7814\u53d1\u4f7f\u7528\u7684\u9879\u76ee,\u73b0\u5728\u4eba\u4eba\u53ef\u4ee5\u4f7f\u7528,\n\u5176\u6700\u7ec8\u76ee\u6807\u662f\u6253\u9020\u6210\u4e00\u4e2a\u5b9e\u65f6\u6570\u4ed3,\u6d41\u6279\u4e00\u4f53\u7684\u4e00\u7ad9\u5f0f\u5927\u6570\u636e\u89e3\u51b3\u65b9\u6848,\u8be5\u5e73\u53f0\u4f7f\u7528\u4f46\u4e0d\u4ec5\u9650\u4ee5\u4e0b\u6280\u672f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://flink.apache.org"},"Apache Flink")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://hadoop.apache.org"},"Apache YARN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot/"},"Spring Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.mybatis.org"},"Mybatis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://mp.baomidou.com"},"Mybatis-Plus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.brendangregg.com/FlameGraphs"},"Flame Graph")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uber-common/jvm-profiler"},"JVM-Profiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/"},"Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vuepress.vuejs.org/"},"VuePress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://antdv.com/"},"Ant Design of Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pro.antdv"},"ANTD PRO VUE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://xtermjs.org/"},"xterm.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor")),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0a\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\u548c\u5f88\u591a\u672a\u63d0\u5230\u7684\u4f18\u79c0\u5f00\u6e90\u9879\u76ee,\u7ed9\u4e88\u6700\u5927\u7684respect,\u7279\u522b\u611f\u8c22",(0,r.kt)("a",{parentName:"p",href:"http://zeppelin.apache.org"},"Apache Zeppelin"),",",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"),",\n\u611f\u8c22",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GuoNingNing/fire-spark"},"fire-spark"),"\u9879\u76ee,\u65e9\u671f\u7ed9\u4e88\u7684\u7075\u611f\u548c\u5e2e\u52a9, \u611f\u8c22\u6211\u8001\u5a46\u5728\u9879\u76ee\u5f00\u53d1\u65f6\u7ed9\u4e88\u7684\u652f\u6301,\u6089\u5fc3\u7167\u987e\u6211\u7684\u751f\u6d3b\u548c\u65e5\u5e38,\u7ed9\u4e88\u6211\u8db3\u591f\u7684\u65f6\u95f4\u5f00\u53d1\u8fd9\u4e2a\u9879\u76ee"),(0,r.kt)("h2",{id:"-\u4e3a\u4ec0\u4e48\u4e0d\u662f"},"\ud83d\udc7b \u4e3a\u4ec0\u4e48\u4e0d\u662f...\u2753"),(0,r.kt)("h3",{id:"apache-zeppelin"},"Apache Zeppelin"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://zeppelin.apache.org"},"Apache Zeppelin"),"\u662f\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\ud83d\udc4f \u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Flink"),"\u505a\u4e86\u5f88\u597d\u7684\u652f\u6301,",(0,r.kt)("inlineCode",{parentName:"p"},"Zeppelin"),"\u521b\u65b0\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"notebook"),"\u529f\u80fd,\u8ba9\u5f00\u53d1\u8005\u975e\u5e38\u65b9\u4fbf\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"On-line"),"\u7f16\u7a0b,\u5feb\u6377\u7684\u63d0\u4ea4\u4efb\u52a1,\u8bed\u8a00\u5c42\u9762\u540c\u65f6\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"java"),",",(0,r.kt)("inlineCode",{parentName:"p"},"scala"),",",(0,r.kt)("inlineCode",{parentName:"p"},"python"),",\u56fd\u5185\u963f\u91cc\u7684\u7ae0\u5251\u5cf0\u5927\u4f6c\u4e5f\u5728\u79ef\u6781\u63a8\u52a8\u8be5\u9879\u76ee,\u5411\u5251\u5cf0\u5927\u4f6c\u81f4\u4ee5\u5d07\u9ad8\u7684\u656c\u610f\ud83d\ude4f\ud83d\ude4f\ud83d\ude4f,\n\u4f46\u8be5\u9879\u76ee\u76ee\u524d\u8c8c\u4f3c\u6ca1\u6709\u89e3\u51b3\u9879\u76ee\u7684\u7ba1\u7406\u548c\u8fd0\u7ef4\u65b9\u9762\u7684\u75db\u70b9,\u9488\u5bf9\u6bd4\u8f83\u590d\u6742\u7684\u9879\u76ee\u548c\u5927\u91cf\u7684\u4f5c\u4e1a\u7ba1\u7406\u5c31\u6709\u4e9b\u529b\u4e0d\u4ece\u5fc3\u4e86,\u4e00\u822c\u6765\u8bb2\u4e0d\u8bba\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"DataStream"),"\u4f5c\u4e1a\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL"),"\u4f5c\u4e1a,\u5927\u6982\u90fd\u4f1a\u7ecf\u5386\u4f5c\u4e1a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u9636\u6bb5"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u9636\u6bb5"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u6253\u5305\u9636\u6bb5"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0a\u4f20\u670d\u52a1\u5668\u9636\u6bb5"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u542f\u52a8\u4efb\u52a1\u9636\u6bb5"),"\u7b49\u8fd9\u4e9b\u6b65\u9aa4,\u8fd9\u662f\u4e00\u4e2a\u94fe\u8def\u5f88\u957f\u7684\u6b65\u9aa4,\u4e14\u6574\u4e2a\u8fc7\u7a0b\u8017\u65f6\u6bd4\u8f83\u957f,\u4f53\u9a8c\u4e0d\u597d,\n\u5373\u4f7f\u4fee\u6539\u4e86\u4e00\u4e2a\u7b26\u53f7,\u9879\u76ee\u6539\u5b8c\u4e0a\u7ebf\u90fd\u5f97\u8d70\u4e0a\u9762\u7684\u6d41\u7a0b,\u6211\u4eec\u671f\u671b\u8fd9\u4e9b\u6b65\u9aa4\u80fd\u591f\u52a8\u52a8\u9f20\u6807\u4e00\u952e\u5f0f\u89e3\u51b3,\u8fd8\u5e0c\u671b\u81f3\u5c11\u80fd\u6709\u4e00\u4e2a\u4efb\u52a1\u5217\u8868\u7684\u529f\u80fd,\u80fd\u591f\u65b9\u4fbf\u7684\u7ba1\u7406\u4efb\u52a1,\u53ef\u4ee5\u6e05\u695a\u7684\u770b\u5230\u54ea\u4e9b\u4efb\u52a1\u6b63\u5728\u8fd0\u884c,\u54ea\u4e9b\u505c\u6b62\u4e86,\u4efb\u52a1\u7684\u8d44\u6e90\u6d88\u8017\u60c5\u51b5,\u53ef\u4ee5\u5728\u4efb\u52a1\u5217\u8868\u9875\u9762\u4e00\u952e",(0,r.kt)("inlineCode",{parentName:"p"},"\u542f\u52a8"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u505c\u6b62"),"\u4efb\u52a1,\u5e76\u4e14\u81ea\u52a8\u7ba1\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"savePoint"),",\u8fd9\u4e9b\u95ee\u9898\u4e5f\u662f\u5f00\u53d1\u8005\u5b9e\u9645\u5f00\u53d1\u4e2d\u4f1a\u9047\u5230\u4e86\u95ee\u9898,\n",(0,r.kt)("inlineCode",{parentName:"p"},"streampark-console"),"\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u8fd9\u4e9b\u75db\u70b9,\u5b9a\u4f4d\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u5b9e\u65f6\u6570\u636e\u5e73\u53f0,\u5e76\u4e14\u5f00\u53d1\u4e86\u66f4\u591a\u4ee4\u4eba\u6fc0\u52a8\u7684\u529f\u80fd(\u8bf8\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL WebIDE"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u9694\u79bb"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u4efb\u52a1\u56de\u6eda"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\u706b\u7130\u56fe"),"\u7b49)"),(0,r.kt)("h3",{id:"flinkx"},"FlinkX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://github.com/DTStack/flinkx"},"FlinkX")," \u662f\u57fa\u4e8eflink\u7684\u5206\u5e03\u5f0f\u6570\u636e\u540c\u6b65\u5de5\u5177,\u5b9e\u73b0\u4e86\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u9ad8\u6548\u7684\u6570\u636e\u8fc1\u79fb,\u5b9a\u4f4d\u6bd4\u8f83\u660e\u786e,\u4e13\u95e8\u7528\u6765\u505a\u6570\u636e\u62bd\u53d6\u548c\u8fc1\u79fb,\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\u7ec4\u4ef6\u6765\u4f7f\u7528,",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u5173\u6ce8\u5f00\u53d1\u9636\u6bb5\u548c\u4efb\u52a1\u540e\u671f\u7684\u7ba1\u7406,\u5b9a\u4f4d\u6709\u6240\u4e0d\u540c,",(0,r.kt)("inlineCode",{parentName:"p"},"streamx-pump"),"\u6a21\u5757\u4e5f\u5728\u89c4\u5212\u4e2d,\n\u81f4\u529b\u4e8e\u89e3\u51b3\u6570\u636e\u6e90\u62bd\u53d6\u548c\u8fc1\u79fb,\u6700\u7ec8\u4f1a\u96c6\u6210\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"streampark-console"),"\u4e2d"))}s.isMDXComponent=!0},323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/streamx_archite-8cf7c6f5a116c753f8d9bb546eef06fa.png"}}]);