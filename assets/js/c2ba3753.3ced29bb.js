"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[32081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(83117),a=(n(67294),n(3905));const r={title:"Introduction"},s=void 0,i={unversionedId:"getting-started/introduction",id:"version-4.1/getting-started/introduction",title:"Introduction",description:"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,",source:"@site/versioned_docs/version-4.1/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/4.1/getting-started/introduction",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/introduction.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Introduction"}},p={},d=[{value:"Endpoint",id:"endpoint",level:2},{value:"Colocate data dependencies",id:"colocate-data-dependencies",level:2},{value:"Async Fallbacks with Boundaries",id:"async-fallbacks-with-boundaries",level:2},{value:"Mutations",id:"mutations",level:2},{value:"Entities",id:"entities",level:3},{value:"Schema",id:"schema",level:3},{value:"Optimistic Updates",id:"optimistic-updates",level:3},{value:"Protocol specific patterns",id:"protocol-specific-patterns",level:2},{value:"Demo",id:"demo",level:2}],l=(c="NetworkErrorBoundary",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,\nit is not a networking stack for things like minecraft game servers."),(0,a.kt)("p",null,"A good way to tell if this could be useful is if you use something similar to ",(0,a.kt)("strong",{parentName:"p"},"any")," of the following to build data-driven applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://restfulapi.net/"},"REST"),", ",(0,a.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL"),", ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),", ",(0,a.kt)("a",{parentName:"li",href:"https://jsonapi.org/"},"JSON:API")),(0,a.kt)("li",{parentName:"ul"},"Transport protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP"),", ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", ",(0,a.kt)("a",{parentName:"li",href:"../guides/mocking-unfinished"},"local")),(0,a.kt)("li",{parentName:"ul"},"Async storage engines like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDb"),", ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/asyncstorage"},"AsyncStorage"))),(0,a.kt)("p",null,"Rest Hooks focuses on solving the following challenges in a declarative composable manner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asynchronous")," behavior and race conditions"),(0,a.kt)("li",{parentName:"ul"},"Dynamic (changing) data ",(0,a.kt)("strong",{parentName:"li"},"consistency and integrity")),(0,a.kt)("li",{parentName:"ul"},"High ",(0,a.kt)("strong",{parentName:"li"},"performance")," at scale")),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./endpoint"},"Endpoints")," describe an asynchronous ",(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),"."),(0,a.kt)("p",null,"These define both ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," behaviors, as well as (optionally) ",(0,a.kt)("inlineCode",{parentName:"p"},"typing"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,a.kt)("p",null,"By ",(0,a.kt)("em",{parentName:"p"},"decoupling")," endpoint definitions from their usage, we are able to reuse them in many contexts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy reuse in different ",(0,a.kt)("strong",{parentName:"li"},"components")," eases colocating data dependencies"),(0,a.kt)("li",{parentName:"ul"},"Reuse with different ",(0,a.kt)("strong",{parentName:"li"},"hooks")," allows different behaviors with the same endpoint"),(0,a.kt)("li",{parentName:"ul"},"Reuse across different ",(0,a.kt)("strong",{parentName:"li"},"platforms")," like React Native, React web, or even beyond React in Angular, Svelte, Vue, or Node"),(0,a.kt)("li",{parentName:"ul"},"Published as ",(0,a.kt)("strong",{parentName:"li"},"packages")," independent of their consumption")),(0,a.kt)("h2",{id:"colocate-data-dependencies"},"Colocate data dependencies"),(0,a.kt)("p",null,"Add one-line ",(0,a.kt)("a",{parentName:"p",href:"./data-dependency"},"data hookup")," in the components that need it with ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid prop drilling"),(0,a.kt)("li",{parentName:"ul"},"Data updates only re-render components that need to")),(0,a.kt)("h2",{id:"async-fallbacks-with-boundaries"},"Async Fallbacks with Boundaries"),(0,a.kt)("p",null,"Unify and reuse ",(0,a.kt)("a",{parentName:"p",href:"./data-dependency#async-fallbacks-loadingerror"},"loading and error fallbacks")," with ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"Suspense")," and ",(0,a.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nfunction App() {\n  return (\n    <Suspense fallback=\"loading\">\n      <NetworkErrorBoundary>\n        <AnotherRoute />\n        <TodoDetail id={5} />\n      </NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./data-dependency#stateful"},"Non-Suspense fallback handling")),(0,a.kt)("h2",{id:"mutations"},"Mutations"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoUpdate = ({ id }, body) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData): Promise<Todo> =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n"))),(0,a.kt)("p",null,"Instead of just calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," endpoint with our data, we want to ensure\n",(0,a.kt)("strong",{parentName:"p"},"all")," colocated usages of the todo being edited are updated. This avoid both the complexity and performance\nproblems of attempting to cascade endpoint refreshes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher")," enhances our function, integrating the Rest Hooks store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nconst update = useFetcher(todoUpdate);\nreturn <ArticleForm onSubmit={data => update({ id }, data)} />;\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Tracking imperative loading/error")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useLoading"},"useLoading()")," enhances async functions by tracking their loading and error states."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nconst [update, loading, error] = useLoading(useFetcher(todoUpdate));\n"))),(0,a.kt)("p",null,"However, there is still one issue. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoint are not aware of each other\nso how can Rest Hooks know to update todoDetail with this data?"),(0,a.kt)("h3",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("a",{parentName:"p",href:"./schema#entities"},"Entities")," to our endpoint definition tells Rest Hooks\nhow to extract and find a given piece of data no matter where it is used. The ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity#abstract-pk-parent-any-key-string-string--number--undefined"},"pk()")," (primary key)\nmethod is used as a key in a lookup table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nexport class Todo extends Entity {\n  readonly userId: number = 0;\n  readonly id: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  schema: Todo,\n  sideEffect: true,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  schema: Todo,\n  sideEffect: true,\n});\n")),(0,a.kt)("h3",{id:"schema"},"Schema"),(0,a.kt)("p",null,"What if our entity is not the top level item? Here we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList"),"\nendpoint with ",(0,a.kt)("inlineCode",{parentName:"p"},"[Todo]")," as its schema. ",(0,a.kt)("a",{parentName:"p",href:"./schema"},"Schemas")," tell Rest Hooks ",(0,a.kt)("em",{parentName:"p"},"where")," to find\nthe Entities. By placing inside a list, Rest Hooks knows to expect a response\nwhere each item of the list is the entity specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoList = (params: any) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.json());\n\nconst todoList = new Endpoint(fetchTodoList, {\n  schema: [Todo],\n  sideEffect: true,\n});\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./schema"},"Schemas")," also automatically infer and enforce the response type, ensuring\nthe variable ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," will be typed precisely. If the API responds in another manner\nthe hook with throw instead, triggering the ",(0,a.kt)("inlineCode",{parentName:"p"},"error fallback")," specified in ",(0,a.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"\\",(0,a.kt)(l,{mdxType:"NetworkErrorBoundary"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nexport default function TodoListComponent() {\n  const todos = useResource(todoList, {});\n\n  return (\n    <div>\n      {todos.map(todo => (\n        <TodoListItem key={todo.pk()} todo={todo} />\n      ))}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"This also guarantees data consistency (as well as referential equality) between ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoints, as well\nas any mutations that occur."),(0,a.kt)("h3",{id:"optimistic-updates"},"Optimistic Updates"),(0,a.kt)("p",null,"By using the response of the mutation call to update the Rest Hooks store, we were able to\nkeep our components updated automatically and only after one request."),(0,a.kt)("p",null,"However, after toggling todo.completed, this is just too slow! No worries, ",(0,a.kt)("a",{parentName:"p",href:"../guides/optimistic-updates"},"optimisticUpdate")," tells\nRest Hooks what response it ",(0,a.kt)("em",{parentName:"p"},"expects")," to receive from the mutation call, Rest Hooks\ncan ",(0,a.kt)("strong",{parentName:"p"},"immediately")," update ",(0,a.kt)("strong",{parentName:"p"},"all")," components using the relevant entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\ntodoUpdate = todoUpdate.extend({\n  optimisticUpdate,\n});\n")),(0,a.kt)("p",null,"Rest Hooks ensures data integrity against any possible networking failure or race condition, so don't\nworry about network failures, multiple mutation calls editing the same data, or other common\nproblems in asynchronous programming."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  sideEffect: true,\n  schema: Todo,\n  optimisticUpdate,\n});\n\nconst optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\n"))),(0,a.kt)("h2",{id:"protocol-specific-patterns"},"Protocol specific patterns"),(0,a.kt)("p",null,"At this point we've defined ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate"),". You might have noticed\nthat these endpoint definitions share some logic and information. For this reason Rest Hooks\nencourages extracting shared logic among endpoints."),(0,a.kt)("p",null,"One common pattern is having endpoints Create Read Update Delete (CRUD) for a given resource.\nUsing ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," (",(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"docs"),") simplifies these patterns."),(0,a.kt)("p",null,"Instead of defining an ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity"),", we define a ",(0,a.kt)("a",{parentName:"p",href:"../api/resource"},"Resource"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"\nextends from ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", so we still need the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definiton."),(0,a.kt)("p",null,"In addition, providing ",(0,a.kt)("a",{parentName:"p",href:"../api/resource#static-urlroot-string"},"static urlRoot")," enable 6 ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints"),"\nwith easy logic sharing and overrides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Introduction to Resource")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// read\n// GET https://jsonplaceholder.typicode.com/todos/5\nconst todo = useResource(TodoResource.detail(), { id: 5 });\n\n// GET https://jsonplaceholder.typicode.com/todos\nconst todos = useResource(TodoResource.list(), {});\n\n// mutate\n// POST https://jsonplaceholder.typicode.com/todos\nconst create = useFetcher(TodoResource.create());\ncreate({}, { title: 'my todo' });\n\n// PUT https://jsonplaceholder.typicode.com/todos/5\nconst update = useFetcher(TodoResource.update());\nupdate({ id: 5 }, { title: 'my todo' });\n\n// PATCH https://jsonplaceholder.typicode.com/todos/5\nconst partialUpdate = useFetcher(TodoResource.partialUpdate());\npartialUpdate({ id: 5 }, { title: 'my todo' });\n\n// DELETE https://jsonplaceholder.typicode.com/todos/5\nconst del = useFetcher(TodoResource.delete());\ndel({ id: 5 });\n"))),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"See this all in action in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/tree/master/examples/todo-app"},"examples/todo-app")))}u.isMDXComponent=!0}}]);