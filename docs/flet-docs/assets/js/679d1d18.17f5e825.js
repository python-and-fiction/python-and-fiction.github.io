"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[98329],{50786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"controls/cupertinosegmentedbutton","title":"CupertinoSegmentedButton","description":"An iOS-style segmented button.","source":"@site/docs/controls/cupertinosegmentedbutton.md","sourceDirName":"controls","slug":"/controls/cupertinosegmentedbutton","permalink":"/docs/flet-docs/docs/controls/cupertinosegmentedbutton","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/cupertinosegmentedbutton.md","tags":[],"version":"current","frontMatter":{"title":"CupertinoSegmentedButton","sidebar_label":"CupertinoSegmentedButton"},"sidebar":"docs","previous":{"title":"CupertinoFilledButton","permalink":"/docs/flet-docs/docs/controls/cupertinofilledbutton"},"next":{"title":"CupertinoSlidingSegmentedButton","permalink":"/docs/flet-docs/docs/controls/cupertinoslidingsegmentedbutton"}}');var o=t(74848),l=t(28453),s=t(65537),c=t(79329);const i={title:"CupertinoSegmentedButton",sidebar_label:"CupertinoSegmentedButton"},a=void 0,d={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>border_color</code>",id:"border_color",level:3},{value:"<code>click_color</code>",id:"click_color",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>selected_color</code>",id:"selected_color",level:3},{value:"<code>selected_index</code>",id:"selected_index",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>trailing_icon</code>",id:"trailing_icon",level:3},{value:"<code>unselected_color</code>",id:"unselected_color",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_change</code>",id:"on_change",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"An iOS-style segmented button."}),"\n","\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://flet-controls-gallery.fly.dev/buttons/cupertinosegmentedbutton",children:"Live example"})}),"\n",(0,o.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,o.jsx)(s.A,{groupId:"language",children:(0,o.jsx)(c.A,{value:"python",label:"Python",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page):\n    page.theme_mode = ft.ThemeMode.LIGHT\n\n    page.add(\n        ft.CupertinoSegmentedButton(\n            selected_index=1,\n            selected_color=ft.Colors.RED_400,\n            on_change=lambda e: print(f"selected_index: {e.data}"),\n            controls=[\n                ft.Text("One"),\n                ft.Container(\n                    padding=ft.padding.symmetric(0, 30),\n                    content=ft.Text("Two"),\n                ),\n                ft.Container(\n                    padding=ft.padding.symmetric(0, 10),\n                    content=ft.Text("Three"),\n                ),\n            ],\n        ),\n    )\n\nft.app(main)\n'})})})}),"\n",(0,o.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/cupertino-segmented-button/basic-cupertino-segmented-button.gif",className:"screenshot-40"}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"border_color",children:(0,o.jsx)(n.code,{children:"border_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the button's border."]}),"\n",(0,o.jsx)(n.h3,{id:"click_color",children:(0,o.jsx)(n.code,{children:"click_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used to fill the background of this control when temporarily interacting with\nthrough a long press or drag."]}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to the ",(0,o.jsx)(n.code,{children:"selected_color"})," with 20% opacity."]}),"\n",(0,o.jsx)(n.h3,{id:"controls",children:(0,o.jsx)(n.code,{children:"controls"})}),"\n",(0,o.jsxs)(n.p,{children:["A list of ",(0,o.jsx)(n.code,{children:"Control"}),"s to display as segments inside the CupertinoSegmentedButton."]}),"\n",(0,o.jsx)(n.h3,{id:"padding",children:(0,o.jsx)(n.code,{children:"padding"})}),"\n",(0,o.jsxs)(n.p,{children:["The button's padding. Padding value is an instance of ",(0,o.jsx)(n.a,{href:"/docs/reference/types/padding",children:(0,o.jsx)(n.code,{children:"Padding"})})," class."]}),"\n",(0,o.jsx)(n.h3,{id:"selected_color",children:(0,o.jsx)(n.code,{children:"selected_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the button when it is selected."]}),"\n",(0,o.jsx)(n.h3,{id:"selected_index",children:(0,o.jsx)(n.code,{children:"selected_index"})}),"\n",(0,o.jsxs)(n.p,{children:["The index (starting from 0) of the selected segment in the ",(0,o.jsx)(n.code,{children:"controls"})," list."]}),"\n",(0,o.jsx)(n.h3,{id:"text",children:(0,o.jsx)(n.code,{children:"text"})}),"\n",(0,o.jsxs)(n.p,{children:["The text to be shown in the button. In case both ",(0,o.jsx)(n.code,{children:"text"})," and ",(0,o.jsx)(n.code,{children:"content"})," are provided, then ",(0,o.jsx)(n.code,{children:"content"})," will be used."]}),"\n",(0,o.jsx)(n.h3,{id:"trailing_icon",children:(0,o.jsx)(n.code,{children:"trailing_icon"})}),"\n",(0,o.jsxs)(n.p,{children:["An optional icon to display at the right of the ",(0,o.jsx)(n.code,{children:"text"})," or ",(0,o.jsx)(n.code,{children:"content"})," control."]}),"\n",(0,o.jsx)(n.h3,{id:"unselected_color",children:(0,o.jsx)(n.code,{children:"unselected_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the button when it is not selected."]}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.h3,{id:"on_change",children:(0,o.jsx)(n.code,{children:"on_change"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires when the state of the button is changed - when one of the ",(0,o.jsx)(n.code,{children:"controls"})," is clicked."]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),o=t(18215),l=t(65627),s=t(56347),c=t(50372),i=t(30604),a=t(11861),d=t(78749);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}),[l,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=r.find((e=>e.default)))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[a,u]=f({queryString:t,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,l]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),x=(()=>{const e=null!=a?a:m;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),o=c[t].value;o!==r&&(a(n),s(o))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var o;const n=i.indexOf(e.currentTarget)-1;t=null!=(o=i[n])?o:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:u,onClick:d},l,{className:(0,o.A)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function _(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,Object.assign({},n,e)),(0,g.jsx)(j,Object.assign({},n,e))]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);