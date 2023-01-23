"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9869],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(o,".").concat(g)]||p[g]||u[g]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2665:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(2784);const r="container_lQCo",i="small_As57",l="banner_A4QS",s="player_tELG",o="link_BTzN",c="icon_wSGd";var d=n(7896);function p(e){let{width:t=24,height:n=24,...r}=e;return a.createElement("svg",(0,d.Z)({viewBox:"0 0 24 24",width:t,height:n,"aria-hidden":!0},r),a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}var u=n(9817),g=n(6277);function m(e){let{name:t}=e;const n=`https://github.com/motion-canvas/motion-canvas/blob/main/packages/examples/src/scenes/${t}.tsx`;return a.createElement(u.Z,{to:n,className:(0,g.Z)("padding--sm",o)},a.createElement("span",null,"View source code"),a.createElement(p,{className:c}))}function h(e){let{name:t,banner:n,small:o}=e;return a.createElement("div",{className:(0,g.Z)(r,n&&l,o&&i)},a.createElement("motion-canvas-player",{class:s,src:`/examples/${t}.js`,auto:n}),a.createElement(m,{name:t}))}n(1263).Z.canUseDOM&&n.e(5483).then(n.bind(n,5483))},9364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7896),r=(n(2784),n(876)),i=n(2665),l=n(8128);const s={sidebar_position:3,slug:"/signals"},o="Signals",c={unversionedId:"getting-started/signals",id:"getting-started/signals",title:"Signals",description:"Signals represent a value that may change over time.",source:"@site/docs/getting-started/signals.mdx",sourceDirName:"getting-started",slug:"/signals",permalink:"/docs/signals",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/docs/getting-started/signals.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/signals"},sidebar:"docs",previous:{title:"Scene hierarchy",permalink:"/docs/hierarchy"},next:{title:"Tweening",permalink:"/docs/tweening"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Laziness",id:"laziness",level:3},{value:"Caching",id:"caching",level:3},{value:"Dependency tracking",id:"dependency-tracking",level:3},{value:"Complex example",id:"complex-example",level:2}],u={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signals"},"Signals"),(0,r.kt)("p",null,"Signals represent a value that may change over time.\nThey can be used to define dependencies between the state of the animation.\nThis way, when a value changes, all other values that depend on it get automatically updated."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Signals for primitive types are created using the ",(0,r.kt)("a",{parentName:"p",href:"/api/core/signals#createSignal"},(0,r.kt)("inlineCode",{parentName:"a"},"createSignal()"))," function, where the first argument specifies their initial value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {createSignal} from '@motion-canvas/core/lib/signals';\n\nconst signal = createSignal(0);\n")),(0,r.kt)("p",null,"Additionally, each complex type has a static ",(0,r.kt)("inlineCode",{parentName:"p"},"createSignal()")," method that can be used to create a signal for said type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {Vector2} from '@motion-canvas/core/lib/types';\n\nconst signal = Vector2.createSignal(Vector2.up);\n")),(0,r.kt)("p",null,"Properties of every node are also represented by signals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const circle = <Circle />;\n\nconst signal = circle.fill;\n")),(0,r.kt)("p",null,"Once created, signals can be invoked to perform one of the three possible actions\n(The action is chosen based on the number of arguments):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"retrieve the value:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const value = signal();\n"))),(0,r.kt)("li",{parentName:"ol"},"update the value:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"signal(3);\n"))),(0,r.kt)("li",{parentName:"ol"},"create a ",(0,r.kt)("a",{parentName:"li",href:"/docs/tweening"},"tween")," for the value:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"yield * signal(2, 0.3);\n")))),(0,r.kt)("p",null,"Instead of the actual value, a signal can be provided with a function that computes the value dynamically. Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const radius = createSignal(1);\nconst area = createSignal(() => Math.PI * radius() * radius());\n\nconsole.log(area()); // 3.141592653589793\nradius(2);\nconsole.log(area()); // 12.566370614359172\n")),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," signal uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"radius")," signal to compute its value."),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"To better understand how signals work, let's modify the example from before to see when exactly the area is calculated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const radius = createSignal(1);\nconst area = createSignal(() => {\n  console.log('area recalculated!');\n  return Math.PI * radius() * radius();\n});\n\narea(); // area recalculated!\narea();\nradius(2);\narea(); // area recalculated!\nradius(3);\nradius(4);\narea(); // area recalculated!\n")),(0,r.kt)("p",null,"This demonstrates three important aspects of signals:"),(0,r.kt)("h3",{id:"laziness"},"Laziness"),(0,r.kt)("p",null,"Signals are only calculated when their value is requested. The first ",(0,r.kt)("inlineCode",{parentName:"p"},'"area recalculated!"')," message is logged to console only after ",(0,r.kt)("inlineCode",{parentName:"p"},"area()")," is called."),(0,r.kt)("h3",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Once the signal is calculated, its value is saved and then returned during subsequent calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"area()"),". That's why nothing is logged to the console during the second call. This aspect of signals makes them perfect for caching computationally heavy operations. In fact, Motion Canvas uses signals internally to cache things such as matrices."),(0,r.kt)("h3",{id:"dependency-tracking"},"Dependency tracking"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," signal keeps track of other signals it depends on. When we change the ",(0,r.kt)("inlineCode",{parentName:"p"},"radius")," signal, the ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," signal is notified about that. But it doesn't get recalculated immediately - laziness is still at play. We can modify the radius however many times we want, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," will be recalculated only once its value is requested again by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"area()"),"."),(0,r.kt)("h2",{id:"complex-example"},"Complex example"),(0,r.kt)("p",null,"We can use the fact that properties of nodes are represented by signals to construct scenes that automatically update when the data changes. Following the previous example, let's create a visualisation for the area of the circle:"),(0,r.kt)(i.Z,{small:!0,name:"node-signal",mdxType:"AnimationPlayer"}),(0,r.kt)("p",null,"Below you'll find the code used to create this animation. We highlighted all the places where signals are used:"),(0,r.kt)(l.Z,{language:"tsx",mdxType:"CodeBlock"},"import {makeScene2D} from '@motion-canvas/2d/lib/scenes';\nimport {Circle, Text, Line} from '@motion-canvas/2d/lib/components';\nimport {createSignal} from '@motion-canvas/core/lib/signals';\nimport {Vector2} from '@motion-canvas/core/lib/types';\nimport {waitFor} from '@motion-canvas/core/lib/flow';\n\nexport default makeScene2D(function* (view) {\n  // highlight-start\n  const radius = createSignal(3);\n  const area = createSignal(() => Math.PI * radius() * radius());\n  // highlight-end\n\n  const scale = 100;\n  const textStyle = {\n    fontWeight: 700,\n    fontSize: 56,\n    offsetY: -1,\n    padding: 20,\n    cache: true,\n  };\n\n  view.add(\n    <>\n      <Circle\n        // highlight-start\n        width={() => radius() * scale * 2}\n        height={() => radius() * scale * 2}\n        // highlight-end\n        fill={'#e13238'}\n      />\n      <Line\n        points={[\n          Vector2.zero,\n          // highlight-next-line\n          () => Vector2.right.scale(radius() * scale),\n        ]}\n        lineDash={[20, 20]}\n        startArrow\n        endArrow\n        endOffset={8}\n        lineWidth={8}\n        stroke={'#242424'}\n      />\n      <Text\n        // highlight-start\n        text={() => `r = ${radius().toFixed(2)}`}\n        x={() => (radius() * scale) / 2}\n        // highlight-end\n        fill={'#242424'}\n        {...textStyle}\n      />\n      <Text\n        // highlight-start\n        text={() => `A = ${area().toFixed(2)}`}\n        y={() => radius() * scale}\n        // highlight-end\n        fill={'#e13238'}\n        {...textStyle}\n      />\n    </>,\n  );\n\n  yield* radius(4, 2).to(3, 2);\n  yield* waitFor(1);\n});\n"),(0,r.kt)("p",null,"With this setup, all we need to do is animate the ",(0,r.kt)("inlineCode",{parentName:"p"},"radius")," signal, and the rest of the scene will adjust accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"yield * radius(4, 2).to(3, 2);\n")))}g.isMDXComponent=!0}}]);