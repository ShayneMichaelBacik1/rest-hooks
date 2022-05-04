"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[63045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),o=n(67294),r=n(72389),i=n(51548),l=n(86010);const s="tabItem_LplD";function u(e){var t,n;const{lazy:r,block:u,defaultValue:c,values:d,groupId:p,className:h}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??m.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.lx)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,i.UB)(),[y,w]=(0,o.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,i.o5)();if(null!=p){const e=k[p];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==y&&(A(t),w(a),null!=p&&b(p,a))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]||E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":y===t})}),n??t)}))),r?(0,o.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},35747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(9877),i=n(58215);const l={title:"Debugging and Inspection",sidebar_label:"Debugging"},s=void 0,u={unversionedId:"guides/debugging",id:"version-6.2/guides/debugging",title:"Debugging and Inspection",description:"By default CacheProvider includes the DevToolsManager,",source:"@site/versioned_docs/version-6.2/guides/debugging.md",sourceDirName:"guides",slug:"/guides/debugging",permalink:"/docs/6.2/guides/debugging",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/debugging.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Debugging and Inspection",sidebar_label:"Debugging"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/6.2/graphql/auth"},next:{title:"Mocking data for Storybook",permalink:"/docs/6.2/guides/storybook"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install browser extension",id:"install-browser-extension",level:3},{value:"Ensure Manager is installed",id:"ensure-manager-is-installed",level:3},{value:"Open dev tools",id:"open-dev-tools",level:3},{value:"Understanding Rest Hooks Cache",id:"understanding-rest-hooks-cache",level:2},{value:"Normalized Cache",id:"normalized-cache",level:3}],p={toc:d};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default ",(0,o.kt)("a",{parentName:"p",href:"../api/CacheProvider"},"CacheProvider")," includes the ",(0,o.kt)("a",{parentName:"p",href:"../api/DevToolsManager"},"DevToolsManager"),",\nwhich means in development mode (",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),") it will send state and actions\nto ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"install-browser-extension"},"Install browser extension"),(0,o.kt)("p",null,"Add the browser extension for\n",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor\n",(0,o.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")),(0,o.kt)("h3",{id:"ensure-manager-is-installed"},"Ensure Manager is installed"),(0,o.kt)("p",null,"By default this is enabled in dev mode. If using your own set of managers, add ",(0,o.kt)("a",{parentName:"p",href:"../api/DevToolsManager"},"DevToolsManager"),"\nto the beginning of the list."),(0,o.kt)("h3",{id:"open-dev-tools"},"Open dev tools"),(0,o.kt)("p",null,"After installing and running your site, a new icon should appear in your location bar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"redux-devtools button",src:n(56535).Z,width:"197",height:"59"})),(0,o.kt)("p",null,"Clicking that will open the inspector, which allows you to observe dispatched actions,\ntheir effect on the cache state as well as current cache state."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"redux-devtools",src:n(24928).Z,width:"1609",height:"1215"})),(0,o.kt)("h2",{id:"understanding-rest-hooks-cache"},"Understanding Rest Hooks Cache"),(0,o.kt)("p",null,"Rest Hooks uses the flux architecture to make it easy to understand and debug. This also\nhas the benefit of making Rest Hooks concurrent mode compatible."),(0,o.kt)("p",null,"The same ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/core-concepts"},"core principals of redux")," apply\nto this store's design."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"flux",src:n(16462).Z,width:"1508",height:"484"})),(0,o.kt)("p",null,"Here we see the data flow."),(0,o.kt)("p",null,"For example, when a useSuspense() hook is first mounted it might"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start by dispatching a fetch action"),(0,o.kt)("li",{parentName:"ul"},"If no identical fetches are in-flight, the central store will then start the network call over HTTP"),(0,o.kt)("li",{parentName:"ul"},"When the network call resolves, a receive action is sent to the store's reducer, updating the state."),(0,o.kt)("li",{parentName:"ul"},"The component is re-rendered with the updated state, resolving the suspense.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../api/Manager#control-flow"},"More about control flow"))),(0,o.kt)("h3",{id:"normalized-cache"},"Normalized Cache"),(0,o.kt)("p",null,"If ",(0,o.kt)("a",{parentName:"p",href:"../api/schema"},"schema"),"s are used, API responses are split into two pieces - entities, and results.\nThis ensures consistency and alows allows for automatic as well as novel performances optimizations, especially\nkey if the data ever changes or is repeated."),(0,o.kt)(r.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"State",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Entities cache",src:n(31923).Z,width:"1600",height:"596"}))),(0,o.kt)(i.Z,{value:"Response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {"id": 1, "title": "this is an entity"},\n  {"id": 2, "title": "this is the second entity"}\n]\n'))),(0,o.kt)(i.Z,{value:"Endpoint",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,o.kt)(i.Z,{value:"Entity",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useSuspense(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,o.kt)("p",null,"Once normalized, these entities and results are merged with the larger cache. Click on the 'state'\ntab in devtools to see the entire state. This can be useful to determine exactly where data is. There is\nalso a 'meta' section of the cache for information like when the request took place (useful for TTL)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dev tools state inspector",src:n(9450).Z,width:"1611",height:"1213"})),(0,o.kt)("p",null,"For monitoring a particular fetch response, it might be more useful to see how the cache state updates.\nClick on the 'Diff' tab to see what changed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dev tools diff inspector",src:n(24928).Z,width:"1609",height:"1215"})),(0,o.kt)("p",null,"Here we can see that an entity was inserted as well as new results."))}h.isMDXComponent=!0},31923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"},16462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flux-a3453b56f949a8a6b15ef20e17a4be71.png"},24928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redux-devtool-diff-734bc565843f889f92ab41ba61081407.png"},9450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redux-devtools-state-225963a3c73504dbc889f4b5562d4c7a.png"},56535:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);