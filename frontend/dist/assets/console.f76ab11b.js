var se=Object.defineProperty;var U=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var R=(t,e,n)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,W=(t,e)=>{for(var n in e||(e={}))le.call(e,n)&&R(t,n,e[n]);if(U)for(var n of U(e))oe.call(e,n)&&R(t,n,e[n]);return t};var q=(t,e,n)=>new Promise((r,d)=>{var p=w=>{try{m(n.next(w))}catch(f){d(f)}},x=w=>{try{m(n.throw(w))}catch(f){d(f)}},m=w=>w.done?r(w.value):Promise.resolve(w.value).then(p,x);m((n=n.apply(t,e)).next())});import{d as b,o as l,c as _,a,a5 as T,h as u,r as C,ah as H,a_ as ae,aI as ce,a6 as ie,aB as Z,ao as ue,s as re,t as ee,b8 as de,cR as _e,i as o,w as i,j as O,E as v,F as z,v as fe,y as he,N as ve,x as me,cH as pe,cS as xe,cI as we,bW as ge,c2 as ye,a4 as Ve,cT as ke}from"./index.5ffe9efb.js";import ze from"./VisiTab.87940c22.js";import{n as G,i as te,b as be,c as S,d as Oe,e as Ce,f as Fe,g as Be}from"./index.802704e4.js";import"./FluxTrend.318cc819.js";import"./props.2d26c659.js";import"./useDesignSetting.455edd57.js";import"./VisitAmount.a890da16.js";const $e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ee=a("path",{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8c.1-4.4-3.4-8-7.9-8z",fill:"currentColor"},null,-1),je=[Ee],Ie=b({name:"AccountBookOutlined",render:function(e,n){return l(),_("svg",$e,je)}}),Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Le=a("path",{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z",fill:"currentColor"},null,-1),Ne=[Le],Se=b({name:"BarChartOutlined",render:function(e,n){return l(),_("svg",Te,Ne)}}),Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},De=a("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",fill:"currentColor"},null,-1),He=[De],A=b({name:"CaretDownOutlined",render:function(e,n){return l(),_("svg",Ae,He)}}),Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Pe=a("path",{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z",fill:"currentColor"},null,-1),Qe=[Pe],D=b({name:"CaretUpOutlined",render:function(e,n){return l(),_("svg",Me,Qe)}}),Ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Re=a("path",{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z",fill:"currentColor"},null,-1),We=[Re],qe=b({name:"CreditCardOutlined",render:function(e,n){return l(),_("svg",Ue,We)}}),Ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Xe=a("path",{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5l-27.7 21.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5l-42.7 33.2z",fill:"currentColor"},null,-1),Ke=[Xe],Je=b({name:"MailOutlined",render:function(e,n){return l(),_("svg",Ge,Ke)}}),Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ze=a("path",{d:"M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z",fill:"currentColor"},null,-1),et=[Ze],tt=b({name:"ShoppingCartOutlined",render:function(e,n){return l(),_("svg",Ye,et)}}),nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},st=a("path",{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19l19 224.6L477.5 694L233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1 0 67.88-67.89a48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3l-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8l39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z",fill:"currentColor"},null,-1),lt=[st],ot=b({name:"TagsOutlined",render:function(e,n){return l(),_("svg",nt,lt)}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ct=a("path",{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.8-1.7-203.2 89.2-203.2 200c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5z",fill:"currentColor"},null,-1),it=[ct],ut=b({name:"UsergroupAddOutlined",render:function(e,n){return l(),_("svg",at,it)}}),rt=Be?window:void 0,M=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P="__vueuse_ssr_handlers__";M[P]=M[P]||{};M[P];function dt(t,e={}){const{immediate:n=!0,window:r=rt}=e,d=C(!1);let p=0,x=null;function m(s){if(!d.value||!r)return;const c=s-p;t({delta:c,timestamp:s}),p=s,x=r.requestAnimationFrame(m)}function w(){!d.value&&r&&(d.value=!0,x=r.requestAnimationFrame(m))}function f(){d.value=!1,x!=null&&r&&(r.cancelAnimationFrame(x),x=null)}return n&&w(),Ce(f),{isActive:ae(d),pause:f,resume:w}}var X;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(X||(X={}));var _t=Object.defineProperty,K=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,J=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,vt=(t,e)=>{for(var n in e||(e={}))ft.call(e,n)&&J(t,n,e[n]);if(K)for(var n of K(e))ht.call(e,n)&&J(t,n,e[n]);return t};const mt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},pt=vt({linear:te},mt);function xt([t,e,n,r]){const d=(s,c)=>1-3*c+3*s,p=(s,c)=>3*c-6*s,x=s=>3*s,m=(s,c,h)=>((d(c,h)*s+p(c,h))*s+x(c))*s,w=(s,c,h)=>3*d(c,h)*s*s+2*p(c,h)*s+x(c),f=s=>{let c=s;for(let h=0;h<4;++h){const g=w(c,t,n);if(g===0)return c;const F=m(c,t,n)-s;c-=F/g}return c};return s=>t===e&&n===r?s:m(f(s),e,r)}function Y(t,e={}){const{delay:n=0,disabled:r=!1,duration:d=1e3,onFinished:p=G,onStarted:x=G,transition:m=te}=e,w=T(()=>{const y=u(m);return be(y)?y:xt(y)}),f=T(()=>{const y=u(t);return S(y)?y:y.map(u)}),s=T(()=>S(f.value)?[f.value]:f.value),c=C(s.value.slice(0));let h,g,F,$,k;const{resume:B,pause:E}=dt(()=>{const y=Date.now(),I=Fe(1-(F-y)/h,0,1);c.value=k.map((L,N)=>{var Q;return L+((Q=g[N])!=null?Q:0)*w.value(I)}),I>=1&&(E(),p())},{immediate:!1}),j=()=>{E(),h=u(d),g=c.value.map((y,I)=>{var L,N;return((L=s.value[I])!=null?L:0)-((N=c.value[I])!=null?N:0)}),k=c.value.slice(0),$=Date.now(),F=$+h,B(),x()},ne=Oe(j,n,{immediate:!1});return H(s,()=>{u(r)||(u(n)<=0?j():ne.start())},{deep:!0}),H(()=>u(r),y=>{y&&(c.value=s.value.slice(0),E())}),T(()=>{const y=u(r)?s:c;return S(f.value)?y.value[0]:y.value})}function wt(){return ce.request({url:"/dashboard/console",method:"get"})}const gt={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},yt=b({name:"CountTo",props:gt,emits:["onStarted","onFinished"],setup(t,{emit:e}){const n=C(t.startVal),r=C(!1);let d=Y(n);const p=T(()=>f(u(d)));ie(()=>{n.value=t.startVal}),H([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&x()}),Z(()=>{t.autoplay&&x()});function x(){w(),n.value=t.endVal}function m(){n.value=t.startVal,w()}function w(){d=Y(n,W({disabled:r,duration:t.duration,onFinished:()=>e("onFinished"),onStarted:()=>e("onStarted")},t.useEasing?{transition:pt[t.transition]}:{}))}function f(s){if(!s)return"";const{decimals:c,decimal:h,separator:g,suffix:F,prefix:$}=t;s=Number(s).toFixed(c),s+="";const k=s.split(".");let B=k[0];const E=k.length>1?h+k[1]:"",j=/(\d+)(\d{3})/;if(g&&!ue(g))for(;j.test(B);)B=B.replace(j,"$1"+g+"$2");return $+B+E+F}return{value:p,start:x,reset:m}}});function Vt(t,e,n,r,d,p){return l(),_("span",{style:de({color:t.color})},ee(t.value),5)}const kt=re(yt,[["render",Vt]]),V=_e(kt),zt={class:"console"},bt={class:"flex justify-between px-1 py-1"},Ot={class:"flex justify-between px-1 py-1"},Ct={class:"text-sn"},Ft={class:"text-sn"},Bt={class:"flex justify-between"},$t=a("div",{class:"text-sn"}," \u603B\u8BBF\u95EE\u91CF\uFF1A ",-1),Et={class:"text-sn"},jt={class:"flex justify-between px-1 py-1"},It={class:"flex justify-between px-2 py-2"},Tt={class:"flex-1 text-sn"},Lt={class:"flex justify-between"},Nt=a("div",{class:"text-sn"}," \u603B\u9500\u552E\u989D\uFF1A ",-1),St={class:"text-sn"},At={class:"flex justify-between px-1 py-1"},Dt={class:"flex justify-between px-1 py-1"},Ht={class:"text-sn"},Mt={class:"text-sn"},Pt={class:"flex justify-between"},Qt=a("div",{class:"text-sn"}," \u8F6C\u5316\u7387\uFF1A ",-1),Ut={class:"text-sn"},Rt={class:"flex justify-between px-1 py-1"},Wt={class:"flex justify-between px-1 py-1"},qt={class:"text-sn"},Gt={class:"text-sn"},Xt={class:"flex justify-between"},Kt=a("div",{class:"text-sn"}," \u603B\u6210\u4EA4\u989D\uFF1A ",-1),Jt={class:"text-sn"},Yt={class:"mt-4"},Zt={key:1,class:"cursor-pointer"},en={class:"flex justify-center"},tn={class:"flex justify-center"},dn=b({__name:"console",setup(t){const e=C(!0),n=C({}),r=C({}),d=C({}),p=C({}),x=[{icon:ut,size:"32",title:"\u7528\u6237",color:"#69c0ff",eventObject:{click:()=>{}}},{icon:Se,size:"32",title:"\u5206\u6790",color:"#69c0ff",eventObject:{click:()=>{}}},{icon:tt,size:"32",title:"\u5546\u54C1",color:"#ff9c6e",eventObject:{click:()=>{}}},{icon:Ie,size:"32",title:"\u8BA2\u5355",color:"#b37feb",eventObject:{click:()=>{}}},{icon:qe,size:"32",title:"\u7968\u636E",color:"#ffd666",eventObject:{click:()=>{}}},{icon:Je,size:"32",title:"\u6D88\u606F",color:"#5cdbd3",eventObject:{click:()=>{}}},{icon:ot,size:"32",title:"\u6807\u7B7E",color:"#ff85c0",eventObject:{click:()=>{}}},{icon:Ve,size:"32",title:"\u914D\u7F6E",color:"#ffc069",eventObject:{click:()=>{}}}];return Z(()=>q(this,null,function*(){const m=yield wt();n.value=m.visits,r.value=m.saleroom,d.value=m.orderLarge,p.value=m.volume,e.value=!1})),(m,w)=>{const f=he,s=ke,c=ve,h=me,g=pe,F=xe,$=we;return l(),_("div",zt,[o($,{cols:"1 s:2 m:3 l:4 xl:4 2xl:4",responsive:"screen","x-gap":12,"y-gap":8},{default:i(()=>[o(g,null,{default:i(()=>[o(h,{title:"\u8BBF\u95EE\u91CF",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":i(()=>[o(f,{type:"success"},{default:i(()=>[O("\u65E5")]),_:1})]),footer:i(()=>[a("div",Bt,[e.value?(l(),v(s,{key:0,text:"",repeat:2})):(l(),_(z,{key:1},[$t,a("div",Et,[o(u(V),{startVal:1,endVal:n.value.amount},null,8,["endVal"])])],64))])]),default:i(()=>[a("div",bt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),v(u(V),{key:1,startVal:1,endVal:n.value.dayVisits,class:"text-3xl"},null,8,["endVal"]))]),a("div",Ot,[a("div",Ct,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u65E5\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:n.value.rise},null,8,["endVal"]),o(c,{size:"12",color:"#00ff6f"},{default:i(()=>[o(u(D))]),_:1})],64))]),a("div",Ft,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u5468\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:n.value.decline},null,8,["endVal"]),o(c,{size:"12",color:"#ffde66"},{default:i(()=>[o(u(A))]),_:1})],64))])])]),_:1})]),_:1}),o(g,null,{default:i(()=>[o(h,{title:"\u9500\u552E\u989D",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":i(()=>[o(f,{type:"info"},{default:i(()=>[O("\u5468")]),_:1})]),footer:i(()=>[a("div",Lt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[Nt,a("div",St,[o(u(V),{prefix:"\uFFE5",startVal:1,endVal:r.value.amount},null,8,["endVal"])])],64))])]),default:i(()=>[a("div",jt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),v(u(V),{key:1,prefix:"\uFFE5",startVal:1,endVal:r.value.weekSaleroom,class:"text-3xl"},null,8,["endVal"]))]),a("div",It,[a("div",Tt,[o(F,{type:"line",percentage:r.value.degree,"indicator-placement":"inside",processing:""},null,8,["percentage"])])])]),_:1})]),_:1}),o(g,null,{default:i(()=>[o(h,{title:"\u8BA2\u5355\u91CF",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":i(()=>[o(f,{type:"warning"},{default:i(()=>[O("\u5468")]),_:1})]),footer:i(()=>[a("div",Pt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[Qt,a("div",Ut,[o(u(V),{startVal:1,suffix:"%",endVal:d.value.amount},null,8,["endVal"])])],64))])]),default:i(()=>[a("div",At,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),v(u(V),{key:1,startVal:1,endVal:d.value.weekLarge,class:"text-3xl"},null,8,["endVal"]))]),a("div",Dt,[a("div",Ht,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u65E5\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:d.value.rise},null,8,["endVal"]),o(c,{size:"12",color:"#00ff6f"},{default:i(()=>[o(u(D))]),_:1})],64))]),a("div",Mt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u5468\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:d.value.rise},null,8,["endVal"]),o(c,{size:"12",color:"#ffde66"},{default:i(()=>[o(u(A))]),_:1})],64))])])]),_:1})]),_:1}),o(g,null,{default:i(()=>[o(h,{title:"\u6210\u4EA4\u989D",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":i(()=>[o(f,{type:"error"},{default:i(()=>[O("\u6708")]),_:1})]),footer:i(()=>[a("div",Xt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[Kt,a("div",Jt,[o(u(V),{prefix:"\uFFE5",startVal:1,endVal:p.value.amount},null,8,["endVal"])])],64))])]),default:i(()=>[a("div",Rt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),v(u(V),{key:1,prefix:"\uFFE5",startVal:1,endVal:p.value.weekLarge,class:"text-3xl"},null,8,["endVal"]))]),a("div",Wt,[a("div",qt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u6708\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:p.value.rise},null,8,["endVal"]),o(c,{size:"12",color:"#00ff6f"},{default:i(()=>[o(u(D))]),_:1})],64))]),a("div",Gt,[e.value?(l(),v(s,{key:0,width:100,size:"medium"})):(l(),_(z,{key:1},[O(" \u6708\u540C\u6BD4 "),o(u(V),{startVal:1,suffix:"%",endVal:p.value.decline},null,8,["endVal"]),o(c,{size:"12",color:"#ffde66"},{default:i(()=>[o(u(A))]),_:1})],64))])])]),_:1})]),_:1})]),_:1}),a("div",Yt,[o($,{cols:"1 s:2 m:3 l:8 xl:8 2xl:8",responsive:"screen","x-gap":16,"y-gap":8},{default:i(()=>[(l(),_(z,null,fe(x,(k,B)=>o(g,{key:B},{default:i(()=>[o(h,{"content-style":"padding-top: 0;",size:"small",bordered:!1},{footer:i(()=>[e.value?(l(),v(s,{key:0,size:"medium"})):(l(),_("div",Zt,[a("p",en,[a("span",null,[o(c,{size:k.size,class:"flex-1",color:k.color},{default:i(()=>[(l(),v(ge(k.icon),ye(k.eventObject||{}),null,16))]),_:2},1032,["size","color"])])]),a("p",tn,[a("span",null,ee(k.title),1)])]))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),o(ze)])}}});export{dn as default};
