"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[15001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"useLoading()"},i=void 0,s={unversionedId:"api/useLoading",id:"version-6.2/api/useLoading",title:"useLoading()",description:"Helps track loading state of imperative async functions.",source:"@site/versioned_docs/version-6.2/api/useLoading.md",sourceDirName:"api",slug:"/api/useLoading",permalink:"/docs/6.2/api/useLoading",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useLoading.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"useLoading()"},sidebar:"docs",previous:{title:"useCancelling()",permalink:"/docs/6.2/api/useCancelling"},next:{title:"Endpoint",permalink:"/docs/6.2/api/Endpoint"}},c={},l=[{value:"Todo toggle example",id:"todo-toggle-example",level:3}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function useLoading<F extends (...args: any) => Promise<any>>(\n  func: F,\n  deps: readonly any[] = [],\n): [F, boolean];\n")),(0,r.kt)("p",null,"Helps track loading state of imperative async functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nfunction Button({ onClick, children, ...props }) {\n  const [clickHandler, loading, error] = useLoading(onClick);\n  return (\n    <button onClick={clickHandler} {...props}>\n      {loading ? 'Loading...' : children}\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"Part of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")),(0,r.kt)("h3",{id:"todo-toggle-example"},"Todo toggle example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback } from 'react';\nimport { useController } from 'rest-hooks';\nimport { useLoading } from '@rest-hooks/hooks';\n\nimport TodoResource from 'resources/TodoResource';\n\ninterface Props {\n  todo: TodoResource;\n}\n\nfunction TodoListItem({ todo }) {\n  const { fetch } = useController();\n\n  const [toggleHandler, loading, error] = useLoading(\n    (e: ChangeEvent<HTMLInputElement>) =>\n      fetch(\n        TodoResource.partialUpdate(),\n        { id },\n        { completed: e.currentTarget.checked },\n      ),\n    [fetch],\n  );\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        checked={todo.completed}\n        onChange={toggleHandler}\n      />\n      {loading ? <Spinner /> : null}\n      {error ? <Error>{error}</Error> : null}\n      {todo.title}\n    </div>\n  );\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Eslint configuration")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since we use the deps list, be sure to add useLoading to the 'additionalHooks' configuration\nof ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"react-hooks/exhaustive-deps")," rule if you use it."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "rules": {\n    // ...\n    "react-hooks/exhaustive-deps": ["warn", {\n      "additionalHooks": "(useLoading)"\n    }]\n  }\n}\n')))))}d.isMDXComponent=!0}}]);