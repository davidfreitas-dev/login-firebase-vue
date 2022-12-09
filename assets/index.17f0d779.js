(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ei(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function ti(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?ru(r):ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(te(t))return t}}const eu=/;(?![^(]*\))/g,tu=/:([^]+)/,nu=/\/\*.*?\*\//gs;function ru(t){const e={};return t.replace(nu,"").split(eu).forEach(n=>{if(n){const r=n.split(tu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ni(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=ni(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=ei(su);function Da(t){return!!t||t===""}function ou(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=kr(t[r],e[r]);return n}function kr(t,e){if(t===e)return!0;let n=Wi(t),r=Wi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?ou(t,e):!1;if(n=te(t),r=te(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!kr(t[o],e[o]))return!1}}return String(t)===String(e)}function xa(t,e){return t.findIndex(n=>kr(n,e))}const Nv=t=>ce(t)?t:t==null?"":F(t)||te(t)&&(t.toString===Ua||!j(t.toString))?JSON.stringify(t,Ma,2):String(t),Ma=(t,e)=>e&&e.__v_isRef?Ma(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Dr(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!F(e)&&!Ba(e)?String(e):e,ee={},Kt=[],Fe=()=>{},au=()=>!1,cu=/^on[^a-z]/,Nr=t=>cu.test(t),ri=t=>t.startsWith("onUpdate:"),ye=Object.assign,si=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lu=Object.prototype.hasOwnProperty,z=(t,e)=>lu.call(t,e),F=Array.isArray,Gt=t=>Hn(t)==="[object Map]",Dr=t=>Hn(t)==="[object Set]",Wi=t=>Hn(t)==="[object Date]",j=t=>typeof t=="function",ce=t=>typeof t=="string",Cn=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",La=t=>te(t)&&j(t.then)&&j(t.catch),Ua=Object.prototype.toString,Hn=t=>Ua.call(t),uu=t=>Hn(t).slice(8,-1),Ba=t=>Hn(t)==="[object Object]",ii=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fu=/-(\w)/g,Ye=xr(t=>t.replace(fu,(e,n)=>n?n.toUpperCase():"")),du=/\B([A-Z])/g,Ft=xr(t=>t.replace(du,"-$1").toLowerCase()),Mr=xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=xr(t=>t?`on${Mr(t)}`:""),Pn=(t,e)=>!Object.is(t,e),or=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qi;const hu=()=>qi||(qi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let We;class $a{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}run(e){if(this.active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function pu(t){return new $a(t)}function mu(t,e=We){e&&e.active&&e.effects.push(t)}const oi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ja=t=>(t.w&bt)>0,Ha=t=>(t.n&bt)>0,gu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bt},_u=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ja(s)&&!Ha(s)?s.delete(t):e[n++]=s,s.w&=~bt,s.n&=~bt}e.length=n}},ks=new WeakMap;let En=0,bt=1;const Ns=30;let Ue;const Nt=Symbol(""),Ds=Symbol("");class ai{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mu(this,r)}run(){if(!this.active)return this.fn();let e=Ue,n=gt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,gt=!0,bt=1<<++En,En<=Ns?gu(this):zi(this),this.fn()}finally{En<=Ns&&_u(this),bt=1<<--En,Ue=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(zi(this),this.onStop&&this.onStop(),this.active=!1)}}function zi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gt=!0;const Va=[];function fn(){Va.push(gt),gt=!1}function dn(){const t=Va.pop();gt=t===void 0?!0:t}function Oe(t,e,n){if(gt&&Ue){let r=ks.get(t);r||ks.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=oi()),Wa(s)}}function Wa(t,e){let n=!1;En<=Ns?Ha(t)||(t.n|=bt,n=!ja(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function rt(t,e,n,r,s,i){const o=ks.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Fa(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ii(n)&&a.push(o.get("length")):(a.push(o.get(Nt)),Gt(t)&&a.push(o.get(Ds)));break;case"delete":F(t)||(a.push(o.get(Nt)),Gt(t)&&a.push(o.get(Ds)));break;case"set":Gt(t)&&a.push(o.get(Nt));break}if(a.length===1)a[0]&&xs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);xs(oi(c))}}function xs(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Ki(r);for(const r of n)r.computed||Ki(r)}function Ki(t,e){(t!==Ue||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vu=ei("__proto__,__v_isRef,__isVue"),qa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn)),yu=ci(),bu=ci(!1,!0),Eu=ci(!0),Gi=wu();function wu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn();const r=K(this)[e].apply(this,n);return dn(),r}}),t}function ci(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Bu:Ya:e?Ja:Ga).get(r))return r;const o=F(r);if(!t&&o&&z(Gi,s))return Reflect.get(Gi,s,i);const a=Reflect.get(r,s,i);return(Cn(s)?qa.has(s):vu(s))||(t||Oe(r,"get",s),e)?a:de(a)?o&&ii(s)?a:a.value:te(a)?t?Xa(a):Vn(a):a}}const Iu=za(),Ru=za(!0);function za(t=!1){return function(n,r,s,i){let o=n[r];if(tn(o)&&de(o)&&!de(s))return!1;if(!t&&(!yr(s)&&!tn(s)&&(o=K(o),s=K(s)),!F(n)&&de(o)&&!de(s)))return o.value=s,!0;const a=F(n)&&ii(r)?Number(r)<n.length:z(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Pn(s,o)&&rt(n,"set",r,s):rt(n,"add",r,s)),c}}function Tu(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rt(t,"delete",e,void 0),r}function Su(t,e){const n=Reflect.has(t,e);return(!Cn(e)||!qa.has(e))&&Oe(t,"has",e),n}function Au(t){return Oe(t,"iterate",F(t)?"length":Nt),Reflect.ownKeys(t)}const Ka={get:yu,set:Iu,deleteProperty:Tu,has:Su,ownKeys:Au},Ou={get:Eu,set(t,e){return!0},deleteProperty(t,e){return!0}},Cu=ye({},Ka,{get:bu,set:Ru}),li=t=>t,Lr=t=>Reflect.getPrototypeOf(t);function Xn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=Lr(s),a=r?li:n?hi:kn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Qn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zn(t,e=!1){return t=t.__v_raw,!e&&Oe(K(t),"iterate",Nt),Reflect.get(t,"size",t)}function Ji(t){t=K(t);const e=K(this);return Lr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Yi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Lr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Pn(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function Xi(t){const e=K(this),{has:n,get:r}=Lr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Qi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function er(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?li:t?hi:kn;return!t&&Oe(a,"iterate",Nt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function tr(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Gt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?li:e?hi:kn;return!e&&Oe(i,"iterate",c?Ds:Nt),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return t==="delete"?!1:this}}function Pu(){const t={get(i){return Xn(this,i)},get size(){return Zn(this)},has:Qn,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:er(!1,!1)},e={get(i){return Xn(this,i,!1,!0)},get size(){return Zn(this)},has:Qn,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:er(!1,!0)},n={get(i){return Xn(this,i,!0)},get size(){return Zn(this,!0)},has(i){return Qn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:er(!0,!1)},r={get(i){return Xn(this,i,!0,!0)},get size(){return Zn(this,!0)},has(i){return Qn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=tr(i,!1,!1),n[i]=tr(i,!0,!1),e[i]=tr(i,!1,!0),r[i]=tr(i,!0,!0)}),[t,n,e,r]}const[ku,Nu,Du,xu]=Pu();function ui(t,e){const n=e?t?xu:Du:t?Nu:ku;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const Mu={get:ui(!1,!1)},Lu={get:ui(!1,!0)},Uu={get:ui(!0,!1)},Ga=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,Bu=new WeakMap;function Fu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $u(t){return t.__v_skip||!Object.isExtensible(t)?0:Fu(uu(t))}function Vn(t){return tn(t)?t:fi(t,!1,Ka,Mu,Ga)}function ju(t){return fi(t,!1,Cu,Lu,Ja)}function Xa(t){return fi(t,!0,Ou,Uu,Ya)}function fi(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$u(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jt(t){return tn(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function yr(t){return!!(t&&t.__v_isShallow)}function Qa(t){return Jt(t)||tn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function di(t){return vr(t,"__v_skip",!0),t}const kn=t=>te(t)?Vn(t):t,hi=t=>te(t)?Xa(t):t;function Za(t){gt&&Ue&&(t=K(t),Wa(t.dep||(t.dep=oi())))}function ec(t,e){t=K(t),t.dep&&xs(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function tc(t){return nc(t,!1)}function Hu(t){return nc(t,!0)}function nc(t,e){return de(t)?t:new Vu(t,e)}class Vu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:kn(e)}get value(){return Za(this),this._value}set value(e){const n=this.__v_isShallow||yr(e)||tn(e);e=n?e:K(e),Pn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),ec(this))}}function Yt(t){return de(t)?t.value:t}const Wu={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rc(t){return Jt(t)?t:new Proxy(t,Wu)}var sc;class qu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[sc]=!1,this._dirty=!0,this.effect=new ai(e,()=>{this._dirty||(this._dirty=!0,ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Za(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}sc="__v_isReadonly";function zu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Fe):(r=t.get,s=t.set),new qu(r,s,i||!s,n)}function _t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ur(i,e,n)}return s}function $e(t,e,n,r){if(j(t)){const i=_t(t,e,n,r);return i&&La(i)&&i.catch(o=>{Ur(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($e(t[i],e,n,r));return s}function Ur(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_t(c,null,10,[t,o,a]);return}}Ku(t,n,s,r)}function Ku(t,e,n,r=!0){console.error(t)}let Nn=!1,Ms=!1;const fe=[];let ze=0;const Xt=[];let Ze=null,Ot=0;const ic=Promise.resolve();let pi=null;function oc(t){const e=pi||ic;return t?e.then(this?t.bind(this):t):e}function Gu(t){let e=ze+1,n=fe.length;for(;e<n;){const r=e+n>>>1;Dn(fe[r])<t?e=r+1:n=r}return e}function mi(t){(!fe.length||!fe.includes(t,Nn&&t.allowRecurse?ze+1:ze))&&(t.id==null?fe.push(t):fe.splice(Gu(t.id),0,t),ac())}function ac(){!Nn&&!Ms&&(Ms=!0,pi=ic.then(lc))}function Ju(t){const e=fe.indexOf(t);e>ze&&fe.splice(e,1)}function Yu(t){F(t)?Xt.push(...t):(!Ze||!Ze.includes(t,t.allowRecurse?Ot+1:Ot))&&Xt.push(t),ac()}function Zi(t,e=Nn?ze+1:0){for(;e<fe.length;e++){const n=fe[e];n&&n.pre&&(fe.splice(e,1),e--,n())}}function cc(t){if(Xt.length){const e=[...new Set(Xt)];if(Xt.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>Dn(n)-Dn(r)),Ot=0;Ot<Ze.length;Ot++)Ze[Ot]();Ze=null,Ot=0}}const Dn=t=>t.id==null?1/0:t.id,Xu=(t,e)=>{const n=Dn(t)-Dn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lc(t){Ms=!1,Nn=!0,fe.sort(Xu);const e=Fe;try{for(ze=0;ze<fe.length;ze++){const n=fe[ze];n&&n.active!==!1&&_t(n,null,14)}}finally{ze=0,fe.length=0,cc(),Nn=!1,pi=null,(fe.length||Xt.length)&&lc()}}function Qu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||ee;d&&(s=n.map(g=>ce(g)?g.trim():g)),h&&(s=n.map(Fa))}let a,c=r[a=es(e)]||r[a=es(Ye(e))];!c&&i&&(c=r[a=es(Ft(e))]),c&&$e(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$e(l,t,6,s)}}function uc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=uc(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ye(o,i),te(t)&&r.set(t,o),o)}function Br(t,e){return!t||!Nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Ft(e))||z(t,e))}let ke=null,Fr=null;function br(t){const e=ke;return ke=t,Fr=t&&t.type.__scopeId||null,e}function Dv(t){Fr=t}function xv(){Fr=null}function Zu(t,e=ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&co(-1);const i=br(e);let o;try{o=t(...s)}finally{br(i),r._d&&co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ts(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:T,inheritAttrs:C}=t;let B,O;const U=br(t);try{if(n.shapeFlag&4){const W=s||r;B=qe(u.call(W,W,h,i,g,d,T)),O=c}else{const W=e;B=qe(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),O=e.props?c:ef(c)}}catch(W){Tn.length=0,Ur(W,t,1),B=Ae(Mt)}let P=B;if(O&&C!==!1){const W=Object.keys(O),{shapeFlag:k}=P;W.length&&k&7&&(o&&W.some(ri)&&(O=tf(O,o)),P=nn(P,O))}return n.dirs&&(P=nn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),B=P,br(U),B}const ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nr(n))&&((e||(e={}))[n]=t[n]);return e},tf=(t,e)=>{const n={};for(const r in t)(!ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?eo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Br(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?eo(r,o,l):!0:!!o;return!1}function eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Br(n,i))return!0}return!1}function rf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sf=t=>t.__isSuspense;function of(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Yu(t)}function ar(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=le||ke;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r.proxy):e}}function Mv(t,e){return gi(t,null,e)}const nr={};function cr(t,e,n){return gi(t,e,n)}function gi(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){const a=le;let c,l=!1,u=!1;if(de(t)?(c=()=>t.value,l=yr(t)):Jt(t)?(c=()=>t,r=!0):F(t)?(u=!0,l=t.some(P=>Jt(P)||yr(P)),c=()=>t.map(P=>{if(de(P))return P.value;if(Jt(P))return Pt(P);if(j(P))return _t(P,a,2)})):j(t)?e?c=()=>_t(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),$e(t,a,3,[d])}:c=Fe,e&&r){const P=c;c=()=>Pt(P())}let h,d=P=>{h=O.onStop=()=>{_t(P,a,4)}},g;if(Mn)if(d=Fe,e?n&&$e(e,a,3,[c(),u?[]:void 0,d]):c(),s==="sync"){const P=td();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Fe;let T=u?new Array(t.length).fill(nr):nr;const C=()=>{if(!!O.active)if(e){const P=O.run();(r||l||(u?P.some((W,k)=>Pn(W,T[k])):Pn(P,T)))&&(h&&h(),$e(e,a,3,[P,T===nr?void 0:u&&T[0]===nr?[]:T,d]),T=P)}else O.run()};C.allowRecurse=!!e;let B;s==="sync"?B=C:s==="post"?B=()=>Ee(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),B=()=>mi(C));const O=new ai(c,B);e?n?C():T=O.run():s==="post"?Ee(O.run.bind(O),a&&a.suspense):O.run();const U=()=>{O.stop(),a&&a.scope&&si(a.scope.effects,O)};return g&&g.push(U),U}function af(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?fc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=le;rn(this);const a=gi(s,i.bind(r),n);return o?rn(o):Dt(),a}function fc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Pt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Dr(t)||Gt(t))t.forEach(n=>{Pt(n,e)});else if(Ba(t))for(const n in t)Pt(t[n],e);return t}function dc(t){return j(t)?{setup:t,name:t.name}:t}const lr=t=>!!t.type.__asyncLoader,hc=t=>t.type.__isKeepAlive;function cf(t,e){pc(t,"a",e)}function lf(t,e){pc(t,"da",e)}function pc(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($r(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hc(s.parent.vnode)&&uf(r,e,n,s),s=s.parent}}function uf(t,e,n,r){const s=$r(e,t,r,!0);mc(()=>{si(r[e],s)},n)}function $r(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fn(),rn(n);const a=$e(e,n,t,o);return Dt(),dn(),a});return r?s.unshift(i):s.push(i),i}}const it=t=>(e,n=le)=>(!Mn||t==="sp")&&$r(t,(...r)=>e(...r),n),ff=it("bm"),df=it("m"),hf=it("bu"),pf=it("u"),mf=it("bum"),mc=it("um"),gf=it("sp"),_f=it("rtg"),vf=it("rtc");function yf(t,e=le){$r("ec",t,e)}function Lv(t,e){const n=ke;if(n===null)return t;const r=Vr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ee]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fn(),$e(c,n,8,[t.el,a,t,e]),dn())}}const gc="components";function bf(t,e){return wf(gc,t,!0,e)||t}const Ef=Symbol();function wf(t,e,n=!0,r=!1){const s=ke||le;if(s){const i=s.type;if(t===gc){const a=Qf(i,!1);if(a&&(a===e||a===Ye(e)||a===Mr(Ye(e))))return i}const o=to(s[t]||i[t],e)||to(s.appContext[t],e);return!o&&r?i:o}}function to(t,e){return t&&(t[e]||t[Ye(e)]||t[Mr(Ye(e))])}const Ls=t=>t?Pc(t)?Vr(t)||t.proxy:Ls(t.parent):null,Rn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ls(t.parent),$root:t=>Ls(t.root),$emit:t=>t.emit,$options:t=>_i(t),$forceUpdate:t=>t.f||(t.f=()=>mi(t.update)),$nextTick:t=>t.n||(t.n=oc.bind(t.proxy)),$watch:t=>af.bind(t)}),ns=(t,e)=>t!==ee&&!t.__isScriptSetup&&z(t,e),If={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ns(r,e))return o[e]=1,r[e];if(s!==ee&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ee&&z(n,e))return o[e]=4,n[e];Us&&(o[e]=0)}}const u=Rn[e];let h,d;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ee&&z(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,z(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ns(s,e)?(s[e]=n,!0):r!==ee&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&z(t,o)||ns(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Rn,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Us=!0;function Rf(t){const e=_i(t),n=t.proxy,r=t.ctx;Us=!1,e.beforeCreate&&no(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:T,activated:C,deactivated:B,beforeDestroy:O,beforeUnmount:U,destroyed:P,unmounted:W,render:k,renderTracked:oe,renderTriggered:pe,errorCaptured:me,serverPrefetch:Ie,expose:ge,inheritAttrs:Ce,components:se,directives:Re,filters:_e}=e;if(l&&Tf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const X in o){const J=o[X];j(J)&&(r[X]=J.bind(n))}if(s){const X=s.call(n,n);te(X)&&(t.data=Vn(X))}if(Us=!0,i)for(const X in i){const J=i[X],De=j(J)?J.bind(n,n):j(J.get)?J.get.bind(n,n):Fe,It=!j(J)&&j(J.set)?J.set.bind(n):Fe,xe=Pe({get:De,set:It});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>xe.value,set:be=>xe.value=be})}if(a)for(const X in a)_c(a[X],r,n,X);if(c){const X=j(c)?c.call(n):c;Reflect.ownKeys(X).forEach(J=>{ar(J,X[J])})}u&&no(u,t,"c");function ne(X,J){F(J)?J.forEach(De=>X(De.bind(n))):J&&X(J.bind(n))}if(ne(ff,h),ne(df,d),ne(hf,g),ne(pf,T),ne(cf,C),ne(lf,B),ne(yf,me),ne(vf,oe),ne(_f,pe),ne(mf,U),ne(mc,W),ne(gf,Ie),F(ge))if(ge.length){const X=t.exposed||(t.exposed={});ge.forEach(J=>{Object.defineProperty(X,J,{get:()=>n[J],set:De=>n[J]=De})})}else t.exposed||(t.exposed={});k&&t.render===Fe&&(t.render=k),Ce!=null&&(t.inheritAttrs=Ce),se&&(t.components=se),Re&&(t.directives=Re)}function Tf(t,e,n=Fe,r=!1){F(t)&&(t=Bs(t));for(const s in t){const i=t[s];let o;te(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),de(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function no(t,e,n){$e(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _c(t,e,n,r){const s=r.includes(".")?fc(n,r):()=>n[r];if(ce(t)){const i=e[t];j(i)&&cr(s,i)}else if(j(t))cr(s,t.bind(n));else if(te(t))if(F(t))t.forEach(i=>_c(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&cr(s,i,t)}}function _i(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Er(c,l,o,!0)),Er(c,e,o)),te(e)&&i.set(e,c),c}function Er(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Er(t,i,n,!0),s&&s.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Sf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sf={data:ro,props:St,emits:St,methods:St,computed:St,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:St,directives:St,watch:Of,provide:ro,inject:Af};function ro(t,e){return e?t?function(){return ye(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Af(t,e){return St(Bs(t),Bs(e))}function Bs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function St(t,e){return t?ye(ye(Object.create(null),t),e):e}function Of(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function Cf(t,e,n,r=!1){const s={},i={};vr(i,Hr,1),t.propsDefaults=Object.create(null),vc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ju(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Br(t.emitsOptions,d))continue;const g=e[d];if(c)if(z(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const T=Ye(d);s[T]=Fs(c,a,T,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{vc(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!z(e,h)&&((u=Ft(h))===h||!z(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Fs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!z(e,h)&&!0)&&(delete i[h],l=!0)}l&&rt(t,"set","$attrs")}function vc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ir(c))continue;const l=e[c];let u;s&&z(s,u=Ye(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Br(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Fs(s,c,h,l[h],t,!z(l,h))}}return o}function Fs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(rn(s),r=l[n]=c.call(null,e),Dt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function yc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=h=>{c=!0;const[d,g]=yc(h,e,!0);ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return te(t)&&r.set(t,Kt),Kt;if(F(i))for(let u=0;u<i.length;u++){const h=Ye(i[u]);so(h)&&(o[h]=ee)}else if(i)for(const u in i){const h=Ye(u);if(so(h)){const d=i[u],g=o[h]=F(d)||j(d)?{type:d}:Object.assign({},d);if(g){const T=ao(Boolean,g.type),C=ao(String,g.type);g[0]=T>-1,g[1]=C<0||T<C,(T>-1||z(g,"default"))&&a.push(h)}}}const l=[o,a];return te(t)&&r.set(t,l),l}function so(t){return t[0]!=="$"}function io(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function oo(t,e){return io(t)===io(e)}function ao(t,e){return F(e)?e.findIndex(n=>oo(n,t)):j(e)&&oo(e,t)?0:-1}const bc=t=>t[0]==="_"||t==="$stable",vi=t=>F(t)?t.map(qe):[qe(t)],kf=(t,e,n)=>{if(e._n)return e;const r=Zu((...s)=>vi(e(...s)),n);return r._c=!1,r},Ec=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bc(s))continue;const i=t[s];if(j(i))e[s]=kf(s,i,r);else if(i!=null){const o=vi(i);e[s]=()=>o}}},wc=(t,e)=>{const n=vi(e);t.slots.default=()=>n},Nf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),vr(e,"_",n)):Ec(e,t.slots={})}else t.slots={},e&&wc(t,e);vr(t.slots,Hr,1)},Df=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ec(e,s)),o=e}else e&&(wc(t,e),o={default:1});if(i)for(const a in s)!bc(a)&&!(a in o)&&delete s[a]};function Ic(){return{app:null,config:{isNativeTag:au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function Mf(t,e){return function(r,s=null){j(r)||(r=Object.assign({},r)),s!=null&&!te(s)&&(s=null);const i=Ic(),o=new Set;let a=!1;const c=i.app={_uid:xf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:nd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ae(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Vr(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function $s(t,e,n,r,s=!1){if(F(t)){t.forEach((d,g)=>$s(d,e&&(F(e)?e[g]:e),n,r,s));return}if(lr(r)&&!s)return;const i=r.shapeFlag&4?Vr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ce(l)?(u[l]=null,z(h,l)&&(h[l]=null)):de(l)&&(l.value=null)),j(c))_t(c,a,12,[o,u]);else{const d=ce(c),g=de(c);if(d||g){const T=()=>{if(t.f){const C=d?z(h,c)?h[c]:u[c]:c.value;s?F(C)&&si(C,i):F(C)?C.includes(i)||C.push(i):d?(u[c]=[i],z(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,z(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Ee(T,n)):T()}}}const Ee=of;function Lf(t){return Uf(t)}function Uf(t,e){const n=hu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Fe,insertStaticContent:T}=t,C=(f,p,m,_=null,y=null,w=null,S=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!yn(f,p)&&(_=R(f),be(f,y,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:x,shapeFlag:N}=p;switch(b){case jr:B(f,p,m,_);break;case Mt:O(f,p,m,_);break;case rs:f==null&&U(p,m,_,S);break;case et:se(f,p,m,_,y,w,S,E,I);break;default:N&1?k(f,p,m,_,y,w,S,E,I):N&6?Re(f,p,m,_,y,w,S,E,I):(N&64||N&128)&&b.process(f,p,m,_,y,w,S,E,I,q)}x!=null&&y&&$s(x,f&&f.ref,w,p||f,!p)},B=(f,p,m,_)=>{if(f==null)r(p.el=a(p.children),m,_);else{const y=p.el=f.el;p.children!==f.children&&l(y,p.children)}},O=(f,p,m,_)=>{f==null?r(p.el=c(p.children||""),m,_):p.el=f.el},U=(f,p,m,_)=>{[f.el,f.anchor]=T(f.children,p,m,_,f.el,f.anchor)},P=({el:f,anchor:p},m,_)=>{let y;for(;f&&f!==p;)y=d(f),r(f,m,_),f=y;r(p,m,_)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},k=(f,p,m,_,y,w,S,E,I)=>{S=S||p.type==="svg",f==null?oe(p,m,_,y,w,S,E,I):Ie(f,p,y,w,S,E,I)},oe=(f,p,m,_,y,w,S,E)=>{let I,b;const{type:x,props:N,shapeFlag:M,transition:$,dirs:V}=f;if(I=f.el=o(f.type,w,N&&N.is,N),M&8?u(I,f.children):M&16&&me(f.children,I,null,_,y,w&&x!=="foreignObject",S,E),V&&Rt(f,null,_,"created"),N){for(const Y in N)Y!=="value"&&!ir(Y)&&i(I,Y,null,N[Y],w,f.children,_,y,A);"value"in N&&i(I,"value",null,N.value),(b=N.onVnodeBeforeMount)&&Ve(b,_,f)}pe(I,f,f.scopeId,S,_),V&&Rt(f,null,_,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;Q&&$.beforeEnter(I),r(I,p,m),((b=N&&N.onVnodeMounted)||Q||V)&&Ee(()=>{b&&Ve(b,_,f),Q&&$.enter(I),V&&Rt(f,null,_,"mounted")},y)},pe=(f,p,m,_,y)=>{if(m&&g(f,m),_)for(let w=0;w<_.length;w++)g(f,_[w]);if(y){let w=y.subTree;if(p===w){const S=y.vnode;pe(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},me=(f,p,m,_,y,w,S,E,I=0)=>{for(let b=I;b<f.length;b++){const x=f[b]=E?lt(f[b]):qe(f[b]);C(null,x,p,m,_,y,w,S,E)}},Ie=(f,p,m,_,y,w,S)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:x}=p;I|=f.patchFlag&16;const N=f.props||ee,M=p.props||ee;let $;m&&Tt(m,!1),($=M.onVnodeBeforeUpdate)&&Ve($,m,p,f),x&&Rt(p,f,m,"beforeUpdate"),m&&Tt(m,!0);const V=y&&p.type!=="foreignObject";if(b?ge(f.dynamicChildren,b,E,m,_,V,w):S||J(f,p,E,null,m,_,V,w,!1),I>0){if(I&16)Ce(E,p,N,M,m,_,y);else if(I&2&&N.class!==M.class&&i(E,"class",null,M.class,y),I&4&&i(E,"style",N.style,M.style,y),I&8){const Q=p.dynamicProps;for(let Y=0;Y<Q.length;Y++){const ie=Q[Y],Me=N[ie],Ht=M[ie];(Ht!==Me||ie==="value")&&i(E,ie,Me,Ht,y,f.children,m,_,A)}}I&1&&f.children!==p.children&&u(E,p.children)}else!S&&b==null&&Ce(E,p,N,M,m,_,y);(($=M.onVnodeUpdated)||x)&&Ee(()=>{$&&Ve($,m,p,f),x&&Rt(p,f,m,"updated")},_)},ge=(f,p,m,_,y,w,S)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],x=I.el&&(I.type===et||!yn(I,b)||I.shapeFlag&70)?h(I.el):m;C(I,b,x,null,_,y,w,S,!0)}},Ce=(f,p,m,_,y,w,S)=>{if(m!==_){if(m!==ee)for(const E in m)!ir(E)&&!(E in _)&&i(f,E,m[E],null,S,p.children,y,w,A);for(const E in _){if(ir(E))continue;const I=_[E],b=m[E];I!==b&&E!=="value"&&i(f,E,b,I,S,p.children,y,w,A)}"value"in _&&i(f,"value",m.value,_.value)}},se=(f,p,m,_,y,w,S,E,I)=>{const b=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:M,slotScopeIds:$}=p;$&&(E=E?E.concat($):$),f==null?(r(b,m,_),r(x,m,_),me(p.children,m,x,y,w,S,E,I)):N>0&&N&64&&M&&f.dynamicChildren?(ge(f.dynamicChildren,M,m,y,w,S,E),(p.key!=null||y&&p===y.subTree)&&Rc(f,p,!0)):J(f,p,m,x,y,w,S,E,I)},Re=(f,p,m,_,y,w,S,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?y.ctx.activate(p,m,_,S,I):_e(p,m,_,y,w,S,I):wt(f,p,I)},_e=(f,p,m,_,y,w,S)=>{const E=f.component=Kf(f,_,y);if(hc(f)&&(E.ctx.renderer=q),Gf(E),E.asyncDep){if(y&&y.registerDep(E,ne),!f.el){const I=E.subTree=Ae(Mt);O(null,I,p,m)}return}ne(E,f,p,m,y,w,S)},wt=(f,p,m)=>{const _=p.component=f.component;if(nf(f,p,m))if(_.asyncDep&&!_.asyncResolved){X(_,p,m);return}else _.next=p,Ju(_.update),_.update();else p.el=f.el,_.vnode=p},ne=(f,p,m,_,y,w,S)=>{const E=()=>{if(f.isMounted){let{next:x,bu:N,u:M,parent:$,vnode:V}=f,Q=x,Y;Tt(f,!1),x?(x.el=V.el,X(f,x,S)):x=V,N&&or(N),(Y=x.props&&x.props.onVnodeBeforeUpdate)&&Ve(Y,$,x,V),Tt(f,!0);const ie=ts(f),Me=f.subTree;f.subTree=ie,C(Me,ie,h(Me.el),R(Me),f,y,w),x.el=ie.el,Q===null&&rf(f,ie.el),M&&Ee(M,y),(Y=x.props&&x.props.onVnodeUpdated)&&Ee(()=>Ve(Y,$,x,V),y)}else{let x;const{el:N,props:M}=p,{bm:$,m:V,parent:Q}=f,Y=lr(p);if(Tt(f,!1),$&&or($),!Y&&(x=M&&M.onVnodeBeforeMount)&&Ve(x,Q,p),Tt(f,!0),N&&H){const ie=()=>{f.subTree=ts(f),H(N,f.subTree,f,y,null)};Y?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=ts(f);C(null,ie,m,_,f,y,w),p.el=ie.el}if(V&&Ee(V,y),!Y&&(x=M&&M.onVnodeMounted)){const ie=p;Ee(()=>Ve(x,Q,ie),y)}(p.shapeFlag&256||Q&&lr(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Ee(f.a,y),f.isMounted=!0,p=m=_=null}},I=f.effect=new ai(E,()=>mi(b),f.scope),b=f.update=()=>I.run();b.id=f.uid,Tt(f,!0),b()},X=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Pf(f,p.props,_,m),Df(f,p.children,m),fn(),Zi(),dn()},J=(f,p,m,_,y,w,S,E,I=!1)=>{const b=f&&f.children,x=f?f.shapeFlag:0,N=p.children,{patchFlag:M,shapeFlag:$}=p;if(M>0){if(M&128){It(b,N,m,_,y,w,S,E,I);return}else if(M&256){De(b,N,m,_,y,w,S,E,I);return}}$&8?(x&16&&A(b,y,w),N!==b&&u(m,N)):x&16?$&16?It(b,N,m,_,y,w,S,E,I):A(b,y,w,!0):(x&8&&u(m,""),$&16&&me(N,m,_,y,w,S,E,I))},De=(f,p,m,_,y,w,S,E,I)=>{f=f||Kt,p=p||Kt;const b=f.length,x=p.length,N=Math.min(b,x);let M;for(M=0;M<N;M++){const $=p[M]=I?lt(p[M]):qe(p[M]);C(f[M],$,m,null,y,w,S,E,I)}b>x?A(f,y,w,!0,!1,N):me(p,m,_,y,w,S,E,I,N)},It=(f,p,m,_,y,w,S,E,I)=>{let b=0;const x=p.length;let N=f.length-1,M=x-1;for(;b<=N&&b<=M;){const $=f[b],V=p[b]=I?lt(p[b]):qe(p[b]);if(yn($,V))C($,V,m,null,y,w,S,E,I);else break;b++}for(;b<=N&&b<=M;){const $=f[N],V=p[M]=I?lt(p[M]):qe(p[M]);if(yn($,V))C($,V,m,null,y,w,S,E,I);else break;N--,M--}if(b>N){if(b<=M){const $=M+1,V=$<x?p[$].el:_;for(;b<=M;)C(null,p[b]=I?lt(p[b]):qe(p[b]),m,V,y,w,S,E,I),b++}}else if(b>M)for(;b<=N;)be(f[b],y,w,!0),b++;else{const $=b,V=b,Q=new Map;for(b=V;b<=M;b++){const Te=p[b]=I?lt(p[b]):qe(p[b]);Te.key!=null&&Q.set(Te.key,b)}let Y,ie=0;const Me=M-V+1;let Ht=!1,ji=0;const vn=new Array(Me);for(b=0;b<Me;b++)vn[b]=0;for(b=$;b<=N;b++){const Te=f[b];if(ie>=Me){be(Te,y,w,!0);continue}let He;if(Te.key!=null)He=Q.get(Te.key);else for(Y=V;Y<=M;Y++)if(vn[Y-V]===0&&yn(Te,p[Y])){He=Y;break}He===void 0?be(Te,y,w,!0):(vn[He-V]=b+1,He>=ji?ji=He:Ht=!0,C(Te,p[He],m,null,y,w,S,E,I),ie++)}const Hi=Ht?Bf(vn):Kt;for(Y=Hi.length-1,b=Me-1;b>=0;b--){const Te=V+b,He=p[Te],Vi=Te+1<x?p[Te+1].el:_;vn[b]===0?C(null,He,m,Vi,y,w,S,E,I):Ht&&(Y<0||b!==Hi[Y]?xe(He,m,Vi,2):Y--)}}},xe=(f,p,m,_,y=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:b}=f;if(b&6){xe(f.component.subTree,p,m,_);return}if(b&128){f.suspense.move(p,m,_);return}if(b&64){S.move(f,p,m,q);return}if(S===et){r(w,p,m);for(let N=0;N<I.length;N++)xe(I[N],p,m,_);r(f.anchor,p,m);return}if(S===rs){P(f,p,m);return}if(_!==2&&b&1&&E)if(_===0)E.beforeEnter(w),r(w,p,m),Ee(()=>E.enter(w),y);else{const{leave:N,delayLeave:M,afterLeave:$}=E,V=()=>r(w,p,m),Q=()=>{N(w,()=>{V(),$&&$()})};M?M(w,V,Q):Q()}else r(w,p,m)},be=(f,p,m,_=!1,y=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:b,shapeFlag:x,patchFlag:N,dirs:M}=f;if(E!=null&&$s(E,null,m,f,!0),x&256){p.ctx.deactivate(f);return}const $=x&1&&M,V=!lr(f);let Q;if(V&&(Q=S&&S.onVnodeBeforeUnmount)&&Ve(Q,p,f),x&6)v(f.component,m,_);else{if(x&128){f.suspense.unmount(m,_);return}$&&Rt(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,m,y,q,_):b&&(w!==et||N>0&&N&64)?A(b,p,m,!1,!0):(w===et&&N&384||!y&&x&16)&&A(I,p,m),_&&jt(f)}(V&&(Q=S&&S.onVnodeUnmounted)||$)&&Ee(()=>{Q&&Ve(Q,p,f),$&&Rt(f,null,p,"unmounted")},m)},jt=f=>{const{type:p,el:m,anchor:_,transition:y}=f;if(p===et){Yn(m,_);return}if(p===rs){W(f);return}const w=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,I=()=>S(m,w);E?E(f.el,w,I):I()}else w()},Yn=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},v=(f,p,m)=>{const{bum:_,scope:y,update:w,subTree:S,um:E}=f;_&&or(_),y.stop(),w&&(w.active=!1,be(S,f,p,m)),E&&Ee(E,p),Ee(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(f,p,m,_=!1,y=!1,w=0)=>{for(let S=w;S<f.length;S++)be(f[S],p,m,_,y)},R=f=>f.shapeFlag&6?R(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),D=(f,p,m)=>{f==null?p._vnode&&be(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,m),Zi(),cc(),p._vnode=f},q={p:C,um:be,m:xe,r:jt,mt:_e,mc:me,pc:J,pbc:ge,n:R,o:t};let re,H;return e&&([re,H]=e(q)),{render:D,hydrate:re,createApp:Mf(D,re)}}function Tt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rc(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=lt(s[i]),a.el=o.el),n||Rc(o,a)),a.type===jr&&(a.el=o.el)}}function Bf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ff=t=>t.__isTeleport,et=Symbol(void 0),jr=Symbol(void 0),Mt=Symbol(void 0),rs=Symbol(void 0),Tn=[];let Be=null;function Tc(t=!1){Tn.push(Be=t?null:[])}function $f(){Tn.pop(),Be=Tn[Tn.length-1]||null}let xn=1;function co(t){xn+=t}function Sc(t){return t.dynamicChildren=xn>0?Be||Kt:null,$f(),xn>0&&Be&&Be.push(t),t}function Uv(t,e,n,r,s,i){return Sc(Cc(t,e,n,r,s,i,!0))}function Ac(t,e,n,r,s){return Sc(Ae(t,e,n,r,s,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const Hr="__vInternal",Oc=({key:t})=>t!=null?t:null,ur=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||de(t)||j(t)?{i:ke,r:t,k:e,f:!!n}:t:null;function Cc(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oc(e),ref:e&&ur(e),scopeId:Fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return a?(yi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),xn>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const Ae=jf;function jf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ef)&&(t=Mt),js(t)){const a=nn(t,e,!0);return n&&yi(a,n),xn>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(t)]=a:Be.push(a)),a.patchFlag|=-2,a}if(Zf(t)&&(t=t.__vccOpts),e){e=Hf(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=ni(a)),te(c)&&(Qa(c)&&!F(c)&&(c=ye({},c)),e.style=ti(c))}const o=ce(t)?1:sf(t)?128:Ff(t)?64:te(t)?4:j(t)?2:0;return Cc(t,e,n,r,s,o,i,!0)}function Hf(t){return t?Qa(t)||Hr in t?ye({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Wf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Oc(a),ref:e&&e.ref?n&&s?F(s)?s.concat(ur(e)):[s,ur(e)]:ur(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Vf(t=" ",e=0){return Ae(jr,null,t,e)}function Bv(t="",e=!1){return e?(Tc(),Ac(Mt,null,t)):Ae(Mt,null,t)}function qe(t){return t==null||typeof t=="boolean"?Ae(Mt):F(t)?Ae(et,null,t.slice()):typeof t=="object"?lt(t):Ae(jr,null,String(t))}function lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function yi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Hr in e)?e._ctx=ke:s===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),r&64?(n=16,e=[Vf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ni([e.class,r.class]));else if(s==="style")e.style=ti([e.style,r.style]);else if(Nr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){$e(t,e,7,[n,r])}const qf=Ic();let zf=0;function Kf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qf,i={uid:zf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(r,s),emitsOptions:uc(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qu.bind(null,i),t.ce&&t.ce(i),i}let le=null;const rn=t=>{le=t,t.scope.on()},Dt=()=>{le&&le.scope.off(),le=null};function Pc(t){return t.vnode.shapeFlag&4}let Mn=!1;function Gf(t,e=!1){Mn=e;const{props:n,children:r}=t.vnode,s=Pc(t);Cf(t,n,s,e),Nf(t,r);const i=s?Jf(t,e):void 0;return Mn=!1,i}function Jf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=di(new Proxy(t.ctx,If));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Xf(t):null;rn(t),fn();const i=_t(r,t,0,[t.props,s]);if(dn(),Dt(),La(i)){if(i.then(Dt,Dt),e)return i.then(o=>{lo(t,o,e)}).catch(o=>{Ur(o,t,0)});t.asyncDep=i}else lo(t,i,e)}else kc(t,e)}function lo(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=rc(e)),kc(t,n)}let uo;function kc(t,e,n){const r=t.type;if(!t.render){if(!e&&uo&&!r.render){const s=r.template||_i(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ye(ye({isCustomElement:i,delimiters:a},o),c);r.render=uo(s,l)}}t.render=r.render||Fe}rn(t),fn(),Rf(t),dn(),Dt()}function Yf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Xf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Yf(t))},slots:t.slots,emit:t.emit,expose:e}}function Vr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rc(di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function Qf(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Zf(t){return j(t)&&"__vccOpts"in t}const Pe=(t,e)=>zu(t,e,Mn);function Nc(t,e,n){const r=arguments.length;return r===2?te(e)&&!F(e)?js(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),Ae(t,e,n))}const ed=Symbol(""),td=()=>Ke(ed),nd="3.2.45",rd="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,fo=Ct&&Ct.createElement("template"),sd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ct.createElementNS(rd,t):Ct.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fo.innerHTML=r?`<svg>${t}</svg>`:t;const a=fo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function id(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function od(t,e,n){const r=t.style,s=ce(n);if(n&&!s){for(const i in n)Hs(r,i,n[i]);if(e&&!ce(e))for(const i in e)n[i]==null&&Hs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ho=/\s*!important$/;function Hs(t,e,n){if(F(n))n.forEach(r=>Hs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ad(t,e);ho.test(n)?t.setProperty(Ft(r),n.replace(ho,""),"important"):t[r]=n}}const po=["Webkit","Moz","ms"],ss={};function ad(t,e){const n=ss[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return ss[e]=r;r=Mr(r);for(let s=0;s<po.length;s++){const i=po[s]+r;if(i in t)return ss[e]=i}return e}const mo="http://www.w3.org/1999/xlink";function cd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mo,e.slice(6,e.length)):t.setAttributeNS(mo,e,n);else{const i=iu(e);n==null||i&&!Da(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ld(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Da(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Dc(t,e,n,r){t.addEventListener(e,n,r)}function ud(t,e,n,r){t.removeEventListener(e,n,r)}function fd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=dd(e);if(r){const l=i[e]=md(r,s);Dc(t,a,l,c)}else o&&(ud(t,a,o,c),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function dd(t){let e;if(go.test(t)){e={};let r;for(;r=t.match(go);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ft(t.slice(2)),e]}let is=0;const hd=Promise.resolve(),pd=()=>is||(hd.then(()=>is=0),is=Date.now());function md(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(gd(r,n.value),e,5,[r])};return n.value=t,n.attached=pd(),n}function gd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _o=/^on[a-z]/,_d=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?id(t,r,s):e==="style"?od(t,n,r):Nr(e)?ri(e)||fd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vd(t,e,r,s))?ld(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cd(t,e,r,s))};function vd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_o.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_o.test(e)&&ce(n)?!1:e in t}const vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>or(e,n):e},Fv={deep:!0,created(t,e,n){t._assign=vo(n),Dc(t,"change",()=>{const r=t._modelValue,s=yd(t),i=t.checked,o=t._assign;if(F(r)){const a=xa(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Dr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(xc(t,i))})},mounted:yo,beforeUpdate(t,e,n){t._assign=vo(n),yo(t,e,n)}};function yo(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=xa(e,r.props.value)>-1:Dr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=kr(e,xc(t,!0)))}function yd(t){return"_value"in t?t._value:t.value}function xc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$v=(t,e)=>n=>{if(!("key"in n))return;const r=Ft(n.key);if(e.some(s=>s===r||bd[s]===r))return t(n)},Ed=ye({patchProp:_d},sd);let bo;function wd(){return bo||(bo=Lf(Ed))}const Id=(...t)=>{const e=wd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Rd(t){return ce(t)?document.querySelector(t):t}var Td=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sd=Symbol();var Eo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Eo||(Eo={}));function Ad(){const t=pu(!0),e=t.run(()=>tc({}));let n=[],r=[];const s=di({install(i){s._a=i,i.provide(Sd,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Td?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Od=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Cd={};function Pd(t,e){const n=bf("RouterView");return Tc(),Ac(n)}const kd=Od(Cd,[["render",Pd]]),Nd="modulepreload",Dd=function(t){return"/login-firebase-vue/"+t},wo={},rr=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dd(i),i in wo)return;wo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Nd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function xd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function os(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const Sn=()=>{},je=Array.isArray,Md=/\/$/,Ld=t=>t.replace(Md,"");function as(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$d(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ud(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sn(e.matched[r],n.matched[s])&&Mc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fd(t[n],e[n]))return!1;return!0}function Fd(t,e){return je(t)?Ro(t,e):je(e)?Ro(e,t):t===e}function Ro(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ln;(function(t){t.pop="pop",t.push="push"})(Ln||(Ln={}));var An;(function(t){t.back="back",t.forward="forward",t.unknown=""})(An||(An={}));function jd(t){if(!t)if(zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ld(t)}const Hd=/^[^#]+#/;function Vd(t,e){return t.replace(Hd,"#")+e}function Wd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function qd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function To(t,e){return(history.state?history.state.position-e:-1)+t}const Vs=new Map;function zd(t,e){Vs.set(t,e)}function Kd(t){const e=Vs.get(t);return Vs.delete(t),e}let Gd=()=>location.protocol+"//"+location.host;function Lc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Io(c,"")}return Io(n,t)+r+s}function Jd(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Lc(t,location),T=n.value,C=e.value;let B=0;if(d){if(n.value=g,e.value=d,o&&o===T){o=null;return}B=C?d.position-C.position:0}else r(g);s.forEach(O=>{O(n.value,T,{delta:B,type:Ln.pop,direction:B?B>0?An.forward:An.back:An.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const T=s.indexOf(d);T>-1&&s.splice(T,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(G({},d.state,{scroll:Wr()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function So(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wr():null}}function Yd(t){const{history:e,location:n}=window,r={value:Lc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Gd()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=G({},e.state,So(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=G({},s.value,e.state,{forward:c,scroll:Wr()});i(u.current,u,!0);const h=G({},So(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Xd(t){t=jd(t);const e=Yd(t),n=Jd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:Vd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qd(t){return typeof t=="string"||t&&typeof t=="object"}function Uc(t){return typeof t=="string"||typeof t=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bc=Symbol("");var Ao;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ao||(Ao={}));function on(t,e){return G(new Error,{type:t,[Bc]:!0},e)}function Qe(t,e){return t instanceof Error&&Bc in t&&(e==null||!!(t.type&e))}const Oo="[^/]+?",Zd={sensitive:!1,strict:!1,start:!0,end:!0},eh=/[.+*?^${}()[\]/\\]/g;function th(t,e){const n=G({},Zd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(eh,"\\$&"),g+=40;else if(d.type===1){const{value:T,repeatable:C,optional:B,regexp:O}=d;i.push({name:T,repeatable:C,optional:B});const U=O||Oo;if(U!==Oo){g+=10;try{new RegExp(`(${U})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${T}" (${U}): `+W.message)}}let P=C?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=B&&l.length<2?`(?:/${P})`:"/"+P),B&&(P+="?"),s+=P,g+=20,B&&(g+=-8),C&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",T=i[d-1];h[T.name]=g&&T.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:T,repeatable:C,optional:B}=g,O=T in l?l[T]:"";if(je(O)&&!C)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const U=je(O)?O.join("/"):O;if(!U)if(B)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);u+=U}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function nh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Co(r))return 1;if(Co(s))return-1}return s.length-r.length}function Co(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sh={type:0,value:""},ih=/[a-zA-Z0-9_]/;function oh(t){if(!t)return[[]];if(t==="/")return[[sh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:ih.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ah(t,e,n){const r=th(oh(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ch(t,e){const n=[],r=new Map;e=No({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,T=lh(u);T.aliasOf=d&&d.record;const C=No(e,u),B=[T];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of P)B.push(G({},T,{components:d?d.record.components:T.components,path:W,aliasOf:d?d.record:T}))}let O,U;for(const P of B){const{path:W}=P;if(h&&W[0]!=="/"){const k=h.record.path,oe=k[k.length-1]==="/"?"":"/";P.path=h.record.path+(W&&oe+W)}if(O=ah(P,h,C),d?d.alias.push(O):(U=U||O,U!==O&&U.alias.push(O),g&&u.name&&!ko(O)&&o(u.name)),T.children){const k=T.children;for(let oe=0;oe<k.length;oe++)i(k[oe],O,d&&d.children[oe])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return U?()=>{o(U)}:Sn}function o(u){if(Uc(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&rh(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Fc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ko(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},T,C;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw on(1,{location:u});C=d.record.name,g=G(Po(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Po(u.params,d.keys.map(U=>U.name))),T=d.stringify(g)}else if("path"in u)T=u.path,d=n.find(U=>U.re.test(T)),d&&(g=d.parse(T),C=d.record.name);else{if(d=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw on(1,{location:u,currentLocation:h});C=d.record.name,g=G({},h.params,u.params),T=d.stringify(g)}const B=[];let O=d;for(;O;)B.unshift(O.record),O=O.parent;return{name:C,path:T,params:g,matched:B,meta:fh(B)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Po(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ko(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fh(t){return t.reduce((e,n)=>G(e,n.meta),{})}function No(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Fc(t,e){return e.children.some(n=>n===t||Fc(t,n))}const $c=/#/g,dh=/&/g,hh=/\//g,ph=/=/g,mh=/\?/g,jc=/\+/g,gh=/%5B/g,_h=/%5D/g,Hc=/%5E/g,vh=/%60/g,Vc=/%7B/g,yh=/%7C/g,Wc=/%7D/g,bh=/%20/g;function bi(t){return encodeURI(""+t).replace(yh,"|").replace(gh,"[").replace(_h,"]")}function Eh(t){return bi(t).replace(Vc,"{").replace(Wc,"}").replace(Hc,"^")}function Ws(t){return bi(t).replace(jc,"%2B").replace(bh,"+").replace($c,"%23").replace(dh,"%26").replace(vh,"`").replace(Vc,"{").replace(Wc,"}").replace(Hc,"^")}function wh(t){return Ws(t).replace(ph,"%3D")}function Ih(t){return bi(t).replace($c,"%23").replace(mh,"%3F")}function Rh(t){return t==null?"":Ih(t).replace(hh,"%2F")}function wr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Th(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jc," "),o=i.indexOf("="),a=wr(o<0?i:i.slice(0,o)),c=o<0?null:wr(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Do(t){let e="";for(let n in t){const r=t[n];if(n=wh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&Ws(i)):[r&&Ws(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ah=Symbol(""),xo=Symbol(""),qr=Symbol(""),qc=Symbol(""),qs=Symbol("");function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ut(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(on(4,{from:n,to:e})):h instanceof Error?a(h):Qd(h)?a(on(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function cs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Oh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ut(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=xd(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ut(d,n,r,i,o)()}))}}return s}function Oh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mo(t){const e=Ke(qr),n=Ke(qc),r=Pe(()=>e.resolve(Yt(t.to))),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(sn.bind(null,u));if(d>-1)return d;const g=Lo(c[l-2]);return l>1&&Lo(u)===g&&h[h.length-1].path!==g?h.findIndex(sn.bind(null,c[l-2])):d}),i=Pe(()=>s.value>-1&&Nh(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Mc(n.params,r.value.params));function a(c={}){return kh(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Sn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ch=dc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mo,setup(t,{slots:e}){const n=Vn(Mo(t)),{options:r}=Ke(qr),s=Pe(()=>({[Uo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Nc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ph=Ch;function kh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uo=(t,e,n)=>t!=null?t:e!=null?e:n,Dh=dc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(qs),s=Pe(()=>t.route||r.value),i=Ke(xo,0),o=Pe(()=>{let l=Yt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Pe(()=>s.value.matched[o.value]);ar(xo,Pe(()=>o.value+1)),ar(Ah,a),ar(qs,s);const c=tc();return cr(()=>[c.value,a.value,t.name],([l,u,h],[d,g,T])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!sn(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bo(n.default,{Component:d,route:l});const g=h.props[u],T=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=Nc(d,G({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Bo(n.default,{Component:B,route:l})||B}}});function Bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xh=Dh;function Mh(t){const e=ch(t.routes,t),n=t.parseQuery||Th,r=t.stringifyQuery||Do,s=t.history,i=bn(),o=bn(),a=bn(),c=Hu(at);let l=at;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=os.bind(null,v=>""+v),h=os.bind(null,Rh),d=os.bind(null,wr);function g(v,A){let R,D;return Uc(v)?(R=e.getRecordMatcher(v),D=A):D=v,e.addRoute(D,R)}function T(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function C(){return e.getRoutes().map(v=>v.record)}function B(v){return!!e.getRecordMatcher(v)}function O(v,A){if(A=G({},A||c.value),typeof v=="string"){const f=as(n,v,A.path),p=e.resolve({path:f.path},A),m=s.createHref(f.fullPath);return G(f,p,{params:d(p.params),hash:wr(f.hash),redirectedFrom:void 0,href:m})}let R;if("path"in v)R=G({},v,{path:as(n,v.path,A.path).path});else{const f=G({},v.params);for(const p in f)f[p]==null&&delete f[p];R=G({},v,{params:h(v.params)}),A.params=h(A.params)}const D=e.resolve(R,A),q=v.hash||"";D.params=u(d(D.params));const re=Ud(r,G({},v,{hash:Eh(q),path:D.path})),H=s.createHref(re);return G({fullPath:re,hash:q,query:r===Do?Sh(v.query):v.query||{}},D,{redirectedFrom:void 0,href:H})}function U(v){return typeof v=="string"?as(n,v,c.value.path):G({},v)}function P(v,A){if(l!==v)return on(8,{from:A,to:v})}function W(v){return pe(v)}function k(v){return W(G(U(v),{replace:!0}))}function oe(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let D=typeof R=="function"?R(v):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=U(D):{path:D},D.params={}),G({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function pe(v,A){const R=l=O(v),D=c.value,q=v.state,re=v.force,H=v.replace===!0,f=oe(R);if(f)return pe(G(U(f),{state:typeof f=="object"?G({},q,f.state):q,force:re,replace:H}),A||R);const p=R;p.redirectedFrom=A;let m;return!re&&Bd(r,D,R)&&(m=on(16,{to:p,from:D}),It(D,D,!0,!1)),(m?Promise.resolve(m):Ie(p,D)).catch(_=>Qe(_)?Qe(_,2)?_:De(_):X(_,p,D)).then(_=>{if(_){if(Qe(_,2))return pe(G({replace:H},U(_.to),{state:typeof _.to=="object"?G({},q,_.to.state):q,force:re}),A||p)}else _=Ce(p,D,!0,H,q);return ge(p,D,_),_})}function me(v,A){const R=P(v,A);return R?Promise.reject(R):Promise.resolve()}function Ie(v,A){let R;const[D,q,re]=Lh(v,A);R=cs(D.reverse(),"beforeRouteLeave",v,A);for(const f of D)f.leaveGuards.forEach(p=>{R.push(ut(p,v,A))});const H=me.bind(null,v,A);return R.push(H),Vt(R).then(()=>{R=[];for(const f of i.list())R.push(ut(f,v,A));return R.push(H),Vt(R)}).then(()=>{R=cs(q,"beforeRouteUpdate",v,A);for(const f of q)f.updateGuards.forEach(p=>{R.push(ut(p,v,A))});return R.push(H),Vt(R)}).then(()=>{R=[];for(const f of v.matched)if(f.beforeEnter&&!A.matched.includes(f))if(je(f.beforeEnter))for(const p of f.beforeEnter)R.push(ut(p,v,A));else R.push(ut(f.beforeEnter,v,A));return R.push(H),Vt(R)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),R=cs(re,"beforeRouteEnter",v,A),R.push(H),Vt(R))).then(()=>{R=[];for(const f of o.list())R.push(ut(f,v,A));return R.push(H),Vt(R)}).catch(f=>Qe(f,8)?f:Promise.reject(f))}function ge(v,A,R){for(const D of a.list())D(v,A,R)}function Ce(v,A,R,D,q){const re=P(v,A);if(re)return re;const H=A===at,f=zt?history.state:{};R&&(D||H?s.replace(v.fullPath,G({scroll:H&&f&&f.scroll},q)):s.push(v.fullPath,q)),c.value=v,It(v,A,R,H),De()}let se;function Re(){se||(se=s.listen((v,A,R)=>{if(!Yn.listening)return;const D=O(v),q=oe(D);if(q){pe(G(q,{replace:!0}),D).catch(Sn);return}l=D;const re=c.value;zt&&zd(To(re.fullPath,R.delta),Wr()),Ie(D,re).catch(H=>Qe(H,12)?H:Qe(H,2)?(pe(H.to,D).then(f=>{Qe(f,20)&&!R.delta&&R.type===Ln.pop&&s.go(-1,!1)}).catch(Sn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),X(H,D,re))).then(H=>{H=H||Ce(D,re,!1),H&&(R.delta&&!Qe(H,8)?s.go(-R.delta,!1):R.type===Ln.pop&&Qe(H,20)&&s.go(-1,!1)),ge(D,re,H)}).catch(Sn)}))}let _e=bn(),wt=bn(),ne;function X(v,A,R){De(v);const D=wt.list();return D.length?D.forEach(q=>q(v,A,R)):console.error(v),Promise.reject(v)}function J(){return ne&&c.value!==at?Promise.resolve():new Promise((v,A)=>{_e.add([v,A])})}function De(v){return ne||(ne=!v,Re(),_e.list().forEach(([A,R])=>v?R(v):A()),_e.reset()),v}function It(v,A,R,D){const{scrollBehavior:q}=t;if(!zt||!q)return Promise.resolve();const re=!R&&Kd(To(v.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return oc().then(()=>q(v,A,re)).then(H=>H&&qd(H)).catch(H=>X(H,v,A))}const xe=v=>s.go(v);let be;const jt=new Set,Yn={currentRoute:c,listening:!0,addRoute:g,removeRoute:T,hasRoute:B,getRoutes:C,resolve:O,options:t,push:W,replace:k,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:wt.add,isReady:J,install(v){const A=this;v.component("RouterLink",Ph),v.component("RouterView",xh),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),zt&&!be&&c.value===at&&(be=!0,W(s.location).catch(q=>{}));const R={};for(const q in at)R[q]=Pe(()=>c.value[q]);v.provide(qr,A),v.provide(qc,Vn(R)),v.provide(qs,c);const D=v.unmount;jt.add(v),v.unmount=function(){jt.delete(v),jt.size<1&&(l=at,se&&se(),se=null,c.value=at,be=!1,ne=!1),D()}}};return Yn}function Vt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Lh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>sn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>sn(l,c))||s.push(c))}return[n,r,s]}function jv(){return Ke(qr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Uh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bh=function(t){const e=zc(t);return Kc.encodeByteArray(e,!0)},Gc=function(t){return Bh(t).replace(/\./g,"")},Jc=function(t){try{return Kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function $h(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hh(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vh(){return typeof indexedDB=="object"}function Wh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function qh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=()=>qh().__FIREBASE_DEFAULTS__,Kh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jc(t[1]);return e&&JSON.parse(e)},Ei=()=>{try{return zh()||Kh()||Gh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jh=t=>{var e,n;return(n=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yh=()=>{var t;return(t=Ei())===null||t===void 0?void 0:t.config},Yc=t=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="FirebaseError";class Et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qh,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Et(s,a,r)}}function Zh(t,e){return t.replace(ep,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ep=/\{\$([^}]+)}/g;function tp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fo(i)&&Fo(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function In(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function np(t,e){const n=new rp(t,e);return n.subscribe.bind(n)}class rp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ls),s.error===void 0&&(s.error=ls),s.complete===void 0&&(s.complete=ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ap(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:op(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function op(t){return t===At?void 0:t}function ap(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ip(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const lp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},up=Z.INFO,fp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},dp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=up,this._logHandler=dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const hp=(t,e)=>e.some(n=>t instanceof n);let $o,jo;function pp(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mp(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qc=new WeakMap,zs=new WeakMap,Zc=new WeakMap,us=new WeakMap,wi=new WeakMap;function gp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qc.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function _p(t){if(zs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zs.set(t,e)}let Ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vp(t){Ks=t(Ks)}function yp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return Zc.set(r,e.sort?e.sort():[e]),vt(r)}:mp().includes(t)?function(...e){return t.apply(fs(this),e),vt(Qc.get(this))}:function(...e){return vt(t.apply(fs(this),e))}}function bp(t){return typeof t=="function"?yp(t):(t instanceof IDBTransaction&&_p(t),hp(t,pp())?new Proxy(t,Ks):t)}function vt(t){if(t instanceof IDBRequest)return gp(t);if(us.has(t))return us.get(t);const e=bp(t);return e!==t&&(us.set(t,e),wi.set(e,t)),e}const fs=t=>wi.get(t);function Ep(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=vt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const wp=["get","getKey","getAll","getAllKeys","count"],Ip=["put","add","delete","clear"],ds=new Map;function Ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ip.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ds.set(e,i),i}vp(t=>({...t,get:(e,n,r)=>Ho(e,n)||t.get(e,n,r),has:(e,n)=>!!Ho(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gs="@firebase/app",Vo="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Xc("@firebase/app"),Sp="@firebase/app-compat",Ap="@firebase/analytics-compat",Op="@firebase/analytics",Cp="@firebase/app-check-compat",Pp="@firebase/app-check",kp="@firebase/auth",Np="@firebase/auth-compat",Dp="@firebase/database",xp="@firebase/database-compat",Mp="@firebase/functions",Lp="@firebase/functions-compat",Up="@firebase/installations",Bp="@firebase/installations-compat",Fp="@firebase/messaging",$p="@firebase/messaging-compat",jp="@firebase/performance",Hp="@firebase/performance-compat",Vp="@firebase/remote-config",Wp="@firebase/remote-config-compat",qp="@firebase/storage",zp="@firebase/storage-compat",Kp="@firebase/firestore",Gp="@firebase/firestore-compat",Jp="firebase",Yp="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]",Xp={[Gs]:"fire-core",[Sp]:"fire-core-compat",[Op]:"fire-analytics",[Ap]:"fire-analytics-compat",[Pp]:"fire-app-check",[Cp]:"fire-app-check-compat",[kp]:"fire-auth",[Np]:"fire-auth-compat",[Dp]:"fire-rtdb",[xp]:"fire-rtdb-compat",[Mp]:"fire-fn",[Lp]:"fire-fn-compat",[Up]:"fire-iid",[Bp]:"fire-iid-compat",[Fp]:"fire-fcm",[$p]:"fire-fcm-compat",[jp]:"fire-perf",[Hp]:"fire-perf-compat",[Vp]:"fire-rc",[Wp]:"fire-rc-compat",[qp]:"fire-gcs",[zp]:"fire-gcs-compat",[Kp]:"fire-fst",[Gp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Ys=new Map;function Qp(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Ys.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,t);for(const n of Rr.values())Qp(n,t);return!0}function el(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Wn("app","Firebase",Zp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=Yp;function tl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(n||(n=Yh()),!n)throw yt.create("no-options");const i=Rr.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw yt.create("duplicate-app",{appName:s})}const o=new cp(s);for(const c of Ys.values())o.addComponent(c);const a=new em(n,r,o);return Rr.set(s,a),a}function tm(t=Js){const e=Rr.get(t);if(!e&&t===Js)return tl();if(!e)throw yt.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=Xp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}Un(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="firebase-heartbeat-database",rm=1,Bn="firebase-heartbeat-store";let hs=null;function nl(){return hs||(hs=Ep(nm,rm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),hs}async function sm(t){var e;try{return(await nl()).transaction(Bn).objectStore(Bn).get(rl(t))}catch(n){if(n instanceof Et)Lt.warn(n.message);else{const r=yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Lt.warn(r.message)}}}async function Wo(t,e){var n;try{const s=(await nl()).transaction(Bn,"readwrite");return await s.objectStore(Bn).put(e,rl(t)),s.done}catch(r){if(r instanceof Et)Lt.warn(r.message);else{const s=yt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Lt.warn(s.message)}}}function rl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=1024,om=30*24*60*60*1e3;class am{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=om}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qo(),{heartbeatsToSend:n,unsentEntries:r}=cm(this._heartbeatsCache.heartbeats),s=Gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qo(){return new Date().toISOString().substring(0,10)}function cm(t,e=im){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?Wh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zo(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){Un(new an("platform-logger",e=>new Rp(e),"PRIVATE")),Un(new an("heartbeat",e=>new am(e),"PRIVATE")),Qt(Gs,Vo,t),Qt(Gs,Vo,"esm2017"),Qt("fire-js","")}um("");function Ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fm=sl,il=new Wn("auth","Firebase",sl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Xc("@firebase/auth");function fr(t,...e){Ko.logLevel<=Z.ERROR&&Ko.error(`Auth (${zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,...e){throw Ri(t,...e)}function Ge(t,...e){return Ri(t,...e)}function ol(t,e,n){const r=Object.assign(Object.assign({},fm()),{[e]:n});return new Wn("auth","Firebase",r).create(e,{appName:t.name})}function dm(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ne(t,"argument-error"),ol(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ri(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return il.create(t,...e)}function L(t,e,...n){if(!t)throw Ri(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fr(e),new Error(e)}function st(t,e){t||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map;function nt(t){st(t instanceof Function,"Expected a class definition");let e=Go.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Go.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e){const n=el(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e!=null?e:{}))return s;Ne(s,"already-initialized")}return n.initialize({options:e})}function pm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mm(){return Jo()==="http:"||Jo()==="https:"}function Jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mm()||$h()||"connection"in navigator)?navigator.onLine:!0}function _m(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Fh()||jh()}get(){return gm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new zn(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pn(t,e,n,r,s={}){return cl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),al.fetch()(ll(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function cl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vm),e);try{const s=new bm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ol(t,u,l);Ne(t,u)}}catch(s){if(s instanceof Et)throw s;Ne(t,"network-request-failed")}}async function Kn(t,e,n,r,s={}){const i=await pn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ne(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ll(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ti(t.config,s):`${t.config.apiScheme}://${s}`}class bm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),ym.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t,e){return pn(t,"POST","/v1/accounts:delete",e)}async function wm(t,e){return pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Im(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Si(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(ps(s.auth_time)),issuedAtTime:On(ps(s.iat)),expirationTime:On(ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ps(t){return Number(t)*1e3}function Si(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jc(r);return i?JSON.parse(i):(fr("Failed to decode base64 JWT payload"),null)}catch(i){return fr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Rm(t){const e=Si(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&Tm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fn(t,wm(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cm(i.providerUserInfo):[],a=Om(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ul(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Am(t){const e=Xe(t);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Om(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cm(t){return t.map(e=>{var{providerId:n}=e,r=Ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e){const n=await cl(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ll(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",al.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Pm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $n;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Im(this,e)}reload(){return Am(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fn(this,Em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:W,isAnonymous:k,providerData:oe,stsTokenManager:pe}=n;L(P&&pe,e,"internal-error");const me=$n.fromJSON(this.name,pe);L(typeof P=="string",e,"internal-error"),ct(h,e.name),ct(d,e.name),L(typeof W=="boolean",e,"internal-error"),L(typeof k=="boolean",e,"internal-error"),ct(g,e.name),ct(T,e.name),ct(C,e.name),ct(B,e.name),ct(O,e.name),ct(U,e.name);const Ie=new xt({uid:P,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:k,photoURL:T,phoneNumber:g,tenantId:C,stsTokenManager:me,createdAt:O,lastLoginAt:U});return oe&&Array.isArray(oe)&&(Ie.providerData=oe.map(ge=>Object.assign({},ge))),B&&(Ie._redirectEventId=B),Ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new $n;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fl.type="NONE";const Yo=fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class Zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,i),this.fullPersistenceKey=dr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zt(nt(Yo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(Yo);const o=dr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gl(e))return"Blackberry";if(_l(e))return"Webos";if(Ai(e))return"Safari";if((e.includes("chrome/")||hl(e))&&!e.includes("edge/"))return"Chrome";if(ml(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dl(t=he()){return/firefox\//i.test(t)}function Ai(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hl(t=he()){return/crios\//i.test(t)}function pl(t=he()){return/iemobile/i.test(t)}function ml(t=he()){return/android/i.test(t)}function gl(t=he()){return/blackberry/i.test(t)}function _l(t=he()){return/webos/i.test(t)}function Kr(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function km(t=he()){var e;return Kr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nm(){return Hh()&&document.documentMode===10}function vl(t=he()){return Kr(t)||ml(t)||_l(t)||gl(t)||/windows phone/i.test(t)||pl(t)}function Dm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e=[]){let n;switch(t){case"Browser":n=Xo(he());break;case"Worker":n=`${Xo(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qo(this),this.idTokenSubscription=new Qo(this),this.beforeStateQueue=new xm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=il,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Tr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_m()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function mn(t){return Xe(t)}class Qo{constructor(e){this.auth=e,this.observer=null,this.addObserver=np(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lm(t,e,n){const r=mn(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=bl(e),{host:o,port:a}=Um(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Bm()}function bl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Um(t){const e=bl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zo(o)}}}function Zo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function Fm(t,e){return pn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}async function jm(t,e){return pn(t,"POST","/v1/accounts:sendOobCode",hn(t,e))}async function Hm(t,e){return jm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function Wm(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Oi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new jn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $m(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vm(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Fm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="http://localhost";class Ut extends Oi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return en(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,en(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,en(e,n)}buildRequest(){const e={requestUri:qm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Km(t){const e=wn(In(t)).link,n=e?wn(In(e)).deep_link_id:null,r=wn(In(t)).deep_link_id;return(r?wn(In(r)).link:null)||r||n||e||t}class Ci{constructor(e){var n,r,s,i,o,a;const c=wn(In(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=zm((s=c.mode)!==null&&s!==void 0?s:null);L(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Km(e);try{return new Ci(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,n){return jn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ci.parseLink(n);return L(r,"argument-error"),jn._fromEmailAndCode(e,r.code,r.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Gn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Gn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(t,e){return Kn(t,"POST","/v1/accounts:signUp",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=ea(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ea(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Et{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sr(e,n,r,s)}}function El(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,i,e,r):i})}async function Jm(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Fn(t,El(s,i,e,t),n);L(o.idToken,s,"internal-error");const a=Si(o.idToken);L(a,s,"internal-error");const{sub:c}=a;return L(t.uid===c,s,"user-mismatch"),Bt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ne(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t,e,n=!1){const r="signIn",s=await El(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xm(t,e){return wl(mn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e,n){const r=Xe(t),s={requestType:"PASSWORD_RESET",email:e};n&&Qm(r,s,n),await Hm(r,s)}async function Vv(t,e,n){const r=mn(t),s=await Gm(r,{returnSecureToken:!0,email:e,password:n}),i=await Bt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Wv(t,e,n){return Xm(Xe(t),gn.credential(e,n))}function Zm(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function eg(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function tg(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function qv(t){return Xe(t).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){const t=he();return Ai(t)||Kr(t)}const rg=1e3,sg=10;class Rl extends Il{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ng()&&Dm(),this.fallbackToPolling=vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Nm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const ig=Rl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Il{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tl.type="SESSION";const Sl=Tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await og(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ki("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function cg(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function lg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fg(){return Al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firebaseLocalStorageDb",dg=1,Or="firebaseLocalStorage",Cl="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jr(t,e){return t.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function hg(){const t=indexedDB.deleteDatabase(Ol);return new Jn(t).toPromise()}function Qs(){const t=indexedDB.open(Ol,dg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Or,{keyPath:Cl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Or)?e(r):(r.close(),await hg(),e(await Qs()))})})}async function ta(t,e,n){const r=Jr(t,!0).put({[Cl]:e,value:n});return new Jn(r).toPromise()}async function pg(t,e){const n=Jr(t,!1).get(e),r=await new Jn(n).toPromise();return r===void 0?null:r.value}function na(t,e){const n=Jr(t,!0).delete(e);return new Jn(n).toPromise()}const mg=800,gg=3;class Pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(fg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lg(),!this.activeServiceWorker)return;this.sender=new ag(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await ta(e,Ar,"1"),await na(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ta(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>na(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jr(s,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pl.type="LOCAL";const _g=Pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vg().appendChild(r)})}function bg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e){return e?nt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Oi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,n){return en(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Eg(t){return wl(t.auth,new Ni(t),t.bypassAuthState)}function wg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Ym(n,new Ni(t),t.bypassAuthState)}async function Ig(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Jm(n,new Ni(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return Ig;case"reauthViaPopup":case"reauthViaRedirect":return wg;default:Ne(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new zn(2e3,1e4);async function zv(t,e,n){const r=mn(t);dm(t,e,Pi);const s=kl(r,n);return new kt(r,"signInViaPopup",e,s).executeNotNull()}class kt extends Nl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Rg.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="pendingRedirect",hr=new Map;class Sg extends Nl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await Ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ag(t,e){const n=Pg(e),r=Cg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Og(t,e){hr.set(t._key(),e)}function Cg(t){return nt(t._redirectPersistence)}function Pg(t){return dr(Tg,t.config.apiKey,t.name)}async function kg(t,e,n=!1){const r=mn(t),s=kl(r,e),o=await new Sg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=10*60*1e3;class Dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(ra(e))}saveEventToCache(e){this.cachedEventUids.add(ra(e)),this.lastProcessedEventTime=Date.now()}}function ra(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e={}){return pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ug=/^https?/;async function Bg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mg(t);for(const n of e)try{if(Fg(n))return}catch{}Ne(t,"unauthorized-domain")}function Fg(t){const e=Xs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ug.test(n))return!1;if(Lg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new zn(3e4,6e4);function sa(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jg(t){return new Promise((e,n)=>{var r,s,i;function o(){sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sa(),n(Ge(t,"network-request-failed"))},timeout:$g.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const a=bg("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},yg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pr=null,e})}let pr=null;function Hg(t){return pr=pr||jg(t),pr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new zn(5e3,15e3),Wg="__/auth/iframe",qg="emulator/auth/iframe",zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gg(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ti(e,qg):`https://${t.config.authDomain}/${Wg}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=Kg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function Jg(t){const e=await Hg(t),n=Je().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Vg.get());function c(){Je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xg=500,Qg=600,Zg="_blank",e_="http://localhost";class ia{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t_(t,e,n,r=Xg,s=Qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=he().toLowerCase();n&&(a=hl(l)?Zg:n),dl(l)&&(e=e||e_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,T])=>`${d}${g}=${T},`,"");if(km(l)&&a!=="_self")return n_(e||"",a),new ia(null);const h=window.open(e||"",a,u);L(h,t,"popup-blocked");try{h.focus()}catch{}return new ia(h)}function n_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="__/auth/handler",s_="emulator/auth/handler";function oa(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof Pi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Gn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${i_(t)}?${qn(a).slice(1)}`}function i_({config:t}){return t.emulator?Ti(t,s_):`https://${t.authDomain}/${r_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class o_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=kg,this._overrideRedirectResult=Og}async _openPopup(e,n,r,s){var i;st((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=oa(e,n,r,Xs(),s);return t_(e,o,ki())}async _openRedirect(e,n,r,s){return await this._originValidation(e),cg(oa(e,n,r,Xs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(st(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jg(e),r=new Dg(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ms,{type:ms},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ms];o!==void 0&&n(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vl()||Ai()||Kr()}}const a_=o_;var aa="@firebase/auth",ca="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function u_(t){Un(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yl(t)},u=new Mm(a,c,l);return pm(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new an("auth-internal",e=>{const n=mn(e.getProvider("auth").getImmediate());return(r=>new c_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(aa,ca,l_(t)),Qt(aa,ca,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=5*60,d_=Yc("authIdTokenMaxAge")||f_;let la=null;const h_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>d_)return;const s=n==null?void 0:n.token;la!==s&&(la=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function p_(t=tm()){const e=el(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hm(t,{popupRedirectResolver:a_,persistence:[_g,ig,Sl]}),r=Yc("authTokenSyncURL");if(r){const i=h_(r);eg(n,i,()=>i(n.currentUser)),Zm(n,o=>i(o))}const s=Jh("auth");return s&&Lm(n,`http://${s}`),n}u_("Browser");const xl=Mh({history:Xd("/login-firebase-vue/"),routes:[{path:"/login",component:()=>rr(()=>import("./LoginPage.eb56c1b8.js"),["assets/LoginPage.eb56c1b8.js","assets/Toast.278bde13.js","assets/Toast.71ce7caa.css","assets/Heading.ee972a1c.js","assets/GoogleButton.06d8d2c3.js"])},{path:"/register",component:()=>rr(()=>import("./RegisterPage.e3e7fd17.js"),["assets/RegisterPage.e3e7fd17.js","assets/Toast.278bde13.js","assets/Toast.71ce7caa.css","assets/Heading.ee972a1c.js","assets/GoogleButton.06d8d2c3.js"])},{path:"/forgot",component:()=>rr(()=>import("./ForgotPage.a6f5ecbb.js"),["assets/ForgotPage.a6f5ecbb.js","assets/Toast.278bde13.js","assets/Toast.71ce7caa.css","assets/Heading.ee972a1c.js"])},{path:"/",component:()=>rr(()=>import("./HomePage.e2f41db1.js"),["assets/HomePage.e2f41db1.js","assets/Heading.ee972a1c.js"]),meta:{requiresAuth:!0}}]}),m_=()=>new Promise((t,e)=>{const n=tg(p_(),r=>{n(),t(r)},e)});xl.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await m_()?n():n("/login"):n()});function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ml={exports:{}},Di={exports:{}},Ll=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},__=Ll,xi=Object.prototype.toString,Mi=function(t){return function(e){var n=xi.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function $t(t){return t=t.toLowerCase(),function(n){return Mi(n)===t}}function Li(t){return Array.isArray(t)}function Cr(t){return typeof t>"u"}function v_(t){return t!==null&&!Cr(t)&&t.constructor!==null&&!Cr(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Ul=$t("ArrayBuffer");function y_(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ul(t.buffer),e}function b_(t){return typeof t=="string"}function E_(t){return typeof t=="number"}function Bl(t){return t!==null&&typeof t=="object"}function mr(t){if(Mi(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var w_=$t("Date"),I_=$t("File"),R_=$t("Blob"),T_=$t("FileList");function Ui(t){return xi.call(t)==="[object Function]"}function S_(t){return Bl(t)&&Ui(t.pipe)}function A_(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||xi.call(t)===e||Ui(t.toString)&&t.toString()===e)}var O_=$t("URLSearchParams");function C_(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function P_(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Bi(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Li(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function Zs(){var t={};function e(s,i){mr(t[i])&&mr(s)?t[i]=Zs(t[i],s):mr(s)?t[i]=Zs({},s):Li(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)Bi(arguments[n],e);return t}function k_(t,e,n){return Bi(e,function(s,i){n&&typeof s=="function"?t[i]=__(s,n):t[i]=s}),t}function N_(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function D_(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function x_(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function M_(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function L_(t){if(!t)return null;var e=t.length;if(Cr(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var U_=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),ue={isArray:Li,isArrayBuffer:Ul,isBuffer:v_,isFormData:A_,isArrayBufferView:y_,isString:b_,isNumber:E_,isObject:Bl,isPlainObject:mr,isUndefined:Cr,isDate:w_,isFile:I_,isBlob:R_,isFunction:Ui,isStream:S_,isURLSearchParams:O_,isStandardBrowserEnv:P_,forEach:Bi,merge:Zs,extend:k_,trim:C_,stripBOM:N_,inherits:D_,toFlatObject:x_,kindOf:Mi,kindOfTest:$t,endsWith:M_,toArray:L_,isTypedArray:U_,isFileList:T_},Wt=ue;function ua(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Fl=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(Wt.isURLSearchParams(n))s=n.toString();else{var i=[];Wt.forEach(n,function(c,l){c===null||typeof c>"u"||(Wt.isArray(c)?l=l+"[]":c=[c],Wt.forEach(c,function(h){Wt.isDate(h)?h=h.toISOString():Wt.isObject(h)&&(h=JSON.stringify(h)),i.push(ua(l)+"="+ua(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},B_=ue;function Yr(){this.handlers=[]}Yr.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Yr.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Yr.prototype.forEach=function(e){B_.forEach(this.handlers,function(r){r!==null&&e(r)})};var F_=Yr,$_=ue,j_=function(e,n){$_.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},$l=ue;function cn(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}$l.inherits(cn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var jl=cn.prototype,Hl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Hl[t]={value:t}});Object.defineProperties(cn,Hl);Object.defineProperty(jl,"isAxiosError",{value:!0});cn.from=function(t,e,n,r,s,i){var o=Object.create(jl);return $l.toFlatObject(t,o,function(c){return c!==Error.prototype}),cn.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var _n=cn,Vl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Le=ue;function H_(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":Le.isDate(i)?i.toISOString():Le.isArrayBuffer(i)||Le.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(Le.isPlainObject(i)||Le.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Le.forEach(i,function(c,l){if(!Le.isUndefined(c)){var u=o?o+"."+l:l,h;if(c&&!o&&typeof c=="object"){if(Le.endsWith(l,"{}"))c=JSON.stringify(c);else if(Le.endsWith(l,"[]")&&(h=Le.toArray(c))){h.forEach(function(d){!Le.isUndefined(d)&&e.append(u,r(d))});return}}s(c,u)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var Wl=H_,gs,fa;function V_(){if(fa)return gs;fa=1;var t=_n;return gs=function(n,r,s){var i=s.config.validateStatus;!s.status||!i||i(s.status)?n(s):r(new t("Request failed with status code "+s.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},gs}var _s,da;function W_(){if(da)return _s;da=1;var t=ue;return _s=t.isStandardBrowserEnv()?function(){return{write:function(r,s,i,o,a,c){var l=[];l.push(r+"="+encodeURIComponent(s)),t.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),t.isString(o)&&l.push("path="+o),t.isString(a)&&l.push("domain="+a),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),_s}var q_=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},z_=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},K_=q_,G_=z_,ql=function(e,n){return e&&!K_(n)?G_(e,n):n},vs,ha;function J_(){if(ha)return vs;ha=1;var t=ue,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return vs=function(r){var s={},i,o,a;return r&&t.forEach(r.split(`
`),function(l){if(a=l.indexOf(":"),i=t.trim(l.substr(0,a)).toLowerCase(),o=t.trim(l.substr(a+1)),i){if(s[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?s[i]=(s[i]?s[i]:[]).concat([o]):s[i]=s[i]?s[i]+", "+o:o}}),s},vs}var ys,pa;function Y_(){if(pa)return ys;pa=1;var t=ue;return ys=t.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function i(o){var a=o;return n&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=i(window.location.href),function(a){var c=t.isString(a)?i(a):a;return c.protocol===s.protocol&&c.host===s.host}}():function(){return function(){return!0}}(),ys}var bs,ma;function Xr(){if(ma)return bs;ma=1;var t=_n,e=ue;function n(r){t.call(this,r==null?"canceled":r,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(n,t,{__CANCEL__:!0}),bs=n,bs}var Es,ga;function X_(){return ga||(ga=1,Es=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}),Es}var ws,_a;function va(){if(_a)return ws;_a=1;var t=ue,e=V_(),n=W_(),r=Fl,s=ql,i=J_(),o=Y_(),a=Vl,c=_n,l=Xr(),u=X_();return ws=function(d){return new Promise(function(T,C){var B=d.data,O=d.headers,U=d.responseType,P;function W(){d.cancelToken&&d.cancelToken.unsubscribe(P),d.signal&&d.signal.removeEventListener("abort",P)}t.isFormData(B)&&t.isStandardBrowserEnv()&&delete O["Content-Type"];var k=new XMLHttpRequest;if(d.auth){var oe=d.auth.username||"",pe=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";O.Authorization="Basic "+btoa(oe+":"+pe)}var me=s(d.baseURL,d.url);k.open(d.method.toUpperCase(),r(me,d.params,d.paramsSerializer),!0),k.timeout=d.timeout;function Ie(){if(!!k){var se="getAllResponseHeaders"in k?i(k.getAllResponseHeaders()):null,Re=!U||U==="text"||U==="json"?k.responseText:k.response,_e={data:Re,status:k.status,statusText:k.statusText,headers:se,config:d,request:k};e(function(ne){T(ne),W()},function(ne){C(ne),W()},_e),k=null}}if("onloadend"in k?k.onloadend=Ie:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(Ie)},k.onabort=function(){!k||(C(new c("Request aborted",c.ECONNABORTED,d,k)),k=null)},k.onerror=function(){C(new c("Network Error",c.ERR_NETWORK,d,k,k)),k=null},k.ontimeout=function(){var Re=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded",_e=d.transitional||a;d.timeoutErrorMessage&&(Re=d.timeoutErrorMessage),C(new c(Re,_e.clarifyTimeoutError?c.ETIMEDOUT:c.ECONNABORTED,d,k)),k=null},t.isStandardBrowserEnv()){var ge=(d.withCredentials||o(me))&&d.xsrfCookieName?n.read(d.xsrfCookieName):void 0;ge&&(O[d.xsrfHeaderName]=ge)}"setRequestHeader"in k&&t.forEach(O,function(Re,_e){typeof B>"u"&&_e.toLowerCase()==="content-type"?delete O[_e]:k.setRequestHeader(_e,Re)}),t.isUndefined(d.withCredentials)||(k.withCredentials=!!d.withCredentials),U&&U!=="json"&&(k.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&k.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&k.upload&&k.upload.addEventListener("progress",d.onUploadProgress),(d.cancelToken||d.signal)&&(P=function(se){!k||(C(!se||se&&se.type?new l:se),k.abort(),k=null)},d.cancelToken&&d.cancelToken.subscribe(P),d.signal&&(d.signal.aborted?P():d.signal.addEventListener("abort",P))),B||(B=null);var Ce=u(me);if(Ce&&["http","https","file"].indexOf(Ce)===-1){C(new c("Unsupported protocol "+Ce+":",c.ERR_BAD_REQUEST,d));return}k.send(B)})},ws}var Is,ya;function Q_(){return ya||(ya=1,Is=null),Is}var ae=ue,ba=j_,Ea=_n,Z_=Vl,ev=Wl,tv={"Content-Type":"application/x-www-form-urlencoded"};function wa(t,e){!ae.isUndefined(t)&&ae.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function nv(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=va()),t}function rv(t,e,n){if(ae.isString(t))try{return(e||JSON.parse)(t),ae.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Qr={transitional:Z_,adapter:nv(),transformRequest:[function(e,n){if(ba(n,"Accept"),ba(n,"Content-Type"),ae.isFormData(e)||ae.isArrayBuffer(e)||ae.isBuffer(e)||ae.isStream(e)||ae.isFile(e)||ae.isBlob(e))return e;if(ae.isArrayBufferView(e))return e.buffer;if(ae.isURLSearchParams(e))return wa(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=ae.isObject(e),s=n&&n["Content-Type"],i;if((i=ae.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return ev(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return wa(n,"application/json"),rv(e);return e}],transformResponse:[function(e){var n=this.transitional||Qr.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&ae.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?Ea.from(o,Ea.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q_()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ae.forEach(["delete","get","head"],function(e){Qr.headers[e]={}});ae.forEach(["post","put","patch"],function(e){Qr.headers[e]=ae.merge(tv)});var Fi=Qr,sv=ue,iv=Fi,ov=function(e,n,r){var s=this||iv;return sv.forEach(r,function(o){e=o.call(s,e,n)}),e},Rs,Ia;function zl(){return Ia||(Ia=1,Rs=function(e){return!!(e&&e.__CANCEL__)}),Rs}var Ra=ue,Ts=ov,av=zl(),cv=Fi,lv=Xr();function Ss(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new lv}var uv=function(e){Ss(e),e.headers=e.headers||{},e.data=Ts.call(e,e.data,e.headers,e.transformRequest),e.headers=Ra.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ra.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||cv.adapter;return n(e).then(function(s){return Ss(e),s.data=Ts.call(e,s.data,s.headers,e.transformResponse),s},function(s){return av(s)||(Ss(e),s&&s.response&&(s.response.data=Ts.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},Se=ue,Kl=function(e,n){n=n||{};var r={};function s(u,h){return Se.isPlainObject(u)&&Se.isPlainObject(h)?Se.merge(u,h):Se.isPlainObject(h)?Se.merge({},h):Se.isArray(h)?h.slice():h}function i(u){if(Se.isUndefined(n[u])){if(!Se.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!Se.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(Se.isUndefined(n[u])){if(!Se.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return Se.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var d=l[h]||i,g=d(h);Se.isUndefined(g)&&d!==c||(r[h]=g)}),r},As,Ta;function Gl(){return Ta||(Ta=1,As={version:"0.27.2"}),As}var fv=Gl().version,ft=_n,$i={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){$i[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Sa={};$i.transitional=function(e,n,r){function s(i,o){return"[Axios v"+fv+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new ft(s(o," has been removed"+(n?" in "+n:"")),ft.ERR_DEPRECATED);return n&&!Sa[o]&&(Sa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function dv(t,e,n){if(typeof t!="object")throw new ft("options must be an object",ft.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ft("option "+i+" must be "+c,ft.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ft("Unknown option "+i,ft.ERR_BAD_OPTION)}}var hv={assertOptions:dv,validators:$i},Jl=ue,pv=Fl,Aa=F_,Oa=uv,Zr=Kl,mv=ql,Yl=hv,qt=Yl.validators;function ln(t){this.defaults=t,this.interceptors={request:new Aa,response:new Aa}}ln.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zr(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Yl.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(i=i&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});var o=[];this.interceptors.response.forEach(function(g){o.push(g.fulfilled,g.rejected)});var a;if(!i){var c=[Oa,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;s.length;){var u=s.shift(),h=s.shift();try{l=u(l)}catch(d){h(d);break}}try{a=Oa(l)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};ln.prototype.getUri=function(e){e=Zr(this.defaults,e);var n=mv(e.baseURL,e.url);return pv(n,e.params,e.paramsSerializer)};Jl.forEach(["delete","get","head","options"],function(e){ln.prototype[e]=function(n,r){return this.request(Zr(r||{},{method:e,url:n,data:(r||{}).data}))}});Jl.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Zr(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ln.prototype[e]=n(),ln.prototype[e+"Form"]=n(!0)});var gv=ln,Os,Ca;function _v(){if(Ca)return Os;Ca=1;var t=Xr();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var s=this;this.promise.then(function(i){if(!!s._listeners){var o,a=s._listeners.length;for(o=0;o<a;o++)s._listeners[o](i);s._listeners=null}}),this.promise.then=function(i){var o,a=new Promise(function(c){s.subscribe(c),o=c}).then(i);return a.cancel=function(){s.unsubscribe(o)},a},n(function(o){s.reason||(s.reason=new t(o),r(s.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},e.prototype.unsubscribe=function(r){if(!!this._listeners){var s=this._listeners.indexOf(r);s!==-1&&this._listeners.splice(s,1)}},e.source=function(){var r,s=new e(function(o){r=o});return{token:s,cancel:r}},Os=e,Os}var Cs,Pa;function vv(){return Pa||(Pa=1,Cs=function(e){return function(r){return e.apply(null,r)}}),Cs}var Ps,ka;function yv(){if(ka)return Ps;ka=1;var t=ue;return Ps=function(n){return t.isObject(n)&&n.isAxiosError===!0},Ps}var Na=ue,bv=Ll,gr=gv,Ev=Kl,wv=Fi;function Xl(t){var e=new gr(t),n=bv(gr.prototype.request,e);return Na.extend(n,gr.prototype,e),Na.extend(n,e),n.create=function(s){return Xl(Ev(t,s))},n}var we=Xl(wv);we.Axios=gr;we.CanceledError=Xr();we.CancelToken=_v();we.isCancel=zl();we.VERSION=Gl().version;we.toFormData=Wl;we.AxiosError=_n;we.Cancel=we.CanceledError;we.all=function(e){return Promise.all(e)};we.spread=vv();we.isAxiosError=yv();Di.exports=we;Di.exports.default=we;(function(t){t.exports=Di.exports})(Ml);const Ql=g_(Ml.exports);function Pr(t){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pr(t)}function _r(t,e){if(!t.vueAxiosInstalled){var n=Zl(e)?Tv(e):e;if(Sv(n)){var r=Av(t);if(r){var s=r<3?Iv:Rv;Object.keys(n).forEach(function(i){s(t,i,n[i])}),t.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function Iv(t,e,n){Object.defineProperty(t.prototype,e,{get:function(){return n}}),t[e]=n}function Rv(t,e,n){t.config.globalProperties[e]=n,t[e]=n}function Zl(t){return t&&typeof t.get=="function"&&typeof t.post=="function"}function Tv(t){return{axios:t,$http:t}}function Sv(t){return Pr(t)==="object"&&Object.keys(t).every(function(e){return Zl(t[e])})}function Av(t){return t&&t.version&&Number(t.version.split(".")[0])}(typeof exports>"u"?"undefined":Pr(exports))=="object"?module.exports=_r:typeof define=="function"&&define.amd?define([],function(){return _r}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(_r,window.axios);var Ov="firebase",Cv="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(Ov,Cv,"app");Ql.defaults.baseURL="";const Pv={apiKey:"AIzaSyBPNHZLdKnnbYqwUUEpAOc1tFJZ34tPgQI",authDomain:"login-firebase-vue-d699d.firebaseapp.com",projectId:"login-firebase-vue-d699d",storageBucket:"login-firebase-vue-d699d.appspot.com",messagingSenderId:"130902503428",appId:"1:130902503428:web:7730b5cb4ba2254b9f8551"};tl(Pv);const kv=Ad(),un=Id(kd);un.use(kv);un.use(xl);un.use(_r,Ql);un.provide("axios",un.config.globalProperties.axios);un.mount("#app");export{Ke as A,ar as B,dc as C,df as D,mc as E,et as F,Mv as G,Vf as H,ht as I,zv as J,Vv as K,Hv as L,tg as M,qv as N,Od as _,Uv as a,jv as b,Pe as c,tc as d,cr as e,bf as f,Cc as g,Ae as h,de as i,Zu as j,p_ as k,xv as l,Ac as m,ni as n,Tc as o,Dv as p,Bv as q,Vn as r,Wv as s,Nv as t,Yt as u,Fv as v,Lv as w,$v as x,nn as y,Nc as z};
