"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47508],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);function n(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(83117),n=a(67294),s=a(72389),r=a(51548),o=a(86010);const i="tabItem_LplD";function u(e){var t,a;const{lazy:s,block:u,defaultValue:c,values:p,groupId:d,className:m}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??g.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),h=(0,r.lx)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=g[0])?void 0:a.props.value);if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,r.UB)(),[f,y]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,r.o5)();if(null!=d){const e=v[d];null!=e&&e!==f&&b.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),l=b[a].value;l!==f&&(x(t),y(l),null!=d&&w(d,l))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},m)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:T,onClick:T},s,{className:(0,o.Z)("tabs__item",i,null==s?void 0:s.className,{"tabs__item--active":f===t})}),a??t)}))),s?(0,n.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,s.Z)();return n.createElement(u,(0,l.Z)({key:String(t)},e))}},96497:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9877),n=a(58215),s=a(67294),r=a(95652);function o(e){let{pkgs:t,dev:a=!1}=e;return s.createElement(l.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(n.Z,{value:"yarn"},s.createElement(r.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),s.createElement(n.Z,{value:"npm"},s.createElement(r.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(15814);const s={React:l,...l,...n}},42430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=a(83117),n=(a(67294),a(3905)),s=a(96497);const r={title:"Legacy browser support"},o=void 0,i={unversionedId:"guides/legacy-browser",id:"version-6.0/guides/legacy-browser",title:"Legacy browser support",description:"Rest Hooks is designed to work out of the box with most tooling.",source:"@site/versioned_docs/version-6.0/guides/legacy-browser.md",sourceDirName:"guides",slug:"/guides/legacy-browser",permalink:"/docs/6.0/guides/legacy-browser",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/legacy-browser.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Legacy browser support"},sidebar:"version-6.0/docs",previous:{title:"Usage without Suspense",permalink:"/docs/6.0/guides/no-suspense"},next:{title:"Index",permalink:"/docs/6.0/api/"}},u={},c=[{value:"Transpile packages",id:"transpile-packages",level:3},{value:"Polyfills",id:"polyfills",level:3},{value:"<code>index.tsx</code>",id:"indextsx",level:4}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rest Hooks is designed to work out of the box with most tooling."),(0,n.kt)("p",null,"If you see, ",(0,n.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),"\nthis is most likely due to targeting Internet Explorer support with a custom webpack configuration.\nThis will occur even when using a modern browser, so long as your target (typically set with ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/browserslist"},"browserslist"),")\nincludes legacy browsers like Internet Explorer."),(0,n.kt)("p",null,"In this case, follow the instructions below to ensure compatibility."),(0,n.kt)("h3",{id:"transpile-packages"},"Transpile packages"),(0,n.kt)("p",null,"Adding ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-plugin-modern-npm"},"webpack-plugin-modern-npm")," will ensure compatibility of all installed\npackages with legacy browsers."),(0,n.kt)(s.Z,{pkgs:"webpack-plugin-modern-npm",dev:!0,mdxType:"PkgTabs"}),(0,n.kt)("p",null,"Then install the plugin by adding to webpack config."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const ModernNpmPlugin = require('webpack-plugin-modern-npm');\n\nmodule.exports = {\n  plugins: [\n    new ModernNpmPlugin()\n  ]\n};\n")),(0,n.kt)("h3",{id:"polyfills"},"Polyfills"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"},"CRA polyfill"),"\nor follow instructions below."),(0,n.kt)(s.Z,{pkgs:"core-js whatwg-fetch",mdxType:"PkgTabs"}),(0,n.kt)("h4",{id:"indextsx"},(0,n.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\nimport 'whatwg-fetch';\n// place the above line at top\n")))}d.isMDXComponent=!0}}]);