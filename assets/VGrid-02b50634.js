import{y as S,bl as ie,bq as q,F as p,h as z,v as R,_ as oe,a8 as le,C as A,g as f,p as V,B as G,br as J,aD as W,bs as X,a0 as Y,ag as ue,t as ce,aa as Z,O as de,s as x,r as fe,w as B,bo as ge,al as ve,N as me,U as M,ac as he,ae as ye,J as be,W as Se,R as _e,Z as we,b0 as xe,S as Re,G as Pe,a2 as Ve,H as Te,a6 as pe,a7 as ze,b2 as Ce,V as Ie,T as Be,ad as Oe}from"./index-efd76d56.js";class T{constructor(i){let{x:r,y:t,width:o,height:s}=i;this.x=r,this.y=t,this.width=o,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Me(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function Ue(e){return Array.isArray(e)?new T({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function qe(e){const i=e.getBoundingClientRect(),r=getComputedStyle(e),t=r.transform;if(t){let o,s,n,a,c;if(t.startsWith("matrix3d("))o=t.slice(9,-1).split(/, /),s=+o[0],n=+o[5],a=+o[12],c=+o[13];else if(t.startsWith("matrix("))o=t.slice(7,-1).split(/, /),s=+o[0],n=+o[3],a=+o[4],c=+o[5];else return new T(i);const l=r.transformOrigin,u=i.x-a-(1-s)*parseFloat(l),g=i.y-c-(1-n)*parseFloat(l.slice(l.indexOf(" ")+1)),h=s?i.width/s:e.offsetWidth+1,v=n?i.height/n:e.offsetHeight+1;return new T({x:u,y:g,width:h,height:v})}else return new T(i)}function Ge(e,i,r){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(i,r)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(o=>{t.onfinish=()=>{o(t)}})),t}function Je(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return S()({name:r??ie(q(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...p()},setup(t,o){let{slots:s}=o;return()=>{var n;return z(t.tag,{class:[e,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const Xe="cubic-bezier(0.4, 0, 0.2, 1)",Ye="cubic-bezier(0.0, 0, 0.2, 1)",Ze="cubic-bezier(0.4, 0, 1, 1)";function $e(e){return{aspectStyles:V(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const K=R({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...p(),...oe()},"VResponsive"),U=S()({name:"VResponsive",props:K(),setup(e,i){let{slots:r}=i;const{aspectStyles:t}=$e(e),{dimensionStyles:o}=le(e);return A(()=>{var s;return f("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[f("div",{class:"v-responsive__sizer",style:t.value},null),(s=r.additional)==null?void 0:s.call(r),r.default&&f("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Ae=R({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),P=(e,i)=>{let{slots:r}=i;const{transition:t,disabled:o,group:s,...n}=e,{component:a=s?J:W,...c}=typeof t=="object"?t:{};return z(a,G(typeof t=="string"?{name:o?"":t}:c,typeof t=="string"?{}:{disabled:o,group:s},n),r)};function We(e,i){if(!X)return;const r=i.modifiers||{},t=i.value,{handler:o,options:s}=typeof t=="object"?t:{handler:t,options:{}},n=new IntersectionObserver(function(){var g;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const l=(g=e._observe)==null?void 0:g[i.instance.$.uid];if(!l)return;const u=a.some(h=>h.isIntersecting);o&&(!r.quiet||l.init)&&(!r.once||u||l.init)&&o(u,a,c),u&&r.once?Q(e,i):l.init=!0},s);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:n},n.observe(e)}function Q(e,i){var t;const r=(t=e._observe)==null?void 0:t[i.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const Ee={mounted:We,unmounted:Q},Fe=Ee,je=R({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...K(),...p(),...Y(),...Ae()},"VImg"),De=S()({name:"VImg",directives:{intersect:Fe},props:je(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:r,slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:s}=ue(ce(e,"color")),{roundedClasses:n}=Z(e),a=de("VImg"),c=x(""),l=fe(),u=x(e.eager?"loading":"idle"),g=x(),h=x(),v=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=V(()=>v.value.aspect||g.value/h.value||0);B(()=>e.src,()=>{C(u.value!=="idle")}),B(_,(d,m)=>{!d&&m&&l.value&&w(l.value)}),ge(()=>C());function C(d){if(!(e.eager&&d)&&!(X&&!d&&!e.eager)){if(u.value="loading",v.value.lazySrc){const m=new Image;m.src=v.value.lazySrc,w(m,null)}v.value.src&&ve(()=>{var m;r("loadstart",((m=l.value)==null?void 0:m.currentSrc)||v.value.src),setTimeout(()=>{var b;if(!a.isUnmounted)if((b=l.value)!=null&&b.complete){if(l.value.naturalWidth||F(),u.value==="error")return;_.value||w(l.value,null),u.value==="loading"&&E()}else _.value||w(l.value),j()})})}}function E(){var d;a.isUnmounted||(j(),w(l.value),u.value="loaded",r("load",((d=l.value)==null?void 0:d.currentSrc)||v.value.src))}function F(){var d;a.isUnmounted||(u.value="error",r("error",((d=l.value)==null?void 0:d.currentSrc)||v.value.src))}function j(){const d=l.value;d&&(c.value=d.currentSrc||d.src)}let I=-1;me(()=>{clearTimeout(I)});function w(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{if(clearTimeout(I),a.isUnmounted)return;const{naturalHeight:N,naturalWidth:H}=d;N||H?(g.value=H,h.value=N):!d.complete&&u.value==="loading"&&m!=null?I=window.setTimeout(b,m):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,h.value=1)};b()}const D=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),te=()=>{var b;if(!v.value.src||u.value==="idle")return null;const d=f("img",{class:["v-img__img",D.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:E,onError:F},null),m=(b=t.sources)==null?void 0:b.call(t);return f(P,{transition:e.transition,appear:!0},{default:()=>[M(m?f("picture",{class:"v-img__picture"},[m,d]):d,[[Se,u.value==="loaded"]])]})},ne=()=>f(P,{transition:e.transition},{default:()=>[v.value.lazySrc&&u.value!=="loaded"&&f("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),se=()=>t.placeholder?f(P,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!t.error)&&f("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ae=()=>t.error?f(P,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&f("div",{class:"v-img__error"},[t.error()])]}):null,re=()=>e.gradient?f("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,L=x(!1);{const d=B(_,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{L.value=!0})}),d())})}return A(()=>{const d=U.filterProps(e);return M(f(U,G({class:["v-img",{"v-img--booting":!L.value},o.value,n.value,e.class],style:[{width:be(e.width==="auto"?g.value:e.width)},s.value,e.style]},d,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>f(ye,null,[f(te,null,null),f(ne,null,null),f(re,null,null),f(se,null,null),f(ae,null,null)]),default:t.default}),[[he("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:l,state:u,naturalWidth:g,naturalHeight:h}}}),Le=R({start:Boolean,end:Boolean,icon:_e,image:String,text:String,...p(),...we(),...Y(),...xe(),...Re(),...Pe(),...Ve({variant:"flat"})},"VAvatar"),Ke=S()({name:"VAvatar",props:Le(),setup(e,i){let{slots:r}=i;const{themeClasses:t}=Te(e),{colorClasses:o,colorStyles:s,variantClasses:n}=pe(e),{densityClasses:a}=ze(e),{roundedClasses:c}=Z(e),{sizeClasses:l,sizeStyles:u}=Ce(e);return A(()=>f(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,o.value,a.value,c.value,l.value,n.value,e.class],style:[s.value,u.value,e.style]},{default:()=>[r.default?f(Be,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[r.default()]}):e.image?f(De,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?f(Ie,{key:"icon",icon:e.icon},null):e.text,Oe(!1,"v-avatar")]})),{}}}),Ne=R({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function y(e,i,r){return S()({name:e,props:Ne({mode:r,origin:i}),setup(t,o){let{slots:s}=o;const n={onBeforeEnter(a){t.origin&&(a.style.transformOrigin=t.origin)},onLeave(a){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:l,offsetWidth:u,offsetHeight:g}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${c}px`,a.style.left=`${l}px`,a.style.width=`${u}px`,a.style.height=`${g}px`}t.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(t.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:c,top:l,left:u,width:g,height:h}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=c||"",a.style.top=l||"",a.style.left=u||"",a.style.width=g||"",a.style.height=h||""}}};return()=>{const a=t.group?J:W;return z(a,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},s.default)}}})}function k(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return S()({name:e,props:{mode:{type:String,default:r},disabled:Boolean},setup(t,o){let{slots:s}=o;return()=>z(W,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:i},s.default)}})}function ee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=q(`offset-${r}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[r]:n.style[r]}},onEnter(n){const a=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const c=`${n[t]}px`;n.style[r]="0",n.offsetHeight,n.style.transition=a.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[r]=c})},onAfterEnter:s,onEnterCancelled:s,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[r]:n.style[r]},n.style.overflow="hidden",n.style[r]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[r]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(n){e&&n._parent&&n._parent.classList.remove(e),s(n)}function s(n){const a=n._initialStyle[r];n.style.overflow=n._initialStyle.overflow,a!=null&&(n.style[r]=a),delete n._initialStyle}}y("fab-transition","center center","out-in");y("dialog-bottom-transition");y("dialog-top-transition");const Qe=y("fade-transition");y("scale-transition");y("scroll-x-transition");y("scroll-x-reverse-transition");y("scroll-y-transition");y("scroll-y-reverse-transition");y("slide-x-transition");y("slide-x-reverse-transition");const ke=y("slide-y-transition");y("slide-y-reverse-transition");const et=k("expand-transition",ee()),tt=k("expand-x-transition",ee("",!0)),O=Symbol("Forwarded refs");function $(e,i){let r=e;for(;r;){const t=Reflect.getOwnPropertyDescriptor(r,i);if(t)return t;r=Object.getPrototypeOf(r)}}function nt(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];return e[O]=r,new Proxy(e,{get(o,s){if(Reflect.has(o,s))return Reflect.get(o,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const n of r)if(n.value&&Reflect.has(n.value,s)){const a=Reflect.get(n.value,s);return typeof a=="function"?a.bind(n.value):a}}},has(o,s){if(Reflect.has(o,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const n of r)if(n.value&&Reflect.has(n.value,s))return!0;return!1},set(o,s,n){if(Reflect.has(o,s))return Reflect.set(o,s,n);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const a of r)if(a.value&&Reflect.has(a.value,s))return Reflect.set(a.value,s,n);return!1},getOwnPropertyDescriptor(o,s){var a;const n=Reflect.getOwnPropertyDescriptor(o,s);if(n)return n;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const c of r){if(!c.value)continue;const l=$(c.value,s)??("_"in c.value?$((a=c.value._)==null?void 0:a.setupState,s):void 0);if(l)return l}for(const c of r){const l=c.value&&c.value[O];if(!l)continue;const u=l.slice();for(;u.length;){const g=u.shift(),h=$(g.value,s);if(h)return h;const v=g.value&&g.value[O];v&&u.push(...v)}}}}})}export{T as B,Fe as I,P as M,De as V,et as a,Ke as b,Je as c,Ge as d,Ye as e,nt as f,Ze as g,Ue as h,Me as i,Qe as j,tt as k,ke as l,Ae as m,qe as n,Xe as s};