"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[306],{31206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"reference/types/dragendevent","title":"DragEndEvent","description":"DragEndEvent class has the following properties:","source":"@site/docs/reference/types/dragendevent.md","sourceDirName":"reference/types","slug":"/reference/types/dragendevent","permalink":"/docs/flet-docs/docs/reference/types/dragendevent","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/dragendevent.md","tags":[],"version":"current","frontMatter":{"title":"DragEndEvent","sidebar_label":"DragEndEvent"},"sidebar":"docs","previous":{"title":"DatePickerEntryModeChangeEvent","permalink":"/docs/flet-docs/docs/reference/types/datepickerentrymodechangeevent"},"next":{"title":"DragStartEvent","permalink":"/docs/flet-docs/docs/reference/types/dragstartevent"}}');var a=n(74848),l=n(28453);n(65537),n(79329);const o={title:"DragEndEvent",sidebar_label:"DragEndEvent"},s=void 0,c={},i=[{value:"<code>primary_velocity</code>",id:"primary_velocity",level:3},{value:"<code>velocity_x</code>",id:"velocity_x",level:3},{value:"<code>velocity_y</code>",id:"velocity_y",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"DragEndEvent"})," class has the following properties:"]}),"\n",(0,a.jsx)(t.h3,{id:"primary_velocity",children:(0,a.jsx)(t.code,{children:"primary_velocity"})}),"\n",(0,a.jsx)(t.p,{children:"The velocity the pointer was moving along the primary axis when it stopped contacting the screen, in logical pixels per second."}),"\n",(0,a.jsx)(t.h3,{id:"velocity_x",children:(0,a.jsx)(t.code,{children:"velocity_x"})}),"\n",(0,a.jsx)(t.p,{children:"The x component of the pointer's velocity when it stopped contacting the screen."}),"\n",(0,a.jsx)(t.h3,{id:"velocity_y",children:(0,a.jsx)(t.code,{children:"velocity_y"})}),"\n",(0,a.jsx)(t.p,{children:"The y component of the pointer's velocity when it stopped contacting the screen."})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(18215),l=n(65627),o=n(56347),s=n(50372),c=n(30604),i=n(11861),u=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function v(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=null!=i?i:f;return v({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(i(t),o(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.A)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function E(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(y,Object.assign({},t,e)),(0,g.jsx)(x,Object.assign({},t,e))]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(E,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},l=r.createContext(a);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);