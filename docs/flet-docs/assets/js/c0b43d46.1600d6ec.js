"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[29615],{14434:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"controls/webview","title":"WebView","description":"Easily load web pages while allowing user interaction.","source":"@site/docs/controls/webview.md","sourceDirName":"controls","slug":"/controls/webview","permalink":"/docs/flet-docs/docs/controls/webview","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/webview.md","tags":[],"version":"current","frontMatter":{"title":"WebView","sidebar_label":"WebView"},"sidebar":"docs","previous":{"title":"ProgressRing","permalink":"/docs/flet-docs/docs/controls/progressring"},"next":{"title":"Buttons","permalink":"/docs/flet-docs/docs/controls/buttons"}}');var d=l(74848),r=l(28453);const i={title:"WebView",sidebar_label:"WebView"},s=void 0,c={},a=[{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>enable_javascript</code>",id:"enable_javascript",level:3},{value:"<del><code>javascript_enabled</code></del>",id:"javascript_enabled",level:3},{value:"<code>prevent_link</code>",id:"prevent_link",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>can_go_back()</code>",id:"can_go_back",level:3},{value:"<code>can_go_forward()</code>",id:"can_go_forward",level:3},{value:"<code>clear_cache()</code>",id:"clear_cache",level:3},{value:"<code>clear_local_storage()</code>",id:"clear_local_storage",level:3},{value:"<code>disable_zoom()</code>",id:"disable_zoom",level:3},{value:"<code>enable_zoom()</code>",id:"enable_zoom",level:3},{value:"<code>get_current_url()</code>",id:"get_current_url",level:3},{value:"<code>get_title()</code>",id:"get_title",level:3},{value:"<code>get_user_agent()</code>",id:"get_user_agent",level:3},{value:"<code>go_back()</code>",id:"go_back",level:3},{value:"<code>go_forward()</code>",id:"go_forward",level:3},{value:"<code>load_file()</code>",id:"load_file",level:3},{value:"<code>load_html()</code>",id:"load_html",level:3},{value:"<code>load_request()</code>",id:"load_request",level:3},{value:"<code>reload()</code>",id:"reload",level:3},{value:"<code>run_javascript()</code>",id:"run_javascript",level:3},{value:"<code>scroll_by()</code>",id:"scroll_by",level:3},{value:"<code>scroll_to()</code>",id:"scroll_to",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_console_message</code>",id:"on_console_message",level:3},{value:"<code>on_javascript_alert_dialog</code>",id:"on_javascript_alert_dialog",level:3},{value:"<code>on_page_ended</code>",id:"on_page_ended",level:3},{value:"<code>on_page_started</code>",id:"on_page_started",level:3},{value:"<code>on_progress</code>",id:"on_progress",level:3},{value:"<code>on_scroll</code>",id:"on_scroll",level:3},{value:"<code>on_url_change</code>",id:"on_url_change",level:3},{value:"<code>on_web_resource_error</code>",id:"on_web_resource_error",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Easily load web pages while allowing user interaction."}),"\n",(0,d.jsx)(n.admonition,{title:"Work in progress",type:"info",children:(0,d.jsx)(n.p,{children:"This control is supported on iOS, Android, MacOS and Web platforms only; Linux and Windows versions are in the development."})}),"\n",(0,d.jsxs)(n.admonition,{title:"Packaging",type:"info",children:[(0,d.jsxs)(n.p,{children:["To build your Flet app that uses ",(0,d.jsx)(n.code,{children:"WebView"})," control add ",(0,d.jsx)(n.code,{children:"--include-packages flet_webview"})," to ",(0,d.jsx)(n.code,{children:"flet build"})," command, for example:"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"flet build apk --include-packages flet_webview\n"})})]}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["A simple implementation that loads the ",(0,d.jsx)(n.a,{href:"https://flet.dev",children:"flet.dev"})," website:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    wv = ft.WebView(\n        url="https://flet.dev",\n        on_page_started=lambda _: print("Page started"),\n        on_page_ended=lambda _: print("Page ended"),\n        on_web_resource_error=lambda e: print("Page error:", e.data),\n        expand=True,\n    )\n    page.add(wv)\n\nft.app(main)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"bgcolor",children:(0,d.jsx)(n.code,{children:"bgcolor"})}),"\n",(0,d.jsxs)(n.p,{children:["Set the background ",(0,d.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the WebView."]}),"\n",(0,d.jsx)(n.h3,{id:"enable_javascript",children:(0,d.jsx)(n.code,{children:"enable_javascript"})}),"\n",(0,d.jsx)(n.p,{children:"Enable or disable the JavaScript execution on the page.\nNote that disabling the JavaScript execution on the page may result to unexpected web page behaviour."}),"\n",(0,d.jsxs)(n.p,{children:["Value is of type ",(0,d.jsx)(n.code,{children:"bool"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"javascript_enabled",children:(0,d.jsx)(n.del,{children:(0,d.jsx)(n.code,{children:"javascript_enabled"})})}),"\n",(0,d.jsx)(n.p,{children:"Enable or disable the JavaScript execution on the page.\nNote that disabling the JavaScript execution on the page may result to unexpected web page behaviour."}),"\n",(0,d.jsxs)(n.p,{children:["Value is of type ",(0,d.jsx)(n.code,{children:"bool"}),"."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["Deprecated in v0.25.0 and will be removed in v0.28.0. Use ",(0,d.jsx)(n.a,{href:"#enable_javascript",children:(0,d.jsx)(n.code,{children:"enable_javascript"})})," instead."]})}),"\n",(0,d.jsx)(n.h3,{id:"prevent_link",children:(0,d.jsx)(n.code,{children:"prevent_link"})}),"\n",(0,d.jsx)(n.p,{children:"Specify a prefix for links to prevent navigating or downloading."}),"\n",(0,d.jsxs)(n.p,{children:["Value is of type ",(0,d.jsx)(n.code,{children:"str"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"url",children:(0,d.jsx)(n.code,{children:"url"})}),"\n",(0,d.jsxs)(n.p,{children:["Start the WebView by loading the ",(0,d.jsx)(n.code,{children:"url"})," value."]}),"\n",(0,d.jsxs)(n.p,{children:["Value is of type ",(0,d.jsx)(n.code,{children:"str"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"can_go_back",children:(0,d.jsx)(n.code,{children:"can_go_back()"})}),"\n",(0,d.jsx)(n.p,{children:"Whether there's a back history item. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsxs)(n.p,{children:["Returns a ",(0,d.jsx)(n.code,{children:"bool"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"can_go_forward",children:(0,d.jsx)(n.code,{children:"can_go_forward()"})}),"\n",(0,d.jsx)(n.p,{children:"Whether there's a forward history item. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"clear_cache",children:(0,d.jsx)(n.code,{children:"clear_cache()"})}),"\n",(0,d.jsx)(n.p,{children:"Clears all caches used by the WebView. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"The following caches are cleared:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Browser HTTP Cache"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://web.dev/articles/cache-api-quick-guide",children:"Cache API"})," caches. Service workers tend to use this cache."]}),"\n",(0,d.jsx)(n.li,{children:"Application cache"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"clear_local_storage",children:(0,d.jsx)(n.code,{children:"clear_local_storage()"})}),"\n",(0,d.jsx)(n.p,{children:"Clears the local storage used by the WebView. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"disable_zoom",children:(0,d.jsx)(n.code,{children:"disable_zoom()"})}),"\n",(0,d.jsx)(n.p,{children:"Disable zooming using the on-screen zoom controls and gestures. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"enable_zoom",children:(0,d.jsx)(n.code,{children:"enable_zoom()"})}),"\n",(0,d.jsx)(n.p,{children:"Enable zooming using the on-screen zoom controls and gestures. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"get_current_url",children:(0,d.jsx)(n.code,{children:"get_current_url()"})}),"\n",(0,d.jsxs)(n.p,{children:["Returns the current URL that the WebView is displaying or ",(0,d.jsx)(n.code,{children:"None"})," if no URL was ever loaded. Only for Android, iOS and macOS platforms."]}),"\n",(0,d.jsx)(n.h3,{id:"get_title",children:(0,d.jsx)(n.code,{children:"get_title()"})}),"\n",(0,d.jsx)(n.p,{children:"The title of the currently loaded page. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"get_user_agent",children:(0,d.jsx)(n.code,{children:"get_user_agent()"})}),"\n",(0,d.jsxs)(n.p,{children:["Gets the value used for the HTTP ",(0,d.jsx)(n.code,{children:"User-Agent:"})," request header. Only for Android, iOS and macOS platforms."]}),"\n",(0,d.jsx)(n.h3,{id:"go_back",children:(0,d.jsx)(n.code,{children:"go_back()"})}),"\n",(0,d.jsxs)(n.p,{children:["Go back in the history of the webview, if ",(0,d.jsx)(n.code,{children:"can_go_back()"})," is ",(0,d.jsx)(n.code,{children:"True"}),". Only for Android, iOS and macOS platforms."]}),"\n",(0,d.jsx)(n.h3,{id:"go_forward",children:(0,d.jsx)(n.code,{children:"go_forward()"})}),"\n",(0,d.jsxs)(n.p,{children:["Go forward in the history of the webview, if ",(0,d.jsx)(n.code,{children:"can_go_forward()"})," is ",(0,d.jsx)(n.code,{children:"True"}),". Only for Android, iOS and macOS platforms."]}),"\n",(0,d.jsx)(n.h3,{id:"load_file",children:(0,d.jsx)(n.code,{children:"load_file()"})}),"\n",(0,d.jsx)(n.p,{children:"Loads the provided local file. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"absolute_path"}),": The path to the local file to load."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"load_html",children:(0,d.jsx)(n.code,{children:"load_html()"})}),"\n",(0,d.jsx)(n.p,{children:"Loads the provided HTML string. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"html"}),": The HTML string to load."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"base_url"})," (optional): Used when resolving relative URLs within the HTML string."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"load_request",children:(0,d.jsx)(n.code,{children:"load_request()"})}),"\n",(0,d.jsx)(n.p,{children:"Makes an HTTP request and loads the response in the webview. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"url"}),": The URL of the webview to load."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"method"}),": The method of the request. Value is of type ",(0,d.jsx)(n.code,{children:"WebviewRequestMethod"})," and defaults to ",(0,d.jsx)(n.code,{children:"WebviewRequestMethod.GET"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"reload",children:(0,d.jsx)(n.code,{children:"reload()"})}),"\n",(0,d.jsx)(n.p,{children:"Reload the current URL. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"run_javascript",children:(0,d.jsx)(n.code,{children:"run_javascript()"})}),"\n",(0,d.jsx)(n.p,{children:"Runs the given JavaScript in the context of the current page. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"value"}),": The JavaScript code to run."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"scroll_by",children:(0,d.jsx)(n.code,{children:"scroll_by()"})}),"\n",(0,d.jsx)(n.p,{children:"Scroll by the provided amount of webview pixels. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"x"}),": The amount of pixels to scroll by on the x-axis."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"y"}),": The amount of pixels to scroll by on the y-axis."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"scroll_to",children:(0,d.jsx)(n.code,{children:"scroll_to()"})}),"\n",(0,d.jsx)(n.p,{children:"Scroll to the provided position of webview pixels. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.p,{children:"It has the following parameters:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"x"}),": The x-coordinate of the scroll position."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"y"}),": The y-coordinate of the scroll position."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,d.jsx)(n.h3,{id:"on_console_message",children:(0,d.jsx)(n.code,{children:"on_console_message"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when a console message is logged. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsxs)(n.p,{children:["Event handler argument is of type ",(0,d.jsx)(n.a,{href:"/docs/reference/types/webviewconsolemessageevent",children:(0,d.jsx)(n.code,{children:"WebviewConsoleMessageEvent"})}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"on_javascript_alert_dialog",children:(0,d.jsx)(n.code,{children:"on_javascript_alert_dialog"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when a JavaScript alert dialog is about to be shown. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsxs)(n.p,{children:["Event handler argument is of type ",(0,d.jsx)(n.a,{href:"/docs/reference/types/webviewjavascriptevent",children:(0,d.jsx)(n.code,{children:"WebviewJavascriptEvent"})}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"on_page_ended",children:(0,d.jsx)(n.code,{children:"on_page_ended"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when all the webview page loading processes are ended. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"on_page_started",children:(0,d.jsx)(n.code,{children:"on_page_started"})}),"\n",(0,d.jsx)(n.p,{children:"Fires soon as the first loading process of the webview page is started. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"on_progress",children:(0,d.jsx)(n.code,{children:"on_progress"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when the progress of the webview page loading is changed. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"on_scroll",children:(0,d.jsx)(n.code,{children:"on_scroll"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when the scroll position changes. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsxs)(n.p,{children:["Event handler argument is of type ",(0,d.jsx)(n.a,{href:"/docs/reference/types/webviewscrollevent",children:(0,d.jsx)(n.code,{children:"WebviewScrollEvent"})}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"on_url_change",children:(0,d.jsx)(n.code,{children:"on_url_change"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when the URL of the webview page is changed. Only for Android, iOS and macOS platforms."}),"\n",(0,d.jsx)(n.h3,{id:"on_web_resource_error",children:(0,d.jsx)(n.code,{children:"on_web_resource_error"})}),"\n",(0,d.jsx)(n.p,{children:"Fires when there is error with loading a webview page resource. Only for Android, iOS and macOS platforms."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>s});var o=l(96540);const d={},r=o.createContext(d);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);