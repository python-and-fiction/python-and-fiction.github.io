"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[9003],{4070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/types/browsercontextmenu","title":"BrowserContextMenu","description":"This class is meant to be used as a property of Page.browsercontextmenu.","source":"@site/docs/reference/types/browsercontextmenu.md","sourceDirName":"reference/types","slug":"/reference/types/browsercontextmenu","permalink":"/docs/flet-docs/docs/reference/types/browsercontextmenu","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/browsercontextmenu.md","tags":[],"version":"current","frontMatter":{"title":"BrowserContextMenu","sidebar_label":"BrowserContextMenu"},"sidebar":"docs","previous":{"title":"WindowResizeEvent","permalink":"/docs/flet-docs/docs/reference/types/windowresizeevent"},"next":{"title":"Window","permalink":"/docs/flet-docs/docs/reference/types/window"}}');var a=n(74848),s=n(28453);n(65537),n(79329);const l={title:"BrowserContextMenu",sidebar_label:"BrowserContextMenu"},o=void 0,u={},c=[{value:"<code>disabled</code>",id:"disabled",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>disable()</code>",id:"disable",level:3},{value:"<code>enable()</code>",id:"enable",level:3},{value:"Usage Example",id:"usage-example",level:2}];function i(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This class is meant to be used as a property of ",(0,a.jsx)(t.a,{href:"/docs/controls/page#browser_context_menu",children:(0,a.jsx)(t.code,{children:"Page.browser_context_menu"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"BrowserContextMenu"})," class has the following properties:"]}),"\n",(0,a.jsx)(t.h3,{id:"disabled",children:(0,a.jsx)(t.code,{children:"disabled"})}),"\n",(0,a.jsx)(t.p,{children:"Whether the context menu is disabled."}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(t.h3,{id:"disable",children:(0,a.jsx)(t.code,{children:"disable()"})}),"\n",(0,a.jsx)(t.p,{children:"Disables the context menu."}),"\n",(0,a.jsx)(t.h3,{id:"enable",children:(0,a.jsx)(t.code,{children:"enable()"})}),"\n",(0,a.jsx)(t.p,{children:"Enables the context menu."}),"\n",(0,a.jsx)(t.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.add(\n        ft.OutlinedButton(\n            "Disable browser context menu",\n            on_click=lambda _: page.browser_context_menu.disable(),\n        ),\n        ft.OutlinedButton(\n            "Enable browser context menu",\n            on_click=lambda _: page.browser_context_menu.enable(),\n        ),\n    )\n\n\nft.app(main)\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(18215),s=n(65627),l=n(56347),o=n(50372),u=n(30604),c=n(11861),i=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function b(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=b(e),[l,u]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,i.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(c(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:i},s,{className:(0,a.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,Object.assign({},t,e)),(0,x.jsx)(w,Object.assign({},t,e))]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);