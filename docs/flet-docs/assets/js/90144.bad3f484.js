"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[90144],{83750:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>M,Ki:()=>_,kJ:()=>p,x:()=>r,e7:()=>m,J_:()=>f,Gx:()=>C});var s=a(96540),n=a(26849),l=a(69062),i=a(74848);function r(){var e;const t=(0,l.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,i.jsx)(o.Provider,{value:l,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(29030),u=a(40797);const h=e=>new Date(e).toISOString();function g(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function x(e,t,a){return e?{image:v({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a})}:{}}function p(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:l}}=e,i=""+t.url+l;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){var s,n;const{assets:l,frontMatter:i,metadata:r}=e,{date:o,title:c,description:m,lastUpdatedAt:d}=r,u=null!=(s=l.image)?s:i.image,p=null!=(n=i.keywords)?n:[],f=""+t.url+r.permalink,j=d?h(d):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:c,name:c,description:m,datePublished:o},j?{dateModified:j}:{},g(r.authors),x(u,a,c),p?{keywords:p}:{})}(e.content,t,a)))}}function f(){var e,t;const a=r(),{assets:s,metadata:n}=m(),{siteConfig:l}=(0,u.A)(),{withBaseUrl:i}=(0,d.hH)(),{date:o,title:c,description:p,frontMatter:f,lastUpdatedAt:j}=n,v=null!=(e=s.image)?e:f.image,b=null!=(t=f.keywords)?t:[],w=j?h(j):void 0,A=""+l.url+n.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:c,name:c,description:p,datePublished:o},w?{dateModified:w}:{},g(n.authors),x(v,i,c),b?{keywords:b}:{},{isPartOf:{"@type":"Blog","@id":""+l.url+a.blogBasePath,name:a.blogTitle}})}function j(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}function v(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var b=a(56347),w=a(56289),A=a(11861),N=a(30214);function C(e){const{pathname:t}=(0,b.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,N.ys)(e.permalink,t))}(e,t)))),[e,t])}function _(e){const t=(0,A.$z)(e,(e=>""+new Date(e.date).getFullYear())),a=Object.entries(t);return a.reverse(),a}function M(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:l}=e;return(0,i.jsx)("ul",{className:a,children:t.map((e=>(0,i.jsx)("li",{className:s,children:(0,i.jsx)(w.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:l,children:e.title})},e.permalink)))})}},60569:(e,t,a)=>{a.d(t,{A:()=>L});var s=a(98587),n=a(96540),l=a(18215),i=a(27912),r=a(86682),o=a(50539),c=a(83750),m=a(53115),d=a(9303),u=a(74848);function h(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(d.A,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,m.p)().blog.sidebar.groupByYear){const e=(0,c.Ki)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,u.jsx)(h,{year:t,yearGroupHeadingClassName:a,children:(0,u.jsx)(s,{items:n})},t)}))})}return(0,u.jsx)(s,{items:t})}const x=(0,n.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",j="sidebarItemList_Yudw",v="sidebarItem__DBe",b="sidebarItemLink_mo7H",w="sidebarItemLinkActive_I1ZP",A="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,u.jsx)(c.OU,{items:t,ulClassName:(0,l.A)(j,"clean-list"),liClassName:v,linkClassName:b,linkActiveClassName:w})};function C(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,l.A)(p,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,l.A)(f,"margin-bottom--md"),children:t.title}),(0,u.jsx)(x,{items:a,ListComponent:N,yearGroupHeadingClassName:A})]})})}const _=(0,n.memo)(C);var M=a(63065);const k="yearGroupHeading_QT03",y=e=>{let{items:t}=e;return(0,u.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function O(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,u.jsx)(x,{items:a,ListComponent:y,yearGroupHeadingClassName:k})}function P(e){return(0,u.jsx)(M.GX,{component:O,props:e})}const B=(0,n.memo)(P);function I(e){let{sidebar:t}=e;const a=(0,r.l)();return null!=t&&t.items.length?"mobile"===a?(0,u.jsx)(B,{sidebar:t}):(0,u.jsx)(_,{sidebar:t}):null}const T=["sidebar","toc","children"];function L(e){const{sidebar:t,toc:a,children:n}=e,r=(0,s.A)(e,T),o=t&&t.items.length>0;return(0,u.jsx)(i.A,Object.assign({},r,{children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(I,{sidebar:t}),(0,u.jsx)("main",{className:(0,l.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:n}),a&&(0,u.jsx)("div",{className:"col col--2",children:a})]})})}))}},2384:(e,t,a)=>{a.d(t,{A:()=>J});var s=a(96540),n=a(18215),l=a(83750),i=a(74848);function r(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var o=a(56289);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,l.e7)(),{permalink:r,title:m}=a,d=s?"h1":"h2";return(0,i.jsx)(d,{className:(0,n.A)(c.title,t),children:s?m:(0,i.jsx)(o.A,{to:r,children:m})})}var d=a(50539),u=a(81430),h=a(98569);const g={container:"container_mt6G"};function x(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function f(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,l.e7)(),{date:s,readingTime:r}=a,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,n.A)(g.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:s,formattedDate:(c=s,o.format(new Date(c)))}),void 0!==r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(x,{readingTime:r})]})]});var c}const v="githubSvg_Uu4N";const b="xSvg_y3PF";const w=function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e,{children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,i.jsx)("path",{d:"M3.6 9h16.8"}),(0,i.jsx)("path",{d:"M3.6 15h16.8"}),(0,i.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,i.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}))};const A="instagramSvg_YC40";const N="threadsSvg_PTXY";const C={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},_={twitter:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid"},e,{children:(0,i.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}))},label:"Twitter"},github:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 250",preserveAspectRatio:"xMidYMid",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,n.A)(e.className,v),children:(0,i.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}))},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,i.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}))},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e,{children:(0,i.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}))},label:"LinkedIn"},x:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,n.A)(e.className,b),children:(0,i.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}))},label:"X"},bluesky:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 226"},e,{children:(0,i.jsx)("path",{fill:"#1185FE",d:"M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"})}))},label:"Bluesky"},instagram:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,n.A)(e.className,A),children:(0,i.jsx)("path",{d:"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"})}))},label:"Instagram"},threads:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Threads",viewBox:"0 0 192 192",width:"1em",fill:"none",height:"1em",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,n.A)(e.className,N),children:(0,i.jsx)("path",{d:"M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z"})}))},label:"Threads"},mastodon:{Icon:function(e){const t=(0,s.useId)();return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 61 65",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{fill:"url(#"+t+")",d:"M60.754 14.39C59.814 7.406 53.727 1.903 46.512.836 45.294.656 40.682 0 29.997 0h-.08C19.23 0 16.938.656 15.72.836 8.705 1.873 2.299 6.82.745 13.886c-.748 3.48-.828 7.338-.689 10.877.198 5.075.237 10.142.697 15.197a71.482 71.482 0 0 0 1.664 9.968c1.477 6.056 7.458 11.096 13.317 13.152a35.718 35.718 0 0 0 19.484 1.028 28.365 28.365 0 0 0 2.107-.576c1.572-.5 3.413-1.057 4.766-2.038a.154.154 0 0 0 .062-.118v-4.899a.146.146 0 0 0-.055-.111.145.145 0 0 0-.122-.028 54 54 0 0 1-12.644 1.478c-7.328 0-9.298-3.478-9.863-4.925a15.258 15.258 0 0 1-.857-3.882.142.142 0 0 1 .178-.145 52.976 52.976 0 0 0 12.437 1.477c1.007 0 2.012 0 3.02-.026 4.213-.119 8.654-.334 12.8-1.144.103-.02.206-.038.295-.065 6.539-1.255 12.762-5.196 13.394-15.176.024-.393.083-4.115.083-4.523.003-1.386.446-9.829-.065-15.017Z"}),(0,i.jsx)("path",{fill:"#fff",d:"M50.394 22.237v17.35H43.52V22.749c0-3.545-1.478-5.353-4.483-5.353-3.303 0-4.958 2.139-4.958 6.364v9.217h-6.835V23.76c0-4.225-1.657-6.364-4.96-6.364-2.988 0-4.48 1.808-4.48 5.353v16.84H10.93V22.237c0-3.545.905-6.362 2.715-8.45 1.868-2.082 4.317-3.152 7.358-3.152 3.519 0 6.178 1.354 7.951 4.057l1.711 2.871 1.714-2.871c1.773-2.704 4.432-4.056 7.945-4.056 3.038 0 5.487 1.069 7.36 3.152 1.81 2.085 2.712 4.902 2.71 8.449Z"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:t,x1:30.5,x2:30.5,y1:0,y2:65,gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#6364FF"}),(0,i.jsx)("stop",{offset:1,stopColor:"#563ACC"})]})})]}))},label:"Mastodon"},youtube:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 256 180",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e,{children:[(0,i.jsx)("path",{d:"M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z",fill:"red"}),(0,i.jsx)("path",{fill:"#FFF",d:"m102.421 128.06 66.328-38.418-66.328-38.418z"})]}))},label:"YouTube"},twitch:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 2400 2800",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{d:"m2200 1300-400 400h-400l-350 350v-350H600V200h1600z",fill:"#fff"}),(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:"M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z",fill:"#9146ff"}),(0,i.jsx)("path",{d:"M1700 550h200v600h-200zM1150 550h200v600h-200z",fill:"#9146ff"})]})]}))},label:"Twitch"}};function M(e){let{platform:t,link:a}=e;const{Icon:s,label:l}=null!=(c=_[r=t])?c:{Icon:w,label:r};var r,c;return(0,i.jsx)(o.A,{className:C.authorSocialLink,href:a,title:l,children:(0,i.jsx)(s,{className:(0,n.A)(C.authorSocialLink)})})}function k(e){var t;let{author:a}=e;const s=Object.entries(null!=(t=a.socials)?t:{});return(0,i.jsx)("div",{className:C.authorSocials,children:s.map((e=>{let[t,a]=e;return(0,i.jsx)(M,{platform:t,link:a},t)}))})}var y=a(9303);const O={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function P(e){return e.href?(0,i.jsx)(o.A,Object.assign({},e)):(0,i.jsx)(i.Fragment,{children:e.children})}function B(e){let{title:t}=e;return(0,i.jsx)("small",{className:O.authorTitle,title:t,children:t})}function I(e){let{name:t,as:a}=e;return a?(0,i.jsx)(y.A,{as:a,className:O.authorName,children:t}):(0,i.jsx)("span",{className:O.authorName,children:t})}function T(e){let{count:t}=e;return(0,i.jsx)("span",{className:(0,n.A)(O.authorBlogPostCount),children:t})}function L(e){let{as:t,author:a,className:s,count:l}=e;const{name:r,title:o,url:c,imageURL:m,email:d,page:u}=a,h=(null==u?void 0:u.permalink)||c||d&&"mailto:"+d||void 0;return(0,i.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",s,O["author-as-"+t]),children:[m&&(0,i.jsx)(P,{href:h,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:(0,n.A)("avatar__photo",O.authorImage),src:m,alt:r})}),(r||o)&&(0,i.jsxs)("div",{className:(0,n.A)("avatar__intro",O.authorDetails),children:[(0,i.jsxs)("div",{className:"avatar__name",children:[r&&(0,i.jsx)(P,{href:h,children:(0,i.jsx)(I,{name:r,as:t})}),void 0!==l&&(0,i.jsx)(T,{count:l})]}),!!o&&(0,i.jsx)(B,{title:o}),(0,i.jsx)(k,{author:a})]})]})}const U={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function H(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,l.e7)();if(0===a.length)return null;const r=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",r?U.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>{var a;return(0,i.jsx)("div",{className:(0,n.A)(!r&&(o?"col col--12":"col col--6"),r?U.imageOnlyAuthorCol:U.authorCol),children:(0,i.jsx)(L,{author:Object.assign({},e,{imageURL:null!=(a=s.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function F(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{}),(0,i.jsx)(H,{})]})}var R=a(30099),Z=a(86221);function G(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,l.e7)();return(0,i.jsx)("div",{id:s?R.LU:void 0,className:(0,n.A)("markdown",a),children:(0,i.jsx)(Z.A,{children:t})})}var S=a(204),z=a(5783),V=a(56239),D=a(98587);const Y=["blogPostTitle"];function E(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function X(e){const{blogPostTitle:t}=e,a=(0,D.A)(e,Y);return(0,i.jsx)(o.A,Object.assign({"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,i.jsx)(E,{})}))}function W(){const{metadata:e,isBlogPostPage:t}=(0,l.e7)(),{tags:a,title:s,editUrl:r,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=a.length>0;if(!(u||d||r))return null;if(t){const e=!!(r||m||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",S.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(V.A,{tags:a})})}),e&&(0,i.jsx)(z.A,{className:(0,n.A)("margin-top--sm",S.G.blog.blogFooterEditMetaRow),editUrl:r,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":d}),children:(0,i.jsx)(V.A,{tags:a})}),d&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(X,{blogPostTitle:s,to:e.permalink})})]})}function J(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,l.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,n.A)(s,a),children:[(0,i.jsx)(F,{}),(0,i.jsx)(G,{children:t}),(0,i.jsx)(W,{})]})}},11865:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(18215),n=a(56289),l=a(74848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:r}=e;return(0,l.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},23953:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(18215),n=a(56289);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(74848);function r(e){let{permalink:t,label:a,count:r,description:o}=e;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(l.tag,r?l.tagWithCount:l.tagRegular),children:[a,r&&(0,i.jsx)("span",{children:r})]})}},56239:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(18215),n=a(50539),l=a(23953);const i={tags:"tags_jXut",tag:"tag_QGVx"};var r=a(74848);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:i.tag,children:(0,r.jsx)(l.A,Object.assign({},e))},e.permalink)))})]})}},81430:(e,t,a)=>{a.d(t,{W:()=>c});var s=a(96540),n=a(40797);const l=["zero","one","two","few","many","other"];function i(e){return l.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),r}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+s.length+": "+e);const n=a.select(t),l=a.pluralForms.indexOf(n);return s[Math.min(l,s.length-1)]}(a,t,e)}}}}]);