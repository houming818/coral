var Q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var T=(e,u,t)=>u in e?Q(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,b=(e,u)=>{for(var t in u||(u={}))Z.call(u,t)&&T(e,t,u[t]);if(L)for(var t of L(u))ee.call(u,t)&&T(e,t,u[t]);return e},w=(e,u)=>J(e,K(u));var R=(e,u,t)=>new Promise((r,d)=>{var p=s=>{try{n(t.next(s))}catch(f){d(f)}},o=s=>{try{n(t.throw(s))}catch(f){d(f)}},n=s=>s.done?r(s.value):Promise.resolve(s.value).then(p,o);n((t=t.apply(e,u)).next())});import{cQ as $,d as U,c4 as ue,r as A,a5 as S,h as v,o as V,E as oe,aE as te,w as a,i as l,j as h,t as I,aD as N,a as P,az as ne,bz as X,m as Y,ac as W,cG as se,au as le,ah as ae,cM as ce,u as ie,b as re,a8 as de,s as pe,c as fe,x as me,cP as Fe,ae as _e,_ as ge}from"./index.ee5e2f4f.js";import{B as H}from"./BasicForm.cedb506b.js";import{a as Ce}from"./index.a65f2fe4.js";import{u as Be}from"./useForm.60bb8c39.js";import"./propTypes.52fb8214.js";import"./DownOutlined.c3989c19.js";const Ee=w(b({},$.props),{subBtuText:{type:String,default:"\u786E\u8BA4"},showIcon:{type:Boolean,default:!1},width:{type:Number,default:446},title:{type:String,default:""},maskClosable:{type:Boolean,default:!1},preset:{type:String,default:"dialog"}}),y=function(e,u){var t;return e.currentStyle?e.currentStyle[u]:(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null)[u]},i={left:0,top:0,currentX:0,currentY:0,flag:!1},be=function(e,u,t){const r=document.body.clientWidth,d=document.documentElement.clientHeight,p=u.offsetWidth,o=u.offsetHeight,n=u.offsetLeft,s=u.offsetTop,f=r-n-p,g=d-s-o;y(u,"left")!=="auto"&&(i.left=y(u,"left")),y(u,"top")!=="auto"&&(i.top=y(u,"top")),e.onmousedown=function(c){i.flag=!0,c||(c=window.event,e.onselectstart=function(){return!1});const m=c;i.currentX=m.clientX,i.currentY=m.clientY},document.onmouseup=function(){i.flag=!1,y(u,"left")!=="auto"&&(i.left=y(u,"left")),y(u,"top")!=="auto"&&(i.top=y(u,"top"))},document.onmousemove=function(c){const m=c||window.event;if(i.flag){const D=m.clientX,C=m.clientY,B=D-i.currentX,M=C-i.currentY;let E=parseInt(i.left)+B,F=parseInt(i.top)+M;return-E>n?E=-n:E>f&&(E=f),-F>s?F=-s:F>g&&(F=g),u.style.left=E+"px",u.style.top=F+"px",typeof t=="function"&&t((parseInt(i.left)||0)+B,(parseInt(i.top)||0)+M),c.preventDefault&&c.preventDefault(),!1}}},he={class:"w-full cursor-move",id:"basic-modal-bar"},z=U({__name:"basicModal",props:b({},Ee),emits:["on-close","on-ok","register"],setup(e,{emit:u}){const t=ue(),r=e,d=u,p=A(null),o=A(!1),n=A(!1),s=S(()=>b(b({},r),v(p))),f=S(()=>{const{subBtuText:_}=p.value;return _||r.subBtuText});function g(_){return R(this,null,function*(){p.value=se(v(p)||{},_)})}const c=S(()=>b(b(b({},t),v(s)),v(p)));function m(_){n.value=_}function D(){o.value=!0,le(()=>{const _=document.getElementById("basic-modal"),k=document.getElementById("basic-modal-bar");be(k,_)})}function C(){o.value=!1,n.value=!1,d("on-close")}function B(){o.value=!1,d("on-close")}function M(){n.value=!0,d("on-ok")}const E={setProps:g,openModal:D,closeModal:C,setSubLoading:m};return X()&&d("register",E),(_,k)=>{const x=Y,G=W,j=$;return V(),oe(j,ne({id:"basic-modal"},c.value,{show:o.value,"onUpdate:show":k[0]||(k[0]=q=>o.value=q),onClose:B}),te({header:a(()=>[P("div",he,I(c.value.title),1)]),default:a(()=>[N(_.$slots,"default")]),_:2},[_.$slots.action?{name:"action",fn:a(()=>[N(_.$slots,"action")]),key:"1"}:{name:"action",fn:a(()=>[l(G,null,{default:a(()=>[l(x,{onClick:C},{default:a(()=>[h("\u53D6\u6D88")]),_:1}),l(x,{type:"primary",loading:n.value,onClick:M},{default:a(()=>[h(I(f.value),1)]),_:1},8,["loading"])]),_:1})]),key:"0"}]),1040,["show"])}}});function O(e){const u=A(null),t=X(),r=()=>{const o=v(u.value);return o||console.error("useModal instance is undefined!"),o};return[o=>{Ce(()=>{u.value=null}),u.value=o,t==null||t.emit("register",o),ae(()=>e,()=>{e&&o.setProps(ce(e))},{immediate:!0,deep:!0})},{setProps:o=>{var n;(n=r())==null||n.setProps(o)},openModal:()=>{var o;(o=r())==null||o.openModal()},closeModal:()=>{var o;(o=r())==null||o.closeModal()},setSubLoading:o=>{var n;(n=r())==null||n.setSubLoading(o)}}]}const De=[{field:"name",component:"NInput",label:"\u59D3\u540D",labelMessage:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",giProps:{span:1},componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"\u624B\u673A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"\u7C7B\u578B",giProps:{},componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",options:[{label:"\u8212\u9002\u6027",value:1},{label:"\u7ECF\u6D4E\u6027",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"\u9884\u7EA6\u65F6\u95F4",giProps:{},defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"\u505C\u7559\u65F6\u95F4",giProps:{},componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeProject",component:"NCheckbox",label:"\u9884\u7EA6\u9879\u76EE",giProps:{},componentProps:{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u9879\u76EE",options:[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"\u6765\u6E90",giProps:{},componentProps:{options:[{label:"\u7F51\u4E0A",value:1},{label:"\u95E8\u5E97",value:2}],onUpdateChecked:e=>{console.log(e)}}},{field:"status",label:"\u72B6\u6001",giProps:{},slot:"statusSlot"}],Me=U({components:{basicModal:z,BasicForm:H},setup(){const e=A(null),u=ie(),[t,{openModal:r,closeModal:d,setSubLoading:p}]=O({title:"\u65B0\u589E\u9884\u7EA6"}),[o,{openModal:n,closeModal:s,setSubLoading:f}]=O({title:"\u786E\u8BA4\u5BF9\u8BDD\u6846",showIcon:!0,type:"warning",closable:!1,maskClosable:!0}),[g,{submit:c}]=Be({gridProps:{cols:1},collapsedRows:3,labelWidth:120,layout:"horizontal",submitButtonText:"\u63D0\u4EA4\u9884\u7EA6",showActionButtonGroup:!1,schemas:De}),m=re({formValue:{name:"\u5C0F\u9A6C\u54E5"}});function D(){return R(this,null,function*(){const F=yield c();F?(d(),console.log("formRes",F),u.success("\u63D0\u4EA4\u6210\u529F")):(u.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"),p(!1))})}function C(){s(),f(!1)}function B(){n()}function M(){r()}function E(F){console.log(F)}return w(b({},de(m)),{modalRef:e,register:g,modalRegister:t,lightModalRegister:o,handleReset:E,showModal:M,okModal:D,lightOkModal:C,showLightModal:B})}});const ye={class:"n-layout-page-header"},ve=P("br",null,null,-1),Ae=P("p",{class:"text-gray-500",style:{"padding-left":"35px"}},"\u4E00\u4E9B\u5BF9\u8BDD\u6846\u5185\u5BB9",-1);function ke(e,u,t,r,d,p){const o=me,n=Fe,s=_e,f=Y,g=W,c=ge,m=H,D=z;return V(),fe("div",null,[P("div",ye,[l(o,{bordered:!1,title:"\u6A21\u6001\u6846"},{default:a(()=>[h(" \u6A21\u6001\u6846\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u5C55\u793A\u4FE1\u606F\uFF0CModal \u91C7\u7528 Dialog \u9884\u8BBE\uFF0C\u6269\u5C55\u62D6\u62FD\u6548\u679C "),ve,h(" \u4EE5\u4E0B\u662F useModal \u65B9\u5F0F\uFF0Cref\u65B9\u5F0F\uFF0C\u4E5F\u652F\u6301\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u5176\u4ED6\u7EC4\u4EF6\u4E00\u81F4\uFF0C\u5982\uFF1AmodalRef.value.closeModal() ")]),_:1})]),l(o,{bordered:!1,class:"mt-4 proCard"},{default:a(()=>[l(n,{title:"Modal\u5D4C\u5957Form",type:"info"},{default:a(()=>[h(" \u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u5C55\u793A\u548C\u64CD\u4F5C\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u548CForm\u7EC4\u4EF6\uFF0C\u7EC4\u5408\u4F7F\u7528\u65B9\u6CD5 ")]),_:1}),l(s),l(g,null,{default:a(()=>[l(f,{type:"primary",onClick:e.showModal},{default:a(()=>[h("\u6253\u5F00Modal\u5D4C\u5957Form\u4F8B\u5B50")]),_:1},8,["onClick"])]),_:1}),l(s),l(n,{title:"\u4E2A\u6027\u5316\u8F7B\u91CF\u7EA7",type:"info"},{default:a(()=>[h(" \u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u5C55\u793A\u548C\u64CD\u4F5C\uFF0C\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u5B9E\u73B0\u8F7B\u91CF\u7EA7\u6548\u679C\uFF0C\u66F4\u591A\u914D\u7F6E\uFF0C\u8BF7\u53C2\u8003\u6587\u6863 ")]),_:1}),l(s),l(g,null,{default:a(()=>[l(f,{type:"primary",onClick:e.showLightModal},{default:a(()=>[h("\u8F7B\u91CF\u7EA7\u786E\u8BA4")]),_:1},8,["onClick"])]),_:1}),l(s),l(n,{title:"\u63D0\u793A",type:"info"},{default:a(()=>[h(" \u7EC4\u4EF6\u66B4\u9732\u4E86\uFF0CsetProps \u65B9\u6CD5\uFF0C\u7528\u4E8E\u4FEE\u6539\u7EC4\u4EF6\u5185\u90E8 Props\uFF0C\u6BD4\u5982\u6807\u9898\uFF0C\u7B49\uFF0C\u5177\u4F53\u53C2\u8003UI\u6846\u67B6\u6587\u6863\uFF0CDialogReactive Properties ")]),_:1})]),_:1}),l(D,{onRegister:e.modalRegister,ref:"modalRef",class:"basicModal",onOnOk:e.okModal},{default:a(()=>[l(m,{onRegister:e.register,onReset:e.handleReset,class:"basicForm"},{statusSlot:a(({model:C,field:B})=>[l(c,{value:C[B],"onUpdate:value":M=>C[B]=M},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onReset"])]),_:1},8,["onRegister","onOnOk"]),l(D,{onRegister:e.lightModalRegister,class:"basicModalLight",ref:"modalRef",onOnOk:e.lightOkModal},{default:a(()=>[Ae]),_:1},8,["onRegister","onOnOk"])])}const Ie=pe(Me,[["render",ke]]);export{Ie as default};