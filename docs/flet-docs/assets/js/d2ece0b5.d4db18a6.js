"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[43361],{90687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"getting-started/flet-controls","title":"Flet controls","description":"User interface is made of Controls (aka widgets). To make controls visible to a user they must be added to a Page or inside other controls. Page is the top-most control. Nesting controls into each other could be represented as a tree with Page as a root.","source":"@site/docs/getting-started/flet-controls.md","sourceDirName":"getting-started","slug":"/getting-started/flet-controls","permalink":"/docs/flet-docs/docs/getting-started/flet-controls","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/getting-started/flet-controls.md","tags":[],"version":"current","frontMatter":{"title":"Flet controls","sidebar_label":"Flet controls"},"sidebar":"docs","previous":{"title":"Running Flet app","permalink":"/docs/flet-docs/docs/getting-started/running-app"},"next":{"title":"Custom controls","permalink":"/docs/flet-docs/docs/getting-started/custom-controls"}}');var a=t(74848),s=t(28453);const l={title:"Flet controls",sidebar_label:"Flet controls"},r=void 0,d={},c=[{value:"<code>visible</code> property",id:"visible-property",level:3},{value:"<code>disabled</code> property",id:"disabled-property",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Event handlers",id:"event-handlers",level:2},{value:"Textbox",id:"textbox",level:2},{value:"Checkbox",id:"checkbox",level:2},{value:"Dropdown",id:"dropdown",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["User interface is made of ",(0,a.jsx)(n.strong,{children:"Controls"})," (aka widgets). To make controls visible to a user they must be added to a ",(0,a.jsx)(n.code,{children:"Page"})," or inside other controls. Page is the top-most control. Nesting controls into each other could be represented as a tree with Page as a root."]}),"\n",(0,a.jsx)(n.p,{children:"Controls are just regular Python classes. Create control instances via constructors with parameters matching their properties, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'t = ft.Text(value="Hello, world!", color="green")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To display control on a page add it to ",(0,a.jsx)(n.code,{children:"controls"})," list of a Page and call ",(0,a.jsx)(n.code,{children:"page.update()"})," to send page changes to a browser or desktop client:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    t = ft.Text(value="Hello, world!", color="green")\n    page.controls.append(t)\n    page.update()\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/controls-text.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["In the following examples we will be showing just the contents of ",(0,a.jsx)(n.code,{children:"main"})," function."]})}),"\n",(0,a.jsxs)(n.p,{children:["You can modify control properties and the UI will be updated on the next ",(0,a.jsx)(n.code,{children:"page.update()"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'t = ft.Text()\npage.add(t) # it\'s a shortcut for page.controls.append(t) and then page.update()\n\nfor i in range(10):\n    t.value = f"Step {i}"\n    page.update()\n    time.sleep(1)\n'})}),"\n",(0,a.jsxs)(n.p,{children:['Some controls are "container" controls (like Page) which could contain other controls. For example, ',(0,a.jsx)(n.code,{children:"Row"})," control allows arranging other controls in a row one-by-one:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'page.add(\n    ft.Row(controls=[\n        ft.Text("A"),\n        ft.Text("B"),\n        ft.Text("C")\n    ])\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["or ",(0,a.jsx)(n.code,{children:"TextField"})," and ",(0,a.jsx)(n.code,{children:"ElevatedButton"})," next to it:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'page.add(\n    ft.Row(controls=[\n        ft.TextField(label="Your name"),\n        ft.ElevatedButton(text="Say my name!")\n    ])\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"page.update()"})," is smart enough to send only the changes made since its last call, so you can add a couple of new controls to the page, remove some of them, change other controls' properties and then call ",(0,a.jsx)(n.code,{children:"page.update()"})," to do a batched update, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'for i in range(10):\n    page.controls.append(ft.Text(f"Line {i}"))\n    if i > 4:\n        page.controls.pop(0)\n    page.update()\n    time.sleep(0.3)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Some controls, like buttons, could have event handlers reacting on a user input, for example ",(0,a.jsx)(n.code,{children:"ElevatedButton.on_click"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def button_clicked(e):\n    page.add(ft.Text("Clicked!"))\n\npage.add(ft.ElevatedButton(text="Click me", on_click=button_clicked))\n'})}),"\n",(0,a.jsx)(n.p,{children:"and more advanced example for a simple To-Do:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page):\n    def add_clicked(e):\n        page.add(ft.Checkbox(label=new_task.value))\n        new_task.value = ""\n        new_task.focus()\n        new_task.update()\n\n    new_task = ft.TextField(hint_text="What\'s needs to be done?", width=300)\n    page.add(ft.Row([new_task, ft.ElevatedButton("Add", on_click=add_clicked)]))\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/simple-ToDo.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Flet implements ",(0,a.jsx)(n.em,{children:"imperative"}),' UI model where you "manually" build application UI with stateful controls and then mutate it by updating control properties. Flutter implements ',(0,a.jsx)(n.em,{children:"declarative"}),' model where UI is automatically re-built on application data changes.\nManaging application state in modern frontend applications is inherently complex task and Flet\'s "old-school" approach could be more attractive to programmers without frontend experience.']})}),"\n",(0,a.jsxs)(n.h3,{id:"visible-property",children:[(0,a.jsx)(n.code,{children:"visible"})," property"]}),"\n",(0,a.jsxs)(n.p,{children:["Every control has ",(0,a.jsx)(n.code,{children:"visible"})," property which is ",(0,a.jsx)(n.code,{children:"true"})," by default - control is rendered on the page. Setting ",(0,a.jsx)(n.code,{children:"visible"})," to ",(0,a.jsx)(n.code,{children:"false"})," completely prevents control (and all its children if any) from rendering on a page canvas. Hidden controls cannot be focused or selected with a keyboard or mouse and they do not emit any events."]}),"\n",(0,a.jsxs)(n.h3,{id:"disabled-property",children:[(0,a.jsx)(n.code,{children:"disabled"})," property"]}),"\n",(0,a.jsxs)(n.p,{children:["Every control has ",(0,a.jsx)(n.code,{children:"disabled"})," property which is ",(0,a.jsx)(n.code,{children:"false"})," by default - control and all its children are enabled.\n",(0,a.jsx)(n.code,{children:"disabled"})," property is mostly used with data entry controls like ",(0,a.jsx)(n.code,{children:"TextField"}),", ",(0,a.jsx)(n.code,{children:"Dropdown"}),", ",(0,a.jsx)(n.code,{children:"Checkbox"}),", buttons.\nHowever, ",(0,a.jsx)(n.code,{children:"disabled"})," could be set to a parent control and its value will be propagated down to all children recursively."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if you have a form with multiple entry control you can set ",(0,a.jsx)(n.code,{children:"disabled"})," property for each control individually:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"first_name = ft.TextField()\nlast_name = ft.TextField()\nfirst_name.disabled = True\nlast_name.disabled = True\npage.add(first_name, last_name)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["or you can put form controls into container, e.g. ",(0,a.jsx)(n.code,{children:"Column"})," and then set ",(0,a.jsx)(n.code,{children:"disabled"})," for the column:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"first_name = ft.TextField()\nlast_name = ft.TextField()\nc = ft.Column(controls=[\n    first_name,\n    last_name\n])\nc.disabled = True\npage.add(c)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"buttons",children:"Buttons"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Button"})," is the most essential input control which generates ",(0,a.jsx)(n.code,{children:"click"})," event when pressed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'btn = ft.ElevatedButton("Click me!")\npage.add(btn)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/getting-user-input-elevated-button.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.p,{children:"All events generated by controls on a web page are continuously sent back to your script, so how do you respond to a button click?"}),"\n",(0,a.jsx)(n.h2,{id:"event-handlers",children:"Event handlers"}),"\n",(0,a.jsx)(n.p,{children:'Buttons with events in "Counter" app:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet counter example"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    txt_number = ft.TextField(value="0", text_align="right", width=100)\n\n    def minus_click(e):\n        txt_number.value = str(int(txt_number.value) - 1)\n        page.update()\n\n    def plus_click(e):\n        txt_number.value = str(int(txt_number.value) + 1)\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(ft.Icons.REMOVE, on_click=minus_click),\n                txt_number,\n                ft.IconButton(ft.Icons.ADD, on_click=plus_click),\n            ],\n            alignment=ft.MainAxisAlignment.CENTER,\n        )\n    )\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/getting-user-input-event-handlers.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.h2,{id:"textbox",children:"Textbox"}),"\n",(0,a.jsxs)(n.p,{children:["Flet provides a number of ",(0,a.jsx)(n.a,{href:"/docs/controls",children:"controls"})," for building forms: ",(0,a.jsx)(n.a,{href:"/docs/controls/textfield",children:"TextField"}),", ",(0,a.jsx)(n.a,{href:"/docs/controls/checkbox",children:"Checkbox"}),", ",(0,a.jsx)(n.a,{href:"/docs/controls/dropdown",children:"Dropdown"}),", ",(0,a.jsx)(n.a,{href:"/docs/controls/elevatedbutton",children:"ElevatedButton"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Let's ask a user for a name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page):\n    def btn_click(e):\n        if not txt_name.value:\n            txt_name.error_text = "Please enter your name"\n            page.update()\n        else:\n            name = txt_name.value\n            page.clean()\n            page.add(ft.Text(f"Hello, {name}!"))\n\n    txt_name = ft.TextField(label="Your name")\n\n    page.add(txt_name, ft.ElevatedButton("Say hello!", on_click=btn_click))\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/getting-user-input-textbox.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.h2,{id:"checkbox",children:"Checkbox"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/docs/controls/checkbox",children:"Checkbox"})," control provides you with various properties and events emmiters for ease of use."]}),"\n",(0,a.jsx)(n.p,{children:"Let's create a one checkbox ToDo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page):\n    def checkbox_changed(e):\n        output_text.value = (\n            f"You have learned how to ski :  {todo_check.value}."\n        )\n        page.update()\n\n    output_text = ft.Text()\n    todo_check = ft.Checkbox(label="ToDo: Learn how to use ski", value=False, on_change=checkbox_changed)\n    page.add(todo_check, output_text)\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/getting-user-input-checkbox.png",className:"screenshot-50"}),"\n",(0,a.jsx)(n.h2,{id:"dropdown",children:"Dropdown"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    def button_clicked(e):\n        output_text.value = f"Dropdown value is:  {color_dropdown.value}"\n        page.update()\n\n    output_text = ft.Text()\n    submit_btn = ft.ElevatedButton(text="Submit", on_click=button_clicked)\n    color_dropdown = ft.Dropdown(\n        width=100,\n        options=[\n            ft.dropdown.Option("Red"),\n            ft.dropdown.Option("Green"),\n            ft.dropdown.Option("Blue"),\n        ],\n    )\n    page.add(color_dropdown, submit_btn, output_text)\n\nft.app(main)\n'})}),"\n",(0,a.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/getting-user-input-dropdown.png",className:"screenshot-50"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(96540);const a={},s=o.createContext(a);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);