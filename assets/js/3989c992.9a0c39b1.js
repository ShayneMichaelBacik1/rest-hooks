/*! For license information please see 3989c992.9a0c39b1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36412],{62525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,u=o(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(u[c]=i[c]);if(r){s=r(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(u[s[p]]=i[s[p]])}}return u}},41535:(e,r,t)=>{var n=t(62525),o=60103,a=60106;var i=60109,s=60110,u=60112;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),l=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function w(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var k=b.prototype=new w;k.constructor=b,n(k,y.prototype),k.isPureReactComponent=!0;var v=Array.isArray,g=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,a={},i=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)g.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:O.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+P(u,0):n,v(i)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),x(i,r,t,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),r.push(i)),1;if(u=0,n=""===n?".":n+":",v(e))for(var l=0;l<e.length;l++){var c=n+P(s=e[l],l);u+=x(s,r,t,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),l=0;!(s=e.next()).done;)u+=x(s=s.value,r,t,c=n+P(s,l++),i);else if("object"===s)throw r=String(e),Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function N(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},R={transition:0}},27378:(e,r,t)=>{t(41535)},3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},42031:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>u,default:()=>c});var n=t(87462),o=(t(27378),t(3905));const a={title:"Dealing with network errors"},i=void 0,s={unversionedId:"concepts/network-errors",id:"concepts/network-errors",isDocsHomePage:!1,title:"Dealing with network errors",description:"When you use the useResource() hook, React will suspend rendering while the network",source:"@site/../docs/concepts/network-errors.md",sourceDirName:"concepts",slug:"/concepts/network-errors",permalink:"/docs/concepts/network-errors",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/concepts/network-errors.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Dealing with network errors"},sidebar:"docs",previous:{title:"Handling loading state",permalink:"/docs/concepts/loading-state"},next:{title:"Images and other Media",permalink:"/docs/guides/img-media"}},u=[{value:"Error Boundary",id:"error-boundary",children:[],level:2},{value:"Without Error Boundary",id:"without-error-boundary",children:[],level:2},{value:"Errors from Mutates (imperative)",id:"errors-from-mutates-imperative",children:[],level:2}],l={toc:u};function c({components:e,...r}){return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useResource()")," hook, React will suspend rendering while the network\nrequest takes place. But what happens if there is a network failure? It will\nthrow the network error. When this happens you'll want to have an\n",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundary")," set up to handle it.\nMost likely you'll want to place one specifically for network errors at the same place\nyou put your ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense>"),". What you do with the error once you catch it, is of course\nup to you."),(0,o.kt)("h2",{id:"error-boundary"},"Error Boundary"),(0,o.kt)("p",null,"This library provides ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkErrorBoundary")," component that only catches network\nerrors and sends them to a fallback component you provide. Other errors will rethrow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\nimport { RouteChildrenProps } from 'react-router';\n\nconst App = ({ location }: RouteChildrenProps) => (\n  <Suspense fallback={<Spinner />}>\n    <NetworkErrorBoundary>\n      <Routes />\n    </NetworkErrorBoundary>\n  </Suspense>\n);\n")),(0,o.kt)("p",null,"Alternatively you could create your own error boundary where you might\ntry dispatching the errors to another provider to use in a transient\npopup."),(0,o.kt)("p",null,"Additionally you could also use one error boundary for any error\ntype and handle network errors there."),(0,o.kt)("h2",{id:"without-error-boundary"},"Without Error Boundary"),(0,o.kt)("p",null,"Error boundaries provide elegant ways to reduce complexity by handling many\nerrors in the react tree in one location. However, if you find yourself wanting to handle\nerror state manually you can adapt the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/no-suspense"},"useStatefulResource()")," hook."),(0,o.kt)("h2",{id:"errors-from-mutates-imperative"},"Errors from Mutates (imperative)"),(0,o.kt)("p",null,"Since mutations are called imperatively, their function will throw an error if there\nis a network error like 400 because the form values were invalid."),(0,o.kt)("p",null,"Let's look at the update form example from the introduction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const { fetch } = useController();\n\n  return (\n    <Form\n      onSubmit={e =>\n        fetch(ArticleResource.update(), { id }, new FormData(e.target))\n      }\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,o.kt)("p",null,"The function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Form />")," calls the update fetch. This means that it\nwill pass through any errors that occur with that fetch."),(0,o.kt)("p",null,"To handle this the Form component should control form error state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Form({ onSubmit, initialValues, children }: FormState) {\n  const [errors, setErrors] = useState<null | Error>(null);\n  const formData = useFormData(); // this is an example interface\n\n  const handleSubmit = useCallback(() => {\n    try {\n      return onSubmit(formData);\n    } catch (e) {\n      // We set the form error state when we catch an error from our network call\n      setErrors(e);\n    }\n  }, [setErrors, onSubmit]);\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Show the form errors at the top */}\n      <FormError error={error} />\n      {children}\n    </form>\n  );\n}\n")))}c.isMDXComponent=!0}}]);