import{d as x,r as a,u as C,o as b,E as w,w as n,i as e,a as t,j as r,k as y,ae as A,_ as S,m as k,ac as N,n as V}from"./index.5ffe9efb.js";const q=t("span",null,"NaiveUiAdmin@163.com",-1),U=t("span",null,"NaiveUiAdmin@qq.com",-1),j=t("span",null,"Ah jung",-1),R=t("span",null,"\uFFE51980",-1),T={style:{"margin-left":"80px"}},z=x({__name:"Step2",emits:["prevStep","nextStep"],setup($,{emit:m}){const s=a(null),d=C(),l=a(!1),o=a({password:"086611"}),f={password:{required:!0,message:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801",trigger:"blur"}},_=m;function g(){_("prevStep")}function v(){l.value=!0,s.value.validate(p=>{p?d.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):setTimeout(()=>{_("nextStep")},1500)})}return(p,c)=>{const u=y,B=A,h=S,i=k,E=N,D=V;return b(),w(D,{"label-width":90,model:o.value,rules:f,"label-placement":"left",ref_key:"form2Ref",ref:s,style:{"max-width":"500px",margin:"40px auto 0 80px"}},{default:n(()=>[e(u,{label:"\u4ED8\u6B3E\u8D26\u6237",path:"myAccount"},{default:n(()=>[q]),_:1}),e(u,{label:"\u6536\u6B3E\u8D26\u6237",path:"account"},{default:n(()=>[U]),_:1}),e(u,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",path:"name"},{default:n(()=>[j]),_:1}),e(u,{label:"\u8F6C\u8D26\u91D1\u989D",path:"money"},{default:n(()=>[R]),_:1}),e(B),e(u,{label:"\u652F\u4ED8\u5BC6\u7801",path:"password"},{default:n(()=>[e(h,{type:"password",value:o.value.password,"onUpdate:value":c[0]||(c[0]=F=>o.value.password=F)},null,8,["value"])]),_:1}),t("div",T,[e(E,null,{default:n(()=>[e(i,{type:"primary",loading:l.value,onClick:v},{default:n(()=>[r("\u63D0\u4EA4")]),_:1},8,["loading"]),e(i,{onClick:g},{default:n(()=>[r("\u4E0A\u4E00\u6B65")]),_:1})]),_:1})])]),_:1},8,["model"])}}});export{z as _};
