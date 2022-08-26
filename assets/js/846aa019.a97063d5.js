"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[3413],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=n(7896),r=(n(2784),n(876));const a={id:"components.LayoutTextConfig",title:"Interface: LayoutTextConfig",sidebar_label:"LayoutTextConfig",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/components.LayoutTextConfig",id:"api/interfaces/components.LayoutTextConfig",title:"Interface: LayoutTextConfig",description:"components.LayoutTextConfig",source:"@site/docs/api/interfaces/components.LayoutTextConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/components.LayoutTextConfig",permalink:"/api/interfaces/components.LayoutTextConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.LayoutTextConfig",title:"Interface: LayoutTextConfig",sidebar_label:"LayoutTextConfig",custom_edit_url:null},sidebar:"api",previous:{title:"GridConfig",permalink:"/api/interfaces/components.GridConfig"},next:{title:"LinearLayoutConfig",permalink:"/api/interfaces/components.LinearLayoutConfig"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"margin",id:"margin",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"minWidth",id:"minwidth",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"origin",id:"origin",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"padd",id:"padd",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/components"},"components"),".LayoutTextConfig"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TextConfig")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"LayoutTextConfig"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"margin"},"margin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"margin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"TextConfig.margin"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/patches/Node.ts#L177"},"packages/core/src/patches/Node.ts:177")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minwidth"},"minWidth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"minWidth"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/components/LayoutText.ts#L10"},"packages/core/src/components/LayoutText.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"origin"},"origin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"origin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,"TextConfig.origin"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/patches/Node.ts#L179"},"packages/core/src/patches/Node.ts:179")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"padd"},"padd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"padd"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing"))),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,"TextConfig.padd"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/patches/Node.ts#L178"},"packages/core/src/patches/Node.ts:178")))}d.isMDXComponent=!0}}]);