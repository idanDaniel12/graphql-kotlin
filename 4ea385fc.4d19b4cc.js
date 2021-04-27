(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(182)),o={id:"scalars",title:"Scalars",original_id:"scalars"},l={unversionedId:"schema-generator/writing-schemas/scalars",id:"version-3.x.x/schema-generator/writing-schemas/scalars",isDocsHomePage:!1,title:"Scalars",description:"Primitive Types",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/scalars.md",slug:"/schema-generator/writing-schemas/scalars",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/scalars",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/scalars.md",version:"3.x.x",lastUpdatedBy:"Ruth",lastUpdatedAt:1619542001,sidebar:"version-3.x.x/docs",previous:{title:"Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/arguments"},next:{title:"Enums",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/enums"}},p=[{value:"Primitive Types",id:"primitive-types",children:[]},{value:"GraphQL ID",id:"graphql-id",children:[]},{value:"Custom Scalars",id:"custom-scalars",children:[]},{value:"Common Issues",id:"common-issues",children:[{value:"Extended Scalars",id:"extended-scalars",children:[]},{value:"<code>TypeNotSupportedException</code>",id:"typenotsupportedexception",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"primitive-types"},"Primitive Types"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),' can directly map most Kotlin "primitive" types to standard GraphQL scalar types or\nextended scalar types provided by ',Object(i.b)("inlineCode",{parentName:"p"},"graphql-java"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Kotlin Type"),Object(i.b)("th",{parentName:"tr",align:null},"GraphQL Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.Int")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Int"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.Float")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Float"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.String")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"String"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.Boolean")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Boolean"))))),Object(i.b)("p",null,">"," NOTE: Extended GraphQL scalar types provided by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java")," were ",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/releases/tag/v15.0"},"deprecated in v15"),".\n",">"," This includes the following types: ",Object(i.b)("inlineCode",{parentName:"p"},"Long"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Short"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Float"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BigInteger"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BigDecimal"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"Char"),".\n",">"," If you are currently using these types, they will be removed in future ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java")," releases.\n",">"," See the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," project if you need continued support."),Object(i.b)("h2",{id:"graphql-id"},"GraphQL ID"),Object(i.b)("p",null,"GraphQL supports the scalar type ",Object(i.b)("inlineCode",{parentName:"p"},"ID"),", a unique identifier that is not intended to be human readable. IDs are\nserialized as a ",Object(i.b)("inlineCode",{parentName:"p"},"String"),". To expose a GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"ID")," field, you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.scalars.ID")," class, which wraps the underlying ",Object(i.b)("inlineCode",{parentName:"p"},"String")," value."),Object(i.b)("p",null,">"," NOTE: ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java")," supports additional types (",Object(i.b)("inlineCode",{parentName:"p"},"String"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Int"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Long"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"UUID"),") but ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/317"},"due to serialization issues")," we can only directly support Strings. You can still use a type like UUID internally just as long as you convert or parse the value yourself and handle the errors."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\ndata class Person(\n    val id: ID,\n    val name: String\n)\n\nfun findPersonById(id: ID) = Person(id, "John Smith")\n\nfun generateRandomId(): ID = ID(UUID.randomUUID().toString())\n\n')),Object(i.b)("p",null,"This would produce the following schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n    query: Query\n}\n\ntype Query {\n    findPersonById(id: ID!): Person!\n    generateRandomId: ID!\n}\n\ntype Person {\n    id: ID!\n    name: String!\n}\n\n")),Object(i.b)("h2",{id:"custom-scalars"},"Custom Scalars"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses Kotlin reflections to generate all schema objects. If you want to\napply custom behavior to the objects, you can also define your own custom scalars. Custom scalars have to be explicitly\nadded to the schema through ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks.willGenerateGraphQLType"),".\nSee the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),Object(i.b)("p",null,"Example usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    UUID::class -> graphqlUUIDType\n    else -> null\n  }\n}\n\nval graphqlUUIDType = GraphQLScalarType.newScalar()\n    .name("UUID")\n    .description("A type representing a formatted java.util.UUID")\n    .coercing(UUIDCoercing)\n    .build()\n\nobject UUIDCoercing : Coercing<UUID, String> {\n    override fun parseValue(input: Any?): UUID = UUID.fromString(serialize(input))\n\n    override fun parseLiteral(input: Any?): UUID? {\n        val uuidString = (input as? StringValue)?.value\n        return UUID.fromString(uuidString)\n    }\n\n    override fun serialize(dataFetcherResult: Any?): String = dataFetcherResult.toString()\n}\n\n')),Object(i.b)("p",null,"Once the scalars are registered you can use them anywhere in the schema as regular objects."),Object(i.b)("h2",{id:"common-issues"},"Common Issues"),Object(i.b)("h3",{id:"extended-scalars"},"Extended Scalars"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," only supports the primitive scalar types listed above. If you are looking to use common java types as scalars, you need to include the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," library and set up the hooks (see above), or write the logic yourself for how to resolve these custom scalars."),Object(i.b)("p",null,"The most popular types that require extra configuration are: ",Object(i.b)("inlineCode",{parentName:"p"},"LocalDate"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DateTime"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Instant"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ZonedDateTime"),", ",Object(i.b)("inlineCode",{parentName:"p"},"URL"),", ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")),Object(i.b)("h3",{id:"typenotsupportedexception"},Object(i.b)("inlineCode",{parentName:"h3"},"TypeNotSupportedException")),Object(i.b)("p",null,"If you see the following message ",Object(i.b)("inlineCode",{parentName:"p"},"Cannot convert ** since it is not a valid GraphQL type or outside the supported packages ***"),". This means that you need to update the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"generator configuration")," to include the package of your type or you did not properly set up the hooks to register the new type."))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);