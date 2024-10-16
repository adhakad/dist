(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[8592],{23312:(_,l,r)=>{"use strict";r.d(l,{S:()=>o});var i=r(94650);let o=(()=>{class u{transform(e,a){if(!e||!Array.isArray(e))return e;const t=[];for(let m=0;m<e.length;m+=a)t.push(e.slice(m,m+a));return t}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275pipe=i.Yjl({name:"chunk",type:u,pure:!0}),u})()},95549:(_,l,r)=>{"use strict";r.d(l,{y:()=>c});var i=r(17749),u=r(94650);let c=(()=>{class e{transform(t){const $=t.split("-"),C=+$[1]-1,P=+$[2];return`${i.toWords(+$[0])} ${["January","February","March","April","May","June","July","August","September","October","November","December"][C]} ${i.toWords(P)}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"dateToWords",type:e,pure:!0}),e})()},35047:(_,l,r)=>{"use strict";r.d(l,{S:()=>o});var i=r(94650);let o=(()=>{class u{transform(e){if(!e)return"";const[a,t]=e.split("@");return`${a.slice(0,2)+"****"}@${t}`}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275pipe=i.Yjl({name:"secureEmail",type:u,pure:!0}),u})()},32389:(_,l,r)=>{"use strict";r.d(l,{k:()=>c});var i=r(92340),o=r(94650),u=r(80529);let c=(()=>{class e{constructor(t){this.http=t,this.url=`${i.N.API_URL}/v1/admit-card-structure`}addAdmitCardStructure(t){return this.http.post(`${this.url}`,t)}admitCardStructureByClass(t){return this.http.get(`${this.url}/admin/${t.adminId}`)}admitCardStructureByClassStream(t){return this.http.get(`${this.url}/admin/${t.adminId}/class/${t.cls}/stream/${t.stream}`)}changeAdmitCardPublishStatus(t){return this.http.put(`${this.url}/admitcard-publish-status/${t.id}`,t)}deleteAdmitCardStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(u.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4153:(_,l,r)=>{"use strict";r.d(l,{G:()=>c});var i=r(92340),o=r(94650),u=r(80529);let c=(()=>{class e{constructor(t){this.http=t,this.url=`${i.N.API_URL}/v1/admit-card`}admitCardStudentByClass(t){return this.http.get(`${this.url}/${t}`)}getAllStudentAdmitCardByClass(t){return this.http.get(`${this.url}/admin/${t.adminId}/class/${t.cls}/stream/${t.stream}`)}singleStudentAdmitCardById(t){return this.http.get(`${this.url}/student/${t}`)}singleStudentAdmitCard(t){return this.http.post(`${this.url}`,t)}changeStatus(t){return this.http.put(`${this.url}/status/${t.id}`,t)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(u.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},28889:(_,l,r)=>{"use strict";r.d(l,{r:()=>c});var i=r(92340),o=r(94650),u=r(80529);let c=(()=>{class e{constructor(t){this.http=t,this.url=`${i.N.API_URL}/v1/exam-result-structure`}addExamResultStructure(t){return this.http.post(`${this.url}`,t)}getSingleClassMarksheetTemplateByStream(t){return this.http.get(`${this.url}/admin/${t.adminId}/class/${t.cls}/stream/${t.stream}`)}getSingleClassResultStrucByStream(t){return this.http.get(`${this.url}/admin/${t.adminId}/template/structure/class/${t.cls}/stream/${t.stream}`)}changeResultPublishStatus(t){return this.http.put(`${this.url}/result-publish-status/${t.id}`,t)}deleteResultStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(u.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},11005:(_,l,r)=>{"use strict";r.d(l,{t:()=>c});var i=r(92340),o=r(94650),u=r(80529);let c=(()=>{class e{constructor(t){this.http=t,this.url=`${i.N.API_URL}/v1/fees-structure`}addFeesStructure(t){return this.http.post(`${this.url}`,t)}feesStructureByClass(t){return this.http.get(`${this.url}/admin/${t.adminId}`)}feesStructureBySession(t){return this.http.get(`${this.url}/admin/${t.adminId}/session/${t.session}`)}feesStructureByClassStream(t){return this.http.get(`${this.url}/admin/${t.adminId}/class/${t.class}/stream/${t.stream}`)}deleteFeesStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(u.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},17749:(_,l)=>{!function(){"use strict";function o(s){return!("number"!=typeof s||s!=s||s===1/0||s===-1/0)}function u(s){return"number"==typeof s&&Math.abs(s)<=9007199254740991}"object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;var c=/(hundred|thousand|(m|b|tr|quadr)illion)$/,e=/teen$/,a=/y$/,t=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,m={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function $(s){return c.test(s)||e.test(s)?s+"th":a.test(s)?s.replace(a,"ieth"):t.test(s)?s.replace(t,A):s}function A(s,v){return m[v]}var P=100,g=1e3,y=1e6,M=1e9,I=1e12,D=1e15,B=9007199254740992,O=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],L=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function R(s,v){var p,S=parseInt(s,10);if(!o(S))throw new TypeError("Not a finite number: "+s+" ("+typeof s+")");if(!u(S))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return p=function f(n){var h,d,E=arguments[1];return 0===n?E?E.join(" ").replace(/,$/,""):"zero":(E||(E=[]),n<0&&(E.push("minus"),n=Math.abs(n)),n<20?(h=0,d=O[n]):n<P?(h=n%10,d=L[Math.floor(n/10)],h&&(d+="-"+O[h],h=0)):n<g?(h=n%P,d=f(Math.floor(n/P))+" hundred"):n<y?(h=n%g,d=f(Math.floor(n/g))+" thousand,"):n<M?(h=n%y,d=f(Math.floor(n/y))+" million,"):n<I?(h=n%M,d=f(Math.floor(n/M))+" billion,"):n<D?(h=n%I,d=f(Math.floor(n/I))+" trillion,"):n<=B&&(h=n%D,d=f(Math.floor(n/D))+" quadrillion,"),E.push(d),f(h,E))}(S),v?$(p):p}var W={toOrdinal:function(s){var v=parseInt(s,10);if(!o(v))throw new TypeError("Not a finite number: "+s+" ("+typeof s+")");if(!u(v))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var p=String(v),S=Math.abs(v%100),f=11<=S&&S<=13,n=p.charAt(p.length-1);return p+(f?"th":"1"===n?"st":"2"===n?"nd":"3"===n?"rd":"th")},toWords:R,toWordsOrdinal:function(s){return $(R(s))}};_.exports&&(l=_.exports=W),l.numberToWords=W}()}}]);