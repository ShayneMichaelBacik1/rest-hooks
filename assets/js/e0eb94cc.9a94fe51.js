"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74342:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>a,default:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={id:"unit-testing-components",title:"Unit testing components",original_id:"unit-testing-components"},s=void 0,c={unversionedId:"guides/unit-testing-components",id:"version-4.2/guides/unit-testing-components",isDocsHomePage:!1,title:"Unit testing components",description:"If you need to add unit tests to your components to check some behavior you might want",source:"@site/versioned_docs/version-4.2/guides/unit-testing-components.md",sourceDirName:"guides",slug:"/guides/unit-testing-components",permalink:"/docs/4.2/guides/unit-testing-components",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-components.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"unit-testing-components",title:"Unit testing components",original_id:"unit-testing-components"},sidebar:"version-4.2/docs",previous:{title:"Unit testing hooks",permalink:"/docs/4.2/guides/unit-testing-hooks"},next:{title:"Fetch then Render",permalink:"/docs/4.2/guides/fetch-then-render"}},a=[{value:"<code>__tests__/fixtures.ts</code>",id:"__tests__fixturests",children:[],level:4},{value:"<code>__tests__/ArticleList.tsx</code>",id:"__tests__articlelisttsx",children:[],level:4}],l=(u="MockProvider",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:a};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to add unit tests to your components to check some behavior you might want\navoid dealing with network fetch cycle as that is probably orthogonal to what your are\ntrying to test. Using ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.2/api/MockProvider"},"\\",(0,o.kt)(l,{mdxType:"MockProvider"}))," in our tests allow\nus to prime the cache with provided fixtures so the components will immediately render\nwith said results."),(0,o.kt)("h4",{id:"__tests__fixturests"},(0,o.kt)("inlineCode",{parentName:"h4"},"__tests__/fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n  ],\n  empty: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [],\n    },\n  ],\n  loading: [],\n};\n")),(0,o.kt)("h4",{id:"__tests__articlelisttsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"__tests__/ArticleList.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { render } from '@testing-library/react';\nimport { MockProvider } from '@rest-hooks/test';\n\nimport ArticleList from 'components/ArticleList';\nimport results from './fixtures';\n\ndescribe('<ArticleList />', () => {\n  it('renders', () => {\n    const tree = (\n      <MockProvider results={results.full}>\n        <ArticleList maxResults={10} />\n      </MockProvider>\n    );\n    const { queryByText } = render(tree);\n    const content = queryByText(results.full.result[0].content);\n    expect(content).toBeDefined();\n  });\n});\n")))}d.isMDXComponent=!0}}]);