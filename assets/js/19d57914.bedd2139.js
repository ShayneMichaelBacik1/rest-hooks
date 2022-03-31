"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[76313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={id:"requestshape",title:"RequestShape",original_id:"requestshape"},o=void 0,s={unversionedId:"api/requestshape",id:"version-4.1/api/requestshape",title:"RequestShape",description:"RequestShape is the most basic interface sent to hooks telling rest-hooks how to",source:"@site/versioned_docs/version-4.1/api/RequestShape.md",sourceDirName:"api",slug:"/api/requestshape",permalink:"/docs/4.1/api/requestshape",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/RequestShape.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"requestshape",title:"RequestShape",original_id:"requestshape"}},l={},p=[{value:"type: &#39;read&#39; | &#39;mutate&#39; | &#39;delete&#39;",id:"type-read--mutate--delete",level:2},{value:"&#39;read&#39;",id:"read",level:3},{value:"&#39;mutate&#39;",id:"mutate",level:3},{value:"&#39;delete&#39;",id:"delete",level:3},{value:"fetch(url: string, body: Payload): Promise&lt;any&gt;",id:"fetchurl-string-body-payload-promiseany",level:2},{value:"getUrl(params: Param): string",id:"geturlparams-param-string",level:2},{value:"schema: Schema",id:"schema-schema",level:2},{value:"options?: RequestOptions",id:"options-requestoptions",level:2},{value:"RequestOptions",id:"requestoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength-number",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength-number",level:4},{value:"pollFrequency: number",id:"pollfrequency-number",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale-boolean",level:4},{value:"Examples",id:"examples",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestShape")," is the most basic interface sent to hooks telling rest-hooks how to\nhandle the request. Several methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," return ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestShapes"),", which offers a bridge between\nboth APIs. In fact, using ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is not even needed to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"RestProvider")," and\nsimply operates as a convenience to organize schemas."),(0,r.kt)("p",null,"Because of the different capabilities of each shape, some shapes won't be usable with\ncertain hooks and their interaction is not well defined. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache()"),"\nonly works with ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadShape"),"s because this is the only shape that specifies the\nspecific results needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestShape<\n  S extends Schema,\n  Params extends Readonly<object>,\n  Body extends Readonly<object> | void\n> {\n  readonly type: 'read' | 'mutate' | 'delete';\n  fetch(url: string, body: Body): Promise<any>;\n  getUrl(params: Params): string;\n  readonly schema: S;\n  readonly options?: RequestOptions;\n}\n")),(0,r.kt)("h2",{id:"type-read--mutate--delete"},"type: 'read' | 'mutate' | 'delete'"),(0,r.kt)("p",null,"Defines the type of the shape, informing how it should be used."),(0,r.kt)("h3",{id:"read"},"'read'"),(0,r.kt)("p",null,"This uses the response body to update which results are returned by a particular url."),(0,r.kt)("h3",{id:"mutate"},"'mutate'"),(0,r.kt)("p",null,"Mutate will look at the response for updated entities to update the normalized\ncache from. This is useful to ensure that whatever entities are changed by the\nmutation update properly in the cache without having to do another request."),(0,r.kt)("h3",{id:"delete"},"'delete'"),(0,r.kt)("p",null,"It sends a request and represents a success response to mean that entity is deleted.\nUpon success it will purge that entity from the cache."),(0,r.kt)("h2",{id:"fetchurl-string-body-payload-promiseany"},"fetch(url: string, body: Payload): Promise\\<any",">"),(0,r.kt)("p",null,"Handles performing an actual network request. This usually just proxies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"\nfetch method with a defined ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),"."),(0,r.kt)("h2",{id:"geturlparams-param-string"},"getUrl(params: Param): string"),(0,r.kt)("p",null,"Turns the provided object params into a url to fetch."),(0,r.kt)("h2",{id:"schema-schema"},"schema: Schema"),(0,r.kt)("p",null,"Schemas define the shape of the response data and are used to parse and update\nthe normalized cache. Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#schema"},"schemas at the normalizr documentation"),"."),(0,r.kt)("h2",{id:"options-requestoptions"},"options?: RequestOptions"),(0,r.kt)("h3",{id:"requestoptions"},"RequestOptions"),(0,r.kt)("p",null,"Additional optional request options passed on to network manager and reducer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RequestOptions {\n  readonly dataExpiryLength?: number;\n  readonly errorExpiryLength?: number;\n  readonly pollFrequency?: number;\n  readonly invalidIfStale?: boolean;\n}\n")),(0,r.kt)("h4",{id:"dataexpirylength-number"},"dataExpiryLength?: number"),(0,r.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"errorexpirylength-number"},"errorExpiryLength?: number"),(0,r.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"pollfrequency-number"},"pollFrequency: number"),(0,r.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,r.kt)("h4",{id:"invalidifstale-boolean"},"invalidIfStale: boolean"),(0,r.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useResource() will suspend when data is stale even if it already exists in cache."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/endpoints"},"Custom endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/mocking-unfinished"},"Mocking unfinished endpoints"))))}d.isMDXComponent=!0}}]);