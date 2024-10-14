"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[7847],{77847:(Z,c,i)=>{i.r(c),i.d(c,{AdminLoginModule:()=>y});var l=i(36895),p=i(89299),r=i(24006),n=i(94650),u=i(73716),h=i(64371),x=i(462),b=i(4859),d=i(59549),P=i(44144);function C(t,a){1&t&&(n.TgZ(0,"mat-hint",13),n._uU(1,"Email is required."),n.qZA())}function M(t,a){1&t&&(n.TgZ(0,"mat-hint",13),n._uU(1,"Password is required."),n.qZA())}function O(t,a){1&t&&(n.TgZ(0,"mat-hint",13),n._uU(1," Password must be at least 6 characters long. "),n.qZA())}function _(t,a){1&t&&(n.TgZ(0,"mat-hint",13),n._uU(1," Password can't be more than 30 characters long. "),n.qZA())}const v=[{path:"",component:(()=>{class t{constructor(o,e,s,g){this.fb=o,this.router=e,this.adminAuthService=s,this.teacherAuthService=g,this.errorMsg="",this.loginForm=this.fb.group({email:["",[r.kI.required]],password:["",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(30)]]})}ngOnInit(){}login(){if(this.loginForm.valid){if(this.teacherAuthService.getAccessToken())return void(this.errorMsg="Login not valid,you are already logged in another account !");this.adminAuthService.login(this.loginForm.value).subscribe(o=>{if(o){const s=o.refreshToken;this.adminAuthService.storeAccessToken(o.accessToken),this.adminAuthService.storeRefreshToken(s),this.router.navigate(["/admin/dashboard"],{replaceUrl:!0})}},o=>{this.errorMsg=o.error.errorMsg})}}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.qu),n.Y36(p.F0),n.Y36(u.Y),n.Y36(h.J))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-admin-login"]],decls:30,vars:7,consts:[[1,"login"],[1,"row"],[1,"col-12","col-lg-5","offset-lg-3","login-card"],[1,"col-12","col-lg-10","offset-lg-1"],[1,"col-12"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","email"],["class","form-text text-danger",4,"ngIf"],["matInput","","type","password","formControlName","password"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[2,"margin-top","15px"],["href","/admin/forgot"],[1,"form-text","text-danger"]],template:function(o,e){if(1&o&&(n._UZ(0,"app-header"),n.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",1)(5,"div",3)(6,"h3"),n._uU(7,"Admin Login"),n.qZA(),n.TgZ(8,"div",4)(9,"h2"),n._uU(10),n.qZA(),n.TgZ(11,"form",5),n.NdJ("ngSubmit",function(){return e.login()}),n.TgZ(12,"mat-form-field",6)(13,"mat-label"),n._uU(14,"Email"),n.qZA(),n._UZ(15,"input",7),n.YNc(16,C,2,0,"mat-hint",8),n.qZA(),n.TgZ(17,"mat-form-field",6)(18,"mat-label"),n._uU(19,"Password"),n.qZA(),n._UZ(20,"input",9),n.YNc(21,M,2,0,"mat-hint",8),n.YNc(22,O,2,0,"mat-hint",8),n.YNc(23,_,2,0,"mat-hint",8),n.qZA(),n.TgZ(24,"button",10),n._uU(25,"Login"),n.qZA()(),n.TgZ(26,"p",11),n._uU(27,"Forgot username or password? "),n.TgZ(28,"a",12),n._uU(29,"Reset here"),n.qZA()()()()()()()()),2&o){let s,g,m,f;n.xp6(10),n.Oqu(e.errorMsg),n.xp6(1),n.Q6J("formGroup",e.loginForm),n.xp6(5),n.Q6J("ngIf",(null==(s=e.loginForm.get("email"))?null:s.hasError("required"))&&(null==(s=e.loginForm.get("email"))?null:s.touched)),n.xp6(5),n.Q6J("ngIf",(null==(g=e.loginForm.get("password"))?null:g.hasError("required"))&&(null==(g=e.loginForm.get("password"))?null:g.touched)),n.xp6(1),n.Q6J("ngIf",null==(m=e.loginForm.get("password"))?null:m.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",null==(f=e.loginForm.get("password"))?null:f.hasError("maxlength")),n.xp6(1),n.Q6J("disabled",!e.loginForm.valid)}},dependencies:[l.O5,x.G,b.lW,d.KE,d.bx,d.hX,P.Nt,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}.student-limit[_ngcontent-%COMP%]   .increment-button[_ngcontent-%COMP%]{border-right:1px solid #d1d1d1;border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:0 5px 5px 0}.student-limit[_ngcontent-%COMP%]   .decrement-button[_ngcontent-%COMP%]{border-left:1px solid #d1d1d1;border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:5px 0 0 5px}.student-limit[_ngcontent-%COMP%]   .increment-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .student-limit[_ngcontent-%COMP%]   .decrement-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:16px}.student-limit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:0}.card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:22px;font-weight:700;letter-spacing:.5px;text-align:center}.card-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:22px;font-weight:700;letter-spacing:.5px;text-align:left}.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:15px;font-weight:400;letter-spacing:.5px;text-align:center}.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:15px;font-weight:600;letter-spacing:.5px;text-align:center}.success-message[_ngcontent-%COMP%]{color:#16b978;font-family:Poppins,sans-serif!important;font-size:20px}.error-msg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e4409a;font-family:Poppins,sans-serif!important;font-size:16px;letter-spacing:.5px}.submit-button[_ngcontent-%COMP%]{height:50px;background:#804beb;color:#fff;font-family:Poppins,sans-serif!important;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;font-family:Poppins,sans-serif!important;cursor:not-allowed}.otp-input[_ngcontent-%COMP%]{display:flex;font-family:Poppins,sans-serif!important;justify-content:center}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:38px;height:38px;font-size:20px;text-align:center;font-family:Poppins,sans-serif!important;margin-left:5px;margin-right:5px;margin-bottom:30px;border:1px solid #ccc;border-radius:5px}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;font-family:Poppins,sans-serif!important;border-color:#804beb;box-shadow:0 0 5px #804beb78}.otp-input[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, .otp-input[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cards[_ngcontent-%COMP%]{background-color:#fff;height:auto;margin-top:30px;font-family:Poppins,sans-serif!important;padding:40px 30px;box-shadow:#0000000d 0 3px 8px;border-radius:5px}.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.cards-second[_ngcontent-%COMP%]{background-color:#fff;height:auto;font-family:Poppins,sans-serif!important;margin-top:30px;padding:40px;box-shadow:#0000000d 0 3px 8px;border-radius:5px}.cards-second[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.title[_ngcontent-%COMP%]{color:#382066;font-size:24px;font-family:Poppins,sans-serif!important;font-weight:600;letter-spacing:.5px}@media (min-width: 992px){.error-msg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}.submit-button[_ngcontent-%COMP%]{height:50px;background:#804beb;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;cursor:not-allowed}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:45px;height:45px;font-size:20px;text-align:center;margin-left:15px;margin-right:15px;margin-bottom:10px;border:1px solid #ccc;border-radius:5px}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#804beb;box-shadow:0 0 5px #804beb78}.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px}.cards-second[_ngcontent-%COMP%]{padding:60px}.cards-second[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.title[_ngcontent-%COMP%]{color:#382066;font-size:28px;font-weight:600;letter-spacing:.5px}}.login[_ngcontent-%COMP%]{background-color:#fff;padding-top:10vh;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{background-color:#fff;padding-top:5vh;padding-bottom:5vh;box-shadow:none}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%]{color:#4e4caacd;padding-bottom:2vh;letter-spacing:.6px;font-size:18px;font-weight:500;margin-bottom:5px;text-align:center}h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}p[_ngcontent-%COMP%]{color:#4e4caac1;margin-top:2vh;letter-spacing:.25px;font-size:16px;margin-bottom:5px}a[_ngcontent-%COMP%]{color:#4e4caac1;font-size:16px;font-weight:500;letter-spacing:.25px;text-decoration:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}@media (min-width:1200px){.login[_ngcontent-%COMP%]{min-height:90vh;padding-top:5vh;background-color:#64748d15;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{margin-top:2vh;margin-left:30%;margin-bottom:10vh;border-radius:15px;border:1px solid rgba(218,218,224,.858)}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:48px;margin-bottom:15px}}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(v),p.Bz]}),t})();var w=i(11160);let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,A,w.S]}),t})()}}]);