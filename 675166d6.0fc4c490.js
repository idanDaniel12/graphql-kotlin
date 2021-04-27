(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(182)),i={id:"spring-graphql-context",title:"Generating GraphQL Context"},p={unversionedId:"server/spring-server/spring-graphql-context",id:"server/spring-server/spring-graphql-context",isDocsHomePage:!1,title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a Spring specific implementation of GraphQLContextFactory and the context.",source:"@site/docs/server/spring-server/spring-graphql-context.md",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-graphql-context.md",version:"current",lastUpdatedBy:"Ruth",lastUpdatedAt:1619542001,sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/server/spring-server/spring-schema"},next:{title:"HTTP Request and Response",permalink:"/graphql-kotlin/docs/server/spring-server/spring-http-request-response"}},c=[{value:"Federated Context",id:"federated-context",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a Spring specific implementation of ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory")," and the context."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," - Implements the Spring ",Object(o.b)("inlineCode",{parentName:"li"},"ServerRequest")," and federation tracing ",Object(o.b)("inlineCode",{parentName:"li"},"HTTPRequestHeaders")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SpringGraphQLContextFactory")," - Generates a ",Object(o.b)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," per request")),Object(o.b)("p",null,"If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", you should extend ",Object(o.b)("inlineCode",{parentName:"p"},"SpringGraphQLContext")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SpringGraphQLContextFactory")," to maintain support with all the other features."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'class MyGraphQLContext(val myCustomValue: String, request: ServerRequest) : SpringGraphQLContext(request)\n\n@Component\nclass MyGraphQLContextFactory : SpringGraphQLContextFactory<MyGraphQLContext>() {\n    override suspend fun generateContext(request: ServerRequest): MyGraphQLContext {\n        val customVal = request.headers().firstHeader("MyHeader") ?: "defaultValue"\n        return MyGraphQLContext(customVal, request)\n    }\n}\n')),Object(o.b)("p",null,"Once your application is configured to build your custom ",Object(o.b)("inlineCode",{parentName:"p"},"MyGraphQLContext"),", you can then specify it as function argument.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),Object(o.b)("p",null,"For more details, see the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),Object(o.b)("h2",{id:"federated-context"},"Federated Context"),Object(o.b)("p",null,"If you need ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropiate ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-properties"},"configuration properties"),".\nThe provided ",Object(o.b)("inlineCode",{parentName:"p"},"SpringGraphQLContext")," implements the required federation methods for tracing, so as long as you extend this context class you will maintain feature support."))}l.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,b=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return r?a.a.createElement(b,p(p({ref:t},s),{},{components:r})):a.a.createElement(b,p({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);