"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[73937],{36655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/types/sweepgradient","title":"SweepGradient","description":"SweepGradient class has the following properties:","source":"@site/docs/reference/types/sweepgradient.md","sourceDirName":"reference/types","slug":"/reference/types/sweepgradient","permalink":"/docs/flet-docs/docs/reference/types/sweepgradient","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/sweepgradient.md","tags":[],"version":"current","frontMatter":{"title":"SweepGradient","sidebar_label":"SweepGradient"},"sidebar":"docs","previous":{"title":"StrutStyle","permalink":"/docs/flet-docs/docs/reference/types/strutstyle"},"next":{"title":"TextSelection","permalink":"/docs/flet-docs/docs/reference/types/textselection"}}');var a=n(74848),s=n(28453);n(65537),n(79329);const l={title:"SweepGradient",sidebar_label:"SweepGradient"},o=void 0,i={},c=[{value:"<code>center</code>",id:"center",level:3},{value:"<code>colors</code>",id:"colors",level:3},{value:"<code>end_angle</code>",id:"end_angle",level:3},{value:"<code>rotation</code>",id:"rotation",level:3},{value:"<code>stops</code>",id:"stops",level:3},{value:"<code>start_angle</code>",id:"start_angle",level:3},{value:"<code>tile_mode</code>",id:"tile_mode",level:3},{value:"Usage example",id:"usage-example",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"SweepGradient"})," class has the following properties:"]}),"\n",(0,a.jsx)(t.h3,{id:"center",children:(0,a.jsx)(t.code,{children:"center"})}),"\n",(0,a.jsx)(t.p,{children:"The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the sweep gradient in the center of the box."}),"\n",(0,a.jsx)(t.h3,{id:"colors",children:(0,a.jsx)(t.code,{children:"colors"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/reference/colors",children:(0,a.jsx)(t.code,{children:"colors"})})," the gradient should obtain at each of the stops. This list must contain at least two colors."]}),"\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"stops"})," is provided, this list must have the same length as ",(0,a.jsx)(t.code,{children:"stops"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"end_angle",children:(0,a.jsx)(t.code,{children:"end_angle"})}),"\n",(0,a.jsxs)(t.p,{children:["The angle in ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Radian",children:"radians"})," at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2."]}),"\n",(0,a.jsx)(t.h3,{id:"rotation",children:(0,a.jsx)(t.code,{children:"rotation"})}),"\n",(0,a.jsxs)(t.p,{children:["Rotation for the gradient, in ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Radian",children:"radians"}),", around the center-point of its bounding box."]}),"\n",(0,a.jsx)(t.h3,{id:"stops",children:(0,a.jsx)(t.code,{children:"stops"})}),"\n",(0,a.jsxs)(t.p,{children:["A list of values from ",(0,a.jsx)(t.code,{children:"0.0"})," to ",(0,a.jsx)(t.code,{children:"1.0"})," that denote fractions along the gradient."]}),"\n",(0,a.jsxs)(t.p,{children:["If provided, this list must have the same length as ",(0,a.jsx)(t.code,{children:"colors"}),". If the first value is not ",(0,a.jsx)(t.code,{children:"0.0"}),", then a stop with position ",(0,a.jsx)(t.code,{children:"0.0"})," and a color equal to the first color in ",(0,a.jsx)(t.code,{children:"colors"})," is implied. If the last value is not ",(0,a.jsx)(t.code,{children:"1.0"}),", then a stop with position ",(0,a.jsx)(t.code,{children:"1.0"})," and a color equal to the last color in ",(0,a.jsx)(t.code,{children:"colors"})," is implied."]}),"\n",(0,a.jsx)(t.h3,{id:"start_angle",children:(0,a.jsx)(t.code,{children:"start_angle"})}),"\n",(0,a.jsxs)(t.p,{children:["The angle in ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Radian",children:"radians"})," at which stop 0.0 of the gradient is placed. Defaults to 0.0."]}),"\n",(0,a.jsx)(t.h3,{id:"tile_mode",children:(0,a.jsx)(t.code,{children:"tile_mode"})}),"\n",(0,a.jsxs)(t.p,{children:["How this gradient should tile the plane beyond in the region before ",(0,a.jsx)(t.code,{children:"begin"})," and after ",(0,a.jsx)(t.code,{children:"end"}),". The value is ",(0,a.jsx)(t.code,{children:"GradientTileMode"})," enum with supported values: ",(0,a.jsx)(t.code,{children:"CLAMP"})," (default), ",(0,a.jsx)(t.code,{children:"DECAL"}),", ",(0,a.jsx)(t.code,{children:"MIRROR"}),", ",(0,a.jsx)(t.code,{children:"REPEATED"}),". More info ",(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-ui/TileMode.html",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["More information on Sweep gradient ",(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/painting/SweepGradient-class.html",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"usage-example",children:"Usage example"}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/container/sweep-gradient.png",className:"screenshot-20"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"Container(\n    gradient=SweepGradient(\n        center=ft.alignment.center,\n        start_angle=0.0,\n        end_angle=math.pi * 2,\n       colors=[ft.Colors.YELLOW, ft.Colors.BLUE],\n    ),\n    width=150,\n    height=150,\n    border_radius=5,\n)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(18215),s=n(65627),l=n(56347),o=n(50372),i=n(30604),c=n(11861),d=n(78749);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(c(t),l(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=i.indexOf(e.currentTarget)+1;n=null!=(r=i[t])?r:i[0];break}case"ArrowLeft":{var a;const t=i.indexOf(e.currentTarget)-1;n=null!=(a=i[t])?a:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.A)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,Object.assign({},t,e)),(0,b.jsx)(j,Object.assign({},t,e))]})}function y(e){const t=(0,g.A)();return(0,b.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);