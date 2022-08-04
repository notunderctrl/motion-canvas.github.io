"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[1761],{876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,u=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return t?i.createElement(u,o(o({ref:n},d),{},{components:t})):i.createElement(u,o({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=t(7896),r=(t(2784),t(876));const a={id:"components.GridConfig",title:"Interface: GridConfig",sidebar_label:"GridConfig",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/components.GridConfig",id:"api/interfaces/components.GridConfig",title:"Interface: GridConfig",description:"components.GridConfig",source:"@site/docs/api/interfaces/components.GridConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/components.GridConfig",permalink:"/api/interfaces/components.GridConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.GridConfig",title:"Interface: GridConfig",sidebar_label:"GridConfig",custom_edit_url:null},sidebar:"api",previous:{title:"ConnectionConfig",permalink:"/api/interfaces/components.ConnectionConfig"},next:{title:"LayoutTextConfig",permalink:"/api/interfaces/components.LayoutTextConfig"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"checker",id:"checker",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"gridSize",id:"gridsize",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"margin",id:"margin",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"origin",id:"origin",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"padd",id:"padd",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"subdivision",id:"subdivision",level:3},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/components"},"components"),".GridConfig"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ShapeConfig")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GridConfig"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"checker"},"checker"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"checker"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/components/Grid.ts#L11"},"packages/core/src/components/Grid.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gridsize"},"gridSize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"gridSize"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/components/Grid.ts#L9"},"packages/core/src/components/Grid.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"margin"},"margin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"margin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"ShapeConfig.margin"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/patches/Node.ts#L177"},"packages/core/src/patches/Node.ts:177")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"origin"},"origin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"origin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,"ShapeConfig.origin"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/patches/Node.ts#L179"},"packages/core/src/patches/Node.ts:179")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"padd"},"padd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"padd"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing"))),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,"ShapeConfig.padd"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/patches/Node.ts#L178"},"packages/core/src/patches/Node.ts:178")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subdivision"},"subdivision"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"subdivision"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/components/Grid.ts#L10"},"packages/core/src/components/Grid.ts:10")))}s.isMDXComponent=!0}}]);