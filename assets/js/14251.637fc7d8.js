"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[14251],{78665:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(67294),r=a(86010),n=a(32600),i=a(39960);const s="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",o="sidebarItem_CF0Q",d="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD";var h=a(95999);function g(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}function p(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(g,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},38561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(67294),r=a(86010),n=a(95999),i=a(39960),s=a(44996),m=a(51548),c=a(18780),o=a(64269),d=a(86753);const u="blogPostTitle_rzP5",h="blogPostData_Zg1s",g="blogPostDetailsFull_h6_j";var p=a(20062);const E="image_o0gy";function v(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function b(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i,email:s}=t,m=n||s&&`mailto:${s}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(v,{href:m},l.createElement("img",{className:E,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const Z="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?N:Z),key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function k(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,s.C)(),{children:E,frontMatter:v,assets:b,metadata:Z,truncated:f,isBlogPostPage:N=!1}=e,{date:k,formattedDate:T,permalink:y,tags:P,readingTime:L,title:w,editUrl:C,authors:I}=Z,R=b.image??v.image,A=!N&&f,U=P.length>0,x=N?"h1":"h2";return l.createElement("article",{className:N?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(x,{className:u,itemProp:"headline"},N?w:l.createElement(i.Z,{itemProp:"url",to:y},w)),l.createElement("div",{className:(0,r.Z)(h,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},T),void 0!==L&&l.createElement(l.Fragment,null," \xb7 ",t(L))),l.createElement(_,{authors:I,assets:b})),R&&l.createElement("meta",{itemProp:"image",content:a(R,{absolute:!0})}),l.createElement("div",{id:N?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(o.Z,null,E)),(U||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",N&&g)},U&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(p.Z,{tags:P})),N&&C&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:C})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":U})},l.createElement(i.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(95999),n=a(83117),i=a(86010);const s="iconEdit_dcUD";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var c=a(51548);function o(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(83117),r=a(67294),n=a(86010),i=a(95999),s=a(51548);const m="anchorWithStickyNavbar_mojV",c="anchorWithHideOnScrollNavbar_R0VQ";function o(e){let{as:t,id:a,...o}=e;const{navbar:{hideOnScroll:d}}=(0,s.LU)();return a?r.createElement(t,(0,l.Z)({},o,{className:(0,n.Z)("anchor",d?c:m),id:a}),o.children,r.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,o)}function d(e){let{as:t,...a}=e;return"h1"===t?r.createElement("h1",(0,l.Z)({},a,{id:void 0}),a.children):r.createElement(o,(0,l.Z)({as:t},a))}},64269:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(67294),r=a(3905),n=a(83117),i=a(35742);var s=a(95652);var m=a(39960);var c=a(86010),o=a(51548);const d="details_BAp3";function u(e){let{...t}=e;return l.createElement(o.PO,(0,n.Z)({},t,{className:(0,c.Z)("alert alert--info",d,t.className)}))}var h=a(39649);function g(e){return l.createElement(h.Z,e)}const p="img_E7b_";const E={head:function(e){const t=l.Children.map(e.children,(e=>function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){const{mdxType:t,originalType:a,...r}=e.props;return l.createElement(e.props.originalType,r)}return e}(e)));return l.createElement(i.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(e.props.mdxType)))?l.createElement("code",e):l.createElement(s.Z,e)},a:function(e){return l.createElement(m.Z,e)},pre:function(e){var t;return l.createElement(s.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),a=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((e=>e!==a)));return l.createElement(u,(0,n.Z)({},e,{summary:a}),r)},ul:function(e){return l.createElement("ul",(0,n.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return l.createElement("img",(0,n.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,p))}));var t},h1:e=>l.createElement(g,(0,n.Z)({as:"h1"},e)),h2:e=>l.createElement(g,(0,n.Z)({as:"h2"},e)),h3:e=>l.createElement(g,(0,n.Z)({as:"h3"},e)),h4:e=>l.createElement(g,(0,n.Z)({as:"h4"},e)),h5:e=>l.createElement(g,(0,n.Z)({as:"h5"},e)),h6:e=>l.createElement(g,(0,n.Z)({as:"h6"},e))};function v(e){let{children:t}=e;return l.createElement(r.Zo,{components:E},t)}},71750:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294),r=a(39960);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(86010),n=a(39960);const i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";function c(e){const{permalink:t,name:a,count:c}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(i,c?m:s)},a,c&&l.createElement("span",null,c))}},20062:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(86010),n=a(95999),i=a(7774);const s="tags_XVD_",m="tag_JSN8";function c(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);