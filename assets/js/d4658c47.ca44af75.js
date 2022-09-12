"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[8848],{3905:(t,e,l)=>{l.d(e,{Zo:()=>p,kt:()=>d});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function s(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var o=n.createContext({}),k=function(t){var e=n.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):s(s({},e),t)),l},p=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=k(l),d=r,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||a;return l?n.createElement(m,s(s({ref:e},p),{},{components:l})):n.createElement(m,s({ref:e},p))}));function d(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,s=new Array(a);s[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var k=2;k<a;k++)s[k]=l[k];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},4150:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var n=l(7462),r=(l(7294),l(3905));const a={slug:"flink-development-framework-streamx",title:"Flink\u5f00\u53d1\u5229\u5668StreamPark",tags:["StreamPark","DataStream","FlinkSQL"]},s=void 0,i={permalink:"/blog/flink-development-framework-streamx",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/Flink\u5f00\u53d1\u5229\u5668StreamX.md",source:"@site/blog/Flink\u5f00\u53d1\u5229\u5668StreamX.md",title:"Flink\u5f00\u53d1\u5229\u5668StreamPark",description:"Hadoop\u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06Doris\u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06TiDB(\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7)\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3aDoris\u5177\u6709 on MySQL \u7684odbc\u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868",date:"2022-09-12T09:52:01.000Z",formattedDate:"September 12, 2022",tags:[{label:"StreamPark",permalink:"/blog/tags/stream-park"},{label:"DataStream",permalink:"/blog/tags/data-stream"},{label:"FlinkSQL",permalink:"/blog/tags/flink-sql"}],readingTime:14.5,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"flink-development-framework-streamx",title:"Flink\u5f00\u53d1\u5229\u5668StreamPark",tags:["StreamPark","DataStream","FlinkSQL"]}},o={authorsImageUrls:[]},k=[{value:"\u7b80\u5316\u955c\u50cf\u6784\u5efa",id:"\u7b80\u5316\u955c\u50cf\u6784\u5efa",level:2},{value:"\u5f15\u5165StreamX",id:"\u5f15\u5165streamx",level:2},{value:"K8s Native Application \u6a21\u5f0f",id:"k8s-native-application-\u6a21\u5f0f",level:3},{value:"K8s Native Session \u6a21\u5f0f",id:"k8s-native-session-\u6a21\u5f0f",level:3},{value:"Custom Code\u6a21\u5f0f",id:"custom-code\u6a21\u5f0f",level:3},{value:"\u6539\u8fdb\u610f\u89c1",id:"\u6539\u8fdb\u610f\u89c1",level:2},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",level:2}],p={toc:k};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,r.kt)("p",null,"Hadoop\u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06Doris\u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06TiDB(\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7)\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3aDoris\u5177\u6709 on MySQL \u7684odbc\u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868\n",(0,r.kt)("img",{src:l(7213).Z,width:"1200",height:"738"})),(0,r.kt)("center",{style:{color:"gray"}},"(\u8fd9\u91cc\u501f\u7528\u4e00\u4e0bDoris\u5b98\u65b9\u7684\u67b6\u6784\u56fe)"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"2-\u9047\u5230\u7684\u95ee\u9898"},"2. \u9047\u5230\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u5728\u6570\u636e\u5f15\u64ce\u4e0a\uff0c\u6211\u4eec\u786e\u5b9a\u4f7f\u7528Spark\u548cFlink"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528Spark on K8s client \u5ba2\u6237\u7aef\u6a21\u5f0f\u505a\u79bb\u7ebf\u6570\u636e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528Flink on K8s Native-Application/Session \u6a21\u5f0f\u505a\u5b9e\u65f6\u4efb\u52a1\u6d41\u7ba1\u7406")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u5b9e\u9645\u4e0a\u6709\u4e00\u4e9b\u95ee\u9898\u6211\u4eec\u4e00\u76f4\u6ca1\u6709\u5f7b\u5e95\u89e3\u51b3\u3002\u7528\u8fc7Native-Application\u6a21\u5f0f\u7684\u670b\u53cb\u90fd\u77e5\u9053\uff0c\u6bcf\u63d0\u4ea4\u4e00\u4e2a\u4efb\u52a1\uff0c\u90fd\u9700\u8981\u6253\u5305\u65b0\u7684\u955c\u50cf\uff0c\u63d0\u4ea4\u5230\u79c1\u6709\u4ed3\u5e93\uff0c\u7136\u540e\u518d\u8c03\u7528Flink Run \u6307\u4ee4\u6c9f\u901aK8s,\u53bb\u62c9\u53d6\u955c\u50cf\u8fd0\u884cPod\u3002\u4efb\u52a1\u63d0\u4ea4\u4e4b\u540e\uff0c\u8fd8\u9700\u8981\u53bbK8s\u67e5\u770blog, \u4f46\u662f:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u8fd0\u884c\u76d1\u63a7\u600e\u4e48\u5904\u7406\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528Cluster\u6a21\u5f0f\u8fd8\u662fNodeport\u66b4\u9732\u7aef\u53e3\u8bbf\u95eeWeb UI\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u4efb\u52a1\u80fd\u5426\u7b80\u5316\u6253\u5305\u955c\u50cf\u7684\u6d41\u7a0b?"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u4f55\u51cf\u5c11\u5f00\u53d1\u538b\u529b\uff1f")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"3-\u89e3\u51b3\u95ee\u9898\u7684\u8fc7\u7a0b"},"3. \u89e3\u51b3\u95ee\u9898\u7684\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u7684\u8fd9\u4e9b\u5176\u5b9e\u90fd\u662f\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u5982\u679c\u5355\u7eaf\u7684\u4f7f\u7528\u547d\u4ee4\u884c\u53bb\u63d0\u4ea4\u6bcf\u4e2a\u4efb\u52a1\uff0c\u662f\u4e0d\u73b0\u5b9e\u7684\uff0c\u4efb\u52a1\u91cf\u5927\u4e86\uff0c\u4f1a\u53d8\u5f97\u4e0d\u53ef\u7ef4\u62a4\u3002\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u53d8\u6210\u4e00\u4e2a\u4e0d\u5f97\u4e0d\u9762\u5bf9\u7684\u95ee\u9898\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u7b80\u5316\u955c\u50cf\u6784\u5efa"},"\u7b80\u5316\u955c\u50cf\u6784\u5efa"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u9488\u5bf9Flink\u539f\u751f\u955c\u50cf\u9700\u8981\u4e8c\u6b21build\u7684\u95ee\u9898\uff1a\u6211\u4eec\u5229\u7528\u4e86MINIO\u4f5c\u4e3a\u5916\u90e8\u5b58\u50a8\uff0c\u5e76\u4f7f\u7528s3-fuse\u901a\u8fc7DaemonSet\u7684\u65b9\u5f0f\u76f4\u63a5\u6302\u8f7d\u5728\u4e86\u6bcf\u4e2a\u5bbf\u4e3b\u8282\u70b9\u4e0a\uff0c\u6211\u4eec\u6240\u9700\u8981\u63d0\u4ea4\u7684jar\u5305\u90fd\u53ef\u4ee5\u653e\u5230\u4e0a\u9762\u7edf\u4e00\u7ba1\u7406\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u5373\u4f7f\u6269\u7f29\u5bb9Flink\u8282\u70b9\uff0c\u4e5f\u80fd\u5b9e\u73b0s3\u6302\u8f7d\u81ea\u52a8\u4f38\u7f29\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(1097).Z,width:"1141",height:"582"})),(0,r.kt)("p",null,"Flink\u4ece1.13\u7248\u672c\u5f00\u59cb\uff0c\u5c31\u652f\u6301Pod Template\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Pod Template\u4e2d\u5229\u7528\u6570\u636e\u5377\u6302\u8f7d\u7684\u65b9\u5f0f\u518d\u5c06\u5bbf\u4e3b\u673a\u76ee\u5f55\u6302\u8f7d\u5230\u6bcf\u4e2apod\u4e2d\u3002\u4ece\u800c\u65e0\u9700\u955c\u50cf\u6253\u5305\u800c\u76f4\u63a5\u5728K8s\u4e0a\u8fd0\u884cFlink\u7a0b\u5e8f\u3002\u5982\u4e0a\u56fe\uff0c\u6211\u4eec\u5c06s3\u5148\u901a\u8fc7s3-fuse Pod\u6302\u8f7d\u5728Node1\u3001Node2\u7684/mnt/data-s3fs\u76ee\u5f55\u4e0b\uff0c\u7136\u540e\u518d\u5c06/mnt/data-s3fs\u6302\u8f7d\u5230Pod A\u4e2d\u3002\n\u4f46\u662f\uff0c\u56e0\u4e3a\u5bf9\u8c61\u5b58\u50a8\u968f\u673a\u5199\u5165\u6216\u8ffd\u52a0\u6587\u4ef6\u9700\u8981\u91cd\u5199\u6574\u4e2a\u5bf9\u8c61\uff0c\u5bfc\u81f4\u8fd9\u79cd\u65b9\u5f0f\u4ec5\u9002\u5408\u4e8e\u9891\u7e41\u8bfb\u3002\u800c\u8fd9\u521a\u597d\u6ee1\u8db3\u6211\u4eec\u73b0\u5728\u7684\u573a\u666f\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u5f15\u5165streamx"},"\u5f15\u5165StreamX"),(0,r.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u5199Flink Sql \u57fa\u672c\u4e0a\u90fd\u662f\u4f7f\u7528Java\u5305\u88c5Sql\uff0c\u6253jar\u5305\uff0c\u63d0\u4ea4\u5230s3\u5e73\u53f0\u4e0a\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u63d0\u4ea4\u4ee3\u7801\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u59cb\u7ec8\u4e0d\u53cb\u597d\uff0c\u6d41\u7a0b\u7e41\u7410\uff0c\u5f00\u53d1\u548c\u8fd0\u7ef4\u6210\u672c\u592a\u5927\u3002\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u8fdb\u4e00\u6b65\u7b80\u5316\u6d41\u7a0b\uff0c\u5c06Flink TableEnvironment \u62bd\u8c61\u51fa\u6765\uff0c\u6709\u5e73\u53f0\u8d1f\u8d23\u521d\u59cb\u5316\u3001\u6253\u5305\u8fd0\u884cFlink\u4efb\u52a1\uff0c\u5b9e\u73b0Flink\u5e94\u7528\u7a0b\u5e8f\u7684\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u81ea\u52a8\u5316\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e2a\u5f00\u6e90\u5174\u8d77\u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u81ea\u7136\u800c\u7136\u7684\u5c06\u76ee\u5149\u6295\u5411\u5f00\u6e90\u9886\u57df\u4e2d\uff0c\u5728\u4e00\u4f17\u5f00\u6e90\u9879\u76ee\u4e2d,\u7ecf\u8fc7\u5bf9\u6bd4\u5404\u4e2a\u9879\u76ee\u7efc\u5408\u8bc4\u4f30\u53d1\u73b0 ",(0,r.kt)("span",{style:{color:"red"}}," Zeppelin ")," \u548c ",(0,r.kt)("span",{style:{color:"red"}}," StreamPark ")," \u8fd9\u4e24\u4e2a\u9879\u76ee\u5bf9Flink\u7684\u652f\u6301\u8f83\u4e3a\u5b8c\u5584\uff0c\u90fd\u5ba3\u79f0\u652f\u6301 ",(0,r.kt)("span",{style:{color:"red"}}," Flink on K8s "),"\uff0c\u6700\u7ec8\u8fdb\u5165\u5230\u6211\u4eec\u7684\u76ee\u6807\u9009\u62e9\u8303\u56f4\u4e2d\uff0c\u4ee5\u4e0b\u662f\u4e24\u8005\u5728K8s\u76f8\u5173\u652f\u6301\u7684\u7b80\u5355\u6bd4\u8f83\uff08\u76ee\u524d\u5982\u679c\u6709\u66f4\u65b0\uff0c\u9ebb\u70e6\u6279\u8bc4\u6307\u6b63\uff09\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u529f\u80fd"),(0,r.kt)("td",null,"Zeppelin"),(0,r.kt)("td",null,"StreamPark"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u4efb\u52a1\u72b6\u6001\u76d1\u63a7"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u7a0d\u4f4e "),",\u4e0d\u80fd\u4f5c\u4e3a\u4efb\u52a1\u72b6\u6001\u76d1\u63a7\u5de5\u5177"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u8f83\u9ad8 "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u4efb\u52a1\u8d44\u6e90\u7ba1\u7406"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u65e0 ")),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u6709 "),"\uff0c\u4f46\u76ee\u524d\u7248\u672c\u8fd8\u4e0d\u662f\u5f88\u5065\u5168")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u672c\u5730\u5316\u90e8\u7f72"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u7a0d\u4f4e "),",on K8s\u6a21\u5f0f\u53ea\u80fd\u5c06Zeppelin\u90e8\u7f72\u5728K8s\u4e2d,\u5426\u5219\u5c31\u9700\u8981\u6253\u901apod\u548c\u5916\u90e8\u7f51\u7edc,\u4f46\u662f\u8fd9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5f88\u5c11\u8fd9\u6837\u505a\u7684"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u53ef\u4ee5\u672c\u5730\u5316\u90e8\u7f72 "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u591a\u8bed\u8a00\u652f\u6301"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u8f83\u9ad8 "),",\u652f\u6301Python/Scala/Java\u591a\u8bed\u8a00"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u4e00\u822c "),",\u76ee\u524dK8s\u6a21\u5f0f\u548cYARN\u6a21\u5f0f\u540c\u65f6\u652f\u6301FlinkSql,\u5e76\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u6c42,\u4f7f\u7528Java/Scala\u5f00\u53d1DataStream")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Flink WebUI\u4ee3\u7406"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u76ee\u524d\u8fd8\u652f\u6301\u7684\u4e0d\u662f\u5f88\u5b8c\u6574 "),",\u4e3b\u5f00\u53d1\u5927\u4f6c\u76ee\u524d\u662f\u8003\u8651\u6574\u5408ingress"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u8f83\u597d "),",\u76ee\u524d\u652f\u6301ClusterIp/NodePort/LoadBalance\u6a21\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u5b66\u4e60\u6210\u672c"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u6210\u672c\u8f83\u4f4e "),",\u9700\u8981\u589e\u52a0\u989d\u5916\u7684\u53c2\u6570\u5b66\u4e60\uff0c\u8fd9\u4e2a\u548c\u539f\u751f\u7684FlinkSql\u5728\u53c2\u6570\u4e0a\u6709\u70b9\u533a\u522b"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u65e0\u6210\u672c "),",K8s\u6a21\u5f0f\u4e0bFlinkSql\u4e3a\u539f\u751f\u652f\u6301\u7684sql\u683c\u5f0f;\u540c\u65f6\u652f\u6301Custome-Code(\u7528\u6237\u7f16\u5199\u4ee3\u7801\u5f00\u53d1Datastream/FlinkSql\u4efb\u52a1)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Flink\u591a\u7248\u672c\u652f\u6301"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u652f\u6301 ")),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u652f\u6301 "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Flink\u539f\u751f\u955c\u50cf\u4fb5\u5165"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u6709\u4fb5\u5165 "),",\u9700\u8981\u5728Flink\u955c\u50cf\u4e2d\u63d0\u524d\u90e8\u7f72jar\u5305,\u4f1a\u540cjobmanage\u542f\u52a8\u5728\u540c\u4e00\u4e2apod\u4e2d,\u548czeppelin-server\u901a\u4fe1"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u65e0\u4fb5\u5165 "),",\u4f46\u662f\u4f1a\u4ea7\u751f\u8f83\u591a\u955c\u50cf\uff0c\u9700\u8981\u5b9a\u65f6\u6e05\u7406")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u4ee3\u7801\u591a\u7248\u672c\u7ba1\u7406"),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u652f\u6301 ")),(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"red"}}," \u652f\u6301 "))))),(0,r.kt)("center",{style:{color:"gray"}},"(PS: \u6b64\u5904\u4ec5\u4ece\u8c03\u7814\u7528\u6237\u89d2\u5ea6\u51fa\u53d1\uff0c\u6211\u4eec\u5bf9\u53cc\u65b9\u5f00\u53d1\u90fd\u4fdd\u6301\u6781\u5927\u7684\u5c0a\u91cd)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u8c03\u7814\u8fc7\u7a0b\u4e2d,\u6211\u4eec\u4e0e\u4e24\u8005\u7684\u4e3b\u5f00\u53d1\u4eba\u5458\u90fd\u8fdb\u884c\u4e86\u591a\u6b21\u6c9f\u901a\u3002\u7ecf\u8fc7\u6211\u4eec\u53cd\u590d\u7814\u7a76\u4e4b\u540e\uff0c\u8fd8\u662f\u51b3\u5b9a\u5c06StreamX\u4f5c\u4e3a\u6211\u4eec\u76ee\u524d\u7684Flink\u5f00\u53d1\u5de5\u5177\u6765\u4f7f\u7528\u3002"),(0,r.kt)("video",{src:"http://assets.streamxhub.com/streamx-video.mp4",controls:"controls",width:"100%",height:"100%"}),(0,r.kt)("center",{style:{color:"gray"}},"(StreamPark \u5b98\u7f51\u7684\u95ea\u5c4f)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u7ecf\u8fc7\u5f00\u53d1\u540c\u5b66\u957f\u65f6\u95f4\u5f00\u53d1\u6d4b\u8bd5\uff0cStreamX\u76ee\u524d\u5df2\u7ecf\u5177\u5907:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u7684",(0,r.kt)("span",{style:{color:"red"}},"Sql\u6821\u9a8c\u529f\u80fd")),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86",(0,r.kt)("span",{style:{color:"red"}},"\u81ea\u52a8build/push\u955c\u50cf")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668,\u901a\u8fc7Child-first \u52a0\u8f7d\u65b9\u5f0f ",(0,r.kt)("span",{style:{color:"red"}},"\u89e3\u51b3\u4e86YARN\u548cK8s\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f"),"\u3001",(0,r.kt)("span",{style:{color:"red"}},"\u652f\u6301\u4e86\u81ea\u7531\u5207\u6362Flink\u591a\u7248\u672c")),(0,r.kt)("li",{parentName:"ul"},"\u4e0eFlink-Kubernetes\u8fdb\u884c\u6df1\u5ea6\u6574\u5408\uff0c\u63d0\u4ea4\u4efb\u52a1\u540e\u8fd4\u56deWebUI\uff0c\u901a\u8fc7remote rest api + remote K8s \uff0c",(0,r.kt)("span",{style:{color:"red"}},"\u8ffd\u8e2a\u4efb\u52a1\u6267\u884c\u72b6\u6001")),(0,r.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301\u4e86 ",(0,r.kt)("span",{style:{color:"red"}},"Flink1.12\u30011.13\u30011.14 \u7b49\u7248\u672c"))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u57fa\u672c\u89e3\u51b3\u4e86\u6211\u4eec\u76ee\u524d\u5f00\u53d1\u548c\u8fd0\u7ef4\u4e2d\u5b58\u5728\u7684\u5927\u90e8\u5206\u95ee\u9898\u3002"),(0,r.kt)("video",{src:"http://assets.streamxhub.com/streamx-1.2.0.mp4",controls:"controls",width:"100%",height:"100%"}),(0,r.kt)("center",{style:{color:"gray"}},"(StreamX\u5bf9Flink\u591a\u7248\u672c\u7684\u652f\u6301\u6f14\u793a\u89c6\u9891)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728\u76ee\u524d\u6700\u65b0\u53d1\u5e03\u76841.2.0\u7248\u672c\u4e2d\uff0cStreamX\u8f83\u4e3a\u5b8c\u5584\u7684\u652f\u6301\u4e86K8s-Native-Application\u548cK8s-session-Application\u6a21\u5f0f\u3002"),(0,r.kt)("video",{src:"http://assets.streamxhub.com/streamx-k8s.mp4",controls:"controls",width:"100%",height:"100%"}),(0,r.kt)("center",{style:{color:"gray"}},"(StreamPark K8S\u90e8\u7f72\u6f14\u793a\u89c6\u9891)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"k8s-native-application-\u6a21\u5f0f"},"K8s Native Application \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728StreamX\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e\u76f8\u5e94\u7684\u53c2\u6570\uff0c\u5e76\u5728Maven pom\u4e2d\u586b\u5199\u76f8\u5e94\u7684\u4f9d\u8d56\uff0c\u6216\u8005\u4e0a\u4f20\u4f9d\u8d56jar\u5305\uff0c\u70b9\u51fbApply\uff0c\u76f8\u5e94\u7684\u4f9d\u8d56\u5c31\u4f1a\u751f\u6210\u3002\u8fd9\u5c31\u610f\u5473\u7740\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u6240\u6709\u4f7f\u7528\u7684Udf\u6253\u6210jar\u5305 and \u5404\u79cd connector.jar\uff0c\u76f4\u63a5\u5728sql\u4e2d\u4f7f\u7528\u3002\u5982\u4e0b\u56fe:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7229).Z,width:"1080",height:"461"})),(0,r.kt)("p",null,"Sql\u6821\u9a8c\u80fd\u529b\u548c Zeppelin\u57fa\u672c\u4e00\u81f4:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(5767).Z,width:"1080",height:"619"})),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a\u8d44\u6e90\uff0c\u6307\u5b9aFlink Run\u4e2d\u7684\u52a8\u6001\u53c2\u6570Dynamic Option\uff0c\u751a\u81f3\u53c2\u6570\u53ef\u4ee5\u6574\u5408pod  template"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(4964).Z,width:"1080",height:"574"})),(0,r.kt)("p",null,"\u7a0b\u5e8f\u4fdd\u5b58\u540e\uff0c\u70b9\u51fb\u8fd0\u884c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9asavepoint\u3002\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u540e\uff0cStreamX\u4f1a\u6839\u636eFlinkPod\u7f51\u7edcExposed Type(loadBalancer/Nodeport/ClusterIp),\u8fd4\u56de\u76f8\u5e94\u7684WebURL\uff0c\u4ece\u800c\u81ea\u7136\u7684\u5b9e\u73b0WebUI\u8df3\u8f6c,\u4f46\u662f\u76ee\u524d\u56e0\u4e3a\u7ebf\u4e0a\u79c1\u6709K8s\u96c6\u7fa4\u51fa\u4e8e\u5b89\u5168\u6027\u8003\u8651,\u5c1a\u672a\u6253\u901aPod\u4e0e\u5ba2\u6237\u7aef\u8282\u70b9\u7f51\u7edc\uff08\u76ee\u524d\u4e5f\u6ca1\u6709\u8fd9\u4e2a\u89c4\u5212\uff09\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u4f7f\u7528Nodeport\u3002\u5982\u679c\u540e\u7eed\u4efb\u52a1\u6570\u8fc7\u591a\uff0c\u6709\u4f7f\u7528ClusterIP\u7684\u9700\u6c42\u7684\u8bdd\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5c06StreamX \u90e8\u7f72\u5728K8s\uff0c\u6216\u8005\u540cingress\u505a\u8fdb\u4e00\u6b65\u6574\u5408\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(453).Z,width:"1080",height:"522"})),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aK8s master \u5982\u679c\u4f7f\u7528vip\u505a\u5747\u8861\u4ee3\u7406\u7684\u60c5\u51b5\u4e0b\uff0cFlink 1.13\u7248\u672c\u4f1a\u8fd4\u56devip\u7684ip\u5730\u5740\uff0c1.14\u7248\u672c\u5df2\u7ecf\u4fee\u590d\u3002 \u4e0b\u9762\u662fK8s Application\u6a21\u5f0f\u4e0b\u5177\u4f53\u63d0\u4ea4\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(9675).Z,width:"1080",height:"949"})),(0,r.kt)("center",{style:{color:"gray"}},"(\u4ee5\u4e0a\u662f\u4f9d\u636e\u4e2a\u4eba\u7406\u89e3\u7ed8\u5236\u7684\u4efb\u52a1\u63d0\u4ea4\u6d41\u7a0b\u56fe,\u5982\u6709\u9519\u8bef,\u656c\u8bf7\u8c05\u89e3)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"k8s-native-session-\u6a21\u5f0f"},"K8s Native Session \u6a21\u5f0f"),(0,r.kt)("p",null,"StreamX\u8fd8\u8f83\u597d\u7684\u652f\u6301\u4e86 ",(0,r.kt)("span",{style:{color:"red"}}," K8s Native-Sesson\u6a21\u5f0f "),"\uff0c\u8fd9\u4e3a\u6211\u4eec\u540e\u7eed\u505a\u79bb\u7ebfFlinkSql\u5f00\u53d1\u6216\u90e8\u5206\u8d44\u6e90\u9694\u79bb\u505a\u4e86\u8f83\u597d\u7684\u6280\u672f\u652f\u6301\u3002"),(0,r.kt)("p",null,"Native-session\u6a21\u5f0f\u9700\u8981\u4e8b\u5148\u4f7f\u7528Flink\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u8fd0\u884c\u5728K8s\u4e2d\u7684Flink\u96c6\u7fa4,\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./kubernetes-session.sh \\\n-Dkubernetes.cluster-id=flink-on-k8s-flinkSql-test \\\n-Dkubernetes.context=XXX \\\n-Dkubernetes.namespace=XXXX \\\n-Dkubernetes.service-account=XXXX \\\n-Dkubernetes.container.image=XXXX \\\n-Dkubernetes.container.image.pull-policy=Always \\\n-Dkubernetes.taskmanager.node-selector=XXXX \\\n-Dkubernetes.rest-service.exposed.type=Nodeport\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7752).Z,width:"1080",height:"664"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u4f7f\u7528\u8be5ClusterId\u4f5c\u4e3aStreamX\u7684\u4efb\u52a1\u53c2\u6570Kubernetes ClusterId\u3002\u4fdd\u5b58\u63d0\u4ea4\u4efb\u52a1\u540e\uff0c\u4efb\u52a1\u4f1a\u5f88\u5feb\u5904\u4e8eRunning\u72b6\u6001"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(5423).Z,width:"1080",height:"529"})),(0,r.kt)("p",null,"\u6211\u4eec\u987a\u7740application info\u7684WebUI\u70b9\u51fb\u8df3\u8f6c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(9257).Z,width:"1080",height:"520"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5176\u5b9eStreamX\u662f\u5c06jar\u5305\u901a\u8fc7Rest Api\u4e0a\u4f20\u5230Flink\u96c6\u7fa4\u4e0a\uff0c\u5e76\u8c03\u5ea6\u6267\u884c\u4efb\u52a1\u7684\u3002"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"custom-code\u6a21\u5f0f"},"Custom Code\u6a21\u5f0f"),(0,r.kt)("p",null,"\u53e6\u6211\u4eec\u60ca\u559c\u7684\u662f\uff0cStreamPark \u8fd8\u652f\u6301\u4ee3\u7801\u7f16\u5199DataStream/FlinkSql\u4efb\u52a1\u3002\u5bf9\u4e8e\u7279\u6b8a\u9700\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u5199Java/Scala\u5b9e\u73b0\u3002\u53ef\u4ee5\u6839\u636eStreamX\u63a8\u8350\u7684\u811a\u624b\u67b6\u65b9\u5f0f\u7f16\u5199\u4efb\u52a1\uff0c\u4e5f\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u6807\u51c6\u666e\u901a\u7684Flink\u4efb\u52a1\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6211\u4eec\u53ef\u4ee5\u5c06\u4ee3\u7801\u7ba1\u7406\u4ea4\u7531Git\u5b9e\u73b0\uff0c\u5e73\u53f0\u53ef\u4ee5\u7528\u6765\u81ea\u52a8\u5316\u7f16\u8bd1\u6253\u5305\u4e0e\u90e8\u7f72\u3002\u5f53\u7136\uff0c\u5982\u679c\u80fd\u7528Sql\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u6211\u4eec\u4f1a\u5c3d\u91cf\u907f\u514d\u81ea\u5b9a\u4e49DataStream\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8fd0\u7ef4\u9ebb\u70e6\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"4-\u610f\u89c1\u548c\u89c4\u5212"},"4. \u610f\u89c1\u548c\u89c4\u5212"),(0,r.kt)("h2",{id:"\u6539\u8fdb\u610f\u89c1"},"\u6539\u8fdb\u610f\u89c1"),(0,r.kt)("p",null,"\u5f53\u7136StreamX\u8fd8\u6709\u5f88\u591a\u9700\u8981\u6539\u8fdb\u7684\u5730\u65b9\uff0c\u5c31\u76ee\u524d\u6d4b\u8bd5\u6765\u770b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7ba1\u7406\u8fd8\u6709\u5f85\u52a0\u5f3a\n\u591a\u6587\u4ef6\u7cfb\u7edfjar\u5305\u7b49\u8d44\u6e90\u7ba1\u7406\u529f\u80fd\u5c1a\u672a\u6dfb\u52a0\uff0c\u4efb\u52a1\u7248\u672c\u529f\u80fd\u6709\u5f85\u52a0\u5f3a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aefbuttern \u529f\u80fd\u8fd8\u4e0d\u591f\u4e30\u5bcc\n\u6bd4\u5982\u4efb\u52a1\u6dfb\u52a0\u540e\u7eed\u53ef\u4ee5\u589e\u52a0\u590d\u5236\u7b49\u529f\u80fd\u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u63d0\u4ea4\u65e5\u5fd7\u4e5f\u9700\u8981\u53ef\u89c6\u5316\u5c55\u793a\n\u4efb\u52a1\u63d0\u4ea4\u4f34\u968f\u7740\u52a0\u8f7dclass\u6587\u4ef6\uff0c\u6253jar\u5305\uff0cbuild\u955c\u50cf\uff0c\u63d0\u4ea4\u955c\u50cf\uff0c\u63d0\u4ea4\u4efb\u52a1\u7b49\u8fc7\u7a0b\uff0c\u6bcf\u4e00\u4e2a\u73af\u8282\u51fa\u9519\uff0c\u90fd\u4f1a\u5bfc\u81f4\u4efb\u52a1\u7684\u5931\u8d25\uff0c\u4f46\u662f\u5931\u8d25\u65e5\u5fd7\u5f80\u5f80\u4e0d\u660e\u786e\uff0c\u6216\u8005\u56e0\u4e3a\u67d0\u79cd\u539f\u56e0\u5bfc\u81f4\u5f02\u5e38\u672a\u6b63\u5e38\u629b\u51fa\uff0c\u6ca1\u6709\u8f6c\u6362\u4efb\u52a1\u72b6\u6001\uff0c\u7528\u6237\u4f1a\u65e0\u4ece\u4e0b\u624b\u6539\u8fdb\u3002")),(0,r.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u4e00\u4e2a\u65b0\u4e8b\u7269\u7684\u51fa\u73b0\u4e00\u5f00\u59cb\u603b\u4f1a\u4e0d\u662f\u90a3\u4e48\u5b8c\u7f8e\u3002\u5c3d\u7ba1\u6709\u4e9b\u8bb8\u95ee\u9898\u548c\u9700\u8981\u6539\u8fdb\u7684point\uff0c\u4f46\u662f\u7455\u4e0d\u63a9\u745c\uff0c\u6211\u4eec\u4ecd\u7136\u9009\u62e9StreamX\u4f5c\u4e3a\u6211\u4eec\u7684Flink DevOps\uff0c\u6211\u4eec\u4e5f\u5c06\u4f1a\u548c\u4e3b\u5f00\u53d1\u4eba\u5458\u4e00\u9053\u5171\u540c\u5b8c\u5584StreamX\uff0c\u4e5f\u6b22\u8fce\u66f4\u591a\u7684\u4eba\u6765\u4f7f\u7528\uff0c\u4e3aStreamX\u5e26\u6765\u66f4\u591a\u8fdb\u6b65\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u4f1a\u7ee7\u7eed\u8ddf\u8fdbdoris\uff0c\u5e76\u5c06\u4e1a\u52a1\u6570\u636e + \u65e5\u5fd7\u6570\u636e\u7edf\u4e00\u5165doris\uff0c\u901a\u8fc7Flink\u5b9e\u73b0\u6e56\u4ed3\u4e00\u4f53\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u4e5f\u4f1a\u9010\u6b65\u5c06\u63a2\u7d22StreamX\u540cdolphinscheduler 2.x\u8fdb\u884c\u6574\u5408\uff0c\u5b8c\u5584dolphinscheduler\u79bb\u7ebf\u4efb\u52a1\uff0c\u9010\u6b65\u7528Flink \u66ff\u6362\u6389Spark\uff0c\u5b9e\u73b0\u771f\u6b63\u7684\u6d41\u6279\u4e00\u4f53\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u6211\u4eec\u81ea\u8eab\u5728s3\u4e0a\u7684\u63a2\u7d22\u79ef\u7d2f\uff0cfat-jar\u5305 build \u5b8c\u6210\u4e4b\u540e\u4e0d\u518d\u6784\u5efa\u955c\u50cf\uff0c\u76f4\u63a5\u5229\u7528Pod Tempelet\u6302\u8f7dpvc\u5230Flink pod\u4e2d\u7684\u76ee\u5f55\uff0c\u8fdb\u4e00\u6b65\u4f18\u5316\u4ee3\u7801\u63d0\u4ea4\u6d41\u7a0b\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06StreamX\u6301\u7eed\u5e94\u7528\u5230\u6211\u4eec\u751f\u4ea7\u4e2d\uff0c\u5e76\u6c47\u540c\u793e\u533a\u5f00\u53d1\u4eba\u5458\uff0c\u5171\u540c\u52aa\u529b\uff0c\u589e\u5f3aStreamX\u5728Flink\u6d41\u4e0a\u7684\u5f00\u53d1\u90e8\u7f72\u80fd\u529b\u4e0e\u8fd0\u884c\u76d1\u63a7\u80fd\u529b\uff0c\u52aa\u529b\u628aStreamX\u6253\u9020\u6210\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u6d41\u6570\u636e DevOps\u3002"))),(0,r.kt)("p",null,"\u9644:"),(0,r.kt)("p",null,"Streamx Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx"},"https://github.com/streamxhub/streamx")," ",(0,r.kt)("br",null),"\nDoris Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris"},"https://github.com/apache/incubator-doris")),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(4744).Z,width:"900",height:"500"})))}u.isMDXComponent=!0},4744:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/author-c3dabbb31d7cea1b5164a75a94ca3008.png"},9257:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/dashboard-78745d8d3ebe422b166a17631bfbe622.png"},7229:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/dependency-a3b9ff29795acb8a1fd4ed6bb773d53e.png"},5423:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/detail-e9ee4c14e45068bea5e1edabec596bee.png"},7213:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/doris-4baaea78343b928b0a798ae9238c489f.png"},7752:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/flinksql-13b242feb3803b15e6698635a79065b4.png"},9675:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/flow-c2227ba0cc1f59f78e2164fdb3657223.png"},1097:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/k8s-9a28cd8f0e9c996501193f591ebe22b0.png"},4964:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/pod-d46370aaff2c34c4fe6a584c0524b28e.png"},5767:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/sqlverify-7e12cf343c9c81fcbc2e20f8d7588f1b.png"},453:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/start-71fbb288851d022c450a6bd34e8b4dc2.png"}}]);