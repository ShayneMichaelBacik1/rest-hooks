"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[62436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const a={title:"Fetching multiple resources at once"},s=void 0,i={unversionedId:"guides/fetch-multiple",id:"version-6.1/guides/fetch-multiple",title:"Fetching multiple resources at once",description:"Parallel",source:"@site/versioned_docs/version-6.1/guides/fetch-multiple.md",sourceDirName:"guides",slug:"/guides/fetch-multiple",permalink:"/docs/6.1/guides/fetch-multiple",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/fetch-multiple.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Fetching multiple resources at once"},sidebar:"version-6.1/docs",previous:{title:"Infinite Scrolling",permalink:"/docs/6.1/guides/infinite-scrolling-pagination"},next:{title:"Render as you Fetch",permalink:"/docs/6.1/guides/render-as-you-fetch"}},l={},c=[{value:"Parallel",id:"parallel",level:2},{value:"Sequential",id:"sequential",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parallel"},"Parallel"),(0,o.kt)("p",null,"If you have the parameters you needs to fetch, they will all happen in parallel!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useResource } from "rest-hooks";\nimport { PostResource, TaskResource } from "./resources";\n\nexport default function Post({ name }: { name: string }) {\n  const [post, tasks] = useResource(\n    [PostResource.detail(), { name }],\n    [TaskResource.detail(), { name }],\n  );\n  return (\n    <div>\n      <Post post={post} />\n      <Task task={task} />\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"sequential"},"Sequential"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," call ensures the resource returned is available. That means\nthat until that point it will yield running the rest of the component function\nwhen it is loading or errored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useResource } from "rest-hooks";\nimport { PostResource, UserResource } from "./resources";\n\nexport default function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detail(), { id });\n  const author = useResource(\n    UserResource.detail(),\n    {\n      id: post.userId\n    }\n  );\n  return (\n    <div>\n      <h1>\n        {post.title} by {author && author.name}\n      </h1>\n      <p>{post.body}</p>\n    </div>\n  );\n}\n')))}p.isMDXComponent=!0}}]);