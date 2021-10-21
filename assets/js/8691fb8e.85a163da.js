/*! For license information please see 8691fb8e.85a163da.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[27020],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,l,c=i(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))n.call(a,u)&&(c[u]=a[u]);if(t){l=t(a);for(var d=0;d<l.length;d++)r.call(a,l[d])&&(c[l[d]]=a[l[d]])}}return c}},41535:(e,t,n)=>{"use strict";var r=n(62525),i=60103,o=60106;var a=60109,l=60110,c=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),a=d("react.provider"),l=d("react.context"),c=d("react.forward_ref"),d("react.suspense"),d("react.suspense_list"),s=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var b=v.prototype=new h;b.constructor=v,r(b,g.prototype),b.isPureReactComponent=!0;var k=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var A=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+P(c,0):r,k(a)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),S(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",k(e))for(var s=0;s<e.length;s++){var u=r+P(l=e[s],s);c+=S(l,t,n,u,a)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),s=0;!(l=e.next()).done;)c+=S(l=l.value,t,n,u=r+P(l,s++),a);else if("object"===l)throw t=String(e),Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},Z={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),i=n(79443);const o=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},74576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r=n(67294),i=n(22015),o=n(88300),a=n(71481),l=n(42910),c=n(99876),s=n(63312),u=n(57536),d=n(44431),p=n.n(d),f=n(53775);class m extends f.Z{constructor(...e){super(...e),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class y extends m{constructor(...e){super(...e),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:h,update:t=>({[e]:(e=[])=>[...e,t]})})}static delete(){return super.delete().extend({optimisticUpdate:v})}}y.urlRoot="https://jsonplaceholder.typicode.com/todos";const g=(e,t)=>({id:e.id,...t}),h=(e,t)=>t,v=e=>e;var b=n(87462),k=n(50776),E=n(86010),w=n(24973),O=n(52263),x=n(72389),j=n(83583),A=n(55423),P=n(84195),S=n(58699),C=n(28808),_=n(50246),D=n(25038),Z=n(80944),N=n(83039),T=n(91262);const U="playgroundContainer_1vxj",F="row_3g4V",I="hidden_2rz-",R="playgroundHeader_2X75",M="playgroundEditor_1tQZ",$="playgroundPreview_3d_E",L="playgroundResult_5IAE",H="debugToggle_2KFu",V="tabControls_vH2K",q="tabs_1lMe",z="tab_3qyO",B="selected_3AAM";var X=n(60522),J=n(80126),K=n(85350);function G({value:e}){const{isDarkTheme:t}=(0,K.Z)(),n=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(J.ZP,{shouldExpandNode:Q,data:e,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":t?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:({style:e},t)=>({style:{...e,"font-family":"arial"}}),arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:({style:e},t)=>({style:{...e,color:n[t]}}),base0B:"rgb(191, 199, 213)"}})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function W({toggle:e,selectedValue:t}){return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:e},"Store"),"y"===t?r.createElement(te,null):null)}const Y=(0,r.memo)(W);function ee(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(G,{value:t})}const te=(0,r.memo)(ee);function ne({groupId:e,defaultOpen:t,row:n}){const{tabGroupChoices:i,setTabGroupChoices:o}=(0,Z.Z)(),[a,l]=(0,r.useState)(t),{blockElementScrollPositionUntilNextRender:c}=(0,N.o5)();if(null!=e){const t=i[e];null!=t&&t!==a&&l(t)}const s=(0,r.useCallback)((t=>{c(t.currentTarget),l((e=>"y"===e?"n":"y")),o(e,"y"===a?"n":"y")}),[c,e,a,o]),u=(0,r.useMemo)((()=>[new D.Z,new S.Z(C.Z)]),[]),d=!("n"===a||!n);return r.createElement(_.nq,{managers:u},r.createElement("div",{className:(0,E.Z)($,{[I]:d})},r.createElement(T.Z,{fallback:r.createElement(ie,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ie,null)},r.createElement(k.i5,null),r.createElement(k.IF,null))))),r.createElement(Y,{selectedValue:a,toggle:s}))}const re=(0,r.memo)(ne);function ie(){return r.createElement("div",null,"Loading...")}function oe({children:e,className:t}){return r.createElement("div",{className:(0,E.Z)(R,t)},e)}function ae({groupId:e,defaultOpen:t,row:n}){return r.createElement("div",null,r.createElement(oe,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:L},r.createElement(re,{groupId:e,defaultOpen:t,row:n})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(P.Z);return r.createElement("div",{className:q,role:"tablist","aria-orientation":"horizontal"},n.map((({value:n,label:i})=>r.createElement("div",{role:"tab",tabIndex:e===n?0:-1,"aria-selected":e===n,key:n,className:(0,E.Z)(z,{[B]:e===n}),onFocus:t,onClick:t,value:n},i))))}function ce({children:e}){return r.createElement(oe,{className:V},r.createElement("div",null,e),r.createElement(le,null))}function se({title:e}){const{values:t}=(0,r.useContext)(P.Z),n=t.length>0,i=(0,x.Z)();return r.createElement("div",null,n?r.createElement(ce,null,e):r.createElement(oe,null,e),r.createElement(k.uz,{key:i,className:M}))}function ue({children:e,transformCode:t,groupId:n,defaultOpen:i,row:o,hidden:a=!1,...l}){const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,O.Z)(),s=(0,j.Z)();l.scope;return r.createElement("div",{className:(0,E.Z)(U,{[F]:o,[I]:a})},r.createElement(k.nu,(0,b.Z)({code:e.replace(/\n$/,""),transformCode:t||(e=>(e=>A.transpileModule(e,{compilerOptions:{module:A.ModuleKind.ESNext,target:A.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:s},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(ae,{groupId:n,defaultOpen:i,row:o}),r.createElement(se,null)):r.createElement(r.Fragment,null,r.createElement(se,null),r.createElement(ae,{groupId:n,defaultOpen:i,row:o}))))}se.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class de extends s.Z{constructor(...e){super(...e),this.id=""}pk(){return this.id}}de.schema={updatedAt:Date};const pe=new o.Z((({id:e})=>fetch(`/api/currentTime/${e}`).then((e=>e.json()))),{schema:de});const fe={...i,...c,...u,mockFetch:(e,t,n=150)=>{const r=(...t)=>new Promise((r=>setTimeout((()=>r(e(...t))),n)));return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:p(),lastUpdated:pe,TimedEntity:de,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function({children:e}){const[t,n]=r.useState(0),{resetEntireStore:i}=a.Z();return r.createElement(l.Z,{key:t,fallbackComponent:({error:e})=>r.createElement(r.Fragment,null,r.createElement("div",null,e.message," ",r.createElement("i",null,e.status)),r.createElement("button",{onClick:()=>{i(),n((e=>e+1))}},"Clear Error"))},e)},TodoResource:class extends y{static list(){const e=super.list();return e.extend({fetch:async(...t)=>(await e(...t)).slice(0,5)})}}},me=({children:e,groupId:t,hidden:n=!1,defaultOpen:i="n",row:o=!1})=>r.createElement(ue,{scope:fe,noInline:!0,groupId:t,defaultOpen:i,row:o,hidden:n},"string"==typeof e?e:e.props.children.props.children),ye=(0,r.memo)(me)},86369:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(87462),i=(n(27378),n(3905)),o=n(74576);const a={title:"Validation"},l=void 0,c={unversionedId:"getting-started/validation",id:"getting-started/validation",isDocsHomePage:!1,title:"Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/getting-started/validation",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1634354993,formattedLastUpdatedAt:"10/15/2021",frontMatter:{title:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/getting-started/expiry-policy"},next:{title:"Usage",permalink:"/docs/rest/usage"}},s=[{value:"Field check",id:"field-check",children:[{value:"All fields check",id:"all-fields-check",children:[],level:3}],level:2},{value:"Partial results",id:"partial-results",children:[],level:2}],u={toc:s};function d({components:e,...t}){return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(o.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n      '3': { id: '3', title: { complex: 'second', object: 5 } },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useResource(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(o.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useResource(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)(o.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockArticleList = mockFetch(\n  () => [\n    { id: '1', title: 'first' },\n    { id: '2', title: 'second' },\n  ],\n  'mockArticleList',\n);\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': {\n        id: '1',\n        title: 'first',\n        content: 'long',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n      '2': {\n        id: '2',\n        title: 'second',\n        content: 'short',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n    }[id]),\n  'mockArticleDetail',\n);\n\nclass ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst articleList = new Endpoint(mockArticleList, { schema: [ArticlePreview] });\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useResource(articleDetail, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{cursor: 'pointer'}}>&lt;</a> {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useResource(articleList, {});\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div key={article.pk()} onClick={() => setRoute(article.id)} style={{cursor: 'pointer'}}>\n            {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);