"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[49548],{70069:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"controls/iconbutton","title":"IconButton","description":"An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink).","source":"@site/docs/controls/iconbutton.md","sourceDirName":"controls","slug":"/controls/iconbutton","permalink":"/docs/flet-docs/docs/controls/iconbutton","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/iconbutton.md","tags":[],"version":"current","frontMatter":{"title":"IconButton","sidebar_label":"IconButton"},"sidebar":"docs","previous":{"title":"FloatingActionButton","permalink":"/docs/flet-docs/docs/controls/floatingactionbutton"},"next":{"title":"MenuItemButton","permalink":"/docs/flet-docs/docs/controls/menuitembutton"}}');var l=o(74848),c=o(28453),s=o(65537),r=o(79329);const i={title:"IconButton",sidebar_label:"IconButton"},d=void 0,a={},u=[{value:"Examples",id:"examples",level:2},{value:"Icon buttons",id:"icon-buttons",level:3},{value:"Icon button with <code>click</code> event",id:"icon-button-with-click-event",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>adaptive</code>",id:"adaptive",level:3},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>disabled_color</code>",id:"disabled_color",level:3},{value:"<code>enable_feedback</code>",id:"enable_feedback",level:3},{value:"<code>focus_color</code>",id:"focus_color",level:3},{value:"<code>highlight_color</code>",id:"highlight_color",level:3},{value:"<code>hover_color</code>",id:"hover_color",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>icon_color</code>",id:"icon_color",level:3},{value:"<code>icon_size</code>",id:"icon_size",level:3},{value:"<code>mouse_cursor</code>",id:"mouse_cursor",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>selected</code>",id:"selected",level:3},{value:"<code>selected_icon</code>",id:"selected_icon",level:3},{value:"<code>selected_icon_color</code>",id:"selected_icon_color",level:3},{value:"<code>splash_color</code>",id:"splash_color",level:3},{value:"<code>splash_radius</code>",id:"splash_radius",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"<code>visual_density</code>",id:"visual_density",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>focus()</code>",id:"focus",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_click</code>",id:"on_click",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink)."}),"\n",(0,l.jsx)(n.p,{children:"Icon buttons are commonly used in the toolbars, but they can be used in many other places as well."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://flet-controls-gallery.fly.dev/buttons/iconbutton",children:"Live example"})}),"\n",(0,l.jsx)(n.h3,{id:"icon-buttons",children:"Icon buttons"}),"\n",(0,l.jsx)(s.A,{groupId:"language",children:(0,l.jsx)(r.A,{value:"python",label:"Python",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon buttons"\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(\n                    icon=ft.Icons.PAUSE_CIRCLE_FILLED_ROUNDED,\n                    icon_color="blue400",\n                    icon_size=20,\n                    tooltip="Pause record",\n                ),\n                ft.IconButton(\n                    icon=ft.Icons.DELETE_FOREVER_ROUNDED,\n                    icon_color="pink600",\n                    icon_size=40,\n                    tooltip="Delete record",\n                ),\n            ]\n        ),\n    )\n\n\nft.app(main)\n'})})})}),"\n",(0,l.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/icon-button/icon-buttons.gif",className:"screenshot-50"}),"\n",(0,l.jsxs)(n.h3,{id:"icon-button-with-click-event",children:["Icon button with ",(0,l.jsx)(n.code,{children:"click"})," event"]}),"\n",(0,l.jsx)(s.A,{groupId:"language",children:(0,l.jsx)(r.A,{value:"python",label:"Python",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon button with \'click\' event"\n\n    def button_clicked(e):\n        b.data += 1\n        t.value = f"Button clicked {b.data} time(s)"\n        page.update()\n\n    b = ft.IconButton(\n        icon=ft.Icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0\n    )\n    t = ft.Text()\n\n    page.add(b, t)\n\nft.app(main)\n'})})})}),"\n",(0,l.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/icon-button/icon-button-with-click-event.gif",className:"screenshot-50"}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(n.h3,{id:"adaptive",children:(0,l.jsx)(n.code,{children:"adaptive"})}),"\n",(0,l.jsxs)(n.p,{children:["If the value is ",(0,l.jsx)(n.code,{children:"True"}),", an adaptive button is created based on whether the target platform is iOS/macOS."]}),"\n",(0,l.jsxs)(n.p,{children:["On iOS and macOS, a ",(0,l.jsx)(n.a,{href:"/docs/controls/cupertinobutton",children:(0,l.jsx)(n.code,{children:"CupertinoButton"})})," is created, which matches the functionality and presentation of this button. On other platforms, a Material ",(0,l.jsx)(n.code,{children:"IconButton"})," is created."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"alignment",children:(0,l.jsx)(n.code,{children:"alignment"})}),"\n",(0,l.jsxs)(n.p,{children:["Defines how the icon is positioned within the IconButton. Alignment is an instance\nof ",(0,l.jsx)(n.a,{href:"/docs/reference/types/alignment",children:(0,l.jsx)(n.code,{children:"Alignment"})})," class."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"alignment.center"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"autofocus",children:(0,l.jsx)(n.code,{children:"autofocus"})}),"\n",(0,l.jsx)(n.p,{children:"True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus."}),"\n",(0,l.jsx)(n.h3,{id:"content",children:(0,l.jsx)(n.code,{children:"content"})}),"\n",(0,l.jsx)(n.p,{children:"A Control representing custom button content."}),"\n",(0,l.jsx)(n.h3,{id:"disabled_color",children:(0,l.jsx)(n.code,{children:"disabled_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," to use for the icon inside the button when disabled."]}),"\n",(0,l.jsx)(n.h3,{id:"enable_feedback",children:(0,l.jsx)(n.code,{children:"enable_feedback"})}),"\n",(0,l.jsxs)(n.p,{children:["Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this to ",(0,l.jsx)(n.code,{children:"True"})," produce a click sound and a long-press will produce a short vibration."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"focus_color",children:(0,l.jsx)(n.code,{children:"focus_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The button's ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," when in focus."]}),"\n",(0,l.jsx)(n.h3,{id:"highlight_color",children:(0,l.jsx)(n.code,{children:"highlight_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The button's ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," when the button is pressed. The highlight fades in quickly as the button is held down."]}),"\n",(0,l.jsx)(n.h3,{id:"hover_color",children:(0,l.jsx)(n.code,{children:"hover_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The button's ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," when hovered."]}),"\n",(0,l.jsx)(n.h3,{id:"icon",children:(0,l.jsx)(n.code,{children:"icon"})}),"\n",(0,l.jsx)(n.p,{children:"Icon shown in the button."}),"\n",(0,l.jsx)(n.h3,{id:"icon_color",children:(0,l.jsx)(n.code,{children:"icon_color"})}),"\n",(0,l.jsxs)(n.p,{children:["Icon ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"icon_size",children:(0,l.jsx)(n.code,{children:"icon_size"})}),"\n",(0,l.jsx)(n.p,{children:"Icon size in virtual pixels."}),"\n",(0,l.jsx)(n.h3,{id:"mouse_cursor",children:(0,l.jsx)(n.code,{children:"mouse_cursor"})}),"\n",(0,l.jsx)(n.p,{children:"The cursor to be displayed when a mouse pointer enters or is hovering over this control."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/mousecursor",children:(0,l.jsx)(n.code,{children:"MouseCursor"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"padding",children:(0,l.jsx)(n.code,{children:"padding"})}),"\n",(0,l.jsx)(n.p,{children:"Defines the padding around this button. The entire padded icon will react to input gestures."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/padding",children:(0,l.jsx)(n.code,{children:"Padding"})})," and defaults to ",(0,l.jsx)(n.code,{children:"padding.all(8)"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"selected",children:(0,l.jsx)(n.code,{children:"selected"})}),"\n",(0,l.jsxs)(n.p,{children:["Turns icon button to a toggle button: ",(0,l.jsx)(n.code,{children:"True"})," - the button is in selected state, ",(0,l.jsx)(n.code,{children:"False"})," - in normal."]}),"\n",(0,l.jsx)(n.h3,{id:"selected_icon",children:(0,l.jsx)(n.code,{children:"selected_icon"})}),"\n",(0,l.jsx)(n.p,{children:"Icon shown in the button in selected state."}),"\n",(0,l.jsx)(n.h3,{id:"selected_icon_color",children:(0,l.jsx)(n.code,{children:"selected_icon_color"})}),"\n",(0,l.jsxs)(n.p,{children:["Icon ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," for the selected state."]}),"\n",(0,l.jsx)(n.p,{children:"An example of icon toggle button:"}),"\n",(0,l.jsx)("img",{src:"/docs/flet-docs/img/blog/gradients/toggle-icon-button.gif",className:"screenshot-10"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n\n    def toggle_icon_button(e):\n        e.control.selected = not e.control.selected\n        e.control.update()\n\n    page.add(\n        ft.IconButton(\n            icon=ft.Icons.BATTERY_1_BAR,\n            selected_icon=ft.Icons.BATTERY_FULL,\n            on_click=toggle_icon_button,\n            selected=False,\n            style=ft.ButtonStyle(color={"selected": ft.Colors.GREEN, "": ft.Colors.RED}),\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"splash_color",children:(0,l.jsx)(n.code,{children:"splash_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The primary ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the button when the button is in the down (pressed) state."]}),"\n",(0,l.jsx)(n.h3,{id:"splash_radius",children:(0,l.jsx)(n.code,{children:"splash_radius"})}),"\n",(0,l.jsx)(n.p,{children:"The splash radius. Honoured only when in Material 2."}),"\n",(0,l.jsx)(n.h3,{id:"style",children:(0,l.jsx)(n.code,{children:"style"})}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/buttonstyle",children:(0,l.jsx)(n.code,{children:"ButtonStyle"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"tooltip",children:(0,l.jsx)(n.code,{children:"tooltip"})}),"\n",(0,l.jsx)(n.p,{children:"The text displayed when hovering the mouse over the button."}),"\n",(0,l.jsx)(n.h3,{id:"url",children:(0,l.jsx)(n.code,{children:"url"})}),"\n",(0,l.jsxs)(n.p,{children:["The URL to open when the button is clicked. If registered, ",(0,l.jsx)(n.code,{children:"on_click"})," event is fired after that."]}),"\n",(0,l.jsx)(n.h3,{id:"url_target",children:(0,l.jsx)(n.code,{children:"url_target"})}),"\n",(0,l.jsx)(n.p,{children:"Where to open URL in the web mode."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/urltarget",children:(0,l.jsx)(n.code,{children:"UrlTarget"})})," and defaults to ",(0,l.jsx)(n.code,{children:"UrlTarget.BLANK"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"visual_density",children:(0,l.jsx)(n.code,{children:"visual_density"})}),"\n",(0,l.jsx)(n.p,{children:"Defines how compact the control's layout will be."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/themevisualdensity",children:(0,l.jsx)(n.code,{children:"ThemeVisualDensity"})}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"focus",children:(0,l.jsx)(n.code,{children:"focus()"})}),"\n",(0,l.jsx)(n.p,{children:"Moves focus to a button."}),"\n",(0,l.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,l.jsx)(n.h3,{id:"on_blur",children:(0,l.jsx)(n.code,{children:"on_blur"})}),"\n",(0,l.jsx)(n.p,{children:"Fires when the control has lost focus."}),"\n",(0,l.jsx)(n.h3,{id:"on_click",children:(0,l.jsx)(n.code,{children:"on_click"})}),"\n",(0,l.jsx)(n.p,{children:"Fires when a user clicks the button."}),"\n",(0,l.jsx)(n.h3,{id:"on_focus",children:(0,l.jsx)(n.code,{children:"on_focus"})}),"\n",(0,l.jsx)(n.p,{children:"Fires when the control has received focus."})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},79329:(e,n,o)=>{o.d(n,{A:()=>s});o(96540);var t=o(18215);const l={tabItem:"tabItem_Ymn6"};var c=o(74848);function s(e){let{children:n,hidden:o,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:o,children:n})}},65537:(e,n,o)=>{o.d(n,{A:()=>y});var t=o(96540),l=o(18215),c=o(65627),s=o(56347),r=o(50372),i=o(30604),d=o(11861),a=o(78749);function u(e){var n,o;return null!=(n=null==(o=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:o.filter(Boolean))?n:[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:l}}=e;return{value:n,label:o,attributes:t,default:l}}))}(o);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:o}=e;const l=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:o});return[(0,i.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(l.location.search);n.set(c,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}),[c,l])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:l}=e,c=h(e),[s,i]=(0,t.useState)((()=>function(e){var n;let{defaultValue:o,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!p({value:o,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+o+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return o}const l=null!=(n=t.find((e=>e.default)))?n:t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:c}))),[d,u]=f({queryString:o,groupId:l}),[x,b]=function(e){let{groupId:n}=e;const o=function(e){return e?"docusaurus.tab."+e:null}(n),[l,c]=(0,a.Dv)(o);return[l,(0,t.useCallback)((e=>{o&&c.set(e)}),[o,c])]}({groupId:l}),j=(()=>{const e=null!=d?d:x;return p({value:e,tabValues:c})?e:null})();(0,r.A)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),b(e)}),[u,b,c]),tabValues:c}}var b=o(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(74848);function g(e){let{className:n,block:o,selectedValue:t,selectValue:s,tabValues:r}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.a_)(),a=e=>{const n=e.currentTarget,o=i.indexOf(n),l=r[o].value;l!==t&&(d(n),s(l))},u=e=>{var n;let o=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{var t;const n=i.indexOf(e.currentTarget)+1;o=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{var l;const n=i.indexOf(e.currentTarget)-1;o=null!=(l=i[n])?l:i[i.length-1];break}}null==(n=o)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":o},n),children:r.map((e=>{let{value:n,label:o,attributes:c}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{i.push(e)},onKeyDown:u,onClick:a},c,{className:(0,l.A)("tabs__item",j.tabItem,null==c?void 0:c.className,{"tabs__item--active":t===n}),children:null!=o?o:n}),n)}))})}function m(e){let{lazy:n,children:o,selectedValue:c}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function _(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,v.jsx)(g,Object.assign({},n,e)),(0,v.jsx)(m,Object.assign({},n,e))]})}function y(e){const n=(0,b.A)();return(0,v.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const l={},c=t.createContext(l);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);