/*! For license information please see f67bfe22.caf0a493.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35741],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,l,i=o(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(i[u]=s[u]);if(t){l=t(s);for(var p=0;p<l.length;p++)n.call(s,l[p])&&(i[l[p]]=s[l[p]])}}return i}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var s=60109,l=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||g}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var k=b.prototype=new h;k.constructor=b,n(k,m.prototype),k.isPureReactComponent=!0;var w=Array.isArray,v=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},s=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,n)&&!_.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return s=s(i=e),e=""===n?"."+S(i,0):n,w(s)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),P(s,t,r,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(N,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=""===n?".":n+":",w(e))for(var c=0;c<e.length;c++){var u=n+S(l=e[c],c);i+=P(l,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)i+=P(l=l.value,t,r,u=n+S(l,c++),s);else if("object"===l)throw t=String(e),Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function T(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},U={transition:0}},27378:(e,t,r)=>{r(41535)},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(41395),o=r(58215),a=r(67294),s=r(20350);function l({pkgs:e,dev:t=!1}){return a.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),a.createElement(o.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(68393);const a={React:n,...n,...o}},2211:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var n=r(87462),o=(r(27378),r(3905)),a=r(96497);const s={title:"Legacy browser support"},l=void 0,i={unversionedId:"guides/legacy-browser",id:"guides/legacy-browser",isDocsHomePage:!1,title:"Legacy browser support",description:"Rest Hooks is designed to work out of the box with most tooling.",source:"@site/../docs/guides/legacy-browser.md",sourceDirName:"guides",slug:"/guides/legacy-browser",permalink:"/docs/guides/legacy-browser",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/legacy-browser.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Legacy browser support"},sidebar:"docs",previous:{title:"Usage without Suspense",permalink:"/docs/guides/no-suspense"},next:{title:"TypeScript Types",permalink:"/docs/api/types"}},c=[{value:"Transpile packages",id:"transpile-packages",children:[],level:3},{value:"Polyfills",id:"polyfills",children:[{value:"<code>index.tsx</code>",id:"indextsx",children:[],level:4}],level:3}],u={toc:c};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rest Hooks is designed to work out of the box with most tooling."),(0,o.kt)("p",null,"If you see, ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),"\nthis is most likely due to targeting Internet Explorer support with a custom webpack configuration.\nThis will occur even when using a modern browser, so long as your target (typically set with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/browserslist"},"browserslist"),")\nincludes legacy browsers like Internet Explorer."),(0,o.kt)("p",null,"In this case, follow the instructions below to ensure compatibility."),(0,o.kt)("h3",{id:"transpile-packages"},"Transpile packages"),(0,o.kt)("p",null,"Adding ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-plugin-modern-npm"},"webpack-plugin-modern-npm")," will ensure compatibility of all installed\npackages with legacy browsers."),(0,o.kt)(a.Z,{pkgs:"webpack-plugin-modern-npm",dev:!0,mdxType:"PkgTabs"}),(0,o.kt)("p",null,"Then install the plugin by adding to webpack config."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ModernNpmPlugin = require('webpack-plugin-modern-npm');\n\nmodule.exports = {\n  plugins: [\n    new ModernNpmPlugin()\n  ]\n};\n")),(0,o.kt)("h3",{id:"polyfills"},"Polyfills"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"},"CRA polyfill"),"\nor follow instructions below."),(0,o.kt)(a.Z,{pkgs:"core-js whatwg-fetch",mdxType:"PkgTabs"}),(0,o.kt)("h4",{id:"indextsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\nimport 'whatwg-fetch';\n// place the above line at top\n")))}p.isMDXComponent=!0}}]);