var I=Object.defineProperty,N=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&g(e,n,t[n]);if(M)for(var n of M(t))E.call(t,n)&&g(e,n,t[n]);return e},k=(e,t)=>N(e,T(t));import{_ as R,d as S,u as j,e as q,M as z,r as H,w as K,Y as O,o as Y,t as A,f as l,F as _,j as a,h as s,l as C,L as p,i as c,H as m,I as w,g as v,O as B}from"./index.d8cb7a6e.js";const G=S({setup(){const e=j(),t=q(),n=z(!1),d=H({version:""});K(()=>e.systemId,r=>{var u;d.displayMenuTree=(u=e.menuList.find(i=>i.Key===r))==null?void 0:u.MenuList},{immediate:!0,deep:!0});const h=O(()=>t.path),y=()=>{const r={code:200,message:"success",data:{code:"0.1.012",updateDate:"2021.76.18",description:""}};d.version=r.data.code};return Y(()=>{y()}),k(b({},A(d)),{activeMenu:h,isCollapse:n})}}),J={class:"menu-container"},P={class:"version"};function Q(e,t,n,d,h,y){const r=c("location"),u=c("el-icon"),i=c("el-menu-item"),V=c("el-sub-menu"),L=c("document"),$=c("el-menu"),F=c("el-scrollbar");return l(),_("div",J,[a(F,{class:"scroll-wrap",noresize:!1,"view-style":"{ height: '100%' }"},{default:s(()=>[a($,{"default-active":e.activeMenu,"unique-opened":!0,router:"","background-color":"#0F2144","text-color":"#B7BECC",collapse:e.isCollapse,"active-text-color":"#fff"},{default:s(()=>[(l(!0),_(m,null,w(e.displayMenuTree,o=>{var x;return l(),_(m,null,[(x=o.children)!=null&&x.length?(l(),v(V,{index:o.path,key:o.id},{title:s(()=>[a(u,null,{default:s(()=>[a(r)]),_:1}),C("span",null,p(o.title),1)]),default:s(()=>[(l(!0),_(m,null,w(o.children,f=>(l(),v(i,{style:{border:"0",float:"left",width:"100%"},index:f.path,key:f.id},{default:s(()=>[a(u,null,{default:s(()=>[a(r)]),_:1}),B(" "+p(f.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(l(),v(i,{key:o.path,index:o.path},{title:s(()=>[B(p(o.title),1)]),default:s(()=>[a(u,null,{default:s(()=>[a(L)]),_:1})]),_:2},1032,["index"]))],64)}),256))]),_:1},8,["default-active","collapse"])]),_:1}),C("div",P,"V"+p(e.version),1)])}var X=R(G,[["render",Q],["__scopeId","data-v-4bde8822"]]);export{X as default};