"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41498:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>l,default:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Schemas and Normalized data",sidebar_label:"Schema"},s=void 0,i={unversionedId:"getting-started/schema",id:"version-4.0/getting-started/schema",isDocsHomePage:!1,title:"Schemas and Normalized data",description:"Schemas are a declarative definition of how to process responses",source:"@site/versioned_docs/version-4.0/getting-started/schema.md",sourceDirName:"getting-started",slug:"/getting-started/schema",permalink:"/docs/4.0/getting-started/schema",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/schema.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Schemas and Normalized data",sidebar_label:"Schema"}},l=[{value:"Entities",id:"entities",children:[],level:2},{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",children:[],level:2}],d={toc:l};function c({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Schemas are a declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"./Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint, Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\nconst TodoDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),\n    { schema: Todo }\n);\n")),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entities cache",src:n(64625).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useResource(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")),(0,r.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoCreate = new Endpoint(\n  (body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/`, {\n      method: 'POST',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function NewTodoForm() {\n  const create = useFetcher(todoCreate);\n  return (\n    <Form onSubmit={e => create(new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoUpdate = new Endpoint(\n  ({ id }: { id: number }, body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'PUT',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n  const update = useFetcher(todoUpdate);\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoDelete = new Endpoint(\n  ({ id }: { id: number }) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'DELETE',\n    }).then(() => ({ id })),\n  { schema: new schema.Delete(Todo), sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const del = useFetcher(todoDelete);\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => del({ id: todo.id })}>Delete</button>\n    </div>\n  );\n}\n"))),(0,r.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}c.isMDXComponent=!0},64625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"}}]);