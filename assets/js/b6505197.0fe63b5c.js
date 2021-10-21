"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75391:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>f});var n=r(87462),o=(r(67294),r(3905));const a={title:"<MockProvider />"},i=void 0,s={unversionedId:"api/MockProvider",id:"version-5.0/api/MockProvider",isDocsHomePage:!1,title:"<MockProvider />",description:"\\ is a simple substitute provider to prefill the cache with fixtures so the 'happy path'",source:"@site/versioned_docs/version-5.0/api/MockProvider.md",sourceDirName:"api",slug:"/api/MockProvider",permalink:"/docs/5.0/api/MockProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/MockProvider.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"<MockProvider />"},sidebar:"version-5.0/docs",previous:{title:"mockInitialState()",permalink:"/docs/5.0/api/mockInitialState"},next:{title:"Upgrading from 4 to 5",permalink:"/docs/5.0/upgrade/upgrading-to-5"}},c=[{value:"Arguments",id:"arguments",children:[{value:"results",id:"results",children:[],level:3}],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},l=p("MockProvider"),u=p("MockResolver"),d=p("CacheProvider"),m={toc:c};function f({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function MockProvider({\n  children,\n  results,\n}: {\n  children: React.ReactChild;\n  results: Fixture[];\n}): JSX.Element;\n")),(0,o.kt)("p",null,"\\",(0,o.kt)(l,{mdxType:"MockProvider"})," is a simple substitute provider to prefill the cache with fixtures so the 'happy path'\ncan be tested. This is useful for ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/guides/storybook"},"storybook")," as well as component testing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Deprecated: Use ",(0,o.kt)("a",{parentName:"p",href:"./mockResolver"},"\\",(0,o.kt)(u,{mdxType:"MockResolver"}))," instead as it also supports ",(0,o.kt)("a",{parentName:"p",href:"../api/useFetcher"},"imperative fetches")," like ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"update"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: \\",(0,o.kt)(l,{mdxType:"MockProvider"})," disables dispatches, thus no fetches will occur. To simply initalize the\ncache, use ",(0,o.kt)("a",{parentName:"p",href:"./mockInitialState"},"mockInitialState()")," to construct initialState for the normal ",(0,o.kt)("a",{parentName:"p",href:"./CacheProvider"},"\\",(0,o.kt)(d,{mdxType:"CacheProvider"})))),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"results"},"results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Fixture {\n  request: ReadEndpoint;\n  params: object;\n  result: object | string | number;\n}\n")),(0,o.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint")," and params. ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"JSX.Element\n")),(0,o.kt)("p",null,"Renders the children prop."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MockProvider } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    request: ArticleResource.list(),\n    params: { maxResults: 10 },\n    result: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n];\n\n<MockProvider results={results}>\n  <MyComponentToTest />\n</MockProvider>\n")))}f.isMDXComponent=!0}}]);