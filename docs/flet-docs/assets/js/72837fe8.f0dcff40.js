"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[45783],{2088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"reference/types/geolocatorandroidsettings","title":"GeolocatorAndroidSettings","description":"GeolocatorAndroidSettings class has the following values:","source":"@site/docs/reference/types/geolocatorandroidsettings.md","sourceDirName":"reference/types","slug":"/reference/types/geolocatorandroidsettings","permalink":"/docs/flet-docs/docs/reference/types/geolocatorandroidsettings","draft":false,"unlisted":false,"editUrl":"https://github.com/flet-dev/website/edit/main/docs/reference/types/geolocatorandroidsettings.md","tags":[],"version":"current","frontMatter":{"title":"GeolocatorAndroidSettings","sidebar_label":"GeolocatorAndroidSettings"},"sidebar":"docs","previous":{"title":"FilePickerUploadFile","permalink":"/docs/flet-docs/docs/reference/types/filepickeruploadfile"},"next":{"title":"GeolocatorAppleSettings","permalink":"/docs/flet-docs/docs/reference/types/geolocatorapplesettings"}}');var i=t(74848),r=t(28453);t(65537),t(79329);const a={title:"GeolocatorAndroidSettings",sidebar_label:"GeolocatorAndroidSettings"},l=void 0,s={},c=[{value:"<code>accuracy</code>",id:"accuracy",level:3},{value:"<code>distance_filter</code>",id:"distance_filter",level:3},{value:"<code>force_location_manager</code>",id:"force_location_manager",level:3},{value:"<code>foreground_notification_text</code>",id:"foreground_notification_text",level:3},{value:"<code>foreground_notification_title</code>",id:"foreground_notification_title",level:3},{value:"<code>foreground_notification_enable_wake_lock</code>",id:"foreground_notification_enable_wake_lock",level:3},{value:"<code>foreground_notification_enable_wifi_lock</code>",id:"foreground_notification_enable_wifi_lock",level:3},{value:"<code>foreground_notification_color</code>",id:"foreground_notification_color",level:3},{value:"<code>foreground_notification_channel_name</code>",id:"foreground_notification_channel_name",level:3},{value:"<code>foreground_notification_set_ongoing</code>",id:"foreground_notification_set_ongoing",level:3},{value:"<code>interval_duration</code>",id:"interval_duration",level:3},{value:"<code>time_limit</code>",id:"time_limit",level:3},{value:"<code>use_mls_altitude</code>",id:"use_mls_altitude",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GeolocatorAndroidSettings"})," class has the following values:"]}),"\n",(0,i.jsx)(n.h3,{id:"accuracy",children:(0,i.jsx)(n.code,{children:"accuracy"})}),"\n",(0,i.jsx)(n.p,{children:"The accuracy of the location data."}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.a,{href:"/docs/reference/types/geolocatorpositionaccuracy",children:(0,i.jsx)(n.code,{children:"GeolocatorPositionAccuracy"})})," and defaults to ",(0,i.jsx)(n.code,{children:"GeolocatorPositionAccuracy.BEST"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"distance_filter",children:(0,i.jsx)(n.code,{children:"distance_filter"})}),"\n",(0,i.jsx)(n.p,{children:"The minimum distance (measured in meters) a device must move horizontally before an update event is generated."}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.code,{children:"int"})," and defaults to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"force_location_manager",children:(0,i.jsx)(n.code,{children:"force_location_manager"})}),"\n",(0,i.jsx)(n.p,{children:"Forces the Geolocator plugin to use the legacy LocationManager instead of the FusedLocationProviderClient."}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.code,{children:"bool"})," and defaults to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_text",children:(0,i.jsx)(n.code,{children:"foreground_notification_text"})}),"\n",(0,i.jsx)(n.p,{children:"The body used for the foreground service notification."}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_title",children:(0,i.jsx)(n.code,{children:"foreground_notification_title"})}),"\n",(0,i.jsx)(n.p,{children:"The title used for the foreground service notification."}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_enable_wake_lock",children:(0,i.jsx)(n.code,{children:"foreground_notification_enable_wake_lock"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether wakelock should be acquired when background execution is started. If this is ",(0,i.jsx)(n.code,{children:"False"})," then the system can still sleep and all location events will be received at once when the system wakes up again."]}),"\n",(0,i.jsxs)(n.p,{children:["Wake lock permissions should be obtained first by using ",(0,i.jsx)(n.a,{href:"/docs/controls/permissionhandler",children:(0,i.jsx)(n.code,{children:"PermissionHandler"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Has no effect if ",(0,i.jsx)(n.code,{children:"foreground_notification_text"})," or ",(0,i.jsx)(n.code,{children:"foreground_notification_title"})," are not set."]}),"\n",(0,i.jsxs)(n.p,{children:["Defaults to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_enable_wifi_lock",children:(0,i.jsx)(n.code,{children:"foreground_notification_enable_wifi_lock"})}),"\n",(0,i.jsx)(n.p,{children:"Whether WifiLock is acquired when background execution is started. This allows the application to keep the Wi-Fi radio awake, even when the user has not used the device in a while (e. g. for background network communications)."}),"\n",(0,i.jsxs)(n.p,{children:["Wifi lock permissions should be obtained first by using ",(0,i.jsx)(n.a,{href:"/docs/controls/permissionhandler",children:(0,i.jsx)(n.code,{children:"PermissionHandler"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Has no effect if ",(0,i.jsx)(n.code,{children:"foreground_notification_text"})," or ",(0,i.jsx)(n.code,{children:"foreground_notification_title"})," are not set."]}),"\n",(0,i.jsxs)(n.p,{children:["Defaults to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_color",children:(0,i.jsx)(n.code,{children:"foreground_notification_color"})}),"\n",(0,i.jsxs)(n.p,{children:["Accent ",(0,i.jsx)(n.a,{href:"/docs/reference/colors",children:"color"})," to be applied by the standard Style templates when presenting the notification."]}),"\n",(0,i.jsxs)(n.p,{children:["Has no effect if ",(0,i.jsx)(n.code,{children:"foreground_notification_text"})," or ",(0,i.jsx)(n.code,{children:"foreground_notification_title"})," are not set."]}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_channel_name",children:(0,i.jsx)(n.code,{children:"foreground_notification_channel_name"})}),"\n",(0,i.jsx)(n.p,{children:"The user visible name of the notification channel. The notification channel name will be displayed in the system settings. The maximum recommended length is 40 characters, the name might be truncated if it is to long."}),"\n",(0,i.jsxs)(n.p,{children:["Has no effect if ",(0,i.jsx)(n.code,{children:"foreground_notification_text"})," or ",(0,i.jsx)(n.code,{children:"foreground_notification_title"})," are not set."]}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.code,{children:"str"})," and defaults to ",(0,i.jsx)(n.code,{children:'"Background Location"'}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"foreground_notification_set_ongoing",children:(0,i.jsx)(n.code,{children:"foreground_notification_set_ongoing"})}),"\n",(0,i.jsx)(n.p,{children:"Whether the displayed notification is persistent and the user cannot dismiss it."}),"\n",(0,i.jsxs)(n.p,{children:["Has no effect if ",(0,i.jsx)(n.code,{children:"foreground_notification_text"})," or ",(0,i.jsx)(n.code,{children:"foreground_notification_title"})," are not set."]}),"\n",(0,i.jsxs)(n.p,{children:["Defaults to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"interval_duration",children:(0,i.jsx)(n.code,{children:"interval_duration"})}),"\n",(0,i.jsx)(n.p,{children:"The desired interval for active location updates."}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.a,{href:"/docs/reference/types/duration",children:(0,i.jsx)(n.code,{children:"Duration"})})," and defaults to 5000 milliseconds."]}),"\n",(0,i.jsx)(n.h3,{id:"time_limit",children:(0,i.jsx)(n.code,{children:"time_limit"})}),"\n",(0,i.jsx)(n.p,{children:"The timeout interval for the location request. By default there's no time limit."}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.a,{href:"/docs/reference/types/duration",children:(0,i.jsx)(n.code,{children:"Duration"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"use_mls_altitude",children:(0,i.jsx)(n.code,{children:"use_mls_altitude"})}),"\n",(0,i.jsx)(n.p,{children:"Whether the altitude should be calculated as MSL (EGM2008) from NMEA messages and reported as the altitude instead of using the geoidal height (WSG84). Setting this property true will help to align Android altitude to that of iOS which uses MSL."}),"\n",(0,i.jsxs)(n.p,{children:["This property only works with position stream updates (",(0,i.jsx)(n.a,{href:"/docs/controls/geolocator#on_position_change",children:(0,i.jsx)(n.code,{children:"Geolocator.on_position_change"})}),") and has no effect when getting the current position or last known position."]}),"\n",(0,i.jsxs)(n.p,{children:["Value is of type ",(0,i.jsx)(n.code,{children:"bool"})," and defaults to ",(0,i.jsx)(n.code,{children:"False"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var o=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,a),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(96540),i=t(18215),r=t(65627),a=t(56347),l=t(50372),s=t(30604),c=t(11861),d=t(78749);function u(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}),[r,i])]}function _(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,s]=(0,o.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=o.find((e=>e.default)))?n:o[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:t,groupId:i}),[_,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=null!=c?c:_;return f({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&s(x)}),[x]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function j(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),i=l[t].value;i!==o&&(c(n),a(i))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var o;const n=s.indexOf(e.currentTarget)+1;t=null!=(o=s[n])?o:s[0];break}case"ArrowLeft":{var i;const n=s.indexOf(e.currentTarget)-1;t=null!=(i=s[n])?i:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{s.push(e)},onKeyDown:u,onClick:d},r,{className:(0,i.A)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":o===n}),children:null!=t?t:n}),n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=_(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,m.jsx)(j,Object.assign({},n,e)),(0,m.jsx)(v,Object.assign({},n,e))]})}function y(e){const n=(0,g.A)();return(0,m.jsx)(b,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);