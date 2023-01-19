"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[3239],{5154:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var r=n(2784),l=n(2104),a=n(7375),c=n(6183);let u;!function(e){e[e.Project=1]="Project",e[e.Module=2]="Module",e[e.Namespace=4]="Namespace",e[e.Enum=8]="Enum",e[e.EnumMember=16]="EnumMember",e[e.Variable=32]="Variable",e[e.Function=64]="Function",e[e.Class=128]="Class",e[e.Interface=256]="Interface",e[e.Constructor=512]="Constructor",e[e.Property=1024]="Property",e[e.Method=2048]="Method",e[e.CallSignature=4096]="CallSignature",e[e.IndexSignature=8192]="IndexSignature",e[e.ConstructorSignature=16384]="ConstructorSignature",e[e.Parameter=32768]="Parameter",e[e.TypeLiteral=65536]="TypeLiteral",e[e.TypeParameter=131072]="TypeParameter",e[e.Accessor=262144]="Accessor",e[e.GetSignature=524288]="GetSignature",e[e.SetSignature=1048576]="SetSignature",e[e.ObjectLiteral=2097152]="ObjectLiteral",e[e.TypeAlias=4194304]="TypeAlias",e[e.Reference=8388608]="Reference"}(u||(u={}));var o=n(6835);const m=r.createContext(null);function i(e){let{children:t,dictionary:n}=e;return r.createElement(m.Provider,{value:n},t)}var s=n(6277),d=n(9904);const p={list:"list__hZI",elements:"elements_bdzb",wrap:"wrap_iQ7y",element:"element_nvvE",left:"left_HhPc",angle:"angle_VN_b",curly:"curly_EVXr",square:"square_psNU",parentheses:"parentheses_lWmE",codeBlockContainer:"codeBlockContainer_tfjS",blockSeparator:"blockSeparator_qZiC",codeBlock:"codeBlock_LRvA",highlight:"highlight_l8HV",pointer:"pointer_oZMZ"};var E=n(7896);function f(e){let{width:t=24,height:n=24,...l}=e;return r.createElement("svg",(0,E.Z)({width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24"},l),r.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",fill:"currentColor"}))}function h(e){let{children:t,highlight:n,onClick:l,link:a}=e;const c=(0,o.F)(),u=function(e){var t;void 0===e&&(e="plain");const n=(0,r.useContext)(m);return null!=(t=n[e])?t:n.plain}();return r.createElement("div",{className:(0,s.Z)(d.Z.codeBlockContent,p.codeBlock,n&&p.highlight,l&&p.pointer)},r.createElement("pre",{onClick:l,onKeyDown:e=>{"Enter"===e.key&&(null==l||l())},tabIndex:0,ref:c.codeBlockRef,className:(0,s.Z)(d.Z.codeBlock,"thin-scrollbar")},r.createElement("code",{className:d.Z.codeBlockLines,style:u},t)),a&&r.createElement("div",{className:d.Z.buttonGroup},r.createElement("button",{title:"Go to source",className:"clean-btn",onClick:e=>{e.preventDefault(),window.open(a,"_blank")}},r.createElement(f,{width:18,height:18}))))}var g=n(9318);function y(e){let{children:t}=e;return r.createElement(g.Z,{as:"div",className:(0,s.Z)(p.codeBlockContainer,"language-typescript")},t)}var v=n(9817);function k(e){let{children:t,type:n,to:l,id:a,tooltip:c}=e;const u=function(e){var t;void 0===e&&(e="plain");const n=(0,r.useContext)(m);return{className:"token "+e,style:null!=(t=n[e])?t:n.plain}}(n);return l?r.createElement(v.Z,(0,E.Z)({id:a,to:l,"data-tooltip":c},u),t):r.createElement("span",(0,E.Z)({id:a},u),t)}let b,w;!function(e){e[e.None=0]="None",e[e.Angle=1]="Angle",e[e.Curly=2]="Curly",e[e.Square=3]="Square",e[e.Parentheses=4]="Parentheses"}(b||(b={})),function(e){e.Comma=", ",e.Pipe=" | ",e.Ampersand=" & "}(w||(w={}));const F={[b.None]:p.none,[b.Angle]:p.angle,[b.Curly]:p.curly,[b.Square]:p.square,[b.Parentheses]:p.parentheses};function C(e){let{children:t,type:n,separator:l=w.Comma}=e;return r.createElement("span",{className:(0,s.Z)(p.list,F[null!=n?n:b.None])},r.createElement("span",{className:(0,s.Z)(p.elements,l!==w.Comma&&p.left)},(Array.isArray(t)?t:[t]).flatMap(((e,t)=>r.createElement("span",{"data-separator":l,key:t,className:p.element},e)))))}var S=n(8617);function x(e){var t,n;let{type:l}=e;const a=(0,S.RU)(l.lookupId)[l.id],c=null!=(t=l.externalUrl)?t:(0,S.Gr)(a);return r.createElement(r.Fragment,null,r.createElement(k,{to:c,type:c?"class-name":"constant",tooltip:!0},l.name),!(null==(n=l.typeArguments)||!n.length)&&r.createElement(C,{type:b.Angle},l.typeArguments.map(((e,t)=>r.createElement(j,{key:t,type:e})))))}function N(e){let{type:t}=e;return r.createElement(k,{type:"keyword"},t.name)}function P(e){let{type:t}=e;return t.elements?r.createElement(C,{type:b.Square},t.elements.map(((e,t)=>r.createElement(j,{key:t,type:e})))):r.createElement(r.Fragment,null,"[]")}function Z(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(j,{type:t.elementType}),"[]")}function _(e){let{type:t}=e;return r.createElement(C,{type:b.Parentheses,separator:w.Pipe},t.types.map(((e,t)=>r.createElement(j,{key:t,type:e}))))}function M(e){let{type:t}=e;const[n,l]=(0,r.useMemo)((()=>{if(null===t.value)return["null","keyword"];switch(typeof t.value){case"object":return[(t.value.negative?"-":"")+t.value.value,"number"];case"boolean":return[t.value,"keyword"];case"number":return[t.value,"number"];case"string":return["'"+t.value+"'","string"];default:return[t.value,"constant"]}}),[t.value]);return r.createElement(k,{type:l},n)}function T(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(k,null,t.name," "),r.createElement(k,{type:"keyword"},"is "),r.createElement(j,{type:t.targetType}))}function I(e){let{type:t}=e;return r.createElement(ee,{reflection:t.declaration})}function L(e){let{type:t}=e;return r.createElement(C,{type:b.Parentheses,separator:w.Ampersand},t.types.map(((e,t)=>r.createElement(j,{key:t,type:e}))))}function A(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(k,{type:"string"},"`",t.head),t.tail.map(((e,t)=>{let[n,l]=e;return r.createElement(r.Fragment,null,"${",r.createElement(j,{key:t,type:n}),"}",r.createElement(k,{type:"string"},l))})),r.createElement(k,{type:"string"},"`"))}function R(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},"typeof "),r.createElement(j,{type:t.queryType}))}function z(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(j,{type:t.checkType}),r.createElement(k,{type:"keyword"}," extends "),r.createElement(j,{type:t.extendsType})," ? ",r.createElement(j,{type:t.trueType})," : ",r.createElement(j,{type:t.falseType}))}function B(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},"infer "),r.createElement(k,{type:"constant"},t.name))}function V(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(j,{type:t.objectType}),"[",r.createElement(j,{type:t.indexType}),"]")}function O(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},t.operator," "),r.createElement(j,{type:t.target}))}function D(e){let{type:t}=e;return r.createElement(r.Fragment,null,r.createElement(C,{type:b.Curly},r.createElement(r.Fragment,null,"[",r.createElement(k,{type:"class"},t.parameter),r.createElement(k,{type:"keyword"}," in "),r.createElement(j,{type:t.parameterType}),"]: ",r.createElement(j,{type:t.templateType}))))}function U(e){let{type:t}=e;return r.createElement(r.Fragment,null,t.name,": ",r.createElement(j,{type:t.element}))}function j(e){const t=(0,r.useMemo)((()=>{switch(e.type.type){case"rest":case"optional":case"unknown":break;case"typeOperator":return O;case"conditional":return z;case"reflection":return I;case"query":return R;case"named-tuple-member":return U;case"union":return _;case"intrinsic":return N;case"literal":return M;case"reference":return x;case"predicate":return T;case"tuple":return P;case"array":return Z;case"intersection":return L;case"inferred":return B;case"mapped":return D;case"template-literal":return A;case"indexedAccess":return V}throw new Error("Missing component for type: "+e.type.type)}),[e.type]);return r.createElement(t,e)}function G(e){let{flags:t,explicitAccessModifier:n}=e;const l=[];return null!=t&&t.isAbstract&&l.push("abstract"),null!=t&&t.isStatic&&l.push("static"),null!=t&&t.isConst&&l.push("const"),null!=t&&t.isReadonly&&l.push("readonly"),null!=t&&t.isPrivate&&l.push("private"),null!=t&&t.isProtected&&l.push("protected"),(null==t||!t.isPublic)&&(!n||null!=t&&t.isProtected||null!=t&&t.isPrivate)||l.push("public"),r.createElement(r.Fragment,null,l.map((e=>r.createElement(k,{key:e,type:"keyword"},e," "))))}function q(e){let{reflection:t}=e;const n="__namedParameters"===t.name?"{...}":t.name;return r.createElement(r.Fragment,null,r.createElement(G,{flags:t.flags}),t.flags.isRest&&"...",r.createElement(k,{id:t.anchor,to:t.anchor?"#"+t.anchor:void 0,type:"plain"},n),t.flags.isOptional&&"?",": ",t.type&&r.createElement(j,{type:t.type}),t.defaultValue&&r.createElement(r.Fragment,null," = ",r.createElement(k,{type:"plain"},t.defaultValue)))}function H(e){let{reflection:t}=e;return r.createElement(r.Fragment,null,r.createElement(G,{flags:t.flags}),t.varianceModifier&&r.createElement(k,{type:"keyword"},t.varianceModifier," "),r.createElement(k,{id:t.anchor,to:t.anchor?"#"+t.anchor:void 0,type:"class-name"},t.name),t.type&&r.createElement(r.Fragment,null," extends ",r.createElement(j,{type:t.type})),t.default&&r.createElement(r.Fragment,null," = ",r.createElement(j,{type:t.default})))}function W(e){var t,n;let{reflection:l,flags:a}=e;const c=(0,S.RU)(),o="__type"===l.name;return r.createElement(r.Fragment,null,r.createElement(G,{flags:null!=a?a:l.flags,explicitAccessModifier:!o}),l.kind===u.GetSignature&&r.createElement(k,{type:"keyword"},"get "),l.kind===u.SetSignature&&r.createElement(k,{type:"keyword"},"set "),l.overwrites&&r.createElement(r.Fragment,null,r.createElement(k,{to:(0,S.Gr)(c[l.overwrites.id]),type:"keyword"},"override")," "),l.kind===u.ConstructorSignature?r.createElement(r.Fragment,null,r.createElement(k,{to:"#",type:"keyword"},"new")," ",r.createElement(k,{type:"plain"},l.type.name)):o?"":r.createElement(k,{type:"function"},l.name),!(null==(t=l.typeParameter)||!t.length)&&r.createElement(C,{type:b.Angle},l.typeParameter.map((e=>r.createElement(H,{key:e.id,reflection:e})))),null!=(n=l.parameters)&&n.length?r.createElement(C,{type:b.Parentheses},l.parameters.map((e=>r.createElement(q,{key:e.id,reflection:e})))):"()",l.type&&r.createElement(r.Fragment,null,o?" => ":": ",r.createElement(j,{type:l.type})))}function K(e){let{reflection:t}=e;return r.createElement(q,{reflection:t})}const J={[u.Namespace]:"namespace",[u.Enum]:"enum",[u.Class]:"class",[u.Interface]:"interface"};function Q(e){var t,n,l;let{reflection:a}=e;return r.createElement(r.Fragment,null,r.createElement(G,{flags:a.flags}),r.createElement(k,{type:"keyword"},J[a.kind]," "),r.createElement(k,{type:"class-name"},a.name),!(null==(t=a.typeParameters)||!t.length)&&r.createElement(C,{type:b.Angle},a.typeParameters.map(((e,t)=>r.createElement(H,{key:t,reflection:e}))))," ",!(null==(n=a.extendedTypes)||!n.length)&&r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},"extends "),r.createElement(C,null,a.extendedTypes.map(((e,t)=>r.createElement(j,{key:t,type:e}))))),!(null==(l=a.implementedTypes)||!l.length)&&r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},"implements "),r.createElement(C,null,a.implementedTypes.map(((e,t)=>r.createElement(j,{key:t,type:e}))))))}function X(e){let{reflection:t}=e;return r.createElement(r.Fragment,null,r.createElement(G,{flags:t.flags}),r.createElement(k,{type:"keyword"},"type "),r.createElement(k,{type:"class-name"},t.name),t.typeParameters&&r.createElement(C,{type:b.Angle},t.typeParameters.map(((e,t)=>r.createElement(H,{key:t,reflection:e}))))," = ",r.createElement(j,{type:t.type}))}function $(e){let{reflection:t}=e;return t.signatures?r.createElement(W,{reflection:t.signatures[0]}):t.children?r.createElement(C,{type:b.Curly},t.children.map((e=>r.createElement(ee,{key:e.id,reflection:e})))):r.createElement(r.Fragment,null,r.createElement(k,{type:"keyword"},"unknown"))}function Y(e){var t,n,l,a;let{reflection:c}=e;const u=null!=(t=null!=(n=null!=(l=null==(a=c.signatures)?void 0:a[0])?l:c.getSignature)?n:c.setSignature)?t:c.indexSignature;return r.createElement(W,{reflection:u})}function ee(e){let{reflection:t}=e;const n=(0,r.useMemo)((()=>{switch(t.kind){case u.Project:case u.Module:case u.EnumMember:case u.Variable:case u.Function:break;case u.Namespace:case u.Enum:case u.Class:case u.Interface:return Q;case u.Constructor:return W;case u.Property:return K;case u.Method:return Y;case u.CallSignature:case u.IndexSignature:case u.ConstructorSignature:case u.Parameter:break;case u.TypeLiteral:return $;case u.TypeParameter:return H;case u.Accessor:case u.GetSignature:case u.SetSignature:case u.ObjectLiteral:break;case u.TypeAlias:return X;case u.Reference:}throw new Error("Missing component for reflection: "+t.kindString)}),[t.id]);return r.createElement(n,{reflection:t})}function te(e){let{children:t}=e;const n=(0,r.useRef)();return(0,r.useLayoutEffect)((()=>{if(!n.current)return;const e=n.current.closest("pre");if(e.scrollWidth>e.clientWidth){const t=Array.from(n.current.querySelectorAll("."+p.elements)),r=t.filter((e=>e.children.length>1));for(;e.scrollWidth>e.clientWidth&&t.length>0;)r.length>0?r.shift().classList.add(p.wrap):t.shift().classList.add(p.wrap)}})),r.createElement(r.Fragment,null,t&&r.createElement("span",{ref:n,className:(0,s.Z)(p.line,"token-line")},t),r.createElement("br",null))}function ne(e){let{id:t}=e;const n=(0,S.kI)(t);return r.createElement(n,null)}function re(e){let{comment:t,full:n=!0}=e;const l=(0,r.useMemo)((()=>{var e;return null==t||null==(e=t.blockTags)?void 0:e.find((e=>{let{tag:t}=e;return"@remarks"===t}))}),[t]);return r.createElement(r.Fragment,null,r.createElement(ne,{id:null==t?void 0:t.summaryId}),r.createElement(ne,{id:null==l?void 0:l.contentId}),n&&r.createElement(le,{comment:t}))}function le(e){let{comment:t}=e;const n=(0,r.useMemo)((()=>{var e,n;return null!=(e=null==t||null==(n=t.blockTags)?void 0:n.filter((e=>{let{tag:t}=e;return"@example"===t})))?e:[]}),[t]),l=(0,r.useMemo)((()=>{var e;return null==t||null==(e=t.blockTags)?void 0:e.find((e=>{let{tag:t}=e;return"@deprecated"===t}))}),[t]),a=(0,r.useMemo)((()=>{var e;return null==t||null==(e=t.blockTags)?void 0:e.find((e=>{let{tag:t}=e;return"@see"===t}))}),[t]);return r.createElement(r.Fragment,null,n.length>0&&r.createElement(r.Fragment,null,r.createElement("h4",null,"Examples"),n.map((e=>r.createElement(ne,{id:e.contentId})))),l&&r.createElement(r.Fragment,null,r.createElement("h4",null,"Deprecated"),r.createElement(ne,{id:l.contentId})),a&&r.createElement(r.Fragment,null,r.createElement("h4",null,"See also"),r.createElement(ne,{id:a.contentId})))}function ae(e){let{parameters:t}=e;return null!=t&&t.length?r.createElement(r.Fragment,null,r.createElement("h4",null,"Type Parameters"),r.createElement("ul",null,t.map((e=>{var t;return r.createElement("li",{key:e.id},r.createElement("code",null,r.createElement(H,{reflection:e})),r.createElement(ne,{id:null==(t=e.comment)?void 0:t.summaryId}))})))):r.createElement(r.Fragment,null)}function ce(e){let{parameters:t}=e;return null!=t&&t.length?r.createElement(r.Fragment,null,r.createElement("h4",null,"Parameters"),r.createElement("ul",null,t.map((e=>{var t;return r.createElement("li",{key:e.id},r.createElement("code",null,r.createElement(q,{reflection:e})),r.createElement(ne,{id:null==(t=e.comment)?void 0:t.summaryId}))})))):r.createElement(r.Fragment,null)}function ue(e){let{signatures:t,flags:n,source:l}=e;const[a,c]=(0,r.useState)(t[0]);return r.createElement(r.Fragment,null,r.createElement(y,null,t.map((e=>r.createElement(h,{link:null==l?void 0:l.url,key:e.id,highlight:t.length>1&&e.id===a.id,onClick:t.length>1?()=>c(e):void 0},r.createElement(te,null,r.createElement(W,{reflection:e,flags:n})))))),r.createElement(re,{comment:a.comment}),r.createElement(ae,{parameters:a.typeParameter}),r.createElement(ce,{parameters:a.parameters}))}var oe=n(7708);function me(e){let{width:t=24,height:n=24,...l}=e;return r.createElement("svg",(0,E.Z)({viewBox:"0 0 24 24",width:t,height:n,"aria-hidden":!0},l),r.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z",fill:"currentColor"}))}const ie="header_nSmr",se="filters_z1iC",de="icon_ROIU";function pe(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1),[l,a]=(0,oe.mN)();return(0,r.useEffect)((()=>{const t=t=>{e.current&&!e.current.contains(t.target)&&n(!1)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e]),r.createElement(r.Fragment,null,r.createElement("div",{ref:e,className:(0,s.Z)("dropdown dropdown--right margin-bottom--md",t&&"dropdown--show")},r.createElement("a",{href:"#","aria-haspopup":"true","aria-expanded":!1,role:"button",onClick:e=>{e.preventDefault(),n(!t)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),n(!t))}},"Filters",r.createElement(me,{className:de})),r.createElement("ul",{className:"dropdown__menu"},r.createElement("li",null,r.createElement("label",{htmlFor:"private",className:(0,s.Z)("dropdown__link",l.private&&"dropdown__link--active")},r.createElement("input",{id:"private",type:"checkbox",className:"margin-right--md",checked:l.private,onChange:e=>{a({...l,private:e.target.checked})}}),"Protected members")),r.createElement("li",{onKeyDown:e=>{"Tab"===e.key&&n(!1)}},r.createElement("label",{htmlFor:"inherited",className:(0,s.Z)("dropdown__link",l.inherited&&"dropdown__link--active")},r.createElement("input",{id:"inherited",type:"checkbox",className:"margin-right--md",checked:l.inherited,onChange:e=>{a({...l,inherited:e.target.checked})}}),"Inherited members")))))}function Ee(e){let{children:t,kind:n}=e;return n===u.Class||n===u.Interface?r.createElement("div",{className:(0,s.Z)("row",ie)},r.createElement("div",{className:(0,s.Z)("col",se)},r.createElement(pe,null)),r.createElement("div",{className:"col"},t)):r.createElement(r.Fragment,null,t)}var fe=n(3181),he=n(8963),ge=n(3851),ye=n(9741),ve=n(2244),ke=n(4126);const be="tabList_M0Dn",we="tabItem_ysIP";function Fe(e){var t,n;const{lazy:l,block:a,defaultValue:c,values:u,groupId:o,className:m}=e,i=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=u?u:i.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),p=(0,ve.l)(d,((e,t)=>e.value===t.value));if(p.length>0)throw new Error('Docusaurus error: Duplicate values "'+p.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(t=null!=c?c:null==(n=i.find((e=>e.props.default)))?void 0:n.props.value)?t:i[0].props.value;if(null!==f&&!d.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+d.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:g}=(0,he.U)(),[y,v]=(0,r.useState)(f),k=[],{blockElementScrollPositionUntilNextRender:b}=(0,ke.o5)();if(null!=o){const e=h[o];null!=e&&e!==y&&d.some((t=>t.value===e))&&v(e)}const w=e=>{const t=e.currentTarget,n=k.indexOf(t),r=d[n].value;r!==y&&(b(t),v(r),null!=o&&g(o,String(r)))},F=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=k.indexOf(e.currentTarget)+1;n=null!=(r=k[t])?r:k[0];break}case"ArrowLeft":{var l;const t=k.indexOf(e.currentTarget)-1;n=null!=(l=k[t])?l:k[k.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",be)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,E.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>k.push(e),onKeyDown:F,onFocus:w,onClick:w},l,{className:(0,s.Z)("tabs__item",we,null==l?void 0:l.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(i.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function Ce(e){const t=(0,ye.Z)();return r.createElement(Fe,(0,E.Z)({key:String(t)},e))}const Se="tabItem_OMyP";function xe(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(Se,l),hidden:n},t)}function Ne(e){let{group:t}=e;return"Constructors"===t.title&&0===t.external.length&&1===t.nested.length?r.createElement(Ve,{reflection:t.nested[0]}):r.createElement(r.Fragment,null,t.external.length>0&&r.createElement("ul",null,t.external.map((e=>r.createElement("li",null,r.createElement("code",null,r.createElement(x,{type:e})))))),t.nested.length>0&&t.nested.map(((e,t)=>r.createElement(r.Fragment,{key:e.id},t>0&&r.createElement("hr",null),r.createElement(Ve,{reflection:e})))))}function Pe(e){let{group:t}=e;const n=(0,fe.TH)(),l=(0,S.RU)(),{setTabGroupChoices:a}=(0,he.U)(),c=n.hash.split("-")[0].slice(1),[u]=(0,oe.mN)(),o=(0,r.useMemo)((()=>{var e;return(null!=(e=t.categories)?e:[t]).map((e=>function(e,t,n){const r=[],l=[],a=[];for(const c of e.children){const e=t[c];e&&(0,oe.It)(n,e)&&(a.push(e.anchor),e.hasOwnPage?r.push(e):l.push(e))}if(r.length>0||l.length>0)return{title:e.title,external:r,nested:l,anchors:a}}(e,l,u))).filter((e=>!!e))}),[t,l,u]);return(0,r.useEffect)((()=>{if(1===o.length)return;const e=n.hash.split("-")[0].slice(1);for(const n of o)if(n.anchors.includes(e))return void a(t.title,n.title)}),[n.hash,o]),0===o.length?r.createElement(r.Fragment,null):r.createElement(r.Fragment,null,r.createElement(ge.Z,{as:"h2",id:t.title},t.title),o.length>1?r.createElement(Ce,{groupId:t.title},o.map((e=>r.createElement(xe,{default:e.anchors.includes(c),value:e.title,label:e.title,className:"margin-top--lg"},r.createElement(Ne,{group:e}))))):r.createElement(Ne,{group:o[0]}))}function Ze(e){var t,n,l,a,c;let{reflection:u}=e;return r.createElement(r.Fragment,null,r.createElement(y,null,r.createElement(h,{link:null==(t=u.sources)||null==(n=t[0])?void 0:n.url},r.createElement(te,null,r.createElement(ee,{reflection:u})))),r.createElement(Ee,{kind:u.kind},r.createElement(re,{comment:u.comment})),r.createElement(ae,{parameters:u.typeParameters}),(null==(l=u.implementedBy)?void 0:l.length)&&r.createElement(r.Fragment,null,r.createElement("h4",null,"Implemented by"),r.createElement("ul",null,u.implementedBy.map((e=>r.createElement("li",{key:e.id},r.createElement("code",null,r.createElement(x,{type:e}))))))),(null==(a=u.extendedBy)?void 0:a.length)&&r.createElement(r.Fragment,null,r.createElement("h4",null,"Extended by"),r.createElement("ul",null,u.extendedBy.map((e=>r.createElement("li",{key:e.id},r.createElement("code",null,r.createElement(x,{type:e}))))))),u.signatures&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Callable"),r.createElement(ue,{signatures:u.signatures})),null==(c=u.groups)?void 0:c.map((e=>r.createElement(Pe,{group:e,key:e.title}))))}function _e(e){var t,n;let{reflection:l}=e;const a=[...null!=(t=l.signatures)?t:[],l.setSignature,l.getSignature,l.indexSignature].filter((e=>!!e));return r.createElement(r.Fragment,null,l.hasOwnPage?r.createElement("h1",null,l.name):r.createElement(ge.Z,{as:"h3",id:l.anchor},r.createElement("code",null,l.name)),r.createElement(ue,{signatures:a,flags:l.flags,source:null==(n=l.sources)?void 0:n[0]}),l.inheritedFrom&&r.createElement(r.Fragment,null,"Inherited from"," ",r.createElement("code",null,r.createElement(x,{type:l.inheritedFrom}))),l.overwrites&&r.createElement(r.Fragment,null,"Overwrites"," ",r.createElement("code",null,r.createElement(x,{type:l.overwrites}))))}function Me(e){var t,n;let{reflection:l}=e;return r.createElement(r.Fragment,null,l.hasOwnPage?r.createElement("h1",null,l.name):r.createElement(ge.Z,{as:"h3",id:l.anchor},r.createElement("code",null,l.name)),r.createElement(y,null,r.createElement(h,{link:null==(t=l.sources)||null==(n=t[0])?void 0:n.url},r.createElement(te,null,r.createElement(K,{reflection:l})))),r.createElement(re,{comment:l.comment}),l.inheritedFrom&&r.createElement(r.Fragment,null,"Inherited from"," ",r.createElement("code",null,r.createElement(x,{type:l.inheritedFrom}))))}function Te(e){var t,n,l;let{reflection:a}=e;const c=(0,S.RU)();return r.createElement(r.Fragment,null,r.createElement(ge.Z,{as:"h3",id:a.anchor},r.createElement("code",null,a.name)),r.createElement(y,null,r.createElement(h,{link:null==(t=a.sources)||null==(n=t[0])?void 0:n.url},r.createElement(te,null,r.createElement(ee,{reflection:a})))),r.createElement(re,{comment:a.comment}),r.createElement(ae,{parameters:a.typeParameters}),a.signatures&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Callable"),r.createElement(ue,{signatures:a.signatures})),null==(l=a.groups)?void 0:l.map((e=>r.createElement(r.Fragment,{key:e.title},r.createElement("h2",null,e.title),e.children.map((e=>c[e])).filter((e=>e&&(e.flags.isPublic||!e.flags.isProtected&&!e.flags.isPrivate))).map((e=>r.createElement(Ve,{key:e.id,reflection:e})))))))}var Ie=n(8128);function Le(e){var t;let{reflection:n}=e;return r.createElement(r.Fragment,null,r.createElement(Ie.Z,{language:"ts"},"import ","{...}",' from "',n.importPath,'";'),r.createElement(Ee,{kind:n.kind},r.createElement(re,{comment:n.comment})),null==(t=n.groups)?void 0:t.map((e=>r.createElement(Pe,{group:e,key:e.title}))))}const Ae="cardContainer_ybwo",Re="cardTitle_Ehd1",ze="cardDescription_b6wr";function Be(e){let{reflection:t}=e;const n=(0,S.RU)(),l=t.groups[0].children.map((e=>n[e])).filter((e=>!!e));return r.createElement("article",{className:"margin-top--lg"},r.createElement("section",{className:(0,s.Z)("row")},l.map((e=>{var t,n;return r.createElement("article",{key:e.id,className:"col col--6 margin-bottom--lg"},r.createElement(v.Z,{href:e.href,className:(0,s.Z)("card padding--lg",Ae)},r.createElement("h2",{className:(0,s.Z)("text--truncate",Re)},r.createElement("code",null,e.name)),r.createElement("div",{className:(0,s.Z)("text--truncate",ze)},null!=(t=null==(n=e.comment)?void 0:n.summaryText)?t:"\xa0")))}))))}function Ve(e){let{reflection:t}=e;const n=(0,r.useMemo)((()=>{switch(t.kind){case u.Project:return Be;case u.Module:return Le;case u.Namespace:case u.Enum:case u.Class:case u.Interface:return Ze;case u.Function:case u.Accessor:case u.Constructor:case u.Method:return _e;case u.Variable:case u.Property:case u.EnumMember:return Me;case u.CallSignature:case u.IndexSignature:case u.ConstructorSignature:case u.Parameter:case u.TypeLiteral:case u.TypeParameter:case u.GetSignature:case u.SetSignature:case u.ObjectLiteral:break;case u.TypeAlias:return Te;case u.Reference:}throw new Error("Missing component for reflection: "+t.kindString)}),[t.kind]);return r.createElement(n,{reflection:t})}var Oe=n(822);const De="tooltip_lI6R",Ue="active_DOSD";function je(e){let{children:t}=e;const n=(0,ye.Z)(),l=(0,S.rG)(),[a,c]=(0,r.useState)(!1),[u,o]=(0,r.useState)(null),m=(0,r.useRef)(),i=(0,r.useRef)(),d=(0,r.useRef)(),p=(0,r.useCallback)((()=>{if(!i.current||!d.current)return;const e=i.current.getBoundingClientRect();let t=window.innerWidth-e.left-496;t<0&&(t=0),d.current.style.right=t+"px",d.current.style.top=e.bottom+"px"}),[]);return(0,r.useEffect)((()=>{if(!n)return;const e=e=>{var t,n,r;if(!e.target.href||null==(t=m.current)||!t.contains(e.target)||null!=(n=d.current)&&n.contains(e.target))return;const a=new URL(e.target.href,document.baseURI);if(a.pathname===window.location.pathname)return;const u=l(a.pathname+a.hash);null!=u&&null!=(r=u.comment)&&r.summary&&(i.current=e.target,c(!0),o(u.comment),p())},t=e=>{e.target===i.current&&c(!1)};return document.addEventListener("mouseenter",e,!0),document.addEventListener("focus",e,!0),document.addEventListener("mouseleave",t,!0),document.addEventListener("blur",t,!0),document.addEventListener("scroll",p),()=>{document.removeEventListener("mouseenter",e,!0),document.removeEventListener("focus",e,!0),document.removeEventListener("mouseleave",t,!0),document.removeEventListener("blur",t,!0),document.removeEventListener("scroll",p)}}),[n]),(0,r.useEffect)((()=>{p()})),r.createElement("div",{ref:m},t,r.createElement("div",{ref:d,className:(0,s.Z)(De,"padding--md margin-horiz--md",a&&Ue)},u&&r.createElement(re,{comment:u,full:!1})))}function Ge(e){var t,n,o,m;let{route:s}=e;const d=(0,Oe.p)(),p=(0,r.useMemo)((()=>function(e,t){const{plain:n}=e,r=Object.create(null),l=e.styles.reduce(((e,n)=>{const{languages:r,style:l}=n;return r&&!r.includes(t)||n.types.forEach((t=>{e[t]={...e[t],...l}})),e}),r);return l.root=n,l.plain={...n,backgroundColor:null},l}(d,"typescript")),[d]),E=(0,S.RU)(),f=E[s.reflectionId],[h]=(0,oe.mN)(),g=(0,r.useMemo)((()=>{const e=[];if(!f.groups||f.kind===u.Project)return e;for(const t of f.groups)if(e.push({value:t.title,id:t.title,level:2}),t.children)for(const n of t.children){const t=E[n];t&&!t.hasOwnPage&&(0,oe.It)(h,t)&&e.push({value:"<code>"+t.name+"</code>",id:t.anchor,level:3})}return e}),[f,h]);return r.createElement(c.b,{content:{frontMatter:{},metadata:{id:f.docId,unversionedId:f.docId,version:"current",title:f.name,description:null==(t=f.comment)?void 0:t.summaryText,slug:f.url,permalink:f.url,editUrl:null!=(n=null==(o=f.sources)||null==(m=o[0])?void 0:m.url)?n:void 0,draft:!1,tags:[],frontMatter:{},next:f.next,previous:f.previous},toc:g,assets:{}}},r.createElement(i,{dictionary:p},r.createElement(l.Z,null),r.createElement(je,null,r.createElement(a.Z,null,r.createElement(Ve,{reflection:f})))))}},8617:(e,t,n)=>{n.d(t,{Gr:()=>m,RU:()=>c,gs:()=>a,kI:()=>o,rG:()=>u});var r=n(2784);const l=r.createContext({lookup:{},urlLookup:{},contents:{},id:0});function a(e){let{children:t,lookup:n,urlLookup:a,contents:c,id:u}=e;return r.createElement(l.Provider,{value:{lookup:n,contents:c,urlLookup:a,id:u}},t)}function c(e){const{lookup:t,id:n}=(0,r.useContext)(l);return t[null!=e?e:n]}function u(){const{urlLookup:e,lookup:t}=(0,r.useContext)(l);return n=>{var r,l;const a=e[n];return a&&null!=(r=null==(l=t[a.projectId])?void 0:l[a.id])?r:null}}function o(e){var t;const{contents:n}=(0,r.useContext)(l);return null!=(t=n[e])?t:r.Fragment}function m(e){if(e)return e.href}},7708:(e,t,n)=>{n.d(t,{It:()=>d,Wy:()=>i,mN:()=>s});var r=n(2784),l=n(1263),a=n(9741);const c="api-filters",u=l.Z.canUseDOM?localStorage.getItem(c):null,o=u?JSON.parse(u):{inherited:!0,private:!1},m=r.createContext([o,()=>{}]);function i(e){let{children:t}=e;const[n,l]=(0,r.useState)(o),u=(0,a.Z)();return r.createElement(m.Provider,{value:[n,e=>{u&&localStorage.setItem(c,JSON.stringify(e)),l(e)}]},t)}function s(){return(0,r.useContext)(m)}function d(e,t){var n,r;const l=(null==(n=t.flags)?void 0:n.isPrivate)||(null==(r=t.flags)?void 0:r.isProtected);if(!e.private&&l)return!1;const a=!!t.inheritedFrom;return!(!e.inherited&&a)}},6047:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7896),l=n(2784),a=n(9055);const c="icon_Fw4I";function u(e){return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}))}function o(e){return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}))}function m(e){return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}))}function i(e){return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}))}function s(e){const t=(0,l.useMemo)((()=>{switch(e.type){case"tip":return i;case"caution":return o;case"danger":return m;default:return u}}),[e.type]);return l.createElement(l.Fragment,null,l.createElement(a.Z,(0,r.Z)({icon:l.createElement(t,{className:c})},e)))}},4141:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7896),l=n(2784),a=n(6277);const c="iconEdit_N_05";function u(e){let{className:t,...n}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 24 24",className:(0,a.Z)(c,t),"aria-hidden":"true"},n),l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}))}},4648:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7896),l=n(2784);function a(e){return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",style:{width:16,height:16,marginTop:"0.1rem"}},e),l.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",fill:"currentColor"}))}}}]);