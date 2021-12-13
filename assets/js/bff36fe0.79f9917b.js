"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3852:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"deprecating-schema",title:"Deprecating Schema"},s={unversionedId:"schema-generator/customizing-schemas/deprecating-schema",id:"version-4.x.x/schema-generator/customizing-schemas/deprecating-schema",isDocsHomePage:!1,title:"Deprecating Schema",description:"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,",source:"@site/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/deprecating-schema.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/deprecating-schema",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/deprecating-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/deprecating-schema.md",version:"4.x.x",lastUpdatedBy:"Martin Bonnin",lastUpdatedAt:1639419781,formattedLastUpdatedAt:"12/13/2021",frontMatter:{id:"deprecating-schema",title:"Deprecating Schema"},sidebar:"version-4.x.x/docs",previous:{title:"Directives",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/directives"},next:{title:"Restricting Input and Output Types",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/restricting-input-output"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," just looks for the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlin.Deprecated")," annotation and will use that annotation message\nfor the deprecated reason."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleQuery {\n  @Deprecated(message = "this query is deprecated", replaceWith = ReplaceWith("shinyNewQuery"))\n  fun simpleDeprecatedQuery(): Boolean = false\n\n  fun shinyNewQuery(): Boolean = true\n}\n')),(0,o.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  simpleDeprecatedQuery: Boolean! @deprecated(reason: "this query is deprecated, replace with shinyNewQuery")\n\n  shinyNewQuery: Boolean!\n}\n')),(0,o.kt)("p",null,"While you can deprecate any fields/functions/classes in your Kotlin code, GraphQL only supports deprecation directive on\nthe fields (which correspond to Kotlin fields and functions) and enum values."),(0,o.kt)("p",null,"Deprecation of input types is not yet supported ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-spec/pull/525"},"in the GraphQL spec"),"."))}u.isMDXComponent=!0}}]);