"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[7440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),f=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=k(e,["components","mdxType","originalType","parentName"]),u=f(a),m=r,c=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:r,o[1]=k;for(var f=2;f<l;f++)o[f]=a[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>k,toc:()=>f});var n=a(7462),r=(a(7294),a(3905));const l={id:"5-confluent-avro",title:"Confluent Avro",sidebar_position:5},o=void 0,k={unversionedId:"flinksql/format/5-confluent-avro",id:"flinksql/format/5-confluent-avro",title:"Confluent Avro",description:"\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/5-confluent-avro.md",sourceDirName:"flinksql/format",slug:"/flinksql/format/5-confluent-avro",permalink:"/zh-CN/docs/flinksql/format/5-confluent-avro",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/format/5-confluent-avro.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5-confluent-avro",title:"Confluent Avro",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AVRO",permalink:"/zh-CN/docs/flinksql/format/4-avro"},next:{title:"Debezium",permalink:"/zh-CN/docs/flinksql/format/6-debezium"}},i={},f=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528Avro-Confluent\u683c\u5f0f",id:"\u4f7f\u7528avro-confluent\u683c\u5f0f",level:2},{value:"Format\u53c2\u6570",id:"format\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u5339\u914d",id:"\u6570\u636e\u7c7b\u578b\u5339\u914d",level:2}],p={toc:f};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("p",null,"\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: Serialization Schema \u5e8f\u5217\u5316\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"Format: Deserialization Schema \u53cd\u5e8f\u5217\u5316\u683c\u5f0f")),(0,r.kt)("p",null,"Avro Schema Registry(avro-confluent)\u683c\u5f0f\u5141\u8bb8\u4f60\u8bfb\u53d6\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroSerializer"),"\u5e8f\u5217\u5316\u7684\u8bb0\u5f55\uff0c\n\u5e76\u5199\u5165\u53ef\u4ee5\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer"),"\u53cd\u5e8f\u5217\u5316\u8bfb\u53d6\u7684\u8bb0\u5f55\u3002"),(0,r.kt)("p",null,"\u5f53\u8bfb\u53d6(\u53cd\u5e8f\u5217\u5316)\u8fd9\u79cd\u683c\u5f0f\u7684\u6570\u636e\u65f6\uff0c\u6839\u636e\u6570\u636e\u4e2d\u7684schema\u7248\u672cid\u4ece\u914d\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Confluent schema Registry"),"\u4e2d\u83b7\u53d6Avro\u5199\u5165schema\uff0c\u540c\u65f6\u4ece\u8868schema\u63a8\u65ad\u8bfb\u53d6schema\u3002"),(0,r.kt)("p",null,"\u5f53\u7528\u8fd9\u79cd\u683c\u5f0f\u5199\u5165(\u5e8f\u5217\u5316)\u4e00\u6761\u6570\u636e\u65f6\uff0cAvro schema\u5c06\u4ece\u8868schema\u63a8\u65ad\u51fa\u7528\u4e8e\u68c0\u7d22\u7684schema id\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flink-1.13.x\uff1a\u4e3b\u8981\u901a\u8fc7",(0,r.kt)("strong",{parentName:"li"},"avro-confluent.schema-registry.subject"),"\u914d\u7f6e\u7684\u4e3b\u9898\u540d\u8fdb\u884c\u67e5\u627e\u3002"),(0,r.kt)("li",{parentName:"ul"},"flink-1.14.x\uff1a\u4e3b\u8981\u901a\u8fc7",(0,r.kt)("strong",{parentName:"li"},"avro-confluent.subject"),"\u914d\u7f6e\u7684\u4e3b\u9898\u540d\u8fdb\u884c\u67e5\u627e\u3002")),(0,r.kt)("p",null,"Avro Schema Registry\u683c\u5f0f\u53ea\u80fd\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Kafka SQL"),"\u8fde\u63a5\u5668\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Upsert Kafka SQL"),"\u8fde\u63a5\u5668\u7ed3\u5408\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528Avro Schema Registry\u683c\u5f0f\uff0c\u4ee5\u4e0b\u4f9d\u8d56\u9879\u5bf9\u4e8e\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u5e26\u6709SQL JAR\u5305\u7684SQL Client\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-avro-confluent-registry</artifactId>\n    <version>1.13.0</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u4f7f\u7528\u7684 flink \u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528avro-confluent\u683c\u5f0f"},"\u4f7f\u7528Avro-Confluent\u683c\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u539f\u59cbUTF-8\u5b57\u7b26\u4e32\u4f5c\u4e3aKafka\u952e\u4ee5\u53ca\u5728Schema Registry\u4e2d\u6ce8\u518c\u7684Avro\u8bb0\u5f55\u4f5c\u4e3aKafka\u503c\u6ce8\u518c\u7684\u8868\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.13.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- -- \u4e00\u4e2a\u6620\u5c04\u5230kafka\u539f\u751fUTF-8\u5b57\u7b26\u4e32key\u7684\u5b57\u6bb5\n    the_kafka_key STRING,\n    -- \u4e00\u4e9bAvro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_events_example1',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- UTF-8\u5b57\u7b26\u4e32\u4f5c\u4e3akafka key\uff0c\u4f7f\u7528\u201cthe_kafka_key\u201d\u8868\u5b57\u6bb5\n    'key.format' = 'raw',\n    'key.fields' = 'the_kafka_key',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.schema-registry.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY'\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.14.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- -- \u4e00\u4e2a\u6620\u5c04\u5230kafka\u539f\u751fUTF-8\u5b57\u7b26\u4e32key\u7684\u5b57\u6bb5\n    the_kafka_key STRING,\n    -- \u4e00\u4e9bAvro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_events_example1',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- UTF-8\u5b57\u7b26\u4e32\u4f5c\u4e3akafka key\uff0c\u4f7f\u7528\u201cthe_kafka_key\u201d\u8868\u5b57\u6bb5\n    'key.format' = 'raw',\n    'key.fields' = 'the_kafka_key',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY'\n)\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5982\u4e0b\u65b9\u5f0f\u5c06\u6570\u636e\u5199\u5165kafka\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO user_created\nSELECT\n    -- \u8d4b\u503cuser id\u5b57\u6bb5\u503c\u4f5c\u4e3akafka key\n    id as the_kafka_key,\n    -- \u6240\u6709\u5b57\u6bb5\u503c\n    id, name, email\nFROM some_table\n")),(0,r.kt)("p",null,"Kafka\u952e\u548c\u503c\u90fd\u5728Schema Registry\u4e2d\u6ce8\u518c\u4e3aAvro record\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.13.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- \u4e00\u4e2a\u6620\u5c04\u5230\u201cid\u201d avro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka key\n    kafka_key_id STRING,\n    -- \u4e00\u4e9b\u6620\u5c04\u5230avro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_events_example2',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- \u6ce8\u610f:\u7531\u4e8e\u54c8\u5e0c\u5206\u533a\u7684\u5b58\u5728\uff0cKafka key\u4e0a\u4e0b\u6587\u4e2d\u7684schema\u6f14\u5316\u51e0\u4e4e\u4e0d\u53ef\u80fd\u5411\u540e\u6216\u5411\u524d\u517c\u5bb9\u3002\n    'key.format' = 'avro-confluent',\n    'key.avro-confluent.schema-registry.url' = 'http://localhost:8082',\n    -- \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5e0c\u671bKafka key\u548cvalue\u7684Avro\u7c7b\u578b\u90fd\u5305\u542b\u5b57\u6bb5'id' => \u5728\u4e0eKafka key\u5b57\u6bb5\u76f8\u5173\u8054\u7684\u8868\u5b57\u6bb5\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u51b2\u7a81\n    'key.fields-prefix' = 'kafka_key_',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.schema-registry.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY',\n    -- \u4eceflink 1.13\u7248\u672c\u5f00\u59cb\uff0csubject\u6709\u9ed8\u8ba4\u503c\uff0c\u5c3d\u7ba1\u53ef\u4ee5\u88ab\u8986\u76d6\n    'key.avro-confluent.schema-registry.subject' = 'user_events_example2-key2',\n    'value.avro-confluent.schema-registry.subject' = 'user_events_example2-value2'\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.14.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- \u4e00\u4e2a\u6620\u5c04\u5230\u201cid\u201d avro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka key\n    kafka_key_id STRING,\n    -- \u4e00\u4e9b\u6620\u5c04\u5230avro\u5c5e\u6027\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic' = 'user_events_example2',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- \u6ce8\u610f:\u7531\u4e8e\u54c8\u5e0c\u5206\u533a\u7684\u5b58\u5728\uff0cKafka key\u4e0a\u4e0b\u6587\u4e2d\u7684schema\u6f14\u5316\u51e0\u4e4e\u4e0d\u53ef\u80fd\u5411\u540e\u6216\u5411\u524d\u517c\u5bb9\u3002\n    'key.format' = 'avro-confluent',\n    'key.avro-confluent.url' = 'http://localhost:8082',\n    -- \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5e0c\u671bKafka key\u548cvalue\u7684Avro\u7c7b\u578b\u90fd\u5305\u542b\u5b57\u6bb5'id' => \u5728\u4e0eKafka key\u5b57\u6bb5\u76f8\u5173\u8054\u7684\u8868\u5b57\u6bb5\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u51b2\u7a81\n    'key.fields-prefix' = 'kafka_key_',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY',\n    -- \u4eceflink 1.13\u7248\u672c\u5f00\u59cb\uff0csubject\u6709\u9ed8\u8ba4\u503c\uff0c\u5c3d\u7ba1\u53ef\u4ee5\u88ab\u8986\u76d6\n    'key.avro-confluent.subject' = 'user_events_example2-key2',\n    'value.avro-confluent.subject' = 'user_events_example2-value2'\n)\n")),(0,r.kt)("p",null,"\u4f7f\u7528upsert-kafka\u8fde\u63a5\u5668\u7684\u8868\u793a\u4f8b\uff0c\u5176\u4e2dKafka value\u5728Schema Registry\u4e2d\u6ce8\u518c\u4e3aAvro\u8bb0\u5f55\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.13.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- \u4e00\u4e2a\u6620\u5c04\u5230kafka\u539f\u751fUTF-8\u5b57\u7b26\u4e32key\u7684\u5b57\u6bb5\n    kafka_key_id STRING,\n    -- \u4e00\u4e9b\u6620\u5c04\u5230avro\u5c5e\u6027\u7684\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING,\n    -- upsert-kafka\u8fde\u63a5\u5668\u8981\u6c42\u6709\u4e00\u4e2a\u4e3b\u952e\u6765\u5b9a\u4e49upsert\u884c\u4e3a\n    PRIMARY KEY (kafka_key_id) NOT ENFORCED\n\n) WITH (\n    'connector' = 'upsert-kafka',\n    'topic' = 'user_events_example3',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- UTF-8\u5b57\u7b26\u4e32\u4f5c\u4e3akafka key\n    -- \u5728\u8fd9\u4e2a\u6848\u4f8b\u4e2d\u4e0d\u6307\u5b9a'key.fields'\uff0c\u56e0\u4e3a\u5b83\u7531\u8868\u7684\u4e3b\u952e\u6307\u5b9a\n    'key.format' = 'raw',\n    -- In this example, we want the Avro types of both the Kafka key and value to contain the field 'id'\n    -- \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5e0c\u671bKafka key\u548cvalue\u7684Avro\u7c7b\u578b\u90fd\u5305\u542b\u5b57\u6bb5'id' => \u5728\u4e0eKafka key\u5b57\u6bb5\u76f8\u5173\u8054\u7684\u8868\u5b57\u6bb5\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u51b2\u7a81\n    'key.fields-prefix' = 'kafka_key_',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.schema-registry.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY'\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flink-1.14.x\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_created (\n    -- \u4e00\u4e2a\u6620\u5c04\u5230kafka\u539f\u751fUTF-8\u5b57\u7b26\u4e32key\u7684\u5b57\u6bb5\n    kafka_key_id STRING,\n    -- \u4e00\u4e9b\u6620\u5c04\u5230avro\u5c5e\u6027\u7684\u5b57\u6bb5\u4f5c\u4e3akafka value\n    id STRING,\n    name STRING,\n    email STRING,\n    -- upsert-kafka\u8fde\u63a5\u5668\u8981\u6c42\u6709\u4e00\u4e2a\u4e3b\u952e\u6765\u5b9a\u4e49upsert\u884c\u4e3a\n    PRIMARY KEY (kafka_key_id) NOT ENFORCED\n\n) WITH (\n    'connector' = 'upsert-kafka',\n    'topic' = 'user_events_example3',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    -- UTF-8\u5b57\u7b26\u4e32\u4f5c\u4e3akafka key\n    -- \u5728\u8fd9\u4e2a\u6848\u4f8b\u4e2d\u4e0d\u6307\u5b9a'key.fields'\uff0c\u56e0\u4e3a\u5b83\u7531\u8868\u7684\u4e3b\u952e\u6307\u5b9a\n    'key.format' = 'raw',\n    -- In this example, we want the Avro types of both the Kafka key and value to contain the field 'id'\n    -- \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5e0c\u671bKafka key\u548cvalue\u7684Avro\u7c7b\u578b\u90fd\u5305\u542b\u5b57\u6bb5'id' => \u5728\u4e0eKafka key\u5b57\u6bb5\u76f8\u5173\u8054\u7684\u8868\u5b57\u6bb5\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u51b2\u7a81\n    'key.fields-prefix' = 'kafka_key_',\n    'value.format' = 'avro-confluent',\n    'value.avro-confluent.url' = 'http://localhost:8082',\n    'value.fields-include' = 'EXCEPT_KEY'\n)\n")),(0,r.kt)("h2",{id:"format\u53c2\u6570"},"Format\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u88ab\u8f6c\u53d1",(0,r.kt)("br",null),"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"format"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u54ea\u79cd\u6a21\u5f0f\uff0c\u8fd9\u513f\u5e94\u8be5\u662f ",(0,r.kt)("strong",{parentName:"td"},"avro-confluent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.basic-auth.credentials-source"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema\u6ce8\u518c\u7684\u57fa\u7840\u8ba4\u8bc1\u8bc1\u4e66\u8d44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.basic-auth.user-info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema\u6ce8\u518c\u7684\u57fa\u7840\u8ba4\u8bc1\u7528\u6237\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.bearer-auth.credentials-source"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema\u6ce8\u518c\u7684\u6301\u6709\u8005\u8ba4\u8bc1\u8bc1\u4e66\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.bearer-auth.token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema\u6ce8\u518c\u7684\u6301\u6709\u8005\u8ba4\u8bc1\u4ee4\u724c token \u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u4ece flink-1.14.x \u5f00\u59cb\u652f\u6301"),(0,r.kt)("br",null),"avro-confluent.properties"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(node)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Map"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u53d1\u5230\u4e0b\u9762 schema \u6ce8\u518c\u7684\u5c5e\u6027 map \u8868\uff0c\u8fd9\u5bf9\u4e8e\u6ca1\u6709\u901a\u8fc7Flink\u914d\u7f6e\u9009\u9879\u6b63\u5f0f\u516c\u5f00\u7684\u9009\u9879\u5f88\u6709\u7528\uff0c\u4f46\u662f Flink \u9009\u9879\u62e5\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.ssl.keystore.location"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL\u79d8\u94a5\u5e93\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.ssl.keystore.password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL\u79d8\u94a5\u5e93\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.ssl.truststore.location"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL truststore\u7684\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avro-confluent.ssl.truststore.password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL truststore\u7684\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1aavro-confluent.schema-registry.subject",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.14.x"),"\uff1aavro-confluent.subject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Confluent\u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3\u4e3b\u9898\uff0c\u5728\u8be5\u4e3b\u9898\u4e0b\u6ce8\u518c\u6b64\u683c\u5f0f\u5728\u5e8f\u5217\u5316\u671f\u95f4\u4f7f\u7528\u7684schema\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"kafka")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"upsert-kafka")," \u8fde\u63a5\u5668\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"<topic_name>-value")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"<topic_name>-key")," \u4f5c\u4e3a\u9ed8\u8ba4\u4e3b\u9898\u540d\u3002\u4f46\u5bf9\u4e8e\u5176\u4ed6\u8fde\u63a5\u5668(\u4f8b\u5982: ",(0,r.kt)("inlineCode",{parentName:"td"},"filesystem")," )\uff0c\u5f53\u7528\u4f5c\u63a5\u6536\u5668\u65f6\uff0csubject\u9009\u9879\u662f\u5fc5\u9700\u7684\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1aavro-confluent.schema-registry.url",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.14.x"),"\uff1aavro-confluent.url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u83b7\u53d6/\u6ce8\u518cConfluent Schema Registry schema\u7684URL")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u5339\u914d"},"\u6570\u636e\u7c7b\u578b\u5339\u914d"),(0,r.kt)("p",null,"\u76ee\u524d\uff0cApache Flink\u603b\u662f\u4f7f\u7528\u8868schema\u5728\u53cd\u5e8f\u5217\u5316\u671f\u95f4\u6d3e\u751fAvro\u8bfb\u53d6schema\uff0c\u5728\u5e8f\u5217\u5316\u671f\u95f4\u6d3e\u751fAvro\u5199\u5165schema\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u76f4\u63a5\u663e\u5f0f\u5b9a\u4e49Avro\u6a21\u5f0f\u3002\nAvro\u548cFlink\u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u7684\u6620\u5c04\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/connectors/table/formats/avro/#data-type-mapping"},"Apache Avro Format"),"\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u5217\u51fa\u7684\u7c7b\u578b\u5916\uff0cFlink\u8fd8\u652f\u6301\u8bfb\u5199\u53ef\u7a7a\u7c7b\u578b\u3002Flink\u5c06\u53ef\u4e3a\u7a7a\u7684\u7c7b\u578b\u6620\u5c04\u5230Avro\u8054\u5408(\u67d0\u503c\uff0cnull)\uff0c\u5176\u4e2d\u67d0\u503c\u662f\u4eceFlink\u7c7b\u578b\u8f6c\u6362\u800c\u6765\u7684Avro\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u6709\u5173Avro\u7c7b\u578b\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"Avro\u89c4\u8303"),"\u3002"))}s.isMDXComponent=!0}}]);