"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[83986],{70509:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"publish/macos","title":"Packaging app for macOS","description":"Flet CLI provides flet build macos command that allows packaging Flet app into a macOS application bundle.","source":"@site/docs/publish/macos.md","sourceDirName":"publish","slug":"/publish/macos","permalink":"/docs/flet-docs/docs/publish/macos","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/publish/macos.md","tags":[],"version":"current","frontMatter":{"title":"Packaging app for macOS","sidebar_label":"macOS"},"sidebar":"docs","previous":{"title":"iOS","permalink":"/docs/flet-docs/docs/publish/ios"},"next":{"title":"Linux","permalink":"/docs/flet-docs/docs/publish/linux"}}');var c=l(74848),t=l(28453);const o={title:"Packaging app for macOS",sidebar_label:"macOS"},s=void 0,a={},r=[{value:"<code>flet build macos</code>",id:"flet-build-macos",level:2},{value:"Bundle architecture",id:"bundle-architecture",level:2},{value:"Permissions",id:"permissions",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["Flet CLI provides ",(0,c.jsx)(n.code,{children:"flet build macos"})," command that allows packaging Flet app into a macOS application bundle."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"The command can be run on macOS only."})}),"\n",(0,c.jsx)(n.h2,{id:"flet-build-macos",children:(0,c.jsx)(n.code,{children:"flet build macos"})}),"\n",(0,c.jsx)(n.p,{children:"Creates a macOS application bundle from your Flet app."}),"\n",(0,c.jsx)(n.h2,{id:"bundle-architecture",children:"Bundle architecture"}),"\n",(0,c.jsxs)(n.p,{children:["By default, ",(0,c.jsx)(n.code,{children:"flet build macos"})," command builds universal app bundle that works on both Apple Silicon and older Intel processors. Therefore, packaging utility will try to download Python binary wheels for both ",(0,c.jsx)(n.code,{children:"arm64"})," and ",(0,c.jsx)(n.code,{children:"x86_64"})," platforms. Recent releases\nof some popular packages do not include ",(0,c.jsx)(n.code,{children:"x86_64"})," wheels anymore, so the entire packaging operation will fail."]}),"\n",(0,c.jsxs)(n.p,{children:["You can limit the build command to a specific architecture only, by using ",(0,c.jsx)(n.code,{children:"--arch"})," option. For example, to build macOS app bundle that works on Apple Silicon only use the following command:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"flet build macos --arch arm64\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The same can be configured in ",(0,c.jsx)(n.code,{children:"pyproject.toml"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-toml",children:'[tool.flet.macos]\nbuild_arch = "arm64"\n'})}),"\n",(0,c.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,c.jsxs)(n.p,{children:["Setting macOS entitlements which are written and ",(0,c.jsx)(n.code,{children:".entitlements"})," files:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"flet build --macos-entitlements name_1=True|False name_2=True|False ...\n"})}),"\n",(0,c.jsx)(n.p,{children:"Default macOS entitlements:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"com.apple.security.app-sandbox = False"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"com.apple.security.cs.allow-jit = True"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"com.apple.security.network.client = True"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'com.apple.security.network.server" = True'})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Configuring macOS app entitlements in ",(0,c.jsx)(n.code,{children:"pyproject.toml"})," (notice ",(0,c.jsx)(n.code,{children:'"'})," around entitlement name):"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-toml",children:'[tool.flet.macos]\nentitlement."com.apple.security.personal-information.photos-library" = true\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>s});var i=l(96540);const c={},t=i.createContext(c);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);