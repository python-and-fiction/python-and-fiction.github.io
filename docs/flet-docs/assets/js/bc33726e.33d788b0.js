"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[1596],{3911:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"controls/permissionhandler","title":"PermissionHandler","description":"PermissionHandler can check and/or request permissions from the running device for access to various components. Works","source":"@site/docs/controls/permissionhandler.md","sourceDirName":"controls","slug":"/controls/permissionhandler","permalink":"/docs/flet-docs/docs/controls/permissionhandler","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/permissionhandler.md","tags":[],"version":"current","frontMatter":{"title":"PermissionHandler","sidebar_label":"PermissionHandler"},"sidebar":"docs","previous":{"title":"MergeSemantics","permalink":"/docs/flet-docs/docs/controls/mergesemantics"},"next":{"title":"Rive","permalink":"/docs/flet-docs/docs/controls/rive"}}');var r=s(74848),o=s(28453),i=s(65537),a=s(79329);const l={title:"PermissionHandler",sidebar_label:"PermissionHandler"},c=void 0,d={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>check_permission(of: PermissionType)</code>",id:"check_permissionof-permissiontype",level:3},{value:"<code>open_app_settings()</code>",id:"open_app_settings",level:3},{value:"<code>request_permission(of: PermissionType)</code>",id:"request_permissionof-permissiontype",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["PermissionHandler can check and/or request permissions from the running device for access to various components. Works\non Windows, iOS, Android and web.\nBased on the ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/permission_handler",children:"permission_handler"})," Dart/Flutter package."]}),"\n",(0,r.jsxs)(n.p,{children:["PermissionHandler control is non-visual and should be added to ",(0,r.jsx)(n.a,{href:"/docs/controls/page#overlay",children:(0,r.jsx)(n.code,{children:"page.overlay"})})," list."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Packaging",type:"info",children:[(0,r.jsxs)(n.p,{children:["To build your Flet app that uses ",(0,r.jsx)(n.code,{children:"PermissionHandler"})," control, add ",(0,r.jsx)(n.code,{children:"--include-packages flet_permission_handler"}),"\nto ",(0,r.jsx)(n.code,{children:"flet build"})," command, for example:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"flet build apk --include-packages flet_permission_handler\n"})})]}),"\n","\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(i.A,{groupId:"language",children:(0,r.jsx)(a.A,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.scroll = ft.ScrollMode.ADAPTIVE\n    page.appbar = ft.AppBar(title=ft.Text("PermissionHandler Tests"))\n    ph = ft.PermissionHandler()\n    page.overlay.append(ph)\n\n    def check_permission(e):\n        o = ph.check_permission(e.control.data)\n        page.add(ft.Text(f"Checked {e.control.data.name}: {o}"))\n\n    def request_permission(e):\n        o = ph.request_permission(e.control.data)\n        page.add(ft.Text(f"Requested {e.control.data.name}: {o}"))\n\n    def open_app_settings(e):\n        o = ph.open_app_settings()\n        page.add(ft.Text(f"App Settings: {o}"))\n\n    page.add(\n        ft.OutlinedButton(\n            "Check Microphone Permission",\n            data=ft.PermissionType.MICROPHONE,\n            on_click=check_permission,\n        ),\n        ft.OutlinedButton(\n            "Request Microphone Permission",\n            data=ft.PermissionType.MICROPHONE,\n            on_click=request_permission,\n        ),\n        ft.OutlinedButton(\n            "Open App Settings",\n            on_click=open_app_settings,\n        ),\n    )\n\n\nft.app(main)\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"check_permissionof-permissiontype",children:(0,r.jsx)(n.code,{children:"check_permission(of: PermissionType)"})}),"\n",(0,r.jsxs)(n.p,{children:["Checks the status of the specified ",(0,r.jsx)(n.a,{href:"/docs/reference/types/permissiontype",children:(0,r.jsx)(n.code,{children:"PermissionType"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Returns an instance of type ",(0,r.jsx)(n.a,{href:"/docs/reference/types/permissionstatus",children:(0,r.jsx)(n.code,{children:"PermissionStatus"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"open_app_settings",children:(0,r.jsx)(n.code,{children:"open_app_settings()"})}),"\n",(0,r.jsx)(n.p,{children:"Opens the device's settings. Before calling this method, you usually want to briefly remind the user of which permission\nis needed and how/where precisely it is to be enabled."}),"\n",(0,r.jsxs)(n.p,{children:["Returns a boolean value: ",(0,r.jsx)(n.code,{children:"True"})," if the device's settings were opened successfully, ",(0,r.jsx)(n.code,{children:"False"})," otherwise."]}),"\n",(0,r.jsx)(n.h3,{id:"request_permissionof-permissiontype",children:(0,r.jsx)(n.code,{children:"request_permission(of: PermissionType)"})}),"\n",(0,r.jsxs)(n.p,{children:["Requests the device for access to the specified ",(0,r.jsx)(n.a,{href:"/docs/reference/types/permissiontype",children:(0,r.jsx)(n.code,{children:"PermissionType"})})," from the user."]}),"\n",(0,r.jsxs)(n.p,{children:["Returns an instance of type ",(0,r.jsx)(n.a,{href:"/docs/reference/types/permissionstatus",children:(0,r.jsx)(n.code,{children:"PermissionStatus"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},79329:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(18215);const r={tabItem:"tabItem_Ymn6"};var o=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},65537:(e,n,s)=>{s.d(n,{A:()=>_});var t=s(96540),r=s(18215),o=s(65627),i=s(56347),a=s(50372),l=s(30604),c=s(11861),d=s(78749);function u(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[o,r])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,o=p(e),[i,l]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:s,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),v=(()=>{const e=null!=c?c:f;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=s(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),i(r))},u=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=l.indexOf(e.currentTarget)+1;s=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;s=null!=(r=l[n])?r:l[l.length-1];break}}null==(n=s)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d},o,{className:(0,r.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=s?s:n}),n)}))})}function j(e){let{lazy:n,children:s,selectedValue:o}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function _(e){const n=(0,b.A)();return(0,x.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);