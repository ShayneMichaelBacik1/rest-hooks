"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17637],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12933:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>p,toc:()=>l,default:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"useMeta()"},i=void 0,p={unversionedId:"api/useMeta",id:"version-4.1/api/useMeta",isDocsHomePage:!1,title:"useMeta()",description:"NetworkError UnknownError",source:"@site/versioned_docs/version-4.1/api/useMeta.md",sourceDirName:"api",slug:"/api/useMeta",permalink:"/docs/4.1/api/useMeta",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useMeta.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useMeta()"}},l=[],u={toc:l};function c({components:e,...r}){return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useMeta(\n  endpoint: Endpoint,\n  params: object | null,\n): {\n    readonly date: number;\n    readonly error?: NetworkError | UnknownError;\n    readonly expiresAt: number;\n    readonly prevExpiresAt?: number | undefined;\n    readonly invalidated?: boolean | undefined;\n} | null;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./types#networkerror"},"NetworkError")," ",(0,o.kt)("a",{parentName:"p",href:"./types#unknownerror"},"UnknownError")),(0,o.kt)("p",null,"Retrieves metadata about a request from the cache."),(0,o.kt)("p",null,"Used in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useError"},"useError()"))))}c.isMDXComponent=!0}}]);