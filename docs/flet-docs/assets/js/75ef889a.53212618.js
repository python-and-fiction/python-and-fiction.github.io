"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[85132],{15616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"cookbook/theming","title":"Theming","description":"It is possible to configure your application and/or the containing controls to follow a particular themes.","source":"@site/docs/cookbook/theming.md","sourceDirName":"cookbook","slug":"/cookbook/theming","permalink":"/docs/flet-docs/docs/cookbook/theming","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/cookbook/theming.md","tags":[],"version":"current","frontMatter":{"title":"Theming","sidebar_label":"Theming"},"sidebar":"docs","previous":{"title":"WindowDragArea","permalink":"/docs/flet-docs/docs/controls/windowdragarea"},"next":{"title":"Keyboard shortcuts","permalink":"/docs/flet-docs/docs/cookbook/keyboard-shortcuts"}}');var r=n(74848),s=n(28453);const i={title:"Theming",sidebar_label:"Theming"},c=void 0,d={},h=[{value:"App-wide themes",id:"app-wide-themes",level:3},{value:"Nested themes",id:"nested-themes",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"It is possible to configure your application and/or the containing controls to follow a particular themes."}),"\n",(0,r.jsx)(t.h3,{id:"app-wide-themes",children:"App-wide themes"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Page"})," control (uppermost control in the tree) has two useful properties for this: ",(0,r.jsx)(t.code,{children:"theme"}),"\nand ",(0,r.jsx)(t.code,{children:"dark_theme"})," properties to configure the appearance/theme of the entire app in light and\ndark theme modes respectively."]}),"\n",(0,r.jsxs)(t.p,{children:["Both of type ",(0,r.jsx)(t.a,{href:"/docs/reference/types/theme",children:(0,r.jsx)(t.code,{children:"Theme"})}),", they represent the default/fallback themes to be used app-wide,\nexcept explicitly modified/overriden in the tree."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"page.theme = ft.Theme(color_scheme_seed=ft.Colors.GREEN)\npage.dark_theme = ft.Theme(color_scheme_seed=ft.Colors.BLUE)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"nested-themes",children:"Nested themes"}),"\n",(0,r.jsx)(t.p,{children:"You can have a part of your app to use a different theme or override some theme styles for specific controls."}),"\n",(0,r.jsxs)(t.p,{children:["Some container-like controls have ",(0,r.jsx)(t.code,{children:"theme"})," and ",(0,r.jsx)(t.code,{children:"theme_mode"})," properties of type ",(0,r.jsx)(t.a,{href:"/docs/reference/types/theme",children:(0,r.jsx)(t.code,{children:"Theme"})})," and ",(0,r.jsx)(t.a,{href:"/docs/reference/types/thememode",children:(0,r.jsx)(t.code,{children:"ThemeMode"})})," respectively."]}),"\n",(0,r.jsxs)(t.p,{children:["Specifying ",(0,r.jsx)(t.code,{children:"theme_mode"})," in the ",(0,r.jsx)(t.code,{children:"Container"})," means you don't want to inherit parent theme mode,\nbut want a completely new, unique scheme for all controls inside the container.\nHowever, if the container does not have ",(0,r.jsx)(t.code,{children:"theme_mode"})," property set then the styles from its theme property will override the ones from the parent inherited theme:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    # Yellow page theme with SYSTEM (default) mode\n    page.theme = ft.Theme(\n        color_scheme_seed=ft.Colors.YELLOW,\n    )\n\n    page.add(\n        # Page theme\n        ft.Container(\n            content=ft.ElevatedButton("Page theme button"),\n            bgcolor=ft.Colors.SURFACE_VARIANT,\n            padding=20,\n            width=300,\n        ),\n\n        # Inherited theme with primary color overridden\n        ft.Container(\n            theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.Colors.PINK)),\n            content=ft.ElevatedButton("Inherited theme button"),\n            bgcolor=ft.Colors.SURFACE_VARIANT,\n            padding=20,\n            width=300,\n        ),\n\n        # Unique always DARK theme\n        ft.Container(\n            theme=ft.Theme(color_scheme_seed=ft.Colors.INDIGO),\n            theme_mode=ft.ThemeMode.DARK,\n            content=ft.ElevatedButton("Unique theme button"),\n            bgcolor=ft.Colors.SURFACE_VARIANT,\n            padding=20,\n            width=300,\n        ),\n    )\n\nft.app(main)\n'})}),"\n",(0,r.jsx)("img",{src:"/docs/flet-docs/img/blog/theme-scrolling/nested-themes.png",className:"screenshot-60"})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);