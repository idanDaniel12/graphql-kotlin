(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(182)),o={id:"client-customization",title:"Client Customization",original_id:"client-customization"},l={unversionedId:"client/client-customization",id:"version-3.x.x/client/client-customization",isDocsHomePage:!1,title:"Client Customization",description:"Ktor HTTP Client Customization",source:"@site/versioned_docs/version-3.x.x/client/client-customization.md",slug:"/client/client-customization",permalink:"/graphql-kotlin/docs/3.x.x/client/client-customization",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/client/client-customization.md",version:"3.x.x",lastUpdatedBy:"Ruth",lastUpdatedAt:1619542001,sidebar:"version-3.x.x/docs",previous:{title:"Client Features",permalink:"/graphql-kotlin/docs/3.x.x/client/client-features"},next:{title:"Gradle Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"}},c=[{value:"Ktor HTTP Client Customization",id:"ktor-http-client-customization",children:[{value:"Global Client Customization",id:"global-client-customization",children:[]},{value:"Per Request Customization",id:"per-request-customization",children:[]},{value:"Custom GraphQL client",id:"custom-graphql-client",children:[]}]},{value:"Jackson Customization",id:"jackson-customization",children:[]},{value:"Deprecated Field\xa0Usage",id:"deprecated-field-usage",children:[]},{value:"Custom GraphQL\xa0Scalars",id:"custom-graphql-scalars",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"ktor-http-client-customization"},"Ktor HTTP Client Customization"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," uses the Ktor HTTP Client to execute the underlying queries. Clients can be customized with different\nengines (defaults to Coroutine-based IO) and HTTP client features. Custom configurations can be applied through Ktor DSL\nstyle builders."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client documentation")," for additional details."),Object(i.b)("h3",{id:"global-client-customization"},"Global Client Customization"),Object(i.b)("p",null,"A single instance of ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," can be used to power many GraphQL operations. You can specify a target engine factory and\nconfigure it through the corresponding ",Object(i.b)("a",{parentName:"p",href:"https://api.ktor.io/1.3.2/io.ktor.client/-http-client-config/index.html"},"HttpClientConfig"),".\nKtor also provides a number of ",Object(i.b)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/features.html"},"standard HTTP features")," and\nallows you to easily create custom ones that can be configured globally."),Object(i.b)("p",null,"The below example configures a new ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," to use the ",Object(i.b)("inlineCode",{parentName:"p"},"OkHttp")," engine with custom timeouts, adds a default ",Object(i.b)("inlineCode",{parentName:"p"},"X-MY-API-KEY"),"\nheader to all requests, and enables basic logging of the requests."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval client = GraphQLClient(\n        url = URL("http://localhost:8080/graphql"),\n        engineFactory = OkHttp\n) {\n    engine {\n        config {\n            connectTimeout(10, TimeUnit.SECONDS)\n            readTimeout(60, TimeUnit.SECONDS)\n            writeTimeout(60, TimeUnit.SECONDS)\n        }\n    }\n    defaultRequest {\n        header("X-MY-API-KEY", "someSecretApiKey")\n    }\n    install(Logging) {\n        logger = Logger.DEFAULT\n        level = LogLevel.INFO\n    }\n}\n\n')),Object(i.b)("h3",{id:"per-request-customization"},"Per Request Customization"),Object(i.b)("p",null,"Individual GraphQL requests can be customized through ",Object(i.b)("a",{parentName:"p",href:"https://api.ktor.io/1.3.2/io.ktor.client.request/-http-request-builder/"},"HttpRequestBuilder"),".\nYou can use this mechanism to specify custom headers, update target url to include custom query parameters, configure\nattributes that can be accessed from the pipeline features as well specify timeouts per request."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval helloWorldQuery = HelloWorldQuery(client)\nval result = helloWorldQuery.execute(variables = HelloWorldQuery.Variables(name = null)) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n\n')),Object(i.b)("h3",{id:"custom-graphql-client"},"Custom GraphQL client"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," is an open class which means you can also extend it to provide custom ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," logic."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomGraphQLClient(url: URL) : GraphQLClient<CIOEngineConfig>(url = url, engineFactory = CIO) {\n\n    override suspend fun <T> execute(query: String, operationName: String?, variables: Any?, resultType: Class<T>, requestBuilder: HttpRequestBuilder.() -> Unit): GraphQLResponse<T> {\n        // custom init logic\n        val result = super.execute(query, operationName, variables, resultType, requestBuilder)\n        // custom finalize logic\n        return result\n    }\n}\n\n")),Object(i.b)("h2",{id:"jackson-customization"},"Jackson Customization"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," relies on Jackson to handle polymorphic types and default enum values. You can specify your own custom\nobject mapper configured with some additional serialization/deserialization features but due to the necessary logic to\nhandle the above, currently we don't support other JSON libraries."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval customObjectMapper = jacksonObjectMapper()\nval client = GraphQLClient(url = URL("http://localhost:8080/graphql"), mapper = customObjectMapper)\n\n')),Object(i.b)("h2",{id:"deprecated-field-usage"},"Deprecated Field\xa0Usage"),Object(i.b)("p",null,"Build plugins will automatically fail generation of a client if any of the specified query files are referencing\ndeprecated fields. This ensures that your clients have to explicitly opt-in into deprecated usage by specifying\n",Object(i.b)("inlineCode",{parentName:"p"},"allowDeprecatedFields")," configuration option."),Object(i.b)("h2",{id:"custom-graphql-scalars"},"Custom GraphQL\xa0Scalars"),Object(i.b)("p",null,"By default, custom GraphQL scalars are serialized and ",Object(i.b)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),Object(i.b)("p",null,"In order to automatically convert between custom GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",Object(i.b)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",Object(i.b)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\npackage com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: String): UUID = UUID.fromString(rawValue)\n    override fun toJson(value: UUID): String = value.toString()\n}\n\n")),Object(i.b)("p",null,"And then configure build plugin by specifying"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Custom GraphQL scalar name"),Object(i.b)("li",{parentName:"ul"},"Target class name"),Object(i.b)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\ngraphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    converters.put("UUID", ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n\n')),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},"Gradle"),"\nand ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);