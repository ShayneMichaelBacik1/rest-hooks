/*! For license information please see 00ebabb0.2a3fdbd4.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[30481],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function v(){}function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var g=k.prototype=new v;g.constructor=k,m(g,b.prototype),g.isPureReactComponent=!0;var x=Array.isArray,O=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+E(l,0):a,x(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),_(i,t,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",x(e))for(var c=0;c<e.length;c++){var u=a+E(s=e[c],c);l+=_(s,t,o,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=_(s=s.value,t,o,u=a+E(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function N(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},$={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(83117),o=(r(27378),r(3905));const a={title:"<ExternalCacheProvider />"},i=void 0,s={unversionedId:"api/ExternalCacheProvider",id:"api/ExternalCacheProvider",title:"<ExternalCacheProvider />",description:"Integrates external stores with rest-hooks. Should be placed as high as possible",source:"@site/../docs/api/ExternalCacheProvider.md",sourceDirName:"api",slug:"/api/ExternalCacheProvider",permalink:"/docs/api/ExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/ExternalCacheProvider.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1633535713,formattedLastUpdatedAt:"10/6/2021",frontMatter:{title:"<ExternalCacheProvider />"},sidebar:"docs",previous:{title:"<CacheProvider />",permalink:"/docs/api/CacheProvider"},next:{title:"<NetworkErrorBoundary />",permalink:"/docs/api/NetworkErrorBoundary"}},l={},c=[{value:"store",id:"store",level:2},{value:"selector",id:"selector",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Integrates external stores with ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Is a replacement for ",(0,o.kt)("a",{parentName:"strong",href:"/docs/api/CacheProvider"},"<CacheProvider /",">")," - do ",(0,o.kt)("em",{parentName:"strong"},"NOT")," use both at once")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import { ExternalCacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nimport { store, selector } from './store';\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/redux"},"redux example")," for a more complete example."),(0,o.kt)("h2",{id:"store"},"store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Store<S> {\n  subscribe(listener: () => void): () => void;\n  dispatch: React.Dispatch<ActionTypes>;\n  getState(): S;\n}\n")),(0,o.kt)("p",null,"Store simply needs to conform to this interface. A common implementation is a ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"redux store"),",\nbut theoretically any external store could be used."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/redux"},"Read more about integrating redux.")),(0,o.kt)("h2",{id:"selector"},"selector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(state: S) => State<unknown>\n")),(0,o.kt)("p",null,"This function is used to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks")," specific part of the store's state tree."))}p.isMDXComponent=!0}}]);