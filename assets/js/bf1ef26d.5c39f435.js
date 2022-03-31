"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[27602],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(83117),o=(t(67294),t(3905));const s={title:"Transforming data on fetch",id:"network-transform",original_id:"network-transform"},a=void 0,i={unversionedId:"guides/network-transform",id:"version-2.2/guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/versioned_docs/version-2.2/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/docs/2.2/guides/network-transform",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/network-transform.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Transforming data on fetch",id:"network-transform",original_id:"network-transform"},sidebar:"version-2.2/docs",previous:{title:"Authentication",permalink:"/docs/2.2/guides/auth"},next:{title:"Mocking unfinished endpoints",permalink:"/docs/2.2/guides/mocking-unfinished"}},l={},c=[{value:"Snakes to camels",id:"snakes-to-camels",level:2},{value:"Name calling",id:"name-calling",level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All network requests flow through the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,o.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,o.kt)("p",null,"Commonly APIs are designed with keys using ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CamelResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { camelCase, snakeCase } from 'lodash';\nimport { Method, Resource } from 'rest-hooks';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: { [key: string]: any } = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\n// We can now extend CamelResource instead of Resource to build\n// all of our classes.\nabstract class CamelResource extends Resource {\n  static async fetch<T extends typeof Resource>(\n    this: T,\n    method: Method = 'get',\n    url: string,\n    body?: Readonly<object | string>,\n  ) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body) {\n      body = deeplyApplyKeyTransform(body, snakeCase);\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(method, url, body);\n    // do the conversion!\n    return deeplyApplyKeyTransform(jsonResponse, camelCase);\n  }\n}\n")),(0,o.kt)("h2",{id:"name-calling"},"Name calling"),(0,o.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ArticleResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// We're using camelCase now as well ;)\nclass ArticleResource extends CamelResource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly carrotsUsed: number = 0;\n\n  static async fetch<T extends typeof Resource>(\n    this: T,\n    method: Method = 'get',\n    url: string,\n    body?: Readonly<object | string>,\n  ) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body && 'carrotsUsed' in body) {\n      // caller should manage body, so we don't want to modify it\n      body = { ...body };\n      body.carrotsUsedIsThisNameTooLong = body.carrotsUsed;\n      delete body.carrotsUsed;\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(method, url, body);\n    // only replace the name if it exists. This also helps us ignore list responses.\n    if ('carrotsUsedIsThisNameTooLong' in jsonResponse) {\n      // ok to mutate jsonResponse since we control it\n      jsonResponse.carrotsUsed = jsonResponse.carrotsUsedIsThisNameTooLong;\n      delete jsonResponse.carrotsUsedIsThisNameTooLong;\n    }\n    return jsonResponse;\n  }\n}\n")),(0,o.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,o.kt)("inlineCode",{parentName:"h2"},"Id")),(0,o.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,o.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,o.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET https://mystreamsite.tv/ntucker/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StreamResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nabstract class StreamResource extends CamelResource {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n\n  static detailShape<T extends typeof Resource>(\n    this: T,\n  ): ReadShape<SchemaDetail<AbstractInstanceType<T>>, { username: string }> {\n    const superShape = super.detailShape();\n    return {\n      ...superShape,\n      fetch: async (params: { username: string }, body?: Readonly<object | string>) => {\n        const response = await superShape.fetch(params, body);\n        response.username = params.username;\n        return response;\n      },\n    };\n  }\n}\n")))}p.isMDXComponent=!0}}]);