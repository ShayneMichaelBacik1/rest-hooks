"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60611:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>d,default:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={id:"redux",title:"Redux integration",original_id:"redux"},i=void 0,s={unversionedId:"guides/redux",id:"version-4.0/guides/redux",isDocsHomePage:!1,title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-4.0/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/4.0/guides/redux",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"redux",title:"Redux integration",original_id:"redux"},sidebar:"version-4.0/docs",previous:{title:"Eager Updates",permalink:"/docs/4.0/guides/eager-updates"},next:{title:"Usage with class components",permalink:"/docs/4.0/guides/class-components"}},d=[{value:"<code>index.tsx</code>",id:"indextsx",children:[],level:4}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("ExternalCacheProvider"),p=l("CacheProvider"),u={toc:d};function m({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,o.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,o.kt)("p",null,"First make sure you have redux installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add redux\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install redux\n")),(0,o.kt)("p",null,"Note: react-redux is ",(0,o.kt)("em",{parentName:"p"},"not")," needed for this integration (though you can use it if you want)."),(0,o.kt)("p",null,"Then you'll want to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/api/ExternalCacheProvider"},"\\",(0,o.kt)(c,{mdxType:"ExternalCacheProvider"}))," instead of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/api/CacheProvider"},"\\",(0,o.kt)(p,{mdxType:"CacheProvider"}))," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,o.kt)("h4",{id:"indextsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  reducer,\n  NetworkManager,\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(\n    manager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    manager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    PromiseifyMiddleware,\n  ),\n);\nconst selector = state => state.restHooks;\n// ...\n")),(0,o.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."))}m.isMDXComponent=!0}}]);