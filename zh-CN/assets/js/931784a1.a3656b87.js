"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[8645],{3905:(e,n,l)=>{l.d(n,{Zo:()=>p,kt:()=>m});var t=l(7294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function s(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),l=n;return e&&(l="function"==typeof e?e(n):s(s({},n),e)),l},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(l),m=a,d=c["".concat(i,".").concat(m)]||c[m]||k[m]||r;return l?t.createElement(d,s(s({ref:n},p),{},{components:l})):t.createElement(d,s({ref:n},p))}));function m(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,s=new Array(r);s[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=l[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},4258:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=l(7462),a=(l(7294),l(3905));const r={id:"14-show",title:"show",sidebar_position:14},s=void 0,o={unversionedId:"flinksql/syntax/14-show",id:"flinksql/syntax/14-show",title:"show",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/14-show.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/14-show",permalink:"/zh-CN/docs/flinksql/syntax/14-show",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/14-show.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"14-show",title:"show",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"unload",permalink:"/zh-CN/docs/flinksql/syntax/13-unload"},next:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/flinksql/udf/1-introduce"}},i={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"SHOW CATALOGS",id:"show-catalogs",level:2},{value:"SHOW CURRENT CATALOG",id:"show-current-catalog",level:2},{value:"SHOW DATABASES",id:"show-databases",level:2},{value:"SHOW CURRENT DATABASE",id:"show-current-database",level:2},{value:"SHOW TABLES",id:"show-tables",level:2},{value:"flink-1.13.x",id:"flink-113x",level:3},{value:"flink-1.15.x",id:"flink-115x",level:3},{value:"SHOW TABLES\u6848\u4f8b",id:"show-tables\u6848\u4f8b",level:4},{value:"SHOW CREATE TABLE",id:"show-create-table",level:2},{value:"SHOW COLUMNS",id:"show-columns",level:2},{value:"SHOW COLUMNS\u6848\u4f8b",id:"show-columns\u6848\u4f8b",level:3},{value:"SHOW VIEWS",id:"show-views",level:2},{value:"SHOW CREATE VIEW",id:"show-create-view",level:2},{value:"SHOW FUNCTIONS",id:"show-functions",level:2},{value:"SHOW MODULES",id:"show-modules",level:2}],p={toc:u};function k(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHOW"),"\u8bed\u53e5\u7528\u4e8e\u5217\u51fa\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"catalog"),"\uff0c\u6216\u5728\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"catalog"),"\uff0c\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93\u4e2d\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"\u8868"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b57\u6bb5"),"\uff0c\u6216\u5217\u51fa\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"catalog"),"\u548c\u5f53\u524d\u6570\u636e\u5e93\uff0c\u6216\u663e\u793a\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"catalog"),"\u548c\u6570\u636e\u5e93\uff0c\n\u6216\u5217\u51fa\u5f53\u524dcatalog\u548c\u5f53\u524d\u7684\u6570\u636e\u5e93\u7684\u6240\u6709\u51fd\u6570\u5305\u62ec\u7cfb\u7edf\u51fd\u6570\u548c\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u51fd\u6570\u3002\u6216\u53ea\u5217\u51fa\u5f53\u524dcatalog\u548c\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u51fd\u6570\uff0c\u6216\u5217\u51fa\u542f\u7528\u7684\u6a21\u5757\u540d\uff0c\u6216\u5217\u51fa\u5f53\u524d\u4f1a\u8bdd\u4e2d\u4e3a\u542f\u7528\u72b6\u6001\u7684\u6240\u6709\u5df2\u52a0\u8f7d\u6a21\u5757\u3002"),(0,a.kt)("p",null,"SHOW CREATE \u8bed\u53e5\u88ab\u7528\u4e8e\u6253\u5370 DDL \u8bed\u53e5\uff0c\u76ee\u524d\uff0c SHOW CREATE \u8bed\u53e5\u503c\u80fd\u7528\u4e8e\u6253\u5370\u7ed9\u5b9a\u8868\u6216\u8bd5\u56fe\u7684 DDL \u8bed\u53e5\u3002 Flink SQL\u76ee\u524d\u652f\u6301\u4ee5\u4e0bSHOW\u8bed\u53e5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SHOW CATALOGS"),(0,a.kt)("li",{parentName:"ul"},"SHOW CURRENT CATALOG"),(0,a.kt)("li",{parentName:"ul"},"SHOW DATABASES"),(0,a.kt)("li",{parentName:"ul"},"SHOW CURRENT DATABASE"),(0,a.kt)("li",{parentName:"ul"},"SHOW TABLES"),(0,a.kt)("li",{parentName:"ul"},"SHOW CREATE TABLE\uff08\u4ece1.14.x\u5f00\u59cb\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ul"},"SHOW COLUMNS\uff08\u4ece1.15.x\u5f00\u59cb\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ul"},"SHOW VIEWS"),(0,a.kt)("li",{parentName:"ul"},"SHOW CREATE VIEW\uff08\u4ece1.15.x\u5f00\u59cb\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ul"},"SHOW FUNCTIONS"),(0,a.kt)("li",{parentName:"ul"},"SHOW MODULES")),(0,a.kt)("h2",{id:"show-catalogs"},"SHOW CATALOGS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS\n")),(0,a.kt)("p",null,"\u663e\u793a\u6240\u6709catalog\u3002"),(0,a.kt)("h2",{id:"show-current-catalog"},"SHOW CURRENT CATALOG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CURRENT CATALOG\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524dcatalog\u3002"),(0,a.kt)("h2",{id:"show-databases"},"SHOW DATABASES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524dcatalog\u91cc\u7684\u6240\u6709\u6570\u636e\u5e93\u3002"),(0,a.kt)("h2",{id:"show-current-database"},"SHOW CURRENT DATABASE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CURRENT DATABASE\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524d\u6570\u636e\u5e93\u3002"),(0,a.kt)("h2",{id:"show-tables"},"SHOW TABLES"),(0,a.kt)("h3",{id:"flink-113x"},"flink-1.13.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524dcatalog\u548c\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u3002"),(0,a.kt)("h3",{id:"flink-115x"},"flink-1.15.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES [ ( FROM | IN ) [catalog_name.]database_name ] [ [NOT] LIKE <sql_like_pattern> ]\n")),(0,a.kt)("p",null,"\u5c55\u793a\u53ef\u9009\u7684\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u5e93\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u6570\u636e\u5e93\u7684\u8868\u3002\u53e6\u5916\uff0c\u8be5\u8bed\u53e5\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u53ef\u9009\u7684\u5339\u914d\u8868\u8fbe\u5f0f\u5bf9\u8868\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,a.kt)("p",null,"LIKE\uff1a\u5c55\u793a\u901a\u8fc7 like \u5173\u952e\u5b57\u6307\u5b9a\u540d\u79f0\u7684\u8868\uff0clike \u8bed\u6cd5\u548c <sql_like_pahhern> \u7c7b\u4f3c\u3002LIKE \u5173\u952e\u5b57\u7684\u8bed\u6cd5\u548c MySQL \u65b9\u8a00\u4e00\u6837\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%")," \u5339\u914d\u4efb\u610f\u4e2a\u6570\u7684\u5b57\u7b26\uff0c\u5305\u62ec\u96f6\u4e2a\u5b57\u7b26\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"\\%")," \u5339\u914d\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"%")," \u7b26\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_")," \u53ea\u5339\u914d\u4e00\u4e2a\u5b57\u7b26\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"\\_")," \u5339\u914d\u4e00\u4e2a _ \u7b26\u53f7\u3002")),(0,a.kt)("h4",{id:"show-tables\u6848\u4f8b"},"SHOW TABLES\u6848\u4f8b"),(0,a.kt)("p",null,"\u4ece1.15.x\u5f00\u59cb\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u540d\u4e3a catalog1 \u7684 catalog \u4e0b\u7684 db1 \u6570\u636e\u5e93\u5e76\u4e14\u5305\u542b\u4ee5\u4e0b\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"person"),(0,a.kt)("li",{parentName:"ul"},"dim")),(0,a.kt)("p",null,"\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u6570\u636e\u5e93\u5305\u542b\u4ee5\u4e0b\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fights"),(0,a.kt)("li",{parentName:"ul"},"orders")),(0,a.kt)("p",null,"\u5c55\u793a\u7ed9\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u6240\u6709\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show tables from db1;\n-- show tables from catalog1.db1;\n-- show tables in db1;\n-- show tables in catalog1.db1;\n+------------+\n| table name |\n+------------+\n|        dim |\n|     person |\n+------------+\n2 rows in set\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u7ed9\u5b9a\u7684 sql \u5339\u914d\uff0c\u5c55\u793a\u7ed9\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show tables from db1 like '%n';\n-- show tables from catalog1.db1 like '%n';\n-- show tables in db1 like '%n';\n-- show tables in catalog1.db1 like '%n';\n+------------+\n| table name |\n+------------+\n| person |\n+------------+\n1 row in set\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u7ed9\u5b9a\u7684 sql \u5339\u914d\uff0c\u5c55\u793a\u7ed9\u5b9a\u6570\u636e\u5e93\u4e0b\u4e0d\u7b26\u5408 sql \u5339\u914d\u7684\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show tables from db1 not like '%n';\n-- show tables from catalog1.db1 not like '%n';\n-- show tables in db1 not like '%n';\n-- show tables in catalog1.db1 not like '%n';\n+------------+\n| table name |\n+------------+\n| dim |\n+------------+\n1 row in set\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u7684\u6240\u6709\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show tables;\n+------------+\n| table name |\n+------------+\n| items |\n| orders |\n+------------+\n2 rows in set\n")),(0,a.kt)("h2",{id:"show-create-table"},"SHOW CREATE TABLE"),(0,a.kt)("p",null,"\u4ece1.14.x\u5f00\u59cb\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE\n")),(0,a.kt)("p",null,"\u5c55\u793a\u6307\u5b9a\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff1a\u5f53\u524d\u7684 SHOW CREATE TABLE \u8bed\u53e5\u53ea\u652f\u6301\u5c55\u793a\u901a\u8fc7 flink SQL DDL \u521b\u5efa\u7684\u8868\u3002"),(0,a.kt)("h2",{id:"show-columns"},"SHOW COLUMNS"),(0,a.kt)("p",null,"\u4ece1.15.x\u5f00\u59cb\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW COLUMNS ( FROM | IN ) [[catalog_name.]database.]<table_name> [ [NOT] LIKE <sql_like_pattern>]\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u7ed9\u5b9a\u7684\u8868\u60c5\u548c\u53ef\u9009\u7684 like \u8bed\u53e5\u5c55\u793a\u8868\u7684\u5b57\u6bb5\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"LIKE\uff1a\u5c55\u793a\u901a\u8fc7 like \u5173\u952e\u5b57\u6307\u5b9a\u540d\u79f0\u7684\u8868\u7684\u5b57\u6bb5\u4fe1\u606f\uff0clike \u8bed\u6cd5\u548c <sql_like_pahhern> \u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"LIKE \u5173\u952e\u5b57\u7684\u8bed\u6cd5\u548c MySQL \u65b9\u8a00\u4e00\u6837\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%")," \u5339\u914d\u4efb\u610f\u4e2a\u6570\u7684\u5b57\u7b26\uff0c\u5305\u62ec\u96f6\u4e2a\u5b57\u7b26\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"\\%")," \u5339\u914d\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"%")," \u7b26\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_")," \u53ea\u5339\u914d\u4e00\u4e2a\u5b57\u7b26\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"\\_")," \u5339\u914d\u4e00\u4e2a _ \u7b26\u53f7\u3002")),(0,a.kt)("h3",{id:"show-columns\u6848\u4f8b"},"SHOW COLUMNS\u6848\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece1.15.x\u5f00\u59cb\u652f\u6301\u3002")),(0,a.kt)("p",null,"\u5047\u8bbe\u540d\u4e3a catalog1 \u7684 catalog \u4e0b\u7684 database1 \u6570\u636e\u5e93\u4e0b\u7684 orders \u8868\u6709\u5982\u4e0b\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n|    name |                        type |  null |       key |        extras |                  watermark |\n+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n|    user |                      BIGINT | false | PRI(user) |               |                            |\n| product |                 VARCHAR(32) |  true |           |               |                            |\n|  amount |                         INT |  true |           |               |                            |\n|      ts |      TIMESTAMP(3) *ROWTIME* |  true |           |               | `ts` - INTERVAL '1' SECOND |\n|   ptime | TIMESTAMP_LTZ(3) *PROCTIME* | false |           | AS PROCTIME() |                            |\n+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n")),(0,a.kt)("p",null,"\u5c55\u793a\u7ed9\u5b9a\u8868\u7684\u6240\u6709\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show columns from orders;\n-- show columns from database1.orders;\n-- show columns from catalog1.database1.orders;\n-- show columns in orders;\n-- show columns in database1.orders;\n-- show columns in catalog1.database1.orders;\n+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n|    name |                        type |  null |       key |        extras |                  watermark |\n+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n|    user |                      BIGINT | false | PRI(user) |               |                            |\n| product |                 VARCHAR(32) |  true |           |               |                            |\n|  amount |                         INT |  true |           |               |                            |\n|      ts |      TIMESTAMP(3) *ROWTIME* |  true |           |               | `ts` - INTERVAL '1' SECOND |\n|   ptime | TIMESTAMP_LTZ(3) *PROCTIME* | false |           | AS PROCTIME() |                            |\n+---------+-----------------------------+-------+-----------+---------------+----------------------------+\n5 rows in set\n")),(0,a.kt)("p",null,"\u5c55\u793a\u8868\u4e2d\u7b26\u5408\u7ed9\u5b9a sql \u5339\u914d\u7684\u5b57\u6bb5\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show columns from orders like '%r';\n-- show columns from database1.orders like '%r';\n-- show columns from catalog1.database1.orders like '%r';\n-- show columns in orders like '%r';\n-- show columns in database1.orders like '%r';\n-- show columns in catalog1.database1.orders like '%r';\n+------+--------+-------+-----------+--------+-----------+\n| name |   type |  null |       key | extras | watermark |\n+------+--------+-------+-----------+--------+-----------+\n| user | BIGINT | false | PRI(user) |        |           |\n+------+--------+-------+-----------+--------+-----------+\n1 row in set\n")),(0,a.kt)("p",null,"\u5c55\u793a\u8868\u4e2d\u4e0d\u7b26\u5408\u7ed9\u5b9a sql \u5339\u914d\u7684\u5b57\u6bb5\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show columns from orders not like '%_r';\n-- show columns from database1.orders not like '%_r';\n-- show columns from catalog1.database1.orders not like '%_r';\n-- show columns in orders not like '%_r';\n-- show columns in database1.orders not like '%_r';\n-- show columns in catalog1.database1.orders not like '%_r';\n+---------+-----------------------------+-------+-----+---------------+----------------------------+\n|    name |                        type |  null | key |        extras |                  watermark |\n+---------+-----------------------------+-------+-----+---------------+----------------------------+\n| product |                 VARCHAR(32) |  true |     |               |                            |\n|  amount |                         INT |  true |     |               |                            |\n|      ts |      TIMESTAMP(3) *ROWTIME* |  true |     |               | `ts` - INTERVAL '1' SECOND |\n|   ptime | TIMESTAMP_LTZ(3) *PROCTIME* | false |     | AS PROCTIME() |                            |\n+---------+-----------------------------+-------+-----+---------------+----------------------------+\n4 rows in set\n")),(0,a.kt)("h2",{id:"show-views"},"SHOW VIEWS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW VIEWS\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524dcatalog\u548c\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u89c6\u56fe\u3002"),(0,a.kt)("h2",{id:"show-create-view"},"SHOW CREATE VIEW"),(0,a.kt)("p",null,"\u4ece1.15.x\u5f00\u59cb\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE VIEW [catalog_name.][db_name.]view_name\n")),(0,a.kt)("p",null,"\u5c55\u793a\u7ed9\u5b9a\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5\u3002"),(0,a.kt)("h2",{id:"show-functions"},"SHOW FUNCTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [USER] FUNCTIONS\n")),(0,a.kt)("p",null,"\u5c55\u793a\u5f53\u524dcatalog\u548c\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u7cfb\u7edf\u548c\u81ea\u5b9a\u4e49\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"USER")),(0,a.kt)("p",null,"\u503c\u5c55\u793a\u5f53\u524dcatalog\u548c\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"show-modules"},"SHOW MODULES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] MODULES\n")),(0,a.kt)("p",null,"\u6309\u89e3\u6790\u987a\u5e8f\u663e\u793a\u6240\u6709\u542f\u7528\u7684\u6a21\u5757\u540d\u79f0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FULL")),(0,a.kt)("p",null,"\u6309\u7167\u987a\u5e8f\u663e\u793a\u6240\u6709\u542f\u7528\u72b6\u6001\u7684\u5df2\u52a0\u8f7d\u6a21\u5757\u3002"))}k.isMDXComponent=!0}}]);