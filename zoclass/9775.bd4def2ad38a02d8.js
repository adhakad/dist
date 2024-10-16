"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[9775],{49775:(Ct,T,s)=>{s.r(T),s.d(T,{PaymentModule:()=>At});var _=s(36895),g=s(89299),r=s(24006),t=s(94650),O=s(92340),N=s(80529);let k=(()=>{class e{constructor(n){this.http=n,this.url=`${O.N.API_URL}/v1/payment`}createPayment(n){return console.log(n),this.http.post(`${this.url}/create`,n)}validatePayment(n){return this.http.post(`${this.url}/validate`,n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=s(63193),F=s(73716),w=s(462),J=s(97496),Y=s(3238),z=s(4859),Q=s(44850),E=s(97392),f=s(59549),L=s(44144),R=s(51572),H=s(84385),B=s(35047);function G(e,o){1&e&&(t.TgZ(0,"mat-hint",65),t._uU(1,"Email Address is required."),t.qZA())}function $(e,o){1&e&&(t.TgZ(0,"mat-hint",65),t._uU(1," Email Address must be at least 6 characters long. "),t.qZA())}function D(e,o){1&e&&(t.TgZ(0,"mat-hint",65),t._uU(1,"Password is required."),t.qZA())}function K(e,o){1&e&&(t.TgZ(0,"mat-hint",65),t._uU(1," Password must be at least 6 characters long. "),t.qZA())}function j(e,o){1&e&&(t.TgZ(0,"mat-hint",65),t._uU(1," Password can't be more than 30 characters long. "),t.qZA())}function W(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Name is required "),t.qZA())}function X(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid Name (only letters and spaces are allowed) "),t.qZA())}function V(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Mobile is required "),t.qZA())}function tt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid mobile (10-digit mobile number starting with 6, 7, 8, or 9) "),t.qZA())}function nt(e,o){if(1&e&&(t.TgZ(0,"div")(1,"mat-option",66),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("value",n),t.xp6(1),t.Oqu(n)}}function et(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," State is required "),t.qZA())}function it(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum 50 characters allowed for State "),t.qZA())}function ot(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," City is required "),t.qZA())}function rt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum 50 characters allowed for city "),t.qZA())}function at(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Address is required "),t.qZA())}function st(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum 100 characters allowed for address "),t.qZA())}function mt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Pin code is required "),t.qZA())}function lt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid postal code format. Use a 6-digit code. "),t.qZA())}function dt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," School name is required "),t.qZA())}function ut(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum 50 characters allowed for School Name "),t.qZA())}function pt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Affiliation number is required "),t.qZA())}function ct(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum 15 characters allowed for affiliation number "),t.qZA())}function gt(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"form",43),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw(3);return t.KtG(a.signup())}),t.TgZ(2,"div",44)(3,"div",45)(4,"h2",15),t._uU(5,"Account Details "),t.qZA(),t._UZ(6,"mat-divider",46),t.qZA()(),t.TgZ(7,"div",47)(8,"h2"),t._uU(9),t.qZA()(),t.TgZ(10,"div",4)(11,"div",48)(12,"mat-form-field",49)(13,"mat-label"),t._uU(14,"Email Address"),t.qZA(),t._UZ(15,"input",50),t.YNc(16,G,2,0,"mat-hint",51),t.YNc(17,$,2,0,"mat-hint",51),t.qZA()(),t.TgZ(18,"div",48)(19,"mat-form-field",49)(20,"mat-label"),t._uU(21,"Password"),t.qZA(),t._UZ(22,"input",52),t.YNc(23,D,2,0,"mat-hint",51),t.YNc(24,K,2,0,"mat-hint",51),t.YNc(25,j,2,0,"mat-hint",51),t.qZA()(),t.TgZ(26,"div",53)(27,"div",45)(28,"h2",15),t._uU(29,"Personal Details "),t.qZA(),t._UZ(30,"mat-divider",46),t.qZA()(),t.TgZ(31,"div",48)(32,"mat-form-field",49)(33,"mat-label"),t._uU(34,"Name"),t.qZA(),t._UZ(35,"input",54),t.YNc(36,W,2,0,"mat-error",10),t.YNc(37,X,2,0,"mat-error",10),t.qZA()(),t.TgZ(38,"div",48)(39,"mat-form-field",49)(40,"mat-label"),t._uU(41,"Mobile"),t.qZA(),t._UZ(42,"input",55),t.YNc(43,V,2,0,"mat-error",10),t.YNc(44,tt,2,0,"mat-error",10),t.qZA()(),t.TgZ(45,"div",48)(46,"mat-form-field",49)(47,"mat-label"),t._uU(48,"State"),t.qZA(),t.TgZ(49,"mat-select",56),t.YNc(50,nt,3,2,"div",57),t.qZA(),t.YNc(51,et,2,0,"mat-error",10),t.YNc(52,it,2,0,"mat-error",10),t.qZA()(),t.TgZ(53,"div",48)(54,"mat-form-field",49)(55,"mat-label"),t._uU(56,"City"),t.qZA(),t._UZ(57,"input",58),t.YNc(58,ot,2,0,"mat-error",10),t.YNc(59,rt,2,0,"mat-error",10),t.qZA()(),t.TgZ(60,"div",48)(61,"mat-form-field",49)(62,"mat-label"),t._uU(63,"Address"),t.qZA(),t._UZ(64,"input",59),t.YNc(65,at,2,0,"mat-error",10),t.YNc(66,st,2,0,"mat-error",10),t.qZA()(),t.TgZ(67,"div",48)(68,"mat-form-field",49)(69,"mat-label"),t._uU(70,"Pin Code"),t.qZA(),t._UZ(71,"input",60),t.YNc(72,mt,2,0,"mat-error",10),t.YNc(73,lt,2,0,"mat-error",10),t.qZA()(),t.TgZ(74,"div",48)(75,"mat-form-field",49)(76,"mat-label"),t._uU(77,"School Name"),t.qZA(),t._UZ(78,"input",61),t.YNc(79,dt,2,0,"mat-error",10),t.YNc(80,ut,2,0,"mat-error",10),t.qZA()(),t.TgZ(81,"div",48)(82,"mat-form-field",49)(83,"mat-label"),t._uU(84,"Affiliation Number"),t.qZA(),t._UZ(85,"input",62),t.YNc(86,pt,2,0,"mat-error",10),t.YNc(87,ct,2,0,"mat-error",10),t.qZA()()(),t.TgZ(88,"div",4)(89,"div",63)(90,"button",64),t._uU(91,"Next"),t.TgZ(92,"mat-icon"),t._uU(93,"arrow_right_alt"),t.qZA()()()()(),t.BQk()}if(2&e){const n=t.oxw(3);let i,a,m,u,l,d,p,c,h,v,A,x,C,Z,q,y,I,P,U,b,M;t.xp6(1),t.Q6J("formGroup",n.signupForm),t.xp6(8),t.Oqu(n.errorMsg),t.xp6(7),t.Q6J("ngIf",(null==(i=n.signupForm.get("email"))?null:i.hasError("required"))&&(null==(i=n.signupForm.get("email"))?null:i.touched)),t.xp6(1),t.Q6J("ngIf",null==(a=n.signupForm.get("email"))?null:a.hasError("minlength")),t.xp6(6),t.Q6J("ngIf",(null==(m=n.signupForm.get("password"))?null:m.hasError("required"))&&(null==(m=n.signupForm.get("password"))?null:m.touched)),t.xp6(1),t.Q6J("ngIf",null==(u=n.signupForm.get("password"))?null:u.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(l=n.signupForm.get("password"))?null:l.hasError("maxlength")),t.xp6(11),t.Q6J("ngIf",(null==(d=n.signupForm.get("name"))?null:d.hasError("required"))&&(null==(d=n.signupForm.get("name"))?null:d.touched)),t.xp6(1),t.Q6J("ngIf",(null==(p=n.signupForm.get("name"))?null:p.hasError("pattern"))&&(null==(p=n.signupForm.get("name"))?null:p.touched)),t.xp6(6),t.Q6J("ngIf",(null==(c=n.signupForm.get("mobile"))?null:c.hasError("required"))&&(null==(c=n.signupForm.get("mobile"))?null:c.touched)),t.xp6(1),t.Q6J("ngIf",(null==(h=n.signupForm.get("mobile"))?null:h.hasError("pattern"))&&(null==(h=n.signupForm.get("mobile"))?null:h.touched)),t.xp6(6),t.Q6J("ngForOf",n.indianStates),t.xp6(1),t.Q6J("ngIf",(null==(v=n.signupForm.get("state"))?null:v.hasError("required"))&&(null==(v=n.signupForm.get("state"))?null:v.touched)),t.xp6(1),t.Q6J("ngIf",null==(A=n.signupForm.get("state"))?null:A.hasError("maxlength")),t.xp6(6),t.Q6J("ngIf",(null==(x=n.signupForm.get("city"))?null:x.hasError("required"))&&(null==(x=n.signupForm.get("city"))?null:x.touched)),t.xp6(1),t.Q6J("ngIf",null==(C=n.signupForm.get("city"))?null:C.hasError("maxlength")),t.xp6(6),t.Q6J("ngIf",(null==(Z=n.signupForm.get("address"))?null:Z.hasError("required"))&&(null==(Z=n.signupForm.get("address"))?null:Z.touched)),t.xp6(1),t.Q6J("ngIf",null==(q=n.signupForm.get("address"))?null:q.hasError("maxlength")),t.xp6(6),t.Q6J("ngIf",(null==(y=n.signupForm.get("pinCode"))?null:y.hasError("required"))&&(null==(y=n.signupForm.get("pinCode"))?null:y.touched)),t.xp6(1),t.Q6J("ngIf",null==(I=n.signupForm.get("pinCode"))?null:I.hasError("pattern")),t.xp6(6),t.Q6J("ngIf",(null==(P=n.signupForm.get("schoolName"))?null:P.hasError("required"))&&(null==(P=n.signupForm.get("schoolName"))?null:P.touched)),t.xp6(1),t.Q6J("ngIf",null==(U=n.signupForm.get("schoolName"))?null:U.hasError("maxlength")),t.xp6(6),t.Q6J("ngIf",(null==(b=n.signupForm.get("affiliationNumber"))?null:b.hasError("required"))&&(null==(b=n.signupForm.get("affiliationNumber"))?null:b.touched)),t.xp6(1),t.Q6J("ngIf",null==(M=n.signupForm.get("affiliationNumber"))?null:M.hasError("pattern")),t.xp6(3),t.Q6J("disabled",!n.signupForm.valid)}}function _t(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",13)(2,"div",67)(3,"div",14)(4,"h2",15),t._uU(5,"Verification "),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Enter the code sent to your email"),t.qZA(),t.TgZ(8,"p")(9,"span"),t._uU(10),t.ALo(11,"secureEmail"),t.qZA()()()()(),t.TgZ(12,"form",43),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw(3);return t.KtG(a.submitOtp())}),t.TgZ(13,"div",47)(14,"h2"),t._uU(15),t.qZA()(),t.TgZ(16,"div",4)(17,"div",68)(18,"div",69),t._UZ(19,"input",70)(20,"input",71)(21,"input",72)(22,"input",73)(23,"input",74)(24,"input",75),t.qZA()(),t.TgZ(25,"div",76)(26,"button",77),t._uU(27,"Next"),t.TgZ(28,"mat-icon"),t._uU(29,"arrow_right_alt"),t.qZA()()()()(),t.BQk()}if(2&e){const n=t.oxw(3);t.xp6(10),t.Oqu(t.lcZ(11,4,n.email)),t.xp6(2),t.Q6J("formGroup",n.otpForm),t.xp6(3),t.Oqu(n.errorMsg),t.xp6(11),t.Q6J("disabled",!n.otpForm.valid)}}function ft(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",6)(1,"div",4)(2,"div",7)(3,"h2",8),t._uU(4,"Proceed to You're Online ERP Software Account"),t.qZA()(),t.TgZ(5,"div",7)(6,"div",9),t.YNc(7,gt,94,25,"ng-container",10),t.YNc(8,_t,30,6,"ng-container",10),t.qZA()(),t.TgZ(9,"div",11)(10,"div",4)(11,"div",12)(12,"div",9)(13,"div",13)(14,"div",14)(15,"h2",15),t._uU(16,"Order Summary "),t.qZA()(),t.TgZ(17,"div",16)(18,"div",17)(19,"div",18)(20,"h3"),t._uU(21,"Your Plan"),t.qZA()(),t.TgZ(22,"div",19)(23,"h3",20),t._uU(24),t.qZA()(),t.TgZ(25,"div",18)(26,"h3"),t._uU(27,"Plan Pricing"),t.qZA()(),t.TgZ(28,"div",19)(29,"h3"),t._uU(30),t.ALo(31,"currency"),t.qZA()(),t._UZ(32,"mat-divider"),t.TgZ(33,"div",16)(34,"div",21)(35,"div",18)(36,"h2"),t._uU(37,"Total"),t.qZA()(),t.TgZ(38,"div",19)(39,"h2"),t._uU(40),t.ALo(41,"currency"),t.qZA()()()()()()(),t.TgZ(42,"div",4)(43,"div",16)(44,"button",22),t._uU(45,"Submit Secure Payment"),t.qZA()()(),t.TgZ(46,"div",21)(47,"div",18)(48,"h3"),t._uU(49,"Student Limit"),t.qZA()(),t.TgZ(50,"div",23)(51,"button",24),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.updateNumber(-a.studentIncrementRange))}),t.TgZ(52,"mat-icon"),t._uU(53,"remove"),t.qZA()(),t.TgZ(54,"button",25),t._uU(55),t.qZA(),t.TgZ(56,"button",26),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.updateNumber(a.studentIncrementRange))}),t.TgZ(57,"mat-icon"),t._uU(58,"add"),t.qZA()()(),t.TgZ(59,"div",4)(60,"div",16)(61,"mat-icon",27),t._uU(62,"lock"),t.qZA(),t.TgZ(63,"h3",28),t._uU(64,"Razorpay Secure "),t.qZA()()(),t.TgZ(65,"div",29)(66,"div",4)(67,"div",30),t._UZ(68,"img",31),t.qZA(),t.TgZ(69,"div",30),t._UZ(70,"img",32),t.qZA(),t.TgZ(71,"div",30),t._UZ(72,"img",33),t.qZA(),t.TgZ(73,"div",30),t._UZ(74,"img",34),t.qZA(),t.TgZ(75,"div",30),t._UZ(76,"img",35),t.qZA(),t.TgZ(77,"div",30),t._UZ(78,"img",36),t.qZA()()(),t.TgZ(79,"div",37)(80,"p",38),t._uU(81," +15"),t.qZA()()(),t.TgZ(82,"div",39)(83,"p",40),t._uU(84,"By checking out you agree with our "),t.TgZ(85,"span",41),t._uU(86,"Terms of Service"),t.qZA(),t._uU(87," and confirm that you have read our "),t.TgZ(88,"span",42),t._uU(89,"Privacy Policy"),t.qZA(),t._uU(90,". You can cancel recurring payments at any time. "),t.qZA()()()()()()()()}if(2&e){const n=t.oxw(2);t.xp6(7),t.Q6J("ngIf",n.getOTP&&!n.varifyOTP&&!n.verified),t.xp6(1),t.Q6J("ngIf",n.varifyOTP&&!n.getOTP&&!n.verified),t.xp6(16),t.Oqu(null==n.singlePlanInfo?null:n.singlePlanInfo.plans),t.xp6(6),t.Oqu(t.Dn7(31,7,null==n.singlePlanInfo?null:n.singlePlanInfo.price,"INR",!0)),t.xp6(10),t.Oqu(t.Dn7(41,11,n.totalAmount,"INR",!0)),t.xp6(11),t.Q6J("disabled",n.numberOfStudent==(null==n.singlePlanInfo?null:n.singlePlanInfo.studentLimit)),t.xp6(4),t.Oqu(n.numberOfStudent)}}function ht(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",6)(1,"div",4)(2,"div",78)(3,"div",4)(4,"div",79)(5,"h2",8),t._uU(6,"Proceed to Payment"),t.qZA(),t.TgZ(7,"div",80)(8,"div",13)(9,"div",14)(10,"h2"),t._uU(11,"Order Summary "),t.qZA()(),t.TgZ(12,"div",16)(13,"div",17)(14,"div",18)(15,"h3"),t._uU(16,"Your Plan"),t.qZA()(),t.TgZ(17,"div",19)(18,"h3",20),t._uU(19),t.qZA()(),t.TgZ(20,"div",18)(21,"h3"),t._uU(22,"Plan Pricing"),t.qZA()(),t.TgZ(23,"div",19)(24,"h3"),t._uU(25),t.ALo(26,"currency"),t.qZA()(),t._UZ(27,"mat-divider"),t.TgZ(28,"div",16)(29,"div",21)(30,"div",18)(31,"h2"),t._uU(32,"Total"),t.qZA()(),t.TgZ(33,"div",19)(34,"h2"),t._uU(35),t.ALo(36,"currency"),t.qZA()()()()()()(),t.TgZ(37,"div",4)(38,"div",16)(39,"button",81),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.createPayment())}),t._uU(40,"Submit Secure Payment"),t.qZA()()(),t.TgZ(41,"div",21)(42,"div",82)(43,"h3"),t._uU(44,"Student Limit"),t.qZA()(),t.TgZ(45,"div",83)(46,"button",24),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.updateNumber(-a.studentIncrementRange))}),t.TgZ(47,"mat-icon"),t._uU(48,"remove"),t.qZA()(),t.TgZ(49,"button",25),t._uU(50),t.qZA(),t.TgZ(51,"button",26),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.updateNumber(a.studentIncrementRange))}),t.TgZ(52,"mat-icon"),t._uU(53,"add"),t.qZA()()(),t.TgZ(54,"div",4)(55,"div",16)(56,"mat-icon",27),t._uU(57,"lock"),t.qZA(),t.TgZ(58,"h3",28),t._uU(59,"Razorpay Secure "),t.qZA()()(),t.TgZ(60,"div",29)(61,"div",4)(62,"div",30),t._UZ(63,"img",31),t.qZA(),t.TgZ(64,"div",30),t._UZ(65,"img",32),t.qZA(),t.TgZ(66,"div",30),t._UZ(67,"img",33),t.qZA(),t.TgZ(68,"div",30),t._UZ(69,"img",34),t.qZA(),t.TgZ(70,"div",30),t._UZ(71,"img",35),t.qZA(),t.TgZ(72,"div",30),t._UZ(73,"img",36),t.qZA()()(),t.TgZ(74,"div",37)(75,"p",38),t._uU(76," +15"),t.qZA()()(),t.TgZ(77,"div",39)(78,"p",40),t._uU(79,"By checking out you agree with our "),t.TgZ(80,"span",41),t._uU(81,"Terms of Service"),t.qZA(),t._uU(82," and confirm that you have read our "),t.TgZ(83,"span",42),t._uU(84,"Privacy Policy"),t.qZA(),t._uU(85,". You can cancel recurring payments at any time. "),t.qZA()()()()()()()()}if(2&e){const n=t.oxw(2);t.xp6(19),t.Oqu(null==n.singlePlanInfo?null:n.singlePlanInfo.plans),t.xp6(6),t.Oqu(t.Dn7(26,6,null==n.singlePlanInfo?null:n.singlePlanInfo.price,"INR",!0)),t.xp6(10),t.Oqu(t.Dn7(36,10,n.totalAmount,"INR",!0)),t.xp6(4),t.Q6J("disabled",n.paymentCompleted),t.xp6(7),t.Q6J("disabled",n.numberOfStudent==(null==n.singlePlanInfo?null:n.singlePlanInfo.studentLimit)),t.xp6(4),t.Oqu(n.numberOfStudent)}}function vt(e,o){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,ft,91,15,"div",5),t.YNc(3,ht,86,14,"div",5),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",!n.successMsg),t.xp6(1),t.Q6J("ngIf",n.successMsg&&!n.paymentMode)}}function xt(e,o){1&e&&t._UZ(0,"mat-progress-spinner",88)}function Zt(e,o){if(1&e&&(t.TgZ(0,"div",86),t.YNc(1,xt,1,0,"mat-progress-spinner",87),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function yt(e,o){if(1&e&&(t.TgZ(0,"div",84),t.YNc(1,Zt,2,1,"div",85),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const Pt=[{path:"",component:(()=>{class e{constructor(n,i,a,m,u,l,d,p,c){this.fb=n,this.router=i,this.zone=a,this.el=m,this.renderer=u,this.activatedRoute=l,this.paymentService=d,this.plansService=p,this.adminAuthService=c,this.loader=!0,this.successMsg="",this.paymentMode=!1,this.errorMsg="",this.check=!1,this.paymentCompleted=!1,this.getOTP=!0,this.varifyOTP=!1,this.verified=!1,this.step=1,this.numberOfStudent=0,this.perStudentIncrementPrice=5,this.studentIncrementRange=50,this.indianStates=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],this.signupForm=this.fb.group({email:["",[r.kI.required,r.kI.minLength(6)]],password:["",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(30)]],name:["",[r.kI.required,r.kI.pattern("^[a-zA-Z\\s]+$")]],mobile:["",[r.kI.required,r.kI.pattern("^[6789]\\d{9}$")]],city:["",[r.kI.required,r.kI.maxLength(50)]],state:["",[r.kI.required,r.kI.maxLength(50)]],address:["",[r.kI.required,r.kI.maxLength(100)]],pinCode:["",[r.kI.required,r.kI.pattern(/^\d{6}$/)]],schoolName:["",[r.kI.required,r.kI.maxLength(50)]],affiliationNumber:["",[r.kI.required,r.kI.maxLength(15)]]}),this.otpForm=this.fb.group({email:[""],otp:[""],digit1:["",r.kI.required],digit2:["",r.kI.required],digit3:["",r.kI.required],digit4:["",r.kI.required],digit5:["",r.kI.required],digit6:["",r.kI.required]})}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.id&&this.getSinglePlans(this.id),this.loadRazorpayScript(),setTimeout(()=>{this.loader=!1},1e3)}updateNumber(n){this.numberOfStudent+=n,this.totalAmount+=n*this.perStudentIncrementPrice}loadRazorpayScript(){const n=this.renderer.createElement("script");n.type="text/javascript",n.src="https://checkout.razorpay.com/v1/checkout.js",n.onload=()=>{},this.renderer.appendChild(this.el.nativeElement,n)}getSinglePlans(n){this.plansService.getSinglePlans(n).subscribe(i=>{if(i){let a=parseInt(i.price);this.taxes=0,this.totalAmount=a+this.taxes,this.numberOfStudent=i.studentLimit,this.perStudentIncrementPrice=i.perStudentIncrementPrice,this.studentIncrementRange=i.studentIncrementRange,this.singlePlanInfo=i}})}signup(){this.adminAuthService.signup(this.signupForm.value).subscribe(n=>{n&&(this.errorMsg="",this.email=n.email,this.getOTP=!1,this.varifyOTP=!0)},n=>{400==n.status&&0==n.error.verified&&1==n.error.paymentMode&&(this.errorMsg="",this.email=n.error.email,this.getOTP=!1,this.varifyOTP=!0),400==n.status&&1==n.error.verified&&1==n.error.paymentMode&&(this.errorMsg="",this.getOTP=!1,this.varifyOTP=!1,this.verified=n.error.verified,this.successMsg="You are already verified",this.adminInfo=n.error.adminInfo),400==n.status&&1==n.error.verified&&0==n.error.paymentMode&&(this.errorMsg=n.error.errorMsg),500==n.status&&(this.errorMsg=n.error.errorMsg)})}submitOtp(){const n=`${this.otpForm.value.digit1}${this.otpForm.value.digit2}${this.otpForm.value.digit3}${this.otpForm.value.digit4}${this.otpForm.value.digit5}${this.otpForm.value.digit6}`;this.otpForm.value.email=this.email,this.otpForm.value.otp=n,this.otpForm.value.email&&this.otpForm.value.otp&&this.adminAuthService.varifyOTP(this.otpForm.value).subscribe(i=>{i&&(this.errorMsg="",this.getOTP=!1,this.varifyOTP=!1,this.verified=i.verified,this.successMsg=i.successMsg,this.adminInfo=i.adminInfo)},i=>{this.errorMsg=i.error.errorMsg})}createPayment(){this.paymentService.createPayment({adminId:this.adminInfo._id,activePlan:this.singlePlanInfo.plans,amount:this.totalAmount,currency:"INR"}).subscribe(l=>{const d={key:"rzp_live_kkDmtpnXeNedO9",amount:l.order.amount,currency:l.order.currency,name:"Schooliya",description:"Payment for Your Product",image:"../../../../assets/logo.png",prefill:{name:this.adminInfo.name,email:this.adminInfo.email,contact:this.adminInfo.mobile,method:"online"},theme:{color:"#8d6dff"},order_id:l.order.id,handler:this.paymentHandler.bind(this)};Razorpay.open(d)},l=>{this.errorMsg="Payment creation failed. Please try again later."})}paymentHandler(n){this.paymentService.validatePayment({payment_id:n.razorpay_payment_id,order_id:n.razorpay_order_id,signature:n.razorpay_signature,email:this.adminInfo.email,id:this.adminInfo._id,activePlan:this.singlePlanInfo.plans,amount:this.totalAmount,currency:"INR",studentLimit:this.singlePlanInfo.studentLimit}).subscribe(l=>{l&&this.zone.run(()=>{this.loader=!0,this.adminAuthService.deleteAllCookies(),this.step=2,this.paymentCompleted=!0,this.getOTP=!1,this.varifyOTP=!1,this.verified=!1,this.errorMsg="",this.successMsg=l.successMsg,this.adminAuthService.deleteAllCookies();const p=l.refreshToken;this.adminAuthService.storeAccessToken(l.accessToken),this.adminAuthService.storeRefreshToken(p),this.router.navigate(["/admin/dashboard"],{replaceUrl:!0})})},l=>{this.zone.run(()=>{this.errorMsg="Payment validation failed. Please contact support."})})}onInput(n){const i=n.target,a=parseInt(i.getAttribute("maxlength")||"1");if(i.value.length>=a){const m=i.nextElementSibling;m&&m.focus()}}onKeyDown(n){const i=n.target,a=i.previousElementSibling;"Backspace"===n.key&&!i.value&&a&&a.focus()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(g.F0),t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(g.gz),t.Y36(k),t.Y36(S.Y),t.Y36(F.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],hostBindings:function(n,i){1&n&&t.NdJ("input",function(m){return i.onInput(m)})("keydown",function(m){return i.onKeyDown(m)})},decls:5,vars:2,consts:[[2,"background","rgb(243, 241, 250)","padding-top","10vh"],["class","container-fluid","style","padding-bottom: 20vh;",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"container-fluid",2,"padding-bottom","20vh"],[1,"row"],["class","col-lg-10 offset-lg-1",4,"ngIf"],[1,"col-lg-10","offset-lg-1"],[1,"col-lg-7"],[1,"title"],[1,"cards"],[4,"ngIf"],[1,"col-lg-5"],[1,"col-lg-11","offset-lg-1"],[1,"row",2,"padding-bottom","20px"],[1,"col-12","card-title"],[2,"color","#382066"],[1,"col-12"],[1,"row",2,"padding-top","35px"],[1,"col-6",2,"text-align","left"],[1,"col-6",2,"text-align","right"],[2,"letter-spacing",".5px"],[1,"row",2,"padding-top","15px"],["type","submit","mat-raised-button","","disabled","true",1,"submit-button",2,"width","100% !important","font-size","16px"],[1,"col-6","student-limit",2,"text-align","right"],["mat-icon-button","",1,"decrement-button",3,"disabled","click"],["mat-icon-button","",1,"button"],["mat-icon-button","",1,"increment-button",3,"click"],[2,"color","rgb(41, 167, 113)","font-size","21px","display","inline"],[2,"font-size","15px","display","inline","margin-left","10px"],[1,"col-9"],[1,"col-2"],["src","../../../../assets/payment-icons/visa.png","alt",""],["src","../../../../assets/payment-icons/mastercard.png","alt",""],["src","../../../../assets/payment-icons/paytm.png","alt",""],["src","../../../../assets/payment-icons/phonepe.png","alt",""],["src","../../../../assets/payment-icons/google-pay.png","alt",""],["src","../../../../assets/payment-icons/upi.png","alt",""],[1,"col-3"],[2,"margin-top","8px"],[1,"col-lg-12"],[2,"color","#000","font-size","15px","margin-top","10px"],["routerLink","/terms-and-conditions",2,"color","#7b48e2","cursor","pointer"],["routerLink","/privacy-policy",2,"color","#7b48e2","cursor","pointer"],[3,"formGroup","ngSubmit"],[1,"row",2,"padding-bottom","15px"],[1,"col-12","card-detail-title"],[2,"width","150px !important","background-color","#804beb","margin-top","-5px"],[1,"error-msg"],[1,"col-12","col-lg-6"],["appearance","outline"],["matInput","","type","email","formControlName","email"],["class","form-text text-danger",4,"ngIf"],["matInput","","type","password","formControlName","password"],[1,"row",2,"padding-bottom","30px"],["matInput","","type","text","formControlName","name"],["matInput","","type","number","formControlName","mobile"],["type","text","matInput","","formControlName","state"],[4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","city"],["matInput","","type","text","formControlName","address"],["matInput","","type","text","formControlName","pinCode"],["matInput","","type","text","formControlName","schoolName"],["matInput","","type","text","formControlName","affiliationNumber"],[1,"col-12","col-lg-3","offset-lg-9"],["type","submit","mat-raised-button","",1,"submit-button",2,"width","100% !important","font-size","16px","margin-top","10px","letter-spacing",".5px",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"col-12",2,"max-width","auto !important"],[1,"col-12","col-lg-9"],[1,"otp-input"],["autofocus","","type","number","formControlName","digit1","maxlength","1","appOtpInput",""],["type","number","formControlName","digit2","maxlength","1","appOtpInput",""],["type","number","formControlName","digit3","maxlength","1","appOtpInput",""],["type","number","formControlName","digit4","maxlength","1","appOtpInput",""],["type","number","formControlName","digit5","maxlength","1","appOtpInput",""],["type","number","formControlName","digit6","maxlength","1","appOtpInput",""],[1,"col-12","col-lg-3"],["type","submit","mat-raised-button","",1,"submit-button",2,"width","100% !important","font-size","16px","letter-spacing",".5px",3,"disabled"],[1,"col-12","col-lg-6","offset-lg-3"],[1,"col-lg-10","offset-lg-2"],[1,"cards-second"],["type","submit","mat-raised-button","",1,"submit-button",2,"width","100% !important","font-size","16px",3,"disabled","click"],[1,"col-5"],[1,"col-7","student-limit",2,"text-align","right"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,i){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t.YNc(2,vt,4,2,"div",1),t.qZA(),t._UZ(3,"app-footer"),t.YNc(4,yt,2,1,"div",2)),2&n&&(t.xp6(2),t.Q6J("ngIf",0==i.paymentCompleted),t.xp6(2),t.Q6J("ngIf",i.loader))},dependencies:[_.sg,_.O5,g.rH,w.G,J.c,Y.ey,z.lW,Q.d,E.Hw,f.TO,f.KE,f.bx,f.hX,L.Nt,R.Ou,H.gD,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.nD,r.sg,r.u,_.H9,B.S],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}.student-limit[_ngcontent-%COMP%]   .increment-button[_ngcontent-%COMP%]{border-right:1px solid #d1d1d1;border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:0 5px 5px 0}.student-limit[_ngcontent-%COMP%]   .decrement-button[_ngcontent-%COMP%]{border-left:1px solid #d1d1d1;border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:5px 0 0 5px}.student-limit[_ngcontent-%COMP%]   .increment-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .student-limit[_ngcontent-%COMP%]   .decrement-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:16px}.student-limit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;border-radius:0}.card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:22px;font-weight:700;letter-spacing:.5px;text-align:center}.card-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:22px;font-weight:700;letter-spacing:.5px;text-align:left}.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:15px;font-weight:400;letter-spacing:.5px;text-align:center}.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-family:Poppins,sans-serif!important;font-size:15px;font-weight:600;letter-spacing:.5px;text-align:center}.success-message[_ngcontent-%COMP%]{color:#16b978;font-family:Poppins,sans-serif!important;font-size:20px}.error-msg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e4409a;font-family:Poppins,sans-serif!important;font-size:16px;letter-spacing:.5px}.submit-button[_ngcontent-%COMP%]{height:50px;background:#804beb;color:#fff;font-family:Poppins,sans-serif!important;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;font-family:Poppins,sans-serif!important;cursor:not-allowed}.otp-input[_ngcontent-%COMP%]{display:flex;font-family:Poppins,sans-serif!important;justify-content:center}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:38px;height:38px;font-size:20px;text-align:center;font-family:Poppins,sans-serif!important;margin-left:5px;margin-right:5px;margin-bottom:30px;border:1px solid #ccc;border-radius:5px}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;font-family:Poppins,sans-serif!important;border-color:#804beb;box-shadow:0 0 5px #804beb78}.otp-input[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, .otp-input[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cards[_ngcontent-%COMP%]{background-color:#fff;height:auto;margin-top:30px;font-family:Poppins,sans-serif!important;padding:40px 30px;box-shadow:#0000000d 0 3px 8px;border-radius:5px}.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.cards-second[_ngcontent-%COMP%]{background-color:#fff;height:auto;font-family:Poppins,sans-serif!important;margin-top:30px;padding:40px;box-shadow:#0000000d 0 3px 8px;border-radius:5px}.cards-second[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.title[_ngcontent-%COMP%]{color:#382066;font-size:24px;font-family:Poppins,sans-serif!important;font-weight:600;letter-spacing:.5px}@media (min-width: 992px){.error-msg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}.submit-button[_ngcontent-%COMP%]{height:50px;background:#804beb;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;cursor:not-allowed}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:45px;height:45px;font-size:20px;text-align:center;margin-left:15px;margin-right:15px;margin-bottom:10px;border:1px solid #ccc;border-radius:5px}.otp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#804beb;box-shadow:0 0 5px #804beb78}.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px}.cards-second[_ngcontent-%COMP%]{padding:60px}.cards-second[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}.title[_ngcontent-%COMP%]{color:#382066;font-size:28px;font-weight:600;letter-spacing:.5px}}"]}),e})()}];let bt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(Pt),g.Bz]}),e})();var Tt=s(11160);let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.ez,bt,Tt.S]}),e})()}}]);