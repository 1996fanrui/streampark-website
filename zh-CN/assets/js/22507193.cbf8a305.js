"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[9216],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),f=m(a),N=n,s=f["".concat(p,".").concat(N)]||f[N]||k[N]||l;return a?r.createElement(s,i(i({ref:e},d),{},{components:a})):r.createElement(s,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7260:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={id:"4-avro",title:"AVRO",sidebar_position:4},i=void 0,o={unversionedId:"flinksql/format/4-avro",id:"flinksql/format/4-avro",title:"AVRO",description:"\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/4-avro.md",sourceDirName:"flinksql/format",slug:"/flinksql/format/4-avro",permalink:"/zh-CN/docs/flinksql/format/4-avro",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/4-avro.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"4-avro",title:"AVRO",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/zh-CN/docs/flinksql/format/3-json"},next:{title:"Confluent Avro",permalink:"/zh-CN/docs/flinksql/format/5-confluent-avro"}},p={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528AVRO\u683c\u5f0f",id:"\u4f7f\u7528avro\u683c\u5f0f",level:2},{value:"Format\u53c2\u6570",id:"format\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u5339\u914d",id:"\u6570\u636e\u7c7b\u578b\u5339\u914d",level:2}],d={toc:m};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,n.kt)("p",null,"\u652f\u6301\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Format: Serialization Schema \u5e8f\u5217\u5316\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"Format: Deserialization Schema \u53cd\u5e8f\u5217\u5316\u683c\u5f0f")),(0,n.kt)("p",null,"Apache Avro\u683c\u5f0f\u5141\u8bb8\u57fa\u4e8eAvro schema\u8bfb\u5199Avro\u683c\u5f0f\u7684\u6570\u636e\u3002\u76ee\u524d\uff0cAvro schema\u6d3e\u751f\u4e8e\u8868schema\u3002"),(0,n.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528Avro\u683c\u5f0f\uff0c\u4ee5\u4e0b\u4f9d\u8d56\u9879\u5bf9\u4e8e\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u5e26\u6709SQL JAR\u5305\u7684SQL Client\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-sql-avro</artifactId>\n    <version>1.13.0</version>\n</dependency> \n")),(0,n.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u6240\u4f7f\u7528\u7684 flink \u7684\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528avro\u683c\u5f0f"},"\u4f7f\u7528AVRO\u683c\u5f0f"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528Kafka\u8fde\u63a5\u5668\u548cAvro\u683c\u5f0f\u521b\u5efa\u8868\u7684\u4f8b\u5b50\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_behavior (\n    user_id BIGINT,\n    item_id BIGINT,\n    category_id BIGINT,\n    behavior STRING,\n    ts TIMESTAMP(3)\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_behavior',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'properties.group.id' = 'testGroup',\n    'format' = 'avro'\n)\n")),(0,n.kt)("h2",{id:"format\u53c2\u6570"},"Format\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9009\u9879"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u88ab\u8f6c\u53d1",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"th"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301")),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u54ea\u79cd\u683c\u5f0f\uff0c\u8fd9\u513f\u5e94\u8be5\u662f ",(0,n.kt)("strong",{parentName:"td"},"avro")," \u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avro.codec"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u7528\u4e8e",(0,n.kt)("inlineCode",{parentName:"td"},"Filesystem"),"\u6587\u4ef6\u7cfb\u7edf\uff0c\u6307\u5b9aavro\u7684\u538b\u7f29\u683c\u5f0f\u3002\u9ed8\u8ba4\u6ca1\u6709\u538b\u7f29\u3002\u53ef\u7528\u7684\u679a\u4e3e\u6709\uff1a",(0,n.kt)("strong",{parentName:"td"},"deflate"),"\u3001",(0,n.kt)("strong",{parentName:"td"},"snappy"),"\u3001",(0,n.kt)("strong",{parentName:"td"},"bzip2"),"\u3001",(0,n.kt)("strong",{parentName:"td"},"xz"),"\u3002")))),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u5339\u914d"},"\u6570\u636e\u7c7b\u578b\u5339\u914d"),(0,n.kt)("p",null,"\u76ee\u524d\uff0cAvro schema\u603b\u662f\u6d3e\u751f\u4e8e\u8868schema\u3002\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u76f4\u63a5\u663e\u5f0f\u5b9a\u4e49Avro schema\u3002\u4e0b\u8868\u5217\u51fa\u4e86\u4eceFlink\u7c7b\u578b\u5230Avro\u7c7b\u578b\u7684\u7c7b\u578b\u6620\u5c04\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Flink SQL \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Avro \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Avro \u903b\u8f91\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHAR / VARCHAR / STRING"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BINARY / VARBINARY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"fixed"),(0,n.kt)("td",{parentName:"tr",align:"left"},"decimal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"float"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"time-millis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"timestamp-millis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ARRAY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAP",(0,n.kt)("br",null),"(key \u5fc5\u987b\u662f string/char/varchar \u7c7b\u578b)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"map"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MULTISET",(0,n.kt)("br",null),"(\u5143\u7d20\u5fc5\u987b\u662f string/char/varchar \u7c7b\u578b)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"map"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ROW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"record"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u5217\u51fa\u7684\u7c7b\u578b\u5916\uff0cFlink\u8fd8\u652f\u6301\u8bfb\u5199\u53ef\u7a7a\u7c7b\u578b\u3002Flink\u5c06\u53ef\u4e3a\u7a7a\u7684\u7c7b\u578b\u6620\u5c04\u5230Avro\u8054\u5408(\u67d0\u503c\uff0cnull)\uff0c\u5176\u4e2d\u67d0\u503c\u662f\u4eceFlink\u7c7b\u578b\u8f6c\u6362\u800c\u6765\u7684Avro\u7c7b\u578b\u3002  "),(0,n.kt)("p",null,"\u6709\u5173Avro\u7c7b\u578b\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"Avro\u89c4\u8303"),"\u3002"))}k.isMDXComponent=!0}}]);