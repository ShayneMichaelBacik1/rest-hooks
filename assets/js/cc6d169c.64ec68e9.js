"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[11328],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const l={title:"useCacheNew()",id:"useCacheNew",original_id:"useCacheNew"},s=void 0,i={unversionedId:"api/useCacheNew",id:"version-4.0/api/useCacheNew",title:"useCacheNew()",description:"### Rest Hooks 3.0",source:"@site/versioned_docs/version-4.0/api/useCacheNew.md",sourceDirName:"api",slug:"/api/useCacheNew",permalink:"/docs/4.0/api/useCacheNew",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useCacheNew.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useCacheNew()",id:"useCacheNew",original_id:"useCacheNew"}},o={},u=[{value:"Example",id:"example",level:2},{value:"Using a type guard to deal with null",id:"using-a-type-guard-to-deal-with-null",level:3},{value:"Paginated data",id:"paginated-data",level:3},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCacheNew(\n  fetchShape: ReadShape,\n  params: object | null,\n): Denormalized<typeof fetchShape.schema> | null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCacheNew<Params extends Readonly<object>, S extends Schema>(\n  fetchShape: Pick<ReadShape<S, Params>, 'schema' | 'getFetchKey'>,\n  params: Params | null,\n): Denormalized<S> | null;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30"},"Rest Hooks 3.0"),(0,r.kt)("p",{parentName:"blockquote"},"This is the future default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache()")," in version 3.0."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"3.0 will keep the legacy version as ",(0,r.kt)("inlineCode",{parentName:"li"},"useCacheLegacy()")),(0,r.kt)("li",{parentName:"ul"},"3.1 will remove both ",(0,r.kt)("inlineCode",{parentName:"li"},"useCacheLegacy()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"useCacheNew()"),", leaving this behavior in ",(0,r.kt)("inlineCode",{parentName:"li"},"useCache()")))),(0,r.kt)("p",null,"Excellent to use data in the normalized cache without fetching."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},"null otherwise"))),(0,r.kt)("li",{parentName:"ul"},"While loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},"null otherwise")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"using-a-type-guard-to-deal-with-null"},"Using a type guard to deal with null"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useCacheNew(PostResource.detailShape(), { id });\n  // post as PostResource | null\n  if (!post) return null;\n  // post as PostResource (typeguarded)\n  // ...render stuff here\n}\n")),(0,r.kt)("h3",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.getEntitySchema()], nextPage: '', lastPage: '' },\n    };\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useCacheNew(\n    PaginatedPostResource.listShape(),\n    { page },\n  );\n  // posts as PaginatedPostResource[] | null\n  if (!posts) return null;\n  // posts as PaginatedPostResource[] (typeguarded)\n  // ...render stuff here\n}\n")),(0,r.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detailShape()"),(0,r.kt)("li",{parentName:"ul"},"listShape()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/FetchShape"},"FetchShape")," as well."))}c.isMDXComponent=!0}}]);