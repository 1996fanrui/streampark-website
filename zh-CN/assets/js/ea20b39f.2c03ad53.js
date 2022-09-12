"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[3023],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(a),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6725:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"8-maxwell",title:"Maxwell",sidebar_position:8},i=void 0,p={unversionedId:"flinksql/format/8-maxwell",id:"flinksql/format/8-maxwell",title:"Maxwell",description:"\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/8-maxwell.md",sourceDirName:"flinksql/format",slug:"/flinksql/format/8-maxwell",permalink:"/zh-CN/docs/flinksql/format/8-maxwell",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/8-maxwell.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"8-maxwell",title:"Maxwell",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Canal",permalink:"/zh-CN/docs/flinksql/format/7-canal"},next:{title:"Ogg",permalink:"/zh-CN/docs/flinksql/format/9-ogg"}},o={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528Maxwell\u683c\u5f0f",id:"\u4f7f\u7528maxwell\u683c\u5f0f",level:2},{value:"\u53ef\u7528\u5143\u6570\u636e",id:"\u53ef\u7528\u5143\u6570\u636e",level:2},{value:"Format\u53c2\u6570",id:"format\u53c2\u6570",level:2}],d={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("p",null,"\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changelog-Data-Capture Format CDC"),(0,r.kt)("li",{parentName:"ul"},"Format: Serialization Schema \u5e8f\u5217\u5316\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"Format: Deserialization Schema \u53cd\u5e8f\u5217\u5316\u683c\u5f0f")),(0,r.kt)("p",null,"Maxwell\u662f\u4e00\u4e2aCDC (Changelog\u53d8\u66f4\u6570\u636e\u6355\u6349)\u5de5\u5177\uff0c\u53ef\u4ee5\u5b9e\u65f6\u4eceMySQL\u6d41\u5230Kafka, Kinesis\u548c\u5176\u4ed6\u6d41\u8fde\u63a5\u5668\u3002Maxwell\u4e3a\u53d8\u66f4\u65e5\u5fd7\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5e76\u652f\u6301\u4f7f\u7528 JSON \u5e8f\u5217\u5316\u6d88\u606f\u3002"),(0,r.kt)("p",null,"Flink\u652f\u6301\u5c06Maxwell JSON\u6d88\u606f\u89e3\u91ca\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT/UPDATE/DELETE"),"\u6d88\u606f\u5230Flink SQL\u7cfb\u7edf\u4e2d\u3002\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u7279\u6027\u662f\u5f88\u6709\u7528\u7684\uff0c\u4f8b\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u589e\u91cf\u6570\u636e\u4ece\u6570\u636e\u5e93\u540c\u6b65\u5230\u5176\u4ed6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5ba1\u8ba1"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7684\u5b9e\u65f6\u7269\u5316\u89c6\u56fe"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u8054\u7ef4\u5ea6\u6570\u636e\u5e93\u7684\u53d8\u66f4\u5386\u53f2\uff0c\u7b49\u7b49")),(0,r.kt)("p",null,"Flink\u8fd8\u652f\u6301\u5c06Flink SQL\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT/UPDATE/DELETE"),"\u6d88\u606f\u7f16\u7801\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Maxwell JSON"),"\u6d88\u606f\uff0c\u5e76\u53d1\u9001\u5230Kafka\u7b49\u5916\u90e8\u7cfb\u7edf\u3002\n\u4f46\u662f\uff0c\u76ee\u524dFlink\u8fd8\u4e0d\u80fd\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE_BEFORE"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE_AFTER"),"\u5408\u5e76\u6210\u4e00\u4e2a\u5355\u72ec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u6d88\u606f\u3002\u56e0\u6b64\uff0cFlink\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE_BEFORE"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"UDPATE_AFTER"),"\u7f16\u7801\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," Maxwell\u6d88\u606f\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528Maxwell\u683c\u5f0f\uff0c\u4ee5\u4e0b\u4f9d\u8d56\u9879\u5bf9\u4e8e\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u5e26\u6709SQL JAR\u5305\u7684SQL Client\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-json</artifactId>\n    <version>1.13.0</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u4f7f\u7528\u7684 flink \u7248\u672c\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f:\u5173\u4e8e\u5982\u4f55\u7528Maxwell JSON\u540c\u6b65changelog\u6d41\u5230Kafka\u4e3b\u9898\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"http://maxwells-daemon.io/quickstart/"},"Maxwell\u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528maxwell\u683c\u5f0f"},"\u4f7f\u7528Maxwell\u683c\u5f0f"),(0,r.kt)("p",null,"Maxwell\u4e3achangelog\u6d41\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u683c\u5f0f\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u7528\u4e8e\u4eceJSON\u683c\u5f0f\u7684MySQL products\u8868\u4e2d\u83b7\u53d6\u66f4\u65b0\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "database": "test",\n  "table": "e",\n  "type": "insert",\n  "ts": 1477053217,\n  "xid": 23396,\n  "commit": true,\n  "position": "master.000006:800911",\n  "server_id": 23042,\n  "thread_id": 108,\n  "primary_key": [\n    1,\n    "2016-10-21 05:33:37.523000"\n  ],\n  "primary_key_columns": [\n    "id",\n    "c"\n  ],\n  "data": {\n    "id": 111,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.15\n  },\n  "old": {\n    "weight": 5.18\n  }\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610f:\u5173\u4e8e\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"http://maxwells-daemon.io/quickstart/"},"Maxwell\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"MySQL products\u8868\u67094\u5217id, name, description \u548cweight)\u3002\n\u4e0a\u9762\u7684JSON\u6d88\u606f\u662fproducts\u8868\u4e0a\u7684\u66f4\u65b0\u66f4\u6539\u4e8b\u4ef6\uff0c\u5176\u4e2did = 111\u884c\u7684weight\u503c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"5.18"),"\u66f4\u6539\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"5.15"),"\u3002\n\u5047\u8bbe\u8fd9\u4e2a\u6d88\u606f\u540c\u6b65\u5230Kafka\u4e3b\u9898products_binlog\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684DDL\u6765\u6d88\u8d39\u8fd9\u4e2a\u4e3b\u9898\u5e76\u89e3\u91ca\u53d8\u5316\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE topic_products (\n    -- schema\u548cMySQL\u7684\"products\"\u8868\u5b8c\u5168\u4e00\u81f4\n    id BIGINT,\n    name STRING,\n    description STRING,\n    weight DECIMAL(10, 2)\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'products_binlog',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'properties.group.id' = 'testGroup',\n    'format' = 'maxwell-json'\n)\n")),(0,r.kt)("p",null,"\u5c06\u4e3b\u9898\u6ce8\u518c\u4e3aFlink\u8868\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06Maxwell\u6d88\u606f\u4f5c\u4e3a\u66f4\u6539\u65e5\u5fd7\u6e90\u4f7f\u7528\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'-- \u5173\u4e8eMySQL "products" \u8868\u7684\u5b9e\u65f6\u7269\u5316\u89c6\u56fe\n-- \u8ba1\u7b97\u76f8\u540c\u4ea7\u54c1\u7684\u6700\u65b0\u5e73\u5747\u91cd\u91cf\nSELECT name, AVG(weight) FROM topic_products GROUP BY name;\n\n-- \u5c06 MySQL "products" \u8868\u7684\u6240\u6709\u6570\u636e\u548c\u589e\u91cf\u66f4\u6539\u540c\u6b65\u5230 Elasticsearch "products" \u7d22\u5f15\u4ee5\u4f9b\u5c06\u6765\u641c\u7d22\nINSERT INTO elasticsearch_products\nSELECT * FROM topic_products;\n')),(0,r.kt)("h2",{id:"\u53ef\u7528\u5143\u6570\u636e"},"\u53ef\u7528\u5143\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ece flink-1.14.x \u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684 format \u5143\u6570\u636e\u53ef\u4ee5\u5728\u8868\u5b9a\u4e49\u7684",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u865a\u62df\uff08VIRTUAL\uff09\u5217"),"\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u53ea\u6709\u5728\u5bf9\u5e94\u7684\u8fde\u63a5\u5668\u53ef\u4ee5\u4f20\u9012 format \u5143\u6570\u636e\u65f6\uff0cformat \u5143\u6570\u636e\u5c5e\u6027\u624d\u53ef\u7528\u3002\u76ee\u524d\uff0c\u53ea\u6709 kafka \u8fde\u63a5\u5668\u53ef\u4ee5\u66b4\u9732\u5143\u6570\u636e\u5c5e\u6027\u5230\u4ed6\u7684 value format\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"database"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u6570\u636e\u5e93\u540d\u79f0\uff0c\u5982\u679c\u53ef\u7528\uff0c\u5219\u5bf9\u5e94\u4e8e Maxwell \u6570\u636e\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"database"),"\u5b57\u6bb5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u6570\u636e\u5e93\u8868\u540d\u79f0\uff0c\u5982\u679c\u53ef\u7528\uff0c\u5219\u5bf9\u5e94\u4e8e Maxwell \u6570\u636e\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"table"),"\u5b57\u6bb5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"primary-key-columns"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY<STRING> NULL")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u952e\u540d\u79f0\u6570\u7ec4\uff0c\u5982\u679c\u53ef\u7528\uff0c\u5219\u5bf9\u5e94\u4e8e Maxwell \u6570\u636e\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"primary_key_columns"),"\u5c5e\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ingestion-timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP_LTZ(3) NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u5668\u5904\u7406\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\u3002\u5982\u679c\u53ef\u7528\uff0c\u5219\u5bf9\u5e94\u4e8e Maxwell \u6570\u636e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"ts")," \u5c5e\u6027\u3002")))),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u6848\u4f8b\u5c55\u793a\u5982\u679c\u8bbf\u95ee kafka \u4e2d Maxwell \u5143\u6570\u636e\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE KafkaTable (\n    origin_database STRING METADATA FROM 'value.database' VIRTUAL,\n    origin_table STRING METADATA FROM 'value.table' VIRTUAL,\n    origin_primary_key_columns ARRAY<STRING> METADATA FROM 'value.primary-key-columns' VIRTUAL,\n    origin_ts TIMESTAMP(3) METADATA FROM 'value.ingestion-timestamp' VIRTUAL,\n    user_id BIGINT,\n    item_id BIGINT,\n    behavior STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_behavior',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'properties.group.id' = 'testGroup',\n    'scan.startup.mode' = 'earliest-offset',\n    'value.format' = 'maxwell-json'\n);\n")),(0,r.kt)("h2",{id:"format\u53c2\u6570"},"Format\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"format"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u683c\u5f0f\uff0c\u6b64\u5904\u5e94\u4e3a ",(0,r.kt)("strong",{parentName:"td"},"maxwell-json")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxwell-json.ignore-parse-errors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u89e3\u6790\u5f02\u5e38\u65f6\uff0c\u662f\u8df3\u8fc7\u5f53\u524d\u5b57\u6bb5\u6216\u884c\uff0c\u8fd8\u662f\u629b\u51fa\u9519\u8bef\u5931\u8d25\uff08\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u629b\u51fa\u9519\u8bef\u5931\u8d25\uff09\u3002\u5982\u679c\u5ffd\u7565\u5b57\u6bb5\u7684\u89e3\u6790\u5f02\u5e38\uff0c\u5219\u4f1a\u5c06\u8be5\u5b57\u6bb5\u503c\u8bbe\u7f6e\u4e3anull\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxwell-json.timestamp-format.standard"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'SQL'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8f93\u5165\u548c\u8f93\u51fa\u65f6\u95f4\u6233\u683c\u5f0f\u3002\u5f53\u524d\u652f\u6301\u7684\u503c\u662f ",(0,r.kt)("strong",{parentName:"td"},"SQL")," \u548c ",(0,r.kt)("strong",{parentName:"td"},"ISO-8601"),"\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SQL"),"\uff1a\u5c06\u89e3\u6790 ",(0,r.kt)("strong",{parentName:"td"},"yyyy-MM-dd HH:mm:ss.s{precision}")," \u683c\u5f0f\u7684\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u4f8b\u5982 '",(0,r.kt)("strong",{parentName:"td"},"2020-12-30 12:13:14.123"),"'\uff0c\u5e76\u4ee5\u76f8\u540c\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"ISO-8601"),"\uff1a\u5c06\u89e3\u6790 ",(0,r.kt)("strong",{parentName:"td"},"yyyy-MM-ddTHH:mm:ss.s{precision}")," \u683c\u5f0f\u7684\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u4f8b\u5982 '",(0,r.kt)("strong",{parentName:"td"},"2020-12-30T12:13:14.123"),"'\uff0c\u5e76\u4ee5\u76f8\u540c\u7684\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxwell-json.map-null-key.mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'FAIL'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5904\u7406 Map \u4e2d key \u503c\u4e3a\u7a7a\u7684\u65b9\u6cd5. \u5f53\u524d\u652f\u6301\u7684\u503c\u6709 ",(0,r.kt)("strong",{parentName:"td"},"FAIL"),", ",(0,r.kt)("strong",{parentName:"td"},"DROP")," \u548c ",(0,r.kt)("strong",{parentName:"td"},"LITERAL"),"\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"FAIL"),"\uff1a\u5982\u679c\u9047\u5230 Map \u4e2d key \u503c\u4e3a\u7a7a\u7684\u6570\u636e\uff0c\u5c06\u629b\u51fa\u5f02\u5e38\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"DROP"),"\uff1a\u5c06\u4e22\u5f03 Map \u4e2d key \u503c\u4e3a\u7a7a\u7684\u6570\u636e\u9879\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"LITERAL"),"\uff1a \u5c06\u4f7f\u7528\u5b57\u7b26\u4e32\u5e38\u91cf\u6765\u66ff\u6362 Map \u4e2d\u7684\u7a7a key \u503c\u3002\u5b57\u7b26\u4e32\u5e38\u91cf\u7684\u503c\u7531 ",(0,r.kt)("strong",{parentName:"td"},"canal-json.map-null-key.literal")," \u5b9a\u4e49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxwell-json.map-null-key.literal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'null'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53 ",(0,r.kt)("strong",{parentName:"td"},"canal-json.map-null-key.mode")," \u662f ",(0,r.kt)("strong",{parentName:"td"},"LITERAL")," \u7684\u65f6\u5019\uff0c\u6307\u5b9a\u5b57\u7b26\u4e32\u5e38\u91cf\u66ff\u6362 Map \u4e2d\u7684\u7a7a key \u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxwell-json.encode.decimal-as-plain-number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u6240\u6709 DECIMAL \u7c7b\u578b\u7684\u6570\u636e\u4fdd\u6301\u539f\u72b6\uff0c\u4e0d\u4f7f\u7528\u79d1\u5b66\u8ba1\u6570\u6cd5\u8868\u793a\u3002\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"0.000000027")," \u9ed8\u8ba4\u4f1a\u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"2.7E-8"),"\u3002\u5f53\u6b64\u9009\u9879\u8bbe\u4e3a true \u65f6\uff0c\u5219\u4f1a\u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0.000000027"),"\u3002")))))}k.isMDXComponent=!0}}]);