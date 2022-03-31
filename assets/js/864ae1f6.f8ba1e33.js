"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[98611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),i=n(72389),l=n(51548),s=n(86010);const o="tabItem_LplD";function u(e){var t,n;const{lazy:i,block:u,defaultValue:c,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.lx)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,l.UB)(),[g,N]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=p){const e=b[p];null!=e&&e!==g&&y.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==g&&(T(t),N(a),null!=p&&k(p,a))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:E,onClick:E},i,{className:(0,s.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":g===t})}),n??t)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9877),r=n(58215),i=n(67294);function l(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},25709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),i=n(70523);const l={title:"Values"},s=void 0,o={unversionedId:"api/Values",id:"version-5.0/api/Values",title:"Values",description:"Like Array, Values are unbounded in size. The definition here describes the types of values to expect,",source:"@site/versioned_docs/version-5.0/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/docs/5.0/api/Values",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Values.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Values"},sidebar:"version-5.0/docs",previous:{title:"Union",permalink:"/docs/5.0/api/Union"},next:{title:"Delete",permalink:"/docs/5.0/api/Delete"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Output",id:"output",level:4},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4},{value:"Output",id:"output-1",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,r.kt)("p",null,"Describes a map whose values follow the given schema."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() { return `${this.id}` };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  pk() { return this.id };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Item: { '1': { id: 1 }, '2': { id: 2 } }\n  },\n  result: { firstThing: 1, secondThing: 2 }\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admin: Admin,\n    user: User\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input: any, parent: unknown, key: string) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  pk() { return this.id; }\n}\nclass Admin extends Entity {\n  pk() { return this.id; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input, parent, key) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: {\n    '1': { id: 1, schema: 'Admin' },\n    '2': { id: 2, schema: 'User' }\n  }\n}\n")))}p.isMDXComponent=!0}}]);