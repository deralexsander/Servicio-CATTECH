"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[638],{638:(E,p,s)=>{s.r(p),s.d(p,{EditarperfilPageModule:()=>F});var f=s(177),c=s(4341),o=s(4742),u=s(7965),g=s(467),e=s(3953);let m=(()=>{var t;class r{constructor(i){this.modalController=i,this.field="",this.newFieldValue="",this.currentPassword=""}saveChanges(){this.currentPassword?(console.log(`Guardando cambios en el campo: ${this.field}`),console.log(`Nuevo valor: ${this.newFieldValue}`),this.modalController.dismiss({field:this.field,newValue:this.newFieldValue})):console.log("Contrase\xf1a actual requerida para confirmar cambios.")}closeModal(){this.modalController.dismiss()}}return(t=r).\u0275fac=function(i){return new(i||t)(e.rXU(o.W3))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-editarperfilmodal"]],inputs:{field:"field"},decls:21,vars:5,consts:[[1,"custom-modal-css"],[1,"container"],[1,"text"],[1,"text-input"],[1,"content"],["position","stacked"],[3,"ngModelChange","ngModel"],["type","password",3,"ngModelChange","ngModel"],["expand","block",1,"style-btn",3,"click"],["expand","block","color","light",1,"style-btn-red",3,"click"]],template:function(i,n){1&i&&(e.j41(0,"ion-content",0)(1,"ion-card",1)(2,"ion-card-header")(3,"h1",2),e.EFF(4),e.k0s(),e.j41(5,"p",3),e.EFF(6),e.k0s()(),e.j41(7,"ion-card-content",4)(8,"ion-item",4)(9,"ion-label",5),e.EFF(10),e.k0s(),e.j41(11,"ion-input",6),e.mxI("ngModelChange",function(l){return e.DH7(n.newFieldValue,l)||(n.newFieldValue=l),l}),e.k0s()(),e.j41(12,"ion-item")(13,"ion-label",5),e.EFF(14,"Contrase\xf1a actual"),e.k0s(),e.j41(15,"ion-input",7),e.mxI("ngModelChange",function(l){return e.DH7(n.currentPassword,l)||(n.currentPassword=l),l}),e.k0s()()(),e.j41(16,"ion-footer")(17,"ion-button",8),e.bIt("click",function(){return n.saveChanges()}),e.EFF(18,"Listo"),e.k0s(),e.j41(19,"ion-button",9),e.bIt("click",function(){return n.closeModal()}),e.EFF(20,"Cancelar"),e.k0s()()()()),2&i&&(e.R7$(4),e.SpI("Cambia tu ",n.field,""),e.R7$(2),e.SpI("Introduce un nuevo ",n.field," y tu contrase\xf1a existente."),e.R7$(4),e.JRh(n.field),e.R7$(),e.R50("ngModel",n.newFieldValue),e.R7$(4),e.R50("ngModel",n.currentPassword))},dependencies:[c.BC,c.vS,o.Jm,o.b_,o.I9,o.ME,o.W9,o.M0,o.$w,o.uz,o.he,o.Gw],styles:[".custom-modal-css[_ngcontent-%COMP%]{--width: 70%;--height: 50%;--background: #7ccee9;--border-radius: 10px}.container[_ngcontent-%COMP%]{background:#7ccee9}.text[_ngcontent-%COMP%]{color:#201f1f;font-size:1.6em;font-family:Franklin Gothic Medium;background-color:#7ccee9}.text-input[_ngcontent-%COMP%]{color:#201f1f;font-family:Franklin Gothic Medium}.style-btn[_ngcontent-%COMP%]{--background: #0d1eb9;--border-radius: 15px;color:#ffffffdc}.content[_ngcontent-%COMP%]{background:#7ccee9}"]}),r})();const h=[{path:"",component:(()=>{var t;class r{constructor(i){this.modalController=i}ngOnInit(){this.user={displayName:"Nicolas Mu\xf1oz",username:"Mr.Nico",email:"MrNico@gmail.com",phone:"+56999669966",photoURL:"ruta/a/tu/foto.jpg"}}openEditModal(i){var n=this;return(0,g.A)(function*(){const a=yield n.modalController.create({component:m,componentProps:{field:i,value:n.user[i]}});return a.onDidDismiss().then(l=>{l.data&&(n.user[i]=l.data)}),yield a.present()})()}}return(t=r).\u0275fac=function(i){return new(i||t)(e.rXU(o.W3))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-editarperfil"]],decls:49,vars:7,consts:[[1,"ion-padding"],["routerLink","/pages/perfil",1,"container-start"],[1,"text"],[1,"container-end"],["routerLink","/perfil","src","assets/isotipos/logo perfil.png","alt","logo",1,"logo-size"],[1,"container"],[2,"display","flex","align-items","center"],["alt","avatar",2,"border-radius","50%","width","80px","height","80px","margin-right","10px",3,"src"],[1,"tittle"],[1,"containereditar"],[2,"display","flex","justify-content","space-between","align-items","center"],["fill","outline",1,"style-btn",3,"click"]],template:function(i,n){1&i&&(e.j41(0,"ion-content",0)(1,"a",1)(2,"ion-text",2),e.EFF(3,"< atras "),e.k0s()(),e.j41(4,"div",3),e.nrm(5,"img",4),e.k0s(),e.j41(6,"ion-card")(7,"ion-card-header",5)(8,"div",6),e.nrm(9,"img",7),e.j41(10,"div")(11,"h2",8),e.EFF(12),e.k0s(),e.j41(13,"p",8),e.EFF(14),e.k0s()()()()(),e.j41(15,"ion-card",9)(16,"ion-card-content")(17,"div",10)(18,"div")(19,"h3"),e.EFF(20,"Nombre"),e.k0s(),e.j41(21,"p",2),e.EFF(22),e.k0s()(),e.j41(23,"ion-button",11),e.bIt("click",function(){return n.openEditModal("Nombre")}),e.EFF(24,"Editar"),e.k0s()(),e.j41(25,"div",10)(26,"div")(27,"h3"),e.EFF(28,"Nombre de usuario"),e.k0s(),e.j41(29,"p",2),e.EFF(30),e.k0s()(),e.j41(31,"ion-button",11),e.bIt("click",function(){return n.openEditModal("Nombre de Usuario")}),e.EFF(32,"Editar"),e.k0s()(),e.j41(33,"div",10)(34,"div")(35,"h3"),e.EFF(36,"Correo electr\xf3nico"),e.k0s(),e.j41(37,"p",2),e.EFF(38),e.k0s()(),e.j41(39,"ion-button",11),e.bIt("click",function(){return n.openEditModal("email")}),e.EFF(40,"Editar"),e.k0s()(),e.j41(41,"div",10)(42,"div")(43,"h3"),e.EFF(44,"N\xfamero de tel\xe9fono"),e.k0s(),e.j41(45,"p",2),e.EFF(46),e.k0s()(),e.j41(47,"ion-button",11),e.bIt("click",function(){return n.openEditModal("telefono")}),e.EFF(48,"Editar"),e.k0s()()()()()),2&i&&(e.R7$(9),e.Y8G("src",n.user.photoURL||"assets/isotipos/logo.png",e.B4B),e.R7$(3),e.JRh(n.user.displayName||"Nombre de Usuario"),e.R7$(2),e.JRh(n.user.username||"Nombre de Usuario"),e.R7$(8),e.JRh(n.user.displayName||"Nicolas Mu\xf1oz"),e.R7$(8),e.JRh(n.user.username||"Mr.Nico"),e.R7$(8),e.JRh(n.user.email||"MrNico@gmail.com"),e.R7$(8),e.JRh(n.user.phone||"+56999669966"))},dependencies:[o.Jm,o.b_,o.I9,o.ME,o.W9,o.IO,o.N7,o.oY,u.Wk],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background:#c4dee7}a[_ngcontent-%COMP%]{text-decoration:none}.logo-size[_ngcontent-%COMP%]{width:12%;height:12%}.container-end[_ngcontent-%COMP%]{display:flex;align-items:flex-end;flex-direction:column;padding:20px 25px 0 0}.container-center[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;padding:5px 0}.container-start[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:column;padding:5px 0}.container_start-padding_down[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;padding:0 0 20px 10px}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px 0 0;--background:#7ccee9;color:#161515}.container_start-padding_up[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;padding:20px 0 0 20px}.tittle[_ngcontent-%COMP%]{color:#363434;font-size:2em;font-family:Franklin Gothic Medium}.text[_ngcontent-%COMP%]{color:#201f1f;font-size:1em;font-family:Franklin Gothic Medium}.carrucel[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;gap:2px;scrollbar-width:none}.text-center-white[_ngcontent-%COMP%]{text-align:center;color:#fff;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.card-size[_ngcontent-%COMP%]{width:160px;height:125px;border-radius:15px}.containereditar[_ngcontent-%COMP%]{padding:5% 0 0 5%;--background:#7ccee9;color:#161515;justify-content:space-between}.style-btn[_ngcontent-%COMP%]{--background: #0d1eb9;width:30%;font-size:1.2em;--border-radius: 15px;color:#ffffffdc;height:10%}ion-text[_ngcontent-%COMP%]{flex:1}.icon-size-small[_ngcontent-%COMP%]{width:12%;height:12%}.icon-size-big[_ngcontent-%COMP%]{width:30%;height:30%}']}),r})()}];let M=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.iI.forChild(h),u.iI]}),r})(),F=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[f.MD,c.YN,o.bv,M]}),r})()}}]);