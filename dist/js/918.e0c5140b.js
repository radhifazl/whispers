"use strict";(self["webpackChunkwhispers"]=self["webpackChunkwhispers"]||[]).push([[918],{6205:function(e,n,a){a.d(n,{Z:function(){return g}});var t=a(3396),r=a.p+"img/google.edce0e7d.svg";const o={class:"google-btn-wrapper mb-2"},s=(0,t._)("img",{src:r,alt:"Google Icon"},null,-1),i=(0,t.Uk)(),l=(0,t._)("span",null,"Sign in with Google",-1),c=[s,i,l];function u(e,n,a,r,s,i){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("button",{class:"google-btn",onClick:n[0]||(n[0]=n=>e.$emit("action"))},c)])}var p={name:"GoogleSignIn"},m=a(89);const d=(0,m.Z)(p,[["render",u]]);var g=d},4350:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(3396);const r={class:"submit-btn-wrapper"};function o(e,n,a,o,s,i){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("button",{class:"submit-btn",onClick:n[0]||(n[0]=n=>e.$emit("action")),type:"submit"},[(0,t.WI)(e.$slots,"default")])])}var s={name:"SubmitButton"},i=a(89);const l=(0,i.Z)(s,[["render",o]]);var c=l},3048:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(3396);const r={class:"or-text w-100"},o=(0,t._)("p",{class:"or"},"or",-1),s=[o];function i(e,n,a,o,i,l){return(0,t.wg)(),(0,t.iD)("div",r,s)}var l={name:"OrSeparator"},c=a(89);const u=(0,c.Z)(l,[["render",i]]);var p=u},1170:function(e,n,a){a.r(n),a.d(n,{default:function(){return G}});var t=a(3396),r=a(9242);const o={class:"register-container ccontainer form-container"},s={class:"register-form-wrapper w-100"},i=(0,t._)("h2",{class:"register-title form-title text-center"}," Create whispers account ",-1),l={class:"name-input-wrapper input-wrapper"},c=(0,t._)("label",{for:"name",class:"mb-1"},"Name",-1),u={class:"email-input-wrapper input-wrapper"},p=(0,t._)("label",{for:"email",class:"mb-1"},"Email",-1),m={class:"pass-input-wrapper input-wrapper"},d=(0,t._)("label",{for:"password",class:"mb-1"},"Password",-1),g={class:"pass w-100"},w={key:0},f={key:1},v={class:"form bottom-form"},b={class:"footer-form"},h=(0,t.Uk)(" Already have an account? Login here ");function y(e,n,a,y,_,S){const x=(0,t.up)("SubmitButton"),k=(0,t.up)("OrSeparator"),C=(0,t.up)("GoogleSignIn"),Z=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",s,[i,(0,t._)("form",{id:"register-form",class:"form",onSubmit:n[4]||(n[4]=(0,r.iM)(((...e)=>y.register&&y.register(...e)),["prevent"]))},[(0,t._)("div",l,[c,(0,t.wy)((0,t._)("input",{type:"text",name:"name",id:"name",class:"name-inp inp mb-3",autocomplete:"off",minlength:"3",maxlength:"20",placeholder:"Type your name here","onUpdate:modelValue":n[0]||(n[0]=e=>y.name=e)},null,512),[[r.nr,y.name]])]),(0,t._)("div",u,[p,(0,t.wy)((0,t._)("input",{type:"email",name:"email",id:"email",class:"email-inp inp mb-3",placeholder:"Type your email here","onUpdate:modelValue":n[1]||(n[1]=e=>y.email=e)},null,512),[[r.nr,y.email]])]),(0,t._)("div",m,[d,(0,t._)("div",g,[(0,t.wy)((0,t._)("input",{type:"password",name:"password",id:"password",class:"password-inp inp mb-3",placeholder:"Type your password here","onUpdate:modelValue":n[2]||(n[2]=e=>y.password=e)},null,512),[[r.nr,y.password]]),(0,t._)("i",{class:"bx bx-show",onClick:n[3]||(n[3]=(...e)=>S.showPass&&S.showPass(...e))})])]),(0,t.Wm)(x,{class:"mb-2"},{default:(0,t.w5)((()=>[y.isRegistering?((0,t.wg)(),(0,t.iD)("span",w,"Creating an account...")):((0,t.wg)(),(0,t.iD)("span",f,"Register"))])),_:1})],32),(0,t._)("div",v,[(0,t.Wm)(k),(0,t.Wm)(C,{onAction:y.googleSignIn},null,8,["onAction"]),(0,t._)("div",b,[(0,t.Wm)(Z,{to:"/login"},{default:(0,t.w5)((()=>[h])),_:1})])])])])}var _=a(4350),S=a(3048),x=a(6205),k=a(4870),C=a(2492),Z=a.n(C),B=a(65),I={components:{SubmitButton:_.Z,OrSeparator:S.Z,GoogleSignIn:x.Z},name:"LoginPage",methods:{showPass(){let e=document.querySelector(".password-inp");const n=document.querySelector(".bx-show");"password"===e.type?(e.type="text",n.classList.remove("bx-show"),n.classList.add("bx-hide")):"text"===e.type&&(e.type="password",document.querySelector(".bx-hide").classList.add("bx-show"))}},setup(){const e=(0,B.oR)(),n=(0,k.iH)(""),a=(0,k.iH)(""),t=(0,k.iH)(""),r=(0,k.iH)(!1),o=async()=>{n.value&&a.value&&t.value?(r.value=!0,await e.dispatch("register",{name:n.value,email:a.value,password:t.value}),r.value=!1,n.value="",a.value="",t.value=""):Z().fire({icon:"error",iconColor:"#4B4949",title:"There is empty field",color:"#1E1E1E",text:"You need to fill all fields to register an account",confirmButtonColor:"#4B4949",background:"linear-gradient(90deg, rgba(212,212,212,1) 0%, rgba(157,152,152,1) 100%)",confirmButtonText:"OK I understand",showConfirmButton:!0,showCancelButton:!1})},s=async()=>{await e.dispatch("googleLogin")};return{register:o,googleSignIn:s,name:n,email:a,password:t,isRegistering:r}}},D=a(89);const L=(0,D.Z)(I,[["render",y]]);var G=L}}]);
//# sourceMappingURL=918.e0c5140b.js.map