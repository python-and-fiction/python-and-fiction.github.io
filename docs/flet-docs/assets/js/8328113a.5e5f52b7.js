"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[66188],{71574:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"cookbook/pub-sub","title":"PubSub","description":"If you build a chat app using Flet you need somehow to pass user messages between sessions. When a user sends a message it should be broadcasted to all other app sessions and displayed on their pages.","source":"@site/docs/cookbook/pub-sub.md","sourceDirName":"cookbook","slug":"/cookbook/pub-sub","permalink":"/docs/flet-docs/docs/cookbook/pub-sub","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/cookbook/pub-sub.md","tags":[],"version":"current","frontMatter":{"title":"PubSub","sidebar_label":"PubSub"},"sidebar":"docs","previous":{"title":"Encrypting sensitive data","permalink":"/docs/flet-docs/docs/cookbook/encrypting-sensitive-data"},"next":{"title":"Control Refs","permalink":"/docs/flet-docs/docs/cookbook/control-refs"}}');var t=n(74848),a=n(28453);const c={title:"PubSub",sidebar_label:"PubSub"},i=void 0,r={},l=[];function d(e){const s={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"If you build a chat app using Flet you need somehow to pass user messages between sessions. When a user sends a message it should be broadcasted to all other app sessions and displayed on their pages."}),"\n",(0,t.jsx)(s.p,{children:"Flet provides a simple built-in PubSub mechanism for asynchronous communication between page sessions."}),"\n",(0,t.jsx)(s.p,{children:'Flet PubSub allows broadcasting messages to all app sessions or sending only to specific "topic" (or "channel") subscribers.'}),"\n",(0,t.jsx)(s.p,{children:"A typical PubSub usage would be:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/controls/page#subscribehandler",children:"subscribe"})," to broadcast messages or ",(0,t.jsx)(s.a,{href:"/docs/controls/page#subscribe_topictopic-handler",children:"subscribe to a topic"})," on app session start."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/controls/page#send_allmessage",children:"send"})," broadcast message or ",(0,t.jsx)(s.a,{href:"/docs/controls/page#send_all_on_topictopic-message",children:"send to a topic"}),' on some event, like "Send" button click.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/controls/page#unsubscribe",children:"unsubscribe"})," from broadcast messages or ",(0,t.jsx)(s.a,{href:"/docs/controls/page#unsubscribe_topictopic",children:"unsubscribe from a topic"}),' on some event, like "Leave" button click.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/controls/page#unsubscribe_all",children:"unsubscribe"})," from everything on ",(0,t.jsx)(s.a,{href:"/docs/controls/page#on_close",children:(0,t.jsx)(s.code,{children:"page.on_close"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This is an example of a simple chat application:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet Chat"\n\n    # subscribe to broadcast messages\n    def on_message(msg):\n        messages.controls.append(ft.Text(msg))\n        page.update()\n\n    page.pubsub.subscribe(on_message)\n\n    def send_click(e):\n        page.pubsub.send_all(f"{user.value}: {message.value}")\n        # clean up the form\n        message.value = ""\n        page.update()\n\n    messages = ft.Column()\n    user = ft.TextField(hint_text="Your name", width=150)\n    message = ft.TextField(hint_text="Your message...", expand=True)  # fill all the space\n    send = ft.ElevatedButton("Send", on_click=send_click)\n    page.add(messages, ft.Row(controls=[user, message, send]))\n\nft.app(main, view=ft.AppView.WEB_BROWSER)\n'})}),"\n",(0,t.jsx)("img",{src:"/docs/flet-docs/img/docs/getting-started/chat-app-example.gif",className:"screenshot-70"})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var o=n(96540);const t={},a=o.createContext(t);function c(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);