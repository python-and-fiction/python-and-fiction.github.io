"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[46969],{57519:(e,t,n)=>{n.d(t,{A:()=>p});n(96540);var s=n(18215),i=n(204),r=n(93751),a=n(30214),l=n(56289),o=n(50539),c=n(29030),d=n(74848);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",Object.assign({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]}))}function p(){const e=(0,r.OF)(),t=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(g,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var s=n(18215),i=n(93751),r=n(56289),a=n(81430),l=n(22887),o=n(50539),c=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(r.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:r}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),r&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function b(e){var t;let{item:n}=e;const s=(0,i.Nr)(n),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:r(n.items.length)}):null}function g(e){var t,n;let{item:s}=e;const r=(0,l.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(null!=(t=s.docId)?t:void 0);return(0,u.jsx)(h,{href:s.href,icon:r,title:s.label,description:null!=(n=s.description)?n:null==a?void 0:a.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(b,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(p,Object.assign({},e));const r=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},79995:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(96540);var s=n(68207),i=n(93751),r=n(29030),a=n(99563),l=n(43600),o=n(15833),c=n(55730),d=n(57519),u=n(9303);const m={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};var h=n(74848);function b(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.Ay)(t.image)})}function g(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.$S)();return(0,h.jsxs)("div",{className:m.generatedIndexPage,children:[(0,h.jsx)(o.A,{}),(0,h.jsx)(d.A,{}),(0,h.jsx)(c.A,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.A,{as:"h1",className:m.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(a.A,{items:n.items,className:m.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(l.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function x(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,Object.assign({},e)),(0,h.jsx)(g,Object.assign({},e))]})}},43600:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(50539),i=n(11865),r=n(74848);function a(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(i.A,Object.assign({},t,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(i.A,Object.assign({},n,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},55730:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(18215),i=n(50539),r=n(204),a=n(21858),l=n(74848);function o(e){let{className:t}=e;const n=(0,a.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},15833:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var s=n(18215),i=n(40797),r=n(56289),a=n(50539),l=n(56942),o=n(204),c=n(96351),d=n(21858),u=n(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,Object.assign({},e))}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.A,{to:n,onClick:s,children:(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.A)(),{pluginId:a}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(a),{latestDocSuggestion:m,latestVersionSuggestion:g}=(0,l.HW)(a),x=null!=m?m:(p=g).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:g.label,to:x.path,onClick:()=>d(g.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(g,{className:t,versionMetadata:n}):null}},11865:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(18215),i=n(56289),r=n(74848);function a(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,r.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},81430:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(96540),i=n(40797);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+s.length+": "+e);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}}}]);