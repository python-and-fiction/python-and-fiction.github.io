"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[16271],{94811:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"controls/navigationrail","title":"NavigationRail","description":"A material widget that is meant to be displayed at the left or right of an app to navigate between a small number of views, typically between three and five.","source":"@site/docs/controls/navigationrail.md","sourceDirName":"controls","slug":"/controls/navigationrail","permalink":"/docs/flet-docs/docs/controls/navigationrail","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/navigationrail.md","tags":[],"version":"current","frontMatter":{"title":"NavigationRail","sidebar_label":"NavigationRail"},"sidebar":"docs","previous":{"title":"NavigationDrawer","permalink":"/docs/flet-docs/docs/controls/navigationdrawer"},"next":{"title":"Information Displays","permalink":"/docs/flet-docs/docs/controls/information-displays"}}');var l=i(74848),o=i(28453),d=i(65537),s=i(79329);const a={title:"NavigationRail",sidebar_label:"NavigationRail"},c=void 0,r={},h=[{value:"Examples",id:"examples",level:2},{value:"<code>NavigationRail</code> properties",id:"navigationrail-properties",level:2},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>destinations</code>",id:"destinations",level:3},{value:"<code>elevation</code>",id:"elevation",level:3},{value:"<code>extended</code>",id:"extended",level:3},{value:"<code>group_alignment</code>",id:"group_alignment",level:3},{value:"<code>indicator_color</code>",id:"indicator_color",level:3},{value:"<code>indicator_shape</code>",id:"indicator_shape",level:3},{value:"<code>label_type</code>",id:"label_type",level:3},{value:"<code>leading</code>",id:"leading",level:3},{value:"<code>min_extended_width</code>",id:"min_extended_width",level:3},{value:"<code>min_width</code>",id:"min_width",level:3},{value:"<code>selected_index</code>",id:"selected_index",level:3},{value:"<code>selected_label_text_style</code>",id:"selected_label_text_style",level:3},{value:"<code>trailing</code>",id:"trailing",level:3},{value:"<code>unselected_label_text_style</code>",id:"unselected_label_text_style",level:3},{value:"<code>NavigationRail</code> events",id:"navigationrail-events",level:2},{value:"<code>on_change</code>",id:"on_change",level:3},{value:"<code>NavigationRailDestination</code> properties",id:"navigationraildestination-properties",level:2},{value:"<code>icon</code>",id:"icon",level:3},{value:"<del><code>icon_content</code></del>",id:"icon_content",level:3},{value:"<code>indicator_color</code>",id:"indicator_color-1",level:3},{value:"<code>indicator_shape</code>",id:"indicator_shape-1",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>label_content</code>",id:"label_content",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>selected_icon</code>",id:"selected_icon",level:3},{value:"<del><code>selected_icon_content</code></del>",id:"selected_icon_content",level:3}];function u(e){const n={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"A material widget that is meant to be displayed at the left or right of an app to navigate between a small number of views, typically between three and five."}),"\n","\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://flet-controls-gallery.fly.dev/navigation/navigationrail",children:"Live example"})}),"\n",(0,l.jsx)(d.A,{groupId:"language",children:(0,l.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n\n    rail = ft.NavigationRail(\n        selected_index=0,\n        label_type=ft.NavigationRailLabelType.ALL,\n        # extended=True,\n        min_width=100,\n        min_extended_width=400,\n        leading=ft.FloatingActionButton(icon=ft.Icons.CREATE, text="Add"),\n        group_alignment=-0.9,\n        destinations=[\n            ft.NavigationRailDestination(\n                icon=ft.Icons.FAVORITE_BORDER, selected_icon=ft.Icons.FAVORITE, label="First"\n            ),\n            ft.NavigationRailDestination(\n                icon=ft.Icon(ft.Icons.BOOKMARK_BORDER),\n                selected_icon=ft.Icon(ft.Icons.BOOKMARK),\n                label="Second",\n            ),\n            ft.NavigationRailDestination(\n                icon=ft.Icons.SETTINGS_OUTLINED,\n                selected_icon=ft.Icon(ft.Icons.SETTINGS),\n                label_content=ft.Text("Settings"),\n            ),\n        ],\n        on_change=lambda e: print("Selected destination:", e.control.selected_index),\n    )\n\n    page.add(\n        ft.Row(\n            [\n                rail,\n                ft.VerticalDivider(width=1),\n                ft.Column([ ft.Text("Body!")], alignment=ft.MainAxisAlignment.START, expand=True),\n            ],\n            expand=True,\n        )\n    )\n\nft.app(main)\n'})})})}),"\n",(0,l.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/navigation-rail/custom-navrail.png",className:"screenshot-50"}),"\n",(0,l.jsxs)(n.h2,{id:"navigationrail-properties",children:[(0,l.jsx)(n.code,{children:"NavigationRail"})," properties"]}),"\n",(0,l.jsx)(n.h3,{id:"bgcolor",children:(0,l.jsx)(n.code,{children:"bgcolor"})}),"\n",(0,l.jsxs)(n.p,{children:["Sets the ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the Container that holds all of the NavigationRail's contents."]}),"\n",(0,l.jsx)(n.h3,{id:"destinations",children:(0,l.jsx)(n.code,{children:"destinations"})}),"\n",(0,l.jsx)(n.p,{children:"Defines the appearance of the button items that are arrayed within the navigation rail."}),"\n",(0,l.jsxs)(n.p,{children:["The value must be a list of two or more ",(0,l.jsx)(n.code,{children:"NavigationRailDestination"})," instances."]}),"\n",(0,l.jsx)(n.h3,{id:"elevation",children:(0,l.jsx)(n.code,{children:"elevation"})}),"\n",(0,l.jsx)(n.p,{children:"Controls the size of the shadow below the NavigationRail."}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"0.0"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"extended",children:(0,l.jsx)(n.code,{children:"extended"})}),"\n",(0,l.jsx)(n.p,{children:"Indicates that the NavigationRail should be in the extended state."}),"\n",(0,l.jsxs)(n.p,{children:["The extended state has a wider rail container, and the labels are positioned next to the icons. ",(0,l.jsx)(n.code,{children:"min_extended_width"})," can be used to set the minimum width of the rail when it is in this state."]}),"\n",(0,l.jsx)(n.p,{children:"The rail will implicitly animate between the extended and normal state."}),"\n",(0,l.jsxs)(n.p,{children:["If the rail is going to be in the extended state, then the ",(0,l.jsx)(n.code,{children:"label_type"})," must be set to ",(0,l.jsx)(n.code,{children:"none"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"group_alignment",children:(0,l.jsx)(n.code,{children:"group_alignment"})}),"\n",(0,l.jsx)(n.p,{children:"The vertical alignment for the group of destinations within the rail."}),"\n",(0,l.jsx)(n.p,{children:"The NavigationRailDestinations are grouped together with the trailing widget, between the leading widget and the bottom of the rail."}),"\n",(0,l.jsxs)(n.p,{children:["The value must be between ",(0,l.jsx)(n.code,{children:"-1.0"})," and ",(0,l.jsx)(n.code,{children:"1.0"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"group_alignment"})," is ",(0,l.jsx)(n.code,{children:"-1.0"}),", then the items are aligned to the top. If ",(0,l.jsx)(n.code,{children:"group_alignment"})," is ",(0,l.jsx)(n.code,{children:"0.0"}),", then the items are aligned to the center. If ",(0,l.jsx)(n.code,{children:"group_alignment"})," is ",(0,l.jsx)(n.code,{children:"1.0"}),", then the items are aligned to the bottom."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"-1.0"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"indicator_color",children:(0,l.jsx)(n.code,{children:"indicator_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the navigation rail's indicator."]}),"\n",(0,l.jsx)(n.h3,{id:"indicator_shape",children:(0,l.jsx)(n.code,{children:"indicator_shape"})}),"\n",(0,l.jsx)(n.p,{children:"The shape of the navigation rail's indicator."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/outlinedborder",children:(0,l.jsx)(n.code,{children:"OutlinedBorder"})})," and defaults to ",(0,l.jsx)(n.code,{children:"StadiumBorder()"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"label_type",children:(0,l.jsx)(n.code,{children:"label_type"})}),"\n",(0,l.jsx)(n.p,{children:"Defines the layout and behavior of the labels for the default, unextended navigation rail."}),"\n",(0,l.jsx)(n.p,{children:"When a navigation rail is extended, the labels are always shown."}),"\n",(0,l.jsxs)(n.p,{children:["Value is of type ",(0,l.jsx)(n.a,{href:"/docs/reference/types/navigationraillabeltype",children:(0,l.jsx)(n.code,{children:"NavigationRailLabelType"})})," and defaults to ",(0,l.jsx)(n.code,{children:"None"})," - no\nlabels are shown."]}),"\n",(0,l.jsx)(n.h3,{id:"leading",children:(0,l.jsx)(n.code,{children:"leading"})}),"\n",(0,l.jsx)(n.p,{children:"An optional leading control in the rail that is placed above the destinations."}),"\n",(0,l.jsxs)(n.p,{children:["Its location is not affected by ",(0,l.jsx)(n.code,{children:"group_alignment"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["This is commonly a ",(0,l.jsx)(n.a,{href:"/docs/controls/floatingactionbutton",children:(0,l.jsx)(n.code,{children:"FloatingActionButton"})}),", but may also be a non-button, such as a logo."]}),"\n",(0,l.jsx)(n.h3,{id:"min_extended_width",children:(0,l.jsx)(n.code,{children:"min_extended_width"})}),"\n",(0,l.jsxs)(n.p,{children:["The final width when the animation is complete for setting ",(0,l.jsx)(n.code,{children:"extended"})," to ",(0,l.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"256"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"min_width",children:(0,l.jsx)(n.code,{children:"min_width"})}),"\n",(0,l.jsx)(n.p,{children:"The smallest possible width for the rail regardless of the destination's icon or label size."}),"\n",(0,l.jsxs)(n.p,{children:["Defaults to ",(0,l.jsx)(n.code,{children:"72"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"This value also defines the min width and min height of the destinations."}),"\n",(0,l.jsxs)(n.p,{children:["To make a compact rail, set this to ",(0,l.jsx)(n.code,{children:"56"})," and use ",(0,l.jsx)(n.code,{children:"label_type='none'"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"selected_index",children:(0,l.jsx)(n.code,{children:"selected_index"})}),"\n",(0,l.jsxs)(n.p,{children:["The index into ",(0,l.jsx)(n.code,{children:"destinations"})," for the current selected ",(0,l.jsx)(n.code,{children:"NavigationRailDestination"})," or ",(0,l.jsx)(n.code,{children:"None"})," if no destination is selected."]}),"\n",(0,l.jsx)(n.h3,{id:"selected_label_text_style",children:(0,l.jsx)(n.code,{children:"selected_label_text_style"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/types/textstyle",children:(0,l.jsx)(n.code,{children:"TextStyle"})})," of a destination's label when it is selected."]}),"\n",(0,l.jsxs)(n.p,{children:["When a destination is not selected, ",(0,l.jsx)(n.code,{children:"unselected_label_text_style"})," will instead be used."]}),"\n",(0,l.jsx)(n.h3,{id:"trailing",children:(0,l.jsx)(n.code,{children:"trailing"})}),"\n",(0,l.jsx)(n.p,{children:"An optional trailing control in the rail that is placed below the destinations."}),"\n",(0,l.jsxs)(n.p,{children:["Its location is affected by ",(0,l.jsx)(n.code,{children:"group_alignment"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["This is commonly a list of additional options or destinations that is usually only rendered when ",(0,l.jsx)(n.code,{children:"extended=True"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"unselected_label_text_style",children:(0,l.jsx)(n.code,{children:"unselected_label_text_style"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/types/textstyle",children:(0,l.jsx)(n.code,{children:"TextStyle"})})," of a destination's label when it is not selected."]}),"\n",(0,l.jsxs)(n.p,{children:["When a destination is selected, ",(0,l.jsx)(n.code,{children:"selected_label_text_style"})," will instead be used."]}),"\n",(0,l.jsxs)(n.h2,{id:"navigationrail-events",children:[(0,l.jsx)(n.code,{children:"NavigationRail"})," events"]}),"\n",(0,l.jsx)(n.h3,{id:"on_change",children:(0,l.jsx)(n.code,{children:"on_change"})}),"\n",(0,l.jsx)(n.p,{children:"Fires when selected destination changed."}),"\n",(0,l.jsxs)(n.h2,{id:"navigationraildestination-properties",children:[(0,l.jsx)(n.code,{children:"NavigationRailDestination"})," properties"]}),"\n",(0,l.jsx)(n.h3,{id:"icon",children:(0,l.jsx)(n.code,{children:"icon"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/icons",children:"name of the icon"})," or ",(0,l.jsx)(n.code,{children:"Control"})," of the destination.\nExample with icon name:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"icon=ft.Icons.BOOKMARK\n"})}),"\n",(0,l.jsx)(n.p,{children:"Example with Control:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"icon=ft.Icon(ft.Icons.BOOKMARK)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"selected_icon"})," is provided, this will only be displayed when the destination is not selected."]}),"\n",(0,l.jsxs)(n.p,{children:["To make the NavigationRail more accessible, consider choosing an icon with a stroked and filled version, such as ",(0,l.jsx)(n.code,{children:"ft.Icons.CLOUD"})," and ",(0,l.jsx)(n.code,{children:"ft.Icons.CLOUD_QUEUE"}),". The icon should be set to the stroked version and ",(0,l.jsx)(n.code,{children:"selected_icon"})," to the filled version."]}),"\n",(0,l.jsx)(n.h3,{id:"icon_content",children:(0,l.jsx)(n.del,{children:(0,l.jsx)(n.code,{children:"icon_content"})})}),"\n",(0,l.jsxs)(n.p,{children:["The icon ",(0,l.jsx)(n.code,{children:"Control"})," of the destination. Typically the icon is an ",(0,l.jsx)(n.a,{href:"/docs/controls/icon",children:(0,l.jsx)(n.code,{children:"Icon"})})," control. Used instead of ",(0,l.jsx)(n.code,{children:"icon"})," property."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["Deprecated in v0.25.0 and will be removed in v0.28.0. Use ",(0,l.jsx)(n.a,{href:"#icon",children:(0,l.jsx)(n.code,{children:"icon"})}),"\ninstead."]})}),"\n",(0,l.jsx)(n.h3,{id:"indicator_color-1",children:(0,l.jsx)(n.code,{children:"indicator_color"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," of the ",(0,l.jsx)(n.code,{children:"indicator_shape"})," when this destination is selected."]}),"\n",(0,l.jsx)(n.h3,{id:"indicator_shape-1",children:(0,l.jsx)(n.code,{children:"indicator_shape"})}),"\n",(0,l.jsxs)(n.p,{children:["The shape of the selection indicator. The value is an instance of ",(0,l.jsx)(n.a,{href:"/docs/reference/types/outlinedborder",children:(0,l.jsx)(n.code,{children:"OutlinedBorder"})})," class."]}),"\n",(0,l.jsx)(n.h3,{id:"label",children:(0,l.jsx)(n.code,{children:"label"})}),"\n",(0,l.jsxs)(n.p,{children:["A string representing the destination's label. Will be displayed only if ",(0,l.jsx)(n.code,{children:"label_content"})," is not provided."]}),"\n",(0,l.jsx)(n.h3,{id:"label_content",children:(0,l.jsx)(n.code,{children:"label_content"})}),"\n",(0,l.jsxs)(n.p,{children:["The label ",(0,l.jsx)(n.code,{children:"Control"})," for the destination. If this is provided, then ",(0,l.jsx)(n.code,{children:"label"})," will be ignored."]}),"\n",(0,l.jsxs)(n.p,{children:["The label must be provided when used with the ",(0,l.jsx)(n.code,{children:"NavigationRail"}),". When ",(0,l.jsx)(n.code,{children:"NavigationRail.label_type=NavigationRailLabelType.NONE"}),", the label is still used for semantics, and may still be used if ",(0,l.jsx)(n.code,{children:"NavigationRail.extended=True"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"padding",children:(0,l.jsx)(n.code,{children:"padding"})}),"\n",(0,l.jsx)(n.p,{children:"The amount of space to inset the destination item."}),"\n",(0,l.jsxs)(n.p,{children:["Padding is an instance of ",(0,l.jsx)(n.a,{href:"/docs/reference/types/padding",children:(0,l.jsx)(n.code,{children:"Padding"})})," class."]}),"\n",(0,l.jsx)(n.h3,{id:"selected_icon",children:(0,l.jsx)(n.code,{children:"selected_icon"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/reference/icons",children:"name"})," of alternative icon or ",(0,l.jsx)(n.code,{children:"Control"})," displayed when this destination is selected."]}),"\n",(0,l.jsx)(n.p,{children:"Example with icon name:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"selected_icon=ft.Icons.BOOKMARK\n"})}),"\n",(0,l.jsx)(n.p,{children:"Example with Control:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"selected_icon=ft.Icon(ft.Icons.BOOKMARK)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If this icon is not provided, the NavigationRail will display ",(0,l.jsx)(n.code,{children:"icon"})," in either state."]}),"\n",(0,l.jsx)(n.h3,{id:"selected_icon_content",children:(0,l.jsx)(n.del,{children:(0,l.jsx)(n.code,{children:"selected_icon_content"})})}),"\n",(0,l.jsxs)(n.p,{children:["An alternative icon ",(0,l.jsx)(n.code,{children:"Control"})," displayed when this destination is selected."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["Deprecated in v0.25.0 and will be removed in v0.28.0. Use ",(0,l.jsx)(n.a,{href:"#selected_icon",children:(0,l.jsx)(n.code,{children:"selected_icon"})}),"\ninstead."]})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},79329:(e,n,i)=>{i.d(n,{A:()=>d});i(96540);var t=i(18215);const l={tabItem:"tabItem_Ymn6"};var o=i(74848);function d(e){let{children:n,hidden:i,className:d}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,d),hidden:i,children:n})}},65537:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(96540),l=i(18215),o=i(65627),d=i(56347),s=i(50372),a=i(30604),c=i(11861),r=i(78749);function h(e){var n,i;return null!=(n=null==(i=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?n:[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,i])}function x(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const l=(0,d.W6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:n,groupId:i});return[(0,a.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}),[o,l])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,o=u(e),[d,a]=(0,t.useState)((()=>function(e){var n;let{defaultValue:i,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!x({value:i,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}const l=null!=(n=t.find((e=>e.default)))?n:t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[c,h]=p({queryString:i,groupId:l}),[j,f]=function(e){let{groupId:n}=e;const i=function(e){return e?"docusaurus.tab."+e:null}(n),[l,o]=(0,r.Dv)(i);return[l,(0,t.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:l}),v=(()=>{const e=null!=c?c:j;return x({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&a(v)}),[v]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);a(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var f=i(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function b(e){let{className:n,block:i,selectedValue:t,selectValue:d,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),r=e=>{const n=e.currentTarget,i=a.indexOf(n),l=s[i].value;l!==t&&(c(n),d(l))},h=e=>{var n;let i=null;switch(e.key){case"Enter":r(e);break;case"ArrowRight":{var t;const n=a.indexOf(e.currentTarget)+1;i=null!=(t=a[n])?t:a[0];break}case"ArrowLeft":{var l;const n=a.indexOf(e.currentTarget)-1;i=null!=(l=a[n])?l:a[a.length-1];break}}null==(n=i)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:s.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{a.push(e)},onKeyDown:h,onClick:r},o,{className:(0,l.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=i?i:n}),n)}))})}function m(e){let{lazy:n,children:i,selectedValue:o}=e;const d=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function _(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(m,Object.assign({},n,e))]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(_,Object.assign({},e,{children:h(e.children)}),String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var t=i(96540);const l={},o=t.createContext(l);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);