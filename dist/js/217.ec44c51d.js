"use strict";(self["webpackChunkwhispers"]=self["webpackChunkwhispers"]||[]).push([[217],{2302:function(e,s,t){t.d(s,{Z:function(){return N}});var n=t(3396),a=t(7139),i=t(9574);const o={class:"v-navbar w-100"},l={class:"navbar-logo"},r=(0,n._)("img",{src:i,alt:"Whispers Logo"},null,-1),c=(0,n._)("span",{class:"bar"},null,-1),u=(0,n._)("span",{class:"bar"},null,-1),m=(0,n._)("span",{class:"bar"},null,-1),d=[c,u,m],g=(0,n._)("div",{class:"nav-item"},[(0,n._)("i",{class:"bx-fw bx bxs-home"}),(0,n._)("span",{class:"text-link"},"Home")],-1),p=(0,n._)("div",{class:"nav-item"},[(0,n._)("i",{class:"bx-fw bx bxs-chat"}),(0,n._)("span",{class:"text-link"},"Messages")],-1),v={class:"nav-link"},h=(0,n._)("i",{class:"bx-fw bx bx-log-out"},null,-1),w=(0,n.Uk)(),f=(0,n._)("span",{class:"logout-text"},"Log out",-1),b=[h,w,f];function x(e,s,t,i,c,u){const m=(0,n.up)("router-link"),h=(0,n.up)("NavSocial");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",l,[(0,n.Wm)(m,{to:"/home"},{default:(0,n.w5)((()=>[r])),_:1}),(0,n._)("div",{class:(0,a.C_)(["hamburger-menu",{open:i.isOpen}]),onClick:s[0]||(s[0]=(...e)=>i.openNav&&i.openNav(...e))},d,2)]),t.isUser?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,a.C_)(["nav-items",{open:i.isOpen}])},[(0,n.Wm)(m,{to:"/home",class:"nav-link"},{default:(0,n.w5)((()=>[g])),_:1}),(0,n.Wm)(m,{to:"/msg/"+t.msgId,class:"nav-link"},{default:(0,n.w5)((()=>[p])),_:1},8,["to"]),(0,n._)("div",v,[(0,n._)("button",{class:"btn-logout",onClick:s[1]||(s[1]=(...e)=>i.Logout&&i.Logout(...e))},b)]),(0,n.Wm)(h)],2)):(0,n.kq)("",!0),t.isUser?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:1,class:"sbtn btn-create",onClick:s[2]||(s[2]=s=>e.$router.push("/register"))}," Create Whispers "))])}t(6056);var k=t(4870),_=t(65),y=t.p+"img/instagram.6f218904.svg",C=t.p+"img/github.106e3d84.svg",O=t.p+"img/twitter.9c453a6e.svg";const B={class:"nav-social nav-link d-lg-none"},S=(0,n.uE)('<a href="" class="-nav-sm instagram"><img src="'+y+'" alt="Instagram"></a><a href="" class="-nav-sm github"><img src="'+C+'" alt="GitHub"></a><a href="" class="-nav-sm twitter"><img src="'+O+'" alt="Twitter"></a>',3),D=[S];function T(e,s,t,a,i,o){return(0,n.wg)(),(0,n.iD)("div",B,D)}var U={name:"NavSocial"},H=t(89);const I=(0,H.Z)(U,[["render",T]]);var M=I,K=t(8246),Y=(t(6035),{components:{NavSocial:M},name:"NavbarComp ",props:{isUser:{type:Boolean,default:!1},msgId:{type:String,default:""}},setup(){const e=(0,k.iH)(!1),s=(0,_.oR)(),t=()=>{e.value?e.value=!1:e.value=!0},n=async()=>{await s.dispatch("logout").then((()=>{K.F.fire({icon:"success",text:"Log out successfull"})}))};return{Logout:n,openNav:t,isOpen:e}}});const L=(0,H.Z)(Y,[["render",x]]);var N=L},6315:function(e,s,t){t.r(s),t.d(s,{default:function(){return P}});var n=t(3396),a=t(7139),i=t(9242);const o={class:"messages-page ccontainer"},l={class:"messages-wrapper p-4 mx-auto"},r={class:"form-wrapper mb-4"},c=(0,n.Uk)("Send a message to "),u={class:"name"},m={class:"messages-list"},d={class:"message-title"},g=(0,n.Uk)("Timeline of "),p={class:"name"},v={class:"message-content"},h={class:"message-text"},w=["onSubmit"],f=(0,n._)("button",{class:"btn-comment sbtn",type:"submit"},"Submit",-1),b=["onClick"],x=(0,n.Uk)(),k={key:0},_={key:1},y={key:0,class:"replies mt-3"},C=["onClick"],O=(0,n._)("i",{class:"bx bxs-trash"},null,-1),B=[O],S={key:0,class:"no-reply"},D=(0,n._)("span",null,"No reply",-1),T=[D],U=["onClick"],H=(0,n._)("i",{class:"bx bxs-trash"},null,-1),I=[H];function M(e,s,t,O,D,H){const M=(0,n.up)("Navbar"),K=(0,n.up)("SendButton");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(M,{isUser:!!O.isLoggedIn,msgId:O.id},null,8,["isUser","msgId"]),(0,n._)("div",l,[(0,n._)("div",r,[(0,n._)("h2",null,[c,(0,n._)("span",u,(0,a.zw)(O.whispersOwner),1)]),(0,n._)("p",null,(0,a.zw)(O.whispersOwner)+" will never know who sent this message",1),(0,n._)("form",{id:"form-msg",onSubmit:s[1]||(s[1]=(0,i.iM)(((...e)=>O.sendMessage&&O.sendMessage(...e)),["prevent"]))},[(0,n.wy)((0,n._)("textarea",{name:"message",class:"message-area",placeholder:"Write secret message","onUpdate:modelValue":s[0]||(s[0]=e=>O.message=e),maxlength:"155"},null,512),[[i.nr,O.message]]),(0,n.Wm)(K)],32)]),(0,n._)("div",m,[(0,n._)("div",d,[(0,n._)("h4",null,[g,(0,n._)("span",p,(0,a.zw)(O.whispersOwner),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(O.messages,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"message mb-3",key:e.id},[(0,n._)("div",v,[(0,n._)("div",h,[(0,n._)("p",null,(0,a.zw)(e.message),1)]),(0,n._)("form",{id:"comment-form",onSubmit:(0,i.iM)((s=>O.submitComment(e.id)),["prevent"])},[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=e=>O.comment=e),name:"comment",placeholder:"Write a comment",class:"form-control inp-comment"},null,512),[[i.nr,O.comment]]),f],40,w),(0,n._)("div",{class:"check mt-3",onClick:s=>O.checkReplies(e.id)},[(0,n._)("i",{class:(0,a.C_)(["bx-fw bx bxs-chevron-right",{checked:O.checked}])},null,2),x,O.checked?((0,n.wg)(),(0,n.iD)("span",_,"Hide Replies")):((0,n.wg)(),(0,n.iD)("span",k,"Check Replies"))],8,b),O.checked?((0,n.wg)(),(0,n.iD)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(O.replies,((s,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"reply-text mb-2",key:t},[(0,n._)("span",null,(0,a.zw)(s.comment),1),O.isLoggedIn?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"delete delete-reply",onClick:t=>O.deleteComment(e.id,s.id)},B,8,C)):(0,n.kq)("",!0)])))),128)),O.replies.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",S,T))])):(0,n.kq)("",!0)]),O.isLoggedIn?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"delete",onClick:s=>O.deleteMessage(e.id)},I,8,U)):(0,n.kq)("",!0)])))),128))])])])])}var K=t(4870),Y=t(6056),L=t(6035),N=t(2302),W=t(2483);const J={class:"btn-send w-100 mt-3",type:"submit"},A=(0,n._)("i",{class:"bx-fw bx bxs-send"},null,-1),q=(0,n.Uk)(" Send Message "),Z=[A,q];function z(e,s,t,a,i,o){return(0,n.wg)(),(0,n.iD)("button",J,Z)}var E={name:"SendButton"},R=t(89);const F=(0,R.Z)(E,[["render",z]]);var Q=F,V=t(2492),X=t.n(V),j={components:{Navbar:N.Z,SendButton:Q},name:"MessagePage",setup(){const e=(0,K.iH)(!1),s=(0,K.iH)(""),t=(0,W.yj)().params.id,a=(0,K.iH)(""),i=(0,K.iH)(""),o=(0,K.iH)(!1),l=(0,K.iH)([]),r=(0,K.iH)([]),c=(0,K.iH)(""),u=localStorage.getItem("whispers_id"),m=async()=>{await(0,L.QT)((0,L.JU)(Y.db,"users",u)).then((e=>{c.value=e.data().whisp_id}))},d=async()=>{const e=(0,L.hJ)(Y.db,"users",t,"messages"),s=(0,L.IO)(e,(0,L.Xo)("createdAt","asc"));(0,L.cf)(s,(e=>{l.value=[],e.docs.forEach((e=>{l.value.push({id:e.id,...e.data()})}))}))},g=async e=>{if(o.value)o.value=!1;else{o.value=!0;const s=(0,L.hJ)(Y.db,"users",t,"messages",e,"replies"),n=(0,L.IO)(s,(0,L.Xo)("createdAt","asc"));(0,L.cf)(n,(e=>{r.value=[],e.docs.forEach((e=>{r.value.push({id:e.id,...e.data()})}))}))}},p=async()=>{await(0,L.QT)((0,L.JU)(Y.db,"users",t)).then((e=>{s.value=e.data().whisp_name}))};function v(e){function s(e){return e.toString().padStart(2,"0")}const t=s(e.getDate())+"-"+s(e.getMonth()+1)+"-"+e.getFullYear(),n=t;return n}const h=async()=>{if(a.value)try{await(0,L.ET)((0,L.hJ)(Y.db,"users",t,"messages"),{message:a.value,createdAt:(0,L.Bt)(),date:v(new Date)}).then((()=>{X().fire({title:"Message sent!",text:"Your message has been sent",icon:"success",confirmButtonText:"OK"}),a.value=""}))}catch(e){X().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}else X().fire({title:"Oops...",text:"You need to write a message",icon:"error",confirmButtonText:"OK"})},w=e=>{X().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((async s=>{if(s.isConfirmed)try{const s=(0,L.JU)(Y.db,"users",t,"messages",e);await(0,L.oe)(s).then((()=>{X().fire({title:"Deleted!",text:"Message has been deleted",icon:"success",confirmButtonText:"OK"})})).finally((()=>{d()}))}catch(n){X().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}}))},f=(e,s)=>{X().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((async n=>{if(n.isConfirmed)try{const n=(0,L.JU)(Y.db,"users",t,"messages",e,"replies",s);await(0,L.oe)(n).then((()=>{X().fire({title:"Deleted!",text:"Comment has been deleted",icon:"success",confirmButtonText:"OK"})})).finally((()=>{g(e)}))}catch(a){X().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}}))},b=async e=>{if(i.value)try{await(0,L.ET)((0,L.hJ)(Y.db,"users",t,"messages",e,"replies"),{comment:i.value,createdAt:(0,L.Bt)()}).then((()=>{X().fire({title:"Comment sent!",text:"Your comment has been sent",icon:"success",confirmButtonText:"OK"}),i.value=""}))}catch(s){X().fire({title:"Oops...",text:"Something went wrong!",icon:"error",confirmButtonText:"OK"})}else X().fire({title:"Oops...",text:"You need to write a message",icon:"error",confirmButtonText:"OK"})},x=()=>{Y.I.onAuthStateChanged((s=>{e.value=!!s}))};return(0,n.bv)((()=>{m(),p(),d(),x()})),{isLoggedIn:e,whispersOwner:s,checked:o,message:a,sendMessage:h,messages:l,replies:r,comment:i,submitComment:b,checkReplies:g,deleteMessage:w,deleteComment:f,id:c}}};const G=(0,R.Z)(j,[["render",M]]);var P=G}}]);
//# sourceMappingURL=217.ec44c51d.js.map