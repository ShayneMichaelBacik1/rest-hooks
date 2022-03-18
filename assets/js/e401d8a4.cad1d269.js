"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[48912],{96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9877),s=a(58215),o=a(67294),r=a(87799);function l(e){let{pkgs:t,dev:a=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(s.Z,{value:"yarn"},o.createElement(r.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),o.createElement(s.Z,{value:"npm"},o.createElement(r.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(15814);const o={React:n,...n,...s}},4496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),s=(a(67294),a(3905)),o=a(96497);const r={title:"Usage without Suspense"},l=void 0,i={unversionedId:"guides/no-suspense",id:"version-6.0/guides/no-suspense",title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-6.0/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/6.0/guides/no-suspense",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Usage without Suspense"},sidebar:"version-6.0/docs",previous:{title:"Usage with class components",permalink:"/docs/6.0/guides/class-components"},next:{title:"Legacy browser support",permalink:"/docs/6.0/guides/legacy-browser"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>resources/ProfileResource.ts</code>",id:"resourcesprofileresourcets",level:4},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4},{value:"API",id:"api",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Some libraries you work with may take a ",(0,s.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,s.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(o.Z,{pkgs:"@rest-hooks/legacy",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,s.kt)("h4",{id:"resourcesprofileresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,s.kt)("h4",{id:"profilelisttsx"},(0,s.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null\n  ): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}c.isMDXComponent=!0}}]);