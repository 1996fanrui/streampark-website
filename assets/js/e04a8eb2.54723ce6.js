"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[8766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8949:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(6010),s=n(2389),o=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:h,groupId:m,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:x}=(0,l.U)(),[S,w]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==S&&g.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==S&&(C(t),w(a),null!=m&&x(m,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:R,onClick:R},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),s=n(8949);const o={id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:5},l=void 0,c={unversionedId:"connector/Elasticsearch-Connector",id:"connector/Elasticsearch-Connector",title:"Elasticsearch Connector",description:"Elasticsearch is a distributed, RESTful style search and data analysis",source:"@site/docs/connector/5-es.md",sourceDirName:"connector",slug:"/connector/Elasticsearch-Connector",permalink:"/docs/connector/Elasticsearch-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/5-es.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Apache Doris Connector",permalink:"/docs/connector/Doris-Connector"},next:{title:"Apache HBase Connector",permalink:"/docs/connector/Hbase-Connector"}},u={},d=[{value:"Dependency of elastic writing",id:"dependency-of-elastic-writing",level:2},{value:"Write data to Elasticsearch based on the official",id:"write-data-to-elasticsearch-based-on-the-official",level:2},{value:"Using StreamPark writes to Elasticsearch",id:"using-streampark-writes-to-elasticsearch",level:2},{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",level:3},{value:"2. \u5199\u5165Elasticsearch",id:"2-\u5199\u5165elasticsearch",level:3},{value:"Other configuration",id:"other-configuration",level:2},{value:"deal with failed Elasticsearch request",id:"deal-with-failed-elasticsearch-request",level:3},{value:"Configure the internal batch processor",id:"configure-the-internal-batch-processor",level:3},{value:"StreamPark configuration",id:"streampark-configuration",level:3}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/elasticsearch/"},"Elasticsearch")," is a distributed, RESTful style search and data analysis\nengine.\n",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/"},"Flink officially")," provides a connector\nfor Elasticsearch, which is used to write data to Elasticsearch, which can provide ",(0,r.kt)("strong",{parentName:"p"}," at least once")," Semantics."),(0,r.kt)("p",null,"ElasticsearchSink uses TransportClient (before 6.x) or RestHighLevelClient (starting with 6.x) to communicate with the\nElasticsearch cluster.\n",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," further encapsulates Flink-connector-elasticsearch6, shields development details, and simplifies write\noperations for Elasticsearch6 and above."),(0,r.kt)("admonition",{title:"hint",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Because there are conflicts between different versions of Flink Connector Elasticsearch, Streamx temporarily only\nsupports write operations of Elasticsearch6 and above. If you wants to using Elasticsearch5, you need to exclude the\nflink-connector-elasticsearch6 dependency and introduce the flink-connector-elasticsearch5 dependency to create\norg.apache.flink.streaming.connectors.elasticsearch5.ElasticsearchSink instance writes data.")),(0,r.kt)("h2",{id:"dependency-of-elastic-writing"},"Dependency of elastic writing"),(0,r.kt)("p",null,"Different Elasticsearch versions rely on the Flink Connector Elasticsearch is not universal, the following information\ncomes from the ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/datastream/elasticsearch/"},"flink-docs-release-1.14 document"),":"),(0,r.kt)("p",null,"Elasticsearch 5.x Maven dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("p",null,"Elasticsearch 6.x Maven dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch6_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("p",null,"Elasticsearch 7.x ans above Maven dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch7_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"write-data-to-elasticsearch-based-on-the-official"},"Write data to Elasticsearch based on the official"),(0,r.kt)("p",null,"The following code is taken from the official documentation",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"Elasticsearch based on the official")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java, Elasticsearch 6.x ans above",java:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.flink.api.common.functions.RuntimeContext;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction;\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer;\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink;\n\nimport org.apache.http.HttpHost;\nimport org.elasticsearch.action.index.IndexRequest;\nimport org.elasticsearch.client.Requests;\n\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nDataStream<String> input=...;\n\n        List<HttpHost> httpHosts=new ArrayList<>();\n        httpHosts.add(new HttpHost("127.0.0.1",9200,"http"));\n        httpHosts.add(new HttpHost("10.2.3.1",9200,"http"));\n\n// \u4f7f\u7528 ElasticsearchSink.Builder \u521b\u5efa ElasticsearchSink\n        ElasticsearchSink.Builder<String> esSinkBuilder=new ElasticsearchSink.Builder<>(\n        httpHosts,\n        new ElasticsearchSinkFunction<String>(){\npublic IndexRequest createIndexRequest(String element){\n        Map<String, String> json=new HashMap<>();\n        json.put("data",element);\n\n        return Requests.indexRequest()\n        .index("my-index")\n        .type("my-type")\n        .source(json);\n        }\n\n@Override\npublic void process(String element,RuntimeContext ctx,RequestIndexer indexer){\n        indexer.add(createIndexRequest(element));\n        }\n        }\n        );\n\n// Configuration for batch requests; the settings below cause the sink to commit immediately after receiving each element that would otherwise be cached\n        esSinkBuilder.setBulkFlushMaxActions(1);\n\nA RestClientFactory that provides custom configuration information for internally created REST clients\n        esSinkBuilder.setRestClientFactory(\n        restClientBuilder->{\n        restClientBuilder.setDefaultHeaders(...)\n        restClientBuilder.setMaxRetryTimeoutMillis(...)\n        restClientBuilder.setPathPrefix(...)\n        restClientBuilder.setHttpClientConfigCallback(...)\n        }\n        );\n\n// Finally, build and add the sink to the job pipeline\n        input.addSink(esSinkBuilder.build());\n'))),(0,r.kt)(s.Z,{value:"scala, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.flink.api.common.functions.RuntimeContext\nimport org.apache.flink.streaming.api.datastream.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink\n\nimport org.apache.http.HttpHost\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.client.Requests\n\nimport java.util.ArrayList\nimport java.util.List\n\nval input: DataStream[String] =\n...\n\nval httpHosts = new java.util.ArrayList[HttpHost]\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"))\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"))\n\nval esSinkBuilder = new ElasticsearchSink.Builder[String](\n  httpHosts,\n  new ElasticsearchSinkFunction[String] {\n    def process(element: String, ctx: RuntimeContext, indexer: RequestIndexer) {\n      val json = new java.util.HashMap[String, String]\n      json.put("data", element)\n\n      val rqst: IndexRequest = Requests.indexRequest\n        .index("my-index")\n        .`type`("my-type")\n        .source(json)\n\n      indexer.add(rqst)\n    }\n  }\n)\n\n// Configuration for batch requests; the settings below cause the sink to commit immediately after receiving each element that would otherwise be cached\nesSinkBuilder.setBulkFlushMaxActions(1)\n\n// A RestClientFactory that provides custom configuration information for internally created REST clients\nesSinkBuilder.setRestClientFactory(new RestClientFactory {\n  override def configureRestClientBuilder(restClientBuilder: RestClientBuilder): Unit = {\n    restClientBuilder.setDefaultHeaders(\n    ...)\n    restClientBuilder.setMaxRetryTimeoutMillis(\n    ...)\n    restClientBuilder.setPathPrefix(\n    ...)\n    restClientBuilder.setHttpClientConfigCallback(\n    ...)\n  }\n})\n\n// Finally, build and add the sink to the job pipeline\ninput.addSink(esSinkBuilder.build)\n')))),(0,r.kt)("p",null,"The ElasticsearchSink created above is very inflexible to add parameters. ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," follows the concept of convention over configuration and automatic configuration.\nUsers only need to configure es connection parameters and Flink operating parameters, and StreamPark will automatically assemble source and sink,\nwhich greatly simplifies development logic and improves development efficiency and maintainability."),(0,r.kt)("h2",{id:"using-streampark-writes-to-elasticsearch"},"Using StreamPark writes to Elasticsearch"),(0,r.kt)("p",null,"Please ensure that operation requests are sent to the Elasticsearch cluster at least once after enabling Flink checkpointing in ESSink."),(0,r.kt)("h3",{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"},"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink configure\n#  Required parameter, used by multiple nodes host1:port, host2:port,\nhost: localhost:9200\n#  optional parameters\n#  es:\n#    disableFlushOnCheckpoint: true #\u9ed8\u8ba4\u4e3afalse\n#    auth:\n#    user:\n#      password:\n#    rest:\n#      max.retry.timeout:\n#      path.prefix:\n#      content.type:\n#    connect:\n#      request.timeout:\n#      timeout:\n#    cluster.name: elasticsearch\n#  client.transport.sniff:\n#  bulk.flush.:\n")),(0,r.kt)("h3",{id:"2-\u5199\u5165elasticsearch"},"2. \u5199\u5165Elasticsearch"),(0,r.kt)("p",null,"Using StreamPark writes to Elasticsearch"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.sink.ESSink\nimport com.streamxhub.streamx.flink.core.scala.util.ElasticSearchUtils\nimport org.apache.flink.api.scala._\nimport org.elasticsearch.action.index.IndexRequest\nimport org.json4s.DefaultFormats\nimport org.json4s.jackson.Serialization\n\nimport java.util.Date\n\nobject ConnectorApp extends FlinkStreaming {\n\n\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n    val ds = context.fromCollection(List(\n      OrderEntity(1, 1, 11.3d, 3.1d, new Date()),\n      OrderEntity(2, 1, 12.3d, 3.2d, new Date()),\n      OrderEntity(3, 1, 13.3d, 3.3d, new Date()),\n      OrderEntity(4, 1, 14.3d, 3.4d, new Date()),\n      OrderEntity(5, 1, 15.3d, 7.5d, new Date()),\n      OrderEntity(6, 1, 16.3d, 3.6d, new Date()),\n      OrderEntity(7, 1, 17.3d, 3.7d, new Date())\n    ))\n\n    // es sink.........\n\n    //1)Define the writing rules for Index\n    implicit def indexReq(x: OrderEntity): IndexRequest = ElasticSearchUtils.indexRequest(\n      "flink_order",\n      "_doc",\n      s"${x.id}_${x.time.getTime}",\n      Serialization.write(x)\n    )\n    //3)define esSink and sink = data. done\n    ESSink().sink6[OrderEntity](ds)\n  }\n\n\n  case class OrderEntity(id: Int, num: Int, price: Double, gmv: Double, time: Date) extends Serializable\n\n}\n')))),(0,r.kt)("p",null,"Flink ElasticsearchSinkFunction\u53ef\u4ee5\u6267\u884c\u591a\u79cd\u7c7b\u578b\u8bf7\u6c42\uff0c\u5982\uff08DeleteRequest\u3001 UpdateRequest\u3001IndexRequest\uff09,StreamX\u4e5f\u5bf9\u4ee5\u4e0a\u529f\u80fd\u8fdb\u884c\u4e86\u652f\u6301\uff0c\u5bf9\u5e94\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.StreamingContext\nimport org.apache.flink.streaming.api.datastream.DataStreamSink\nimport org.apache.flink.streaming.api.scala.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ActionRequestFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch.util.RetryRejectedExecutionFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch6.RestClientFactory\nimport org.elasticsearch.action.delete.DeleteRequest\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.action.update.UpdateRequest\n\nimport java.util.Properties\nimport scala.annotation.meta.param\n\n\nclass ESSink(@(transient@param) context: StreamingContext,\n             property: Properties = new Properties(),\n             parallelism: Int = 0,\n             name: String = null,\n             uid: String = null) {\n\n  /**\n   * for ElasticSearch6\n   *\n   * @param stream\n   * @param suffix\n   * @param restClientFactory\n   * @param failureHandler\n   * @param f\n   * @tparam T\n   * @return\n   */\n  def sink6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              (implicit f: T => IndexRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n  def update6[T](stream: DataStream[T],\n                 suffix: String = "",\n                 restClientFactory: RestClientFactory = null,\n                 failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n                (f: T => UpdateRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n  def delete6[T](stream: DataStream[T],\n                 suffix: String = "",\n                 restClientFactory: RestClientFactory = null,\n                 failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n                (f: T => DeleteRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When the Flink checkpoint is enabled, the Flink Elasticsearch Sink guarantees that operation requests are sent to the Elasticsearch cluster at least once.\nIt does this by waiting for all pending operation requests in the BulkProcessor while checkpointing.\nThis effectively guarantees that all requests will be successfully acknowledged by Elasticsearch before triggering the checkpoint and proceeding to process records sent to the sink.\nIf the user wants to disable flushing, they can configure disableFlushOnCheckpoint to true to do so,\nwhich essentially means that the sink will no longer provide any reliable delivery guarantees,\neven if checkpointing of the job topology is enabled.")),(0,r.kt)("h2",{id:"other-configuration"},"Other configuration"),(0,r.kt)("h3",{id:"deal-with-failed-elasticsearch-request"},"deal with failed Elasticsearch request"),(0,r.kt)("p",null,"An Elasticsearch operation request may fail for a variety of reasons. You can specify the failure handling logic by implementing ActionRequestFailureHandler.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"Official Documentation")," - Handling Failed Elasticsearch Requests"),(0,r.kt)("h3",{id:"configure-the-internal-batch-processor"},"Configure the internal batch processor"),(0,r.kt)("p",null,"The BulkProcessor inside es can further configure its behavior of how to refresh the cache operation request,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"official documentation")," for details - ",(0,r.kt)("strong",{parentName:"p"},"Configuring the Internal")," Bulk Processor"),(0,r.kt)("h3",{id:"streampark-configuration"},"StreamPark configuration"),(0,r.kt)("p",null,"All other configurations must comply with the StreamPark configuration.\nFor ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/conf"},"specific configurable")," items and the role of each parameter,\nplease refer to the project configuration"))}h.isMDXComponent=!0}}]);