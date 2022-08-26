"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[11],{876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||o[m]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(7896),n=(a(2784),a(876));const l={id:"events.ValueDispatcher",title:"Class: ValueDispatcher<T>",sidebar_label:"ValueDispatcher",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/events.ValueDispatcher",id:"api/classes/events.ValueDispatcher",title:"Class: ValueDispatcher<T>",description:"events.ValueDispatcher",source:"@site/docs/api/classes/events.ValueDispatcher.md",sourceDirName:"api/classes",slug:"/api/classes/events.ValueDispatcher",permalink:"/api/classes/events.ValueDispatcher",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"events.ValueDispatcher",title:"Class: ValueDispatcher<T>",sidebar_label:"ValueDispatcher",custom_edit_url:null},sidebar:"api",previous:{title:"SubscribableValueEvent",permalink:"/api/classes/events.SubscribableValueEvent"},next:{title:"AudioManager",permalink:"/api/classes/media.AudioManager"}},p={},u=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"subscribable",id:"subscribable",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Accessors",id:"accessors",level:2},{value:"current",id:"current",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"notifySubscribers",id:"notifysubscribers",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Returns",id:"returns-5",level:5},{value:"Overrides",id:"overrides-2",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],d={toc:u};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/events"},"events"),".ValueDispatcher"),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.SubscribableValueEvent"},"SubscribableValueEvent")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Changing the value stored by a value dispatcher will immediately notify all\nits subscribers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class Example {\n  // expose the event to external classes\n  public get onValueChanged {\n    return this.value.subscribable;\n  }\n  // create a private dispatcher\n  private value = new ValueDispatcher(0);\n\n  private changingValueExample() {\n    // changing the value will notify all subscribers.\n    this.value.current = 7;\n  }\n}\n")),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},(0,n.kt)("inlineCode",{parentName:"a"},"EventDispatcherBase")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"ValueDispatcher"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new ValueDispatcher"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"value"),")"),(0,n.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The initial value.")))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#constructor"},"constructor")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"subscribable"},"subscribable"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"subscribable"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.SubscribableValueEvent"},(0,n.kt)("inlineCode",{parentName:"a"},"SubscribableValueEvent")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#subscribable"},"subscribable")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/events/ValueDispatcher.ts#L34"},"packages/core/src/events/ValueDispatcher.ts:34")),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"current"},"current"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"current"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"Get the most recent value of this dispatcher."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"set")," ",(0,n.kt)("strong",{parentName:"p"},"current"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Set the current value of this dispatcher."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Setting the value will immediately notify all subscribers."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The new value.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"clear"},"clear"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Unsubscribe all subscribers from the event."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#clear"},"clear")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"notifysubscribers"},"notifySubscribers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"notifySubscribers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#notifysubscribers"},"notifySubscribers")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"subscribe"},"subscribe"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"handler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dispatchImmediately?"),"): () => ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Subscribe to the event."),(0,n.kt)("p",null,"Subscribing will immediately invoke the handler with the most recent value."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"handler")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/events.EventHandler"},(0,n.kt)("inlineCode",{parentName:"a"},"EventHandler")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The handler to invoke when the event occurs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dispatchImmediately")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether the handler should be immediately                              invoked with the most recent value.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fn")),(0,n.kt)("p",null,"Callback function that cancels the subscription."),(0,n.kt)("p",null,"\u25b8 (): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h5",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#subscribe"},"subscribe")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"{@inheritDoc SubscribableEvent.unsubscribe}"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"handler")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/events.EventHandler"},(0,n.kt)("inlineCode",{parentName:"a"},"EventHandler")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase"},"EventDispatcherBase"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/events.EventDispatcherBase#unsubscribe"},"unsubscribe")))}o.isMDXComponent=!0}}]);