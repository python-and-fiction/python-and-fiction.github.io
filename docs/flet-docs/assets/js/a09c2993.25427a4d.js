"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5899],{47974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"introduction","title":"Introduction","description":"What is Flet?","source":"@site/docs/introduction.md","sourceDirName":".","slug":"/","permalink":"/docs/flet-docs/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/introduction.md","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Introduction","slug":"/"},"sidebar":"docs","next":{"title":"Getting started","permalink":"/docs/flet-docs/docs/getting-started/"}}');var a=n(74848),l=n(28453);n(65537),n(79329);const s={id:"introduction",title:"Introduction",slug:"/"},i=void 0,o={},c=[{value:"What is Flet?",id:"what-is-flet",level:2},{value:"Flet app example",id:"flet-app-example",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-flet",children:"What is Flet?"}),"\n",(0,a.jsx)(t.p,{children:"Flet is a framework that allows building web, desktop and mobile applications in Python without prior experience in frontend development."}),"\n",(0,a.jsxs)(t.p,{children:["You can build a UI for your program with Flet ",(0,a.jsx)(t.a,{href:"/docs/controls",children:"controls"})," which are based on ",(0,a.jsx)(t.a,{href:"https://flutter.dev",children:"Flutter"})," by Google. Flet goes beyond merely wrapping Flutter widgets. It adds its own touch by combining smaller widgets, simplifying complexities, implementing UI best practices, and applying sensible defaults. This ensures that your applications look stylish and polished without requiring additional design efforts on your part."]}),"\n",(0,a.jsx)(t.h2,{id:"flet-app-example",children:"Flet app example"}),"\n",(0,a.jsx)(t.p,{children:'Create a sample "Counter" app:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:'title="counter.py"',children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet counter example"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    txt_number = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)\n\n    def minus_click(e):\n        txt_number.value = str(int(txt_number.value) - 1)\n        page.update()\n\n    def plus_click(e):\n        txt_number.value = str(int(txt_number.value) + 1)\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(ft.Icons.REMOVE, on_click=minus_click),\n                txt_number,\n                ft.IconButton(ft.Icons.ADD, on_click=plus_click),\n            ],\n            alignment=ft.MainAxisAlignment.CENTER,\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["To run the app install ",(0,a.jsx)(t.code,{children:"flet"})," module (",(0,a.jsx)(t.a,{href:"/docs/getting-started",children:"create a new Flet environment"}),"):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pip install flet\n"})}),"\n",(0,a.jsxs)(t.p,{children:["and ",(0,a.jsx)(t.a,{href:"/docs/getting-started/running-app",children:"run the program"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flet run counter.py\n"})}),"\n",(0,a.jsx)(t.p,{children:"The app will be started in a native OS window - what a nice alternative to Electron!"}),"\n",(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col col--6",style:{textAlign:"center"},children:[(0,a.jsx)("h3",{children:"macOS"}),(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/flet-counter-macos.png",className:"screenshot-70"})]}),(0,a.jsxs)("div",{className:"col col--6",style:{textAlign:"center"},children:[(0,a.jsx)("h3",{children:"Windows"}),(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/flet-counter-windows.png",className:"screenshot-60"})]})]}),"\n",(0,a.jsx)(t.p,{children:"Now, run your app as a web app:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"flet run --web counter.py\n"})}),"\n",(0,a.jsx)(t.p,{children:"A new browser window or tab will be opened:"}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/flet-counter-safari.png",className:"screenshot-50"})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(18215),l=n(65627),s=n(56347),i=n(50372),o=n(30604),c=n(11861),u=n(78749);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}),[l,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=null!=c?c:m;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=o.indexOf(e.currentTarget)+1;n=null!=(r=o[t])?r:o[0];break}case"ArrowLeft":{var a;const t=o.indexOf(e.currentTarget)-1;n=null!=(a=o[t])?a:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.A)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(w,Object.assign({},t,e))]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);