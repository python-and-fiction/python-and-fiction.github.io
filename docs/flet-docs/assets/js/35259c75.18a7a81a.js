"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[46936],{43843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/types/webviewscrollevent","title":"WebviewScrollEvent","description":"WebviewScrollEvent class has the following values:","source":"@site/docs/reference/types/webviewscrollevent.md","sourceDirName":"reference/types","slug":"/reference/types/webviewscrollevent","permalink":"/docs/flet-docs/docs/reference/types/webviewscrollevent","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/webviewscrollevent.md","tags":[],"version":"current","frontMatter":{"title":"WebviewScrollEvent","sidebar_label":"WebviewScrollEvent"},"sidebar":"docs","previous":{"title":"WebviewJavaScriptEvent","permalink":"/docs/flet-docs/docs/reference/types/webviewjavascriptevent"},"next":{"title":"WindowEvent","permalink":"/docs/flet-docs/docs/reference/types/windowevent"}}');var l=n(74848),a=n(28453);n(65537),n(79329);const s={title:"WebviewScrollEvent",sidebar_label:"WebviewScrollEvent"},o=void 0,u={},c=[{value:"<code>x</code>",id:"x",level:4},{value:"<code>y</code>",id:"y",level:4}];function i(e){const t={code:"code",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"WebviewScrollEvent"})," class has the following values:"]}),"\n",(0,l.jsx)(t.h4,{id:"x",children:(0,l.jsx)(t.code,{children:"x"})}),"\n",(0,l.jsx)(t.p,{children:"The x-coordinate of the scroll position."}),"\n",(0,l.jsx)(t.h4,{id:"y",children:(0,l.jsx)(t.code,{children:"y"})}),"\n",(0,l.jsx)(t.p,{children:"The y-coordinate of the scroll position."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const l={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),l=n(18215),a=n(65627),s=n(56347),o=n(50372),u=n(30604),c=n(11861),i=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function v(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}),[a,l])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=v(e),[s,u]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const l=null!=(t=r.find((e=>e.default)))?t:r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:n,groupId:l}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[l,a]=(0,i.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),m=(()=>{const e=null!=c?c:p;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&u(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var h=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),l=o[n].value;l!==r&&(c(t),s(l))},d=e=>{var t;let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var l;const t=u.indexOf(e.currentTarget)-1;n=null!=(l=u[t])?l:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:i},a,{className:(0,l.A)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=p(e);return(0,w.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,w.jsx)(g,Object.assign({},t,e)),(0,w.jsx)(y,Object.assign({},t,e))]})}function j(e){const t=(0,h.A)();return(0,w.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);