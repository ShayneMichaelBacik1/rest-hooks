/*! For license information please see 9b8d3c38.5491a49d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12177],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},41535:(e,t,n)=>{var r=n(62525),o=60103,a=60106;var i=60109,c=60110,s=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=g.prototype=new b;v.constructor=g,r(v,h.prototype),v.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+S(s,0):r,k(i)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var l=r+S(c=e[u],u);s+=E(c,t,n,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),u=0;!(c=e.next()).done;)s+=E(c=c.value,t,n,l=r+S(c,u++),i);else if("object"===c)throw t=String(e),Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},q={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57171:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>l});var r=n(87462),o=(n(27378),n(3905));const a={title:"Capturing Mutation Side-Effects"},i=void 0,c={unversionedId:"guides/rpc",id:"guides/rpc",isDocsHomePage:!1,title:"Capturing Mutation Side-Effects",description:"How to deal with side-effects",source:"@site/../docs/guides/rpc.md",sourceDirName:"guides",slug:"/guides/rpc",permalink:"/docs/guides/rpc",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rpc.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Capturing Mutation Side-Effects"},sidebar:"docs",previous:{title:"Nesting related resources (server-side join)",permalink:"/docs/guides/nested-response"},next:{title:"Custom networking library",permalink:"/docs/guides/custom-networking"}},s=[{value:"How to deal with side-effects",id:"how-to-deal-with-side-effects",children:[{value:"Example:",id:"example",children:[],level:3}],level:2}],u={toc:s};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-deal-with-side-effects"},"How to deal with side-effects"),(0,o.kt)("p",null,"If you have an endpoint that updates many resources on your server,\nthere is a straightforward mechanism to get all those updates\nto your client in one request."),(0,o.kt)("p",null,"By defining a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Endpoint"},"Endpoint")," method on your resource,\nyou'll be able to use custom response endpoints that still\nupdated ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"' normalized cache."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("p",null,"You're running a crypto trading platform called ",(0,o.kt)("inlineCode",{parentName:"p"},"dogebase"),". Every time\na user creates a trade, you need to update some balance information\nin their accounts object. So upon ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"ing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/trade/")," endpoint,\nyou nest both the updated accounts object along with the trade you just\ncreated."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /trade/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trade": {\n    "id": 2893232,\n    "user": 1,\n    "amount": "50.2335324",\n    "coin": "doge",\n    "created_at": ""\n  },\n  "account": {\n    "id": 899,\n    "user": 1,\n    "balance": "1337.00",\n    "coin_value": "3.50"\n  }\n}\n')),(0,o.kt)("p",null,"To handle this, we just need to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," to include the custom\nendpoint."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TradeResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass TradeResource extends Resource {\n  // ...\n  static create<T extends typeof Resource>(this: T) {\n    return super.create().extend({\n      schema: {\n        trade: this,\n        account: AccountResource,\n      },\n    });\n  }\n}\n")),(0,o.kt)("p",null,"Now if when we use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource#create-endpoint"},"create()")," Endpoint generator method,\nwe will be happy knowing both the trade and account information will\nbe updated in the cache after the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request is complete."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CreateTrade.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function CreateTrade() {\n  const { fetch } = useController();\n  const create = (payload) => fetch(TradeResource.create(), {}, payload)\n  //...\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"Feel free to create completely new ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Endpoint"},"Endpoint")," methods for any custom\nendpoints you have. This endpoint tells ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks")," how to process any\nrequest.")))}l.isMDXComponent=!0}}]);