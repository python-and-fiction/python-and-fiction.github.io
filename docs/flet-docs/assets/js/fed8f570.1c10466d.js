"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[85870],{3863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"controls/listview","title":"ListView","description":"A scrollable list of controls arranged linearly.","source":"@site/docs/controls/listview.md","sourceDirName":"controls","slug":"/controls/listview","permalink":"/docs/flet-docs/docs/controls/listview","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/listview.md","tags":[],"version":"current","frontMatter":{"title":"ListView","sidebar_label":"ListView"},"sidebar":"docs","previous":{"title":"ListTile","permalink":"/docs/flet-docs/docs/controls/listtile"},"next":{"title":"Page","permalink":"/docs/flet-docs/docs/controls/page"}}');var r=n(74848),i=n(28453),o=n(65537),s=n(79329);const c={title:"ListView",sidebar_label:"ListView"},a=void 0,d={},h=[{value:"Examples",id:"examples",level:2},{value:"Auto-scrolling ListView",id:"auto-scrolling-listview",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>auto_scroll</code>",id:"auto_scroll",level:3},{value:"<code>cache_extent</code>",id:"cache_extent",level:3},{value:"<code>clip_behavior</code>",id:"clip_behavior",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>divider_thickness</code>",id:"divider_thickness",level:3},{value:"<code>first_item_prototype</code>",id:"first_item_prototype",level:3},{value:"<code>horizontal</code>",id:"horizontal",level:3},{value:"<code>item_extent</code>",id:"item_extent",level:3},{value:"<code>on_scroll_interval</code>",id:"on_scroll_interval",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>reverse</code>",id:"reverse",level:3},{value:"<code>semantic_child_count</code>",id:"semantic_child_count",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>scroll_to(offset, delta, key, duration, curve)</code>",id:"scroll_tooffset-delta-key-duration-curve",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_scroll</code>",id:"on_scroll",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A scrollable list of controls arranged linearly."}),"\n",(0,r.jsx)(t.p,{children:"ListView is the most commonly used scrolling control. It displays its children one after another in the scroll direction. In the cross axis, the children are required to fill the ListView."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["ListView is very effective for large lists (thousands of items). Prefer it over ",(0,r.jsx)(t.a,{href:"/docs/controls/column",children:(0,r.jsx)(t.code,{children:"Column"})})," or ",(0,r.jsx)(t.a,{href:"/docs/controls/row",children:(0,r.jsx)(t.code,{children:"Row"})})," for smooth scrolling."]})}),"\n","\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://flet-controls-gallery.fly.dev/layout/listview",children:"Live example"})}),"\n",(0,r.jsx)(t.h3,{id:"auto-scrolling-listview",children:"Auto-scrolling ListView"}),"\n",(0,r.jsx)(o.A,{groupId:"language",children:(0,r.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from time import sleep\nimport flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Auto-scrolling ListView"\n\n    lv = ft.ListView(expand=1, spacing=10, padding=20, auto_scroll=True)\n\n    count = 1\n\n    for i in range(0, 60):\n        lv.controls.append(ft.Text(f"Line {count}"))\n        count += 1\n\n    page.add(lv)\n\n    for i in range(0, 60):\n        sleep(1)\n        lv.controls.append(ft.Text(f"Line {count}"))\n        count += 1\n        page.update()\n\nft.app(main)\n'})})})}),"\n",(0,r.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/listview/custom-listview.gif",className:"screenshot-40"}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"auto_scroll",children:(0,r.jsx)(t.code,{children:"auto_scroll"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"True"})," if scrollbar should automatically move its position to the end when children updated. Must be ",(0,r.jsx)(t.code,{children:"False"})," for ",(0,r.jsx)(t.code,{children:"scroll_to()"})," method to work."]}),"\n",(0,r.jsx)(t.h3,{id:"cache_extent",children:(0,r.jsx)(t.code,{children:"cache_extent"})}),"\n",(0,r.jsx)(t.p,{children:"Items that fall in the cache area (area before or after the visible area that are about to become visible when the user\nscrolls) are laid out even though they are not (yet) visible on screen.\nThe cacheExtent describes how many pixels the cache area extends before the leading edge and after the trailing edge of\nthe viewport."}),"\n",(0,r.jsxs)(t.p,{children:["The total extent, which the viewport will try to cover with ",(0,r.jsx)(t.code,{children:"controls"}),", is ",(0,r.jsx)(t.code,{children:"cache_extent"})," before the leading edge +\nextent of the main axis + ",(0,r.jsx)(t.code,{children:"cache_extent"})," after the trailing edge."]}),"\n",(0,r.jsx)(t.h3,{id:"clip_behavior",children:(0,r.jsx)(t.code,{children:"clip_behavior"})}),"\n",(0,r.jsx)(t.p,{children:"The content will be clipped (or not) according to this option."}),"\n",(0,r.jsxs)(t.p,{children:["Value is of type ",(0,r.jsx)(t.a,{href:"/docs/reference/types/clipbehavior",children:(0,r.jsx)(t.code,{children:"ClipBehavior"})})," and defaults to ",(0,r.jsx)(t.code,{children:"HARD_EDGE"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"controls",children:(0,r.jsx)(t.code,{children:"controls"})}),"\n",(0,r.jsxs)(t.p,{children:["A list of ",(0,r.jsx)(t.code,{children:"Control"}),"s to display inside ListView."]}),"\n",(0,r.jsx)(t.h3,{id:"divider_thickness",children:(0,r.jsx)(t.code,{children:"divider_thickness"})}),"\n",(0,r.jsxs)(t.p,{children:["If greater than ",(0,r.jsx)(t.code,{children:"0"})," then Divider is used as a spacing between list view items."]}),"\n",(0,r.jsx)(t.h3,{id:"first_item_prototype",children:(0,r.jsx)(t.code,{children:"first_item_prototype"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"True"}),' if the dimensions of the first item should be used as a "prototype" for all other items, i.e. their height or\nwidth will be the same as the first item.']}),"\n",(0,r.jsxs)(t.p,{children:["Defaults to ",(0,r.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"horizontal",children:(0,r.jsx)(t.code,{children:"horizontal"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"True"})," to layout ListView items horizontally."]}),"\n",(0,r.jsx)(t.h3,{id:"item_extent",children:(0,r.jsx)(t.code,{children:"item_extent"})}),"\n",(0,r.jsxs)(t.p,{children:["A fixed height or width (for ",(0,r.jsx)(t.code,{children:"horizontal"})," ListView) of an item to optimize rendering."]}),"\n",(0,r.jsx)(t.h3,{id:"on_scroll_interval",children:(0,r.jsx)(t.code,{children:"on_scroll_interval"})}),"\n",(0,r.jsxs)(t.p,{children:["Throttling in milliseconds for ",(0,r.jsx)(t.code,{children:"on_scroll"})," event."]}),"\n",(0,r.jsxs)(t.p,{children:["Defaults to ",(0,r.jsx)(t.code,{children:"10"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"padding",children:(0,r.jsx)(t.code,{children:"padding"})}),"\n",(0,r.jsx)(t.p,{children:"The amount of space by which to inset the children."}),"\n",(0,r.jsxs)(t.p,{children:["Value is of type",(0,r.jsx)(t.a,{href:"/docs/reference/types/padding",children:(0,r.jsx)(t.code,{children:"Padding"})}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"reverse",children:(0,r.jsx)(t.code,{children:"reverse"})}),"\n",(0,r.jsx)(t.p,{children:"Defines whether the scroll view scrolls in the reading direction."}),"\n",(0,r.jsxs)(t.p,{children:["Defaults to ",(0,r.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"semantic_child_count",children:(0,r.jsx)(t.code,{children:"semantic_child_count"})}),"\n",(0,r.jsx)(t.p,{children:"The number of children that will contribute semantic information."}),"\n",(0,r.jsx)(t.h3,{id:"spacing",children:(0,r.jsx)(t.code,{children:"spacing"})}),"\n",(0,r.jsx)(t.p,{children:"The height of Divider between ListView items. No spacing between items if not specified."}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"scroll_tooffset-delta-key-duration-curve",children:(0,r.jsx)(t.code,{children:"scroll_to(offset, delta, key, duration, curve)"})}),"\n",(0,r.jsxs)(t.p,{children:["Moves scroll position to either absolute ",(0,r.jsx)(t.code,{children:"offset"}),", relative ",(0,r.jsx)(t.code,{children:"delta"})," or jump to the control with specified ",(0,r.jsx)(t.code,{children:"key"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/controls/column#scroll_tooffset-delta-key-duration-curve",children:(0,r.jsx)(t.code,{children:"Column.scroll_to()"})})," for method details and examples."]}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.h3,{id:"on_scroll",children:(0,r.jsx)(t.code,{children:"on_scroll"})}),"\n",(0,r.jsx)(t.p,{children:"Fires when scroll position is changed by a user."}),"\n",(0,r.jsxs)(t.p,{children:["Event handler argument is an instance of ",(0,r.jsx)(t.a,{href:"/docs/reference/types/onscrollevent",children:(0,r.jsx)(t.code,{children:"OnScrollEvent"})})," class."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var l=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>_});var l=n(96540),r=n(18215),i=n(65627),o=n(56347),s=n(50372),c=n(30604),a=n(11861),d=n(78749);function h(e){var t,n;return null!=(t=null==(n=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[i,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[o,c]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=l.find((e=>e.default)))?t:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[a,h]=f({queryString:n,groupId:r}),[v,x]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=null!=a?a:v;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function b(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(a(t),o(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var l;const t=c.indexOf(e.currentTarget)+1;n=null!=(l=c[t])?l:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;n=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,r.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t}),children:null!=n?n:t}),t)}))})}function g(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=v(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(b,Object.assign({},t,e)),(0,j.jsx)(g,Object.assign({},t,e))]})}function _(e){const t=(0,x.A)();return(0,j.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var l=n(96540);const r={},i=l.createContext(r);function o(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);