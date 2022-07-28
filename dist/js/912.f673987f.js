"use strict";(self["webpackChunkwhispers"]=self["webpackChunkwhispers"]||[]).push([[912],{4238:function(a,e,t){t.d(e,{Z:function(){return P}});var s=t(3396),i=t(7139),n=t(9574);const l={class:"v-navbar w-100"},o={class:"navbar-logo"},r=(0,s._)("img",{src:n,alt:"Whispers Logo"},null,-1),c=(0,s._)("span",{class:"bar"},null,-1),u=(0,s._)("span",{class:"bar"},null,-1),m=(0,s._)("span",{class:"bar"},null,-1),d=[c,u,m],p=(0,s._)("div",{class:"nav-item"},[(0,s._)("i",{class:"bx-fw bx bxs-home"}),(0,s._)("span",{class:"text-link"},"Home")],-1),v=(0,s._)("div",{class:"nav-item"},[(0,s._)("i",{class:"bx-fw bx bxs-chat"}),(0,s._)("span",{class:"text-link"},"Messages")],-1),g={class:"nav-link"},h=(0,s._)("i",{class:"bx-fw bx bx-log-out"},null,-1),_=(0,s.Uk)(),f=(0,s._)("span",{class:"logout-text"},"Log out",-1),w=[h,_,f];function b(a,e,t,n,c,u){const m=(0,s.up)("router-link"),h=(0,s.up)("NavSocial");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",o,[(0,s.Wm)(m,{to:"/home"},{default:(0,s.w5)((()=>[r])),_:1}),t.isUser?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)(["hamburger-menu",{open:n.isOpen}]),onClick:e[0]||(e[0]=(...a)=>n.openNav&&n.openNav(...a))},d,2)):(0,s.kq)("",!0)]),t.isUser?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)(["nav-items",{open:n.isOpen}])},[(0,s.Wm)(m,{to:"/home",class:"nav-link"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(m,{to:"/"+t.msgId,class:"nav-link"},{default:(0,s.w5)((()=>[v])),_:1},8,["to"]),(0,s._)("div",g,[(0,s._)("button",{class:"btn-logout",onClick:e[1]||(e[1]=(...a)=>n.Logout&&n.Logout(...a))},w)]),(0,s.Wm)(h)],2)):(0,s.kq)("",!0),t.isUser?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"sbtn btn-create",onClick:e[2]||(e[2]=e=>a.$router.push("/register"))}," Create Whispers "))])}t(6056);var k=t(4870),E=t(65),y=t.p+"img/instagram.6f218904.svg",N=t.p+"img/github.106e3d84.svg",U=t.p+"img/twitter.9c453a6e.svg";const x={class:"nav-social nav-link d-lg-none"},C=(0,s.uE)('<a href="https://www.instagram.com/difazl/" class="-nav-sm instagram"><img src="'+y+'" alt="Instagram"></a><a href="https://github.com/radhifazl" class="-nav-sm github"><img src="'+N+'" alt="GitHub"></a><a href="https://twitter.com/radhiffazli" class="-nav-sm twitter"><img src="'+U+'" alt="Twitter"></a>',3),H=[C];function W(a,e,t,i,n,l){return(0,s.wg)(),(0,s.iD)("div",x,H)}var I={name:"NavSocial"},D=t(89);const V=(0,D.Z)(I,[["render",W]]);var L=V,Z=t(8246),z={components:{NavSocial:L},name:"NavbarComp ",props:{isUser:{type:Boolean,default:!1},msgId:{type:String,default:""}},setup(){const a=(0,k.iH)(!1),e=(0,E.oR)(),t=()=>{a.value?a.value=!1:a.value=!0},s=async()=>{await e.dispatch("logout").then((()=>{Z.F.fire({icon:"success",text:"Log out successfull"})}))};return{Logout:s,openNav:t,isOpen:a}}};const B=(0,D.Z)(z,[["render",b]]);var P=B},4062:function(a,e,t){t.r(e),t.d(e,{default:function(){return J}});var s=t(3396),i=t(7139),n=t(9242);const l=a=>((0,s.dD)("data-v-50fa9fe2"),a=a(),(0,s.Cn)(),a),o={class:"home-profile ccontainer"},r={class:"home-content"},c={class:"wraper"},u={class:"welcome-text mb-5"},m=(0,s.Uk)("Hey "),d=(0,s.Uk)(", welcome to whispers"),p={class:"profile-data mb-5"},v={class:"avatar"},g=["src"],h={class:"datas"},_={class:"name"},f={class:"email"},w={class:"edit"},b={key:0,class:"edit-profile"},k={class:"change-name change mb-3"},E=l((()=>(0,s._)("label",{for:"name"},"Change Name",-1))),y=(0,s.Uk)(),N=l((()=>(0,s._)("br",null,null,-1))),U={class:"action"},x={class:"change-email change mb-3"},C=l((()=>(0,s._)("label",{for:"email"},"Change Email",-1))),H=(0,s.Uk)(),W=l((()=>(0,s._)("br",null,null,-1))),I={class:"action"},D=l((()=>(0,s._)("p",null,"Forgot your password? Reset by clicking button below",-1)));function V(a,e,t,l,V,L){const Z=(0,s.up)("Navbar"),z=(0,s.up)("ProfileButton"),B=(0,s.up)("EditButton");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(Z,{isUser:!0,msgId:l.id},null,8,["msgId"]),(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("h2",null,[m,(0,s._)("span",null,(0,i.zw)(l.username),1),d])]),(0,s._)("div",p,[(0,s._)("div",v,[(0,s._)("img",{src:l.photoUrl},null,8,g)]),(0,s._)("div",h,[(0,s._)("div",_,[(0,s._)("h5",null,(0,i.zw)(l.username),1)]),(0,s._)("div",f,[(0,s._)("h6",null,(0,i.zw)(l.email),1)]),(0,s._)("div",w,[(0,s.Wm)(z,{onEdit:l.openEdit},null,8,["onEdit"])])])]),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[l.isEdited?((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",k,[E,y,N,(0,s._)("div",U,[(0,s.wy)((0,s._)("input",{type:"text",class:"edit-inp edit-name mt-2",id:"name",onKeyup:e[0]||(e[0]=(...a)=>L.checkVal&&L.checkVal(...a)),"onUpdate:modelValue":e[1]||(e[1]=a=>V.editName=a)},null,544),[[n.nr,V.editName]]),(0,s.Wm)(B,{val:V.isNameEmpty},null,8,["val"])])]),(0,s._)("div",x,[C,H,W,(0,s._)("div",I,[(0,s.wy)((0,s._)("input",{type:"text",class:"edit-inp edit-email mt-2",id:"email",onKeyup:e[2]||(e[2]=(...a)=>L.checkVal2&&L.checkVal2(...a)),"onUpdate:modelValue":e[3]||(e[3]=a=>V.editEmail=a)},null,544),[[n.nr,V.editEmail]]),(0,s.Wm)(B,{val:V.isEmailEmpty},null,8,["val"])])])])):(0,s.kq)("",!0)])),_:1}),D,(0,s._)("button",{class:"btn btn-danger",onClick:e[4]||(e[4]=e=>a.$router.push("/forgot-password"))},"Reset Password")])])])}var L=t(6056),Z=t(4870),z=t(4238);function B(a,e,t,i,l,o){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[(0,s._)("button",{class:"btn-edit",onClick:e[0]||(e[0]=e=>a.$emit("edit"))}," Edit Profile ")])),_:1})}var P={name:"ProfileEdit"},q=t(89);const S=(0,q.Z)(P,[["render",B]]);var T=S;function R(a,e,t,i,l,o){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[t.val?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn-edit",onClick:e[0]||(e[0]=e=>a.$emit("edit"))}," Change ")):(0,s.kq)("",!0)])),_:1})}var $={name:"EditButton",props:["val"]};const O=(0,q.Z)($,[["render",R]]);var j=O,F=t(6035),K={components:{Navbar:z.Z,ProfileButton:T,EditButton:j},name:"HomeProfile",data(){return{editName:"",editEmail:"",isNameEmpty:!1,isEmailEmpty:!1,show:!0}},methods:{checkVal(){this.editName.length>0?this.isNameEmpty=!0:this.isNameEmpty=!1},checkVal2(){this.editEmail.length>0?this.isEmailEmpty=!0:this.isEmailEmpty=!1}},setup(){const a=(0,Z.iH)(""),e=(0,Z.iH)(L.I.currentUser.displayName),t=(0,Z.iH)(L.I.currentUser.email),i=(0,Z.iH)(L.I.currentUser.photoURL),n=(0,Z.iH)(!1),l=(0,Z.iH)(""),o=localStorage.getItem("whispers_id"),r=async()=>{await(0,F.QT)((0,F.JU)(L.db,"users",o)).then((a=>{l.value=a.data().whisp_id}))},c=()=>{n.value?n.value=!1:n.value=!0};return(0,s.bv)((async()=>{await r()})),{username:e,avatar:a,email:t,isEdited:n,openEdit:c,photoUrl:i,id:l}}};const G=(0,q.Z)(K,[["render",V],["__scopeId","data-v-50fa9fe2"]]);var J=G}}]);
//# sourceMappingURL=912.f673987f.js.map