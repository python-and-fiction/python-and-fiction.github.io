"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[61221],{73560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"reference/types/scale","title":"Scale","description":"Scale has the following properties:","source":"@site/docs/reference/types/scale.md","sourceDirName":"reference/types","slug":"/reference/types/scale","permalink":"/docs/flet-docs/docs/reference/types/scale","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/scale.md","tags":[],"version":"current","frontMatter":{"title":"Scale","sidebar_label":"Scale"},"sidebar":"docs","previous":{"title":"Rotate","permalink":"/docs/flet-docs/docs/reference/types/rotate"},"next":{"title":"StrutStyle","permalink":"/docs/flet-docs/docs/reference/types/strutstyle"}}');var l=n(74848),a=n(28453);n(65537),n(79329);const s={title:"Scale",sidebar_label:"Scale"},c=void 0,o={},i=[{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>scale_x</code>",id:"scale_x",level:3},{value:"<code>scale_y</code>",id:"scale_y",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Scale"})," has the following properties:"]}),"\n",(0,l.jsx)(t.h3,{id:"alignment",children:(0,l.jsx)(t.code,{children:"alignment"})}),"\n",(0,l.jsx)(t.p,{children:"Gives the origin of scale."}),"\n",(0,l.jsxs)(t.p,{children:["Value is of type ",(0,l.jsx)(t.a,{href:"/docs/reference/types/alignment",children:(0,l.jsx)(t.code,{children:"Alignment"})}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"scale",children:(0,l.jsx)(t.code,{children:"scale"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"scale_x"})," and ",(0,l.jsx)(t.code,{children:"scale_y"})," get the value of ",(0,l.jsx)(t.code,{children:"scale"})," if ",(0,l.jsx)(t.code,{children:"scale"})," is provided."]}),"\n",(0,l.jsxs)(t.p,{children:["Value is of type ",(0,l.jsx)(t.code,{children:"float"})," and defaults to ",(0,l.jsx)(t.code,{children:"None"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"scale_x",children:(0,l.jsx)(t.code,{children:"scale_x"})}),"\n",(0,l.jsx)(t.p,{children:"The scalar by which to multiply the x-axis."}),"\n",(0,l.jsxs)(t.p,{children:["Value is of type ",(0,l.jsx)(t.code,{children:"float"})," and defaults to ",(0,l.jsx)(t.code,{children:"None"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"scale_y",children:(0,l.jsx)(t.code,{children:"scale_y"})}),"\n",(0,l.jsx)(t.p,{children:"The scalar by which to multiply the y-axis."}),"\n",(0,l.jsxs)(t.p,{children:["Value is of type ",(0,l.jsx)(t.code,{children:"float"})," and defaults to ",(0,l.jsx)(t.code,{children:"None"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const l={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),l=n(18215),a=n(65627),s=n(56347),c=n(50372),o=n(30604),i=n(11861),u=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}),[a,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const l=null!=(t=r.find((e=>e.default)))?t:r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[i,d]=p({queryString:n,groupId:l}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[l,a]=(0,u.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),v=(()=>{const e=null!=i?i:b;return f({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),l=c[n].value;l!==r&&(i(t),s(l))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=o.indexOf(e.currentTarget)+1;n=null!=(r=o[t])?r:o[0];break}case"ArrowLeft":{var l;const t=o.indexOf(e.currentTarget)-1;n=null!=(l=o[t])?l:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},a,{className:(0,l.A)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,x.jsx)(y,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);