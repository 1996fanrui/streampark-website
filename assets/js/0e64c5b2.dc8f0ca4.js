"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[4755],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),f=o(a),N=n,s=f["".concat(m,".").concat(N)]||f[N]||k[N]||l;return a?r.createElement(s,i(i({ref:e},d),{},{components:a})):r.createElement(s,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6506:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={id:"2-csv",title:"CSV",sidebar_position:2},i=void 0,p={unversionedId:"flinksql/format/2-csv",id:"flinksql/format/2-csv",title:"CSV",description:"\u8bf4\u660e",source:"@site/docs/flinksql/format/2-csv.md",sourceDirName:"flinksql/format",slug:"/flinksql/format/2-csv",permalink:"/docs/flinksql/format/2-csv",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/format/2-csv.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"2-csv",title:"CSV",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/flinksql/format/1-introduce"},next:{title:"JSON",permalink:"/docs/flinksql/format/3-json"}},m={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528CSV\u683c\u5f0f",id:"\u4f7f\u7528csv\u683c\u5f0f",level:2},{value:"Format\u53c2\u6570",id:"format\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u5339\u914d",id:"\u6570\u636e\u7c7b\u578b\u5339\u914d",level:2}],d={toc:o};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,n.kt)("p",null,"\u652f\u6301\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Format: Serialization Schema \u5e8f\u5217\u5316\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"Format: Deserialization Schema \u53cd\u5e8f\u5217\u5316\u683c\u5f0f")),(0,n.kt)("p",null,"CSV\u683c\u5f0f\u5141\u8bb8\u57fa\u4e8eCSV schema\u8bfb\u5199CSV\u683c\u5f0f\u7684\u6570\u636e\u3002\u76ee\u524d\uff0cCSV schema\u6765\u6e90\u4e8e\u8868schema\u5b9a\u4e49\u3002"),(0,n.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528CSV\u683c\u5f0f\uff0c\u4ee5\u4e0b\u4f9d\u8d56\u9879\u5bf9\u4e8e\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u5e26\u6709SQL JAR\u5305\u7684SQL Client\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-csv</artifactId>\n    <version>1.13.0</version>\n</dependency>\n")),(0,n.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u4f7f\u7528\u7684 flink \u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528csv\u683c\u5f0f"},"\u4f7f\u7528CSV\u683c\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_behavior (\n    user_id BIGINT,\n    item_id BIGINT,\n    category_id BIGINT,\n    behavior STRING,\n    ts TIMESTAMP(3)\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_behavior',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'properties.group.id' = 'testGroup',\n    'format' = 'csv',\n    'csv.ignore-parse-errors' = 'true',\n    'csv.allow-comments' = 'true'\n)\n")),(0,n.kt)("h2",{id:"format\u53c2\u6570"},"Format\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9009\u9879"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u88ab\u8f6c\u53d1",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"th"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301")),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u54ea\u79cd\u683c\u5f0f\uff0c\u8fd9\u513f\u5e94\u8be5\u662f ",(0,n.kt)("strong",{parentName:"td"},"csv")," \u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.field-delimiter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},","),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u503c\u5206\u9694\u7b26\u53f7\uff08\u9ed8\u8ba4\u4e3a\u82f1\u6587\u9017\u53f7",(0,n.kt)("strong",{parentName:"td"},","),"\uff09\uff0c\u5fc5\u987b\u662f\u5355\u4e2a\u5b57\u7b26\u3002",(0,n.kt)("br",null),"\u53ef\u4ee5\u4f7f\u7528\u53cd\u659c\u6760\u6765\u6307\u5b9a\u7279\u6b8a\u5b57\u7b26\uff0c\u6bd4\u5982",(0,n.kt)("strong",{parentName:"td"},"\\t"),"\u4ee3\u8868\u5236\u8868\u7b26\u3002",(0,n.kt)("br",null),"\u4e5f\u53ef\u4ee5\u5728\u7eafSQL\u4e2d\u4f7f\u7528unicode\u7f16\u7801\u6765\u6307\u5b9a\uff0c\u6bd4\u5982\uff1a",(0,n.kt)("strong",{parentName:"td"},"'csv.field-delimiter' = U&'\\0001'"),"\uff0c\u8868\u793a0x01\u5b57\u7b26\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.disable-quote-character"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7981\u7528\u7528\u4e8e\u5c01\u95ed\u5b57\u6bb5\u503c\u7684\u5f15\u53f7\u7b26\u53f7\uff08\u9ed8\u8ba4\u4e3a",(0,n.kt)("strong",{parentName:"td"},"false"),"\uff09\u3002\u5982\u679c\u4e3atrue\uff0c\u5fc5\u987b\u8bbe\u7f6e",(0,n.kt)("strong",{parentName:"td"},"csv.quote-character"),"\u9009\u9879\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.quote-character"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},'"'),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5c01\u95ed\u5b57\u6bb5\u503c\u7684\u5f15\u53f7\u7b26\u53f7\uff08\u9ed8\u8ba4\u4e3a\u82f1\u6587\u53cc\u5f15\u53f7",(0,n.kt)("strong",{parentName:"td"},'"'),"\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.allow-comments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565\u4ee5",(0,n.kt)("strong",{parentName:"td"},"#"),"\u5f00\u5934\u7684\u6ce8\u91ca\u884c\uff08\u9ed8\u8ba4\u7981\u7528\uff09\u3002\u5982\u679c\u542f\u52a8\u7528\uff0c\u786e\u8ba4\u540c\u65f6\u5ffd\u7565\u8f6c\u6362\u9519\u8bef\uff0c\u4ee5\u5141\u8bb8\u51fa\u73b0\u7a7a\u884c\u6570\u636e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.ignore-parse-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8df3\u8fc7\u8f6c\u6362\u9519\u8bef\u7684\u5c5e\u6027\u548c\u6570\u636e\u884c\uff0c\u800c\u4e0d\u662f\u5931\u8d25\u3002\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5b57\u6bb5\u503c\u5c06\u8bbe\u7f6e\u4e3a",(0,n.kt)("strong",{parentName:"td"},"null"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.array-element-delimiter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},";"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6570\u7ec4\u5143\u7d20\u5206\u9694\u7b26\u53f7\uff08\u9ed8\u8ba4\u4e3a\u82f1\u6587\u5206\u53f7",(0,n.kt)("strong",{parentName:"td"},";"),"\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.escape-character"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u8f6c\u4e49\u5b57\u6bb5\u503c\u7684\u8f6c\u79fb\u7b26\u53f7\uff08\u9ed8\u8ba4\u7981\u7528\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"csv.null-literal"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5c06null\u5b57\u7b26\u4e32\u4f5c\u4e3aNULL\u8d4b\u7ed9\u5bf9\u5e94\u5b57\u6bb5\u503c\uff08\u9ed8\u8ba4\u7981\u7528\uff09\u3002")))),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u5339\u914d"},"\u6570\u636e\u7c7b\u578b\u5339\u914d"),(0,n.kt)("p",null,"\u76ee\u524d\uff0cCSV schema\u603b\u662f\u6d3e\u751f\u4e8e\u8868schema\u3002\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u76f4\u63a5\u663e\u5f0f\u5b9a\u4e49CSV schema\u3002"),(0,n.kt)("p",null,"Flink CSV\u683c\u5f0f\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"jackson databind API"),"\u89e3\u6790\u548c\u751f\u6210CSV\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("p",null,"Flink\u7c7b\u578b\u5230CSV\u7c7b\u578b\u7684\u7c7b\u578b\u6620\u5c04\u5982\u4e0b\u8868\u6240\u793a\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Flink SQL type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"CSV type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHAR / VARCHAR / STRING"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BINARY / VARBINARY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date \u683c\u5f0f\u7684\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"time \u683c\u5f0f\u7684\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date-time \u683c\u5f0f\u7684\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INTERVAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ARRAY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ROW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object")))))}k.isMDXComponent=!0}}]);