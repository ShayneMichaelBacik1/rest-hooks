"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74681],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),y=i,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||s;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58019:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>a,metadata:()=>o,toc:()=>l,default:()=>c});var r=t(87462),i=(t(67294),t(3905));const s={title:"Defining your Resource types",sidebar_label:"Resource types",id:"resource-types",original_id:"resource-types"},a=void 0,o={unversionedId:"guides/resource-types",id:"version-4.1/guides/resource-types",isDocsHomePage:!1,title:"Defining your Resource types",description:"Typing your data can be very useful and is highly recommended when using this library.",source:"@site/versioned_docs/version-4.1/guides/resource-types.md",sourceDirName:"guides",slug:"/guides/resource-types",permalink:"/docs/4.1/guides/resource-types",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/resource-types.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Defining your Resource types",sidebar_label:"Resource types",id:"resource-types",original_id:"resource-types"},sidebar:"version-4.1/docs",previous:{title:"Fetching multiple resources at once",permalink:"/docs/4.1/guides/fetch-multiple"},next:{title:"URL Patterns",permalink:"/docs/4.1/guides/url"}},l=[{value:"Guidelines:",id:"guidelines",children:[],level:3}],u={toc:l};function c({components:e,...n}){return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Typing your data can be very useful and is highly recommended when using this library.\nOne of the main benefits is to enforce immutability, as this brings certain assurances\nto the correctness of your application as well as enables certain performance enhancements\nwith React."),(0,i.kt)("p",null,"Here we have an example ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.1/api/resource"},"Resource")," for a User typed in typescript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Address {\n  readonly street: string;\n  readonly suite: string;\n  readonly city: string;\n  readonly zipcode: string;\n  readonly geo: {\n    readonly lat: string;\n    readonly lng: string;\n  };\n}\n\nexport type Status = 'pending' | 'rejected' | 'accepted';\n\nexport class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly phone: string = '';\n  readonly website: string = '';\n  readonly address: Address | null = null;\n  readonly status: Status = 'pending';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export class UserResource extends Resource {\n  id = undefined;\n  name = '';\n  username = '';\n  email = '';\n  phone = '';\n  website = '';\n  address = null;\n  status = 'pending';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,i.kt)("h3",{id:"guidelines"},"Guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define all properties you expect to see"),(0,i.kt)("li",{parentName:"ul"},"Mark them as readonly to enforce immutability"),(0,i.kt)("li",{parentName:"ul"},"Give each property as specific and descriptive a type as possible"),(0,i.kt)("li",{parentName:"ul"},"Initialize the property with a sensible default",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will simplify handling so we don't have to deal with ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"s")))))}c.isMDXComponent=!0}}]);