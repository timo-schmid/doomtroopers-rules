(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function jn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const q={},rt=[],Oe=()=>{},Ns=()=>!1,Qt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Hn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Nn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jr=Object.prototype.hasOwnProperty,N=(e,t)=>Jr.call(e,t),I=Array.isArray,it=e=>Xt(e)==="[object Map]",Ls=e=>Xt(e)==="[object Set]",R=e=>typeof e=="function",Y=e=>typeof e=="string",Be=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",ks=e=>(K(e)||R(e))&&R(e.then)&&R(e.catch),Ws=Object.prototype.toString,Xt=e=>Ws.call(e),zr=e=>Xt(e).slice(8,-1),Us=e=>Xt(e)==="[object Object]",Ln=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vt=jn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),en=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Yr=/-\w/g,ge=en(e=>e.replace(Yr,t=>t.slice(1).toUpperCase())),Zr=/\B([A-Z])/g,tt=en(e=>e.replace(Zr,"-$1").toLowerCase()),tn=en(e=>e.charAt(0).toUpperCase()+e.slice(1)),hn=en(e=>e?`on${tn(e)}`:""),Qe=(e,t)=>!Object.is(e,t),dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Vs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let cs;const nn=()=>cs||(cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Y(s)?ni(s):kn(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Y(e)||K(e))return e}const Xr=/;(?![^(]*\))/g,ei=/:([^]+)/,ti=/\/\*[^]*?\*\//g;function ni(e){const t={};return e.replace(ti,"").split(Xr).forEach(n=>{if(n){const s=n.split(ei);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Wn(e){let t="";if(Y(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=Wn(e[n]);s&&(t+=s+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const si="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ri=jn(si);function qs(e){return!!e||e===""}const Bs=e=>!!(e&&e.__v_isRef===!0),St=e=>Y(e)?e:e==null?"":I(e)||K(e)&&(e.toString===Ws||!R(e.toString))?Bs(e)?St(e.value):JSON.stringify(e,Ks,2):String(e),Ks=(e,t)=>Bs(t)?Ks(e,t.value):it(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[pn(s,i)+" =>"]=r,n),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>pn(n))}:Be(t)?pn(t):K(t)&&!I(t)&&!Us(t)?String(t):t,pn=(e,t="")=>{var n;return Be(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let fe;class ii{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fe,!t&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=fe;try{return fe=this,t()}finally{fe=n}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){this._on>0&&--this._on===0&&(fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function oi(){return fe}let V;const gn=new WeakSet;class Gs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&fe.active&&fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gn.has(this)&&(gn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fs(this),Ys(this);const t=V,n=ye;V=this,ye=!0;try{return this.fn()}finally{Zs(this),V=t,ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qn(t);this.deps=this.depsTail=void 0,fs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cn(this)&&this.run()}get dirty(){return Cn(this)}}let Js=0,yt,wt;function zs(e,t=!1){if(e.flags|=8,t){e.next=wt,wt=e;return}e.next=yt,yt=e}function Un(){Js++}function Vn(){if(--Js>0)return;if(wt){let t=wt;for(wt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;yt;){let t=yt;for(yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ys(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zs(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),qn(s),li(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Cn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===At)||(e.globalVersion=At,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cn(e))))return;e.flags|=2;const t=e.dep,n=V,s=ye;V=e,ye=!0;try{Ys(e);const r=e.fn(e._value);(t.version===0||Qe(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{V=n,ye=s,Zs(e),e.flags&=-3}}function qn(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function li(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ye=!0;const Xs=[];function je(){Xs.push(ye),ye=!1}function He(){const e=Xs.pop();ye=e===void 0?!0:e}function fs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=V;V=void 0;try{t()}finally{V=n}}}let At=0;class ai{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class er{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!V||!ye||V===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==V)n=this.activeLink=new ai(V,this),V.deps?(n.prevDep=V.depsTail,V.depsTail.nextDep=n,V.depsTail=n):V.deps=V.depsTail=n,tr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=V.depsTail,n.nextDep=void 0,V.depsTail.nextDep=n,V.depsTail=n,V.deps===n&&(V.deps=s)}return n}trigger(t){this.version++,At++,this.notify(t)}notify(t){Un();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vn()}}}function tr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)tr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Sn=new WeakMap,Xe=Symbol(""),An=Symbol(""),Et=Symbol("");function Q(e,t,n){if(ye&&V){let s=Sn.get(e);s||Sn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new er),r.map=s,r.key=n),r.track()}}function De(e,t,n,s,r,i){const o=Sn.get(e);if(!o){At++;return}const l=c=>{c&&c.trigger()};if(Un(),t==="clear")o.forEach(l);else{const c=I(e),d=c&&Ln(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,T)=>{(T==="length"||T===Et||!Be(T)&&T>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Et)),t){case"add":c?d&&l(o.get("length")):(l(o.get(Xe)),it(e)&&l(o.get(An)));break;case"delete":c||(l(o.get(Xe)),it(e)&&l(o.get(An)));break;case"set":it(e)&&l(o.get(Xe));break}}Vn()}function nt(e){const t=k(e);return t===e?t:(Q(t,"iterate",Et),we(e)?t:t.map(re))}function sn(e){return Q(e=k(e),"iterate",Et),e}const ci={__proto__:null,[Symbol.iterator](){return mn(this,Symbol.iterator,re)},concat(...e){return nt(this).concat(...e.map(t=>I(t)?nt(t):t))},entries(){return mn(this,"entries",e=>(e[1]=re(e[1]),e))},every(e,t){return Ie(this,"every",e,t,void 0,arguments)},filter(e,t){return Ie(this,"filter",e,t,n=>n.map(re),arguments)},find(e,t){return Ie(this,"find",e,t,re,arguments)},findIndex(e,t){return Ie(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ie(this,"findLast",e,t,re,arguments)},findLastIndex(e,t){return Ie(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ie(this,"forEach",e,t,void 0,arguments)},includes(...e){return bn(this,"includes",e)},indexOf(...e){return bn(this,"indexOf",e)},join(e){return nt(this).join(e)},lastIndexOf(...e){return bn(this,"lastIndexOf",e)},map(e,t){return Ie(this,"map",e,t,void 0,arguments)},pop(){return gt(this,"pop")},push(...e){return gt(this,"push",e)},reduce(e,...t){return us(this,"reduce",e,t)},reduceRight(e,...t){return us(this,"reduceRight",e,t)},shift(){return gt(this,"shift")},some(e,t){return Ie(this,"some",e,t,void 0,arguments)},splice(...e){return gt(this,"splice",e)},toReversed(){return nt(this).toReversed()},toSorted(e){return nt(this).toSorted(e)},toSpliced(...e){return nt(this).toSpliced(...e)},unshift(...e){return gt(this,"unshift",e)},values(){return mn(this,"values",re)}};function mn(e,t,n){const s=sn(e),r=s[t]();return s!==e&&!we(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const fi=Array.prototype;function Ie(e,t,n,s,r,i){const o=sn(e),l=o!==e&&!we(e),c=o[t];if(c!==fi[t]){const p=c.apply(e,i);return l?re(p):p}let d=n;o!==e&&(l?d=function(p,T){return n.call(this,re(p),T,e)}:n.length>2&&(d=function(p,T){return n.call(this,p,T,e)}));const u=c.call(o,d,s);return l&&r?r(u):u}function us(e,t,n,s){const r=sn(e);let i=n;return r!==e&&(we(e)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,e)}):i=function(o,l,c){return n.call(this,o,re(l),c,e)}),r[t](i,...s)}function bn(e,t,n){const s=k(e);Q(s,"iterate",Et);const r=s[t](...n);return(r===-1||r===!1)&&Jn(n[0])?(n[0]=k(n[0]),s[t](...n)):r}function gt(e,t,n=[]){je(),Un();const s=k(e)[t].apply(e,n);return Vn(),He(),s}const ui=jn("__proto__,__v_isRef,__isVue"),nr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function hi(e){Be(e)||(e=String(e));const t=k(this);return Q(t,"has",e),t.hasOwnProperty(e)}class sr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?xi:lr:i?or:ir).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=I(t);if(!r){let c;if(o&&(c=ci[n]))return c;if(n==="hasOwnProperty")return hi}const l=Reflect.get(t,n,le(t)?t:s);if((Be(n)?nr.has(n):ui(n))||(r||Q(t,"get",n),i))return l;if(le(l)){const c=o&&Ln(n)?l:l.value;return r&&K(c)?Pn(c):c}return K(l)?r?Pn(l):Kn(l):l}}class rr extends sr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=et(i);if(!we(s)&&!et(s)&&(i=k(i),s=k(s)),!I(t)&&le(i)&&!le(s))return c||(i.value=s),!0}const o=I(t)&&Ln(n)?Number(n)<t.length:N(t,n),l=Reflect.set(t,n,s,le(t)?t:r);return t===k(r)&&(o?Qe(s,i)&&De(t,"set",n,s):De(t,"add",n,s)),l}deleteProperty(t,n){const s=N(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&De(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Be(n)||!nr.has(n))&&Q(t,"has",n),s}ownKeys(t){return Q(t,"iterate",I(t)?"length":Xe),Reflect.ownKeys(t)}}class di extends sr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pi=new rr,gi=new di,mi=new rr(!0);const En=e=>e,Nt=e=>Reflect.getPrototypeOf(e);function bi(e,t,n){return function(...s){const r=this.__v_raw,i=k(r),o=it(i),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=r[e](...s),u=n?En:t?qt:re;return!t&&Q(i,"iterate",c?An:Xe),{next(){const{value:p,done:T}=d.next();return T?{value:p,done:T}:{value:l?[u(p[0]),u(p[1])]:u(p),done:T}},[Symbol.iterator](){return this}}}}function Lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vi(e,t){const n={get(r){const i=this.__v_raw,o=k(i),l=k(r);e||(Qe(r,l)&&Q(o,"get",r),Q(o,"get",l));const{has:c}=Nt(o),d=t?En:e?qt:re;if(c.call(o,r))return d(i.get(r));if(c.call(o,l))return d(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Q(k(r),"iterate",Xe),r.size},has(r){const i=this.__v_raw,o=k(i),l=k(r);return e||(Qe(r,l)&&Q(o,"has",r),Q(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=k(l),d=t?En:e?qt:re;return!e&&Q(c,"iterate",Xe),l.forEach((u,p)=>r.call(i,d(u),d(p),o))}};return ee(n,e?{add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear")}:{add(r){!t&&!we(r)&&!et(r)&&(r=k(r));const i=k(this);return Nt(i).has.call(i,r)||(i.add(r),De(i,"add",r,r)),this},set(r,i){!t&&!we(i)&&!et(i)&&(i=k(i));const o=k(this),{has:l,get:c}=Nt(o);let d=l.call(o,r);d||(r=k(r),d=l.call(o,r));const u=c.call(o,r);return o.set(r,i),d?Qe(i,u)&&De(o,"set",r,i):De(o,"add",r,i),this},delete(r){const i=k(this),{has:o,get:l}=Nt(i);let c=o.call(i,r);c||(r=k(r),c=o.call(i,r)),l&&l.call(i,r);const d=i.delete(r);return c&&De(i,"delete",r,void 0),d},clear(){const r=k(this),i=r.size!==0,o=r.clear();return i&&De(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=bi(r,e,t)}),n}function Bn(e,t){const n=vi(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(N(n,r)&&r in s?n:s,r,i)}const yi={get:Bn(!1,!1)},wi={get:Bn(!1,!0)},_i={get:Bn(!0,!1)};const ir=new WeakMap,or=new WeakMap,lr=new WeakMap,xi=new WeakMap;function Ti(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ci(e){return e.__v_skip||!Object.isExtensible(e)?0:Ti(zr(e))}function Kn(e){return et(e)?e:Gn(e,!1,pi,yi,ir)}function Si(e){return Gn(e,!1,mi,wi,or)}function Pn(e){return Gn(e,!0,gi,_i,lr)}function Gn(e,t,n,s,r){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ci(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function ot(e){return et(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function et(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function Jn(e){return e?!!e.__v_raw:!1}function k(e){const t=e&&e.__v_raw;return t?k(t):e}function Ai(e){return!N(e,"__v_skip")&&Object.isExtensible(e)&&Vs(e,"__v_skip",!0),e}const re=e=>K(e)?Kn(e):e,qt=e=>K(e)?Pn(e):e;function le(e){return e?e.__v_isRef===!0:!1}function zn(e){return le(e)?e.value:e}const Ei={get:(e,t,n)=>t==="__v_raw"?e:zn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return le(r)&&!le(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function ar(e){return ot(e)?e:new Proxy(e,Ei)}class Pi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new er(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=At-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return zs(this,!0),!0}get value(){const t=this.dep.track();return Qs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Oi(e,t,n=!1){let s,r;return R(e)?s=e:(s=e.get,r=e.set),new Pi(s,r,n)}const kt={},Bt=new WeakMap;let Ze;function Mi(e,t=!1,n=Ze){if(n){let s=Bt.get(n);s||Bt.set(n,s=[]),s.push(e)}}function Ii(e,t,n=q){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,d=O=>r?O:we(O)||r===!1||r===0?Ve(O,1):Ve(O);let u,p,T,S,D=!1,$=!1;if(le(e)?(p=()=>e.value,D=we(e)):ot(e)?(p=()=>d(e),D=!0):I(e)?($=!0,D=e.some(O=>ot(O)||we(O)),p=()=>e.map(O=>{if(le(O))return O.value;if(ot(O))return d(O);if(R(O))return c?c(O,2):O()})):R(e)?t?p=c?()=>c(e,2):e:p=()=>{if(T){je();try{T()}finally{He()}}const O=Ze;Ze=u;try{return c?c(e,3,[S]):e(S)}finally{Ze=O}}:p=Oe,t&&r){const O=p,Z=r===!0?1/0:r;p=()=>Ve(O(),Z)}const te=oi(),H=()=>{u.stop(),te&&te.active&&Nn(te.effects,u)};if(i&&t){const O=t;t=(...Z)=>{O(...Z),H()}}let B=$?new Array(e.length).fill(kt):kt;const z=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const Z=u.run();if(r||D||($?Z.some((Le,_e)=>Qe(Le,B[_e])):Qe(Z,B))){T&&T();const Le=Ze;Ze=u;try{const _e=[Z,B===kt?void 0:$&&B[0]===kt?[]:B,S];B=Z,c?c(t,3,_e):t(..._e)}finally{Ze=Le}}}else u.run()};return l&&l(z),u=new Gs(p),u.scheduler=o?()=>o(z,!1):z,S=O=>Mi(O,!1,u),T=u.onStop=()=>{const O=Bt.get(u);if(O){if(c)c(O,4);else for(const Z of O)Z();Bt.delete(u)}},t?s?z(!0):B=u.run():o?o(z.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function Ve(e,t=1/0,n){if(t<=0||!K(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,le(e))Ve(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)Ve(e[s],t,n);else if(Ls(e)||it(e))e.forEach(s=>{Ve(s,t,n)});else if(Us(e)){for(const s in e)Ve(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ve(e[s],t,n)}return e}function It(e,t,n,s){try{return s?e(...s):e()}catch(r){rn(r,t,n)}}function Me(e,t,n,s){if(R(e)){const r=It(e,t,n,s);return r&&ks(r)&&r.catch(i=>{rn(i,t,n)}),r}if(I(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Me(e[i],t,n,s));return r}}function rn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||q;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}l=l.parent}if(i){je(),It(i,null,10,[e,c,d]),He();return}}Ri(e,n,r,s,o)}function Ri(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const ie=[];let Ee=-1;const lt=[];let We=null,st=0;const cr=Promise.resolve();let Kt=null;function Di(e){const t=Kt||cr;return e?t.then(this?e.bind(this):e):t}function Fi(e){let t=Ee+1,n=ie.length;for(;t<n;){const s=t+n>>>1,r=ie[s],i=Pt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Yn(e){if(!(e.flags&1)){const t=Pt(e),n=ie[ie.length-1];!n||!(e.flags&2)&&t>=Pt(n)?ie.push(e):ie.splice(Fi(t),0,e),e.flags|=1,fr()}}function fr(){Kt||(Kt=cr.then(hr))}function $i(e){I(e)?lt.push(...e):We&&e.id===-1?We.splice(st+1,0,e):e.flags&1||(lt.push(e),e.flags|=1),fr()}function hs(e,t,n=Ee+1){for(;n<ie.length;n++){const s=ie[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ur(e){if(lt.length){const t=[...new Set(lt)].sort((n,s)=>Pt(n)-Pt(s));if(lt.length=0,We){We.push(...t);return}for(We=t,st=0;st<We.length;st++){const n=We[st];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}We=null,st=0}}const Pt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hr(e){try{for(Ee=0;Ee<ie.length;Ee++){const t=ie[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),It(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<ie.length;Ee++){const t=ie[Ee];t&&(t.flags&=-2)}Ee=-1,ie.length=0,ur(),Kt=null,(ie.length||lt.length)&&hr()}}let ve=null,dr=null;function Gt(e){const t=ve;return ve=e,dr=e&&e.type.__scopeId||null,t}function ji(e,t=ve,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ts(-1);const i=Gt(t);let o;try{o=e(...r)}finally{Gt(i),s._d&&Ts(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ze(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(je(),Me(c,n,8,[e.el,l,e,t]),He())}}const Hi=Symbol("_vte"),Ni=e=>e.__isTeleport,Li=Symbol("_leaveCb");function Zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function on(e,t){return R(e)?ee({name:e.name},t,{setup:e}):e}function pr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Jt=new WeakMap;function _t(e,t,n,s,r=!1){if(I(e)){e.forEach((D,$)=>_t(D,t&&(I(t)?t[$]:t),n,s,r));return}if(xt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&_t(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?ts(s.component):s.el,o=r?null:i,{i:l,r:c}=e,d=t&&t.r,u=l.refs===q?l.refs={}:l.refs,p=l.setupState,T=k(p),S=p===q?Ns:D=>N(T,D);if(d!=null&&d!==c){if(ds(t),Y(d))u[d]=null,S(d)&&(p[d]=null);else if(le(d)){d.value=null;const D=t;D.k&&(u[D.k]=null)}}if(R(c))It(c,l,12,[o,u]);else{const D=Y(c),$=le(c);if(D||$){const te=()=>{if(e.f){const H=D?S(c)?p[c]:u[c]:c.value;if(r)I(H)&&Nn(H,i);else if(I(H))H.includes(i)||H.push(i);else if(D)u[c]=[i],S(c)&&(p[c]=u[c]);else{const B=[i];c.value=B,e.k&&(u[e.k]=B)}}else D?(u[c]=o,S(c)&&(p[c]=o)):$&&(c.value=o,e.k&&(u[e.k]=o))};if(o){const H=()=>{te(),Jt.delete(e)};H.id=-1,Jt.set(e,H),de(H,n)}else ds(e),te()}}}function ds(e){const t=Jt.get(e);t&&(t.flags|=8,Jt.delete(e))}nn().requestIdleCallback;nn().cancelIdleCallback;const xt=e=>!!e.type.__asyncLoader,gr=e=>e.type.__isKeepAlive;function ki(e,t){mr(e,"a",t)}function Wi(e,t){mr(e,"da",t)}function mr(e,t,n=X){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ln(t,s,n),n){let r=n.parent;for(;r&&r.parent;)gr(r.parent.vnode)&&Ui(s,t,n,r),r=r.parent}}function Ui(e,t,n,s){const r=ln(t,e,s,!0);br(()=>{Nn(s[t],r)},n)}function ln(e,t,n=X,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{je();const l=Rt(n),c=Me(t,n,e,o);return l(),He(),c});return s?r.unshift(i):r.push(i),i}}const Ne=e=>(t,n=X)=>{(!Mt||e==="sp")&&ln(e,(...s)=>t(...s),n)},Vi=Ne("bm"),qi=Ne("m"),Bi=Ne("bu"),Ki=Ne("u"),Gi=Ne("bum"),br=Ne("um"),Ji=Ne("sp"),zi=Ne("rtg"),Yi=Ne("rtc");function Zi(e,t=X){ln("ec",e,t)}const Qi="components";function vr(e,t){return eo(Qi,e,!0,t)||e}const Xi=Symbol.for("v-ndc");function eo(e,t,n=!0,s=!1){const r=ve||X;if(r){const i=r.type;{const l=Ko(i,!1);if(l&&(l===t||l===ge(t)||l===tn(ge(t))))return i}const o=ps(r[e]||i[e],t)||ps(r.appContext[e],t);return!o&&s?i:o}}function ps(e,t){return e&&(e[t]||e[ge(t)]||e[tn(ge(t))])}function zt(e,t,n,s){let r;const i=n,o=I(e);if(o||Y(e)){const l=o&&ot(e);let c=!1,d=!1;l&&(c=!we(e),d=et(e),e=sn(e)),r=new Array(e.length);for(let u=0,p=e.length;u<p;u++)r[u]=t(c?d?qt(re(e[u])):re(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(K(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=t(e[u],u,c,i)}}else r=[];return r}const On=e=>e?Lr(e)?ts(e):On(e.parent):null,Tt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>On(e.parent),$root:e=>On(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wr(e),$forceUpdate:e=>e.f||(e.f=()=>{Yn(e.update)}),$nextTick:e=>e.n||(e.n=Di.bind(e.proxy)),$watch:e=>To.bind(e)}),vn=(e,t)=>e!==q&&!e.__isScriptSetup&&N(e,t),to={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const S=o[t];if(S!==void 0)switch(S){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(vn(s,t))return o[t]=1,s[t];if(r!==q&&N(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&N(d,t))return o[t]=3,i[t];if(n!==q&&N(n,t))return o[t]=4,n[t];Mn&&(o[t]=0)}}const u=Tt[t];let p,T;if(u)return t==="$attrs"&&Q(e.attrs,"get",""),u(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==q&&N(n,t))return o[t]=4,n[t];if(T=c.config.globalProperties,N(T,t))return T[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return vn(r,t)?(r[t]=n,!0):s!==q&&N(s,t)?(s[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},l){let c,d;return!!(n[l]||e!==q&&l[0]!=="$"&&N(e,l)||vn(t,l)||(c=i[0])&&N(c,l)||N(s,l)||N(Tt,l)||N(r.config.globalProperties,l)||(d=o.__cssModules)&&d[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gs(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Mn=!0;function no(e){const t=wr(e),n=e.proxy,s=e.ctx;Mn=!1,t.beforeCreate&&ms(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:d,created:u,beforeMount:p,mounted:T,beforeUpdate:S,updated:D,activated:$,deactivated:te,beforeDestroy:H,beforeUnmount:B,destroyed:z,unmounted:O,render:Z,renderTracked:Le,renderTriggered:_e,errorCaptured:ke,serverPrefetch:Dt,expose:Ke,inheritAttrs:ut,components:Ft,directives:$t,filters:fn}=t;if(d&&so(d,s,null),o)for(const G in o){const W=o[G];R(W)&&(s[G]=W.bind(n))}if(r){const G=r.call(n,n);K(G)&&(e.data=Kn(G))}if(Mn=!0,i)for(const G in i){const W=i[G],Ge=R(W)?W.bind(n,n):R(W.get)?W.get.bind(n,n):Oe,jt=!R(W)&&R(W.set)?W.set.bind(n):Oe,Je=Jo({get:Ge,set:jt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Je.value,set:xe=>Je.value=xe})}if(l)for(const G in l)yr(l[G],s,n,G);if(c){const G=R(c)?c.call(n):c;Reflect.ownKeys(G).forEach(W=>{co(W,G[W])})}u&&ms(u,e,"c");function ne(G,W){I(W)?W.forEach(Ge=>G(Ge.bind(n))):W&&G(W.bind(n))}if(ne(Vi,p),ne(qi,T),ne(Bi,S),ne(Ki,D),ne(ki,$),ne(Wi,te),ne(Zi,ke),ne(Yi,Le),ne(zi,_e),ne(Gi,B),ne(br,O),ne(Ji,Dt),I(Ke))if(Ke.length){const G=e.exposed||(e.exposed={});Ke.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Ge=>n[W]=Ge,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===Oe&&(e.render=Z),ut!=null&&(e.inheritAttrs=ut),Ft&&(e.components=Ft),$t&&(e.directives=$t),Dt&&pr(e)}function so(e,t,n=Oe){I(e)&&(e=In(e));for(const s in e){const r=e[s];let i;K(r)?"default"in r?i=Wt(r.from||s,r.default,!0):i=Wt(r.from||s):i=Wt(r),le(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ms(e,t,n){Me(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function yr(e,t,n,s){let r=s.includes(".")?Dr(n,s):()=>n[s];if(Y(e)){const i=t[e];R(i)&&wn(r,i)}else if(R(e))wn(r,e.bind(n));else if(K(e))if(I(e))e.forEach(i=>yr(i,t,n,s));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&wn(r,i,e)}}function wr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(d=>Yt(c,d,o,!0)),Yt(c,t,o)),K(t)&&i.set(t,c),c}function Yt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Yt(e,i,n,!0),r&&r.forEach(o=>Yt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=ro[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ro={data:bs,props:vs,emits:vs,methods:bt,computed:bt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:bt,directives:bt,watch:oo,provide:bs,inject:io};function bs(e,t){return t?e?function(){return ee(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function io(e,t){return bt(In(e),In(t))}function In(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?ee(Object.create(null),e,t):t}function vs(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ee(Object.create(null),gs(e),gs(t??{})):t}function oo(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=se(e[s],t[s]);return n}function _r(){return{app:null,config:{isNativeTag:Ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lo=0;function ao(e,t){return function(s,r=null){R(s)||(s=ee({},s)),r!=null&&!K(r)&&(r=null);const i=_r(),o=new WeakSet,l=[];let c=!1;const d=i.app={_uid:lo++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:zo,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(d,...p)):R(u)&&(o.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,T){if(!c){const S=d._ceVNode||$e(s,r);return S.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),e(S,u,T),c=!0,d._container=u,u.__vue_app__=d,ts(S.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Me(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=at;at=d;try{return u()}finally{at=p}}};return d}}let at=null;function co(e,t){if(X){let n=X.provides;const s=X.parent&&X.parent.provides;s===n&&(n=X.provides=Object.create(s)),n[e]=t}}function Wt(e,t,n=!1){const s=Wo();if(s||at){let r=at?at._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&R(t)?t.call(s&&s.proxy):t}}const xr={},Tr=()=>Object.create(xr),Cr=e=>Object.getPrototypeOf(e)===xr;function fo(e,t,n,s=!1){const r={},i=Tr();e.propsDefaults=Object.create(null),Sr(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Si(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function uo(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=k(r),[c]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let T=u[p];if(an(e.emitsOptions,T))continue;const S=t[T];if(c)if(N(i,T))S!==i[T]&&(i[T]=S,d=!0);else{const D=ge(T);r[D]=Rn(c,l,D,S,e,!1)}else S!==i[T]&&(i[T]=S,d=!0)}}}else{Sr(e,t,r,i)&&(d=!0);let u;for(const p in l)(!t||!N(t,p)&&((u=tt(p))===p||!N(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(r[p]=Rn(c,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!N(t,p))&&(delete i[p],d=!0)}d&&De(e.attrs,"set","")}function Sr(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(vt(c))continue;const d=t[c];let u;r&&N(r,u=ge(c))?!i||!i.includes(u)?n[u]=d:(l||(l={}))[u]=d:an(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,o=!0)}if(i){const c=k(n),d=l||q;for(let u=0;u<i.length;u++){const p=i[u];n[p]=Rn(r,c,p,d[p],e,!N(d,p))}}return o}function Rn(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=N(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&R(c)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const u=Rt(r);s=d[n]=c.call(null,t),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===tt(n))&&(s=!0))}return s}const ho=new WeakMap;function Ar(e,t,n=!1){const s=n?ho:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let c=!1;if(!R(e)){const u=p=>{c=!0;const[T,S]=Ar(p,t,!0);ee(o,T),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return K(e)&&s.set(e,rt),rt;if(I(i))for(let u=0;u<i.length;u++){const p=ge(i[u]);ys(p)&&(o[p]=q)}else if(i)for(const u in i){const p=ge(u);if(ys(p)){const T=i[u],S=o[p]=I(T)||R(T)?{type:T}:ee({},T),D=S.type;let $=!1,te=!0;if(I(D))for(let H=0;H<D.length;++H){const B=D[H],z=R(B)&&B.name;if(z==="Boolean"){$=!0;break}else z==="String"&&(te=!1)}else $=R(D)&&D.name==="Boolean";S[0]=$,S[1]=te,($||N(S,"default"))&&l.push(p)}}const d=[o,l];return K(e)&&s.set(e,d),d}function ys(e){return e[0]!=="$"&&!vt(e)}const Qn=e=>e==="_"||e==="_ctx"||e==="$stable",Xn=e=>I(e)?e.map(Pe):[Pe(e)],po=(e,t,n)=>{if(t._n)return t;const s=ji((...r)=>Xn(t(...r)),n);return s._c=!1,s},Er=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Qn(r))continue;const i=e[r];if(R(i))t[r]=po(r,i,s);else if(i!=null){const o=Xn(i);t[r]=()=>o}}},Pr=(e,t)=>{const n=Xn(t);e.slots.default=()=>n},Or=(e,t,n)=>{for(const s in t)(n||!Qn(s))&&(e[s]=t[s])},go=(e,t,n)=>{const s=e.slots=Tr();if(e.vnode.shapeFlag&32){const r=t._;r?(Or(s,t,n),n&&Vs(s,"_",r,!0)):Er(t,s)}else t&&Pr(e,t)},mo=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Or(r,t,n):(i=!t.$stable,Er(t,r)),o=t}else t&&(Pr(e,t),o={default:1});if(i)for(const l in r)!Qn(l)&&o[l]==null&&delete r[l]},de=Io;function bo(e){return vo(e)}function vo(e,t){const n=nn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:T,setScopeId:S=Oe,insertStaticContent:D}=e,$=(a,f,h,v=null,g=null,m=null,x=void 0,_=null,w=!!f.dynamicChildren)=>{if(a===f)return;a&&!mt(a,f)&&(v=Ht(a),xe(a,g,m,!0),a=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:b,ref:E,shapeFlag:C}=f;switch(b){case cn:te(a,f,h,v);break;case qe:H(a,f,h,v);break;case _n:a==null&&B(f,h,v,x);break;case ue:Ft(a,f,h,v,g,m,x,_,w);break;default:C&1?Z(a,f,h,v,g,m,x,_,w):C&6?$t(a,f,h,v,g,m,x,_,w):(C&64||C&128)&&b.process(a,f,h,v,g,m,x,_,w,dt)}E!=null&&g?_t(E,a&&a.ref,m,f||a,!f):E==null&&a&&a.ref!=null&&_t(a.ref,null,m,a,!0)},te=(a,f,h,v)=>{if(a==null)s(f.el=l(f.children),h,v);else{const g=f.el=a.el;f.children!==a.children&&d(g,f.children)}},H=(a,f,h,v)=>{a==null?s(f.el=c(f.children||""),h,v):f.el=a.el},B=(a,f,h,v)=>{[a.el,a.anchor]=D(a.children,f,h,v,a.el,a.anchor)},z=({el:a,anchor:f},h,v)=>{let g;for(;a&&a!==f;)g=T(a),s(a,h,v),a=g;s(f,h,v)},O=({el:a,anchor:f})=>{let h;for(;a&&a!==f;)h=T(a),r(a),a=h;r(f)},Z=(a,f,h,v,g,m,x,_,w)=>{if(f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),a==null)Le(f,h,v,g,m,x,_,w);else{const b=a.el&&a.el._isVueCE?a.el:null;try{b&&b._beginPatch(),Dt(a,f,g,m,x,_,w)}finally{b&&b._endPatch()}}},Le=(a,f,h,v,g,m,x,_)=>{let w,b;const{props:E,shapeFlag:C,transition:A,dirs:M}=a;if(w=a.el=o(a.type,m,E&&E.is,E),C&8?u(w,a.children):C&16&&ke(a.children,w,null,v,g,yn(a,m),x,_),M&&ze(a,null,v,"created"),_e(w,a,a.scopeId,x,v),E){for(const U in E)U!=="value"&&!vt(U)&&i(w,U,null,E[U],m,v);"value"in E&&i(w,"value",null,E.value,m),(b=E.onVnodeBeforeMount)&&Ae(b,v,a)}M&&ze(a,null,v,"beforeMount");const F=yo(g,A);F&&A.beforeEnter(w),s(w,f,h),((b=E&&E.onVnodeMounted)||F||M)&&de(()=>{b&&Ae(b,v,a),F&&A.enter(w),M&&ze(a,null,v,"mounted")},g)},_e=(a,f,h,v,g)=>{if(h&&S(a,h),v)for(let m=0;m<v.length;m++)S(a,v[m]);if(g){let m=g.subTree;if(f===m||$r(m.type)&&(m.ssContent===f||m.ssFallback===f)){const x=g.vnode;_e(a,x,x.scopeId,x.slotScopeIds,g.parent)}}},ke=(a,f,h,v,g,m,x,_,w=0)=>{for(let b=w;b<a.length;b++){const E=a[b]=_?Ue(a[b]):Pe(a[b]);$(null,E,f,h,v,g,m,x,_)}},Dt=(a,f,h,v,g,m,x)=>{const _=f.el=a.el;let{patchFlag:w,dynamicChildren:b,dirs:E}=f;w|=a.patchFlag&16;const C=a.props||q,A=f.props||q;let M;if(h&&Ye(h,!1),(M=A.onVnodeBeforeUpdate)&&Ae(M,h,f,a),E&&ze(f,a,h,"beforeUpdate"),h&&Ye(h,!0),(C.innerHTML&&A.innerHTML==null||C.textContent&&A.textContent==null)&&u(_,""),b?Ke(a.dynamicChildren,b,_,h,v,yn(f,g),m):x||W(a,f,_,null,h,v,yn(f,g),m,!1),w>0){if(w&16)ut(_,C,A,h,g);else if(w&2&&C.class!==A.class&&i(_,"class",null,A.class,g),w&4&&i(_,"style",C.style,A.style,g),w&8){const F=f.dynamicProps;for(let U=0;U<F.length;U++){const L=F[U],ae=C[L],ce=A[L];(ce!==ae||L==="value")&&i(_,L,ae,ce,g,h)}}w&1&&a.children!==f.children&&u(_,f.children)}else!x&&b==null&&ut(_,C,A,h,g);((M=A.onVnodeUpdated)||E)&&de(()=>{M&&Ae(M,h,f,a),E&&ze(f,a,h,"updated")},v)},Ke=(a,f,h,v,g,m,x)=>{for(let _=0;_<f.length;_++){const w=a[_],b=f[_],E=w.el&&(w.type===ue||!mt(w,b)||w.shapeFlag&198)?p(w.el):h;$(w,b,E,null,v,g,m,x,!0)}},ut=(a,f,h,v,g)=>{if(f!==h){if(f!==q)for(const m in f)!vt(m)&&!(m in h)&&i(a,m,f[m],null,g,v);for(const m in h){if(vt(m))continue;const x=h[m],_=f[m];x!==_&&m!=="value"&&i(a,m,_,x,g,v)}"value"in h&&i(a,"value",f.value,h.value,g)}},Ft=(a,f,h,v,g,m,x,_,w)=>{const b=f.el=a?a.el:l(""),E=f.anchor=a?a.anchor:l("");let{patchFlag:C,dynamicChildren:A,slotScopeIds:M}=f;M&&(_=_?_.concat(M):M),a==null?(s(b,h,v),s(E,h,v),ke(f.children||[],h,E,g,m,x,_,w)):C>0&&C&64&&A&&a.dynamicChildren?(Ke(a.dynamicChildren,A,h,g,m,x,_),(f.key!=null||g&&f===g.subTree)&&Mr(a,f,!0)):W(a,f,h,E,g,m,x,_,w)},$t=(a,f,h,v,g,m,x,_,w)=>{f.slotScopeIds=_,a==null?f.shapeFlag&512?g.ctx.activate(f,h,v,x,w):fn(f,h,v,g,m,x,w):ss(a,f,w)},fn=(a,f,h,v,g,m,x)=>{const _=a.component=ko(a,v,g);if(gr(a)&&(_.ctx.renderer=dt),Uo(_,!1,x),_.asyncDep){if(g&&g.registerDep(_,ne,x),!a.el){const w=_.subTree=$e(qe);H(null,w,f,h),a.placeholder=w.el}}else ne(_,a,f,h,g,m,x)},ss=(a,f,h)=>{const v=f.component=a.component;if(Oo(a,f,h))if(v.asyncDep&&!v.asyncResolved){G(v,f,h);return}else v.next=f,v.update();else f.el=a.el,v.vnode=f},ne=(a,f,h,v,g,m,x)=>{const _=()=>{if(a.isMounted){let{next:C,bu:A,u:M,parent:F,vnode:U}=a;{const Ce=Ir(a);if(Ce){C&&(C.el=U.el,G(a,C,x)),Ce.asyncDep.then(()=>{a.isUnmounted||_()});return}}let L=C,ae;Ye(a,!1),C?(C.el=U.el,G(a,C,x)):C=U,A&&dn(A),(ae=C.props&&C.props.onVnodeBeforeUpdate)&&Ae(ae,F,C,U),Ye(a,!0);const ce=_s(a),Te=a.subTree;a.subTree=ce,$(Te,ce,p(Te.el),Ht(Te),a,g,m),C.el=ce.el,L===null&&Mo(a,ce.el),M&&de(M,g),(ae=C.props&&C.props.onVnodeUpdated)&&de(()=>Ae(ae,F,C,U),g)}else{let C;const{el:A,props:M}=f,{bm:F,m:U,parent:L,root:ae,type:ce}=a,Te=xt(f);Ye(a,!1),F&&dn(F),!Te&&(C=M&&M.onVnodeBeforeMount)&&Ae(C,L,f),Ye(a,!0);{ae.ce&&ae.ce._def.shadowRoot!==!1&&ae.ce._injectChildStyle(ce);const Ce=a.subTree=_s(a);$(null,Ce,h,v,a,g,m),f.el=Ce.el}if(U&&de(U,g),!Te&&(C=M&&M.onVnodeMounted)){const Ce=f;de(()=>Ae(C,L,Ce),g)}(f.shapeFlag&256||L&&xt(L.vnode)&&L.vnode.shapeFlag&256)&&a.a&&de(a.a,g),a.isMounted=!0,f=h=v=null}};a.scope.on();const w=a.effect=new Gs(_);a.scope.off();const b=a.update=w.run.bind(w),E=a.job=w.runIfDirty.bind(w);E.i=a,E.id=a.uid,w.scheduler=()=>Yn(E),Ye(a,!0),b()},G=(a,f,h)=>{f.component=a;const v=a.vnode.props;a.vnode=f,a.next=null,uo(a,f.props,v,h),mo(a,f.children,h),je(),hs(a),He()},W=(a,f,h,v,g,m,x,_,w=!1)=>{const b=a&&a.children,E=a?a.shapeFlag:0,C=f.children,{patchFlag:A,shapeFlag:M}=f;if(A>0){if(A&128){jt(b,C,h,v,g,m,x,_,w);return}else if(A&256){Ge(b,C,h,v,g,m,x,_,w);return}}M&8?(E&16&&ht(b,g,m),C!==b&&u(h,C)):E&16?M&16?jt(b,C,h,v,g,m,x,_,w):ht(b,g,m,!0):(E&8&&u(h,""),M&16&&ke(C,h,v,g,m,x,_,w))},Ge=(a,f,h,v,g,m,x,_,w)=>{a=a||rt,f=f||rt;const b=a.length,E=f.length,C=Math.min(b,E);let A;for(A=0;A<C;A++){const M=f[A]=w?Ue(f[A]):Pe(f[A]);$(a[A],M,h,null,g,m,x,_,w)}b>E?ht(a,g,m,!0,!1,C):ke(f,h,v,g,m,x,_,w,C)},jt=(a,f,h,v,g,m,x,_,w)=>{let b=0;const E=f.length;let C=a.length-1,A=E-1;for(;b<=C&&b<=A;){const M=a[b],F=f[b]=w?Ue(f[b]):Pe(f[b]);if(mt(M,F))$(M,F,h,null,g,m,x,_,w);else break;b++}for(;b<=C&&b<=A;){const M=a[C],F=f[A]=w?Ue(f[A]):Pe(f[A]);if(mt(M,F))$(M,F,h,null,g,m,x,_,w);else break;C--,A--}if(b>C){if(b<=A){const M=A+1,F=M<E?f[M].el:v;for(;b<=A;)$(null,f[b]=w?Ue(f[b]):Pe(f[b]),h,F,g,m,x,_,w),b++}}else if(b>A)for(;b<=C;)xe(a[b],g,m,!0),b++;else{const M=b,F=b,U=new Map;for(b=F;b<=A;b++){const he=f[b]=w?Ue(f[b]):Pe(f[b]);he.key!=null&&U.set(he.key,b)}let L,ae=0;const ce=A-F+1;let Te=!1,Ce=0;const pt=new Array(ce);for(b=0;b<ce;b++)pt[b]=0;for(b=M;b<=C;b++){const he=a[b];if(ae>=ce){xe(he,g,m,!0);continue}let Se;if(he.key!=null)Se=U.get(he.key);else for(L=F;L<=A;L++)if(pt[L-F]===0&&mt(he,f[L])){Se=L;break}Se===void 0?xe(he,g,m,!0):(pt[Se-F]=b+1,Se>=Ce?Ce=Se:Te=!0,$(he,f[Se],h,null,g,m,x,_,w),ae++)}const os=Te?wo(pt):rt;for(L=os.length-1,b=ce-1;b>=0;b--){const he=F+b,Se=f[he],ls=f[he+1],as=he+1<E?ls.el||ls.placeholder:v;pt[b]===0?$(null,Se,h,as,g,m,x,_,w):Te&&(L<0||b!==os[L]?Je(Se,h,as,2):L--)}}},Je=(a,f,h,v,g=null)=>{const{el:m,type:x,transition:_,children:w,shapeFlag:b}=a;if(b&6){Je(a.component.subTree,f,h,v);return}if(b&128){a.suspense.move(f,h,v);return}if(b&64){x.move(a,f,h,dt);return}if(x===ue){s(m,f,h);for(let C=0;C<w.length;C++)Je(w[C],f,h,v);s(a.anchor,f,h);return}if(x===_n){z(a,f,h);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(m),s(m,f,h),de(()=>_.enter(m),g);else{const{leave:C,delayLeave:A,afterLeave:M}=_,F=()=>{a.ctx.isUnmounted?r(m):s(m,f,h)},U=()=>{m._isLeaving&&m[Li](!0),C(m,()=>{F(),M&&M()})};A?A(m,F,U):U()}else s(m,f,h)},xe=(a,f,h,v=!1,g=!1)=>{const{type:m,props:x,ref:_,children:w,dynamicChildren:b,shapeFlag:E,patchFlag:C,dirs:A,cacheIndex:M}=a;if(C===-2&&(g=!1),_!=null&&(je(),_t(_,null,h,a,!0),He()),M!=null&&(f.renderCache[M]=void 0),E&256){f.ctx.deactivate(a);return}const F=E&1&&A,U=!xt(a);let L;if(U&&(L=x&&x.onVnodeBeforeUnmount)&&Ae(L,f,a),E&6)Gr(a.component,h,v);else{if(E&128){a.suspense.unmount(h,v);return}F&&ze(a,null,f,"beforeUnmount"),E&64?a.type.remove(a,f,h,dt,v):b&&!b.hasOnce&&(m!==ue||C>0&&C&64)?ht(b,f,h,!1,!0):(m===ue&&C&384||!g&&E&16)&&ht(w,f,h),v&&rs(a)}(U&&(L=x&&x.onVnodeUnmounted)||F)&&de(()=>{L&&Ae(L,f,a),F&&ze(a,null,f,"unmounted")},h)},rs=a=>{const{type:f,el:h,anchor:v,transition:g}=a;if(f===ue){Kr(h,v);return}if(f===_n){O(a);return}const m=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:_}=g,w=()=>x(h,m);_?_(a.el,m,w):w()}else m()},Kr=(a,f)=>{let h;for(;a!==f;)h=T(a),r(a),a=h;r(f)},Gr=(a,f,h)=>{const{bum:v,scope:g,job:m,subTree:x,um:_,m:w,a:b}=a;ws(w),ws(b),v&&dn(v),g.stop(),m&&(m.flags|=8,xe(x,a,f,h)),_&&de(_,f),de(()=>{a.isUnmounted=!0},f)},ht=(a,f,h,v=!1,g=!1,m=0)=>{for(let x=m;x<a.length;x++)xe(a[x],f,h,v,g)},Ht=a=>{if(a.shapeFlag&6)return Ht(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const f=T(a.anchor||a.el),h=f&&f[Hi];return h?T(h):f};let un=!1;const is=(a,f,h)=>{a==null?f._vnode&&xe(f._vnode,null,null,!0):$(f._vnode||null,a,f,null,null,null,h),f._vnode=a,un||(un=!0,hs(),ur(),un=!1)},dt={p:$,um:xe,m:Je,r:rs,mt:fn,mc:ke,pc:W,pbc:Ke,n:Ht,o:e};return{render:is,hydrate:void 0,createApp:ao(is)}}function yn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ye({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Mr(e,t,n=!1){const s=e.children,r=t.children;if(I(s)&&I(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ue(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Mr(o,l)),l.type===cn&&l.patchFlag!==-1&&(l.el=o.el),l.type===qe&&!l.el&&(l.el=o.el)}}function wo(e){const t=e.slice(),n=[0];let s,r,i,o,l;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<d?i=l+1:o=l;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ir(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ir(t)}function ws(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _o=Symbol.for("v-scx"),xo=()=>Wt(_o);function wn(e,t,n){return Rr(e,t,n)}function Rr(e,t,n=q){const{immediate:s,deep:r,flush:i,once:o}=n,l=ee({},n),c=t&&s||!t&&i!=="post";let d;if(Mt){if(i==="sync"){const S=xo();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Oe,S.resume=Oe,S.pause=Oe,S}}const u=X;l.call=(S,D,$)=>Me(S,u,D,$);let p=!1;i==="post"?l.scheduler=S=>{de(S,u&&u.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(S,D)=>{D?S():Yn(S)}),l.augmentJob=S=>{t&&(S.flags|=4),p&&(S.flags|=2,u&&(S.id=u.uid,S.i=u))};const T=Ii(e,t,l);return Mt&&(d?d.push(T):c&&T()),T}function To(e,t,n){const s=this.proxy,r=Y(e)?e.includes(".")?Dr(s,e):()=>s[e]:e.bind(s,s);let i;R(t)?i=t:(i=t.handler,n=t);const o=Rt(this),l=Rr(r,i.bind(s),n);return o(),l}function Dr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Co=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ge(t)}Modifiers`]||e[`${tt(t)}Modifiers`];function So(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let r=n;const i=t.startsWith("update:"),o=i&&Co(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>Y(u)?u.trim():u)),o.number&&(r=n.map(Qr)));let l,c=s[l=hn(t)]||s[l=hn(ge(t))];!c&&i&&(c=s[l=hn(tt(t))]),c&&Me(c,e,6,r);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Me(d,e,6,r)}}const Ao=new WeakMap;function Fr(e,t,n=!1){const s=n?Ao:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!R(e)){const c=d=>{const u=Fr(d,t,!0);u&&(l=!0,ee(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(K(e)&&s.set(e,null),null):(I(i)?i.forEach(c=>o[c]=null):ee(o,i),K(e)&&s.set(e,o),o)}function an(e,t){return!e||!Qt(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,tt(t))||N(e,t))}function _s(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:d,renderCache:u,props:p,data:T,setupState:S,ctx:D,inheritAttrs:$}=e,te=Gt(e);let H,B;try{if(n.shapeFlag&4){const O=r||s,Z=O;H=Pe(d.call(Z,O,u,p,S,T,D)),B=l}else{const O=t;H=Pe(O.length>1?O(p,{attrs:l,slots:o,emit:c}):O(p,null)),B=t.props?l:Eo(l)}}catch(O){Ct.length=0,rn(O,e,1),H=$e(qe)}let z=H;if(B&&$!==!1){const O=Object.keys(B),{shapeFlag:Z}=z;O.length&&Z&7&&(i&&O.some(Hn)&&(B=Po(B,i)),z=ft(z,B,!1,!0))}return n.dirs&&(z=ft(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Zn(z,n.transition),H=z,Gt(te),H}const Eo=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qt(n))&&((t||(t={}))[n]=e[n]);return t},Po=(e,t)=>{const n={};for(const s in e)(!Hn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Oo(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xs(s,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const T=u[p];if(o[T]!==s[T]&&!an(d,T))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?xs(s,o,d):!0:!!o;return!1}function xs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!an(n,i))return!0}return!1}function Mo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const $r=e=>e.__isSuspense;function Io(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):$i(e)}const ue=Symbol.for("v-fgt"),cn=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),_n=Symbol.for("v-stc"),Ct=[];let pe=null;function oe(e=!1){Ct.push(pe=e?null:[])}function Ro(){Ct.pop(),pe=Ct[Ct.length-1]||null}let Ot=1;function Ts(e,t=!1){Ot+=e,e<0&&pe&&t&&(pe.hasOnce=!0)}function jr(e){return e.dynamicChildren=Ot>0?pe||rt:null,Ro(),Ot>0&&pe&&pe.push(e),e}function Fe(e,t,n,s,r,i){return jr(J(e,t,n,s,r,i,!0))}function ct(e,t,n,s,r){return jr($e(e,t,n,s,r,!0))}function Hr(e){return e?e.__v_isVNode===!0:!1}function mt(e,t){return e.type===t.type&&e.key===t.key}const Nr=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||le(e)||R(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function J(e,t=null,n=null,s=0,r=null,i=e===ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nr(t),ref:t&&Ut(t),scopeId:dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return l?(es(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Y(n)?8:16),Ot>0&&!o&&pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pe.push(c),c}const $e=Do;function Do(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Xi)&&(e=qe),Hr(e)){const l=ft(e,t,!0);return n&&es(l,n),Ot>0&&!i&&pe&&(l.shapeFlag&6?pe[pe.indexOf(e)]=l:pe.push(l)),l.patchFlag=-2,l}if(Go(e)&&(e=e.__vccOpts),t){t=Fo(t);let{class:l,style:c}=t;l&&!Y(l)&&(t.class=Wn(l)),K(c)&&(Jn(c)&&!I(c)&&(c=ee({},c)),t.style=kn(c))}const o=Y(e)?1:$r(e)?128:Ni(e)?64:K(e)?4:R(e)?2:0;return J(e,t,n,s,r,o,i,!0)}function Fo(e){return e?Jn(e)||Cr(e)?ee({},e):e:null}function ft(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=e,d=t?Ho(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Nr(d),ref:t&&t.ref?n&&i?I(i)?i.concat(Ut(t)):[i,Ut(t)]:Ut(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Zn(u,c.clone(u)),u}function $o(e=" ",t=0){return $e(cn,null,e,t)}function jo(e="",t=!1){return t?(oe(),ct(qe,null,e)):$e(qe,null,e)}function Pe(e){return e==null||typeof e=="boolean"?$e(qe):I(e)?$e(ue,null,e.slice()):Hr(e)?Ue(e):$e(cn,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function es(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),es(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Cr(t)?t._ctx=ve:r===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),s&64?(n=16,t=[$o(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ho(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Wn([t.class,s.class]));else if(r==="style")t.style=kn([t.style,s.style]);else if(Qt(r)){const i=t[r],o=s[r];o&&i!==o&&!(I(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Ae(e,t,n,s=null){Me(e,t,7,[n,s])}const No=_r();let Lo=0;function ko(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||No,i={uid:Lo++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ii(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ar(s,r),emitsOptions:Fr(s,r),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=So.bind(null,i),e.ce&&e.ce(i),i}let X=null;const Wo=()=>X||ve;let Zt,Dn;{const e=nn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Zt=t("__VUE_INSTANCE_SETTERS__",n=>X=n),Dn=t("__VUE_SSR_SETTERS__",n=>Mt=n)}const Rt=e=>{const t=X;return Zt(e),e.scope.on(),()=>{e.scope.off(),Zt(t)}},Cs=()=>{X&&X.scope.off(),Zt(null)};function Lr(e){return e.vnode.shapeFlag&4}let Mt=!1;function Uo(e,t=!1,n=!1){t&&Dn(t);const{props:s,children:r}=e.vnode,i=Lr(e);fo(e,s,i,t),go(e,r,n||t);const o=i?Vo(e,t):void 0;return t&&Dn(!1),o}function Vo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,to);const{setup:s}=n;if(s){je();const r=e.setupContext=s.length>1?Bo(e):null,i=Rt(e),o=It(s,e,0,[e.props,r]),l=ks(o);if(He(),i(),(l||e.sp)&&!xt(e)&&pr(e),l){if(o.then(Cs,Cs),t)return o.then(c=>{Ss(e,c)}).catch(c=>{rn(c,e,0)});e.asyncDep=o}else Ss(e,o)}else kr(e)}function Ss(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=ar(t)),kr(e)}function kr(e,t,n){const s=e.type;e.render||(e.render=s.render||Oe);{const r=Rt(e);je();try{no(e)}finally{He(),r()}}}const qo={get(e,t){return Q(e,"get",""),e[t]}};function Bo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,qo),slots:e.slots,emit:e.emit,expose:t}}function ts(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ar(Ai(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tt)return Tt[n](e)},has(t,n){return n in t||n in Tt}})):e.proxy}function Ko(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Go(e){return R(e)&&"__vccOpts"in e}const Jo=(e,t)=>Oi(e,t,Mt),zo="3.5.24";let Fn;const As=typeof window<"u"&&window.trustedTypes;if(As)try{Fn=As.createPolicy("vue",{createHTML:e=>e})}catch{}const Wr=Fn?e=>Fn.createHTML(e):e=>e,Yo="http://www.w3.org/2000/svg",Zo="http://www.w3.org/1998/Math/MathML",Re=typeof document<"u"?document:null,Es=Re&&Re.createElement("template"),Qo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Re.createElementNS(Yo,e):t==="mathml"?Re.createElementNS(Zo,e):n?Re.createElement(e,{is:n}):Re.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Re.createTextNode(e),createComment:e=>Re.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Re.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Es.innerHTML=Wr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Es.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xo=Symbol("_vtc");function el(e,t,n){const s=e[Xo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ps=Symbol("_vod"),tl=Symbol("_vsh"),nl=Symbol(""),sl=/(?:^|;)\s*display\s*:/;function rl(e,t,n){const s=e.style,r=Y(n);let i=!1;if(n&&!r){if(t)if(Y(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vt(s,l,"")}else for(const o in t)n[o]==null&&Vt(s,o,"");for(const o in n)o==="display"&&(i=!0),Vt(s,o,n[o])}else if(r){if(t!==n){const o=s[nl];o&&(n+=";"+o),s.cssText=n,i=sl.test(n)}}else t&&e.removeAttribute("style");Ps in e&&(e[Ps]=i?s.display:"",e[tl]&&(s.display="none"))}const Os=/\s*!important$/;function Vt(e,t,n){if(I(n))n.forEach(s=>Vt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=il(e,t);Os.test(n)?e.setProperty(tt(s),n.replace(Os,""),"important"):e[s]=n}}const Ms=["Webkit","Moz","ms"],xn={};function il(e,t){const n=xn[t];if(n)return n;let s=ge(t);if(s!=="filter"&&s in e)return xn[t]=s;s=tn(s);for(let r=0;r<Ms.length;r++){const i=Ms[r]+s;if(i in e)return xn[t]=i}return t}const Is="http://www.w3.org/1999/xlink";function Rs(e,t,n,s,r,i=ri(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Is,t.slice(6,t.length)):e.setAttributeNS(Is,t,n):n==null||i&&!qs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Be(n)?String(n):n)}function Ds(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wr(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=qs(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function ol(e,t,n,s){e.addEventListener(t,n,s)}function ll(e,t,n,s){e.removeEventListener(t,n,s)}const Fs=Symbol("_vei");function al(e,t,n,s,r=null){const i=e[Fs]||(e[Fs]={}),o=i[t];if(s&&o)o.value=s;else{const[l,c]=cl(t);if(s){const d=i[t]=hl(s,r);ol(e,l,d,c)}else o&&(ll(e,l,o,c),i[t]=void 0)}}const $s=/(?:Once|Passive|Capture)$/;function cl(e){let t;if($s.test(e)){t={};let s;for(;s=e.match($s);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tt(e.slice(2)),t]}let Tn=0;const fl=Promise.resolve(),ul=()=>Tn||(fl.then(()=>Tn=0),Tn=Date.now());function hl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Me(dl(s,n.value),t,5,[s])};return n.value=e,n.attached=ul(),n}function dl(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const js=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pl=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?el(e,s,o):t==="style"?rl(e,n,s):Qt(t)?Hn(t)||al(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gl(e,t,s,o))?(Ds(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Rs(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Y(s))?Ds(e,ge(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Rs(e,t,s,o))};function gl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&js(t)&&R(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return js(t)&&Y(n)?!1:t in e}const ml=ee({patchProp:pl},Qo);let Hs;function bl(){return Hs||(Hs=bo(ml))}const vl=((...e)=>{const t=bl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=wl(s);if(!r)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,yl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function yl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wl(e){return Y(e)?document.querySelector(e):e}const _l=""+new URL("logo-Q_r52S1l.png",import.meta.url).href,xl={key:0},Tl=["href"],Cl=["href"],Sl=on({__name:"IndexItem",props:{path:{},item:{}},setup(e){return(t,n)=>{const s=vr("IndexItem",!0);return oe(),Fe("li",null,[e.item.children.length>1?(oe(),Fe("details",xl,[J("summary",null,[J("a",{href:"#rule-"+e.path.join("-")},St(e.item.title),9,Tl)]),J("ul",null,[(oe(!0),Fe(ue,null,zt(e.item.children,(r,i)=>(oe(),ct(s,{path:e.path.concat(i),item:r},null,8,["path","item"]))),256))])])):(oe(),Fe("a",{key:1,href:"#rule-"+e.path.join("-")},St(e.item.title),9,Cl))])}}});function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var s=Array.from(typeof e=="string"?[e]:e);s[s.length-1]=s[s.length-1].replace(/\r?\n([\t ]*)$/,"");var r=s.reduce(function(l,c){var d=c.match(/\n([\t ]+|(?!\s).)/g);return d?l.concat(d.map(function(u){var p,T;return(T=(p=u.match(/[\t ]/g))===null||p===void 0?void 0:p.length)!==null&&T!==void 0?T:0})):l},[]);if(r.length){var i=new RegExp(`
[	 ]{`+Math.min.apply(Math,r)+"}","g");s=s.map(function(l){return l.replace(i,`
`)})}s[0]=s[0].replace(/^\r?\n/,"");var o=s[0];return t.forEach(function(l,c){var d=o.match(/(?:^|\n)( *)$/),u=d?d[1]:"",p=l;typeof l=="string"&&l.includes(`
`)&&(p=String(l).split(`
`).map(function(T,S){return S===0?T:""+u+T}).join(`
`)),o+=p+s[c+1]}),o}const Al=e=>"<td>"+e.join("</td><td>")+"</td>",Ur=e=>'<table class="table"><tr>'+e.map(Al).join("</tr><tr>")+"</tr></table>",$n=e=>Ur(e.map(t=>[t])),me=e=>e.join('<div class="divider"></div>'),j=(e,t="")=>y`
        <div role="alert" class="alert ${t}">
            <span>${e}</span>
        </div>
    `,be=(e,t,n)=>y`
    <div class="card bg-neutral shadow-sm">
        <div class="card-body">
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold">${e}</h2>
                <span class="text-3xl">${t} AP</span>
            </div>
            <div class="divider"></div>
            <div>
                ${n}
            </div>
        </div>
    </div>
    `,P=(e,t,n=[])=>({title:e,description:t,children:n}),El=P("Introduction",[y`
            Doomtroopers 25 uses a heavily modified version of the Kill Team 3rd Edition ruleset.
            All concepts needed for the players will be explained in the following.
            All rules and conflicts thereof are subject to the GM’s discretion.
            Treat his word as though he is the embodiment of our one and only God-Emperor.
            Praise be!
        `].join(" ")),Pl=P("Game Structure",[y`
            The game will be played over a number of sessions, each consisting of a combination of the digital base
            management system and physical player and non-player turns. Each player turn is considered 1 Tick for
            base management purposes.
            <br />
            <br />
            Turn order will be determined at the start of each session based on the arrangement of players around
            the table and starting with the player (or non-player) of the GM’s choice.
        `].join(" ")),Ol=P("Stats",y`
        All operatives have the following stats:
        <table class="table">
            <tr>
                <td>
                    RC
                </td>
                <td>
                    Ranged Combat Skill
                </td>
                <td>
                    The result required for successful attack dice whenever the operative uses a ranged weapon.
                </td>
            </tr>
            <tr>
                <td>
                    CC
                </td>
                <td>
                    Close Combat Skill
                </td>
                <td>
                    The result required for successful attack dice whenever the operative uses a melee weapon.
                </td>
            </tr>
            <tr>
                <td>
                    AP
                </td>
                <td>
                    Action Points
                </td>
                <td>
                    How many actions the operative can perform in one activation. 
                    Also used in determining control of mission objectives.
                    Some rules can modify an operative’s AP stat, but the total of those modifications 
                    can never be more than -1 or +1 AP.
                </td>
            </tr>
            <tr>
                <td>
                    MV
                </td>
                <td>
                    Movement
                </td>
                <td>
                    The operative’s move distance, used when performing the Move, Fall Back and Charge actions.
                </td>
            </tr>
            <tr>
                <td>
                    DEF
                </td>
                <td>
                    Defence
                </td>
                <td>
                    The result required for successful defence dice whenever being shot at by another operative.
                </td>
            </tr>
            <tr>
                <td>
                    HP
                </td>
                <td>
                    Hit Points
                </td>
                <td>
                    The operative’s starting number of hit points, which is reduced as damage is inflicted on it. 
                    An operative reduced to 0 HP is incapacitated.
                </td>
            </tr>
            <tr>
                <td>
                    INV
                </td>
                <td>
                    Inventory
                </td>
                <td>
                    The operative’s carrying capacity before being overencumbered, 
                    excluding any weapons it is equipped with.
                </td>
            </tr>
        </table>
    `),Ml=P("Abilities",y`
    Operatives may have unique abilities, which are listed here. 
    They will specify how and when they are used or if they are static abilities that are always active.
    `),Il=P("Damage",y`
    When damage is inflicted on an operative, reduce their hit points by that amount. 
    For character operatives, that is tracked by placing one or more dice on that character’s datacard,
    showing how many hit points remain. For NPC operatives, place the dice next to their model instead.
    `,[P("Wounded",y`
            While an operative has fewer than its starting hit points remaining, that operative is
            <strong>wounded</strong>. Being wounded has no effect in of itself, but certain other rules may
            refer to wounded operatives.
            `),P("Injured",y`
                While an operative has fewer than half its starting hit points remaining, that operative
                is also <b>injured</b>. While an operative is injured:
                ${$n(["Subtract 2” from its MV stat","They get +1 to both their RC and CC stats"])}
            `),P("Incapacitated",y`
            If an operative’s hit points are reduced to 0, that operative is incapacitated.
            This works differently for NPCs and characters
            ${$n([y`
                    NPCs are removed from the battlefield and replaced with a corpse token, which will
                    remain until it’s interacted with.
                    `,y`
                    When a character is incapacitated, they receive a Downed marker.
                    A downed operative may not take any other actions than the Move action, and it may not
                    move more than 2”. When a downed operative regains any HP, they may take actions as normal
                    again, but they keep the marker.
                    When an operative with a downed marker is reduced to 0 HP again, it is critically injured,
                    may no longer take any actions at all and can only be revived with a Medicae Stasis Tube.
                    `])}
            When a character operative becomes critically injured, there may be a permanent
            penalty assigned at the GM’s discretion.
            `)]),Rl=P("Weapons",y`
    All weapon profiles show the following information:
    ${Ur([["","Name","The weapon's name"],["ATK","Attacks","The number of attack dice to roll whenever an operative uses this weapon."],["DMG","Damage","The damage each dice inflicts. The first number is its Normal Dmg stat, the second value is its Critical Dmg stat."],["WR","Weapon Rules",y`
                Additional rules the weapon has. A list of these keywords can be found at the end of this document, 
                any unique weapon rules will be explained on the weapon card in full.
                `],["","Size",y`
                How large the weapon is, important for the operative’s carrying capacity.
                Equipped weapons do not count towards the operatives carrying capacity.
                `]])}
    Unless specified otherwise, an operative can only ever be equipped with one ranged weapon and one melee weapon.
    <br />
    The total size of weapons an operative can be equipped with
    can never be higher than the base INV stat of that operative.
    `),Dl=P("Armors",y`
    Armors may modify the following stats of the equipped operative: 
    Movement, Defence, Hit Points, and Inventory. 
    These modifications only take effect when an operative is equipped with the armor.
    <br />
    Any operative can only ever be equipped with one armor at a time.
    `),Fl=P("Accessories",y`
    Accessories are pieces of equipment that have a permanent effect on their wearer. 
    For an accessory to take effect, it must be in the inventory of the wearer and the wearer must 
    be able to use that accessory.
    <br />
    Accessories come in two categories: Personal accessories, which are specific to a certain character, 
    and universal accessories, which can be used by any character.
    `),$l=P("Consumables",y`
    Consumables are pieces of equipment that are one-time use only.
    To be able to use a consumable, the operative must have it in its inventory and either use the 
    Use Consumable action or the Shoot action, in case of grenade consumables.
    `),jl=P("Equipment",y`
    There are four types of equipment: Weapons, Armors, Accessories and Consumables.
    `,[Rl,Dl,Fl,$l]),Hl=P("Overencumberance",y`
    `),Nl=P("Carrying Large Objects",y`
    `),Ll=P("Carrying Incapacitated Operatives",y`
    `),kl=P("Carrying Capacity",y`
    `,[Hl,Nl,Ll]),Wl=P("Burning",y`
    `),Ul=P("Poisoned",y`
    `),Vl=P("Bleeding",y`
    `),ql=P("Blinded",y`
    `),Bl=P("Immobilized",y`
    `),Kl=P("Jammed Weapons",y`
    `),Gl=P("Weakened",y`
    `),Jl=P("Conditions",y`
    `,[Wl,Ul,Vl,ql,Bl,Kl,Gl]),zl=P("Operatives",y`
        The models the game is played with are called operatives. There are two types of operatives:
        ${$n([y`
            Character operatives: These are the player characters.
            Each player has their own character operative that only they will make the decisions for.
            `,"NPC operatives: These operatives will be played by the GM unless specified otherwise."])}
    `,[Ol,Ml,Il,jl,kl,Jl]),Yl=P("Determine Order",y`
    `,[]),Zl=be("Move",1,me([j("Move the active operative up to its MV stat to a position in which it can be placed.","alert-success alert-soft"),j(y`
            It cannot move into or through the control range of any enemy operatives, unless there are already one or more
            friendly operatives within control range of that enemy operative, in which case it may move through, 
            but not into, that operative’s control range
            `,"alert-warning alert-soft"),j(y`
            An operative may not perform this action while within control range of an enemy operative or during 
            an activation in which it performed the Fall Back or Charge action.
            `,"alert-error alert-soft"),y`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            ${j(y`
                    <h3 class="text-xl pb-2">Vault</h3>
                    Any terrain feature less than 2” in height can be vaulted over. For every terrain feature an
                     operative vaults over, reduce the total distance it can move during that action by 1”.
                `,"align-text-top")}
            ${j(y`
                    <h3 class="text-xl pb-2">Climb</h3>
                    Any terrain feature higher than 2” must be climbed. An operative can only climb a terrain
                    feature if it can end that action’s movement in a spot it can be placed. To climb, measure the
                    vertical distance moved and subtract it from the total distance it can move during that action.
                `,"align-text-top")}
            ${j(y`
                    <h3 class="text-xl pb-2">Drop</h3>
                    When moving off terrain, any vertical drop of 2” is ignored.
                    When moving off terrain more than 2” in height, the remaining vertical distance must be climbed.
                `,"align-text-top")}
            ${j(y`
                    <h3 class="text-xl pb-2">Jump</h3>
                    <br />
                    Any gaps between terrain features less than 4” in distance may be jumped. When jumping to a
                    terrain feature, any height difference of up to 1” may be ignored. Still measure the horizontal
                    distance normally.
                `,"align-text-top")}
        </div>
        `])),Ql=be("Fall Back",2,me([j(y`
            The same as the Move action, except the operative can move within the control range
            of enemy operatives, but cannot finish their move there.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action unless it is within control range of an enemy operative. 
            It cannot perform this action during an activation in which it performed the Move or Charge action
            or while it is overencumbered.
            `,"alert-error alert-soft")])),Xl=be("Dash",1,me([j("The same as the Move action, but instead of using the operative’s MV stat, it may move up to 3”.","alert-success alert-soft"),j(y`
            An operative may not perform this action while within control range of an enemy operative,
            during an activation in which it performed the Charge action, or while it is overencumbered.
            `,"alert-error alert-soft")])),ea=be("Charge",1,me([j(y`
            The same as the Move action, except the operative can move an additional 2”.
            `,"alert-success alert-soft"),j(y`
            It can and must finish the move within control range of an enemy operative. 
            If it moves within the control range of an enemy operative that no other friendly operatives are 
            within control range of, it may not leave that enemy’s control range.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while it has a Conceal order, if it’s already within 
            control range of an enemy operative, during the same activation in which it performed the
            Move, Dash or Fall Back action, or while it is overencumbered.
            `,"alert-error alert-soft")])),ta=be("Interact",1,me([j(y`
            The operative interacts with some element within its control range. 
            Search a body, push a button, talk to a friendly NPC or anything else that you can think of. 
            If the operative discovers an item, it may immediately perform a free Pick Up or Equip action.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while within control range of an
            enemy operative or while it is overencumbered.
            `,"alert-error alert-soft")])),na=be("Pick Up",1,me([j(y`
            The operative picks up an item it controls. Remove the appropriate marker (if any)
            and add the item to your inventory.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while within control range of
            an enemy operative or while it is overencumbered.
            `,"alert-error alert-soft")])),sa=be("Drop",1,me([j(y`
            The operative drops an item in its inventory or an item it is equipped with.
            Remove that item card from the operative’s datacard and place an item marker
            within control range of the operative.
            `,"alert-success alert-soft"),j(y`
            There are no restrictions on this action.
            `,"alert-error alert-soft")])),ra=be("Equip",2,me([j(y`
            The operative equips an item it controls or an item in its inventory. 
            Place that item card in either a free melee weapon slot, a free ranged weapon slot or a free armor slot.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while within control range of an enemy
            operative or while it is overencumbered.
            `,"alert-error alert-soft")])),ia=be("Unequip",2,me([j(y`
            The operative unequips an item it is equipped with. Move that item to the operative’s inventory.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while within control range of an
            enemy operative or while it is overencumbered.
            `,"alert-error alert-soft")])),oa=be("Use Consumable",1,me([j(y`
            The operative uses a consumable it is equipped with.
            Apply that consumable’s effect, then discard it.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while within control range
            of an enemy operative or while it is overencumbered.
            `,"alert-error alert-soft")])),la=be("Shoot",1,me([j(y`
            The operative shoots by following the sequence below.
            The active operative is the attacker.
            The selected target is the defender.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action while it has a Conceal order,
            while within control range of an enemy operative or while it is overencumbered.
            `,"alert-error alert-soft"),j(y`
            <strong>1. Select Weapon Profile</strong>
            <br />
            The attacker selects one ranged weapon profile it is equipped with to use and collects the attack
            dice - a number of D6 equal to the weapon profile’s ATK stat.
            <br />
            <br />
            <strong>2. Select Valid Target</strong>
            <br />
            The attacker selects an enemy operative that’s a valid target:
            <br />
            - If the intended target has an Engage order, it’s a valid target if it’s visible to the active operative.
            <br />
            - If the intended target has a Conceal order, it’s a valid target if it’s visible to the active
            operative and not in cover.
            <br />
            - An operative is visible if the active operative can see it.
            - An operative is in cover if there is intervening terrain within its control range.
            However, it cannot be in cover while within 2” of the active operative.
            <br />
            - An operative cannot be in cover and obscured by the same terrain feature. 
            If it would be, the defender chooses during this step.
            <br />
            <br />
            <strong>3. Roll Attack Dice</strong>
            The attacker rolls the attack dice.
            Each result that equals or exceeds the attackers RC stat is a success and is retained. 
            Each result that doesn’t is a fail and is discarded. 
            Each result of 6 is always a critical success, each result of 1 is always a fail.
            <br />
            <br />
            If there’s intervening Heavy terrain outside of 1” of either operative, the target is obscured. 
            In this case:
            <br />
            - The attacker must discard one success of their choice instead of retaining it.
            <br />
            - All critical successes are treated as normal successes instead 
            (this takes precedence over all other rules)
            <br />
            <br />
            <strong>4. Roll Defence Dice</strong>
            The defender rolls 3 defence dice. If the defender is in cover, it may retain one normal success 
            without rolling it - this is known as the cover safe.
            Each result that equals or exceeds the defender’s DEF stat  is a success and is retained.
            Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success,
            each result of 1 is always a fail.
            <br />
            <br />
            <strong>5. Resolve Defence Dice</strong>
            <br />
            The defender allocates all their successful defence dice to block successful attack dice:
            <br />
            - A normal success can block a normal success.
            <br />
            - Two normal successes can block a critical success.
            <br />
            - A critical success can block either a normal or a critical success.
            <br />
            <br />
            <strong>6. Resolve Attack Dice</strong>
            <br />
            All successful unblocked attack dice inflict damage on the target operative:
            <br />
            - A normal success inflicts damage equal to the weapon profile’s Normal Dmg stat.
            <br />
            - A critical success inflicts damage equal to the weapon profile’s Critical Dmg stat.
            <br />
            Any operatives that were reduced to 0 HP are incapacitated and are removed after the active
            operative’s Shoot action has been fully resolved. Character operatives are not removed 
            (see “Incapacitated Characters”).

            `)])),aa=be("Fight",1,me([j(y`
            The operative fights in melee by following the sequence below.
            The active operative is the attacker.
            The selected target is the defender.
            `,"alert-success alert-soft"),j(y`
            An operative cannot perform this action unless an enemy operative is within
            its control range or while it is overencumbered.
            `,"alert-error alert-soft"),j(y`
            <strong>1. Select Valid Target</strong>
            The attacker selects an enemy operative within its control range to fight against. 
            That enemy operative will retaliate in this action.
            <br />
            <br />
            <strong>2. Select Weapon Profile</strong>
            Both operatives select one melee weapon profile they are equipped with and collect their attack
            dice - a number of D6 equal to the weapon profile’s ATK stat.
            <br />
            <br />
            <strong>3. Roll Attack Dice</strong>
            Both operatives roll their attack dice simultaneously.
            Each result that equals or exceeds the operative’s CC stat is a success and is retained.
            Each result that doesn’t is a fail and is discarded.
            Each result of 6 is always a critical success, each result of 1 is always a fail.
            <br />
            <br />
            While a friendly operative is assisted by other friendly operatives, reduce its CC stat
            by 1 for each friendly operative doing so. In order to assist, a friendly operative must
            be within control range of the enemy operative in that fight and not be in control range
            of any other enemy operatives.
            <br />
            <br />
            <strong>4. Resolve Attack Dice</strong>
            Starting with the attacker, operatives alternate resolving one of their successful unblocked attack dice.
            Repeat this process until all attack dice have been resolved or one operative in that fight
            is incapacitated. When resolving an attack dice, the operative must strike or block with it:
            <br />
            - To strike, inflict damage equal to the weapon’s Normal or Critical Dmg stat,
            depending on the type of success.
            <br />
            - To block, allocate that dice to one of their opponents unresolved successes.
            A normal success can block a normal success, a critical success can block either
            a normal or a critical success.
            `)])),ca=P("Actions",y`
    Actions have effects and conditions that must be fulfilled for an operative to perform that action.
    There are Unique actions and Universal actions.
    <br />
    <br />
    Unique actions are actions that operatives may have access to either from items and equipment they’re
    carrying or intrinsic to the operative in question. All of these actions will specify their AP cost,
    their effect and their conditions. Unless specified otherwise, only the operative that action is associated
    with can perform that action.
    <br />
    <br />
    Universal actions are actions that can be performed by all operatives unless specified otherwise. 
    The universal actions are listed below:
    <div class="grid grid-cols-1 pt-4 pb-4">
        ${Zl}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-4">
        ${Xl}
        ${Ql}
        ${ea}
        ${ta}
        ${na}
        ${sa}
        ${ra}
        ${ia}
        ${oa}
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-4 pb-4">
        ${la}
        ${aa}
    </div>
    `,[]),fa=P("Performing Actions",y`
    `,[]),ua=P("A Player's turn",y`
    `,[Yl,fa,ca]),ha=P("Light Terrain",y`
    `,[]),da=P("Heavy Terrain",y`
    `,[]),pa=P("Intervening Terrain",y`
    `,[]),ga=P("Vantage Terrain",y`
    `,[]),ma=P("Molten Ground",y`
    `,[]),ba=P("Radiant Zone",y`
    `,[]),va=P("Sanctified Ground",y`
    `,[]),ya=P("Terrain",y`
    `,[ha,da,pa,ga,ma,ba,va]),wa=P("Bases",y`
    `,[]),_a=P("Control Range",y`
    `,[]),xa=P("Cover",y`
    `,[]),Ta=P("Dice",y`
    `,[]),Ca=P("Distances",y`
    `,[]),Sa=P("Obscured",y`
    `,[]),Aa=P("Visible",y`
    `,[]),Ea=P("Other Key Principles",y`
    `,[wa,_a,xa,Ta,Ca,Sa,Aa]),Pa=P("Weapon Keywords",y`
    `,[]),Vr=[El,Pl,zl,ua,ya,Ea,Pa],qr=(e,t)=>{const n=[{path:e,title:t.title,description:t.description}];return t.children?n.concat(t.children.flatMap((s,r)=>qr(e.concat([r]),s))):n},Br=(e,t)=>n=>{if(e.length===0)return t;{const r=e[0],i=e.slice(1);return Br(i,n(t,r))(n)}},Oa=(e,t)=>{const n=[];for(let s=0;s<e.length;s++)s!==0&&n.push(t),n.push(e[s]);return n},Ma=Vr.flatMap((e,t)=>qr([t],e));class Ia{html;constructor(t){this.html=t}linkify(t){return[this]}}class ns{html;constructor(t){this.html=t}linkify(t){return Oa(this.html.split(new RegExp(RegExp.escape(t.title),"ig")).map(n=>new ns(n)),new Ia(Ra(t.path.join("_"),t.title)))}}const Ra=(e,t)=>y`
    <a class="link link-primary" onclick="modal_${e}.showModal()">${t}</a>
    `,Da=(e,t)=>Br(Ma.filter(n=>n.title.toLowerCase()!=t.toLowerCase()),[new ns(e)])((n,s)=>n.flatMap(r=>r.linkify(s))).map(n=>n.html).join(""),Fa=["id"],$a=["innerHTML"],ja=["id"],Ha={class:"modal-box max-w-5xl"},Na={class:"text-lg font-bold"},La=["href","onclick"],ka=["innerHTML"],Wa=on({__name:"Rule",props:{path:{},item:{}},setup(e){return(t,n)=>{const s=vr("Rule",!0);return oe(),Fe(ue,null,[J("h2",{id:"rule-"+e.path.join("-"),class:"px-5 pb-5 text-2xl"},St(e.item.title),9,Fa),J("div",{innerHTML:zn(Da)(e.item.description,e.item.title),class:"px-5 pb-5"},null,8,$a),J("dialog",{id:`modal_${e.path.join("_")}`,class:"modal modal-bottom sm:modal-middle"},[J("div",Ha,[n[0]||(n[0]=J("form",{method:"dialog"},[J("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"},"✕")],-1)),J("h3",Na,[J("a",{href:`#rule-${e.path.join("-")}`,onclick:`modal_${e.path.join("_")}.close()`},St(e.item.title),9,La)]),J("div",{class:"p-2 text-justify",innerHTML:e.item.description},null,8,ka)]),n[1]||(n[1]=J("label",{class:"modal-backdrop",for:"${modalId}"},"Close",-1))],8,ja),e.item.children?(oe(!0),Fe(ue,{key:0},zt(e.item.children,(r,i)=>(oe(),ct(s,{path:e.path.concat(i),item:r},null,8,["path","item"]))),256)):jo("",!0)],64)}}}),Ua={class:"drawer lg:drawer-open"},Va={class:"drawer-content flex flex-col items-center justify-center"},qa={class:"flex flex-col"},Ba={class:"drawer-side z-1"},Ka={class:"menu bg-base-200 min-h-full w-80 p-4"},Ga=on({__name:"Index",props:{rules:{}},setup(e){return(t,n)=>(oe(),Fe("div",Ua,[n[3]||(n[3]=J("input",{type:"checkbox",class:"drawer-toggle"},null,-1)),J("div",Va,[n[0]||(n[0]=J("img",{src:_l,alt:"DOOMTROOPERS",class:"p-10"},null,-1)),n[1]||(n[1]=J("h1",{class:"text-3xl p-5"},"RULES",-1)),J("div",qa,[(oe(!0),Fe(ue,null,zt(e.rules,(s,r)=>(oe(),ct(Wa,{path:[r],item:s},null,8,["path","item"]))),256))])]),J("div",Ba,[n[2]||(n[2]=J("label",{for:"my-drawer-3","aria-label":"close sidebar",class:"drawer-overlay"},null,-1)),J("ul",Ka,[(oe(!0),Fe(ue,null,zt(e.rules,(s,r)=>(oe(),ct(Sl,{path:[r],item:s},null,8,["path","item"]))),256))])])]))}}),Ja=on({__name:"App",setup(e){return(t,n)=>(oe(),ct(Ga,{rules:zn(Vr)},null,8,["rules"]))}});vl(Ja).mount("#app");
