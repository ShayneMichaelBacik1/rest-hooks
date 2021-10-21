"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1963:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>a,toc:()=>l,default:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Mocking data for Storybook",id:"storybook",original_id:"storybook"},s=void 0,a={unversionedId:"guides/storybook",id:"version-4.5/guides/storybook",isDocsHomePage:!1,title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/versioned_docs/version-4.5/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/4.5/guides/storybook",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Mocking data for Storybook",id:"storybook",original_id:"storybook"},sidebar:"version-4.5/docs",previous:{title:"Infinite Scrolling",permalink:"/docs/4.5/guides/infinite-scrolling-pagination"},next:{title:"Unit testing hooks",permalink:"/docs/4.5/guides/unit-testing-hooks"}},l=[{value:"Setup",id:"setup",children:[],level:2},{value:"Fixtures",id:"fixtures",children:[{value:"<code>fixtures.ts</code>",id:"fixturests",children:[],level:4}],level:2},{value:"Story",id:"story",children:[{value:"<code>ArticleListStory.tsx</code>",id:"articleliststorytsx",children:[],level:4}],level:2}],c=(u="MockProvider",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:l};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/4.5/api/MockProvider"},"\\",(0,o.kt)(c,{mdxType:"MockProvider"}))," enables easy loading of fixtures to test the\nhappy path of components. Loading state is bypassed by initializing the cache ahead of time."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ArticleResource from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useResource(ArticleResource.listShape(), { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("h4",{id:"fixturests"},(0,o.kt)("inlineCode",{parentName:"h4"},"fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n  ],\n  empty: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [],\n    },\n  ],\n  loading: [],\n};\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"We use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@storybook/addon-knobs"},"storybook knob"),"\nto make it easy for the user to select between each dataset to compare how it looks."),(0,o.kt)("h4",{id:"articleliststorytsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ArticleListStory.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { select } from '@storybook/addon-knobs';\nimport { MockProvider } from '@rest-hooks/test';\nimport ArticleList from 'ArticleList';\nimport options from './fixtures';\n\nconst label = 'Data';\nconst defaultValue = options.full;\nconst groupId = 'GROUP-ID1';\n\nstoriesOf('name', module).add('Name', () => {\n  const results = select(label, options, defaultValue, groupId);\n  return (\n    <MockProvider results={results}>\n      <ArticleList maxResults={10} />\n    </MockProvider>\n  );\n});\n")))}p.isMDXComponent=!0}}]);