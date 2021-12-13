"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4965],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>u});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||o;return a?t.createElement(m,r(r({ref:n},s),{},{components:a})):t.createElement(m,r({ref:n},s))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6255:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var t=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},c={unversionedId:"plugins/maven-plugin-usage",id:"plugins/maven-plugin-usage",isDocsHomePage:!1,title:"Maven Plugin Usage",description:"Downloading Schema SDL",source:"@site/docs/plugins/maven-plugin-usage.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-usage.md",version:"current",lastUpdatedBy:"Martin Bonnin",lastUpdatedAt:1639419781,formattedLastUpdatedAt:"12/13/2021",sidebar_label:"Usage",frontMatter:{id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Maven Plugin Goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/plugins/hooks-provider"}},p=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",children:[]},{value:"Introspecting Schema",id:"introspecting-schema",children:[]},{value:"Generating Client",id:"generating-client",children:[]},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",children:[]},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",children:[]},{value:"Generating Test Client",id:"generating-test-client",children:[]},{value:"Minimal Configuration Example",id:"minimal-configuration-example",children:[]},{value:"Complete Configuration Example",id:"complete-configuration-example",children:[]},{value:"Generating Multiple Clients",id:"generating-multiple-clients",children:[]},{value:"Generating SDL Example",id:"generating-sdl-example",children:[]},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",children:[]}],s={toc:p};function d(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,o.kt)("p",null,"Download SDL Mojo requires target GraphQL server ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:download-sdl -Dgraphql.endpoint="http://localhost:8080/sdl"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>download-sdl</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/sdl</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"download-sdl")," goal will be executed as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,o.kt)("h2",{id:"introspecting-schema"},"Introspecting Schema"),(0,o.kt)("p",null,"Introspection Mojo requires target GraphQL server ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:introspect-schema -Dgraphql.endpoint="http://localhost:8080/graphql"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"introspect-schema")," goal will be executed as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,o.kt)("h2",{id:"generating-client"},"Generating Client"),(0,o.kt)("p",null,"This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFile"),". Classes are\ngenerated under specified ",(0,o.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"This will process all GraphQL queries located under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."))),(0,o.kt)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,o.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,o.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),(0,o.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),(0,o.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <allowDeprecatedFields>false</allowDeprecatedFields>\n                <customScalars>\n                    <customScalar>\n                        \x3c!-- custom scalar UUID type --\x3e\n                        <scalar>UUID</scalar>\n                        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                        <type>java.util.UUID</type>\n                        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                           used to convert to/from raw JSON and scalar type --\x3e\n                        <converter>com.example.UUIDScalarConverter</converter>\n                    </customScalar>\n                </customScalars>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),(0,o.kt)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type and configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler\nplugin. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>mySchema.graphql</schemaFile>\n                            \x3c!-- optional configuration below --\x3e\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),(0,o.kt)("h2",{id:"generating-test-client"},"Generating Test Client"),(0,o.kt)("p",null,"This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFile"),". Classes\nare generated under specified ",(0,o.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-test-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-test-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"This will process all GraphQL queries located under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."))),(0,o.kt)("h2",{id:"minimal-configuration-example"},"Minimal Configuration Example"),(0,o.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated</packageName>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"introspect-schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-client")," goals are bound to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," Maven lifecycle phase.\nAs opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\nMojos will be executed in the order they are defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," build file."))),(0,o.kt)("h2",{id:"complete-configuration-example"},"Complete Configuration Example"),(0,o.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>download-sdl</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/sdl</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            \x3c!-- optional configuration below --\x3e\n                            <schemaFile>${project.build.directory}/mySchema.graphql</schemaFile>\n                            <allowDeprecatedFields>true</allowDeprecatedFields>\n                            <customScalars>\n                                <customScalar>\n                                    \x3c!-- custom scalar UUID type --\x3e\n                                    <scalar>UUID</scalar>\n                                    \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                                    <type>java.util.UUID</type>\n                                    \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                                       used to convert to/from raw JSON and scalar type --\x3e\n                                    <converter>com.example.UUIDScalarConverter</converter>\n                                </customScalar>\n                            </customScalars>\n                            <headers>\n                                <X-Custom-Header>My-Custom-Header</X-Custom-Header>\n                            </headers>\n                            <timeoutConfiguration>\n                                \x3c!-- timeout values in milliseconds --\x3e\n                                <connect>1000</connect>\n                                <read>30000</read>\n                            </timeoutConfiguration>\n                            <queryFiles>\n                                <queryFile>${project.basedir}/src/main/resources/queries/MyQuery.graphql</queryFile>\n                            </queryFiles>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),(0,o.kt)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),(0,o.kt)("p",null,"In order to generate GraphQL clients targeting multiple endpoints, we need to configure separate executions targeting\ndifferent endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <id>generate-first-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated.first</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/FirstQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-second-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8081/graphql</endpoint>\n                <packageName>com.example.generated.second</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/SecondQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),(0,o.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo will scan your\nclasspath looking for classes implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,o.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this mojo requires users to provide a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),(0,o.kt)("p",null,"Plugin will default to use ",(0,o.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-federated-hooks-provider</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n</plugin>\n")))}d.isMDXComponent=!0}}]);