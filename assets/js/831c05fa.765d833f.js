"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33797:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"<ExternalCacheProvider />",id:"ExternalCacheProvider",original_id:"ExternalCacheProvider"},i=void 0,s={unversionedId:"api/ExternalCacheProvider",id:"version-4.1/api/ExternalCacheProvider",isDocsHomePage:!1,title:"<ExternalCacheProvider />",description:"Integrates external stores with rest-hooks. Should be placed as high as possible",source:"@site/versioned_docs/version-4.1/api/ExternalCacheProvider.md",sourceDirName:"api",slug:"/api/ExternalCacheProvider",permalink:"/docs/4.1/api/ExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/ExternalCacheProvider.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"<ExternalCacheProvider />",id:"ExternalCacheProvider",original_id:"ExternalCacheProvider"},sidebar:"version-4.1/docs",previous:{title:"<CacheProvider />",permalink:"/docs/4.1/api/CacheProvider"},next:{title:"<NetworkErrorBoundary />",permalink:"/docs/4.1/api/NetworkErrorBoundary"}},l=[{value:"store",id:"store",children:[],level:2},{value:"selector",id:"selector",children:[],level:2}],c=(p="CacheProvider",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:l};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Integrates external stores with ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Is a replacement for \\",(0,o.kt)(c,{mdxType:"CacheProvider"})," - do ",(0,o.kt)("em",{parentName:"strong"},"NOT")," use both at once")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ExternalCacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nimport { store, selector } from './store';\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/guides/redux"},"redux example")," for a more complete example."),(0,o.kt)("h2",{id:"store"},"store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Store<S> {\n  subscribe(listener: () => void): () => void;\n  dispatch: React.Dispatch<ActionTypes>;\n  getState(): S;\n}\n")),(0,o.kt)("p",null,"Store simply needs to conform to this interface. A common implementation is a ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"redux store"),",\nbut theoretically any external store could be used."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/guides/redux"},"Read more about integrating redux.")),(0,o.kt)("h2",{id:"selector"},"selector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(state: S) => State<unknown>\n")),(0,o.kt)("p",null,"This function is used to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks")," specific part of the store's state tree."))}u.isMDXComponent=!0}}]);