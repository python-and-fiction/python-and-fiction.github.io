"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[59446],{13088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"reference/types/markdownselectionchangeevent","title":"MarkdownSelectionChangeEvent","description":"MarkdownSelectionChangeEvent class has the following properties:","source":"@site/docs/reference/types/markdownselectionchangeevent.md","sourceDirName":"reference/types","slug":"/reference/types/markdownselectionchangeevent","permalink":"/docs/flet-docs/docs/reference/types/markdownselectionchangeevent","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/markdownselectionchangeevent.md","tags":[],"version":"current","frontMatter":{"title":"MarkdownSelectionChangeEvent","sidebar_label":"MarkdownSelectionChangeEvent"},"sidebar":"docs","previous":{"title":"LongPressStartEvent","permalink":"/docs/flet-docs/docs/reference/types/longpressstartevent"},"next":{"title":"MapEvent","permalink":"/docs/flet-docs/docs/reference/types/mapevent"}}');var a=n(74848),s=n(28453);n(65537),n(79329);const l={title:"MarkdownSelectionChangeEvent",sidebar_label:"MarkdownSelectionChangeEvent"},o=void 0,c={},i=[{value:"<code>cause</code>",id:"cause",level:3},{value:"<code>selection</code>",id:"selection",level:3},{value:"<code>text</code>",id:"text",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MarkdownSelectionChangeEvent"})," class has the following properties:"]}),"\n",(0,a.jsx)(t.h3,{id:"cause",children:(0,a.jsx)(t.code,{children:"cause"})}),"\n",(0,a.jsx)(t.p,{children:"The cause of the selection change."}),"\n",(0,a.jsxs)(t.p,{children:["Value is of type ",(0,a.jsx)(t.a,{href:"/docs/reference/types/markdownselectionchangecause",children:(0,a.jsx)(t.code,{children:"MarkdownSelectionChangeCause"})}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"selection",children:(0,a.jsx)(t.code,{children:"selection"})}),"\n",(0,a.jsx)(t.p,{children:"Information about the selected text."}),"\n",(0,a.jsxs)(t.p,{children:["Value is of type ",(0,a.jsx)(t.a,{href:"/docs/reference/types/textselection",children:(0,a.jsx)(t.code,{children:"TextSelection"})}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"text",children:(0,a.jsx)(t.code,{children:"text"})}),"\n",(0,a.jsx)(t.p,{children:"The selected text."}),"\n",(0,a.jsxs)(t.p,{children:["Value is of type ",(0,a.jsx)(t.code,{children:"str"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(18215),s=n(65627),l=n(56347),o=n(50372),c=n(30604),i=n(11861),u=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=p({queryString:n,groupId:a}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=null!=i?i:v;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.A)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(w,Object.assign({},t,e))]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);