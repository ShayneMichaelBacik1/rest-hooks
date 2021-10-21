"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87261:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Authentication",id:"auth",original_id:"auth"},i=void 0,s={unversionedId:"guides/auth",id:"version-4.5/guides/auth",isDocsHomePage:!1,title:"Authentication",description:"All network requests are run through the static fetchOptionsPlugin optionally",source:"@site/versioned_docs/version-4.5/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/docs/4.5/guides/auth",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/auth.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Authentication",id:"auth",original_id:"auth"},sidebar:"version-4.5/docs",previous:{title:"Pagination",permalink:"/docs/4.5/guides/pagination"},next:{title:"Transforming data on fetch",permalink:"/docs/4.5/guides/network-transform"}},c=[{value:"Cookie Auth",id:"cookie-auth",children:[],level:2},{value:"Auth Headers from React Context",id:"auth-headers-from-react-context",children:[],level:2},{value:"Code organization",id:"code-organization",children:[],level:2}],u={toc:c};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All network requests are run through the ",(0,o.kt)("inlineCode",{parentName:"p"},"static fetchOptionsPlugin")," optionally\ndefined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,o.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,o.kt)("p",null,"Here's an example using simple cookie auth:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class AuthdResource extends Resource {\n  static fetchOptionsPlugin = (options: RequestInit) => ({\n    ...options,\n    credentials: 'same-origin',\n  });\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Request } from 'rest-hooks';\n\nclass AuthdResource extends Resource {\n  static fetchPlugin = (request: Request) => request.withCredentials();\n}\n")),(0,o.kt)("p",null,"You can also do more complex flows (like adding arbitrary headers) to\nthe request. Every ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchOptionsPlugin")," takes in the existing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"init options")," of fetch, and returns new init options to be used."),(0,o.kt)("h2",{id:"auth-headers-from-react-context"},"Auth Headers from React Context"),(0,o.kt)("p",null,"Here we use a context variable to set headers. Note - this means any fetch shape functions can only be\ncalled from a React Component. (However, this should be fine since the context will only exist in React anyway.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class AuthdResource extends Resource {\n  static fetchOptionsPlugin = (options: RequestInit) => {\n    const { session } = useAuthContext();\n    return {\n    ...options,\n      headers: {\n        ...options.headers,\n        'Access-Token': session,\n      },\n    }\n  };\n}\n")),(0,o.kt)("h2",{id:"code-organization"},"Code organization"),(0,o.kt)("p",null,"If much of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar auth mechanism, you might\ntry extending from a base class that defines such common customizations."))}l.isMDXComponent=!0}}]);