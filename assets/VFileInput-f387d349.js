import{m as ze,f as Pe,u as Ae,g as se,h as xe,i as we,j as Re}from"./VTextField-fd77a9c9.js";import{j as ue,k as Fe,b as ie,f as Be}from"./VGrid-02b50634.js";import{v as Q,R as U,F as ae,aX as _e,S as te,aY as me,y as ee,aT as Te,u as Me,aZ as he,s as D,p as b,a_ as oe,aA as Oe,w as ye,C as ne,g as a,V as L,am as Ee,aM as Ge,af as $e,G as ke,a2 as be,H as ge,ah as De,t as Z,B as Y,X as ce,Y as Le,Z as He,$ as Ne,a$ as je,a0 as Xe,a1 as Ue,b0 as Ye,a3 as qe,b1 as Se,a5 as Ke,a6 as We,a7 as Ze,a9 as Je,aa as Qe,b2 as el,z as Ce,b3 as ll,a4 as al,U as re,ac as tl,ad as nl,T as J,W as sl,ae as q,b4 as ul,b5 as ve,r as le,b6 as il,al as ol,b7 as cl}from"./index-efd76d56.js";function de(e){const c=Math.abs(e);return Math.sign(e)*(c/((1/.501-2)*(1-c)+1))}function fe(e){let{selectedElement:m,containerSize:c,contentSize:v,isRtl:s,currentScrollOffset:h,isHorizontal:t}=e;const r=t?m.clientWidth:m.clientHeight,n=t?m.offsetLeft:m.offsetTop,d=s&&t?v-n-r:n,f=c+h,p=r+d,z=r*.4;return d<=h?h=Math.max(d-z,0):f<=p&&(h=Math.min(h-(f-p-z),v-c)),h}function rl(e){let{selectedElement:m,containerSize:c,contentSize:v,isRtl:s,isHorizontal:h}=e;const t=h?m.clientWidth:m.clientHeight,r=h?m.offsetLeft:m.offsetTop,n=s&&h?v-r-t/2-c/2:r+t/2-c/2;return Math.min(v-c,Math.max(0,n))}const vl=Symbol.for("vuetify:v-slide-group"),Ve=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:vl},nextIcon:{type:U,default:"$next"},prevIcon:{type:U,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ae(),..._e(),...te(),...me({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),pe=ee()({name:"VSlideGroup",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:c}=m;const{isRtl:v}=Te(),{displayClasses:s,mobile:h}=Me(e),t=he(e,e.symbol),r=D(!1),n=D(0),d=D(0),f=D(0),p=b(()=>e.direction==="horizontal"),{resizeRef:z,contentRect:x}=oe(),{resizeRef:g,contentRect:w}=oe(),u=b(()=>t.selected.value.length?t.items.value.findIndex(l=>l.id===t.selected.value[0]):-1),k=b(()=>t.selected.value.length?t.items.value.findIndex(l=>l.id===t.selected.value[t.selected.value.length-1]):-1);if(Oe){let l=-1;ye(()=>[t.selected.value,x.value,w.value,p.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(x.value&&w.value){const o=p.value?"width":"height";d.value=x.value[o],f.value=w.value[o],r.value=d.value+1<f.value}if(u.value>=0&&g.value){const o=g.value.children[k.value];u.value===0||!r.value?n.value=0:e.centerActive?n.value=rl({selectedElement:o,containerSize:d.value,contentSize:f.value,isRtl:v.value,isHorizontal:p.value}):r.value&&(n.value=fe({selectedElement:o,containerSize:d.value,contentSize:f.value,isRtl:v.value,currentScrollOffset:n.value,isHorizontal:p.value}))}})})}const B=D(!1);let I=0,_=0;function G(l){const o=p.value?"clientX":"clientY";_=(v.value&&p.value?-1:1)*n.value,I=l.touches[0][o],B.value=!0}function H(l){if(!r.value)return;const o=p.value?"clientX":"clientY",V=v.value&&p.value?-1:1;n.value=V*(_+I-l.touches[0][o])}function S(l){const o=f.value-d.value;n.value<0||!r.value?n.value=0:n.value>=o&&(n.value=o),B.value=!1}function R(){z.value&&(z.value[p.value?"scrollLeft":"scrollTop"]=0)}const i=D(!1);function y(l){if(i.value=!0,!(!r.value||!g.value)){for(const o of l.composedPath())for(const V of g.value.children)if(V===o){n.value=fe({selectedElement:V,containerSize:d.value,contentSize:f.value,isRtl:v.value,currentScrollOffset:n.value,isHorizontal:p.value});return}}}function A(l){i.value=!1}function $(l){var o;!i.value&&!(l.relatedTarget&&((o=g.value)!=null&&o.contains(l.relatedTarget)))&&C()}function K(l){g.value&&(p.value?l.key==="ArrowRight"?C(v.value?"prev":"next"):l.key==="ArrowLeft"&&C(v.value?"next":"prev"):l.key==="ArrowDown"?C("next"):l.key==="ArrowUp"&&C("prev"),l.key==="Home"?C("first"):l.key==="End"&&C("last"))}function C(l){var o,V,W,X,P;if(g.value)if(!l)(o=Ee(g.value)[0])==null||o.focus();else if(l==="next"){const O=(V=g.value.querySelector(":focus"))==null?void 0:V.nextElementSibling;O?O.focus():C("first")}else if(l==="prev"){const O=(W=g.value.querySelector(":focus"))==null?void 0:W.previousElementSibling;O?O.focus():C("last")}else l==="first"?(X=g.value.firstElementChild)==null||X.focus():l==="last"&&((P=g.value.lastElementChild)==null||P.focus())}function T(l){const o=n.value+(l==="prev"?-1:1)*d.value;n.value=Ge(o,0,f.value-d.value)}const E=b(()=>{let l=n.value>f.value-d.value?-(f.value-d.value)+de(f.value-d.value-n.value):-n.value;n.value<=0&&(l=de(-n.value));const o=v.value&&p.value?-1:1;return{transform:`translate${p.value?"X":"Y"}(${o*l}px)`,transition:B.value?"none":"",willChange:B.value?"transform":""}}),M=b(()=>({next:t.next,prev:t.prev,select:t.select,isSelected:t.isSelected})),F=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!h.value;case!0:return r.value||Math.abs(n.value)>0;case"mobile":return h.value||r.value||Math.abs(n.value)>0;default:return!h.value&&(r.value||Math.abs(n.value)>0)}}),N=b(()=>Math.abs(n.value)>0),j=b(()=>f.value>Math.abs(n.value)+d.value);return ne(()=>a(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":F.value,"v-slide-group--is-overflowing":r.value},s.value,e.class],style:e.style,tabindex:i.value||t.selected.value.length?-1:0,onFocus:$},{default:()=>{var l,o,V;return[F.value&&a("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!N.value}],onClick:()=>N.value&&T("prev")},[((l=c.prev)==null?void 0:l.call(c,M.value))??a(ue,null,{default:()=>[a(L,{icon:v.value?e.nextIcon:e.prevIcon},null)]})]),a("div",{key:"container",ref:z,class:"v-slide-group__container",onScroll:R},[a("div",{ref:g,class:"v-slide-group__content",style:E.value,onTouchstartPassive:G,onTouchmovePassive:H,onTouchendPassive:S,onFocusin:y,onFocusout:A,onKeydown:K},[(o=c.default)==null?void 0:o.call(c,M.value)])]),F.value&&a("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!j.value}],onClick:()=>j.value&&T("next")},[((V=c.next)==null?void 0:V.call(c,M.value))??a(ue,null,{default:()=>[a(L,{icon:v.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:t.selected,scrollTo:T,scrollOffset:n,focus:C}}}),Ie=Symbol.for("vuetify:v-chip-group"),dl=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:$e},...Ve(),...ae(),...me({selectedClass:"v-chip--selected"}),...te(),...ke(),...be({variant:"tonal"})},"VChipGroup");ee()({name:"VChipGroup",props:dl(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:c}=m;const{themeClasses:v}=ge(e),{isSelected:s,select:h,next:t,prev:r,selected:n}=he(e,Ie);return De({VChip:{color:Z(e,"color"),disabled:Z(e,"disabled"),filter:Z(e,"filter"),variant:Z(e,"variant")}}),ne(()=>{const d=pe.filterProps(e);return a(pe,Y(d,{class:["v-chip-group",{"v-chip-group--column":e.column},v.value,e.class],style:e.style}),{default:()=>{var f;return[(f=c.default)==null?void 0:f.call(c,{isSelected:s,select:h,next:t,prev:r,selected:n.value})]}})}),{}}});const fl=Q({activeClass:String,appendAvatar:String,appendIcon:U,closable:Boolean,closeIcon:{type:U,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ce(),onClickOnce:ce(),...Le(),...ae(),...He(),...Ne(),...je(),...Xe(),...Ue(),...Ye(),...te({tag:"span"}),...ke(),...be({variant:"tonal"})},"VChip"),pl=ee()({name:"VChip",directives:{Ripple:qe},props:fl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:c,emit:v,slots:s}=m;const{t:h}=Se(),{borderClasses:t}=Ke(e),{colorClasses:r,colorStyles:n,variantClasses:d}=We(e),{densityClasses:f}=Ze(e),{elevationClasses:p}=Je(e),{roundedClasses:z}=Qe(e),{sizeClasses:x}=el(e),{themeClasses:g}=ge(e),w=Ce(e,"modelValue"),u=ll(e,Ie,!1),k=al(e,c),B=b(()=>e.link!==!1&&k.isLink.value),I=b(()=>!e.disabled&&e.link!==!1&&(!!u||e.link||k.isClickable.value)),_=b(()=>({"aria-label":h(e.closeLabel),onClick(S){S.stopPropagation(),w.value=!1,v("click:close",S)}}));function G(S){var R;v("click",S),I.value&&((R=k.navigate)==null||R.call(k,S),u==null||u.toggle())}function H(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),G(S))}return()=>{const S=k.isLink.value?"a":e.tag,R=!!(e.appendIcon||e.appendAvatar),i=!!(R||s.append),y=!!(s.close||e.closable),A=!!(s.filter||e.filter)&&u,$=!!(e.prependIcon||e.prependAvatar),K=!!($||s.prepend),C=!u||u.isSelected.value;return w.value&&re(a(S,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":I.value,"v-chip--filter":A,"v-chip--pill":e.pill},g.value,t.value,C?r.value:void 0,f.value,p.value,z.value,x.value,d.value,u==null?void 0:u.selectedClass.value,e.class],style:[C?n.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:k.href.value,tabindex:I.value?0:void 0,onClick:G,onKeydown:I.value&&!B.value&&H},{default:()=>{var T;return[nl(I.value,"v-chip"),A&&a(Fe,{key:"filter"},{default:()=>[re(a("div",{class:"v-chip__filter"},[s.filter?a(J,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},s.filter):a(L,{key:"filter-icon",icon:e.filterIcon},null)]),[[sl,u.isSelected.value]])]}),K&&a("div",{key:"prepend",class:"v-chip__prepend"},[s.prepend?a(J,{key:"prepend-defaults",disabled:!$,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},s.prepend):a(q,null,[e.prependIcon&&a(L,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),a("div",{class:"v-chip__content","data-no-activator":""},[((T=s.default)==null?void 0:T.call(s,{isSelected:u==null?void 0:u.isSelected.value,selectedClass:u==null?void 0:u.selectedClass.value,select:u==null?void 0:u.select,toggle:u==null?void 0:u.toggle,value:u==null?void 0:u.value.value,disabled:e.disabled}))??e.text]),i&&a("div",{key:"append",class:"v-chip__append"},[s.append?a(J,{key:"append-defaults",disabled:!R,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},s.append):a(q,null,[e.appendIcon&&a(L,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),y&&a("button",Y({key:"close",class:"v-chip__close",type:"button"},_.value),[s.close?a(J,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},s.close):a(L,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[tl("ripple"),I.value&&e.ripple,null]])}}}),ml=Q({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...ze({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ul(e).every(m=>m!=null&&typeof m=="object")},...Pe({clearable:!0})},"VFileInput"),bl=ee()({name:"VFileInput",inheritAttrs:!1,props:ml(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:c,emit:v,slots:s}=m;const{t:h}=Se(),t=Ce(e,"modelValue"),{isFocused:r,focus:n,blur:d}=Ae(e),f=b(()=>typeof e.showSize!="boolean"?e.showSize:void 0),p=b(()=>(t.value??[]).reduce((i,y)=>{let{size:A=0}=y;return i+A},0)),z=b(()=>ve(p.value,f.value)),x=b(()=>(t.value??[]).map(i=>{const{name:y="",size:A=0}=i;return e.showSize?`${y} (${ve(A,f.value)})`:y})),g=b(()=>{var y;const i=((y=t.value)==null?void 0:y.length)??0;return e.showSize?h(e.counterSizeString,i,z.value):h(e.counterString,i)}),w=le(),u=le(),k=le(),B=b(()=>r.value||e.active),I=b(()=>["plain","underlined"].includes(e.variant));function _(){var i;k.value!==document.activeElement&&((i=k.value)==null||i.focus()),r.value||n()}function G(i){var y;(y=k.value)==null||y.click()}function H(i){v("mousedown:control",i)}function S(i){var y;(y=k.value)==null||y.click(),v("click:control",i)}function R(i){i.stopPropagation(),_(),ol(()=>{t.value=[],cl(e["onClick:clear"],i)})}return ye(t,i=>{(!Array.isArray(i)||!i.length)&&k.value&&(k.value.value="")}),ne(()=>{const i=!!(s.counter||e.counter),y=!!(i||s.details),[A,$]=il(c),{modelValue:K,...C}=se.filterProps(e),T=xe(e);return a(se,Y({ref:w,modelValue:t.value,"onUpdate:modelValue":E=>t.value=E,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":I.value},e.class],style:e.style,"onClick:prepend":G},A,C,{centerAffix:!I.value,focused:r.value}),{...s,default:E=>{let{id:M,isDisabled:F,isDirty:N,isReadonly:j,isValid:l}=E;return a(we,Y({ref:u,"prepend-icon":e.prependIcon,onMousedown:H,onClick:S,"onClick:clear":R,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},T,{id:M.value,active:B.value||N.value,dirty:N.value,disabled:F.value,focused:r.value,error:l.value===!1}),{...s,default:o=>{var X;let{props:{class:V,...W}}=o;return a(q,null,[a("input",Y({ref:k,type:"file",readonly:j.value,disabled:F.value,multiple:e.multiple,name:e.name,onClick:P=>{P.stopPropagation(),j.value&&P.preventDefault(),_()},onChange:P=>{if(!P.target)return;const O=P.target;t.value=[...O.files??[]]},onFocus:_,onBlur:d},W,$),null),a("div",{class:V},[!!((X=t.value)!=null&&X.length)&&(s.selection?s.selection({fileNames:x.value,totalBytes:p.value,totalBytesReadable:z.value}):e.chips?x.value.map(P=>a(pl,{key:P,size:"small",color:e.color},{default:()=>[P]})):x.value.join(", "))])])}})},details:y?E=>{var M,F;return a(q,null,[(M=s.details)==null?void 0:M.call(s,E),i&&a(q,null,[a("span",null,null),a(Re,{active:!!((F=t.value)!=null&&F.length),value:g.value},s.counter)])])}:void 0})}),Be({},w,u,k)}});export{bl as V};
