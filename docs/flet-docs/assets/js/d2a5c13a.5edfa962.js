"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[16067],{92985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"reference/types/border","title":"Border","description":"Border class has the following properties describing 4 sides of the rectangle:","source":"@site/docs/reference/types/border.md","sourceDirName":"reference/types","slug":"/reference/types/border","permalink":"/docs/flet-docs/docs/reference/types/border","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/border.md","tags":[],"version":"current","frontMatter":{"title":"Border","sidebar_label":"Border"},"sidebar":"docs","previous":{"title":"Blur","permalink":"/docs/flet-docs/docs/reference/types/blur"},"next":{"title":"BorderRadius","permalink":"/docs/flet-docs/docs/reference/types/borderradius"}}');var n=t(74848),l=t(28453);t(65537),t(79329);const a={title:"Border",sidebar_label:"Border"},s=void 0,d={},i=[{value:"<code>bottom</code>",id:"bottom",level:3},{value:"<code>left</code>",id:"left",level:3},{value:"<code>right</code>",id:"right",level:3},{value:"<code>top</code>",id:"top",level:3},{value:"Helper methods",id:"helper-methods",level:2},{value:"<code>border.all(width, color)</code>",id:"borderallwidth-color",level:3},{value:"<code>border.symmetric(vertical, horizontal)</code>",id:"bordersymmetricvertical-horizontal",level:3},{value:"<code>border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)</code>",id:"borderonlyleft-borderside-top-borderside-right-borderside-bottom-borderside",level:3},{value:"Usage example",id:"usage-example",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Border"})," class has the following properties describing 4 sides of the rectangle:"]}),"\n",(0,n.jsx)(r.h3,{id:"bottom",children:(0,n.jsx)(r.code,{children:"bottom"})}),"\n",(0,n.jsx)(r.h3,{id:"left",children:(0,n.jsx)(r.code,{children:"left"})}),"\n",(0,n.jsx)(r.h3,{id:"right",children:(0,n.jsx)(r.code,{children:"right"})}),"\n",(0,n.jsx)(r.h3,{id:"top",children:(0,n.jsx)(r.code,{children:"top"})}),"\n",(0,n.jsx)(r.h2,{id:"helper-methods",children:"Helper methods"}),"\n",(0,n.jsxs)(r.p,{children:["Each side of the border is described by an instance of ",(0,n.jsx)(r.a,{href:"/docs/reference/types/borderside",children:(0,n.jsx)(r.code,{children:"BorderSide"})})," class."]}),"\n",(0,n.jsxs)(r.p,{children:["The below helper methods are available to ease the creation of ",(0,n.jsx)(r.code,{children:"Border"})," objects:"]}),"\n",(0,n.jsx)(r.h3,{id:"borderallwidth-color",children:(0,n.jsx)(r.code,{children:"border.all(width, color)"})}),"\n",(0,n.jsx)(r.p,{children:"Sets the same border for all 4 sides of the rectangle."}),"\n",(0,n.jsx)(r.h3,{id:"bordersymmetricvertical-horizontal",children:(0,n.jsx)(r.code,{children:"border.symmetric(vertical, horizontal)"})}),"\n",(0,n.jsxs)(r.p,{children:["Sets ",(0,n.jsx)(r.code,{children:"vertical"})," border for top and bottom sides and ",(0,n.jsx)(r.code,{children:"horizontal"})," for the left and right sides of the rectangle."]}),"\n",(0,n.jsx)(r.h3,{id:"borderonlyleft-borderside-top-borderside-right-borderside-bottom-borderside",children:(0,n.jsx)(r.code,{children:"border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)"})}),"\n",(0,n.jsx)(r.p,{children:"Sets different borders for each side of the rectangle."}),"\n",(0,n.jsx)(r.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'container_1.border = ft.border.all(10, ft.Colors.PINK_600)\ncontainer_1.border = ft.border.only(bottom=ft.border.BorderSide(1, "black"))\n'})})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},79329:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var o=t(18215);const n={tabItem:"tabItem_Ymn6"};var l=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,a),hidden:t,children:r})}},65537:(e,r,t)=>{t.d(r,{A:()=>w});var o=t(96540),n=t(18215),l=t(65627),a=t(56347),s=t(50372),d=t(30604),i=t(11861),c=t(78749);function u(e){var r,t;return null!=(r=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function h(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=r?r:function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:o,default:n}}=e;return{value:r,label:t,attributes:o,default:n}}))}(t);return function(e){const r=(0,i.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function b(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:t});return[(0,d.aZ)(l),(0,o.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace(Object.assign({},n.location,{search:r.toString()}))}),[l,n])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,l=h(e),[a,d]=(0,o.useState)((()=>function(e){var r;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const n=null!=(r=o.find((e=>e.default)))?r:o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[i,u]=f({queryString:t,groupId:n}),[p,m]=function(e){let{groupId:r}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(r),[n,l]=(0,c.Dv)(t);return[n,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),v=(()=>{const e=null!=i?i:p;return b({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&d(v)}),[v]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);d(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:r,block:t,selectedValue:o,selectValue:a,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const r=e.currentTarget,t=d.indexOf(r),n=s[t].value;n!==o&&(i(r),a(n))},u=e=>{var r;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var o;const r=d.indexOf(e.currentTarget)+1;t=null!=(o=d[r])?o:d[0];break}case"ArrowLeft":{var n;const r=d.indexOf(e.currentTarget)-1;t=null!=(n=d[r])?n:d[d.length-1];break}}null==(r=t)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>{d.push(e)},onKeyDown:u,onClick:c},l,{className:(0,n.A)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===r}),children:null!=t?t:r}),r)}))})}function j(e){let{lazy:r,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===l));return e?(0,o.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},r,e)),(0,g.jsx)(j,Object.assign({},r,e))]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var o=t(96540);const n={},l=o.createContext(n);function a(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);