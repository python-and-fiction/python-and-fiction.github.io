"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[10100],{35903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"cookbook/drag-and-drop","title":"Drag and drop","description":"The mechanics of drag-and-drop in Flet is pretty simple - a user starts dragging Draggable control and \\"drops\\" it on DragTarget. If both draggable and drag target has the same group a drag target will call on_accept event handler and pass draggable control ID as event data. In this case draggable serves as a source \\"data\\" for drag-and-drop operation.","source":"@site/docs/cookbook/drag-and-drop.md","sourceDirName":"cookbook","slug":"/cookbook/drag-and-drop","permalink":"/docs/flet-docs/docs/cookbook/drag-and-drop","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/cookbook/drag-and-drop.md","tags":[],"version":"current","frontMatter":{"title":"Drag and drop","sidebar_label":"Drag and drop"},"sidebar":"docs","previous":{"title":"Large lists","permalink":"/docs/flet-docs/docs/cookbook/large-lists"},"next":{"title":"File picker and uploads","permalink":"/docs/flet-docs/docs/cookbook/file-picker-and-uploads"}}');var r=t(74848),a=t(28453);const d={title:"Drag and drop",sidebar_label:"Drag and drop"},c=void 0,s={},i=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The mechanics of drag-and-drop in Flet is pretty simple - a user starts dragging ",(0,r.jsx)(n.a,{href:"/docs/controls/draggable",children:(0,r.jsx)(n.code,{children:"Draggable"})}),' control and "drops" it on ',(0,r.jsx)(n.a,{href:"/docs/controls/dragtarget",children:(0,r.jsx)(n.code,{children:"DragTarget"})}),". If both draggable and drag target has the same ",(0,r.jsx)(n.code,{children:"group"})," a drag target will call ",(0,r.jsx)(n.code,{children:"on_accept"}),' event handler and pass draggable control ID as event data. In this case draggable serves as a source "data" for drag-and-drop operation.']}),"\n",(0,r.jsx)(n.p,{children:'Let\'s take a look at the following example. In the program below you can drag left control displaying "1" on top of the right control displaying "0" and when drag operation completes left control is replaced with "0" and the right control becomes "1":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Drag and Drop example"\n\n    def drag_accept(e):\n        # get draggable (source) control by its ID\n        src = page.get_control(e.src_id)\n        # update text inside draggable control\n        src.content.content.value = "0"\n        # update text inside drag target control\n        e.control.content.content.value = "1"\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                ),\n                ft.Container(width=100),\n                ft.DragTarget(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.PINK_200,\n                        border_radius=5,\n                        content=ft.Text("0", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    on_accept=drag_accept,\n                ),\n            ]\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,r.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/drag-and-drop-number.gif",className:"screenshot-50"}),"\n",(0,r.jsxs)(n.p,{children:['So, it\'s developer\'s responsibility to determine what happens with "source" (draggable) and "destination" (drag target) controls when ',(0,r.jsx)(n.code,{children:"on_accept"})," event occurs."]}),"\n",(0,r.jsx)(n.admonition,{title:"Try something",type:"note",children:(0,r.jsxs)(n.p,{children:["Change DragTarget's group property to ",(0,r.jsx)(n.code,{children:"number1"})," and note ",(0,r.jsx)(n.code,{children:"on_accept"}),' is not called any more when you drop "1" on the target.']})}),"\n",(0,r.jsxs)(n.p,{children:["There are additional properties and event handlers to make drag-and-drop operation even more interactive. For example, draggable has ",(0,r.jsx)(n.code,{children:"content_when_dragging"})," property to display a different control instead of ",(0,r.jsx)(n.code,{children:"content"})," when drag operation is under way. There is also ",(0,r.jsx)(n.code,{children:"content_feedback"})," property to show a different control under the pointer. By default, the same ",(0,r.jsx)(n.code,{children:"content"})," control, but with 50% opacity is displayed under cursor when dragging."]}),"\n",(0,r.jsx)(n.p,{children:'Let\'s modify Draggable in our example to display a "hole" in place of dragged control and just "1" under cursor while dragging:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'...\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    content_when_dragging=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.BLUE_GREY_200,\n                        border_radius=5,\n                    ),\n                    content_feedback=ft.Text("1"),\n                ),\n...\n'})}),"\n",(0,r.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/drag-and-drop-number-2.gif",className:"screenshot-50"}),"\n",(0,r.jsxs)(n.p,{children:["Drag target control additionally has ",(0,r.jsx)(n.code,{children:"on_will_accept"})," and ",(0,r.jsx)(n.code,{children:"on_leave"})," event handlers which help better visualize when it's a good time to \"drop\" something on the target. Let's modify DragTarget in our example to draw a border around target control when it's ready to accept incoming drag:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Drag and Drop example 2"\n\n    def drag_accept(e):\n        # get draggable (source) control by its ID\n        src = page.get_control(e.src_id)\n        # update text inside draggable control\n        src.content.content.value = "0"\n        # reset source group, so it cannot be dropped to a target anymore\n        src.group = ""\n        # update text inside drag target control\n        e.control.content.content.value = "1"\n        # reset border\n        e.control.content.border = None\n        page.update()\n\n    def drag_will_accept(e):\n        # black border when it\'s allowed to drop and red when it\'s not\n        e.control.content.border = ft.border.all(\n            2, ft.Colors.BLACK45 if e.data == "true" else ft.Colors.RED\n        )\n        e.control.update()\n\n    def drag_leave(e):\n        e.control.content.border = None\n        e.control.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    content_when_dragging=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.BLUE_GREY_200,\n                        border_radius=5,\n                    ),\n                    content_feedback=ft.Text("1"),\n                ),\n                ft.Container(width=100),\n                ft.DragTarget(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.Colors.PINK_200,\n                        border_radius=5,\n                        content=ft.Text("0", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    on_accept=drag_accept,\n                    on_will_accept=drag_will_accept,\n                    on_leave=drag_leave,\n                ),\n            ]\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,r.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/drag-and-drop-number-3.gif",className:"screenshot-50"})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var o=t(96540);const r={},a=o.createContext(r);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);