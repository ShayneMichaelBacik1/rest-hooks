"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[58767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(k,s(s({ref:t},c),{},{components:n})):o.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(83117),r=(n(67294),n(3905));const i={title:"Unit testing hooks",id:"unit-testing-hooks",original_id:"unit-testing-hooks"},s=void 0,a={unversionedId:"guides/unit-testing-hooks",id:"version-2.2/guides/unit-testing-hooks",title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/versioned_docs/version-2.2/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/2.2/guides/unit-testing-hooks",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Unit testing hooks",id:"unit-testing-hooks",original_id:"unit-testing-hooks"},sidebar:"version-2.2/docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/2.2/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/2.2/guides/unit-testing-components"}},l={},p=[{value:"Example:",id:"example",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,r.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,r.kt)("p",null,"We want a ",(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," function that renders in the context of both\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,r.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," generator."),(0,r.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from 'rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock('http://test.com')\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    renderRestHook.cleanup();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detailShape(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBe(null);\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))}u.isMDXComponent=!0}}]);