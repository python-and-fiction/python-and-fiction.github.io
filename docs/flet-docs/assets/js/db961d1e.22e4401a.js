"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[63401],{73212:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"controls/cupertinocheckbox","title":"CupertinoCheckbox","description":"A macOS style checkbox. Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).","source":"@site/docs/controls/cupertinocheckbox.md","sourceDirName":"controls","slug":"/controls/cupertinocheckbox","permalink":"/docs/flet-docs/docs/controls/cupertinocheckbox","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/cupertinocheckbox.md","tags":[],"version":"current","frontMatter":{"title":"CupertinoCheckbox","sidebar_label":"CupertinoCheckbox"},"sidebar":"docs","previous":{"title":"Chip","permalink":"/docs/flet-docs/docs/controls/chip"},"next":{"title":"CupertinoRadio","permalink":"/docs/flet-docs/docs/controls/cupertinoradio"}}');var c=n(74848),r=n(28453),l=n(65537),a=n(79329);const s={title:"CupertinoCheckbox",sidebar_label:"CupertinoCheckbox"},i=void 0,u={},d=[{value:"Examples",id:"examples",level:2},{value:"CupertinoCheckbox and adaptive CheckBox example",id:"cupertinocheckbox-and-adaptive-checkbox-example",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>check_color</code>",id:"check_color",level:3},{value:"<code>active_color</code>",id:"active_color",level:3},{value:"<code>inactive_color</code>",id:"inactive_color",level:3},{value:"<code>focus_color</code>",id:"focus_color",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>label_position</code>",id:"label_position",level:3},{value:"<code>tristate</code>",id:"tristate",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_change</code>",id:"on_change",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}];function h(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.p,{children:"A macOS style checkbox. Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off)."}),"\n","\n",(0,c.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.a,{href:"https://flet-controls-gallery.fly.dev/input/cupertinocheckbox",children:"Live example"})}),"\n",(0,c.jsx)(o.h3,{id:"cupertinocheckbox-and-adaptive-checkbox-example",children:"CupertinoCheckbox and adaptive CheckBox example"}),"\n",(0,c.jsx)(l.A,{groupId:"language",children:(0,c.jsx)(a.A,{value:"python",label:"Python",default:!0,children:(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(\n        ft.CupertinoCheckbox(label="Cupertino Checkbox", value=True),\n        ft.Checkbox(label="Material Checkbox", value=True),\n        ft.Container(height=20),\n        ft.Text(\n            "Adaptive Checkbox shows as CupertinoCheckbox on macOS and iOS and as Checkbox on other platforms:"\n        ),\n        ft.Checkbox(adaptive=True, label="Adaptive Checkbox", value=True),\n    )\n\nft.app(main)\n'})})})}),"\n",(0,c.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/cupertinocheckbox/cupertinocheckbox.png",className:"screenshot-70"}),"\n",(0,c.jsx)(o.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(o.h3,{id:"autofocus",children:(0,c.jsx)(o.code,{children:"autofocus"})}),"\n",(0,c.jsx)(o.p,{children:"True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus."}),"\n",(0,c.jsx)(o.h3,{id:"check_color",children:(0,c.jsx)(o.code,{children:"check_color"})}),"\n",(0,c.jsxs)(o.p,{children:["The ",(0,c.jsx)(o.a,{href:"/docs/reference/colors",children:"color"})," to use for the check icon when this checkbox is checked."]}),"\n",(0,c.jsx)(o.h3,{id:"active_color",children:(0,c.jsx)(o.code,{children:"active_color"})}),"\n",(0,c.jsxs)(o.p,{children:["The ",(0,c.jsx)(o.a,{href:"/docs/reference/colors",children:"color"})," used to fill checkbox when it is checked."]}),"\n",(0,c.jsx)(o.h3,{id:"inactive_color",children:(0,c.jsx)(o.code,{children:"inactive_color"})}),"\n",(0,c.jsxs)(o.p,{children:["The ",(0,c.jsx)(o.a,{href:"/docs/reference/colors",children:"color"})," used for checkbox's border when the checkbox is inactive."]}),"\n",(0,c.jsx)(o.h3,{id:"focus_color",children:(0,c.jsx)(o.code,{children:"focus_color"})}),"\n",(0,c.jsxs)(o.p,{children:["The ",(0,c.jsx)(o.a,{href:"/docs/reference/colors",children:"color"})," used for the checkbox's border shadow when it has the input focus."]}),"\n",(0,c.jsx)(o.h3,{id:"label",children:(0,c.jsx)(o.code,{children:"label"})}),"\n",(0,c.jsx)(o.p,{children:"The clickable label to display on the right of a checkbox."}),"\n",(0,c.jsx)(o.h3,{id:"label_position",children:(0,c.jsx)(o.code,{children:"label_position"})}),"\n",(0,c.jsxs)(o.p,{children:["Defines on which side of the checkbox the ",(0,c.jsx)(o.code,{children:"label"})," should be shown."]}),"\n",(0,c.jsxs)(o.p,{children:["Value is of type ",(0,c.jsx)(o.a,{href:"/docs/reference/types/labelposition",children:(0,c.jsx)(o.code,{children:"LabelPosition"})})," and defaults to ",(0,c.jsx)(o.code,{children:"RIGHT"}),"."]}),"\n",(0,c.jsx)(o.h3,{id:"tristate",children:(0,c.jsx)(o.code,{children:"tristate"})}),"\n",(0,c.jsxs)(o.p,{children:["If ",(0,c.jsx)(o.code,{children:"True"})," the checkbox's value can be ",(0,c.jsx)(o.code,{children:"True"}),", ",(0,c.jsx)(o.code,{children:"False"}),", or ",(0,c.jsx)(o.code,{children:"None"}),"."]}),"\n",(0,c.jsx)(o.p,{children:"Checkbox displays a dash when its value is null."}),"\n",(0,c.jsx)(o.h3,{id:"value",children:(0,c.jsx)(o.code,{children:"value"})}),"\n",(0,c.jsx)(o.p,{children:"Current value of the checkbox."}),"\n",(0,c.jsx)(o.h2,{id:"events",children:"Events"}),"\n",(0,c.jsx)(o.h3,{id:"on_blur",children:(0,c.jsx)(o.code,{children:"on_blur"})}),"\n",(0,c.jsx)(o.p,{children:"Fires when the control has lost focus."}),"\n",(0,c.jsx)(o.h3,{id:"on_change",children:(0,c.jsx)(o.code,{children:"on_change"})}),"\n",(0,c.jsx)(o.p,{children:"Fires when the state of the Checkbox is changed."}),"\n",(0,c.jsx)(o.h3,{id:"on_focus",children:(0,c.jsx)(o.code,{children:"on_focus"})}),"\n",(0,c.jsx)(o.p,{children:"Fires when the control has received focus."})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},79329:(e,o,n)=>{n.d(o,{A:()=>l});n(96540);var t=n(18215);const c={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:o,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(c.tabItem,l),hidden:n,children:o})}},65537:(e,o,n)=>{n.d(o,{A:()=>C});var t=n(96540),c=n(18215),r=n(65627),l=n(56347),a=n(50372),s=n(30604),i=n(11861),u=n(78749);function d(e){var o,n;return null!=(o=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?o:[]}function h(e){const{values:o,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=o?o:function(e){return d(e).map((e=>{let{props:{value:o,label:n,attributes:t,default:c}}=e;return{value:o,label:n,attributes:t,default:c}}))}(n);return function(e){const o=(0,i.XI)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error('Docusaurus error: Duplicate values "'+o.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[o,n])}function p(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function b(e){let{queryString:o=!1,groupId:n}=e;const c=(0,l.W6)(),r=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:o,groupId:n});return[(0,s.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(c.location.search);o.set(r,e),c.replace(Object.assign({},c.location,{search:o.toString()}))}),[r,c])]}function f(e){const{defaultValue:o,queryString:n=!1,groupId:c}=e,r=h(e),[l,s]=(0,t.useState)((()=>function(e){var o;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const c=null!=(o=t.find((e=>e.default)))?o:t[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:o,tabValues:r}))),[i,d]=b({queryString:n,groupId:c}),[f,x]=function(e){let{groupId:o}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(o),[c,r]=(0,u.Dv)(n);return[c,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:c}),v=(()=>{const e=null!=i?i:f;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function j(e){let{className:o,block:n,selectedValue:t,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),u=e=>{const o=e.currentTarget,n=s.indexOf(o),c=a[n].value;c!==t&&(i(o),l(c))},d=e=>{var o;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const o=s.indexOf(e.currentTarget)+1;n=null!=(t=s[o])?t:s[0];break}case"ArrowLeft":{var c;const o=s.indexOf(e.currentTarget)-1;n=null!=(c=s[o])?c:s[s.length-1];break}}null==(o=n)||o.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":n},o),children:a.map((e=>{let{value:o,label:n,attributes:r}=e;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:t===o?0:-1,"aria-selected":t===o,ref:e=>{s.push(e)},onKeyDown:d,onClick:u},r,{className:(0,c.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===o}),children:null!=n?n:o}),o)}))})}function k(e){let{lazy:o,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==r})))})}function g(e){const o=f(e);return(0,m.jsxs)("div",{className:(0,c.A)("tabs-container",v.tabList),children:[(0,m.jsx)(j,Object.assign({},o,e)),(0,m.jsx)(k,Object.assign({},o,e))]})}function C(e){const o=(0,x.A)();return(0,m.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(o))}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>a});var t=n(96540);const c={},r=t.createContext(c);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);