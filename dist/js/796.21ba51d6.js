"use strict";(self["webpackChunkwhispers"]=self["webpackChunkwhispers"]||[]).push([[796],{9790:function(e,s,t){t.d(s,{Z:function(){return W}});var a=t(3396),n=t(7139),i=t(9574);const r={class:"navbar-logo"},o=(0,a._)("img",{src:i,alt:"Whispers Logo"},null,-1),l=(0,a._)("span",{class:"bar"},null,-1),c=(0,a._)("span",{class:"bar"},null,-1),u=(0,a._)("span",{class:"bar"},null,-1),g=[l,c,u],m=(0,a._)("div",{class:"nav-item"},[(0,a._)("i",{class:"bx-fw bx bxs-home"}),(0,a._)("span",{class:"text-link"},"Home")],-1),d=(0,a._)("div",{class:"nav-item"},[(0,a._)("i",{class:"bx-fw bx bxs-chat"}),(0,a._)("span",{class:"text-link"},"Messages")],-1),p={class:"nav-link"},v=(0,a._)("i",{class:"bx-fw bx bx-log-out"},null,-1),h=(0,a.Uk)(),w=(0,a._)("span",{class:"logout-text"},"Log out",-1),f=[v,h,w];function b(e,s,t,i,l,c){const u=(0,a.up)("router-link"),v=(0,a.up)("NavSocial");return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["v-navbar w-100",{user:t.isUser}])},[(0,a._)("div",r,[(0,a.Wm)(u,{to:"/home"},{default:(0,a.w5)((()=>[o])),_:1}),t.isUser?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,n.C_)(["hamburger-menu",{open:i.isOpen}]),onClick:s[0]||(s[0]=(...e)=>i.openNav&&i.openNav(...e))},g,2)):(0,a.kq)("",!0)]),t.isUser?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,n.C_)(["nav-items",{open:i.isOpen}])},[(0,a.Wm)(u,{to:"/home",class:"nav-link"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(u,{to:"/"+t.msgId,class:"nav-link"},{default:(0,a.w5)((()=>[d])),_:1},8,["to"]),(0,a._)("div",p,[(0,a._)("button",{class:"btn-logout",onClick:s[1]||(s[1]=(...e)=>i.Logout&&i.Logout(...e))},f)]),(0,a.Wm)(v)],2)):(0,a.kq)("",!0),t.isUser?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"sbtn btn-create",onClick:s[2]||(s[2]=s=>e.$router.push("/register"))}," Create Whispers "))],2)}t(6056);var _=t(4870),k=t(65),x=t.p+"img/instagram.6f218904.svg",y=t.p+"img/github.106e3d84.svg",C=t.p+"img/twitter.9c453a6e.svg";const O={class:"nav-social nav-link d-lg-none"},S=(0,a.uE)('<a href="https://www.instagram.com/difazl/" class="-nav-sm instagram"><img src="'+x+'" alt="Instagram"></a><a href="https://github.com/radhifazl" class="-nav-sm github"><img src="'+y+'" alt="GitHub"></a><a href="https://twitter.com/radhiffazli" class="-nav-sm twitter"><img src="'+C+'" alt="Twitter"></a>',3),U=[S];function B(e,s,t,n,i,r){return(0,a.wg)(),(0,a.iD)("div",O,U)}var D={name:"NavSocial"},I=t(89);const M=(0,I.Z)(D,[["render",B]]);var T=M,H=t(8246),L={components:{NavSocial:T},name:"NavbarComp ",props:{isUser:{type:Boolean,default:!1},msgId:{type:String,default:""}},setup(){const e=(0,_.iH)(!1),s=(0,k.oR)(),t=()=>{e.value?e.value=!1:e.value=!0},a=async()=>{await s.dispatch("logout").then((()=>{H.F.fire({icon:"success",text:"Log out successfull"})}))};return{Logout:a,openNav:t,isOpen:e}}};const N=(0,I.Z)(L,[["render",b]]);var W=N},8874:function(e,s,t){t.r(s),t.d(s,{default:function(){return E}});var a=t(3396),n=t(7139),i=t(9242);const r={class:"messages-page ccontainer"},o={class:"messages-wrapper p-4 mx-auto"},l={class:"form-wrapper mb-4"},c=(0,a.Uk)("Send a message to "),u={class:"name"},g={class:"messages-list"},m={class:"message-title"},d=(0,a.Uk)("Timeline of "),p={class:"name"},v={class:"message-content"},h={class:"message-text"},w=["onClick"],f=(0,a._)("i",{class:"bx-fw bx bxs-chevron-right"},null,-1),b=(0,a.Uk)(),_=(0,a._)("span",null,"Check Replies",-1),k=[f,b,_],x=["onClick"],y=(0,a._)("i",{class:"bx bxs-trash"},null,-1),C=[y];function O(e,s,t,f,b,_){const y=(0,a.up)("Navbar"),O=(0,a.up)("SendButton");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(y,{isUser:!!f.isLoggedIn,msgId:f.id},null,8,["isUser","msgId"]),(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("h2",null,[c,(0,a._)("span",u,(0,n.zw)(f.whispersOwner),1)]),(0,a._)("p",null,(0,n.zw)(f.whispersOwner)+" will never know who sent this message",1),(0,a._)("form",{id:"form-msg",onSubmit:s[1]||(s[1]=(0,i.iM)(((...e)=>f.sendMessage&&f.sendMessage(...e)),["prevent"]))},[(0,a.wy)((0,a._)("textarea",{name:"message",class:"message-area",placeholder:"Write secret message","onUpdate:modelValue":s[0]||(s[0]=e=>f.message=e),maxlength:"155"},null,512),[[i.nr,f.message]]),(0,a.Wm)(O)],32)]),(0,a._)("div",g,[(0,a._)("div",m,[(0,a._)("h4",null,[d,(0,a._)("span",p,(0,n.zw)(f.whispersOwner),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.messages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"message mb-3",key:e.id},[(0,a._)("div",v,[(0,a._)("div",h,[(0,a._)("p",null,(0,n.zw)(e.message),1)]),(0,a._)("div",{class:"check mt-3",onClick:s=>f.checkReplies(e.id)},k,8,w)]),f.isLoggedIn?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"delete",onClick:s=>f.deleteMessage(e.id)},C,8,x)):(0,a.kq)("",!0)])))),128))])])])])}var S=t(4870),U=t(6056),B=t(6035),D=t(9790),I=t(2483);const M={class:"btn-send w-100 mt-3",type:"submit"},T=(0,a._)("i",{class:"bx-fw bx bxs-send"},null,-1),H=(0,a.Uk)(" Send Message "),L=[T,H];function N(e,s,t,n,i,r){return(0,a.wg)(),(0,a.iD)("button",M,L)}var W={name:"SendButton"},z=t(89);const Z=(0,z.Z)(W,[["render",N]]);var K=Z,Y=t(2492),J=t.n(Y),R=t(9601),q={components:{Navbar:D.Z,SendButton:K},name:"MessagePage",setup(){const e=(0,S.iH)(!1),s=(0,S.iH)(""),t=(0,I.yj)().params.id,n=(0,S.iH)(""),i=(0,S.iH)([]),r=(0,S.iH)(""),o=(localStorage.getItem("whispers_id"),async()=>{await(0,B.QT)((0,B.JU)(U.db,"users",t)).then((e=>{r.value=e.data().whisp_id}))}),l=async()=>{const e=(0,B.hJ)(U.db,"users",t,"messages"),s=(0,B.IO)(e,(0,B.Xo)("createdAt","asc"));(0,B.cf)(s,(e=>{i.value=[],e.docs.forEach((e=>{i.value.push({id:e.id,...e.data()})}))}))},c=async e=>{R.Z.push({name:"RepliesPage",params:{id:t,msgId:e}})},u=async()=>{await(0,B.QT)((0,B.JU)(U.db,"users",t)).then((e=>{s.value=e.data().whisp_name}))};function g(e){function s(e){return e.toString().padStart(2,"0")}const t=s(e.getDate())+"-"+s(e.getMonth()+1)+"-"+e.getFullYear(),a=t;return a}const m=async()=>{if(n.value)try{await(0,B.ET)((0,B.hJ)(U.db,"users",t,"messages"),{message:n.value,createdAt:(0,B.Bt)(),date:g(new Date)}).then((()=>{J().fire({title:"Message sent!",text:"Your message has been sent",icon:"success",confirmButtonText:"OK"}),n.value=""}))}catch(e){J().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}else J().fire({title:"Oops...",text:"You need to write a message",icon:"error",confirmButtonText:"OK"})},d=e=>{J().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((async s=>{if(s.isConfirmed)try{const s=(0,B.JU)(U.db,"users",t,"messages",e);await(0,B.oe)(s).then((()=>{J().fire({title:"Deleted!",text:"Message has been deleted",icon:"success",confirmButtonText:"OK"})})).finally((()=>{l()}))}catch(a){J().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}}))},p=()=>{U.I.onAuthStateChanged((s=>{e.value=!!s}))};return(0,a.bv)((()=>{o(),u(),l(),p()})),{isLoggedIn:e,whispersOwner:s,message:n,sendMessage:m,messages:i,checkReplies:c,deleteMessage:d,id:r}}};const A=(0,z.Z)(q,[["render",O]]);var E=A}}]);
//# sourceMappingURL=796.21ba51d6.js.map