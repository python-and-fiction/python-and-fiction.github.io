"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[11202],{8337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"controls/dragtarget","title":"DragTarget","description":"A control that completes drag operation when a Draggable widget is dropped.","source":"@site/docs/controls/dragtarget.md","sourceDirName":"controls","slug":"/controls/dragtarget","permalink":"/docs/flet-docs/docs/controls/dragtarget","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/dragtarget.md","tags":[],"version":"current","frontMatter":{"title":"DragTarget","sidebar_label":"DragTarget"},"sidebar":"docs","previous":{"title":"Draggable","permalink":"/docs/flet-docs/docs/controls/draggable"},"next":{"title":"FilePicker","permalink":"/docs/flet-docs/docs/controls/filepicker"}}');var a=n(74848),o=n(28453),l=n(65537),s=n(79329);const c={title:"DragTarget",sidebar_label:"DragTarget"},i=void 0,d={},u=[{value:"Examples",id:"examples",level:2},{value:"Drag and drop colors",id:"drag-and-drop-colors",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>group</code>",id:"group",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_accept</code>",id:"on_accept",level:3},{value:"<code>on_leave</code>",id:"on_leave",level:3},{value:"<code>on_move</code>",id:"on_move",level:3},{value:"<code>on_will_accept</code>",id:"on_will_accept",level:3}];function g(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["A control that completes drag operation when a ",(0,a.jsx)(t.a,{href:"/docs/controls/draggable",children:(0,a.jsx)(t.code,{children:"Draggable"})})," widget is dropped."]}),"\n",(0,a.jsxs)(t.p,{children:["When a draggable is dragged on top of a drag target, the drag target is asked whether it will accept the data the draggable is carrying. The drag target will accept incoming drag if it belongs to the same ",(0,a.jsx)(t.code,{children:"group"})," as draggable. If the user does drop the draggable on top of the drag target (and the drag target has indicated that it will accept the draggable's data), then the drag target is asked to accept the draggable's data."]}),"\n","\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://flet-controls-gallery.fly.dev/utility/draggable",children:"Live example"})}),"\n",(0,a.jsx)(t.h3,{id:"drag-and-drop-colors",children:"Drag and drop colors"}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif",className:"screenshot-50"}),"\n",(0,a.jsx)(l.A,{groupId:"language",children:(0,a.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Drag and Drop example"\n\n    def drag_will_accept(e):\n        e.control.content.border = ft.border.all(\n            2, ft.Colors.BLACK45 if e.data == "true" else ft.Colors.RED\n        )\n        e.control.update()\n\n    def drag_accept(e: ft.DragTargetEvent):\n        src = page.get_control(e.src_id)\n        e.control.content.bgcolor = src.content.bgcolor\n        e.control.content.border = None\n        e.control.update()\n\n    def drag_leave(e):\n        e.control.content.border = None\n        e.control.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.Column(\n                    [\n                        ft.Draggable(\n                            group="color",\n                            content=ft.Container(\n                                width=50,\n                                height=50,\n                                bgcolor=ft.Colors.CYAN,\n                                border_radius=5,\n                            ),\n                            content_feedback=ft.Container(\n                                width=20,\n                                height=20,\n                                bgcolor=ft.Colors.CYAN,\n                                border_radius=3,\n                            ),\n                        ),\n                        ft.Draggable(\n                            group="color",\n                            content=ft.Container(\n                                width=50,\n                                height=50,\n                                bgcolor=ft.Colors.YELLOW,\n                                border_radius=5,\n                            ),\n                        ),\n                        ft.Draggable(\n                            group="color1",\n                            content=ft.Container(\n                                width=50,\n                                height=50,\n                                bgcolor=ft.Colors.GREEN,\n                                border_radius=5,\n                            ),\n                        ),\n                    ]\n                ),\n                ft.Container(width=100),\n                ft.DragTarget(\n                    group="color",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.BLUE_GREY_100,\n                        border_radius=5,\n                    ),\n                    on_will_accept=drag_will_accept,\n                    on_accept=drag_accept,\n                    on_leave=drag_leave,\n                ),\n            ]\n        )\n    )\n\nft.app(main)\n'})})})}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(t.h3,{id:"content",children:(0,a.jsx)(t.code,{children:"content"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Control"})," that is a visual representation of the drag target."]}),"\n",(0,a.jsx)(t.h3,{id:"group",children:(0,a.jsx)(t.code,{children:"group"})}),"\n",(0,a.jsxs)(t.p,{children:["The group this target belongs to. Note that for this target to accept an incoming drop from a ",(0,a.jsx)(t.a,{href:"/docs/controls/draggable",children:(0,a.jsx)(t.code,{children:"Draggable"})}),", they must both be in thesame group."]}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(t.h3,{id:"on_accept",children:(0,a.jsx)(t.code,{children:"on_accept"})}),"\n",(0,a.jsxs)(t.p,{children:["Fires when the user does drop an acceptable(same ",(0,a.jsx)(t.code,{children:"group"}),") draggable on this target."]}),"\n",(0,a.jsxs)(t.p,{children:["Event handler argument is an instance of ",(0,a.jsx)(t.a,{href:"/docs/reference/types/dragtargetevent",children:(0,a.jsx)(t.code,{children:"DragTargetEvent"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"page.get_control(e.src_id)"})," to retrieve Control reference by its ID."]}),"\n",(0,a.jsx)(t.h3,{id:"on_leave",children:(0,a.jsx)(t.code,{children:"on_leave"})}),"\n",(0,a.jsx)(t.p,{children:"Fires when a draggable leaves this target."}),"\n",(0,a.jsx)(t.h3,{id:"on_move",children:(0,a.jsx)(t.code,{children:"on_move"})}),"\n",(0,a.jsx)(t.p,{children:"Fires when a draggable moves within this target."}),"\n",(0,a.jsxs)(t.p,{children:["Event handler argument is of type ",(0,a.jsx)(t.a,{href:"/docs/reference/types/dragtargetevent",children:(0,a.jsx)(t.code,{children:"DragTargetEvent"})}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"on_will_accept",children:(0,a.jsx)(t.code,{children:"on_will_accept"})}),"\n",(0,a.jsxs)(t.p,{children:["Fires when a draggable is dragged on this target. ",(0,a.jsx)(t.code,{children:"data"})," field of event details contains ",(0,a.jsx)(t.code,{children:"true"})," (String) if both the draggable and this target are in the same ",(0,a.jsx)(t.code,{children:"group"}),"; otherwise ",(0,a.jsx)(t.code,{children:"false"})," (String)."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),o=n(65627),l=n(56347),s=n(50372),c=n(30604),i=n(11861),d=n(78749);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=null!=i?i:f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(i(t),l(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:d},o,{className:(0,a.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function _(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,m.jsx)(x,Object.assign({},t,e)),(0,m.jsx)(j,Object.assign({},t,e))]})}function w(e){const t=(0,b.A)();return(0,m.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);