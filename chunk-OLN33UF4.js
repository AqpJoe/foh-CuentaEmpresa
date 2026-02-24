import{$b as _i,Ab as Mt,Cb as Bo,Db as $o,Eb as w,Fb as ke,Gb as Ne,Hb as Le,Hc as Go,Ib as Di,Jb as Ci,Jc as Nn,Kb as Ge,Kc as Wo,Lb as mt,Lc as Ce,Mb as bt,Mc as H,Nb as yt,Nc as se,Ob as On,Pb as Ho,Qb as De,Qc as C,R as ee,Ra as O,Rb as K,Rc as Si,S as vi,Sa as ko,Sb as de,T as Y,U as E,Ub as B,Uc as Ct,V as N,Vb as We,Vc as qo,Wa as q,Wb as qe,Wc as Ko,X as x,Xa as No,Xb as me,Y as ze,Yb as jo,Yc as _,Z as f,Za as ht,Zb as pe,Zc as Ke,_ as Mo,_b as he,ab as Oe,ac as Uo,bb as g,ca as Ft,cc as zo,da as It,db as ft,dc as vt,ea as Ee,eb as Lo,ec as kn,f as ye,fc as k,ga as Tn,gb as Ro,gc as Ot,ha as ve,hc as kt,ib as U,j as Io,jb as L,ka as Oo,kb as v,la as V,lb as gt,mb as y,nb as re,ob as te,p as xo,pa as Me,qa as D,qb as Mn,rb as Po,rc as A,sa as Se,sb as Vo,tc as Ei,uc as Dt,v as To,wa as xt,wb as ne,zb as Tt}from"./chunk-HZ2KCH2Y.js";import{a as m,b as J,d as Fo}from"./chunk-OXVY4BEJ.js";var Qo=null;function _t(){return Qo}function Ka(t){Qo??=t}var wi=class{},Xt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(Xo),providedIn:"platform"})}return t})(),Ya=new x(""),Xo=(()=>{class t extends Xt{_location;_history;_doc=f(ve);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _t().getBaseHref(this._doc)}onPopState(e){let n=_t().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=_t().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ln(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Yo(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Re(t){return t&&t[0]!=="?"?`?${t}`:t}var Nt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(Jo),providedIn:"root"})}return t})(),Rn=new x(""),Jo=(()=>{class t extends Nt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(ve).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ln(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Re(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Re(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Re(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ze(Xt),ze(Rn,8))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),er=(()=>{class t{_subject=new ye;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Xa(Yo(Zo(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Re(n))}normalize(e){return t.stripTrailingSlash(Qa(this._basePath,Zo(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Re(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Re(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Re;static joinWithSlash=Ln;static stripTrailingSlash=Yo;static \u0275fac=function(n){return new(n||t)(ze(Nt))};static \u0275prov=E({token:t,factory:()=>Za(),providedIn:"root"})}return t})();function Za(){return new er(ze(Nt))}function Qa(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Zo(t){return t.replace(/\/index.html$/,"")}function Xa(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ja=(()=>{class t extends Nt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Ln(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Re(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Re(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ze(Xt),ze(Rn,8))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),lr={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},qn=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(qn||{});var fe=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(fe||{}),R=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(R||{}),_e=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(_e||{}),ae={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ur(t){return De(t)[K.LocaleId]}function cr(t,i,e){let n=De(t),o=[n[K.DayPeriodsFormat],n[K.DayPeriodsStandalone]],r=Fe(o,i);return Fe(r,e)}function dr(t,i,e){let n=De(t),o=[n[K.DaysFormat],n[K.DaysStandalone]],r=Fe(o,i);return Fe(r,e)}function pr(t,i,e){let n=De(t),o=[n[K.MonthsFormat],n[K.MonthsStandalone]],r=Fe(o,i);return Fe(r,e)}function hr(t,i){let n=De(t)[K.Eras];return Fe(n,i)}function Jt(t,i){let e=De(t);return Fe(e[K.DateFormat],i)}function en(t,i){let e=De(t);return Fe(e[K.TimeFormat],i)}function tn(t,i){let n=De(t)[K.DateTimeFormat];return Fe(n,i)}function Ve(t,i){let e=De(t),n=e[K.NumberSymbols][i];if(typeof n>"u"){if(i===ae.CurrencyDecimal)return e[K.NumberSymbols][ae.Decimal];if(i===ae.CurrencyGroup)return e[K.NumberSymbols][ae.Group]}return n}function Ni(t,i){return De(t)[K.NumberFormats][i]}function el(t){return De(t)[K.Currencies]}function fr(t){if(!t[K.ExtraData])throw new ee(2303,!1)}function gr(t){let i=De(t);return fr(i),(i[K.ExtraData][2]||[]).map(n=>typeof n=="string"?Ai(n):[Ai(n[0]),Ai(n[1])])}function mr(t,i,e){let n=De(t);fr(n);let o=[n[K.ExtraData][0],n[K.ExtraData][1]],r=Fe(o,i)||[];return Fe(r,e)||[]}function Fe(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new ee(2304,!1)}function Ai(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function br(t,i,e="en"){let n=el(e)[t]||lr[t]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||t}var tl=2;function yr(t){let i,e=lr[t];return e&&(i=e[2]),typeof i=="number"?i:tl}var nl=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Pn={},il=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function vr(t,i,e,n){let o=pl(t);i=Ye(e,i)||i;let s=[],a;for(;i;)if(a=il.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=Cr(n,l),o=dl(o,n));let u="";return s.forEach(c=>{let d=ul(c);u+=d?d(o,e,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function jn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Ye(t,i){let e=ur(t);if(Pn[e]??={},Pn[e][i])return Pn[e][i];let n="";switch(i){case"shortDate":n=Jt(t,_e.Short);break;case"mediumDate":n=Jt(t,_e.Medium);break;case"longDate":n=Jt(t,_e.Long);break;case"fullDate":n=Jt(t,_e.Full);break;case"shortTime":n=en(t,_e.Short);break;case"mediumTime":n=en(t,_e.Medium);break;case"longTime":n=en(t,_e.Long);break;case"fullTime":n=en(t,_e.Full);break;case"short":let o=Ye(t,"shortTime"),r=Ye(t,"shortDate");n=Vn(tn(t,_e.Short),[o,r]);break;case"medium":let s=Ye(t,"mediumTime"),a=Ye(t,"mediumDate");n=Vn(tn(t,_e.Medium),[s,a]);break;case"long":let l=Ye(t,"longTime"),u=Ye(t,"longDate");n=Vn(tn(t,_e.Long),[l,u]);break;case"full":let c=Ye(t,"fullTime"),d=Ye(t,"fullDate");n=Vn(tn(t,_e.Full),[c,d]);break}return n&&(Pn[e][i]=n),n}function Vn(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function Pe(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function ol(t,i){return Pe(t,3).substring(0,i)}function Z(t,i,e=0,n=!1,o=!1){return function(r,s){let a=rl(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return ol(a,i);let l=Ve(s,ae.MinusSign);return Pe(a,i,l,n,o)}}function rl(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new ee(2301,!1)}}function j(t,i,e=fe.Format,n=!1){return function(o,r){return sl(o,r,t,i,e,n)}}function sl(t,i,e,n,o,r){switch(e){case 2:return pr(i,o,n)[t.getMonth()];case 1:return dr(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=gr(i),c=mr(i,o,n),d=u.findIndex(p=>{if(Array.isArray(p)){let[h,b]=p,S=s>=h.hours&&a>=h.minutes,I=s<b.hours||s===b.hours&&a<b.minutes;if(h.hours<b.hours){if(S&&I)return!0}else if(S||I)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return cr(i,o,n)[s<12?0:1];case 3:return hr(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new ee(2302,!1)}}function Bn(t){return function(i,e,n){let o=-1*n,r=Ve(e,ae.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+Pe(s,2,r)+Pe(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+Pe(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+Pe(s,2,r)+":"+Pe(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+Pe(s,2,r)+":"+Pe(Math.abs(o%60),2,r);default:throw new ee(2310,!1)}}}var al=0,Hn=4;function ll(t){let i=jn(t,al,1).getDay();return jn(t,0,1+(i<=Hn?Hn:Hn+7)-i)}function Dr(t){let i=t.getDay(),e=i===0?-3:Hn-i;return jn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Fi(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=Dr(e),s=ll(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return Pe(o,t,Ve(n,ae.MinusSign))}}function $n(t,i=!1){return function(e,n){let r=Dr(e).getFullYear();return Pe(r,t,Ve(n,ae.MinusSign),i)}}var Ii={};function ul(t){if(Ii[t])return Ii[t];let i;switch(t){case"G":case"GG":case"GGG":i=j(3,R.Abbreviated);break;case"GGGG":i=j(3,R.Wide);break;case"GGGGG":i=j(3,R.Narrow);break;case"y":i=Z(0,1,0,!1,!0);break;case"yy":i=Z(0,2,0,!0,!0);break;case"yyy":i=Z(0,3,0,!1,!0);break;case"yyyy":i=Z(0,4,0,!1,!0);break;case"Y":i=$n(1);break;case"YY":i=$n(2,!0);break;case"YYY":i=$n(3);break;case"YYYY":i=$n(4);break;case"M":case"L":i=Z(1,1,1);break;case"MM":case"LL":i=Z(1,2,1);break;case"MMM":i=j(2,R.Abbreviated);break;case"MMMM":i=j(2,R.Wide);break;case"MMMMM":i=j(2,R.Narrow);break;case"LLL":i=j(2,R.Abbreviated,fe.Standalone);break;case"LLLL":i=j(2,R.Wide,fe.Standalone);break;case"LLLLL":i=j(2,R.Narrow,fe.Standalone);break;case"w":i=Fi(1);break;case"ww":i=Fi(2);break;case"W":i=Fi(1,!0);break;case"d":i=Z(2,1);break;case"dd":i=Z(2,2);break;case"c":case"cc":i=Z(7,1);break;case"ccc":i=j(1,R.Abbreviated,fe.Standalone);break;case"cccc":i=j(1,R.Wide,fe.Standalone);break;case"ccccc":i=j(1,R.Narrow,fe.Standalone);break;case"cccccc":i=j(1,R.Short,fe.Standalone);break;case"E":case"EE":case"EEE":i=j(1,R.Abbreviated);break;case"EEEE":i=j(1,R.Wide);break;case"EEEEE":i=j(1,R.Narrow);break;case"EEEEEE":i=j(1,R.Short);break;case"a":case"aa":case"aaa":i=j(0,R.Abbreviated);break;case"aaaa":i=j(0,R.Wide);break;case"aaaaa":i=j(0,R.Narrow);break;case"b":case"bb":case"bbb":i=j(0,R.Abbreviated,fe.Standalone,!0);break;case"bbbb":i=j(0,R.Wide,fe.Standalone,!0);break;case"bbbbb":i=j(0,R.Narrow,fe.Standalone,!0);break;case"B":case"BB":case"BBB":i=j(0,R.Abbreviated,fe.Format,!0);break;case"BBBB":i=j(0,R.Wide,fe.Format,!0);break;case"BBBBB":i=j(0,R.Narrow,fe.Format,!0);break;case"h":i=Z(3,1,-12);break;case"hh":i=Z(3,2,-12);break;case"H":i=Z(3,1);break;case"HH":i=Z(3,2);break;case"m":i=Z(4,1);break;case"mm":i=Z(4,2);break;case"s":i=Z(5,1);break;case"ss":i=Z(5,2);break;case"S":i=Z(6,1);break;case"SS":i=Z(6,2);break;case"SSS":i=Z(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Bn(0);break;case"ZZZZZ":i=Bn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Bn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Bn(2);break;default:return null}return Ii[t]=i,i}function Cr(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function cl(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function dl(t,i,e){let o=t.getTimezoneOffset(),r=Cr(i,o);return cl(t,-1*(r-o))}function pl(t){if(tr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return jn(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(nl))return hl(n)}let i=new Date(t);if(!tr(i))throw new ee(2311,!1);return i}function hl(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function tr(t){return t instanceof Date&&!isNaN(t.valueOf())}var fl=/^(\d+)?\.((\d+)(-(\d+))?)?$/,nr=22,Un=".",nn="0",gl=";",ml=",",xi="#",ir="\xA4";function _r(t,i,e,n,o,r,s=!1){let a="",l=!1;if(!isFinite(t))a=Ve(e,ae.Infinity);else{let u=yl(t);s&&(u=bl(u));let c=i.minInt,d=i.minFrac,p=i.maxFrac;if(r){let $=r.match(fl);if($===null)throw new ee(2306,!1);let ce=$[1],et=$[3],pt=$[5];ce!=null&&(c=Ti(ce)),et!=null&&(d=Ti(et)),pt!=null?p=Ti(pt):et!=null&&d>p&&(p=d)}vl(u,d,p);let h=u.digits,b=u.integerLen,S=u.exponent,I=[];for(l=h.every($=>!$);b<c;b++)h.unshift(0);for(;b<0;b++)h.unshift(0);b>0?I=h.splice(b,h.length):(I=h,h=[0]);let P=[];for(h.length>=i.lgSize&&P.unshift(h.splice(-i.lgSize,h.length).join(""));h.length>i.gSize;)P.unshift(h.splice(-i.gSize,h.length).join(""));h.length&&P.unshift(h.join("")),a=P.join(Ve(e,n)),I.length&&(a+=Ve(e,o)+I.join("")),S&&(a+=Ve(e,ae.Exponential)+"+"+S)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function Er(t,i,e,n,o){let r=Ni(i,qn.Currency),s=wr(r,Ve(i,ae.MinusSign));return s.minFrac=yr(n),s.maxFrac=s.minFrac,_r(t,s,i,ae.CurrencyGroup,ae.CurrencyDecimal,o).replace(ir,e).replace(ir,"").trim()}function Sr(t,i,e){let n=Ni(i,qn.Decimal),o=wr(n,Ve(i,ae.MinusSign));return _r(t,o,i,ae.Group,ae.Decimal,e)}function wr(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(gl),o=n[0],r=n[1],s=o.indexOf(Un)!==-1?o.split(Un):[o.substring(0,o.lastIndexOf(nn)+1),o.substring(o.lastIndexOf(nn)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(xi));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===nn?e.minFrac=e.maxFrac=c+1:d===xi?e.maxFrac=c+1:e.posSuf+=d}let u=a.split(ml);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-e.posPre.length-e.posSuf.length,d=r.indexOf(xi);e.negPre=r.substring(0,d).replace(/'/g,""),e.negSuf=r.slice(d+c).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function bl(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function yl(t){let i=Math.abs(t)+"",e=0,n,o,r,s,a;for((o=i.indexOf(Un))>-1&&(i=i.replace(Un,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===nn;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===nn;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>nr&&(n=n.splice(0,nr-1),e=o-1,o=1),{digits:n,exponent:e,integerLen:o}}function vl(t,i,e){if(i>e)throw new ee(2307,!1);let n=t.digits,o=n.length-t.integerLen,r=Math.min(Math.max(i,o),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+t.integerLen,c=n.reduceRight(function(d,p,h,b){return p=p+d,b[h]=p<10?p:p-10,l&&(b[h]===0&&h>=u?b.pop():l=!1),p>=10?1:0},0);c&&(n.unshift(c),t.integerLen++)}function Ti(t){let i=parseInt(t);if(isNaN(i))throw new ee(2305,!1);return i}var Mi=/\s+/,or=[],Li=(()=>{class t{_ngEl;_renderer;initialClasses=or;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Mi):or}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Mi):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Mi).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(g(Se),g(Oe))};static \u0275dir=v({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})(),Dl=(()=>{class t{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletEnvironmentInjector;ngComponentOutletContent;ngComponentOutletNgModule;ngComponentOutletNgModuleFactory;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(e){this._viewContainerRef=e}_needToReCreateNgModuleInstance(e){return e.ngComponentOutletNgModule!==void 0||e.ngComponentOutletNgModuleFactory!==void 0}_needToReCreateComponentInstance(e){return e.ngComponentOutlet!==void 0||e.ngComponentOutletContent!==void 0||e.ngComponentOutletInjector!==void 0||e.ngComponentOutletEnvironmentInjector!==void 0||this._needToReCreateNgModuleInstance(e)}ngOnChanges(e){if(this._needToReCreateComponentInstance(e)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){let n=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(e)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=Ro(this.ngComponentOutletNgModule,rr(n)):this.ngComponentOutletNgModuleFactory?this._moduleRef=this.ngComponentOutletNgModuleFactory.create(rr(n)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:n,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent,environmentInjector:this.ngComponentOutletEnvironmentInjector})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(let e of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(e,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(e){for(let[n,o]of this._inputsUsed)o?(e.setInput(n,this.ngComponentOutletInputs[n]),this._inputsUsed.set(n,!1)):(e.setInput(n,void 0),this._inputsUsed.delete(n))}static \u0275fac=function(n){return new(n||t)(g(ft))};static \u0275dir=v({type:t,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletEnvironmentInjector:"ngComponentOutletEnvironmentInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},exportAs:["ngComponentOutlet"],features:[Me]})}return t})();function rr(t){return t.get(Lo).injector}var zn=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ar=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new zn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),sr(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);sr(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(g(ft),g(ht),g(qo))};static \u0275dir=v({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function sr(t,i){t.context.$implicit=i.item}var on=(()=>{class t{_viewContainer;_context=new Gn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ar(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ar(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(g(ft),g(ht))};static \u0275dir=v({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Gn=class{$implicit=null;ngIf=null};function ar(t,i){if(t&&!t.createEmbeddedView)throw new ee(2020,!1)}var Wn=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},Ri=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Cl=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,o){this.ngSwitch=o,o._addCase(),this._view=new Wn(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(g(ft),g(ht),g(Ri,9))};static \u0275dir=v({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})(),_l=(()=>{class t{constructor(e,n,o){o._addDefault(new Wn(e,n))}static \u0275fac=function(n){return new(n||t)(g(ft),g(ht),g(Ri,9))};static \u0275dir=v({type:t,selectors:[["","ngSwitchDefault",""]]})}return t})();var Pi=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:ko.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(g(Se),g(Ko),g(Oe))};static \u0275dir=v({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Ze=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(g(ft))};static \u0275dir=v({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Me]})}return t})();function Lt(t,i){return new ee(2100,!1)}var Oi=class{createSubscription(i,e,n){return Ce(()=>i.subscribe({next:e,error:n}))}dispose(i){Ce(()=>i.unsubscribe())}},ki=class{createSubscription(i,e,n){return i.then(o=>e?.(o),o=>n?.(o)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},El=new ki,Sl=new Oi,wl=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=f(Oo);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Mn(e))return El;if(Po(e))return Sl;throw Lt(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(g(Ct,16))};static \u0275pipe=gt({name:"async",type:t,pure:!1})}return t})();var Al=(()=>{class t{transform(e){if(e==null)return null;if(typeof e!="string")throw Lt(t,e);return e.toUpperCase()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=gt({name:"uppercase",type:t,pure:!0})}return t})(),Fl="mediumDate",Fr=new x(""),Ir=new x(""),Il=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Fl,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return vr(e,s,r||this.locale,a)}catch(s){throw Lt(t,s.message)}}static \u0275fac=function(n){return new(n||t)(g(Nn,16),g(Fr,24),g(Ir,24))};static \u0275pipe=gt({name:"date",type:t,pure:!0})}return t})();var xl=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,o){if(!xr(e))return null;o||=this._locale;try{let r=Tr(e);return Sr(r,o,n)}catch(r){throw Lt(t,r.message)}}static \u0275fac=function(n){return new(n||t)(g(Nn,16))};static \u0275pipe=gt({name:"number",type:t,pure:!0})}return t})();var Tl=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,o="symbol",r,s){if(!xr(e))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=br(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=Tr(e);return Er(l,s,a,n,r)}catch(l){throw Lt(t,l.message)}}static \u0275fac=function(n){return new(n||t)(g(Nn,16),g(Wo,16))};static \u0275pipe=gt({name:"currency",type:t,pure:!0})}return t})();function xr(t){return!(t==null||t===""||t!==t)}function Tr(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new ee(2309,!1);return t}var Ml=(()=>{class t{transform(e,n,o){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw Lt(t,e);return e.slice(n,o)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=gt({name:"slice",type:t,pure:!1})}return t})();var ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();function Ol(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Vi=class{};var Rl="browser",Pl="server";function Rt(t){return t===Rl}function $i(t){return t===Pl}var Fp=(()=>{class t{static \u0275prov=E({token:t,providedIn:"root",factory:()=>new Bi(f(ve),window)})}return t})(),Bi=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(J(m({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=Vl(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(vi(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(J(m({},e),{left:o-s[0],top:r-s[1]}))}};function Vl(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function tt(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[tt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Or(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Et(t,i){if(t&&i){let e=n=>{Or(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Bl(){return window.innerWidth-document.documentElement.offsetWidth}function kr(t){typeof t=="string"?Et(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,Bl()+"px"),Et(document.body,t?.className||"p-overflow-hidden"))}function nt(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Nr(t){typeof t=="string"?nt(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),nt(document.body,t?.className||"p-overflow-hidden"))}function rn(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Lr(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],o=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=o.width||t.offsetWidth,i.height=o.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function zi(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function Ui(t){return t?Math.abs(t.scrollLeft):0}function $l(){let t=document.documentElement;return(window.pageXOffset||Ui(t))-(t.clientLeft||0)}function Hl(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function jl(t){return t?getComputedStyle(t).direction==="rtl":!1}function Np(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Lr(t),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=Hl(),b=$l(),S=zi(),I,P,$="top";p.top+c+l>S.height?(I=p.top+h-l,$="bottom",I<0&&(I=h)):I=c+p.top+h,p.left+u>S.width?P=Math.max(0,p.left+b+d-u):P=p.left+b,jl(t)?t.style.insetInlineEnd=P+"px":t.style.insetInlineStart=P+"px",t.style.top=I+"px",t.style.transformOrigin=$,e&&(t.style.marginTop=$==="bottom"?`calc(${(o=(n=rn(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=rn(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Rr(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Gi(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Lp(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Lr(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=zi(),u,c,d=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,t.style.top=u+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=d,e){let p=(o=rn(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=d==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Pr(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Ul(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Pr(t))}function Pt(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Vr(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),Pt(i)?i:void 0}function zl(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Vr(r);return Ul(s)?s:r?.nodeType===9?r:void 0}}}function Rp(t,i){let e=zl(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var Hi;function Pp(t){if(t){let i=getComputedStyle(t);return t.offsetHeight-t.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(Hi!=null)return Hi;let i=document.createElement("div");Rr(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),Hi=e,e}}var ji;function Mr(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(ji!=null)return ji;let i=document.createElement("div");Rr(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),ji=e,e}}function Vp(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function Yn(t,i={}){if(Pt(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Yn(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function Zn(t,i={},...e){if(t){let n=document.createElement(t);return Yn(n,i),n.append(...e),n}}function Bp(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function Gl(t,i){return Pt(t)?Array.from(t.querySelectorAll(i)):[]}function Vt(t,i){return Pt(t)?t.matches(i)?t:t.querySelector(i):null}function $p(t,i){t&&document.activeElement!==t&&t.focus(i)}function Hp(t,i){if(Pt(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Wl(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}var Qe=null;function jp(){if(!Qe){Qe={};let t=Wl();t.browser&&(Qe[t.browser]=!0,Qe.version=t.version),Qe.chrome?Qe.webkit=!0:Qe.webkit&&(Qe.safari=!0)}return Qe}function Br(t,i=""){let e=Gl(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function Up(t,i){let e=Br(t,i);return e.length>0?e[0]:null}function Wi(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function ql(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display=e,t.style.visibility=i,n}return 0}function Kl(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display=e,t.style.visibility=i,n}return 0}function zp(t){var i;if(t){let e=(i=Pr(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function Gp(t,i){let e=Br(t,i);return e.length>0?e[e.length-1]:null}function qi(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||Ui(document.documentElement)||Ui(document.body)||0)}}return{top:"auto",left:"auto"}}function Qn(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Wp(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Ki(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function qp(){return/(android)/i.test(navigator.userAgent)}function Kp(t){return!!(t&&t.offsetParent!=null)}function Yp(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function Zp(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Qp(t,i){var e,n;if(t){let o=t.parentElement,r=qi(o),s=zi(),a=t.offsetParent?t.offsetWidth:Kl(t),l=t.offsetParent?t.offsetHeight:ql(t),u=Gi((e=o?.children)==null?void 0:e[0]),c=Qn((n=o?.children)==null?void 0:n[0]),d="",p="";r.left+u+a>s.width-Mr()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-Mr()+"px"):d="-100%":d="100%",t.getBoundingClientRect().top+c+l>s.height?p=`-${l-c}px`:p="0px",t.style.top=p,t.style.insetInlineStart=d}}function $r(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Xp(t,i){let e=Vr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Jp(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,c=Qn(i);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Hr(t,i="",e){Pt(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function jr(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Yl=Object.defineProperty,Ur=Object.getOwnPropertySymbols,Zl=Object.prototype.hasOwnProperty,Ql=Object.prototype.propertyIsEnumerable,zr=(t,i,e)=>i in t?Yl(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Gr=(t,i)=>{for(var e in i||(i={}))Zl.call(i,e)&&zr(t,e,i[e]);if(Ur)for(var e of Ur(i))Ql.call(i,e)&&zr(t,e,i[e]);return t};function Wr(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Wr(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Xl(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Yi(...t){return t?.reduce((i,e={})=>{for(let n in e){let o=e[n];if(n==="style")i.style=Gr(Gr({},i.style),e.style);else if(n==="class"||n==="className")i[n]=Wr(i[n],e[n]);else if(Xl(o)){let r=i[n];i[n]=r?(...s)=>{r(...s),o(...s)}:o}else i[n]=o}return i},{})}var Jl=Object.defineProperty,qr=Object.getOwnPropertySymbols,eu=Object.prototype.hasOwnProperty,tu=Object.prototype.propertyIsEnumerable,Kr=(t,i,e)=>i in t?Jl(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,nu=(t,i)=>{for(var e in i||(i={}))eu.call(i,e)&&Kr(t,e,i[e]);if(qr)for(var e of qr(i))tu.call(i,e)&&Kr(t,e,i[e]);return t};function je(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Zi(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!Zi(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!Zi(t[a],i[a],e))return!1;return!0}function iu(t,i){return Zi(t,i)}function Xn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function M(t){return!je(t)}function it(t,i){if(!t||!i)return null;try{let e=t[i];if(M(e))return e}catch{}if(Object.keys(t).length){if(Xn(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Ie(t,i,e){return e?it(t,e)===it(i,e):iu(t,i)}function Yr(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Ie(t,e))return!0}return!1}function Be(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Zr(t={},i={}){let e=nu({},t);return Object.keys(i).forEach(n=>{let o=n;Be(i[o])&&o in t&&Be(t[o])?e[o]=Zr(t[o],i[o]):e[o]=i[o]}),e}function Qi(...t){return t.reduce((i,e,n)=>n===0?e:Zr(i,e),{})}function ih(t,i){let e=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===t){e=n;break}}return e}function oh(t,i){let e;if(M(t))try{e=t.findLast(i)}catch{e=[...t].reverse().find(i)}return e}function rh(t,i){let e=-1;if(M(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ie(t,...i){return Xn(t)?t(...i):t}function xe(t,i=!0){return typeof t=="string"&&(i||t!=="")}function ot(t){return xe(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Jn(t,i="",e={}){let n=ot(i).split("."),o=n.shift();if(o){if(Be(t)){let r=Object.keys(t).find(s=>ot(s)===o)||"";return Jn(ie(t[r],e),n.join("."),e)}return}return ie(t,e)}function Xi(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function sh(t){return t instanceof Date}function Qr(t){return M(t)&&!isNaN(t)}function ah(t=""){return M(t)&&t.length===1&&!!t.match(/\S| /)}function $e(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Ji(...t){return Qi(...t)}function St(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function we(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function lh(t,i,e){t&&i!==e&&(e>=t.length&&(e%=t.length,i%=t.length),t.splice(e,0,t.splice(i,1)[0]))}function ei(t){return xe(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}var ti={};function sn(t="pui_id_"){return Object.hasOwn(ti,t)||(ti[t]=0),ti[t]++,`${t}${ti[t]}`}var Xr=["*"],ou=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(ou||{}),fh=(()=>{class t{requireConfirmationSource=new ye;acceptConfirmationSource=new ye;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var le=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),gh=(()=>{class t{static AND="and";static OR="or"}return t})(),mh=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let c=it(l,u);if(this.filters[r](c,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o),s=we(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:we(e.toString()).toLocaleLowerCase(o)==we(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:we(e.toString()).toLocaleLowerCase(o)!=we(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Ie(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bh=(()=>{class t{messageSource=new ye;clearSource=new ye;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),yh=(()=>{class t{clickSource=new ye;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Xr,decls:1,vars:0,template:function(n,o){n&1&&(We(),qe(0))},encapsulation:2})}return t})(),Dh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Xr,decls:1,vars:0,template:function(n,o){n&1&&(We(),qe(0))},encapsulation:2})}return t})(),rt=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(g(ht))};static \u0275dir=v({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Q=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ge]})}return t})(),Ch=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})(),_h=(()=>{class t{dragStartSource=new ye;dragStopSource=new ye;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(e){this.dragStartSource.next(e)}stopDrag(e){this.dragStopSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ru=Object.defineProperty,su=Object.defineProperties,au=Object.getOwnPropertyDescriptors,ni=Object.getOwnPropertySymbols,ts=Object.prototype.hasOwnProperty,ns=Object.prototype.propertyIsEnumerable,Jr=(t,i,e)=>i in t?ru(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,G=(t,i)=>{for(var e in i||(i={}))ts.call(i,e)&&Jr(t,e,i[e]);if(ni)for(var e of ni(i))ns.call(i,e)&&Jr(t,e,i[e]);return t},$t=(t,i)=>su(t,au(i)),Xe=(t,i)=>{var e={};for(var n in t)ts.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&ni)for(var n of ni(t))i.indexOf(n)<0&&ns.call(t,n)&&(e[n]=t[n]);return e};var lu=jr(),X=lu,an=/{([^}]*)}/g,is=/(\d+\s+[\+\-\*\/]\s+\d+)/g,os=/var\([^)]+\)/g;function es(t){return xe(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function uu(t){return Be(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function cu(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function eo(t="",i=""){return cu(`${xe(t,!1)&&xe(i,!1)?`${t}-`:t}${i}`)}function rs(t="",i=""){return`--${eo(t,i)}`}function du(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function ss(t,i="",e="",n=[],o){if(xe(t)){let r=t.trim();if(du(r))return;if($e(r,an)){let s=r.replaceAll(an,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>$e(u,c)));return`var(${rs(e,ei(l.join("-")))}${M(o)?`, ${o}`:""})`});return $e(s.replace(os,"0"),is)?`calc(${s})`:s}return r}else if(Qr(t))return t}function pu(t,i,e){xe(i,!1)&&t.push(`${i}:${e};`)}function Bt(t,i){return t?`${t}{${i}}`:""}function as(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,p=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(d=d===h?null:h),!d&&(h==="("&&p++,h===")"&&p--,(h===","||u===s.length)&&p===0)){let b=c.trim();b.startsWith("dt(")?l.push(as(b,a)):l.push(n(b)),c="",u++;continue}h!==void 0&&(c+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var no=t=>{var i;let e=T.getTheme(),n=to(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=to(e,t,void 0,"value");return{name:o,variable:n,value:r}},Je=(...t)=>to(T.getTheme(),...t),to=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=T.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=$e(i,an)?i:`{${i}}`;return n==="value"||je(n)&&a==="strict"?T.getTokenValue(i):ss(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Ht(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=ie(i[r],{dt:Je}))!=null?s:"")},"");return as(e,Je)}return ie(t,{dt:Je})}var hu=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?Ji(i,n):n,this},options(n){return e=e?G(G({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=$t(G({},i),{semantic:$t(G({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:G(G({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:G(G({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=$t(G({},i),{semantic:G(G({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?T.getPreset():i,options:o?T.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?Ji(T.getPreset(),i):i,options:o?G(G({},T.getOptions()),e):e};return T.setTheme(r),r},use(n){let o=this.define(n);return T.setTheme(o),o}}};function fu(t,i={}){let e=T.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let p in c){let h=c[p],b=uu(h),S=$e(p,r)?eo(d):eo(d,ei(p));if(Be(b))l.push({node:b,path:S});else{let I=rs(S),P=ss(b,S,n,[r]);pu(a,I,P);let $=S;n&&$.startsWith(n+"-")&&($=$.slice(n.length+1)),s.push($.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Bt(o,u)}}var He={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return fu(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:p,options:h}=i,b,S,I,P,$,ce,et;if(M(p)&&h.transform!=="strict"){let{primitive:pt,semantic:mn,extend:bn}=p,Yt=mn||{},{colorScheme:yn}=Yt,vn=Xe(Yt,["colorScheme"]),Dn=bn||{},{colorScheme:Cn}=Dn,Zt=Xe(Dn,["colorScheme"]),Qt=yn||{},{dark:_n}=Qt,En=Xe(Qt,["dark"]),Sn=Cn||{},{dark:wn}=Sn,An=Xe(Sn,["dark"]),Fn=M(pt)?this._toVariables({primitive:pt},h):{},In=M(vn)?this._toVariables({semantic:vn},h):{},xn=M(En)?this._toVariables({light:En},h):{},Eo=M(_n)?this._toVariables({dark:_n},h):{},So=M(Zt)?this._toVariables({semantic:Zt},h):{},wo=M(An)?this._toVariables({light:An},h):{},Ao=M(wn)?this._toVariables({dark:wn},h):{},[Ta,Ma]=[(r=Fn.declarations)!=null?r:"",Fn.tokens],[Oa,ka]=[(s=In.declarations)!=null?s:"",In.tokens||[]],[Na,La]=[(a=xn.declarations)!=null?a:"",xn.tokens||[]],[Ra,Pa]=[(l=Eo.declarations)!=null?l:"",Eo.tokens||[]],[Va,Ba]=[(u=So.declarations)!=null?u:"",So.tokens||[]],[$a,Ha]=[(c=wo.declarations)!=null?c:"",wo.tokens||[]],[ja,Ua]=[(d=Ao.declarations)!=null?d:"",Ao.tokens||[]];b=this.transformCSS(t,Ta,"light","variable",h,n,o),S=Ma;let za=this.transformCSS(t,`${Oa}${Na}`,"light","variable",h,n,o),Ga=this.transformCSS(t,`${Ra}`,"dark","variable",h,n,o);I=`${za}${Ga}`,P=[...new Set([...ka,...La,...Pa])];let Wa=this.transformCSS(t,`${Va}${$a}color-scheme:light`,"light","variable",h,n,o),qa=this.transformCSS(t,`${ja}color-scheme:dark`,"dark","variable",h,n,o);$=`${Wa}${qa}`,ce=[...new Set([...Ba,...Ha,...Ua])],et=ie(p.css,{dt:Je})}return{primitive:{css:b,tokens:S},semantic:{css:I,tokens:P},global:{css:$,tokens:ce},style:et}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,p;if(M(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),b=i,{colorScheme:S,extend:I,css:P}=b,$=Xe(b,["colorScheme","extend","css"]),ce=I||{},{colorScheme:et}=ce,pt=Xe(ce,["colorScheme"]),mn=S||{},{dark:bn}=mn,Yt=Xe(mn,["dark"]),yn=et||{},{dark:vn}=yn,Dn=Xe(yn,["dark"]),Cn=M($)?this._toVariables({[h]:G(G({},$),pt)},e):{},Zt=M(Yt)?this._toVariables({[h]:G(G({},Yt),Dn)},e):{},Qt=M(bn)?this._toVariables({[h]:G(G({},bn),vn)},e):{},[_n,En]=[(a=Cn.declarations)!=null?a:"",Cn.tokens||[]],[Sn,wn]=[(l=Zt.declarations)!=null?l:"",Zt.tokens||[]],[An,Fn]=[(u=Qt.declarations)!=null?u:"",Qt.tokens||[]],In=this.transformCSS(h,`${_n}${Sn}`,"light","variable",e,o,r,s),xn=this.transformCSS(h,An,"dark","variable",e,o,r,s);c=`${In}${xn}`,d=[...new Set([...En,...wn,...Fn])],p=ie(P,{dt:Je})}return{css:c,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${ie(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(Be(c)&&Object.hasOwn(c,"css")){let d=St(c.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,p])=>c.push(`${d}="${p}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${St(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&an.test(this.value)){let d=this.value.trim().replace(an,p=>{var h;let b=p.slice(1,-1),S=this.tokens[b];if(!S)return console.warn(`Token not found for path: ${b}`),"__UNRESOLVED__";let I=S.computed(a,l,u);return Array.isArray(I)&&I.length===2?`light-dark(${I[0].value},${I[1].value})`:(h=I?.value)!=null?h:"__UNRESOLVED__"});c=is.test(d.replace(os,"0"))?`calc(${d})`:d}return je(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let p=$e(c,i.variable.excludedKeyRegex)?l:l?`${l}.${es(c)}`:es(c),h=u?`${u}.${c}`:c;Be(d)?s(d,p,h):(o[p]||(o[p]={paths:[],computed:(b,S={},I=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,S.binding,I);if(b&&b!=="none")for(let P=0;P<o[p].paths.length;P++){let $=o[p].paths[P];if($.scheme===b)return $.computed(b,S.binding,I)}return o[p].paths.map(P=>P.computed(P.scheme,S[P.scheme],I))}}),o[p].paths.push({path:h,value:d,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!$e(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=Xe(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Bt(M(i)?`${t}${i},${t} ${i}`:t,n):Bt(t,Bt(i??":root,:host",n))},transformCSS(t,i,e,n,o={},r,s,a){if(M(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((c,{type:d,selector:p})=>(M(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),c),""):Bt(a??":root,:host",i)}if(l){let u={name:"primeui",order:"primeui"};Be(l)&&(u.name=ie(l.name,{name:t,type:n})),M(u.name)&&(i=Bt(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},T={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=$t(G({},i),{options:G(G({},this.defaults.options),i.options)}),this._tokens=He.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),X.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=$t(G({},this.theme),{preset:t}),this._tokens=He.createTokens(t,this.defaults),this.clearLoadedStyleNames(),X.emit("preset:change",t),X.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=$t(G({},this.theme),{options:t}),this.clearLoadedStyleNames(),X.emit("options:change",t),X.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return He.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return He.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPreset(o)},getLayerOrderCSS(t=""){return He.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return He.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return He.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return He.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),X.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&X.emit("theme:load"))}};function Oh(...t){let i=Qi(T.getPreset(),...t);return T.setPreset(i),i}function kh(t){return hu().surfacePalette(t).update().preset}var ls=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var gu=0,us=(()=>{class t{document=f(ve);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++gu}`,id:c=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let S=this.document.head;Hr(s,"nonce",p),h&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),Yn(s,{type:"text/css",media:d,nonce:p,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},mu=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,W=(()=>{class t{name="base";useStyle=f(us);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Ht`${ie(e,{dt:Je})}`);return r?this.useStyle.use(St(r),m({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>T.transformCSS(e.name||this.name,`${o}${Ht`${n}`}`));loadBaseCSS=(e={})=>this.load(mu,e);loadBaseStyle=(e={},n="")=>this.load(ls,e,(o="")=>T.transformCSS(e.name||this.name,`${o}${Ht`${n}`}`));getCommonTheme=e=>T.getCommon(this.name,e);getComponentTheme=e=>T.getComponent(this.name,e);getPresetTheme=(e,n,o)=>T.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>T.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=ie(this.css,{dt:Je}),r=St(Ht`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>T.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[T.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Ht`${ie(this.style,{dt:Je})}`,a=St(T.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bu=(()=>{class t{theme=V(void 0);csp=V({nonce:void 0});isThemeChanged=!1;document=f(ve);baseStyle=f(W);constructor(){se(()=>{X.on("theme:change",e=>{Ce(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),se(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){T.clearLoadedStyleNames(),X.clear()}onThemeChange(e){T.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),T.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),io=(()=>{class t extends bu{ripple=V(!1);platformId=f(xt);inputStyle=V(null);inputVariant=V(null);overlayAppendTo=V("self");overlayOptions={};csp=V({nonce:void 0});unstyled=V(void 0);pt=V(void 0);ptOptions=V(void 0);filterMatchModeOptions={text:[le.STARTS_WITH,le.CONTAINS,le.NOT_CONTAINS,le.ENDS_WITH,le.EQUALS,le.NOT_EQUALS],numeric:[le.EQUALS,le.NOT_EQUALS,le.LESS_THAN,le.LESS_THAN_OR_EQUAL_TO,le.GREATER_THAN,le.GREATER_THAN_OR_EQUAL_TO],date:[le.DATE_IS,le.DATE_IS_NOT,le.DATE_BEFORE,le.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ye;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=m(m({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d,zIndex:p,ptOptions:h,pt:b,unstyled:S}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),p&&(this.zIndex=p),b&&this.pt.set(b),h&&this.ptOptions.set(h),S&&this.unstyled.set(S),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yu=new x("PRIME_NG_CONFIG");function nf(...t){let i=t?.map(n=>({provide:yu,useValue:n,multi:!1})),e=Vo(()=>{let n=f(io);t?.forEach(o=>n.setConfig(o))});return Mo([...i,e])}var ys=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(g(Oe),g(Se))};static \u0275dir=v({type:t})}return t})(),ao=(()=>{class t extends ys{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,features:[y]})}return t})(),Te=new x(""),vu={provide:Te,useExisting:Y(()=>Du),multi:!0},Du=(()=>{class t extends ao{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,o){n&1&&de("change",function(s){return o.onChange(s.target.checked)})("blur",function(){return o.onTouched()})},standalone:!1,features:[A([vu]),y]})}return t})(),Cu={provide:Te,useExisting:Y(()=>vs),multi:!0};function _u(){let t=_t()?_t().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Eu=new x(""),vs=(()=>{class t extends ys{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!_u())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(g(Oe),g(Se),g(Eu,8))};static \u0275dir=v({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&de("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[A([Cu]),y]})}return t})();function lo(t){return t==null||uo(t)===0}function uo(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ue=new x(""),wt=new x(""),Su=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cs=class{static min(i){return Ds(i)}static max(i){return wu(i)}static required(i){return Cs(i)}static requiredTrue(i){return Au(i)}static email(i){return Fu(i)}static minLength(i){return Iu(i)}static maxLength(i){return _s(i)}static pattern(i){return xu(i)}static nullValidator(i){return oi()}static compose(i){return Is(i)}static composeAsync(i){return xs(i)}};function Ds(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function wu(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Cs(t){return lo(t.value)?{required:!0}:null}function Au(t){return t.value===!0?null:{required:!0}}function Fu(t){return lo(t.value)||Su.test(t.value)?null:{email:!0}}function Iu(t){return i=>{let e=i.value?.length??uo(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function _s(t){return i=>{let e=i.value?.length??uo(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function xu(t){if(!t)return oi;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(lo(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function oi(t){return null}function Es(t){return t!=null}function Ss(t){return Mn(t)?Io(t):t}function ws(t){let i={};return t.forEach(e=>{i=e!=null?m(m({},i),e):i}),Object.keys(i).length===0?null:i}function As(t,i){return i.map(e=>e(t))}function Tu(t){return!t.validate}function Fs(t){return t.map(i=>Tu(i)?i:e=>i.validate(e))}function Is(t){if(!t)return null;let i=t.filter(Es);return i.length==0?null:function(e){return ws(As(e,i))}}function co(t){return t!=null?Is(Fs(t)):null}function xs(t){if(!t)return null;let i=t.filter(Es);return i.length==0?null:function(e){let n=As(e,i).map(Ss);return To(n).pipe(xo(ws))}}function po(t){return t!=null?xs(Fs(t)):null}function ds(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Ts(t){return t._rawValidators}function Ms(t){return t._rawAsyncValidators}function oo(t){return t?Array.isArray(t)?t:[t]:[]}function ri(t,i){return Array.isArray(t)?t.includes(i):t===i}function ps(t,i){let e=oo(i);return oo(t).forEach(o=>{ri(e,o)||e.push(o)}),e}function hs(t,i){return oo(i).filter(e=>!ri(t,e))}var si=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=co(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=po(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},be=class extends si{name;get formDirective(){return null}get path(){return null}},Ae=class extends si{_parent=null;name=null;valueAccessor=null},ai=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Mu={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ef=J(m({},Mu),{"[class.ng-submitted]":"isSubmitted"}),Os=(()=>{class t extends ai{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(g(Ae,2))};static \u0275dir=v({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&vt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[y]})}return t})(),Sf=(()=>{class t extends ai{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(g(be,10))};static \u0275dir=v({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&vt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[y]})}return t})();var ln="VALID",ii="INVALID",Ut="PENDING",un="DISABLED",st=class{},li=class extends st{value;source;constructor(i,e){super(),this.value=i,this.source=e}},dn=class extends st{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},pn=class extends st{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},zt=class extends st{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ui=class extends st{source;constructor(i){super(),this.source=i}},fn=class extends st{source;constructor(i){super(),this.source=i}};function ho(t){return(hi(t)?t.validators:t)||null}function Ou(t){return Array.isArray(t)?co(t):t||null}function fo(t,i){return(hi(i)?i.asyncValidators:t)||null}function ku(t){return Array.isArray(t)?po(t):t||null}function hi(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ks(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new ee(1e3,"");if(!n[e])throw new ee(1001,"")}function Ns(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new ee(1002,"")})}var Gt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ce(this.statusReactive)}set status(i){Ce(()=>this.statusReactive.set(i))}_status=H(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===ln}get invalid(){return this.status===ii}get pending(){return this.status==Ut}get disabled(){return this.status===un}get enabled(){return this.status!==un}errors;get pristine(){return Ce(this.pristineReactive)}set pristine(i){Ce(()=>this.pristineReactive.set(i))}_pristine=H(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return Ce(this.touchedReactive)}set touched(i){Ce(()=>this.touchedReactive.set(i))}_touched=H(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new ye;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(ps(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(ps(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(hs(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(hs(i,this._rawAsyncValidators))}hasValidator(i){return ri(this._rawValidators,i)}hasAsyncValidator(i){return ri(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(J(m({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new pn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new pn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(J(m({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new dn(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new dn(!0,n))}markAsPending(i={}){this.status=Ut;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new zt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(J(m({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=un,this.errors=null,this._forEachChild(o=>{o.disable(J(m({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new li(this.value,n)),this._events.next(new zt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ln,this._forEachChild(n=>{n.enable(J(m({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(J(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ln||this.status===Ut)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new li(this.value,e)),this._events.next(new zt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(J(m({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?un:ln}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Ut,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Ss(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new zt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?un:this.errors?ii:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ut)?Ut:this._anyControlsHaveStatus(ii)?ii:ln}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new dn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new pn(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){hi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ou(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ku(this._rawAsyncValidators)}},Wt=class extends Gt{constructor(i,e,n){super(ho(e),fo(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Ns(this,!0,i),Object.keys(i).forEach(n=>{ks(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fn(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var ro=class extends Wt{};var qt=new x("",{providedIn:"root",factory:()=>fi}),fi="always";function gi(t,i){return[...i.path,t]}function gn(t,i,e=fi){go(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Lu(t,i),Pu(t,i),Ru(t,i),Nu(t,i)}function ci(t,i,e=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),pi(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function di(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Nu(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function go(t,i){let e=Ts(t);i.validator!==null?t.setValidators(ds(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ms(t);i.asyncValidator!==null?t.setAsyncValidators(ds(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();di(i._rawValidators,o),di(i._rawAsyncValidators,o)}function pi(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=Ts(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=Ms(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return di(i._rawValidators,n),di(i._rawAsyncValidators,n),e}function Lu(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ls(t,i)})}function Ru(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ls(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Ls(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Pu(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Rs(t,i){t==null,go(t,i)}function Vu(t,i){return pi(t,i)}function mo(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Bu(t){return Object.getPrototypeOf(t.constructor)===ao}function Ps(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function bo(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===vs?e=r:Bu(r)?n=r:o=r}),o||n||e||null}function $u(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Hu={provide:be,useExisting:Y(()=>ju)},cn=Promise.resolve(),ju=(()=>{class t extends be{callSetDisabledState;get submitted(){return Ce(this.submittedReactive)}_submitted=H(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new q;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new Wt({},co(e),po(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){cn.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),gn(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){cn.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){cn.then(()=>{let n=this._findContainer(e.path),o=new Wt({});Rs(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){cn.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){cn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ps(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ui(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(g(Ue,10),g(wt,10),g(qt,8))};static \u0275dir=v({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&de("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[A([Hu]),y]})}return t})();function fs(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function gs(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hn=class extends Gt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(ho(e),fo(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),hi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(gs(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new fn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){fs(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){fs(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){gs(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Uu=t=>t instanceof hn,zu=(()=>{class t extends be{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return gi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,standalone:!1,features:[y]})}return t})();var Gu={provide:Ae,useExisting:Y(()=>yo)},ms=Promise.resolve(),yo=(()=>{class t extends Ae{_changeDetectorRef;callSetDisabledState;control=new hn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new q;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=bo(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),mo(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){gn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ms.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&_(n);ms.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?gi(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(g(be,9),g(Ue,10),g(wt,10),g(Te,10),g(Ct,8),g(qt,8))};static \u0275dir=v({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[A([Gu]),y,Me]})}return t})();var Af=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),Wu={provide:Te,useExisting:Y(()=>qu),multi:!0},qu=(()=>{class t extends ao{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&de("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[A([Wu]),y]})}return t})();var vo=new x(""),Ku={provide:Ae,useExisting:Y(()=>Yu)},Yu=(()=>{class t extends Ae{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=bo(this,o)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&ci(n,this,!1),gn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}mo(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ci(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||t)(g(Ue,10),g(wt,10),g(Te,10),g(vo,8),g(qt,8))};static \u0275dir=v({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[A([Ku]),y,Me]})}return t})(),Zu={provide:be,useExisting:Y(()=>Vs)},Vs=(()=>{class t extends be{callSetDisabledState;get submitted(){return Ce(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=H(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new q;constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(pi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return gn(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){ci(e.control||null,e,!1),$u(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),Ps(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ui(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(ci(n||null,e),Uu(o)&&(gn(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Rs(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&Vu(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){go(this.form,this),this._oldForm&&pi(this._oldForm,this)}static \u0275fac=function(n){return new(n||t)(g(Ue,10),g(wt,10),g(qt,8))};static \u0275dir=v({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&de("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[A([Zu]),y,Me]})}return t})(),Qu={provide:be,useExisting:Y(()=>Bs)},Bs=(()=>{class t extends zu{name=null;constructor(e,n,o){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(o)}_checkParentType(){Hs(this._parent)}static \u0275fac=function(n){return new(n||t)(g(be,13),g(Ue,10),g(wt,10))};static \u0275dir=v({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[A([Qu]),y]})}return t})(),Xu={provide:be,useExisting:Y(()=>$s)},$s=(()=>{class t extends be{_parent;name=null;constructor(e,n,o){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(o)}ngOnInit(){Hs(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return gi(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(n){return new(n||t)(g(be,13),g(Ue,10),g(wt,10))};static \u0275dir=v({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[A([Xu]),y]})}return t})();function Hs(t){return!(t instanceof Bs)&&!(t instanceof Vs)&&!(t instanceof $s)}var Ju={provide:Ae,useExisting:Y(()=>ec)},ec=(()=>{class t extends Ae{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=bo(this,r)}ngOnChanges(e){this._added||this._setUpControl(),mo(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return gi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(g(be,13),g(Ue,10),g(wt,10),g(Te,10),g(vo,8))};static \u0275dir=v({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[A([Ju]),y,Me]})}return t})();function tc(t){return typeof t=="number"?t:parseInt(t,10)}function nc(t){return typeof t=="number"?t:parseFloat(t)}var Do=(()=>{class t{_validator=oi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):oi,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,features:[Me]})}return t})();var ic={provide:Ue,useExisting:Y(()=>oc),multi:!0},oc=(()=>{class t extends Do{min;inputName="min";normalizeInput=e=>nc(e);createValidator=e=>Ds(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&ne("min",o._enabled?o.min:null)},inputs:{min:"min"},standalone:!1,features:[A([ic]),y]})}return t})(),rc={provide:Ue,useExisting:Y(()=>sc),multi:!0};var sc=(()=>{class t extends Do{required;inputName="required";normalizeInput=_;createValidator=e=>Cs;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&ne("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[A([rc]),y]})}return t})();var ac={provide:Ue,useExisting:Y(()=>lc),multi:!0},lc=(()=>{class t extends Do{maxlength;inputName="maxlength";normalizeInput=e=>tc(e);createValidator=e=>_s(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&ne("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[A([ac]),y]})}return t})();var js=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})(),so=class extends Gt{constructor(i,e,n){super(ho(e),fo(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Ns(this,!1,i),i.forEach((n,o)=>{ks(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function bs(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Ff=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let o=this._reduceControls(e),r={};return bs(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new Wt(o,r)}record(e,n=null){let o=this._reduceControls(e);return new ro(o,n)}control(e,n,o){let r={};return this.useNonNullable?(bs(n)?r=n:(r.validators=n,r.asyncValidators=o),new hn(e,J(m({},r),{nonNullable:!0}))):new hn(e,n,o)}array(e,n,o){let r=e.map(s=>this._createControl(s));return new so(r,n,o)}_reduceControls(e){let n={};return Object.keys(e).forEach(o=>{n[o]=this._createControl(e[o])}),n}_createControl(e){if(e instanceof hn)return e;if(e instanceof Gt)return e;if(Array.isArray(e)){let n=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,o,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Us=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:qt,useValue:e.callSetDisabledState??fi}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[js]})}return t})(),If=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vo,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:qt,useValue:e.callSetDisabledState??fi}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[js]})}return t})();var zs=(()=>{class t extends W{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oe=new x("PARENT_INSTANCE"),ue=(()=>{class t{document=f(ve);platformId=f(xt);el=f(Se);injector=f(Tn);cd=f(Ct);renderer=f(Oe);config=f(io);$parentInstance=f(oe,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=f(zs);baseStyle=f(W);scopedStyleEl;parent=this.$params.parent;cn=tt;_themeScopedListener;dt=C();unstyled=C();pt=C();ptOptions=C();$attrSelector=sn("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=H(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=H(()=>ie(this.pt()||this.directivePT(),this.$params));directivePT=V(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>ie(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||ie(e,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){se(e=>{this.document&&!$i(this.platformId)&&(X.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{X.off("theme:change",this._themeScopedListener)})}),se(e=>{this.document&&!$i(this.platformId)&&(X.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),e(()=>{X.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Xn(e)?e(...n):Yi(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return Jn(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){jt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),jt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);M(e)&&this.baseStyle.load(e,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!jt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),jt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),T.setLoadedStyleName("common")}if(!T.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),T.setLoadedStyleName(this.$style?.name)}if(!T.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.$styleOptions)),T.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){jt.clearLoadedStyleNames(),X.on("theme:change",e.bind(this))}_removeThemeListeners(){X.off("theme:change",this._loadCoreStyles),X.off("theme:change",this._load),X.off("theme:change",this._themeScopedListener)}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,c=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,J(m({},o),{global:u||{}})),d=this._getPTDatasets(n);return a||!a&&c?l?this._mergeProps(l,u,c,d):m(m(m({},u),c),d):m(m({},c),d)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&M(this.$pt()?.["data-pc-section"]);return e!=="transition"&&J(m({},e==="root"&&J(m({[`${n}name`]:ot(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:ot(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:ot(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return xe(r)||Xi(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,u=ot(n),c=ot(this.$hostName||this.$name);return(a?u!==c?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:xe(c)?c:xe(u)?u:a||!a&&c?l?this._mergeProps(l,u,c):m(m({},u),c):c}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,m(m({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=Yi(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,m({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:tt(this._getOptionValue(this.$style.classes,e,m(m({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,m(m({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,m(m({},this.$params),o));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[A([zs,W]),Me]})}return t})();var Gs=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var cc=`
    ${Gs}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,dc={root:"p-ink"},Ws=(()=>{class t extends W{name="ripple";style=cc;classes=dc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var mi=(()=>{class t extends ue{zone=f(No);_componentStyle=f(Ws);animationListener;mouseDownListener;timeout;constructor(){super(),se(()=>{Rt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(nt(n,"p-ink-active"),!Wi(n)&&!Ki(n)){let a=Math.max(Gi(this.el.nativeElement),Qn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=qi(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Ki(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Wi(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Et(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&nt(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&nt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),nt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,$r(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Ws]),y]})}return t})(),Zf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var qs=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var bi=(()=>{class t extends ue{modelValue=V(void 0);$filled=H(()=>M(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,features:[y]})}return t})();var at=(()=>{class t extends bi{required=C(void 0,{transform:_});invalid=C(void 0,{transform:_});disabled=C(void 0,{transform:_});name=C();_disabled=V(!1);$disabled=H(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[y]})}return t})();var F=(()=>{class t{el;renderer;pBind=C(void 0);_attrs=V(void 0);attrs=H(()=>this._attrs()||this.pBind());styles=H(()=>this.attrs()?.style);classes=H(()=>tt(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,se(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=Fo(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let c=l.slice(2).toLowerCase();if(!this.listeners.some(d=>d.eventName===c)){let d=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:d})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Ie(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(g(Se),g(Oe))};static \u0275dir=v({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(kn(o.styles()),k(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var hc=["icon"],fc=["content"],Zs=t=>({$implicit:t});function gc(t,i){t&1&&yt(0)}function mc(t,i){if(t&1&&Le(0,"span",0),t&2){let e=B(3);k(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),w("pBind",e.ptm("icon"))}}function bc(t,i){if(t&1&&Tt(0,mc,1,3,"span",2),t&2){let e=B(2);Mt(e.onIcon||e.offIcon?0:-1)}}function yc(t,i){t&1&&yt(0)}function vc(t,i){if(t&1&&te(0,yc,1,0,"ng-container",1),t&2){let e=B(2);w("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ei(2,Zs,e.checked))}}function Dc(t,i){if(t&1&&(Tt(0,bc,1,1)(1,vc,1,4,"ng-container"),ke(2,"span",0),Ot(3),Ne()),t&2){let e=B();Mt(e.iconTemplate?1:0),O(2),k(e.cx("label")),w("pBind",e.ptm("label")),O(),kt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Cc=`
    ${qs}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,_c={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Ks=(()=>{class t extends W{name="togglebutton";style=Cc;classes=_c;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ys=new x("TOGGLEBUTTON_INSTANCE"),Ec={provide:Te,useExisting:Y(()=>yi),multi:!0},yi=(()=>{class t extends at{$pcToggleButton=f(Ys,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=C(void 0,{transform:_});onChange=new q;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=f(Ks);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(me(r,hc,4),me(r,fc,4),me(r,rt,4)),n&2){let s;pe(s=he())&&(o.iconTemplate=s.first),pe(s=he())&&(o.contentTemplate=s.first),pe(s=he())&&(o.templates=s)}},hostVars:8,hostBindings:function(n,o){n&1&&de("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(ne("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-pressed",o.checked?"true":"false")("role","button")("tabindex",o.tabindex!==void 0?o.tabindex:o.$disabled()?-1:0)("data-pc-name","togglebutton"),k(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ke],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",_],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[A([Ec,Ks,{provide:Ys,useExisting:t},{provide:oe,useExisting:t}]),re([mi,F]),y],decls:3,vars:8,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,o){n&1&&(ke(0,"span",0),te(1,gc,1,0,"ng-container",1),Tt(2,Dc,4,5),Ne()),n&2&&(k(o.cx("content")),w("pBind",o.ptm("content")),O(),w("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Ei(6,Zs,o.checked)),O(),Mt(o.contentTemplate?-1:2))},dependencies:[ge,Ze,Q,lt,F],encapsulation:2,changeDetection:0})}return t})(),Tg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[yi,Q,Q]})}return t})();var Qs=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Sc=["item"],wc=(t,i)=>({$implicit:t,index:i});function Ac(t,i){return this.getOptionLabel(i)}function Fc(t,i){t&1&&yt(0)}function Ic(t,i){if(t&1&&te(0,Fc,1,0,"ng-container",3),t&2){let e=B(2),n=e.$implicit,o=e.$index,r=B();w("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Dt(2,wc,n,o))}}function xc(t,i){t&1&&te(0,Ic,1,5,"ng-template",null,0,Go)}function Tc(t,i){if(t&1){let e=On();ke(0,"p-togglebutton",2),de("onChange",function(o){let r=Ft(e),s=r.$implicit,a=r.$index,l=B();return It(l.onOptionSelect(o,s,a))}),Tt(1,xc,2,0),Ne()}if(t&2){let e=i.$implicit,n=B();w("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid())("pt",n.ptm("pcToggleButton")),O(),Mt(n.itemTemplate||n._itemTemplate?1:-1)}}var Mc=`
    ${Qs}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,Oc={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},Xs=(()=>{class t extends W{name="selectbutton";style=Mc;classes=Oc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Js=new x("SELECTBUTTON_INSTANCE"),kc={provide:Te,useExisting:Y(()=>ea),multi:!0},ea=(()=>{class t extends at{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=C();fluid=C(void 0,{transform:_});onOptionClick=new q;onChange=new q;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=f(Xs);$pcSelectButton=f(Js,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?it(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?it(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?it(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!Ie(l,s,this.equalityKey||void 0)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Ie(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Ie(r,o,this.dataKey)){n=!0;break}}}else n=Ie(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(me(r,Sc,4),me(r,rt,4)),n&2){let s;pe(s=he())&&(o.itemTemplate=s.first),pe(s=he())&&(o.templates=s)}},hostVars:4,hostBindings:function(n,o){n&2&&(ne("role","group")("aria-labelledby",o.ariaLabelledBy),k(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",_],tabindex:[2,"tabindex","tabindex",Ke],multiple:[2,"multiple","multiple",_],allowEmpty:[2,"allowEmpty","allowEmpty",_],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",_],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[A([kc,Xs,{provide:Js,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&Bo(0,Tc,2,11,"p-togglebutton",1,Ac,!0),n&2&&$o(o.options)},dependencies:[yi,Us,Os,yo,ge,Ze,Q,lt],encapsulation:2,changeDetection:0})}return t})(),em=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ea,Q,Q]})}return t})();var ta=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Nc=`
    ${ta}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Lc={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":M(i)&&String(i).length===1,"p-badge-dot":je(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},na=(()=>{class t extends W{name="badge";style=Nc;classes=Lc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ia=new x("BADGE_INSTANCE");var Co=(()=>{class t extends ue{$pcBadge=f(ia,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=C();badgeSize=C();size=C();severity=C();value=C();badgeDisabled=C(!1,{transform:_});_componentStyle=f(na);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(k(o.cn(o.cx("root"),o.styleClass())),zo("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([na,{provide:ia,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y],decls:1,vars:1,template:function(n,o){n&1&&Ot(0),n&2&&kt(o.value())},dependencies:[ge,Q,lt],encapsulation:2,changeDetection:0})}return t})(),oa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[Co,Q,Q]})}return t})();var Pc=["*"],Vc={root:"p-fluid"},ra=(()=>{class t extends W{name="fluid";classes=Vc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var sa=new x("FLUID_INSTANCE"),ut=(()=>{class t extends ue{$pcFluid=f(sa,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(ra);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&k(o.cx("root"))},features:[A([ra,{provide:sa,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y],ngContentSelectors:Pc,decls:1,vars:0,template:function(n,o){n&1&&(We(),qe(0))},dependencies:[ge],encapsulation:2,changeDetection:0})}return t})(),xm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ut]})}return t})();var _o=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=ce=>{if(ce)return getComputedStyle(ce).getPropertyValue("position")==="relative"?ce:r(ce.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),h=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},b,S,I="top";l.top+a+s.height>d.height?(b=l.top-h.top-s.height,I="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-h.top,I="top");let P=l.left+s.width-d.width,$=l.left-h.left;if(s.width>d.width?S=(l.left-h.left)*-1:P>0?S=$-P:S=l.left-h.left,e.style.top=b+"px",e.style.left=S+"px",e.style.transformOrigin=I,o){let ce=rn(/-anchor-gutter$/)?.value;e.style.marginTop=I==="bottom"?`calc(${ce??"2px"} * -1)`:ce??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),b,S;c.top+l+s>h.height?(b=c.top+d-s,e.style.transformOrigin="bottom",b<0&&(b=d)):(b=l+c.top+d,e.style.transformOrigin="top"),c.left+a>h.width?S=Math.max(0,c.left+p+u-a):S=c.left+p,e.style.top=b+"px",e.style.left=S+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+h>p&&(e.scrollTop=d+c-p+h)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Lm(){kr({variableName:no("scrollbar.width").name})}function Rm(){Nr({variableName:no("scrollbar.width").name})}var aa=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=_o.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var la=(()=>{class t extends ue{autofocus=!1;focused=!1;platformId=f(xt);document=f(ve);host=f(Se);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Rt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=_o.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[y]})}return t})(),Gm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var Bc=["*"],$c=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ua=(()=>{class t extends W{name="baseicon";css=$c;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ct=(()=>{class t extends ue{spin=!1;_componentStyle=f(ua);getClassNames(){return tt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&k(o.getClassNames())},inputs:{spin:[2,"spin","spin",_]},features:[A([ua]),y],ngContentSelectors:Bc,decls:1,vars:0,template:function(n,o){n&1&&(We(),qe(0))},encapsulation:2,changeDetection:0})}return t})();var Hc=["data-p-icon","check"],ca=(()=>{class t extends ct{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["","data-p-icon","check"]],features:[y],attrs:Hc,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(Ee(),Ge(0,"path",0))},encapsulation:2})}return t})();var jc=["data-p-icon","minus"],da=(()=>{class t extends ct{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["","data-p-icon","minus"]],features:[y],attrs:jc,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(Ee(),Ge(0,"path",0))},encapsulation:2})}return t})();var Uc=["data-p-icon","spinner"],pa=(()=>{class t extends ct{pathId;onInit(){this.pathId="url(#"+sn()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["","data-p-icon","spinner"]],features:[y],attrs:Uc,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ee(),Di(0,"g"),Ge(1,"path",0),Ci(),Di(2,"defs")(3,"clipPath",1),Ge(4,"rect",2),Ci()()),n&2&&(ne("clip-path",o.pathId),O(3),Ho("id",o.pathId))},encapsulation:2})}return t})();var zc=["data-p-icon","times"],db=(()=>{class t extends ct{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["","data-p-icon","times"]],features:[y],attrs:zc,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(Ee(),Ge(0,"path",0))},encapsulation:2})}return t})();var ha=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Gc=["content"],Wc=["loadingicon"],qc=["icon"],Kc=["*"],Da=(t,i)=>({class:t,pt:i});function Yc(t,i){t&1&&yt(0)}function Zc(t,i){if(t&1&&Le(0,"span",7),t&2){let e=B(3);k(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),w("pBind",e.ptm("loadingIcon")),ne("aria-hidden",!0)}}function Qc(t,i){if(t&1&&(Ee(),Le(0,"svg",8)),t&2){let e=B(3);k(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),w("pBind",e.ptm("loadingIcon"))("spin",!0),ne("aria-hidden",!0)}}function Xc(t,i){if(t&1&&(mt(0),te(1,Zc,1,4,"span",3)(2,Qc,1,5,"svg",6),bt()),t&2){let e=B(2);O(),w("ngIf",e.loadingIcon),O(),w("ngIf",!e.loadingIcon)}}function Jc(t,i){}function ed(t,i){if(t&1&&te(0,Jc,0,0,"ng-template",9),t&2){let e=B(2);w("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function td(t,i){if(t&1&&(mt(0),te(1,Xc,3,2,"ng-container",2)(2,ed,1,1,null,5),bt()),t&2){let e=B();O(),w("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),O(),w("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Dt(3,Da,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function nd(t,i){if(t&1&&Le(0,"span",7),t&2){let e=B(2);k(e.cn("icon",e.iconClass())),w("pBind",e.ptm("icon"))}}function id(t,i){}function od(t,i){if(t&1&&te(0,id,0,0,"ng-template",9),t&2){let e=B(2);w("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function rd(t,i){if(t&1&&(mt(0),te(1,nd,1,3,"span",3)(2,od,1,1,null,5),bt()),t&2){let e=B();O(),w("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),O(),w("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Dt(3,Da,e.cx("icon"),e.ptm("icon")))}}function sd(t,i){if(t&1&&(ke(0,"span",7),Ot(1),Ne()),t&2){let e=B();k(e.cx("label")),w("pBind",e.ptm("label")),ne("aria-hidden",e.icon&&!e.label),O(),kt(e.label)}}function ad(t,i){if(t&1&&Le(0,"p-badge",10),t&2){let e=B();w("value",e.badge)("severity",e.badgeSeverity)("pt",e.ptm("pcBadge"))}}var ld={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Kt=(()=>{class t extends W{name="button";style=ha;classes=ld;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var fa=new x("BUTTON_INSTANCE"),ga=new x("BUTTON_DIRECTIVE_INSTANCE"),ma=new x("BUTTON_LABEL_INSTANCE"),ba=new x("BUTTON_ICON_INSTANCE"),dt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},ya=(()=>{class t extends ue{ptButtonLabel=C();$pcButtonLabel=f(ma,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});constructor(){super(),se(()=>{this.ptButtonLabel()&&this.directivePT.set(this.ptButtonLabel())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&vt("p-button-label",!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"]},features:[A([Kt,{provide:ma,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y]})}return t})(),va=(()=>{class t extends ue{ptButtonIcon=C();$pcButtonIcon=f(ba,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});constructor(){super(),se(()=>{this.ptButtonIcon()&&this.directivePT.set(this.ptButtonIcon())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&vt("p-button-icon",!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"]},features:[A([Kt,{provide:ba,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y]})}return t})(),Pb=(()=>{class t extends ue{$pcButtonDirective=f(ga,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});_componentStyle=f(Kt);ptButtonDirective=C();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),se(()=>{this.ptButtonDirective()&&this.directivePT.set(this.ptButtonDirective())})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=C(void 0,{transform:_});iconSignal=Si(va);labelSignal=Si(ya);isIconOnly=H(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(dt);pcFluid=f(ut,{optional:!0,host:!0,skipSelf:!0});isTextButton=H(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){Et(this.htmlElement,this.getStyleClass().join(" ")),Rt(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[dt.button,dt.component];return this.icon&&!this.label&&je(this.htmlElement.textContent)&&e.push(dt.iconOnly),this.loading&&(e.push(dt.disabled,dt.loading),!this.icon&&this.label&&e.push(dt.labelOnly),this.icon&&!this.label&&!je(this.htmlElement.textContent)&&e.push(dt.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Vt(this.htmlElement,".p-button-label")&&this.label){let n=Zn("span",{class:this.cx("label"),"p-bind":this.ptm("label"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Vt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.label?"p-button-icon-"+this.iconPos:null,o=this.getIconClass(),r=Zn("span",{class:this.cn(this.cx("icon"),n,o),"aria-hidden":"true","p-bind":this.ptm("icon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=Vt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Vt(this.htmlElement,".p-button-icon"),n=Vt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(_i(r,o.iconSignal,va,5),_i(r,o.labelSignal,ya,5)),n&2&&Uo(2)},hostVars:4,hostBindings:function(n,o){n&2&&vt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],hostName:"hostName",text:[2,"text","text",_],plain:[2,"plain","plain",_],raised:[2,"raised","raised",_],size:"size",outlined:[2,"outlined","outlined",_],rounded:[2,"rounded","rounded",_],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[A([Kt,{provide:ga,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y]})}return t})(),ud=(()=>{class t extends ue{hostName="";$pcButton=f(fa,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(F,{self:!0});_componentStyle=f(Kt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=C(void 0,{transform:_});onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(ut,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(me(r,Gc,5),me(r,Wc,5),me(r,qc,5),me(r,rt,4)),n&2){let s;pe(s=he())&&(o.contentTemplate=s.first),pe(s=he())&&(o.loadingIconTemplate=s.first),pe(s=he())&&(o.iconTemplate=s.first),pe(s=he())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",_],raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",Ke],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Kt,{provide:fa,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y],ngContentSelectors:Kc,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(n,o){n&1&&(We(),ke(0,"button",0),de("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),qe(1),te(2,Yc,1,0,"ng-container",1)(3,td,3,6,"ng-container",2)(4,rd,3,6,"ng-container",2)(5,sd,2,5,"span",3)(6,ad,1,3,"p-badge",4),Ne()),n&2&&(k(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),w("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),ne("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),O(2),w("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),O(),w("ngIf",o.loading),O(),w("ngIf",!o.loading),O(),w("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),O(),w("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ge,on,Ze,Pi,mi,la,pa,oa,Co,Q,F],encapsulation:2,changeDetection:0})}return t})(),Vb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ge,ud,Q,Q]})}return t})();var Ca=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var c=i instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return m(m({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var c=i instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},_a=0;function Hb(t="pn_id_"){return _a++,`${t}${_a}`}function cd(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var jb=cd(),Ub=t=>!!t;var Ea=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var dd=["icon"],pd=["input"],hd=(t,i)=>({checked:t,class:i});function fd(t,i){if(t&1&&Le(0,"span",8),t&2){let e=B(3);k(e.cx("icon")),w("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function gd(t,i){if(t&1&&(Ee(),Le(0,"svg",9)),t&2){let e=B(3);k(e.cx("icon")),w("pBind",e.ptm("icon"))}}function md(t,i){if(t&1&&(mt(0),te(1,fd,1,4,"span",6)(2,gd,1,3,"svg",7),bt()),t&2){let e=B(2);O(),w("ngIf",e.checkboxIcon),O(),w("ngIf",!e.checkboxIcon)}}function bd(t,i){if(t&1&&(Ee(),Le(0,"svg",10)),t&2){let e=B(2);k(e.cx("icon")),w("pBind",e.ptm("icon"))}}function yd(t,i){if(t&1&&(mt(0),te(1,md,3,2,"ng-container",3)(2,bd,1,3,"svg",5),bt()),t&2){let e=B();O(),w("ngIf",e.checked),O(),w("ngIf",e._indeterminate())}}function vd(t,i){}function Dd(t,i){t&1&&te(0,vd,0,0,"ng-template")}var Cd=`
    ${Ea}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,_d={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Sa=(()=>{class t extends W{name="checkbox";style=Cd;classes=_d;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var wa=new x("CHECKBOX_INSTANCE"),Ed={provide:Te,useExisting:Y(()=>Aa),multi:!0},Aa=(()=>{class t extends at{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=C();size=C();onChange=new q;onFocus=new q;onBlur=new q;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Yr(this.value,this.modelValue())}_indeterminate=V(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=f(Sa);bindDirectiveInstance=f(F,{self:!0});$pcCheckbox=f(wa,{optional:!0,skipSelf:!0})??void 0;$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let n,o=this.injector.get(Ae,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!Ie(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,r){if(n&1&&(me(r,dd,4),me(r,rt,4)),n&2){let s;pe(s=he())&&(o.checkboxIconTemplate=s.first),pe(s=he())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&jo(pd,5),n&2){let r;pe(r=he())&&(o.inputViewChild=r.first)}},hostVars:5,hostBindings:function(n,o){n&2&&(ne("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.$disabled()),k(o.cn(o.cx("root"),o.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",_],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ke],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",_],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",_],autofocus:[2,"autofocus","autofocus",_],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Ed,Sa,{provide:wa,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,o){if(n&1){let r=On();ke(0,"input",1,0),de("focus",function(a){return Ft(r),It(o.onInputFocus(a))})("blur",function(a){return Ft(r),It(o.onInputBlur(a))})("change",function(a){return Ft(r),It(o.handleChange(a))}),Ne(),ke(2,"div",2),te(3,yd,3,2,"ng-container",3)(4,Dd,1,0,null,4),Ne()}n&2&&(kn(o.inputStyle),k(o.cn(o.cx("input"),o.inputClass)),w("checked",o.checked)("pBind",o.ptm("input")),ne("id",o.inputId)("value",o.value)("name",o.name())("tabindex",o.tabindex)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),O(2),k(o.cx("box")),w("pBind",o.ptm("box")),O(),w("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),O(),w("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",Dt(21,hd,o.checked,o.cx("icon"))))},dependencies:[ge,Li,on,Ze,Q,ca,da,lt,F],encapsulation:2,changeDetection:0})}return t})(),gy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[Aa,Q,Q]})}return t})();var Fa=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Sd=`
    ${Fa}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,wd={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Ia=(()=>{class t extends W{name="inputtext";style=Sd;classes=wd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var xa=new x("INPUTTEXT_INSTANCE"),Oy=(()=>{class t extends bi{hostName="";ptInputText=C();bindDirectiveInstance=f(F,{self:!0});$pcInputText=f(xa,{optional:!0,skipSelf:!0})??void 0;ngControl=f(Ae,{optional:!0,self:!0});pcFluid=f(ut,{optional:!0,host:!0,skipSelf:!0});pSize;variant=C();fluid=C(void 0,{transform:_});invalid=C(void 0,{transform:_});$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(Ia);constructor(){super(),se(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&de("input",function(s){return o.onInput(s)}),n&2&&k(o.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[A([Ia,{provide:xa,useExisting:t},{provide:oe,useExisting:t}]),re([F]),y]})}return t})(),ky=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var s0=(()=>{class t extends at{pcFluid=f(ut,{optional:!0,host:!0,skipSelf:!0});fluid=C(void 0,{transform:_});variant=C();size=C();inputSize=C();pattern=C();min=C();max=C();step=C();minlength=C();maxlength=C();$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=v({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[y]})}return t})();export{_t as a,Ka as b,wi as c,Ya as d,Nt as e,Jo as f,er as g,Ja as h,Li as i,Dl as j,Ar as k,on as l,Ri as m,Cl as n,_l as o,Pi as p,Ze as q,wl as r,Al as s,Il as t,xl as u,Tl as v,Ml as w,ge as x,Ol as y,Vi as z,Rl as A,Rt as B,Fp as C,Or as D,Et as E,nt as F,zi as G,$l as H,Hl as I,jl as J,Np as K,Rr as L,Gi as M,Lp as N,Pt as O,zl as P,Rp as Q,Pp as R,Mr as S,Vp as T,Zn as U,Bp as V,Gl as W,Vt as X,$p as Y,Hp as Z,jp as _,Br as $,Up as aa,Wi as ba,ql as ca,Kl as da,zp as ea,Gp as fa,qi as ga,Qn as ha,Wp as ia,Ki as ja,qp as ka,Kp as la,Yp as ma,Zp as na,Qp as oa,Xp as pa,Jp as qa,Hr as ra,je as sa,iu as ta,Xn as ua,M as va,it as wa,Ie as xa,ih as ya,oh as za,rh as Aa,ie as Ba,Xi as Ca,sh as Da,ah as Ea,we as Fa,lh as Ga,sn as Ha,ou as Ia,fh as Ja,le as Ka,gh as La,mh as Ma,bh as Na,yh as Oa,vh as Pa,Dh as Qa,rt as Ra,Q as Sa,Ch as Ta,_h as Ua,no as Va,hu as Wa,Oh as Xa,kh as Ya,W as Za,io as _a,nf as $a,Te as ab,Du as bb,vs as cb,Ue as db,cs as eb,Ae as fb,Os as gb,Sf as hb,Wt as ib,ju as jb,hn as kb,yo as lb,Af as mb,qu as nb,Yu as ob,Vs as pb,Bs as qb,$s as rb,ec as sb,oc as tb,sc as ub,lc as vb,so as wb,Ff as xb,Us as yb,If as zb,oe as Ab,ue as Bb,bi as Cb,at as Db,F as Eb,lt as Fb,mi as Gb,Zf as Hb,yi as Ib,Tg as Jb,ea as Kb,em as Lb,_o as Mb,Lm as Nb,Rm as Ob,aa as Pb,la as Qb,Gm as Rb,Co as Sb,oa as Tb,ut as Ub,xm as Vb,ct as Wb,ca as Xb,da as Yb,pa as Zb,db as _b,va as $b,Pb as ac,ud as bc,Vb as cc,Ca as dc,Hb as ec,jb as fc,Ub as gc,Aa as hc,gy as ic,s0 as jc,Oy as kc,ky as lc};
