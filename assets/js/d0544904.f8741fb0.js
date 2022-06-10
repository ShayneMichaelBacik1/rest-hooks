"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[22628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(83117),s=(n(67294),n(3905));const a={title:"Immediate Mutation Updates"},o=void 0,i={unversionedId:"guides/immediate-updates",id:"version-6.1/guides/immediate-updates",title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/versioned_docs/version-6.1/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/6.1/guides/immediate-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Immediate Mutation Updates"},sidebar:"version-6.1/docs",previous:{title:"Render as you Fetch",permalink:"/docs/6.1/guides/render-as-you-fetch"},next:{title:"Optimistic Updates",permalink:"/docs/6.1/guides/optimistic-updates"}},d={},u=[{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Create",id:"create",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,s.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,s.kt)("h2",{id:"update"},"Update"),(0,s.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,s.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response endpoints,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update endpoints ",(0,s.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"Resource.update()")," and\n",(0,s.kt)("a",{parentName:"p",href:"../api/resource#partialupdate-endpoint"},"Resource.partialUpdate()")," both do this automatically. ",(0,s.kt)("a",{parentName:"p",href:"./rpc"},"Read more about defining other\nupdate endpoints")),(0,s.kt)("h2",{id:"delete"},"Delete"),(0,s.kt)("p",null,"Rest Hooks automatically deletes entity entries ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.1/api/Delete"},"schema.Delete")," is used.\n",(0,s.kt)("a",{parentName:"p",href:"../api/resource#delete-endpoint"},"Resource.delete()"),"\nprovides such an endpoint."),(0,s.kt)("h2",{id:"create"},"Create"),(0,s.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useResource() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint#update"},"Endpoint.update")," handles this case"),(0,s.kt)("p",null,"Simplest case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,s.kt)("p",null,"More updates:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useResource(userList);\nconst adminUsers = useResource(userList, { admin: true });\n")),(0,s.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,s.kt)("p",null,"This is usage with a ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource"},"Resource")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      // highlight-start\n      update: (newResourcePk: string) => ({\n        [todoList.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      }),\n      // highlight-end\n    });\n  }\n}\n")),(0,s.kt)("p",null,"Extract the core logic for reuse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      update: (newResourcePk: string) => ({\n        // highlight-next-line\n        [todoList.key({})]: this.appendList.bind(this, newResourcePk),\n      }),\n    });\n  }\n\n  // highlight-start\n  static appendList(newResourcePk: string, resourcePks: string[] = []) {\n    if (resourcePks.includes(newResourcePk)) return resourcePks;\n    return [...resourcePks, newResourcePk];\n  }\n  // highlight-end\n}\n")))}p.isMDXComponent=!0}}]);