"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[72797],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66751:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(83117),o=(t(67294),t(3905));const a={title:"useMeta()"},i=void 0,p={unversionedId:"api/useMeta",id:"version-6.1/api/useMeta",title:"useMeta()",description:"NetworkError UnknownError",source:"@site/versioned_docs/version-6.1/api/useMeta.md",sourceDirName:"api",slug:"/api/useMeta",permalink:"/docs/6.1/api/useMeta",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useMeta.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"useMeta()"},sidebar:"version-6.1/docs",previous:{title:"useRetrieve()",permalink:"/docs/6.1/api/useRetrieve"},next:{title:"useError()",permalink:"/docs/6.1/api/useError"}},l={},s=[],u={toc:s};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useMeta(\n  endpoint: Endpoint,\n  params: object | null,\n): {\n    readonly date: number;\n    readonly error?: NetworkError | UnknownError;\n    readonly expiresAt: number;\n    readonly prevExpiresAt?: number | undefined;\n    readonly invalidated?: boolean | undefined;\n} | null;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./types#networkerror"},"NetworkError")," ",(0,o.kt)("a",{parentName:"p",href:"./types#unknownerror"},"UnknownError")),(0,o.kt)("p",null,"Retrieves metadata about a request from the cache."),(0,o.kt)("p",null,"Used in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useError"},"useError()"))))}c.isMDXComponent=!0}}]);