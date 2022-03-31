"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[80689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={title:"URL Patterns"},s=void 0,l={unversionedId:"guides/url",id:"version-6.1/guides/url",title:"URL Patterns",description:"Common REST urls resemble the following:",source:"@site/versioned_docs/version-6.1/guides/url.md",sourceDirName:"guides",slug:"/guides/url",permalink:"/docs/6.1/guides/url",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/url.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"URL Patterns"},sidebar:"version-6.1/docs",previous:{title:"Usage",permalink:"/docs/6.1/rest/usage"},next:{title:"Custom endpoints",permalink:"/docs/6.1/guides/extending-endpoints"}},o={},c=[{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Common REST urls resemble the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET - retrieve list of resources",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optionally include search params ",(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/?size=20&page=5")))),(0,a.kt)("li",{parentName:"ul"},"POST - create resource"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/[id]/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET - retrieve one entity matching 'id'"),(0,a.kt)("li",{parentName:"ul"},"PUT - update entire entity"),(0,a.kt)("li",{parentName:"ul"},"PATCH - update partial entity"),(0,a.kt)("li",{parentName:"ul"},"DELETE - delete entity")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/resource"},"Resource")," comes out of the box with support for these patterns simply\nby defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," property on a Resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default ArticleResource extends Resource {\n  readonly id: string = '';\n  //...\n\n  pk() { return this.id; }\n  static urlRoot = '/articles/';\n}\n")),(0,a.kt)("p",null,"It does this by using that ",(0,a.kt)("inlineCode",{parentName:"p"},"urlRoot")," static property in two static methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/resource#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url(urlParams)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"handles most Endpoints"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/resource#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl(searchParams)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used in create() and list()")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'ArticleResource.listUrl();\n// "/articles/"\nArticleResource.listUrl({ size: 20, page: 5 });\n// "/articles/?size=20&page=5"\nArticleResource.url({ id: 5 });\n// "/articles/5/"\n')),(0,a.kt)("p",null,"Customizing the url patterns is typically as easy as overriding either of these\nmethods. However, in more extreme scenarios, ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#key-params--string"},"key()"),"\ncan be set in a custom Endpoint definition."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A somewhat common pattern is to hold 'sub' resources at nested paths to their 'master'."),(0,a.kt)("p",null,"We might see something like ",(0,a.kt)("inlineCode",{parentName:"p"},"/articles/[articleId]/comments/")," to get the comments for\na given article."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class CommentResource extends Resource {\n  readonly id: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  // since we won't be using urlRoot to build our urls we\n  // still need to tell rest hooks how to uniquely identify this Resource\n  static get key() {\n    return 'CommentResource';\n  }\n\n  /**\n   * Get the url for a Resource\n   */\n  static url<T extends typeof Resource>(\n    this: T,\n    urlParams: { articleId: string } & Partial<AbstractInstanceType<T>>,\n  ): string {\n    if (urlParams) {\n      if (this.pk(urlParams) !== undefined) {\n        return `/articles/${articleId}/comments/${this.pk(urlParams)}`;\n      }\n    }\n    // since we're overriding the url() function we must keep the type the\n    // same, which means we might not get urlParams\n    throw new Error('Comments require articleId to retrieve');\n  }\n\n  /**\n   * Get the url for many Resources\n   */\n  static listUrl(searchParams: { articleId: string }): string {\n    if (searchParams && Object.keys(searchParams).length) {\n      const { articleId, ...realSearchParams } = searchParams;\n      const params = new URLSearchParams(realSearchParams as any);\n      // this is essential for consistent url strings\n      params.sort();\n      return `/articles/${articleId}/comments/?${params.toString()}`;\n    }\n    throw new Error('Comments require articleId to retrieve');\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"CommentResource.listUrl();\n// error thrown\nCommentResource.listUrl({ articleId: '5' });\n// \"/articles/5/comments/\"\nCommentResource.listUrl({ articleId: '5', size: 20, page: 6 });\n// \"/articles/5/comments/?size=20&page=6\"\nCommentResource.url({ id: 5 });\n// error thrown\nCommentResource.url({ articleId: '5', id: '23' });\n// \"/articles/5/comments/23/\"\n")))}p.isMDXComponent=!0}}]);