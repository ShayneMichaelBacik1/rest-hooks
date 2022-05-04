"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[94786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Pagination",id:"pagination",original_id:"pagination"},i=void 0,s={unversionedId:"guides/pagination",id:"version-2.2/guides/pagination",title:"Pagination",description:"Tokens in Body",source:"@site/versioned_docs/version-2.2/guides/pagination.md",sourceDirName:"guides",slug:"/guides/pagination",permalink:"/docs/2.2/guides/pagination",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/pagination.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Pagination",id:"pagination",original_id:"pagination"},sidebar:"version-2.2/docs",previous:{title:"Custom endpoints",permalink:"/docs/2.2/guides/endpoints"},next:{title:"Authentication",permalink:"/docs/2.2/guides/auth"}},l={},c=[{value:"Tokens in Body",id:"tokens-in-body",level:2},{value:"Tokens in HTTP Headers",id:"tokens-in-http-headers",level:2},{value:"Code organization",id:"code-organization",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tokens-in-body"},"Tokens in Body"),(0,a.kt)("p",null,"A common way APIs deal with pagination is the list view will return an object with both pagination information\nand the Array of results as another member."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET http://test.com/article/page=abcd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nextPage": null,\n  "prevPage": "http://test.com/article/page=aedcba",\n  "results": [\n    {\n      "id": 5,\n      "content": "have a merry christmas",\n      "author": 2,\n      "contributors": []\n    },\n    {\n      "id": 532,\n      "content": "never again",\n      "author": 23,\n      "contributors": [5]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"To deal with our specific shape, we'll need to customize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShape")," of lists to\nunderstand how to normalize the results (via schema)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resources/ArticleResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, SchemaList, ReadShape, AbstractInstanceType } from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static listShape<T extends typeof Resource>(this: T): ReadShape<SchemaList<AbstractInstanceType<T>>> {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.getEntitySchema()] },\n    };\n  }\n}\n")),(0,a.kt)("p",null,"Now we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"listShape()")," as normal."),(0,a.kt)("p",null,"Additionally, we can add pagination buttons using ",(0,a.kt)("a",{parentName:"p",href:"../api/useResultCache"},"useResultCache"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ArticleList.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useResultCache } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList() {\n  const articles = useResource(ArticleResource.listShape(), {});\n  const { nextPage, prevPage } = useResultCache(\n    ArticleResource.listShape(),\n    {},\n    { nextPage: '', prevPage: '' }\n  );\n  return (\n    <>\n      <div>\n        {articles.map(article => (\n          <Article key={article.pk()} article={article} />\n        ))}\n      </div>\n      {prevPage && <Link to={prevPage}>\u2039 Prev</Link>}\n      {nextPage && <Link to={nextPage}>Next \u203a</Link>}\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"tokens-in-http-headers"},"Tokens in HTTP Headers"),(0,a.kt)("p",null,"In some cases the pagination tokens will be embeded in HTTP headers, rather than part of the payload. In this\ncase you'll need to customize the ",(0,a.kt)("a",{parentName:"p",href:"../api/FetchShape#fetchurl-string-body-payload-promise-any"},"fetch()")," function\nfor ",(0,a.kt)("a",{parentName:"p",href:"../api/resource#listshape-readshape"},"listShape()")," so the pagination headers are included fetch object."),(0,a.kt)("p",null,"We show the custom listShape() below. All other parts of the above example remain the same."),(0,a.kt)("p",null,"Pagination token is stored in the header ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," for this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import request from 'superagent';\nimport { Resource, ReadShape, SchemaList, AbstractInstanceType } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Shape to get a list of entities */\n  static listShape<T extends typeof Resource>(this: T): ReadShape<SchemaList<AbstractInstanceType<T>>> {\n    const fetch = async (params: Readonly<object>, body?: Readonly<object | string>) => {\n      const url = this.listUrl(params);\n      let req = request['get'](url).on('error', () => {});\n      if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n      if (body) req = req.send(body);\n      const res = (await req);\n      let jsonResponse = res.body;\n      // include both the body and the link header\n      jsonResponse = {\n        link: res.headers.link,\n        results: jsonResponse,\n      }\n      return jsonResponse;\n    };\n\n    return {\n      ...super.listShape(),\n      fetch,\n      schema: { results: [this.getEntitySchema()] },\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"code-organization"},"Code organization"),(0,a.kt)("p",null,"If much of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar pagination, you might\ntry extending from a base class that defines such common customizations."))}u.isMDXComponent=!0}}]);