"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[85824],{77061:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"controls/chip","title":"Chip","description":"Chips are compact elements that represent an attribute, text, entity, or action.","source":"@site/docs/controls/chip.md","sourceDirName":"controls","slug":"/controls/chip","permalink":"/docs/flet-docs/docs/controls/chip","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/controls/chip.md","tags":[],"version":"current","frontMatter":{"title":"Chip","sidebar_label":"Chip"},"sidebar":"docs","previous":{"title":"Checkbox","permalink":"/docs/flet-docs/docs/controls/checkbox"},"next":{"title":"CupertinoCheckbox","permalink":"/docs/flet-docs/docs/controls/cupertinocheckbox"}}');var o=l(74848),s=l(28453),i=l(65537),t=l(79329);const r={title:"Chip",sidebar_label:"Chip"},d=void 0,a={},h=[{value:"Examples",id:"examples",level:2},{value:"Assist chips",id:"assist-chips",level:3},{value:"Filter chips",id:"filter-chips",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>border_side</code>",id:"border_side",level:3},{value:"<code>check_color</code>",id:"check_color",level:3},{value:"<code>click_elevation</code>",id:"click_elevation",level:3},{value:"<code>clip_behavior</code>",id:"clip_behavior",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>delete_icon_tooltip</code>",id:"delete_icon_tooltip",level:3},{value:"<code>delete_icon</code>",id:"delete_icon",level:3},{value:"<code>delete_icon_color</code>",id:"delete_icon_color",level:3},{value:"<code>disabled_color</code>",id:"disabled_color",level:3},{value:"<code>elevation</code>",id:"elevation",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>label_padding</code>",id:"label_padding",level:3},{value:"<code>label_style</code>",id:"label_style",level:3},{value:"<code>leading</code>",id:"leading",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>selected</code>",id:"selected",level:3},{value:"<code>selected_color</code>",id:"selected_color",level:3},{value:"<code>selected_shadow_color</code>",id:"selected_shadow_color",level:3},{value:"<code>shadow_color</code>",id:"shadow_color",level:3},{value:"<code>shape</code>",id:"shape",level:3},{value:"<code>show_checkmark</code>",id:"show_checkmark",level:3},{value:"<code>surface_tint_color</code>",id:"surface_tint_color",level:3},{value:"<code>visual_density</code>",id:"visual_density",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_click</code>",id:"on_click",level:3},{value:"<code>on_delete</code>",id:"on_delete",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3},{value:"<code>on_select</code>",id:"on_select",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Chips are compact elements that represent an attribute, text, entity, or action."}),"\n",(0,o.jsx)(n.p,{children:"Chips help people enter information, make selections, filter content, or trigger actions. Use chips to show options for a specific context."}),"\n","\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://flet-controls-gallery.fly.dev/input/chip",children:"Live example"})}),"\n",(0,o.jsx)(n.h3,{id:"assist-chips",children:"Assist chips"}),"\n",(0,o.jsxs)(n.p,{children:["Assist chips are chips with ",(0,o.jsx)(n.code,{children:"leading"})," icon and ",(0,o.jsx)(n.code,{children:"on_click"})," event specified. They represent smart or automated actions that appear dynamically and contextually in a UI."]}),"\n",(0,o.jsx)(n.p,{children:"An alternative to assist chips are buttons, which should appear persistently and consistently."}),"\n",(0,o.jsx)(i.A,{groupId:"language",children:(0,o.jsx)(t.A,{value:"python",label:"Python",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\n\ndef main(page: ft.Page):\n    def save_to_favorites_clicked(e):\n        e.control.label.value = "Saved to favorites"\n        e.control.leading = ft.Icon(ft.Icons.FAVORITE_OUTLINED)\n        e.control.disabled = True\n        page.update()\n\n    def open_google_maps(e):\n        page.launch_url("https://maps.google.com")\n        page.update()\n\n    save_to_favourites = ft.Chip(\n        label=ft.Text("Save to favourites"),\n        leading=ft.Icon(ft.Icons.FAVORITE_BORDER_OUTLINED),\n        bgcolor=ft.Colors.GREEN_200,\n        disabled_color=ft.Colors.GREEN_100,\n        autofocus=True,\n        on_click=save_to_favorites_clicked,\n    )\n\n    open_in_maps = ft.Chip(\n        label=ft.Text("9 min walk"),\n        leading=ft.Icon(ft.Icons.MAP_SHARP),\n        bgcolor=ft.Colors.GREEN_200,\n        on_click=open_google_maps,\n    )\n\n    page.add(ft.Row([save_to_favourites, open_in_maps]))\n\nft.app(main)\n'})})})}),"\n",(0,o.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/chip/assist-chips.png",className:"screenshot-40"}),"\n",(0,o.jsx)(n.h3,{id:"filter-chips",children:"Filter chips"}),"\n",(0,o.jsxs)(n.p,{children:["Filter chips are chips with ",(0,o.jsx)(n.code,{children:"on_select"})," event specified. They use tags or descriptive words provided in the ",(0,o.jsx)(n.code,{children:"label"})," to filter content. They can be a good alternative to switches or checkboxes."]}),"\n",(0,o.jsx)(i.A,{groupId:"language",children:(0,o.jsx)(t.A,{value:"python",label:"Python",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import flet as ft\n\ndef main(page: ft.Page):\n    def amenity_selected(e):\n        page.update()\n\n    title = ft.Row([ft.Icon(ft.Icons.HOTEL_CLASS), ft.Text("Amenities")])\n    amenities = ["Washer / Dryer", "Ramp access", "Dogs OK", "Cats OK", "Smoke-free"]\n    amenity_chips = []\n\n    for amenity in amenities:\n        amenity_chips.append(\n            ft.Chip(\n                label=ft.Text(amenity),\n                bgcolor=ft.Colors.GREEN_200,\n                disabled_color=ft.Colors.GREEN_100,\n                autofocus=True,\n                on_select=amenity_selected,\n            )\n        )\n\n    page.add(title, ft.Row(amenity_chips))\n\nft.app(main)\n'})})})}),"\n",(0,o.jsx)("img",{src:"/docs/flet-docs/img/docs/controls/chip/filter-chips.png",className:"screenshot-60"}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"autofocus",children:(0,o.jsx)(n.code,{children:"autofocus"})}),"\n",(0,o.jsx)(n.p,{children:"True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus."}),"\n",(0,o.jsx)(n.h3,{id:"bgcolor",children:(0,o.jsx)(n.code,{children:"bgcolor"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"Color"})," to be used for the unselected, enabled chip's background."]}),"\n",(0,o.jsx)(n.h3,{id:"border_side",children:(0,o.jsx)(n.code,{children:"border_side"})}),"\n",(0,o.jsxs)(n.p,{children:["Defines the color and weight of the chip's outline. Value is the instance of ",(0,o.jsx)(n.a,{href:"/docs/reference/types/borderside",children:(0,o.jsx)(n.code,{children:"BorderSide"})})," class."]}),"\n",(0,o.jsx)(n.h3,{id:"check_color",children:(0,o.jsx)(n.code,{children:"check_color"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"Color"})," of the chip's check mark when a check mark is visible."]}),"\n",(0,o.jsx)(n.h3,{id:"click_elevation",children:(0,o.jsx)(n.code,{children:"click_elevation"})}),"\n",(0,o.jsx)(n.p,{children:"A non-negative value which defines the elevation of the chip when clicked/pressed."}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to ",(0,o.jsx)(n.code,{children:"8.0"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"clip_behavior",children:(0,o.jsx)(n.code,{children:"clip_behavior"})}),"\n",(0,o.jsx)(n.p,{children:"The content will be clipped (or not) according to this option."}),"\n",(0,o.jsxs)(n.p,{children:["Value is of type ",(0,o.jsx)(n.a,{href:"/docs/reference/types/clipbehavior",children:(0,o.jsx)(n.code,{children:"ClipBehavior"})})," and defaults to ",(0,o.jsx)(n.code,{children:"ClipBehavior.NONE"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"color",children:(0,o.jsx)(n.code,{children:"color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," that fills the chip in various ",(0,o.jsx)(n.a,{href:"/docs/reference/types/controlstate",children:(0,o.jsx)(n.code,{children:"ControlState"})}),"\ns."]}),"\n",(0,o.jsx)(n.h3,{id:"delete_icon_tooltip",children:(0,o.jsx)(n.code,{children:"delete_icon_tooltip"})}),"\n",(0,o.jsxs)(n.p,{children:["The text to be used for the chip's ",(0,o.jsx)(n.code,{children:"delete_icon"})," tooltip. If not provided or provided with an empty string, the tooltip of the delete icon will not be displayed."]}),"\n",(0,o.jsx)(n.h3,{id:"delete_icon",children:(0,o.jsx)(n.code,{children:"delete_icon"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Control"})," to display to the right of the chip's ",(0,o.jsx)(n.code,{children:"label"})," in case ",(0,o.jsx)(n.code,{children:"on_delete"})," event is specified."]}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to an ",(0,o.jsx)(n.a,{href:"/docs/controls/icon",children:(0,o.jsx)(n.code,{children:"Icon(icons.CANCEL)"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"delete_icon_color",children:(0,o.jsx)(n.code,{children:"delete_icon_color"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"Color"})," of the ",(0,o.jsx)(n.code,{children:"delete_icon"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"disabled_color",children:(0,o.jsx)(n.code,{children:"disabled_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used for the chip's background if it is disabled."]}),"\n",(0,o.jsx)(n.h3,{id:"elevation",children:(0,o.jsx)(n.code,{children:"elevation"})}),"\n",(0,o.jsx)(n.p,{children:"A non-negative value which defines the size of the shadow below the chip."}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"label",children:(0,o.jsx)(n.code,{children:"label"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Control"})," that represents primary content of the chip, typically a ",(0,o.jsx)(n.a,{href:"/docs/controls/text",children:(0,o.jsx)(n.code,{children:"Text"})}),". Label is a required\nproperty."]}),"\n",(0,o.jsx)(n.h3,{id:"label_padding",children:(0,o.jsx)(n.code,{children:"label_padding"})}),"\n",(0,o.jsxs)(n.p,{children:["Padding around the ",(0,o.jsx)(n.code,{children:"label"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The value is an instance of ",(0,o.jsx)(n.a,{href:"/docs/reference/types/padding",children:(0,o.jsx)(n.code,{children:"padding.Padding"})})," class or a number."]}),"\n",(0,o.jsx)(n.p,{children:"By default, this is 4 logical pixels at the beginning and the end of the label, and zero on top and bottom."}),"\n",(0,o.jsx)(n.h3,{id:"label_style",children:(0,o.jsx)(n.code,{children:"label_style"})}),"\n",(0,o.jsxs)(n.p,{children:["The style to be applied to the chip's ",(0,o.jsx)(n.code,{children:"label"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Value is of type ",(0,o.jsx)(n.a,{href:"/docs/reference/types/textstyle",children:(0,o.jsx)(n.code,{children:"TextStyle"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"leading",children:(0,o.jsx)(n.code,{children:"leading"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Control"})," to display to the left of the chip's ",(0,o.jsx)(n.code,{children:"label"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Typically the leading control is an ",(0,o.jsx)(n.a,{href:"/docs/controls/icon",children:(0,o.jsx)(n.code,{children:"Icon"})})," or a ",(0,o.jsx)(n.a,{href:"/docs/controls/circleavatar",children:(0,o.jsx)(n.code,{children:"CircleAvatar"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"padding",children:(0,o.jsx)(n.code,{children:"padding"})}),"\n",(0,o.jsxs)(n.p,{children:["The padding between the ",(0,o.jsx)(n.code,{children:"label"})," and the outside shape."]}),"\n",(0,o.jsxs)(n.p,{children:["The value is an instance of ",(0,o.jsx)(n.a,{href:"/docs/reference/types/padding",children:(0,o.jsx)(n.code,{children:"Padding"})})," class or a number."]}),"\n",(0,o.jsx)(n.p,{children:"By default, this is 4 logical pixels on all sides."}),"\n",(0,o.jsx)(n.h3,{id:"selected",children:(0,o.jsx)(n.code,{children:"selected"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"on_select"})," event is specified, ",(0,o.jsx)(n.code,{children:"selected"})," property is used to determine whether the chip is selected or not."]}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to ",(0,o.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"selected_color",children:(0,o.jsx)(n.code,{children:"selected_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used for the chip's background when it is selected."]}),"\n",(0,o.jsx)(n.h3,{id:"selected_shadow_color",children:(0,o.jsx)(n.code,{children:"selected_shadow_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used for the chip's background when the elevation is greater than ",(0,o.jsx)(n.code,{children:"0"})," and the chip\nis selected."]}),"\n",(0,o.jsx)(n.h3,{id:"shadow_color",children:(0,o.jsx)(n.code,{children:"shadow_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used for the chip's background when the elevation is greater than ",(0,o.jsx)(n.code,{children:"0"})," and the chip\nis not selected."]}),"\n",(0,o.jsx)(n.h3,{id:"shape",children:(0,o.jsx)(n.code,{children:"shape"})}),"\n",(0,o.jsx)(n.p,{children:"The shape of the border around the chip."}),"\n",(0,o.jsxs)(n.p,{children:["The value is an instance of ",(0,o.jsx)(n.a,{href:"/docs/reference/types/outlinedborder",children:(0,o.jsx)(n.code,{children:"OutlinedBorder"})})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["The default shape is a ",(0,o.jsx)(n.code,{children:"StadiumBorder"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"show_checkmark",children:(0,o.jsx)(n.code,{children:"show_checkmark"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"on_select"})," event is specified and chip is selected, ",(0,o.jsx)(n.code,{children:"show_checkmark"})," is used to determine whether or not to show a\ncheckmark."]}),"\n",(0,o.jsxs)(n.p,{children:["Defaults to ",(0,o.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"surface_tint_color",children:(0,o.jsx)(n.code,{children:"surface_tint_color"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," used as an overlay on ",(0,o.jsx)(n.code,{children:"bgcolor"})," to indicate elevation."]}),"\n",(0,o.jsx)(n.h3,{id:"visual_density",children:(0,o.jsx)(n.code,{children:"visual_density"})}),"\n",(0,o.jsx)(n.p,{children:"Defines how compact the control's layout will be."}),"\n",(0,o.jsxs)(n.p,{children:["Value is of type ",(0,o.jsx)(n.a,{href:"/docs/reference/types/themevisualdensity",children:(0,o.jsx)(n.code,{children:"ThemeVisualDensity"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.h3,{id:"on_blur",children:(0,o.jsx)(n.code,{children:"on_blur"})}),"\n",(0,o.jsx)(n.p,{children:"Fires when the control has lost focus."}),"\n",(0,o.jsx)(n.h3,{id:"on_click",children:(0,o.jsx)(n.code,{children:"on_click"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires when the user clicks on the chip. Cannot be specified together with ",(0,o.jsx)(n.code,{children:"on_select"})," event."]}),"\n",(0,o.jsx)(n.h3,{id:"on_delete",children:(0,o.jsx)(n.code,{children:"on_delete"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires when the user clicks on the ",(0,o.jsx)(n.code,{children:"delete_icon"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"on_focus",children:(0,o.jsx)(n.code,{children:"on_focus"})}),"\n",(0,o.jsx)(n.p,{children:"Fires when the control has received focus."}),"\n",(0,o.jsx)(n.h3,{id:"on_select",children:(0,o.jsx)(n.code,{children:"on_select"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires when the user clicks on the chip. Changes ",(0,o.jsx)(n.code,{children:"selected"})," property to the opposite value. Cannot be specified together with ",(0,o.jsx)(n.code,{children:"on_click"})," event."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},79329:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var c=l(18215);const o={tabItem:"tabItem_Ymn6"};var s=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,c.A)(o.tabItem,i),hidden:l,children:n})}},65537:(e,n,l)=>{l.d(n,{A:()=>y});var c=l(96540),o=l(18215),s=l(65627),i=l(56347),t=l(50372),r=l(30604),d=l(11861),a=l(78749);function h(e){var n,l;return null!=(n=null==(l=c.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,c.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?n:[]}function u(e){const{values:n,children:l}=e;return(0,c.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:c,default:o}}=e;return{value:n,label:l,attributes:c,default:o}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:l}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:n,groupId:l});return[(0,r.aZ)(s),(0,c.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}),[s,o])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:o}=e,s=u(e),[i,r]=(0,c.useState)((()=>function(e){var n;let{defaultValue:l,tabValues:c}=e;if(0===c.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!p({value:l,tabValues:c}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+c.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const o=null!=(n=c.find((e=>e.default)))?n:c[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[d,h]=f({queryString:l,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(n),[o,s]=(0,a.Dv)(l);return[o,(0,c.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:o}),v=(()=>{const e=null!=d?d:x;return p({value:e,tabValues:s})?e:null})();(0,t.A)((()=>{v&&r(v)}),[v]);return{selectedValue:i,selectValue:(0,c.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);r(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=l(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(74848);function _(e){let{className:n,block:l,selectedValue:c,selectValue:i,tabValues:t}=e;const r=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),a=e=>{const n=e.currentTarget,l=r.indexOf(n),o=t[l].value;o!==c&&(d(n),i(o))},h=e=>{var n;let l=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{var c;const n=r.indexOf(e.currentTarget)+1;l=null!=(c=r[n])?c:r[0];break}case"ArrowLeft":{var o;const n=r.indexOf(e.currentTarget)-1;l=null!=(o=r[n])?o:r[r.length-1];break}}null==(n=l)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,ref:e=>{r.push(e)},onKeyDown:h,onClick:a},s,{className:(0,o.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":c===n}),children:null!=l?l:n}),n)}))})}function m(e){let{lazy:n,children:l,selectedValue:s}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,c.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,c.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,b.jsx)(_,Object.assign({},n,e)),(0,b.jsx)(m,Object.assign({},n,e))]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(g,Object.assign({},e,{children:h(e.children)}),String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>t});var c=l(96540);const o={},s=c.createContext(o);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);