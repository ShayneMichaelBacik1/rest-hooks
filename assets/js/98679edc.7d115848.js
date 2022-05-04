"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[34806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,k=g["".concat(i,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Experimental useController()",authors:["ntucker"],tags:["releases","rest-hooks","packages","usecontroller","resource","fetch"]},s=void 0,l={permalink:"/blog/2021/08/29/Experimental-useController",source:"@site/blog/2021-08-29-Experimental-useController.md",title:"Experimental useController()",description:"@rest-hooks/experimental is a new",date:"2021-08-29T00:00:00.000Z",formattedDate:"August 29, 2021",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"usecontroller",permalink:"/blog/tags/usecontroller"},{label:"resource",permalink:"/blog/tags/resource"},{label:"fetch",permalink:"/blog/tags/fetch"}],readingTime:8.78,truncated:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Experimental useController()",authors:["ntucker"],tags:["releases","rest-hooks","packages","usecontroller","resource","fetch"]},nextItem:{title:"Rest Hooks 4.2-4.5",permalink:"/blog/2020/02/18/Rest-Hooks-4.2-4.5"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/experimental"},"@rest-hooks/experimental")," is a new\npackage that allows us to quickly iterate on new designs by using them in production, which provides\nfeedback in ways not possible at design and testing phase."),(0,o.kt)("p",null,"This package is ",(0,o.kt)("strong",{parentName:"p"},"not")," api stable; it does follow semver, so it will never reach 1.0.\nHowever, it is tested with the same rigor we expect with Rest Hooks\nas we use it in production. It is recommend to use this for providing feedback or playing with designs,\nunless you are willing to put in extra work to make migrations. Detailed migration guides will only be\nprovided upon upstreaming to the mainline packages."),(0,o.kt)("p",null,"Today this package comes with two new features:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/blog/2021/08/29/Experimental-useController#usecontroller"},"useController()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { fetch, invalidate, resetEntireStore } = useController();\nfetch(MyResource.detail(), { id });\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/blog/2021/08/29/Experimental-useController#static-listpaginated"},"Resource.list().paginated()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class NewsResource extends Resource {\n  static listPage<T extends typeof NewsResource>(this: T) {\n    return this.list().paginated(({ cursor, ...rest }) => [rest]);\n  }\n}\n")))}u.isMDXComponent=!0}}]);