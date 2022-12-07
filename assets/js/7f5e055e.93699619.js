"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9571],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7896),a=(n(2784),n(876));const i={id:"utils.PromiseHandle",title:"Interface: PromiseHandle<T>",sidebar_label:"PromiseHandle",custom_edit_url:null},l=void 0,o={unversionedId:"api/core/interfaces/utils.PromiseHandle",id:"api/core/interfaces/utils.PromiseHandle",title:"Interface: PromiseHandle<T>",description:"utils.PromiseHandle",source:"@site/docs/api/core/interfaces/utils.PromiseHandle.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/utils.PromiseHandle",permalink:"/api/core/interfaces/utils.PromiseHandle",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"utils.PromiseHandle",title:"Interface: PromiseHandle<T>",sidebar_label:"PromiseHandle",custom_edit_url:null},sidebar:"api",previous:{title:"DependencyContext",permalink:"/api/core/interfaces/utils.DependencyContext"},next:{title:"Signal",permalink:"/api/core/interfaces/utils.Signal"}},s={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"promise",id:"promise",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"stack",id:"stack",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/modules/utils"},"utils"),".PromiseHandle"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"owner"},"owner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"owner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/utils/createSignal.ts#L131"},"utils/createSignal.ts:131")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"promise"},"promise"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"promise"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/utils/createSignal.ts#L128"},"utils/createSignal.ts:128")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/utils/createSignal.ts#L130"},"utils/createSignal.ts:130")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/utils/createSignal.ts#L129"},"utils/createSignal.ts:129")))}u.isMDXComponent=!0}}]);