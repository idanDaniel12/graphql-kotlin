"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),i=a(7294),r=a(2389),o=a(3725),l=a(6010);const s="tabItem_LplD";function d(e){var t,a,r,d=e.lazy,p=e.block,u=e.defaultValue,c=e.values,m=e.groupId,h=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),y=N.tabGroupChoices,b=N.setTabGroupChoices,w=(0,i.useState)(f),x=w[0],C=w[1],D=[],L=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==x&&g.some((function(e){return e.value===E}))&&C(E)}var q=function(e){var t=e.currentTarget,a=D.indexOf(t),n=g[a].value;n!==x&&(L(t),C(n),null!=m&&b(m,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var i=D.indexOf(e.currentTarget)-1;a=D[i]||D[D.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return D.push(e)},onKeyDown:T,onFocus:q,onClick:q},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),d?(0,i.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,r.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},6052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=a(9877),l=a(8215),s=["components"],d={id:"data-loader-instrumentation",title:"Data Loader Instrumentations"},p=void 0,u={unversionedId:"server/data-loader/data-loader-instrumentation",id:"server/data-loader/data-loader-instrumentation",title:"Data Loader Instrumentations",description:"graphql-kotlin-dataloader-instrumentation is set of custom Instrumentations",source:"@site/docs/server/data-loader/data-loader-instrumentation.mdx",sourceDirName:"server/data-loader",slug:"/server/data-loader/data-loader-instrumentation",permalink:"/graphql-kotlin/docs/server/data-loader/data-loader-instrumentation",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/data-loader/data-loader-instrumentation.mdx",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1654187496,formattedLastUpdatedAt:"6/2/2022",frontMatter:{id:"data-loader-instrumentation",title:"Data Loader Instrumentations"},sidebar:"docs",previous:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loader/"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"}},c={},m=[{value:"Dispatching by level",id:"dispatching-by-level",level:2},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Dispatching by synchronous execution exhaustion",id:"dispatching-by-synchronous-execution-exhaustion",level:2},{value:"Example",id:"example-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Multiple data loaders per field data fetcher",id:"multiple-data-loaders-per-field-data-fetcher",level:2},{value:"DispatchIfNeeded",id:"dispatchifneeded",level:3},{value:"Example",id:"example-2",level:3}],h={toc:m};function k(e){var t=e.components,d=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," is set of custom ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/instrumentation/"},"Instrumentations"),"\nthat will calculate when is the right moment to dispatch ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),"s across single and batch GraphQL operations."),(0,r.kt)("p",null,"These custom instrumentations follow the similar approach as the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/instrumentation/dataloader/DataLoaderDispatcherInstrumentation.java"},"DataLoaderDispatcherInstrumentation"),"\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java"),", the main difference is that regular instrumentations apply to a single ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionInput")," aka ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/execution#queries"},"GraphQL Operation"),",\nwhereas these custom instrumentations apply to multiple GraphQL operations (say a BatchRequest) and stores their state in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLContext"),"\nallowing batching and deduplication of transactions across those multiple GraphQL operations."),(0,r.kt)("p",null,"By default, each GraphQL operation is processed independently of each other. Multiple operations can be processed\ntogether as if they were single GraphQL request if they are part of the same batch request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," module contains 2 custom ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," instrumentations."),(0,r.kt)("h2",{id:"dispatching-by-level"},"Dispatching by level"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderLevelDispatchedInstrumentation")," tracks the state of all ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionInputs")," across operations. When a certain\nfield dispatches, it will check if all fields across all operations for a particular level were dispatched and if the condition is met,\nit will dispatch all the data loaders."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"You can find additional examples in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/test/kotlin/com/expediagroup/graphql/dataloader/instrumentation/level/DataLoaderLevelDispatchedInstrumentationTest.kt"},"unit tests"),"."),(0,r.kt)(o.Z,{defaultValue:"by-level-queries",values:[{label:"Queries",value:"by-level-queries"},{label:"Execution",value:"by-level-execution"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"by-level-queries",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Q1 {\n    astronaut(id: 1) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n\nquery Q2 {\n    astronaut(id: 2) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"by-level-execution",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Image of data loader level dispatched instrumentation",src:a(4356).Z,width:"1213",height:"571"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFetcher")," uses a ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," which will be dispatched when ",(0,r.kt)("strong",{parentName:"li"},"Level 1")," of those 2 operations\nis dispatched, causing the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," to load 2 astronauts."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFetcher")," uses a ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," which will be dispatched when ",(0,r.kt)("strong",{parentName:"li"},"Level 2")," of those 2 operations\nis dispatched, causing the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," to load 2 lists of missions by astronaut.")))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In order to enable batching by level, you need to configure your GraphQL instance with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderLevelDispatchedInstrumentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQL = GraphQL.Builder()\n    .doNotAddDefaultInstrumentations()\n    .instrumentation(DataLoaderLevelDispatchedInstrumentation())\n    // configure schema, type wiring, etc.\n    .build()\n")),(0,r.kt)("p",null,"This data loader instrumentation relies on a global state object that should be stored in the GraphQL context map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQLContext = mapOf(\n    SyncExecutionExhaustedState::class to ExecutionLevelDispatchedState(queries.size)\n)\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides convenient integration of batch loader functionality through simple configuration.\nBatching by level can be enabled by configuring following properties:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  batching:\n   enabled: true\n   strategy: LEVEL_DISPATCHED\n")))),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"This instrumentation is a good option if your ",(0,r.kt)("strong",{parentName:"p"},"GraphQLServer")," will receive a batched request with operations of the same type,\nin those cases batching by level is enough, however, this solution is far from being the most optimal as we don't necessarily want to dispatch by level."),(0,r.kt)("h2",{id:"dispatching-by-synchronous-execution-exhaustion"},"Dispatching by synchronous execution exhaustion"),(0,r.kt)("p",null,"The most optimal time to dispatch all data loaders is when all possible synchronous execution paths across all batch\noperations were exhausted. Synchronous execution path is considered exhausted (or completed) when all currently processed\ndata fetchers were either resolved to a scalar or a future promise."),(0,r.kt)("p",null,"Let's analyze how GraphQL execution works, but first lets check some GraphQL concepts:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DataFetcher")),(0,r.kt)("p",null,"Each field in GraphQL has a resolver aka ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher")," associated with it, some fields will use specialized ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher"),"s\nthat knows how to go to a database or make a network request to get field information while most simply take\ndata from the returned memory objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Execution Strategy")),(0,r.kt)("p",null,"The process of finding values for a list of fields from the GraphQL Query, using a recursive strategy."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"You can find additional examples in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/test/kotlin/com/expediagroup/graphql/dataloader/instrumentation/syncexhaustion/DataLoaderSyncExecutionExhaustedInstrumentationTest.kt"},"unit tests"),"."),(0,r.kt)(o.Z,{defaultValue:"by-sync-exhaustion-queries",values:[{label:"Queries",value:"by-sync-exhaustion-queries"},{label:"Execution",value:"by-sync-exhaustion-execution"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"by-sync-exhaustion-queries",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Q1 {\n    astronaut(id: 1) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n\nquery Q2 {\n    nasa { #sync\n        astronaut(id: 2) { # async\n            id\n            name\n            missions { # async\n                id\n                designation\n            }\n        }\n        address { # sync\n            street\n            zipCode\n        }\n        phoneNumber\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"by-sync-exhaustion-execution",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Image of data loader level dispatched instrumentation",src:a(6306).Z,width:"1375",height:"759"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The order of execution of the queries will be:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q1"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query, to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<Astronaut>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query, to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will synchronously return a ",(0,r.kt)("inlineCode",{parentName:"li"},"Nasa")," object, so we can descend more that path."))),(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"phoneNumber"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher"),"  will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<Astronaut>")," so we can consider this path exhausted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will synchronously return an ",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," object, so we can descend more that path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phoneNumber")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."))),(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"street")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"zipCode"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"street")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zipCode")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"At this point we can consider the synchronous execution exhausted and the ",(0,r.kt)("inlineCode",{parentName:"strong"},"AstronautDataLoader")," has 2 keys to be dispatched,\nif we proceed dispatching all data loaders the execution will continue as following:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q1"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mission")," fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<List<Mission>>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mission")," fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<List<Mission>>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"At this point we can consider the synchronous execution exhausted and the ",(0,r.kt)("inlineCode",{parentName:"strong"},"MissionsByAstronautDataLoader")," has 2 keys to be dispatched,\nif we proceed dispatching all data loaders the execution will continue to just resolve scalar fields.")))),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"In order to enable batching by synchronous execution exhaustion, you need to configure your GraphQL instance with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderLevelDispatchedInstrumentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQL = GraphQL.Builder()\n    .doNotAddDefaultInstrumentations()\n    .instrumentation(DataLoaderSyncExecutionExhaustedInstrumentation())\n    // configure schema, type wiring, etc.\n    .build()\n")),(0,r.kt)("p",null,"This data loader instrumentation relies on a global state object that should be stored in the GraphQL context map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQLContext = mapOf(\n    SyncExecutionExhaustedState::class to ExecutionLevelDispatchedState(\n        queries.size,\n        kotlinDataLoaderRegistry\n    )\n)\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides convenient integration of batch loader functionality through simple configuration.\nBatching by synchronous execution exhaustion can be enabled by configuring following properties:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  batching:\n   enabled: true\n   strategy: SYNC_EXHAUSTION\n")))),(0,r.kt)("h2",{id:"multiple-data-loaders-per-field-data-fetcher"},"Multiple data loaders per field data fetcher"),(0,r.kt)("p",null,"There are some cases when a GraphQL Schema doesn't match the data source schema, a field can require data from multiple\nsources to be fetched and you will still want to do batching with data loaders."),(0,r.kt)("h3",{id:"dispatchifneeded"},"DispatchIfNeeded"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," includes a helpful extension function of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," class\nso that you can easily instruct the ",(0,r.kt)("a",{parentName:"p",href:"./data-loader-instrumentation#dispatching-by-level"},"previously selected data loader instrumentation"),"\nthat you want to apply batching and deduplication to a chained ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher")," (resolver)."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    astronaut(id: ID!): Astronaut\n}\n\n# In the data source, let's say a database,\n# an `Astronaut` can have multiple `Mission`s and a `Mission` can have multiple `Planet`s.\ntype Astronaut {\n    id: ID!\n    name: String!\n    # The schema exposes the `Astronaut` `Planet`s, without traversing his `Mission`s.\n    planets: [Planet!]!\n}\n\ntype Planet {\n    id: ID!\n    name: String!\n}\n")),(0,r.kt)("p",null,"The  ",(0,r.kt)("inlineCode",{parentName:"p"},"Astronaut")," ",(0,r.kt)("inlineCode",{parentName:"p"},"planets")," data fetcher (resolver) will contain the logic to chain two data loaders,\nfirst collect missions by astronaut, and then, planets by mission."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DataLoaders")),(0,r.kt)("p",null,"For this specific example we would need 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),"s"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MissionsByAstronaut:")," to retrieve ",(0,r.kt)("inlineCode",{parentName:"li"},"Mission"),"s by a given ",(0,r.kt)("inlineCode",{parentName:"li"},"Astronaut"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PlanetsByMission:")," to retrieve ",(0,r.kt)("inlineCode",{parentName:"li"},"Planet"),"s by a given ",(0,r.kt)("inlineCode",{parentName:"li"},"Mission"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetching logic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Astronaut {\n    fun getPlanets(\n        astronautId: Int,\n        environment: DataFetchingEnvironment\n    ): CompletableFuture<List<Planet>> {\n        val missionsByAstronautDataLoader = environment.getDataLoader("MissionsByAstronautDataLoader")\n        val planetsByMissionDataLoader = environment.getDataLoader("PlanetsByMissionDataLoader")\n        return missionsByAstronautDataLoader\n            .load(astronautId)\n            // chain data loader\n            .thenCompose { missions ->\n                planetsByMissionDataLoader\n                    .loadMany(missions.map { mission -> mission.id })\n                    // extension function to schedule a dispatch of registry if needed\n                    .dispatchIfNeeded(environment)\n            }\n}\n')))}k.isMDXComponent=!0},4356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-loader-level-dispatched-instrumentation-5aa0dcea159d7f614e3f9894936ce2a6.png"},6306:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-loader-level-sync-execution-exhausted-instrumentation-716af35282dac7cd02bf2d3541752dbf.png"}}]);