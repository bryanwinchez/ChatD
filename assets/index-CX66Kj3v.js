(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var tg={exports:{}},Fu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function sx(){if(TT)return Fu;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Fu.Fragment=e,Fu.jsx=t,Fu.jsxs=t,Fu}var bT;function rx(){return bT||(bT=1,tg.exports=sx()),tg.exports}var T=rx(),ng={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function ax(){if(wT)return Ve;wT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,H={};function B(N,W,oe){this.props=N,this.context=W,this.refs=H,this.updater=oe||D}B.prototype.isReactComponent={},B.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},B.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ie(){}ie.prototype=B.prototype;function ae(N,W,oe){this.props=N,this.context=W,this.refs=H,this.updater=oe||D}var ue=ae.prototype=new ie;ue.constructor=ae,V(ue,B.prototype),ue.isPureReactComponent=!0;var ye=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function k(N,W,oe,te,ve,Pe){return oe=Pe.ref,{$$typeof:n,type:N,key:W,ref:oe!==void 0?oe:null,props:Pe}}function C(N,W){return k(N.type,W,void 0,void 0,void 0,N.props)}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function M(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(oe){return W[oe]})}var P=/\/+/g;function L(N,W){return typeof N=="object"&&N!==null&&N.key!=null?M(""+N.key):W.toString(36)}function R(){}function Ee(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function(W){N.status==="pending"&&(N.status="fulfilled",N.value=W)},function(W){N.status==="pending"&&(N.status="rejected",N.reason=W)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function We(N,W,oe,te,ve){var Pe=typeof N;(Pe==="undefined"||Pe==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(Pe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case n:case e:Ae=!0;break;case y:return Ae=N._init,We(Ae(N._payload),W,oe,te,ve)}}if(Ae)return ve=ve(N),Ae=te===""?"."+L(N,0):te,ye(ve)?(oe="",Ae!=null&&(oe=Ae.replace(P,"$&/")+"/"),We(ve,W,oe,"",function(Zn){return Zn})):ve!=null&&(I(ve)&&(ve=C(ve,oe+(ve.key==null||N&&N.key===ve.key?"":(""+ve.key).replace(P,"$&/")+"/")+Ae)),W.push(ve)),1;Ae=0;var Vt=te===""?".":te+":";if(ye(N))for(var ot=0;ot<N.length;ot++)te=N[ot],Pe=Vt+L(te,ot),Ae+=We(te,W,oe,Pe,ve);else if(ot=w(N),typeof ot=="function")for(N=ot.call(N),ot=0;!(te=N.next()).done;)te=te.value,Pe=Vt+L(te,ot++),Ae+=We(te,W,oe,Pe,ve);else if(Pe==="object"){if(typeof N.then=="function")return We(Ee(N),W,oe,te,ve);throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Y(N,W,oe){if(N==null)return N;var te=[],ve=0;return We(N,te,"","",function(Pe){return W.call(oe,Pe,ve++)}),te}function ne(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=oe)},function(oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=oe)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function fe(){}return Ve.Children={map:Y,forEach:function(N,W,oe){Y(N,function(){W.apply(this,arguments)},oe)},count:function(N){var W=0;return Y(N,function(){W++}),W},toArray:function(N){return Y(N,function(W){return W})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ve.Component=B,Ve.Fragment=t,Ve.Profiler=a,Ve.PureComponent=ae,Ve.StrictMode=s,Ve.Suspense=p,Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,Ve.__COMPILER_RUNTIME={__proto__:null,c:function(N){return de.H.useMemoCache(N)}},Ve.cache=function(N){return function(){return N.apply(null,arguments)}},Ve.cloneElement=function(N,W,oe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=V({},N.props),ve=N.key,Pe=void 0;if(W!=null)for(Ae in W.ref!==void 0&&(Pe=void 0),W.key!==void 0&&(ve=""+W.key),W)!ge.call(W,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&W.ref===void 0||(te[Ae]=W[Ae]);var Ae=arguments.length-2;if(Ae===1)te.children=oe;else if(1<Ae){for(var Vt=Array(Ae),ot=0;ot<Ae;ot++)Vt[ot]=arguments[ot+2];te.children=Vt}return k(N.type,ve,void 0,void 0,Pe,te)},Ve.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},Ve.createElement=function(N,W,oe){var te,ve={},Pe=null;if(W!=null)for(te in W.key!==void 0&&(Pe=""+W.key),W)ge.call(W,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ve[te]=W[te]);var Ae=arguments.length-2;if(Ae===1)ve.children=oe;else if(1<Ae){for(var Vt=Array(Ae),ot=0;ot<Ae;ot++)Vt[ot]=arguments[ot+2];ve.children=Vt}if(N&&N.defaultProps)for(te in Ae=N.defaultProps,Ae)ve[te]===void 0&&(ve[te]=Ae[te]);return k(N,Pe,void 0,void 0,null,ve)},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(N){return{$$typeof:d,render:N}},Ve.isValidElement=I,Ve.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ne}},Ve.memo=function(N,W){return{$$typeof:g,type:N,compare:W===void 0?null:W}},Ve.startTransition=function(N){var W=de.T,oe={};de.T=oe;try{var te=N(),ve=de.S;ve!==null&&ve(oe,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(fe,ce)}catch(Pe){ce(Pe)}finally{de.T=W}},Ve.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},Ve.use=function(N){return de.H.use(N)},Ve.useActionState=function(N,W,oe){return de.H.useActionState(N,W,oe)},Ve.useCallback=function(N,W){return de.H.useCallback(N,W)},Ve.useContext=function(N){return de.H.useContext(N)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(N,W){return de.H.useDeferredValue(N,W)},Ve.useEffect=function(N,W,oe){var te=de.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(N,W)},Ve.useId=function(){return de.H.useId()},Ve.useImperativeHandle=function(N,W,oe){return de.H.useImperativeHandle(N,W,oe)},Ve.useInsertionEffect=function(N,W){return de.H.useInsertionEffect(N,W)},Ve.useLayoutEffect=function(N,W){return de.H.useLayoutEffect(N,W)},Ve.useMemo=function(N,W){return de.H.useMemo(N,W)},Ve.useOptimistic=function(N,W){return de.H.useOptimistic(N,W)},Ve.useReducer=function(N,W,oe){return de.H.useReducer(N,W,oe)},Ve.useRef=function(N){return de.H.useRef(N)},Ve.useState=function(N){return de.H.useState(N)},Ve.useSyncExternalStore=function(N,W,oe){return de.H.useSyncExternalStore(N,W,oe)},Ve.useTransition=function(){return de.H.useTransition()},Ve.version="19.1.1",Ve}var ST;function T_(){return ST||(ST=1,ng.exports=ax()),ng.exports}var ee=T_(),ig={exports:{}},Hu={},sg={exports:{}},rg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function ox(){return AT||(AT=1,(function(n){function e(Y,ne){var ce=Y.length;Y.push(ne);e:for(;0<ce;){var fe=ce-1>>>1,N=Y[fe];if(0<a(N,ne))Y[fe]=ne,Y[ce]=N,ce=fe;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ne=Y[0],ce=Y.pop();if(ce!==ne){Y[0]=ce;e:for(var fe=0,N=Y.length,W=N>>>1;fe<W;){var oe=2*(fe+1)-1,te=Y[oe],ve=oe+1,Pe=Y[ve];if(0>a(te,ce))ve<N&&0>a(Pe,te)?(Y[fe]=Pe,Y[ve]=ce,fe=ve):(Y[fe]=te,Y[oe]=ce,fe=oe);else if(ve<N&&0>a(Pe,ce))Y[fe]=Pe,Y[ve]=ce,fe=ve;else break e}}return ne}function a(Y,ne){var ce=Y.sortIndex-ne.sortIndex;return ce!==0?ce:Y.id-ne.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,b=null,w=3,D=!1,V=!1,H=!1,B=!1,ie=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ye(Y){for(var ne=t(g);ne!==null;){if(ne.callback===null)s(g);else if(ne.startTime<=Y)s(g),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(g)}}function de(Y){if(H=!1,ye(Y),!V)if(t(p)!==null)V=!0,ge||(ge=!0,L());else{var ne=t(g);ne!==null&&We(de,ne.startTime-Y)}}var ge=!1,k=-1,C=5,I=-1;function M(){return B?!0:!(n.unstable_now()-I<C)}function P(){if(B=!1,ge){var Y=n.unstable_now();I=Y;var ne=!0;try{e:{V=!1,H&&(H=!1,ae(k),k=-1),D=!0;var ce=w;try{t:{for(ye(Y),b=t(p);b!==null&&!(b.expirationTime>Y&&M());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,w=b.priorityLevel;var N=fe(b.expirationTime<=Y);if(Y=n.unstable_now(),typeof N=="function"){b.callback=N,ye(Y),ne=!0;break t}b===t(p)&&s(p),ye(Y)}else s(p);b=t(p)}if(b!==null)ne=!0;else{var W=t(g);W!==null&&We(de,W.startTime-Y),ne=!1}}break e}finally{b=null,w=ce,D=!1}ne=void 0}}finally{ne?L():ge=!1}}}var L;if(typeof ue=="function")L=function(){ue(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ee=R.port2;R.port1.onmessage=P,L=function(){Ee.postMessage(null)}}else L=function(){ie(P,0)};function We(Y,ne){k=ie(function(){Y(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var ce=w;w=ne;try{return Y()}finally{w=ce}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=w;w=Y;try{return ne()}finally{w=ce}},n.unstable_scheduleCallback=function(Y,ne,ce){var fe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?fe+ce:fe):ce=fe,Y){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ce+N,Y={id:y++,callback:ne,priorityLevel:Y,startTime:ce,expirationTime:N,sortIndex:-1},ce>fe?(Y.sortIndex=ce,e(g,Y),t(p)===null&&Y===t(g)&&(H?(ae(k),k=-1):H=!0,We(de,ce-fe))):(Y.sortIndex=N,e(p,Y),V||D||(V=!0,ge||(ge=!0,L()))),Y},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Y){var ne=w;return function(){var ce=w;w=ne;try{return Y.apply(this,arguments)}finally{w=ce}}}})(rg)),rg}var CT;function lx(){return CT||(CT=1,sg.exports=ox()),sg.exports}var ag={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT;function ux(){if(RT)return En;RT=1;var n=T_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},En.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},En.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:D}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},En.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,g){return p(g)},En.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},En.useFormStatus=function(){return c.H.useHostTransitionStatus()},En.version="19.1.1",En}var xT;function cx(){if(xT)return ag.exports;xT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ag.exports=ux(),ag.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function hx(){if(IT)return Hu;IT=1;var n=lx(),e=T_(),t=cx();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=P&&i[P]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function Ee(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case V:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case de:return"Suspense";case ge:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case D:return"Portal";case ue:return(i.displayName||"Context")+".Provider";case ae:return(i._context.displayName||"Context")+".Consumer";case ye:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:Ee(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return Ee(i(r))}catch{}}return null}var We=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},fe=[],N=-1;function W(i){return{current:i}}function oe(i){0>N||(i.current=fe[N],fe[N]=null,N--)}function te(i,r){N++,fe[N]=i.current,i.current=r}var ve=W(null),Pe=W(null),Ae=W(null),Vt=W(null);function ot(i,r){switch(te(Ae,r),te(Pe,i),te(ve,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?$E(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=$E(r),i=XE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(ve),te(ve,i)}function Zn(){oe(ve),oe(Pe),oe(Ae)}function xi(i){i.memoizedState!==null&&te(Vt,i);var r=ve.current,o=XE(r,i.type);r!==o&&(te(Pe,i),te(ve,o))}function di(i){Pe.current===i&&(oe(ve),oe(Pe)),Vt.current===i&&(oe(Vt),ju._currentValue=ce)}var is=Object.prototype.hasOwnProperty,ss=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,Kr=n.unstable_shouldYield,no=n.unstable_requestPaint,On=n.unstable_now,Vl=n.unstable_getCurrentPriorityLevel,$r=n.unstable_ImmediatePriority,mi=n.unstable_UserBlockingPriority,pi=n.unstable_NormalPriority,Xr=n.unstable_LowPriority,Ys=n.unstable_IdlePriority,pe=n.log,De=n.unstable_setDisableYieldValue,Te=null,Oe=null;function It(i){if(typeof pe=="function"&&De(i),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Te,i)}catch{}}var wt=Math.clz32?Math.clz32:Ks,yn=Math.log,Ll=Math.LN2;function Ks(i){return i>>>=0,i===0?32:31-(yn(i)/Ll|0)|0}var Wr=256,Zr=4194304;function gi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function io(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=gi(u):(E&=S,E!==0?f=gi(E):o||(o=S&~i,o!==0&&(f=gi(o))))):(S=u&~m,S!==0?f=gi(S):E!==0?f=gi(E):o||(o=u&~i,o!==0&&(f=gi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Jr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function jl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var i=Wr;return Wr<<=1,(Wr&4194048)===0&&(Wr=256),i}function zl(){var i=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),i}function as(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function os(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Bl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,x=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-wt(o),Z=1<<K;S[K]=0,x[K]=-1;var F=q[K];if(F!==null)for(q[K]=null,K=0;K<F.length;K++){var G=F[K];G!==null&&(G.lane&=-536870913)}o&=~Z}u!==0&&Ii(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Ii(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-wt(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function ql(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-wt(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function $s(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function so(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Xs(){var i=ne.p;return i!==0?i:(i=window.event,i===void 0?32:pT(i.type))}function Qc(i,r){var o=ne.p;try{return ne.p=i,r()}finally{ne.p=o}}var Et=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Et,Lt="__reactProps$"+Et,Jn="__reactContainer$"+Et,Fl="__reactEvents$"+Et,sm="__reactListeners$"+Et,Ws="__reactHandles$"+Et,Yc="__reactResources$"+Et,ea="__reactMarker$"+Et;function Zs(i){delete i[Yt],delete i[Lt],delete i[Fl],delete i[sm],delete i[Ws]}function ls(i){var r=i[Yt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Jn]||o[Yt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=eT(i);i!==null;){if(o=i[Yt])return o;i=eT(i)}return r}i=o,o=i.parentNode}return null}function Ni(i){if(i=i[Yt]||i[Jn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Di(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Rn(i){var r=i[Yc];return r||(r=i[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[ea]=!0}var Hl=new Set,ro={};function _i(i,r){us(i,r),us(i+"Capture",r)}function us(i,r){for(ro[i]=r,i=0;i<r.length;i++)Hl.add(r[i])}var Kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$c={},ta={};function Xc(i){return is.call(ta,i)?!0:is.call($c,i)?!1:Kc.test(i)?ta[i]=!0:($c[i]=!0,!1)}function Js(i,r,o){if(Xc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function ki(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function un(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var na,Wc;function cs(i){if(na===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);na=r&&r[1]||"",Wc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+na+i+Wc}var ao=!1;function oo(i,r){if(!i||ao)return"";ao=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var F=G}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(G){F=G}i.call(Z.prototype)}}else{try{throw Error()}catch(G){F=G}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&F&&typeof G.stack=="string")return[G.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var x=E.split(`
`),q=S.split(`
`);for(f=u=0;u<x.length&&!x[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===x.length||f===q.length)for(u=x.length-1,f=q.length-1;1<=u&&0<=f&&x[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(x[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||x[u]!==q[f]){var K=`
`+x[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{ao=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?cs(o):""}function Gl(i){switch(i.tag){case 26:case 27:case 5:return cs(i.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 15:return oo(i.type,!1);case 11:return oo(i.type.render,!1);case 1:return oo(i.type,!0);case 31:return cs("Activity");default:return""}}function lo(i){try{var r="";do r+=Gl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function xn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ql(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rm(i){var r=Ql(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function uo(i){i._valueTracker||(i._valueTracker=rm(i))}function Yl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Ql(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function ia(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var am=/[\n"\\]/g;function jt(i){return i.replace(am,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function qn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+xn(r)):i.value!==""+xn(r)&&(i.value=""+xn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?er(i,E,xn(r)):o!=null?er(i,E,xn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+xn(S):i.removeAttribute("name")}function sa(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+xn(o):"",r=r!=null?""+xn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function er(i,r,o){r==="number"&&ia(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function hs(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+xn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function lt(i,r,o){if(r!=null&&(r=""+xn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+xn(o):""}function ra(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(We(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=xn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ei(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||aa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Kl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Zc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Zc(i,m,r[m])}function $l(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var om=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function co(i){return lm.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var fs=null;function ti(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ds=null,ms=null;function Xl(i){var r=Ni(i);if(r&&(i=r.stateNode)){var o=i[Lt]||null;e:switch(i=r.stateNode,r.type){case"input":if(qn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Lt]||null;if(!f)throw Error(s(90));qn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Yl(u)}break e;case"textarea":lt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&hs(i,!!o.multiple,r,!1)}}}var Oi=!1;function Jc(i,r,o){if(Oi)return i(r,o);Oi=!0;try{var u=i(r);return u}finally{if(Oi=!1,(ds!==null||ms!==null)&&(Qh(),ds&&(r=ds,i=ms,ms=ds=null,Xl(r),i)))for(r=0;r<i.length;r++)Xl(i[r])}}function oa(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(yi)try{var la={};Object.defineProperty(la,"passive",{get:function(){ni=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{ni=!1}var Mi=null,tr=null,ps=null;function Wl(){if(ps)return ps;var i,r=tr,o=r.length,u,f="value"in Mi?Mi.value:Mi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ps=f.slice(i,1<u?1-u:void 0)}function Pi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Vi(){return!0}function Zl(){return!1}function Jt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vi:Zl,this.isPropagationStopped=Zl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Jt(tt),ua=y({},tt,{view:0,detail:0}),eh=Jt(ua),fo,mo,Li,ca=y({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(fo=i.screenX-Li.screenX,mo=i.screenY-Li.screenY):mo=fo=0,Li=i),fo)},movementY:function(i){return"movementY"in i?i.movementY:mo}}),ii=Jt(ca),th=y({},ca,{dataTransfer:0}),um=Jt(th),ha=y({},ua,{relatedTarget:0}),po=Jt(ha),Jl=y({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),go=Jt(Jl),nh=y({},tt,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),_o=Jt(nh),cm=y({},tt,{data:0}),eu=Jt(cm),fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=sh[i])?!!r[i]:!1}function da(){return tu}var rh=y({},ua,{key:function(i){if(i.key){var r=fa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ih[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(i){return i.type==="keypress"?Pi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),yo=Jt(rh),ah=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Jt(ah),gs=y({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),oh=Jt(gs),lh=y({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=Jt(lh),ch=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),vo=Jt(ch),In=y({},tt,{newState:0,oldState:0}),hh=Jt(In),fh=[9,13,27,32],ji=yi&&"CompositionEvent"in window,h=null;yi&&"documentMode"in document&&(h=document.documentMode);var _=yi&&"TextEvent"in window&&!h,v=yi&&(!ji||h&&8<h&&11>=h),A=" ",U=!1;function Q(i,r){switch(i){case"keyup":return fh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ye=!1;function Kt(i,r){switch(i){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(U=!0,A);case"textInput":return i=r.data,i===A&&U?null:i;default:return null}}function Ke(i,r){if(Ye)return i==="compositionend"||!ji&&Q(i,r)?(i=Wl(),ps=tr=Mi=null,Ye=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $t(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!en[i.type]:r==="textarea"}function _s(i,r,o,u){ds?ms?ms.push(u):ms=[u]:ds=u,r=Zh(r,"onChange"),0<r.length&&(o=new ho("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var cn=null,Ui=null;function iu(i){HE(i,0)}function dh(i){var r=Di(i);if(Yl(r))return i}function hv(i,r){if(i==="change")return r}var fv=!1;if(yi){var hm;if(yi){var fm="oninput"in document;if(!fm){var dv=document.createElement("div");dv.setAttribute("oninput","return;"),fm=typeof dv.oninput=="function"}hm=fm}else hm=!1;fv=hm&&(!document.documentMode||9<document.documentMode)}function mv(){cn&&(cn.detachEvent("onpropertychange",pv),Ui=cn=null)}function pv(i){if(i.propertyName==="value"&&dh(Ui)){var r=[];_s(r,Ui,i,ti(i)),Jc(iu,r)}}function MC(i,r,o){i==="focusin"?(mv(),cn=r,Ui=o,cn.attachEvent("onpropertychange",pv)):i==="focusout"&&mv()}function PC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dh(Ui)}function VC(i,r){if(i==="click")return dh(r)}function LC(i,r){if(i==="input"||i==="change")return dh(r)}function jC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Fn=typeof Object.is=="function"?Object.is:jC;function su(i,r){if(Fn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!is.call(r,f)||!Fn(i[f],r[f]))return!1}return!0}function gv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _v(i,r){var o=gv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gv(o)}}function yv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?yv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function vv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=ia(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=ia(i.document)}return r}function dm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var UC=yi&&"documentMode"in document&&11>=document.documentMode,Eo=null,mm=null,ru=null,pm=!1;function Ev(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pm||Eo==null||Eo!==ia(u)||(u=Eo,"selectionStart"in u&&dm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ru&&su(ru,u)||(ru=u,u=Zh(mm,"onSelect"),0<u.length&&(r=new ho("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Eo)))}function ma(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var To={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},gm={},Tv={};yi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function pa(i){if(gm[i])return gm[i];if(!To[i])return i;var r=To[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Tv)return gm[i]=r[o];return i}var bv=pa("animationend"),wv=pa("animationiteration"),Sv=pa("animationstart"),zC=pa("transitionrun"),BC=pa("transitionstart"),qC=pa("transitioncancel"),Av=pa("transitionend"),Cv=new Map,_m="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_m.push("scrollEnd");function vi(i,r){Cv.set(i,r),_i(r,[i])}var Rv=new WeakMap;function si(i,r){if(typeof i=="object"&&i!==null){var o=Rv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:lo(r)},Rv.set(i,r),r)}return{value:i,source:r,stack:lo(r)}}var ri=[],bo=0,ym=0;function mh(){for(var i=bo,r=ym=bo=0;r<i;){var o=ri[r];ri[r++]=null;var u=ri[r];ri[r++]=null;var f=ri[r];ri[r++]=null;var m=ri[r];if(ri[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&xv(o,f,m)}}function ph(i,r,o,u){ri[bo++]=i,ri[bo++]=r,ri[bo++]=o,ri[bo++]=u,ym|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function vm(i,r,o,u){return ph(i,r,o,u),gh(i)}function wo(i,r){return ph(i,null,null,r),gh(i)}function xv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-wt(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function gh(i){if(50<Nu)throw Nu=0,Ap=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var So={};function FC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(i,r,o,u){return new FC(i,r,o,u)}function Em(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ys(i,r){var o=i.alternate;return o===null?(o=Hn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Iv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function _h(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")Em(i)&&(E=1);else if(typeof i=="string")E=GR(i,o,ve.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=Hn(31,o,r,f),i.elementType=I,i.lanes=m,i;case V:return ga(o.children,f,m,r);case H:E=8,f|=24;break;case B:return i=Hn(12,o,r,f|2),i.elementType=B,i.lanes=m,i;case de:return i=Hn(13,o,r,f),i.elementType=de,i.lanes=m,i;case ge:return i=Hn(19,o,r,f),i.elementType=ge,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ie:case ue:E=10;break e;case ae:E=9;break e;case ye:E=11;break e;case k:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Hn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ga(i,r,o,u){return i=Hn(7,i,u,r),i.lanes=o,i}function Tm(i,r,o){return i=Hn(6,i,null,r),i.lanes=o,i}function bm(i,r,o){return r=Hn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Ao=[],Co=0,yh=null,vh=0,ai=[],oi=0,_a=null,vs=1,Es="";function ya(i,r){Ao[Co++]=vh,Ao[Co++]=yh,yh=i,vh=r}function Nv(i,r,o){ai[oi++]=vs,ai[oi++]=Es,ai[oi++]=_a,_a=i;var u=vs;i=Es;var f=32-wt(u)-1;u&=~(1<<f),o+=1;var m=32-wt(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,vs=1<<32-wt(r)+f|o<<f|u,Es=m+i}else vs=1<<m|o<<f|u,Es=i}function wm(i){i.return!==null&&(ya(i,1),Nv(i,1,0))}function Sm(i){for(;i===yh;)yh=Ao[--Co],Ao[Co]=null,vh=Ao[--Co],Ao[Co]=null;for(;i===_a;)_a=ai[--oi],ai[oi]=null,Es=ai[--oi],ai[oi]=null,vs=ai[--oi],ai[oi]=null}var Nn=null,Ct=null,Je=!1,va=null,zi=!1,Am=Error(s(519));function Ea(i){var r=Error(s(418,""));throw lu(si(r,i)),Am}function Dv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Yt]=i,r[Lt]=u,o){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<ku.length;o++)Fe(ku[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Fe("invalid",r),sa(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),uo(r);break;case"select":Fe("invalid",r);break;case"textarea":Fe("invalid",r),ra(r,u.value,u.defaultValue,u.children),uo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||KE(r.textContent,o)?(u.popover!=null&&(Fe("beforetoggle",r),Fe("toggle",r)),u.onScroll!=null&&Fe("scroll",r),u.onScrollEnd!=null&&Fe("scrollend",r),u.onClick!=null&&(r.onclick=Jh),r=!0):r=!1,r||Ea(i)}function kv(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Nn=Nn.return}}function au(i){if(i!==Nn)return!1;if(!Je)return kv(i),Je=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Bp(i.type,i.memoizedProps)),o=!o),o&&Ct&&Ea(i),kv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Ct=Ti(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Ct=null}}else r===27?(r=Ct,_r(i.type)?(i=Gp,Gp=null,Ct=i):Ct=r):Ct=Nn?Ti(i.stateNode.nextSibling):null;return!0}function ou(){Ct=Nn=null,Je=!1}function Ov(){var i=va;return i!==null&&(Vn===null?Vn=i:Vn.push.apply(Vn,i),va=null),i}function lu(i){va===null?va=[i]:va.push(i)}var Cm=W(null),Ta=null,Ts=null;function nr(i,r,o){te(Cm,r._currentValue),r._currentValue=o}function bs(i){i._currentValue=Cm.current,oe(Cm)}function Rm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function xm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var x=0;x<r.length;x++)if(S.context===r[x]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Rm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Rm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function uu(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Fn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Vt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(ju):i=[ju])}f=f.return}i!==null&&xm(r,i,o,u),r.flags|=262144}function Eh(i){for(i=i.firstContext;i!==null;){if(!Fn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ba(i){Ta=i,Ts=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function vn(i){return Mv(Ta,i)}function Th(i,r){return Ta===null&&ba(i),Mv(i,r)}function Mv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ts===null){if(i===null)throw Error(s(308));Ts=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ts=Ts.next=r;return o}var HC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},GC=n.unstable_scheduleCallback,QC=n.unstable_NormalPriority,Xt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Im(){return{controller:new HC,data:new Map,refCount:0}}function cu(i){i.refCount--,i.refCount===0&&GC(QC,function(){i.controller.abort()})}var hu=null,Nm=0,Ro=0,xo=null;function YC(i,r){if(hu===null){var o=hu=[];Nm=0,Ro=kp(),xo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Nm++,r.then(Pv,Pv),r}function Pv(){if(--Nm===0&&hu!==null){xo!==null&&(xo.status="fulfilled");var i=hu;hu=null,Ro=0,xo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function KC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Vv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&YC(i,r),Vv!==null&&Vv(i,r)};var wa=W(null);function Dm(){var i=wa.current;return i!==null?i:mt.pooledCache}function bh(i,r){r===null?te(wa,wa.current):te(wa,r.pool)}function Lv(){var i=Dm();return i===null?null:{parent:Xt._currentValue,pool:i}}var fu=Error(s(460)),jv=Error(s(474)),wh=Error(s(542)),km={then:function(){}};function Uv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Sh(){}function zv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Sh,Sh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,qv(i),i;default:if(typeof r.status=="string")r.then(Sh,Sh);else{if(i=mt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,qv(i),i}throw du=r,fu}}var du=null;function Bv(){if(du===null)throw Error(s(459));var i=du;return du=null,i}function qv(i){if(i===fu||i===wh)throw Error(s(483))}var ir=!1;function Om(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function sr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function rr(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(it&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=gh(i),xv(i,null,o),r}return ph(i,u,r,o),gh(i)}function mu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,ql(i,o)}}function Pm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Vm=!1;function pu(){if(Vm){var i=xo;if(i!==null)throw i}}function gu(i,r,o,u){Vm=!1;var f=i.updateQueue;ir=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var x=S,q=x.next;x.next=null,E===null?m=q:E.next=q,E=x;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=q:S.next=q,K.lastBaseUpdate=x))}if(m!==null){var Z=f.baseState;E=0,K=q=x=null,S=m;do{var F=S.lane&-536870913,G=F!==S.lane;if(G?($e&F)===F:(u&F)===F){F!==0&&F===Ro&&(Vm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Re=i,we=S;F=r;var ht=o;switch(we.tag){case 1:if(Re=we.payload,typeof Re=="function"){Z=Re.call(ht,Z,F);break e}Z=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=we.payload,F=typeof Re=="function"?Re.call(ht,Z,F):Re,F==null)break e;Z=y({},Z,F);break e;case 2:ir=!0}}F=S.callback,F!==null&&(i.flags|=64,G&&(i.flags|=8192),G=f.callbacks,G===null?f.callbacks=[F]:G.push(F))}else G={lane:F,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(q=K=G,x=Z):K=K.next=G,E|=F;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);K===null&&(x=Z),f.baseState=x,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),dr|=E,i.lanes=E,i.memoizedState=Z}}function Fv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Hv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Fv(o[i],r)}var Io=W(null),Ah=W(0);function Gv(i,r){i=Is,te(Ah,i),te(Io,r),Is=i|r.baseLanes}function Lm(){te(Ah,Is),te(Io,Io.current)}function jm(){Is=Ah.current,oe(Io),oe(Ah)}var ar=0,Le=null,ut=null,Ut=null,Ch=!1,No=!1,Sa=!1,Rh=0,_u=0,Do=null,$C=0;function Dt(){throw Error(s(321))}function Um(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Fn(i[o],r[o]))return!1;return!0}function zm(i,r,o,u,f,m){return ar=m,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?x0:I0,Sa=!1,m=o(u,f),Sa=!1,No&&(m=Yv(r,o,u,f)),Qv(i),m}function Qv(i){Y.H=Oh;var r=ut!==null&&ut.next!==null;if(ar=0,Ut=ut=Le=null,Ch=!1,_u=0,Do=null,r)throw Error(s(300));i===null||tn||(i=i.dependencies,i!==null&&Eh(i)&&(tn=!0))}function Yv(i,r,o,u){Le=i;var f=0;do{if(No&&(Do=null),_u=0,No=!1,25<=f)throw Error(s(301));if(f+=1,Ut=ut=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=nR,m=r(o,u)}while(No);return m}function XC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?yu(r):r,i=i.useState()[0],(ut!==null?ut.memoizedState:null)!==i&&(Le.flags|=1024),r}function Bm(){var i=Rh!==0;return Rh=0,i}function qm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Fm(i){if(Ch){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ch=!1}ar=0,Ut=ut=Le=null,No=!1,_u=Rh=0,Do=null}function Mn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?Le.memoizedState=Ut=i:Ut=Ut.next=i,Ut}function zt(){if(ut===null){var i=Le.alternate;i=i!==null?i.memoizedState:null}else i=ut.next;var r=Ut===null?Le.memoizedState:Ut.next;if(r!==null)Ut=r,ut=i;else{if(i===null)throw Le.alternate===null?Error(s(467)):Error(s(310));ut=i,i={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Ut===null?Le.memoizedState=Ut=i:Ut=Ut.next=i}return Ut}function Hm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yu(i){var r=_u;return _u+=1,Do===null&&(Do=[]),i=zv(Do,i,r),r=Le,(Ut===null?r.memoizedState:Ut.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?x0:I0),i}function xh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return yu(i);if(i.$$typeof===ue)return vn(i)}throw Error(s(438,String(i)))}function Gm(i){var r=null,o=Le.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Le.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Hm(),Le.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function ws(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=zt();return Qm(r,ut,i)}function Qm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,x=null,q=r,K=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?($e&Z)===Z:(ar&Z)===Z){var F=q.revertLane;if(F===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===Ro&&(K=!0);else if((ar&F)===F){q=q.next,F===Ro&&(K=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(S=x=Z,E=m):x=x.next=Z,Le.lanes|=F,dr|=F;Z=q.action,Sa&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else F={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(S=x=F,E=m):x=x.next=F,Le.lanes|=Z,dr|=Z;q=q.next}while(q!==null&&q!==r);if(x===null?E=m:x.next=S,!Fn(m,i.memoizedState)&&(tn=!0,K&&(o=xo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=x,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Ym(i){var r=zt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Fn(m,r.memoizedState)||(tn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Kv(i,r,o){var u=Le,f=zt(),m=Je;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Fn((ut||f).memoizedState,o);E&&(f.memoizedState=o,tn=!0),f=f.queue;var S=Wv.bind(null,u,f,i);if(vu(2048,8,S,[i]),f.getSnapshot!==r||E||Ut!==null&&Ut.memoizedState.tag&1){if(u.flags|=2048,ko(9,Nh(),Xv.bind(null,u,f,o,r),null),mt===null)throw Error(s(349));m||(ar&124)!==0||$v(u,r,o)}return o}function $v(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Le.updateQueue,r===null?(r=Hm(),Le.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Xv(i,r,o,u){r.value=o,r.getSnapshot=u,Zv(r)&&Jv(i)}function Wv(i,r,o){return o(function(){Zv(r)&&Jv(i)})}function Zv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Fn(i,o)}catch{return!0}}function Jv(i){var r=wo(i,2);r!==null&&$n(r,i,2)}function Km(i){var r=Mn();if(typeof i=="function"){var o=i;if(i=o(),Sa){It(!0);try{o()}finally{It(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:i},r}function e0(i,r,o,u){return i.baseState=o,Qm(i,ut,typeof u=="function"?u:ws)}function WC(i,r,o,u,f){if(kh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,t0(r,m)):(m.next=o.next,r.pending=o.next=m)}}function t0(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),x=Y.S;x!==null&&x(E,S),n0(i,r,S)}catch(q){$m(i,r,q)}finally{Y.T=m}}else try{m=o(f,u),n0(i,r,m)}catch(q){$m(i,r,q)}}function n0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){i0(i,r,u)},function(u){return $m(i,r,u)}):i0(i,r,o)}function i0(i,r,o){r.status="fulfilled",r.value=o,s0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,t0(i,o)))}function $m(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,s0(r),r=r.next;while(r!==u)}i.action=null}function s0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function r0(i,r){return r}function a0(i,r){if(Je){var o=mt.formState;if(o!==null){e:{var u=Le;if(Je){if(Ct){t:{for(var f=Ct,m=zi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ct=Ti(f.nextSibling),u=f.data==="F!";break e}}Ea(u)}u=!1}u&&(r=o[0])}}return o=Mn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:r},o.queue=u,o=A0.bind(null,Le,u),u.dispatch=o,u=Km(!1),m=ep.bind(null,Le,!1,u.queue),u=Mn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=WC.bind(null,Le,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function o0(i){var r=zt();return l0(r,ut,i)}function l0(i,r,o){if(r=Qm(i,r,r0)[0],i=Ih(ws)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=yu(r)}catch(E){throw E===fu?wh:E}else u=r;r=zt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Le.flags|=2048,ko(9,Nh(),ZC.bind(null,f,o),null)),[u,m,i]}function ZC(i,r){i.action=r}function u0(i){var r=zt(),o=ut;if(o!==null)return l0(r,o,i);zt(),r=r.memoizedState,o=zt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function ko(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Le.updateQueue,r===null&&(r=Hm(),Le.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Nh(){return{destroy:void 0,resource:void 0}}function c0(){return zt().memoizedState}function Dh(i,r,o,u){var f=Mn();u=u===void 0?null:u,Le.flags|=i,f.memoizedState=ko(1|r,Nh(),o,u)}function vu(i,r,o,u){var f=zt();u=u===void 0?null:u;var m=f.memoizedState.inst;ut!==null&&u!==null&&Um(u,ut.memoizedState.deps)?f.memoizedState=ko(r,m,o,u):(Le.flags|=i,f.memoizedState=ko(1|r,m,o,u))}function h0(i,r){Dh(8390656,8,i,r)}function f0(i,r){vu(2048,8,i,r)}function d0(i,r){return vu(4,2,i,r)}function m0(i,r){return vu(4,4,i,r)}function p0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function g0(i,r,o){o=o!=null?o.concat([i]):null,vu(4,4,p0.bind(null,r,i),o)}function Xm(){}function _0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Um(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function y0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Um(r,u[1]))return u[0];if(u=i(),Sa){It(!0);try{i()}finally{It(!1)}}return o.memoizedState=[u,r],u}function Wm(i,r,o){return o===void 0||(ar&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=TE(),Le.lanes|=i,dr|=i,o)}function v0(i,r,o,u){return Fn(o,r)?o:Io.current!==null?(i=Wm(i,o,u),Fn(i,r)||(tn=!0),i):(ar&42)===0?(tn=!0,i.memoizedState=o):(i=TE(),Le.lanes|=i,dr|=i,r)}function E0(i,r,o,u,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,ep(i,!1,r,o);try{var x=f(),q=Y.S;if(q!==null&&q(S,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var K=KC(x,u);Eu(i,r,K,Kn(i))}else Eu(i,r,u,Kn(i))}catch(Z){Eu(i,r,{then:function(){},status:"rejected",reason:Z},Kn())}finally{ne.p=m,Y.T=E}}function JC(){}function Zm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=T0(i).queue;E0(i,f,r,ce,o===null?JC:function(){return b0(i),o(u)})}function T0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:ce},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function b0(i){var r=T0(i).next.queue;Eu(i,r,{},Kn())}function Jm(){return vn(ju)}function w0(){return zt().memoizedState}function S0(){return zt().memoizedState}function eR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Kn();i=sr(o);var u=rr(r,i,o);u!==null&&($n(u,r,o),mu(u,r,o)),r={cache:Im()},i.payload=r;return}r=r.return}}function tR(i,r,o){var u=Kn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kh(i)?C0(r,o):(o=vm(i,r,o,u),o!==null&&($n(o,i,u),R0(o,r,u)))}function A0(i,r,o){var u=Kn();Eu(i,r,o,u)}function Eu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(i))C0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Fn(S,E))return ph(i,r,f,0),mt===null&&mh(),!1}catch{}finally{}if(o=vm(i,r,f,u),o!==null)return $n(o,i,u),R0(o,r,u),!0}return!1}function ep(i,r,o,u){if(u={lane:2,revertLane:kp(),action:u,hasEagerState:!1,eagerState:null,next:null},kh(i)){if(r)throw Error(s(479))}else r=vm(i,o,u,2),r!==null&&$n(r,i,2)}function kh(i){var r=i.alternate;return i===Le||r!==null&&r===Le}function C0(i,r){No=Ch=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function R0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,ql(i,o)}}var Oh={readContext:vn,use:xh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},x0={readContext:vn,use:xh,useCallback:function(i,r){return Mn().memoizedState=[i,r===void 0?null:r],i},useContext:vn,useEffect:h0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Dh(4194308,4,p0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Dh(4194308,4,i,r)},useInsertionEffect:function(i,r){Dh(4,2,i,r)},useMemo:function(i,r){var o=Mn();r=r===void 0?null:r;var u=i();if(Sa){It(!0);try{i()}finally{It(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Mn();if(o!==void 0){var f=o(r);if(Sa){It(!0);try{o(r)}finally{It(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=tR.bind(null,Le,i),[u.memoizedState,i]},useRef:function(i){var r=Mn();return i={current:i},r.memoizedState=i},useState:function(i){i=Km(i);var r=i.queue,o=A0.bind(null,Le,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Xm,useDeferredValue:function(i,r){var o=Mn();return Wm(o,i,r)},useTransition:function(){var i=Km(!1);return i=E0.bind(null,Le,i.queue,!0,!1),Mn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Le,f=Mn();if(Je){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));($e&124)!==0||$v(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,h0(Wv.bind(null,u,m,i),[i]),u.flags|=2048,ko(9,Nh(),Xv.bind(null,u,m,o,r),null),o},useId:function(){var i=Mn(),r=mt.identifierPrefix;if(Je){var o=Es,u=vs;o=(u&~(1<<32-wt(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Rh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=$C++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Jm,useFormState:a0,useActionState:a0,useOptimistic:function(i){var r=Mn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=ep.bind(null,Le,!0,o),o.dispatch=r,[i,r]},useMemoCache:Gm,useCacheRefresh:function(){return Mn().memoizedState=eR.bind(null,Le)}},I0={readContext:vn,use:xh,useCallback:_0,useContext:vn,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Ih,useRef:c0,useState:function(){return Ih(ws)},useDebugValue:Xm,useDeferredValue:function(i,r){var o=zt();return v0(o,ut.memoizedState,i,r)},useTransition:function(){var i=Ih(ws)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:yu(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:Jm,useFormState:o0,useActionState:o0,useOptimistic:function(i,r){var o=zt();return e0(o,ut,i,r)},useMemoCache:Gm,useCacheRefresh:S0},nR={readContext:vn,use:xh,useCallback:_0,useContext:vn,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Ym,useRef:c0,useState:function(){return Ym(ws)},useDebugValue:Xm,useDeferredValue:function(i,r){var o=zt();return ut===null?Wm(o,i,r):v0(o,ut.memoizedState,i,r)},useTransition:function(){var i=Ym(ws)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:yu(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:Jm,useFormState:u0,useActionState:u0,useOptimistic:function(i,r){var o=zt();return ut!==null?e0(o,ut,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Gm,useCacheRefresh:S0},Oo=null,Tu=0;function Mh(i){var r=Tu;return Tu+=1,Oo===null&&(Oo=[]),zv(Oo,i,r)}function bu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Ph(i,r){throw r.$$typeof===b?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function N0(i){var r=i._init;return r(i._payload)}function D0(i){function r(j,O){if(i){var z=j.deletions;z===null?(j.deletions=[O],j.flags|=16):z.push(O)}}function o(j,O){if(!i)return null;for(;O!==null;)r(j,O),O=O.sibling;return null}function u(j){for(var O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function f(j,O){return j=ys(j,O),j.index=0,j.sibling=null,j}function m(j,O,z){return j.index=z,i?(z=j.alternate,z!==null?(z=z.index,z<O?(j.flags|=67108866,O):z):(j.flags|=67108866,O)):(j.flags|=1048576,O)}function E(j){return i&&j.alternate===null&&(j.flags|=67108866),j}function S(j,O,z,X){return O===null||O.tag!==6?(O=Tm(z,j.mode,X),O.return=j,O):(O=f(O,z),O.return=j,O)}function x(j,O,z,X){var me=z.type;return me===V?K(j,O,z.props.children,X,z.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===C&&N0(me)===O.type)?(O=f(O,z.props),bu(O,z),O.return=j,O):(O=_h(z.type,z.key,z.props,null,j.mode,X),bu(O,z),O.return=j,O)}function q(j,O,z,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=bm(z,j.mode,X),O.return=j,O):(O=f(O,z.children||[]),O.return=j,O)}function K(j,O,z,X,me){return O===null||O.tag!==7?(O=ga(z,j.mode,X,me),O.return=j,O):(O=f(O,z),O.return=j,O)}function Z(j,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Tm(""+O,j.mode,z),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return z=_h(O.type,O.key,O.props,null,j.mode,z),bu(z,O),z.return=j,z;case D:return O=bm(O,j.mode,z),O.return=j,O;case C:var X=O._init;return O=X(O._payload),Z(j,O,z)}if(We(O)||L(O))return O=ga(O,j.mode,z,null),O.return=j,O;if(typeof O.then=="function")return Z(j,Mh(O),z);if(O.$$typeof===ue)return Z(j,Th(j,O),z);Ph(j,O)}return null}function F(j,O,z,X){var me=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return me!==null?null:S(j,O,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===me?x(j,O,z,X):null;case D:return z.key===me?q(j,O,z,X):null;case C:return me=z._init,z=me(z._payload),F(j,O,z,X)}if(We(z)||L(z))return me!==null?null:K(j,O,z,X,null);if(typeof z.then=="function")return F(j,O,Mh(z),X);if(z.$$typeof===ue)return F(j,O,Th(j,z),X);Ph(j,z)}return null}function G(j,O,z,X,me){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return j=j.get(z)||null,S(O,j,""+X,me);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return j=j.get(X.key===null?z:X.key)||null,x(O,j,X,me);case D:return j=j.get(X.key===null?z:X.key)||null,q(O,j,X,me);case C:var Ue=X._init;return X=Ue(X._payload),G(j,O,z,X,me)}if(We(X)||L(X))return j=j.get(z)||null,K(O,j,X,me,null);if(typeof X.then=="function")return G(j,O,z,Mh(X),me);if(X.$$typeof===ue)return G(j,O,z,Th(O,X),me);Ph(O,X)}return null}function Re(j,O,z,X){for(var me=null,Ue=null,_e=O,Se=O=0,sn=null;_e!==null&&Se<z.length;Se++){_e.index>Se?(sn=_e,_e=null):sn=_e.sibling;var Ze=F(j,_e,z[Se],X);if(Ze===null){_e===null&&(_e=sn);break}i&&_e&&Ze.alternate===null&&r(j,_e),O=m(Ze,O,Se),Ue===null?me=Ze:Ue.sibling=Ze,Ue=Ze,_e=sn}if(Se===z.length)return o(j,_e),Je&&ya(j,Se),me;if(_e===null){for(;Se<z.length;Se++)_e=Z(j,z[Se],X),_e!==null&&(O=m(_e,O,Se),Ue===null?me=_e:Ue.sibling=_e,Ue=_e);return Je&&ya(j,Se),me}for(_e=u(_e);Se<z.length;Se++)sn=G(_e,j,Se,z[Se],X),sn!==null&&(i&&sn.alternate!==null&&_e.delete(sn.key===null?Se:sn.key),O=m(sn,O,Se),Ue===null?me=sn:Ue.sibling=sn,Ue=sn);return i&&_e.forEach(function(br){return r(j,br)}),Je&&ya(j,Se),me}function we(j,O,z,X){if(z==null)throw Error(s(151));for(var me=null,Ue=null,_e=O,Se=O=0,sn=null,Ze=z.next();_e!==null&&!Ze.done;Se++,Ze=z.next()){_e.index>Se?(sn=_e,_e=null):sn=_e.sibling;var br=F(j,_e,Ze.value,X);if(br===null){_e===null&&(_e=sn);break}i&&_e&&br.alternate===null&&r(j,_e),O=m(br,O,Se),Ue===null?me=br:Ue.sibling=br,Ue=br,_e=sn}if(Ze.done)return o(j,_e),Je&&ya(j,Se),me;if(_e===null){for(;!Ze.done;Se++,Ze=z.next())Ze=Z(j,Ze.value,X),Ze!==null&&(O=m(Ze,O,Se),Ue===null?me=Ze:Ue.sibling=Ze,Ue=Ze);return Je&&ya(j,Se),me}for(_e=u(_e);!Ze.done;Se++,Ze=z.next())Ze=G(_e,j,Se,Ze.value,X),Ze!==null&&(i&&Ze.alternate!==null&&_e.delete(Ze.key===null?Se:Ze.key),O=m(Ze,O,Se),Ue===null?me=Ze:Ue.sibling=Ze,Ue=Ze);return i&&_e.forEach(function(ix){return r(j,ix)}),Je&&ya(j,Se),me}function ht(j,O,z,X){if(typeof z=="object"&&z!==null&&z.type===V&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var me=z.key;O!==null;){if(O.key===me){if(me=z.type,me===V){if(O.tag===7){o(j,O.sibling),X=f(O,z.props.children),X.return=j,j=X;break e}}else if(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===C&&N0(me)===O.type){o(j,O.sibling),X=f(O,z.props),bu(X,z),X.return=j,j=X;break e}o(j,O);break}else r(j,O);O=O.sibling}z.type===V?(X=ga(z.props.children,j.mode,X,z.key),X.return=j,j=X):(X=_h(z.type,z.key,z.props,null,j.mode,X),bu(X,z),X.return=j,j=X)}return E(j);case D:e:{for(me=z.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(j,O.sibling),X=f(O,z.children||[]),X.return=j,j=X;break e}else{o(j,O);break}else r(j,O);O=O.sibling}X=bm(z,j.mode,X),X.return=j,j=X}return E(j);case C:return me=z._init,z=me(z._payload),ht(j,O,z,X)}if(We(z))return Re(j,O,z,X);if(L(z)){if(me=L(z),typeof me!="function")throw Error(s(150));return z=me.call(z),we(j,O,z,X)}if(typeof z.then=="function")return ht(j,O,Mh(z),X);if(z.$$typeof===ue)return ht(j,O,Th(j,z),X);Ph(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(j,O.sibling),X=f(O,z),X.return=j,j=X):(o(j,O),X=Tm(z,j.mode,X),X.return=j,j=X),E(j)):o(j,O)}return function(j,O,z,X){try{Tu=0;var me=ht(j,O,z,X);return Oo=null,me}catch(_e){if(_e===fu||_e===wh)throw _e;var Ue=Hn(29,_e,null,j.mode);return Ue.lanes=X,Ue.return=j,Ue}finally{}}}var Mo=D0(!0),k0=D0(!1),li=W(null),Bi=null;function or(i){var r=i.alternate;te(Wt,Wt.current&1),te(li,i),Bi===null&&(r===null||Io.current!==null||r.memoizedState!==null)&&(Bi=i)}function O0(i){if(i.tag===22){if(te(Wt,Wt.current),te(li,i),Bi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Bi=i)}}else lr()}function lr(){te(Wt,Wt.current),te(li,li.current)}function Ss(i){oe(li),Bi===i&&(Bi=null),oe(Wt)}var Wt=W(0);function Vh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Hp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function tp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var np={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Kn(),f=sr(u);f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&($n(r,i,u),mu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Kn(),f=sr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&($n(r,i,u),mu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Kn(),u=sr(o);u.tag=2,r!=null&&(u.callback=r),r=rr(i,u,o),r!==null&&($n(r,i,o),mu(r,i,o))}};function M0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!su(o,u)||!su(f,m):!0}function P0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&np.enqueueReplaceState(r,r.state,null)}function Aa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Lh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function V0(i){Lh(i)}function L0(i){console.error(i)}function j0(i){Lh(i)}function jh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function U0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ip(i,r,o){return o=sr(o),o.tag=3,o.payload={element:null},o.callback=function(){jh(i,r)},o}function z0(i){return i=sr(i),i.tag=3,i}function B0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){U0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){U0(r,o,u),typeof f!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function iR(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&uu(r,o,f,!0),o=li.current,o!==null){switch(o.tag){case 13:return Bi===null?Rp():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===km?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ip(i,u,f)),!1;case 22:return o.flags|=65536,u===km?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ip(i,u,f)),!1}throw Error(s(435,o.tag))}return Ip(i,u,f),Rp(),!1}if(Je)return r=li.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Am&&(i=Error(s(422),{cause:u}),lu(si(i,o)))):(u!==Am&&(r=Error(s(423),{cause:u}),lu(si(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=si(u,o),f=ip(i.stateNode,u,f),Pm(i,f),Rt!==4&&(Rt=2)),!1;var m=Error(s(520),{cause:u});if(m=si(m,o),Iu===null?Iu=[m]:Iu.push(m),Rt!==4&&(Rt=2),r===null)return!0;u=si(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=ip(o.stateNode,u,i),Pm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=z0(f),B0(f,i,o,u),Pm(o,f),!1}o=o.return}while(o!==null);return!1}var q0=Error(s(461)),tn=!1;function hn(i,r,o,u){r.child=i===null?k0(r,null,o,u):Mo(r,i.child,o,u)}function F0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ba(r),u=zm(i,r,o,E,m,f),S=Bm(),i!==null&&!tn?(qm(i,r,f),As(i,r,f)):(Je&&S&&wm(r),r.flags|=1,hn(i,r,u,f),r.child)}function H0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!Em(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,G0(i,r,m,u,f)):(i=_h(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!hp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:su,o(E,u)&&i.ref===r.ref)return As(i,r,f)}return r.flags|=1,i=ys(m,u),i.ref=r.ref,i.return=r,r.child=i}function G0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(su(m,u)&&i.ref===r.ref)if(tn=!1,r.pendingProps=u=m,hp(i,f))(i.flags&131072)!==0&&(tn=!0);else return r.lanes=i.lanes,As(i,r,f)}return sp(i,r,o,u,f)}function Q0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Y0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&bh(r,m!==null?m.cachePool:null),m!==null?Gv(r,m):Lm(),O0(r);else return r.lanes=r.childLanes=536870912,Y0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(bh(r,m.cachePool),Gv(r,m),lr(),r.memoizedState=null):(i!==null&&bh(r,null),Lm(),lr());return hn(i,r,f,o),r.child}function Y0(i,r,o,u){var f=Dm();return f=f===null?null:{parent:Xt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&bh(r,null),Lm(),O0(r),i!==null&&uu(i,r,u,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function sp(i,r,o,u,f){return ba(r),o=zm(i,r,o,u,void 0,f),u=Bm(),i!==null&&!tn?(qm(i,r,f),As(i,r,f)):(Je&&u&&wm(r),r.flags|=1,hn(i,r,o,f),r.child)}function K0(i,r,o,u,f,m){return ba(r),r.updateQueue=null,o=Yv(r,u,o,f),Qv(i),u=Bm(),i!==null&&!tn?(qm(i,r,m),As(i,r,m)):(Je&&u&&wm(r),r.flags|=1,hn(i,r,o,m),r.child)}function $0(i,r,o,u,f){if(ba(r),r.stateNode===null){var m=So,E=o.contextType;typeof E=="object"&&E!==null&&(m=vn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=np,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Om(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?vn(E):So,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(tp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&np.enqueueReplaceState(m,m.state,null),gu(r,u,m,f),pu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,x=Aa(o,S);m.props=x;var q=m.context,K=o.contextType;E=So,typeof K=="object"&&K!==null&&(E=vn(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&P0(r,m,u,E),ir=!1;var F=r.memoizedState;m.state=F,gu(r,u,m,f),pu(),q=r.memoizedState,S||F!==q||ir?(typeof Z=="function"&&(tp(r,o,Z,u),q=r.memoizedState),(x=ir||M0(r,o,x,u,F,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=x):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Mm(i,r),E=r.memoizedProps,K=Aa(o,E),m.props=K,Z=r.pendingProps,F=m.context,q=o.contextType,x=So,typeof q=="object"&&q!==null&&(x=vn(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||F!==x)&&P0(r,m,u,x),ir=!1,F=r.memoizedState,m.state=F,gu(r,u,m,f),pu();var G=r.memoizedState;E!==Z||F!==G||ir||i!==null&&i.dependencies!==null&&Eh(i.dependencies)?(typeof S=="function"&&(tp(r,o,S,u),G=r.memoizedState),(K=ir||M0(r,o,K,u,F,G,x)||i!==null&&i.dependencies!==null&&Eh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,x),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,x)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=G),m.props=u,m.state=G,m.context=x,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Uh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Mo(r,i.child,null,f),r.child=Mo(r,null,o,f)):hn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=As(i,r,f),i}function X0(i,r,o,u){return ou(),r.flags|=256,hn(i,r,o,u),r.child}var rp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ap(i){return{baseLanes:i,cachePool:Lv()}}function op(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ui),i}function W0(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Je){if(f?or(r):lr(),Je){var S=Ct,x;if(x=S){e:{for(x=S,S=zi;x.nodeType!==8;){if(!S){S=null;break e}if(x=Ti(x.nextSibling),x===null){S=null;break e}}S=x}S!==null?(r.memoizedState={dehydrated:S,treeContext:_a!==null?{id:vs,overflow:Es}:null,retryLane:536870912,hydrationErrors:null},x=Hn(18,null,null,0),x.stateNode=S,x.return=r,r.child=x,Nn=r,Ct=null,x=!0):x=!1}x||Ea(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Hp(S)?r.lanes=32:r.lanes=536870912,null;Ss(r)}return S=u.children,u=u.fallback,f?(lr(),f=r.mode,S=zh({mode:"hidden",children:S},f),u=ga(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=ap(o),f.childLanes=op(i,E,o),r.memoizedState=rp,u):(or(r),lp(r,S))}if(x=i.memoizedState,x!==null&&(S=x.dehydrated,S!==null)){if(m)r.flags&256?(or(r),r.flags&=-257,r=up(i,r,o)):r.memoizedState!==null?(lr(),r.child=i.child,r.flags|=128,r=null):(lr(),f=u.fallback,S=r.mode,u=zh({mode:"visible",children:u.children},S),f=ga(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Mo(r,i.child,null,o),u=r.child,u.memoizedState=ap(o),u.childLanes=op(i,E,o),r.memoizedState=rp,r=f);else if(or(r),Hp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,lu({value:u,source:null,stack:null}),r=up(i,r,o)}else if(tn||uu(i,r,o,!1),E=(o&i.childLanes)!==0,tn||E){if(E=mt,E!==null&&(u=o&-o,u=(u&42)!==0?1:$s(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==x.retryLane))throw x.retryLane=u,wo(i,u),$n(E,i,u),q0;S.data==="$?"||Rp(),r=up(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=x.treeContext,Ct=Ti(S.nextSibling),Nn=r,Je=!0,va=null,zi=!1,i!==null&&(ai[oi++]=vs,ai[oi++]=Es,ai[oi++]=_a,vs=i.id,Es=i.overflow,_a=r),r=lp(r,u.children),r.flags|=4096);return r}return f?(lr(),f=u.fallback,S=r.mode,x=i.child,q=x.sibling,u=ys(x,{mode:"hidden",children:u.children}),u.subtreeFlags=x.subtreeFlags&65011712,q!==null?f=ys(q,f):(f=ga(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=ap(o):(x=S.cachePool,x!==null?(q=Xt._currentValue,x=x.parent!==q?{parent:q,pool:q}:x):x=Lv(),S={baseLanes:S.baseLanes|o,cachePool:x}),f.memoizedState=S,f.childLanes=op(i,E,o),r.memoizedState=rp,u):(or(r),o=i.child,i=o.sibling,o=ys(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function lp(i,r){return r=zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function zh(i,r){return i=Hn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function up(i,r,o){return Mo(r,i.child,null,o),i=lp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Z0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Rm(i.return,r,o)}function cp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function J0(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(hn(i,r,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Z0(i,o,r);else if(i.tag===19)Z0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(te(Wt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Vh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),cp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Vh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}cp(r,!0,o,null,m);break;case"together":cp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function As(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),dr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(uu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ys(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ys(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function hp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Eh(i)))}function sR(i,r,o){switch(r.tag){case 3:ot(r,r.stateNode.containerInfo),nr(r,Xt,i.memoizedState.cache),ou();break;case 27:case 5:xi(r);break;case 4:ot(r,r.stateNode.containerInfo);break;case 10:nr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(or(r),r.flags|=128,null):(o&r.child.childLanes)!==0?W0(i,r,o):(or(r),i=As(i,r,o),i!==null?i.sibling:null);or(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(uu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return J0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Wt,Wt.current),u)break;return null;case 22:case 23:return r.lanes=0,Q0(i,r,o);case 24:nr(r,Xt,i.memoizedState.cache)}return As(i,r,o)}function eE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)tn=!0;else{if(!hp(i,o)&&(r.flags&128)===0)return tn=!1,sR(i,r,o);tn=(i.flags&131072)!==0}else tn=!1,Je&&(r.flags&1048576)!==0&&Nv(r,vh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Em(u)?(i=Aa(u,i),r.tag=1,r=$0(null,r,u,i,o)):(r.tag=0,r=sp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===ye){r.tag=11,r=F0(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=H0(null,r,u,i,o);break e}}throw r=Ee(u)||u,Error(s(306,r,""))}}return r;case 0:return sp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Aa(u,r.pendingProps),$0(i,r,u,f,o);case 3:e:{if(ot(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Mm(i,r),gu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,nr(r,Xt,u),u!==m.cache&&xm(r,[Xt],o,!0),pu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=X0(i,r,u,o);break e}else if(u!==f){f=si(Error(s(424)),r),lu(f),r=X0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=Ti(i.firstChild),Nn=r,Je=!0,va=null,zi=!0,o=k0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ou(),u===f){r=As(i,r,o);break e}hn(i,r,u,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=sT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Je||(o=r.type,i=r.pendingProps,u=ef(Ae.current).createElement(o),u[Yt]=r,u[Lt]=i,dn(u,o,i),Nt(u),r.stateNode=u):r.memoizedState=sT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return xi(r),i===null&&Je&&(u=r.stateNode=tT(r.type,r.pendingProps,Ae.current),Nn=r,zi=!0,f=Ct,_r(r.type)?(Gp=f,Ct=Ti(u.firstChild)):Ct=f),hn(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Je&&((f=u=Ct)&&(u=kR(u,r.type,r.pendingProps,zi),u!==null?(r.stateNode=u,Nn=r,Ct=Ti(u.firstChild),zi=!1,f=!0):f=!1),f||Ea(r)),xi(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Bp(f,m)?u=null:E!==null&&Bp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=zm(i,r,XC,null,null,o),ju._currentValue=f),Uh(i,r),hn(i,r,u,o),r.child;case 6:return i===null&&Je&&((i=o=Ct)&&(o=OR(o,r.pendingProps,zi),o!==null?(r.stateNode=o,Nn=r,Ct=null,i=!0):i=!1),i||Ea(r)),null;case 13:return W0(i,r,o);case 4:return ot(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Mo(r,null,u,o):hn(i,r,u,o),r.child;case 11:return F0(i,r,r.type,r.pendingProps,o);case 7:return hn(i,r,r.pendingProps,o),r.child;case 8:return hn(i,r,r.pendingProps.children,o),r.child;case 12:return hn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,nr(r,r.type,u.value),hn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ba(r),f=vn(f),u=u(f),r.flags|=1,hn(i,r,u,o),r.child;case 14:return H0(i,r,r.type,r.pendingProps,o);case 15:return G0(i,r,r.type,r.pendingProps,o);case 19:return J0(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=zh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ys(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Q0(i,r,o);case 24:return ba(r),u=vn(Xt),i===null?(f=Dm(),f===null&&(f=mt,m=Im(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Om(r),nr(r,Xt,f)):((i.lanes&o)!==0&&(Mm(i,r),gu(r,null,null,o),pu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),nr(r,Xt,u)):(u=m.cache,nr(r,Xt,u),u!==f.cache&&xm(r,[Xt],o,!0))),hn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Cs(i){i.flags|=4}function tE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!uT(r)){if(r=li.current,r!==null&&(($e&4194048)===$e?Bi!==null:($e&62914560)!==$e&&($e&536870912)===0||r!==Bi))throw du=km,jv;i.flags|=8192}}function Bh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?zl():536870912,i.lanes|=r,jo|=r)}function wu(i,r){if(!Je)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function St(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function rR(i,r,o){var u=r.pendingProps;switch(Sm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(r),null;case 1:return St(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),bs(Xt),Zn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(au(r)?Cs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ov())),St(r),null;case 26:return o=r.memoizedState,i===null?(Cs(r),o!==null?(St(r),tE(r,o)):(St(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Cs(r),St(r),tE(r,o)):(St(r),r.flags&=-16777217):(i.memoizedProps!==u&&Cs(r),St(r),r.flags&=-16777217),null;case 27:di(r),o=Ae.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}i=ve.current,au(r)?Dv(r):(i=tT(f,u,o),r.stateNode=i,Cs(r))}return St(r),null;case 5:if(di(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}if(i=ve.current,au(r))Dv(r);else{switch(f=ef(Ae.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Yt]=r,i[Lt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(dn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cs(r)}}return St(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ae.current,au(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Yt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||KE(i.nodeValue,o)),i||Ea(r)}else i=ef(i).createTextNode(u),i[Yt]=r,r.stateNode=i}return St(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=au(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Yt]=r}else ou(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;St(r),f=!1}else f=Ov(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Ss(r),r):(Ss(r),null)}if(Ss(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Bh(r,r.updateQueue),St(r),null;case 4:return Zn(),i===null&&Vp(r.stateNode.containerInfo),St(r),null;case 10:return bs(r.type),St(r),null;case 19:if(oe(Wt),f=r.memoizedState,f===null)return St(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)wu(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Vh(i),m!==null){for(r.flags|=128,wu(f,!1),i=m.updateQueue,r.updateQueue=i,Bh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Iv(o,i),o=o.sibling;return te(Wt,Wt.current&1|2),r.child}i=i.sibling}f.tail!==null&&On()>Hh&&(r.flags|=128,u=!0,wu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Vh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Bh(r,i),wu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Je)return St(r),null}else 2*On()-f.renderingStartTime>Hh&&o!==536870912&&(r.flags|=128,u=!0,wu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=On(),r.sibling=null,i=Wt.current,te(Wt,u?i&1|2:i&1),r):(St(r),null);case 22:case 23:return Ss(r),jm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(St(r),r.subtreeFlags&6&&(r.flags|=8192)):St(r),o=r.updateQueue,o!==null&&Bh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&oe(wa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),bs(Xt),St(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function aR(i,r){switch(Sm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return bs(Xt),Zn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return di(r),null;case 13:if(Ss(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));ou()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe(Wt),null;case 4:return Zn(),null;case 10:return bs(r.type),null;case 22:case 23:return Ss(r),jm(),i!==null&&oe(wa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return bs(Xt),null;case 25:return null;default:return null}}function nE(i,r){switch(Sm(r),r.tag){case 3:bs(Xt),Zn();break;case 26:case 27:case 5:di(r);break;case 4:Zn();break;case 13:Ss(r);break;case 19:oe(Wt);break;case 10:bs(r.type);break;case 22:case 23:Ss(r),jm(),i!==null&&oe(wa);break;case 24:bs(Xt)}}function Su(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){ft(r,r.return,S)}}function ur(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var x=o,q=S;try{q()}catch(K){ft(f,x,K)}}}u=u.next}while(u!==m)}}catch(K){ft(r,r.return,K)}}function iE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Hv(r,o)}catch(u){ft(i,i.return,u)}}}function sE(i,r,o){o.props=Aa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ft(i,r,u)}}function Au(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ft(i,r,f)}}function qi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ft(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ft(i,r,f)}else o.current=null}function rE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ft(i,i.return,f)}}function fp(i,r,o){try{var u=i.stateNode;RR(u,i.type,o,r),u[Lt]=r}catch(f){ft(i,i.return,f)}}function aE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&_r(i.type)||i.tag===4}function dp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||aE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&_r(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function mp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Jh));else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(mp(i,r,o),i=i.sibling;i!==null;)mp(i,r,o),i=i.sibling}function qh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(qh(i,r,o),i=i.sibling;i!==null;)qh(i,r,o),i=i.sibling}function oE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);dn(r,u,o),r[Yt]=i,r[Lt]=o}catch(m){ft(i,i.return,m)}}var Rs=!1,kt=!1,pp=!1,lE=typeof WeakSet=="function"?WeakSet:Set,nn=null;function oR(i,r){if(i=i.containerInfo,Up=of,i=vv(i),dm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,x=-1,q=0,K=0,Z=i,F=null;t:for(;;){for(var G;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(x=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(G=Z.firstChild)!==null;)F=Z,Z=G;for(;;){if(Z===i)break t;if(F===o&&++q===f&&(S=E),F===m&&++K===u&&(x=E),(G=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=G}o=S===-1||x===-1?null:{start:S,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(zp={focusedElem:i,selectionRange:o},of=!1,nn=r;nn!==null;)if(r=nn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,nn=i;else for(;nn!==null;){switch(r=nn,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Re=Aa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Re,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(we){ft(o,o.return,we)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Fp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Fp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,nn=i;break}nn=r.return}}function uE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:cr(i,o),u&4&&Su(5,o);break;case 1:if(cr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ft(o,o.return,E)}else{var f=Aa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ft(o,o.return,E)}}u&64&&iE(o),u&512&&Au(o,o.return);break;case 3:if(cr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Hv(i,r)}catch(E){ft(o,o.return,E)}}break;case 27:r===null&&u&4&&oE(o);case 26:case 5:cr(i,o),r===null&&u&4&&rE(o),u&512&&Au(o,o.return);break;case 12:cr(i,o);break;case 13:cr(i,o),u&4&&fE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=gR.bind(null,o),MR(i,o))));break;case 22:if(u=o.memoizedState!==null||Rs,!u){r=r!==null&&r.memoizedState!==null||kt,f=Rs;var m=kt;Rs=u,(kt=r)&&!m?hr(i,o,(o.subtreeFlags&8772)!==0):cr(i,o),Rs=f,kt=m}break;case 30:break;default:cr(i,o)}}function cE(i){var r=i.alternate;r!==null&&(i.alternate=null,cE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Zs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Tt=null,Pn=!1;function xs(i,r,o){for(o=o.child;o!==null;)hE(i,r,o),o=o.sibling}function hE(i,r,o){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Te,o)}catch{}switch(o.tag){case 26:kt||qi(o,r),xs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:kt||qi(o,r);var u=Tt,f=Pn;_r(o.type)&&(Tt=o.stateNode,Pn=!1),xs(i,r,o),Mu(o.stateNode),Tt=u,Pn=f;break;case 5:kt||qi(o,r);case 6:if(u=Tt,f=Pn,Tt=null,xs(i,r,o),Tt=u,Pn=f,Tt!==null)if(Pn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(o.stateNode)}catch(m){ft(o,r,m)}else try{Tt.removeChild(o.stateNode)}catch(m){ft(o,r,m)}break;case 18:Tt!==null&&(Pn?(i=Tt,JE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),qu(i)):JE(Tt,o.stateNode));break;case 4:u=Tt,f=Pn,Tt=o.stateNode.containerInfo,Pn=!0,xs(i,r,o),Tt=u,Pn=f;break;case 0:case 11:case 14:case 15:kt||ur(2,o,r),kt||ur(4,o,r),xs(i,r,o);break;case 1:kt||(qi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&sE(o,r,u)),xs(i,r,o);break;case 21:xs(i,r,o);break;case 22:kt=(u=kt)||o.memoizedState!==null,xs(i,r,o),kt=u;break;default:xs(i,r,o)}}function fE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qu(i)}catch(o){ft(r,r.return,o)}}function lR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new lE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new lE),r;default:throw Error(s(435,i.tag))}}function gp(i,r){var o=lR(i);r.forEach(function(u){var f=_R.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Gn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(_r(S.type)){Tt=S.stateNode,Pn=!1;break e}break;case 5:Tt=S.stateNode,Pn=!1;break e;case 3:case 4:Tt=S.stateNode.containerInfo,Pn=!0;break e}S=S.return}if(Tt===null)throw Error(s(160));hE(m,E,f),Tt=null,Pn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)dE(r,i),r=r.sibling}var Ei=null;function dE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Gn(r,i),Qn(i),u&4&&(ur(3,i,i.return),Su(3,i),ur(5,i,i.return));break;case 1:Gn(r,i),Qn(i),u&512&&(kt||o===null||qi(o,o.return)),u&64&&Rs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Ei;if(Gn(r,i),Qn(i),u&512&&(kt||o===null||qi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ea]||m[Yt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),dn(m,u,o),m[Yt]=i,Nt(m),u=m;break e;case"link":var E=oT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),dn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=oT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),dn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Yt]=i,Nt(m),u=m}i.stateNode=u}else lT(f,i.type,i.stateNode);else i.stateNode=aT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?lT(f,i.type,i.stateNode):aT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&fp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Gn(r,i),Qn(i),u&512&&(kt||o===null||qi(o,o.return)),o!==null&&u&4&&fp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Gn(r,i),Qn(i),u&512&&(kt||o===null||qi(o,o.return)),i.flags&32){f=i.stateNode;try{ei(f,"")}catch(G){ft(i,i.return,G)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,fp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(pp=!0);break;case 6:if(Gn(r,i),Qn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(G){ft(i,i.return,G)}}break;case 3:if(sf=null,f=Ei,Ei=tf(r.containerInfo),Gn(r,i),Ei=f,Qn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{qu(r.containerInfo)}catch(G){ft(i,i.return,G)}pp&&(pp=!1,mE(i));break;case 4:u=Ei,Ei=tf(i.stateNode.containerInfo),Gn(r,i),Qn(i),Ei=u;break;case 12:Gn(r,i),Qn(i);break;case 13:Gn(r,i),Qn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(bp=On()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,gp(i,u)));break;case 22:f=i.memoizedState!==null;var x=o!==null&&o.memoizedState!==null,q=Rs,K=kt;if(Rs=q||f,kt=K||x,Gn(r,i),kt=K,Rs=q,Qn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||x||Rs||kt||Ca(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){x=o=r;try{if(m=x.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=x.stateNode;var Z=x.memoizedProps.style,F=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(G){ft(x,x.return,G)}}}else if(r.tag===6){if(o===null){x=r;try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(G){ft(x,x.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,gp(i,o))));break;case 19:Gn(r,i),Qn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,gp(i,u)));break;case 30:break;case 21:break;default:Gn(r,i),Qn(i)}}function Qn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(aE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=dp(i);qh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ei(E,""),o.flags&=-33);var S=dp(i);qh(i,S,E);break;case 3:case 4:var x=o.stateNode.containerInfo,q=dp(i);mp(i,q,x);break;default:throw Error(s(161))}}catch(K){ft(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function mE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;mE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function cr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)uE(i,r.alternate,r),r=r.sibling}function Ca(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:ur(4,r,r.return),Ca(r);break;case 1:qi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&sE(r,r.return,o),Ca(r);break;case 27:Mu(r.stateNode);case 26:case 5:qi(r,r.return),Ca(r);break;case 22:r.memoizedState===null&&Ca(r);break;case 30:Ca(r);break;default:Ca(r)}i=i.sibling}}function hr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:hr(f,m,o),Su(4,m);break;case 1:if(hr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){ft(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var x=f.shared.hiddenCallbacks;if(x!==null)for(f.shared.hiddenCallbacks=null,f=0;f<x.length;f++)Fv(x[f],S)}catch(q){ft(u,u.return,q)}}o&&E&64&&iE(m),Au(m,m.return);break;case 27:oE(m);case 26:case 5:hr(f,m,o),o&&u===null&&E&4&&rE(m),Au(m,m.return);break;case 12:hr(f,m,o);break;case 13:hr(f,m,o),o&&E&4&&fE(f,m);break;case 22:m.memoizedState===null&&hr(f,m,o),Au(m,m.return);break;case 30:break;default:hr(f,m,o)}r=r.sibling}}function _p(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&cu(o))}function yp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&cu(i))}function Fi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)pE(i,r,o,u),r=r.sibling}function pE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Fi(i,r,o,u),f&2048&&Su(9,r);break;case 1:Fi(i,r,o,u);break;case 3:Fi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&cu(i)));break;case 12:if(f&2048){Fi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(x){ft(r,r.return,x)}}else Fi(i,r,o,u);break;case 13:Fi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Fi(i,r,o,u):Cu(i,r):m._visibility&2?Fi(i,r,o,u):(m._visibility|=2,Po(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&_p(E,r);break;case 24:Fi(i,r,o,u),f&2048&&yp(r.alternate,r);break;default:Fi(i,r,o,u)}}function Po(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,x=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Po(m,E,S,x,f),Su(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Po(m,E,S,x,f):Cu(m,E):(K._visibility|=2,Po(m,E,S,x,f)),f&&q&2048&&_p(E.alternate,E);break;case 24:Po(m,E,S,x,f),f&&q&2048&&yp(E.alternate,E);break;default:Po(m,E,S,x,f)}r=r.sibling}}function Cu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Cu(o,u),f&2048&&_p(u.alternate,u);break;case 24:Cu(o,u),f&2048&&yp(u.alternate,u);break;default:Cu(o,u)}r=r.sibling}}var Ru=8192;function Vo(i){if(i.subtreeFlags&Ru)for(i=i.child;i!==null;)gE(i),i=i.sibling}function gE(i){switch(i.tag){case 26:Vo(i),i.flags&Ru&&i.memoizedState!==null&&YR(Ei,i.memoizedState,i.memoizedProps);break;case 5:Vo(i);break;case 3:case 4:var r=Ei;Ei=tf(i.stateNode.containerInfo),Vo(i),Ei=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Ru,Ru=16777216,Vo(i),Ru=r):Vo(i));break;default:Vo(i)}}function _E(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function xu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];nn=u,vE(u,i)}_E(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yE(i),i=i.sibling}function yE(i){switch(i.tag){case 0:case 11:case 15:xu(i),i.flags&2048&&ur(9,i,i.return);break;case 3:xu(i);break;case 12:xu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Fh(i)):xu(i);break;default:xu(i)}}function Fh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];nn=u,vE(u,i)}_E(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:ur(8,r,r.return),Fh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Fh(r));break;default:Fh(r)}i=i.sibling}}function vE(i,r){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:ur(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:cu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,nn=u;else e:for(o=i;nn!==null;){u=nn;var f=u.sibling,m=u.return;if(cE(u),u===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var uR={getCacheForType:function(i){var r=vn(Xt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},cR=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,qe=null,$e=0,st=0,Yn=null,fr=!1,Lo=!1,vp=!1,Is=0,Rt=0,dr=0,Ra=0,Ep=0,ui=0,jo=0,Iu=null,Vn=null,Tp=!1,bp=0,Hh=1/0,Gh=null,mr=null,fn=0,pr=null,Uo=null,zo=0,wp=0,Sp=null,EE=null,Nu=0,Ap=null;function Kn(){if((it&2)!==0&&$e!==0)return $e&-$e;if(Y.T!==null){var i=Ro;return i!==0?i:kp()}return Xs()}function TE(){ui===0&&(ui=($e&536870912)===0||Je?Ul():536870912);var i=li.current;return i!==null&&(i.flags|=32),ui}function $n(i,r,o){(i===mt&&(st===2||st===9)||i.cancelPendingCommit!==null)&&(Bo(i,0),gr(i,$e,ui,!1)),os(i,o),((it&2)===0||i!==mt)&&(i===mt&&((it&2)===0&&(Ra|=o),Rt===4&&gr(i,$e,ui,!1)),Hi(i))}function bE(i,r,o){if((it&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Jr(i,r),f=u?dR(i,r):xp(i,r,!0),m=u;do{if(f===0){Lo&&!u&&gr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!hR(o)){f=xp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=Iu;var x=S.current.memoizedState.isDehydrated;if(x&&(Bo(S,E).flags|=256),E=xp(S,E,!1),E!==2){if(vp&&!x){S.errorRecoveryDisabledLanes|=m,Ra|=m,f=4;break e}m=Vn,Vn=f,m!==null&&(Vn===null?Vn=m:Vn.push.apply(Vn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Bo(i,0),gr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:gr(u,r,ui,!fr);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=bp+300-On(),10<f)){if(gr(u,r,ui,!fr),io(u,0,!0)!==0)break e;u.timeoutHandle=WE(wE.bind(null,u,o,Vn,Gh,Tp,r,ui,Ra,jo,fr,m,2,-0,0),f);break e}wE(u,o,Vn,Gh,Tp,r,ui,Ra,jo,fr,m,0,-0,0)}}break}while(!0);Hi(i)}function wE(i,r,o,u,f,m,E,S,x,q,K,Z,F,G){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Lu={stylesheets:null,count:0,unsuspend:QR},gE(r),Z=KR(),Z!==null)){i.cancelPendingCommit=Z(NE.bind(null,i,r,m,o,u,f,E,S,x,K,1,F,G)),gr(i,m,E,!q);return}NE(i,r,m,o,u,f,E,S,x)}function hR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Fn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gr(i,r,o,u){r&=~Ep,r&=~Ra,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-wt(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ii(i,o,r)}function Qh(){return(it&6)===0?(Du(0),!1):!0}function Cp(){if(qe!==null){if(st===0)var i=qe.return;else i=qe,Ts=Ta=null,Fm(i),Oo=null,Tu=0,i=qe;for(;i!==null;)nE(i.alternate,i),i=i.return;qe=null}}function Bo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,IR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Cp(),mt=i,qe=o=ys(i.current,null),$e=r,st=0,Yn=null,fr=!1,Lo=Jr(i,r),vp=!1,jo=ui=Ep=Ra=dr=Rt=0,Vn=Iu=null,Tp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-wt(u),m=1<<f;r|=i[f],u&=~m}return Is=r,mh(),o}function SE(i,r){Le=null,Y.H=Oh,r===fu||r===wh?(r=Bv(),st=3):r===jv?(r=Bv(),st=4):st=r===q0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Yn=r,qe===null&&(Rt=1,jh(i,si(r,i.current)))}function AE(){var i=Y.H;return Y.H=Oh,i===null?Oh:i}function CE(){var i=Y.A;return Y.A=uR,i}function Rp(){Rt=4,fr||($e&4194048)!==$e&&li.current!==null||(Lo=!0),(dr&134217727)===0&&(Ra&134217727)===0||mt===null||gr(mt,$e,ui,!1)}function xp(i,r,o){var u=it;it|=2;var f=AE(),m=CE();(mt!==i||$e!==r)&&(Gh=null,Bo(i,r)),r=!1;var E=Rt;e:do try{if(st!==0&&qe!==null){var S=qe,x=Yn;switch(st){case 8:Cp(),E=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(r=!0);var q=st;if(st=0,Yn=null,qo(i,S,x,q),o&&Lo){E=0;break e}break;default:q=st,st=0,Yn=null,qo(i,S,x,q)}}fR(),E=Rt;break}catch(K){SE(i,K)}while(!0);return r&&i.shellSuspendCounter++,Ts=Ta=null,it=u,Y.H=f,Y.A=m,qe===null&&(mt=null,$e=0,mh()),E}function fR(){for(;qe!==null;)RE(qe)}function dR(i,r){var o=it;it|=2;var u=AE(),f=CE();mt!==i||$e!==r?(Gh=null,Hh=On()+500,Bo(i,r)):Lo=Jr(i,r);e:do try{if(st!==0&&qe!==null){r=qe;var m=Yn;t:switch(st){case 1:st=0,Yn=null,qo(i,r,m,1);break;case 2:case 9:if(Uv(m)){st=0,Yn=null,xE(r);break}r=function(){st!==2&&st!==9||mt!==i||(st=7),Hi(i)},m.then(r,r);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:Uv(m)?(st=0,Yn=null,xE(r)):(st=0,Yn=null,qo(i,r,m,7));break;case 5:var E=null;switch(qe.tag){case 26:E=qe.memoizedState;case 5:case 27:var S=qe;if(!E||uT(E)){st=0,Yn=null;var x=S.sibling;if(x!==null)qe=x;else{var q=S.return;q!==null?(qe=q,Yh(q)):qe=null}break t}}st=0,Yn=null,qo(i,r,m,5);break;case 6:st=0,Yn=null,qo(i,r,m,6);break;case 8:Cp(),Rt=6;break e;default:throw Error(s(462))}}mR();break}catch(K){SE(i,K)}while(!0);return Ts=Ta=null,Y.H=u,Y.A=f,it=o,qe!==null?0:(mt=null,$e=0,mh(),Rt)}function mR(){for(;qe!==null&&!Kr();)RE(qe)}function RE(i){var r=eE(i.alternate,i,Is);i.memoizedProps=i.pendingProps,r===null?Yh(i):qe=r}function xE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=K0(o,r,r.pendingProps,r.type,void 0,$e);break;case 11:r=K0(o,r,r.pendingProps,r.type.render,r.ref,$e);break;case 5:Fm(r);default:nE(o,r),r=qe=Iv(r,Is),r=eE(o,r,Is)}i.memoizedProps=i.pendingProps,r===null?Yh(i):qe=r}function qo(i,r,o,u){Ts=Ta=null,Fm(r),Oo=null,Tu=0;var f=r.return;try{if(iR(i,f,r,o,$e)){Rt=1,jh(i,si(o,i.current)),qe=null;return}}catch(m){if(f!==null)throw qe=f,m;Rt=1,jh(i,si(o,i.current)),qe=null;return}r.flags&32768?(Je||u===1?i=!0:Lo||($e&536870912)!==0?i=!1:(fr=i=!0,(u===2||u===9||u===3||u===6)&&(u=li.current,u!==null&&u.tag===13&&(u.flags|=16384))),IE(r,i)):Yh(r)}function Yh(i){var r=i;do{if((r.flags&32768)!==0){IE(r,fr);return}i=r.return;var o=rR(r.alternate,r,Is);if(o!==null){qe=o;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=i}while(r!==null);Rt===0&&(Rt=5)}function IE(i,r){do{var o=aR(i.alternate,i);if(o!==null){o.flags&=32767,qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){qe=i;return}qe=i=o}while(i!==null);Rt=6,qe=null}function NE(i,r,o,u,f,m,E,S,x){i.cancelPendingCommit=null;do Kh();while(fn!==0);if((it&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=ym,Bl(i,o,m,E,S,x),i===mt&&(qe=mt=null,$e=0),Uo=r,pr=i,zo=o,wp=m,Sp=f,EE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,yR(pi,function(){return PE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=ne.p,ne.p=2,E=it,it|=4;try{oR(i,r,o)}finally{it=E,ne.p=f,Y.T=u}}fn=1,DE(),kE(),OE()}}function DE(){if(fn===1){fn=0;var i=pr,r=Uo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=it;it|=4;try{dE(r,i);var m=zp,E=vv(i.containerInfo),S=m.focusedElem,x=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&yv(S.ownerDocument.documentElement,S)){if(x!==null&&dm(S)){var q=x.start,K=x.end;if(K===void 0&&(K=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var G=F.getSelection(),Re=S.textContent.length,we=Math.min(x.start,Re),ht=x.end===void 0?we:Math.min(x.end,Re);!G.extend&&we>ht&&(E=ht,ht=we,we=E);var j=_v(S,we),O=_v(S,ht);if(j&&O&&(G.rangeCount!==1||G.anchorNode!==j.node||G.anchorOffset!==j.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(j.node,j.offset),G.removeAllRanges(),we>ht?(G.addRange(z),G.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),G.addRange(z))}}}}for(Z=[],G=S;G=G.parentNode;)G.nodeType===1&&Z.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var X=Z[S];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}of=!!Up,zp=Up=null}finally{it=f,ne.p=u,Y.T=o}}i.current=r,fn=2}}function kE(){if(fn===2){fn=0;var i=pr,r=Uo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=it;it|=4;try{uE(i,r.alternate,r)}finally{it=f,ne.p=u,Y.T=o}}fn=3}}function OE(){if(fn===4||fn===3){fn=0,no();var i=pr,r=Uo,o=zo,u=EE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?fn=5:(fn=0,Uo=pr=null,ME(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(mr=null),so(o),r=r.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Te,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=ne.p,ne.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,ne.p=f}}(zo&3)!==0&&Kh(),Hi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Ap?Nu++:(Nu=0,Ap=i):Nu=0,Du(0)}}function ME(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,cu(r)))}function Kh(i){return DE(),kE(),OE(),PE()}function PE(){if(fn!==5)return!1;var i=pr,r=wp;wp=0;var o=so(zo),u=Y.T,f=ne.p;try{ne.p=32>o?32:o,Y.T=null,o=Sp,Sp=null;var m=pr,E=zo;if(fn=0,Uo=pr=null,zo=0,(it&6)!==0)throw Error(s(331));var S=it;if(it|=4,yE(m.current),pE(m,m.current,E,o),it=S,Du(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Te,m)}catch{}return!0}finally{ne.p=f,Y.T=u,ME(i,r)}}function VE(i,r,o){r=si(o,r),r=ip(i.stateNode,r,2),i=rr(i,r,2),i!==null&&(os(i,2),Hi(i))}function ft(i,r,o){if(i.tag===3)VE(i,i,o);else for(;r!==null;){if(r.tag===3){VE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){i=si(o,i),o=z0(2),u=rr(r,o,2),u!==null&&(B0(o,u,r,i),os(u,2),Hi(u));break}}r=r.return}}function Ip(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new cR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(vp=!0,f.add(o),i=pR.bind(null,i,r,o),r.then(i,i))}function pR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,mt===i&&($e&o)===o&&(Rt===4||Rt===3&&($e&62914560)===$e&&300>On()-bp?(it&2)===0&&Bo(i,0):Ep|=o,jo===$e&&(jo=0)),Hi(i)}function LE(i,r){r===0&&(r=zl()),i=wo(i,r),i!==null&&(os(i,r),Hi(i))}function gR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),LE(i,o)}function _R(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),LE(i,o)}function yR(i,r){return ss(i,r)}var $h=null,Fo=null,Np=!1,Xh=!1,Dp=!1,xa=0;function Hi(i){i!==Fo&&i.next===null&&(Fo===null?$h=Fo=i:Fo=Fo.next=i),Xh=!0,Np||(Np=!0,ER())}function Du(i,r){if(!Dp&&Xh){Dp=!0;do for(var o=!1,u=$h;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-wt(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,BE(u,m))}else m=$e,m=io(u,u===mt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Jr(u,m)||(o=!0,BE(u,m));u=u.next}while(o);Dp=!1}}function vR(){jE()}function jE(){Xh=Np=!1;var i=0;xa!==0&&(xR()&&(i=xa),xa=0);for(var r=On(),o=null,u=$h;u!==null;){var f=u.next,m=UE(u,r);m===0?(u.next=null,o===null?$h=f:o.next=f,f===null&&(Fo=o)):(o=u,(i!==0||(m&3)!==0)&&(Xh=!0)),u=f}Du(i)}function UE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-wt(m),S=1<<E,x=f[E];x===-1?((S&o)===0||(S&u)!==0)&&(f[E]=jl(S,r)):x<=r&&(i.expiredLanes|=S),m&=~S}if(r=mt,o=$e,o=io(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(st===2||st===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&rs(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Jr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&rs(u),so(o)){case 2:case 8:o=mi;break;case 32:o=pi;break;case 268435456:o=Ys;break;default:o=pi}return u=zE.bind(null,i),o=ss(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&rs(u),i.callbackPriority=2,i.callbackNode=null,2}function zE(i,r){if(fn!==0&&fn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Kh()&&i.callbackNode!==o)return null;var u=$e;return u=io(i,i===mt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(bE(i,u,r),UE(i,On()),i.callbackNode!=null&&i.callbackNode===o?zE.bind(null,i):null)}function BE(i,r){if(Kh())return null;bE(i,r,!0)}function ER(){NR(function(){(it&6)!==0?ss($r,vR):jE()})}function kp(){return xa===0&&(xa=Ul()),xa}function qE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:co(""+i)}function FE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function TR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=qE((f[Lt]||null).action),E=u.submitter;E&&(r=(r=E[Lt]||null)?qE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new ho("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(xa!==0){var x=E?FE(f,E):new FormData(f);Zm(o,{pending:!0,data:x,method:f.method,action:m},null,x)}}else typeof m=="function"&&(S.preventDefault(),x=E?FE(f,E):new FormData(f),Zm(o,{pending:!0,data:x,method:f.method,action:m},m,x))},currentTarget:f}]})}}for(var Op=0;Op<_m.length;Op++){var Mp=_m[Op],bR=Mp.toLowerCase(),wR=Mp[0].toUpperCase()+Mp.slice(1);vi(bR,"on"+wR)}vi(bv,"onAnimationEnd"),vi(wv,"onAnimationIteration"),vi(Sv,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(zC,"onTransitionRun"),vi(BC,"onTransitionStart"),vi(qC,"onTransitionCancel"),vi(Av,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_i("onBeforeInput",["compositionend","keypress","textInput","paste"]),_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ku));function HE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],x=S.instance,q=S.currentTarget;if(S=S.listener,x!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Lh(K)}f.currentTarget=null,m=x}else for(E=0;E<u.length;E++){if(S=u[E],x=S.instance,q=S.currentTarget,S=S.listener,x!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Lh(K)}f.currentTarget=null,m=x}}}}function Fe(i,r){var o=r[Fl];o===void 0&&(o=r[Fl]=new Set);var u=i+"__bubble";o.has(u)||(GE(r,i,2,!1),o.add(u))}function Pp(i,r,o){var u=0;r&&(u|=4),GE(o,i,u,r)}var Wh="_reactListening"+Math.random().toString(36).slice(2);function Vp(i){if(!i[Wh]){i[Wh]=!0,Hl.forEach(function(o){o!=="selectionchange"&&(SR.has(o)||Pp(o,!1,i),Pp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Wh]||(r[Wh]=!0,Pp("selectionchange",!1,r))}}function GE(i,r,o,u){switch(pT(r)){case 2:var f=WR;break;case 8:f=ZR;break;default:f=Xp}o=f.bind(null,r,o,i),f=void 0,!ni||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Lp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var x=E.tag;if((x===3||x===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=ls(S),E===null)return;if(x=E.tag,x===5||x===6||x===26||x===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Jc(function(){var q=m,K=ti(o),Z=[];e:{var F=Cv.get(i);if(F!==void 0){var G=ho,Re=i;switch(i){case"keypress":if(Pi(o)===0)break e;case"keydown":case"keyup":G=yo;break;case"focusin":Re="focus",G=po;break;case"focusout":Re="blur",G=po;break;case"beforeblur":case"afterblur":G=po;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=um;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=oh;break;case bv:case wv:case Sv:G=go;break;case Av:G=uh;break;case"scroll":case"scrollend":G=eh;break;case"wheel":G=vo;break;case"copy":case"cut":case"paste":G=_o;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=nu;break;case"toggle":case"beforetoggle":G=hh}var we=(r&4)!==0,ht=!we&&(i==="scroll"||i==="scrollend"),j=we?F!==null?F+"Capture":null:F;we=[];for(var O=q,z;O!==null;){var X=O;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||j===null||(X=oa(O,j),X!=null&&we.push(Ou(O,X,z))),ht)break;O=O.return}0<we.length&&(F=new G(F,Re,null,o,K),Z.push({event:F,listeners:we}))}}if((r&7)===0){e:{if(F=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",F&&o!==fs&&(Re=o.relatedTarget||o.fromElement)&&(ls(Re)||Re[Jn]))break e;if((G||F)&&(F=K.window===K?K:(F=K.ownerDocument)?F.defaultView||F.parentWindow:window,G?(Re=o.relatedTarget||o.toElement,G=q,Re=Re?ls(Re):null,Re!==null&&(ht=l(Re),we=Re.tag,Re!==ht||we!==5&&we!==27&&we!==6)&&(Re=null)):(G=null,Re=q),G!==Re)){if(we=ii,X="onMouseLeave",j="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(we=nu,X="onPointerLeave",j="onPointerEnter",O="pointer"),ht=G==null?F:Di(G),z=Re==null?F:Di(Re),F=new we(X,O+"leave",G,o,K),F.target=ht,F.relatedTarget=z,X=null,ls(K)===q&&(we=new we(j,O+"enter",Re,o,K),we.target=z,we.relatedTarget=ht,X=we),ht=X,G&&Re)t:{for(we=G,j=Re,O=0,z=we;z;z=Ho(z))O++;for(z=0,X=j;X;X=Ho(X))z++;for(;0<O-z;)we=Ho(we),O--;for(;0<z-O;)j=Ho(j),z--;for(;O--;){if(we===j||j!==null&&we===j.alternate)break t;we=Ho(we),j=Ho(j)}we=null}else we=null;G!==null&&QE(Z,F,G,we,!1),Re!==null&&ht!==null&&QE(Z,ht,Re,we,!0)}}e:{if(F=q?Di(q):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var me=hv;else if($t(F))if(fv)me=LC;else{me=PC;var Ue=MC}else G=F.nodeName,!G||G.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&$l(q.elementType)&&(me=hv):me=VC;if(me&&(me=me(i,q))){_s(Z,me,o,K);break e}Ue&&Ue(i,F,q),i==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&er(F,"number",F.value)}switch(Ue=q?Di(q):window,i){case"focusin":($t(Ue)||Ue.contentEditable==="true")&&(Eo=Ue,mm=q,ru=null);break;case"focusout":ru=mm=Eo=null;break;case"mousedown":pm=!0;break;case"contextmenu":case"mouseup":case"dragend":pm=!1,Ev(Z,o,K);break;case"selectionchange":if(UC)break;case"keydown":case"keyup":Ev(Z,o,K)}var _e;if(ji)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ye?Q(i,o)&&(Se="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(v&&o.locale!=="ko"&&(Ye||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ye&&(_e=Wl()):(Mi=K,tr="value"in Mi?Mi.value:Mi.textContent,Ye=!0)),Ue=Zh(q,Se),0<Ue.length&&(Se=new eu(Se,i,null,o,K),Z.push({event:Se,listeners:Ue}),_e?Se.data=_e:(_e=se(o),_e!==null&&(Se.data=_e)))),(_e=_?Kt(i,o):Ke(i,o))&&(Se=Zh(q,"onBeforeInput"),0<Se.length&&(Ue=new eu("onBeforeInput","beforeinput",null,o,K),Z.push({event:Ue,listeners:Se}),Ue.data=_e)),TR(Z,i,q,o,K)}HE(Z,r)})}function Ou(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Zh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=oa(i,o),f!=null&&u.unshift(Ou(i,f,m)),f=oa(i,r),f!=null&&u.push(Ou(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Ho(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function QE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,x=S.alternate,q=S.stateNode;if(S=S.tag,x!==null&&x===u)break;S!==5&&S!==26&&S!==27||q===null||(x=q,f?(q=oa(o,m),q!=null&&E.unshift(Ou(o,q,x))):f||(q=oa(o,m),q!=null&&E.push(Ou(o,q,x)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var AR=/\r\n?/g,CR=/\u0000|\uFFFD/g;function YE(i){return(typeof i=="string"?i:""+i).replace(AR,`
`).replace(CR,"")}function KE(i,r){return r=YE(r),YE(i)===r}function Jh(){}function ct(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ei(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ei(i,""+u);break;case"className":ki(i,"class",u);break;case"tabIndex":ki(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(i,o,u);break;case"style":Kl(i,u,m);break;case"data":if(r!=="object"){ki(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=co(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ct(i,r,"name",f.name,f,null),ct(i,r,"formEncType",f.formEncType,f,null),ct(i,r,"formMethod",f.formMethod,f,null),ct(i,r,"formTarget",f.formTarget,f,null)):(ct(i,r,"encType",f.encType,f,null),ct(i,r,"method",f.method,f,null),ct(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=co(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Jh);break;case"onScroll":u!=null&&Fe("scroll",i);break;case"onScrollEnd":u!=null&&Fe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=co(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Fe("beforetoggle",i),Fe("toggle",i),Js(i,"popover",u);break;case"xlinkActuate":un(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":un(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":un(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":un(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":un(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":un(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":un(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":un(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":un(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=om.get(o)||o,Js(i,o,u))}}function jp(i,r,o,u,f,m){switch(o){case"style":Kl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ei(i,u):(typeof u=="number"||typeof u=="bigint")&&ei(i,""+u);break;case"onScroll":u!=null&&Fe("scroll",i);break;case"onScrollEnd":u!=null&&Fe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Jh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ro.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Lt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Js(i,o,u)}}}function dn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",i),Fe("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ct(i,r,m,E,o,null)}}f&&ct(i,r,"srcSet",o.srcSet,o,null),u&&ct(i,r,"src",o.src,o,null);return;case"input":Fe("invalid",i);var S=m=E=f=null,x=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":x=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ct(i,r,u,K,o,null)}}sa(i,m,S,x,q,E,f,!1),uo(i);return;case"select":Fe("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ct(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?hs(i,!!u,r,!1):o!=null&&hs(i,!!u,o,!0);return;case"textarea":Fe("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ct(i,r,E,S,o,null)}ra(i,u,f,m),uo(i);return;case"option":for(x in o)if(o.hasOwnProperty(x)&&(u=o[x],u!=null))switch(x){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ct(i,r,x,u,o,null)}return;case"dialog":Fe("beforetoggle",i),Fe("toggle",i),Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":Fe("load",i);break;case"video":case"audio":for(u=0;u<ku.length;u++)Fe(ku[u],i);break;case"image":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"embed":case"source":case"link":Fe("error",i),Fe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ct(i,r,q,u,o,null)}return;default:if($l(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&jp(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ct(i,r,S,u,o,null))}function RR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,x=null,q=null,K=null;for(G in o){var Z=o[G];if(o.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":x=Z;default:u.hasOwnProperty(G)||ct(i,r,G,null,u,Z)}}for(var F in u){var G=u[F];if(Z=o[F],u.hasOwnProperty(F)&&(G!=null||Z!=null))switch(F){case"type":m=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":K=G;break;case"value":E=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==Z&&ct(i,r,F,G,u,Z)}}qn(i,E,S,x,q,K,m,f);return;case"select":G=E=S=F=null;for(m in o)if(x=o[m],o.hasOwnProperty(m)&&x!=null)switch(m){case"value":break;case"multiple":G=x;default:u.hasOwnProperty(m)||ct(i,r,m,null,u,x)}for(f in u)if(m=u[f],x=o[f],u.hasOwnProperty(f)&&(m!=null||x!=null))switch(f){case"value":F=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==x&&ct(i,r,f,m,u,x)}r=S,o=E,u=G,F!=null?hs(i,!!o,F,!1):!!u!=!!o&&(r!=null?hs(i,!!o,r,!0):hs(i,!!o,o?[]:"",!1));return;case"textarea":G=F=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ct(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":F=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ct(i,r,E,f,u,m)}lt(i,F,G);return;case"option":for(var Re in o)if(F=o[Re],o.hasOwnProperty(Re)&&F!=null&&!u.hasOwnProperty(Re))switch(Re){case"selected":i.selected=!1;break;default:ct(i,r,Re,null,u,F)}for(x in u)if(F=u[x],G=o[x],u.hasOwnProperty(x)&&F!==G&&(F!=null||G!=null))switch(x){case"selected":i.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:ct(i,r,x,F,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)F=o[we],o.hasOwnProperty(we)&&F!=null&&!u.hasOwnProperty(we)&&ct(i,r,we,null,u,F);for(q in u)if(F=u[q],G=o[q],u.hasOwnProperty(q)&&F!==G&&(F!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:ct(i,r,q,F,u,G)}return;default:if($l(r)){for(var ht in o)F=o[ht],o.hasOwnProperty(ht)&&F!==void 0&&!u.hasOwnProperty(ht)&&jp(i,r,ht,void 0,u,F);for(K in u)F=u[K],G=o[K],!u.hasOwnProperty(K)||F===G||F===void 0&&G===void 0||jp(i,r,K,F,u,G);return}}for(var j in o)F=o[j],o.hasOwnProperty(j)&&F!=null&&!u.hasOwnProperty(j)&&ct(i,r,j,null,u,F);for(Z in u)F=u[Z],G=o[Z],!u.hasOwnProperty(Z)||F===G||F==null&&G==null||ct(i,r,Z,F,u,G)}var Up=null,zp=null;function ef(i){return i.nodeType===9?i:i.ownerDocument}function $E(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function XE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Bp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qp=null;function xR(){var i=window.event;return i&&i.type==="popstate"?i===qp?!1:(qp=i,!0):(qp=null,!1)}var WE=typeof setTimeout=="function"?setTimeout:void 0,IR=typeof clearTimeout=="function"?clearTimeout:void 0,ZE=typeof Promise=="function"?Promise:void 0,NR=typeof queueMicrotask=="function"?queueMicrotask:typeof ZE<"u"?function(i){return ZE.resolve(null).then(i).catch(DR)}:WE;function DR(i){setTimeout(function(){throw i})}function _r(i){return i==="head"}function JE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Mu(E.documentElement),o&2&&Mu(E.body),o&4)for(o=E.head,Mu(o),E=o.firstChild;E;){var S=E.nextSibling,x=E.nodeName;E[ea]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),qu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);qu(r)}function Fp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Fp(o),Zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function kR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[ea])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ti(i.nextSibling),i===null)break}return null}function OR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ti(i.nextSibling),i===null))return null;return i}function Hp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function MR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ti(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Gp=null;function eT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function tT(i,r,o){switch(r=ef(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Mu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Zs(i)}var ci=new Map,nT=new Set;function tf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Ns=ne.d;ne.d={f:PR,r:VR,D:LR,C:jR,L:UR,m:zR,X:qR,S:BR,M:FR};function PR(){var i=Ns.f(),r=Qh();return i||r}function VR(i){var r=Ni(i);r!==null&&r.tag===5&&r.type==="form"?b0(r):Ns.r(i)}var Go=typeof document>"u"?null:document;function iT(i,r,o){var u=Go;if(u&&typeof r=="string"&&r){var f=jt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),nT.has(f)||(nT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),dn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function LR(i){Ns.D(i),iT("dns-prefetch",i,null)}function jR(i,r){Ns.C(i,r),iT("preconnect",i,r)}function UR(i,r,o){Ns.L(i,r,o);var u=Go;if(u&&i&&r){var f='link[rel="preload"][as="'+jt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+jt(o.imageSizes)+'"]')):f+='[href="'+jt(i)+'"]';var m=f;switch(r){case"style":m=Qo(i);break;case"script":m=Yo(i)}ci.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ci.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Pu(m))||r==="script"&&u.querySelector(Vu(m))||(r=u.createElement("link"),dn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function zR(i,r){Ns.m(i,r);var o=Go;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+jt(u)+'"][href="'+jt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Yo(i)}if(!ci.has(m)&&(i=y({rel:"modulepreload",href:i},r),ci.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Vu(m)))return}u=o.createElement("link"),dn(u,"link",i),Nt(u),o.head.appendChild(u)}}}function BR(i,r,o){Ns.S(i,r,o);var u=Go;if(u&&i){var f=Rn(u).hoistableStyles,m=Qo(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Pu(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ci.get(m))&&Qp(i,o);var x=E=u.createElement("link");Nt(x),dn(x,"link",i),x._p=new Promise(function(q,K){x.onload=q,x.onerror=K}),x.addEventListener("load",function(){S.loading|=1}),x.addEventListener("error",function(){S.loading|=2}),S.loading|=4,nf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function qR(i,r){Ns.X(i,r);var o=Go;if(o&&i){var u=Rn(o).hoistableScripts,f=Yo(i),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(i=y({src:i,async:!0},r),(r=ci.get(f))&&Yp(i,r),m=o.createElement("script"),Nt(m),dn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function FR(i,r){Ns.M(i,r);var o=Go;if(o&&i){var u=Rn(o).hoistableScripts,f=Yo(i),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=ci.get(f))&&Yp(i,r),m=o.createElement("script"),Nt(m),dn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function sT(i,r,o,u){var f=(f=Ae.current)?tf(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Qo(o.href),o=Rn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Qo(o.href);var m=Rn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Pu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ci.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(i,o),m||HR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Yo(o),o=Rn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Qo(i){return'href="'+jt(i)+'"'}function Pu(i){return'link[rel="stylesheet"]['+i+"]"}function rT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function HR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),dn(r,"link",o),Nt(r),i.head.appendChild(r))}function Yo(i){return'[src="'+jt(i)+'"]'}function Vu(i){return"script[async]"+i}function aT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+jt(o.href)+'"]');if(u)return r.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Nt(u),dn(u,"style",f),nf(u,o.precedence,i),r.instance=u;case"stylesheet":f=Qo(o.href);var m=i.querySelector(Pu(f));if(m)return r.state.loading|=4,r.instance=m,Nt(m),m;u=rT(o),(f=ci.get(f))&&Qp(u,f),m=(i.ownerDocument||i).createElement("link"),Nt(m);var E=m;return E._p=new Promise(function(S,x){E.onload=S,E.onerror=x}),dn(m,"link",u),r.state.loading|=4,nf(m,o.precedence,i),r.instance=m;case"script":return m=Yo(o.src),(f=i.querySelector(Vu(m)))?(r.instance=f,Nt(f),f):(u=o,(f=ci.get(m))&&(u=y({},o),Yp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),dn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,nf(u,o.precedence,i));return r.instance}function nf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Qp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Yp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var sf=null;function oT(i,r,o){if(sf===null){var u=new Map,f=sf=new Map;f.set(o,u)}else f=sf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[ea]||m[Yt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function lT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function GR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function uT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Lu=null;function QR(){}function YR(i,r,o){if(Lu===null)throw Error(s(475));var u=Lu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Qo(o.href),m=i.querySelector(Pu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=rf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Nt(m);return}m=i.ownerDocument||i,o=rT(o),(f=ci.get(f))&&Qp(o,f),m=m.createElement("link"),Nt(m);var E=m;E._p=new Promise(function(S,x){E.onload=S,E.onerror=x}),dn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=rf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function KR(){if(Lu===null)throw Error(s(475));var i=Lu;return i.stylesheets&&i.count===0&&Kp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Kp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function rf(){if(this.count--,this.count===0){if(this.stylesheets)Kp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var af=null;function Kp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,af=new Map,r.forEach($R,i),af=null,rf.call(i))}function $R(i,r){if(!(r.state.loading&4)){var o=af.get(i);if(o)var u=o.get(null);else{o=new Map,af.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=rf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var ju={$$typeof:ue,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function XR(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function cT(i,r,o,u,f,m,E,S,x,q,K,Z){return i=new XR(i,r,o,E,S,x,q,Z),r=1,m===!0&&(r|=24),m=Hn(3,null,null,r),i.current=m,m.stateNode=i,r=Im(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Om(m),i}function hT(i){return i?(i=So,i):So}function fT(i,r,o,u,f,m){f=hT(f),u.context===null?u.context=f:u.pendingContext=f,u=sr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=rr(i,u,r),o!==null&&($n(o,i,r),mu(o,i,r))}function dT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function $p(i,r){dT(i,r),(i=i.alternate)&&dT(i,r)}function mT(i){if(i.tag===13){var r=wo(i,67108864);r!==null&&$n(r,i,67108864),$p(i,67108864)}}var of=!0;function WR(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=2,Xp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function ZR(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=8,Xp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function Xp(i,r,o,u){if(of){var f=Wp(u);if(f===null)Lp(i,r,u,lf,o),gT(i,u);else if(ex(f,i,r,o,u))u.stopPropagation();else if(gT(i,u),r&4&&-1<JR.indexOf(i)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=gi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var x=1<<31-wt(E);S.entanglements[1]|=x,E&=~x}Hi(m),(it&6)===0&&(Hh=On()+500,Du(0))}}break;case 13:S=wo(m,2),S!==null&&$n(S,m,2),Qh(),$p(m,2)}if(m=Wp(u),m===null&&Lp(i,r,u,lf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Lp(i,r,u,null,o)}}function Wp(i){return i=ti(i),Zp(i)}var lf=null;function Zp(i){if(lf=null,i=ls(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return lf=i,null}function pT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vl()){case $r:return 2;case mi:return 8;case pi:case Xr:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Jp=!1,yr=null,vr=null,Er=null,Uu=new Map,zu=new Map,Tr=[],JR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gT(i,r){switch(i){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Uu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(r.pointerId)}}function Bu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&mT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function ex(i,r,o,u,f){switch(r){case"focusin":return yr=Bu(yr,i,r,o,u,f),!0;case"dragenter":return vr=Bu(vr,i,r,o,u,f),!0;case"mouseover":return Er=Bu(Er,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Uu.set(m,Bu(Uu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,zu.set(m,Bu(zu.get(m)||null,i,r,o,u,f)),!0}return!1}function _T(i){var r=ls(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Qc(i.priority,function(){if(o.tag===13){var u=Kn();u=$s(u);var f=wo(o,u);f!==null&&$n(f,o,u),$p(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function uf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Wp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);fs=u,o.target.dispatchEvent(u),fs=null}else return r=Ni(o),r!==null&&mT(r),i.blockedOn=o,!1;r.shift()}return!0}function yT(i,r,o){uf(i)&&o.delete(r)}function tx(){Jp=!1,yr!==null&&uf(yr)&&(yr=null),vr!==null&&uf(vr)&&(vr=null),Er!==null&&uf(Er)&&(Er=null),Uu.forEach(yT),zu.forEach(yT)}function cf(i,r){i.blockedOn===r&&(i.blockedOn=null,Jp||(Jp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,tx)))}var hf=null;function vT(i){hf!==i&&(hf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){hf===i&&(hf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Zp(u||o)===null)continue;break}var m=Ni(o);m!==null&&(i.splice(r,3),r-=3,Zm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function qu(i){function r(x){return cf(x,i)}yr!==null&&cf(yr,i),vr!==null&&cf(vr,i),Er!==null&&cf(Er,i),Uu.forEach(r),zu.forEach(r);for(var o=0;o<Tr.length;o++){var u=Tr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Tr.length&&(o=Tr[0],o.blockedOn===null);)_T(o),o.blockedOn===null&&Tr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Lt]||null;if(typeof m=="function")E||vT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Lt]||null)S=E.formAction;else if(Zp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),vT(o)}}}function eg(i){this._internalRoot=i}ff.prototype.render=eg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Kn();fT(o,u,i,r,null,null)},ff.prototype.unmount=eg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;fT(i.current,2,null,i,null,null),Qh(),r[Jn]=null}};function ff(i){this._internalRoot=i}ff.prototype.unstable_scheduleHydration=function(i){if(i){var r=Xs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Tr.length&&r!==0&&r<Tr[o].priority;o++);Tr.splice(o,0,i),o===0&&_T(i)}};var ET=e.version;if(ET!=="19.1.1")throw Error(s(527,ET,"19.1.1"));ne.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var nx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{Te=df.inject(nx),Oe=df}catch{}}return Hu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=V0,m=L0,E=j0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=cT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Jn]=r.current,Vp(i),new eg(r)},Hu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=V0,E=L0,S=j0,x=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(x=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=cT(i,1,!0,r,o??null,u,f,m,E,S,x,q),r.context=hT(null),o=r.current,u=Kn(),u=$s(u),f=sr(u),f.callback=null,rr(o,f,u),o=u,r.current.lanes=o,os(r,o),Hi(r),i[Jn]=r.current,Vp(i),new ff(r)},Hu.version="19.1.1",Hu}var NT;function fx(){if(NT)return ig.exports;NT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ig.exports=hx(),ig.exports}var dx=fx();const mx=()=>{};var DT={};/**
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
 */const Kw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const re=function(n,e){if(!n)throw Sl(e)},Sl=function(n){return new Error("Firebase Database ("+Kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const $w=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},px=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,b=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,D=g&63;p||(D=64,c||(w=64)),s.push(t[y],t[b],t[w],t[D])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($w(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):px(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new gx;const w=l<<2|d>>4;if(s.push(w),g!==64){const D=d<<4&240|g>>2;if(s.push(D),b!==64){const V=g<<6&192|b;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(n){const e=$w(n);return b_.encodeByteArray(e,!0)},Of=function(n){return Xw(n).replace(/\./g,"")},Mf=function(n){try{return b_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _x(n){return Ww(void 0,n)}function Ww(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yx(t)||(n[t]=Ww(n[t],e[t]));return n}function yx(n){return n!=="__proto__"}/**
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
 */function vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ex=()=>vx().__FIREBASE_DEFAULTS__,Tx=()=>{if(typeof process>"u"||typeof DT>"u")return;const n=DT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},vd=()=>{try{return mx()||Ex()||Tx()||bx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zw=n=>vd()?.emulatorHosts?.[n],Jw=n=>{const e=Zw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},e1=()=>vd()?.config,t1=n=>vd()?.[`_${n}`];/**
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
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Hr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function n1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Of(JSON.stringify(t)),Of(JSON.stringify(c)),""].join(".")}const Ju={};function wx(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ju))Ju[e]?n.emulator.push(e):n.prod.push(e);return n}function Sx(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kT=!1;function S_(n,e){if(typeof window>"u"||typeof document>"u"||!Hr(window.location.host)||Ju[n]===e||Ju[n]||kT)return;Ju[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=wx().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,D){w.setAttribute("width","24"),w.setAttribute("id",D),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{kT=!0,c()},w}function y(w,D){w.setAttribute("id",D),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=Sx(s),D=t("text"),V=document.getElementById(D)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),ie=t("preprendIcon"),ae=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ue=w.element;d(ue),y(B,H);const ye=g();p(ae,ie),ue.append(ae,V,B,ye),document.body.appendChild(ue)}l?(V.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function Ax(){const n=vd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xx(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ix(){return Kw.NODE_ADMIN===!0}function Nx(){return!Ax()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dx(){try{return typeof indexedDB=="object"}catch{return!1}}function kx(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Ox="FirebaseError";class Gs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ox,Object.setPrototypeOf(this,Gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rc.prototype.create)}}class Rc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Mx(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Gs(a,d,s)}}function Mx(n,e){return n.replace(Px,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Px=/\{\$([^}]+)}/g;/**
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
 */function hc(n){return JSON.parse(n)}function ln(n){return JSON.stringify(n)}/**
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
 */const s1=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=hc(Mf(l[0])||""),t=hc(Mf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},Vx=function(n){const e=s1(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lx=function(n){const e=s1(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ns(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ll(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(OT(l)&&OT(c)){if(!Zi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function OT(n){return n!==null&&typeof n=="object"}/**
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
 */function Al(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const w=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let b=0;b<80;b++){b<40?b<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):b<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const w=(a<<5|a>>>27)+g+p+y+s[b]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function Ux(n,e){const t=new zx(n,e);return t.subscribe.bind(t)}class zx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Bx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=og),a.error===void 0&&(a.error=og),a.complete===void 0&&(a.complete=og);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function og(){}function ul(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qx=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,re(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Ed=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gt(n){return n&&n._delegate?n._delegate:n}class Pr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ia="[DEFAULT]";/**
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
 */class Fx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gx(e))try{this.getOrInitializeService({instanceIdentifier:Ia})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ia){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ia){return this.instances.has(e)}getOptions(e=Ia){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hx(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ia){return this.component?this.component.multipleInstances?e:Ia:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hx(n){return n===Ia?void 0:n}function Gx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var He;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(He||(He={}));const Yx={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},Kx=He.INFO,$x={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},Xx=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=$x[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=Kx,this._logHandler=Xx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const Wx=(n,e)=>e.some(t=>n instanceof t);let MT,PT;function Zx(){return MT||(MT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jx(){return PT||(PT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r1=new WeakMap,Ng=new WeakMap,a1=new WeakMap,lg=new WeakMap,C_=new WeakMap;function eI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(xr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&r1.set(t,n)}).catch(()=>{}),C_.set(e,n),e}function tI(n){if(Ng.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Ng.set(n,e)}let Dg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ng.get(n);if(e==="objectStoreNames")return n.objectStoreNames||a1.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nI(n){Dg=n(Dg)}function iI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ug(this),e,...t);return a1.set(s,e.sort?e.sort():[e]),xr(s)}:Jx().includes(n)?function(...e){return n.apply(ug(this),e),xr(r1.get(this))}:function(...e){return xr(n.apply(ug(this),e))}}function sI(n){return typeof n=="function"?iI(n):(n instanceof IDBTransaction&&tI(n),Wx(n,Zx())?new Proxy(n,Dg):n)}function xr(n){if(n instanceof IDBRequest)return eI(n);if(lg.has(n))return lg.get(n);const e=sI(n);return e!==n&&(lg.set(n,e),C_.set(e,n)),e}const ug=n=>C_.get(n);function rI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=xr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(xr(c.result),p.oldVersion,p.newVersion,xr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const aI=["get","getKey","getAll","getAllKeys","count"],oI=["put","add","delete","clear"],cg=new Map;function VT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cg.get(e))return cg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=oI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||aI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return cg.set(e,l),l}nI(n=>({...n,get:(e,t,s)=>VT(e,t)||n.get(e,t,s),has:(e,t)=>!!VT(e,t)||n.has(e,t)}));/**
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
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uI(n){return n.getComponent()?.type==="VERSION"}const kg="@firebase/app",LT="0.14.1";/**
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
 */const Us=new Td("@firebase/app"),cI="@firebase/app-compat",hI="@firebase/analytics-compat",fI="@firebase/analytics",dI="@firebase/app-check-compat",mI="@firebase/app-check",pI="@firebase/auth",gI="@firebase/auth-compat",_I="@firebase/database",yI="@firebase/data-connect",vI="@firebase/database-compat",EI="@firebase/functions",TI="@firebase/functions-compat",bI="@firebase/installations",wI="@firebase/installations-compat",SI="@firebase/messaging",AI="@firebase/messaging-compat",CI="@firebase/performance",RI="@firebase/performance-compat",xI="@firebase/remote-config",II="@firebase/remote-config-compat",NI="@firebase/storage",DI="@firebase/storage-compat",kI="@firebase/firestore",OI="@firebase/ai",MI="@firebase/firestore-compat",PI="firebase",VI="12.1.0";/**
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
 */const Og="[DEFAULT]",LI={[kg]:"fire-core",[cI]:"fire-core-compat",[fI]:"fire-analytics",[hI]:"fire-analytics-compat",[mI]:"fire-app-check",[dI]:"fire-app-check-compat",[pI]:"fire-auth",[gI]:"fire-auth-compat",[_I]:"fire-rtdb",[yI]:"fire-data-connect",[vI]:"fire-rtdb-compat",[EI]:"fire-fn",[TI]:"fire-fn-compat",[bI]:"fire-iid",[wI]:"fire-iid-compat",[SI]:"fire-fcm",[AI]:"fire-fcm-compat",[CI]:"fire-perf",[RI]:"fire-perf-compat",[xI]:"fire-rc",[II]:"fire-rc-compat",[NI]:"fire-gcs",[DI]:"fire-gcs-compat",[kI]:"fire-fst",[MI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[PI]:"fire-js-all"};/**
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
 */const Lf=new Map,jI=new Map,Mg=new Map;function jT(n,e){try{n.container.addComponent(e)}catch(t){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ba(n){const e=n.name;if(Mg.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;Mg.set(e,n);for(const t of Lf.values())jT(t,n);for(const t of jI.values())jT(t,n);return!0}function bd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Rc("app","Firebase",UI);/**
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
 */class zI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Xa=VI;function o1(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Og,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Ir.create("bad-app-name",{appName:String(a)});if(t||(t=e1()),!t)throw Ir.create("no-options");const l=Lf.get(a);if(l){if(Zi(t,l.options)&&Zi(s,l.config))return l;throw Ir.create("duplicate-app",{appName:a})}const c=new Qx(a);for(const p of Mg.values())c.addComponent(p);const d=new zI(t,s,c);return Lf.set(a,d),d}function R_(n=Og){const e=Lf.get(n);if(!e&&n===Og&&e1())return o1();if(!e)throw Ir.create("no-app",{appName:n});return e}function Qi(n,e,t){let s=LI[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(c.join(" "));return}Ba(new Pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BI="firebase-heartbeat-database",qI=1,fc="firebase-heartbeat-store";let hg=null;function l1(){return hg||(hg=rI(BI,qI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ir.create("idb-open",{originalErrorMessage:n.message})})),hg}async function FI(n){try{const t=(await l1()).transaction(fc),s=await t.objectStore(fc).get(u1(n));return await t.done,s}catch(e){if(e instanceof Gs)Us.warn(e.message);else{const t=Ir.create("idb-get",{originalErrorMessage:e?.message});Us.warn(t.message)}}}async function UT(n,e){try{const s=(await l1()).transaction(fc,"readwrite");await s.objectStore(fc).put(e,u1(n)),await s.done}catch(t){if(t instanceof Gs)Us.warn(t.message);else{const s=Ir.create("idb-set",{originalErrorMessage:t?.message});Us.warn(s.message)}}}function u1(n){return`${n.name}!${n.options.appId}`}/**
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
 */const HI=1024,GI=30;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>GI){const a=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Us.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zT(),{heartbeatsToSend:t,unsentEntries:s}=YI(this._heartbeatsCache.heartbeats),a=Of(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Us.warn(e),""}}}function zT(){return new Date().toISOString().substring(0,10)}function YI(n,e=HI){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),BT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),BT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dx()?kx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function BT(n){return Of(JSON.stringify({version:2,heartbeats:n})).length}function $I(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function XI(n){Ba(new Pr("platform-logger",e=>new lI(e),"PRIVATE")),Ba(new Pr("heartbeat",e=>new QI(e),"PRIVATE")),Qi(kg,LT,n),Qi(kg,LT,"esm2020"),Qi("fire-js","")}XI("");var WI="firebase",ZI="12.1.0";/**
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
 */Qi(WI,ZI,"app");function c1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=c1,h1=new Rc("auth","Firebase",c1());/**
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
 */const jf=new Td("@firebase/auth");function eN(n,...e){jf.logLevel<=He.WARN&&jf.warn(`Auth (${Xa}): ${n}`,...e)}function bf(n,...e){jf.logLevel<=He.ERROR&&jf.error(`Auth (${Xa}): ${n}`,...e)}/**
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
 */function Ji(n,...e){throw I_(n,...e)}function Ai(n,...e){return I_(n,...e)}function x_(n,e,t){const s={...JI(),[e]:t};return new Rc("auth","Firebase",s).create(e,{appName:n.name})}function Nr(n){return x_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ji(n,"argument-error"),x_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return h1.create(n,...e)}function Ne(n,e,...t){if(!n)throw I_(e,...t)}function Ms(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bf(e),new Error(e)}function zs(n,e){n||Ms(e)}/**
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
 */function Pg(){return typeof self<"u"&&self.location?.href||""}function nN(){return qT()==="http:"||qT()==="https:"}function qT(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function iN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nN()||Rx()||"connection"in navigator)?navigator.onLine:!0}function sN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xc{constructor(e,t){this.shortDelay=e,this.longDelay=t,zs(t>e,"Short delay should be less than long delay!"),this.isMobile=A_()||i1()}get(){return iN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function N_(n,e){zs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class f1{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oN=new xc(3e4,6e4);function wd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Cl(n,e,t,s,a={}){return d1(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Al({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return Cx()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(g.credentials="include"),f1.fetch()(await p1(n,n.config.apiHost,t,d),g)})}async function d1(n,e,t){n._canInitEmulator=!1;const s={...rN,...e};try{const a=new lN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw mf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw mf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw mf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw x_(n,y,g);Ji(n,y)}}catch(a){if(a instanceof Gs)throw a;Ji(n,"network-request-failed",{message:String(a)})}}async function m1(n,e,t,s,a={}){const l=await Cl(n,e,t,s,a);return"mfaPendingCredential"in l&&Ji(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function p1(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?N_(n.config,a):`${n.config.apiScheme}://${a}`;return aN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class lN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ai(this.auth,"network-request-failed")),oN.get())})}}function mf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Ai(n,e,s);return a.customData._tokenResponse=t,a}/**
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
 */async function uN(n,e){return Cl(n,"POST","/v1/accounts:delete",e)}async function Uf(n,e){return Cl(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ec(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(n,e=!1){const t=gt(n),s=await t.getIdToken(e),a=D_(s);Ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:ec(fg(a.auth_time)),issuedAtTime:ec(fg(a.iat)),expirationTime:ec(fg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function fg(n){return Number(n)*1e3}function D_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return bf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mf(t);return a?JSON.parse(a):(bf("Failed to decode base64 JWT payload"),null)}catch(a){return bf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function FT(n){const e=D_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Gs&&hN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function hN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ec(this.lastLoginAt),this.creationTime=ec(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zf(n){const e=n.auth,t=await n.getIdToken(),s=await dc(n,Uf(e,{idToken:t}));Ne(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?g1(a.providerUserInfo):[],c=mN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Vg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function dN(n){const e=gt(n);await zf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function g1(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function pN(n,e){const t=await d1(n,{},async()=>{const s=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await p1(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(p.credentials="include"),f1.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gN(n,e){return Cl(n,"POST","/v2/accounts:revokeToken",wd(n,e))}/**
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
 */class tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=FT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await pN(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new tl;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tl,this.toJSON())}_performRefresh(){return Ms("not implemented")}}/**
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
 */function wr(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await dc(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await dc(this,uN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:D,providerData:V,stsTokenManager:H}=t;Ne(b&&H,e,"internal-error");const B=tl.fromJSON(this.name,H);Ne(typeof b=="string",e,"internal-error"),wr(s,e.name),wr(a,e.name),Ne(typeof w=="boolean",e,"internal-error"),Ne(typeof D=="boolean",e,"internal-error"),wr(l,e.name),wr(c,e.name),wr(d,e.name),wr(p,e.name),wr(g,e.name),wr(y,e.name);const ie=new wi({uid:b,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:B,createdAt:g,lastLoginAt:y});return V&&Array.isArray(V)&&(ie.providerData=V.map(ae=>({...ae}))),p&&(ie._redirectEventId=p),ie}static async _fromIdTokenResponse(e,t,s=!1){const a=new tl;a.updateFromServerResponse(t);const l=new wi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await zf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?g1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new tl;d.updateFromIdToken(s);const p=new wi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
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
 */const HT=new Map;function Ps(n){zs(n instanceof Function,"Expected a class definition");let e=HT.get(n);return e?(zs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,HT.set(n,e),e)}/**
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
 */class _1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_1.type="NONE";const GT=_1;/**
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
 */function wf(n,e,t){return`firebase:${n}:${e}:${t}`}class nl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=wf(this.userKey,a.apiKey,l),this.fullPersistenceKey=wf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uf(this.auth,{idToken:e}).catch(()=>{});return t?wi._fromGetAccountInfoResponse(this.auth,t,e):null}return wi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new nl(Ps(GT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ps(GT);const c=wf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let b;if(typeof y=="string"){const w=await Uf(e,{idToken:y}).catch(()=>{});if(!w)break;b=await wi._fromGetAccountInfoResponse(e,w,y)}else b=wi._fromJSON(e,y);g!==l&&(d=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new nl(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new nl(l,e,s))}}/**
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
 */function QT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w1(e))return"Blackberry";if(S1(e))return"Webos";if(v1(e))return"Safari";if((e.includes("chrome/")||E1(e))&&!e.includes("edge/"))return"Chrome";if(b1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function y1(n=An()){return/firefox\//i.test(n)}function v1(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E1(n=An()){return/crios\//i.test(n)}function T1(n=An()){return/iemobile/i.test(n)}function b1(n=An()){return/android/i.test(n)}function w1(n=An()){return/blackberry/i.test(n)}function S1(n=An()){return/webos/i.test(n)}function k_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _N(n=An()){return k_(n)&&!!window.navigator?.standalone}function yN(){return xx()&&document.documentMode===10}function A1(n=An()){return k_(n)||b1(n)||S1(n)||w1(n)||/windows phone/i.test(n)||T1(n)}/**
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
 */function C1(n,e=[]){let t;switch(n){case"Browser":t=QT(An());break;case"Worker":t=`${QT(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xa}/${s}`}/**
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
 */class vN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function EN(n,e={}){return Cl(n,"GET","/v2/passwordPolicy",wd(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const TN=6;class bN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??TN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class wN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new YT(this),this.idTokenSubscription=new YT(this),this.beforeStateQueue=new vN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ps(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await nl.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uf(this,{idToken:e}),s=await wi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Xn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Nr(this));const t=e?gt(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EN(this),t=new bN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await gN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ps(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await nl.create(this,[Ps(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&eN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ic(n){return gt(n)}class YT{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ux(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let O_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SN(n){O_=n}function AN(n){return O_.loadJS(n)}function CN(){return O_.gapiScript}function RN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xN(n,e){const t=bd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Zi(l,e??{}))return a;Ji(a,"already-initialized")}return t.initialize({options:e})}function IN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ps);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function NN(n,e,t){const s=Ic(n);Ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=R1(e),{host:c,port:d}=DN(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ne(Zi(g,s.config.emulator)&&Zi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Hr(c)?(w_(`${l}//${c}${p}`),S_("Auth",!0)):kN()}function R1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DN(n){const e=R1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:KT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:KT(c)}}}function KT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class x1{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ms("not implemented")}_getIdTokenResponse(e){return Ms("not implemented")}_linkToIdToken(e,t){return Ms("not implemented")}_getReauthenticationResolver(e){return Ms("not implemented")}}/**
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
 */async function il(n,e){return m1(n,"POST","/v1/accounts:signInWithIdp",wd(n,e))}/**
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
 */const ON="http://localhost";class qa extends x1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ji("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new qa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return il(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,il(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,il(e,t)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Al(t)}return e}}/**
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
 */class M_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nc extends M_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends Nc{constructor(){super("facebook.com")}static credential(e){return qa._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class Os extends Nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qa._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Os.credential(t,s)}catch{return null}}}Os.GOOGLE_SIGN_IN_METHOD="google.com";Os.PROVIDER_ID="google.com";/**
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
 */class Ar extends Nc{constructor(){super("github.com")}static credential(e){return qa._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
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
 */class Cr extends Nc{constructor(){super("twitter.com")}static credential(e,t){return qa._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */class Fa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await wi._fromIdTokenResponse(e,s,a),c=$T(s);return new Fa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=$T(s);return new Fa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function $T(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Bf extends Gs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Bf(e,t,s,a)}}function I1(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(n,l,e,s):l})}async function MN(n,e,t=!1){const s=await dc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fa._forOperation(n,"link",s)}/**
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
 */async function PN(n,e,t=!1){const{auth:s}=n;if(Xn(s.app))return Promise.reject(Nr(s));const a="reauthenticate";try{const l=await dc(n,I1(s,a,e,n),t);Ne(l.idToken,s,"internal-error");const c=D_(l.idToken);Ne(c,s,"internal-error");const{sub:d}=c;return Ne(n.uid===d,s,"user-mismatch"),Fa._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ji(s,"user-mismatch"),l}}/**
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
 */async function VN(n,e,t=!1){if(Xn(n.app))return Promise.reject(Nr(n));const s="signIn",a=await I1(n,s,e),l=await Fa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
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
 */async function LN(n,e){return m1(n,"POST","/v1/accounts:signInWithCustomToken",wd(n,e))}/**
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
 */async function jN(n,e){if(Xn(n.app))return Promise.reject(Nr(n));const t=Ic(n),s=await LN(t,{token:e,returnSecureToken:!0}),a=await Fa._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function UN(n,e,t,s){return gt(n).onIdTokenChanged(e,t,s)}function zN(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}function BN(n,e,t,s){return gt(n).onAuthStateChanged(e,t,s)}function qN(n){return gt(n).signOut()}const qf="__sak";/**
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
 */class N1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qf,"1"),this.storage.removeItem(qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FN=1e3,HN=10;class D1 extends N1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);yN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},FN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}D1.type="LOCAL";const GN=D1;/**
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
 */class k1 extends N1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}k1.type="SESSION";const O1=k1;/**
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
 */function QN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Sd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await QN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sd.receivers=[];/**
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
 */function P_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=P_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Yi(){return window}function KN(n){Yi().location.href=n}/**
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
 */function M1(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function $N(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){return navigator?.serviceWorker?.controller||null}function WN(){return M1()?self:null}/**
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
 */const P1="firebaseLocalStorageDb",ZN=1,Ff="firebaseLocalStorage",V1="fbase_key";class Dc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ad(n,e){return n.transaction([Ff],e?"readwrite":"readonly").objectStore(Ff)}function JN(){const n=indexedDB.deleteDatabase(P1);return new Dc(n).toPromise()}function Lg(){const n=indexedDB.open(P1,ZN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ff,{keyPath:V1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ff)?e(s):(s.close(),await JN(),e(await Lg()))})})}async function XT(n,e,t){const s=Ad(n,!0).put({[V1]:e,value:t});return new Dc(s).toPromise()}async function e2(n,e){const t=Ad(n,!1).get(e),s=await new Dc(t).toPromise();return s===void 0?null:s.value}function WT(n,e){const t=Ad(n,!0).delete(e);return new Dc(t).toPromise()}const t2=800,n2=3;class L1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>n2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(WN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new YN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lg();return await XT(e,qf,"1"),await WT(e,qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>XT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>e2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>WT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Ad(a,!1).getAll();return new Dc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L1.type="LOCAL";const i2=L1;new xc(3e4,6e4);/**
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
 */function j1(n,e){return e?Ps(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class V_ extends x1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return il(e,this._buildIdpRequest())}_linkToIdToken(e,t){return il(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return il(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function s2(n){return VN(n.auth,new V_(n),n.bypassAuthState)}function r2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),PN(t,new V_(n),n.bypassAuthState)}async function a2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),MN(t,new V_(n),n.bypassAuthState)}/**
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
 */class U1{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:Ji(this.auth,"internal-error")}}resolve(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o2=new xc(2e3,1e4);async function l2(n,e,t){if(Xn(n.app))return Promise.reject(Ai(n,"operation-not-supported-in-this-environment"));const s=Ic(n);tN(n,e,M_);const a=j1(s,t);return new ka(s,"signInViaPopup",e,a).executeNotNull()}class ka extends U1{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,ka.currentPopupAction&&ka.currentPopupAction.cancel(),ka.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){zs(this.filter.length===1,"Popup operations only handle one event");const e=P_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ai(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ka.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ai(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o2.get())};e()}}ka.currentPopupAction=null;/**
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
 */const u2="pendingRedirect",Sf=new Map;class c2 extends U1{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Sf.get(this.auth._key());if(!e){try{const s=await h2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Sf.set(this.auth._key(),e)}return this.bypassAuthState||Sf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h2(n,e){const t=m2(e),s=d2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function f2(n,e){Sf.set(n._key(),e)}function d2(n){return Ps(n._redirectPersistence)}function m2(n){return wf(u2,n.config.apiKey,n.name)}async function p2(n,e,t=!1){if(Xn(n.app))return Promise.reject(Nr(n));const s=Ic(n),a=j1(s,e),c=await new c2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const g2=600*1e3;class _2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!z1(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ai(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ZT(e))}saveEventToCache(e){this.cachedEventUids.add(ZT(e)),this.lastProcessedEventTime=Date.now()}}function ZT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function z1({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function y2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z1(n);default:return!1}}/**
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
 */async function v2(n,e={}){return Cl(n,"GET","/v1/projects",e)}/**
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
 */const E2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T2=/^https?/;async function b2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v2(n);for(const t of e)try{if(w2(t))return}catch{}Ji(n,"unauthorized-domain")}function w2(n){const e=Pg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!T2.test(t))return!1;if(E2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const S2=new xc(3e4,6e4);function JT(){const n=Yi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A2(n){return new Promise((e,t)=>{function s(){JT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{JT(),t(Ai(n,"network-request-failed"))},timeout:S2.get()})}if(Yi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yi().gapi?.load)s();else{const a=RN("iframefcb");return Yi()[a]=()=>{gapi.load?s():t(Ai(n,"network-request-failed"))},AN(`${CN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Af=null,e})}let Af=null;function C2(n){return Af=Af||A2(n),Af}/**
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
 */const R2=new xc(5e3,15e3),x2="__/auth/iframe",I2="emulator/auth/iframe",N2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k2(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?N_(e,I2):`https://${n.config.authDomain}/${x2}`,s={apiKey:e.apiKey,appName:n.name,v:Xa},a=D2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Al(s).slice(1)}`}async function O2(n){const e=await C2(n),t=Yi().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:k2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Ai(n,"network-request-failed"),d=Yi().setTimeout(()=>{l(c)},R2.get());function p(){Yi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const M2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,V2=600,L2="_blank",j2="http://localhost";class eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(n,e,t,s=P2,a=V2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...M2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=E1(g)?L2:t),y1(g)&&(e=e||j2,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[D,V])=>`${w}${D}=${V},`,"");if(_N(g)&&d!=="_self")return z2(e||"",d),new eb(null);const b=window.open(e||"",d,y);Ne(b,n,"popup-blocked");try{b.focus()}catch{}return new eb(b)}function z2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const B2="__/auth/handler",q2="emulator/auth/handler",F2=encodeURIComponent("fac");async function tb(n,e,t,s,a,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xa,eventId:a};if(e instanceof M_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Pf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))c[y]=b}if(e instanceof Nc){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${F2}=${encodeURIComponent(p)}`:"";return`${H2(n)}?${Al(d).slice(1)}${g}`}function H2({config:n}){return n.emulator?N_(n,q2):`https://${n.authDomain}/${B2}`}/**
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
 */const dg="webStorageSupport";class G2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O1,this._completeRedirectFn=p2,this._overrideRedirectResult=f2}async _openPopup(e,t,s,a){zs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await tb(e,t,s,Pg(),a);return U2(e,l,P_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await tb(e,t,s,Pg(),a);return KN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(zs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await O2(e),s=new _2(e);return t.register("authEvent",a=>(Ne(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dg,{type:dg},a=>{const l=a?.[0]?.[dg];l!==void 0&&t(!!l),Ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return A1()||v1()||k_()}}const Q2=G2;var nb="@firebase/auth",ib="1.11.0";/**
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
 */class Y2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function K2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(n){Ba(new Pr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ne(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C1(n)},g=new wN(s,a,l,p);return IN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ba(new Pr("auth-internal",e=>{const t=Ic(e.getProvider("auth").getImmediate());return(s=>new Y2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qi(nb,ib,K2(n)),Qi(nb,ib,"esm2020")}/**
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
 */const X2=300,W2=t1("authIdTokenMaxAge")||X2;let sb=null;const Z2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>W2)return;const a=t?.token;sb!==a&&(sb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function J2(n=R_()){const e=bd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xN(n,{popupRedirectResolver:Q2,persistence:[i2,GN,O1]}),s=t1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Z2(l.toString());zN(t,c,()=>c(t.currentUser)),UN(t,d=>c(d))}}const a=Zw("auth");return a&&NN(t,`http://${a}`),t}function eD(){return document.getElementsByTagName("head")?.[0]??document}SN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Ai("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",eD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,B1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,C){function I(){}I.prototype=C.prototype,k.D=C.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(M,P,L){for(var R=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)R[Ee-2]=arguments[Ee];return C.prototype[P].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,C,I){I||(I=0);var M=Array(16);if(typeof C=="string")for(var P=0;16>P;++P)M[P]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(P=0;16>P;++P)M[P]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=k.g[0],I=k.g[1],P=k.g[2];var L=k.g[3],R=C+(L^I&(P^L))+M[0]+3614090360&4294967295;C=I+(R<<7&4294967295|R>>>25),R=L+(P^C&(I^P))+M[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(I^L&(C^I))+M[2]+606105819&4294967295,P=L+(R<<17&4294967295|R>>>15),R=I+(C^P&(L^C))+M[3]+3250441966&4294967295,I=P+(R<<22&4294967295|R>>>10),R=C+(L^I&(P^L))+M[4]+4118548399&4294967295,C=I+(R<<7&4294967295|R>>>25),R=L+(P^C&(I^P))+M[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(I^L&(C^I))+M[6]+2821735955&4294967295,P=L+(R<<17&4294967295|R>>>15),R=I+(C^P&(L^C))+M[7]+4249261313&4294967295,I=P+(R<<22&4294967295|R>>>10),R=C+(L^I&(P^L))+M[8]+1770035416&4294967295,C=I+(R<<7&4294967295|R>>>25),R=L+(P^C&(I^P))+M[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(I^L&(C^I))+M[10]+4294925233&4294967295,P=L+(R<<17&4294967295|R>>>15),R=I+(C^P&(L^C))+M[11]+2304563134&4294967295,I=P+(R<<22&4294967295|R>>>10),R=C+(L^I&(P^L))+M[12]+1804603682&4294967295,C=I+(R<<7&4294967295|R>>>25),R=L+(P^C&(I^P))+M[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(I^L&(C^I))+M[14]+2792965006&4294967295,P=L+(R<<17&4294967295|R>>>15),R=I+(C^P&(L^C))+M[15]+1236535329&4294967295,I=P+(R<<22&4294967295|R>>>10),R=C+(P^L&(I^P))+M[1]+4129170786&4294967295,C=I+(R<<5&4294967295|R>>>27),R=L+(I^P&(C^I))+M[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^I&(L^C))+M[11]+643717713&4294967295,P=L+(R<<14&4294967295|R>>>18),R=I+(L^C&(P^L))+M[0]+3921069994&4294967295,I=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(I^P))+M[5]+3593408605&4294967295,C=I+(R<<5&4294967295|R>>>27),R=L+(I^P&(C^I))+M[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^I&(L^C))+M[15]+3634488961&4294967295,P=L+(R<<14&4294967295|R>>>18),R=I+(L^C&(P^L))+M[4]+3889429448&4294967295,I=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(I^P))+M[9]+568446438&4294967295,C=I+(R<<5&4294967295|R>>>27),R=L+(I^P&(C^I))+M[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^I&(L^C))+M[3]+4107603335&4294967295,P=L+(R<<14&4294967295|R>>>18),R=I+(L^C&(P^L))+M[8]+1163531501&4294967295,I=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(I^P))+M[13]+2850285829&4294967295,C=I+(R<<5&4294967295|R>>>27),R=L+(I^P&(C^I))+M[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^I&(L^C))+M[7]+1735328473&4294967295,P=L+(R<<14&4294967295|R>>>18),R=I+(L^C&(P^L))+M[12]+2368359562&4294967295,I=P+(R<<20&4294967295|R>>>12),R=C+(I^P^L)+M[5]+4294588738&4294967295,C=I+(R<<4&4294967295|R>>>28),R=L+(C^I^P)+M[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^I)+M[11]+1839030562&4294967295,P=L+(R<<16&4294967295|R>>>16),R=I+(P^L^C)+M[14]+4259657740&4294967295,I=P+(R<<23&4294967295|R>>>9),R=C+(I^P^L)+M[1]+2763975236&4294967295,C=I+(R<<4&4294967295|R>>>28),R=L+(C^I^P)+M[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^I)+M[7]+4139469664&4294967295,P=L+(R<<16&4294967295|R>>>16),R=I+(P^L^C)+M[10]+3200236656&4294967295,I=P+(R<<23&4294967295|R>>>9),R=C+(I^P^L)+M[13]+681279174&4294967295,C=I+(R<<4&4294967295|R>>>28),R=L+(C^I^P)+M[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^I)+M[3]+3572445317&4294967295,P=L+(R<<16&4294967295|R>>>16),R=I+(P^L^C)+M[6]+76029189&4294967295,I=P+(R<<23&4294967295|R>>>9),R=C+(I^P^L)+M[9]+3654602809&4294967295,C=I+(R<<4&4294967295|R>>>28),R=L+(C^I^P)+M[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^I)+M[15]+530742520&4294967295,P=L+(R<<16&4294967295|R>>>16),R=I+(P^L^C)+M[2]+3299628645&4294967295,I=P+(R<<23&4294967295|R>>>9),R=C+(P^(I|~L))+M[0]+4096336452&4294967295,C=I+(R<<6&4294967295|R>>>26),R=L+(I^(C|~P))+M[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~I))+M[14]+2878612391&4294967295,P=L+(R<<15&4294967295|R>>>17),R=I+(L^(P|~C))+M[5]+4237533241&4294967295,I=P+(R<<21&4294967295|R>>>11),R=C+(P^(I|~L))+M[12]+1700485571&4294967295,C=I+(R<<6&4294967295|R>>>26),R=L+(I^(C|~P))+M[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~I))+M[10]+4293915773&4294967295,P=L+(R<<15&4294967295|R>>>17),R=I+(L^(P|~C))+M[1]+2240044497&4294967295,I=P+(R<<21&4294967295|R>>>11),R=C+(P^(I|~L))+M[8]+1873313359&4294967295,C=I+(R<<6&4294967295|R>>>26),R=L+(I^(C|~P))+M[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~I))+M[6]+2734768916&4294967295,P=L+(R<<15&4294967295|R>>>17),R=I+(L^(P|~C))+M[13]+1309151649&4294967295,I=P+(R<<21&4294967295|R>>>11),R=C+(P^(I|~L))+M[4]+4149444226&4294967295,C=I+(R<<6&4294967295|R>>>26),R=L+(I^(C|~P))+M[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~I))+M[2]+718787259&4294967295,P=L+(R<<15&4294967295|R>>>17),R=I+(L^(P|~C))+M[9]+3951481745&4294967295,k.g[0]=k.g[0]+C&4294967295,k.g[1]=k.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+L&4294967295}s.prototype.u=function(k,C){C===void 0&&(C=k.length);for(var I=C-this.blockSize,M=this.B,P=this.h,L=0;L<C;){if(P==0)for(;L<=I;)a(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<C;)if(M[P++]=k.charCodeAt(L++),P==this.blockSize){a(this,M),P=0;break}}else for(;L<C;)if(M[P++]=k[L++],P==this.blockSize){a(this,M),P=0;break}}this.h=P,this.o+=C},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var C=1;C<k.length-8;++C)k[C]=0;var I=8*this.o;for(C=k.length-8;C<k.length;++C)k[C]=I&255,I/=256;for(this.u(k),k=Array(16),C=I=0;4>C;++C)for(var M=0;32>M;M+=8)k[I++]=this.g[C]>>>M&255;return k};function l(k,C){var I=d;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=C(k)}function c(k,C){this.h=C;for(var I=[],M=!0,P=k.length-1;0<=P;P--){var L=k[P]|0;M&&L==C||(I[P]=L,M=!1)}this.g=I}var d={};function p(k){return-128<=k&&128>k?l(k,function(C){return new c([C|0],0>C?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return b;if(0>k)return B(g(-k));for(var C=[],I=1,M=0;k>=I;M++)C[M]=k/I|0,I*=4294967296;return new c(C,0)}function y(k,C){if(k.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(k.charAt(0)=="-")return B(y(k.substring(1),C));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(C,8)),M=b,P=0;P<k.length;P+=8){var L=Math.min(8,k.length-P),R=parseInt(k.substring(P,P+L),C);8>L?(L=g(Math.pow(C,L)),M=M.j(L).add(g(R))):(M=M.j(I),M=M.add(g(R)))}return M}var b=p(0),w=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-B(this).m();for(var k=0,C=1,I=0;I<this.g.length;I++){var M=this.i(I);k+=(0<=M?M:4294967296+M)*C,C*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(V(this))return"0";if(H(this))return"-"+B(this).toString(k);for(var C=g(Math.pow(k,6)),I=this,M="";;){var P=ye(I,C).g;I=ie(I,P.j(C));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=P,V(I))return L+M;for(;6>L.length;)L="0"+L;M=L+M}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function V(k){if(k.h!=0)return!1;for(var C=0;C<k.g.length;C++)if(k.g[C]!=0)return!1;return!0}function H(k){return k.h==-1}n.l=function(k){return k=ie(this,k),H(k)?-1:V(k)?0:1};function B(k){for(var C=k.g.length,I=[],M=0;M<C;M++)I[M]=~k.g[M];return new c(I,~k.h).add(w)}n.abs=function(){return H(this)?B(this):this},n.add=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],M=0,P=0;P<=C;P++){var L=M+(this.i(P)&65535)+(k.i(P)&65535),R=(L>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);M=R>>>16,L&=65535,R&=65535,I[P]=R<<16|L}return new c(I,I[I.length-1]&-2147483648?-1:0)};function ie(k,C){return k.add(B(C))}n.j=function(k){if(V(this)||V(k))return b;if(H(this))return H(k)?B(this).j(B(k)):B(B(this).j(k));if(H(k))return B(this.j(B(k)));if(0>this.l(D)&&0>k.l(D))return g(this.m()*k.m());for(var C=this.g.length+k.g.length,I=[],M=0;M<2*C;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(var P=0;P<k.g.length;P++){var L=this.i(M)>>>16,R=this.i(M)&65535,Ee=k.i(P)>>>16,We=k.i(P)&65535;I[2*M+2*P]+=R*We,ae(I,2*M+2*P),I[2*M+2*P+1]+=L*We,ae(I,2*M+2*P+1),I[2*M+2*P+1]+=R*Ee,ae(I,2*M+2*P+1),I[2*M+2*P+2]+=L*Ee,ae(I,2*M+2*P+2)}for(M=0;M<C;M++)I[M]=I[2*M+1]<<16|I[2*M];for(M=C;M<2*C;M++)I[M]=0;return new c(I,0)};function ae(k,C){for(;(k[C]&65535)!=k[C];)k[C+1]+=k[C]>>>16,k[C]&=65535,C++}function ue(k,C){this.g=k,this.h=C}function ye(k,C){if(V(C))throw Error("division by zero");if(V(k))return new ue(b,b);if(H(k))return C=ye(B(k),C),new ue(B(C.g),B(C.h));if(H(C))return C=ye(k,B(C)),new ue(B(C.g),C.h);if(30<k.g.length){if(H(k)||H(C))throw Error("slowDivide_ only works with positive integers.");for(var I=w,M=C;0>=M.l(k);)I=de(I),M=de(M);var P=ge(I,1),L=ge(M,1);for(M=ge(M,2),I=ge(I,2);!V(M);){var R=L.add(M);0>=R.l(k)&&(P=P.add(I),L=R),M=ge(M,1),I=ge(I,1)}return C=ie(k,P.j(C)),new ue(P,C)}for(P=b;0<=k.l(C);){for(I=Math.max(1,Math.floor(k.m()/C.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),L=g(I),R=L.j(C);H(R)||0<R.l(k);)I-=M,L=g(I),R=L.j(C);V(L)&&(L=w),P=P.add(L),k=ie(k,R)}return new ue(P,k)}n.A=function(k){return ye(this,k).h},n.and=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],M=0;M<C;M++)I[M]=this.i(M)&k.i(M);return new c(I,this.h&k.h)},n.or=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],M=0;M<C;M++)I[M]=this.i(M)|k.i(M);return new c(I,this.h|k.h)},n.xor=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],M=0;M<C;M++)I[M]=this.i(M)^k.i(M);return new c(I,this.h^k.h)};function de(k){for(var C=k.g.length+1,I=[],M=0;M<C;M++)I[M]=k.i(M)<<1|k.i(M-1)>>>31;return new c(I,k.h)}function ge(k,C){var I=C>>5;C%=32;for(var M=k.g.length-I,P=[],L=0;L<M;L++)P[L]=0<C?k.i(L+I)>>>C|k.i(L+I+1)<<32-C:k.i(L+I);return new c(P,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,B1=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Dr=c}).apply(typeof rb<"u"?rb:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q1,$u,F1,Cf,jg,H1,G1,Q1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var U=h[A];if(!(U in v))break e;v=v[U]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,U={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function b(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,w.apply(null,arguments)}function D(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function V(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,U,Q){for(var se=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)se[Ye-2]=arguments[Ye];return _.prototype[U].apply(A,se)}}function H(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function B(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const U=h.length||0,Q=A.length||0;h.length=U+Q;for(let se=0;se<Q;se++)h[U+se]=A[se]}else h.push(A)}}class ie{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ae(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ye(h){return ye[" "](h),h}ye[" "]=function(){};var de=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function ge(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(v in A)h[v]=A[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function R(){var h=fe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Ee{constructor(){this.h=this.g=null}add(_,v){const A=We.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var We=new ie(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ce=!1,fe=new Ee,N=()=>{const h=d.Promise.resolve(void 0);ne=()=>{h.then(W)}};var W=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){L(v)}var _=We;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ce=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Pe(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(de){e:{try{ye(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Pe.aa.h.call(this)}}V(Pe,te);var Ae={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),ot=0;function Zn(h,_,v,A,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=U,this.key=++ot,this.da=this.fa=!1}function xi(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function di(h){this.src=h,this.g={},this.h=0}di.prototype.add=function(h,_,v,A,U){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var se=ss(h,_,A,U);return-1<se?(_=h[se],v||(_.fa=!1)):(_=new Zn(_,this.src,Q,!!A,U),_.fa=v,h.push(_)),_};function is(h,_){var v=_.type;if(v in h.g){var A=h.g[v],U=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=U)&&Array.prototype.splice.call(A,U,1),Q&&(xi(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function ss(h,_,v,A){for(var U=0;U<h.length;++U){var Q=h[U];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return U}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),Kr={};function no(h,_,v,A,U){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)no(h,_[Q],v,A,U);return null}return v=De(v),h&&h[Vt]?h.K(_,v,g(A)?!!A.capture:!1,U):On(h,_,v,!1,A,U)}function On(h,_,v,A,U,Q){if(!_)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,Ye=Ys(h);if(Ye||(h[rs]=Ye=new di(h)),v=Ye.add(_,v,A,se,Q),v.proxy)return v;if(A=Vl(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ve||(U=se),U===void 0&&(U=!1),h.addEventListener(_.toString(),A,U);else if(h.attachEvent)h.attachEvent(pi(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Vl(){function h(v){return _.call(h.src,h.listener,v)}const _=Xr;return h}function $r(h,_,v,A,U){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)$r(h,_[Q],v,A,U);else A=g(A)?!!A.capture:!!A,v=De(v),h&&h[Vt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=ss(Q,v,A,U),-1<v&&(xi(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ys(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ss(_,v,A,U)),(v=-1<h?_[h]:null)&&mi(v))}function mi(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Vt])is(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(pi(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ys(_))?(is(v,h),v.h==0&&(v.src=null,_[rs]=null)):xi(h)}}}function pi(h){return h in Kr?Kr[h]:Kr[h]="on"+h}function Xr(h,_){if(h.da)h=!0;else{_=new Pe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&mi(h),h=v.call(A,_)}return h}function Ys(h){return h=h[rs],h instanceof di?h:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(h){return typeof h=="function"?h:(h[pe]||(h[pe]=function(_){return h.handleEvent(_)}),h[pe])}function Te(){oe.call(this),this.i=new di(this),this.M=this,this.F=null}V(Te,oe),Te.prototype[Vt]=!0,Te.prototype.removeEventListener=function(h,_,v,A){$r(this,h,_,v,A)};function Oe(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var U=_;_=new te(A,h),M(_,U)}if(U=!0,v)for(var Q=v.length-1;0<=Q;Q--){var se=_.g=v[Q];U=It(se,A,!0,_)&&U}if(se=_.g=h,U=It(se,A,!0,_)&&U,U=It(se,A,!1,_)&&U,v)for(Q=0;Q<v.length;Q++)se=_.g=v[Q],U=It(se,A,!1,_)&&U}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)xi(v[A]);delete h.g[_],h.h--}}this.F=null},Te.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},Te.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function It(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,Q=0;Q<_.length;++Q){var se=_[Q];if(se&&!se.da&&se.capture==v){var Ye=se.listener,Kt=se.ha||se.src;se.fa&&is(h.i,se),U=Ye.call(Kt,A)!==!1&&U}}return U&&!A.defaultPrevented}function wt(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function yn(h){h.g=wt(()=>{h.g=null,h.i&&(h.i=!1,yn(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Ll extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:yn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(h){oe.call(this),this.h=h,this.g={}}V(Ks,oe);var Wr=[];function Zr(h){ge(h.g,function(_,v){this.g.hasOwnProperty(v)&&mi(_)},h),h.g={}}Ks.prototype.N=function(){Ks.aa.N.call(this),Zr(this)},Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gi=d.JSON.stringify,io=d.JSON.parse,Jr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function jl(){}jl.prototype.h=null;function Ul(h){return h.h||(h.h=h.i())}function zl(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function os(){te.call(this,"d")}V(os,te);function Bl(){te.call(this,"c")}V(Bl,te);var Ii={},ql=null;function $s(){return ql=ql||new Te}Ii.La="serverreachability";function so(h){te.call(this,Ii.La,h)}V(so,te);function Xs(h){const _=$s();Oe(_,new so(_))}Ii.STAT_EVENT="statevent";function Qc(h,_){te.call(this,Ii.STAT_EVENT,h),this.stat=_}V(Qc,te);function Et(h){const _=$s();Oe(_,new Qc(_,h))}Ii.Ma="timingevent";function Yt(h,_){te.call(this,Ii.Ma,h),this.size=_}V(Yt,te);function Lt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function Fl(h,_,v,A,U,Q){h.info(function(){if(h.g)if(Q)for(var se="",Ye=Q.split("&"),Kt=0;Kt<Ye.length;Kt++){var Ke=Ye[Kt].split("=");if(1<Ke.length){var en=Ke[0];Ke=Ke[1];var $t=en.split("_");se=2<=$t.length&&$t[1]=="type"?se+(en+"="+Ke+"&"):se+(en+"=redacted&")}}else se=null;else se=Q;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+_+`
`+v+`
`+se})}function sm(h,_,v,A,U,Q,se){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+_+`
`+v+`
`+Q+" "+se})}function Ws(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ea(h,v)+(A?" "+A:"")})}function Yc(h,_){h.info(function(){return"TIMEOUT: "+_})}Jn.prototype.info=function(){};function ea(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var Q=U[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return gi(v)}catch{return _}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ls={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ni;function Di(){}V(Di,jl),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Ni=new Di;function Rn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Hl={},ro={};function _i(h,_,v){h.L=1,h.v=ra(qn(_)),h.m=v,h.P=!0,us(h,null)}function us(h,_){h.F=Date.now(),ta(h),h.A=qn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Xl(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Nt,h.g=uh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Ll(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Wr[0]=U.toString()),U=Wr);for(var Q=0;Q<U.length;Q++){var se=no(v,U[Q],A||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Xs(),Fl(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&ii(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const $t=ii(this.g);var _=this.g.Ba();const _s=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||$t!=4||_==7||(_==8||0>=_s?Xs(3):Xs(2)),Js(this);var v=this.g.Z();this.X=v;t:if(Kc(this)){var A=th(this.g);h="";var U=A.length,Q=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),ki(this);var se="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==U-1)});A.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,sm(this.i,this.u,this.A,this.l,this.R,$t,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Kt=this.g;if((Ye=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(Ye)){var Ke=Ye;break t}}Ke=null}if(v=Ke)Ws(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,v);else{this.o=!1,this.s=3,Et(12),un(this),ki(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<se.length;)if(cn=$c(this,se),cn==ro){$t==4&&(this.s=4,Et(14),v=!1),Ws(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Hl){this.s=4,Et(15),Ws(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Ws(this.i,this.l,cn,null),na(this,cn);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||se.length!=0||this.h.h||(this.s=1,Et(16),v=!1),this.o=this.o&&v,!v)Ws(this.i,this.l,se,"[Invalid Chunked Response]"),un(this),ki(this);else if(0<se.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),da(en),en.M=!0,Et(11))}}else Ws(this.i,this.l,se,null),na(this,se);$t==4&&un(this),this.o&&!this.J&&($t==4?ah(this.j,this):(this.o=!1,ta(this)))}else um(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),un(this),ki(this)}}}catch{}finally{}};function Kc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function $c(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?ro:(v=Number(_.substring(v,A)),isNaN(v)?Hl:(A+=1,A+v>_.length?ro:(_=_.slice(A,A+v),h.C=A+v,_)))}Rn.prototype.cancel=function(){this.J=!0,un(this)};function ta(h){h.S=Date.now()+h.I,Xc(h,h.I)}function Xc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(w(h.ba,h),_)}function Js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Yc(this.i,this.A),this.L!=2&&(Xs(),Et(17)),un(this),this.s=2,ki(this)):Xc(this,this.S-h)};function ki(h){h.j.G==0||h.J||ah(h.j,h)}function un(h){Js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Zr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function na(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Gl(v.h,h))){if(!h.K&&Gl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)yo(v),go(v);else break e;tu(v),Et(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Lt(w(v.Za,v),6e3));if(1>=oo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else gs(v,11)}else if((h.K||v.g==h)&&yo(v),!ae(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Ke=U[_];if(v.T=Ke[0],Ke=Ke[1],v.G==2)if(Ke[0]=="c"){v.K=Ke[1],v.ia=Ke[2];const en=Ke[3];en!=null&&(v.la=en,v.j.info("VER="+v.la));const $t=Ke[4];$t!=null&&(v.Aa=$t,v.j.info("SVER="+v.Aa));const _s=Ke[5];_s!=null&&typeof _s=="number"&&0<_s&&(A=1.5*_s,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const cn=h.g;if(cn){const Ui=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var Q=A.h;Q.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(lo(Q,Q.h),Q.h=null))}if(A.D){const iu=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;iu&&(A.ya=iu,lt(A.I,A.D,iu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var se=h;if(A.qa=lh(A,A.J?A.ia:null,A.W),se.K){xn(A.h,se);var Ye=se,Kt=A.L;Kt&&(Ye.I=Kt),Ye.B&&(Js(Ye),ta(Ye)),A.g=se}else sh(A);0<v.i.length&&_o(v)}else Ke[0]!="stop"&&Ke[0]!="close"||gs(v,7);else v.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?gs(v,7):Jl(v):Ke[0]!="noop"&&v.l&&v.l.ta(Ke),v.v=0)}}Xs(4)}catch{}}var Wc=class{constructor(h,_){this.g=h,this.map=_}};function cs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function oo(h){return h.h?1:h.g?h.g.size:0}function Gl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function lo(h,_){h.g?h.g.add(_):h.h=_}function xn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}cs.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ql(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return H(h.i)}function rm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function uo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Yl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=uo(h),A=rm(h),U=A.length,Q=0;Q<U;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function am(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),U=null;if(0<=A){var Q=h[v].substring(0,A);U=h[v].substring(A+1)}else Q=h[v];_(Q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function jt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof jt){this.h=h.h,sa(this,h.j),this.o=h.o,this.g=h.g,er(this,h.s),this.l=h.l;var _=h.i,v=new fs;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),hs(this,v),this.m=h.m}else h&&(_=String(h).match(ia))?(this.h=!1,sa(this,_[1]||"",!0),this.o=ei(_[2]||""),this.g=ei(_[3]||"",!0),er(this,_[4]),this.l=ei(_[5]||"",!0),hs(this,_[6]||"",!0),this.m=ei(_[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}jt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(aa(_,Kl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(aa(_,Kl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(aa(v,v.charAt(0)=="/"?om:$l,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",aa(v,co)),h.join("")};function qn(h){return new jt(h)}function sa(h,_,v){h.j=v?ei(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function er(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function hs(h,_,v){_ instanceof fs?(h.i=_,Jc(h.i,h.h)):(v||(_=aa(_,lm)),h.i=new fs(_,h.h))}function lt(h,_,v){h.i.set(_,v)}function ra(h){return lt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ei(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function aa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Zc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Kl=/[#\/\?@]/g,$l=/[#\?:]/g,om=/[#\?]/g,lm=/[#\?@]/g,co=/#/g;function fs(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ti(h){h.g||(h.g=new Map,h.h=0,h.i&&am(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=fs.prototype,n.add=function(h,_){ti(this),this.i=null,h=Oi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ds(h,_){ti(h),_=Oi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ms(h,_){return ti(h),_=Oi(h,_),h.g.has(_)}n.forEach=function(h,_){ti(this),this.g.forEach(function(v,A){v.forEach(function(U){h.call(_,U,A,this)},this)},this)},n.na=function(){ti(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const U=h[A];for(let Q=0;Q<U.length;Q++)v.push(_[A])}return v},n.V=function(h){ti(this);let _=[];if(typeof h=="string")ms(this,h)&&(_=_.concat(this.g.get(Oi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ti(this),this.i=null,h=Oi(this,h),ms(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Xl(h,_,v){ds(h,_),0<v.length&&(h.i=null,h.g.set(Oi(h,_),H(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),se=this.V(A);for(A=0;A<se.length;A++){var U=Q;se[A]!==""&&(U+="="+encodeURIComponent(String(se[A]))),h.push(U)}}return this.i=h.join("&")};function Oi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Jc(h,_){_&&!h.j&&(ti(h),h.i=null,h.g.forEach(function(v,A){var U=A.toLowerCase();A!=U&&(ds(this,A),Xl(this,U,v))},h)),h.j=_}function oa(h,_){const v=new Jn;if(d.Image){const A=new Image;A.onload=D(ni,v,"TestLoadImage: loaded",!0,_,A),A.onerror=D(ni,v,"TestLoadImage: error",!1,_,A),A.onabort=D(ni,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=D(ni,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function yi(h,_){const v=new Jn,A=new AbortController,U=setTimeout(()=>{A.abort(),ni(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(U),Q.ok?ni(v,"TestPingServer: ok",!0,_):ni(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),ni(v,"TestPingServer: error",!1,_)})}function ni(h,_,v,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(v)}catch{}}function la(){this.g=new Jr}function Mi(h,_,v){const A=v||"";try{Yl(h,function(U,Q){let se=U;g(U)&&(se=gi(U)),_.push(A+Q+"="+encodeURIComponent(se))})}catch(U){throw _.push(A+"type="+encodeURIComponent("_badmap")),U}}function tr(h){this.l=h.Ub||null,this.j=h.eb||!1}V(tr,jl),tr.prototype.g=function(){return new ps(this.l,this.j)},tr.prototype.i=(function(h){return function(){return h}})({});function ps(h,_){Te.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ps,Te),n=ps.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Vi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pi(this):Vi(this),this.readyState==3&&Wl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Pi(this))},n.Qa=function(h){this.g&&(this.response=h,Pi(this))},n.ga=function(){this.g&&Pi(this)};function Pi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Vi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Zl(h){let _="";return ge(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Jt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Zl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):lt(h,_,v))}function tt(h){Te.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(tt,Te);var ho=/^https?$/i,ua=["POST","PUT"];n=tt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ni.g(),this.v=this.o?Ul(this.o):Ul(Ni),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){eh(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)v.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,_,void 0))||A||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,se]of v)this.g.setRequestHeader(Q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){eh(this,Q)}};function eh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,fo(h),Li(h)}function fo(h){h.A||(h.A=!0,Oe(h,"complete"),Oe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Oe(this,"complete"),Oe(this,"abort"),Li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mo(this):this.bb())},n.bb=function(){mo(this)};function mo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ii(h)!=4||h.Z()!=2)){if(h.u&&ii(h)==4)wt(h.Ea,0,h);else if(Oe(h,"readystatechange"),ii(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=se===0){var U=String(h.D).match(ia)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),A=!ho.test(U?U.toLowerCase():"")}v=A}if(v)Oe(h,"complete"),Oe(h,"success");else{h.m=6;try{var Q=2<ii(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",fo(h)}}finally{Li(h)}}}}function Li(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Oe(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ii(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),io(_)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function um(h){const _={};h=(h.g&&2<=ii(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ae(h[A]))continue;var v=P(h[A]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[U]||[];_[U]=Q,Q.push(v)}k(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function po(h){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,h),this.cb=ha("retryDelaySeedMs",1e4,h),this.Wa=ha("forwardChannelMaxRetries",2,h),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new cs(h&&h.concurrentRequestLimit),this.Da=new la,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=po.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){Et(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=lh(this,null,this.W),_o(this)};function Jl(h){if(nh(h),h.G==3){var _=h.U++,v=qn(h.I);if(lt(v,"SID",h.K),lt(v,"RID",_),lt(v,"TYPE","terminate"),fa(h,v),_=new Rn(h,h.j,_),_.L=2,_.v=ra(qn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=uh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ta(_)}oh(h)}function go(h){h.g&&(da(h),h.g.cancel(),h.g=null)}function nh(h){go(h),h.u&&(d.clearTimeout(h.u),h.u=null),yo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function _o(h){if(!ao(h.h)&&!h.s){h.s=!0;var _=h.Ga;ne||N(),ce||(ne(),ce=!0),fe.add(_,h),h.B=0}}function cm(h,_){return oo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(w(h.Ga,h,_),nu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new Rn(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(U.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ih(this,U,_),v=qn(this.I),lt(v,"RID",h),lt(v,"CVER",22),this.D&&lt(v,"X-HTTP-Session-Id",this.D),fa(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Zl(Q)))+"&"+_:this.m&&Jt(v,this.m,Q)),lo(this.h,U),this.Ua&&lt(v,"TYPE","init"),this.P?(lt(v,"$req",_),lt(v,"SID","null"),U.T=!0,_i(U,v,null)):_i(U,v,_),this.G=2}}else this.G==3&&(h?eu(this,h):this.i.length==0||ao(this.h)||eu(this))};function eu(h,_){var v;_?v=_.l:v=h.U++;const A=qn(h.I);lt(A,"SID",h.K),lt(A,"RID",v),lt(A,"AID",h.T),fa(h,A),h.m&&h.o&&Jt(A,h.m,h.o),v=new Rn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ih(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),lo(h.h,v),_i(v,A,_)}function fa(h,_){h.H&&ge(h.H,function(v,A){lt(_,A,v)}),h.l&&Yl({},function(v,A){lt(_,A,v)})}function ih(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let Q=-1;for(;;){const se=["count="+v];Q==-1?0<v?(Q=U[0].g,se.push("ofs="+Q)):Q=0:se.push("ofs="+Q);let Ye=!0;for(let Kt=0;Kt<v;Kt++){let Ke=U[Kt].g;const en=U[Kt].map;if(Ke-=Q,0>Ke)Q=Math.max(0,U[Kt].g-100),Ye=!1;else try{Mi(en,se,"req"+Ke+"_")}catch{A&&A(en)}}if(Ye){A=se.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function sh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ne||N(),ce||(ne(),ce=!0),fe.add(_,h),h.v=0}}function tu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(w(h.Fa,h),nu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),go(this),rh(this))};function da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function rh(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=qn(h.qa);lt(_,"RID","rpc"),lt(_,"SID",h.K),lt(_,"AID",h.T),lt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&lt(_,"TO",h.ja),lt(_,"TYPE","xmlhttp"),fa(h,_),h.m&&h.o&&Jt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ra(qn(_)),v.m=null,v.P=!0,us(v,h)}n.Za=function(){this.C!=null&&(this.C=null,go(this),tu(this),Et(19))};function yo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ah(h,_){var v=null;if(h.g==_){yo(h),da(h),h.g=null;var A=2}else if(Gl(h.h,_))v=_.D,xn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;A=$s(),Oe(A,new Yt(A,v)),_o(h)}else sh(h);else if(U=_.s,U==3||U==0&&0<_.X||!(A==1&&cm(h,_)||A==2&&tu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:gs(h,5);break;case 4:gs(h,10);break;case 3:gs(h,6);break;default:gs(h,2)}}}function nu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function gs(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const U=!A;A=new jt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||sa(A,"https"),ra(A),U?oa(A.toString(),v):yi(A.toString(),v)}else Et(2);h.G=0,h.l&&h.l.sa(_),oh(h),nh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const _=Ql(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function lh(h,_,v){var A=v instanceof jt?qn(v):new jt(v);if(A.g!="")_&&(A.g=_+"."+A.g),er(A,A.s);else{var U=d.location;A=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var Q=new jt(null);A&&sa(Q,A),_&&(Q.g=_),U&&er(Q,U),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&lt(A,v,_),lt(A,"VER",h.la),fa(h,A),A}function uh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new tt(new tr({eb:v})):new tt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}n=ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vo(){}vo.prototype.g=function(h,_){return new In(h,_)};function In(h,_){Te.call(this),this.g=new po(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ae(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ae(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new ji(this)}V(In,Te),In.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},In.prototype.close=function(){Jl(this.g)},In.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=gi(h),h=v);_.i.push(new Wc(_.Ya++,h)),_.G==3&&_o(_)},In.prototype.N=function(){this.g.l=null,delete this.j,Jl(this.g),delete this.g,In.aa.N.call(this)};function hh(h){os.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(hh,os);function fh(){Bl.call(this),this.status=1}V(fh,Bl);function ji(h){this.g=h}V(ji,ch),ji.prototype.ua=function(){Oe(this.g,"a")},ji.prototype.ta=function(h){Oe(this.g,new hh(h))},ji.prototype.sa=function(h){Oe(this.g,new fh)},ji.prototype.ra=function(){Oe(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,In.prototype.send=In.prototype.o,In.prototype.open=In.prototype.m,In.prototype.close=In.prototype.close,Q1=function(){return new vo},G1=function(){return $s()},H1=Ii,jg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Cf=Zs,ls.COMPLETE="complete",F1=ls,zl.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",Te.prototype.listen=Te.prototype.K,$u=zl,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,q1=tt}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const ab="@firebase/firestore",ob="4.9.0";/**
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
 */class bn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bn.UNAUTHENTICATED=new bn(null),bn.GOOGLE_CREDENTIALS=new bn("google-credentials-uid"),bn.FIRST_PARTY=new bn("first-party-uid"),bn.MOCK_USER=new bn("mock-user");/**
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
 */let Rl="12.0.0";/**
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
 */const Ha=new Td("@firebase/firestore");function $o(){return Ha.logLevel}function he(n,...e){if(Ha.logLevel<=He.DEBUG){const t=e.map(L_);Ha.debug(`Firestore (${Rl}): ${n}`,...t)}}function Bs(n,...e){if(Ha.logLevel<=He.ERROR){const t=e.map(L_);Ha.error(`Firestore (${Rl}): ${n}`,...t)}}function cl(n,...e){if(Ha.logLevel<=He.WARN){const t=e.map(L_);Ha.warn(`Firestore (${Rl}): ${n}`,...t)}}function L_(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Ce(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Y1(n,s,t)}function Y1(n,e,t){let s=`FIRESTORE (${Rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Bs(s),new Error(s)}function nt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Y1(e,a,s)}function Me(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Gs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ls{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class K1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bn.UNAUTHENTICATED)))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){nt(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ls,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ls)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(nt(typeof s.accessToken=="string",31837,{l:s}),new K1(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string",2055,{h:e}),new bn(e)}}class sD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){nt(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(nt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class j_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=oD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ge(n,e){return n<e?-1:n>e?1:0}function Ug(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return mg(a)===mg(l)?Ge(a,l):mg(a)?1:-1}return Ge(n.length,e.length)}const lD=55296,uD=57343;function mg(n){const e=n.charCodeAt(0);return e>=lD&&e<=uD}function hl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
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
 */const ub="__name__";class Gi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ce(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Gi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ge(e.length,t.length)}static compareSegments(e,t){const s=Gi.isNumericId(e),a=Gi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):Ug(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class pt extends Gi{construct(e,t,s){return new pt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new pt(t)}static emptyPath(){return new pt([])}}const cD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pn extends Gi{construct(e,t,s){return new pn(e,t,s)}static isValidIdentifier(e){return cD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ub}static keyField(){return new pn([ub])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pn(t)}static emptyPath(){return new pn([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(pt.fromString(e))}static fromName(e){return new be(pt.fromString(e).popFirst(5))}static empty(){return new be(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new pt(e.slice()))}}/**
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
 */function $1(n,e,t){if(!t)throw new le($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hD(n,e,t,s){if(e===!0&&s===!0)throw new le($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cb(n){if(!be.isDocumentKey(n))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hb(n){if(be.isDocumentKey(n))throw new le($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function X1(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Cd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cd(n);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function kc(n,e){if(!X1(n))throw new le($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new le($.INVALID_ARGUMENT,t);return!0}/**
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
 */const fb=-62135596800,db=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*db);return new vt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fb)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/db}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kc(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Gt("string",vt._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new vt(0,0))}static max(){return new ke(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const mc=-1;function fD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=ke.fromTimestamp(s===1e9?new vt(t+1,0):new vt(t,s));return new Vr(a,be.empty(),e)}function dD(n){return new Vr(n.readTime,n.key,mc)}class Vr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vr(ke.min(),be.empty(),mc)}static max(){return new Vr(ke.max(),be.empty(),mc)}}function mD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Ge(n.largestBatchId,e.largestBatchId))}/**
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
 */const pD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function xl(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==pD)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):J.reject(t)}static resolve(e){return new J(((t,s)=>{t(e)}))}static reject(e){return new J(((t,s)=>{s(e)}))}static waitFor(e){return new J(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next((a=>a?J.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new J(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new J(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function _D(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Il(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Rd.ce=-1;/**
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
 */const U_=-1;function xd(n){return n==null}function Hf(n){return n===0&&1/n==-1/0}function yD(n){return typeof n=="number"&&Number.isInteger(n)&&!Hf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const W1="";function vD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mb(e)),e=ED(n.get(t),e);return mb(e)}function ED(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case W1:t+="";break;default:t+=l}}return t}function mb(n){return n+W1+""}/**
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
 */function pb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Z1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Qt=class zg{constructor(e,t){this.comparator=e,this.root=t||kr.EMPTY}insert(e,t){return new zg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kr.BLACK,null,null))}remove(e){return new zg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gf(this.root,e,this.comparator,!0)}},gf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},kr=class Ds{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ds.RED,this.left=a??Ds.EMPTY,this.right=l??Ds.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ds(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ds.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ds.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ds.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ds.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};kr.EMPTY=null,kr.RED=!0,kr.BLACK=!1;kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new kr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Zt{constructor(e){this.comparator=e,this.data=new Qt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gb(this.data.getIterator())}getIteratorFrom(e){return new gb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class gb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(pn.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new Zt(pn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new J1("Invalid base64 string: "+l):l}})(e);return new _n(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new _n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(n){if(nt(!!n,39018),typeof n=="string"){let e=0;const t=TD.exec(n);if(nt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Mt(n.seconds),nanos:Mt(n.nanos)}}function Mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jr(n){return typeof n=="string"?_n.fromBase64String(n):_n.fromUint8Array(n)}/**
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
 */const eS="server_timestamp",tS="__type__",nS="__previous_value__",iS="__local_write_time__";function z_(n){return(n?.mapValue?.fields||{})[tS]?.stringValue===eS}function Id(n){const e=n.mapValue.fields[nS];return z_(e)?Id(e):e}function pc(n){const e=Lr(n.mapValue.fields[iS].timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class bD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Gf="(default)";class gc{constructor(e,t){this.projectId=e,this.database=t||Gf}static empty(){return new gc("","")}get isDefaultDatabase(){return this.database===Gf}isEqual(e){return e instanceof gc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sS="__type__",wD="__max__",_f={mapValue:{}},rS="__vector__",Qf="value";function Ur(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?z_(n)?4:AD(n)?9007199254740991:SD(n)?10:11:Ce(28295,{value:n})}function es(n,e){if(n===e)return!0;const t=Ur(n);if(t!==Ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pc(n).isEqual(pc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Lr(a.timestampValue),d=Lr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return jr(a.bytesValue).isEqual(jr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Mt(a.geoPointValue.latitude)===Mt(l.geoPointValue.latitude)&&Mt(a.geoPointValue.longitude)===Mt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Mt(a.integerValue)===Mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Mt(a.doubleValue),d=Mt(l.doubleValue);return c===d?Hf(c)===Hf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return hl(n.arrayValue.values||[],e.arrayValue.values||[],es);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(pb(c)!==pb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!es(c[p],d[p])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function _c(n,e){return(n.values||[]).find((t=>es(t,e)))!==void 0}function fl(n,e){if(n===e)return 0;const t=Ur(n),s=Ur(e);if(t!==s)return Ge(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ge(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Mt(l.integerValue||l.doubleValue),p=Mt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return _b(n.timestampValue,e.timestampValue);case 4:return _b(pc(n),pc(e));case 5:return Ug(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=jr(l),p=jr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ge(d[g],p[g]);if(y!==0)return y}return Ge(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Ge(Mt(l.latitude),Mt(c.latitude));return d!==0?d:Ge(Mt(l.longitude),Mt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Qf]?.arrayValue,y=p[Qf]?.arrayValue,b=Ge(g?.values?.length||0,y?.values?.length||0);return b!==0?b:yb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===_f.mapValue&&c===_f.mapValue)return 0;if(l===_f.mapValue)return 1;if(c===_f.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let b=0;b<p.length&&b<y.length;++b){const w=Ug(p[b],y[b]);if(w!==0)return w;const D=fl(d[p[b]],g[y[b]]);if(D!==0)return D}return Ge(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{he:t})}}function _b(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ge(n,e);const t=Lr(n),s=Lr(e),a=Ge(t.seconds,s.seconds);return a!==0?a:Ge(t.nanos,s.nanos)}function yb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=fl(t[a],s[a]);if(l)return l}return Ge(t.length,s.length)}function dl(n){return Bg(n)}function Bg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Lr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return jr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return be.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Bg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Bg(t.fields[c])}`;return a+"}"})(n.mapValue):Ce(61005,{value:n})}function Rf(n){switch(Ur(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Id(n);return e?16+Rf(e):16;case 5:return 2*n.stringValue.length;case 6:return jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Rf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Gr(s.fields,((l,c)=>{a+=l.length+Rf(c)})),a})(n.mapValue);default:throw Ce(13486,{value:n})}}function vb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qg(n){return!!n&&"integerValue"in n}function B_(n){return!!n&&"arrayValue"in n}function Eb(n){return!!n&&"nullValue"in n}function Tb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xf(n){return!!n&&"mapValue"in n}function SD(n){return(n?.mapValue?.fields||{})[sS]?.stringValue===rS}function tc(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=tc(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tc(n.arrayValue.values[t]);return e}return{...n}}function AD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wD}/**
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
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tc(t)}setAll(e){let t=pn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=tc(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());xf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return es(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];xf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Gr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new jn(tc(this.value))}}function aS(n){const e=[];return Gr(n.fields,((t,s)=>{const a=new pn([t]);if(xf(s)){const l=aS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Wn(e)}/**
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
 */class wn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new wn(e,0,ke.min(),ke.min(),ke.min(),jn.empty(),0)}static newFoundDocument(e,t,s,a){return new wn(e,1,t,ke.min(),s,a,0)}static newNoDocument(e,t){return new wn(e,2,t,ke.min(),ke.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new wn(e,3,t,ke.min(),ke.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yf{constructor(e,t){this.position=e,this.inclusive=t}}function bb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(c.referenceValue),t.key):s=fl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function wb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!es(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yc{constructor(e,t="asc"){this.field=e,this.dir=t}}function CD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class oS{}class Ft extends oS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xD(e,t,s):t==="array-contains"?new DD(e,s):t==="in"?new kD(e,s):t==="not-in"?new OD(e,s):t==="array-contains-any"?new MD(e,s):new Ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ID(e,s):new ND(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fl(t,this.value)):t!==null&&Ur(this.value)===Ur(t)&&this.matchesComparison(fl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends oS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ri(e,t)}matches(e){return lS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lS(n){return n.op==="and"}function uS(n){return RD(n)&&lS(n)}function RD(n){for(const e of n.filters)if(e instanceof Ri)return!1;return!0}function Fg(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+dl(n.value);if(uS(n))return n.filters.map((e=>Fg(e))).join(",");{const e=n.filters.map((t=>Fg(t))).join(",");return`${n.op}(${e})`}}function cS(n,e){return n instanceof Ft?(function(s,a){return a instanceof Ft&&s.op===a.op&&s.field.isEqual(a.field)&&es(s.value,a.value)})(n,e):n instanceof Ri?(function(s,a){return a instanceof Ri&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&cS(c,a.filters[d])),!0):!1})(n,e):void Ce(19439)}function hS(n){return n instanceof Ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${dl(t.value)}`})(n):n instanceof Ri?(function(t){return t.op.toString()+" {"+t.getFilters().map(hS).join(" ,")+"}"})(n):"Filter"}class xD extends Ft{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class ID extends Ft{constructor(e,t){super(e,"in",t),this.keys=fS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ND extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=fS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fS(n,e){return(e.arrayValue?.values||[]).map((t=>be.fromName(t.referenceValue)))}class DD extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return B_(t)&&_c(t.arrayValue,this.value)}}class kD extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_c(this.value.arrayValue,t)}}class OD extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(_c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_c(this.value.arrayValue,t)}}class MD extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!B_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>_c(this.value.arrayValue,s)))}}/**
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
 */class PD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function Sb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new PD(n,e,t,s,a,l,c)}function q_(n){const e=Me(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Fg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),xd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>dl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>dl(s))).join(",")),e.Te=t}return e.Te}function F_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wb(n.startAt,e.startAt)&&wb(n.endAt,e.endAt)}function Hg(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VD(n,e,t,s,a,l,c,d){return new Nl(n,e,t,s,a,l,c,d)}function Nd(n){return new Nl(n)}function Ab(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dS(n){return n.collectionGroup!==null}function nc(n){const e=Me(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Zt(pn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new yc(l,s))})),t.has(pn.keyField().canonicalString())||e.Ie.push(new yc(pn.keyField(),s))}return e.Ie}function Ki(n){const e=Me(n);return e.Ee||(e.Ee=LD(e,nc(n))),e.Ee}function LD(n,e){if(n.limitType==="F")return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new yc(a.field,l)}));const t=n.endAt?new Yf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Yf(n.startAt.position,n.startAt.inclusive):null;return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Gg(n,e){const t=n.filters.concat([e]);return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Kf(n,e,t){return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dd(n,e){return F_(Ki(n),Ki(e))&&n.limitType===e.limitType}function mS(n){return`${q_(Ki(n))}|lt:${n.limitType}`}function Xo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>hS(a))).join(", ")}]`),xd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>dl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>dl(a))).join(",")),`Target(${s})`})(Ki(n))}; limitType=${n.limitType})`}function kd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of nc(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=bb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,nc(s),a)||s.endAt&&!(function(c,d,p){const g=bb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,nc(s),a))})(n,e)}function jD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pS(n){return(e,t)=>{let s=!1;for(const a of nc(n)){const l=UD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function UD(n,e,t){const s=n.field.isKeyField()?be.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?fl(p,g):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ce(19790,{direction:n.dir})}}/**
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
 */class Wa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Z1(this.inner)}size(){return this.innerSize}}/**
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
 */const zD=new Qt(be.comparator);function qs(){return zD}const gS=new Qt(be.comparator);function Xu(...n){let e=gS;for(const t of n)e=e.insert(t.key,t);return e}function _S(n){let e=gS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Oa(){return ic()}function yS(){return ic()}function ic(){return new Wa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const BD=new Qt(be.comparator),qD=new Zt(be.comparator);function Qe(...n){let e=qD;for(const t of n)e=e.add(t);return e}const FD=new Zt(Ge);function HD(){return FD}/**
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
 */function H_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hf(e)?"-0":e}}function vS(n){return{integerValue:""+n}}function GD(n,e){return yD(e)?vS(e):H_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Od{constructor(){this._=void 0}}function QD(n,e,t){return n instanceof vc?(function(a,l){const c={fields:{[tS]:{stringValue:eS},[iS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&z_(l)&&(l=Id(l)),l&&(c.fields[nS]=l),{mapValue:c}})(t,e):n instanceof ml?TS(n,e):n instanceof pl?bS(n,e):(function(a,l){const c=ES(a,l),d=Cb(c)+Cb(a.Ae);return qg(c)&&qg(a.Ae)?vS(d):H_(a.serializer,d)})(n,e)}function YD(n,e,t){return n instanceof ml?TS(n,e):n instanceof pl?bS(n,e):t}function ES(n,e){return n instanceof $f?(function(s){return qg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class vc extends Od{}class ml extends Od{constructor(e){super(),this.elements=e}}function TS(n,e){const t=wS(e);for(const s of n.elements)t.some((a=>es(a,s)))||t.push(s);return{arrayValue:{values:t}}}class pl extends Od{constructor(e){super(),this.elements=e}}function bS(n,e){let t=wS(e);for(const s of n.elements)t=t.filter((a=>!es(a,s)));return{arrayValue:{values:t}}}class $f extends Od{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cb(n){return Mt(n.integerValue||n.doubleValue)}function wS(n){return B_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class G_{constructor(e,t){this.field=e,this.transform=t}}function KD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof ml&&a instanceof ml||s instanceof pl&&a instanceof pl?hl(s.elements,a.elements,es):s instanceof $f&&a instanceof $f?es(s.Ae,a.Ae):s instanceof vc&&a instanceof vc})(n.transform,e.transform)}class $D{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function If(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Md{}function SS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pd(n.key,kn.none()):new Oc(n.key,n.data,kn.none());{const t=n.data,s=jn.empty();let a=new Zt(pn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Qr(n.key,s,new Wn(a.toArray()),kn.none())}}function XD(n,e,t){n instanceof Oc?(function(a,l,c){const d=a.value.clone(),p=xb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qr?(function(a,l,c){if(!If(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=xb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(AS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function sc(n,e,t,s){return n instanceof Oc?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=l.value.clone(),y=Ib(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Qr?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=Ib(l.fieldTransforms,p,c),y=c.data;return y.setAll(AS(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,c,d){return If(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function WD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=ES(s.transform,a||null);l!=null&&(t===null&&(t=jn.empty()),t.set(s.field,l))}return t||null}function Rb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&hl(s,a,((l,c)=>KD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oc extends Md{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Qr extends Md{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function AS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function xb(n,e,t){const s=new Map;nt(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,YD(c,d,t[a]))}return s}function Ib(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,QD(l,c,e))}return s}class Pd extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&XD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=sc(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=sc(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=yS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=SS(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ke.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Qe())}isEqual(e){return this.batchId===e.batchId&&hl(this.mutations,e.mutations,((t,s)=>Rb(t,s)))&&hl(this.baseMutations,e.baseMutations,((t,s)=>Rb(t,s)))}}class Q_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){nt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return BD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new Q_(e,t,s,a)}}/**
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
 */class ek{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Bt,Xe;function nk(n){switch(n){case $.OK:return Ce(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function CS(n){if(n===void 0)return Bs("GRPC error has no .code"),$.UNKNOWN;switch(n){case Bt.OK:return $.OK;case Bt.CANCELLED:return $.CANCELLED;case Bt.UNKNOWN:return $.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return $.INTERNAL;case Bt.UNAVAILABLE:return $.UNAVAILABLE;case Bt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Bt.NOT_FOUND:return $.NOT_FOUND;case Bt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Bt.ABORTED:return $.ABORTED;case Bt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Bt.DATA_LOSS:return $.DATA_LOSS;default:return Ce(39323,{code:n})}}(Xe=Bt||(Bt={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ik(){return new TextEncoder}/**
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
 */const sk=new Dr([4294967295,4294967295],0);function Nb(n){const e=ik().encode(n),t=new B1;return t.update(e),new Uint8Array(t.digest())}function Db(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Dr([t,s],0),new Dr([a,l],0)]}class Y_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Wu(`Invalid padding: ${t}`);if(s<0)throw new Wu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Wu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Wu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Dr.fromNumber(s)));return a.compare(sk)===1&&(a=new Dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Y_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vd(ke.min(),a,new Qt(Ge),qs(),Qe())}}class Mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Mc(s,t,Qe(),Qe(),Qe())}}/**
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
 */class Nf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class RS{constructor(e,t){this.targetId=e,this.Ce=t}}class xS{constructor(e,t,s=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class kb{constructor(){this.ve=0,this.Fe=Ob(),this.Me=_n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),t=Qe(),s=Qe();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ce(38017,{changeType:l})}})),new Mc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ob()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=qs(),this.Je=yf(),this.He=yf(),this.Ye=new Qt(Ge)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Hg(l))if(s===0){const c=new be(l.path);this.et(t,c,wn.newNoDocument(c,ke.min()))}else nt(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=jr(s).toUint8Array()}catch(p){if(p instanceof J1)return cl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Y_(c,a,l)}catch(p){return cl(p instanceof Wu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Hg(d.target)){const p=new be(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,wn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Qe();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Vd(e,t,this.Ye,this.je,s);return this.je=qs(),this.Je=yf(),this.He=yf(),this.Ye=new Qt(Ge),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Zt(Ge),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Zt(Ge),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function yf(){return new Qt(be.comparator)}function Ob(){return new Qt(be.comparator)}const ak={asc:"ASCENDING",desc:"DESCENDING"},ok={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qg(n,e){return n.useProto3Json||xd(e)?e:{value:e}}function Xf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ck(n,e){return Xf(n,e.toTimestamp())}function $i(n){return nt(!!n,49232),ke.fromTimestamp((function(t){const s=Lr(t);return new vt(s.seconds,s.nanos)})(n))}function K_(n,e){return Yg(n,e).canonicalString()}function Yg(n,e){const t=(function(a){return new pt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function NS(n){const e=pt.fromString(n);return nt(PS(e),10190,{key:e.toString()}),e}function Kg(n,e){return K_(n.databaseId,e.path)}function pg(n,e){const t=NS(e);if(t.get(1)!==n.databaseId.projectId)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(kS(t))}function DS(n,e){return K_(n.databaseId,e)}function hk(n){const e=NS(n);return e.length===4?pt.emptyPath():kS(e)}function $g(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kS(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Mb(n,e,t){return{name:Kg(n,e),fields:t.value.mapValue.fields}}function fk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ce(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(nt(y===void 0||typeof y=="string",58123),_n.fromBase64String(y||"")):(nt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),_n.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:CS(g.code);return new le(y,g.message||"")})(c);t=new xS(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=pg(n,s.document.name),l=$i(s.document.updateTime),c=s.document.createTime?$i(s.document.createTime):ke.min(),d=new jn({mapValue:{fields:s.document.fields}}),p=wn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Nf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=pg(n,s.document),l=s.readTime?$i(s.readTime):ke.min(),c=wn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Nf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=pg(n,s.document),l=s.removedTargetIds||[];t=new Nf([],l,a,null)}else{if(!("filter"in e))return Ce(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new tk(a,l),d=s.targetId;t=new RS(d,c)}}return t}function dk(n,e){let t;if(e instanceof Oc)t={update:Mb(n,e.key,e.value)};else if(e instanceof Pd)t={delete:Kg(n,e.key)};else if(e instanceof Qr)t={update:Mb(n,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof ZD))return Ce(16599,{Vt:e.type});t={verify:Kg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof vc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ml)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof pl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof $f)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Ce(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:ck(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ce(27497)})(n,e.precondition)),t}function mk(n,e){return n&&n.length>0?(nt(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?$i(a.updateTime):$i(l);return c.isEqual(ke.min())&&(c=$i(l)),new $D(c,a.transformResults||[])})(t,e)))):[]}function pk(n,e){return{documents:[DS(n,e.path)]}}function gk(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=DS(n,a);const l=(function(g){if(g.length!==0)return MS(Ri.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(w){return{field:Wo(w.field),direction:vk(w.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Qg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function _k(n){let e=hk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){nt(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(b){const w=OS(b);return w instanceof Ri&&uS(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(b){return b.map((w=>(function(V){return new yc(Zo(V.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(b){let w;return w=typeof b=="object"?b.value:b,xd(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(b){const w=!!b.before,D=b.values||[];return new Yf(D,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(b){const w=!b.before,D=b.values||[];return new Yf(D,w)})(t.endAt)),VD(e,a,c,l,d,"F",p,g)}function yk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function OS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Zo(t.unaryFilter.field);return Ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Zo(t.unaryFilter.field);return Ft.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Zo(t.unaryFilter.field);return Ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Zo(t.unaryFilter.field);return Ft.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ft.create(Zo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ri.create(t.compositeFilter.filters.map((s=>OS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function vk(n){return ak[n]}function Ek(n){return ok[n]}function Tk(n){return lk[n]}function Wo(n){return{fieldPath:n.canonicalString()}}function Zo(n){return pn.fromServerFormat(n.fieldPath)}function MS(n){return n instanceof Ft?(function(t){if(t.op==="=="){if(Tb(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tb(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wo(t.field),op:Ek(t.op),value:t.value}}})(n):n instanceof Ri?(function(t){const s=t.getFilters().map((a=>MS(a)));return s.length===1?s[0]:{compositeFilter:{op:Tk(t.op),filters:s}}})(n):Ce(54877,{filter:n})}function bk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function PS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Rr{constructor(e,t,s,a,l=ke.min(),c=ke.min(),d=_n.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wk{constructor(e){this.yt=e}}function Sk(n){const e=_k({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kf(e,e.limit,"L"):e}/**
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
 */class Ak{constructor(){this.Cn=new Ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Vr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Zt(pt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Zt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Pb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VS=41943040;class Ln{static withCacheSize(e){return new Ln(e,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ln.DEFAULT_COLLECTION_PERCENTILE=10,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ln.DEFAULT=new Ln(VS,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ln.DISABLED=new Ln(-1,0,0);/**
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
 */class gl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new gl(0)}static cr(){return new gl(-1)}}/**
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
 */const Vb="LruGarbageCollector",Rk=1048576;function Lb([n,e],[t,s]){const a=Ge(n,t);return a===0?Ge(e,s):a}class xk{constructor(e){this.Ir=e,this.buffer=new Zt(Lb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Lb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(Vb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Il(t)?he(Vb,"Ignoring IndexedDB error during garbage collection: ",t):await xl(t)}await this.Vr(3e5)}))}}class Nk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Rd.ce);const s=new xk(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Pb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,d=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(g=Date.now(),$o()<=He.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function Dk(n,e){return new Nk(n,e)}/**
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
 */class kk{constructor(){this.changes=new Wa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ok{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Mk{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&sc(s.mutation,a,Wn.empty(),vt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Qe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Qe()){const a=Oa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Xu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Oa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Qe())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=qs();const c=ic(),d=(function(){return ic()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Qr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),sc(y.mutation,g,y.mutation.getFieldMask(),vt.now())):c.set(g.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new Ok(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=ic();let a=new Qt(((c,d)=>c-d)),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Wn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const b=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,b)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,b=yS();y.forEach((w=>{if(!l.has(w)){const D=SS(t.get(w),s.get(w));D!==null&&b.set(w,D),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return J.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Oa());let d=mc,p=l;return c.next((g=>J.forEach(g,((y,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{p=p.insert(y,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Qe()))).next((y=>({batchId:d,changes:_S(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next((s=>{let a=Xu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Xu();return this.indexManager.getCollectionParents(e,l).next((d=>J.forEach(d,(p=>{const g=(function(b,w){return new Nl(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((b,w)=>{c=c.insert(b,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,wn.newInvalidDocument(y)))}));let d=Xu();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&sc(y.mutation,g,Wn.empty(),vt.now()),kd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
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
 */class Pk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return J.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:$i(a.createTime)}})(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Sk(a.bundledQuery),readTime:$i(a.readTime)}})(t)),J.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new Qt(be.comparator),this.qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Oa();return J.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Oa(),l=t.length+1,c=new be(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Qt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Oa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Oa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return J.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new ek(t,s));let l=this.qr.get(t);l===void 0&&(l=Qe(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Lk{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
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
 */class $_{constructor(){this.Qr=new Zt(an.$r),this.Ur=new Zt(an.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new an(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new an(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new be(new pt([])),s=new an(t,e),a=new an(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new be(new pt([])),s=new an(t,e),a=new an(t,e+1);let l=Qe();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new an(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class an{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return be.comparator(e.key,t.key)||Ge(e.Yr,t.Yr)}static Kr(e,t){return Ge(e.Yr,t.Yr)||be.comparator(e.key,t.key)}}/**
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
 */class jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Zt(an.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new JD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new an(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?U_:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new an(t,0),a=new an(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Zt(Ge);return t.forEach((a=>{const l=new an(a,0),c=new an(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const c=new an(new be(l),0);let d=new Zt(Ge);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),J.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){nt(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(t.mutations,(a=>{const l=new an(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new an(t,0),a=this.Zr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Uk{constructor(e){this.ri=e,this.docs=(function(){return new Qt(be.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():wn.newInvalidDocument(t))}getEntries(e,t){let s=qs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():wn.newInvalidDocument(a))})),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=qs();const c=t.path,d=new be(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||mD(dD(y),s)<=0||(a.has(y.key)||kd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ce(9500)}ii(e,t){return J.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zk(this)}getSize(e){return J.resolve(this.size)}}class zk extends kk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),J.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Bk{constructor(e){this.persistence=e,this.si=new Wa((t=>q_(t)),F_),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new $_,this.targetCount=0,this.ai=gl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),J.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new gl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Pr(t),J.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),J.waitFor(l).next((()=>a))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this._i.containsKey(t))}}/**
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
 */class LS{constructor(e,t){this.ui={},this.overlays={},this.ci=new Rd(0),this.li=!1,this.li=!0,this.hi=new Lk,this.referenceDelegate=e(this),this.Pi=new Bk(this),this.indexManager=new Ak,this.remoteDocumentCache=(function(a){return new Uk(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wk(t),this.Ii=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new jk(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new qk(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return J.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class qk extends gD{constructor(e){super(),this.currentSequenceNumber=e}}class X_{constructor(e){this.persistence=e,this.Ri=new $_,this.Vi=null}static mi(e){return new X_(e)}get fi(){if(this.Vi)return this.Vi;throw Ce(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(s=>{const a=be.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ke.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return J.or([()=>J.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Wf{constructor(e,t){this.persistence=e,this.pi=new Wa((s=>vD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Dk(this,t)}static mi(e,t){return new Wf(e,t)}Ei(){}di(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return J.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?J.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,ke.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rf(e.data.value)),t}br(e,t,s){return J.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class W_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Qe(),a=Qe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new W_(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Fk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Nx()?8:_D(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new Fk;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?($o()<=He.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):($o()<=He.DEBUG&&he("QueryEngine","Query:",Xo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?($o()<=He.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):J.resolve())}ys(e,t){if(Ab(t))return J.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Kf(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Kf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return Ab(t)||a.isEqual(ke.min())?J.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?J.resolve(null):($o()<=He.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Xo(t)),this.vs(e,c,t,fD(a,mc)).next((d=>d)))}))}Ds(e,t){let s=new Zt(pS(e));return t.forEach(((a,l)=>{kd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return $o()<=He.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Xo(t)),this.ps.getDocumentsMatchingQuery(e,t,Vr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const Z_="LocalStore",Gk=3e8;class Qk{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Qt(Ge),this.xs=new Wa((l=>q_(l)),F_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mk(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Yk(n,e,t,s){return new Qk(n,e,t,s)}async function jS(n,e){const t=Me(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function Kk(n,e){const t=Me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const b=g.batch,w=b.keys();let D=J.resolve();return w.forEach((V=>{D=D.next((()=>y.getEntry(p,V))).next((H=>{const B=g.docVersions.get(V);nt(B!==null,48541),H.version.compareTo(B)<0&&(b.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),y.addEntry(H)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(p,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function US(n){const e=Me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function $k(n,e){const t=Me(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,b)=>{const w=a.get(b);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,b).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,b))));let D=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?D=D.withResumeToken(_n.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,s)),a=a.insert(b,D),(function(H,B,ie){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=Gk?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(w,D,y)&&d.push(t.Pi.updateTargetData(l,D))}));let p=qs(),g=Qe();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(Xk(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(ke.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((b=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return J.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function Xk(n,e,t){let s=Qe(),a=Qe();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=qs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(Z_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function Wk(n,e){const t=Me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=U_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zk(n,e){const t=Me(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,J.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Rr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Xg(n,e,t){const s=Me(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Il(c))throw c;he(Z_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function jb(n,e,t){const s=Me(n);let a=ke.min(),l=Qe();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const b=Me(p),w=b.xs.get(y);return w!==void 0?J.resolve(b.Ms.get(w)):b.Pi.getTargetData(g,y)})(s,c,Ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:ke.min(),t?l:Qe()))).next((d=>(Jk(s,jD(e),d),{documents:d,Qs:l})))))}function Jk(n,e,t){let s=n.Os.get(e)||ke.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Ub{constructor(){this.activeTargetIds=HD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eO{constructor(){this.Mo=new Ub,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ub,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tO{Oo(e){}shutdown(){}}/**
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
 */const zb="ConnectivityMonitor";class Bb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(zb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(zb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let vf=null;function Wg(){return vf===null?vf=(function(){return 268435456+Math.round(2147483648*Math.random())})():vf++,"0x"+vf.toString(16)}/**
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
 */const gg="RestConnection",nO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Gf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Wg(),d=this.zo(e,t.toUriEncodedString());he(gg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Hr(g);return this.Jo(e,d,p,s,y).then((b=>(he(gg,`Received RPC '${e}' ${c}: `,b),b)),(b=>{throw cl(gg,`RPC '${e}' ${c} failed with error: `,b,"url: ",d,"request:",s),b}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=nO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class sO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Tn="WebChannelConnection";class rO extends iO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Wg();return new Promise(((d,p)=>{const g=new q1;g.setWithCredentials(!0),g.listenOnce(F1.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Cf.NO_ERROR:const b=g.getResponseJson();he(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),d(b);break;case Cf.TIMEOUT:he(Tn,`RPC '${e}' ${c} timed out`),p(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const w=g.getStatus();if(he(Tn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const V=D?.error;if(V&&V.status&&V.message){const H=(function(ie){const ae=ie.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ae)>=0?ae:$.UNKNOWN})(V.status);p(new le(H,V.message))}else p(new le($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new le($.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(Tn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);he(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Wg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Q1(),d=G1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(Tn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const b=c.createWebChannel(y,p);this.I_(b);let w=!1,D=!1;const V=new sO({Yo:B=>{D?he(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(w||(he(Tn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),w=!0),he(Tn,`RPC '${e}' stream ${a} sending:`,B),b.send(B))},Zo:()=>b.close()}),H=(B,ie,ae)=>{B.listen(ie,(ue=>{try{ae(ue)}catch(ye){setTimeout((()=>{throw ye}),0)}}))};return H(b,$u.EventType.OPEN,(()=>{D||(he(Tn,`RPC '${e}' stream ${a} transport opened.`),V.o_())})),H(b,$u.EventType.CLOSE,(()=>{D||(D=!0,he(Tn,`RPC '${e}' stream ${a} transport closed`),V.a_(),this.E_(b))})),H(b,$u.EventType.ERROR,(B=>{D||(D=!0,cl(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),V.a_(new le($.UNAVAILABLE,"The operation could not be completed")))})),H(b,$u.EventType.MESSAGE,(B=>{if(!D){const ie=B.data[0];nt(!!ie,16349);const ae=ie,ue=ae?.error||ae[0]?.error;if(ue){he(Tn,`RPC '${e}' stream ${a} received error:`,ue);const ye=ue.status;let de=(function(C){const I=Bt[C];if(I!==void 0)return CS(I)})(ye),ge=ue.message;de===void 0&&(de=$.INTERNAL,ge="Unknown error status: "+ye+" with message "+ue.message),D=!0,V.a_(new le(de,ge)),b.close()}else he(Tn,`RPC '${e}' stream ${a} received:`,ie),V.u_(ie)}})),H(d,H1.STAT_EVENT,(B=>{B.stat===jg.PROXY?he(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===jg.NOPROXY&&he(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function _g(){return typeof document<"u"?document:null}/**
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
 */function Ld(n){return new uk(n,!0)}/**
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
 */class zS{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const qb="PersistentStream";class BS{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zS(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Bs(t.toString()),Bs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new le($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(qb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(he(qb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aO extends BS{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ke.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?$i(c.readTime):ke.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$g(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Hg(p)?{documents:pk(l,p)}:{query:gk(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=IS(l,c.resumeToken);const g=Qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(ke.min())>0){d.readTime=Xf(l,c.snapshotVersion.toTimestamp());const g=Qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=yk(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$g(this.serializer),t.removeTarget=e,this.q_(t)}}class oO extends BS{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return nt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,nt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){nt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mk(e.writeResults,e.commitTime),s=$i(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$g(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>dk(this.serializer,s)))};this.q_(t)}}/**
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
 */class lO{}class uO extends lO{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Yg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new le($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Yg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new le($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class cO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bs(t),this.aa=!1):he("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ga="RemoteStore";class hO{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Za(this)&&(he(Ga,"Restarting streams for network reachability change."),await(async function(p){const g=Me(p);g.Ea.add(4),await Pc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await jd(g)})(this))}))})),this.Ra=new cO(s,a)}}async function jd(n){if(Za(n))for(const e of n.da)await e(!0)}async function Pc(n){for(const e of n.da)await e(!1)}function qS(n,e){const t=Me(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ny(t)?ty(t):Dl(t).O_()&&ey(t,e))}function J_(n,e){const t=Me(n),s=Dl(t);t.Ia.delete(e),s.O_()&&FS(t,e),t.Ia.size===0&&(s.O_()?s.L_():Za(t)&&t.Ra.set("Unknown"))}function ey(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Dl(n).Y_(e)}function FS(n,e){n.Va.Ue(e),Dl(n).Z_(e)}function ty(n){n.Va=new rk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Dl(n).start(),n.Ra.ua()}function ny(n){return Za(n)&&!Dl(n).x_()&&n.Ia.size>0}function Za(n){return Me(n).Ea.size===0}function HS(n){n.Va=void 0}async function fO(n){n.Ra.set("Online")}async function dO(n){n.Ia.forEach(((e,t)=>{ey(n,e)}))}async function mO(n,e){HS(n),ny(n)?(n.Ra.ha(e),ty(n)):n.Ra.set("Unknown")}async function pO(n,e,t){if(n.Ra.set("Online"),e instanceof xS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){he(Ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zf(n,s)}else if(e instanceof Nf?n.Va.Ze(e):e instanceof RS?n.Va.st(e):n.Va.tt(e),!t.isEqual(ke.min()))try{const s=await US(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(_n.EMPTY_BYTE_STRING,y.snapshotVersion)),FS(l,p);const b=new Rr(y.target,p,g,y.sequenceNumber);ey(l,b)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){he(Ga,"Failed to raise snapshot:",s),await Zf(n,s)}}async function Zf(n,e,t){if(!Il(e))throw e;n.Ea.add(1),await Pc(n),n.Ra.set("Offline"),t||(t=()=>US(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(Ga,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await jd(n)}))}function GS(n,e){return e().catch((t=>Zf(n,t,e)))}async function Ud(n){const e=Me(n),t=zr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:U_;for(;gO(e);)try{const a=await Wk(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,_O(e,a)}catch(a){await Zf(e,a)}QS(e)&&YS(e)}function gO(n){return Za(n)&&n.Ta.length<10}function _O(n,e){n.Ta.push(e);const t=zr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function QS(n){return Za(n)&&!zr(n).x_()&&n.Ta.length>0}function YS(n){zr(n).start()}async function yO(n){zr(n).ra()}async function vO(n){const e=zr(n);for(const t of n.Ta)e.ea(t.mutations)}async function EO(n,e,t){const s=n.Ta.shift(),a=Q_.from(s,e,t);await GS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Ud(n)}async function TO(n,e){e&&zr(n).X_&&await(async function(s,a){if((function(c){return nk(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();zr(s).B_(),await GS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Ud(s)}})(n,e),QS(n)&&YS(n)}async function Fb(n,e){const t=Me(n);t.asyncQueue.verifyOperationInProgress(),he(Ga,"RemoteStore received new credentials");const s=Za(t);t.Ea.add(3),await Pc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await jd(t)}async function bO(n,e){const t=Me(n);e?(t.Ea.delete(2),await jd(t)):e||(t.Ea.add(2),await Pc(t),t.Ra.set("Unknown"))}function Dl(n){return n.ma||(n.ma=(function(t,s,a){const l=Me(t);return l.sa(),new aO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:fO.bind(null,n),t_:dO.bind(null,n),r_:mO.bind(null,n),H_:pO.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ny(n)?ty(n):n.Ra.set("Unknown")):(await n.ma.stop(),HS(n))}))),n.ma}function zr(n){return n.fa||(n.fa=(function(t,s,a){const l=Me(t);return l.sa(),new oO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yO.bind(null,n),r_:TO.bind(null,n),ta:vO.bind(null,n),na:EO.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ud(n)):(await n.fa.stop(),n.Ta.length>0&&(he(Ga,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class iy{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new iy(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sy(n,e){if(Bs("AsyncQueue",`${e}: ${n}`),Il(n))return new le($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class sl{static emptySet(e){return new sl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=Xu(),this.sortedSet=new Qt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new sl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Hb{constructor(){this.ga=new Qt(be.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ce(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _l{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new _l(e,t,sl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class wO{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class SO{constructor(){this.queries=Gb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Me(t),l=a.queries;a.queries=Gb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new le($.ABORTED,"Firestore shutting down"))}}function Gb(){return new Wa((n=>mS(n)),Dd)}async function ry(n,e){const t=Me(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new wO,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=sy(c,`Initialization of query '${Xo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&oy(t)}async function ay(n,e){const t=Me(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function AO(n,e){const t=Me(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&oy(t)}function CO(n,e,t){const s=Me(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function oy(n){n.Ca.forEach((e=>{e.next()}))}var Zg,Qb;(Qb=Zg||(Zg={})).Ma="default",Qb.Cache="cache";class ly{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new _l(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_l.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zg.Cache}}/**
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
 */class KS{constructor(e){this.key=e}}class $S{constructor(e){this.key=e}}class RO{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=pS(e),this.tu=new sl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Hb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,b)=>{const w=a.get(y),D=kd(this.query,b)?b:null,V=!!w&&this.mutatedKeys.has(w.key),H=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let B=!1;w&&D?w.data.isEqual(D.data)?V!==H&&(s.track({type:3,doc:D}),B=!0):this.su(w,D)||(s.track({type:2,doc:D}),B=!0,(p&&this.eu(D,p)>0||g&&this.eu(D,g)<0)&&(d=!0)):!w&&D?(s.track({type:0,doc:D}),B=!0):w&&!D&&(s.track({type:1,doc:w}),B=!0,(p||g)&&(d=!0)),B&&(D?(c=c.add(D),l=H?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,b)=>(function(D,V){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Rt:B})}};return H(D)-H(V)})(y.type,b.type)||this.eu(y.doc,b.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new _l(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new $S(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new KS(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Qe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _l.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const uy="SyncEngine";class xO{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IO{constructor(e){this.key=e,this.hu=!1}}class NO{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Wa((d=>mS(d)),Dd),this.Iu=new Map,this.Eu=new Set,this.du=new Qt(be.comparator),this.Au=new Map,this.Ru=new $_,this.Vu={},this.mu=new Map,this.fu=gl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DO(n,e,t=!0){const s=tA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await XS(s,e,t,!0),a}async function kO(n,e){const t=tA(n);await XS(t,e,!0,!1)}async function XS(n,e,t,s){const a=await Zk(n.localStore,Ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await OO(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&qS(n.remoteStore,a),d}async function OO(n,e,t,s,a){n.pu=(b,w,D)=>(async function(H,B,ie,ae){let ue=B.view.ru(ie);ue.Cs&&(ue=await jb(H.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,ue))));const ye=ae&&ae.targetChanges.get(B.targetId),de=ae&&ae.targetMismatches.get(B.targetId)!=null,ge=B.view.applyChanges(ue,H.isPrimaryClient,ye,de);return Kb(H,B.targetId,ge.au),ge.snapshot})(n,b,w,D);const l=await jb(n.localStore,e,!0),c=new RO(e,l.Qs),d=c.ru(l.documents),p=Mc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Kb(n,t,g.au);const y=new xO(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function MO(n,e,t){const s=Me(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Dd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Xg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&J_(s.remoteStore,a.targetId),Jg(s,a.targetId)})).catch(xl)):(Jg(s,a.targetId),await Xg(s.localStore,a.targetId,!0))}async function PO(n,e){const t=Me(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),J_(t.remoteStore,s.targetId))}async function VO(n,e,t){const s=FO(n);try{const a=await(function(c,d){const p=Me(c),g=vt.now(),y=d.reduce(((D,V)=>D.add(V.key)),Qe());let b,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let V=qs(),H=Qe();return p.Ns.getEntries(D,y).next((B=>{V=B,V.forEach(((ie,ae)=>{ae.isValidDocument()||(H=H.add(ie))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,V))).next((B=>{b=B;const ie=[];for(const ae of d){const ue=WD(ae,b.get(ae.key).overlayedDocument);ue!=null&&ie.push(new Qr(ae.key,ue,aS(ue.value.mapValue),kn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,ie,d)})).next((B=>{w=B;const ie=B.applyToLocalDocumentSet(b,H);return p.documentOverlayCache.saveOverlays(D,B.batchId,ie)}))})).then((()=>({batchId:w.batchId,changes:_S(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Qt(Ge)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Vc(s,a.changes),await Ud(s.remoteStore)}catch(a){const l=sy(a,"Failed to persist write");t.reject(l)}}async function WS(n,e){const t=Me(n);try{const s=await $k(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(nt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?nt(c.hu,14607):a.removedDocuments.size>0&&(nt(c.hu,42227),c.hu=!1))})),await Vc(t,s,e)}catch(s){await xl(s)}}function Yb(n,e,t){const s=Me(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Me(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,b)=>{for(const w of b.Sa)w.va(d)&&(g=!0)})),g&&oy(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LO(n,e,t){const s=Me(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Qt(be.comparator);c=c.insert(l,wn.newNoDocument(l,ke.min()));const d=Qe().add(l),p=new Vd(ke.min(),new Map,new Qt(Ge),c,d);await WS(s,p),s.du=s.du.remove(l),s.Au.delete(e),cy(s)}else await Xg(s.localStore,e,!1).then((()=>Jg(s,e,t))).catch(xl)}async function jO(n,e){const t=Me(n),s=e.batch.batchId;try{const a=await Kk(t.localStore,e);JS(t,s,null),ZS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Vc(t,a)}catch(a){await xl(a)}}async function UO(n,e,t){const s=Me(n);try{const a=await(function(c,d){const p=Me(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((b=>(nt(b!==null,37113),y=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);JS(s,e,t),ZS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Vc(s,a)}catch(a){await xl(a)}}function ZS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function JS(n,e,t){const s=Me(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Jg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||eA(n,s)}))}function eA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(J_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),cy(n))}function Kb(n,e,t){for(const s of t)s instanceof KS?(n.Ru.addReference(s.key,e),zO(n,s)):s instanceof $S?(he(uy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||eA(n,s.key)):Ce(19791,{wu:s})}function zO(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(he(uy,"New document in limbo: "+t),n.Eu.add(s),cy(n))}function cy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new be(pt.fromString(e)),s=n.fu.next();n.Au.set(s,new IO(t)),n.du=n.du.insert(t,s),qS(n.remoteStore,new Rr(Ki(Nd(t.path)),s,"TargetPurposeLimboResolution",Rd.ce))}}async function Vc(n,e,t){const s=Me(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=W_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=Me(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>J.forEach(g,(w=>J.forEach(w.Es,(D=>y.persistence.referenceDelegate.addReference(b,w.targetId,D))).next((()=>J.forEach(w.ds,(D=>y.persistence.referenceDelegate.removeReference(b,w.targetId,D)))))))))}catch(b){if(!Il(b))throw b;he(Z_,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const D=y.Ms.get(w),V=D.snapshotVersion,H=D.withLastLimboFreeSnapshotVersion(V);y.Ms=y.Ms.insert(w,H)}}})(s.localStore,l))}async function BO(n,e){const t=Me(n);if(!t.currentUser.isEqual(e)){he(uy,"User change. New user:",e.toKey());const s=await jS(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new le($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vc(t,s.Ls)}}function qO(n,e){const t=Me(n),s=t.Au.get(e);if(s&&s.hu)return Qe().add(s.key);{let a=Qe();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function tA(n){const e=Me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=WS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LO.bind(null,e),e.Pu.H_=AO.bind(null,e.eventManager),e.Pu.yu=CO.bind(null,e.eventManager),e}function FO(n){const e=Me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UO.bind(null,e),e}class Jf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ld(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Yk(this.persistence,new Hk,e.initialUser,this.serializer)}Cu(e){return new LS(X_.mi,this.serializer)}Du(e){return new eO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jf.provider={build:()=>new Jf};class HO extends Jf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){nt(this.persistence.referenceDelegate instanceof Wf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ik(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ln.withCacheSize(this.cacheSizeBytes):Ln.DEFAULT;return new LS((s=>Wf.mi(s,t)),this.serializer)}}class e_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BO.bind(null,this.syncEngine),await bO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SO})()}createDatastore(e){const t=Ld(e.databaseInfo.databaseId),s=(function(l){return new rO(l)})(e.databaseInfo);return(function(l,c,d,p){return new uO(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new hO(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Yb(this.syncEngine,t,0)),(function(){return Bb.v()?new Bb:new tO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const b=new NO(a,l,c,d,p,g);return y&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Me(t);he(Ga,"RemoteStore shutting down."),s.Ea.add(5),await Pc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}e_.provider={build:()=>new e_};/**
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
 */class hy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Br="FirestoreClient";class GO{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bn.UNAUTHENTICATED,this.clientId=j_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{he(Br,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(he(Br,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=sy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function yg(n,e){n.asyncQueue.verifyOperationInProgress(),he(Br,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await jS(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function $b(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QO(n);he(Br,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Fb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Fb(e.remoteStore,a))),n._onlineComponents=e}async function QO(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Br,"Using user provided OfflineComponentProvider");try{await yg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;cl("Error using user provided cache. Falling back to memory cache: "+t),await yg(n,new Jf)}}else he(Br,"Using default OfflineComponentProvider"),await yg(n,new HO(void 0));return n._offlineComponents}async function nA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Br,"Using user provided OnlineComponentProvider"),await $b(n,n._uninitializedComponentsProvider._online)):(he(Br,"Using default OnlineComponentProvider"),await $b(n,new e_))),n._onlineComponents}function YO(n){return nA(n).then((e=>e.syncEngine))}async function ed(n){const e=await nA(n),t=e.eventManager;return t.onListen=DO.bind(null,e.syncEngine),t.onUnlisten=MO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PO.bind(null,e.syncEngine),t}function KO(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new hy({next:w=>{y.Nu(),c.enqueueAndForget((()=>ay(l,b)));const D=w.docs.has(d);!D&&w.fromCache?g.reject(new le($.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&p&&p.source==="server"?g.reject(new le($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new ly(Nd(d.path),y,{includeMetadataChanges:!0,qa:!0});return ry(l,b)})(await ed(n),n.asyncQueue,e,t,s))),s.promise}function $O(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new hy({next:w=>{y.Nu(),c.enqueueAndForget((()=>ay(l,b))),w.fromCache&&p.source==="server"?g.reject(new le($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new ly(d,y,{includeMetadataChanges:!0,qa:!0});return ry(l,b)})(await ed(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function iA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Xb=new Map;/**
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
 */const sA="firestore.googleapis.com",Wb=!0;class Zb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sA,this.ssl=Wb}else this.host=e.host,this.ssl=e.ssl??Wb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rk)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tD;switch(s.type){case"firstParty":return new rD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Xb.get(t);s&&(he("ComponentProvider","Removing Datastore"),Xb.delete(t),s.terminate())})(this),Promise.resolve()}}function XO(n,e,t,s={}){n=Dn(n,zd);const a=Hr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(w_(`https://${d}`),S_("Firestore",!0)),l.host!==sA&&l.host!==d&&cl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Zi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=bn.MOCK_USER;else{g=n1(s.mockUserToken,n._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new bn(b)}n._authCredentials=new nD(new K1(g,y))}}/**
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
 */class Qs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class xt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}toJSON(){return{type:xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(kc(t,xt._jsonSchema))return new xt(e,s||null,new be(pt.fromString(t.referencePath)))}}xt._jsonSchemaVersion="firestore/documentReference/1.0",xt._jsonSchema={type:Gt("string",xt._jsonSchemaVersion),referencePath:Gt("string")};class Or extends Qs{constructor(e,t,s){super(e,t,Nd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new be(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Ht(n,e,...t){if(n=gt(n),$1("collection","path",e),n instanceof zd){const s=pt.fromString(e,...t);return hb(s),new Or(n,null,s)}{if(!(n instanceof xt||n instanceof Or))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return hb(s),new Or(n.firestore,null,s)}}function yt(n,e,...t){if(n=gt(n),arguments.length===1&&(e=j_.newId()),$1("doc","path",e),n instanceof zd){const s=pt.fromString(e,...t);return cb(s),new xt(n,null,new be(s))}{if(!(n instanceof xt||n instanceof Or))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return cb(s),new xt(n.firestore,n instanceof Or?n.converter:null,new be(s))}}/**
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
 */const Jb="AsyncQueue";class ew{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zS(this,"async_queue_retry"),this._c=()=>{const s=_g();s&&he(Jb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=_g();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=_g();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ls;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Il(e))throw e;he(Jb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Bs("INTERNAL UNHANDLED ERROR: ",tw(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=iy.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Ce(47125,{Pc:tw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function tw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function nw(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class ts extends zd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new ew,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ew(e),this._firestoreClient=void 0,await e}}}function WO(n,e){const t=typeof n=="object"?n:R_(),s=typeof n=="string"?n:Gf,a=bd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Jw("firestore");l&&XO(a,...l)}return a}function Lc(n){if(n._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZO(n),n._firestoreClient}function ZO(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new bD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,iA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new GO(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(_n.fromBase64String(e))}catch(t){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hi(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kc(e,hi._jsonSchema))return hi.fromBase64String(e.bytes)}}hi._jsonSchemaVersion="firestore/bytes/1.0",hi._jsonSchema={type:Gt("string",hi._jsonSchemaVersion),bytes:Gt("string")};/**
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
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kl{constructor(e){this._methodName=e}}/**
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
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(kc(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:Gt("string",Xi._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Wi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kc(e,Wi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wi(e.vectorValues);throw new le($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wi._jsonSchemaVersion="firestore/vectorValue/1.0",Wi._jsonSchema={type:Gt("string",Wi._jsonSchemaVersion),vectorValues:Gt("object")};/**
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
 */const JO=/^__.*__$/;class eM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oc(e,this.data,t,this.fieldTransforms)}}class rA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ac:n})}}class Bd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return td(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aA(this.Ac)&&JO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ld(e)}Cc(e,t,s,a=!1){return new Bd({Ac:e,methodName:t,Dc:s,path:pn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uc(n){const e=n._freezeSettings(),t=Ld(n._databaseId);return new tM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fy(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);gy("Data must be an object, but it was:",c,s);const d=cA(s,c);let p,g;if(l.merge)p=new Wn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const b of l.mergeFields){const w=t_(e,b,t);if(!c.contains(w))throw new le($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);fA(y,w)||y.push(w)}p=new Wn(y),g=c.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=c.fieldTransforms;return new eM(new jn(d),p,g)}class qd extends kl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qd}}function oA(n,e,t){return new Bd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dy extends kl{_toFieldTransform(e){return new G_(e.path,new vc)}isEqual(e){return e instanceof dy}}class my extends kl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=oA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new ml(s);return new G_(e.path,a)}isEqual(e){return e instanceof my&&Zi(this.vc,e.vc)}}class py extends kl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=oA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new pl(s);return new G_(e.path,a)}isEqual(e){return e instanceof py&&Zi(this.vc,e.vc)}}function lA(n,e,t,s){const a=n.Cc(1,e,t);gy("Data must be an object, but it was:",a,s);const l=[],c=jn.empty();Gr(s,((p,g)=>{const y=_y(e,p,t);g=gt(g);const b=a.yc(y);if(g instanceof qd)l.push(y);else{const w=Ja(g,b);w!=null&&(l.push(y),c.set(y,w))}}));const d=new Wn(l);return new rA(c,d,a.fieldTransforms)}function uA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[t_(e,s,t)],p=[a];if(l.length%2!=0)throw new le($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(t_(e,l[w])),p.push(l[w+1]);const g=[],y=jn.empty();for(let w=d.length-1;w>=0;--w)if(!fA(g,d[w])){const D=d[w];let V=p[w];V=gt(V);const H=c.yc(D);if(V instanceof qd)g.push(D);else{const B=Ja(V,H);B!=null&&(g.push(D),y.set(D,B))}}const b=new Wn(g);return new rA(y,b,c.fieldTransforms)}function nM(n,e,t,s=!1){return Ja(t,n.Cc(s?4:3,e))}function Ja(n,e){if(hA(n=gt(n)))return gy("Unsupported field value:",e,n),cA(n,e);if(n instanceof kl)return(function(s,a){if(!aA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Ja(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=vt.fromDate(s);return{timestampValue:Xf(a.serializer,l)}}if(s instanceof vt){const l=new vt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xf(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof hi)return{bytesValue:IS(a.serializer,s._byteString)};if(s instanceof xt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:K_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Wi)return(function(c,d){return{mapValue:{fields:{[sS]:{stringValue:rS},[Qf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return H_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Cd(s)}`)})(n,e)}function cA(n,e){const t={};return Z1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(n,((s,a)=>{const l=Ja(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function hA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Xi||n instanceof hi||n instanceof xt||n instanceof kl||n instanceof Wi)}function gy(n,e,t){if(!hA(t)||!X1(t)){const s=Cd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function t_(n,e,t){if((e=gt(e))instanceof jc)return e._internalPath;if(typeof e=="string")return _y(n,e);throw td("Field path arguments must be of type string or ",n,!1,void 0,t)}const iM=new RegExp("[~\\*/\\[\\]]");function _y(n,e,t){if(e.search(iM)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function td(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new le($.INVALID_ARGUMENT,d+n+p)}function fA(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class dA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sM extends dA{data(){return super.data()}}function Fd(n,e){return typeof e=="string"?_y(n,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
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
 */function mA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new le($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{}class vy extends yy{}function gn(n,e,...t){let s=[];e instanceof yy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof Ey)).length,d=l.filter((p=>p instanceof Hd)).length;if(c>1||c>0&&d>0)throw new le($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Hd extends vy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Hd(e,t,s)}_apply(e){const t=this._parse(e);return _A(e._query,t),new Qs(e.firestore,e.converter,Gg(e._query,t))}_parse(e){const t=Uc(e.firestore);return(function(l,c,d,p,g,y,b){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new le($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){sw(b,y);const V=[];for(const H of b)V.push(iw(p,l,H));w={arrayValue:{values:V}}}else w=iw(p,l,b)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||sw(b,y),w=nM(d,c,b,y==="in"||y==="not-in");return Ft.create(g,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function bt(n,e,t){const s=e,a=Fd("where",n);return Hd._create(a,s,t)}class Ey extends yy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ey(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ri.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)_A(c,p),c=Gg(c,p)})(e._query,t),new Qs(e.firestore,e.converter,Gg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ty extends vy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ty(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new le($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new le($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yc(l,c)})(e._query,this._field,this._direction);return new Qs(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Nl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function pA(n,e="asc"){const t=e,s=Fd("orderBy",n);return Ty._create(s,t)}class by extends vy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new by(e,t,s)}_apply(e){return new Qs(e.firestore,e.converter,Kf(e._query,this._limit,this._limitType))}}function gA(n){return by._create("limit",n,"F")}function iw(n,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new le($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dS(e)&&t.indexOf("/")!==-1)throw new le($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(pt.fromString(t));if(!be.isDocumentKey(s))throw new le($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vb(n,new be(s))}if(t instanceof xt)return vb(n,t._key);throw new le($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cd(t)}.`)}function sw(n,e){if(!Array.isArray(n)||n.length===0)throw new le($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _A(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new le($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rM{convertValue(e,t="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Qf].arrayValue?.values?.map((s=>Mt(s.doubleValue)));return new Wi(t)}convertGeoPoint(e){return new Xi(Mt(e.latitude),Mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(pc(e));default:return null}}convertTimestamp(e){const t=Lr(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pt.fromString(e);nt(PS(s),9688,{name:e});const a=new gc(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||Bs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function wy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Zu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends dA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Fd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Va._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:Gt("string",Va._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class Df extends Va{data(e={}){return super.data(e)}}class La{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Zu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Df(this._firestore,this._userDataWriter,s.key,s,new Zu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Zu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Zu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:aM(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=j_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
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
 */function nd(n){n=Dn(n,xt);const e=Dn(n.firestore,ts);return KO(Lc(e),n._key).then((t=>yA(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Gt("string",La._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class Sy extends rM{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function id(n){n=Dn(n,Qs);const e=Dn(n.firestore,ts),t=Lc(e),s=new Sy(e);return mA(n._query),$O(t,n._query).then((a=>new La(e,s,n,a)))}function oM(n,e,t){n=Dn(n,xt);const s=Dn(n.firestore,ts),a=wy(n.converter,e,t);return zc(s,[fy(Uc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,kn.none())])}function Ot(n,e,t,...s){n=Dn(n,xt);const a=Dn(n.firestore,ts),l=Uc(a);let c;return c=typeof(e=gt(e))=="string"||e instanceof jc?uA(l,"updateDoc",n._key,e,t,s):lA(l,"updateDoc",n._key,e),zc(a,[c.toMutation(n._key,kn.exists(!0))])}function n_(n){return zc(Dn(n.firestore,ts),[new Pd(n._key,kn.none())])}function Ay(n,e){const t=Dn(n.firestore,ts),s=yt(n),a=wy(n.converter,e);return zc(t,[fy(Uc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then((()=>s))}function Sn(n,...e){n=gt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||nw(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(nw(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof xt)c=Dn(n.firestore,ts),d=Nd(n._key.path),l={next:p=>{e[s]&&e[s](yA(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Qs);c=Dn(p.firestore,ts),d=p._query;const g=new Sy(c);l={next:y=>{e[s]&&e[s](new La(c,g,p,y))},error:e[s+1],complete:e[s+2]},mA(n._query)}return(function(g,y,b,w){const D=new hy(w),V=new ly(y,D,b);return g.asyncQueue.enqueueAndForget((async()=>ry(await ed(g),V))),()=>{D.Nu(),g.asyncQueue.enqueueAndForget((async()=>ay(await ed(g),V)))}})(Lc(c),d,a,l)}function zc(n,e){return(function(s,a){const l=new Ls;return s.asyncQueue.enqueueAndForget((async()=>VO(await YO(s),a,l))),l.promise})(Lc(n),e)}function yA(n,e,t){const s=t.docs.get(e._key),a=new Sy(n);return new Va(n,a,e._key,s,new Zu(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class lM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uc(e)}set(e,t,s){this._verifyNotCommitted();const a=vg(e,this._firestore),l=wy(a.converter,t,s),c=fy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,kn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=vg(e,this._firestore);let c;return c=typeof(t=gt(t))=="string"||t instanceof jc?uA(this._dataReader,"WriteBatch.update",l._key,t,s,a):lA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,kn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vg(e,this._firestore);return this._mutations=this._mutations.concat(new Pd(t._key,kn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new le($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vg(n,e){if((n=gt(n)).firestore!==e)throw new le($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function yl(){return new dy("serverTimestamp")}function ja(...n){return new my("arrayUnion",n)}function Da(...n){return new py("arrayRemove",n)}/**
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
 */function Eg(n){return Lc(n=Dn(n,ts)),new lM(n,(e=>zc(n,e)))}(function(e,t=!0){(function(a){Rl=a})(Xa),Ba(new Pr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ts(new iD(s.getProvider("auth-internal")),new aD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Qi(ab,ob,e),Qi(ab,ob,"esm2020")})();var rw={};const aw="@firebase/database",ow="1.1.0";/**
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
 */let vA="";function uM(n){vA=n}/**
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
 */class cM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ln(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:hc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const EA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cM(e)}}catch{}return new hM},Ma=EA("localStorage"),fM=EA("sessionStorage");/**
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
 */const rl=new Td("@firebase/database"),dM=(function(){let n=1;return function(){return n++}})(),TA=function(n){const e=qx(n),t=new jx;t.update(e);const s=t.digest();return b_.encodeByteArray(s)},Bc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bc.apply(null,s):typeof s=="object"?e+=ln(s):e+=s,e+=" "}return e};let rc=null,lw=!0;const mM=function(n,e){re(!0,"Can't turn on custom loggers persistently."),rl.logLevel=He.VERBOSE,rc=rl.log.bind(rl)},mn=function(...n){if(lw===!0&&(lw=!1,rc===null&&fM.get("logging_enabled")===!0&&mM()),rc){const e=Bc.apply(null,n);rc(e)}},qc=function(n){return function(...e){mn(n,...e)}},i_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Bc(...n);rl.error(e)},Fs=function(...n){const e=`FIREBASE FATAL ERROR: ${Bc(...n)}`;throw rl.error(e),new Error(e)},Bn=function(...n){const e="FIREBASE WARNING: "+Bc(...n);rl.warn(e)},pM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gM=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vl="[MIN_NAME]",Qa="[MAX_NAME]",eo=function(n,e){if(n===e)return 0;if(n===vl||e===Qa)return-1;if(e===vl||n===Qa)return 1;{const t=uw(n),s=uw(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},_M=function(n,e){return n===e?0:n<e?-1:1},Gu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ln(e))},Cy=function(n){if(typeof n!="object"||n===null)return ln(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ln(e[s]),t+=":",t+=Cy(n[e[s]]);return t+="}",t},bA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wA=function(n){re(!Gd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let b="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),b=b+w}return b.toLowerCase()},yM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EM(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const TM=new RegExp("^-?(0*)\\d{1,10}$"),bM=-2147483648,wM=2147483647,uw=function(n){if(TM.test(n)){const e=Number(n);if(e>=bM&&e<=wM)return e}return null},Ol=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},SM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ac=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class AM{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class CM{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class kf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kf.OWNER="owner";/**
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
 */const Ry="5",SA="v",AA="s",CA="r",RA="f",xA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IA="ls",NA="p",s_="ac",DA="websocket",kA="long_polling";/**
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
 */class OA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function RM(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function MA(n,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let s;if(e===DA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RM(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
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
 */class xM{constructor(){this.counters_={}}incrementCounter(e,t=1){ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _x(this.counters_)}}/**
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
 */const Tg={},bg={};function xy(n){const e=n.toString();return Tg[e]||(Tg[e]=new xM),Tg[e]}function IM(n,e){const t=n.toString();return bg[t]||(bg[t]=e()),bg[t]}/**
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
 */class NM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ol(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cw="start",DM="close",kM="pLPCommand",OM="pRTLPCB",PA="id",VA="pw",LA="ser",MM="cb",PM="seg",VM="ts",LM="d",jM="dframe",jA=1870,UA=30,UM=jA-UA,zM=25e3,BM=3e4;class Jo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qc(e),this.stats_=xy(t),this.urlFn=p=>(this.appCheckToken&&(p[s_]=this.appCheckToken),MA(t,kA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BM)),gM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Iy((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===cw)this.id=d,this.password=p;else if(c===DM)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[cw]="t",s[LA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[SA]=Ry,this.transportSessionId&&(s[AA]=this.transportSessionId),this.lastSessionId&&(s[IA]=this.lastSessionId),this.applicationId&&(s[NA]=this.applicationId),this.appCheckToken&&(s[s_]=this.appCheckToken),typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(s[CA]=RA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jo.forceAllow_=!0}static forceDisallow(){Jo.forceDisallow_=!0}static isAvailable(){return Jo.forceAllow_?!0:!Jo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yM()&&!vM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Xw(t),a=bA(s,UM);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[jM]="t",s[PA]=e,s[VA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ln(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Iy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dM(),window[kM+this.uniqueCallbackIdentifier]=e,window[OM+this.uniqueCallbackIdentifier]=t,this.myIFrame=Iy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){mn("frame writing exception"),d.stack&&mn(d.stack),mn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[PA]=this.myID,e[VA]=this.myPW,e[LA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UA+s.length<=jA;){const c=this.pendingSegs.shift();s=s+"&"+PM+a+"="+c.seg+"&"+VM+a+"="+c.ts+"&"+LM+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(zM)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const qM=16384,FM=45e3;let sd=null;typeof MozWebSocket<"u"?sd=MozWebSocket:typeof WebSocket<"u"&&(sd=WebSocket);class bi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qc(this.connId),this.stats_=xy(t),this.connURL=bi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[SA]=Ry,typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(c[CA]=RA),t&&(c[AA]=t),s&&(c[IA]=s),a&&(c[s_]=a),l&&(c[NA]=l),MA(e,DA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;Ix(),this.mySock=new sd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&sd!==null&&!bi.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=hc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=bA(t,qM);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FM))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bi.responsesRequiredToBeHealthy=2;bi.healthyTimeout=3e4;/**
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
 */class Ec{static get ALL_TRANSPORTS(){return[Jo,bi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=bi&&bi.isAvailable();let s=t&&!bi.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bi];else{const a=this.transports_=[];for(const l of Ec.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ec.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ec.globalTransportInitialized_=!1;/**
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
 */const HM=6e4,GM=5e3,QM=10*1024,YM=100*1024,wg="t",hw="d",KM="s",fw="r",$M="e",dw="o",mw="a",pw="n",gw="p",XM="h";class WM{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qc("c:"+this.id+":"),this.transportManager_=new Ec(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ac(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wg in e){const t=e[wg];t===mw?this.upgradeIfSecondaryHealthy_():t===fw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===dw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Gu("t",e),s=Gu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Gu("t",e),s=Gu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Gu(wg,e);if(hw in e){const s=e[hw];if(t===XM){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===pw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===KM?this.onConnectionShutdown_(s):t===fw?this.onReset_(s):t===$M?i_("Server Error: "+s):t===dw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):i_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ry!==s&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ac(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ac(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class BA{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class rd extends BA{static getInstance(){return new rd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!A_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _w=32,yw=768;class rt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function et(){return new rt("")}function je(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qr(n){return n.pieces_.length-n.pieceNum_}function dt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new rt(n.pieces_,e)}function Ny(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ZM(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Tc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new rt(e,0)}function Pt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof rt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new rt(t,0)}function ze(n){return n.pieceNum_>=n.pieces_.length}function Un(n,e){const t=je(n),s=je(e);if(t===null)return e;if(t===s)return Un(dt(n),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function JM(n,e){const t=Tc(n,0),s=Tc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=eo(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Dy(n,e){if(qr(n)!==qr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(qr(n)>qr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class e4{constructor(e,t){this.errorPrefix_=t,this.parts_=Tc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ed(this.parts_[s]);FA(this)}}function t4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ed(e),FA(n)}function n4(n){const e=n.parts_.pop();n.byteLength_-=Ed(e),n.parts_.length>0&&(n.byteLength_-=1)}function FA(n){if(n.byteLength_>yw)throw new Error(n.errorPrefix_+"has a key path longer than "+yw+" bytes ("+n.byteLength_+").");if(n.parts_.length>_w)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_w+") or object contains a cycle "+Na(n))}function Na(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ky extends BA{static getInstance(){return new ky}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qu=1e3,i4=300*1e3,vw=30*1e3,s4=1.3,r4=3e4,a4="server_kill",Ew=3;class js extends zA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=js.nextPersistentConnectionId_++,this.log_=qc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qu,this.maxReconnectDelay_=i4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ky.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(ln(l)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ks,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;js.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ns(e,"w")){const s=ll(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Vx(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ln(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):i_("Unrecognized action received from server: "+ln(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>r4&&(this.reconnectDelay_=Qu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*s4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+js.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(b){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(b)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?mn("getToken() completed but was canceled"):(mn("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=w&&w.token,d=new WM(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,D=>{Bn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(a4)},l))}catch(b){this.log_("Failed to get token: "+b),c||(this.repoInfo_.nodeAdmin&&Bn(b),p())}}}interrupt(e){mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pf(this.interruptReasons_)&&(this.reconnectDelay_=Qu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Cy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new rt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){mn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ew&&(this.reconnectDelay_=vw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ew&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vA.replace(/\./g,"-")]=1,A_()?e["framework.cordova"]=1:i1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rd.getInstance().currentlyOnline();return Pf(this.interruptReasons_)&&e}}js.nextPersistentConnectionId_=0;js.nextConnectionId_=0;/**
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
 */class Be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Be(e,t)}}/**
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
 */class Qd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Be(vl,e),a=new Be(vl,t);return this.compare(s,a)!==0}minPost(){return Be.MIN}}/**
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
 */let Ef;class HA extends Qd{static get __EMPTY_NODE(){return Ef}static set __EMPTY_NODE(e){Ef=e}compare(e,t){return eo(e.name,t.name)}isDefinedOn(e){throw Sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Be.MIN}maxPost(){return new Be(Qa,Ef)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Be(e,Ef)}toString(){return".key"}}const al=new HA;/**
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
 */class Tf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class on{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??on.RED,this.left=a??zn.EMPTY_NODE,this.right=l??zn.EMPTY_NODE}copy(e,t,s,a,l){return new on(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return zn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return zn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}on.RED=!0;on.BLACK=!1;class o4{copy(e,t,s,a,l){return this}insert(e,t,s){return new on(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zn{constructor(e,t=zn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,on.BLACK,null,null))}remove(e){return new zn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,on.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tf(this.root_,null,this.comparator_,!0,e)}}zn.EMPTY_NODE=new o4;/**
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
 */function l4(n,e){return eo(n.name,e.name)}function Oy(n,e){return eo(n,e)}/**
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
 */let r_;function u4(n){r_=n}const GA=function(n){return typeof n=="number"?"number:"+wA(n):"string:"+n},QA=function(n){if(n.isLeafNode()){const e=n.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ns(e,".sv"),"Priority must be a string or number.")}else re(n===r_||n.isEmpty(),"priority of unexpected type.");re(n===r_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tw;class rn{static set __childrenNodeConstructor(e){Tw=e}static get __childrenNodeConstructor(){return Tw}constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ze(e)?this:je(e)===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=je(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||qr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wA(this.value_):e+=this.value_,this.lazyHash_=TA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=rn.VALUE_TYPE_ORDER.indexOf(t),l=rn.VALUE_TYPE_ORDER.indexOf(s);return re(a>=0,"Unknown leaf type: "+t),re(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let YA,KA;function c4(n){YA=n}function h4(n){KA=n}class f4 extends Qd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Be.MIN}maxPost(){return new Be(Qa,new rn("[PRIORITY-POST]",KA))}makePost(e,t){const s=YA(e);return new Be(t,new rn("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new f4;/**
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
 */const d4=Math.log(2);class m4{constructor(e){const t=l=>parseInt(Math.log(l)/d4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ad=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let b,w;if(y===0)return null;if(y===1)return b=n[p],w=t?t(b):b,new on(w,b.node,on.BLACK,null,null);{const D=parseInt(y/2,10)+p,V=a(p,D),H=a(D+1,g);return b=n[D],w=t?t(b):b,new on(w,b.node,on.BLACK,V,H)}},l=function(p){let g=null,y=null,b=n.length;const w=function(V,H){const B=b-V,ie=b;b-=V;const ae=a(B+1,ie),ue=n[B],ye=t?t(ue):ue;D(new on(ye,ue.node,H,null,ae))},D=function(V){g?(g.left=V,g=V):(y=V,g=V)};for(let V=0;V<p.count;++V){const H=p.nextBitIsOne(),B=Math.pow(2,p.count-(V+1));H?w(B,on.BLACK):(w(B,on.BLACK),w(B,on.RED))}return y},c=new m4(n.length),d=l(c);return new zn(s||e,d)};/**
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
 */let Sg;const Ko={};class Vs{static get Default(){return re(Ko&&At,"ChildrenNode.ts has not been loaded"),Sg=Sg||new Vs({".priority":Ko},{".priority":At}),Sg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ll(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zn?t:null}hasIndex(e){return ns(this.indexSet_,e.toString())}addIndex(e,t){re(e!==al,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Be.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=ad(s,e.getCompare()):d=Ko;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new Vs(y,g)}addToIndexes(e,t){const s=Vf(this.indexes_,(a,l)=>{const c=ll(this.indexSet_,l);if(re(c,"Missing index implementation for "+l),a===Ko)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Be.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),ad(d,c.getCompare())}else return Ko;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Be(e.name,d))),p.insert(e,e.node)}});return new Vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Vf(this.indexes_,a=>{if(a===Ko)return a;{const l=t.get(e.name);return l?a.remove(new Be(e.name,l)):a}});return new Vs(s,this.indexSet_)}}/**
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
 */let Yu;class xe{static get EMPTY_NODE(){return Yu||(Yu=new xe(new zn(Oy),null,Vs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&QA(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yu}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Yu:t}}getChild(e){const t=je(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Be(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Yu:this.priorityNode_;return new xe(a,c,l)}}updateChild(e,t){const s=je(e);if(s===null)return t;{re(je(e)!==".priority"||qr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(dt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(At,(c,d)=>{t[c]=d.val(e),s++,l&&xe.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GA(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":TA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Be(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Be(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Be.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Be.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fc?-1:0}withIndex(e){if(e===al||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===al||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),a=t.getIterator(At);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===al?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p4 extends xe{constructor(){super(new zn(Oy),xe.EMPTY_NODE,Vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const Fc=new p4;Object.defineProperties(Be,{MIN:{value:new Be(vl,xe.EMPTY_NODE)},MAX:{value:new Be(Qa,Fc)}});HA.__EMPTY_NODE=xe.EMPTY_NODE;rn.__childrenNodeConstructor=xe;u4(Fc);h4(Fc);/**
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
 */const g4=!0;function qt(n,e=null){if(n===null)return xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new rn(t,qt(e))}if(!(n instanceof Array)&&g4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=qt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Be(c,p)))}}),t.length===0)return xe.EMPTY_NODE;const l=ad(t,l4,c=>c.name,Oy);if(s){const c=ad(t,At.getCompare());return new xe(l,qt(e),new Vs({".priority":c},{".priority":At}))}else return new xe(l,qt(e),Vs.Default)}else{let t=xe.EMPTY_NODE;return Cn(n,(s,a)=>{if(ns(n,s)&&s.substring(0,1)!=="."){const l=qt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(qt(e))}}c4(qt);/**
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
 */class _4 extends Qd{constructor(e){super(),this.indexPath_=e,re(!ze(e)&&je(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}makePost(e,t){const s=qt(e),a=xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Be(t,a)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,Fc);return new Be(Qa,e)}toString(){return Tc(this.indexPath_,0).join("/")}}/**
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
 */class y4 extends Qd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?eo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Be.MIN}maxPost(){return Be.MAX}makePost(e,t){const s=qt(e);return new Be(t,s)}toString(){return".value"}}const v4=new y4;/**
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
 */function $A(n){return{type:"value",snapshotNode:n}}function El(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function E4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class My{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(bc(t,d)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(El(t,s)):c.trackChildChange(wc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(At,(a,l)=>{t.hasChild(a)||s.trackChildChange(bc(a,l))}),t.isLeafNode()||t.forEachChild(At,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(wc(a,l,c))}else s.trackChildChange(El(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Sc{constructor(e){this.indexedFilter_=new My(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sc.getStartPost_(e),this.endPost_=Sc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Be(t,s))||(s=xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=xe.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(xe.EMPTY_NODE);const l=this;return t.forEachChild(At,(c,d)=>{l.matches(new Be(c,d))||(a=a.updateImmediateChild(c,xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class T4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Be(t,s))||(s=xe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=xe.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(xe.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const b=this.index_.getCompare();c=(w,D)=>b(D,w)}else c=this.index_.getCompare();const d=e;re(d.numChildren()===this.limit_,"");const p=new Be(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const b=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const D=w==null?1:c(w,p);if(y&&!s.isEmpty()&&D>=0)return l?.trackChildChange(wc(t,s,b)),d.updateImmediateChild(t,s);{l?.trackChildChange(bc(t,b));const H=d.updateImmediateChild(t,xe.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(El(w.name,w.node)),H.updateImmediateChild(w.name,w.node)):H}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(bc(g.name,g.node)),l.trackChildChange(El(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,xe.EMPTY_NODE)):e}}/**
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
 */class Py{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vl}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Py;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b4(n){return n.loadsAllData()?new My(n.getIndex()):n.hasLimit()?new T4(n):new Sc(n)}function bw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===v4?t="$value":n.index_===al?t="$key":(re(n.index_ instanceof _4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ln(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ln(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ln(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ln(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ln(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ww(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
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
 */class od extends zA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=qc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=od.getListenId_(e,s),d={};this.listens_[c]=d;const p=bw(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let b=y;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),ll(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=od.getListenId_(e,t);delete this.listens_[s]}get(e){const t=bw(e._queryParams),s=e._path.toString(),a=new ks;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Al(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=hc(d.responseText)}catch{Bn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Bn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
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
 */class w4{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ld(){return{value:null,children:new Map}}function Ml(n,e,t){if(ze(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=je(e);n.children.has(s)||n.children.set(s,ld());const a=n.children.get(s);e=dt(e),Ml(a,e,t)}}function a_(n,e){if(ze(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(At,(s,a)=>{Ml(n,new rt(s),a)}),a_(n,e)}}else if(n.children.size>0){const t=je(e);return e=dt(e),n.children.has(t)&&a_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function o_(n,e,t){n.value!==null?t(e,n.value):S4(n,(s,a)=>{const l=new rt(e.toString()+"/"+s);o_(a,l,t)})}function S4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class A4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Cn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const Sw=10*1e3,C4=30*1e3,R4=300*1e3;class x4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new A4(e);const s=Sw+(C4-Sw)*Math.random();ac(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ns(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ac(this.reportStats_.bind(this),Math.floor(Math.random()*2*R4))}}/**
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
 */var Si;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Si||(Si={}));function XA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ly(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class ud{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Si.ACK_USER_WRITE,this.source=XA()}operationForChild(e){if(ze(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new rt(e));return new ud(et(),t,this.revert)}}else return re(je(this.path)===e,"operationForChild called for unrelated child."),new ud(dt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ac{constructor(e,t){this.source=e,this.path=t,this.type=Si.LISTEN_COMPLETE}operationForChild(e){return ze(this.path)?new Ac(this.source,et()):new Ac(this.source,dt(this.path))}}/**
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
 */class Ya{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Si.OVERWRITE}operationForChild(e){return ze(this.path)?new Ya(this.source,et(),this.snap.getImmediateChild(e)):new Ya(this.source,dt(this.path),this.snap)}}/**
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
 */class Cc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Si.MERGE}operationForChild(e){if(ze(this.path)){const t=this.children.subtree(new rt(e));return t.isEmpty()?null:t.value?new Ya(this.source,et(),t.value):new Cc(this.source,et(),t)}else return re(je(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cc(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ka{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ze(e))return this.isFullyInitialized()&&!this.filtered_;const t=je(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class I4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function N4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(E4(c.childName,c.snapshotNode))}),Ku(n,a,"child_removed",e,s,t),Ku(n,a,"child_added",e,s,t),Ku(n,a,"child_moved",l,s,t),Ku(n,a,"child_changed",e,s,t),Ku(n,a,"value",e,s,t),a}function Ku(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>k4(n,d,p)),c.forEach(d=>{const p=D4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function D4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function k4(n,e,t){if(e.childName==null||t.childName==null)throw Sl("Should only compare child_ events.");const s=new Be(e.childName,e.snapshotNode),a=new Be(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
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
 */function Yd(n,e){return{eventCache:n,serverCache:e}}function oc(n,e,t,s){return Yd(new Ka(e,t,s),n.serverCache)}function WA(n,e,t,s){return Yd(n.eventCache,new Ka(e,t,s))}function l_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function $a(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ag;const O4=()=>(Ag||(Ag=new zn(_M)),Ag);class _t{static fromObject(e){let t=new _t(null);return Cn(e,(s,a)=>{t=t.set(new rt(s),a)}),t}constructor(e,t=O4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:et(),value:this.value};if(ze(e))return null;{const s=je(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(dt(e),t);return l!=null?{path:Pt(new rt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ze(e))return this;{const t=je(e),s=this.children.get(t);return s!==null?s.subtree(dt(e)):new _t(null)}}set(e,t){if(ze(e))return new _t(t,this.children);{const s=je(e),l=(this.children.get(s)||new _t(null)).set(dt(e),t),c=this.children.insert(s,l);return new _t(this.value,c)}}remove(e){if(ze(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const t=je(e),s=this.children.get(t);if(s){const a=s.remove(dt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new _t(null):new _t(this.value,l)}else return this}}get(e){if(ze(e))return this.value;{const t=je(e),s=this.children.get(t);return s?s.get(dt(e)):null}}setTree(e,t){if(ze(e))return t;{const s=je(e),l=(this.children.get(s)||new _t(null)).setTree(dt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new _t(this.value,c)}}fold(e){return this.fold_(et(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Pt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,et(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(ze(e))return null;{const l=je(e),c=this.children.get(l);return c?c.findOnPath_(dt(e),Pt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,et(),t)}foreachOnPath_(e,t,s){if(ze(e))return this;{this.value&&s(t,this.value);const a=je(e),l=this.children.get(a);return l?l.foreachOnPath_(dt(e),Pt(t,a),s):new _t(null)}}foreach(e){this.foreach_(et(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Pt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ci{constructor(e){this.writeTree_=e}static empty(){return new Ci(new _t(null))}}function lc(n,e,t){if(ze(e))return new Ci(new _t(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Un(a,e);return l=l.updateChild(c,t),new Ci(n.writeTree_.set(a,l))}else{const a=new _t(t),l=n.writeTree_.setTree(e,a);return new Ci(l)}}}function Aw(n,e,t){let s=n;return Cn(t,(a,l)=>{s=lc(s,Pt(e,a),l)}),s}function Cw(n,e){if(ze(e))return Ci.empty();{const t=n.writeTree_.setTree(e,new _t(null));return new Ci(t)}}function u_(n,e){return to(n,e)!=null}function to(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Un(t.path,e)):null}function Rw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,a)=>{e.push(new Be(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Be(s,a.value))}),e}function Mr(n,e){if(ze(e))return n;{const t=to(n,e);return t!=null?new Ci(new _t(t)):new Ci(n.writeTree_.subtree(e))}}function c_(n){return n.writeTree_.isEmpty()}function Tl(n,e){return ZA(et(),n.writeTree_,e)}function ZA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(re(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=ZA(Pt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Pt(n,".priority"),s)),t}}/**
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
 */function jy(n,e){return nC(e,n)}function M4(n,e,t,s,a){re(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=lc(n.visibleWrites,e,t)),n.lastWriteId=s}function P4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function V4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&L4(d,s.path)?a=!1:fi(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return j4(n),!0;if(s.snap)n.visibleWrites=Cw(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=Cw(n.visibleWrites,Pt(s.path,p))})}return!0}else return!1}function L4(n,e){if(n.snap)return fi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fi(Pt(n.path,t),e))return!0;return!1}function j4(n){n.visibleWrites=JA(n.allWrites,U4,et()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function U4(n){return n.visible}function JA(n,e,t){let s=Ci.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)fi(t,c)?(d=Un(t,c),s=lc(s,d,l.snap)):fi(c,t)&&(d=Un(c,t),s=lc(s,et(),l.snap.getChild(d)));else if(l.children){if(fi(t,c))d=Un(t,c),s=Aw(s,d,l.children);else if(fi(c,t))if(d=Un(c,t),ze(d))s=Aw(s,et(),l.children);else{const p=ll(l.children,je(d));if(p){const g=p.getChild(dt(d));s=lc(s,et(),g)}}}else throw Sl("WriteRecord should have .snap or .children")}}return s}function eC(n,e,t,s,a){if(!s&&!a){const l=to(n.visibleWrites,e);if(l!=null)return l;{const c=Mr(n.visibleWrites,e);if(c_(c))return t;if(t==null&&!u_(c,et()))return null;{const d=t||xe.EMPTY_NODE;return Tl(c,d)}}}else{const l=Mr(n.visibleWrites,e);if(!a&&c_(l))return t;if(!a&&t==null&&!u_(l,et()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(fi(g.path,e)||fi(e,g.path))},d=JA(n.allWrites,c,e),p=t||xe.EMPTY_NODE;return Tl(d,p)}}}function z4(n,e,t){let s=xe.EMPTY_NODE;const a=to(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(At,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Mr(n.visibleWrites,e);return t.forEachChild(At,(c,d)=>{const p=Tl(Mr(l,new rt(c)),d);s=s.updateImmediateChild(c,p)}),Rw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Mr(n.visibleWrites,e);return Rw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function B4(n,e,t,s,a){re(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Pt(e,t);if(u_(n.visibleWrites,l))return null;{const c=Mr(n.visibleWrites,l);return c_(c)?a.getChild(t):Tl(c,a.getChild(t))}}function q4(n,e,t,s){const a=Pt(e,t),l=to(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Mr(n.visibleWrites,a);return Tl(c,s.getNode().getImmediateChild(t))}else return null}function F4(n,e){return to(n.visibleWrites,e)}function H4(n,e,t,s,a,l,c){let d;const p=Mr(n.visibleWrites,e),g=to(p,et());if(g!=null)d=g;else if(t!=null)d=Tl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],b=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let D=w.getNext();for(;D&&y.length<a;)b(D,s)!==0&&y.push(D),D=w.getNext();return y}else return[]}function G4(){return{visibleWrites:Ci.empty(),allWrites:[],lastWriteId:-1}}function cd(n,e,t,s){return eC(n.writeTree,n.treePath,e,t,s)}function Uy(n,e){return z4(n.writeTree,n.treePath,e)}function xw(n,e,t,s){return B4(n.writeTree,n.treePath,e,t,s)}function hd(n,e){return F4(n.writeTree,Pt(n.treePath,e))}function Q4(n,e,t,s,a,l){return H4(n.writeTree,n.treePath,e,t,s,a,l)}function zy(n,e,t){return q4(n.writeTree,n.treePath,e,t)}function tC(n,e){return nC(Pt(n.treePath,e),n.writeTree)}function nC(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Y4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,wc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,bc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,El(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,wc(s,e.snapshotNode,a.oldSnap));else throw Sl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class K4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const iC=new K4;class By{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ka(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$a(this.viewCache_),l=Q4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function $4(n){return{filter:n}}function X4(n,e){re(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function W4(n,e,t,s,a){const l=new Y4;let c,d;if(t.type===Si.OVERWRITE){const g=t;g.source.fromUser?c=h_(n,e,g.path,g.snap,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!ze(g.path),c=fd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Si.MERGE){const g=t;g.source.fromUser?c=J4(n,e,g.path,g.children,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=f_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Si.ACK_USER_WRITE){const g=t;g.revert?c=nP(n,e,g.path,s,a,l):c=eP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Si.LISTEN_COMPLETE)c=tP(n,e,t.path,s,l);else throw Sl("Unknown operation type: "+t.type);const p=l.getChanges();return Z4(e,c,p),{viewCache:c,changes:p}}function Z4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=l_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push($A(l_(e)))}}function sC(n,e,t,s,a,l){const c=e.eventCache;if(hd(s,t)!=null)return e;{let d,p;if(ze(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=$a(e),y=g instanceof xe?g:xe.EMPTY_NODE,b=Uy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=cd(s,$a(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=je(t);if(g===".priority"){re(qr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const b=xw(s,t,y,p);b!=null?d=n.filter.updatePriority(y,b):d=c.getNode()}else{const y=dt(t);let b;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=xw(s,t,c.getNode(),p);w!=null?b=c.getNode().getImmediateChild(g).updateChild(y,w):b=c.getNode().getImmediateChild(g)}else b=zy(s,g,e.serverCache);b!=null?d=n.filter.updateChild(c.getNode(),g,b,y,a,l):d=c.getNode()}}return oc(e,d,c.isFullyInitialized()||ze(t),n.filter.filtersNodes())}}function fd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(ze(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const D=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),D,null)}else{const D=je(t);if(!p.isCompleteForPath(t)&&qr(t)>1)return e;const V=dt(t),B=p.getNode().getImmediateChild(D).updateChild(V,s);D===".priority"?g=y.updatePriority(p.getNode(),B):g=y.updateChild(p.getNode(),D,B,V,iC,null)}const b=WA(e,g,p.isFullyInitialized()||ze(t),y.filtersNodes()),w=new By(a,b,l);return sC(n,b,t,a,w,d)}function h_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new By(a,e,l);if(ze(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=oc(e,g,!0,n.filter.filtersNodes());else{const b=je(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=oc(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=dt(t),D=d.getNode().getImmediateChild(b);let V;if(ze(w))V=s;else{const H=y.getCompleteChild(b);H!=null?Ny(w)===".priority"&&H.getChild(qA(w)).isEmpty()?V=H:V=H.updateChild(w,s):V=xe.EMPTY_NODE}if(D.equals(V))p=e;else{const H=n.filter.updateChild(d.getNode(),b,V,w,y,c);p=oc(e,H,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Iw(n,e){return n.eventCache.isCompleteForChild(e)}function J4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Pt(t,p);Iw(e,je(y))&&(d=h_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Pt(t,p);Iw(e,je(y))||(d=h_(n,d,y,g,a,l,c))}),d}function Nw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function f_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ze(t)?g=s:g=new _t(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((b,w)=>{if(y.hasChild(b)){const D=e.serverCache.getNode().getImmediateChild(b),V=Nw(n,D,w);p=fd(n,p,new rt(b),V,a,l,c,d)}}),g.children.inorderTraversal((b,w)=>{const D=!e.serverCache.isCompleteForChild(b)&&w.value===null;if(!y.hasChild(b)&&!D){const V=e.serverCache.getNode().getImmediateChild(b),H=Nw(n,V,w);p=fd(n,p,new rt(b),H,a,l,c,d)}}),p}function eP(n,e,t,s,a,l,c){if(hd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ze(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return fd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(ze(t)){let g=new _t(null);return p.getNode().forEachChild(al,(y,b)=>{g=g.set(new rt(y),b)}),f_(n,e,t,g,a,l,d,c)}else return e}else{let g=new _t(null);return s.foreach((y,b)=>{const w=Pt(t,y);p.isCompleteForPath(w)&&(g=g.set(y,p.getNode().getChild(w)))}),f_(n,e,t,g,a,l,d,c)}}function tP(n,e,t,s,a){const l=e.serverCache,c=WA(e,l.getNode(),l.isFullyInitialized()||ze(t),l.isFiltered());return sC(n,c,t,s,iC,a)}function nP(n,e,t,s,a,l){let c;if(hd(s,t)!=null)return e;{const d=new By(s,e,a),p=e.eventCache.getNode();let g;if(ze(t)||je(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=cd(s,$a(e));else{const b=e.serverCache.getNode();re(b instanceof xe,"serverChildren would be complete if leaf node"),y=Uy(s,b)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=je(t);let b=zy(s,y,e.serverCache);b==null&&e.serverCache.isCompleteForChild(y)&&(b=p.getImmediateChild(y)),b!=null?g=n.filter.updateChild(p,y,b,dt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,xe.EMPTY_NODE,dt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=cd(s,$a(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||hd(s,et())!=null,oc(e,g,c,n.filter.filtersNodes())}}/**
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
 */class iP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new My(s.getIndex()),l=b4(s);this.processor_=$4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(xe.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(xe.EMPTY_NODE,d.getNode(),null),y=new Ka(p,c.isFullyInitialized(),a.filtersNodes()),b=new Ka(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Yd(b,y),this.eventGenerator_=new I4(this.query_)}get query(){return this.query_}}function sP(n){return n.viewCache_.serverCache.getNode()}function rP(n,e){const t=$a(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ze(e)&&!t.getImmediateChild(je(e)).isEmpty())?t.getChild(e):null}function Dw(n){return n.eventRegistrations_.length===0}function aP(n,e){n.eventRegistrations_.push(e)}function kw(n,e,t){const s=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function Ow(n,e,t,s){e.type===Si.MERGE&&e.source.queryId!==null&&(re($a(n.viewCache_),"We should always have a full cache before handling merges"),re(l_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=W4(n.processor_,a,e,t,s);return X4(n.processor_,l.viewCache),re(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,rC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function oP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(l,c)=>{s.push(El(l,c))}),t.isFullyInitialized()&&s.push($A(t.getNode())),rC(n,s,t.getNode(),e)}function rC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return N4(n.eventGenerator_,e,t,a)}/**
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
 */let dd;class lP{constructor(){this.views=new Map}}function uP(n){re(!dd,"__referenceConstructor has already been defined"),dd=n}function cP(){return re(dd,"Reference.ts has not been loaded"),dd}function hP(n){return n.views.size===0}function qy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return re(l!=null,"SyncTree gave us an op for an invalid query."),Ow(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Ow(c,e,t,s));return l}}function fP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=cd(t,a?s:null),p=!1;d?p=!0:s instanceof xe?(d=Uy(t,s),p=!1):(d=xe.EMPTY_NODE,p=!1);const g=Yd(new Ka(d,p,!1),new Ka(s,a,!1));return new iP(e,g)}return c}function dP(n,e,t,s,a,l){const c=fP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),aP(c,t),oP(c,t)}function mP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Fr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(kw(g,t,s)),Dw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(kw(p,t,s)),Dw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Fr(n)&&l.push(new(cP())(e._repo,e._path)),{removed:l,events:c}}function aC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ol(n,e){let t=null;for(const s of n.views.values())t=t||rP(s,e);return t}function oC(n,e){if(e._queryParams.loadsAllData())return Kd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function lC(n,e){return oC(n,e)!=null}function Fr(n){return Kd(n)!=null}function Kd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let md;function pP(n){re(!md,"__referenceConstructor has already been defined"),md=n}function gP(){return re(md,"Reference.ts has not been loaded"),md}let _P=1;class Mw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=G4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uC(n,e,t,s,a){return M4(n.pendingWriteTree_,e,t,s,a),a?Hc(n,new Ya(XA(),e,t)):[]}function Pa(n,e,t=!1){const s=P4(n.pendingWriteTree_,e);if(V4(n.pendingWriteTree_,e)){let l=new _t(null);return s.snap!=null?l=l.set(et(),!0):Cn(s.children,c=>{l=l.set(new rt(c),!0)}),Hc(n,new ud(s.path,l,t))}else return[]}function $d(n,e,t){return Hc(n,new Ya(Vy(),e,t))}function yP(n,e,t){const s=_t.fromObject(t);return Hc(n,new Cc(Vy(),e,s))}function vP(n,e){return Hc(n,new Ac(Vy(),e))}function EP(n,e,t){const s=Hy(n,t);if(s){const a=Gy(s),l=a.path,c=a.queryId,d=Un(l,e),p=new Ac(Ly(c),d);return Qy(n,l,p)}else return[]}function d_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||lC(c,e))){const p=mP(c,e,t,s);hP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,b=n.syncPointTree_.findOnPath(l,(w,D)=>Fr(D));if(y&&!b){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const D=wP(w);for(let V=0;V<D.length;++V){const H=D[V],B=H.query,ie=fC(n,H);n.listenProvider_.startListening(uc(B),pd(n,B),ie.hashFn,ie.onComplete)}}}!b&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(uc(e),null):g.forEach(w=>{const D=n.queryToTagMap.get(Xd(w));n.listenProvider_.stopListening(uc(w),D)}))}SP(n,g)}return d}function TP(n,e,t,s){const a=Hy(n,s);if(a!=null){const l=Gy(a),c=l.path,d=l.queryId,p=Un(c,e),g=new Ya(Ly(d),p,t);return Qy(n,c,g)}else return[]}function bP(n,e,t,s){const a=Hy(n,s);if(a){const l=Gy(a),c=l.path,d=l.queryId,p=Un(c,e),g=_t.fromObject(t),y=new Cc(Ly(d),p,g);return Qy(n,c,y)}else return[]}function Pw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,D)=>{const V=Un(w,a);l=l||ol(D,V),c=c||Fr(D)});let d=n.syncPointTree_.get(a);d?(c=c||Fr(d),l=l||ol(d,et())):(d=new lP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=xe.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((D,V)=>{const H=ol(V,et());H&&(l=l.updateImmediateChild(D,H))}));const g=lC(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Xd(e);re(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const D=AP();n.queryToTagMap.set(w,D),n.tagToQueryMap.set(D,w)}const y=jy(n.pendingWriteTree_,a);let b=dP(d,e,t,y,l,p);if(!g&&!c&&!s){const w=oC(d,e);b=b.concat(CP(n,e,w))}return b}function Fy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Un(c,e),g=ol(d,p);if(g)return g});return eC(a,e,l,t,!0)}function Hc(n,e){return cC(e,n.syncPointTree_,null,jy(n.pendingWriteTree_,et()))}function cC(n,e,t,s){if(ze(n.path))return hC(n,e,t,s);{const a=e.get(et());t==null&&a!=null&&(t=ol(a,et()));let l=[];const c=je(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=tC(s,c);l=l.concat(cC(d,p,g,y))}return a&&(l=l.concat(qy(a,n,s,t))),l}}function hC(n,e,t,s){const a=e.get(et());t==null&&a!=null&&(t=ol(a,et()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=tC(s,c),y=n.operationForChild(c);y&&(l=l.concat(hC(y,d,p,g)))}),a&&(l=l.concat(qy(a,n,s,t))),l}function fC(n,e){const t=e.query,s=pd(n,t);return{hashFn:()=>(sP(e)||xe.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?EP(n,t._path,s):vP(n,t._path);{const l=EM(a,t);return d_(n,t,null,l)}}}}function pd(n,e){const t=Xd(e);return n.queryToTagMap.get(t)}function Xd(n){return n._path.toString()+"$"+n._queryIdentifier}function Hy(n,e){return n.tagToQueryMap.get(e)}function Gy(n){const e=n.indexOf("$");return re(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new rt(n.substr(0,e))}}function Qy(n,e,t){const s=n.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const a=jy(n.pendingWriteTree_,e);return qy(s,t,a,null)}function wP(n){return n.fold((e,t,s)=>{if(t&&Fr(t))return[Kd(t)];{let a=[];return t&&(a=aC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function uc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(gP())(n._repo,n._path):n}function SP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Xd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function AP(){return _P++}function CP(n,e,t){const s=e._path,a=pd(n,e),l=fC(n,t),c=n.listenProvider_.startListening(uc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)re(!Fr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,b)=>{if(!ze(g)&&y&&Fr(y))return[Kd(y).query];{let w=[];return y&&(w=w.concat(aC(y).map(D=>D.query))),Cn(b,(D,V)=>{w=w.concat(V)}),w}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(uc(y),pd(n,y))}}return c}/**
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
 */class Yy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Yy(t)}node(){return this.node_}}class Ky{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new Ky(this.syncTree_,t)}node(){return Fy(this.syncTree_,this.path_)}}const RP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Vw=function(n,e,t){if(!n||typeof n!="object")return n;if(re(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return IP(n[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+n)}},IP=function(n,e,t){n.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const a=e.node();if(re(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},NP=function(n,e,t,s){return $y(e,new Ky(t,n),s)},dC=function(n,e,t){return $y(n,new Yy(e),t)};function $y(n,e,t){const s=n.getPriority().val(),a=Vw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Vw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new rn(d,qt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new rn(a))),c.forEachChild(At,(d,p)=>{const g=$y(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
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
 */class Xy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wy(n,e){let t=e instanceof rt?e:new rt(e),s=n,a=je(t);for(;a!==null;){const l=ll(s.node.children,a)||{children:{},childCount:0};s=new Xy(a,s,l),t=dt(t),a=je(t)}return s}function Pl(n){return n.node.value}function mC(n,e){n.node.value=e,m_(n)}function pC(n){return n.node.childCount>0}function DP(n){return Pl(n)===void 0&&!pC(n)}function Wd(n,e){Cn(n.node.children,(t,s)=>{e(new Xy(t,n,s))})}function gC(n,e,t,s){t&&e(n),Wd(n,a=>{gC(a,e,!0)})}function kP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gc(n){return new rt(n.parent===null?n.name:Gc(n.parent)+"/"+n.name)}function m_(n){n.parent!==null&&OP(n.parent,n.name,n)}function OP(n,e,t){const s=DP(t),a=ns(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,m_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,m_(n))}/**
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
 */const MP=/[\[\].#$\/\u0000-\u001F\u007F]/,PP=/[\[\].#$\u0000-\u001F\u007F]/,Cg=10*1024*1024,Zy=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},_C=function(n){return typeof n=="string"&&n.length!==0&&!PP.test(n)},VP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_C(n)},yC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Gd(n)||n&&typeof n=="object"&&ns(n,".sv")},p_=function(n,e,t,s){Zd(ul(n,"value"),e,t)},Zd=function(n,e,t){const s=t instanceof rt?new e4(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Na(s));if(typeof e=="function")throw new Error(n+"contains a function "+Na(s)+" with contents = "+e.toString());if(Gd(e))throw new Error(n+"contains "+e.toString()+" "+Na(s));if(typeof e=="string"&&e.length>Cg/3&&Ed(e)>Cg)throw new Error(n+"contains a string greater than "+Cg+" utf8 bytes "+Na(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Zy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Na(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);t4(s,c),Zd(n,d,s),n4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Na(s)+" in addition to actual children.")}},LP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=Tc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Zy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JM);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&fi(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},jP=function(n,e,t,s){const a=ul(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new rt(c);if(Zd(a,d,Pt(t,p)),Ny(p)===".priority"&&!yC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),LP(a,l)},UP=function(n,e,t){if(Gd(e))throw new Error(ul(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yC(e))throw new Error(ul(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},vC=function(n,e,t,s){if(!_C(t))throw new Error(ul(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vC(n,e,t)},el=function(n,e){if(je(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},BP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VP(t))throw new Error(ul(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Dy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function EC(n,e,t){Jy(n,t),TC(n,s=>Dy(s,e))}function Hs(n,e,t){Jy(n,t),TC(n,s=>fi(s,e)||fi(e,s))}function TC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(FP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function FP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();rc&&mn("event: "+t.toString()),Ol(s)}}}/**
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
 */const HP="repo_interrupt",GP=25;class QP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ld(),this.transactionQueueTree_=new Xy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YP(n,e,t){if(n.stats_=xy(n.repoInfo_),n.forceRestClient_||SM())n.server_=new od(n.repoInfo_,(s,a,l,c)=>{Lw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>jw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ln(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new js(n.repoInfo_,e,(s,a,l,c)=>{Lw(n,s,a,l,c)},s=>{jw(n,s)},s=>{$P(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=IM(n.repoInfo_,()=>new x4(n.stats_,n.server_)),n.infoData_=new w4,n.infoSyncTree_=new Mw({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=$d(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),tv(n,"connected",!1),n.serverSyncTree_=new Mw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Hs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function KP(n){const t=n.infoData_.getNode(new rt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ev(n){return RP({timestamp:KP(n)})}function Lw(n,e,t,s,a){n.dataUpdateCount++;const l=new rt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Vf(t,g=>qt(g));c=bP(n.serverSyncTree_,l,p,a)}else{const p=qt(t);c=TP(n.serverSyncTree_,l,p,a)}else if(s){const p=Vf(t,g=>qt(g));c=yP(n.serverSyncTree_,l,p)}else{const p=qt(t);c=$d(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Jd(n,l)),Hs(n.eventQueue_,d,c)}function jw(n,e){tv(n,"connected",e),e===!1&&WP(n)}function $P(n,e){Cn(e,(t,s)=>{tv(n,t,s)})}function tv(n,e,t){const s=new rt("/.info/"+e),a=qt(t);n.infoData_.updateSnapshot(s,a);const l=$d(n.infoSyncTree_,s,a);Hs(n.eventQueue_,s,l)}function bC(n){return n.nextWriteId_++}function XP(n,e,t,s,a){nv(n,"set",{path:e.toString(),value:t,priority:s});const l=ev(n),c=qt(t,s),d=Fy(n.serverSyncTree_,e),p=dC(c,d,l),g=bC(n),y=uC(n.serverSyncTree_,e,p,g,!0);Jy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(w,D)=>{const V=w==="ok";V||Bn("set at "+e+" failed: "+w);const H=Pa(n.serverSyncTree_,g,!V);Hs(n.eventQueue_,e,H),bl(n,a,w,D)});const b=RC(n,e);Jd(n,b),Hs(n.eventQueue_,b,[])}function WP(n){nv(n,"onDisconnectEvents");const e=ev(n),t=ld();o_(n.onDisconnect_,et(),(a,l)=>{const c=NP(a,l,n.serverSyncTree_,e);Ml(t,a,c)});let s=[];o_(t,et(),(a,l)=>{s=s.concat($d(n.serverSyncTree_,a,l));const c=RC(n,a);Jd(n,c)}),n.onDisconnect_=ld(),Hs(n.eventQueue_,et(),s)}function ZP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&a_(n.onDisconnect_,e),bl(n,t,s,a)})}function Uw(n,e,t,s){const a=qt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Ml(n.onDisconnect_,e,a),bl(n,s,l,c)})}function JP(n,e,t,s,a){const l=qt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Ml(n.onDisconnect_,e,l),bl(n,a,c,d)})}function eV(n,e,t,s){if(Pf(t)){mn("onDisconnect().update() called with empty data.  Don't do anything."),bl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=qt(d);Ml(n.onDisconnect_,Pt(e,c),p)}),bl(n,s,a,l)})}function tV(n,e,t){let s;je(e._path)===".info"?s=Pw(n.infoSyncTree_,e,t):s=Pw(n.serverSyncTree_,e,t),EC(n.eventQueue_,e._path,s)}function nV(n,e,t){let s;je(e._path)===".info"?s=d_(n.infoSyncTree_,e,t):s=d_(n.serverSyncTree_,e,t),EC(n.eventQueue_,e._path,s)}function iV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(HP)}function nv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),mn(t,...e)}function bl(n,e,t,s){e&&Ol(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function wC(n,e,t){return Fy(n.serverSyncTree_,e,t)||xe.EMPTY_NODE}function iv(n,e=n.transactionQueueTree_){if(e||em(n,e),Pl(e)){const t=AC(n,e);re(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&sV(n,Gc(e),t)}else pC(e)&&Wd(e,t=>{iv(n,t)})}function sV(n,e,t){const s=t.map(g=>g.currentWriteId),a=wC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];re(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=Un(e,y.path);l=l.updateChild(b,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{nv(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const b=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Pa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&b.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();em(n,Wy(n.transactionQueueTree_,e)),iv(n,n.transactionQueueTree_),Hs(n.eventQueue_,e,y);for(let w=0;w<b.length;w++)Ol(b[w])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{Bn("transaction at "+p.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}Jd(n,e)}},c)}function Jd(n,e){const t=SC(n,e),s=Gc(t),a=AC(n,t);return rV(n,a,s),s}function rV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Un(t,p.path);let y=!1,b;if(re(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,b=p.abortReason,a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=GP)y=!0,b="maxretry",a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=wC(n,p.path,c);p.currentInputSnapshot=w;const D=e[d].update(w.val());if(D!==void 0){Zd("transaction failed: Data returned ",D,p.path);let V=qt(D);typeof D=="object"&&D!=null&&ns(D,".priority")||(V=V.updatePriority(w.getPriority()));const B=p.currentWriteId,ie=ev(n),ae=dC(V,w,ie);p.currentOutputSnapshotRaw=V,p.currentOutputSnapshotResolved=ae,p.currentWriteId=bC(n),c.splice(c.indexOf(B),1),a=a.concat(uC(n.serverSyncTree_,p.path,ae,p.currentWriteId,p.applyLocally)),a=a.concat(Pa(n.serverSyncTree_,B,!0))}else y=!0,b="nodata",a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0))}Hs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(b==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(b),!1,null))))}em(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ol(s[d]);iv(n,n.transactionQueueTree_)}function SC(n,e){let t,s=n.transactionQueueTree_;for(t=je(e);t!==null&&Pl(s)===void 0;)s=Wy(s,t),e=dt(e),t=je(e);return s}function AC(n,e){const t=[];return CC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function CC(n,e,t){const s=Pl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Wd(e,a=>{CC(n,a,t)})}function em(n,e){const t=Pl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,mC(e,t.length>0?t:void 0)}Wd(e,s=>{em(n,s)})}function RC(n,e){const t=Gc(SC(n,e)),s=Wy(n.transactionQueueTree_,e);return kP(s,a=>{Rg(n,a)}),Rg(n,s),gC(s,a=>{Rg(n,a)}),t}function Rg(n,e){const t=Pl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(re(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(re(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Pa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?mC(e,void 0):t.length=l+1,Hs(n.eventQueue_,Gc(e),a);for(let c=0;c<s.length;c++)Ol(s[c])}}/**
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
 */function aV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function oV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const zw=function(n,e){const t=lV(n),s=t.namespace;t.domain==="firebase.com"&&Fs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pM();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new OA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new rt(t.pathString)}},lV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(y,b)),y<b&&(a=aV(n.substring(y,b)));const w=oV(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const V=e.indexOf(".");s=e.substring(0,V).toLowerCase(),t=e.substring(V+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class uV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ln(this.snapshot.exportVal())}}class cV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class hV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return re(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ks;return ZP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){el("OnDisconnect.remove",this._path);const e=new ks;return Uw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){el("OnDisconnect.set",this._path),p_("OnDisconnect.set",e,this._path);const t=new ks;return Uw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){el("OnDisconnect.setWithPriority",this._path),p_("OnDisconnect.setWithPriority",e,this._path),UP("OnDisconnect.setWithPriority",t);const s=new ks;return JP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){el("OnDisconnect.update",this._path),jP("OnDisconnect.update",e,this._path);const t=new ks;return eV(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class sv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return ze(this._path)?null:Ny(this._path)}get ref(){return new Yr(this._repo,this._path)}get _queryIdentifier(){const e=ww(this._queryParams),t=Cy(e);return t==="{}"?"default":t}get _queryObject(){return ww(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof sv))return!1;const t=this._repo===e._repo,s=Dy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZM(this._path)}}class Yr extends sv{constructor(e,t){super(e,t,new Py,!1)}get parent(){const e=qA(this._path);return e===null?null:new Yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gd{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new rt(e),s=g_(this.ref,e);return new gd(this._node.getChild(t),s,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new gd(a,g_(this.ref,s),At)))}hasChild(e){const t=new rt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ua(n,e){return n=gt(n),n._checkNotDeleted("ref"),e!==void 0?g_(n._root,e):n._root}function g_(n,e){return n=gt(n),je(n._path)===null?zP("child","path",e):vC("child","path",e),new Yr(n._repo,Pt(n._path,e))}function dV(n){return n=gt(n),new fV(n._repo,n._path)}function xg(n){return el("remove",n._path),tm(n,null)}function tm(n,e){n=gt(n),el("set",n._path),p_("set",e,n._path);const t=new ks;return XP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class rv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new uV("value",this,new gd(e.snapshotNode,new Yr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new cV(this,e,t):null}matches(e){return e instanceof rv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mV(n,e,t,s,a){const l=new hV(t,void 0),c=new rv(l);return tV(n._repo,n,c),()=>nV(n._repo,n,c)}function av(n,e,t,s){return mV(n,"value",e)}uP(Yr);pP(Yr);/**
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
 */const pV="FIREBASE_DATABASE_EMULATOR_HOST",__={};let gV=!1;function _V(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Hr(l);n.repoInfo_=new OA(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function yV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=zw(l,a),d=c.repoInfo,p;typeof process<"u"&&rw&&(p=rw[pV]),p?(l=`http://${p}?ns=${d.namespace}`,c=zw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new CM(n.name,n.options,e);BP("Invalid Firebase Database URL",c),ze(c.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=EV(d,n,g,new AM(n,t));return new TV(y,n)}function vV(n,e){const t=__[e];(!t||t[n.key]!==n)&&Fs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iV(n),delete t[n.key]}function EV(n,e,t,s){let a=__[e.name];a||(a={},__[e.name]=a);let l=a[n.toURLString()];return l&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new QP(n,gV,t,s),a[n.toURLString()]=l,l}class TV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yr(this._repo,et())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fs("Cannot call "+e+" on a deleted database.")}}function bV(n=R_(),e){const t=bd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Jw("database");s&&wV(t,...s)}return t}function wV(n,e,t,s={}){n=gt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Zi(s,l.repoInfo_.emulatorOptions))return;Fs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Fs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new kf(kf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:n1(s.mockUserToken,n.app.options.projectId);c=new kf(d)}Hr(e)&&(w_(e),S_("Database",!0)),_V(l,a,s,c)}/**
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
 */function SV(n){uM(Xa),Ba(new Pr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return yV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Qi(aw,ow,n),Qi(aw,ow,"esm2020")}js.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};js.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};SV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Bw=n=>{const e=CV(n);return e.charAt(0).toUpperCase()+e.slice(1)},xC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),RV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=ee.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>ee.createElement("svg",{ref:p,...xV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:xC("lucide",a),...!l&&!RV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>ee.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(n,e)=>{const t=ee.forwardRef(({className:s,...a},l)=>ee.createElement(IV,{ref:l,iconNode:e,className:xC(`lucide-${AV(Bw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Bw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],IC=at("arrow-left",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],kV=at("ban",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qw=at("bell",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],PV=at("check-check",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ov=at("check",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],jV=at("circle-check-big",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ig=at("corner-up-left",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],BV=at("crown",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],NC=at("ellipsis-vertical",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],HV=at("eraser",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],y_=at("gamepad-2",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],DC=at("loader-circle",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Fw=at("log-out",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Hw=at("message-circle",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],lv=at("message-square",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],WV=at("palette",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],JV=at("pin-off",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],nm=at("pin",e6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],n6=at("save",t6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],s6=at("send",i6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],a6=at("shield-check",r6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],l6=at("shield",o6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],c6=at("smile",u6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],uv=at("square-pen",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_d=at("trash-2",f6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],v_=at("user-plus",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],kC=at("user-x",m6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yd=at("users",p6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],E_=at("x",g6),_6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},cv=o1(_6),cc=J2(cv),Ie=WO(cv),za=bV(cv),y6=n=>{ee.useEffect(()=>{if(!n)return;const e=Ua(za,`/status/${n.uid}`),t=yt(Ie,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ua(za,".info/connected"),c=av(l,d=>{if(d.val()===!1){Ot(t,{state:"offline",last_changed:yl()});return}dV(e).set(s).then(()=>{tm(e,a),Ot(t,{state:"online",last_changed:yl()})})});return()=>c()},[n])},im=(n,e)=>{const[t,s]=ee.useState(null),a=cc.currentUser;return ee.useEffect(()=>{if(!n||!a){s(null);return}const l=Sn(yt(Ie,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(b=>({...b||{},...g,displayName:y||g.displayName}))}else s(null)}),c=Ua(za,`/status/${n}`),d=av(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},v6=n=>{const[e,t]=ee.useState(0);return ee.useEffect(()=>{if(!n?.uid)return;const s=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","pending")),a=Sn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},E6=n=>{const[e,t]=ee.useState(0),[s,a]=ee.useState([]);return ee.useEffect(()=>{if(!n?.uid)return;const l=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","accepted")),c=Sn(l,d=>{const p=d.docs.map(g=>g.data().users.find(y=>y!==n.uid));a(p)});return()=>c()},[n]),ee.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=gn(Ht(Ie,`conversations/${p}/messages`),bt("receiverId","==",n.uid),bt("status","in",["sent","delivered"]));return Sn(g,y=>{l[p]=y.size;const b=Object.values(l).reduce((w,D)=>w+D,0);t(b)})});return()=>c.forEach(d=>d())},[s,n]),e},T6=n=>{const e=ee.useRef(n);ee.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),ee.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},b6=(n,e)=>{const[t,s]=ee.useState(null);return ee.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=gn(Ht(Ie,"friendships"),bt("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Sn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},w6=({text:n="Preparando seu bate-papo..."})=>T.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:T.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[T.jsx(lv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),T.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),T.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[T.jsx(DC,{className:"animate-spin h-10 w-10 text-blue-400"}),T.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),S6=()=>{const n=async()=>{const e=new Os;try{const s=(await l2(cc,e)).user,a=yt(Ie,"users",s.uid);(await nd(a)).exists()||await oM(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return T.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:T.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[T.jsx(lv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),T.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),T.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),T.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[T.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},A6=({user:n,onClose:e})=>n?T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),T.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),T.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),T.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,C6=({user:n,onClose:e})=>{const[t,s]=ee.useState(n.recado||""),a=async()=>{const l=yt(Ie,"users",n.uid);await Ot(l,{recado:t}),e()};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),T.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),T.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},wl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),T.jsx("p",{className:"text-gray-400 mb-6",children:a}),T.jsxs("div",{className:"flex justify-center gap-4",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,R6=({currentUser:n})=>{const[e,t]=ee.useState(""),[s,a]=ee.useState([]),[l,c]=ee.useState({}),[d,p]=ee.useState(!1),[g,y]=ee.useState(""),[b,w]=ee.useState(""),D=async H=>{if(H.preventDefault(),e.trim()!==""){p(!0),y(""),w(""),a([]);try{const B=gn(Ht(Ie,"users"),bt("email","==",e.trim()),gA(1)),ae=(await id(B)).docs.map(ue=>ue.data())[0];if(ae&&ae.uid!==n.uid){a([ae]);const ue=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid)),de=(await id(ue)).docs.find(ge=>ge.data().users.includes(ae.uid));c({[ae.uid]:de?de.data().status:"not_friends"})}else ae&&ae.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(B){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(B)}finally{p(!1)}}},V=async H=>{try{await Ay(Ht(Ie,"friendships"),{users:[n.uid,H.uid],status:"pending",requestedBy:n.uid,createdAt:yl()}),c(B=>({...B,[H.uid]:"pending"}))}catch(B){y("Falha ao enviar pedido."),console.error(B)}};return T.jsxs("div",{className:"p-4",children:[T.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),T.jsxs("form",{onSubmit:D,className:"flex gap-2",children:[T.jsx("input",{type:"email",value:e,onChange:H=>t(H.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),T.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?T.jsx(DC,{className:"animate-spin"}):"Buscar"})]}),T.jsxs("div",{className:"mt-4 h-24",children:[g&&T.jsx("p",{className:"text-red-400",children:g}),b&&T.jsx("p",{className:"text-yellow-400",children:b}),s.map(H=>T.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:H.photoURL,alt:H.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:H.displayName})]}),T.jsxs("div",{children:[l[H.uid]==="not_friends"&&T.jsx("button",{onClick:()=>V(H),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[H.uid]==="pending"&&T.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[H.uid]==="accepted"&&T.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[H.uid]==="declined"&&T.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},H.uid))]})]})},x6=({currentUser:n})=>{const[e,t]=ee.useState([]);ee.useEffect(()=>{if(!n?.uid)return;const a=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","pending")),l=Sn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(w=>w!==n.uid),b=await nd(yt(Ie,"users",y));b.exists()&&d.push({id:p.id,...b.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Ot(yt(Ie,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return T.jsxs("div",{className:"p-4",children:[T.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?T.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):T.jsx("ul",{className:"space-y-2",children:e.map(a=>T.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:a.displayName})]}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:T.jsx(ov,{size:16})}),T.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:T.jsx(E_,{size:16})})]})]},a.id))})]})},I6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=im(n.friendId,n);return s?T.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[T.jsxs("div",{className:"flex items-center gap-4 relative",children:[T.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),T.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),T.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:T.jsx(_d,{size:18,className:"text-red-500"})})]}):T.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},N6=({currentUser:n,onSelectUser:e})=>{const[t,s]=ee.useState([]),[a,l]=ee.useState(null);ee.useEffect(()=>{if(!n?.uid)return;const d=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","accepted")),p=Sn(d,g=>{const y=g.docs.map(b=>({id:b.id,...b.data(),friendId:b.data().users.find(w=>w!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=yt(Ie,"friendships",a.id);try{await n_(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return T.jsxs("div",{className:"flex-grow overflow-y-auto",children:[T.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?T.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):T.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>T.jsx(I6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),T.jsx(wl,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Gw=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=ee.useState([]),[l,c]=ee.useState([]),[d,p]=ee.useState(null),[g,y]=ee.useState({show:!1,x:0,y:0,chat:null});ee.useEffect(()=>{if(!n?.uid)return;const B=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","accepted")),ie=Sn(B,ye=>{let de=ye.docs.map(ge=>({id:ge.id,...ge.data(),friendId:ge.data().users.find(k=>k!==n.uid),isGroup:!1})).filter(ge=>!ge.chatDeletedFor?.includes(n.uid));de.sort((ge,k)=>{const C=ge.pinnedBy?.includes(n.uid),I=k.pinnedBy?.includes(n.uid);return C&&!I?-1:!C&&I?1:0}),a(de)}),ae=gn(Ht(Ie,"groups"),bt("members","array-contains",n.uid)),ue=Sn(ae,ye=>{const de=ye.docs.map(ge=>{const k=ge.data();return{id:ge.id,...k,isGroup:!0,displayName:k.name,photoURL:`https://placehold.co/96x96/${k.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${k.name.charAt(0).toUpperCase()}`}});c(de)});return()=>{ie(),ue()}},[n.uid]);const b=async B=>{if(!B||B.isGroup)return;const ie=B.pinnedBy?.includes(n.uid),ae=yt(Ie,"friendships",B.id);await Ot(ae,{pinnedBy:ie?Da(n.uid):ja(n.uid)})},w=async()=>{if(!d)return;const B=yt(Ie,"friendships",d.id);await Ot(B,{chatDeletedFor:ja(n.uid)}),p(null)},D=(B,ie)=>{B.preventDefault(),y({show:!0,x:B.pageX,y:B.pageY,chat:ie})},V=()=>y({...g,show:!1}),H=[...s,...l];return T.jsxs("div",{className:"flex-grow overflow-y-auto",onClick:V,children:[T.jsxs("div",{className:"flex justify-between items-center p-4",children:[T.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),T.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[T.jsx(yd,{size:16})," Criar Grupo"]})]}),H.length===0?T.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):T.jsx("ul",{className:"divide-y divide-gray-700/50",children:H.map(B=>T.jsx(k6,{chat:B,currentUser:n,onSelectUser:e,onContextMenu:ie=>D(ie,B)},B.id))}),g.show&&T.jsx(D6,{x:g.x,y:g.y,onClose:V,chat:g.chat,currentUser:n,onTogglePin:()=>{b(g.chat),V()},onDeleteChat:()=>{p(g.chat),V()}}),T.jsx(wl,{isOpen:!!d,onClose:()=>p(null),onConfirm:w,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},D6=({x:n,y:e,onClose:t,chat:s,currentUser:a,onTogglePin:l,onDeleteChat:c})=>{const d=ee.useRef(null),p=!s.isGroup&&s.pinnedBy?.includes(a.uid);return ee.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&t()};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]),T.jsxs("div",{ref:d,style:{top:e,left:n},className:"absolute w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[!s.isGroup&&T.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[p?T.jsx(JV,{size:14}):T.jsx(nm,{size:14})," ",p?"Desafixar":"Fixar Conversa"]}),T.jsxs("button",{onClick:c,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(_d,{size:14})," Apagar Conversa"]})]})},k6=({chat:n,currentUser:e,onSelectUser:t,onContextMenu:s})=>{const a=im(n.friendId,n),[l,c]=ee.useState(0),d=!n.isGroup&&n.pinnedBy?.includes(e.uid),[p,g]=ee.useState(null),y=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);ee.useEffect(()=>{if(!e)return;const H=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,B=gn(Ht(Ie,H),bt("receiverId","==",e.uid),bt("status","in",["sent","delivered"])),ie=Sn(B,ye=>c(ye.size)),ae=gn(Ht(Ie,H),pA("createdAt","desc"),gA(1)),ue=Sn(ae,ye=>{g(ye.empty?null:ye.docs[0].data())});return()=>{ie(),ue()}},[n,e]);const b=n.isGroup?n:a;if(!b)return T.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const w=V=>{if(!V)return"Offline";const H=new Date(V.seconds?V.seconds*1e3:V),B=new Date,ie=new Date(B.getFullYear(),B.getMonth(),B.getDate()),ae=new Date(B.getFullYear(),B.getMonth(),B.getDate()-1),ue={hour:"2-digit",minute:"2-digit"},ye=H.toLocaleTimeString("pt-BR",ue);if(H>=ie)return`Visto por último hoje às ${ye}`;if(H>=ae)return`Visto por último ontem às ${ye}`;const de={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${H.toLocaleDateString("pt-BR",de)}`},D=({data:V})=>T.jsxs("div",{className:"relative",children:[V.photoURL?T.jsx("img",{src:V.photoURL,alt:V.displayName,className:"w-12 h-12 rounded-full flex-shrink-0"}):T.jsx("div",{className:"w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:V.photoColor||"#7c3aed"},children:V.displayName?.charAt(0).toUpperCase()}),y&&T.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:T.jsx(kV,{size:20,className:"text-white"})})]});return T.jsxs("li",{onClick:()=>t(b),onContextMenu:s,className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-blue-900/20":""}`,children:[T.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[T.jsx(D,{data:b}),!n.isGroup&&T.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),T.jsxs("div",{className:"flex-grow min-w-0",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[d&&T.jsx(nm,{size:14,className:"text-blue-400 flex-shrink-0"}),T.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName})]}),T.jsx("p",{className:"text-sm text-gray-400 truncate",children:p?p.isDeleted?"Mensagem apagada":p.text:n.isGroup?"Nenhuma mensagem ainda":a?.presence==="online"?"Online":w(a?.last_changed)})]})]}),T.jsx("div",{className:"flex items-center gap-2 flex-shrink-0",children:l>0&&T.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l})})]})},O6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=ee.useState(!1),p=ee.useRef(null),g=ee.useRef(),[y,b]=ee.useState("bottom");ee.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?b("top"):b("bottom"))},[c]),ee.useEffect(()=>{const ie=ae=>{p.current&&!p.current.contains(ae.target)&&d(!1)};return document.addEventListener("mousedown",ie),()=>document.removeEventListener("mousedown",ie)},[]);const w=ie=>{ie.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},D=ie=>{g.current=setTimeout(()=>w(ie),500)},V=()=>{clearTimeout(g.current)},H=()=>{clearTimeout(g.current)},B=({msg:ie})=>{if(!e||!ie.status)return null;const ae=ie.status==="read";return T.jsx(PV,{size:16,className:ae?"text-blue-400":"text-gray-400"})};return T.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&T.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:T.jsx(Ig,{size:16})}),T.jsxs("div",{className:"relative",ref:p,onTouchStart:D,onTouchEnd:V,onTouchMove:H,onContextMenu:ie=>{ie.preventDefault(),d(!0)},children:[T.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&T.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[T.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),T.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),T.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&T.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&T.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),T.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),T.jsx(B,{msg:n})]})]}),c&&T.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[T.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(nm,{size:14})," Fixar"]}),T.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(Ig,{size:14})," Responder"]}),e&&!n.isDeleted&&T.jsxs(T.Fragment,{children:[T.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(uv,{size:14})," Editar"]}),T.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(_d,{size:14})," Apagar para mim"]}),T.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(_d,{size:14})," Apagar para todos"]})]})]})]}),e&&T.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:T.jsx(Ig,{size:16})})]})},M6=({onEmojiSelect:n,onClose:e})=>{const t=ee.useRef(null);ee.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return T.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:T.jsx("div",{className:"p-2 overflow-y-auto",children:T.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>T.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},P6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>T.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[T.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&T.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:T.jsx(jV,{className:"text-white"})})}),T.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},V6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=ee.useState(t);return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),T.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),T.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[T.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},L6=({groupData:n,friendships:e,onClose:t})=>{const[s,a]=ee.useState([]),[l,c]=ee.useState([]);ee.useEffect(()=>{const g=e.filter(y=>!n.members.includes(y.friendId));c(g)},[e,n.members]);const d=g=>{a(y=>y.includes(g)?y.filter(b=>b!==g):[...y,g])},p=async()=>{if(s.length===0)return;const g=yt(Ie,"groups",n.id);await Ot(g,{members:ja(...s)}),t()};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5",onClick:g=>g.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Adicionar Membros"}),T.jsx("div",{className:"flex-grow overflow-y-auto pr-2 mb-4",children:l.length>0?l.map(g=>T.jsx(OC,{friendship:g,onToggle:d,isSelected:s.includes(g.friendId)},g.id)):T.jsx("p",{className:"text-gray-400 text-center",children:"Todos os seus amigos já estão neste grupo."})}),T.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[T.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:p,disabled:s.length===0,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-500",children:"Adicionar"})]})]})})},j6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s,friendships:a})=>{const[l,c]=ee.useState([]),[d,p]=ee.useState(!1),[g,y]=ee.useState(!1),[b,w]=ee.useState(!1),[D,V]=ee.useState(!1),[H,B]=ee.useState(n.name),[ie,ae]=ee.useState(n.description||""),[ue,ye]=ee.useState(n.photoColor),de=n.admins?.includes(e.uid),ge=yt(Ie,"groups",n.id),k=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];ee.useEffect(()=>{(async()=>{const We=n.members.map(ce=>nd(yt(Ie,"users",ce))),ne=(await Promise.all(We)).filter(ce=>ce.exists()).map(ce=>ce.data());c(ne)})()},[n.members]);const C=async()=>{if(H.trim())try{await Ot(ge,{name:H,description:ie,photoColor:ue}),V(!1)}catch(Ee){console.error("Erro ao salvar alterações do grupo:",Ee)}},I=async()=>{const Ee={members:Da(e.uid)};if(de)if(n.admins.filter(ne=>ne!==e.uid).length===0&&n.members.length>1){const ne=n.members.find(ce=>ce!==e.uid);ne&&(Ee.admins=[ne])}else Ee.admins=Da(e.uid);await Ot(ge,Ee);const We=await nd(ge);We.exists()&&We.data().members.length===0&&await n_(ge),s(),t()},M=async()=>{await n_(ge),s(),t()},P=async Ee=>{await Ot(ge,{members:Da(Ee),admins:Da(Ee)})},L=async Ee=>{const We=n.admins.includes(Ee);await Ot(ge,{admins:We?Da(Ee):ja(Ee)})},R=({member:Ee})=>{const[We,Y]=ee.useState(!1),ne=n.admins?.includes(Ee.uid),ce=de&&Ee.uid!==e.uid;return T.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:Ee.photoURL,alt:Ee.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:Ee.displayName})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[ne&&T.jsx(BV,{size:16,className:"text-yellow-400"}),ce&&T.jsxs("div",{className:"relative",children:[T.jsx("button",{onClick:()=>Y(fe=>!fe),children:T.jsx(NC,{size:20})}),We&&T.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[T.jsxs("button",{onClick:()=>{L(Ee.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[ne?T.jsx(l6,{size:14}):T.jsx(a6,{size:14})," ",ne?"Rebaixar":"Promover a Admin"]}),T.jsxs("button",{onClick:()=>{P(Ee.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(kC,{size:14})," Remover do Grupo"]})]})]})]})]})};return T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-lg w-full border border-blue-500/50 shadow-lg flex flex-col h-5/6",onClick:Ee=>Ee.stopPropagation(),children:[T.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[de&&!D&&T.jsx("button",{onClick:()=>V(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:T.jsx(uv,{size:18})}),T.jsxs("div",{className:"relative",children:[T.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:ue},children:H?.charAt(0).toUpperCase()}),D&&T.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:k.map(Ee=>T.jsx("button",{onClick:()=>ye(Ee),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${ue===Ee?"ring-2 ring-white":""}`,style:{backgroundColor:Ee}},Ee))})]}),D?T.jsxs(T.Fragment,{children:[T.jsx("input",{type:"text",value:H,onChange:Ee=>B(Ee.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),T.jsx("textarea",{value:ie,onChange:Ee=>ae(Ee.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),T.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),T.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[T.jsxs("div",{className:"flex justify-between items-center mb-2",children:[T.jsx("h3",{className:"text-lg font-semibold text-white",children:"Membros"}),de&&T.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",children:[T.jsx(v_,{size:16})," Adicionar"]})]}),T.jsx("ul",{className:"space-y-2",children:l.map(Ee=>T.jsx(R,{member:Ee},Ee.uid))})]}),T.jsx("div",{className:"mt-6 flex flex-col gap-2",children:D?T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:()=>V(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsxs("button",{onClick:C,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:[T.jsx(n6,{size:16})," Salvar"]})]}):T.jsxs(T.Fragment,{children:[de&&T.jsx("button",{onClick:()=>y(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),T.jsx("button",{onClick:()=>p(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Sair do Grupo"}),T.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),b&&T.jsx(L6,{groupData:n,friendships:a,onClose:()=>w(!1)}),T.jsx(wl,{isOpen:d,onClose:()=>p(!1),onConfirm:I,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),T.jsx(wl,{isOpen:g,onClose:()=>y(!1),onConfirm:M,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},Qw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=ee.useState([]),[l,c]=ee.useState(""),[d,p]=ee.useState(!1),[g,y]=ee.useState(!1),[b,w]=ee.useState(!1),[D,V]=ee.useState(null),[H,B]=ee.useState(null),[ie,ae]=ee.useState(!1),[ue,ye]=ee.useState(!1),[de,ge]=ee.useState(!1),[k,C]=ee.useState(!1),[I,M]=ee.useState(!1),[P,L]=ee.useState(null),[R,Ee]=ee.useState(e),[We,Y]=ee.useState([]),ne=ee.useRef(null),ce=ee.useRef(null),fe=e.isGroup,N=b6(n,e),W=im(e.uid,N),oe=ee.useRef(),te=fe?e.id:[n.uid,e.uid].sort().join("_"),ve=N?.themes?.[n.uid]||"default",Pe=fe?R.pinnedMessage:N?.pinnedMessage,Ae={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}};ee.useEffect(()=>{if(!n?.uid)return;const pe=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","accepted")),De=Sn(pe,Te=>{const Oe=Te.docs.map(It=>({id:It.id,...It.data(),friendId:It.data().users.find(wt=>wt!==n.uid)}));Y(Oe)});return()=>De()},[n.uid]);const Vt=pe=>{if(!pe)return"";const De=new Date(pe.seconds?pe.seconds*1e3:pe),Te=new Date,Oe=new Date(Te.getFullYear(),Te.getMonth(),Te.getDate()),It=new Date(Te.getFullYear(),Te.getMonth(),Te.getDate()-1),wt={hour:"2-digit",minute:"2-digit"},yn=De.toLocaleTimeString("pt-BR",wt);if(De>=Oe)return`Visto por último hoje às ${yn}`;if(De>=It)return`Visto por último ontem às ${yn}`;const Ll={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${De.toLocaleDateString("pt-BR",Ll)}`};ee.useEffect(()=>{if(fe){const pe=yt(Ie,"groups",e.id),De=Sn(pe,Te=>{Te.exists()?Ee({...Te.data(),id:Te.id,isGroup:!0}):t()});return()=>De()}},[fe,e.id,t]),ee.useEffect(()=>{oe.current=W?.presence},[W?.presence]),ee.useEffect(()=>{if(fe||oe.current==="online"||W?.presence!=="online")return;const pe=gn(Ht(Ie,`conversations/${te}/messages`),bt("receiverId","==",n.uid),bt("status","==","sent"));id(pe).then(De=>{const Te=Eg(Ie);De.docs.forEach(Oe=>Te.update(Oe.ref,{status:"delivered"})),Te.commit()})},[W?.presence,te,n.uid,fe]),ee.useEffect(()=>{const pe=`conversations/${te}/messages`,De=gn(Ht(Ie,pe),pA("createdAt","asc")),Te=Sn(De,Oe=>{const It=Oe.docs.map(yn=>({id:yn.id,...yn.data()})).filter(yn=>!yn.deletedFor?.includes(n.uid));if(a(It),fe)return;const wt=Eg(Ie);Oe.docs.forEach(yn=>{yn.data().receiverId===n.uid&&yn.data().status!=="read"&&wt.update(yn.ref,{status:"read"})}),wt.commit()});return()=>Te()},[te,n.uid,fe]),ee.useEffect(()=>{if(fe)return;const pe=Ua(za,`typing/${te}/${e.uid}`),De=av(pe,Te=>p(Te.val()===!0));return()=>De()},[te,e.uid,fe]),ee.useEffect(()=>{ne.current?.scrollIntoView({behavior:"smooth"})},[s]);const ot=pe=>{if(c(pe.target.value),fe)return;const De=Ua(za,`typing/${te}/${n.uid}`);pe.target.value.trim().length>0?(tm(De,!0),ce.current&&clearTimeout(ce.current),ce.current=setTimeout(()=>xg(De),3e3)):xg(De)},Zn=async pe=>{if(pe.preventDefault(),l.trim()===""||!fe&&(N?.blockedBy?.includes(e.uid)||N?.blockedBy?.includes(n.uid)))return;const De=l;c(""),fe||(xg(Ua(za,`typing/${te}/${n.uid}`)),ce.current&&clearTimeout(ce.current));const Te={text:De,createdAt:yl(),senderId:n.uid,senderName:n.displayName};fe||(Te.receiverId=e.uid,Te.status=W?.presence==="online"?"delivered":"sent"),D&&(Te.replyTo={id:D.id,text:D.text,senderName:D.senderId===n.uid?"Você":fe?D.senderName:e.displayName});try{await Ay(Ht(Ie,`conversations/${te}/messages`),Te),V(null)}catch(Oe){console.error("Falha ao enviar mensagem:",Oe),c(De)}},xi=async pe=>{if(pe.preventDefault(),!H||l.trim()==="")return;const De=yt(Ie,`conversations/${te}/messages`,H.id);await Ot(De,{text:l,edited:!0}),B(null),c("")},di=async()=>{if(!P)return;const{id:pe,type:De}=P,Te=yt(Ie,`conversations/${te}/messages`,pe);De==="self"?await Ot(Te,{deletedFor:ja(n.uid)}):De==="all"&&await Ot(Te,{text:"",isDeleted:!0,replyTo:null}),L(null)},is=async()=>{const pe=gn(Ht(Ie,`conversations/${te}/messages`)),De=await id(pe),Te=Eg(Ie);De.docs.forEach(Oe=>{Te.update(Oe.ref,{deletedFor:ja(n.uid)})}),await Te.commit(),ge(!1)},ss=async()=>{if(!N)return;const pe=yt(Ie,"friendships",N.id);N.blockedBy?.includes(n.uid)?await Ot(pe,{blockedBy:Da(n.uid)}):await Ot(pe,{blockedBy:ja(n.uid)}),ye(!1)},rs=async pe=>{if(!N)return;const De=yt(Ie,"friendships",N.id);await Ot(De,{[`themes.${n.uid}`]:pe}),C(!1)},Kr=async pe=>{if(!N||!pe.trim())return;const De=yt(Ie,"friendships",N.id);await Ot(De,{[`customNames.${n.uid}`]:pe.trim()}),M(!1)},no=async pe=>{const De=fe&&R.admins.includes(n.uid);if(fe&&!De)return;const Te=fe?yt(Ie,"groups",R.id):yt(Ie,"friendships",N.id),Oe={id:pe.id,text:pe.text,senderName:pe.senderName};await Ot(Te,{pinnedMessage:Oe})},On=async()=>{const pe=fe&&R.admins.includes(n.uid);if(fe&&!pe)return;const De=fe?yt(Ie,"groups",R.id):yt(Ie,"friendships",N.id);await Ot(De,{pinnedMessage:null})},Vl=pe=>{B(pe),c(pe.text),V(null)},$r=()=>{B(null),c("")},mi=!fe&&N?.blockedBy?.includes(n.uid),pi=!fe&&N?.blockedBy?.includes(e.uid),Xr=fe?R.name:W?.displayName,Ys=fe?R.photoColor?"":R.photoURL:e.photoURL;return T.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[T.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[T.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:T.jsx(IC,{size:24})}),T.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>fe?w(!0):y(!0),children:[fe?T.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:R.photoColor||"#7c3aed"},children:Xr?.charAt(0).toUpperCase()}):T.jsx("img",{src:Ys,alt:Xr,className:"w-10 h-10 rounded-full mr-4"}),T.jsxs("div",{children:[T.jsx("h2",{className:"text-xl font-bold text-white",children:Xr}),T.jsx("p",{className:"text-sm text-blue-300 h-4",children:fe?`${R.members?.length||0} membros`:d?"Digitando...":W?.presence==="online"?"Online":Vt(W?.last_changed)})]})]}),T.jsxs("div",{className:"relative",children:[T.jsx("button",{onClick:()=>ye(pe=>!pe),className:"p-2 text-gray-400 hover:text-white",children:T.jsx(NC,{})}),ue&&T.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[fe?T.jsxs("button",{onClick:()=>{w(!0),ye(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(yd,{size:14})," Perfil do Grupo"]}):T.jsxs(T.Fragment,{children:[T.jsxs("button",{onClick:()=>{M(!0),ye(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(uv,{size:14})," Alterar nome do contato"]}),T.jsxs("button",{onClick:()=>{C(!0),ye(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(WV,{size:14})," Alterar tema da conversa"]})]}),T.jsxs("button",{onClick:()=>{ge(!0),ye(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(HV,{size:14})," Limpar conversa"]}),!fe&&T.jsxs("button",{onClick:ss,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(kC,{size:14})," ",mi?"Desbloquear":"Bloquear"]})]})]})]}),T.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:fe?Ae.default:Ae[ve],children:[Pe&&T.jsx("div",{className:"sticky top-0 bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in",children:T.jsxs("div",{className:"flex justify-between items-center",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[T.jsx(nm,{size:12})," MENSAGEM FIXADA"]}),T.jsx("p",{className:"text-sm text-white truncate",children:Pe.text})]}),(fe?R.admins.includes(n.uid):!0)&&T.jsx("button",{onClick:On,className:"p-1 text-gray-400 hover:text-white",children:T.jsx(E_,{size:16})})]})}),T.jsx("div",{className:"space-y-2 mt-auto",children:s.map(pe=>T.jsx(O6,{msg:pe,isCurrentUser:pe.senderId===n.uid,onReply:()=>V(pe),onDelete:De=>L({id:pe.id,type:De}),onEdit:()=>Vl(pe),onPin:()=>no(pe)},pe.id))}),T.jsx("div",{ref:ne})]}),T.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(D||H)&&T.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[T.jsxs("div",{className:"flex justify-between items-center text-sm",children:[T.jsx("p",{className:"font-bold",children:H?"Editando mensagem":`Respondendo a ${D.senderId===n.uid?"Você":fe?D.senderName:W?.displayName}`}),T.jsx("button",{onClick:H?$r:()=>V(null),className:"p-1",children:T.jsx(E_,{size:16})})]}),T.jsx("p",{className:"text-xs text-gray-400 truncate",children:H?H.text:D.text})]}),T.jsxs("div",{className:"relative flex items-center gap-2",children:[ie&&T.jsx(M6,{onEmojiSelect:pe=>c(De=>De+pe),onClose:()=>ae(!1)}),T.jsx("button",{type:"button",onClick:()=>ae(pe=>!pe),className:"p-2 text-gray-400 hover:text-white",children:T.jsx(c6,{})}),T.jsxs("form",{onSubmit:H?xi:Zn,className:"flex-grow flex items-center gap-2",children:[T.jsx("input",{type:"text",value:l,onChange:ot,placeholder:mi?"Você bloqueou este contato.":pi?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:pi||mi,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),T.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||pi||mi,children:H?T.jsx(ov,{size:20}):T.jsx(s6,{size:20})})]})]})]}),g&&T.jsx(A6,{user:e,onClose:()=>y(!1)}),b&&T.jsx(j6,{groupData:R,currentUser:n,onClose:()=>w(!1),onLeaveChat:t,friendships:We}),k&&T.jsx(P6,{onClose:()=>C(!1),onSelectTheme:rs,currentTheme:ve}),I&&T.jsx(V6,{onClose:()=>M(!1),onSave:Kr,currentName:W?.displayName}),T.jsx(wl,{isOpen:de,onClose:()=>ge(!1),onConfirm:is,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),T.jsx(wl,{isOpen:!!P,onClose:()=>L(null),onConfirm:di,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${P?.type==="all"?"para todos":"para você"}?`})]})},U6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=ee.useState(""),[l,c]=ee.useState([n.uid]),[d,p]=ee.useState(""),g=b=>{c(w=>w.includes(b)?w.filter(D=>D!==b):[...w,b])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await Ay(Ht(Ie,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:yl(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(b){console.error("Erro ao criar grupo:",b),p(`Erro: ${b.message}`)}};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:b=>b.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),T.jsx("input",{type:"text",value:s,onChange:b=>a(b.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),T.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),T.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(b=>T.jsx(OC,{friendship:b,onToggle:g,isSelected:l.includes(b.friendId)},b.id))}),d&&T.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),T.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},OC=({friendship:n,onToggle:e,isSelected:t})=>{const s=im(n.friendId,n);return s?T.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:s.displayName})]}),T.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&T.jsx(ov,{size:16,className:"text-white"})})]}):null},z6=({user:n,onLogout:e})=>{const[t,s]=ee.useState(null),[a,l]=ee.useState("chats"),[c,d]=ee.useState("list"),[p,g]=ee.useState(!1),[y,b]=ee.useState(!1),[w,D]=ee.useState([]),V=v6(n),H=E6(n);T6(H),ee.useEffect(()=>{if(!n?.uid)return;const k=gn(Ht(Ie,"friendships"),bt("users","array-contains",n.uid),bt("status","==","accepted")),C=Sn(k,I=>{const M=I.docs.map(P=>({id:P.id,...P.data(),friendId:P.data().users.find(L=>L!==n.uid)}));D(M)});return()=>C()},[n.uid]),ee.useEffect(()=>{t?(d("chat"),l("chats")):d("list")},[t]);const B=k=>{l(k),s(null)},ie=k=>{s(k)},ae=()=>{s(null)},ue=({count:k})=>k===0?null:T.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:k}),ye=({count:k})=>k===0?null:T.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[T.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),T.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]}),de=()=>{switch(a){case"chats":return T.jsx(Gw,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)});case"contacts":return T.jsx(N6,{currentUser:n,onSelectUser:ie});case"add":return T.jsx(R6,{currentUser:n});case"requests":return T.jsx(x6,{currentUser:n});case"game":return T.jsx(Yw,{});default:return T.jsx(Gw,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)})}},ge=()=>t?T.jsx(Qw,{currentUser:n,otherUser:t,onLeave:ae}):a==="game"?T.jsx(Yw,{}):T.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[T.jsx(lv,{size:60,className:"mb-4"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),T.jsx("p",{children:"Ou experimente os jogos na aba de controle!"})]});return T.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&T.jsx(C6,{user:n,onClose:()=>g(!1)}),y&&T.jsx(U6,{currentUser:n,onClose:()=>b(!1),friendships:w}),T.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[T.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[T.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),T.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:T.jsx(Fw,{size:20})})]}),T.jsxs("div",{className:"flex border-b border-gray-700/50",children:[T.jsxs("button",{onClick:()=>B("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[T.jsx(Hw,{className:"mx-auto"}),T.jsx(ye,{count:H})]}),T.jsx("button",{onClick:()=>B("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(yd,{className:"mx-auto"})}),T.jsx("button",{onClick:()=>B("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(v_,{className:"mx-auto"})}),T.jsxs("button",{onClick:()=>B("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[T.jsx(qw,{className:"mx-auto"}),T.jsx(ue,{count:V})]}),T.jsx("button",{onClick:()=>B("game"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="game"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(y_,{className:"mx-auto"})})]}),T.jsx("div",{className:"flex-grow overflow-y-auto",children:de()})]}),T.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[T.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[T.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[T.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),T.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:T.jsx(Fw,{size:20})})]}),T.jsx("div",{className:"flex-grow overflow-y-auto",children:de()}),T.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[T.jsxs("button",{onClick:()=>B("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[T.jsx(Hw,{}),T.jsx(ye,{count:H})]}),T.jsx("button",{onClick:()=>B("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:T.jsx(yd,{})}),T.jsx("button",{onClick:()=>B("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:T.jsx(v_,{})}),T.jsxs("button",{onClick:()=>B("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[T.jsx(qw,{}),T.jsx(ue,{count:V})]}),T.jsx("button",{onClick:()=>B("game"),className:`relative p-3 rounded-lg ${a==="game"?"text-blue-500":"text-gray-400"}`,children:T.jsx(y_,{})})]})]}),c==="chat"&&t&&T.jsx(Qw,{currentUser:n,otherUser:t,onLeave:ae})]}),T.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:ge()})]})},Yw=()=>{const[n,e]=ee.useState(null),t=[{id:"tictactoe",name:"Jogo da Velha",component:T.jsx(B6,{})},{id:"rps",name:"Jokempô",component:T.jsx(q6,{})},{id:"breakout",name:"Break Bricks",component:T.jsx(F6,{})},{id:"snake",name:"Snake",component:T.jsx(H6,{})},{id:"pong",name:"Pong",component:T.jsx(G6,{})},{id:"flappy",name:"Flappy Bird",component:T.jsx(Q6,{})}];if(n){const s=t.find(a=>a.id===n);return T.jsxs("div",{className:"w-full h-full flex flex-col",children:[T.jsx("header",{className:"p-2 bg-gray-900 flex items-center",children:T.jsxs("button",{onClick:()=>e(null),className:"flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",children:[T.jsx(IC,{size:16})," Voltar para a Sala de Jogos"]})}),T.jsx("div",{className:"flex-grow",children:s.component})]})}return T.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-800",children:[T.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-white",children:"Sala de Recreação"}),T.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl",children:t.map(s=>T.jsxs("button",{onClick:()=>e(s.id),className:"p-6 bg-gray-700 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-square",children:[T.jsx(y_,{size:48,className:"mb-4 text-blue-400"}),T.jsx("span",{className:"text-lg font-semibold text-white text-center",children:s.name})]},s.id))})]})},B6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Jogo da Velha em breve!"})}),q6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Jokempô em breve!"})}),F6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Break Bricks em breve!"})}),H6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Snake em breve!"})}),G6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Pong em breve!"})}),Q6=()=>T.jsx("div",{className:"flex items-center justify-center h-full",children:T.jsx("p",{children:"Flappy Bird em breve!"})});function Y6(){return T.jsxs(T.Fragment,{children:[T.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),T.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:T.jsx(K6,{})})]})}const K6=()=>{const[n,e]=ee.useState(null),[t,s]=ee.useState(!0),[a,l]=ee.useState(null);y6(n),ee.useEffect(()=>{const d=BN(cc,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await jN(cc,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),ee.useEffect(()=>{if(!n){l(null);return}const d=yt(Ie,"users",n.uid),p=Sn(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=Ua(za,`/status/${n.uid}`);await tm(d,{state:"offline",last_changed:Date.now()}),await Ot(yt(Ie,`/users/${n.uid}`),{state:"offline",last_changed:yl()}),await qN(cc),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?T.jsx(w6,{}):a?T.jsx(z6,{user:a,onLogout:c}):T.jsx(S6,{})};dx.createRoot(document.getElementById("root")).render(T.jsx(ee.StrictMode,{children:T.jsx(Y6,{})}));
