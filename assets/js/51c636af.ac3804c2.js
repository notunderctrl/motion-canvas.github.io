"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[5600],{876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),N=r,c=s["".concat(o,".").concat(N)]||s[N]||k[N]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7896),r=(a(2784),a(876));const i={id:"types",title:"Module: types",sidebar_label:"types",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/core/modules/types",id:"api/core/modules/types",title:"Module: types",description:"Enumerations",source:"@site/docs/api/core/modules/types.md",sourceDirName:"api/core/modules",slug:"/api/core/modules/types",permalink:"/api/core/modules/types",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"types",title:"Module: types",sidebar_label:"types",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"tweening",permalink:"/api/core/modules/tweening"},next:{title:"utils",permalink:"/api/core/modules/utils"}},o={},d=[{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"CanvasColorSpace",id:"canvascolorspace",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"CanvasOutputMimeType",id:"canvasoutputmimetype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"PossibleColor",id:"possiblecolor",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"PossibleRect",id:"possiblerect",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"PossibleSpacing",id:"possiblespacing",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"PossibleVector2",id:"possiblevector2",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"SerializedColor",id:"serializedcolor",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"SerializedRect",id:"serializedrect",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"SerializedSpacing",id:"serializedspacing",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"SerializedVector2",id:"serializedvector2",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Functions",id:"functions",level:2},{value:"flipOrigin",id:"fliporigin",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"originToOffset",id:"origintooffset",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"transformAngle",id:"transformangle",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"transformScalar",id:"transformscalar",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/enums/types.Center"},"Center")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/enums/types.Direction"},"Direction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/enums/types.Origin"},"Origin"))),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/classes/types.Rect"},"Rect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/classes/types.Spacing"},"Spacing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/core/classes/types.Vector2"},"Vector2"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"canvascolorspace"},"CanvasColorSpace"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CanvasColorSpace"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"srgb"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"display-p3"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Canvas.ts#L1"},"types/Canvas.ts:1")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canvasoutputmimetype"},"CanvasOutputMimeType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CanvasOutputMimeType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"image/png"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"image/jpeg"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"image/webp"')),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Canvas.ts#L2"},"types/Canvas.ts:2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"possiblecolor"},"PossibleColor"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PossibleColor"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/types#serializedcolor"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedColor"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Color.ts#L7"},"types/Color.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"possiblerect"},"PossibleRect"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PossibleRect"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/types#serializedrect"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedRect"))," ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/core/classes/types.Vector2"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector2"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Rect.ts#L13"},"types/Rect.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"possiblespacing"},"PossibleSpacing"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PossibleSpacing"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/types#serializedspacing"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedSpacing"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"," ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Spacing.ts#L11"},"types/Spacing.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"possiblevector2"},"PossibleVector2"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PossibleVector2"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("a",{parentName:"p",href:"/api/core/modules/types#serializedvector2"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedVector2")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"  } ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"]"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Vector.ts#L11"},"types/Vector.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializedcolor"},"SerializedColor"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SerializedColor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Color.ts#L5"},"types/Color.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializedrect"},"SerializedRect"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SerializedRect"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Rect.ts#L6"},"types/Rect.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializedspacing"},"SerializedSpacing"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SerializedSpacing"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bottom")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"left")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"top")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Spacing.ts#L4"},"types/Spacing.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializedvector2"},"SerializedVector2"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SerializedVector2"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/9212343/packages/core/src/types/Vector.ts#L6"},"types/Vector.ts:6")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"fliporigin"},"flipOrigin"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"flipOrigin"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"origin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"axis?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/core/enums/types.Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"axis?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Center"},(0,r.kt)("inlineCode",{parentName:"a"},"Center")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/core/enums/types.Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"flipOrigin"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"origin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"axis?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/core/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"axis?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Center"},(0,r.kt)("inlineCode",{parentName:"a"},"Center")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/core/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"origintooffset"},"originToOffset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"originToOffset"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"origin"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/core/classes/types.Vector2"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector2"))),(0,r.kt)("p",null,"Convert the given origin to a vector representing its offset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bottomRight = originToOffset(Origin.TopRight);\n// bottomRight = {x: 1, y: -1}\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/api/core/enums/types.Origin"},(0,r.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The origin to convert.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/core/classes/types.Vector2"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector2"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformangle"},"transformAngle"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"transformAngle"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"angle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"angle")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matrix")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DOMMatrix"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformscalar"},"transformScalar"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"transformScalar"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"scalar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scalar")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matrix")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DOMMatrix"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")))}s.isMDXComponent=!0}}]);