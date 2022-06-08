/*! For license information please see 7190b028.0de64d29.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[72989],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,h(k,y.prototype),k.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,N={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,a){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var D=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case a:l=!0}}if(l)return s=s(l=e),e=""===o?"."+Z(l,0):o,w(s)?(r="",null!=e&&(r=e.replace(D,"$&/")+"/"),C(s,t,r,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(D,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+Z(i=e[c],c);l+=C(i,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)l+=C(i=i.value,t,r,u=o+Z(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _(e,t,n){if(null==e)return e;var a=[],r=0;return C(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[E,N]=(0,r.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==E&&y.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==E&&(x(t),N(a),null!=f&&w(f,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:D,onFocus:T,onClick:T},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var a=n(67294),r=n(98416),o=n(88300),s=n(81593),i=n(63312),l=n(33186),c=n(52803),u=n(44431),d=n.n(u),p=n(49909),m=n(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,a){return n.updatedAt<=a.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:b})}}h.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),y=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),b=(e,t)=>({...t,updatedAt:e.fetchedAt});var v=n(83117),k=n(61313),w=n(86010),E=n(95999),N=n(52263),S=n(72389),x=n(66412),T=n(55423),D=n(84195),Z=n(58699),C=n(28808),_=n(16909),R=n(28224),I=n(7094),A=n(12466),P=n(91262);const F="playgroundContainer_sLUA",L="row_YGZs",B="hidden_Hh8i",O="playgroundHeader_Zx4K",U="playgroundEditor_lYwu",j="playgroundPreview_rk9R",M="playgroundError_sRnA",$="playgroundResult_tefG",q="debugToggle_zlro",z="tabControls_trxh",V="tabs_m54V",G="tab_bTGw",H="selected_QXZk";var X=n(60522),Y=n(90988),K=n(92949);function J(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.I)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(Y.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:q,onClick:t},"Store"),"y"===n?a.createElement(re,null):null)}const ne=(0,a.memo)(te);function ae(){const e=(0,a.useContext)(X.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(J,{value:t})}const re=(0,a.memo)(ae);function oe(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,I.U)(),[i,l]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,A.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&l(e)}const u=(0,a.useCallback)((e=>{c(e.currentTarget),l((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[c,t,i,s]),d=(0,a.useMemo)((()=>[new R.Z,new Z.Z(C.Z)]),[]),p=!("n"===i||!r);return a.createElement(_.nq,{managers:d},a.createElement("div",{className:(0,w.Z)(j,{[B]:p})},a.createElement(P.Z,{fallback:a.createElement(ie,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(ie,null)},a.createElement(k.i5,null),a.createElement(k.IF,{className:M}))))),a.createElement(ne,{selectedValue:i,toggle:u}))}const se=(0,a.memo)(oe);function ie(){return a.createElement("div",null,"Loading...")}function le(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,w.Z)(O,n)},t)}function ce(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(le,null,a.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:$},a.createElement(se,{groupId:t,defaultOpen:n,row:r})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(D.Z);return a.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:o}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,w.Z)(G,{[H]:e===r}),onFocus:t,onClick:t,value:r},o)})))}function de(e){let{children:t}=e;return a.createElement(le,{className:z},a.createElement("div",null,t),a.createElement(ue,null))}function pe(e){let{title:t}=e;const{values:n}=(0,a.useContext)(D.Z),r=n.length>0,o=(0,S.Z)();return a.createElement("div",null,r?a.createElement(de,null,t):a.createElement(le,null,t),a.createElement(k.uz,{key:o,className:U}))}function me(e){let{children:t,transformCode:n,groupId:r,defaultOpen:o,row:s,hidden:i=!1,...l}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,N.Z)(),u=(0,x.p)();l.scope;return a.createElement("div",{className:(0,w.Z)(F,{[L]:s,[B]:i})},a.createElement(k.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},l),"top"===c?a.createElement(a.Fragment,null,a.createElement(ce,{groupId:r,defaultOpen:o,row:s}),a.createElement(pe,null)):a.createElement(a.Fragment,null,a.createElement(pe,null),a.createElement(ce,{groupId:r,defaultOpen:o,row:s}))))}pe.defaultProps={title:a.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var fe=n(71481),he=n(42910);class ge extends i.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const ye=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const be={...r,...s,...c,...l,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:d(),lastUpdated:ye,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:o}=(0,fe.Z)();return a.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:M},t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{o(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ve=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:o="n",row:s=!1}=e;return a.createElement(me,{scope:be,noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:r},"string"==typeof t?t:t.props.children.props.children)},ke=(0,a.memo)(ve)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),r=n(15814);const o={React:a,...a,...r}},53381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var a=n(83117),r=(n(27378),n(3905)),o=n(65488),s=n(85162),i=n(70523),l=n(9790),c=n(35077);const u={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},d=void 0,p={unversionedId:"getting-started/data-dependency",id:"getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useSuspense()",source:"@site/../docs/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/getting-started/data-dependency",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654652765,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/getting-started/entity"}},m={},f=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",level:2},{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Live Crypto Price Example",id:"live-crypto-price-example",level:3}],h={toc:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nin components where we display/use their data directly."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useSuspense(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useSuspense(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)(c.ZP,{mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,r.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,r.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,r.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,r.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data."))),(0,r.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,r.kt)("h3",{id:"stateful"},"Stateful"),(0,r.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useDLE"},"useDLE()")," is provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDLE } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useDLE(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"When data is likely to change due to external factor; ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useSuspense(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,"Subscriptions are orchestrated by ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,r.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,r.kt)(l.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<[{ currency: string }]>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useSuspense(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}g.isMDXComponent=!0},35077:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i});var a=n(83117),r=(n(27378),n(3905)),o=n(93896);const s={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Conditional Dependencies")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`))))}i.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);