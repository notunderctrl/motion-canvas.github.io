"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[6583],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(876));const o={title:"v11.0.0"},i="Migrating to version 11.0.0",l={unversionedId:"guides/migration/11.0.0",id:"guides/migration/11.0.0",title:"v11.0.0",description:"If you're starting a new project, you can quickly scaffold it using:",source:"@site/docs/guides/migration/11.0.0.md",sourceDirName:"guides/migration",slug:"/guides/migration/11.0.0",permalink:"/guides/migration/11.0.0",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/docs/guides/migration/11.0.0.md",tags:[],version:"current",lastUpdatedBy:"Jacob",frontMatter:{title:"v11.0.0"},sidebar:"guides",previous:{title:"v10.0.0",permalink:"/guides/migration/10.0.0"},next:{title:"v12.0.0",permalink:"/guides/migration/12.0.0"}},s={},c=[{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Update project file",id:"update-project-file",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-to-version-1100"},"Migrating to version 11.0.0"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're starting a new project, you can quickly scaffold it using:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @motion-canvas\n"))),(0,r.kt)("h2",{id:"install-the-new-version"},"Install the new version"),(0,r.kt)("p",null,"Upgrade the versions of all motion-canvas packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- "@motion-canvas/core": "^10.0.0",\n- "@motion-canvas/ui": "^10.0.0",\n- "@motion-canvas/vite-plugin": "^10.0.0",\n+ "@motion-canvas/core": "^11.0.0",\n+ "@motion-canvas/ui": "^11.0.0",\n+ "@motion-canvas/vite-plugin": "^11.0.0",\n')),(0,r.kt)("p",null,"To apply the changes, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h2",{id:"update-project-file"},"Update project file"),(0,r.kt)("p",null,"Since version 11, scene file names no longer need to follow the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"[name].scene.tsx"),".\nInstead, a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"?scene")," query flag is used when importing a scene in the project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/project.tsx"',title:'"src/project.tsx"'},"- import example from './scenes/example.scene';\n+ import example from './scenes/example?scene';\n\nexport default new Project({\n  name: 'project',\n  scenes: [example],\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the above example, we also changed the name of the scene file from ",(0,r.kt)("inlineCode",{parentName:"p"},"example.scene.tsx")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"example.tsx"),". This way we avoid the redundant ",(0,r.kt)("inlineCode",{parentName:"p"},"scene")," when importing it."),(0,r.kt)("p",{parentName:"admonition"},"Of course, if you want, you can keep the old file name and import it as: ",(0,r.kt)("inlineCode",{parentName:"p"},"example.scene?scene"),".")),(0,r.kt)("p",null,"This instructs our Vite plugin to turn the imported module into a scene.\nIt will instantiate an adequate class, load its metadata, and set up hot module replacement."),(0,r.kt)("p",null,"Thanks to this change, the name of your scene generator function no longer\nneeds to match its file name. In fact, it can be completely omitted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/scenes/example.tsx"',title:'"src/scenes/example.tsx"'},"- export default makeKonvaScene(function* example(view) {\n+ export default makeKonvaScene(function* (view) {\n  // ...\n});\n")))}m.isMDXComponent=!0}}]);