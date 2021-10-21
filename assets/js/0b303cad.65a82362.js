"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},74841:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,assets:()=>l,toc:()=>p,default:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Rest Hooks 4.2-4.5",authors:["ntucker"],tags:["releases","rest-hooks"]},s=void 0,i={permalink:"/blog/2020/02/18/Rest-Hooks-4.2-4.5",source:"@site/blog/2020-02-18-Rest-Hooks-4.2-4.5.md",title:"Rest Hooks 4.2-4.5",description:"A lot of exciting features have been developed recently, resulting in many feature releases.",date:"2020-02-18T00:00:00.000Z",formattedDate:"February 18, 2020",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:.705,truncated:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],prevItem:{title:"Experimental useController()",permalink:"/blog/2021/08/29/Experimental-useController"},nextItem:{title:"Rest Hooks 4.1 Released",permalink:"/blog/2020/01/06/Rest-Hooks-4.1-Released"}},l={authorsImageUrls:[void 0]},p=[{value:"4.2:",id:"42",children:[],level:3},{value:"4.3:",id:"43",children:[],level:3},{value:"4.4",id:"44",children:[],level:3},{value:"4.5",id:"45",children:[],level:3}],u={toc:p};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A lot of exciting features have been developed recently, resulting in many feature releases.\nWe've been hard a work integrating them into Coinbase's various products, so I skipped a few\nrelease announcements. The biggest focus has been performance features - highlighted by\nadding true ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.5/guides/optimistic-updates"},"optimistic updates"),"."),(0,a.kt)("h3",{id:"42"},"4.2:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/237"},"Indexes")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.5/api/Index"},"Indexes")," allow lookup by alternate fields other than the primary key"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%404.1.0"},"Full set of 4.1 release commits")),(0,a.kt)("h3",{id:"43"},"4.3:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/246"},"Optimistic updates"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/251"},"Keep referential equality in list views")),(0,a.kt)("h3",{id:"44"},"4.4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SetShapeParams"),(0,a.kt)("li",{parentName:"ul"},"ParamsFromShape"),(0,a.kt)("li",{parentName:"ul"},"Export EntitySchema and EntityInstance"),(0,a.kt)("li",{parentName:"ul"},"Fixed react native listUrl bug")),(0,a.kt)("h3",{id:"45"},"4.5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Include all FetchOptions in subscribe action (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coinbase/rest-hooks/issues/265"},"https://github.com/coinbase/rest-hooks/issues/265"),")"),(0,a.kt)("li",{parentName:"ul"},"Support non JSON (aka binary) fetches (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coinbase/rest-hooks/issues/267"},"https://github.com/coinbase/rest-hooks/issues/267"),")")),(0,a.kt)("p",null,"Internal Breaking:\nChanging middlewares results in a new dispatch that properly wraps those middlewares. Technically this is\na fix, but if you relied on the old behavior be careful!"))}c.isMDXComponent=!0}}]);