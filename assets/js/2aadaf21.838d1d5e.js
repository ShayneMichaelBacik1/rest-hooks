"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},41395:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),r=n(72389),i=n(80944),l=n(83039),s=n(86010);const d="tabItem_1uMI";function c(e){var t,n;const{lazy:a,block:r,defaultValue:c,values:p,groupId:u,className:m}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((({props:{value:e,label:t}})=>({value:e,label:t}))),g=(0,l.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.Z)(),[k,w]=(0,o.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=u){const e=v[u];null!=e&&e!==k&&f.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==k&&(T(t),w(a),null!=u&&y(u,a))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]||E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},f.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":k===e}),key:e,ref:e=>E.push(e),onKeyDown:j,onFocus:N,onClick:N},t??e)))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(79443);const r=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(41395),o=n(58215),r=n(67294);function i({children:e}){return r.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(o.Z,{value:"ts"},e[0]),r.createElement(o.Z,{value:"js"},e[1]))}},15910:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>s,toc:()=>d,default:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=(n(41395),n(58215),n(70523));const i={title:"Endpoint"},l=void 0,s={unversionedId:"getting-started/endpoint",id:"version-5.0/getting-started/endpoint",isDocsHomePage:!1,title:"Endpoint",description:"Endpoints describe an asynchronous API. This includes both runtime behavior as well as (optionally) typing.",source:"@site/versioned_docs/version-5.0/getting-started/endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/endpoint",permalink:"/docs/5.0/getting-started/endpoint",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/endpoint.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Endpoint"},sidebar:"version-5.0/docs",previous:{title:"Installation",permalink:"/docs/5.0/getting-started/installation"},next:{title:"Data Dependencies",permalink:"/docs/5.0/getting-started/data-dependency"}},d=[{value:"More than just a function",id:"more-than-just-a-function",children:[{value:"Members",id:"members",children:[],level:3},{value:"Endpoint.extend()",id:"endpointextend",children:[],level:3}],level:2}],c={toc:d};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints")," describe an asynchronous ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),". This includes both runtime behavior as well as (optionally) typing."),(0,o.kt)(r.Z,{mdxType:"LanguageTabs"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await todoDetail({ id: '1' }));\n")),(0,o.kt)("samp",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}\n')))),(0,o.kt)("p",null,"We will likely want to use this endpoint in many places with differing needs.\nBy defining a reusable function of ",(0,o.kt)("em",{parentName:"p"},"just")," the network definition, we empower\nits use in ",(0,o.kt)("em",{parentName:"p"},"any")," context."),(0,o.kt)("p",null,"This is especially useful when we start adding more information related to the\nendpoint. For instance, TypeScript definitions help us avoid common mistakes, typos\nand speed up development with autocomplete."),(0,o.kt)("p",null,"By ",(0,o.kt)("em",{parentName:"p"},"tightly coupling")," the interface definition, while ",(0,o.kt)("em",{parentName:"p"},"loosely coupling")," its usage,\nwe reduce boilerplate, complexity, and common mistakes, while increasing performance and\nenabling global application consistency and integrity even in the face of unreliable\nasynchronous data."),(0,o.kt)("h2",{id:"more-than-just-a-function"},"More than just a function"),(0,o.kt)("p",null,"In addition to an async function and (optional) types, ",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s are objects,\nallowing them to provide any additional relevant information about the endpoint itself."),(0,o.kt)("p",null,"For instance, to allow integration into a cache as well as knowing when to recompute and/or refetch\nwhen parameters change, Endpoints have a ",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint#key-params--string"},"key()")," member that serializes\nthe endpoint and parameters to a unique string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log(todoDetail.key({ id: \'1\' }));\n// fetchTodoDetail {"id":"1"}\n')),(0,o.kt)("h3",{id:"members"},"Members"),(0,o.kt)("p",null,"The second optional arg is an object to initialize the endpoint with. By avoiding arrow functions,\nwe can use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this"),"\nto access other members we defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todoDetailWithCustomizedKey = new Endpoint(fetchTodoDetail, {\n  key({ id }) {\n    return `${this.endpointIdentifier}/${id}`;\n  },\n  endpointIdentifier: 'todoDetail',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(todoDetailWithCustomizedKey.key({ id: '1' }));\n// todoDetail/1\n")),(0,o.kt)("h3",{id:"endpointextend"},"Endpoint.extend()"),(0,o.kt)("p",null,"For convenience, ",(0,o.kt)("a",{parentName:"p",href:".../api/Endpoint#extendendpointoptions-endpoint"},"extend()")," allows type-correct\nprototypical inheritance extensions of an endpoint."),(0,o.kt)("p",null,"This is greatly reduces boilerplate when strong patterns are established for an API like\nauthentication."),(0,o.kt)("p",null,"Here we show the benefits of customizing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"method")," member."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = function ({ id }) {\n  return fetch(`${this.urlBase}/todos/${id}`, { method: this.method }).then(\n    res => res.json(),\n  );\n};\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  method: 'GET',\n  urlBase: 'https://jsonplaceholder.typicode.com',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todoCreate = todoDetail.extend({ method: 'POST' });\nconst todoUpdate = todoDetail.extend({ method: 'PUT' });\n")))}p.isMDXComponent=!0}}]);