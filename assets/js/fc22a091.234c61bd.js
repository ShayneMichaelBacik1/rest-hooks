/*! For license information please see fc22a091.234c61bd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10009],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,s=o(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))n.call(a,l)&&(s[l]=a[l]);if(t){c=t(a);for(var p=0;p<c.length;p++)r.call(a,c[p])&&(s[c[p]]=a[c[p]])}}return s}},41535:(e,t,n)=>{var r=n(62525),o=60103,i=60106;var a=60109,c=60110,s=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var g=v.prototype=new h;g.constructor=v,r(g,y.prototype),g.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!j.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+C(s,0):r,k(a)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),N(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var l=r+C(c=e[u],u);s+=N(c,t,n,l,a)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),u=0;!(c=e.next()).done;)s+=N(c=c.value,t,n,l=r+C(c,u++),a);else if("object"===c)throw t=String(e),Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function M(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},E={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56623:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>c,toc:()=>s,default:()=>l});var r=n(87462),o=(n(27378),n(3905));const i={title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",sidebar_label:"SubscriptionManager"},a=void 0,c={unversionedId:"api/SubscriptionManager",id:"api/SubscriptionManager",isDocsHomePage:!1,title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",description:"Keeps track of all resource subscriptions.",source:"@site/../docs/api/SubscriptionManager.md",sourceDirName:"api",slug:"/api/SubscriptionManager",permalink:"/docs/api/SubscriptionManager",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/SubscriptionManager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",sidebar_label:"SubscriptionManager"},sidebar:"docs",previous:{title:"<MockProvider />",permalink:"/docs/api/MockProvider"},next:{title:"PollingSubscription",permalink:"/docs/api/PollingSubscription"}},s=[{value:"constructor(Subscription: S)",id:"constructorsubscription-s",children:[],level:2},{value:"Consumed Actions",id:"consumed-actions",children:[],level:2},{value:"Subscription",id:"subscription",children:[{value:"add(frequency?: number): void",id:"addfrequency-number-void",children:[],level:3},{value:"remove(frequency?: number): boolean",id:"removefrequency-number-boolean",children:[],level:3},{value:"cleanup(): void",id:"cleanup-void",children:[],level:3},{value:"Included implementation",id:"included-implementation",children:[],level:3}],level:2}],u={toc:s};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class SubscriptionManager<S extends SubscriptionConstructable> implements Manager\n")),(0,o.kt)("p",null,"Keeps track of all resource subscriptions."),(0,o.kt)("h2",{id:"constructorsubscription-s"},"constructor(Subscription: S)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#subscription"},"Subscription")," is the class that will be used to handle subscriptions to each endpoint.\nEach instance represents one subscription to a specific unique endpoint."),(0,o.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/subscribe'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/unsubscribe'")),(0,o.kt)("h2",{id:"subscription"},"Subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," is a class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionConstructable"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," instances\nhandle the actual subscriptions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Properties sent to Subscription constructor */\nexport interface SubscriptionInit {\n  schema: Schema;\n  fetch: () => Promise<any>;\n  url: string;\n  frequency?: number;\n}\n\n/** Interface handling a single resource subscription */\ninterface Subscription {\n  add(frequency?: number): void;\n  remove(frequency?: number): boolean;\n  cleanup(): void;\n}\n\n/** The static class that constructs Subscription */\ninterface SubscriptionConstructable {\n  new (init: SubscriptionInit, dispatch: React.Dispatch<any>): Subscription;\n}\n")),(0,o.kt)("h3",{id:"addfrequency-number-void"},"add(frequency?: number): void"),(0,o.kt)("p",null,"Adds a new subscription at the provided frequency for the resource."),(0,o.kt)("h3",{id:"removefrequency-number-boolean"},"remove(frequency?: number): boolean"),(0,o.kt)("p",null,"Removes a subscription for the given frequency. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if there are no\nmore subscriptions after. This is used to clean up unused ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription"),"s."),(0,o.kt)("h3",{id:"cleanup-void"},"cleanup(): void"),(0,o.kt)("p",null,"Provides any cleanup of dangling resources after Subscription is no longer in use."),(0,o.kt)("h3",{id:"included-implementation"},"Included implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./PollingSubscription"},"PollingSubscription"))),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note"),(0,o.kt)("p",{parentName:"blockquote"},"Implementing your own ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," to handle websockets can be done by\ndispatching ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks/receive")," actions with the data it gets to update.\nBe sure to handle connection opening in the constructor and close the connection\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup()"))))}l.isMDXComponent=!0}}]);