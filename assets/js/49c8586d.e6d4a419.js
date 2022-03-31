"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[34257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(83117),a=n(67294),r=n(72389),s=n(51548),i=n(86010);const l="tabItem_LplD";function d(e){var t,n;const{lazy:r,block:d,defaultValue:p,values:c,groupId:u,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),g=(0,s.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:A}=(0,s.UB)(),[b,N]=(0,a.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=u){const e=y[u];null!=e&&e!==b&&k.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=v.indexOf(t),o=k[n].value;o!==b&&(w(t),N(o),null!=u&&A(u,o))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=v.indexOf(e.currentTarget)+1;n=v[t]||v[0];break}case"ArrowLeft":{const t=v.indexOf(e.currentTarget)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},m)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>v.push(e),onKeyDown:T,onFocus:E,onClick:E},r,{className:(0,i.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":b===t})}),n??t)}))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function p(e){const t=(0,r.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(9877),a=n(58215),r=n(67294);function s(e){let{children:t}=e;return r.createElement(o.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(a.Z,{value:"ts"},t[0]),r.createElement(a.Z,{value:"js"},t[1]))}},73656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(83117),a=(n(67294),n(3905)),r=n(9877),s=n(58215),i=n(70523);const l={title:"Introduction",slug:"/"},d=void 0,p={unversionedId:"introduction",id:"version-5.0/introduction",title:"Introduction",description:"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,",source:"@site/versioned_docs/version-5.0/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/5.0/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/introduction.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1643609655,formattedLastUpdatedAt:"1/31/2022",frontMatter:{title:"Introduction",slug:"/"},sidebar:"version-5.0/docs",next:{title:"Installation",permalink:"/docs/5.0/getting-started/installation"}},c={},u=[{value:"Endpoint",id:"endpoint",level:2},{value:"Co-locate data dependencies",id:"co-locate-data-dependencies",level:2},{value:"Async Fallbacks with Boundaries",id:"async-fallbacks-with-boundaries",level:2},{value:"Mutations",id:"mutations",level:2},{value:"Entities",id:"entities",level:3},{value:"Schema",id:"schema",level:3},{value:"Optimistic Updates",id:"optimistic-updates",level:3},{value:"Protocol specific patterns",id:"protocol-specific-patterns",level:2},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:3},{value:"@rest-hooks/graphql",id:"rest-hooksgraphql",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Mock data",id:"mock-data",level:2},{value:"Demo",id:"demo",level:2}],m=(h="NetworkErrorBoundary",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const k={toc:u};function g(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,\nit is not a networking stack for things like minecraft game servers."),(0,a.kt)("p",null,"A good way to tell if this could be useful is if you use something similar to ",(0,a.kt)("strong",{parentName:"p"},"any")," of the following to build data-driven applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://restfulapi.net/"},"REST"),", ",(0,a.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL"),", ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),", ",(0,a.kt)("a",{parentName:"li",href:"https://jsonapi.org/"},"JSON:API")),(0,a.kt)("li",{parentName:"ul"},"Transport protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP"),", ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/guides/mocking-unfinished"},"local")),(0,a.kt)("li",{parentName:"ul"},"Async storage engines like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDb"),", ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/asyncstorage"},"AsyncStorage"))),(0,a.kt)("p",null,"Rest Hooks focuses on solving the following challenges in a declarative composable manner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asynchronous")," behavior and race conditions"),(0,a.kt)("li",{parentName:"ul"},"Global ",(0,a.kt)("strong",null,"consistency and integrity")," of ",(0,a.kt)("abbr",{title:"changing"},"dynamic")," data"),(0,a.kt)("li",{parentName:"ul"},"High ",(0,a.kt)("strong",{parentName:"li"},"performance")," at scale")),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/endpoint"},"Endpoints")," describe an asynchronous ",(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),"."),(0,a.kt)("p",null,"These define both ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," behaviors, as well as (optionally) ",(0,a.kt)("inlineCode",{parentName:"p"},"typing"),"."),(0,a.kt)(i.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{18}","{18}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8}","{8}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,a.kt)("p",null,"By ",(0,a.kt)("em",{parentName:"p"},"decoupling")," endpoint definitions from their usage, we are able to reuse them in many contexts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy reuse in different ",(0,a.kt)("strong",{parentName:"li"},"components")," eases co-locating data dependencies"),(0,a.kt)("li",{parentName:"ul"},"Reuse with different ",(0,a.kt)("strong",{parentName:"li"},"hooks")," allows different behaviors with the same endpoint"),(0,a.kt)("li",{parentName:"ul"},"Reuse across different ",(0,a.kt)("strong",{parentName:"li"},"platforms")," like React Native, React web, or even beyond React in Angular, Svelte, Vue, or Node"),(0,a.kt)("li",{parentName:"ul"},"Published as ",(0,a.kt)("strong",{parentName:"li"},"packages")," independent of their consumption")),(0,a.kt)("h2",{id:"co-locate-data-dependencies"},"Co-locate data dependencies"),(0,a.kt)("p",null,"Add one-line ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency"},"data hookup")," in the components that need it with ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useresource"},"useResource()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import { useResource } from 'rest-hooks';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid prop drilling"),(0,a.kt)("li",{parentName:"ul"},"Data updates only re-render components that need to")),(0,a.kt)("h2",{id:"async-fallbacks-with-boundaries"},"Async Fallbacks with Boundaries"),(0,a.kt)("p",null,"Unify and reuse ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency#async-fallbacks-loadingerror"},"loading and error fallbacks")," with ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"Suspense")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6-7,10-11}","{6-7,10-11}":!0},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nfunction App() {\n  return (\n    <Suspense fallback=\"loading\">\n      <NetworkErrorBoundary>\n        <AnotherRoute />\n        <TodoDetail id={5} />\n      </NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency#stateful"},"Non-Suspense fallback handling")),(0,a.kt)("h2",{id:"mutations"},"Mutations"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)(i.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData): Promise<Todo> =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoUpdate = ({ id }, body) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n")))),(0,a.kt)("p",null,"Instead of just calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," endpoint with our data, we want to ensure\n",(0,a.kt)("strong",{parentName:"p"},"all")," co-located usages of the todo being edited are updated. This avoid both the complexity and performance\nproblems of attempting to cascade endpoint refreshes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")," enhances our function, integrating the Rest Hooks store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nconst update = useFetcher(todoUpdate);\nreturn <ArticleForm onSubmit={data => update({ id }, data)} />;\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Tracking imperative loading/error state")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useLoading"},"useLoading()")," enhances async functions by tracking their loading and error states."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nconst [update, loading, error] = useLoading(useFetcher(todoUpdate));\n"))),(0,a.kt)("p",null,"However, there is still one issue. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoint are not aware of each other\nso how can Rest Hooks know to update todoDetail with this data?"),(0,a.kt)("h3",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/entity#entities"},"Entities")," to our endpoint definition tells Rest Hooks\nhow to extract and find a given piece of data no matter where it is used. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Entity#pk"},"pk()")," (primary key)\nmethod is used as a key in a lookup table."),(0,a.kt)(r.Z,{defaultValue:"Entity",values:[{label:"Entity",value:"Entity"},{label:"todoDetail",value:"todoDetail"},{label:"todoUpdate",value:"todoUpdate"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nexport class Todo extends Entity {\n  readonly userId: number = 0;\n  readonly id: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n"))),(0,a.kt)(s.Z,{value:"todoDetail",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{13}","{13}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  schema: Todo,\n  sideEffect: true,\n});\n"))),(0,a.kt)(s.Z,{value:"todoUpdate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{14}","{14}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  schema: Todo,\n  sideEffect: true,\n});\n")))),(0,a.kt)("h3",{id:"schema"},"Schema"),(0,a.kt)("p",null,"What if our entity is not the top level item? Here we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList"),"\nendpoint with ",(0,a.kt)("inlineCode",{parentName:"p"},"[Todo]")," as its schema. ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/entity"},"Schemas")," tell Rest Hooks ",(0,a.kt)("em",{parentName:"p"},"where")," to find\nthe Entities. By placing inside a list, Rest Hooks knows to expect a response\nwhere each item of the list is the entity specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{7}","{7}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoList = (params: any) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.json());\n\nconst todoList = new Endpoint(fetchTodoList, {\n  schema: [Todo],\n  sideEffect: true,\n});\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/entity"},"Schemas")," also automatically infer and enforce the response type, ensuring\nthe variable ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," will be typed precisely. If the API responds in another manner\nthe hook with throw instead, triggering the ",(0,a.kt)("inlineCode",{parentName:"p"},"error fallback")," specified in ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/NetworkErrorBoundary"},"\\",(0,a.kt)(m,{mdxType:"NetworkErrorBoundary"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import { useResource } from 'rest-hooks';\n\nexport default function TodoListComponent() {\n  const todos = useResource(todoList, {});\n\n  return (\n    <div>\n      {todos.map(todo => (\n        <TodoListItem key={todo.pk()} todo={todo} />\n      ))}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"This also guarantees data consistency (as well as referential equality) between ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoints, as well\nas any mutations that occur."),(0,a.kt)("h3",{id:"optimistic-updates"},"Optimistic Updates"),(0,a.kt)("p",null,"By using the response of the mutation call to update the Rest Hooks store, we were able to\nkeep our components updated automatically and only after one request."),(0,a.kt)("p",null,"However, after toggling todo.completed, this is just too slow! No worries, ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/optimistic-updates"},"optimisticUpdate")," tells\nRest Hooks what response it ",(0,a.kt)("em",{parentName:"p"},"expects")," to receive from the mutation call, Rest Hooks\ncan ",(0,a.kt)("strong",{parentName:"p"},"immediately")," update ",(0,a.kt)("strong",{parentName:"p"},"all")," components using the relevant entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\ntodoUpdate = todoUpdate.extend({\n  optimisticUpdate,\n});\n")),(0,a.kt)("p",null,"Rest Hooks ensures data integrity against any possible networking failure or race condition, so don't\nworry about network failures, multiple mutation calls editing the same data, or other common\nproblems in asynchronous programming."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{16}","{16}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  sideEffect: true,\n  schema: Todo,\n  optimisticUpdate,\n});\n\nconst optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\n"))),(0,a.kt)("h2",{id:"protocol-specific-patterns"},"Protocol specific patterns"),(0,a.kt)("p",null,"At this point we've defined ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate"),". You might have noticed\nthat these endpoint definitions share some logic and information. For this reason Rest Hooks\nencourages extracting shared logic among endpoints."),(0,a.kt)("h3",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,a.kt)("p",null,"One common pattern is having endpoints Create Read Update Delete (CRUD) for a given resource.\nUsing ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/rest/usage"},"docs"),") simplifies these patterns."),(0,a.kt)("p",null,"Instead of defining an ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Entity"},"Entity"),", we define a ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource"},"Resource"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"\nextends from ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", so we still need the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definiton."),(0,a.kt)("p",null,"In addition, providing ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#static-urlroot-string"},"static urlRoot")," enable ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#endpoints"},"6 Endpoints"),"\nwith easy logic sharing and overrides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/rest/usage"},"Introduction to Resource")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Resource Endpoints")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// read\n// GET https://jsonplaceholder.typicode.com/todos/5\nconst todo = useResource(TodoResource.detail(), { id: 5 });\n\n// GET https://jsonplaceholder.typicode.com/todos\nconst todos = useResource(TodoResource.list(), {});\n\n// mutate\n// POST https://jsonplaceholder.typicode.com/todos\nconst create = useFetcher(TodoResource.create());\ncreate({}, { title: 'my todo' });\n\n// PUT https://jsonplaceholder.typicode.com/todos/5\nconst update = useFetcher(TodoResource.update());\nupdate({ id: 5 }, { title: 'my todo' });\n\n// PATCH https://jsonplaceholder.typicode.com/todos/5\nconst partialUpdate = useFetcher(TodoResource.partialUpdate());\npartialUpdate({ id: 5 }, { title: 'my todo' });\n\n// DELETE https://jsonplaceholder.typicode.com/todos/5\nconst del = useFetcher(TodoResource.delete());\ndel({ id: 5 });\n"))),(0,a.kt)("h3",{id:"rest-hooksgraphql"},"@rest-hooks/graphql"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org"},"GraphQL")," support ships in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/graphql"},"@rest-hooks/graphql"),"\n(",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/graphql/usage"},"docs"),") package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GQLEntity, GQLEndpoint } from '@rest-hooks/graphql';\n\nclass User extends GQLEntity {\n  readonly name: string = '';\n  readonly email: string = '';\n}\n\nconst gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\n\nconst userDetail = gql.query(\n  `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { user } = useResource(userDetail, { name: 'Fong' });\n")),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("img",{src:n(38123).Z,width:"75",height:"75",alt:"redux-devtools",style:{float:"left",marginRight:"var(--ifm-paragraph-margin-bottom)"}}),(0,a.kt)("p",null,"Add the Redux DevTools for\n",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor\n",(0,a.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")),(0,a.kt)("p",null,"Click the icon to open the ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/debugging"},"inspector"),", which allows you to observe dispatched actions,\ntheir effect on the cache state as well as current cache state."),(0,a.kt)("h2",{id:"mock-data"},"Mock data"),(0,a.kt)("p",null,"Writing ",(0,a.kt)("inlineCode",{parentName:"p"},"FixtureEndpoint"),"s is a standard format that can be used across all ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," helpers as well as your own uses."),(0,a.kt)(r.Z,{defaultValue:"detail",values:[{label:"Detail",value:"detail"},{label:"Update",value:"update"},{label:"404 error",value:"detail404"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"detail",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { FixtureEndpoint } from '@rest-hooks/test';\nimport { todoDetail } from './todo';\n\nconst todoDetailFixture: FixtureEndpoint = {\n  endpoint: todoDetail,\n  args: [{ id: 5 }] as const,\n  response: {\n    id: 5,\n    title: 'Star Rest Hooks on Github',\n    userId: 11,\n    completed: false,\n  },\n};\n"))),(0,a.kt)(s.Z,{value:"update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { FixtureEndpoint } from '@rest-hooks/test';\nimport { todoUpdate } from './todo';\n\nconst todoUpdateFixture: FixtureEndpoint = {\n  endpoint: todoUpdate,\n  args: [{ id: 5 }, { completed: true }] as const,\n  response: {\n    id: 5,\n    title: 'Star Rest Hooks on Github',\n    userId: 11,\n    completed: true,\n  },\n};\n"))),(0,a.kt)(s.Z,{value:"detail404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { FixtureEndpoint } from '@rest-hooks/test';\nimport { todoDetail } from './todo';\n\nconst todoDetail404Fixture: FixtureEndpoint = {\n  endpoint: todoDetail,\n  args: [{ id: 9001 }] as const,\n  response: { status: 404, response: 'Not found' },\n  error: true,\n};\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/guides/storybook"},"Mock data for storybook")," with ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/api/MockResolver"},"MockResolver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/guides/unit-testing-hooks"},"Test hooks")," with ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/guides/unit-testing-components"},"Test components")," with ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/api/MockResolver"},"MockResolver")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/api/mockInitialState"},"mockInitialState()"))),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"See this all in action in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/tree/master/examples/todo-app"},"examples/todo-app")),(0,a.kt)("p",null,"Or a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/tree/master/examples/github-app"},"github api demo")))}g.isMDXComponent=!0},38123:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"}}]);