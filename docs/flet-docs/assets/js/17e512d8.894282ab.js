"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[75064],{34030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"controls/cupertinolisttile","title":"CupertinoListTile","description":"An iOS-style list tile. The CupertinoListTile is a Cupertino equivalent of Material ListTile.","source":"@site/docs/controls/cupertinolisttile.md","sourceDirName":"controls","slug":"/controls/cupertinolisttile","permalink":"/docs/flet-docs/docs/controls/cupertinolisttile","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/cupertinolisttile.md","tags":[],"version":"current","frontMatter":{"title":"CupertinoListTile","sidebar_label":"CupertinoListTile"},"sidebar":"docs","previous":{"title":"Container","permalink":"/docs/flet-docs/docs/controls/container"},"next":{"title":"DataTable","permalink":"/docs/flet-docs/docs/controls/datatable"}}');var i=n(74848),r=n(28453),o=n(65537),s=n(79329);const c={title:"CupertinoListTile",sidebar_label:"CupertinoListTile"},d=void 0,a={},u=[{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>additional_info</code>",id:"additional_info",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>bgcolor_activated</code>",id:"bgcolor_activated",level:3},{value:"<code>leading</code>",id:"leading",level:3},{value:"<code>leading_size</code>",id:"leading_size",level:3},{value:"<code>leading_to_title</code>",id:"leading_to_title",level:3},{value:"<code>notched</code>",id:"notched",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>subtitle</code>",id:"subtitle",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>toggle_inputs</code>",id:"toggle_inputs",level:3},{value:"<code>trailing</code>",id:"trailing",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_click</code>",id:"on_click",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["An iOS-style list tile. The CupertinoListTile is a Cupertino equivalent of Material ",(0,i.jsx)(t.a,{href:"/docs/controls/listtile",children:"ListTile"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['It comes in two forms, an old-fashioned edge-to-edge variant known from iOS Settings app and in a new, "Inset Grouped" form, known from either iOS Notes or Reminders app. The first form is created if ',(0,i.jsx)(t.code,{children:"notched"})," property is ",(0,i.jsx)(t.code,{children:"False"})," (default value) and the second form is created is ",(0,i.jsx)(t.a,{href:"/docs/controls/cupertinolisttile#notched",children:(0,i.jsx)(t.code,{children:"notched"})})," is ",(0,i.jsx)(t.code,{children:"True"}),"."]}),"\n","\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://flet-controls-gallery.fly.dev/layout/cupertinolisttile",children:"Live example"})}),"\n",(0,i.jsx)(o.A,{groupId:"language",children:(0,i.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    def tile_clicked(e):\n        print("Tile clicked")\n\n    page.add(\n        ft.CupertinoListTile(\n            additional_info=ft.Text("Wed Jan 24"),\n            bgcolor_activated=ft.Colors.AMBER_ACCENT,\n            leading=ft.Icon(name=ft.cupertino_icons.GAME_CONTROLLER),\n            title=ft.Text("CupertinoListTile not notched"),\n            subtitle=ft.Text("Subtitle"),\n            trailing=ft.Icon(name=ft.cupertino_icons.ALARM),\n            on_click=tile_clicked,\n        ),\n        ft.CupertinoListTile(\n            notched=True,\n            additional_info=ft.Text("Thu Jan 25"),\n            leading=ft.Icon(name=ft.cupertino_icons.GAME_CONTROLLER),\n            title=ft.Text("CupertinoListTile notched"),\n            subtitle=ft.Text("Subtitle"),\n            trailing=ft.Icon(name=ft.cupertino_icons.ALARM),\n            on_click=tile_clicked,\n        ),\n    )\n\n\nft.app(main)\n'})})})}),"\n",(0,i.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/cupertinolisttile/cupertinolisttile-example.png",className:"screenshot-70"}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"additional_info",children:(0,i.jsx)(t.code,{children:"additional_info"})}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Control"})," to display on the right of the list tile, before ",(0,i.jsx)(t.code,{children:"trailing"}),". Similar to ",(0,i.jsx)(t.code,{children:"subtitle"}),", an ",(0,i.jsx)(t.code,{children:"additional_info"})," is\nused to display additional information. Usually a ",(0,i.jsx)(t.a,{href:"/docs/controls/text",children:(0,i.jsx)(t.code,{children:"Text"})})," control."]}),"\n",(0,i.jsx)(t.h3,{id:"bgcolor",children:(0,i.jsx)(t.code,{children:"bgcolor"})}),"\n",(0,i.jsxs)(t.p,{children:["The list tile's background ",(0,i.jsx)(t.a,{href:"/docs/reference/colors",children:"color"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"bgcolor_activated",children:(0,i.jsx)(t.code,{children:"bgcolor_activated"})}),"\n",(0,i.jsxs)(t.p,{children:["The list tile's background ",(0,i.jsx)(t.a,{href:"/docs/reference/colors",children:"color"})," after the tile was tapped."]}),"\n",(0,i.jsx)(t.h3,{id:"leading",children:(0,i.jsx)(t.code,{children:"leading"})}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Control"})," to display before the ",(0,i.jsx)(t.code,{children:"title"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"leading_size",children:(0,i.jsx)(t.code,{children:"leading_size"})}),"\n",(0,i.jsxs)(t.p,{children:["Used to constrain the width and height of ",(0,i.jsx)(t.code,{children:"leading"})," control."]}),"\n",(0,i.jsxs)(t.p,{children:["Defaults to ",(0,i.jsx)(t.code,{children:"30.0"}),", if ",(0,i.jsx)(t.code,{children:"notched=True"}),", else ",(0,i.jsx)(t.code,{children:"28.0"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"leading_to_title",children:(0,i.jsx)(t.code,{children:"leading_to_title"})}),"\n",(0,i.jsxs)(t.p,{children:["The horizontal space between ",(0,i.jsx)(t.code,{children:"leading"})," and ",(0,i.jsx)(t.code,{children:"title"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Defaults to ",(0,i.jsx)(t.code,{children:"12.0"}),", if ",(0,i.jsx)(t.code,{children:"notched=True"}),", else ",(0,i.jsx)(t.code,{children:"16.0"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"notched",children:(0,i.jsx)(t.code,{children:"notched"})}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"True"}),', list tile will be created in an "Inset Grouped" form, known from either iOS Notes or Reminders app.']}),"\n",(0,i.jsxs)(t.p,{children:["Defaults to ",(0,i.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"padding",children:(0,i.jsx)(t.code,{children:"padding"})}),"\n",(0,i.jsxs)(t.p,{children:["The tile's internal padding. Insets a CupertinoListTile's contents: its ",(0,i.jsx)(t.code,{children:"leading"}),", ",(0,i.jsx)(t.code,{children:"title"}),", ",(0,i.jsx)(t.code,{children:"subtitle"}),", ",(0,i.jsx)(t.code,{children:"additional_info"})," and ",(0,i.jsx)(t.code,{children:"trailing"})," controls."]}),"\n",(0,i.jsxs)(t.p,{children:["Padding is an instance of ",(0,i.jsx)(t.a,{href:"/docs/reference/types/padding",children:(0,i.jsx)(t.code,{children:"Padding"})})," class."]}),"\n",(0,i.jsx)(t.h3,{id:"subtitle",children:(0,i.jsx)(t.code,{children:"subtitle"})}),"\n",(0,i.jsx)(t.p,{children:"Additional content displayed below the title."}),"\n",(0,i.jsxs)(t.p,{children:["Typically a ",(0,i.jsx)(t.a,{href:"/docs/controls/text",children:(0,i.jsx)(t.code,{children:"Text"})})," control."]}),"\n",(0,i.jsx)(t.h3,{id:"title",children:(0,i.jsx)(t.code,{children:"title"})}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Control"})," to display as primary content of the list tile."]}),"\n",(0,i.jsxs)(t.p,{children:["Typically a ",(0,i.jsx)(t.a,{href:"/docs/controls/text",children:(0,i.jsx)(t.code,{children:"Text"})})," control."]}),"\n",(0,i.jsx)(t.h3,{id:"toggle_inputs",children:(0,i.jsx)(t.code,{children:"toggle_inputs"})}),"\n",(0,i.jsxs)(t.p,{children:["Whether clicking on a list tile should toggle the state of ",(0,i.jsx)(t.code,{children:"Radio"}),", ",(0,i.jsx)(t.code,{children:"Checkbox"})," or ",(0,i.jsx)(t.code,{children:"Switch"})," inside the tile. Default is ",(0,i.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"trailing",children:(0,i.jsx)(t.code,{children:"trailing"})}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Control"})," to display after the title."]}),"\n",(0,i.jsxs)(t.p,{children:["Typically an ",(0,i.jsx)(t.a,{href:"/docs/controls/icon",children:(0,i.jsx)(t.code,{children:"Icon"})})," control."]}),"\n",(0,i.jsx)(t.h3,{id:"url",children:(0,i.jsx)(t.code,{children:"url"})}),"\n",(0,i.jsxs)(t.p,{children:["The URL to open when the list tile is clicked. If registered, ",(0,i.jsx)(t.code,{children:"on_click"})," event is fired after that."]}),"\n",(0,i.jsx)(t.h3,{id:"url_target",children:(0,i.jsx)(t.code,{children:"url_target"})}),"\n",(0,i.jsx)(t.p,{children:"Where to open URL in the web mode."}),"\n",(0,i.jsxs)(t.p,{children:["Value is of type ",(0,i.jsx)(t.a,{href:"/docs/reference/types/urltarget",children:(0,i.jsx)(t.code,{children:"UrlTarget"})})," and defaults to ",(0,i.jsx)(t.code,{children:"UrlTarget.BLANK"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"on_click",children:(0,i.jsx)(t.code,{children:"on_click"})}),"\n",(0,i.jsx)(t.p,{children:"Fires when a user clicks or taps the list tile."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var l=n(18215);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,o),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>T});var l=n(96540),i=n(18215),r=n(65627),o=n(56347),s=n(50372),c=n(30604),d=n(11861),a=n(78749);function u(e){var t,n;return null!=(t=null==(n=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:i}}=e;return{value:t,label:n,attributes:l,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}),[r,i])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[o,c]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const i=null!=(t=l.find((e=>e.default)))?t:l[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,u]=f({queryString:n,groupId:i}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[i,r]=(0,a.Dv)(n);return[i,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),g=(()=>{const e=null!=d?d:x;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),a=e=>{const t=e.currentTarget,n=c.indexOf(t),i=s[n].value;i!==l&&(d(t),o(i))},u=e=>{var t;let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{var l;const t=c.indexOf(e.currentTarget)+1;n=null!=(l=c[t])?l:c[0];break}case"ArrowLeft":{var i;const t=c.indexOf(e.currentTarget)-1;n=null!=(i=c[t])?i:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:a},r,{className:(0,i.A)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===t}),children:null!=n?n:t}),t)}))})}function m(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,Object.assign({},t,e)),(0,v.jsx)(m,Object.assign({},t,e))]})}function T(e){const t=(0,j.A)();return(0,v.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var l=n(96540);const i={},r=l.createContext(i);function o(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);