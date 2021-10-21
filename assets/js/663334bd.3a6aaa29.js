"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50541:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>l,default:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"<RestProvider />",id:"RestProvider",original_id:"RestProvider"},a=void 0,s={unversionedId:"api/RestProvider",id:"version-4.2/api/RestProvider",isDocsHomePage:!1,title:"<RestProvider />",description:"Manages state, providing all context needed to use the hooks. Should be placed as high as possible",source:"@site/versioned_docs/version-4.2/api/RestProvider.md",sourceDirName:"api",slug:"/api/RestProvider",permalink:"/docs/4.2/api/RestProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/RestProvider.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"<RestProvider />",id:"RestProvider",original_id:"RestProvider"}},l=[{value:"initialState?: State&lt;unknown&gt;",id:"initialstate-stateunknown",children:[],level:2}],c={toc:l};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages state, providing all context needed to use the hooks. Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RestProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <RestProvider>\n    <App />\n  </RestProvider>,\n  document.body\n);\n")),(0,o.kt)("h2",{id:"initialstate-stateunknown"},"initialState?: State\\<unknown",">"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type State<T> = Readonly<{\n  entities: Readonly<{ [k: string]: { [id: string]: T } | undefined }>;\n  results: Readonly<{ [url: string]: unknown | PK[] | PK | undefined }>;\n  meta: Readonly<{\n    [url: string]: { date: number; error?: Error; expiresAt: number };\n  }>;\n}>;\n")),(0,o.kt)("p",null,"Instead of starting with an empty cache, you can provide your own initial state. This can\nbe useful for testing, or rehydrating the cache state when using server side rendering."))}p.isMDXComponent=!0}}]);