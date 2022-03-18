/*! For license information please see ab05f565.fc603c94.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47669],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var v=b.prototype=new y;v.constructor=b,h(v,k.prototype),v.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var a,s={},o=null,u=null;if(null!=t)for(a in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!N.hasOwnProperty(a)&&(s[a]=t[a]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];s.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===s[a]&&(s[a]=i[a]);return{$$typeof:n,type:e,key:o,ref:u,props:s,_owner:I.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,s,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return o=o(i=e),e=""===s?"."+R(i,0):s,w(o)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(i=0,s=""===s?".":s+":",w(e))for(var l=0;l<e.length;l++){var p=s+R(u=e[l],l);i+=T(u,t,a,p,o)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(u=e.next()).done;)i+=T(u=u.value,t,a,p=s+R(u,l++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},U={transition:null}},27378:(e,t,n)=>{n(41535)},96497:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(9877),a=n(58215),s=n(67294),o=n(87799);function u(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(15814);const s={React:r,...r,...a}},78525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(27378),n(3905)),s=n(96497),o=n(9877),u=n(58215);const i={title:"Images and other Media"},l=void 0,p={unversionedId:"guides/img-media",id:"guides/img-media",title:"Images and other Media",description:"Using React Suspense with Images and other Media | Rest Hooks",source:"@site/../docs/guides/img-media.md",sourceDirName:"guides",slug:"/guides/img-media",permalink:"/docs/guides/img-media",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/img-media.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Images and other Media"},sidebar:"docs",previous:{title:"Dealing with network errors",permalink:"/docs/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/guides/infinite-scrolling-pagination"}},c={},d=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],f={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Using React Suspense with Images and other Media | Rest Hooks")),(0,a.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,a.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,a.kt)(o.Z,{defaultValue:"useSuspense",values:[{label:"useSuspense",value:"useSuspense"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"useSuspense",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useSuspense(getPhoto, { userId });\n"))),(0,a.kt)(u.Z,{value:"useCache",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,a.kt)(u.Z,{value:"JS/Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,a.kt)("h2",{id:"just-images"},"Just Images"),(0,a.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("h4",{id:"prefetching"},"Prefetching"),(0,a.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense, useFetch } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useFetch(getImage, { src: imageSrc });\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("p",null,"When using the ",(0,a.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}m.isMDXComponent=!0}}]);