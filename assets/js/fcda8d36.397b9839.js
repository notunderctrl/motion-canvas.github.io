"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9451],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7896),r=(n(2784),n(876));const i={id:"threading.Thread",title:"Class: Thread",sidebar_label:"Thread",custom_edit_url:null},l=void 0,d={unversionedId:"api/core/classes/threading.Thread",id:"api/core/classes/threading.Thread",title:"Class: Thread",description:"threading.Thread",source:"@site/docs/api/core/classes/threading.Thread.md",sourceDirName:"api/core/classes",slug:"/api/core/classes/threading.Thread",permalink:"/api/core/classes/threading.Thread",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"threading.Thread",title:"Class: Thread",sidebar_label:"Thread",custom_edit_url:null},sidebar:"api",previous:{title:"TimeEvents",permalink:"/api/core/classes/scenes.TimeEvents"},next:{title:"Rect",permalink:"/api/core/classes/types.Rect"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"children",id:"children",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"frameDuration",id:"frameduration",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isCanceled",id:"iscanceled",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"parent",id:"parent",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"runner",id:"runner",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors",level:2},{value:"canceled",id:"canceled",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"cancel",id:"cancel",level:3},{value:"Returns",id:"returns-2",level:4},{value:"next",id:"next",level:3},{value:"Returns",id:"returns-3",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-4",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/threading"},"threading"),".Thread"),(0,r.kt)("p",null,"A class representing an individual thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Thread is a wrapper for a generator that can be executed concurrently."),(0,r.kt)("p",null,"Aside from the main thread, all threads need to have a parent.\nIf a parent finishes execution, all of its child threads are terminated."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Thread"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"runner"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"runner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/modules/threading#threadgenerator"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadGenerator")))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"children"},"children"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"children"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/classes/threading.Thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread")),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L21"},"threading/Thread.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"frameduration"},"frameDuration"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"frameDuration"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L45"},"threading/Thread.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iscanceled"},"isCanceled"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"isCanceled"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L44"},"threading/Thread.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parent"},"parent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"parent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/classes/threading.Thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L43"},"threading/Thread.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"runner"},"runner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"runner"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/threading#threadgenerator"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadGenerator"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L51"},"threading/Thread.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"time"},"time"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"time"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/interfaces/utils.Signal"},(0,r.kt)("inlineCode",{parentName:"a"},"Signal")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"The current time of this thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Used by waitFor and other time-based functions to properly\nsupport durations shorter than one frame."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L34"},"threading/Thread.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",null,"The next value to be passed to the wrapped generator."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/6b132ae/packages/core/src/threading/Thread.ts#L25"},"threading/Thread.ts:25")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"canceled"},"canceled"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"canceled"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Check if this thread or any of its ancestors has been canceled."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"child"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"child")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/classes/threading.Thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cancel"},"cancel"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cancel"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"next"},"next"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"next"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"IteratorResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/threading#threadgenerator"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadGenerator"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/interfaces/threading.Promisable"},(0,r.kt)("inlineCode",{parentName:"a"},"Promisable")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Progress the wrapped generator once."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IteratorResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/threading#threadgenerator"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadGenerator"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/interfaces/threading.Promisable"},(0,r.kt)("inlineCode",{parentName:"a"},"Promisable")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Prepare the thread for the next update cycle."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);