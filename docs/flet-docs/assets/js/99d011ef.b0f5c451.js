"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[80526],{14807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cookbook/fonts","title":"Fonts","description":"System fonts","source":"@site/docs/cookbook/fonts.md","sourceDirName":"cookbook","slug":"/cookbook/fonts","permalink":"/docs/flet-docs/docs/cookbook/fonts","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/cookbook/fonts.md","tags":[],"version":"current","frontMatter":{"title":"Fonts","sidebar_label":"Fonts"},"sidebar":"docs","previous":{"title":"Assets","permalink":"/docs/flet-docs/docs/cookbook/assets"},"next":{"title":"Client storage","permalink":"/docs/flet-docs/docs/cookbook/client-storage"}}');var o=n(74848),a=n(28453);const i={title:"Fonts",sidebar_label:"Fonts"},l=void 0,r={},c=[{value:"System fonts",id:"system-fonts",level:2},{value:"Usage Example",id:"usage-example",level:3},{value:"Importing Fonts",id:"importing-fonts",level:2},{value:"Usage Example",id:"usage-example-1",level:3},{value:"Static and Variable Fonts",id:"static-and-variable-fonts",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,o.jsx)(t.p,{children:'You can use the (system) fonts installed on your computer, e.g. "Consolas", "Arial", "Verdana", "Tahoma", etc.'}),"\n",(0,o.jsx)(t.admonition,{title:"Limitation",type:"note",children:(0,o.jsxs)(t.p,{children:["System fonts cannot be used in Flet web apps rendered with ",(0,o.jsx)(t.a,{href:"/docs/reference/types/webrenderer#canvas_kit",children:'"canvas kit"'}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,o.jsx)(t.p,{children:'The following example demonstrates how to use the "Consolas" font in a Flet application.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Text(\n            value="This text is rendered with Consolas font",\n            font_family="Consolas"\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,o.jsx)(t.h2,{id:"importing-fonts",children:"Importing Fonts"}),"\n",(0,o.jsxs)(t.p,{children:["Font can be imported from external resource by providing an absolute URL or\nfrom application assets directory (see ",(0,o.jsx)(t.a,{href:"/docs/cookbook/assets",children:"Assets Guide"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["This is done by setting the page's ",(0,o.jsx)(t.a,{href:"/docs/controls/page#fonts",children:(0,o.jsx)(t.code,{children:"fonts"})})," property."]}),"\n",(0,o.jsx)(t.p,{children:"To apply one of the imported fonts, you can:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Use ",(0,o.jsx)(t.a,{href:"/docs/reference/types/theme#font_family",children:(0,o.jsx)(t.code,{children:"Theme.font_family"})})," to set a default/fallback app-wide font family."]}),"\n",(0,o.jsxs)(t.li,{children:["Specify a font for individual controls. For example, ",(0,o.jsx)(t.a,{href:"/docs/controls/text#font_family",children:(0,o.jsx)(t.code,{children:"Text.font_family"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"usage-example-1",children:"Usage Example"}),"\n",(0,o.jsxs)(t.p,{children:['The example below loads the "Kanit" font from GitHub and "Open Sans" from local assets. "Kanit" is set as the default app font, while "Open Sans" is applied to a specific ',(0,o.jsx)(t.code,{children:"Text"})," control."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.fonts = {\n        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",\n        "Open Sans": "/fonts/OpenSans-Regular.ttf"\n    }\n\n    page.theme = Theme(font_family="Kanit")  # Default app font\n\n    page.add(\n        ft.Text("This text uses the Kanit font"),\n        ft.Text("This text uses the Open Sans font", font_family="Open Sans")\n    )\n\nft.app(main, assets_dir="assets")\n'})}),"\n",(0,o.jsx)(t.h3,{id:"static-and-variable-fonts",children:"Static and Variable Fonts"}),"\n",(0,o.jsxs)(t.p,{children:["Currently, only ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts",children:"static fonts"}),' are supported. These fonts have a specific width, weight, or style combination (e.g., "Open Sans Regular").']}),"\n",(0,o.jsxs)(t.p,{children:["Support for ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts",children:"variable fonts"})," is in progress."]}),"\n",(0,o.jsxs)(t.p,{children:["However, to use variable fonts, you can create static instances at specific weights using ",(0,o.jsx)(t.a,{href:"https://pypi.org/project/fonttools/",children:"fonttools"}),", e.g.:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To explore available font features (e.g. possible options for ",(0,o.jsx)(t.code,{children:"wght"}),") use ",(0,o.jsx)(t.a,{href:"https://wakamaifondue.com/beta/",children:"Wakamai Fondue"})," online tool."]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);