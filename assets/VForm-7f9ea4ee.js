import{v as p,F as v,y as b,r as F,C as y,g as V}from"./index-efd76d56.js";import{k as h,l as R}from"./VTextField-fd77a9c9.js";import{f as k}from"./VGrid-02b50634.js";const P=p({...v(),...h()},"VForm"),S=b()({name:"VForm",props:P(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=R(r),s=F();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return y(()=>{var t;return V("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),k(a,s)}});export{S as V};