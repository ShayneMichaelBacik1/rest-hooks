/*! For license information please see 9a1b3ab5.9439bbdc.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[96748],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=k.prototype;var b=v.prototype=new g;b.constructor=v,h(b,k.prototype),b.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,E={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,a){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=a;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:o,props:i,_owner:E.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,r,i,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case a:l=!0}}if(l)return s=s(l=e),e=""===i?"."+U(l,0):i,w(s)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),I(s,t,r,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(l=0,i=""===i?".":i+":",w(e))for(var p=0;p<e.length;p++){var u=i+U(o=e[p],p);l+=I(o,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),p=0;!(o=e.next()).done;)l+=I(o=o.value,t,r,u=i+U(o,p++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var a=[],r=0;return I(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},F={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),i=n(72389),s=n(45860),o=n(86010);const l="tabItem_LplD";function p(e){var t,n;const{lazy:i,block:p,defaultValue:u,values:d,groupId:c,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.UB)(),[b,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=c){const e=g[c];null!=e&&e!==b&&h.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==b&&(E(t),w(a),null!=c&&v(c,a))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},m)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":b===t})}),n??t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function u(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},83437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(27378),n(3905)),i=n(9877),s=n(58215);const o={title:"Endpoint"},l=void 0,p={unversionedId:"api/Endpoint",id:"api/Endpoint",title:"Endpoint",description:"Endpoint defines a standard interface that describes the nature of an networking endpoint.",source:"@site/../docs/api/Endpoint.md",sourceDirName:"api",slug:"/api/Endpoint",permalink:"/docs/api/Endpoint",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Endpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1646635311,formattedLastUpdatedAt:"3/7/2022",frontMatter:{title:"Endpoint"},sidebar:"docs",previous:{title:"useLoading()",permalink:"/docs/api/useLoading"},next:{title:"Index",permalink:"/docs/api/Index"}},u={},d=[{value:"Endpoint Members",id:"endpoint-members",level:2},{value:"key: (params) =&gt; string",id:"key",level:3},{value:"sideEffect: true | undefined",id:"sideeffect",level:3},{value:"schema: Schema",id:"schema",level:3},{value:"extend(EndpointOptions): Endpoint",id:"extend",level:3},{value:"EndpointExtraOptions",id:"endpointextraoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength",level:4},{value:"errorPolicy?: (error: any) =&gt; &#39;soft&#39; | undefined",id:"errorpolicy",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale",level:4},{value:"pollFrequency: number",id:"pollfrequency",level:4},{value:"getOptimisticResponse: (snap, ...args) =&gt; fakePayload",id:"getoptimisticresponse",level:4},{value:"optimisticUpdate: (...args) =&gt; fakePayload",id:"optimisticupdate",level:4},{value:"update(normalizedResponseOfThis, ...args) =&gt; ({ endpointKey: (normalizedResponseOfEndpointToUpdate) =&gt; updatedNormalizedResponse) })",id:"update",level:4},{value:"Examples",id:"examples",level:2},{value:"Additional",id:"additional",level:3},{value:"Motivation",id:"motivation",level:2},{value:"What&#39;s in an Endpoint",id:"whats-in-an-endpoint",level:3},{value:"See also",id:"see-also",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Endpoint defines a standard interface that describes the nature of an networking endpoint.\nIt is both strongly typed, and encapsulates runtime-relevant information."),(0,r.kt)(i.Z,{defaultValue:"Interface",values:[{label:"Interface",value:"Interface"},{label:"Class",value:"Class"},{label:"EndpointExtraOptions",value:"EndpointExtraOptions"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Interface",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointExtraOptions<F> {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n"))),(0,r.kt)(s.Z,{value:"Class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Endpoint<F extends (...args: any) => Promise<any>> implements EndpointInterface {\n  constructor(fetchFunction: F, options: EndpointOptions);\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect?: true;\n\n  readonly schema?: Schema;\n\n  fetch: F;\n\n  extend(options: EndpointOptions): Endpoint;\n}\n\nexport interface EndpointOptions extends EndpointExtraOptions {\n  key?: (params: any) => string;\n  sideEffect?: true | undefined;\n  schema?: Schema;\n}\n"))),(0,r.kt)(s.Z,{value:"EndpointExtraOptions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  readonly getOptimisticResponse?: (\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ) => ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  readonly errorPolicy?: (error: any) => 'soft' | undefined;\n  /** User-land extra data to send */\n  readonly extra?: any;\n  /** Enables optimistic updates for this request - uses return value as assumed network response\n   * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead\n   */\n  readonly optimisticUpdate?: (...args: Parameters<F>) => ResolveType<F>;\n}\n")))),(0,r.kt)("p",null,"Package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")),(0,r.kt)("h2",{id:"endpoint-members"},"Endpoint Members"),(0,r.kt)("p",null,"Members double as options (second constructor arg). While none are required, the first few\nhave defaults."),(0,r.kt)("h3",{id:"key"},"key: (params) => string"),(0,r.kt)("p",null,"Serializes the parameters. This is used to build a lookup key in global stores."),(0,r.kt)("p",null,"Default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"`${this.fetch.name} ${JSON.stringify(params)}`;\n")),(0,r.kt)("h3",{id:"sideeffect"},"sideEffect: true | undefined"),(0,r.kt)("p",null,"Used to indicate endpoint might have side-effects (non-idempotent). This restricts it\nfrom being used with ",(0,r.kt)("a",{parentName:"p",href:"./useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"useFetch"},"useFetch()")," as those can hit the\nendpoint an unpredictable number of times."),(0,r.kt)("h3",{id:"schema"},"schema: Schema"),(0,r.kt)("p",null,"Declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("p",null,"Not providing this option means no entities will be extracted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Entity } from '@rest-hooks/normalizr';\nimport { Endpoint } from '@rest-hooks/endpoint';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id;}\n}\n\nconst UserDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`/users/${id}`),\n    { schema: User }\n);\n")),(0,r.kt)("h3",{id:"extend"},"extend(EndpointOptions): Endpoint"),(0,r.kt)("p",null,"Can be used to further customize the endpoint definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const UserDetail = new Endpoint(({ id }) \u21d2 fetch(`/users/${id}`));\n\n\nconst UserDetailNormalized = UserDetail.extend({ schema: User });\n")),(0,r.kt)("p",null,"In addition to the members, ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," can be sent to override the fetch function."),(0,r.kt)("h3",{id:"endpointextraoptions"},"EndpointExtraOptions"),(0,r.kt)("h4",{id:"dataexpirylength"},"dataExpiryLength?: number"),(0,r.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../getting-started/expiry-policy#expiry-time"},"Learn more about expiry time")),(0,r.kt)("h4",{id:"errorexpirylength"},"errorExpiryLength?: number"),(0,r.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"errorpolicy"},"errorPolicy?: (error: any) => 'soft' | undefined"),(0,r.kt)("p",null,"'soft' will use stale data (if exists) in case of error; undefined or not providing option will result\nin error."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../getting-started/expiry-policy#error-policy"},"Learn more about errorPolicy")),(0,r.kt)("h4",{id:"invalidifstale"},"invalidIfStale: boolean"),(0,r.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useSuspense() will suspend when data is stale even if it already exists in cache."),(0,r.kt)("h4",{id:"pollfrequency"},"pollFrequency: number"),(0,r.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,r.kt)("h4",{id:"getoptimisticresponse"},"getOptimisticResponse: (snap, ...args) => fakePayload"),(0,r.kt)("p",null,"When provided, any fetches with this endpoint will behave as though the ",(0,r.kt)("inlineCode",{parentName:"p"},"fakePayload")," return value\nfrom this function was a succesful network response. When the actual fetch completes (regardless\nof failure or success), the optimistic update will be replaced with the actual network response."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guides/optimistic-updates"},"Optimistic update guide")),(0,r.kt)("h4",{id:"optimisticupdate"},"optimisticUpdate: (...args) => fakePayload"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"#getOptimisticResponse"},"endpoint.getOptimisticResponse")," instead."))),(0,r.kt)("h4",{id:"update"},"update(normalizedResponseOfThis, ...args) => ({ ","[endpointKey]",": (normalizedResponseOfEndpointToUpdate) => updatedNormalizedResponse) })"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="UpdateType.ts"',title:'"UpdateType.ts"'},"type UpdateFunction<\n  Source extends EndpointInterface,\n  Updaters extends Record<string, any> = Record<string, any>,\n> = (\n  source: ResultEntry<Source>,\n) => { [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K] };\n")),(0,r.kt)("p",null,"Simplest case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,r.kt)("p",null,"More updates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,r.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,r.kt)("p",null,"This is usage with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      // highlight-start\n      update: (newResourceId: string) => ({\n        [todoList.key({})]: (resourceIds: string[] = []) => [\n          ...resourceIds,\n          newResourceId,\n        ],\n      }),\n      // highlight-end\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{defaultValue:"Basic",values:[{label:"Basic",value:"Basic"},{label:"With Schema",value:"With Schema"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Basic",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json())\n);\n"))),(0,r.kt)(s.Z,{value:"With Schema",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json()),\n  { schema: User }\n);\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserList = new Endpoint(\n  () \u21d2 fetch(`/users/`).then(res => res.json()),\n  { schema: [User] }\n);\n")))),(0,r.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"JS/Node Schema",value:"JS/Node"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UserProfile() {\n  const user = useSuspense(UserDetail, { id });\n  const { fetch } = useController();\n\n  return <UserForm user={user} onSubmit={() => fetch(UserDetail)} />;\n}\n"))),(0,r.kt)(s.Z,{value:"JS/Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await UserDetail({ id: '5' });\nconsole.log(user);\n")))),(0,r.kt)("h3",{id:"additional"},"Additional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/extending-endpoints"},"Custom endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/mocking-unfinished"},"Mocking unfinished endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/optimistic-updates"},"Optimistic updates"))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"There is a distinction between"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are networking API is",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How to make a request, expected response fields, etc."))),(0,r.kt)("li",{parentName:"ul"},"How it is used",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Binding data, polling, triggering imperative fetch, etc.")))),(0,r.kt)("p",null,"Thus, there are many benefits to creating a distinct seperation of concerns between\nthese two concepts."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript Standard Endpoints"),", we define a standard for declaring in\nTypeScript the definition of a networking API."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows API authors to publish npm packages containing their API interfaces"),(0,r.kt)("li",{parentName:"ul"},"Definitions can be consumed by any supporting library, allowing easy consumption across libraries like Vue, React, Angular"),(0,r.kt)("li",{parentName:"ul"},"Writing codegen pipelines becomes much easier as the output is minimal"),(0,r.kt)("li",{parentName:"ul"},"Product developers can use the definitions in a multitude of contexts where behaviors vary"),(0,r.kt)("li",{parentName:"ul"},"Product developers can easily share code across platforms with distinct behaviors needs like React Native and React Web")),(0,r.kt)("h3",{id:"whats-in-an-endpoint"},"What's in an Endpoint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A function that resolves the results"),(0,r.kt)("li",{parentName:"ul"},"A function to uniquely store those results"),(0,r.kt)("li",{parentName:"ul"},"Optional: information about how to store the data in a normalized cache"),(0,r.kt)("li",{parentName:"ul"},"Optional: whether the request could have side effects - to prevent repeat calls")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Index"},"Index"))))}m.isMDXComponent=!0}}]);