"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[42132],{97794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"controls/cupertinodatepicker","title":"CupertinoDatePicker","description":"An iOS-style date and time picker dialog.","source":"@site/docs/controls/cupertinodatepicker.md","sourceDirName":"controls","slug":"/controls/cupertinodatepicker","permalink":"/docs/flet-docs/docs/controls/cupertinodatepicker","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/cupertinodatepicker.md","tags":[],"version":"current","frontMatter":{"title":"CupertinoDatePicker","sidebar_label":"CupertinoDatePicker"},"sidebar":"docs","previous":{"title":"CupertinoContextMenu","permalink":"/docs/flet-docs/docs/controls/cupertinocontextmenu"},"next":{"title":"CupertinoPicker","permalink":"/docs/flet-docs/docs/controls/cupertinopicker"}}');var a=n(74848),i=n(28453),l=n(65537),o=n(79329);const c={title:"CupertinoDatePicker",sidebar_label:"CupertinoDatePicker"},d=void 0,s={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>date_order</code>",id:"date_order",level:3},{value:"<code>date_picker_mode</code>",id:"date_picker_mode",level:3},{value:"<code>first_date</code>",id:"first_date",level:3},{value:"<code>item_extent</code>",id:"item_extent",level:3},{value:"<code>last_date</code>",id:"last_date",level:3},{value:"<code>max_year</code>",id:"max_year",level:3},{value:"<code>min_year</code>",id:"min_year",level:3},{value:"<code>min_interval</code>",id:"min_interval",level:3},{value:"<code>show_day_of_week</code>",id:"show_day_of_week",level:3},{value:"<code>use_24h_format</code>",id:"use_24h_format",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_change</code>",id:"on_change",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"An iOS-style date and time picker dialog."}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"/docs/controls/cupertinodatepicker#date_picker_mode",children:(0,a.jsx)(t.code,{children:"date_picker_mode"})})," property for details on the available modes."]}),"\n",(0,a.jsxs)(t.p,{children:["To open this control, simply call the ",(0,a.jsx)(t.a,{href:"/docs/controls/page#opencontrol",children:(0,a.jsx)(t.code,{children:"page.open()"})})," helper-method."]}),"\n","\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://flet-controls-gallery.fly.dev/dialogs/cupertinodatepicker",children:"Live example"})}),"\n",(0,a.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,a.jsx)(l.A,{groupId:"language",children:(0,a.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page):\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n\n    def handle_date_change(e: ft.ControlEvent):\n        page.add(ft.Text(f"Date changed: {e.control.value.strftime(\'%Y-%m-%d %H:%M %p\')}"))\n\n    cupertino_date_picker = ft.CupertinoDatePicker(\n        date_picker_mode=ft.CupertinoDatePickerMode.DATE_AND_TIME,\n        on_change=handle_date_change,\n    )\n    page.add(\n        ft.CupertinoFilledButton(\n            "Open CupertinoDatePicker",\n            on_click=lambda e: page.open(\n                ft.CupertinoBottomSheet(\n                    cupertino_date_picker,\n                    height=216,\n                    padding=ft.padding.only(top=6),\n                )\n            ),\n        )\n    )\n\n\nft.app(main)\n'})})})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/cupertino-date-picker/basic-cupertino-date-picker.png",className:"screenshot-50"}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(t.h3,{id:"bgcolor",children:(0,a.jsx)(t.code,{children:"bgcolor"})}),"\n",(0,a.jsxs)(t.p,{children:["The background ",(0,a.jsx)(t.a,{href:"/docs/reference/colors",children:"color"})," of the date picker."]}),"\n",(0,a.jsx)(t.h3,{id:"date_order",children:(0,a.jsx)(t.code,{children:"date_order"})}),"\n",(0,a.jsx)(t.p,{children:"The order in which the columns inside this picker are displayed."}),"\n",(0,a.jsxs)(t.p,{children:["Value is of type ",(0,a.jsx)(t.a,{href:"/docs/reference/types/cupertinodatepickerdateorder",children:(0,a.jsx)(t.code,{children:"CupertinoDatePickerDateOrder"})}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The final order in which the columns are displayed is also influenced by the ",(0,a.jsx)(t.code,{children:"date_picker_mode"}),". For example, when using ",(0,a.jsx)(t.code,{children:"date_picker_mode=CupertinoDatePickerMode.MONTH_YEAR"}),", both ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerDateOrder.DAY_MONTH_YEAR"})," and ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerDateOrder.MONTH_DAY_YEAR"})," will result in the month|year order."]})}),"\n",(0,a.jsx)(t.h3,{id:"date_picker_mode",children:(0,a.jsx)(t.code,{children:"date_picker_mode"})}),"\n",(0,a.jsx)(t.p,{children:"The mode of the date picker."}),"\n",(0,a.jsxs)(t.p,{children:["Value is of type ",(0,a.jsx)(t.a,{href:"/docs/reference/types/cupertinodatepickermode",children:(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode"})})," and defaults\nto ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode.DATE_AND_TIME"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"first_date",children:(0,a.jsx)(t.code,{children:"first_date"})}),"\n",(0,a.jsx)(t.p,{children:"The earliest allowable date that the user can select."}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"None"})," - no limit."]}),"\n",(0,a.jsxs)(t.p,{children:["When not ",(0,a.jsx)(t.code,{children:"None"}),", one can still scroll the picker to dates earlier than ",(0,a.jsx)(t.code,{children:"first_date"}),", with the exception that the ",(0,a.jsx)(t.code,{children:"on_change"})," will not be called. Once let go, the picker will scroll back to ",(0,a.jsx)(t.code,{children:"first_date"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode.TIME"})," mode, a time becomes unselectable if the datetime produced by combining that particular time and the date part of initialDateTime is earlier than ",(0,a.jsx)(t.code,{children:"last_date"}),". So typically ",(0,a.jsx)(t.code,{children:"first_date"})," needs to be set to a datetime that is on the same date as initialDateTime."]}),"\n",(0,a.jsx)(t.h3,{id:"item_extent",children:(0,a.jsx)(t.code,{children:"item_extent"})}),"\n",(0,a.jsx)(t.p,{children:"The uniform height of all children."}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"32"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"last_date",children:(0,a.jsx)(t.code,{children:"last_date"})}),"\n",(0,a.jsx)(t.p,{children:"The latest allowable date that the user can select."}),"\n",(0,a.jsxs)(t.p,{children:["When not ",(0,a.jsx)(t.code,{children:"None"}),", one can still scroll the picker to dates later than ",(0,a.jsx)(t.code,{children:"last_date"}),", with the exception that the ",(0,a.jsx)(t.code,{children:"on_change"})," will not be called. Once let go, the picker will scroll back to ",(0,a.jsx)(t.code,{children:"last_date"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode.TIME"})," mode, a time becomes unselectable if the datetime produced by combining that particular time and the date part of initialDateTime is later than ",(0,a.jsx)(t.code,{children:"last_date"}),". So typically ",(0,a.jsx)(t.code,{children:"last_date"})," needs to be set to a datetime that is on the same date as initialDateTime."]}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"None"})," - no limit."]}),"\n",(0,a.jsx)(t.h3,{id:"max_year",children:(0,a.jsx)(t.code,{children:"max_year"})}),"\n",(0,a.jsxs)(t.p,{children:["Maximum year to which the picker can be scrolled when in ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode.DATE"})," mode."]}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"1"}),". Defaults to ",(0,a.jsx)(t.code,{children:"None"})," - no limit."]}),"\n",(0,a.jsx)(t.h3,{id:"min_year",children:(0,a.jsx)(t.code,{children:"min_year"})}),"\n",(0,a.jsxs)(t.p,{children:["Minimum year to which the picker can be scrolled when in ",(0,a.jsx)(t.code,{children:"CupertinoDatePickerMode.DATE"})," mode."]}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"min_interval",children:(0,a.jsx)(t.code,{children:"min_interval"})}),"\n",(0,a.jsxs)(t.p,{children:["The granularity of the minutes spinner, if it is shown in the current ",(0,a.jsx)(t.code,{children:"date_picker_mode"}),". Must be an integer factor of\n60."]}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"show_day_of_week",children:(0,a.jsx)(t.code,{children:"show_day_of_week"})}),"\n",(0,a.jsx)(t.p,{children:"Whether to to show day of week alongside day."}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"use_24h_format",children:(0,a.jsx)(t.code,{children:"use_24h_format"})}),"\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"True"}),", 24-hour time format is used else 12-hour time format is used."]}),"\n",(0,a.jsxs)(t.p,{children:["Defaults to ",(0,a.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"value",children:(0,a.jsx)(t.code,{children:"value"})}),"\n",(0,a.jsxs)(t.p,{children:["The initial date and/or time of the picker. It must conform to the intervals set in ",(0,a.jsx)(t.code,{children:"first_date"}),", ",(0,a.jsx)(t.code,{children:"last_date"}),", ",(0,a.jsx)(t.code,{children:"min_year"}),", and ",(0,a.jsx)(t.code,{children:"max_year"})," else an error will be ",(0,a.jsx)(t.code,{children:"ValueError"})," will be raised."]}),"\n",(0,a.jsx)(t.p,{children:"Defaults to the present date and time."}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(t.h3,{id:"on_change",children:(0,a.jsx)(t.code,{children:"on_change"})}),"\n",(0,a.jsxs)(t.p,{children:["Fires when the selected date and/or time changes. Will not fire if the new selected value is not valid, or is not in the range of ",(0,a.jsx)(t.code,{children:"first_date"})," and ",(0,a.jsx)(t.code,{children:"last_date"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(18215),i=n(65627),l=n(56347),o=n(50372),c=n(30604),d=n(11861),s=n(78749);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[i,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,u]=m({queryString:n,groupId:a}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,s.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),j=(()=>{const e=null!=d?d:x;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),s=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(d(t),l(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,_.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:s},i,{className:(0,a.A)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=x(e);return(0,_.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,_.jsx)(v,Object.assign({},t,e)),(0,_.jsx)(b,Object.assign({},t,e))]})}function k(e){const t=(0,f.A)();return(0,_.jsx)(g,Object.assign({},e,{children:u(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);