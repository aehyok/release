var H=Object.defineProperty,U=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var I=(e,o,s)=>o in e?H(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,w=(e,o)=>{for(var s in o||(o={}))R.call(o,s)&&I(e,s,o[s]);if(F)for(var s of F(o))T.call(o,s)&&I(e,s,o[s]);return e},D=(e,o)=>U(e,j(o));import{d as B,r as $,o as J,t as E,_ as S,i as r,f as _,g as N,h as t,j as n,F as C,I as A,H as L,O as u,l as i,L as f,E as P,u as q,M as z,w as G,J as K,P as Q}from"./index.3d393e75.js";import{U as W}from"./update-password.14f21e91.js";import"./index.5ed7e504.js";const X=B({name:"Version",props:{versionDialogVisible:{type:Boolean,default:!1}},emits:["cancel"],setup(e,o){const s=$({visible:e.versionDialogVisible,closeOnClickModal:!1,versions:[]});J(()=>{console.log("sssss")});const m=()=>{o.emit("cancel")};return D(w({},E(s)),{close:m})}}),Y={style:{width:"150px"}},Z={style:{width:"100px"}},x=u("\u8FD4\u56DE");function ee(e,o,s,m,h,k){const g=r("el-button"),l=r("el-dialog");return _(),N(l,{title:"\u7248\u672C\u4FE1\u606F",modelValue:e.visible,"onUpdate:modelValue":o[0]||(o[0]=d=>e.visible=d),width:"400px","close-on-click-modal":e.closeOnClickModal,"append-to-body":!0,onClose:e.close},{footer:t(()=>[n(g,{onClick:e.close},{default:t(()=>[x]),_:1},8,["onClick"])]),default:t(()=>[(_(!0),C(L,null,A(e.versions,d=>(_(),C("div",{style:{display:"flex",margin:"20px"},key:d.key},[i("div",Y,f(d.key)+": ",1),i("div",Z,f(d.value),1)]))),128))]),_:1},8,["modelValue","close-on-click-modal","onClose"])}var oe=S(X,[["render",ee],["__scopeId","data-v-4574cbce"]]);const se=B({name:"Header",components:{UpdatePassword:W,Version:oe},setup(){const{proxy:e}=K(),o=P(),s=q();let m="";const h=localStorage.getItem("token");h!=null&&(m=JSON.parse(h).nickName);const k=()=>{console.log("collapse")},g=z(null),l=$({updateDialogVisible:!1,logoImage:"images/home/icon_logo.png",avatorImage:"images/avator.png",userName:m,versionDialogVisible:!1});l.systemInfo=s.currentSystem;const d=s.systemList,p=a=>{s.changeSystem(a.systemId),l.systemInfo=a,o.push(a.path),console.log(s.systemId,"store.systemId")},y=()=>{o.push("/home")},v=async()=>{Q().then(a=>{a.code===200&&(localStorage.clear(),o.push("/login"))})},V=()=>{e.$confirm("\u8BF7\u95EE\u662F\u5426\u9000\u51FA\u767B\u5F55?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{v()}).catch(()=>!1)},b=a=>{a==="a"?l.updateDialogVisible=!0:a==="c"?l.versionDialogVisible=!0:V()},c=()=>{l.updateDialogVisible=!1},M=()=>{l.versionDialogVisible=!1},O=a=>{s.commit("header",a)};return G(()=>s.currentSystem,a=>{l.systemInfo=a},{deep:!0}),D(w({},E(l)),{childSystemList:d,changeSystem:p,backHome:y,close:c,closeVersion:M,checkLoginOut:V,handleCommand:b,selectMenu:O,updateForm:g,collapseClick:k})}}),ne={class:"app-header"},te={class:"app-header-left"},le=["src"],ae={class:"app-header-title"},ie={class:"header-right"},ce={class:"common-right"},de={class:"color",style:{display:"flex","align-items":"center","justify-content":"center"}},re=u(" \u5207\u6362\u7CFB\u7EDF"),ue={class:"common-right"},me=["src"],pe={class:"color",style:{display:"flex","align-items":"center","justify-content":"center"}},_e=u("\u4FEE\u6539\u5BC6\u7801"),ge=u("\u7248\u672C\u4FE1\u606F"),fe=u("\u5B89\u5168\u9000\u51FA");function he(e,o,s,m,h,k){const g=r("Fold"),l=r("el-icon"),d=r("ArrowRight"),p=r("el-dropdown-item"),y=r("el-dropdown-menu"),v=r("el-dropdown"),V=r("update-password"),b=r("Version");return _(),C("div",ne,[i("div",te,[i("img",{src:e.logoImage,alt:""},null,8,le),i("span",ae,f(e.systemInfo.title),1),n(l,{onClick:e.collapseClick},{default:t(()=>[n(g)]),_:1},8,["onClick"])]),i("div",ie,[i("div",{class:"common-right color",onClick:o[0]||(o[0]=(...c)=>e.backHome&&e.backHome(...c))},"\u8FD4\u56DE\u4E3B\u9875"),i("div",ce,[n(v,{onCommand:e.changeSystem},{dropdown:t(()=>[n(y,null,{default:t(()=>[(_(!0),C(L,null,A(e.childSystemList,c=>(_(),N(p,{command:c,key:c},{default:t(()=>[u(f(c.title),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:t(()=>[i("span",de,[re,n(l,null,{default:t(()=>[n(d)]),_:1})])]),_:1},8,["onCommand"])]),i("div",ue,[i("img",{src:e.avatorImage,alt:"",style:{width:"18.5pt",height:"18.5pt","padding-right":"5px","border-radius":"4px"}},null,8,me),n(v,{onCommand:e.handleCommand},{dropdown:t(()=>[n(y,null,{default:t(()=>[n(p,{command:"a"},{default:t(()=>[_e]),_:1}),n(p,{command:"c"},{default:t(()=>[ge]),_:1}),n(p,{command:"b"},{default:t(()=>[fe]),_:1})]),_:1})]),default:t(()=>[i("span",pe,[u(f(e.userName)+" ",1),n(l,null,{default:t(()=>[n(d)]),_:1})])]),_:1},8,["onCommand"])])]),n(V,{modelValue:e.updateDialogVisible,"onUpdate:modelValue":o[1]||(o[1]=c=>e.updateDialogVisible=c),onCancel:e.close},null,8,["modelValue","onCancel"]),n(b,{modelValue:e.versionDialogVisible,"onUpdate:modelValue":o[2]||(o[2]=c=>e.versionDialogVisible=c),onCancel:e.closeVersion},null,8,["modelValue","onCancel"])])}var ke=S(se,[["render",he],["__scopeId","data-v-a4ce239c"]]);export{ke as default};
