"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[57997],{30166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"controls/cupertinoactivityindicator","title":"CupertinoActivityIndicator","description":"An iOS-style activity indicator that spins clockwise.","source":"@site/docs/controls/cupertinoactivityindicator.md","sourceDirName":"controls","slug":"/controls/cupertinoactivityindicator","permalink":"/docs/flet-docs/docs/controls/cupertinoactivityindicator","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/cupertinoactivityindicator.md","tags":[],"version":"current","frontMatter":{"title":"CupertinoActivityIndicator","sidebar_label":"CupertinoActivityIndicator"},"sidebar":"docs","previous":{"title":"CircleAvatar","permalink":"/docs/flet-docs/docs/controls/circleavatar"},"next":{"title":"Icon","permalink":"/docs/flet-docs/docs/controls/icon"}}');var a=n(74848),i=n(28453),l=n(65537),o=n(79329);const s={title:"CupertinoActivityIndicator",sidebar_label:"CupertinoActivityIndicator"},c=void 0,u={},d=[{value:"Examples",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>radius</code>",id:"radius",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"An iOS-style activity indicator that spins clockwise."}),"\n","\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://flet-controls-gallery.fly.dev/displays/cupertinoactivityindicator",children:"Live example"})}),"\n",(0,a.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,a.jsx)(l.A,{groupId:"language",children:(0,a.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import flet as ft\n\ndef main(page):\n    page.theme_mode = ft.ThemeMode.LIGHT\n\n    page.add(\n        ft.CupertinoActivityIndicator(\n            radius=50,\n            color=ft.Colors.RED,\n            animating=True,\n        )\n    )\n\nft.app(main)\n"})})})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/cupertino-activity-indicator/basic-cupertino-activity-indicator.png",className:"screenshot-40"}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(t.h3,{id:"animating",children:(0,a.jsx)(t.code,{children:"animating"})}),"\n",(0,a.jsx)(t.p,{children:"Whether the activity indicator is running its animation."}),"\n",(0,a.jsx)(t.h3,{id:"color",children:(0,a.jsx)(t.code,{children:"color"})}),"\n",(0,a.jsxs)(t.p,{children:["Defines the ",(0,a.jsx)(t.a,{href:"/docs/reference/colors",children:"color"})," of the activity indicator."]}),"\n",(0,a.jsx)(t.h3,{id:"radius",children:(0,a.jsx)(t.code,{children:"radius"})}),"\n",(0,a.jsx)(t.p,{children:"The radius of the activity indicator."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),a=n(18215),i=n(65627),l=n(56347),o=n(50372),s=n(30604),c=n(11861),u=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:n,groupId:a}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=null!=c?c:v;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),a=o[n].value;a!==r&&(c(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=s.indexOf(e.currentTarget)+1;n=null!=(r=s[t])?r:s[0];break}case"ArrowLeft":{var a;const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(y,Object.assign({},t,e))]})}function I(e){const t=(0,m.A)();return(0,g.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);