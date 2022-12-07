"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[6584],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7896),a=(r(2784),r(876));const l={id:"scenes.Threadable",title:"Interface: Threadable",sidebar_label:"Threadable",custom_edit_url:null},i=void 0,o={unversionedId:"api/core/interfaces/scenes.Threadable",id:"api/core/interfaces/scenes.Threadable",title:"Interface: Threadable",description:"scenes.Threadable",source:"@site/docs/api/core/interfaces/scenes.Threadable.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/scenes.Threadable",permalink:"/api/core/interfaces/scenes.Threadable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.Threadable",title:"Interface: Threadable",sidebar_label:"Threadable",custom_edit_url:null},sidebar:"api",previous:{title:"ThreadGeneratorFactory",permalink:"/api/core/interfaces/scenes.ThreadGeneratorFactory"},next:{title:"TimeEvent",permalink:"/api/core/interfaces/scenes.TimeEvent"}},c={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Events",id:"events",level:2},{value:"onThreadChanged",id:"onthreadchanged",level:3},{value:"Returns",id:"returns",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/modules/scenes"},"scenes"),".Threadable"),(0,a.kt)("p",null,"Scenes can implement this interface to display their thread hierarchy in the\nUI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This interface is only useful when a scene uses thread generators to run."),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core/classes/scenes.GeneratorScene"},(0,a.kt)("inlineCode",{parentName:"a"},"GeneratorScene")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"onthreadchanged"},"onThreadChanged"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"onThreadChanged"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/api/core/classes/events.SubscribableValueEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"SubscribableValueEvent")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/api/core/classes/threading.Thread"},(0,a.kt)("inlineCode",{parentName:"a"},"Thread")),">"),(0,a.kt)("p",null,"Triggered when the main thread changes."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/classes/events.SubscribableValueEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"SubscribableValueEvent")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/api/core/classes/threading.Thread"},(0,a.kt)("inlineCode",{parentName:"a"},"Thread")),">"))}d.isMDXComponent=!0}}]);