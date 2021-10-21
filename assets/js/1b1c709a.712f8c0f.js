"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},41395:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),i=n(72389),s=n(80944),l=n(83039),o=n(86010);const p="tabItem_1uMI";function u(e){var t,n;const{lazy:a,block:i,defaultValue:u,values:d,groupId:c,className:h}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??m.map((({props:{value:e,label:t}})=>({value:e,label:t}))),f=(0,l.lx)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.Z)(),[b,N]=(0,r.useState)(y),R=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=c){const e=g[c];null!=e&&e!==b&&k.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=R.indexOf(t),a=k[n].value;a!==b&&(w(t),N(a),null!=c&&v(c,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;n=R[t]||R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;n=R[t]||R[R.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},k.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,o.Z)("tabs__item",p,{"tabs__item--active":b===e}),key:e,ref:e=>R.push(e),onKeyDown:E,onFocus:T,onClick:T},t??e)))),a?(0,r.cloneElement)(m.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(79443);const i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(41395),r=n(58215),i=n(67294);function s({children:e}){return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},e[0]),i.createElement(r.Z,{value:"js"},e[1]))}},9325:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>o,toc:()=>p,default:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(70523);const s={id:"resource",title:"Resource"},l=void 0,o={unversionedId:"api/resource",id:"version-6.0/api/resource",isDocsHomePage:!1,title:"Resource",description:"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.",source:"@site/versioned_docs/version-6.0/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/6.0/api/resource",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Resource.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"resource",title:"Resource"},sidebar:"version-6.0/docs",previous:{title:"Endpoint",permalink:"/docs/6.0/api/Endpoint"},next:{title:"Index",permalink:"/docs/6.0/api/Index"}},p=[{value:"Static",id:"static",children:[],level:3},{value:"Instance",id:"instance",children:[],level:3},{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",children:[],level:3}],level:2},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",children:[{value:"pk: (parent?: any, key?: string) =&gt; string",id:"pk-parent-any-key-string--string",children:[{value:"Multi-column primary key:",id:"multi-column-primary-key",children:[],level:4},{value:"undefined value",id:"undefined-value",children:[],level:4},{value:"Other uses",id:"other-uses",children:[],level:4},{value:"Singleton Resources",id:"singleton-resources",children:[],level:4}],level:3},{value:"static urlRoot: string",id:"static-urlroot-string",children:[],level:3},{value:"static get key(): string",id:"static-get-key-string",children:[],level:3}],level:2},{value:"Static network methods and properties",id:"static-network-methods-and-properties",children:[{value:"static url&lt;T extends typeof Resource&gt;(urlParams: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;) =&gt; string",id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string",children:[],level:3},{value:"static listUrl(searchParams: Readonly&lt;Record&lt;string, string&gt;&gt;) =&gt; string",id:"static-listurlsearchparams-readonlyrecordstring-string--string",children:[],level:3},{value:"static fetch(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;any&gt;",id:"static-fetchinput-requestinfo-init-requestinit--promiseany",children:[],level:3},{value:"static fetchResponse(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;Response&gt;",id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse",children:[],level:3},{value:"static useFetchInit(init: RequestInit): RequestInit",id:"static-usefetchinitinit-requestinit-requestinit",children:[],level:3},{value:"static getFetchInit(init: RequestInit): RequestInit",id:"static-getfetchinitinit-requestinit-requestinit",children:[],level:3},{value:"static getEndpointExtra() =&gt; EndpointExtraOptions | undefined",id:"static-getendpointextra--endpointextraoptions--undefined",children:[],level:3}],level:2},{value:"Endpoints",id:"endpoints",children:[{value:"detail(): Endpoint",id:"detail-endpoint",children:[{value:"Implementation:",id:"implementation",children:[],level:4}],level:3},{value:"list(): Endpoint",id:"list-endpoint",children:[{value:"Implementation:",id:"implementation-1",children:[],level:4}],level:3},{value:"create(): Endpoint",id:"create-endpoint",children:[{value:"Implementation:",id:"implementation-2",children:[],level:4}],level:3},{value:"update(): Endpoint",id:"update-endpoint",children:[{value:"Implementation:",id:"implementation-3",children:[],level:4}],level:3},{value:"partialUpdate(): Endpoint",id:"partialupdate-endpoint",children:[{value:"Implementation:",id:"implementation-4",children:[],level:4}],level:3},{value:"delete(): Endpoint",id:"delete-endpoint",children:[{value:"Implementation:",id:"implementation-5",children:[],level:4}],level:3}],level:2}],u={toc:p};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is an ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity")," with multiple ",(0,r.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse."),(0,r.kt)("p",null,"For other patterns, feel free to use ",(0,r.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s on their own or in any other way you see fit."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity")),(0,r.kt)("p",null,"Package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,r.kt)("p",null,"There are two sides to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," definition - the static and instance side."),(0,r.kt)("h3",{id:"static"},"Static"),(0,r.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint"),"s, which\ntell the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/useresource"},"hooks")," how to process requests. Endpoints are provided for the\ncommon ",(0,r.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,r.kt)("p",null,"Resource extends from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"),", which includes many static methods defining how to process\nnetwork data to ensure performance and consistency. ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"Deserilization"),"\nfor instance can be done using the ",(0,r.kt)("a",{parentName:"p",href:"./Entity#static-schema--k-keyof-this-schema-"},"static schema"),"."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as all the data members\nare immutable (this library enforces that)!"),(0,r.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,r.kt)("p",null,"A final note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,r.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,r.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,r.kt)("h3",{id:"pk-parent-any-key-string--string"},"pk: (parent?: any, key?: string) => string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk(parent?: any, key?: string) {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"./api/resource#static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Resource.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,r.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,r.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"static-urlroot-string"},"static urlRoot: string"),(0,r.kt)("p",null,"Used to build url patterns in ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,r.kt)("a",{parentName:"p",href:"#static-get-key-string"},"key")," so typically you'll want this to be globally unique per Resource."),(0,r.kt)("h3",{id:"static-get-key-string"},"static get key(): string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,r.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic get key(): string {\n  return this.urlRoot;\n}\n")),(0,r.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,r.kt)("p",null,"These are the basic building blocks used to compile the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint")," below."),(0,r.kt)("h3",{id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"static url\\<T extends typeof Resource",">","(urlParams: Partial\\<AbstractInstanceType\\<T",">",">",") => string"),(0,r.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,r.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),", ",(0,r.kt)("a",{parentName:"p",href:"#update-endpoint"},"update()"),",\n",(0,r.kt)("a",{parentName:"p",href:"#partialupdate-endpoint"},"partialUpdate()"),", and ",(0,r.kt)("a",{parentName:"p",href:"#delete-endpoint"},"delete()")),(0,r.kt)("h3",{id:"static-listurlsearchparams-readonlyrecordstring-string--string"},"static listUrl(searchParams: Readonly\\<Record\\<string, string>>) => string"),(0,r.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()")," and ",(0,r.kt)("a",{parentName:"p",href:"#create-endpoint"},"create()")),(0,r.kt)("h3",{id:"static-fetchinput-requestinfo-init-requestinit--promiseany"},"static fetch(input: RequestInfo, init: RequestInit) => Promise\\<any",">"),(0,r.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,r.kt)("h3",{id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse"},"static fetchResponse(input: RequestInfo, init: RequestInit) => Promise\\<Response",">"),(0,r.kt)("p",null,"Used in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,r.kt)("h3",{id:"static-usefetchinitinit-requestinit-requestinit"},"static useFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called in endpoint methods (",(0,r.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()"),", ",(0,r.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),"), which allows for hooks that\nuse React context."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h3",{id:"static-getfetchinitinit-requestinit-requestinit"},"static getFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called during the fetch callback. Don't use hooks here."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h3",{id:"static-getendpointextra--endpointextraoptions--undefined"},"static getEndpointExtra() => EndpointExtraOptions | undefined"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint#dataexpirylength-number"},"Returns")," the default request options for this resource. By default this returns undefined"),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"These provide the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"endpoints"),"s common in ",(0,r.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,r.kt)("h3",{id:"detail-endpoint"},"detail(): Endpoint"),(0,r.kt)("p",null,"A GET request using standard ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static detail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"list-endpoint"},"list(): Endpoint"),(0,r.kt)("p",null,"A GET request using ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static list<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"create-endpoint"},"create(): Endpoint"),(0,r.kt)("p",null,"A POST request sending a payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static create<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"update-endpoint"},"update(): Endpoint"),(0,r.kt)("p",null,"A PUT request sending a payload to a ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static update<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"partialupdate-endpoint"},"partialUpdate(): Endpoint"),(0,r.kt)("p",null,"A PATCH request sending a partial payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static partialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"delete-endpoint"},"delete(): Endpoint"),(0,r.kt)("p",null,"A DELETE request sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static delete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}d.isMDXComponent=!0}}]);