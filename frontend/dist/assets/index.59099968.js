import{bw as v,ay as D,ar as b,bP as F,r as M,aX as O,aO as C,aV as j,h as A}from"./index.398bca6f.js";var y;const g=typeof window!="undefined",W=e=>typeof e=="function",_=e=>typeof e=="number",E=(e,o,n)=>Math.min(n,Math.max(o,e)),m=()=>{};g&&((y=window==null?void 0:window.navigator)==null?void 0:y.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function d(e){return typeof e=="function"?e():A(e)}function P(e,o){function n(...r){return new Promise((i,t)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(i).catch(t)})}return n}function S(e,o={}){let n,r,i=m;const t=u=>{clearTimeout(u),i(),i=m};return u=>{const a=d(e),s=d(o.maxWait);return n&&t(n),a<=0||s!==void 0&&s<=0?(r&&(t(r),r=null),Promise.resolve(u())):new Promise((c,p)=>{i=o.rejectOnCancel?p:c,s&&!r&&(r=setTimeout(()=>{n&&t(n),r=null,c(u())},s)),n=setTimeout(()=>{r&&t(r),r=null,c(u())},a)})}}function U(e,o=!0,n=!0,r=!1){let i=0,t,l=!0,u=m,a;const s=()=>{t&&(clearTimeout(t),t=void 0,u(),u=m)};return p=>{const f=d(e),h=Date.now()-i,w=()=>a=p();return s(),f<=0?(i=Date.now(),w()):(h>f&&(n||!l)?(i=Date.now(),w()):o&&(a=new Promise((T,x)=>{u=r?x:T,t=setTimeout(()=>{i=Date.now(),l=!0,T(w()),s()},Math.max(0,f-h))})),!n&&!t&&(t=setTimeout(()=>l=!0,f)),l=!1,a)}}function I(e){return e}function R(e){return C()?(j(e),!0):!1}function L(e,o=200,n={}){return P(S(o,n),e)}function N(e,o=200,n=!1,r=!0,i=!1){return P(U(o,n,r,i),e)}function X(e,o=!0){v()?D(e):o?e():b(e)}function k(e){v()&&F(e)}function q(e,o,n={}){const{immediate:r=!0}=n,i=M(!1);let t=null;function l(){t&&(clearTimeout(t),t=null)}function u(){i.value=!1,l()}function a(...s){l(),i.value=!0,t=setTimeout(()=>{i.value=!1,t=null,e(...s)},d(o))}return r&&(i.value=!0,g&&a()),R(u),{isPending:O(i),start:a,stop:u}}export{k as a,W as b,_ as c,q as d,R as e,E as f,g,N as h,I as i,m as n,X as t,L as u};
