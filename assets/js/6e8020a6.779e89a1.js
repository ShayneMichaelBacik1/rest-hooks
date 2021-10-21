"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68870:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>i,default:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={id:"useresourcenew",title:"useResourceNew()",original_id:"useresourcenew"},o=void 0,l={unversionedId:"api/useresourcenew",id:"version-4.1/api/useresourcenew",isDocsHomePage:!1,title:"useResourceNew()",description:"### Rest Hooks 3.0",source:"@site/versioned_docs/version-4.1/api/useResourceNew.md",sourceDirName:"api",slug:"/api/useresourcenew",permalink:"/docs/4.1/api/useresourcenew",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResourceNew.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"useresourcenew",title:"useResourceNew()",original_id:"useresourcenew"}},i=[{value:"Single",id:"single",children:[],level:2},{value:"List",id:"list",children:[],level:2},{value:"Parallel",id:"parallel",children:[],level:2},{value:"Sequential",id:"sequential",children:[],level:2},{value:"Paginated data",id:"paginated-data",children:[],level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[],level:2}],u={toc:i};function c({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceNew(fetchShape: ReadShape, params: object | null):\n  Denormalized<typeof fetchShape.schema>;\n\nfunction useResourceNew(...[fetchShape: ReadShape, params: object | null]):\n  Denormalized<typeof fetchShape.schema>[];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceNew<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params, Body>, params: Params | null): Denormalized<S>;\n\nfunction useResourceNew<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(...[fetchShape: ReadShape<S, Params, Body>, params: Params | null]): Denormalized<S>[];\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30"},"Rest Hooks 3.0"),(0,r.kt)("p",{parentName:"blockquote"},"This is the future default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"useResource()")," in version 3.0."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"3.0 will keep the legacy version as ",(0,r.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")),(0,r.kt)("li",{parentName:"ul"},"3.1 will remove both ",(0,r.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"useResourceNew()"),", leaving this behavior in ",(0,r.kt)("inlineCode",{parentName:"li"},"useResource()")))),(0,r.kt)("p",null,"Excellent for retrieving the data you need."),(0,r.kt)("p",null,"Cache policy is ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render and when parameters change"),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throws error to be ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/guides/network-errors"},"caught")," by ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,r.kt)("li",{parentName:"ul"},"While Loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/guides/loading-state"},"Suspend rendering")," otherwise")))),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResourceNew(PostResource.detailShape(), { id });\n  // post as PostResource\n}\n")),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResourceNew(PostResource.listShape(), {});\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"parallel"},"Parallel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResourceNew(\n    [UserResource.detailShape(), { id: userId }],\n    [PostResource.listShape(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"sequential"},"Sequential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResourceNew(PostResource.detailShape(), { id });\n  // post as PostResource\n  const author = useResourceNew(UserResource.detailShape(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,r.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.getEntitySchema()], nextPage: '', lastPage: '' },\n    };\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useResourceNew(\n    PaginatedPostResource.listShape(),\n    { page },\n  );\n  // posts as PaginatedPostResource[]\n}\n")),(0,r.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detailShape()"),(0,r.kt)("li",{parentName:"ul"},"listShape()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape"},"FetchShape")," as well."))}c.isMDXComponent=!0}}]);