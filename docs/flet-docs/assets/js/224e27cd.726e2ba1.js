"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[16582],{12187:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"controls/progressbar","title":"ProgressBar","description":"A material design linear progress indicator, also known as a progress bar.","source":"@site/docs/controls/progressbar.md","sourceDirName":"controls","slug":"/controls/progressbar","permalink":"/docs/flet-docs/docs/controls/progressbar","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/progressbar.md","tags":[],"version":"current","frontMatter":{"title":"ProgressBar","sidebar_label":"ProgressBar"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/flet-docs/docs/controls/text"},"next":{"title":"ProgressRing","permalink":"/docs/flet-docs/docs/controls/progressring"}}');var s=n(74848),a=n(28453),l=n(65537),o=n(79329);const i={title:"ProgressBar",sidebar_label:"ProgressBar"},c=void 0,d={},u=[{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"<code>bar_height</code>",id:"bar_height",level:3},{value:"<code>border_radius</code>",id:"border_radius",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>semantics_label</code>",id:"semantics_label",level:3},{value:"<code>semantics_value</code>",id:"semantics_value",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"A material design linear progress indicator, also known as a progress bar."}),"\n",(0,s.jsx)(r.p,{children:"A control that shows progress along a line."}),"\n",(0,s.jsx)(r.p,{children:"There are two kinds of linear progress indicators:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"Determinate"}),". Determinate progress indicators have a specific value at each point in time, and the value should increase monotonically from ",(0,s.jsx)(r.code,{children:"0.0"})," to ",(0,s.jsx)(r.code,{children:"1.0"}),", at which time the indicator is complete. To create a determinate progress indicator, use a non-null value between ",(0,s.jsx)(r.code,{children:"0.0"})," and ",(0,s.jsx)(r.code,{children:"1.0"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"Indeterminate"}),". Indeterminate progress indicators do not have a specific value at each point in time and instead indicate that progress is being made without indicating how much progress remains. To create an indeterminate progress indicator, use a null value."]}),"\n"]}),"\n","\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://flet-controls-gallery.fly.dev/displays/progressbar",children:"Live example"})}),"\n",(0,s.jsx)(l.A,{groupId:"language",children:(0,s.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'from time import sleep\n\nimport flet as ft\n\ndef main(page: ft.Page):\n    pb = ft.ProgressBar(width=400)\n\n    page.add(\n        ft.Text("Linear progress indicator", style="headlineSmall"),\n        ft.Column([ ft.Text("Doing something..."), pb]),\n        ft.Text("Indeterminate progress bar", style="headlineSmall"),\n        ft.ProgressBar(width=400, color="amber", bgcolor="#eeeeee"),\n    )\n\n    for i in range(0, 101):\n        pb.value = i * 0.01\n        sleep(0.1)\n        page.update()\n\nft.app(main)\n'})})})}),"\n",(0,s.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/progress-bar/custom-progress-bars.gif",className:"screenshot-30"}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h3,{id:"value",children:(0,s.jsx)(r.code,{children:"value"})}),"\n",(0,s.jsxs)(r.p,{children:["The value of this progress indicator. A value of ",(0,s.jsx)(r.code,{children:"0.0"})," means no progress and ",(0,s.jsx)(r.code,{children:"1.0"})," means that progress is complete. The\nvalue will be clamped to be in the range ",(0,s.jsx)(r.code,{children:"0.0"})," - ",(0,s.jsx)(r.code,{children:"1.0"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Defaults to ",(0,s.jsx)(r.code,{children:"None"}),", meaning that this progress indicator is indeterminate - displays a predetermined animation that does\nnot indicate how much actual progress is being made."]}),"\n",(0,s.jsx)(r.h3,{id:"bar_height",children:(0,s.jsx)(r.code,{children:"bar_height"})}),"\n",(0,s.jsx)(r.p,{children:"The minimum height of the line used to draw the linear indicator."}),"\n",(0,s.jsxs)(r.p,{children:["Defaults to ",(0,s.jsx)(r.code,{children:"4"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"border_radius",children:(0,s.jsx)(r.code,{children:"border_radius"})}),"\n",(0,s.jsxs)(r.p,{children:["The border radius of both the indicator and the track. Border radius is an instance\nof ",(0,s.jsx)(r.a,{href:"/docs/reference/types/borderradius",children:(0,s.jsx)(r.code,{children:"BorderRadius"})})," class."]}),"\n",(0,s.jsxs)(r.p,{children:["Defaults to ",(0,s.jsx)(r.code,{children:"border_radius.all(0)"})," - rectangular shape."]}),"\n",(0,s.jsx)(r.h3,{id:"bgcolor",children:(0,s.jsx)(r.code,{children:"bgcolor"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/colors",children:"Color"})," of the track being filled by the linear indicator."]}),"\n",(0,s.jsx)(r.h3,{id:"color",children:(0,s.jsx)(r.code,{children:"color"})}),"\n",(0,s.jsxs)(r.p,{children:["The progress indicator's ",(0,s.jsx)(r.a,{href:"/docs/reference/colors",children:"color"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"semantics_label",children:(0,s.jsx)(r.code,{children:"semantics_label"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/docs/controls/semantics#label",children:(0,s.jsx)(r.code,{children:"Semantics.label"})})," for this progress indicator."]}),"\n",(0,s.jsx)(r.h3,{id:"semantics_value",children:(0,s.jsx)(r.code,{children:"semantics_value"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/docs/controls/semantics#value",children:(0,s.jsx)(r.code,{children:"Semantics.value"})})," for this progress indicator."]}),"\n",(0,s.jsx)(r.h3,{id:"tooltip",children:(0,s.jsx)(r.code,{children:"tooltip"})}),"\n",(0,s.jsx)(r.p,{children:"The text displayed when hovering the mouse over the control."})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79329:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:r})}},65537:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),s=n(18215),a=n(65627),l=n(56347),o=n(50372),i=n(30604),c=n(11861),d=n(78749);function u(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}),[a,s])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,t.useState)((()=>function(e){var r;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(r=t.find((e=>e.default)))?r:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(r),[s,a]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=i.indexOf(r),s=o[n].value;s!==t&&(c(r),l(s))},u=e=>{var r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const r=i.indexOf(e.currentTarget)+1;n=null!=(t=i[r])?t:i[0];break}case"ArrowLeft":{var s;const r=i.indexOf(e.currentTarget)-1;n=null!=(s=i[r])?s:i[i.length-1];break}}null==(r=n)||r.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{i.push(e)},onKeyDown:u,onClick:d},a,{className:(0,s.A)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},r,e)),(0,v.jsx)(j,Object.assign({},r,e))]})}function w(e){const r=(0,b.A)();return(0,v.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function l(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);