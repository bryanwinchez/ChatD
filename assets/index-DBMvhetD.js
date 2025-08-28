(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ng={exports:{}},Bu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function rR(){if(TT)return Bu;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Bu.Fragment=e,Bu.jsx=t,Bu.jsxs=t,Bu}var bT;function aR(){return bT||(bT=1,ng.exports=rR()),ng.exports}var T=aR(),ig={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function oR(){if(wT)return Oe;wT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,U={};function F(k,X,ce){this.props=k,this.context=X,this.refs=U,this.updater=ce||R}F.prototype.isReactComponent={},F.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},F.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function re(){}re.prototype=F.prototype;function se(k,X,ce){this.props=k,this.context=X,this.refs=U,this.updater=ce||R}var le=se.prototype=new re;le.constructor=se,O(le,F.prototype),le.isPureReactComponent=!0;var ge=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function D(k,X,ce,ie,ve,Pe){return ce=Pe.ref,{$$typeof:n,type:k,key:X,ref:ce!==void 0?ce:null,props:Pe}}function C(k,X){return D(k.type,X,void 0,void 0,void 0,k.props)}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function P(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return X[ce]})}var V=/\/+/g;function L(k,X){return typeof k=="object"&&k!==null&&k.key!=null?P(""+k.key):X.toString(36)}function x(){}function fe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(x,x):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Me(k,X,ce,ie,ve){var Pe=typeof k;(Pe==="undefined"||Pe==="boolean")&&(k=null);var Ae=!1;if(k===null)Ae=!0;else switch(Pe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(k.$$typeof){case n:case e:Ae=!0;break;case y:return Ae=k._init,Me(Ae(k._payload),X,ce,ie,ve)}}if(Ae)return ve=ve(k),Ae=ie===""?"."+L(k,0):ie,ge(ve)?(ce="",Ae!=null&&(ce=Ae.replace(V,"$&/")+"/"),Me(ve,X,ce,"",function(Zn){return Zn})):ve!=null&&(I(ve)&&(ve=C(ve,ce+(ve.key==null||k&&k.key===ve.key?"":(""+ve.key).replace(V,"$&/")+"/")+Ae)),X.push(ve)),1;Ae=0;var Vt=ie===""?".":ie+":";if(ge(k))for(var lt=0;lt<k.length;lt++)ie=k[lt],Pe=Vt+L(ie,lt),Ae+=Me(ie,X,ce,Pe,ve);else if(lt=w(k),typeof lt=="function")for(k=lt.call(k),lt=0;!(ie=k.next()).done;)ie=ie.value,Pe=Vt+L(ie,lt++),Ae+=Me(ie,X,ce,Pe,ve);else if(Pe==="object"){if(typeof k.then=="function")return Me(fe(k),X,ce,ie,ve);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Y(k,X,ce){if(k==null)return k;var ie=[],ve=0;return Me(k,ie,"","",function(Pe){return X.call(ce,Pe,ve++)}),ie}function ne(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var te=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function be(){}return Oe.Children={map:Y,forEach:function(k,X,ce){Y(k,function(){X.apply(this,arguments)},ce)},count:function(k){var X=0;return Y(k,function(){X++}),X},toArray:function(k){return Y(k,function(X){return X})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Oe.Component=F,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=se,Oe.StrictMode=s,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ue.H.useMemoCache(k)}},Oe.cache=function(k){return function(){return k.apply(null,arguments)}},Oe.cloneElement=function(k,X,ce){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=O({},k.props),ve=k.key,Pe=void 0;if(X!=null)for(Ae in X.ref!==void 0&&(Pe=void 0),X.key!==void 0&&(ve=""+X.key),X)!me.call(X,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&X.ref===void 0||(ie[Ae]=X[Ae]);var Ae=arguments.length-2;if(Ae===1)ie.children=ce;else if(1<Ae){for(var Vt=Array(Ae),lt=0;lt<Ae;lt++)Vt[lt]=arguments[lt+2];ie.children=Vt}return D(k.type,ve,void 0,void 0,Pe,ie)},Oe.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Oe.createElement=function(k,X,ce){var ie,ve={},Pe=null;if(X!=null)for(ie in X.key!==void 0&&(Pe=""+X.key),X)me.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ve[ie]=X[ie]);var Ae=arguments.length-2;if(Ae===1)ve.children=ce;else if(1<Ae){for(var Vt=Array(Ae),lt=0;lt<Ae;lt++)Vt[lt]=arguments[lt+2];ve.children=Vt}if(k&&k.defaultProps)for(ie in Ae=k.defaultProps,Ae)ve[ie]===void 0&&(ve[ie]=Ae[ie]);return D(k,Pe,void 0,void 0,null,ve)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(k){return{$$typeof:d,render:k}},Oe.isValidElement=I,Oe.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ne}},Oe.memo=function(k,X){return{$$typeof:g,type:k,compare:X===void 0?null:X}},Oe.startTransition=function(k){var X=ue.T,ce={};ue.T=ce;try{var ie=k(),ve=ue.S;ve!==null&&ve(ce,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(be,te)}catch(Pe){te(Pe)}finally{ue.T=X}},Oe.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Oe.use=function(k){return ue.H.use(k)},Oe.useActionState=function(k,X,ce){return ue.H.useActionState(k,X,ce)},Oe.useCallback=function(k,X){return ue.H.useCallback(k,X)},Oe.useContext=function(k){return ue.H.useContext(k)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(k,X){return ue.H.useDeferredValue(k,X)},Oe.useEffect=function(k,X,ce){var ie=ue.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,X)},Oe.useId=function(){return ue.H.useId()},Oe.useImperativeHandle=function(k,X,ce){return ue.H.useImperativeHandle(k,X,ce)},Oe.useInsertionEffect=function(k,X){return ue.H.useInsertionEffect(k,X)},Oe.useLayoutEffect=function(k,X){return ue.H.useLayoutEffect(k,X)},Oe.useMemo=function(k,X){return ue.H.useMemo(k,X)},Oe.useOptimistic=function(k,X){return ue.H.useOptimistic(k,X)},Oe.useReducer=function(k,X,ce){return ue.H.useReducer(k,X,ce)},Oe.useRef=function(k){return ue.H.useRef(k)},Oe.useState=function(k){return ue.H.useState(k)},Oe.useSyncExternalStore=function(k,X,ce){return ue.H.useSyncExternalStore(k,X,ce)},Oe.useTransition=function(){return ue.H.useTransition()},Oe.version="19.1.1",Oe}var ST;function v_(){return ST||(ST=1,ig.exports=oR()),ig.exports}var J=v_(),sg={exports:{}},qu={},rg={exports:{}},ag={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function lR(){return AT||(AT=1,(function(n){function e(Y,ne){var te=Y.length;Y.push(ne);e:for(;0<te;){var be=te-1>>>1,k=Y[be];if(0<a(k,ne))Y[be]=ne,Y[te]=k,te=be;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ne=Y[0],te=Y.pop();if(te!==ne){Y[0]=te;e:for(var be=0,k=Y.length,X=k>>>1;be<X;){var ce=2*(be+1)-1,ie=Y[ce],ve=ce+1,Pe=Y[ve];if(0>a(ie,te))ve<k&&0>a(Pe,ie)?(Y[be]=Pe,Y[ve]=te,be=ve):(Y[be]=ie,Y[ce]=te,be=ce);else if(ve<k&&0>a(Pe,te))Y[be]=Pe,Y[ve]=te,be=ve;else break e}}return ne}function a(Y,ne){var te=Y.sortIndex-ne.sortIndex;return te!==0?te:Y.id-ne.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,b=null,w=3,R=!1,O=!1,U=!1,F=!1,re=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function ge(Y){for(var ne=t(g);ne!==null;){if(ne.callback===null)s(g);else if(ne.startTime<=Y)s(g),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(g)}}function ue(Y){if(U=!1,ge(Y),!O)if(t(p)!==null)O=!0,me||(me=!0,L());else{var ne=t(g);ne!==null&&Me(ue,ne.startTime-Y)}}var me=!1,D=-1,C=5,I=-1;function P(){return F?!0:!(n.unstable_now()-I<C)}function V(){if(F=!1,me){var Y=n.unstable_now();I=Y;var ne=!0;try{e:{O=!1,U&&(U=!1,se(D),D=-1),R=!0;var te=w;try{t:{for(ge(Y),b=t(p);b!==null&&!(b.expirationTime>Y&&P());){var be=b.callback;if(typeof be=="function"){b.callback=null,w=b.priorityLevel;var k=be(b.expirationTime<=Y);if(Y=n.unstable_now(),typeof k=="function"){b.callback=k,ge(Y),ne=!0;break t}b===t(p)&&s(p),ge(Y)}else s(p);b=t(p)}if(b!==null)ne=!0;else{var X=t(g);X!==null&&Me(ue,X.startTime-Y),ne=!1}}break e}finally{b=null,w=te,R=!1}ne=void 0}}finally{ne?L():me=!1}}}var L;if(typeof le=="function")L=function(){le(V)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,fe=x.port2;x.port1.onmessage=V,L=function(){fe.postMessage(null)}}else L=function(){re(V,0)};function Me(Y,ne){D=re(function(){Y(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var te=w;w=ne;try{return Y()}finally{w=te}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var te=w;w=Y;try{return ne()}finally{w=te}},n.unstable_scheduleCallback=function(Y,ne,te){var be=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,Y){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=te+k,Y={id:y++,callback:ne,priorityLevel:Y,startTime:te,expirationTime:k,sortIndex:-1},te>be?(Y.sortIndex=te,e(g,Y),t(p)===null&&Y===t(g)&&(U?(se(D),D=-1):U=!0,Me(ue,te-be))):(Y.sortIndex=k,e(p,Y),O||R||(O=!0,me||(me=!0,L()))),Y},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(Y){var ne=w;return function(){var te=w;w=ne;try{return Y.apply(this,arguments)}finally{w=te}}}})(ag)),ag}var CT;function uR(){return CT||(CT=1,rg.exports=lR()),rg.exports}var og={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT;function cR(){if(xT)return Tn;xT=1;var n=v_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},Tn.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:R}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Tn.requestFormReset=function(p){s.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},Tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var RT;function hR(){if(RT)return og.exports;RT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),og.exports=cR(),og.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function fR(){if(IT)return qu;IT=1;var n=uR(),e=v_(),t=hR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),se=Symbol.for("react.consumer"),le=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function fe(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case F:return"Profiler";case U:return"StrictMode";case ue:return"Suspense";case me:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case R:return"Portal";case le:return(i.displayName||"Context")+".Provider";case se:return(i._context.displayName||"Context")+".Consumer";case ge:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case D:return r=i.displayName||null,r!==null?r:fe(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return fe(i(r))}catch{}}return null}var Me=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],k=-1;function X(i){return{current:i}}function ce(i){0>k||(i.current=be[k],be[k]=null,k--)}function ie(i,r){k++,be[k]=i.current,i.current=r}var ve=X(null),Pe=X(null),Ae=X(null),Vt=X(null);function lt(i,r){switch(ie(Ae,r),ie(Pe,i),ie(ve,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?$E(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=$E(r),i=XE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ce(ve),ie(ve,i)}function Zn(){ce(ve),ce(Pe),ce(Ae)}function xi(i){i.memoizedState!==null&&ie(Vt,i);var r=ve.current,o=XE(r,i.type);r!==o&&(ie(Pe,i),ie(ve,o))}function mi(i){Pe.current===i&&(ce(ve),ce(Pe)),Vt.current===i&&(ce(Vt),Lu._currentValue=te)}var is=Object.prototype.hasOwnProperty,ss=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,Kr=n.unstable_shouldYield,to=n.unstable_requestPaint,On=n.unstable_now,$s=n.unstable_getCurrentPriorityLevel,as=n.unstable_ImmediatePriority,Ri=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,_e=n.unstable_LowPriority,Ce=n.unstable_IdlePriority,Be=n.log,Qt=n.unstable_setDisableYieldValue,Je=null,Ve=null;function vn(i){if(typeof Be=="function"&&Qt(i),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Je,i)}catch{}}var Jt=Math.clz32?Math.clz32:$r,Vl=Math.log,sm=Math.LN2;function $r(i){return i>>>=0,i===0?32:31-(Vl(i)/sm|0)|0}var Xr=256,Wr=4194304;function pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function no(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=pi(u):(E&=S,E!==0?f=pi(E):o||(o=S&~i,o!==0&&(f=pi(o))))):(S=u&~m,S!==0?f=pi(S):E!==0?f=pi(E):o||(o=u&~i,o!==0&&(f=pi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Zr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ll(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jl(){var i=Xr;return Xr<<=1,(Xr&4194048)===0&&(Xr=256),i}function Ul(){var i=Wr;return Wr<<=1,(Wr&62914560)===0&&(Wr=4194304),i}function ls(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function us(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function zl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,N=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-Jt(o),Z=1<<K;S[K]=0,N[K]=-1;var H=q[K];if(H!==null)for(q[K]=null,K=0;K<H.length;K++){var G=H[K];G!==null&&(G.lane&=-536870913)}o&=~Z}u!==0&&Ii(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Ii(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Jt(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Fl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Jt(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Xs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function io(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ws(){var i=ne.p;return i!==0?i:(i=window.event,i===void 0?32:pT(i.type))}function Gc(i,r){var o=ne.p;try{return ne.p=i,r()}finally{ne.p=o}}var bt=Math.random().toString(36).slice(2),Yt="__reactFiber$"+bt,Lt="__reactProps$"+bt,Jn="__reactContainer$"+bt,Bl="__reactEvents$"+bt,rm="__reactListeners$"+bt,Zs="__reactHandles$"+bt,Qc="__reactResources$"+bt,Jr="__reactMarker$"+bt;function Js(i){delete i[Yt],delete i[Lt],delete i[Bl],delete i[rm],delete i[Zs]}function cs(i){var r=i[Yt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Jn]||o[Yt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=eT(i);i!==null;){if(o=i[Yt])return o;i=eT(i)}return r}i=o,o=i.parentNode}return null}function Ni(i){if(i=i[Yt]||i[Jn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Di(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function xn(i){var r=i[Qc];return r||(r=i[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function It(i){i[Jr]=!0}var ql=new Set,so={};function gi(i,r){hs(i,r),hs(i+"Capture",r)}function hs(i,r){for(so[i]=r,i=0;i<r.length;i++)ql.add(r[i])}var Yc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},ea={};function $c(i){return is.call(ea,i)?!0:is.call(Kc,i)?!1:Yc.test(i)?ea[i]=!0:(Kc[i]=!0,!1)}function er(i,r,o){if($c(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function ki(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function hn(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var ta,Xc;function fs(i){if(ta===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ta=r&&r[1]||"",Xc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ta+i+Xc}var ro=!1;function ao(i,r){if(!i||ro)return"";ro=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var H=G}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(G){H=G}i.call(Z.prototype)}}else{try{throw Error()}catch(G){H=G}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var N=E.split(`
`),q=S.split(`
`);for(f=u=0;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===N.length||f===q.length)for(u=N.length-1,f=q.length-1;1<=u&&0<=f&&N[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(N[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||N[u]!==q[f]){var K=`
`+N[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{ro=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fs(o):""}function Hl(i){switch(i.tag){case 26:case 27:case 5:return fs(i.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return ao(i.type,!1);case 11:return ao(i.type.render,!1);case 1:return ao(i.type,!0);case 31:return fs("Activity");default:return""}}function oo(i){try{var r="";do r+=Hl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Rn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Gl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function am(i){var r=Gl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function lo(i){i._valueTracker||(i._valueTracker=am(i))}function Ql(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Gl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function na(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var om=/[\n"\\]/g;function jt(i){return i.replace(om,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function qn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Rn(r)):i.value!==""+Rn(r)&&(i.value=""+Rn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?tr(i,E,Rn(r)):o!=null?tr(i,E,Rn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+Rn(S):i.removeAttribute("name")}function ia(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+Rn(o):"",r=r!=null?""+Rn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function tr(i,r,o){r==="number"&&na(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ds(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+Rn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function ut(i,r,o){if(r!=null&&(r=""+Rn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Rn(o):""}function sa(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(Me(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Rn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ei(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||ra.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Yl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Wc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Wc(i,m,r[m])}function Kl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uo(i){return um.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ms=null;function ti(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ps=null,gs=null;function $l(i){var r=Ni(i);if(r&&(i=r.stateNode)){var o=i[Lt]||null;e:switch(i=r.stateNode,r.type){case"input":if(qn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Lt]||null;if(!f)throw Error(s(90));qn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ql(u)}break e;case"textarea":ut(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(i,!!o.multiple,r,!1)}}}var Mi=!1;function Zc(i,r,o){if(Mi)return i(r,o);Mi=!0;try{var u=i(r);return u}finally{if(Mi=!1,(ps!==null||gs!==null)&&(Gh(),ps&&(r=ps,i=gs,gs=ps=null,$l(r),i)))for(r=0;r<i.length;r++)$l(i[r])}}function aa(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(_i)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){ni=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{ni=!1}var Oi=null,nr=null,_s=null;function Xl(){if(_s)return _s;var i,r=nr,o=r.length,u,f="value"in Oi?Oi.value:Oi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return _s=f.slice(i,1<u?1-u:void 0)}function Pi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Vi(){return!0}function Wl(){return!1}function en(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vi:Wl,this.isPropagationStopped=Wl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=en(it),la=y({},it,{view:0,detail:0}),Jc=en(la),ho,fo,Li,ua=y({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(ho=i.screenX-Li.screenX,fo=i.screenY-Li.screenY):fo=ho=0,Li=i),ho)},movementY:function(i){return"movementY"in i?i.movementY:fo}}),ii=en(ua),eh=y({},ua,{dataTransfer:0}),cm=en(eh),ca=y({},la,{relatedTarget:0}),mo=en(ca),Zl=y({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),po=en(Zl),th=y({},it,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),go=en(th),hm=y({},it,{data:0}),Jl=en(hm),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=ih[i])?!!r[i]:!1}function fa(){return eu}var sh=y({},la,{key:function(i){if(i.key){var r=ha[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?nh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(i){return i.type==="keypress"?Pi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),_o=en(sh),rh=y({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=en(rh),ys=y({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),ah=en(ys),oh=y({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=en(oh),uh=y({},ua,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),yo=en(uh),In=y({},it,{newState:0,oldState:0}),ch=en(In),hh=[9,13,27,32],ji=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,v=_i&&(!ji||h&&8<h&&11>=h),A=" ",z=!1;function Q(i,r){switch(i){case"keyup":return hh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ke=!1;function Kt(i,r){switch(i){case"compositionend":return ae(r);case"keypress":return r.which!==32?null:(z=!0,A);case"textInput":return i=r.data,i===A&&z?null:i;default:return null}}function $e(i,r){if(Ke)return i==="compositionend"||!ji&&Q(i,r)?(i=Xl(),_s=nr=Oi=null,Ke=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $t(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!tn[i.type]:r==="textarea"}function vs(i,r,o,u){ps?gs?gs.push(u):gs=[u]:ps=u,r=Wh(r,"onChange"),0<r.length&&(o=new co("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var fn=null,Ui=null;function nu(i){HE(i,0)}function fh(i){var r=Di(i);if(Ql(r))return i}function hv(i,r){if(i==="change")return r}var fv=!1;if(_i){var fm;if(_i){var dm="oninput"in document;if(!dm){var dv=document.createElement("div");dv.setAttribute("oninput","return;"),dm=typeof dv.oninput=="function"}fm=dm}else fm=!1;fv=fm&&(!document.documentMode||9<document.documentMode)}function mv(){fn&&(fn.detachEvent("onpropertychange",pv),Ui=fn=null)}function pv(i){if(i.propertyName==="value"&&fh(Ui)){var r=[];vs(r,Ui,i,ti(i)),Zc(nu,r)}}function PC(i,r,o){i==="focusin"?(mv(),fn=r,Ui=o,fn.attachEvent("onpropertychange",pv)):i==="focusout"&&mv()}function VC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return fh(Ui)}function LC(i,r){if(i==="click")return fh(r)}function jC(i,r){if(i==="input"||i==="change")return fh(r)}function UC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Hn=typeof Object.is=="function"?Object.is:UC;function iu(i,r){if(Hn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!is.call(r,f)||!Hn(i[f],r[f]))return!1}return!0}function gv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _v(i,r){var o=gv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gv(o)}}function yv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?yv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function vv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=na(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=na(i.document)}return r}function mm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var zC=_i&&"documentMode"in document&&11>=document.documentMode,vo=null,pm=null,su=null,gm=!1;function Ev(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gm||vo==null||vo!==na(u)||(u=vo,"selectionStart"in u&&mm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),su&&iu(su,u)||(su=u,u=Wh(pm,"onSelect"),0<u.length&&(r=new co("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=vo)))}function da(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Eo={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},_m={},Tv={};_i&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function ma(i){if(_m[i])return _m[i];if(!Eo[i])return i;var r=Eo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Tv)return _m[i]=r[o];return i}var bv=ma("animationend"),wv=ma("animationiteration"),Sv=ma("animationstart"),FC=ma("transitionrun"),BC=ma("transitionstart"),qC=ma("transitioncancel"),Av=ma("transitionend"),Cv=new Map,ym="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ym.push("scrollEnd");function yi(i,r){Cv.set(i,r),gi(r,[i])}var xv=new WeakMap;function si(i,r){if(typeof i=="object"&&i!==null){var o=xv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:oo(r)},xv.set(i,r),r)}return{value:i,source:r,stack:oo(r)}}var ri=[],To=0,vm=0;function dh(){for(var i=To,r=vm=To=0;r<i;){var o=ri[r];ri[r++]=null;var u=ri[r];ri[r++]=null;var f=ri[r];ri[r++]=null;var m=ri[r];if(ri[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Rv(o,f,m)}}function mh(i,r,o,u){ri[To++]=i,ri[To++]=r,ri[To++]=o,ri[To++]=u,vm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Em(i,r,o,u){return mh(i,r,o,u),ph(i)}function bo(i,r){return mh(i,null,null,r),ph(i)}function Rv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-Jt(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function ph(i){if(50<Iu)throw Iu=0,Cp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var wo={};function HC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(i,r,o,u){return new HC(i,r,o,u)}function Tm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Es(i,r){var o=i.alternate;return o===null?(o=Gn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Iv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function gh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")Tm(i)&&(E=1);else if(typeof i=="string")E=Qx(i,o,ve.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=Gn(31,o,r,f),i.elementType=I,i.lanes=m,i;case O:return pa(o.children,f,m,r);case U:E=8,f|=24;break;case F:return i=Gn(12,o,r,f|2),i.elementType=F,i.lanes=m,i;case ue:return i=Gn(13,o,r,f),i.elementType=ue,i.lanes=m,i;case me:return i=Gn(19,o,r,f),i.elementType=me,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case re:case le:E=10;break e;case se:E=9;break e;case ge:E=11;break e;case D:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Gn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function pa(i,r,o,u){return i=Gn(7,i,u,r),i.lanes=o,i}function bm(i,r,o){return i=Gn(6,i,null,r),i.lanes=o,i}function wm(i,r,o){return r=Gn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var So=[],Ao=0,_h=null,yh=0,ai=[],oi=0,ga=null,Ts=1,bs="";function _a(i,r){So[Ao++]=yh,So[Ao++]=_h,_h=i,yh=r}function Nv(i,r,o){ai[oi++]=Ts,ai[oi++]=bs,ai[oi++]=ga,ga=i;var u=Ts;i=bs;var f=32-Jt(u)-1;u&=~(1<<f),o+=1;var m=32-Jt(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ts=1<<32-Jt(r)+f|o<<f|u,bs=m+i}else Ts=1<<m|o<<f|u,bs=i}function Sm(i){i.return!==null&&(_a(i,1),Nv(i,1,0))}function Am(i){for(;i===_h;)_h=So[--Ao],So[Ao]=null,yh=So[--Ao],So[Ao]=null;for(;i===ga;)ga=ai[--oi],ai[oi]=null,bs=ai[--oi],ai[oi]=null,Ts=ai[--oi],ai[oi]=null}var Nn=null,Ct=null,tt=!1,ya=null,zi=!1,Cm=Error(s(519));function va(i){var r=Error(s(418,""));throw ou(si(r,i)),Cm}function Dv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Yt]=i,r[Lt]=u,o){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(o=0;o<Du.length;o++)He(Du[o],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":He("invalid",r),ia(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),lo(r);break;case"select":He("invalid",r);break;case"textarea":He("invalid",r),sa(r,u.value,u.defaultValue,u.children),lo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||KE(r.textContent,o)?(u.popover!=null&&(He("beforetoggle",r),He("toggle",r)),u.onScroll!=null&&He("scroll",r),u.onScrollEnd!=null&&He("scrollend",r),u.onClick!=null&&(r.onclick=Zh),r=!0):r=!1,r||va(i)}function kv(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Nn=Nn.return}}function ru(i){if(i!==Nn)return!1;if(!tt)return kv(i),tt=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Bp(i.type,i.memoizedProps)),o=!o),o&&Ct&&va(i),kv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Ct=Ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Ct=null}}else r===27?(r=Ct,yr(i.type)?(i=Qp,Qp=null,Ct=i):Ct=r):Ct=Nn?Ei(i.stateNode.nextSibling):null;return!0}function au(){Ct=Nn=null,tt=!1}function Mv(){var i=ya;return i!==null&&(Ln===null?Ln=i:Ln.push.apply(Ln,i),ya=null),i}function ou(i){ya===null?ya=[i]:ya.push(i)}var xm=X(null),Ea=null,ws=null;function ir(i,r,o){ie(xm,r._currentValue),r._currentValue=o}function Ss(i){i._currentValue=xm.current,ce(xm)}function Rm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Im(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var N=0;N<r.length;N++)if(S.context===r[N]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Rm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Rm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function lu(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Hn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Vt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Lu):i=[Lu])}f=f.return}i!==null&&Im(r,i,o,u),r.flags|=262144}function vh(i){for(i=i.firstContext;i!==null;){if(!Hn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ta(i){Ea=i,ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function En(i){return Ov(Ea,i)}function Eh(i,r){return Ea===null&&Ta(i),Ov(i,r)}function Ov(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ws===null){if(i===null)throw Error(s(308));ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ws=ws.next=r;return o}var GC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},QC=n.unstable_scheduleCallback,YC=n.unstable_NormalPriority,Xt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nm(){return{controller:new GC,data:new Map,refCount:0}}function uu(i){i.refCount--,i.refCount===0&&QC(YC,function(){i.controller.abort()})}var cu=null,Dm=0,Co=0,xo=null;function KC(i,r){if(cu===null){var o=cu=[];Dm=0,Co=Mp(),xo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Dm++,r.then(Pv,Pv),r}function Pv(){if(--Dm===0&&cu!==null){xo!==null&&(xo.status="fulfilled");var i=cu;cu=null,Co=0,xo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function $C(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Vv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&KC(i,r),Vv!==null&&Vv(i,r)};var ba=X(null);function km(){var i=ba.current;return i!==null?i:pt.pooledCache}function Th(i,r){r===null?ie(ba,ba.current):ie(ba,r.pool)}function Lv(){var i=km();return i===null?null:{parent:Xt._currentValue,pool:i}}var hu=Error(s(460)),jv=Error(s(474)),bh=Error(s(542)),Mm={then:function(){}};function Uv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function wh(){}function zv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(wh,wh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(wh,wh);else{if(i=pt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw fu=r,hu}}var fu=null;function Fv(){if(fu===null)throw Error(s(459));var i=fu;return fu=null,i}function Bv(i){if(i===hu||i===bh)throw Error(s(483))}var sr=!1;function Om(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function rr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ar(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(rt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=ph(i),Rv(i,null,o),r}return mh(i,u,r,o),ph(i)}function du(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Fl(i,o)}}function Vm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Lm=!1;function mu(){if(Lm){var i=xo;if(i!==null)throw i}}function pu(i,r,o,u){Lm=!1;var f=i.updateQueue;sr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var N=S,q=N.next;N.next=null,E===null?m=q:E.next=q,E=N;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=q:S.next=q,K.lastBaseUpdate=N))}if(m!==null){var Z=f.baseState;E=0,K=q=N=null,S=m;do{var H=S.lane&-536870913,G=H!==S.lane;if(G?(Xe&H)===H:(u&H)===H){H!==0&&H===Co&&(Lm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var xe=i,Te=S;H=r;var ft=o;switch(Te.tag){case 1:if(xe=Te.payload,typeof xe=="function"){Z=xe.call(ft,Z,H);break e}Z=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Te.payload,H=typeof xe=="function"?xe.call(ft,Z,H):xe,H==null)break e;Z=y({},Z,H);break e;case 2:sr=!0}}H=S.callback,H!==null&&(i.flags|=64,G&&(i.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(q=K=G,N=Z):K=K.next=G,E|=H;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);K===null&&(N=Z),f.baseState=N,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),mr|=E,i.lanes=E,i.memoizedState=Z}}function qv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Hv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)qv(o[i],r)}var Ro=X(null),Sh=X(0);function Gv(i,r){i=Ds,ie(Sh,i),ie(Ro,r),Ds=i|r.baseLanes}function jm(){ie(Sh,Ds),ie(Ro,Ro.current)}function Um(){Ds=Sh.current,ce(Ro),ce(Sh)}var or=0,Le=null,ct=null,Ut=null,Ah=!1,Io=!1,wa=!1,Ch=0,gu=0,No=null,XC=0;function Nt(){throw Error(s(321))}function zm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Hn(i[o],r[o]))return!1;return!0}function Fm(i,r,o,u,f,m){return or=m,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?R0:I0,wa=!1,m=o(u,f),wa=!1,Io&&(m=Yv(r,o,u,f)),Qv(i),m}function Qv(i){Y.H=kh;var r=ct!==null&&ct.next!==null;if(or=0,Ut=ct=Le=null,Ah=!1,gu=0,No=null,r)throw Error(s(300));i===null||nn||(i=i.dependencies,i!==null&&vh(i)&&(nn=!0))}function Yv(i,r,o,u){Le=i;var f=0;do{if(Io&&(No=null),gu=0,Io=!1,25<=f)throw Error(s(301));if(f+=1,Ut=ct=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=ix,m=r(o,u)}while(Io);return m}function WC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?_u(r):r,i=i.useState()[0],(ct!==null?ct.memoizedState:null)!==i&&(Le.flags|=1024),r}function Bm(){var i=Ch!==0;return Ch=0,i}function qm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Hm(i){if(Ah){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ah=!1}or=0,Ut=ct=Le=null,Io=!1,gu=Ch=0,No=null}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?Le.memoizedState=Ut=i:Ut=Ut.next=i,Ut}function zt(){if(ct===null){var i=Le.alternate;i=i!==null?i.memoizedState:null}else i=ct.next;var r=Ut===null?Le.memoizedState:Ut.next;if(r!==null)Ut=r,ct=i;else{if(i===null)throw Le.alternate===null?Error(s(467)):Error(s(310));ct=i,i={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ut===null?Le.memoizedState=Ut=i:Ut=Ut.next=i}return Ut}function Gm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(i){var r=gu;return gu+=1,No===null&&(No=[]),i=zv(No,i,r),r=Le,(Ut===null?r.memoizedState:Ut.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?R0:I0),i}function xh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return _u(i);if(i.$$typeof===le)return En(i)}throw Error(s(438,String(i)))}function Qm(i){var r=null,o=Le.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Le.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Gm(),Le.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=P;return r.index++,o}function As(i,r){return typeof r=="function"?r(i):r}function Rh(i){var r=zt();return Ym(r,ct,i)}function Ym(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,N=null,q=r,K=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(Xe&Z)===Z:(or&Z)===Z){var H=q.revertLane;if(H===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===Co&&(K=!0);else if((or&H)===H){q=q.next,H===Co&&(K=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},N===null?(S=N=Z,E=m):N=N.next=Z,Le.lanes|=H,mr|=H;Z=q.action,wa&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else H={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},N===null?(S=N=H,E=m):N=N.next=H,Le.lanes|=Z,mr|=Z;q=q.next}while(q!==null&&q!==r);if(N===null?E=m:N.next=S,!Hn(m,i.memoizedState)&&(nn=!0,K&&(o=xo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=N,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Km(i){var r=zt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Hn(m,r.memoizedState)||(nn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Kv(i,r,o){var u=Le,f=zt(),m=tt;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Hn((ct||f).memoizedState,o);E&&(f.memoizedState=o,nn=!0),f=f.queue;var S=Wv.bind(null,u,f,i);if(yu(2048,8,S,[i]),f.getSnapshot!==r||E||Ut!==null&&Ut.memoizedState.tag&1){if(u.flags|=2048,Do(9,Ih(),Xv.bind(null,u,f,o,r),null),pt===null)throw Error(s(349));m||(or&124)!==0||$v(u,r,o)}return o}function $v(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Le.updateQueue,r===null?(r=Gm(),Le.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Xv(i,r,o,u){r.value=o,r.getSnapshot=u,Zv(r)&&Jv(i)}function Wv(i,r,o){return o(function(){Zv(r)&&Jv(i)})}function Zv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Hn(i,o)}catch{return!0}}function Jv(i){var r=bo(i,2);r!==null&&Xn(r,i,2)}function $m(i){var r=Pn();if(typeof i=="function"){var o=i;if(i=o(),wa){vn(!0);try{o()}finally{vn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:i},r}function e0(i,r,o,u){return i.baseState=o,Ym(i,ct,typeof u=="function"?u:As)}function ZC(i,r,o,u,f){if(Dh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,t0(r,m)):(m.next=o.next,r.pending=o.next=m)}}function t0(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),N=Y.S;N!==null&&N(E,S),n0(i,r,S)}catch(q){Xm(i,r,q)}finally{Y.T=m}}else try{m=o(f,u),n0(i,r,m)}catch(q){Xm(i,r,q)}}function n0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){i0(i,r,u)},function(u){return Xm(i,r,u)}):i0(i,r,o)}function i0(i,r,o){r.status="fulfilled",r.value=o,s0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,t0(i,o)))}function Xm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,s0(r),r=r.next;while(r!==u)}i.action=null}function s0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function r0(i,r){return r}function a0(i,r){if(tt){var o=pt.formState;if(o!==null){e:{var u=Le;if(tt){if(Ct){t:{for(var f=Ct,m=zi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ct=Ei(f.nextSibling),u=f.data==="F!";break e}}va(u)}u=!1}u&&(r=o[0])}}return o=Pn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:r},o.queue=u,o=A0.bind(null,Le,u),u.dispatch=o,u=$m(!1),m=tp.bind(null,Le,!1,u.queue),u=Pn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=ZC.bind(null,Le,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function o0(i){var r=zt();return l0(r,ct,i)}function l0(i,r,o){if(r=Ym(i,r,r0)[0],i=Rh(As)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=_u(r)}catch(E){throw E===hu?bh:E}else u=r;r=zt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Le.flags|=2048,Do(9,Ih(),JC.bind(null,f,o),null)),[u,m,i]}function JC(i,r){i.action=r}function u0(i){var r=zt(),o=ct;if(o!==null)return l0(r,o,i);zt(),r=r.memoizedState,o=zt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function Do(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Le.updateQueue,r===null&&(r=Gm(),Le.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Ih(){return{destroy:void 0,resource:void 0}}function c0(){return zt().memoizedState}function Nh(i,r,o,u){var f=Pn();u=u===void 0?null:u,Le.flags|=i,f.memoizedState=Do(1|r,Ih(),o,u)}function yu(i,r,o,u){var f=zt();u=u===void 0?null:u;var m=f.memoizedState.inst;ct!==null&&u!==null&&zm(u,ct.memoizedState.deps)?f.memoizedState=Do(r,m,o,u):(Le.flags|=i,f.memoizedState=Do(1|r,m,o,u))}function h0(i,r){Nh(8390656,8,i,r)}function f0(i,r){yu(2048,8,i,r)}function d0(i,r){return yu(4,2,i,r)}function m0(i,r){return yu(4,4,i,r)}function p0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function g0(i,r,o){o=o!=null?o.concat([i]):null,yu(4,4,p0.bind(null,r,i),o)}function Wm(){}function _0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&zm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function y0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&zm(r,u[1]))return u[0];if(u=i(),wa){vn(!0);try{i()}finally{vn(!1)}}return o.memoizedState=[u,r],u}function Zm(i,r,o){return o===void 0||(or&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=TE(),Le.lanes|=i,mr|=i,o)}function v0(i,r,o,u){return Hn(o,r)?o:Ro.current!==null?(i=Zm(i,o,u),Hn(i,r)||(nn=!0),i):(or&42)===0?(nn=!0,i.memoizedState=o):(i=TE(),Le.lanes|=i,mr|=i,r)}function E0(i,r,o,u,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,tp(i,!1,r,o);try{var N=f(),q=Y.S;if(q!==null&&q(S,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var K=$C(N,u);vu(i,r,K,$n(i))}else vu(i,r,u,$n(i))}catch(Z){vu(i,r,{then:function(){},status:"rejected",reason:Z},$n())}finally{ne.p=m,Y.T=E}}function ex(){}function Jm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=T0(i).queue;E0(i,f,r,te,o===null?ex:function(){return b0(i),o(u)})}function T0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:te},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function b0(i){var r=T0(i).next.queue;vu(i,r,{},$n())}function ep(){return En(Lu)}function w0(){return zt().memoizedState}function S0(){return zt().memoizedState}function tx(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=$n();i=rr(o);var u=ar(r,i,o);u!==null&&(Xn(u,r,o),du(u,r,o)),r={cache:Nm()},i.payload=r;return}r=r.return}}function nx(i,r,o){var u=$n();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Dh(i)?C0(r,o):(o=Em(i,r,o,u),o!==null&&(Xn(o,i,u),x0(o,r,u)))}function A0(i,r,o){var u=$n();vu(i,r,o,u)}function vu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Dh(i))C0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Hn(S,E))return mh(i,r,f,0),pt===null&&dh(),!1}catch{}finally{}if(o=Em(i,r,f,u),o!==null)return Xn(o,i,u),x0(o,r,u),!0}return!1}function tp(i,r,o,u){if(u={lane:2,revertLane:Mp(),action:u,hasEagerState:!1,eagerState:null,next:null},Dh(i)){if(r)throw Error(s(479))}else r=Em(i,o,u,2),r!==null&&Xn(r,i,2)}function Dh(i){var r=i.alternate;return i===Le||r!==null&&r===Le}function C0(i,r){Io=Ah=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function x0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Fl(i,o)}}var kh={readContext:En,use:xh,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},R0={readContext:En,use:xh,useCallback:function(i,r){return Pn().memoizedState=[i,r===void 0?null:r],i},useContext:En,useEffect:h0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Nh(4194308,4,p0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Nh(4194308,4,i,r)},useInsertionEffect:function(i,r){Nh(4,2,i,r)},useMemo:function(i,r){var o=Pn();r=r===void 0?null:r;var u=i();if(wa){vn(!0);try{i()}finally{vn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Pn();if(o!==void 0){var f=o(r);if(wa){vn(!0);try{o(r)}finally{vn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=nx.bind(null,Le,i),[u.memoizedState,i]},useRef:function(i){var r=Pn();return i={current:i},r.memoizedState=i},useState:function(i){i=$m(i);var r=i.queue,o=A0.bind(null,Le,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Wm,useDeferredValue:function(i,r){var o=Pn();return Zm(o,i,r)},useTransition:function(){var i=$m(!1);return i=E0.bind(null,Le,i.queue,!0,!1),Pn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Le,f=Pn();if(tt){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),pt===null)throw Error(s(349));(Xe&124)!==0||$v(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,h0(Wv.bind(null,u,m,i),[i]),u.flags|=2048,Do(9,Ih(),Xv.bind(null,u,m,o,r),null),o},useId:function(){var i=Pn(),r=pt.identifierPrefix;if(tt){var o=bs,u=Ts;o=(u&~(1<<32-Jt(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Ch++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=XC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:ep,useFormState:a0,useActionState:a0,useOptimistic:function(i){var r=Pn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=tp.bind(null,Le,!0,o),o.dispatch=r,[i,r]},useMemoCache:Qm,useCacheRefresh:function(){return Pn().memoizedState=tx.bind(null,Le)}},I0={readContext:En,use:xh,useCallback:_0,useContext:En,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Rh,useRef:c0,useState:function(){return Rh(As)},useDebugValue:Wm,useDeferredValue:function(i,r){var o=zt();return v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Rh(As)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:ep,useFormState:o0,useActionState:o0,useOptimistic:function(i,r){var o=zt();return e0(o,ct,i,r)},useMemoCache:Qm,useCacheRefresh:S0},ix={readContext:En,use:xh,useCallback:_0,useContext:En,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Km,useRef:c0,useState:function(){return Km(As)},useDebugValue:Wm,useDeferredValue:function(i,r){var o=zt();return ct===null?Zm(o,i,r):v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Km(As)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:ep,useFormState:u0,useActionState:u0,useOptimistic:function(i,r){var o=zt();return ct!==null?e0(o,ct,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Qm,useCacheRefresh:S0},ko=null,Eu=0;function Mh(i){var r=Eu;return Eu+=1,ko===null&&(ko=[]),zv(ko,i,r)}function Tu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Oh(i,r){throw r.$$typeof===b?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function N0(i){var r=i._init;return r(i._payload)}function D0(i){function r(j,M){if(i){var B=j.deletions;B===null?(j.deletions=[M],j.flags|=16):B.push(M)}}function o(j,M){if(!i)return null;for(;M!==null;)r(j,M),M=M.sibling;return null}function u(j){for(var M=new Map;j!==null;)j.key!==null?M.set(j.key,j):M.set(j.index,j),j=j.sibling;return M}function f(j,M){return j=Es(j,M),j.index=0,j.sibling=null,j}function m(j,M,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<M?(j.flags|=67108866,M):B):(j.flags|=67108866,M)):(j.flags|=1048576,M)}function E(j){return i&&j.alternate===null&&(j.flags|=67108866),j}function S(j,M,B,W){return M===null||M.tag!==6?(M=bm(B,j.mode,W),M.return=j,M):(M=f(M,B),M.return=j,M)}function N(j,M,B,W){var pe=B.type;return pe===O?K(j,M,B.props.children,W,B.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===C&&N0(pe)===M.type)?(M=f(M,B.props),Tu(M,B),M.return=j,M):(M=gh(B.type,B.key,B.props,null,j.mode,W),Tu(M,B),M.return=j,M)}function q(j,M,B,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=wm(B,j.mode,W),M.return=j,M):(M=f(M,B.children||[]),M.return=j,M)}function K(j,M,B,W,pe){return M===null||M.tag!==7?(M=pa(B,j.mode,W,pe),M.return=j,M):(M=f(M,B),M.return=j,M)}function Z(j,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=bm(""+M,j.mode,B),M.return=j,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return B=gh(M.type,M.key,M.props,null,j.mode,B),Tu(B,M),B.return=j,B;case R:return M=wm(M,j.mode,B),M.return=j,M;case C:var W=M._init;return M=W(M._payload),Z(j,M,B)}if(Me(M)||L(M))return M=pa(M,j.mode,B,null),M.return=j,M;if(typeof M.then=="function")return Z(j,Mh(M),B);if(M.$$typeof===le)return Z(j,Eh(j,M),B);Oh(j,M)}return null}function H(j,M,B,W){var pe=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:S(j,M,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===pe?N(j,M,B,W):null;case R:return B.key===pe?q(j,M,B,W):null;case C:return pe=B._init,B=pe(B._payload),H(j,M,B,W)}if(Me(B)||L(B))return pe!==null?null:K(j,M,B,W,null);if(typeof B.then=="function")return H(j,M,Mh(B),W);if(B.$$typeof===le)return H(j,M,Eh(j,B),W);Oh(j,B)}return null}function G(j,M,B,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return j=j.get(B)||null,S(M,j,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return j=j.get(W.key===null?B:W.key)||null,N(M,j,W,pe);case R:return j=j.get(W.key===null?B:W.key)||null,q(M,j,W,pe);case C:var Ue=W._init;return W=Ue(W._payload),G(j,M,B,W,pe)}if(Me(W)||L(W))return j=j.get(B)||null,K(M,j,W,pe,null);if(typeof W.then=="function")return G(j,M,B,Mh(W),pe);if(W.$$typeof===le)return G(j,M,B,Eh(M,W),pe);Oh(M,W)}return null}function xe(j,M,B,W){for(var pe=null,Ue=null,ye=M,we=M=0,rn=null;ye!==null&&we<B.length;we++){ye.index>we?(rn=ye,ye=null):rn=ye.sibling;var et=H(j,ye,B[we],W);if(et===null){ye===null&&(ye=rn);break}i&&ye&&et.alternate===null&&r(j,ye),M=m(et,M,we),Ue===null?pe=et:Ue.sibling=et,Ue=et,ye=rn}if(we===B.length)return o(j,ye),tt&&_a(j,we),pe;if(ye===null){for(;we<B.length;we++)ye=Z(j,B[we],W),ye!==null&&(M=m(ye,M,we),Ue===null?pe=ye:Ue.sibling=ye,Ue=ye);return tt&&_a(j,we),pe}for(ye=u(ye);we<B.length;we++)rn=G(ye,j,we,B[we],W),rn!==null&&(i&&rn.alternate!==null&&ye.delete(rn.key===null?we:rn.key),M=m(rn,M,we),Ue===null?pe=rn:Ue.sibling=rn,Ue=rn);return i&&ye.forEach(function(wr){return r(j,wr)}),tt&&_a(j,we),pe}function Te(j,M,B,W){if(B==null)throw Error(s(151));for(var pe=null,Ue=null,ye=M,we=M=0,rn=null,et=B.next();ye!==null&&!et.done;we++,et=B.next()){ye.index>we?(rn=ye,ye=null):rn=ye.sibling;var wr=H(j,ye,et.value,W);if(wr===null){ye===null&&(ye=rn);break}i&&ye&&wr.alternate===null&&r(j,ye),M=m(wr,M,we),Ue===null?pe=wr:Ue.sibling=wr,Ue=wr,ye=rn}if(et.done)return o(j,ye),tt&&_a(j,we),pe;if(ye===null){for(;!et.done;we++,et=B.next())et=Z(j,et.value,W),et!==null&&(M=m(et,M,we),Ue===null?pe=et:Ue.sibling=et,Ue=et);return tt&&_a(j,we),pe}for(ye=u(ye);!et.done;we++,et=B.next())et=G(ye,j,we,et.value,W),et!==null&&(i&&et.alternate!==null&&ye.delete(et.key===null?we:et.key),M=m(et,M,we),Ue===null?pe=et:Ue.sibling=et,Ue=et);return i&&ye.forEach(function(sR){return r(j,sR)}),tt&&_a(j,we),pe}function ft(j,M,B,W){if(typeof B=="object"&&B!==null&&B.type===O&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var pe=B.key;M!==null;){if(M.key===pe){if(pe=B.type,pe===O){if(M.tag===7){o(j,M.sibling),W=f(M,B.props.children),W.return=j,j=W;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===C&&N0(pe)===M.type){o(j,M.sibling),W=f(M,B.props),Tu(W,B),W.return=j,j=W;break e}o(j,M);break}else r(j,M);M=M.sibling}B.type===O?(W=pa(B.props.children,j.mode,W,B.key),W.return=j,j=W):(W=gh(B.type,B.key,B.props,null,j.mode,W),Tu(W,B),W.return=j,j=W)}return E(j);case R:e:{for(pe=B.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){o(j,M.sibling),W=f(M,B.children||[]),W.return=j,j=W;break e}else{o(j,M);break}else r(j,M);M=M.sibling}W=wm(B,j.mode,W),W.return=j,j=W}return E(j);case C:return pe=B._init,B=pe(B._payload),ft(j,M,B,W)}if(Me(B))return xe(j,M,B,W);if(L(B)){if(pe=L(B),typeof pe!="function")throw Error(s(150));return B=pe.call(B),Te(j,M,B,W)}if(typeof B.then=="function")return ft(j,M,Mh(B),W);if(B.$$typeof===le)return ft(j,M,Eh(j,B),W);Oh(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(o(j,M.sibling),W=f(M,B),W.return=j,j=W):(o(j,M),W=bm(B,j.mode,W),W.return=j,j=W),E(j)):o(j,M)}return function(j,M,B,W){try{Eu=0;var pe=ft(j,M,B,W);return ko=null,pe}catch(ye){if(ye===hu||ye===bh)throw ye;var Ue=Gn(29,ye,null,j.mode);return Ue.lanes=W,Ue.return=j,Ue}finally{}}}var Mo=D0(!0),k0=D0(!1),li=X(null),Fi=null;function lr(i){var r=i.alternate;ie(Wt,Wt.current&1),ie(li,i),Fi===null&&(r===null||Ro.current!==null||r.memoizedState!==null)&&(Fi=i)}function M0(i){if(i.tag===22){if(ie(Wt,Wt.current),ie(li,i),Fi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Fi=i)}}else ur()}function ur(){ie(Wt,Wt.current),ie(li,li.current)}function Cs(i){ce(li),Fi===i&&(Fi=null),ce(Wt)}var Wt=X(0);function Ph(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Gp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function np(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ip={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=$n(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(i,u,o),r!==null&&(Xn(r,i,o),du(r,i,o))}};function O0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!iu(o,u)||!iu(f,m):!0}function P0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&ip.enqueueReplaceState(r,r.state,null)}function Sa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Vh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function V0(i){Vh(i)}function L0(i){console.error(i)}function j0(i){Vh(i)}function Lh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function U0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function sp(i,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){Lh(i,r)},o}function z0(i){return i=rr(i),i.tag=3,i}function F0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){U0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){U0(r,o,u),typeof f!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function sx(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&lu(r,o,f,!0),o=li.current,o!==null){switch(o.tag){case 13:return Fi===null?Rp():o.alternate===null&&xt===0&&(xt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Mm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Np(i,u,f)),!1;case 22:return o.flags|=65536,u===Mm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Np(i,u,f)),!1}throw Error(s(435,o.tag))}return Np(i,u,f),Rp(),!1}if(tt)return r=li.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Cm&&(i=Error(s(422),{cause:u}),ou(si(i,o)))):(u!==Cm&&(r=Error(s(423),{cause:u}),ou(si(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=si(u,o),f=sp(i.stateNode,u,f),Vm(i,f),xt!==4&&(xt=2)),!1;var m=Error(s(520),{cause:u});if(m=si(m,o),Ru===null?Ru=[m]:Ru.push(m),xt!==4&&(xt=2),r===null)return!0;u=si(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=sp(o.stateNode,u,i),Vm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=z0(f),F0(f,i,o,u),Vm(o,f),!1}o=o.return}while(o!==null);return!1}var B0=Error(s(461)),nn=!1;function dn(i,r,o,u){r.child=i===null?k0(r,null,o,u):Mo(r,i.child,o,u)}function q0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return Ta(r),u=Fm(i,r,o,E,m,f),S=Bm(),i!==null&&!nn?(qm(i,r,f),xs(i,r,f)):(tt&&S&&Sm(r),r.flags|=1,dn(i,r,u,f),r.child)}function H0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!Tm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,G0(i,r,m,u,f)):(i=gh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!fp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:iu,o(E,u)&&i.ref===r.ref)return xs(i,r,f)}return r.flags|=1,i=Es(m,u),i.ref=r.ref,i.return=r,r.child=i}function G0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(iu(m,u)&&i.ref===r.ref)if(nn=!1,r.pendingProps=u=m,fp(i,f))(i.flags&131072)!==0&&(nn=!0);else return r.lanes=i.lanes,xs(i,r,f)}return rp(i,r,o,u,f)}function Q0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Y0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Th(r,m!==null?m.cachePool:null),m!==null?Gv(r,m):jm(),M0(r);else return r.lanes=r.childLanes=536870912,Y0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Th(r,m.cachePool),Gv(r,m),ur(),r.memoizedState=null):(i!==null&&Th(r,null),jm(),ur());return dn(i,r,f,o),r.child}function Y0(i,r,o,u){var f=km();return f=f===null?null:{parent:Xt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Th(r,null),jm(),M0(r),i!==null&&lu(i,r,u,!0),null}function jh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function rp(i,r,o,u,f){return Ta(r),o=Fm(i,r,o,u,void 0,f),u=Bm(),i!==null&&!nn?(qm(i,r,f),xs(i,r,f)):(tt&&u&&Sm(r),r.flags|=1,dn(i,r,o,f),r.child)}function K0(i,r,o,u,f,m){return Ta(r),r.updateQueue=null,o=Yv(r,u,o,f),Qv(i),u=Bm(),i!==null&&!nn?(qm(i,r,m),xs(i,r,m)):(tt&&u&&Sm(r),r.flags|=1,dn(i,r,o,m),r.child)}function $0(i,r,o,u,f){if(Ta(r),r.stateNode===null){var m=wo,E=o.contextType;typeof E=="object"&&E!==null&&(m=En(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ip,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Om(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?En(E):wo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(np(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&ip.enqueueReplaceState(m,m.state,null),pu(r,u,m,f),mu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,N=Sa(o,S);m.props=N;var q=m.context,K=o.contextType;E=wo,typeof K=="object"&&K!==null&&(E=En(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&P0(r,m,u,E),sr=!1;var H=r.memoizedState;m.state=H,pu(r,u,m,f),mu(),q=r.memoizedState,S||H!==q||sr?(typeof Z=="function"&&(np(r,o,Z,u),q=r.memoizedState),(N=sr||O0(r,o,N,u,H,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=N):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Pm(i,r),E=r.memoizedProps,K=Sa(o,E),m.props=K,Z=r.pendingProps,H=m.context,q=o.contextType,N=wo,typeof q=="object"&&q!==null&&(N=En(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||H!==N)&&P0(r,m,u,N),sr=!1,H=r.memoizedState,m.state=H,pu(r,u,m,f),mu();var G=r.memoizedState;E!==Z||H!==G||sr||i!==null&&i.dependencies!==null&&vh(i.dependencies)?(typeof S=="function"&&(np(r,o,S,u),G=r.memoizedState),(K=sr||O0(r,o,K,u,H,G,N)||i!==null&&i.dependencies!==null&&vh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,N)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=G),m.props=u,m.state=G,m.context=N,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,jh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Mo(r,i.child,null,f),r.child=Mo(r,null,o,f)):dn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=xs(i,r,f),i}function X0(i,r,o,u){return au(),r.flags|=256,dn(i,r,o,u),r.child}var ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function op(i){return{baseLanes:i,cachePool:Lv()}}function lp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ui),i}function W0(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(tt){if(f?lr(r):ur(),tt){var S=Ct,N;if(N=S){e:{for(N=S,S=zi;N.nodeType!==8;){if(!S){S=null;break e}if(N=Ei(N.nextSibling),N===null){S=null;break e}}S=N}S!==null?(r.memoizedState={dehydrated:S,treeContext:ga!==null?{id:Ts,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},N=Gn(18,null,null,0),N.stateNode=S,N.return=r,r.child=N,Nn=r,Ct=null,N=!0):N=!1}N||va(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Gp(S)?r.lanes=32:r.lanes=536870912,null;Cs(r)}return S=u.children,u=u.fallback,f?(ur(),f=r.mode,S=Uh({mode:"hidden",children:S},f),u=pa(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=op(o),f.childLanes=lp(i,E,o),r.memoizedState=ap,u):(lr(r),up(r,S))}if(N=i.memoizedState,N!==null&&(S=N.dehydrated,S!==null)){if(m)r.flags&256?(lr(r),r.flags&=-257,r=cp(i,r,o)):r.memoizedState!==null?(ur(),r.child=i.child,r.flags|=128,r=null):(ur(),f=u.fallback,S=r.mode,u=Uh({mode:"visible",children:u.children},S),f=pa(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Mo(r,i.child,null,o),u=r.child,u.memoizedState=op(o),u.childLanes=lp(i,E,o),r.memoizedState=ap,r=f);else if(lr(r),Gp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,ou({value:u,source:null,stack:null}),r=cp(i,r,o)}else if(nn||lu(i,r,o,!1),E=(o&i.childLanes)!==0,nn||E){if(E=pt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Xs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==N.retryLane))throw N.retryLane=u,bo(i,u),Xn(E,i,u),B0;S.data==="$?"||Rp(),r=cp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=N.treeContext,Ct=Ei(S.nextSibling),Nn=r,tt=!0,ya=null,zi=!1,i!==null&&(ai[oi++]=Ts,ai[oi++]=bs,ai[oi++]=ga,Ts=i.id,bs=i.overflow,ga=r),r=up(r,u.children),r.flags|=4096);return r}return f?(ur(),f=u.fallback,S=r.mode,N=i.child,q=N.sibling,u=Es(N,{mode:"hidden",children:u.children}),u.subtreeFlags=N.subtreeFlags&65011712,q!==null?f=Es(q,f):(f=pa(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=op(o):(N=S.cachePool,N!==null?(q=Xt._currentValue,N=N.parent!==q?{parent:q,pool:q}:N):N=Lv(),S={baseLanes:S.baseLanes|o,cachePool:N}),f.memoizedState=S,f.childLanes=lp(i,E,o),r.memoizedState=ap,u):(lr(r),o=i.child,i=o.sibling,o=Es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function up(i,r){return r=Uh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Uh(i,r){return i=Gn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function cp(i,r,o){return Mo(r,i.child,null,o),i=up(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Z0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Rm(i.return,r,o)}function hp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function J0(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(dn(i,r,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Z0(i,o,r);else if(i.tag===19)Z0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ie(Wt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ph(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),hp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ph(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}hp(r,!0,o,null,m);break;case"together":hp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),mr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(lu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Es(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Es(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function fp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&vh(i)))}function rx(i,r,o){switch(r.tag){case 3:lt(r,r.stateNode.containerInfo),ir(r,Xt,i.memoizedState.cache),au();break;case 27:case 5:xi(r);break;case 4:lt(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(lr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?W0(i,r,o):(lr(r),i=xs(i,r,o),i!==null?i.sibling:null);lr(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(lu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return J0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Wt,Wt.current),u)break;return null;case 22:case 23:return r.lanes=0,Q0(i,r,o);case 24:ir(r,Xt,i.memoizedState.cache)}return xs(i,r,o)}function eE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)nn=!0;else{if(!fp(i,o)&&(r.flags&128)===0)return nn=!1,rx(i,r,o);nn=(i.flags&131072)!==0}else nn=!1,tt&&(r.flags&1048576)!==0&&Nv(r,yh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Tm(u)?(i=Sa(u,i),r.tag=1,r=$0(null,r,u,i,o)):(r.tag=0,r=rp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===ge){r.tag=11,r=q0(null,r,u,i,o);break e}else if(f===D){r.tag=14,r=H0(null,r,u,i,o);break e}}throw r=fe(u)||u,Error(s(306,r,""))}}return r;case 0:return rp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Sa(u,r.pendingProps),$0(i,r,u,f,o);case 3:e:{if(lt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Pm(i,r),pu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,ir(r,Xt,u),u!==m.cache&&Im(r,[Xt],o,!0),mu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=X0(i,r,u,o);break e}else if(u!==f){f=si(Error(s(424)),r),ou(f),r=X0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=Ei(i.firstChild),Nn=r,tt=!0,ya=null,zi=!0,o=k0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(au(),u===f){r=xs(i,r,o);break e}dn(i,r,u,o)}r=r.child}return r;case 26:return jh(i,r),i===null?(o=sT(r.type,null,r.pendingProps,null))?r.memoizedState=o:tt||(o=r.type,i=r.pendingProps,u=Jh(Ae.current).createElement(o),u[Yt]=r,u[Lt]=i,pn(u,o,i),It(u),r.stateNode=u):r.memoizedState=sT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return xi(r),i===null&&tt&&(u=r.stateNode=tT(r.type,r.pendingProps,Ae.current),Nn=r,zi=!0,f=Ct,yr(r.type)?(Qp=f,Ct=Ei(u.firstChild)):Ct=f),dn(i,r,r.pendingProps.children,o),jh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&tt&&((f=u=Ct)&&(u=Mx(u,r.type,r.pendingProps,zi),u!==null?(r.stateNode=u,Nn=r,Ct=Ei(u.firstChild),zi=!1,f=!0):f=!1),f||va(r)),xi(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Bp(f,m)?u=null:E!==null&&Bp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Fm(i,r,WC,null,null,o),Lu._currentValue=f),jh(i,r),dn(i,r,u,o),r.child;case 6:return i===null&&tt&&((i=o=Ct)&&(o=Ox(o,r.pendingProps,zi),o!==null?(r.stateNode=o,Nn=r,Ct=null,i=!0):i=!1),i||va(r)),null;case 13:return W0(i,r,o);case 4:return lt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Mo(r,null,u,o):dn(i,r,u,o),r.child;case 11:return q0(i,r,r.type,r.pendingProps,o);case 7:return dn(i,r,r.pendingProps,o),r.child;case 8:return dn(i,r,r.pendingProps.children,o),r.child;case 12:return dn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),dn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,Ta(r),f=En(f),u=u(f),r.flags|=1,dn(i,r,u,o),r.child;case 14:return H0(i,r,r.type,r.pendingProps,o);case 15:return G0(i,r,r.type,r.pendingProps,o);case 19:return J0(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Uh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Es(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Q0(i,r,o);case 24:return Ta(r),u=En(Xt),i===null?(f=km(),f===null&&(f=pt,m=Nm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Om(r),ir(r,Xt,f)):((i.lanes&o)!==0&&(Pm(i,r),pu(r,null,null,o),mu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ir(r,Xt,u)):(u=m.cache,ir(r,Xt,u),u!==f.cache&&Im(r,[Xt],o,!0))),dn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Rs(i){i.flags|=4}function tE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!uT(r)){if(r=li.current,r!==null&&((Xe&4194048)===Xe?Fi!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||r!==Fi))throw fu=Mm,jv;i.flags|=8192}}function zh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Ul():536870912,i.lanes|=r,Lo|=r)}function bu(i,r){if(!tt)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function St(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function ax(i,r,o){var u=r.pendingProps;switch(Am(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(r),null;case 1:return St(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ss(Xt),Zn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(ru(r)?Rs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mv())),St(r),null;case 26:return o=r.memoizedState,i===null?(Rs(r),o!==null?(St(r),tE(r,o)):(St(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Rs(r),St(r),tE(r,o)):(St(r),r.flags&=-16777217):(i.memoizedProps!==u&&Rs(r),St(r),r.flags&=-16777217),null;case 27:mi(r),o=Ae.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}i=ve.current,ru(r)?Dv(r):(i=tT(f,u,o),r.stateNode=i,Rs(r))}return St(r),null;case 5:if(mi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}if(i=ve.current,ru(r))Dv(r);else{switch(f=Jh(Ae.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Yt]=r,i[Lt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(pn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Rs(r)}}return St(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ae.current,ru(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Yt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||KE(i.nodeValue,o)),i||va(r)}else i=Jh(i).createTextNode(u),i[Yt]=r,r.stateNode=i}return St(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=ru(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Yt]=r}else au(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;St(r),f=!1}else f=Mv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Cs(r),r):(Cs(r),null)}if(Cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),zh(r,r.updateQueue),St(r),null;case 4:return Zn(),i===null&&Lp(r.stateNode.containerInfo),St(r),null;case 10:return Ss(r.type),St(r),null;case 19:if(ce(Wt),f=r.memoizedState,f===null)return St(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)bu(f,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ph(i),m!==null){for(r.flags|=128,bu(f,!1),i=m.updateQueue,r.updateQueue=i,zh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Iv(o,i),o=o.sibling;return ie(Wt,Wt.current&1|2),r.child}i=i.sibling}f.tail!==null&&On()>qh&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ph(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,zh(r,i),bu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!tt)return St(r),null}else 2*On()-f.renderingStartTime>qh&&o!==536870912&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=On(),r.sibling=null,i=Wt.current,ie(Wt,u?i&1|2:i&1),r):(St(r),null);case 22:case 23:return Cs(r),Um(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(St(r),r.subtreeFlags&6&&(r.flags|=8192)):St(r),o=r.updateQueue,o!==null&&zh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ce(ba),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss(Xt),St(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function ox(i,r){switch(Am(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ss(Xt),Zn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return mi(r),null;case 13:if(Cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));au()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ce(Wt),null;case 4:return Zn(),null;case 10:return Ss(r.type),null;case 22:case 23:return Cs(r),Um(),i!==null&&ce(ba),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ss(Xt),null;case 25:return null;default:return null}}function nE(i,r){switch(Am(r),r.tag){case 3:Ss(Xt),Zn();break;case 26:case 27:case 5:mi(r);break;case 4:Zn();break;case 13:Cs(r);break;case 19:ce(Wt);break;case 10:Ss(r.type);break;case 22:case 23:Cs(r),Um(),i!==null&&ce(ba);break;case 24:Ss(Xt)}}function wu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){dt(r,r.return,S)}}function cr(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var N=o,q=S;try{q()}catch(K){dt(f,N,K)}}}u=u.next}while(u!==m)}}catch(K){dt(r,r.return,K)}}function iE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Hv(r,o)}catch(u){dt(i,i.return,u)}}}function sE(i,r,o){o.props=Sa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){dt(i,r,u)}}function Su(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){dt(i,r,f)}}function Bi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){dt(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(i,r,f)}else o.current=null}function rE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){dt(i,i.return,f)}}function dp(i,r,o){try{var u=i.stateNode;Rx(u,i.type,o,r),u[Lt]=r}catch(f){dt(i,i.return,f)}}function aE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&yr(i.type)||i.tag===4}function mp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||aE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&yr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function pp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Zh));else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(pp(i,r,o),i=i.sibling;i!==null;)pp(i,r,o),i=i.sibling}function Fh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Fh(i,r,o),i=i.sibling;i!==null;)Fh(i,r,o),i=i.sibling}function oE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);pn(r,u,o),r[Yt]=i,r[Lt]=o}catch(m){dt(i,i.return,m)}}var Is=!1,Dt=!1,gp=!1,lE=typeof WeakSet=="function"?WeakSet:Set,sn=null;function lx(i,r){if(i=i.containerInfo,zp=af,i=vv(i),mm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,N=-1,q=0,K=0,Z=i,H=null;t:for(;;){for(var G;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(N=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(G=Z.firstChild)!==null;)H=Z,Z=G;for(;;){if(Z===i)break t;if(H===o&&++q===f&&(S=E),H===m&&++K===u&&(N=E),(G=Z.nextSibling)!==null)break;Z=H,H=Z.parentNode}Z=G}o=S===-1||N===-1?null:{start:S,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fp={focusedElem:i,selectionRange:o},af=!1,sn=r;sn!==null;)if(r=sn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,sn=i;else for(;sn!==null;){switch(r=sn,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var xe=Sa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(xe,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(Te){dt(o,o.return,Te)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Hp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Hp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,sn=i;break}sn=r.return}}function uE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hr(i,o),u&4&&wu(5,o);break;case 1:if(hr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){dt(o,o.return,E)}else{var f=Sa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){dt(o,o.return,E)}}u&64&&iE(o),u&512&&Su(o,o.return);break;case 3:if(hr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Hv(i,r)}catch(E){dt(o,o.return,E)}}break;case 27:r===null&&u&4&&oE(o);case 26:case 5:hr(i,o),r===null&&u&4&&rE(o),u&512&&Su(o,o.return);break;case 12:hr(i,o);break;case 13:hr(i,o),u&4&&fE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=_x.bind(null,o),Px(i,o))));break;case 22:if(u=o.memoizedState!==null||Is,!u){r=r!==null&&r.memoizedState!==null||Dt,f=Is;var m=Dt;Is=u,(Dt=r)&&!m?fr(i,o,(o.subtreeFlags&8772)!==0):hr(i,o),Is=f,Dt=m}break;case 30:break;default:hr(i,o)}}function cE(i){var r=i.alternate;r!==null&&(i.alternate=null,cE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Js(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var wt=null,Vn=!1;function Ns(i,r,o){for(o=o.child;o!==null;)hE(i,r,o),o=o.sibling}function hE(i,r,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 26:Dt||Bi(o,r),Ns(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||Bi(o,r);var u=wt,f=Vn;yr(o.type)&&(wt=o.stateNode,Vn=!1),Ns(i,r,o),Mu(o.stateNode),wt=u,Vn=f;break;case 5:Dt||Bi(o,r);case 6:if(u=wt,f=Vn,wt=null,Ns(i,r,o),wt=u,Vn=f,wt!==null)if(Vn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(m){dt(o,r,m)}else try{wt.removeChild(o.stateNode)}catch(m){dt(o,r,m)}break;case 18:wt!==null&&(Vn?(i=wt,JE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Fu(i)):JE(wt,o.stateNode));break;case 4:u=wt,f=Vn,wt=o.stateNode.containerInfo,Vn=!0,Ns(i,r,o),wt=u,Vn=f;break;case 0:case 11:case 14:case 15:Dt||cr(2,o,r),Dt||cr(4,o,r),Ns(i,r,o);break;case 1:Dt||(Bi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&sE(o,r,u)),Ns(i,r,o);break;case 21:Ns(i,r,o);break;case 22:Dt=(u=Dt)||o.memoizedState!==null,Ns(i,r,o),Dt=u;break;default:Ns(i,r,o)}}function fE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Fu(i)}catch(o){dt(r,r.return,o)}}function ux(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new lE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new lE),r;default:throw Error(s(435,i.tag))}}function _p(i,r){var o=ux(i);r.forEach(function(u){var f=yx.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(yr(S.type)){wt=S.stateNode,Vn=!1;break e}break;case 5:wt=S.stateNode,Vn=!1;break e;case 3:case 4:wt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(wt===null)throw Error(s(160));hE(m,E,f),wt=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)dE(r,i),r=r.sibling}var vi=null;function dE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(r,i),Yn(i),u&4&&(cr(3,i,i.return),wu(3,i),cr(5,i,i.return));break;case 1:Qn(r,i),Yn(i),u&512&&(Dt||o===null||Bi(o,o.return)),u&64&&Is&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vi;if(Qn(r,i),Yn(i),u&512&&(Dt||o===null||Bi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Jr]||m[Yt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),pn(m,u,o),m[Yt]=i,It(m),u=m;break e;case"link":var E=oT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=oT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Yt]=i,It(m),u=m}i.stateNode=u}else lT(f,i.type,i.stateNode);else i.stateNode=aT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?lT(f,i.type,i.stateNode):aT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&dp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Qn(r,i),Yn(i),u&512&&(Dt||o===null||Bi(o,o.return)),o!==null&&u&4&&dp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Qn(r,i),Yn(i),u&512&&(Dt||o===null||Bi(o,o.return)),i.flags&32){f=i.stateNode;try{ei(f,"")}catch(G){dt(i,i.return,G)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,dp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(gp=!0);break;case 6:if(Qn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(G){dt(i,i.return,G)}}break;case 3:if(nf=null,f=vi,vi=ef(r.containerInfo),Qn(r,i),vi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Fu(r.containerInfo)}catch(G){dt(i,i.return,G)}gp&&(gp=!1,mE(i));break;case 4:u=vi,vi=ef(i.stateNode.containerInfo),Qn(r,i),Yn(i),vi=u;break;case 12:Qn(r,i),Yn(i);break;case 13:Qn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wp=On()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,_p(i,u)));break;case 22:f=i.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,q=Is,K=Dt;if(Is=q||f,Dt=K||N,Qn(r,i),Dt=K,Is=q,Yn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||N||Is||Dt||Aa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){N=o=r;try{if(m=N.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=N.stateNode;var Z=N.memoizedProps.style,H=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){dt(N,N.return,G)}}}else if(r.tag===6){if(o===null){N=r;try{N.stateNode.nodeValue=f?"":N.memoizedProps}catch(G){dt(N,N.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,_p(i,o))));break;case 19:Qn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,_p(i,u)));break;case 30:break;case 21:break;default:Qn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(aE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=mp(i);Fh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ei(E,""),o.flags&=-33);var S=mp(i);Fh(i,S,E);break;case 3:case 4:var N=o.stateNode.containerInfo,q=mp(i);pp(i,q,N);break;default:throw Error(s(161))}}catch(K){dt(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function mE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;mE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function hr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)uE(i,r.alternate,r),r=r.sibling}function Aa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),Aa(r);break;case 1:Bi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&sE(r,r.return,o),Aa(r);break;case 27:Mu(r.stateNode);case 26:case 5:Bi(r,r.return),Aa(r);break;case 22:r.memoizedState===null&&Aa(r);break;case 30:Aa(r);break;default:Aa(r)}i=i.sibling}}function fr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:fr(f,m,o),wu(4,m);break;case 1:if(fr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){dt(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var N=f.shared.hiddenCallbacks;if(N!==null)for(f.shared.hiddenCallbacks=null,f=0;f<N.length;f++)qv(N[f],S)}catch(q){dt(u,u.return,q)}}o&&E&64&&iE(m),Su(m,m.return);break;case 27:oE(m);case 26:case 5:fr(f,m,o),o&&u===null&&E&4&&rE(m),Su(m,m.return);break;case 12:fr(f,m,o);break;case 13:fr(f,m,o),o&&E&4&&fE(f,m);break;case 22:m.memoizedState===null&&fr(f,m,o),Su(m,m.return);break;case 30:break;default:fr(f,m,o)}r=r.sibling}}function yp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&uu(o))}function vp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i))}function qi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)pE(i,r,o,u),r=r.sibling}function pE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:qi(i,r,o,u),f&2048&&wu(9,r);break;case 1:qi(i,r,o,u);break;case 3:qi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i)));break;case 12:if(f&2048){qi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(N){dt(r,r.return,N)}}else qi(i,r,o,u);break;case 13:qi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?qi(i,r,o,u):Au(i,r):m._visibility&2?qi(i,r,o,u):(m._visibility|=2,Oo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&yp(E,r);break;case 24:qi(i,r,o,u),f&2048&&vp(r.alternate,r);break;default:qi(i,r,o,u)}}function Oo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,N=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Oo(m,E,S,N,f),wu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Oo(m,E,S,N,f):Au(m,E):(K._visibility|=2,Oo(m,E,S,N,f)),f&&q&2048&&yp(E.alternate,E);break;case 24:Oo(m,E,S,N,f),f&&q&2048&&vp(E.alternate,E);break;default:Oo(m,E,S,N,f)}r=r.sibling}}function Au(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Au(o,u),f&2048&&yp(u.alternate,u);break;case 24:Au(o,u),f&2048&&vp(u.alternate,u);break;default:Au(o,u)}r=r.sibling}}var Cu=8192;function Po(i){if(i.subtreeFlags&Cu)for(i=i.child;i!==null;)gE(i),i=i.sibling}function gE(i){switch(i.tag){case 26:Po(i),i.flags&Cu&&i.memoizedState!==null&&Kx(vi,i.memoizedState,i.memoizedProps);break;case 5:Po(i);break;case 3:case 4:var r=vi;vi=ef(i.stateNode.containerInfo),Po(i),vi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Cu,Cu=16777216,Po(i),Cu=r):Po(i));break;default:Po(i)}}function _E(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function xu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,vE(u,i)}_E(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yE(i),i=i.sibling}function yE(i){switch(i.tag){case 0:case 11:case 15:xu(i),i.flags&2048&&cr(9,i,i.return);break;case 3:xu(i);break;case 12:xu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Bh(i)):xu(i);break;default:xu(i)}}function Bh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,vE(u,i)}_E(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:cr(8,r,r.return),Bh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Bh(r));break;default:Bh(r)}i=i.sibling}}function vE(i,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:uu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,sn=u;else e:for(o=i;sn!==null;){u=sn;var f=u.sibling,m=u.return;if(cE(u),u===o){sn=null;break e}if(f!==null){f.return=m,sn=f;break e}sn=m}}}var cx={getCacheForType:function(i){var r=En(Xt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},hx=typeof WeakMap=="function"?WeakMap:Map,rt=0,pt=null,qe=null,Xe=0,at=0,Kn=null,dr=!1,Vo=!1,Ep=!1,Ds=0,xt=0,mr=0,Ca=0,Tp=0,ui=0,Lo=0,Ru=null,Ln=null,bp=!1,wp=0,qh=1/0,Hh=null,pr=null,mn=0,gr=null,jo=null,Uo=0,Sp=0,Ap=null,EE=null,Iu=0,Cp=null;function $n(){if((rt&2)!==0&&Xe!==0)return Xe&-Xe;if(Y.T!==null){var i=Co;return i!==0?i:Mp()}return Ws()}function TE(){ui===0&&(ui=(Xe&536870912)===0||tt?jl():536870912);var i=li.current;return i!==null&&(i.flags|=32),ui}function Xn(i,r,o){(i===pt&&(at===2||at===9)||i.cancelPendingCommit!==null)&&(zo(i,0),_r(i,Xe,ui,!1)),us(i,o),((rt&2)===0||i!==pt)&&(i===pt&&((rt&2)===0&&(Ca|=o),xt===4&&_r(i,Xe,ui,!1)),Hi(i))}function bE(i,r,o){if((rt&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Zr(i,r),f=u?mx(i,r):Ip(i,r,!0),m=u;do{if(f===0){Vo&&!u&&_r(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!fx(o)){f=Ip(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=Ru;var N=S.current.memoizedState.isDehydrated;if(N&&(zo(S,E).flags|=256),E=Ip(S,E,!1),E!==2){if(Ep&&!N){S.errorRecoveryDisabledLanes|=m,Ca|=m,f=4;break e}m=Ln,Ln=f,m!==null&&(Ln===null?Ln=m:Ln.push.apply(Ln,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){zo(i,0),_r(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:_r(u,r,ui,!dr);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=wp+300-On(),10<f)){if(_r(u,r,ui,!dr),no(u,0,!0)!==0)break e;u.timeoutHandle=WE(wE.bind(null,u,o,Ln,Hh,bp,r,ui,Ca,Lo,dr,m,2,-0,0),f);break e}wE(u,o,Ln,Hh,bp,r,ui,Ca,Lo,dr,m,0,-0,0)}}break}while(!0);Hi(i)}function wE(i,r,o,u,f,m,E,S,N,q,K,Z,H,G){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Vu={stylesheets:null,count:0,unsuspend:Yx},gE(r),Z=$x(),Z!==null)){i.cancelPendingCommit=Z(NE.bind(null,i,r,m,o,u,f,E,S,N,K,1,H,G)),_r(i,m,E,!q);return}NE(i,r,m,o,u,f,E,S,N)}function fx(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(i,r,o,u){r&=~Tp,r&=~Ca,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-Jt(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ii(i,o,r)}function Gh(){return(rt&6)===0?(Nu(0),!1):!0}function xp(){if(qe!==null){if(at===0)var i=qe.return;else i=qe,ws=Ea=null,Hm(i),ko=null,Eu=0,i=qe;for(;i!==null;)nE(i.alternate,i),i=i.return;qe=null}}function zo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,Nx(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),xp(),pt=i,qe=o=Es(i.current,null),Xe=r,at=0,Kn=null,dr=!1,Vo=Zr(i,r),Ep=!1,Lo=ui=Tp=Ca=mr=xt=0,Ln=Ru=null,bp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-Jt(u),m=1<<f;r|=i[f],u&=~m}return Ds=r,dh(),o}function SE(i,r){Le=null,Y.H=kh,r===hu||r===bh?(r=Fv(),at=3):r===jv?(r=Fv(),at=4):at=r===B0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Kn=r,qe===null&&(xt=1,Lh(i,si(r,i.current)))}function AE(){var i=Y.H;return Y.H=kh,i===null?kh:i}function CE(){var i=Y.A;return Y.A=cx,i}function Rp(){xt=4,dr||(Xe&4194048)!==Xe&&li.current!==null||(Vo=!0),(mr&134217727)===0&&(Ca&134217727)===0||pt===null||_r(pt,Xe,ui,!1)}function Ip(i,r,o){var u=rt;rt|=2;var f=AE(),m=CE();(pt!==i||Xe!==r)&&(Hh=null,zo(i,r)),r=!1;var E=xt;e:do try{if(at!==0&&qe!==null){var S=qe,N=Kn;switch(at){case 8:xp(),E=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(r=!0);var q=at;if(at=0,Kn=null,Fo(i,S,N,q),o&&Vo){E=0;break e}break;default:q=at,at=0,Kn=null,Fo(i,S,N,q)}}dx(),E=xt;break}catch(K){SE(i,K)}while(!0);return r&&i.shellSuspendCounter++,ws=Ea=null,rt=u,Y.H=f,Y.A=m,qe===null&&(pt=null,Xe=0,dh()),E}function dx(){for(;qe!==null;)xE(qe)}function mx(i,r){var o=rt;rt|=2;var u=AE(),f=CE();pt!==i||Xe!==r?(Hh=null,qh=On()+500,zo(i,r)):Vo=Zr(i,r);e:do try{if(at!==0&&qe!==null){r=qe;var m=Kn;t:switch(at){case 1:at=0,Kn=null,Fo(i,r,m,1);break;case 2:case 9:if(Uv(m)){at=0,Kn=null,RE(r);break}r=function(){at!==2&&at!==9||pt!==i||(at=7),Hi(i)},m.then(r,r);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Uv(m)?(at=0,Kn=null,RE(r)):(at=0,Kn=null,Fo(i,r,m,7));break;case 5:var E=null;switch(qe.tag){case 26:E=qe.memoizedState;case 5:case 27:var S=qe;if(!E||uT(E)){at=0,Kn=null;var N=S.sibling;if(N!==null)qe=N;else{var q=S.return;q!==null?(qe=q,Qh(q)):qe=null}break t}}at=0,Kn=null,Fo(i,r,m,5);break;case 6:at=0,Kn=null,Fo(i,r,m,6);break;case 8:xp(),xt=6;break e;default:throw Error(s(462))}}px();break}catch(K){SE(i,K)}while(!0);return ws=Ea=null,Y.H=u,Y.A=f,rt=o,qe!==null?0:(pt=null,Xe=0,dh(),xt)}function px(){for(;qe!==null&&!Kr();)xE(qe)}function xE(i){var r=eE(i.alternate,i,Ds);i.memoizedProps=i.pendingProps,r===null?Qh(i):qe=r}function RE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=K0(o,r,r.pendingProps,r.type,void 0,Xe);break;case 11:r=K0(o,r,r.pendingProps,r.type.render,r.ref,Xe);break;case 5:Hm(r);default:nE(o,r),r=qe=Iv(r,Ds),r=eE(o,r,Ds)}i.memoizedProps=i.pendingProps,r===null?Qh(i):qe=r}function Fo(i,r,o,u){ws=Ea=null,Hm(r),ko=null,Eu=0;var f=r.return;try{if(sx(i,f,r,o,Xe)){xt=1,Lh(i,si(o,i.current)),qe=null;return}}catch(m){if(f!==null)throw qe=f,m;xt=1,Lh(i,si(o,i.current)),qe=null;return}r.flags&32768?(tt||u===1?i=!0:Vo||(Xe&536870912)!==0?i=!1:(dr=i=!0,(u===2||u===9||u===3||u===6)&&(u=li.current,u!==null&&u.tag===13&&(u.flags|=16384))),IE(r,i)):Qh(r)}function Qh(i){var r=i;do{if((r.flags&32768)!==0){IE(r,dr);return}i=r.return;var o=ax(r.alternate,r,Ds);if(o!==null){qe=o;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=i}while(r!==null);xt===0&&(xt=5)}function IE(i,r){do{var o=ox(i.alternate,i);if(o!==null){o.flags&=32767,qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){qe=i;return}qe=i=o}while(i!==null);xt=6,qe=null}function NE(i,r,o,u,f,m,E,S,N){i.cancelPendingCommit=null;do Yh();while(mn!==0);if((rt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=vm,zl(i,o,m,E,S,N),i===pt&&(qe=pt=null,Xe=0),jo=r,gr=i,Uo=o,Sp=m,Ap=f,EE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,vx(os,function(){return PE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=ne.p,ne.p=2,E=rt,rt|=4;try{lx(i,r,o)}finally{rt=E,ne.p=f,Y.T=u}}mn=1,DE(),kE(),ME()}}function DE(){if(mn===1){mn=0;var i=gr,r=jo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=rt;rt|=4;try{dE(r,i);var m=Fp,E=vv(i.containerInfo),S=m.focusedElem,N=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&yv(S.ownerDocument.documentElement,S)){if(N!==null&&mm(S)){var q=N.start,K=N.end;if(K===void 0&&(K=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,H=Z&&Z.defaultView||window;if(H.getSelection){var G=H.getSelection(),xe=S.textContent.length,Te=Math.min(N.start,xe),ft=N.end===void 0?Te:Math.min(N.end,xe);!G.extend&&Te>ft&&(E=ft,ft=Te,Te=E);var j=_v(S,Te),M=_v(S,ft);if(j&&M&&(G.rangeCount!==1||G.anchorNode!==j.node||G.anchorOffset!==j.offset||G.focusNode!==M.node||G.focusOffset!==M.offset)){var B=Z.createRange();B.setStart(j.node,j.offset),G.removeAllRanges(),Te>ft?(G.addRange(B),G.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),G.addRange(B))}}}}for(Z=[],G=S;G=G.parentNode;)G.nodeType===1&&Z.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var W=Z[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}af=!!zp,Fp=zp=null}finally{rt=f,ne.p=u,Y.T=o}}i.current=r,mn=2}}function kE(){if(mn===2){mn=0;var i=gr,r=jo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=rt;rt|=4;try{uE(i,r.alternate,r)}finally{rt=f,ne.p=u,Y.T=o}}mn=3}}function ME(){if(mn===4||mn===3){mn=0,to();var i=gr,r=jo,o=Uo,u=EE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?mn=5:(mn=0,jo=gr=null,OE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(pr=null),io(o),r=r.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=ne.p,ne.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,ne.p=f}}(Uo&3)!==0&&Yh(),Hi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Cp?Iu++:(Iu=0,Cp=i):Iu=0,Nu(0)}}function OE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,uu(r)))}function Yh(i){return DE(),kE(),ME(),PE()}function PE(){if(mn!==5)return!1;var i=gr,r=Sp;Sp=0;var o=io(Uo),u=Y.T,f=ne.p;try{ne.p=32>o?32:o,Y.T=null,o=Ap,Ap=null;var m=gr,E=Uo;if(mn=0,jo=gr=null,Uo=0,(rt&6)!==0)throw Error(s(331));var S=rt;if(rt|=4,yE(m.current),pE(m,m.current,E,o),rt=S,Nu(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,m)}catch{}return!0}finally{ne.p=f,Y.T=u,OE(i,r)}}function VE(i,r,o){r=si(o,r),r=sp(i.stateNode,r,2),i=ar(i,r,2),i!==null&&(us(i,2),Hi(i))}function dt(i,r,o){if(i.tag===3)VE(i,i,o);else for(;r!==null;){if(r.tag===3){VE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){i=si(o,i),o=z0(2),u=ar(r,o,2),u!==null&&(F0(o,u,r,i),us(u,2),Hi(u));break}}r=r.return}}function Np(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new hx;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Ep=!0,f.add(o),i=gx.bind(null,i,r,o),r.then(i,i))}function gx(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,pt===i&&(Xe&o)===o&&(xt===4||xt===3&&(Xe&62914560)===Xe&&300>On()-wp?(rt&2)===0&&zo(i,0):Tp|=o,Lo===Xe&&(Lo=0)),Hi(i)}function LE(i,r){r===0&&(r=Ul()),i=bo(i,r),i!==null&&(us(i,r),Hi(i))}function _x(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),LE(i,o)}function yx(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),LE(i,o)}function vx(i,r){return ss(i,r)}var Kh=null,Bo=null,Dp=!1,$h=!1,kp=!1,xa=0;function Hi(i){i!==Bo&&i.next===null&&(Bo===null?Kh=Bo=i:Bo=Bo.next=i),$h=!0,Dp||(Dp=!0,Tx())}function Nu(i,r){if(!kp&&$h){kp=!0;do for(var o=!1,u=Kh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Jt(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,FE(u,m))}else m=Xe,m=no(u,u===pt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Zr(u,m)||(o=!0,FE(u,m));u=u.next}while(o);kp=!1}}function Ex(){jE()}function jE(){$h=Dp=!1;var i=0;xa!==0&&(Ix()&&(i=xa),xa=0);for(var r=On(),o=null,u=Kh;u!==null;){var f=u.next,m=UE(u,r);m===0?(u.next=null,o===null?Kh=f:o.next=f,f===null&&(Bo=o)):(o=u,(i!==0||(m&3)!==0)&&($h=!0)),u=f}Nu(i)}function UE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-Jt(m),S=1<<E,N=f[E];N===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Ll(S,r)):N<=r&&(i.expiredLanes|=S),m&=~S}if(r=pt,o=Xe,o=no(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(at===2||at===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&rs(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Zr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&rs(u),io(o)){case 2:case 8:o=Ri;break;case 32:o=os;break;case 268435456:o=Ce;break;default:o=os}return u=zE.bind(null,i),o=ss(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&rs(u),i.callbackPriority=2,i.callbackNode=null,2}function zE(i,r){if(mn!==0&&mn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Yh()&&i.callbackNode!==o)return null;var u=Xe;return u=no(i,i===pt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(bE(i,u,r),UE(i,On()),i.callbackNode!=null&&i.callbackNode===o?zE.bind(null,i):null)}function FE(i,r){if(Yh())return null;bE(i,r,!0)}function Tx(){Dx(function(){(rt&6)!==0?ss(as,Ex):jE()})}function Mp(){return xa===0&&(xa=jl()),xa}function BE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:uo(""+i)}function qE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function bx(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=BE((f[Lt]||null).action),E=u.submitter;E&&(r=(r=E[Lt]||null)?BE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new co("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(xa!==0){var N=E?qE(f,E):new FormData(f);Jm(o,{pending:!0,data:N,method:f.method,action:m},null,N)}}else typeof m=="function"&&(S.preventDefault(),N=E?qE(f,E):new FormData(f),Jm(o,{pending:!0,data:N,method:f.method,action:m},m,N))},currentTarget:f}]})}}for(var Op=0;Op<ym.length;Op++){var Pp=ym[Op],wx=Pp.toLowerCase(),Sx=Pp[0].toUpperCase()+Pp.slice(1);yi(wx,"on"+Sx)}yi(bv,"onAnimationEnd"),yi(wv,"onAnimationIteration"),yi(Sv,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(FC,"onTransitionRun"),yi(BC,"onTransitionStart"),yi(qC,"onTransitionCancel"),yi(Av,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function HE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],N=S.instance,q=S.currentTarget;if(S=S.listener,N!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Vh(K)}f.currentTarget=null,m=N}else for(E=0;E<u.length;E++){if(S=u[E],N=S.instance,q=S.currentTarget,S=S.listener,N!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Vh(K)}f.currentTarget=null,m=N}}}}function He(i,r){var o=r[Bl];o===void 0&&(o=r[Bl]=new Set);var u=i+"__bubble";o.has(u)||(GE(r,i,2,!1),o.add(u))}function Vp(i,r,o){var u=0;r&&(u|=4),GE(o,i,u,r)}var Xh="_reactListening"+Math.random().toString(36).slice(2);function Lp(i){if(!i[Xh]){i[Xh]=!0,ql.forEach(function(o){o!=="selectionchange"&&(Ax.has(o)||Vp(o,!1,i),Vp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Xh]||(r[Xh]=!0,Vp("selectionchange",!1,r))}}function GE(i,r,o,u){switch(pT(r)){case 2:var f=Zx;break;case 8:f=Jx;break;default:f=Wp}o=f.bind(null,r,o,i),f=void 0,!ni||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function jp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var N=E.tag;if((N===3||N===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=cs(S),E===null)return;if(N=E.tag,N===5||N===6||N===26||N===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Zc(function(){var q=m,K=ti(o),Z=[];e:{var H=Cv.get(i);if(H!==void 0){var G=co,xe=i;switch(i){case"keypress":if(Pi(o)===0)break e;case"keydown":case"keyup":G=_o;break;case"focusin":xe="focus",G=mo;break;case"focusout":xe="blur",G=mo;break;case"beforeblur":case"afterblur":G=mo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=ah;break;case bv:case wv:case Sv:G=po;break;case Av:G=lh;break;case"scroll":case"scrollend":G=Jc;break;case"wheel":G=yo;break;case"copy":case"cut":case"paste":G=go;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=tu;break;case"toggle":case"beforetoggle":G=ch}var Te=(r&4)!==0,ft=!Te&&(i==="scroll"||i==="scrollend"),j=Te?H!==null?H+"Capture":null:H;Te=[];for(var M=q,B;M!==null;){var W=M;if(B=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||B===null||j===null||(W=aa(M,j),W!=null&&Te.push(ku(M,W,B))),ft)break;M=M.return}0<Te.length&&(H=new G(H,xe,null,o,K),Z.push({event:H,listeners:Te}))}}if((r&7)===0){e:{if(H=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",H&&o!==ms&&(xe=o.relatedTarget||o.fromElement)&&(cs(xe)||xe[Jn]))break e;if((G||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,G?(xe=o.relatedTarget||o.toElement,G=q,xe=xe?cs(xe):null,xe!==null&&(ft=l(xe),Te=xe.tag,xe!==ft||Te!==5&&Te!==27&&Te!==6)&&(xe=null)):(G=null,xe=q),G!==xe)){if(Te=ii,W="onMouseLeave",j="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(Te=tu,W="onPointerLeave",j="onPointerEnter",M="pointer"),ft=G==null?H:Di(G),B=xe==null?H:Di(xe),H=new Te(W,M+"leave",G,o,K),H.target=ft,H.relatedTarget=B,W=null,cs(K)===q&&(Te=new Te(j,M+"enter",xe,o,K),Te.target=B,Te.relatedTarget=ft,W=Te),ft=W,G&&xe)t:{for(Te=G,j=xe,M=0,B=Te;B;B=qo(B))M++;for(B=0,W=j;W;W=qo(W))B++;for(;0<M-B;)Te=qo(Te),M--;for(;0<B-M;)j=qo(j),B--;for(;M--;){if(Te===j||j!==null&&Te===j.alternate)break t;Te=qo(Te),j=qo(j)}Te=null}else Te=null;G!==null&&QE(Z,H,G,Te,!1),xe!==null&&ft!==null&&QE(Z,ft,xe,Te,!0)}}e:{if(H=q?Di(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pe=hv;else if($t(H))if(fv)pe=jC;else{pe=VC;var Ue=PC}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&Kl(q.elementType)&&(pe=hv):pe=LC;if(pe&&(pe=pe(i,q))){vs(Z,pe,o,K);break e}Ue&&Ue(i,H,q),i==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&tr(H,"number",H.value)}switch(Ue=q?Di(q):window,i){case"focusin":($t(Ue)||Ue.contentEditable==="true")&&(vo=Ue,pm=q,su=null);break;case"focusout":su=pm=vo=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,Ev(Z,o,K);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":Ev(Z,o,K)}var ye;if(ji)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ke?Q(i,o)&&(we="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&(Ke||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ke&&(ye=Xl()):(Oi=K,nr="value"in Oi?Oi.value:Oi.textContent,Ke=!0)),Ue=Wh(q,we),0<Ue.length&&(we=new Jl(we,i,null,o,K),Z.push({event:we,listeners:Ue}),ye?we.data=ye:(ye=ae(o),ye!==null&&(we.data=ye)))),(ye=_?Kt(i,o):$e(i,o))&&(we=Wh(q,"onBeforeInput"),0<we.length&&(Ue=new Jl("onBeforeInput","beforeinput",null,o,K),Z.push({event:Ue,listeners:we}),Ue.data=ye)),bx(Z,i,q,o,K)}HE(Z,r)})}function ku(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Wh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=aa(i,o),f!=null&&u.unshift(ku(i,f,m)),f=aa(i,r),f!=null&&u.push(ku(i,f,m))),i.tag===3)return u;i=i.return}return[]}function qo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function QE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,N=S.alternate,q=S.stateNode;if(S=S.tag,N!==null&&N===u)break;S!==5&&S!==26&&S!==27||q===null||(N=q,f?(q=aa(o,m),q!=null&&E.unshift(ku(o,q,N))):f||(q=aa(o,m),q!=null&&E.push(ku(o,q,N)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var Cx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function YE(i){return(typeof i=="string"?i:""+i).replace(Cx,`
`).replace(xx,"")}function KE(i,r){return r=YE(r),YE(i)===r}function Zh(){}function ht(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ei(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ei(i,""+u);break;case"className":ki(i,"class",u);break;case"tabIndex":ki(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(i,o,u);break;case"style":Yl(i,u,m);break;case"data":if(r!=="object"){ki(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=uo(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ht(i,r,"name",f.name,f,null),ht(i,r,"formEncType",f.formEncType,f,null),ht(i,r,"formMethod",f.formMethod,f,null),ht(i,r,"formTarget",f.formTarget,f,null)):(ht(i,r,"encType",f.encType,f,null),ht(i,r,"method",f.method,f,null),ht(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=uo(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"onScroll":u!=null&&He("scroll",i);break;case"onScrollEnd":u!=null&&He("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=uo(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":He("beforetoggle",i),He("toggle",i),er(i,"popover",u);break;case"xlinkActuate":hn(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":hn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":hn(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":hn(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":hn(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":hn(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":hn(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":hn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":hn(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":er(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=lm.get(o)||o,er(i,o,u))}}function Up(i,r,o,u,f,m){switch(o){case"style":Yl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ei(i,u):(typeof u=="number"||typeof u=="bigint")&&ei(i,""+u);break;case"onScroll":u!=null&&He("scroll",i);break;case"onScrollEnd":u!=null&&He("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!so.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Lt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):er(i,o,u)}}}function pn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",i),He("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ht(i,r,m,E,o,null)}}f&&ht(i,r,"srcSet",o.srcSet,o,null),u&&ht(i,r,"src",o.src,o,null);return;case"input":He("invalid",i);var S=m=E=f=null,N=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":N=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ht(i,r,u,K,o,null)}}ia(i,m,S,N,q,E,f,!1),lo(i);return;case"select":He("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ht(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?ds(i,!!u,r,!1):o!=null&&ds(i,!!u,o,!0);return;case"textarea":He("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ht(i,r,E,S,o,null)}sa(i,u,f,m),lo(i);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(u=o[N],u!=null))switch(N){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ht(i,r,N,u,o,null)}return;case"dialog":He("beforetoggle",i),He("toggle",i),He("cancel",i),He("close",i);break;case"iframe":case"object":He("load",i);break;case"video":case"audio":for(u=0;u<Du.length;u++)He(Du[u],i);break;case"image":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"embed":case"source":case"link":He("error",i),He("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ht(i,r,q,u,o,null)}return;default:if(Kl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Up(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ht(i,r,S,u,o,null))}function Rx(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,N=null,q=null,K=null;for(G in o){var Z=o[G];if(o.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=Z;default:u.hasOwnProperty(G)||ht(i,r,G,null,u,Z)}}for(var H in u){var G=u[H];if(Z=o[H],u.hasOwnProperty(H)&&(G!=null||Z!=null))switch(H){case"type":m=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":K=G;break;case"value":E=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==Z&&ht(i,r,H,G,u,Z)}}qn(i,E,S,N,q,K,m,f);return;case"select":G=E=S=H=null;for(m in o)if(N=o[m],o.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":G=N;default:u.hasOwnProperty(m)||ht(i,r,m,null,u,N)}for(f in u)if(m=u[f],N=o[f],u.hasOwnProperty(f)&&(m!=null||N!=null))switch(f){case"value":H=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==N&&ht(i,r,f,m,u,N)}r=S,o=E,u=G,H!=null?ds(i,!!o,H,!1):!!u!=!!o&&(r!=null?ds(i,!!o,r,!0):ds(i,!!o,o?[]:"",!1));return;case"textarea":G=H=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ht(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ht(i,r,E,f,u,m)}ut(i,H,G);return;case"option":for(var xe in o)if(H=o[xe],o.hasOwnProperty(xe)&&H!=null&&!u.hasOwnProperty(xe))switch(xe){case"selected":i.selected=!1;break;default:ht(i,r,xe,null,u,H)}for(N in u)if(H=u[N],G=o[N],u.hasOwnProperty(N)&&H!==G&&(H!=null||G!=null))switch(N){case"selected":i.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:ht(i,r,N,H,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)H=o[Te],o.hasOwnProperty(Te)&&H!=null&&!u.hasOwnProperty(Te)&&ht(i,r,Te,null,u,H);for(q in u)if(H=u[q],G=o[q],u.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:ht(i,r,q,H,u,G)}return;default:if(Kl(r)){for(var ft in o)H=o[ft],o.hasOwnProperty(ft)&&H!==void 0&&!u.hasOwnProperty(ft)&&Up(i,r,ft,void 0,u,H);for(K in u)H=u[K],G=o[K],!u.hasOwnProperty(K)||H===G||H===void 0&&G===void 0||Up(i,r,K,H,u,G);return}}for(var j in o)H=o[j],o.hasOwnProperty(j)&&H!=null&&!u.hasOwnProperty(j)&&ht(i,r,j,null,u,H);for(Z in u)H=u[Z],G=o[Z],!u.hasOwnProperty(Z)||H===G||H==null&&G==null||ht(i,r,Z,H,u,G)}var zp=null,Fp=null;function Jh(i){return i.nodeType===9?i:i.ownerDocument}function $E(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function XE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Bp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qp=null;function Ix(){var i=window.event;return i&&i.type==="popstate"?i===qp?!1:(qp=i,!0):(qp=null,!1)}var WE=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,ZE=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof ZE<"u"?function(i){return ZE.resolve(null).then(i).catch(kx)}:WE;function kx(i){setTimeout(function(){throw i})}function yr(i){return i==="head"}function JE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Mu(E.documentElement),o&2&&Mu(E.body),o&4)for(o=E.head,Mu(o),E=o.firstChild;E;){var S=E.nextSibling,N=E.nodeName;E[Jr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Fu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Fu(r)}function Hp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hp(o),Js(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function Mx(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Jr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function Ox(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ei(i.nextSibling),i===null))return null;return i}function Gp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Px(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Qp=null;function eT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function tT(i,r,o){switch(r=Jh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Mu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Js(i)}var ci=new Map,nT=new Set;function ef(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ks=ne.d;ne.d={f:Vx,r:Lx,D:jx,C:Ux,L:zx,m:Fx,X:qx,S:Bx,M:Hx};function Vx(){var i=ks.f(),r=Gh();return i||r}function Lx(i){var r=Ni(i);r!==null&&r.tag===5&&r.type==="form"?b0(r):ks.r(i)}var Ho=typeof document>"u"?null:document;function iT(i,r,o){var u=Ho;if(u&&typeof r=="string"&&r){var f=jt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),nT.has(f)||(nT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),pn(r,"link",i),It(r),u.head.appendChild(r)))}}function jx(i){ks.D(i),iT("dns-prefetch",i,null)}function Ux(i,r){ks.C(i,r),iT("preconnect",i,r)}function zx(i,r,o){ks.L(i,r,o);var u=Ho;if(u&&i&&r){var f='link[rel="preload"][as="'+jt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+jt(o.imageSizes)+'"]')):f+='[href="'+jt(i)+'"]';var m=f;switch(r){case"style":m=Go(i);break;case"script":m=Qo(i)}ci.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ci.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Ou(m))||r==="script"&&u.querySelector(Pu(m))||(r=u.createElement("link"),pn(r,"link",i),It(r),u.head.appendChild(r)))}}function Fx(i,r){ks.m(i,r);var o=Ho;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+jt(u)+'"][href="'+jt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Qo(i)}if(!ci.has(m)&&(i=y({rel:"modulepreload",href:i},r),ci.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Pu(m)))return}u=o.createElement("link"),pn(u,"link",i),It(u),o.head.appendChild(u)}}}function Bx(i,r,o){ks.S(i,r,o);var u=Ho;if(u&&i){var f=xn(u).hoistableStyles,m=Go(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Ou(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ci.get(m))&&Yp(i,o);var N=E=u.createElement("link");It(N),pn(N,"link",i),N._p=new Promise(function(q,K){N.onload=q,N.onerror=K}),N.addEventListener("load",function(){S.loading|=1}),N.addEventListener("error",function(){S.loading|=2}),S.loading|=4,tf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function qx(i,r){ks.X(i,r);var o=Ho;if(o&&i){var u=xn(o).hoistableScripts,f=Qo(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0},r),(r=ci.get(f))&&Kp(i,r),m=o.createElement("script"),It(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function Hx(i,r){ks.M(i,r);var o=Ho;if(o&&i){var u=xn(o).hoistableScripts,f=Qo(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=ci.get(f))&&Kp(i,r),m=o.createElement("script"),It(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function sT(i,r,o,u){var f=(f=Ae.current)?ef(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Go(o.href),o=xn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Go(o.href);var m=xn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Ou(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ci.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(i,o),m||Gx(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Qo(o),o=xn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Go(i){return'href="'+jt(i)+'"'}function Ou(i){return'link[rel="stylesheet"]['+i+"]"}function rT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function Gx(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),pn(r,"link",o),It(r),i.head.appendChild(r))}function Qo(i){return'[src="'+jt(i)+'"]'}function Pu(i){return"script[async]"+i}function aT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+jt(o.href)+'"]');if(u)return r.instance=u,It(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),It(u),pn(u,"style",f),tf(u,o.precedence,i),r.instance=u;case"stylesheet":f=Go(o.href);var m=i.querySelector(Ou(f));if(m)return r.state.loading|=4,r.instance=m,It(m),m;u=rT(o),(f=ci.get(f))&&Yp(u,f),m=(i.ownerDocument||i).createElement("link"),It(m);var E=m;return E._p=new Promise(function(S,N){E.onload=S,E.onerror=N}),pn(m,"link",u),r.state.loading|=4,tf(m,o.precedence,i),r.instance=m;case"script":return m=Qo(o.src),(f=i.querySelector(Pu(m)))?(r.instance=f,It(f),f):(u=o,(f=ci.get(m))&&(u=y({},o),Kp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),It(f),pn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,tf(u,o.precedence,i));return r.instance}function tf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Yp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Kp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var nf=null;function oT(i,r,o){if(nf===null){var u=new Map,f=nf=new Map;f.set(o,u)}else f=nf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Jr]||m[Yt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function lT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function Qx(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function uT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Vu=null;function Yx(){}function Kx(i,r,o){if(Vu===null)throw Error(s(475));var u=Vu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Go(o.href),m=i.querySelector(Ou(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=sf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,It(m);return}m=i.ownerDocument||i,o=rT(o),(f=ci.get(f))&&Yp(o,f),m=m.createElement("link"),It(m);var E=m;E._p=new Promise(function(S,N){E.onload=S,E.onerror=N}),pn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=sf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function $x(){if(Vu===null)throw Error(s(475));var i=Vu;return i.stylesheets&&i.count===0&&$p(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&$p(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function sf(){if(this.count--,this.count===0){if(this.stylesheets)$p(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var rf=null;function $p(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,rf=new Map,r.forEach(Xx,i),rf=null,sf.call(i))}function Xx(i,r){if(!(r.state.loading&4)){var o=rf.get(i);if(o)var u=o.get(null);else{o=new Map,rf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=sf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Lu={$$typeof:le,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Wx(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function cT(i,r,o,u,f,m,E,S,N,q,K,Z){return i=new Wx(i,r,o,E,S,N,q,Z),r=1,m===!0&&(r|=24),m=Gn(3,null,null,r),i.current=m,m.stateNode=i,r=Nm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Om(m),i}function hT(i){return i?(i=wo,i):wo}function fT(i,r,o,u,f,m){f=hT(f),u.context===null?u.context=f:u.pendingContext=f,u=rr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ar(i,u,r),o!==null&&(Xn(o,i,r),du(o,i,r))}function dT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Xp(i,r){dT(i,r),(i=i.alternate)&&dT(i,r)}function mT(i){if(i.tag===13){var r=bo(i,67108864);r!==null&&Xn(r,i,67108864),Xp(i,67108864)}}var af=!0;function Zx(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=2,Wp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function Jx(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=8,Wp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function Wp(i,r,o,u){if(af){var f=Zp(u);if(f===null)jp(i,r,u,of,o),gT(i,u);else if(tR(f,i,r,o,u))u.stopPropagation();else if(gT(i,u),r&4&&-1<eR.indexOf(i)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=pi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var N=1<<31-Jt(E);S.entanglements[1]|=N,E&=~N}Hi(m),(rt&6)===0&&(qh=On()+500,Nu(0))}}break;case 13:S=bo(m,2),S!==null&&Xn(S,m,2),Gh(),Xp(m,2)}if(m=Zp(u),m===null&&jp(i,r,u,of,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else jp(i,r,u,null,o)}}function Zp(i){return i=ti(i),Jp(i)}var of=null;function Jp(i){if(of=null,i=cs(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return of=i,null}function pT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($s()){case as:return 2;case Ri:return 8;case os:case _e:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var eg=!1,vr=null,Er=null,Tr=null,ju=new Map,Uu=new Map,br=[],eR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gT(i,r){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":ju.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uu.delete(r.pointerId)}}function zu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&mT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function tR(i,r,o,u,f){switch(r){case"focusin":return vr=zu(vr,i,r,o,u,f),!0;case"dragenter":return Er=zu(Er,i,r,o,u,f),!0;case"mouseover":return Tr=zu(Tr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return ju.set(m,zu(ju.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Uu.set(m,zu(Uu.get(m)||null,i,r,o,u,f)),!0}return!1}function _T(i){var r=cs(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Gc(i.priority,function(){if(o.tag===13){var u=$n();u=Xs(u);var f=bo(o,u);f!==null&&Xn(f,o,u),Xp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function lf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Zp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ms=u,o.target.dispatchEvent(u),ms=null}else return r=Ni(o),r!==null&&mT(r),i.blockedOn=o,!1;r.shift()}return!0}function yT(i,r,o){lf(i)&&o.delete(r)}function nR(){eg=!1,vr!==null&&lf(vr)&&(vr=null),Er!==null&&lf(Er)&&(Er=null),Tr!==null&&lf(Tr)&&(Tr=null),ju.forEach(yT),Uu.forEach(yT)}function uf(i,r){i.blockedOn===r&&(i.blockedOn=null,eg||(eg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nR)))}var cf=null;function vT(i){cf!==i&&(cf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cf===i&&(cf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Jp(u||o)===null)continue;break}var m=Ni(o);m!==null&&(i.splice(r,3),r-=3,Jm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Fu(i){function r(N){return uf(N,i)}vr!==null&&uf(vr,i),Er!==null&&uf(Er,i),Tr!==null&&uf(Tr,i),ju.forEach(r),Uu.forEach(r);for(var o=0;o<br.length;o++){var u=br[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<br.length&&(o=br[0],o.blockedOn===null);)_T(o),o.blockedOn===null&&br.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Lt]||null;if(typeof m=="function")E||vT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Lt]||null)S=E.formAction;else if(Jp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),vT(o)}}}function tg(i){this._internalRoot=i}hf.prototype.render=tg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=$n();fT(o,u,i,r,null,null)},hf.prototype.unmount=tg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;fT(i.current,2,null,i,null,null),Gh(),r[Jn]=null}};function hf(i){this._internalRoot=i}hf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ws();i={blockedOn:null,target:i,priority:r};for(var o=0;o<br.length&&r!==0&&r<br[o].priority;o++);br.splice(o,0,i),o===0&&_T(i)}};var ET=e.version;if(ET!=="19.1.1")throw Error(s(527,ET,"19.1.1"));ne.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var iR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{Je=ff.inject(iR),Ve=ff}catch{}}return qu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=V0,m=L0,E=j0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=cT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Jn]=r.current,Lp(i),new tg(r)},qu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=V0,E=L0,S=j0,N=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(N=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=cT(i,1,!0,r,o??null,u,f,m,E,S,N,q),r.context=hT(null),o=r.current,u=$n(),u=Xs(u),f=rr(u),f.callback=null,ar(o,f,u),o=u,r.current.lanes=o,us(r,o),Hi(r),i[Jn]=r.current,Lp(i),new hf(r)},qu.version="19.1.1",qu}var NT;function dR(){if(NT)return sg.exports;NT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sg.exports=fR(),sg.exports}var mR=dR();const pR=()=>{};var DT={};/**
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
 */const $1={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const oe=function(n,e){if(!n)throw Sl(e)},Sl=function(n){return new Error("Firebase Database ("+$1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const X1=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,b=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,R=g&63;p||(R=64,c||(w=64)),s.push(t[y],t[b],t[w],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new _R;const w=l<<2|d>>4;if(s.push(w),g!==64){const R=d<<4&240|g>>2;if(s.push(R),b!==64){const O=g<<6&192|b;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W1=function(n){const e=X1(n);return E_.encodeByteArray(e,!0)},kf=function(n){return W1(n).replace(/\./g,"")},Mf=function(n){try{return E_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yR(n){return Z1(void 0,n)}function Z1(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vR(t)||(n[t]=Z1(n[t],e[t]));return n}function vR(n){return n!=="__proto__"}/**
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
 */function ER(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TR=()=>ER().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof DT>"u")return;const n=DT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},vd=()=>{try{return pR()||TR()||bR()||wR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},J1=n=>vd()?.emulatorHosts?.[n],ew=n=>{const e=J1(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},tw=()=>vd()?.config,nw=n=>vd()?.[`_${n}`];/**
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
 */class Os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Hr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function iw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[kf(JSON.stringify(t)),kf(JSON.stringify(c)),""].join(".")}const Zu={};function SR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zu))Zu[e]?n.emulator.push(e):n.prod.push(e);return n}function AR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kT=!1;function b_(n,e){if(typeof window>"u"||typeof document>"u"||!Hr(window.location.host)||Zu[n]===e||Zu[n]||kT)return;Zu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=SR().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{kT=!0,c()},w}function y(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=AR(s),R=t("text"),O=document.getElementById(R)||document.createElement("span"),U=t("learnmore"),F=document.getElementById(U)||document.createElement("a"),re=t("preprendIcon"),se=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const le=w.element;d(le),y(F,U);const ge=g();p(se,re),le.append(se,O,F,ge),document.body.appendChild(le)}l?(O.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function CR(){const n=vd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function NR(){return $1.NODE_ADMIN===!0}function DR(){return!CR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kR(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const OR="FirebaseError";class Ys extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OR,Object.setPrototypeOf(this,Ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xc.prototype.create)}}class xc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?PR(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ys(a,d,s)}}function PR(n,e){return n.replace(VR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const VR=/\{\$([^}]+)}/g;/**
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
 */function cc(n){return JSON.parse(n)}function un(n){return JSON.stringify(n)}/**
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
 */const rw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=cc(Mf(l[0])||""),t=cc(Mf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},LR=function(n){const e=rw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jR=function(n){const e=rw(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ns(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ol(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Of(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(MT(l)&&MT(c)){if(!Zi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function MT(n){return n!==null&&typeof n=="object"}/**
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
 */class UR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const w=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let b=0;b<80;b++){b<40?b<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):b<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const w=(a<<5|a>>>27)+g+p+y+s[b]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function zR(n,e){const t=new FR(n,e);return t.subscribe.bind(t)}class FR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BR(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=lg),a.error===void 0&&(a.error=lg),a.complete===void 0&&(a.complete=lg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lg(){}function ll(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,oe(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Ed=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function yt(n){return n&&n._delegate?n._delegate:n}class Pr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ra="[DEFAULT]";/**
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
 */class HR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Os;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Ra})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ra){return this.instances.has(e)}getOptions(e=Ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ra){return this.component?this.component.multipleInstances?e:Ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(n){return n===Ra?void 0:n}function QR(n){return n.instantiationMode==="EAGER"}/**
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
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ge||(Ge={}));const KR={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},$R=Ge.INFO,XR={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},WR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=XR[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=WR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...e),this._logHandler(this,Ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...e),this._logHandler(this,Ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...e),this._logHandler(this,Ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...e),this._logHandler(this,Ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...e),this._logHandler(this,Ge.ERROR,...e)}}const ZR=(n,e)=>e.some(t=>n instanceof t);let OT,PT;function JR(){return OT||(OT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return PT||(PT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,Ng=new WeakMap,ow=new WeakMap,ug=new WeakMap,S_=new WeakMap;function tI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ir(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&aw.set(t,n)}).catch(()=>{}),S_.set(e,n),e}function nI(n){if(Ng.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Ng.set(n,e)}let Dg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ng.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ow.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ir(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iI(n){Dg=n(Dg)}function sI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(cg(this),e,...t);return ow.set(s,e.sort?e.sort():[e]),Ir(s)}:eI().includes(n)?function(...e){return n.apply(cg(this),e),Ir(aw.get(this))}:function(...e){return Ir(n.apply(cg(this),e))}}function rI(n){return typeof n=="function"?sI(n):(n instanceof IDBTransaction&&nI(n),ZR(n,JR())?new Proxy(n,Dg):n)}function Ir(n){if(n instanceof IDBRequest)return tI(n);if(ug.has(n))return ug.get(n);const e=rI(n);return e!==n&&(ug.set(n,e),S_.set(e,n)),e}const cg=n=>S_.get(n);function aI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Ir(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Ir(c.result),p.oldVersion,p.newVersion,Ir(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const oI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],hg=new Map;function VT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hg.get(e))return hg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=lI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||oI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return hg.set(e,l),l}iI(n=>({...n,get:(e,t,s)=>VT(e,t)||n.get(e,t,s),has:(e,t)=>!!VT(e,t)||n.has(e,t)}));/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function cI(n){return n.getComponent()?.type==="VERSION"}const kg="@firebase/app",LT="0.14.1";/**
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
 */const Fs=new Td("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",dI="@firebase/analytics",mI="@firebase/app-check-compat",pI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",yI="@firebase/database",vI="@firebase/data-connect",EI="@firebase/database-compat",TI="@firebase/functions",bI="@firebase/functions-compat",wI="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",CI="@firebase/messaging-compat",xI="@firebase/performance",RI="@firebase/performance-compat",II="@firebase/remote-config",NI="@firebase/remote-config-compat",DI="@firebase/storage",kI="@firebase/storage-compat",MI="@firebase/firestore",OI="@firebase/ai",PI="@firebase/firestore-compat",VI="firebase",LI="12.1.0";/**
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
 */const Mg="[DEFAULT]",jI={[kg]:"fire-core",[hI]:"fire-core-compat",[dI]:"fire-analytics",[fI]:"fire-analytics-compat",[pI]:"fire-app-check",[mI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[yI]:"fire-rtdb",[vI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[TI]:"fire-fn",[bI]:"fire-fn-compat",[wI]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[CI]:"fire-fcm-compat",[xI]:"fire-perf",[RI]:"fire-perf-compat",[II]:"fire-rc",[NI]:"fire-rc-compat",[DI]:"fire-gcs",[kI]:"fire-gcs-compat",[MI]:"fire-fst",[PI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[VI]:"fire-js-all"};/**
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
 */const Vf=new Map,UI=new Map,Og=new Map;function jT(n,e){try{n.container.addComponent(e)}catch(t){Fs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fa(n){const e=n.name;if(Og.has(e))return Fs.debug(`There were multiple attempts to register component ${e}.`),!1;Og.set(e,n);for(const t of Vf.values())jT(t,n);for(const t of UI.values())jT(t,n);return!0}function bd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hi(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new xc("app","Firebase",zI);/**
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
 */class FI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const $a=LI;function lw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Mg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Nr.create("bad-app-name",{appName:String(a)});if(t||(t=tw()),!t)throw Nr.create("no-options");const l=Vf.get(a);if(l){if(Zi(t,l.options)&&Zi(s,l.config))return l;throw Nr.create("duplicate-app",{appName:a})}const c=new YR(a);for(const p of Og.values())c.addComponent(p);const d=new FI(t,s,c);return Vf.set(a,d),d}function A_(n=Mg){const e=Vf.get(n);if(!e&&n===Mg&&tw())return lw();if(!e)throw Nr.create("no-app",{appName:n});return e}function Qi(n,e,t){let s=jI[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fs.warn(c.join(" "));return}Fa(new Pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BI="firebase-heartbeat-database",qI=1,hc="firebase-heartbeat-store";let fg=null;function uw(){return fg||(fg=aI(BI,qI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nr.create("idb-open",{originalErrorMessage:n.message})})),fg}async function HI(n){try{const t=(await uw()).transaction(hc),s=await t.objectStore(hc).get(cw(n));return await t.done,s}catch(e){if(e instanceof Ys)Fs.warn(e.message);else{const t=Nr.create("idb-get",{originalErrorMessage:e?.message});Fs.warn(t.message)}}}async function UT(n,e){try{const s=(await uw()).transaction(hc,"readwrite");await s.objectStore(hc).put(e,cw(n)),await s.done}catch(t){if(t instanceof Ys)Fs.warn(t.message);else{const s=Nr.create("idb-set",{originalErrorMessage:t?.message});Fs.warn(s.message)}}}function cw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const GI=1024,QI=30;class YI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>QI){const a=XI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zT(),{heartbeatsToSend:t,unsentEntries:s}=KI(this._heartbeatsCache.heartbeats),a=kf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Fs.warn(e),""}}}function zT(){return new Date().toISOString().substring(0,10)}function KI(n,e=GI){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),FT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),FT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kR()?MR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function FT(n){return kf(JSON.stringify({version:2,heartbeats:n})).length}function XI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function WI(n){Fa(new Pr("platform-logger",e=>new uI(e),"PRIVATE")),Fa(new Pr("heartbeat",e=>new YI(e),"PRIVATE")),Qi(kg,LT,n),Qi(kg,LT,"esm2020"),Qi("fire-js","")}WI("");var ZI="firebase",JI="12.1.0";/**
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
 */Qi(ZI,JI,"app");function hw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eN=hw,fw=new xc("auth","Firebase",hw());/**
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
 */const Lf=new Td("@firebase/auth");function tN(n,...e){Lf.logLevel<=Ge.WARN&&Lf.warn(`Auth (${$a}): ${n}`,...e)}function Tf(n,...e){Lf.logLevel<=Ge.ERROR&&Lf.error(`Auth (${$a}): ${n}`,...e)}/**
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
 */function Ji(n,...e){throw x_(n,...e)}function Si(n,...e){return x_(n,...e)}function C_(n,e,t){const s={...eN(),[e]:t};return new xc("auth","Firebase",s).create(e,{appName:n.name})}function Pa(n){return C_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ji(n,"argument-error"),C_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return fw.create(n,...e)}function Ne(n,e,...t){if(!n)throw x_(e,...t)}function Vs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tf(e),new Error(e)}function Bs(n,e){n||Vs(e)}/**
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
 */function Pg(){return typeof self<"u"&&self.location?.href||""}function iN(){return BT()==="http:"||BT()==="https:"}function BT(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function sN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iN()||RR()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bs(t>e,"Short delay should be less than long delay!"),this.isMobile=w_()||sw()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function R_(n,e){Bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lN=new Rc(3e4,6e4);function I_(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Cl(n,e,t,s,a={}){return mw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Al({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return xR()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(g.credentials="include"),dw.fetch()(await pw(n,n.config.apiHost,t,d),g)})}async function mw(n,e,t){n._canInitEmulator=!1;const s={...aN,...e};try{const a=new cN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw df(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw df(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw df(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw df(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw C_(n,y,g);Ji(n,y)}}catch(a){if(a instanceof Ys)throw a;Ji(n,"network-request-failed",{message:String(a)})}}async function uN(n,e,t,s,a={}){const l=await Cl(n,e,t,s,a);return"mfaPendingCredential"in l&&Ji(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function pw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?R_(n.config,a):`${n.config.apiScheme}://${a}`;return oN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class cN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Si(this.auth,"network-request-failed")),lN.get())})}}function df(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Si(n,e,s);return a.customData._tokenResponse=t,a}/**
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
 */async function hN(n,e){return Cl(n,"POST","/v1/accounts:delete",e)}async function jf(n,e){return Cl(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ju(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(n,e=!1){const t=yt(n),s=await t.getIdToken(e),a=N_(s);Ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Ju(dg(a.auth_time)),issuedAtTime:Ju(dg(a.iat)),expirationTime:Ju(dg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function dg(n){return Number(n)*1e3}function N_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mf(t);return a?JSON.parse(a):(Tf("Failed to decode base64 JWT payload"),null)}catch(a){return Tf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function qT(n){const e=N_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ys&&dN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function dN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uf(n){const e=n.auth,t=await n.getIdToken(),s=await fc(n,jf(e,{idToken:t}));Ne(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?gw(a.providerUserInfo):[],c=gN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Vg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function pN(n){const e=yt(n);await Uf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function gw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function _N(n,e){const t=await mw(n,{},async()=>{const s=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await pw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(p.credentials="include"),dw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yN(n,e){return Cl(n,"POST","/v2/accounts:revokeToken",I_(n,e))}/**
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
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=qT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await _N(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new el;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return Vs("not implemented")}}/**
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
 */function Sr(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new mN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await fc(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hi(this.auth.app))return Promise.reject(Pa(this.auth));const e=await this.getIdToken();return await fc(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:R,providerData:O,stsTokenManager:U}=t;Ne(b&&U,e,"internal-error");const F=el.fromJSON(this.name,U);Ne(typeof b=="string",e,"internal-error"),Sr(s,e.name),Sr(a,e.name),Ne(typeof w=="boolean",e,"internal-error"),Ne(typeof R=="boolean",e,"internal-error"),Sr(l,e.name),Sr(c,e.name),Sr(d,e.name),Sr(p,e.name),Sr(g,e.name),Sr(y,e.name);const re=new bi({uid:b,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:R,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:F,createdAt:g,lastLoginAt:y});return O&&Array.isArray(O)&&(re.providerData=O.map(se=>({...se}))),p&&(re._redirectEventId=p),re}static async _fromIdTokenResponse(e,t,s=!1){const a=new el;a.updateFromServerResponse(t);const l=new bi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Uf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?gw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new el;d.updateFromIdToken(s);const p=new bi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
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
 */const HT=new Map;function Ls(n){Bs(n instanceof Function,"Expected a class definition");let e=HT.get(n);return e?(Bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,HT.set(n,e),e)}/**
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
 */class _w{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_w.type="NONE";const GT=_w;/**
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
 */function bf(n,e,t){return`firebase:${n}:${e}:${t}`}class tl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=bf(this.userKey,a.apiKey,l),this.fullPersistenceKey=bf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await jf(this.auth,{idToken:e}).catch(()=>{});return t?bi._fromGetAccountInfoResponse(this.auth,t,e):null}return bi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new tl(Ls(GT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ls(GT);const c=bf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let b;if(typeof y=="string"){const w=await jf(e,{idToken:y}).catch(()=>{});if(!w)break;b=await bi._fromGetAccountInfoResponse(e,w,y)}else b=bi._fromJSON(e,y);g!==l&&(d=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new tl(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new tl(l,e,s))}}/**
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
 */function QT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Sw(e))return"Webos";if(vw(e))return"Safari";if((e.includes("chrome/")||Ew(e))&&!e.includes("edge/"))return"Chrome";if(bw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function yw(n=An()){return/firefox\//i.test(n)}function vw(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ew(n=An()){return/crios\//i.test(n)}function Tw(n=An()){return/iemobile/i.test(n)}function bw(n=An()){return/android/i.test(n)}function ww(n=An()){return/blackberry/i.test(n)}function Sw(n=An()){return/webos/i.test(n)}function D_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vN(n=An()){return D_(n)&&!!window.navigator?.standalone}function EN(){return IR()&&document.documentMode===10}function Aw(n=An()){return D_(n)||bw(n)||Sw(n)||ww(n)||/windows phone/i.test(n)||Tw(n)}/**
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
 */function Cw(n,e=[]){let t;switch(n){case"Browser":t=QT(An());break;case"Worker":t=`${QT(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$a}/${s}`}/**
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
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function bN(n,e={}){return Cl(n,"GET","/v2/passwordPolicy",I_(n,e))}/**
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
 */const wN=6;class SN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class AN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new YT(this),this.idTokenSubscription=new YT(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ls(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await tl.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jf(this,{idToken:e}),s=await bi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(hi(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hi(this.app))return Promise.reject(Pa(this));const t=e?yt(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hi(this.app)?Promise.reject(Pa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hi(this.app)?Promise.reject(Pa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bN(this),t=new SN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ls(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await tl.create(this,[Ls(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(hi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function wd(n){return yt(n)}class YT{constructor(e){this.auth=e,this.observer=null,this.addObserver=zR(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let k_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CN(n){k_=n}function xN(n){return k_.loadJS(n)}function RN(){return k_.gapiScript}function IN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NN(n,e){const t=bd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Zi(l,e??{}))return a;Ji(a,"already-initialized")}return t.initialize({options:e})}function DN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ls);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function kN(n,e,t){const s=wd(n);Ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=xw(e),{host:c,port:d}=MN(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ne(Zi(g,s.config.emulator)&&Zi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Hr(c)?(T_(`${l}//${c}${p}`),b_("Auth",!0)):ON()}function xw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function MN(n){const e=xw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:KT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:KT(c)}}}function KT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ON(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Rw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vs("not implemented")}_getIdTokenResponse(e){return Vs("not implemented")}_linkToIdToken(e,t){return Vs("not implemented")}_getReauthenticationResolver(e){return Vs("not implemented")}}/**
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
 */async function nl(n,e){return uN(n,"POST","/v1/accounts:signInWithIdp",I_(n,e))}/**
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
 */const PN="http://localhost";class Ba extends Rw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ji("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Ba(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return nl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,nl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nl(e,t)}buildRequest(){const e={requestUri:PN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Al(t)}return e}}/**
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
 */class Ic extends M_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends Ic{constructor(){super("facebook.com")}static credential(e){return Ba._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Ps extends Ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ba._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ps.credential(t,s)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
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
 */class Cr extends Ic{constructor(){super("github.com")}static credential(e){return Ba._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class xr extends Ic{constructor(){super("twitter.com")}static credential(e,t){return Ba._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return xr.credential(t,s)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */class ul{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await bi._fromIdTokenResponse(e,s,a),c=$T(s);return new ul({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=$T(s);return new ul({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function $T(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class zf extends Ys{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new zf(e,t,s,a)}}function Iw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(n,l,e,s):l})}async function VN(n,e,t=!1){const s=await fc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ul._forOperation(n,"link",s)}/**
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
 */async function LN(n,e,t=!1){const{auth:s}=n;if(hi(s.app))return Promise.reject(Pa(s));const a="reauthenticate";try{const l=await fc(n,Iw(s,a,e,n),t);Ne(l.idToken,s,"internal-error");const c=N_(l.idToken);Ne(c,s,"internal-error");const{sub:d}=c;return Ne(n.uid===d,s,"user-mismatch"),ul._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ji(s,"user-mismatch"),l}}/**
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
 */async function jN(n,e,t=!1){if(hi(n.app))return Promise.reject(Pa(n));const s="signIn",a=await Iw(n,s,e),l=await ul._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}function UN(n,e,t,s){return yt(n).onIdTokenChanged(e,t,s)}function zN(n,e,t){return yt(n).beforeAuthStateChanged(e,t)}function FN(n,e,t,s){return yt(n).onAuthStateChanged(e,t,s)}function BN(n){return yt(n).signOut()}const Ff="__sak";/**
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
 */class Nw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ff,"1"),this.storage.removeItem(Ff),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qN=1e3,HN=10;class Dw extends Nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Aw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);EN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dw.type="LOCAL";const GN=Dw;/**
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
 */class kw extends Nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kw.type="SESSION";const Mw=kw;/**
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
 */function O_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=O_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ow(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function $N(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){return navigator?.serviceWorker?.controller||null}function WN(){return Ow()?self:null}/**
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
 */const Pw="firebaseLocalStorageDb",ZN=1,Bf="firebaseLocalStorage",Vw="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ad(n,e){return n.transaction([Bf],e?"readwrite":"readonly").objectStore(Bf)}function JN(){const n=indexedDB.deleteDatabase(Pw);return new Nc(n).toPromise()}function Lg(){const n=indexedDB.open(Pw,ZN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Bf,{keyPath:Vw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Bf)?e(s):(s.close(),await JN(),e(await Lg()))})})}async function XT(n,e,t){const s=Ad(n,!0).put({[Vw]:e,value:t});return new Nc(s).toPromise()}async function e2(n,e){const t=Ad(n,!1).get(e),s=await new Nc(t).toPromise();return s===void 0?null:s.value}function WT(n,e){const t=Ad(n,!0).delete(e);return new Nc(t).toPromise()}const t2=800,n2=3;class Lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>n2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(WN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new YN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lg();return await XT(e,Ff,"1"),await WT(e,Ff),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>XT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>e2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>WT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Ad(a,!1).getAll();return new Nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lw.type="LOCAL";const i2=Lw;new Rc(3e4,6e4);/**
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
 */function jw(n,e){return e?Ls(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class P_ extends Rw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function s2(n){return jN(n.auth,new P_(n),n.bypassAuthState)}function r2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),LN(t,new P_(n),n.bypassAuthState)}async function a2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),VN(t,new P_(n),n.bypassAuthState)}/**
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
 */class Uw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:Ji(this.auth,"internal-error")}}resolve(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o2=new Rc(2e3,1e4);async function l2(n,e,t){if(hi(n.app))return Promise.reject(Si(n,"operation-not-supported-in-this-environment"));const s=wd(n);nN(n,e,M_);const a=jw(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends Uw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){Bs(this.filter.length===1,"Popup operations only handle one event");const e=O_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o2.get())};e()}}Da.currentPopupAction=null;/**
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
 */const u2="pendingRedirect",wf=new Map;class c2 extends Uw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=wf.get(this.auth._key());if(!e){try{const s=await h2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}wf.set(this.auth._key(),e)}return this.bypassAuthState||wf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h2(n,e){const t=m2(e),s=d2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function f2(n,e){wf.set(n._key(),e)}function d2(n){return Ls(n._redirectPersistence)}function m2(n){return bf(u2,n.config.apiKey,n.name)}async function p2(n,e,t=!1){if(hi(n.app))return Promise.reject(Pa(n));const s=wd(n),a=jw(s,e),c=await new c2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const g2=600*1e3;class _2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Si(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ZT(e))}saveEventToCache(e){this.cachedEventUids.add(ZT(e)),this.lastProcessedEventTime=Date.now()}}function ZT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function y2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zw(n);default:return!1}}/**
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
 */const S2=new Rc(3e4,6e4);function JT(){const n=Yi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A2(n){return new Promise((e,t)=>{function s(){JT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{JT(),t(Si(n,"network-request-failed"))},timeout:S2.get()})}if(Yi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yi().gapi?.load)s();else{const a=IN("iframefcb");return Yi()[a]=()=>{gapi.load?s():t(Si(n,"network-request-failed"))},xN(`${RN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Sf=null,e})}let Sf=null;function C2(n){return Sf=Sf||A2(n),Sf}/**
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
 */const x2=new Rc(5e3,15e3),R2="__/auth/iframe",I2="emulator/auth/iframe",N2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k2(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?R_(e,I2):`https://${n.config.authDomain}/${R2}`,s={apiKey:e.apiKey,appName:n.name,v:$a},a=D2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Al(s).slice(1)}`}async function M2(n){const e=await C2(n),t=Yi().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:k2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Si(n,"network-request-failed"),d=Yi().setTimeout(()=>{l(c)},x2.get());function p(){Yi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const O2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,V2=600,L2="_blank",j2="http://localhost";class eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(n,e,t,s=P2,a=V2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...O2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=Ew(g)?L2:t),yw(g)&&(e=e||j2,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[R,O])=>`${w}${R}=${O},`,"");if(vN(g)&&d!=="_self")return z2(e||"",d),new eb(null);const b=window.open(e||"",d,y);Ne(b,n,"popup-blocked");try{b.focus()}catch{}return new eb(b)}function z2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const F2="__/auth/handler",B2="emulator/auth/handler",q2=encodeURIComponent("fac");async function tb(n,e,t,s,a,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:$a,eventId:a};if(e instanceof M_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Of(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))c[y]=b}if(e instanceof Ic){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${q2}=${encodeURIComponent(p)}`:"";return`${H2(n)}?${Al(d).slice(1)}${g}`}function H2({config:n}){return n.emulator?R_(n,B2):`https://${n.authDomain}/${F2}`}/**
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
 */const mg="webStorageSupport";class G2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=p2,this._overrideRedirectResult=f2}async _openPopup(e,t,s,a){Bs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await tb(e,t,s,Pg(),a);return U2(e,l,O_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await tb(e,t,s,Pg(),a);return KN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Bs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await M2(e),s=new _2(e);return t.register("authEvent",a=>(Ne(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mg,{type:mg},a=>{const l=a?.[0]?.[mg];l!==void 0&&t(!!l),Ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Aw()||vw()||D_()}}const Q2=G2;var nb="@firebase/auth",ib="1.11.0";/**
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
 */function K2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(n){Fa(new Pr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ne(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(n)},g=new AN(s,a,l,p);return DN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Fa(new Pr("auth-internal",e=>{const t=wd(e.getProvider("auth").getImmediate());return(s=>new Y2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qi(nb,ib,K2(n)),Qi(nb,ib,"esm2020")}/**
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
 */const X2=300,W2=nw("authIdTokenMaxAge")||X2;let sb=null;const Z2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>W2)return;const a=t?.token;sb!==a&&(sb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function J2(n=A_()){const e=bd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NN(n,{popupRedirectResolver:Q2,persistence:[i2,GN,Mw]}),s=nw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Z2(l.toString());zN(t,c,()=>c(t.currentUser)),UN(t,d=>c(d))}}const a=J1("auth");return a&&kN(t,`http://${a}`),t}function eD(){return document.getElementsByTagName("head")?.[0]??document}CN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Si("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",eD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Fw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,C){function I(){}I.prototype=C.prototype,D.D=C.prototype,D.prototype=new I,D.prototype.constructor=D,D.C=function(P,V,L){for(var x=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)x[fe-2]=arguments[fe];return C.prototype[V].apply(P,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,C,I){I||(I=0);var P=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)P[V]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(V=0;16>V;++V)P[V]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=D.g[0],I=D.g[1],V=D.g[2];var L=D.g[3],x=C+(L^I&(V^L))+P[0]+3614090360&4294967295;C=I+(x<<7&4294967295|x>>>25),x=L+(V^C&(I^V))+P[1]+3905402710&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(I^L&(C^I))+P[2]+606105819&4294967295,V=L+(x<<17&4294967295|x>>>15),x=I+(C^V&(L^C))+P[3]+3250441966&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(L^I&(V^L))+P[4]+4118548399&4294967295,C=I+(x<<7&4294967295|x>>>25),x=L+(V^C&(I^V))+P[5]+1200080426&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(I^L&(C^I))+P[6]+2821735955&4294967295,V=L+(x<<17&4294967295|x>>>15),x=I+(C^V&(L^C))+P[7]+4249261313&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(L^I&(V^L))+P[8]+1770035416&4294967295,C=I+(x<<7&4294967295|x>>>25),x=L+(V^C&(I^V))+P[9]+2336552879&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(I^L&(C^I))+P[10]+4294925233&4294967295,V=L+(x<<17&4294967295|x>>>15),x=I+(C^V&(L^C))+P[11]+2304563134&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(L^I&(V^L))+P[12]+1804603682&4294967295,C=I+(x<<7&4294967295|x>>>25),x=L+(V^C&(I^V))+P[13]+4254626195&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(I^L&(C^I))+P[14]+2792965006&4294967295,V=L+(x<<17&4294967295|x>>>15),x=I+(C^V&(L^C))+P[15]+1236535329&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(V^L&(I^V))+P[1]+4129170786&4294967295,C=I+(x<<5&4294967295|x>>>27),x=L+(I^V&(C^I))+P[6]+3225465664&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(L^C))+P[11]+643717713&4294967295,V=L+(x<<14&4294967295|x>>>18),x=I+(L^C&(V^L))+P[0]+3921069994&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(I^V))+P[5]+3593408605&4294967295,C=I+(x<<5&4294967295|x>>>27),x=L+(I^V&(C^I))+P[10]+38016083&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(L^C))+P[15]+3634488961&4294967295,V=L+(x<<14&4294967295|x>>>18),x=I+(L^C&(V^L))+P[4]+3889429448&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(I^V))+P[9]+568446438&4294967295,C=I+(x<<5&4294967295|x>>>27),x=L+(I^V&(C^I))+P[14]+3275163606&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(L^C))+P[3]+4107603335&4294967295,V=L+(x<<14&4294967295|x>>>18),x=I+(L^C&(V^L))+P[8]+1163531501&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(I^V))+P[13]+2850285829&4294967295,C=I+(x<<5&4294967295|x>>>27),x=L+(I^V&(C^I))+P[2]+4243563512&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(L^C))+P[7]+1735328473&4294967295,V=L+(x<<14&4294967295|x>>>18),x=I+(L^C&(V^L))+P[12]+2368359562&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(I^V^L)+P[5]+4294588738&4294967295,C=I+(x<<4&4294967295|x>>>28),x=L+(C^I^V)+P[8]+2272392833&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^I)+P[11]+1839030562&4294967295,V=L+(x<<16&4294967295|x>>>16),x=I+(V^L^C)+P[14]+4259657740&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^L)+P[1]+2763975236&4294967295,C=I+(x<<4&4294967295|x>>>28),x=L+(C^I^V)+P[4]+1272893353&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^I)+P[7]+4139469664&4294967295,V=L+(x<<16&4294967295|x>>>16),x=I+(V^L^C)+P[10]+3200236656&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^L)+P[13]+681279174&4294967295,C=I+(x<<4&4294967295|x>>>28),x=L+(C^I^V)+P[0]+3936430074&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^I)+P[3]+3572445317&4294967295,V=L+(x<<16&4294967295|x>>>16),x=I+(V^L^C)+P[6]+76029189&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^L)+P[9]+3654602809&4294967295,C=I+(x<<4&4294967295|x>>>28),x=L+(C^I^V)+P[12]+3873151461&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^I)+P[15]+530742520&4294967295,V=L+(x<<16&4294967295|x>>>16),x=I+(V^L^C)+P[2]+3299628645&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(V^(I|~L))+P[0]+4096336452&4294967295,C=I+(x<<6&4294967295|x>>>26),x=L+(I^(C|~V))+P[7]+1126891415&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~I))+P[14]+2878612391&4294967295,V=L+(x<<15&4294967295|x>>>17),x=I+(L^(V|~C))+P[5]+4237533241&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~L))+P[12]+1700485571&4294967295,C=I+(x<<6&4294967295|x>>>26),x=L+(I^(C|~V))+P[3]+2399980690&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~I))+P[10]+4293915773&4294967295,V=L+(x<<15&4294967295|x>>>17),x=I+(L^(V|~C))+P[1]+2240044497&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~L))+P[8]+1873313359&4294967295,C=I+(x<<6&4294967295|x>>>26),x=L+(I^(C|~V))+P[15]+4264355552&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~I))+P[6]+2734768916&4294967295,V=L+(x<<15&4294967295|x>>>17),x=I+(L^(V|~C))+P[13]+1309151649&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~L))+P[4]+4149444226&4294967295,C=I+(x<<6&4294967295|x>>>26),x=L+(I^(C|~V))+P[11]+3174756917&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~I))+P[2]+718787259&4294967295,V=L+(x<<15&4294967295|x>>>17),x=I+(L^(V|~C))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+C&4294967295,D.g[1]=D.g[1]+(V+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+L&4294967295}s.prototype.u=function(D,C){C===void 0&&(C=D.length);for(var I=C-this.blockSize,P=this.B,V=this.h,L=0;L<C;){if(V==0)for(;L<=I;)a(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<C;)if(P[V++]=D.charCodeAt(L++),V==this.blockSize){a(this,P),V=0;break}}else for(;L<C;)if(P[V++]=D[L++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=C},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var C=1;C<D.length-8;++C)D[C]=0;var I=8*this.o;for(C=D.length-8;C<D.length;++C)D[C]=I&255,I/=256;for(this.u(D),D=Array(16),C=I=0;4>C;++C)for(var P=0;32>P;P+=8)D[I++]=this.g[C]>>>P&255;return D};function l(D,C){var I=d;return Object.prototype.hasOwnProperty.call(I,D)?I[D]:I[D]=C(D)}function c(D,C){this.h=C;for(var I=[],P=!0,V=D.length-1;0<=V;V--){var L=D[V]|0;P&&L==C||(I[V]=L,P=!1)}this.g=I}var d={};function p(D){return-128<=D&&128>D?l(D,function(C){return new c([C|0],0>C?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return b;if(0>D)return F(g(-D));for(var C=[],I=1,P=0;D>=I;P++)C[P]=D/I|0,I*=4294967296;return new c(C,0)}function y(D,C){if(D.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D.charAt(0)=="-")return F(y(D.substring(1),C));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(C,8)),P=b,V=0;V<D.length;V+=8){var L=Math.min(8,D.length-V),x=parseInt(D.substring(V,V+L),C);8>L?(L=g(Math.pow(C,L)),P=P.j(L).add(g(x))):(P=P.j(I),P=P.add(g(x)))}return P}var b=p(0),w=p(1),R=p(16777216);n=c.prototype,n.m=function(){if(U(this))return-F(this).m();for(var D=0,C=1,I=0;I<this.g.length;I++){var P=this.i(I);D+=(0<=P?P:4294967296+P)*C,C*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(O(this))return"0";if(U(this))return"-"+F(this).toString(D);for(var C=g(Math.pow(D,6)),I=this,P="";;){var V=ge(I,C).g;I=re(I,V.j(C));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(D);if(I=V,O(I))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function O(D){if(D.h!=0)return!1;for(var C=0;C<D.g.length;C++)if(D.g[C]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=re(this,D),U(D)?-1:O(D)?0:1};function F(D){for(var C=D.g.length,I=[],P=0;P<C;P++)I[P]=~D.g[P];return new c(I,~D.h).add(w)}n.abs=function(){return U(this)?F(this):this},n.add=function(D){for(var C=Math.max(this.g.length,D.g.length),I=[],P=0,V=0;V<=C;V++){var L=P+(this.i(V)&65535)+(D.i(V)&65535),x=(L>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);P=x>>>16,L&=65535,x&=65535,I[V]=x<<16|L}return new c(I,I[I.length-1]&-2147483648?-1:0)};function re(D,C){return D.add(F(C))}n.j=function(D){if(O(this)||O(D))return b;if(U(this))return U(D)?F(this).j(F(D)):F(F(this).j(D));if(U(D))return F(this.j(F(D)));if(0>this.l(R)&&0>D.l(R))return g(this.m()*D.m());for(var C=this.g.length+D.g.length,I=[],P=0;P<2*C;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<D.g.length;V++){var L=this.i(P)>>>16,x=this.i(P)&65535,fe=D.i(V)>>>16,Me=D.i(V)&65535;I[2*P+2*V]+=x*Me,se(I,2*P+2*V),I[2*P+2*V+1]+=L*Me,se(I,2*P+2*V+1),I[2*P+2*V+1]+=x*fe,se(I,2*P+2*V+1),I[2*P+2*V+2]+=L*fe,se(I,2*P+2*V+2)}for(P=0;P<C;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=C;P<2*C;P++)I[P]=0;return new c(I,0)};function se(D,C){for(;(D[C]&65535)!=D[C];)D[C+1]+=D[C]>>>16,D[C]&=65535,C++}function le(D,C){this.g=D,this.h=C}function ge(D,C){if(O(C))throw Error("division by zero");if(O(D))return new le(b,b);if(U(D))return C=ge(F(D),C),new le(F(C.g),F(C.h));if(U(C))return C=ge(D,F(C)),new le(F(C.g),C.h);if(30<D.g.length){if(U(D)||U(C))throw Error("slowDivide_ only works with positive integers.");for(var I=w,P=C;0>=P.l(D);)I=ue(I),P=ue(P);var V=me(I,1),L=me(P,1);for(P=me(P,2),I=me(I,2);!O(P);){var x=L.add(P);0>=x.l(D)&&(V=V.add(I),L=x),P=me(P,1),I=me(I,1)}return C=re(D,V.j(C)),new le(V,C)}for(V=b;0<=D.l(C);){for(I=Math.max(1,Math.floor(D.m()/C.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=g(I),x=L.j(C);U(x)||0<x.l(D);)I-=P,L=g(I),x=L.j(C);O(L)&&(L=w),V=V.add(L),D=re(D,x)}return new le(V,D)}n.A=function(D){return ge(this,D).h},n.and=function(D){for(var C=Math.max(this.g.length,D.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)&D.i(P);return new c(I,this.h&D.h)},n.or=function(D){for(var C=Math.max(this.g.length,D.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)|D.i(P);return new c(I,this.h|D.h)},n.xor=function(D){for(var C=Math.max(this.g.length,D.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)^D.i(P);return new c(I,this.h^D.h)};function ue(D){for(var C=D.g.length+1,I=[],P=0;P<C;P++)I[P]=D.i(P)<<1|D.i(P-1)>>>31;return new c(I,D.h)}function me(D,C){var I=C>>5;C%=32;for(var P=D.g.length-I,V=[],L=0;L<P;L++)V[L]=0<C?D.i(L+I)>>>C|D.i(L+I+1)<<32-C:D.i(L+I);return new c(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Dr=c}).apply(typeof rb<"u"?rb:typeof self<"u"?self:typeof window<"u"?window:{});var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bw,Ku,qw,Af,jg,Hw,Gw,Qw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof mf=="object"&&mf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var z=h[A];if(!(z in v))break e;v=v[z]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,z={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function b(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,A),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,w.apply(null,arguments)}function R(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function O(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,z,Q){for(var ae=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ae[Ke-2]=arguments[Ke];return _.prototype[z].apply(A,ae)}}function U(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function F(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const z=h.length||0,Q=A.length||0;h.length=z+Q;for(let ae=0;ae<Q;ae++)h[z+ae]=A[ae]}else h.push(A)}}class re{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function se(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ge(h){return ge[" "](h),h}ge[" "]=function(){};var ue=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function me(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function D(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,A;for(let z=1;z<arguments.length;z++){A=arguments[z];for(v in A)h[v]=A[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function V(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function x(){var h=be;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class fe{constructor(){this.h=this.g=null}add(_,v){const A=Me.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Me=new re(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,te=!1,be=new fe,k=()=>{const h=d.Promise.resolve(void 0);ne=()=>{h.then(X)}};var X=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(v){L(v)}var _=Me;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}te=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Pe(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ue){e:{try{ge(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Pe.aa.h.call(this)}}O(Pe,ie);var Ae={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),lt=0;function Zn(h,_,v,A,z){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=z,this.key=++lt,this.da=this.fa=!1}function xi(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mi(h){this.src=h,this.g={},this.h=0}mi.prototype.add=function(h,_,v,A,z){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ae=ss(h,_,A,z);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new Zn(_,this.src,Q,!!A,z),_.fa=v,h.push(_)),_};function is(h,_){var v=_.type;if(v in h.g){var A=h.g[v],z=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=z)&&Array.prototype.splice.call(A,z,1),Q&&(xi(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function ss(h,_,v,A){for(var z=0;z<h.length;++z){var Q=h[z];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return z}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),Kr={};function to(h,_,v,A,z){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)to(h,_[Q],v,A,z);return null}return v=Qt(v),h&&h[Vt]?h.K(_,v,g(A)?!!A.capture:!1,z):On(h,_,v,!1,A,z)}function On(h,_,v,A,z,Q){if(!_)throw Error("Invalid event type");var ae=g(z)?!!z.capture:!!z,Ke=Ce(h);if(Ke||(h[rs]=Ke=new mi(h)),v=Ke.add(_,v,A,ae,Q),v.proxy)return v;if(A=$s(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ve||(z=ae),z===void 0&&(z=!1),h.addEventListener(_.toString(),A,z);else if(h.attachEvent)h.attachEvent(os(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $s(){function h(v){return _.call(h.src,h.listener,v)}const _=_e;return h}function as(h,_,v,A,z){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)as(h,_[Q],v,A,z);else A=g(A)?!!A.capture:!!A,v=Qt(v),h&&h[Vt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=ss(Q,v,A,z),-1<v&&(xi(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ce(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ss(_,v,A,z)),(v=-1<h?_[h]:null)&&Ri(v))}function Ri(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Vt])is(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(os(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ce(_))?(is(v,h),v.h==0&&(v.src=null,_[rs]=null)):xi(h)}}}function os(h){return h in Kr?Kr[h]:Kr[h]="on"+h}function _e(h,_){if(h.da)h=!0;else{_=new Pe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Ri(h),h=v.call(A,_)}return h}function Ce(h){return h=h[rs],h instanceof mi?h:null}var Be="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qt(h){return typeof h=="function"?h:(h[Be]||(h[Be]=function(_){return h.handleEvent(_)}),h[Be])}function Je(){ce.call(this),this.i=new mi(this),this.M=this,this.F=null}O(Je,ce),Je.prototype[Vt]=!0,Je.prototype.removeEventListener=function(h,_,v,A){as(this,h,_,v,A)};function Ve(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var z=_;_=new ie(A,h),P(_,z)}if(z=!0,v)for(var Q=v.length-1;0<=Q;Q--){var ae=_.g=v[Q];z=vn(ae,A,!0,_)&&z}if(ae=_.g=h,z=vn(ae,A,!0,_)&&z,z=vn(ae,A,!1,_)&&z,v)for(Q=0;Q<v.length;Q++)ae=_.g=v[Q],z=vn(ae,A,!1,_)&&z}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)xi(v[A]);delete h.g[_],h.h--}}this.F=null},Je.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},Je.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function vn(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,Q=0;Q<_.length;++Q){var ae=_[Q];if(ae&&!ae.da&&ae.capture==v){var Ke=ae.listener,Kt=ae.ha||ae.src;ae.fa&&is(h.i,ae),z=Ke.call(Kt,A)!==!1&&z}}return z&&!A.defaultPrevented}function Jt(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Vl(h){h.g=Jt(()=>{h.g=null,h.i&&(h.i=!1,Vl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class sm extends ce{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(h){ce.call(this),this.h=h,this.g={}}O($r,ce);var Xr=[];function Wr(h){me(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ri(_)},h),h.g={}}$r.prototype.N=function(){$r.aa.N.call(this),Wr(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=d.JSON.stringify,no=d.JSON.parse,Zr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ll(){}Ll.prototype.h=null;function jl(h){return h.h||(h.h=h.i())}function Ul(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){ie.call(this,"d")}O(us,ie);function zl(){ie.call(this,"c")}O(zl,ie);var Ii={},Fl=null;function Xs(){return Fl=Fl||new Je}Ii.La="serverreachability";function io(h){ie.call(this,Ii.La,h)}O(io,ie);function Ws(h){const _=Xs();Ve(_,new io(_))}Ii.STAT_EVENT="statevent";function Gc(h,_){ie.call(this,Ii.STAT_EVENT,h),this.stat=_}O(Gc,ie);function bt(h){const _=Xs();Ve(_,new Gc(_,h))}Ii.Ma="timingevent";function Yt(h,_){ie.call(this,Ii.Ma,h),this.size=_}O(Yt,ie);function Lt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function Bl(h,_,v,A,z,Q){h.info(function(){if(h.g)if(Q)for(var ae="",Ke=Q.split("&"),Kt=0;Kt<Ke.length;Kt++){var $e=Ke[Kt].split("=");if(1<$e.length){var tn=$e[0];$e=$e[1];var $t=tn.split("_");ae=2<=$t.length&&$t[1]=="type"?ae+(tn+"="+$e+"&"):ae+(tn+"=redacted&")}}else ae=null;else ae=Q;return"XMLHTTP REQ ("+A+") [attempt "+z+"]: "+_+`
`+v+`
`+ae})}function rm(h,_,v,A,z,Q,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+z+"]: "+_+`
`+v+`
`+Q+" "+ae})}function Zs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Jr(h,v)+(A?" "+A:"")})}function Qc(h,_){h.info(function(){return"TIMEOUT: "+_})}Jn.prototype.info=function(){};function Jr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var z=A[1];if(Array.isArray(z)&&!(1>z.length)){var Q=z[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ae=1;ae<z.length;ae++)z[ae]=""}}}}return pi(v)}catch{return _}}var Js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ni;function Di(){}O(Di,Ll),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Ni=new Di;function xn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}var ql={},so={};function gi(h,_,v){h.L=1,h.v=sa(qn(_)),h.m=v,h.P=!0,hs(h,null)}function hs(h,_){h.F=Date.now(),ea(h),h.A=qn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),$l(v.i,"t",A),h.C=0,v=h.j.J,h.h=new It,h.g=lh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new sm(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var z="readystatechange";Array.isArray(z)||(z&&(Xr[0]=z.toString()),z=Xr);for(var Q=0;Q<z.length;Q++){var ae=to(v,z[Q],A||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ws(),Bl(h.i,h.u,h.A,h.l,h.R,h.m)}xn.prototype.ca=function(h){h=h.target;const _=this.M;_&&ii(h)==3?_.j():this.Y(h)},xn.prototype.Y=function(h){try{if(h==this.g)e:{const $t=ii(this.g);var _=this.g.Ba();const vs=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||$t!=4||_==7||(_==8||0>=vs?Ws(3):Ws(2)),er(this);var v=this.g.Z();this.X=v;t:if(Yc(this)){var A=eh(this.g);h="";var z=A.length,Q=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),ki(this);var ae="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==z-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,rm(this.i,this.u,this.A,this.l,this.R,$t,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Kt=this.g;if((Ke=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(Ke)){var $e=Ke;break t}}$e=null}if(v=$e)Zs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,v);else{this.o=!1,this.s=3,bt(12),hn(this),ki(this);break e}}if(this.P){v=!0;let fn;for(;!this.J&&this.C<ae.length;)if(fn=Kc(this,ae),fn==so){$t==4&&(this.s=4,bt(14),v=!1),Zs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ql){this.s=4,bt(15),Zs(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else Zs(this.i,this.l,fn,null),ta(this,fn);if(Yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||ae.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Zs(this.i,this.l,ae,"[Invalid Chunked Response]"),hn(this),ki(this);else if(0<ae.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),fa(tn),tn.M=!0,bt(11))}}else Zs(this.i,this.l,ae,null),ta(this,ae);$t==4&&hn(this),this.o&&!this.J&&($t==4?rh(this.j,this):(this.o=!1,ea(this)))}else cm(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),hn(this),ki(this)}}}catch{}finally{}};function Yc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Kc(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?so:(v=Number(_.substring(v,A)),isNaN(v)?ql:(A+=1,A+v>_.length?so:(_=_.slice(A,A+v),h.C=A+v,_)))}xn.prototype.cancel=function(){this.J=!0,hn(this)};function ea(h){h.S=Date.now()+h.I,$c(h,h.I)}function $c(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(w(h.ba,h),_)}function er(h){h.B&&(d.clearTimeout(h.B),h.B=null)}xn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qc(this.i,this.A),this.L!=2&&(Ws(),bt(17)),hn(this),this.s=2,ki(this)):$c(this,this.S-h)};function ki(h){h.j.G==0||h.J||rh(h.j,h)}function hn(h){er(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Wr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ta(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Hl(v.h,h))){if(!h.K&&Hl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var z=A;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)_o(v),po(v);else break e;eu(v),bt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Lt(w(v.Za,v),6e3));if(1>=ao(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ys(v,11)}else if((h.K||v.g==h)&&_o(v),!se(_))for(z=v.Da.g.parse(_),_=0;_<z.length;_++){let $e=z[_];if(v.T=$e[0],$e=$e[1],v.G==2)if($e[0]=="c"){v.K=$e[1],v.ia=$e[2];const tn=$e[3];tn!=null&&(v.la=tn,v.j.info("VER="+v.la));const $t=$e[4];$t!=null&&(v.Aa=$t,v.j.info("SVER="+v.Aa));const vs=$e[5];vs!=null&&typeof vs=="number"&&0<vs&&(A=1.5*vs,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const fn=h.g;if(fn){const Ui=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var Q=A.h;Q.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(oo(Q,Q.h),Q.h=null))}if(A.D){const nu=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(A.ya=nu,ut(A.I,A.D,nu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ae=h;if(A.qa=oh(A,A.J?A.ia:null,A.W),ae.K){Rn(A.h,ae);var Ke=ae,Kt=A.L;Kt&&(Ke.I=Kt),Ke.B&&(er(Ke),ea(Ke)),A.g=ae}else ih(A);0<v.i.length&&go(v)}else $e[0]!="stop"&&$e[0]!="close"||ys(v,7);else v.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?ys(v,7):Zl(v):$e[0]!="noop"&&v.l&&v.l.ta($e),v.v=0)}}Ws(4)}catch{}}var Xc=class{constructor(h,_){this.g=h,this.map=_}};function fs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ro(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ao(h){return h.h?1:h.g?h.g.size:0}function Hl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function oo(h,_){h.g?h.g.add(_):h.h=_}function Rn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}fs.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Gl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return U(h.i)}function am(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function lo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Ql(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=lo(h),A=am(h),z=A.length,Q=0;Q<z;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function om(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),z=null;if(0<=A){var Q=h[v].substring(0,A);z=h[v].substring(A+1)}else Q=h[v];_(Q,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function jt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof jt){this.h=h.h,ia(this,h.j),this.o=h.o,this.g=h.g,tr(this,h.s),this.l=h.l;var _=h.i,v=new ms;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ds(this,v),this.m=h.m}else h&&(_=String(h).match(na))?(this.h=!1,ia(this,_[1]||"",!0),this.o=ei(_[2]||""),this.g=ei(_[3]||"",!0),tr(this,_[4]),this.l=ei(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=ei(_[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}jt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ra(_,Yl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ra(_,Yl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ra(v,v.charAt(0)=="/"?lm:Kl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ra(v,uo)),h.join("")};function qn(h){return new jt(h)}function ia(h,_,v){h.j=v?ei(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function tr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,v){_ instanceof ms?(h.i=_,Zc(h.i,h.h)):(v||(_=ra(_,um)),h.i=new ms(_,h.h))}function ut(h,_,v){h.i.set(_,v)}function sa(h){return ut(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ei(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ra(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Wc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Wc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Yl=/[#\/\?@]/g,Kl=/[#\?:]/g,lm=/[#\?]/g,um=/[#\?@]/g,uo=/#/g;function ms(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ti(h){h.g||(h.g=new Map,h.h=0,h.i&&om(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ms.prototype,n.add=function(h,_){ti(this),this.i=null,h=Mi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ps(h,_){ti(h),_=Mi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function gs(h,_){return ti(h),_=Mi(h,_),h.g.has(_)}n.forEach=function(h,_){ti(this),this.g.forEach(function(v,A){v.forEach(function(z){h.call(_,z,A,this)},this)},this)},n.na=function(){ti(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const z=h[A];for(let Q=0;Q<z.length;Q++)v.push(_[A])}return v},n.V=function(h){ti(this);let _=[];if(typeof h=="string")gs(this,h)&&(_=_.concat(this.g.get(Mi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ti(this),this.i=null,h=Mi(this,h),gs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function $l(h,_,v){ps(h,_),0<v.length&&(h.i=null,h.g.set(Mi(h,_),U(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var z=Q;ae[A]!==""&&(z+="="+encodeURIComponent(String(ae[A]))),h.push(z)}}return this.i=h.join("&")};function Mi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Zc(h,_){_&&!h.j&&(ti(h),h.i=null,h.g.forEach(function(v,A){var z=A.toLowerCase();A!=z&&(ps(this,A),$l(this,z,v))},h)),h.j=_}function aa(h,_){const v=new Jn;if(d.Image){const A=new Image;A.onload=R(ni,v,"TestLoadImage: loaded",!0,_,A),A.onerror=R(ni,v,"TestLoadImage: error",!1,_,A),A.onabort=R(ni,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=R(ni,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function _i(h,_){const v=new Jn,A=new AbortController,z=setTimeout(()=>{A.abort(),ni(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(z),Q.ok?ni(v,"TestPingServer: ok",!0,_):ni(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),ni(v,"TestPingServer: error",!1,_)})}function ni(h,_,v,A,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),A(v)}catch{}}function oa(){this.g=new Zr}function Oi(h,_,v){const A=v||"";try{Ql(h,function(z,Q){let ae=z;g(z)&&(ae=pi(z)),_.push(A+Q+"="+encodeURIComponent(ae))})}catch(z){throw _.push(A+"type="+encodeURIComponent("_badmap")),z}}function nr(h){this.l=h.Ub||null,this.j=h.eb||!1}O(nr,Ll),nr.prototype.g=function(){return new _s(this.l,this.j)},nr.prototype.i=(function(h){return function(){return h}})({});function _s(h,_){Je.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(_s,Je),n=_s.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Vi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pi(this):Vi(this),this.readyState==3&&Xl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Pi(this))},n.Qa=function(h){this.g&&(this.response=h,Pi(this))},n.ga=function(){this.g&&Pi(this)};function Pi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Vi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Wl(h){let _="";return me(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function en(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Wl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):ut(h,_,v))}function it(h){Je.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(it,Je);var co=/^https?$/i,la=["POST","PUT"];n=it.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ni.g(),this.v=this.o?jl(this.o):jl(Ni),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Jc(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var z in A)v.set(z,A[z]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(la,_,void 0))||A||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ae]of v)this.g.setRequestHeader(Q,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ua(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Jc(this,Q)}};function Jc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,ho(h),Li(h)}function ho(h){h.A||(h.A=!0,Ve(h,"complete"),Ve(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ve(this,"complete"),Ve(this,"abort"),Li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fo(this):this.bb())},n.bb=function(){fo(this)};function fo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ii(h)!=4||h.Z()!=2)){if(h.u&&ii(h)==4)Jt(h.Ea,0,h);else if(Ve(h,"readystatechange"),ii(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ae===0){var z=String(h.D).match(na)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),A=!co.test(z?z.toLowerCase():"")}v=A}if(v)Ve(h,"complete"),Ve(h,"success");else{h.m=6;try{var Q=2<ii(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",ho(h)}}finally{Li(h)}}}}function Li(h,_){if(h.g){ua(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ve(h,"ready");try{v.onreadystatechange=A}catch{}}}function ua(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ii(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),no(_)}};function eh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function cm(h){const _={};h=(h.g&&2<=ii(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(se(h[A]))continue;var v=V(h[A]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[z]||[];_[z]=Q,Q.push(v)}D(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ca(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function mo(h){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ca("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ca("baseRetryDelayMs",5e3,h),this.cb=ca("retryDelaySeedMs",1e4,h),this.Wa=ca("forwardChannelMaxRetries",2,h),this.wa=ca("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(h&&h.concurrentRequestLimit),this.Da=new oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){bt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=oh(this,null,this.W),go(this)};function Zl(h){if(th(h),h.G==3){var _=h.U++,v=qn(h.I);if(ut(v,"SID",h.K),ut(v,"RID",_),ut(v,"TYPE","terminate"),ha(h,v),_=new xn(h,h.j,_),_.L=2,_.v=sa(qn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=lh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ea(_)}ah(h)}function po(h){h.g&&(fa(h),h.g.cancel(),h.g=null)}function th(h){po(h),h.u&&(d.clearTimeout(h.u),h.u=null),_o(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function go(h){if(!ro(h.h)&&!h.s){h.s=!0;var _=h.Ga;ne||k(),te||(ne(),te=!0),be.add(_,h),h.B=0}}function hm(h,_){return ao(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(w(h.Ga,h,_),tu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new xn(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),P(Q,this.S)):Q=this.S),this.m!==null||this.O||(z.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=nh(this,z,_),v=qn(this.I),ut(v,"RID",h),ut(v,"CVER",22),this.D&&ut(v,"X-HTTP-Session-Id",this.D),ha(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Wl(Q)))+"&"+_:this.m&&en(v,this.m,Q)),oo(this.h,z),this.Ua&&ut(v,"TYPE","init"),this.P?(ut(v,"$req",_),ut(v,"SID","null"),z.T=!0,gi(z,v,null)):gi(z,v,_),this.G=2}}else this.G==3&&(h?Jl(this,h):this.i.length==0||ro(this.h)||Jl(this))};function Jl(h,_){var v;_?v=_.l:v=h.U++;const A=qn(h.I);ut(A,"SID",h.K),ut(A,"RID",v),ut(A,"AID",h.T),ha(h,A),h.m&&h.o&&en(A,h.m,h.o),v=new xn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=nh(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),oo(h.h,v),gi(v,A,_)}function ha(h,_){h.H&&me(h.H,function(v,A){ut(_,A,v)}),h.l&&Ql({},function(v,A){ut(_,A,v)})}function nh(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var z=h.i;let Q=-1;for(;;){const ae=["count="+v];Q==-1?0<v?(Q=z[0].g,ae.push("ofs="+Q)):Q=0:ae.push("ofs="+Q);let Ke=!0;for(let Kt=0;Kt<v;Kt++){let $e=z[Kt].g;const tn=z[Kt].map;if($e-=Q,0>$e)Q=Math.max(0,z[Kt].g-100),Ke=!1;else try{Oi(tn,ae,"req"+$e+"_")}catch{A&&A(tn)}}if(Ke){A=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function ih(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ne||k(),te||(ne(),te=!0),be.add(_,h),h.v=0}}function eu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(w(h.Fa,h),tu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),po(this),sh(this))};function fa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function sh(h){h.g=new xn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=qn(h.qa);ut(_,"RID","rpc"),ut(_,"SID",h.K),ut(_,"AID",h.T),ut(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&ut(_,"TO",h.ja),ut(_,"TYPE","xmlhttp"),ha(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=sa(qn(_)),v.m=null,v.P=!0,hs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,po(this),eu(this),bt(19))};function _o(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function rh(h,_){var v=null;if(h.g==_){_o(h),fa(h),h.g=null;var A=2}else if(Hl(h.h,_))v=_.D,Rn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;A=Xs(),Ve(A,new Yt(A,v)),go(h)}else ih(h);else if(z=_.s,z==3||z==0&&0<_.X||!(A==1&&hm(h,_)||A==2&&eu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),z){case 1:ys(h,5);break;case 4:ys(h,10);break;case 3:ys(h,6);break;default:ys(h,2)}}}function tu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ys(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const z=!A;A=new jt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ia(A,"https"),sa(A),z?aa(A.toString(),v):_i(A.toString(),v)}else bt(2);h.G=0,h.l&&h.l.sa(_),ah(h),th(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function ah(h){if(h.G=0,h.ka=[],h.l){const _=Gl(h.h);(_.length!=0||h.i.length!=0)&&(F(h.ka,_),F(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function oh(h,_,v){var A=v instanceof jt?qn(v):new jt(v);if(A.g!="")_&&(A.g=_+"."+A.g),tr(A,A.s);else{var z=d.location;A=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var Q=new jt(null);A&&ia(Q,A),_&&(Q.g=_),z&&tr(Q,z),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&ut(A,v,_),ut(A,"VER",h.la),ha(h,A),A}function lh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new it(new nr({eb:v})):new it(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function yo(){}yo.prototype.g=function(h,_){return new In(h,_)};function In(h,_){Je.call(this),this.g=new mo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!se(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!se(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new ji(this)}O(In,Je),In.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},In.prototype.close=function(){Zl(this.g)},In.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=pi(h),h=v);_.i.push(new Xc(_.Ya++,h)),_.G==3&&go(_)},In.prototype.N=function(){this.g.l=null,delete this.j,Zl(this.g),delete this.g,In.aa.N.call(this)};function ch(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}O(ch,us);function hh(){zl.call(this),this.status=1}O(hh,zl);function ji(h){this.g=h}O(ji,uh),ji.prototype.ua=function(){Ve(this.g,"a")},ji.prototype.ta=function(h){Ve(this.g,new ch(h))},ji.prototype.sa=function(h){Ve(this.g,new hh)},ji.prototype.ra=function(){Ve(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,In.prototype.send=In.prototype.o,In.prototype.open=In.prototype.m,In.prototype.close=In.prototype.close,Qw=function(){return new yo},Gw=function(){return Xs()},Hw=Ii,jg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,Af=Js,cs.COMPLETE="complete",qw=cs,Ul.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Je.prototype.listen=Je.prototype.K,Ku=Ul,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Bw=it}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});const ab="@firebase/firestore",ob="4.9.0";/**
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
 */class wn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wn.UNAUTHENTICATED=new wn(null),wn.GOOGLE_CREDENTIALS=new wn("google-credentials-uid"),wn.FIRST_PARTY=new wn("first-party-uid"),wn.MOCK_USER=new wn("mock-user");/**
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
 */let xl="12.0.0";/**
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
 */const qa=new Td("@firebase/firestore");function Ko(){return qa.logLevel}function de(n,...e){if(qa.logLevel<=Ge.DEBUG){const t=e.map(V_);qa.debug(`Firestore (${xl}): ${n}`,...t)}}function qs(n,...e){if(qa.logLevel<=Ge.ERROR){const t=e.map(V_);qa.error(`Firestore (${xl}): ${n}`,...t)}}function cl(n,...e){if(qa.logLevel<=Ge.WARN){const t=e.map(V_);qa.warn(`Firestore (${xl}): ${n}`,...t)}}function V_(n){if(typeof n=="string")return n;try{/**
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
 */function Se(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Yw(n,s,t)}function Yw(n,e,t){let s=`FIRESTORE (${xl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw qs(s),new Error(s)}function st(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Yw(e,a,s)}function ke(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ys{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Us{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Kw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(wn.UNAUTHENTICATED)))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=wn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){st(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Us,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Us)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(st(typeof s.accessToken=="string",31837,{l:s}),new Kw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string",2055,{h:e}),new wn(e)}}class sD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=wn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(wn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hi(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){st(this.o===void 0,3512);const s=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(st(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class L_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=oD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Qe(n,e){return n<e?-1:n>e?1:0}function Ug(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return pg(a)===pg(l)?Qe(a,l):pg(a)?1:-1}return Qe(n.length,e.length)}const lD=55296,uD=57343;function pg(n){const e=n.charCodeAt(0);return e>=lD&&e<=uD}function hl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
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
 */const ub="__name__";class Gi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Se(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Gi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Qe(e.length,t.length)}static compareSegments(e,t){const s=Gi.isNumericId(e),a=Gi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):Ug(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class _t extends Gi{construct(e,t,s){return new _t(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new _t(t)}static emptyPath(){return new _t([])}}const cD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends Gi{construct(e,t,s){return new _n(e,t,s)}static isValidIdentifier(e){return cD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ub}static keyField(){return new _n([ub])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new he($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new he($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new he($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(_t.fromString(e))}static fromName(e){return new Ee(_t.fromString(e).popFirst(5))}static empty(){return new Ee(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new _t(e.slice()))}}/**
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
 */function $w(n,e,t){if(!t)throw new he($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hD(n,e,t,s){if(e===!0&&s===!0)throw new he($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cb(n){if(!Ee.isDocumentKey(n))throw new he($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hb(n){if(Ee.isDocumentKey(n))throw new he($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Cd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cd(n);throw new he($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function Dc(n,e){if(!Xw(n))throw new he($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new he($.INVALID_ARGUMENT,t);return!0}/**
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
 */const fb=-62135596800,db=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*db);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fb)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/db}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Ht("string",Et._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new Et(0,0))}static max(){return new De(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const dc=-1;function fD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new Vr(a,Ee.empty(),e)}function dD(n){return new Vr(n.readTime,n.key,dc)}class Vr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vr(De.min(),Ee.empty(),dc)}static max(){return new Vr(De.max(),Ee.empty(),dc)}}function mD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Qe(n.largestBatchId,e.largestBatchId))}/**
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
 */async function Rl(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==pD)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function _D(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Il(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xd.ce=-1;/**
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
 */const j_=-1;function Rd(n){return n==null}function qf(n){return n===0&&1/n==-1/0}function yD(n){return typeof n=="number"&&Number.isInteger(n)&&!qf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ww="";function vD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mb(e)),e=ED(n.get(t),e);return mb(e)}function ED(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Ww:t+="";break;default:t+=l}}return t}function mb(n){return n+Ww+""}/**
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
 */function pb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Gt=class zg{constructor(e,t){this.comparator=e,this.root=t||kr.EMPTY}insert(e,t){return new zg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kr.BLACK,null,null))}remove(e){return new zg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pf(this.root,e,this.comparator,!1)}getReverseIterator(){return new pf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pf(this.root,e,this.comparator,!0)}},pf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},kr=class Ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ms.RED,this.left=a??Ms.EMPTY,this.right=l??Ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}};kr.EMPTY=null,kr.RED=!0,kr.BLACK=!1;kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new kr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Zt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gb(this.data.getIterator())}getIteratorFrom(e){return new gb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class gb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new Zt(_n.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Jw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Jw("Invalid base64 string: "+l):l}})(e);return new yn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new yn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(n){if(st(!!n,39018),typeof n=="string"){let e=0;const t=TD.exec(n);if(st(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Mt(n.seconds),nanos:Mt(n.nanos)}}function Mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jr(n){return typeof n=="string"?yn.fromBase64String(n):yn.fromUint8Array(n)}/**
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
 */const eS="server_timestamp",tS="__type__",nS="__previous_value__",iS="__local_write_time__";function U_(n){return(n?.mapValue?.fields||{})[tS]?.stringValue===eS}function Id(n){const e=n.mapValue.fields[nS];return U_(e)?Id(e):e}function mc(n){const e=Lr(n.mapValue.fields[iS].timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class bD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Hf="(default)";class pc{constructor(e,t){this.projectId=e,this.database=t||Hf}static empty(){return new pc("","")}get isDefaultDatabase(){return this.database===Hf}isEqual(e){return e instanceof pc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sS="__type__",wD="__max__",gf={mapValue:{}},rS="__vector__",Gf="value";function Ur(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?U_(n)?4:AD(n)?9007199254740991:SD(n)?10:11:Se(28295,{value:n})}function es(n,e){if(n===e)return!0;const t=Ur(n);if(t!==Ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mc(n).isEqual(mc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Lr(a.timestampValue),d=Lr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return jr(a.bytesValue).isEqual(jr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Mt(a.geoPointValue.latitude)===Mt(l.geoPointValue.latitude)&&Mt(a.geoPointValue.longitude)===Mt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Mt(a.integerValue)===Mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Mt(a.doubleValue),d=Mt(l.doubleValue);return c===d?qf(c)===qf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return hl(n.arrayValue.values||[],e.arrayValue.values||[],es);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(pb(c)!==pb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!es(c[p],d[p])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function gc(n,e){return(n.values||[]).find((t=>es(t,e)))!==void 0}function fl(n,e){if(n===e)return 0;const t=Ur(n),s=Ur(e);if(t!==s)return Qe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Qe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Mt(l.integerValue||l.doubleValue),p=Mt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return _b(n.timestampValue,e.timestampValue);case 4:return _b(mc(n),mc(e));case 5:return Ug(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=jr(l),p=jr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Qe(d[g],p[g]);if(y!==0)return y}return Qe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Qe(Mt(l.latitude),Mt(c.latitude));return d!==0?d:Qe(Mt(l.longitude),Mt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Gf]?.arrayValue,y=p[Gf]?.arrayValue,b=Qe(g?.values?.length||0,y?.values?.length||0);return b!==0?b:yb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===gf.mapValue&&c===gf.mapValue)return 0;if(l===gf.mapValue)return 1;if(c===gf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let b=0;b<p.length&&b<y.length;++b){const w=Ug(p[b],y[b]);if(w!==0)return w;const R=fl(d[p[b]],g[y[b]]);if(R!==0)return R}return Qe(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{he:t})}}function _b(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Qe(n,e);const t=Lr(n),s=Lr(e),a=Qe(t.seconds,s.seconds);return a!==0?a:Qe(t.nanos,s.nanos)}function yb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=fl(t[a],s[a]);if(l)return l}return Qe(t.length,s.length)}function dl(n){return Fg(n)}function Fg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Lr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return jr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Fg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Fg(t.fields[c])}`;return a+"}"})(n.mapValue):Se(61005,{value:n})}function Cf(n){switch(Ur(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Id(n);return e?16+Cf(e):16;case 5:return 2*n.stringValue.length;case 6:return jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Cf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Gr(s.fields,((l,c)=>{a+=l.length+Cf(c)})),a})(n.mapValue);default:throw Se(13486,{value:n})}}function vb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Bg(n){return!!n&&"integerValue"in n}function z_(n){return!!n&&"arrayValue"in n}function Eb(n){return!!n&&"nullValue"in n}function Tb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xf(n){return!!n&&"mapValue"in n}function SD(n){return(n?.mapValue?.fields||{})[sS]?.stringValue===rS}function ec(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ec(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ec(n.arrayValue.values[t]);return e}return{...n}}function AD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wD}/**
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
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ec(t)}setAll(e){let t=_n.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=ec(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());xf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return es(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];xf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Gr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Un(ec(this.value))}}function aS(n){const e=[];return Gr(n.fields,((t,s)=>{const a=new _n([t]);if(xf(s)){const l=aS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Wn(e)}/**
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
 */class Sn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Sn(e,0,De.min(),De.min(),De.min(),Un.empty(),0)}static newFoundDocument(e,t,s,a){return new Sn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new Sn(e,2,t,De.min(),De.min(),Un.empty(),0)}static newUnknownDocument(e,t){return new Sn(e,3,t,De.min(),De.min(),Un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qf{constructor(e,t){this.position=e,this.inclusive=t}}function bb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=Ee.comparator(Ee.fromName(c.referenceValue),t.key):s=fl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function wb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!es(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _c{constructor(e,t="asc"){this.field=e,this.dir=t}}function CD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class oS{}class qt extends oS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RD(e,t,s):t==="array-contains"?new DD(e,s):t==="in"?new kD(e,s):t==="not-in"?new MD(e,s):t==="array-contains-any"?new OD(e,s):new qt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ID(e,s):new ND(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fl(t,this.value)):t!==null&&Ur(this.value)===Ur(t)&&this.matchesComparison(fl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ci extends oS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ci(e,t)}matches(e){return lS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lS(n){return n.op==="and"}function uS(n){return xD(n)&&lS(n)}function xD(n){for(const e of n.filters)if(e instanceof Ci)return!1;return!0}function qg(n){if(n instanceof qt)return n.field.canonicalString()+n.op.toString()+dl(n.value);if(uS(n))return n.filters.map((e=>qg(e))).join(",");{const e=n.filters.map((t=>qg(t))).join(",");return`${n.op}(${e})`}}function cS(n,e){return n instanceof qt?(function(s,a){return a instanceof qt&&s.op===a.op&&s.field.isEqual(a.field)&&es(s.value,a.value)})(n,e):n instanceof Ci?(function(s,a){return a instanceof Ci&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&cS(c,a.filters[d])),!0):!1})(n,e):void Se(19439)}function hS(n){return n instanceof qt?(function(t){return`${t.field.canonicalString()} ${t.op} ${dl(t.value)}`})(n):n instanceof Ci?(function(t){return t.op.toString()+" {"+t.getFilters().map(hS).join(" ,")+"}"})(n):"Filter"}class RD extends qt{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class ID extends qt{constructor(e,t){super(e,"in",t),this.keys=fS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ND extends qt{constructor(e,t){super(e,"not-in",t),this.keys=fS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fS(n,e){return(e.arrayValue?.values||[]).map((t=>Ee.fromName(t.referenceValue)))}class DD extends qt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return z_(t)&&gc(t.arrayValue,this.value)}}class kD extends qt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gc(this.value.arrayValue,t)}}class MD extends qt{constructor(e,t){super(e,"not-in",t)}matches(e){if(gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gc(this.value.arrayValue,t)}}class OD extends qt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!z_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>gc(this.value.arrayValue,s)))}}/**
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
 */class PD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function Sb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new PD(n,e,t,s,a,l,c)}function F_(n){const e=ke(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>qg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>dl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>dl(s))).join(",")),e.Te=t}return e.Te}function B_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wb(n.startAt,e.startAt)&&wb(n.endAt,e.endAt)}function Hg(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VD(n,e,t,s,a,l,c,d){return new Nl(n,e,t,s,a,l,c,d)}function Nd(n){return new Nl(n)}function Ab(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dS(n){return n.collectionGroup!==null}function tc(n){const e=ke(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Zt(_n.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new _c(l,s))})),t.has(_n.keyField().canonicalString())||e.Ie.push(new _c(_n.keyField(),s))}return e.Ie}function Ki(n){const e=ke(n);return e.Ee||(e.Ee=LD(e,tc(n))),e.Ee}function LD(n,e){if(n.limitType==="F")return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new _c(a.field,l)}));const t=n.endAt?new Qf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Qf(n.startAt.position,n.startAt.inclusive):null;return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Gg(n,e){const t=n.filters.concat([e]);return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yf(n,e,t){return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dd(n,e){return B_(Ki(n),Ki(e))&&n.limitType===e.limitType}function mS(n){return`${F_(Ki(n))}|lt:${n.limitType}`}function $o(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>hS(a))).join(", ")}]`),Rd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>dl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>dl(a))).join(",")),`Target(${s})`})(Ki(n))}; limitType=${n.limitType})`}function kd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Ee.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of tc(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=bb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,tc(s),a)||s.endAt&&!(function(c,d,p){const g=bb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,tc(s),a))})(n,e)}function jD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pS(n){return(e,t)=>{let s=!1;for(const a of tc(n)){const l=UD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function UD(n,e,t){const s=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?fl(p,g):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Se(19790,{direction:n.dir})}}/**
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
 */class Xa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Zw(this.inner)}size(){return this.innerSize}}/**
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
 */const zD=new Gt(Ee.comparator);function Hs(){return zD}const gS=new Gt(Ee.comparator);function $u(...n){let e=gS;for(const t of n)e=e.insert(t.key,t);return e}function _S(n){let e=gS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ka(){return nc()}function yS(){return nc()}function nc(){return new Xa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const FD=new Gt(Ee.comparator),BD=new Zt(Ee.comparator);function Ye(...n){let e=BD;for(const t of n)e=e.add(t);return e}const qD=new Zt(Qe);function HD(){return qD}/**
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
 */function q_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qf(e)?"-0":e}}function vS(n){return{integerValue:""+n}}function GD(n,e){return yD(e)?vS(e):q_(n,e)}/**
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
 */class Md{constructor(){this._=void 0}}function QD(n,e,t){return n instanceof yc?(function(a,l){const c={fields:{[tS]:{stringValue:eS},[iS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&U_(l)&&(l=Id(l)),l&&(c.fields[nS]=l),{mapValue:c}})(t,e):n instanceof ml?TS(n,e):n instanceof pl?bS(n,e):(function(a,l){const c=ES(a,l),d=Cb(c)+Cb(a.Ae);return Bg(c)&&Bg(a.Ae)?vS(d):q_(a.serializer,d)})(n,e)}function YD(n,e,t){return n instanceof ml?TS(n,e):n instanceof pl?bS(n,e):t}function ES(n,e){return n instanceof Kf?(function(s){return Bg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class yc extends Md{}class ml extends Md{constructor(e){super(),this.elements=e}}function TS(n,e){const t=wS(e);for(const s of n.elements)t.some((a=>es(a,s)))||t.push(s);return{arrayValue:{values:t}}}class pl extends Md{constructor(e){super(),this.elements=e}}function bS(n,e){let t=wS(e);for(const s of n.elements)t=t.filter((a=>!es(a,s)));return{arrayValue:{values:t}}}class Kf extends Md{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cb(n){return Mt(n.integerValue||n.doubleValue)}function wS(n){return z_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class H_{constructor(e,t){this.field=e,this.transform=t}}function KD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof ml&&a instanceof ml||s instanceof pl&&a instanceof pl?hl(s.elements,a.elements,es):s instanceof Kf&&a instanceof Kf?es(s.Ae,a.Ae):s instanceof yc&&a instanceof yc})(n.transform,e.transform)}class $D{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Od{}function SS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pd(n.key,kn.none()):new kc(n.key,n.data,kn.none());{const t=n.data,s=Un.empty();let a=new Zt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Qr(n.key,s,new Wn(a.toArray()),kn.none())}}function XD(n,e,t){n instanceof kc?(function(a,l,c){const d=a.value.clone(),p=Rb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qr?(function(a,l,c){if(!Rf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Rb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(AS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ic(n,e,t,s){return n instanceof kc?(function(l,c,d,p){if(!Rf(l.precondition,c))return d;const g=l.value.clone(),y=Ib(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Qr?(function(l,c,d,p){if(!Rf(l.precondition,c))return d;const g=Ib(l.fieldTransforms,p,c),y=c.data;return y.setAll(AS(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,c,d){return Rf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function WD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=ES(s.transform,a||null);l!=null&&(t===null&&(t=Un.empty()),t.set(s.field,l))}return t||null}function xb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&hl(s,a,((l,c)=>KD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class kc extends Od{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Qr extends Od{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function AS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Rb(n,e,t){const s=new Map;st(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,YD(c,d,t[a]))}return s}function Ib(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,QD(l,c,e))}return s}class Pd extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&XD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=yS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=SS(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(De.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ye())}isEqual(e){return this.batchId===e.batchId&&hl(this.mutations,e.mutations,((t,s)=>xb(t,s)))&&hl(this.baseMutations,e.baseMutations,((t,s)=>xb(t,s)))}}class G_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){st(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return FD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new G_(e,t,s,a)}}/**
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
 */var Ft,We;function nk(n){switch(n){case $.OK:return Se(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function CS(n){if(n===void 0)return qs("GRPC error has no .code"),$.UNKNOWN;switch(n){case Ft.OK:return $.OK;case Ft.CANCELLED:return $.CANCELLED;case Ft.UNKNOWN:return $.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return $.INTERNAL;case Ft.UNAVAILABLE:return $.UNAVAILABLE;case Ft.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ft.NOT_FOUND:return $.NOT_FOUND;case Ft.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ft.ABORTED:return $.ABORTED;case Ft.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ft.DATA_LOSS:return $.DATA_LOSS;default:return Se(39323,{code:n})}}(We=Ft||(Ft={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sk=new Dr([4294967295,4294967295],0);function Nb(n){const e=ik().encode(n),t=new Fw;return t.update(e),new Uint8Array(t.digest())}function Db(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Dr([t,s],0),new Dr([a,l],0)]}class Q_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Xu(`Invalid padding: ${t}`);if(s<0)throw new Xu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Xu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Dr.fromNumber(s)));return a.compare(sk)===1&&(a=new Dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Q_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vd(De.min(),a,new Gt(Qe),Hs(),Ye())}}class Mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Mc(s,t,Ye(),Ye(),Ye())}}/**
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
 */class If{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class xS{constructor(e,t){this.targetId=e,this.Ce=t}}class RS{constructor(e,t,s=yn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class kb{constructor(){this.ve=0,this.Fe=Mb(),this.Me=yn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ye(),t=Ye(),s=Ye();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Se(38017,{changeType:l})}})),new Mc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Mb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,st(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=_f(),this.He=_f(),this.Ye=new Gt(Qe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Hg(l))if(s===0){const c=new Ee(l.path);this.et(t,c,Sn.newNoDocument(c,De.min()))}else st(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=jr(s).toUint8Array()}catch(p){if(p instanceof Jw)return cl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Q_(c,a,l)}catch(p){return cl(p instanceof Xu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Hg(d.target)){const p=new Ee(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Sn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ye();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Vd(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=_f(),this.He=_f(),this.Ye=new Gt(Qe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Zt(Qe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Zt(Qe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _f(){return new Gt(Ee.comparator)}function Mb(){return new Gt(Ee.comparator)}const ak={asc:"ASCENDING",desc:"DESCENDING"},ok={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qg(n,e){return n.useProto3Json||Rd(e)?e:{value:e}}function $f(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ck(n,e){return $f(n,e.toTimestamp())}function $i(n){return st(!!n,49232),De.fromTimestamp((function(t){const s=Lr(t);return new Et(s.seconds,s.nanos)})(n))}function Y_(n,e){return Yg(n,e).canonicalString()}function Yg(n,e){const t=(function(a){return new _t(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function NS(n){const e=_t.fromString(n);return st(PS(e),10190,{key:e.toString()}),e}function Kg(n,e){return Y_(n.databaseId,e.path)}function gg(n,e){const t=NS(e);if(t.get(1)!==n.databaseId.projectId)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(kS(t))}function DS(n,e){return Y_(n.databaseId,e)}function hk(n){const e=NS(n);return e.length===4?_t.emptyPath():kS(e)}function $g(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kS(n){return st(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ob(n,e,t){return{name:Kg(n,e),fields:t.value.mapValue.fields}}function fk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(st(y===void 0||typeof y=="string",58123),yn.fromBase64String(y||"")):(st(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),yn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:CS(g.code);return new he(y,g.message||"")})(c);t=new RS(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=gg(n,s.document.name),l=$i(s.document.updateTime),c=s.document.createTime?$i(s.document.createTime):De.min(),d=new Un({mapValue:{fields:s.document.fields}}),p=Sn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new If(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=gg(n,s.document),l=s.readTime?$i(s.readTime):De.min(),c=Sn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new If([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=gg(n,s.document),l=s.removedTargetIds||[];t=new If([],l,a,null)}else{if(!("filter"in e))return Se(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new tk(a,l),d=s.targetId;t=new xS(d,c)}}return t}function dk(n,e){let t;if(e instanceof kc)t={update:Ob(n,e.key,e.value)};else if(e instanceof Pd)t={delete:Kg(n,e.key)};else if(e instanceof Qr)t={update:Ob(n,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof ZD))return Se(16599,{Vt:e.type});t={verify:Kg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof yc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ml)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof pl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Kf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Se(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:ck(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)})(n,e.precondition)),t}function mk(n,e){return n&&n.length>0?(st(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?$i(a.updateTime):$i(l);return c.isEqual(De.min())&&(c=$i(l)),new $D(c,a.transformResults||[])})(t,e)))):[]}function pk(n,e){return{documents:[DS(n,e.path)]}}function gk(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=DS(n,a);const l=(function(g){if(g.length!==0)return OS(Ci.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(w){return{field:Xo(w.field),direction:vk(w.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Qg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function _k(n){let e=hk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){st(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(b){const w=MS(b);return w instanceof Ci&&uS(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(b){return b.map((w=>(function(O){return new _c(Wo(O.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(b){let w;return w=typeof b=="object"?b.value:b,Rd(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(b){const w=!!b.before,R=b.values||[];return new Qf(R,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(b){const w=!b.before,R=b.values||[];return new Qf(R,w)})(t.endAt)),VD(e,a,c,l,d,"F",p,g)}function yk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function MS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Wo(t.unaryFilter.field);return qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Wo(t.unaryFilter.field);return qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Wo(t.unaryFilter.field);return qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Wo(t.unaryFilter.field);return qt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qt.create(Wo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ci.create(t.compositeFilter.filters.map((s=>MS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function vk(n){return ak[n]}function Ek(n){return ok[n]}function Tk(n){return lk[n]}function Xo(n){return{fieldPath:n.canonicalString()}}function Wo(n){return _n.fromServerFormat(n.fieldPath)}function OS(n){return n instanceof qt?(function(t){if(t.op==="=="){if(Tb(t.value))return{unaryFilter:{field:Xo(t.field),op:"IS_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tb(t.value))return{unaryFilter:{field:Xo(t.field),op:"IS_NOT_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xo(t.field),op:Ek(t.op),value:t.value}}})(n):n instanceof Ci?(function(t){const s=t.getFilters().map((a=>OS(a)));return s.length===1?s[0]:{compositeFilter:{op:Tk(t.op),filters:s}}})(n):Se(54877,{filter:n})}function bk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function PS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Rr{constructor(e,t,s,a,l=De.min(),c=De.min(),d=yn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wk{constructor(e){this.yt=e}}function Sk(n){const e=_k({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
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
 */class Ak{constructor(){this.Cn=new Ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Vr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Zt(_t.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Zt(_t.comparator)).toArray()}}/**
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
 */const Pb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VS=41943040;class jn{static withCacheSize(e){return new jn(e,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */jn.DEFAULT_COLLECTION_PERCENTILE=10,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jn.DEFAULT=new jn(VS,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jn.DISABLED=new jn(-1,0,0);/**
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
 */const Vb="LruGarbageCollector",xk=1048576;function Lb([n,e],[t,s]){const a=Qe(n,t);return a===0?Qe(e,s):a}class Rk{constructor(e){this.Ir=e,this.buffer=new Zt(Lb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Lb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(Vb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Il(t)?de(Vb,"Ignoring IndexedDB error during garbage collection: ",t):await Rl(t)}await this.Vr(3e5)}))}}class Nk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(xd.ce);const s=new Rk(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Pb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,d=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(g=Date.now(),Ko()<=Ge.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function Dk(n,e){return new Nk(n,e)}/**
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
 */class kk{constructor(){this.changes=new Xa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Mk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ok{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ic(s.mutation,a,Wn.empty(),Et.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ye()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ye()){const a=ka();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=$u();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=ka();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ye())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Hs();const c=nc(),d=(function(){return nc()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Qr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),ic(y.mutation,g,y.mutation.getFieldMask(),Et.now())):c.set(g.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new Mk(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=nc();let a=new Gt(((c,d)=>c-d)),l=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Wn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const b=(a.get(d.batchId)||Ye()).add(p);a=a.insert(d.batchId,b)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,b=yS();y.forEach((w=>{if(!l.has(w)){const R=SS(t.get(w),s.get(w));R!==null&&b.set(w,R),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ee.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return Ee.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(ka());let d=dc,p=l;return c.next((g=>ee.forEach(g,((y,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{p=p.insert(y,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ye()))).next((y=>({batchId:d,changes:_S(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((s=>{let a=$u();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=$u();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(p=>{const g=(function(b,w){return new Nl(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((b,w)=>{c=c.insert(b,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,Sn.newInvalidDocument(y)))}));let d=$u();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&ic(y.mutation,g,Wn.empty(),Et.now()),kd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
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
 */class Pk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:$i(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Sk(a.bundledQuery),readTime:$i(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new Gt(Ee.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ka();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=ka(),l=t.length+1,c=new Ee(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Gt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=ka(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=ka(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new ek(t,s));let l=this.qr.get(t);l===void 0&&(l=Ye(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class Lk{constructor(){this.sessionToken=yn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
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
 */class K_{constructor(){this.Qr=new Zt(on.$r),this.Ur=new Zt(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new on(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new on(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new Ee(new _t([])),s=new on(t,e),a=new on(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Ee(new _t([])),s=new on(t,e),a=new on(t,e+1);let l=Ye();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new on(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class on{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Ee.comparator(e.key,t.key)||Qe(e.Yr,t.Yr)}static Kr(e,t){return Qe(e.Yr,t.Yr)||Ee.comparator(e.key,t.key)}}/**
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
 */class jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Zt(on.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new JD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?j_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Zt(Qe);return t.forEach((a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Ee.isDocumentKey(l)||(l=l.child(""));const c=new on(new Ee(l),0);let d=new Zt(Qe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){st(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new on(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new on(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Uk{constructor(e){this.ri=e,this.docs=(function(){return new Gt(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():Sn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Sn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const c=t.path,d=new Ee(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||mD(dD(y),s)<=0||(a.has(y.key)||kd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Se(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zk(this)}getSize(e){return ee.resolve(this.size)}}class zk extends kk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Fk{constructor(e){this.persistence=e,this.si=new Xa((t=>F_(t)),B_),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.oi=0,this._i=new K_,this.targetCount=0,this.ai=gl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new gl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
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
 */class LS{constructor(e,t){this.ui={},this.overlays={},this.ci=new xd(0),this.li=!1,this.li=!0,this.hi=new Lk,this.referenceDelegate=e(this),this.Pi=new Fk(this),this.indexManager=new Ak,this.remoteDocumentCache=(function(a){return new Uk(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wk(t),this.Ii=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new jk(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const a=new Bk(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class Bk extends gD{constructor(e){super(),this.currentSequenceNumber=e}}class $_{constructor(e){this.persistence=e,this.Ri=new K_,this.Vi=null}static mi(e){return new $_(e)}get fi(){if(this.Vi)return this.Vi;throw Se(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=Ee.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,De.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Xf{constructor(e,t){this.persistence=e,this.pi=new Xa((s=>vD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Dk(this,t)}static mi(e,t){return new Xf(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,De.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cf(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class X_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ye(),a=Ye();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new X_(e,t.fromCache,s,a)}}/**
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
 */class qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return DR()?8:_D(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new qk;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Ko()<=Ge.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",$o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Ko()<=Ge.DEBUG&&de("QueryEngine","Query:",$o(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Ko()<=Ge.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",$o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):ee.resolve())}ys(e,t){if(Ab(t))return ee.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Yf(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ye(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Yf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return Ab(t)||a.isEqual(De.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Ko()<=Ge.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),$o(t)),this.vs(e,c,t,fD(a,dc)).next((d=>d)))}))}Ds(e,t){let s=new Zt(pS(e));return t.forEach(((a,l)=>{kd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Ko()<=Ge.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",$o(t)),this.ps.getDocumentsMatchingQuery(e,t,Vr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const W_="LocalStore",Gk=3e8;class Qk{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Gt(Qe),this.xs=new Xa((l=>F_(l)),B_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ok(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Yk(n,e,t,s){return new Qk(n,e,t,s)}async function jS(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ye();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function Kk(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const b=g.batch,w=b.keys();let R=ee.resolve();return w.forEach((O=>{R=R.next((()=>y.getEntry(p,O))).next((U=>{const F=g.docVersions.get(O);st(F!==null,48541),U.version.compareTo(F)<0&&(b.applyToRemoteDocument(U,g),U.isValidDocument()&&(U.setReadTime(g.commitVersion),y.addEntry(U)))}))})),R.next((()=>d.mutationQueue.removeMutationBatch(p,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ye();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function US(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function $k(n,e){const t=ke(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,b)=>{const w=a.get(b);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,b).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,b))));let R=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?R=R.withResumeToken(yn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,s)),a=a.insert(b,R),(function(U,F,re){return U.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Gk?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(w,R,y)&&d.push(t.Pi.updateTargetData(l,R))}));let p=Hs(),g=Ye();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(Xk(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(De.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((b=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function Xk(n,e,t){let s=Ye(),a=Ye();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Hs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(De.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):de(W_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function Wk(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=j_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zk(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Rr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Xg(n,e,t){const s=ke(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Il(c))throw c;de(W_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function jb(n,e,t){const s=ke(n);let a=De.min(),l=Ye();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const b=ke(p),w=b.xs.get(y);return w!==void 0?ee.resolve(b.Ms.get(w)):b.Pi.getTargetData(g,y)})(s,c,Ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:De.min(),t?l:Ye()))).next((d=>(Jk(s,jD(e),d),{documents:d,Qs:l})))))}function Jk(n,e,t){let s=n.Os.get(e)||De.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Ub{constructor(){this.activeTargetIds=HD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eM{constructor(){this.Mo=new Ub,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ub,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tM{Oo(e){}shutdown(){}}/**
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
 */const zb="ConnectivityMonitor";class Fb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(zb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(zb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yf=null;function Wg(){return yf===null?yf=(function(){return 268435456+Math.round(2147483648*Math.random())})():yf++,"0x"+yf.toString(16)}/**
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
 */const _g="RestConnection",nM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Hf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Wg(),d=this.zo(e,t.toUriEncodedString());de(_g,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Hr(g);return this.Jo(e,d,p,s,y).then((b=>(de(_g,`Received RPC '${e}' ${c}: `,b),b)),(b=>{throw cl(_g,`RPC '${e}' ${c} failed with error: `,b,"url: ",d,"request:",s),b}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=nM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class sM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const bn="WebChannelConnection";class rM extends iM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Wg();return new Promise(((d,p)=>{const g=new Bw;g.setWithCredentials(!0),g.listenOnce(qw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Af.NO_ERROR:const b=g.getResponseJson();de(bn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),d(b);break;case Af.TIMEOUT:de(bn,`RPC '${e}' ${c} timed out`),p(new he($.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const w=g.getStatus();if(de(bn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const U=(function(re){const se=re.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(se)>=0?se:$.UNKNOWN})(O.status);p(new he(U,O.message))}else p(new he($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new he($.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(bn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);de(bn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Wg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Qw(),d=Gw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");de(bn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const b=c.createWebChannel(y,p);this.I_(b);let w=!1,R=!1;const O=new sM({Yo:F=>{R?de(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(w||(de(bn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),w=!0),de(bn,`RPC '${e}' stream ${a} sending:`,F),b.send(F))},Zo:()=>b.close()}),U=(F,re,se)=>{F.listen(re,(le=>{try{se(le)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return U(b,Ku.EventType.OPEN,(()=>{R||(de(bn,`RPC '${e}' stream ${a} transport opened.`),O.o_())})),U(b,Ku.EventType.CLOSE,(()=>{R||(R=!0,de(bn,`RPC '${e}' stream ${a} transport closed`),O.a_(),this.E_(b))})),U(b,Ku.EventType.ERROR,(F=>{R||(R=!0,cl(bn,`RPC '${e}' stream ${a} transport errored. Name:`,F.name,"Message:",F.message),O.a_(new he($.UNAVAILABLE,"The operation could not be completed")))})),U(b,Ku.EventType.MESSAGE,(F=>{if(!R){const re=F.data[0];st(!!re,16349);const se=re,le=se?.error||se[0]?.error;if(le){de(bn,`RPC '${e}' stream ${a} received error:`,le);const ge=le.status;let ue=(function(C){const I=Ft[C];if(I!==void 0)return CS(I)})(ge),me=le.message;ue===void 0&&(ue=$.INTERNAL,me="Unknown error status: "+ge+" with message "+le.message),R=!0,O.a_(new he(ue,me)),b.close()}else de(bn,`RPC '${e}' stream ${a} received:`,re),O.u_(re)}})),U(d,Hw.STAT_EVENT,(F=>{F.stat===jg.PROXY?de(bn,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===jg.NOPROXY&&de(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function yg(){return typeof document<"u"?document:null}/**
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
 */class zS{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&de("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Bb="PersistentStream";class FS{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zS(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(qs(t.toString()),qs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new he($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return de(Bb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(de(Bb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aM extends FS{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?$i(c.readTime):De.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$g(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Hg(p)?{documents:pk(l,p)}:{query:gk(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=IS(l,c.resumeToken);const g=Qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=$f(l,c.snapshotVersion.toTimestamp());const g=Qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=yk(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$g(this.serializer),t.removeTarget=e,this.q_(t)}}class oM extends FS{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return st(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,st(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){st(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mk(e.writeResults,e.commitTime),s=$i(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$g(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>dk(this.serializer,s)))};this.q_(t)}}/**
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
 */class lM{}class uM extends lM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Yg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Yg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class cM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qs(t),this.aa=!1):de("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ha="RemoteStore";class hM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Wa(this)&&(de(Ha,"Restarting streams for network reachability change."),await(async function(p){const g=ke(p);g.Ea.add(4),await Oc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await jd(g)})(this))}))})),this.Ra=new cM(s,a)}}async function jd(n){if(Wa(n))for(const e of n.da)await e(!0)}async function Oc(n){for(const e of n.da)await e(!1)}function BS(n,e){const t=ke(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ty(t)?ey(t):Dl(t).O_()&&J_(t,e))}function Z_(n,e){const t=ke(n),s=Dl(t);t.Ia.delete(e),s.O_()&&qS(t,e),t.Ia.size===0&&(s.O_()?s.L_():Wa(t)&&t.Ra.set("Unknown"))}function J_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Dl(n).Y_(e)}function qS(n,e){n.Va.Ue(e),Dl(n).Z_(e)}function ey(n){n.Va=new rk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Dl(n).start(),n.Ra.ua()}function ty(n){return Wa(n)&&!Dl(n).x_()&&n.Ia.size>0}function Wa(n){return ke(n).Ea.size===0}function HS(n){n.Va=void 0}async function fM(n){n.Ra.set("Online")}async function dM(n){n.Ia.forEach(((e,t)=>{J_(n,e)}))}async function mM(n,e){HS(n),ty(n)?(n.Ra.ha(e),ey(n)):n.Ra.set("Unknown")}async function pM(n,e,t){if(n.Ra.set("Online"),e instanceof RS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){de(Ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wf(n,s)}else if(e instanceof If?n.Va.Ze(e):e instanceof xS?n.Va.st(e):n.Va.tt(e),!t.isEqual(De.min()))try{const s=await US(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(yn.EMPTY_BYTE_STRING,y.snapshotVersion)),qS(l,p);const b=new Rr(y.target,p,g,y.sequenceNumber);J_(l,b)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){de(Ha,"Failed to raise snapshot:",s),await Wf(n,s)}}async function Wf(n,e,t){if(!Il(e))throw e;n.Ea.add(1),await Oc(n),n.Ra.set("Offline"),t||(t=()=>US(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(Ha,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await jd(n)}))}function GS(n,e){return e().catch((t=>Wf(n,t,e)))}async function Ud(n){const e=ke(n),t=zr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:j_;for(;gM(e);)try{const a=await Wk(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,_M(e,a)}catch(a){await Wf(e,a)}QS(e)&&YS(e)}function gM(n){return Wa(n)&&n.Ta.length<10}function _M(n,e){n.Ta.push(e);const t=zr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function QS(n){return Wa(n)&&!zr(n).x_()&&n.Ta.length>0}function YS(n){zr(n).start()}async function yM(n){zr(n).ra()}async function vM(n){const e=zr(n);for(const t of n.Ta)e.ea(t.mutations)}async function EM(n,e,t){const s=n.Ta.shift(),a=G_.from(s,e,t);await GS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Ud(n)}async function TM(n,e){e&&zr(n).X_&&await(async function(s,a){if((function(c){return nk(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();zr(s).B_(),await GS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Ud(s)}})(n,e),QS(n)&&YS(n)}async function qb(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),de(Ha,"RemoteStore received new credentials");const s=Wa(t);t.Ea.add(3),await Oc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await jd(t)}async function bM(n,e){const t=ke(n);e?(t.Ea.delete(2),await jd(t)):e||(t.Ea.add(2),await Oc(t),t.Ra.set("Unknown"))}function Dl(n){return n.ma||(n.ma=(function(t,s,a){const l=ke(t);return l.sa(),new aM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:fM.bind(null,n),t_:dM.bind(null,n),r_:mM.bind(null,n),H_:pM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ty(n)?ey(n):n.Ra.set("Unknown")):(await n.ma.stop(),HS(n))}))),n.ma}function zr(n){return n.fa||(n.fa=(function(t,s,a){const l=ke(t);return l.sa(),new oM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yM.bind(null,n),r_:TM.bind(null,n),ta:vM.bind(null,n),na:EM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ud(n)):(await n.fa.stop(),n.Ta.length>0&&(de(Ha,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ny{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new ny(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(n,e){if(qs("AsyncQueue",`${e}: ${n}`),Il(n))return new he($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class il{static emptySet(e){return new il(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Ee.comparator(t.key,s.key):(t,s)=>Ee.comparator(t.key,s.key),this.keyedMap=$u(),this.sortedSet=new Gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof il)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new il;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Hb{constructor(){this.ga=new Gt(Ee.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Se(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _l{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new _l(e,t,il.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class wM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class SM{constructor(){this.queries=Gb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ke(t),l=a.queries;a.queries=Gb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new he($.ABORTED,"Firestore shutting down"))}}function Gb(){return new Xa((n=>mS(n)),Dd)}async function sy(n,e){const t=ke(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new wM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=iy(c,`Initialization of query '${$o(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ay(t)}async function ry(n,e){const t=ke(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function AM(n,e){const t=ke(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ay(t)}function CM(n,e,t){const s=ke(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ay(n){n.Ca.forEach((e=>{e.next()}))}var Zg,Qb;(Qb=Zg||(Zg={})).Ma="default",Qb.Cache="cache";class oy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new _l(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_l.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zg.Cache}}/**
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
 */class KS{constructor(e){this.key=e}}class $S{constructor(e){this.key=e}}class xM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ye(),this.mutatedKeys=Ye(),this.eu=pS(e),this.tu=new il(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Hb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,b)=>{const w=a.get(y),R=kd(this.query,b)?b:null,O=!!w&&this.mutatedKeys.has(w.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;w&&R?w.data.isEqual(R.data)?O!==U&&(s.track({type:3,doc:R}),F=!0):this.su(w,R)||(s.track({type:2,doc:R}),F=!0,(p&&this.eu(R,p)>0||g&&this.eu(R,g)<0)&&(d=!0)):!w&&R?(s.track({type:0,doc:R}),F=!0):w&&!R&&(s.track({type:1,doc:w}),F=!0,(p||g)&&(d=!0)),F&&(R?(c=c.add(R),l=U?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,b)=>(function(R,O){const U=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Rt:F})}};return U(R)-U(O)})(y.type,b.type)||this.eu(y.doc,b.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new _l(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ye(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new $S(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new KS(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ye();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _l.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ly="SyncEngine";class RM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IM{constructor(e){this.key=e,this.hu=!1}}class NM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Xa((d=>mS(d)),Dd),this.Iu=new Map,this.Eu=new Set,this.du=new Gt(Ee.comparator),this.Au=new Map,this.Ru=new K_,this.Vu={},this.mu=new Map,this.fu=gl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DM(n,e,t=!0){const s=tA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await XS(s,e,t,!0),a}async function kM(n,e){const t=tA(n);await XS(t,e,!0,!1)}async function XS(n,e,t,s){const a=await Zk(n.localStore,Ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await MM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&BS(n.remoteStore,a),d}async function MM(n,e,t,s,a){n.pu=(b,w,R)=>(async function(U,F,re,se){let le=F.view.ru(re);le.Cs&&(le=await jb(U.localStore,F.query,!1).then((({documents:D})=>F.view.ru(D,le))));const ge=se&&se.targetChanges.get(F.targetId),ue=se&&se.targetMismatches.get(F.targetId)!=null,me=F.view.applyChanges(le,U.isPrimaryClient,ge,ue);return Kb(U,F.targetId,me.au),me.snapshot})(n,b,w,R);const l=await jb(n.localStore,e,!0),c=new xM(e,l.Qs),d=c.ru(l.documents),p=Mc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Kb(n,t,g.au);const y=new RM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function OM(n,e,t){const s=ke(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Dd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Xg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Z_(s.remoteStore,a.targetId),Jg(s,a.targetId)})).catch(Rl)):(Jg(s,a.targetId),await Xg(s.localStore,a.targetId,!0))}async function PM(n,e){const t=ke(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Z_(t.remoteStore,s.targetId))}async function VM(n,e,t){const s=qM(n);try{const a=await(function(c,d){const p=ke(c),g=Et.now(),y=d.reduce(((R,O)=>R.add(O.key)),Ye());let b,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let O=Hs(),U=Ye();return p.Ns.getEntries(R,y).next((F=>{O=F,O.forEach(((re,se)=>{se.isValidDocument()||(U=U.add(re))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,O))).next((F=>{b=F;const re=[];for(const se of d){const le=WD(se,b.get(se.key).overlayedDocument);le!=null&&re.push(new Qr(se.key,le,aS(le.value.mapValue),kn.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,re,d)})).next((F=>{w=F;const re=F.applyToLocalDocumentSet(b,U);return p.documentOverlayCache.saveOverlays(R,F.batchId,re)}))})).then((()=>({batchId:w.batchId,changes:_S(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Gt(Qe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Pc(s,a.changes),await Ud(s.remoteStore)}catch(a){const l=iy(a,"Failed to persist write");t.reject(l)}}async function WS(n,e){const t=ke(n);try{const s=await $k(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(st(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?st(c.hu,14607):a.removedDocuments.size>0&&(st(c.hu,42227),c.hu=!1))})),await Pc(t,s,e)}catch(s){await Rl(s)}}function Yb(n,e,t){const s=ke(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=ke(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,b)=>{for(const w of b.Sa)w.va(d)&&(g=!0)})),g&&ay(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LM(n,e,t){const s=ke(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Gt(Ee.comparator);c=c.insert(l,Sn.newNoDocument(l,De.min()));const d=Ye().add(l),p=new Vd(De.min(),new Map,new Gt(Qe),c,d);await WS(s,p),s.du=s.du.remove(l),s.Au.delete(e),uy(s)}else await Xg(s.localStore,e,!1).then((()=>Jg(s,e,t))).catch(Rl)}async function jM(n,e){const t=ke(n),s=e.batch.batchId;try{const a=await Kk(t.localStore,e);JS(t,s,null),ZS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Pc(t,a)}catch(a){await Rl(a)}}async function UM(n,e,t){const s=ke(n);try{const a=await(function(c,d){const p=ke(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((b=>(st(b!==null,37113),y=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);JS(s,e,t),ZS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Pc(s,a)}catch(a){await Rl(a)}}function ZS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function JS(n,e,t){const s=ke(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Jg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||eA(n,s)}))}function eA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Z_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),uy(n))}function Kb(n,e,t){for(const s of t)s instanceof KS?(n.Ru.addReference(s.key,e),zM(n,s)):s instanceof $S?(de(ly,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||eA(n,s.key)):Se(19791,{wu:s})}function zM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(de(ly,"New document in limbo: "+t),n.Eu.add(s),uy(n))}function uy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Ee(_t.fromString(e)),s=n.fu.next();n.Au.set(s,new IM(t)),n.du=n.du.insert(t,s),BS(n.remoteStore,new Rr(Ki(Nd(t.path)),s,"TargetPurposeLimboResolution",xd.ce))}}async function Pc(n,e,t){const s=ke(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=X_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=ke(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>ee.forEach(g,(w=>ee.forEach(w.Es,(R=>y.persistence.referenceDelegate.addReference(b,w.targetId,R))).next((()=>ee.forEach(w.ds,(R=>y.persistence.referenceDelegate.removeReference(b,w.targetId,R)))))))))}catch(b){if(!Il(b))throw b;de(W_,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const R=y.Ms.get(w),O=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(O);y.Ms=y.Ms.insert(w,U)}}})(s.localStore,l))}async function FM(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){de(ly,"User change. New user:",e.toKey());const s=await jS(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new he($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pc(t,s.Ls)}}function BM(n,e){const t=ke(n),s=t.Au.get(e);if(s&&s.hu)return Ye().add(s.key);{let a=Ye();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function tA(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=WS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LM.bind(null,e),e.Pu.H_=AM.bind(null,e.eventManager),e.Pu.yu=CM.bind(null,e.eventManager),e}function qM(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UM.bind(null,e),e}class Zf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ld(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Yk(this.persistence,new Hk,e.initialUser,this.serializer)}Cu(e){return new LS($_.mi,this.serializer)}Du(e){return new eM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zf.provider={build:()=>new Zf};class HM extends Zf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){st(this.persistence.referenceDelegate instanceof Xf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ik(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?jn.withCacheSize(this.cacheSizeBytes):jn.DEFAULT;return new LS((s=>Xf.mi(s,t)),this.serializer)}}class e_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FM.bind(null,this.syncEngine),await bM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SM})()}createDatastore(e){const t=Ld(e.databaseInfo.databaseId),s=(function(l){return new rM(l)})(e.databaseInfo);return(function(l,c,d,p){return new uM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new hM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Yb(this.syncEngine,t,0)),(function(){return Fb.v()?new Fb:new tM})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const b=new NM(a,l,c,d,p,g);return y&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ke(t);de(Ha,"RemoteStore shutting down."),s.Ea.add(5),await Oc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}e_.provider={build:()=>new e_};/**
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
 */class cy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Fr="FirestoreClient";class GM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=wn.UNAUTHENTICATED,this.clientId=L_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{de(Fr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(de(Fr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=iy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function vg(n,e){n.asyncQueue.verifyOperationInProgress(),de(Fr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await jS(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function $b(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QM(n);de(Fr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>qb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>qb(e.remoteStore,a))),n._onlineComponents=e}async function QM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(Fr,"Using user provided OfflineComponentProvider");try{await vg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;cl("Error using user provided cache. Falling back to memory cache: "+t),await vg(n,new Zf)}}else de(Fr,"Using default OfflineComponentProvider"),await vg(n,new HM(void 0));return n._offlineComponents}async function nA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(Fr,"Using user provided OnlineComponentProvider"),await $b(n,n._uninitializedComponentsProvider._online)):(de(Fr,"Using default OnlineComponentProvider"),await $b(n,new e_))),n._onlineComponents}function YM(n){return nA(n).then((e=>e.syncEngine))}async function Jf(n){const e=await nA(n),t=e.eventManager;return t.onListen=DM.bind(null,e.syncEngine),t.onUnlisten=OM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PM.bind(null,e.syncEngine),t}function KM(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new cy({next:w=>{y.Nu(),c.enqueueAndForget((()=>ry(l,b)));const R=w.docs.has(d);!R&&w.fromCache?g.reject(new he($.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&p&&p.source==="server"?g.reject(new he($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(Nd(d.path),y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await Jf(n),n.asyncQueue,e,t,s))),s.promise}function $M(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new cy({next:w=>{y.Nu(),c.enqueueAndForget((()=>ry(l,b))),w.fromCache&&p.source==="server"?g.reject(new he($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(d,y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await Jf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */const sA="firestore.googleapis.com",Wb=!0;class Zb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sA,this.ssl=Wb}else this.host=e.host,this.ssl=e.ssl??Wb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xk)throw new he($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tD;switch(s.type){case"firstParty":return new rD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Xb.get(t);s&&(de("ComponentProvider","Removing Datastore"),Xb.delete(t),s.terminate())})(this),Promise.resolve()}}function XM(n,e,t,s={}){n=Dn(n,zd);const a=Hr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(T_(`https://${d}`),b_("Firestore",!0)),l.host!==sA&&l.host!==d&&cl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Zi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=wn.MOCK_USER;else{g=iw(s.mockUserToken,n._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new he($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new wn(b)}n._authCredentials=new nD(new Kw(g,y))}}/**
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
 */class Ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Rt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Dc(t,Rt._jsonSchema))return new Rt(e,s||null,new Ee(_t.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Ht("string",Rt._jsonSchemaVersion),referencePath:Ht("string")};class Mr extends Ks{constructor(e,t,s){super(e,t,Nd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Ee(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function Ot(n,e,...t){if(n=yt(n),$w("collection","path",e),n instanceof zd){const s=_t.fromString(e,...t);return hb(s),new Mr(n,null,s)}{if(!(n instanceof Rt||n instanceof Mr))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return hb(s),new Mr(n.firestore,null,s)}}function gt(n,e,...t){if(n=yt(n),arguments.length===1&&(e=L_.newId()),$w("doc","path",e),n instanceof zd){const s=_t.fromString(e,...t);return cb(s),new Rt(n,null,new Ee(s))}{if(!(n instanceof Rt||n instanceof Mr))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return cb(s),new Rt(n.firestore,n instanceof Mr?n.converter:null,new Ee(s))}}/**
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
 */const Jb="AsyncQueue";class e1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zS(this,"async_queue_retry"),this._c=()=>{const s=yg();s&&de(Jb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=yg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Us;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Il(e))throw e;de(Jb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,qs("INTERNAL UNHANDLED ERROR: ",t1(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=ny.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Se(47125,{Pc:t1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function t1(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function n1(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class ts extends zd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new e1,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e1(e),this._firestoreClient=void 0,await e}}}function WM(n,e){const t=typeof n=="object"?n:A_(),s=typeof n=="string"?n:Hf,a=bd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=ew("firestore");l&&XM(a,...l)}return a}function Vc(n){if(n._terminated)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZM(n),n._firestoreClient}function ZM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new bD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,iA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new GM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(yn.fromBase64String(e))}catch(t){throw new he($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dc(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:Ht("string",fi._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class Lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(Dc(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:Ht("string",Xi._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Wi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dc(e,Wi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wi(e.vectorValues);throw new he($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wi._jsonSchemaVersion="firestore/vectorValue/1.0",Wi._jsonSchema={type:Ht("string",Wi._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const JM=/^__.*__$/;class eO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new kc(e,this.data,t,this.fieldTransforms)}}class rA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ac:n})}}class Fd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Fd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ed(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aA(this.Ac)&&JM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ld(e)}Cc(e,t,s,a=!1){return new Fd({Ac:e,methodName:t,Dc:s,path:_n.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jc(n){const e=n._freezeSettings(),t=Ld(n._databaseId);return new tO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hy(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);py("Data must be an object, but it was:",c,s);const d=cA(s,c);let p,g;if(l.merge)p=new Wn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const b of l.mergeFields){const w=t_(e,b,t);if(!c.contains(w))throw new he($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);fA(y,w)||y.push(w)}p=new Wn(y),g=c.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=c.fieldTransforms;return new eO(new Un(d),p,g)}class Bd extends kl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bd}}function oA(n,e,t){return new Fd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fy extends kl{_toFieldTransform(e){return new H_(e.path,new yc)}isEqual(e){return e instanceof fy}}class dy extends kl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=oA(this,e,!0),s=this.vc.map((l=>Za(l,t))),a=new ml(s);return new H_(e.path,a)}isEqual(e){return e instanceof dy&&Zi(this.vc,e.vc)}}class my extends kl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=oA(this,e,!0),s=this.vc.map((l=>Za(l,t))),a=new pl(s);return new H_(e.path,a)}isEqual(e){return e instanceof my&&Zi(this.vc,e.vc)}}function lA(n,e,t,s){const a=n.Cc(1,e,t);py("Data must be an object, but it was:",a,s);const l=[],c=Un.empty();Gr(s,((p,g)=>{const y=gy(e,p,t);g=yt(g);const b=a.yc(y);if(g instanceof Bd)l.push(y);else{const w=Za(g,b);w!=null&&(l.push(y),c.set(y,w))}}));const d=new Wn(l);return new rA(c,d,a.fieldTransforms)}function uA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[t_(e,s,t)],p=[a];if(l.length%2!=0)throw new he($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(t_(e,l[w])),p.push(l[w+1]);const g=[],y=Un.empty();for(let w=d.length-1;w>=0;--w)if(!fA(g,d[w])){const R=d[w];let O=p[w];O=yt(O);const U=c.yc(R);if(O instanceof Bd)g.push(R);else{const F=Za(O,U);F!=null&&(g.push(R),y.set(R,F))}}const b=new Wn(g);return new rA(y,b,c.fieldTransforms)}function nO(n,e,t,s=!1){return Za(t,n.Cc(s?4:3,e))}function Za(n,e){if(hA(n=yt(n)))return py("Unsupported field value:",e,n),cA(n,e);if(n instanceof kl)return(function(s,a){if(!aA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Za(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Et.fromDate(s);return{timestampValue:$f(a.serializer,l)}}if(s instanceof Et){const l=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$f(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:IS(a.serializer,s._byteString)};if(s instanceof Rt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Y_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Wi)return(function(c,d){return{mapValue:{fields:{[sS]:{stringValue:rS},[Gf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return q_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Cd(s)}`)})(n,e)}function cA(n,e){const t={};return Zw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(n,((s,a)=>{const l=Za(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function hA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Xi||n instanceof fi||n instanceof Rt||n instanceof kl||n instanceof Wi)}function py(n,e,t){if(!hA(t)||!Xw(t)){const s=Cd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function t_(n,e,t){if((e=yt(e))instanceof Lc)return e._internalPath;if(typeof e=="string")return gy(n,e);throw ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const iO=new RegExp("[~\\*/\\[\\]]");function gy(n,e,t){if(e.search(iO)>=0)throw ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lc(...e.split("."))._internalPath}catch{throw ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ed(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new he($.INVALID_ARGUMENT,d+n+p)}function fA(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class dA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sO extends dA{data(){return super.data()}}function qd(n,e){return typeof e=="string"?gy(n,e):e instanceof Lc?e._internalPath:e._delegate._internalPath}/**
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
 */function mA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _y{}class yy extends _y{}function cn(n,e,...t){let s=[];e instanceof _y&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof vy)).length,d=l.filter((p=>p instanceof Hd)).length;if(c>1||c>0&&d>0)throw new he($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Hd extends yy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Hd(e,t,s)}_apply(e){const t=this._parse(e);return _A(e._query,t),new Ks(e.firestore,e.converter,Gg(e._query,t))}_parse(e){const t=jc(e.firestore);return(function(l,c,d,p,g,y,b){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new he($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){s1(b,y);const O=[];for(const U of b)O.push(i1(p,l,U));w={arrayValue:{values:O}}}else w=i1(p,l,b)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||s1(b,y),w=nO(d,c,b,y==="in"||y==="not-in");return qt.create(g,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(n,e,t){const s=e,a=qd("where",n);return Hd._create(a,s,t)}class vy extends _y{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ci.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)_A(c,p),c=Gg(c,p)})(e._query,t),new Ks(e.firestore,e.converter,Gg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ey extends yy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ey(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new he($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new he($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _c(l,c)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Nl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function pA(n,e="asc"){const t=e,s=qd("orderBy",n);return Ey._create(s,t)}class Ty extends yy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Ty(e,t,s)}_apply(e){return new Ks(e.firestore,e.converter,Yf(e._query,this._limit,this._limitType))}}function gA(n){return Ty._create("limit",n,"F")}function i1(n,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new he($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dS(e)&&t.indexOf("/")!==-1)throw new he($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(_t.fromString(t));if(!Ee.isDocumentKey(s))throw new he($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vb(n,new Ee(s))}if(t instanceof Rt)return vb(n,t._key);throw new he($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cd(t)}.`)}function s1(n,e){if(!Array.isArray(n)||n.length===0)throw new he($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _A(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new he($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rO{convertValue(e,t="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Gf].arrayValue?.values?.map((s=>Mt(s.doubleValue)));return new Wi(t)}convertGeoPoint(e){return new Xi(Mt(e.latitude),Mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(mc(e));default:return null}}convertTimestamp(e){const t=Lr(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=_t.fromString(e);st(PS(s),9688,{name:e});const a=new pc(s.get(1),s.get(3)),l=new Ee(s.popFirst(5));return a.isEqual(t)||qs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function by(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends dA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Va._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:Ht("string",Va._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Nf extends Va{data(e={}){return super.data(e)}}class La{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Wu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Nf(this._firestore,this._userDataWriter,s.key,s,new Wu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:aO(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=L_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}/**
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
 */function vc(n){n=Dn(n,Rt);const e=Dn(n.firestore,ts);return KM(Vc(e),n._key).then((t=>vA(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Ht("string",La._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class wy extends rO{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function sc(n){n=Dn(n,Ks);const e=Dn(n.firestore,ts),t=Vc(e),s=new wy(e);return mA(n._query),$M(t,n._query).then((a=>new La(e,s,n,a)))}function yA(n,e,t){n=Dn(n,Rt);const s=Dn(n.firestore,ts),a=by(n.converter,e,t);return Uc(s,[hy(jc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,kn.none())])}function kt(n,e,t,...s){n=Dn(n,Rt);const a=Dn(n.firestore,ts),l=jc(a);let c;return c=typeof(e=yt(e))=="string"||e instanceof Lc?uA(l,"updateDoc",n._key,e,t,s):lA(l,"updateDoc",n._key,e),Uc(a,[c.toMutation(n._key,kn.exists(!0))])}function td(n){return Uc(Dn(n.firestore,ts),[new Pd(n._key,kn.none())])}function Sy(n,e){const t=Dn(n.firestore,ts),s=gt(n),a=by(n.converter,e);return Uc(t,[hy(jc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then((()=>s))}function Mn(n,...e){n=yt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||n1(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(n1(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Rt)c=Dn(n.firestore,ts),d=Nd(n._key.path),l={next:p=>{e[s]&&e[s](vA(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Ks);c=Dn(p.firestore,ts),d=p._query;const g=new wy(c);l={next:y=>{e[s]&&e[s](new La(c,g,p,y))},error:e[s+1],complete:e[s+2]},mA(n._query)}return(function(g,y,b,w){const R=new cy(w),O=new oy(y,R,b);return g.asyncQueue.enqueueAndForget((async()=>sy(await Jf(g),O))),()=>{R.Nu(),g.asyncQueue.enqueueAndForget((async()=>ry(await Jf(g),O)))}})(Vc(c),d,a,l)}function Uc(n,e){return(function(s,a){const l=new Us;return s.asyncQueue.enqueueAndForget((async()=>VM(await YM(s),a,l))),l.promise})(Vc(n),e)}function vA(n,e,t){const s=t.docs.get(e._key),a=new wy(n);return new Va(n,a,e._key,s,new Wu(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class oO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jc(e)}set(e,t,s){this._verifyNotCommitted();const a=Eg(e,this._firestore),l=by(a.converter,t,s),c=hy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,kn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=Eg(e,this._firestore);let c;return c=typeof(t=yt(t))=="string"||t instanceof Lc?uA(this._dataReader,"WriteBatch.update",l._key,t,s,a):lA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,kn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Eg(e,this._firestore);return this._mutations=this._mutations.concat(new Pd(t._key,kn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new he($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eg(n,e){if((n=yt(n)).firestore!==e)throw new he($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function yl(){return new fy("serverTimestamp")}function ja(...n){return new dy("arrayUnion",n)}function Na(...n){return new my("arrayRemove",n)}/**
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
 */function r1(n){return Vc(n=Dn(n,ts)),new oO(n,(e=>Uc(n,e)))}(function(e,t=!0){(function(a){xl=a})($a),Fa(new Pr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ts(new iD(s.getProvider("auth-internal")),new aD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Qi(ab,ob,e),Qi(ab,ob,"esm2020")})();var a1={};const o1="@firebase/database",l1="1.1.0";/**
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
 */let EA="";function lO(n){EA=n}/**
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
 */class uO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),un(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class cO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const TA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uO(e)}}catch{}return new cO},Ma=TA("localStorage"),hO=TA("sessionStorage");/**
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
 */const sl=new Td("@firebase/database"),fO=(function(){let n=1;return function(){return n++}})(),bA=function(n){const e=qR(n),t=new UR;t.update(e);const s=t.digest();return E_.encodeByteArray(s)},zc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zc.apply(null,s):typeof s=="object"?e+=un(s):e+=s,e+=" "}return e};let rc=null,u1=!0;const dO=function(n,e){oe(!0,"Can't turn on custom loggers persistently."),sl.logLevel=Ge.VERBOSE,rc=sl.log.bind(sl)},gn=function(...n){if(u1===!0&&(u1=!1,rc===null&&hO.get("logging_enabled")===!0&&dO()),rc){const e=zc.apply(null,n);rc(e)}},Fc=function(n){return function(...e){gn(n,...e)}},n_=function(...n){const e="FIREBASE INTERNAL ERROR: "+zc(...n);sl.error(e)},Gs=function(...n){const e=`FIREBASE FATAL ERROR: ${zc(...n)}`;throw sl.error(e),new Error(e)},Bn=function(...n){const e="FIREBASE WARNING: "+zc(...n);sl.warn(e)},mO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vl="[MIN_NAME]",Ga="[MAX_NAME]",Ja=function(n,e){if(n===e)return 0;if(n===vl||e===Ga)return-1;if(e===vl||n===Ga)return 1;{const t=c1(n),s=c1(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gO=function(n,e){return n===e?0:n<e?-1:1},Hu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+un(e))},Ay=function(n){if(typeof n!="object"||n===null)return un(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=un(e[s]),t+=":",t+=Ay(n[e[s]]);return t+="}",t},wA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const SA=function(n){oe(!Gd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let b="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),b=b+w}return b.toLowerCase()},_O=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const EO=new RegExp("^-?(0*)\\d{1,10}$"),TO=-2147483648,bO=2147483647,c1=function(n){if(EO.test(n)){const e=Number(n);if(e>=TO&&e<=bO)return e}return null},Ml=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},wO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ac=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class SO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,hi(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(gn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class Df{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Df.OWNER="owner";/**
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
 */const Cy="5",AA="v",CA="s",xA="r",RA="f",IA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NA="ls",DA="p",i_="ac",kA="websocket",MA="long_polling";/**
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
 */class OA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function PA(n,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let s;if(e===kA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===MA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
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
 */class xO{constructor(){this.counters_={}}incrementCounter(e,t=1){ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yR(this.counters_)}}/**
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
 */const Tg={},bg={};function xy(n){const e=n.toString();return Tg[e]||(Tg[e]=new xO),Tg[e]}function RO(n,e){const t=n.toString();return bg[t]||(bg[t]=e()),bg[t]}/**
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
 */class IO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ml(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const h1="start",NO="close",DO="pLPCommand",kO="pRTLPCB",VA="id",LA="pw",jA="ser",MO="cb",OO="seg",PO="ts",VO="d",LO="dframe",UA=1870,zA=30,jO=UA-zA,UO=25e3,zO=3e4;class Zo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fc(e),this.stats_=xy(t),this.urlFn=p=>(this.appCheckToken&&(p[i_]=this.appCheckToken),PA(t,MA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new IO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zO)),pO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ry((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===h1)this.id=d,this.password=p;else if(c===NO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[h1]="t",s[jA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[AA]=Cy,this.transportSessionId&&(s[CA]=this.transportSessionId),this.lastSessionId&&(s[NA]=this.lastSessionId),this.applicationId&&(s[DA]=this.applicationId),this.appCheckToken&&(s[i_]=this.appCheckToken),typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(s[xA]=RA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zo.forceAllow_=!0}static forceDisallow(){Zo.forceDisallow_=!0}static isAvailable(){return Zo.forceAllow_?!0:!Zo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_O()&&!yO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=W1(t),a=wA(s,jO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[LO]="t",s[VA]=e,s[LA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=un(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ry{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fO(),window[DO+this.uniqueCallbackIdentifier]=e,window[kO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ry.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){gn("frame writing exception"),d.stack&&gn(d.stack),gn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VA]=this.myID,e[LA]=this.myPW,e[jA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zA+s.length<=UA;){const c=this.pendingSegs.shift();s=s+"&"+OO+a+"="+c.seg+"&"+PO+a+"="+c.ts+"&"+VO+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(UO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{gn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const FO=16384,BO=45e3;let nd=null;typeof MozWebSocket<"u"?nd=MozWebSocket:typeof WebSocket<"u"&&(nd=WebSocket);class Ti{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fc(this.connId),this.stats_=xy(t),this.connURL=Ti.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[AA]=Cy,typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(c[xA]=RA),t&&(c[CA]=t),s&&(c[NA]=s),a&&(c[i_]=a),l&&(c[DA]=l),PA(e,kA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;NR(),this.mySock=new nd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&nd!==null&&!Ti.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=cc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wA(t,FO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ti.responsesRequiredToBeHealthy=2;Ti.healthyTimeout=3e4;/**
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
 */class Ec{static get ALL_TRANSPORTS(){return[Zo,Ti]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ti&&Ti.isAvailable();let s=t&&!Ti.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ti];else{const a=this.transports_=[];for(const l of Ec.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ec.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ec.globalTransportInitialized_=!1;/**
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
 */const qO=6e4,HO=5e3,GO=10*1024,QO=100*1024,wg="t",f1="d",YO="s",d1="r",KO="e",m1="o",p1="a",g1="n",_1="p",$O="h";class XO{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fc("c:"+this.id+":"),this.transportManager_=new Ec(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ac(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wg in e){const t=e[wg];t===p1?this.upgradeIfSecondaryHealthy_():t===d1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===m1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:p1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Hu(wg,e);if(f1 in e){const s=e[f1];if(t===$O){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===g1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===YO?this.onConnectionShutdown_(s):t===d1?this.onReset_(s):t===KO?n_("Server Error: "+s):t===m1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):n_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cy!==s&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ac(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ac(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class FA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class BA{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class id extends BA{static getInstance(){return new id}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!w_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const y1=32,v1=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new ot("")}function je(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Br(n){return n.pieces_.length-n.pieceNum_}function mt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function Iy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function WO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Tc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function Pt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ot)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ot(t,0)}function ze(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=je(n),s=je(e);if(t===null)return e;if(t===s)return zn(mt(n),mt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ZO(n,e){const t=Tc(n,0),s=Tc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ja(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ny(n,e){if(Br(n)!==Br(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Br(n)>Br(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class JO{constructor(e,t){this.errorPrefix_=t,this.parts_=Tc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ed(this.parts_[s]);HA(this)}}function e4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ed(e),HA(n)}function t4(n){const e=n.parts_.pop();n.byteLength_-=Ed(e),n.parts_.length>0&&(n.byteLength_-=1)}function HA(n){if(n.byteLength_>v1)throw new Error(n.errorPrefix_+"has a key path longer than "+v1+" bytes ("+n.byteLength_+").");if(n.parts_.length>y1)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y1+") or object contains a cycle "+Ia(n))}function Ia(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Dy extends BA{static getInstance(){return new Dy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gu=1e3,n4=300*1e3,E1=30*1e3,i4=1.3,s4=3e4,r4="server_kill",T1=3;class zs extends FA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=zs.nextPersistentConnectionId_++,this.log_=Fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gu,this.maxReconnectDelay_=n4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&id.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(un(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Os,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;zs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ns(e,"w")){const s=ol(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=LR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+un(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):n_("Unrecognized action received from server: "+un(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s4&&(this.reconnectDelay_=Gu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*i4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+zs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(b){oe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(b)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?gn("getToken() completed but was canceled"):(gn("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=w&&w.token,d=new XO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{Bn(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(r4)},l))}catch(b){this.log_("Failed to get token: "+b),c||(this.repoInfo_.nodeAdmin&&Bn(b),p())}}}interrupt(e){gn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Of(this.interruptReasons_)&&(this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ay(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ot(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){gn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=T1&&(this.reconnectDelay_=E1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){gn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=T1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+EA.replace(/\./g,"-")]=1,w_()?e["framework.cordova"]=1:sw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=id.getInstance().currentlyOnline();return Of(this.interruptReasons_)&&e}}zs.nextPersistentConnectionId_=0;zs.nextConnectionId_=0;/**
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
 */class Fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Fe(e,t)}}/**
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
 */class Qd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Fe(vl,e),a=new Fe(vl,t);return this.compare(s,a)!==0}minPost(){return Fe.MIN}}/**
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
 */let vf;class GA extends Qd{static get __EMPTY_NODE(){return vf}static set __EMPTY_NODE(e){vf=e}compare(e,t){return Ja(e.name,t.name)}isDefinedOn(e){throw Sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(Ga,vf)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,vf)}toString(){return".key"}}const rl=new GA;/**
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
 */class Ef{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??Fn.EMPTY_NODE,this.right=l??Fn.EMPTY_NODE}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Fn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0;ln.BLACK=!1;class a4{copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fn{constructor(e,t=Fn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Fn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new Fn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ef(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ef(this.root_,null,this.comparator_,!0,e)}}Fn.EMPTY_NODE=new a4;/**
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
 */function o4(n,e){return Ja(n.name,e.name)}function ky(n,e){return Ja(n,e)}/**
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
 */let s_;function l4(n){s_=n}const QA=function(n){return typeof n=="number"?"number:"+SA(n):"string:"+n},YA=function(n){if(n.isLeafNode()){const e=n.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ns(e,".sv"),"Priority must be a string or number.")}else oe(n===s_||n.isEmpty(),"priority of unexpected type.");oe(n===s_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let b1;class an{static set __childrenNodeConstructor(e){b1=e}static get __childrenNodeConstructor(){return b1}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ze(e)?this:je(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=je(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(oe(s!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(mt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+QA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=SA(this.value_):e+=this.value_,this.lazyHash_=bA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(s);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let KA,$A;function u4(n){KA=n}function c4(n){$A=n}class h4 extends Qd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ja(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(Ga,new an("[PRIORITY-POST]",$A))}makePost(e,t){const s=KA(e);return new Fe(t,new an("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new h4;/**
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
 */const f4=Math.log(2);class d4{constructor(e){const t=l=>parseInt(Math.log(l)/f4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sd=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let b,w;if(y===0)return null;if(y===1)return b=n[p],w=t?t(b):b,new ln(w,b.node,ln.BLACK,null,null);{const R=parseInt(y/2,10)+p,O=a(p,R),U=a(R+1,g);return b=n[R],w=t?t(b):b,new ln(w,b.node,ln.BLACK,O,U)}},l=function(p){let g=null,y=null,b=n.length;const w=function(O,U){const F=b-O,re=b;b-=O;const se=a(F+1,re),le=n[F],ge=t?t(le):le;R(new ln(ge,le.node,U,null,se))},R=function(O){g?(g.left=O,g=O):(y=O,g=O)};for(let O=0;O<p.count;++O){const U=p.nextBitIsOne(),F=Math.pow(2,p.count-(O+1));U?w(F,ln.BLACK):(w(F,ln.BLACK),w(F,ln.RED))}return y},c=new d4(n.length),d=l(c);return new Fn(s||e,d)};/**
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
 */let Sg;const Yo={};class js{static get Default(){return oe(Yo&&At,"ChildrenNode.ts has not been loaded"),Sg=Sg||new js({".priority":Yo},{".priority":At}),Sg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ol(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fn?t:null}hasIndex(e){return ns(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==rl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Fe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=sd(s,e.getCompare()):d=Yo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new js(y,g)}addToIndexes(e,t){const s=Pf(this.indexes_,(a,l)=>{const c=ol(this.indexSet_,l);if(oe(c,"Missing index implementation for "+l),a===Yo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Fe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),sd(d,c.getCompare())}else return Yo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Fe(e.name,d))),p.insert(e,e.node)}});return new js(s,this.indexSet_)}removeFromIndexes(e,t){const s=Pf(this.indexes_,a=>{if(a===Yo)return a;{const l=t.get(e.name);return l?a.remove(new Fe(e.name,l)):a}});return new js(s,this.indexSet_)}}/**
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
 */let Qu;class Ie{static get EMPTY_NODE(){return Qu||(Qu=new Ie(new Fn(ky),null,js.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&YA(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qu}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qu:t}}getChild(e){const t=je(e);return t===null?this:this.getImmediateChild(t).getChild(mt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Fe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Qu:this.priorityNode_;return new Ie(a,c,l)}}updateChild(e,t){const s=je(e);if(s===null)return t;{oe(je(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(mt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(At,(c,d)=>{t[c]=d.val(e),s++,l&&Ie.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+QA(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":bA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Fe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Fe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===rl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),a=t.getIterator(At);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===rl?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m4 extends Ie{constructor(){super(new Fn(ky),Ie.EMPTY_NODE,js.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const Bc=new m4;Object.defineProperties(Fe,{MIN:{value:new Fe(vl,Ie.EMPTY_NODE)},MAX:{value:new Fe(Ga,Bc)}});GA.__EMPTY_NODE=Ie.EMPTY_NODE;an.__childrenNodeConstructor=Ie;l4(Bc);c4(Bc);/**
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
 */const p4=!0;function Bt(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,Bt(e))}if(!(n instanceof Array)&&p4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Bt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Fe(c,p)))}}),t.length===0)return Ie.EMPTY_NODE;const l=sd(t,o4,c=>c.name,ky);if(s){const c=sd(t,At.getCompare());return new Ie(l,Bt(e),new js({".priority":c},{".priority":At}))}else return new Ie(l,Bt(e),js.Default)}else{let t=Ie.EMPTY_NODE;return Cn(n,(s,a)=>{if(ns(n,s)&&s.substring(0,1)!=="."){const l=Bt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Bt(e))}}u4(Bt);/**
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
 */class g4 extends Qd{constructor(e){super(),this.indexPath_=e,oe(!ze(e)&&je(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ja(e.name,t.name):l}makePost(e,t){const s=Bt(e),a=Ie.EMPTY_NODE.updateChild(this.indexPath_,s);return new Fe(t,a)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new Fe(Ga,e)}toString(){return Tc(this.indexPath_,0).join("/")}}/**
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
 */class _4 extends Qd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ja(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const s=Bt(e);return new Fe(t,s)}toString(){return".value"}}const y4=new _4;/**
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
 */function XA(n){return{type:"value",snapshotNode:n}}function El(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function v4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class My{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){oe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(bc(t,d)):oe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(El(t,s)):c.trackChildChange(wc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(At,(a,l)=>{t.hasChild(a)||s.trackChildChange(bc(a,l))}),t.isLeafNode()||t.forEachChild(At,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(wc(a,l,c))}else s.trackChildChange(El(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Sc{constructor(e){this.indexedFilter_=new My(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sc.getStartPost_(e),this.endPost_=Sc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Fe(t,s))||(s=Ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Ie.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Ie.EMPTY_NODE);const l=this;return t.forEachChild(At,(c,d)=>{l.matches(new Fe(c,d))||(a=a.updateImmediateChild(c,Ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class E4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Fe(t,s))||(s=Ie.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Ie.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Ie.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const b=this.index_.getCompare();c=(w,R)=>b(R,w)}else c=this.index_.getCompare();const d=e;oe(d.numChildren()===this.limit_,"");const p=new Fe(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const b=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,p);if(y&&!s.isEmpty()&&R>=0)return l?.trackChildChange(wc(t,s,b)),d.updateImmediateChild(t,s);{l?.trackChildChange(bc(t,b));const U=d.updateImmediateChild(t,Ie.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(El(w.name,w.node)),U.updateImmediateChild(w.name,w.node)):U}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(bc(g.name,g.node)),l.trackChildChange(El(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Ie.EMPTY_NODE)):e}}/**
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
 */class Oy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vl}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ga}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Oy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function T4(n){return n.loadsAllData()?new My(n.getIndex()):n.hasLimit()?new E4(n):new Sc(n)}function w1(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===y4?t="$value":n.index_===rl?t="$key":(oe(n.index_ instanceof g4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=un(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=un(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+un(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=un(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+un(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function S1(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
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
 */class rd extends FA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=rd.getListenId_(e,s),d={};this.listens_[c]=d;const p=w1(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let b=y;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),ol(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=rd.getListenId_(e,t);delete this.listens_[s]}get(e){const t=w1(e._queryParams),s=e._path.toString(),a=new Os;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Al(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=cc(d.responseText)}catch{Bn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Bn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
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
 */class b4{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ad(){return{value:null,children:new Map}}function Ol(n,e,t){if(ze(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=je(e);n.children.has(s)||n.children.set(s,ad());const a=n.children.get(s);e=mt(e),Ol(a,e,t)}}function r_(n,e){if(ze(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(At,(s,a)=>{Ol(n,new ot(s),a)}),r_(n,e)}}else if(n.children.size>0){const t=je(e);return e=mt(e),n.children.has(t)&&r_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function a_(n,e,t){n.value!==null?t(e,n.value):w4(n,(s,a)=>{const l=new ot(e.toString()+"/"+s);a_(a,l,t)})}function w4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class S4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Cn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const A1=10*1e3,A4=30*1e3,C4=300*1e3;class x4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new S4(e);const s=A1+(A4-A1)*Math.random();ac(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ns(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ac(this.reportStats_.bind(this),Math.floor(Math.random()*2*C4))}}/**
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
 */var wi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wi||(wi={}));function WA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Py(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class od{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=wi.ACK_USER_WRITE,this.source=WA()}operationForChild(e){if(ze(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new od(nt(),t,this.revert)}}else return oe(je(this.path)===e,"operationForChild called for unrelated child."),new od(mt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ac{constructor(e,t){this.source=e,this.path=t,this.type=wi.LISTEN_COMPLETE}operationForChild(e){return ze(this.path)?new Ac(this.source,nt()):new Ac(this.source,mt(this.path))}}/**
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
 */class Qa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=wi.OVERWRITE}operationForChild(e){return ze(this.path)?new Qa(this.source,nt(),this.snap.getImmediateChild(e)):new Qa(this.source,mt(this.path),this.snap)}}/**
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
 */class Cc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=wi.MERGE}operationForChild(e){if(ze(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new Qa(this.source,nt(),t.value):new Cc(this.source,nt(),t)}else return oe(je(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cc(this.source,mt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ya{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ze(e))return this.isFullyInitialized()&&!this.filtered_;const t=je(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class R4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function I4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(v4(c.childName,c.snapshotNode))}),Yu(n,a,"child_removed",e,s,t),Yu(n,a,"child_added",e,s,t),Yu(n,a,"child_moved",l,s,t),Yu(n,a,"child_changed",e,s,t),Yu(n,a,"value",e,s,t),a}function Yu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>D4(n,d,p)),c.forEach(d=>{const p=N4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function N4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function D4(n,e,t){if(e.childName==null||t.childName==null)throw Sl("Should only compare child_ events.");const s=new Fe(e.childName,e.snapshotNode),a=new Fe(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
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
 */function Yd(n,e){return{eventCache:n,serverCache:e}}function oc(n,e,t,s){return Yd(new Ya(e,t,s),n.serverCache)}function ZA(n,e,t,s){return Yd(n.eventCache,new Ya(e,t,s))}function o_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ka(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ag;const k4=()=>(Ag||(Ag=new Fn(gO)),Ag);class vt{static fromObject(e){let t=new vt(null);return Cn(e,(s,a)=>{t=t.set(new ot(s),a)}),t}constructor(e,t=k4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(ze(e))return null;{const s=je(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(mt(e),t);return l!=null?{path:Pt(new ot(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ze(e))return this;{const t=je(e),s=this.children.get(t);return s!==null?s.subtree(mt(e)):new vt(null)}}set(e,t){if(ze(e))return new vt(t,this.children);{const s=je(e),l=(this.children.get(s)||new vt(null)).set(mt(e),t),c=this.children.insert(s,l);return new vt(this.value,c)}}remove(e){if(ze(e))return this.children.isEmpty()?new vt(null):new vt(null,this.children);{const t=je(e),s=this.children.get(t);if(s){const a=s.remove(mt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new vt(null):new vt(this.value,l)}else return this}}get(e){if(ze(e))return this.value;{const t=je(e),s=this.children.get(t);return s?s.get(mt(e)):null}}setTree(e,t){if(ze(e))return t;{const s=je(e),l=(this.children.get(s)||new vt(null)).setTree(mt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new vt(this.value,c)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Pt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(ze(e))return null;{const l=je(e),c=this.children.get(l);return c?c.findOnPath_(mt(e),Pt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,s){if(ze(e))return this;{this.value&&s(t,this.value);const a=je(e),l=this.children.get(a);return l?l.foreachOnPath_(mt(e),Pt(t,a),s):new vt(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Pt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new vt(null))}}function lc(n,e,t){if(ze(e))return new Ai(new vt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=zn(a,e);return l=l.updateChild(c,t),new Ai(n.writeTree_.set(a,l))}else{const a=new vt(t),l=n.writeTree_.setTree(e,a);return new Ai(l)}}}function C1(n,e,t){let s=n;return Cn(t,(a,l)=>{s=lc(s,Pt(e,a),l)}),s}function x1(n,e){if(ze(e))return Ai.empty();{const t=n.writeTree_.setTree(e,new vt(null));return new Ai(t)}}function l_(n,e){return eo(n,e)!=null}function eo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function R1(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,a)=>{e.push(new Fe(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Fe(s,a.value))}),e}function Or(n,e){if(ze(e))return n;{const t=eo(n,e);return t!=null?new Ai(new vt(t)):new Ai(n.writeTree_.subtree(e))}}function u_(n){return n.writeTree_.isEmpty()}function Tl(n,e){return JA(nt(),n.writeTree_,e)}function JA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=JA(Pt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Pt(n,".priority"),s)),t}}/**
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
 */function Ly(n,e){return iC(e,n)}function M4(n,e,t,s,a){oe(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=lc(n.visibleWrites,e,t)),n.lastWriteId=s}function O4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function P4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&V4(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return L4(n),!0;if(s.snap)n.visibleWrites=x1(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=x1(n.visibleWrites,Pt(s.path,p))})}return!0}else return!1}function V4(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Pt(n.path,t),e))return!0;return!1}function L4(n){n.visibleWrites=eC(n.allWrites,j4,nt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function j4(n){return n.visible}function eC(n,e,t){let s=Ai.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=zn(t,c),s=lc(s,d,l.snap)):di(c,t)&&(d=zn(c,t),s=lc(s,nt(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=zn(t,c),s=C1(s,d,l.children);else if(di(c,t))if(d=zn(c,t),ze(d))s=C1(s,nt(),l.children);else{const p=ol(l.children,je(d));if(p){const g=p.getChild(mt(d));s=lc(s,nt(),g)}}}else throw Sl("WriteRecord should have .snap or .children")}}return s}function tC(n,e,t,s,a){if(!s&&!a){const l=eo(n.visibleWrites,e);if(l!=null)return l;{const c=Or(n.visibleWrites,e);if(u_(c))return t;if(t==null&&!l_(c,nt()))return null;{const d=t||Ie.EMPTY_NODE;return Tl(c,d)}}}else{const l=Or(n.visibleWrites,e);if(!a&&u_(l))return t;if(!a&&t==null&&!l_(l,nt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=eC(n.allWrites,c,e),p=t||Ie.EMPTY_NODE;return Tl(d,p)}}}function U4(n,e,t){let s=Ie.EMPTY_NODE;const a=eo(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(At,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Or(n.visibleWrites,e);return t.forEachChild(At,(c,d)=>{const p=Tl(Or(l,new ot(c)),d);s=s.updateImmediateChild(c,p)}),R1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Or(n.visibleWrites,e);return R1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function z4(n,e,t,s,a){oe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Pt(e,t);if(l_(n.visibleWrites,l))return null;{const c=Or(n.visibleWrites,l);return u_(c)?a.getChild(t):Tl(c,a.getChild(t))}}function F4(n,e,t,s){const a=Pt(e,t),l=eo(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Or(n.visibleWrites,a);return Tl(c,s.getNode().getImmediateChild(t))}else return null}function B4(n,e){return eo(n.visibleWrites,e)}function q4(n,e,t,s,a,l,c){let d;const p=Or(n.visibleWrites,e),g=eo(p,nt());if(g!=null)d=g;else if(t!=null)d=Tl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],b=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let R=w.getNext();for(;R&&y.length<a;)b(R,s)!==0&&y.push(R),R=w.getNext();return y}else return[]}function H4(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function ld(n,e,t,s){return tC(n.writeTree,n.treePath,e,t,s)}function jy(n,e){return U4(n.writeTree,n.treePath,e)}function I1(n,e,t,s){return z4(n.writeTree,n.treePath,e,t,s)}function ud(n,e){return B4(n.writeTree,Pt(n.treePath,e))}function G4(n,e,t,s,a,l){return q4(n.writeTree,n.treePath,e,t,s,a,l)}function Uy(n,e,t){return F4(n.writeTree,n.treePath,e,t)}function nC(n,e){return iC(Pt(n.treePath,e),n.writeTree)}function iC(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Q4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,wc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,bc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,El(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,wc(s,e.snapshotNode,a.oldSnap));else throw Sl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Y4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const sC=new Y4;class zy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ya(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ka(this.viewCache_),l=G4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function K4(n){return{filter:n}}function $4(n,e){oe(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function X4(n,e,t,s,a){const l=new Q4;let c,d;if(t.type===wi.OVERWRITE){const g=t;g.source.fromUser?c=c_(n,e,g.path,g.snap,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!ze(g.path),c=cd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===wi.MERGE){const g=t;g.source.fromUser?c=Z4(n,e,g.path,g.children,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=h_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===wi.ACK_USER_WRITE){const g=t;g.revert?c=tP(n,e,g.path,s,a,l):c=J4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===wi.LISTEN_COMPLETE)c=eP(n,e,t.path,s,l);else throw Sl("Unknown operation type: "+t.type);const p=l.getChanges();return W4(e,c,p),{viewCache:c,changes:p}}function W4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=o_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(XA(o_(e)))}}function rC(n,e,t,s,a,l){const c=e.eventCache;if(ud(s,t)!=null)return e;{let d,p;if(ze(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ka(e),y=g instanceof Ie?g:Ie.EMPTY_NODE,b=jy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=ld(s,Ka(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=je(t);if(g===".priority"){oe(Br(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const b=I1(s,t,y,p);b!=null?d=n.filter.updatePriority(y,b):d=c.getNode()}else{const y=mt(t);let b;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=I1(s,t,c.getNode(),p);w!=null?b=c.getNode().getImmediateChild(g).updateChild(y,w):b=c.getNode().getImmediateChild(g)}else b=Uy(s,g,e.serverCache);b!=null?d=n.filter.updateChild(c.getNode(),g,b,y,a,l):d=c.getNode()}}return oc(e,d,c.isFullyInitialized()||ze(t),n.filter.filtersNodes())}}function cd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(ze(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),R,null)}else{const R=je(t);if(!p.isCompleteForPath(t)&&Br(t)>1)return e;const O=mt(t),F=p.getNode().getImmediateChild(R).updateChild(O,s);R===".priority"?g=y.updatePriority(p.getNode(),F):g=y.updateChild(p.getNode(),R,F,O,sC,null)}const b=ZA(e,g,p.isFullyInitialized()||ze(t),y.filtersNodes()),w=new zy(a,b,l);return rC(n,b,t,a,w,d)}function c_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new zy(a,e,l);if(ze(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=oc(e,g,!0,n.filter.filtersNodes());else{const b=je(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=oc(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=mt(t),R=d.getNode().getImmediateChild(b);let O;if(ze(w))O=s;else{const U=y.getCompleteChild(b);U!=null?Iy(w)===".priority"&&U.getChild(qA(w)).isEmpty()?O=U:O=U.updateChild(w,s):O=Ie.EMPTY_NODE}if(R.equals(O))p=e;else{const U=n.filter.updateChild(d.getNode(),b,O,w,y,c);p=oc(e,U,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function N1(n,e){return n.eventCache.isCompleteForChild(e)}function Z4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Pt(t,p);N1(e,je(y))&&(d=c_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Pt(t,p);N1(e,je(y))||(d=c_(n,d,y,g,a,l,c))}),d}function D1(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function h_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ze(t)?g=s:g=new vt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((b,w)=>{if(y.hasChild(b)){const R=e.serverCache.getNode().getImmediateChild(b),O=D1(n,R,w);p=cd(n,p,new ot(b),O,a,l,c,d)}}),g.children.inorderTraversal((b,w)=>{const R=!e.serverCache.isCompleteForChild(b)&&w.value===null;if(!y.hasChild(b)&&!R){const O=e.serverCache.getNode().getImmediateChild(b),U=D1(n,O,w);p=cd(n,p,new ot(b),U,a,l,c,d)}}),p}function J4(n,e,t,s,a,l,c){if(ud(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ze(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return cd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(ze(t)){let g=new vt(null);return p.getNode().forEachChild(rl,(y,b)=>{g=g.set(new ot(y),b)}),h_(n,e,t,g,a,l,d,c)}else return e}else{let g=new vt(null);return s.foreach((y,b)=>{const w=Pt(t,y);p.isCompleteForPath(w)&&(g=g.set(y,p.getNode().getChild(w)))}),h_(n,e,t,g,a,l,d,c)}}function eP(n,e,t,s,a){const l=e.serverCache,c=ZA(e,l.getNode(),l.isFullyInitialized()||ze(t),l.isFiltered());return rC(n,c,t,s,sC,a)}function tP(n,e,t,s,a,l){let c;if(ud(s,t)!=null)return e;{const d=new zy(s,e,a),p=e.eventCache.getNode();let g;if(ze(t)||je(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ld(s,Ka(e));else{const b=e.serverCache.getNode();oe(b instanceof Ie,"serverChildren would be complete if leaf node"),y=jy(s,b)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=je(t);let b=Uy(s,y,e.serverCache);b==null&&e.serverCache.isCompleteForChild(y)&&(b=p.getImmediateChild(y)),b!=null?g=n.filter.updateChild(p,y,b,mt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Ie.EMPTY_NODE,mt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ld(s,Ka(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||ud(s,nt())!=null,oc(e,g,c,n.filter.filtersNodes())}}/**
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
 */class nP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new My(s.getIndex()),l=T4(s);this.processor_=K4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Ie.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Ie.EMPTY_NODE,d.getNode(),null),y=new Ya(p,c.isFullyInitialized(),a.filtersNodes()),b=new Ya(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Yd(b,y),this.eventGenerator_=new R4(this.query_)}get query(){return this.query_}}function iP(n){return n.viewCache_.serverCache.getNode()}function sP(n,e){const t=Ka(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ze(e)&&!t.getImmediateChild(je(e)).isEmpty())?t.getChild(e):null}function k1(n){return n.eventRegistrations_.length===0}function rP(n,e){n.eventRegistrations_.push(e)}function M1(n,e,t){const s=[];if(t){oe(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function O1(n,e,t,s){e.type===wi.MERGE&&e.source.queryId!==null&&(oe(Ka(n.viewCache_),"We should always have a full cache before handling merges"),oe(o_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=X4(n.processor_,a,e,t,s);return $4(n.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,aC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function aP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(l,c)=>{s.push(El(l,c))}),t.isFullyInitialized()&&s.push(XA(t.getNode())),aC(n,s,t.getNode(),e)}function aC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return I4(n.eventGenerator_,e,t,a)}/**
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
 */let hd;class oP{constructor(){this.views=new Map}}function lP(n){oe(!hd,"__referenceConstructor has already been defined"),hd=n}function uP(){return oe(hd,"Reference.ts has not been loaded"),hd}function cP(n){return n.views.size===0}function Fy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),O1(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(O1(c,e,t,s));return l}}function hP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ld(t,a?s:null),p=!1;d?p=!0:s instanceof Ie?(d=jy(t,s),p=!1):(d=Ie.EMPTY_NODE,p=!1);const g=Yd(new Ya(d,p,!1),new Ya(s,a,!1));return new nP(e,g)}return c}function fP(n,e,t,s,a,l){const c=hP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),rP(c,t),aP(c,t)}function dP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=qr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(M1(g,t,s)),k1(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(M1(p,t,s)),k1(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!qr(n)&&l.push(new(uP())(e._repo,e._path)),{removed:l,events:c}}function oC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function al(n,e){let t=null;for(const s of n.views.values())t=t||sP(s,e);return t}function lC(n,e){if(e._queryParams.loadsAllData())return Kd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function uC(n,e){return lC(n,e)!=null}function qr(n){return Kd(n)!=null}function Kd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fd;function mP(n){oe(!fd,"__referenceConstructor has already been defined"),fd=n}function pP(){return oe(fd,"Reference.ts has not been loaded"),fd}let gP=1;class P1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vt(null),this.pendingWriteTree_=H4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cC(n,e,t,s,a){return M4(n.pendingWriteTree_,e,t,s,a),a?qc(n,new Qa(WA(),e,t)):[]}function Oa(n,e,t=!1){const s=O4(n.pendingWriteTree_,e);if(P4(n.pendingWriteTree_,e)){let l=new vt(null);return s.snap!=null?l=l.set(nt(),!0):Cn(s.children,c=>{l=l.set(new ot(c),!0)}),qc(n,new od(s.path,l,t))}else return[]}function $d(n,e,t){return qc(n,new Qa(Py(),e,t))}function _P(n,e,t){const s=vt.fromObject(t);return qc(n,new Cc(Py(),e,s))}function yP(n,e){return qc(n,new Ac(Py(),e))}function vP(n,e,t){const s=qy(n,t);if(s){const a=Hy(s),l=a.path,c=a.queryId,d=zn(l,e),p=new Ac(Vy(c),d);return Gy(n,l,p)}else return[]}function f_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||uC(c,e))){const p=dP(c,e,t,s);cP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,b=n.syncPointTree_.findOnPath(l,(w,R)=>qr(R));if(y&&!b){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const R=bP(w);for(let O=0;O<R.length;++O){const U=R[O],F=U.query,re=dC(n,U);n.listenProvider_.startListening(uc(F),dd(n,F),re.hashFn,re.onComplete)}}}!b&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(uc(e),null):g.forEach(w=>{const R=n.queryToTagMap.get(Xd(w));n.listenProvider_.stopListening(uc(w),R)}))}wP(n,g)}return d}function EP(n,e,t,s){const a=qy(n,s);if(a!=null){const l=Hy(a),c=l.path,d=l.queryId,p=zn(c,e),g=new Qa(Vy(d),p,t);return Gy(n,c,g)}else return[]}function TP(n,e,t,s){const a=qy(n,s);if(a){const l=Hy(a),c=l.path,d=l.queryId,p=zn(c,e),g=vt.fromObject(t),y=new Cc(Vy(d),p,g);return Gy(n,c,y)}else return[]}function V1(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,R)=>{const O=zn(w,a);l=l||al(R,O),c=c||qr(R)});let d=n.syncPointTree_.get(a);d?(c=c||qr(d),l=l||al(d,nt())):(d=new oP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Ie.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((R,O)=>{const U=al(O,nt());U&&(l=l.updateImmediateChild(R,U))}));const g=uC(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Xd(e);oe(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=SP();n.queryToTagMap.set(w,R),n.tagToQueryMap.set(R,w)}const y=Ly(n.pendingWriteTree_,a);let b=fP(d,e,t,y,l,p);if(!g&&!c&&!s){const w=lC(d,e);b=b.concat(AP(n,e,w))}return b}function By(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=zn(c,e),g=al(d,p);if(g)return g});return tC(a,e,l,t,!0)}function qc(n,e){return hC(e,n.syncPointTree_,null,Ly(n.pendingWriteTree_,nt()))}function hC(n,e,t,s){if(ze(n.path))return fC(n,e,t,s);{const a=e.get(nt());t==null&&a!=null&&(t=al(a,nt()));let l=[];const c=je(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=nC(s,c);l=l.concat(hC(d,p,g,y))}return a&&(l=l.concat(Fy(a,n,s,t))),l}}function fC(n,e,t,s){const a=e.get(nt());t==null&&a!=null&&(t=al(a,nt()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=nC(s,c),y=n.operationForChild(c);y&&(l=l.concat(fC(y,d,p,g)))}),a&&(l=l.concat(Fy(a,n,s,t))),l}function dC(n,e){const t=e.query,s=dd(n,t);return{hashFn:()=>(iP(e)||Ie.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?vP(n,t._path,s):yP(n,t._path);{const l=vO(a,t);return f_(n,t,null,l)}}}}function dd(n,e){const t=Xd(e);return n.queryToTagMap.get(t)}function Xd(n){return n._path.toString()+"$"+n._queryIdentifier}function qy(n,e){return n.tagToQueryMap.get(e)}function Hy(n){const e=n.indexOf("$");return oe(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function Gy(n,e,t){const s=n.syncPointTree_.get(e);oe(s,"Missing sync point for query tag that we're tracking");const a=Ly(n.pendingWriteTree_,e);return Fy(s,t,a,null)}function bP(n){return n.fold((e,t,s)=>{if(t&&qr(t))return[Kd(t)];{let a=[];return t&&(a=oC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function uc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pP())(n._repo,n._path):n}function wP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Xd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function SP(){return gP++}function AP(n,e,t){const s=e._path,a=dd(n,e),l=dC(n,t),c=n.listenProvider_.startListening(uc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)oe(!qr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,b)=>{if(!ze(g)&&y&&qr(y))return[Kd(y).query];{let w=[];return y&&(w=w.concat(oC(y).map(R=>R.query))),Cn(b,(R,O)=>{w=w.concat(O)}),w}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(uc(y),dd(n,y))}}return c}/**
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
 */class Qy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qy(t)}node(){return this.node_}}class Yy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new Yy(this.syncTree_,t)}node(){return By(this.syncTree_,this.path_)}}const CP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},L1=function(n,e,t){if(!n||typeof n!="object")return n;if(oe(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return RP(n[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+n)}},RP=function(n,e,t){n.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&oe(!1,"Unexpected increment value: "+s);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},IP=function(n,e,t,s){return Ky(e,new Yy(t,n),s)},mC=function(n,e,t){return Ky(n,new Qy(e),t)};function Ky(n,e,t){const s=n.getPriority().val(),a=L1(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=L1(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new an(d,Bt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new an(a))),c.forEachChild(At,(d,p)=>{const g=Ky(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
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
 */class $y{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xy(n,e){let t=e instanceof ot?e:new ot(e),s=n,a=je(t);for(;a!==null;){const l=ol(s.node.children,a)||{children:{},childCount:0};s=new $y(a,s,l),t=mt(t),a=je(t)}return s}function Pl(n){return n.node.value}function pC(n,e){n.node.value=e,d_(n)}function gC(n){return n.node.childCount>0}function NP(n){return Pl(n)===void 0&&!gC(n)}function Wd(n,e){Cn(n.node.children,(t,s)=>{e(new $y(t,n,s))})}function _C(n,e,t,s){t&&e(n),Wd(n,a=>{_C(a,e,!0)})}function DP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hc(n){return new ot(n.parent===null?n.name:Hc(n.parent)+"/"+n.name)}function d_(n){n.parent!==null&&kP(n.parent,n.name,n)}function kP(n,e,t){const s=NP(t),a=ns(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,d_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,d_(n))}/**
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
 */const MP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,Cg=10*1024*1024,Wy=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},yC=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},PP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yC(n)},vC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Gd(n)||n&&typeof n=="object"&&ns(n,".sv")},m_=function(n,e,t,s){Zd(ll(n,"value"),e,t)},Zd=function(n,e,t){const s=t instanceof ot?new JO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ia(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ia(s)+" with contents = "+e.toString());if(Gd(e))throw new Error(n+"contains "+e.toString()+" "+Ia(s));if(typeof e=="string"&&e.length>Cg/3&&Ed(e)>Cg)throw new Error(n+"contains a string greater than "+Cg+" utf8 bytes "+Ia(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Wy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ia(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e4(s,c),Zd(n,d,s),t4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ia(s)+" in addition to actual children.")}},VP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=Tc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Wy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZO);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&di(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},LP=function(n,e,t,s){const a=ll(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new ot(c);if(Zd(a,d,Pt(t,p)),Iy(p)===".priority"&&!vC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),VP(a,l)},jP=function(n,e,t){if(Gd(e))throw new Error(ll(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!vC(e))throw new Error(ll(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},EC=function(n,e,t,s){if(!yC(t))throw new Error(ll(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EC(n,e,t)},Jo=function(n,e){if(je(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!PP(t))throw new Error(ll(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class FP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ny(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function TC(n,e,t){Zy(n,t),bC(n,s=>Ny(s,e))}function Qs(n,e,t){Zy(n,t),bC(n,s=>di(s,e)||di(e,s))}function bC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(BP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function BP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();rc&&gn("event: "+t.toString()),Ml(s)}}}/**
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
 */const qP="repo_interrupt",HP=25;class GP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ad(),this.transactionQueueTree_=new $y,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QP(n,e,t){if(n.stats_=xy(n.repoInfo_),n.forceRestClient_||wO())n.server_=new rd(n.repoInfo_,(s,a,l,c)=>{j1(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>U1(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{un(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zs(n.repoInfo_,e,(s,a,l,c)=>{j1(n,s,a,l,c)},s=>{U1(n,s)},s=>{KP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=RO(n.repoInfo_,()=>new x4(n.stats_,n.server_)),n.infoData_=new b4,n.infoSyncTree_=new P1({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=$d(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),ev(n,"connected",!1),n.serverSyncTree_=new P1({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Qs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function YP(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jy(n){return CP({timestamp:YP(n)})}function j1(n,e,t,s,a){n.dataUpdateCount++;const l=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Pf(t,g=>Bt(g));c=TP(n.serverSyncTree_,l,p,a)}else{const p=Bt(t);c=EP(n.serverSyncTree_,l,p,a)}else if(s){const p=Pf(t,g=>Bt(g));c=_P(n.serverSyncTree_,l,p)}else{const p=Bt(t);c=$d(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Jd(n,l)),Qs(n.eventQueue_,d,c)}function U1(n,e){ev(n,"connected",e),e===!1&&XP(n)}function KP(n,e){Cn(e,(t,s)=>{ev(n,t,s)})}function ev(n,e,t){const s=new ot("/.info/"+e),a=Bt(t);n.infoData_.updateSnapshot(s,a);const l=$d(n.infoSyncTree_,s,a);Qs(n.eventQueue_,s,l)}function wC(n){return n.nextWriteId_++}function $P(n,e,t,s,a){tv(n,"set",{path:e.toString(),value:t,priority:s});const l=Jy(n),c=Bt(t,s),d=By(n.serverSyncTree_,e),p=mC(c,d,l),g=wC(n),y=cC(n.serverSyncTree_,e,p,g,!0);Zy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(w,R)=>{const O=w==="ok";O||Bn("set at "+e+" failed: "+w);const U=Oa(n.serverSyncTree_,g,!O);Qs(n.eventQueue_,e,U),bl(n,a,w,R)});const b=RC(n,e);Jd(n,b),Qs(n.eventQueue_,b,[])}function XP(n){tv(n,"onDisconnectEvents");const e=Jy(n),t=ad();a_(n.onDisconnect_,nt(),(a,l)=>{const c=IP(a,l,n.serverSyncTree_,e);Ol(t,a,c)});let s=[];a_(t,nt(),(a,l)=>{s=s.concat($d(n.serverSyncTree_,a,l));const c=RC(n,a);Jd(n,c)}),n.onDisconnect_=ad(),Qs(n.eventQueue_,nt(),s)}function WP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&r_(n.onDisconnect_,e),bl(n,t,s,a)})}function z1(n,e,t,s){const a=Bt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Ol(n.onDisconnect_,e,a),bl(n,s,l,c)})}function ZP(n,e,t,s,a){const l=Bt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Ol(n.onDisconnect_,e,l),bl(n,a,c,d)})}function JP(n,e,t,s){if(Of(t)){gn("onDisconnect().update() called with empty data.  Don't do anything."),bl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=Bt(d);Ol(n.onDisconnect_,Pt(e,c),p)}),bl(n,s,a,l)})}function eV(n,e,t){let s;je(e._path)===".info"?s=V1(n.infoSyncTree_,e,t):s=V1(n.serverSyncTree_,e,t),TC(n.eventQueue_,e._path,s)}function tV(n,e,t){let s;je(e._path)===".info"?s=f_(n.infoSyncTree_,e,t):s=f_(n.serverSyncTree_,e,t),TC(n.eventQueue_,e._path,s)}function nV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qP)}function tv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),gn(t,...e)}function bl(n,e,t,s){e&&Ml(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function SC(n,e,t){return By(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function nv(n,e=n.transactionQueueTree_){if(e||em(n,e),Pl(e)){const t=CC(n,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&iV(n,Hc(e),t)}else gC(e)&&Wd(e,t=>{nv(n,t)})}function iV(n,e,t){const s=t.map(g=>g.currentWriteId),a=SC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];oe(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=zn(e,y.path);l=l.updateChild(b,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{tv(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const b=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Oa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&b.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();em(n,Xy(n.transactionQueueTree_,e)),nv(n,n.transactionQueueTree_),Qs(n.eventQueue_,e,y);for(let w=0;w<b.length;w++)Ml(b[w])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{Bn("transaction at "+p.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}Jd(n,e)}},c)}function Jd(n,e){const t=AC(n,e),s=Hc(t),a=CC(n,t);return sV(n,a,s),s}function sV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=zn(t,p.path);let y=!1,b;if(oe(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,b=p.abortReason,a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=HP)y=!0,b="maxretry",a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=SC(n,p.path,c);p.currentInputSnapshot=w;const R=e[d].update(w.val());if(R!==void 0){Zd("transaction failed: Data returned ",R,p.path);let O=Bt(R);typeof R=="object"&&R!=null&&ns(R,".priority")||(O=O.updatePriority(w.getPriority()));const F=p.currentWriteId,re=Jy(n),se=mC(O,w,re);p.currentOutputSnapshotRaw=O,p.currentOutputSnapshotResolved=se,p.currentWriteId=wC(n),c.splice(c.indexOf(F),1),a=a.concat(cC(n.serverSyncTree_,p.path,se,p.currentWriteId,p.applyLocally)),a=a.concat(Oa(n.serverSyncTree_,F,!0))}else y=!0,b="nodata",a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0))}Qs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(b==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(b),!1,null))))}em(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ml(s[d]);nv(n,n.transactionQueueTree_)}function AC(n,e){let t,s=n.transactionQueueTree_;for(t=je(e);t!==null&&Pl(s)===void 0;)s=Xy(s,t),e=mt(e),t=je(e);return s}function CC(n,e){const t=[];return xC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function xC(n,e,t){const s=Pl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Wd(e,a=>{xC(n,a,t)})}function em(n,e){const t=Pl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,pC(e,t.length>0?t:void 0)}Wd(e,s=>{em(n,s)})}function RC(n,e){const t=Hc(AC(n,e)),s=Xy(n.transactionQueueTree_,e);return DP(s,a=>{xg(n,a)}),xg(n,s),_C(s,a=>{xg(n,a)}),t}function xg(n,e){const t=Pl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(oe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(oe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Oa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?pC(e,void 0):t.length=l+1,Qs(n.eventQueue_,Hc(e),a);for(let c=0;c<s.length;c++)Ml(s[c])}}/**
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
 */function rV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function aV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const F1=function(n,e){const t=oV(n),s=t.namespace;t.domain==="firebase.com"&&Gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new OA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ot(t.pathString)}},oV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(y,b)),y<b&&(a=rV(n.substring(y,b)));const w=aV(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const O=e.indexOf(".");s=e.substring(0,O).toLowerCase(),t=e.substring(O+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class lV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+un(this.snapshot.exportVal())}}class uV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return oe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Os;return WP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jo("OnDisconnect.remove",this._path);const e=new Os;return z1(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jo("OnDisconnect.set",this._path),m_("OnDisconnect.set",e,this._path);const t=new Os;return z1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Jo("OnDisconnect.setWithPriority",this._path),m_("OnDisconnect.setWithPriority",e,this._path),jP("OnDisconnect.setWithPriority",t);const s=new Os;return ZP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Jo("OnDisconnect.update",this._path),LP("OnDisconnect.update",e,this._path);const t=new Os;return JP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class iv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return ze(this._path)?null:Iy(this._path)}get ref(){return new Yr(this._repo,this._path)}get _queryIdentifier(){const e=S1(this._queryParams),t=Ay(e);return t==="{}"?"default":t}get _queryObject(){return S1(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof iv))return!1;const t=this._repo===e._repo,s=Ny(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+WO(this._path)}}class Yr extends iv{constructor(e,t){super(e,t,new Oy,!1)}get parent(){const e=qA(this._path);return e===null?null:new Yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class md{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ot(e),s=p_(this.ref,e);return new md(this._node.getChild(t),s,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new md(a,p_(this.ref,s),At)))}hasChild(e){const t=new ot(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ua(n,e){return n=yt(n),n._checkNotDeleted("ref"),e!==void 0?p_(n._root,e):n._root}function p_(n,e){return n=yt(n),je(n._path)===null?UP("child","path",e):EC("child","path",e),new Yr(n._repo,Pt(n._path,e))}function fV(n){return n=yt(n),new hV(n._repo,n._path)}function Rg(n){return Jo("remove",n._path),tm(n,null)}function tm(n,e){n=yt(n),Jo("set",n._path),m_("set",e,n._path);const t=new Os;return $P(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class sv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new lV("value",this,new md(e.snapshotNode,new Yr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uV(this,e,t):null}matches(e){return e instanceof sv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dV(n,e,t,s,a){const l=new cV(t,void 0),c=new sv(l);return eV(n._repo,n,c),()=>tV(n._repo,n,c)}function rv(n,e,t,s){return dV(n,"value",e)}lP(Yr);mP(Yr);/**
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
 */const mV="FIREBASE_DATABASE_EMULATOR_HOST",g_={};let pV=!1;function gV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Hr(l);n.repoInfo_=new OA(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function _V(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=F1(l,a),d=c.repoInfo,p;typeof process<"u"&&a1&&(p=a1[mV]),p?(l=`http://${p}?ns=${d.namespace}`,c=F1(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new AO(n.name,n.options,e);zP("Invalid Firebase Database URL",c),ze(c.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=vV(d,n,g,new SO(n,t));return new EV(y,n)}function yV(n,e){const t=g_[e];(!t||t[n.key]!==n)&&Gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),nV(n),delete t[n.key]}function vV(n,e,t,s){let a=g_[e.name];a||(a={},g_[e.name]=a);let l=a[n.toURLString()];return l&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new GP(n,pV,t,s),a[n.toURLString()]=l,l}class EV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yr(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gs("Cannot call "+e+" on a deleted database.")}}function TV(n=A_(),e){const t=bd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ew("database");s&&bV(t,...s)}return t}function bV(n,e,t,s={}){n=yt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Zi(s,l.repoInfo_.emulatorOptions))return;Gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Df(Df.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:iw(s.mockUserToken,n.app.options.projectId);c=new Df(d)}Hr(e)&&(T_(e),b_("Database",!0)),gV(l,a,s,c)}/**
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
 */function wV(n){lO($a),Fa(new Pr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return _V(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Qi(o1,l1,n),Qi(o1,l1,"esm2020")}zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),B1=n=>{const e=AV(n);return e.charAt(0).toUpperCase()+e.slice(1)},IC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),CV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=J.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>J.createElement("svg",{ref:p,...xV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:IC("lucide",a),...!l&&!CV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>J.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(n,e)=>{const t=J.forwardRef(({className:s,...a},l)=>J.createElement(RV,{ref:l,iconNode:e,className:IC(`lucide-${SV(B1(n))}`,`lucide-${n}`,s),...a}));return t.displayName=B1(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],NC=Ze("arrow-left",IV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],DV=Ze("ban",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],q1=Ze("bell",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],OV=Ze("check-check",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],av=Ze("check",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],LV=Ze("circle-check-big",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],UV=Ze("copy",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ig=Ze("corner-up-left",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],BV=Ze("crown",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],DC=Ze("ellipsis-vertical",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],GV=Ze("eraser",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],__=Ze("gamepad-2",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],KV=Ze("hand",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ov=Ze("loader-circle",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],H1=Ze("log-out",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],G1=Ze("message-circle",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],kC=Ze("message-square",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],e6=Ze("newspaper",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],n6=Ze("palette",t6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],s6=Ze("pin-off",i6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],nm=Ze("pin",r6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],lv=Ze("rotate-cw",a6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],l6=Ze("save",o6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],c6=Ze("scissors",u6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],f6=Ze("send",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],m6=Ze("shield-check",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g6=Ze("shield",p6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],y6=Ze("smile",_6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],uv=Ze("square-pen",v6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],pd=Ze("trash-2",E6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],y_=Ze("user-plus",T6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],MC=Ze("user-x",b6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],gd=Ze("users",w6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_d=Ze("x",S6),A6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},cv=lw(A6),yd=J2(cv),Re=WM(cv),za=TV(cv),C6=n=>{J.useEffect(()=>{if(!n)return;const e=Ua(za,`/status/${n.uid}`),t=gt(Re,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ua(za,".info/connected"),c=rv(l,d=>{if(d.val()===!1){kt(t,{state:"offline",last_changed:yl()});return}fV(e).set(s).then(()=>{tm(e,a),kt(t,{state:"online",last_changed:yl()})})});return()=>c()},[n])},im=(n,e)=>{const[t,s]=J.useState(null),a=yd.currentUser;return J.useEffect(()=>{if(!n||!a){s(null);return}const l=Mn(gt(Re,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(b=>({...b||{},...g,displayName:y||g.displayName}))}else s(null)}),c=Ua(za,`/status/${n}`),d=rv(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},x6=n=>{const[e,t]=J.useState(0);return J.useEffect(()=>{if(!n?.uid)return;const s=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),a=Mn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},R6=n=>{const[e,t]=J.useState(0);return J.useEffect(()=>{if(!n?.uid)return;const s=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),a=Mn(s,l=>{const c=l.docs.filter(g=>!g.data().chatDeletedFor?.includes(n.uid)).map(g=>g.data().users.find(y=>y!==n.uid));if(c.length===0){t(0);return}const d={},p=c.map(g=>{const y=[n.uid,g].sort().join("_"),b=cn(Ot(Re,`conversations/${y}/messages`),Tt("receiverId","==",n.uid),Tt("status","!=","read"));return Mn(b,w=>{d[y]=w.size;const R=Object.values(d).reduce((O,U)=>O+U,0);t(R)})});return()=>p.forEach(g=>g())});return()=>a()},[n]),e},I6=n=>{const e=J.useRef(n);J.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),J.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>0&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},N6=(n,e)=>{const[t,s]=J.useState(null);return J.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=cn(Ot(Re,"friendships"),Tt("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Mn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},D6=({text:n="Carregando..."})=>T.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gray-900 p-4 text-white text-center",children:[T.jsx(ov,{className:"animate-spin h-12 w-12 text-blue-400"}),T.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]}),k6=()=>{const[n,e]=J.useState(!1),[t,s]=J.useState(!1),a=async()=>{if(n)return;e(!0);const c=new Ps;try{const p=(await l2(yd,c)).user,g=gt(Re,"users",p.uid);(await vc(g)).exists()||await yA(g,{uid:p.uid,displayName:p.displayName,email:p.email,photoURL:p.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(d){console.error("Erro ao fazer login com Google:",d)}finally{e(!1)}},l=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return T.jsxs("div",{className:"flex flex-col h-full w-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/50 text-white animate-fade-in",children:[T.jsxs("nav",{className:"flex justify-between items-center p-4 backdrop-blur-sm bg-black/20 border-b border-white/10",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(kC,{className:"text-blue-400"}),T.jsx("h1",{className:"text-2xl font-bold",children:"ChatD"})]}),T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsx("button",{onClick:a,className:"px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Entrar no Chat"}),T.jsxs("button",{onClick:l,className:"relative px-4 py-2 text-sm font-semibold bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed",children:["SocialiD",t&&T.jsx("span",{className:"absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded",children:"Em Breve!"})]})]})]}),T.jsx("main",{className:"flex-grow flex items-center justify-center p-4",children:T.jsxs("div",{className:"text-center flex flex-col items-center",children:[T.jsx("h2",{className:"text-5xl font-extrabold mb-4",children:"Conecte-se. Converse. Jogue."}),T.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mb-8",children:"Bem-vindo ao ChatD, sua nova plataforma para conversas seguras e diversão. Faça login para começar a se conectar com seus amigos."}),T.jsxs("button",{onClick:a,disabled:n,className:"flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait",children:[n?T.jsx(ov,{className:"animate-spin w-6 h-6"}):T.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),n?"Entrando...":"Fazer Login com Google"]})]})})]})},M6=({user:n,onClose:e})=>n?T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),T.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),T.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),T.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,O6=({user:n,onClose:e})=>{const[t,s]=J.useState(n.recado||""),a=async()=>{const l=gt(Re,"users",n.uid);await kt(l,{recado:t}),e()};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),T.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),T.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},wl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),T.jsx("p",{className:"text-gray-400 mb-6",children:a}),T.jsxs("div",{className:"flex justify-center gap-4",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,P6=({currentUser:n})=>{const[e,t]=J.useState(""),[s,a]=J.useState([]),[l,c]=J.useState({}),[d,p]=J.useState(!1),[g,y]=J.useState(""),[b,w]=J.useState(""),R=async U=>{if(U.preventDefault(),e.trim()!==""){p(!0),y(""),w(""),a([]);try{const F=cn(Ot(Re,"users"),Tt("email","==",e.trim()),gA(1)),se=(await sc(F)).docs.map(le=>le.data())[0];if(se&&se.uid!==n.uid){a([se]);const le=cn(Ot(Re,"friendships"),Tt("users","in",[[n.uid,se.uid],[se.uid,n.uid]])),ue=(await sc(le)).docs[0];c({[se.uid]:ue?ue.data().status:"not_friends"})}else se&&se.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(F){y("Erro ao buscar. Tente novamente."),console.error(F)}finally{p(!1)}}},O=async U=>{try{const F=cn(Ot(Re,"friendships"),Tt("users","in",[[n.uid,U.uid],[U.uid,n.uid]])),re=await sc(F);if(!re.empty){const se=re.docs[0];se.data().status==="declined"&&await td(gt(Re,"friendships",se.id))}await Sy(Ot(Re,"friendships"),{users:[n.uid,U.uid],status:"pending",requestedBy:n.uid,createdAt:yl()}),c(se=>({...se,[U.uid]:"pending"}))}catch(F){y("Falha ao enviar pedido."),console.error(F)}};return T.jsxs("div",{className:"p-4",children:[T.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),T.jsxs("form",{onSubmit:R,className:"flex gap-2",children:[T.jsx("input",{type:"email",value:e,onChange:U=>t(U.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),T.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?T.jsx(ov,{className:"animate-spin"}):"Buscar"})]}),T.jsxs("div",{className:"mt-4 h-24",children:[g&&T.jsx("p",{className:"text-red-400",children:g}),b&&T.jsx("p",{className:"text-yellow-400",children:b}),s.map(U=>T.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:U.photoURL,alt:U.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:U.displayName})]}),T.jsxs("div",{children:[(l[U.uid]==="not_friends"||l[U.uid]==="declined")&&T.jsx("button",{onClick:()=>O(U),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[U.uid]==="pending"&&T.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[U.uid]==="accepted"&&T.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"})]})]},U.uid))]})]})},V6=({currentUser:n})=>{const[e,t]=J.useState([]);J.useEffect(()=>{if(!n?.uid)return;const a=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),l=Mn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(w=>w!==n.uid),b=await vc(gt(Re,"users",y));b.exists()&&d.push({id:p.id,...b.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await kt(gt(Re,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return T.jsxs("div",{className:"p-4",children:[T.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?T.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):T.jsx("ul",{className:"space-y-2",children:e.map(a=>T.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:a.displayName})]}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:T.jsx(av,{size:16})}),T.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:T.jsx(_d,{size:16})})]})]},a.id))})]})},L6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=im(n.friendId,n);return s?T.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[T.jsxs("div",{className:"flex items-center gap-4 relative",children:[T.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),T.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),T.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:T.jsx(pd,{size:18,className:"text-red-500"})})]}):T.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},j6=({currentUser:n,onSelectUser:e})=>{const[t,s]=J.useState([]),[a,l]=J.useState(null);J.useEffect(()=>{if(!n?.uid)return;const d=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),p=Mn(d,g=>{const y=g.docs.map(b=>({id:b.id,...b.data(),friendId:b.data().users.find(w=>w!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=gt(Re,"friendships",a.id);try{await td(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return T.jsxs("div",{className:"flex-grow overflow-y-auto",children:[T.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?T.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):T.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>T.jsx(L6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),T.jsx(wl,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Q1=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState([]),[d,p]=J.useState(null),[g,y]=J.useState({show:!1,x:0,y:0,chat:null});J.useEffect(()=>{if(!n?.uid)return;const F=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),re=Mn(F,ge=>{let ue=ge.docs.map(me=>({id:me.id,...me.data(),friendId:me.data().users.find(D=>D!==n.uid),isGroup:!1})).filter(me=>!me.chatDeletedFor?.includes(n.uid));ue.sort((me,D)=>{const C=me.pinnedBy?.includes(n.uid),I=D.pinnedBy?.includes(n.uid);return C&&!I?-1:!C&&I?1:0}),a(ue)}),se=cn(Ot(Re,"groups"),Tt("members","array-contains",n.uid)),le=Mn(se,ge=>{const ue=ge.docs.map(me=>{const D=me.data();return{id:me.id,...D,isGroup:!0,displayName:D.name,photoURL:`https://placehold.co/96x96/${D.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${D.name.charAt(0).toUpperCase()}`}});c(ue)});return()=>{re(),le()}},[n.uid]);const b=async F=>{if(!F||F.isGroup)return;const re=F.pinnedBy?.includes(n.uid),se=gt(Re,"friendships",F.id);await kt(se,{pinnedBy:re?Na(n.uid):ja(n.uid)})},w=async()=>{if(!d)return;const F=gt(Re,"friendships",d.id);await kt(F,{chatDeletedFor:ja(n.uid)}),p(null)},R=(F,re)=>{F.preventDefault(),y({show:!0,x:F.pageX,y:F.pageY,chat:re})},O=()=>y({...g,show:!1}),U=[...s,...l];return T.jsxs("div",{className:"flex-grow overflow-y-auto",onClick:O,children:[T.jsxs("div",{className:"flex justify-between items-center p-4",children:[T.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),T.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[T.jsx(gd,{size:16})," Criar Grupo"]})]}),U.length===0?T.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):T.jsx("ul",{className:"divide-y divide-gray-700/50",children:U.map(F=>T.jsx(z6,{chat:F,currentUser:n,onSelectUser:e,onContextMenu:re=>R(re,F)},F.id))}),g.show&&T.jsx(U6,{x:g.x,y:g.y,onClose:O,chat:g.chat,currentUser:n,onTogglePin:()=>{b(g.chat),O()},onDeleteChat:()=>{p(g.chat),O()}}),T.jsx(wl,{isOpen:!!d,onClose:()=>p(null),onConfirm:w,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},U6=({x:n,y:e,onClose:t,chat:s,currentUser:a,onTogglePin:l,onDeleteChat:c})=>{const d=J.useRef(null),p=!s.isGroup&&s.pinnedBy?.includes(a.uid);return J.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&t()};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]),T.jsxs("div",{ref:d,style:{top:e,left:n},className:"absolute w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[!s.isGroup&&T.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[p?T.jsx(s6,{size:14}):T.jsx(nm,{size:14})," ",p?"Desafixar":"Fixar Conversa"]}),T.jsxs("button",{onClick:c,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(pd,{size:14})," Apagar Conversa"]})]})},z6=({chat:n,currentUser:e,onSelectUser:t,onContextMenu:s})=>{const a=im(n.friendId,n),[l,c]=J.useState(0),d=!n.isGroup&&n.pinnedBy?.includes(e.uid),[p,g]=J.useState(null),y=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);J.useEffect(()=>{if(!e)return;const U=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,F=cn(Ot(Re,U),Tt("receiverId","==",e.uid),Tt("status","!=","read")),re=Mn(F,ge=>c(ge.size)),se=cn(Ot(Re,U),pA("createdAt","desc"),gA(1)),le=Mn(se,ge=>{g(ge.empty?null:ge.docs[0].data())});return()=>{re(),le()}},[n,e]);const b=n.isGroup?n:a;if(!b)return T.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const w=O=>{if(!O)return"Offline";const U=new Date(O.seconds?O.seconds*1e3:O),F=new Date,re=new Date(F.getFullYear(),F.getMonth(),F.getDate()),se=new Date(F.getFullYear(),F.getMonth(),F.getDate()-1),le={hour:"2-digit",minute:"2-digit"},ge=U.toLocaleTimeString("pt-BR",le);if(U>=re)return`Visto por último hoje às ${ge}`;if(U>=se)return`Visto por último ontem às ${ge}`;const ue={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${U.toLocaleDateString("pt-BR",ue)}`},R=({data:O})=>T.jsxs("div",{className:"relative flex-shrink-0",children:[O.photoURL?T.jsx("img",{src:O.photoURL,alt:O.displayName,className:"w-12 h-12 rounded-full"}):T.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:O.photoColor||"#7c3aed"},children:O.displayName?.charAt(0).toUpperCase()}),y&&T.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:T.jsx(DV,{size:20,className:"text-white"})})]});return T.jsxs("li",{onClick:()=>t(b),onContextMenu:s,className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-blue-900/20":""}`,children:[T.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[T.jsx(R,{data:b}),!n.isGroup&&T.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),T.jsxs("div",{className:"flex-grow min-w-0",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[d&&T.jsx(nm,{size:14,className:"text-blue-400 flex-shrink-0"}),T.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName})]}),T.jsx("p",{className:"text-sm text-gray-400 truncate",children:p?p.isDeleted?"Mensagem apagada":p.text:n.isGroup?"Nenhuma mensagem ainda":a?.presence==="online"?"Online":w(a?.last_changed)})]})]}),T.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:l>0&&T.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l})})]})},F6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=J.useState(!1),p=J.useRef(null),g=J.useRef(),[y,b]=J.useState("bottom"),[w,R]=J.useState("Copiar"),O=ue=>{const me=/(https?:\/\/[^\s]+)/g;return ue.split(me).map((D,C)=>D.match(me)?T.jsx("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 underline hover:text-blue-200",children:D},C):D)},U=()=>{navigator.clipboard.writeText(n.text).then(()=>{R("Copiado!"),setTimeout(()=>{R("Copiar"),d(!1)},1e3)}).catch(ue=>{console.error("Falha ao copiar texto: ",ue),R("Falhou!"),setTimeout(()=>{R("Copiar"),d(!1)},1e3)})};J.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?b("top"):b("bottom"))},[c]),J.useEffect(()=>{const ue=me=>{p.current&&!p.current.contains(me.target)&&d(!1)};return document.addEventListener("mousedown",ue),()=>document.removeEventListener("mousedown",ue)},[]);const F=ue=>{ue.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},re=ue=>{g.current=setTimeout(()=>F(ue),500)},se=()=>{clearTimeout(g.current)},le=()=>{clearTimeout(g.current)},ge=({msg:ue})=>{if(!e||!ue.status)return null;const me=ue.status==="read";return T.jsx(OV,{size:16,className:me?"text-black":"text-gray-400"})};return T.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&T.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:T.jsx(Ig,{size:16})}),T.jsxs("div",{className:"relative",ref:p,onTouchStart:re,onTouchEnd:se,onTouchMove:le,onContextMenu:ue=>{ue.preventDefault(),d(!0)},children:[T.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&T.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[T.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),T.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),T.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":O(n.text)}),!n.isDeleted&&T.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&T.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),T.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),T.jsx(ge,{msg:n})]})]}),c&&T.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[T.jsxs("button",{onClick:U,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(UV,{size:14})," ",w]}),T.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(nm,{size:14})," Fixar"]}),T.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(Ig,{size:14})," Responder"]}),e&&!n.isDeleted&&T.jsxs(T.Fragment,{children:[T.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(uv,{size:14})," Editar"]}),T.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(pd,{size:14})," Apagar para mim"]}),T.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(pd,{size:14})," Apagar para todos"]})]})]})]}),e&&T.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:T.jsx(Ig,{size:16})})]})},B6=({onEmojiSelect:n,onClose:e})=>{const t=J.useRef(null);J.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return T.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:T.jsx("div",{className:"p-2 overflow-y-auto",children:T.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>T.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},q6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>T.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[T.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&T.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:T.jsx(LV,{className:"text-white"})})}),T.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},H6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=J.useState(t);return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),T.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),T.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[T.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},G6=({groupData:n,friendships:e,onClose:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState([]);J.useEffect(()=>{const g=e.filter(y=>!n.members.includes(y.friendId));c(g)},[e,n.members]);const d=g=>{a(y=>y.includes(g)?y.filter(b=>b!==g):[...y,g])},p=async()=>{if(s.length===0)return;const g=gt(Re,"groups",n.id);await kt(g,{members:ja(...s)}),t()};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5",onClick:g=>g.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Adicionar Membros"}),T.jsx("div",{className:"flex-grow overflow-y-auto pr-2 mb-4",children:l.length>0?l.map(g=>T.jsx(OC,{friendship:g,onToggle:d,isSelected:s.includes(g.friendId)},g.id)):T.jsx("p",{className:"text-gray-400 text-center",children:"Todos os seus amigos já estão neste grupo."})}),T.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[T.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:p,disabled:s.length===0,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-500",children:"Adicionar"})]})]})})},Q6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s,friendships:a})=>{const[l,c]=J.useState([]),[d,p]=J.useState(!1),[g,y]=J.useState(!1),[b,w]=J.useState(!1),[R,O]=J.useState(!1),[U,F]=J.useState(n.name),[re,se]=J.useState(n.description||""),[le,ge]=J.useState(n.photoColor),ue=n.admins?.includes(e.uid),me=gt(Re,"groups",n.id),D=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];J.useEffect(()=>{(async()=>{const Me=n.members.map(te=>vc(gt(Re,"users",te))),ne=(await Promise.all(Me)).filter(te=>te.exists()).map(te=>te.data());c(ne)})()},[n.members]);const C=async()=>{if(U.trim())try{await kt(me,{name:U,description:re,photoColor:le}),O(!1)}catch(fe){console.error("Erro ao salvar alterações do grupo:",fe)}},I=async()=>{const fe={members:Na(e.uid)};if(ue)if(n.admins.filter(ne=>ne!==e.uid).length===0&&n.members.length-1>0){const ne=n.members.find(te=>te!==e.uid);ne&&(fe.admins=[ne])}else fe.admins=Na(e.uid);await kt(me,fe);const Me=await vc(me);Me.exists()&&Me.data().members.length===0&&await td(me),s(),t()},P=async()=>{await td(me),s(),t()},V=async fe=>{await kt(me,{members:Na(fe),admins:Na(fe)})},L=async fe=>{const Me=n.admins.includes(fe);await kt(me,{admins:Me?Na(fe):ja(fe)})},x=({member:fe})=>{const[Me,Y]=J.useState(!1),ne=n.admins?.includes(fe.uid),te=ue&&fe.uid!==e.uid;return T.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:fe.photoURL,alt:fe.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:fe.displayName})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[ne&&T.jsx(BV,{size:16,className:"text-yellow-400"}),te&&T.jsxs("div",{className:"relative",children:[T.jsx("button",{onClick:()=>Y(be=>!be),children:T.jsx(DC,{size:20})}),Me&&T.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[T.jsxs("button",{onClick:()=>{L(fe.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[ne?T.jsx(g6,{size:14}):T.jsx(m6,{size:14})," ",ne?"Rebaixar":"Promover a Admin"]}),T.jsxs("button",{onClick:()=>{V(fe.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(MC,{size:14})," Remover do Grupo"]})]})]})]})]})};return T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-lg w-full border border-blue-500/50 shadow-lg flex flex-col h-5/6",onClick:fe=>fe.stopPropagation(),children:[T.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[ue&&!R&&T.jsx("button",{onClick:()=>O(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:T.jsx(uv,{size:18})}),T.jsxs("div",{className:"relative",children:[T.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:le},children:U?.charAt(0).toUpperCase()}),R&&T.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:D.map(fe=>T.jsx("button",{onClick:()=>ge(fe),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${le===fe?"ring-2 ring-white":""}`,style:{backgroundColor:fe}},fe))})]}),R?T.jsxs(T.Fragment,{children:[T.jsx("input",{type:"text",value:U,onChange:fe=>F(fe.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),T.jsx("textarea",{value:re,onChange:fe=>se(fe.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),T.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),T.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[T.jsxs("div",{className:"flex justify-between items-center mb-2",children:[T.jsx("h3",{className:"text-lg font-semibold text-white",children:"Membros"}),ue&&T.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",children:[T.jsx(y_,{size:16})," Adicionar"]})]}),T.jsx("ul",{className:"space-y-2",children:l.map(fe=>T.jsx(x,{member:fe},fe.uid))})]}),T.jsx("div",{className:"mt-6 flex flex-col gap-2",children:R?T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:()=>O(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsxs("button",{onClick:C,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:[T.jsx(l6,{size:16})," Salvar"]})]}):T.jsxs(T.Fragment,{children:[ue&&T.jsx("button",{onClick:()=>y(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),T.jsx("button",{onClick:()=>p(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Sair do Grupo"}),T.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),b&&T.jsx(G6,{groupData:n,friendships:a,onClose:()=>w(!1)}),T.jsx(wl,{isOpen:d,onClose:()=>p(!1),onConfirm:I,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),T.jsx(wl,{isOpen:g,onClose:()=>y(!1),onConfirm:P,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},Y1=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState(""),[d,p]=J.useState(!1),[g,y]=J.useState(!1),[b,w]=J.useState(!1),[R,O]=J.useState(null),[U,F]=J.useState(null),[re,se]=J.useState(!1),[le,ge]=J.useState(!1),[ue,me]=J.useState(!1),[D,C]=J.useState(!1),[I,P]=J.useState(!1),[V,L]=J.useState(null),[x,fe]=J.useState(e),[Me,Y]=J.useState([]),ne=J.useRef(null),te=e.isGroup,be=N6(n,e),k=im(e.uid,be),X=te?e.id:[n.uid,e.uid].sort().join("_"),ce=be?.themes?.[n.uid]||"default",ie=te?x.pinnedMessage:be?.pinnedMessage,ve={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}};J.useEffect(()=>{if(!n?.uid)return;const _e=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),Ce=Mn(_e,Be=>{const Qt=Be.docs.map(Je=>({id:Je.id,...Je.data(),friendId:Je.data().users.find(Ve=>Ve!==n.uid)}));Y(Qt)});return()=>Ce()},[n.uid]);const Pe=_e=>{if(!_e)return"";const Ce=new Date(_e.seconds?_e.seconds*1e3:_e),Be=new Date,Qt=new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()),Je=new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()-1),Ve={hour:"2-digit",minute:"2-digit"},vn=Ce.toLocaleTimeString("pt-BR",Ve);if(Ce>=Qt)return`Visto por último hoje às ${vn}`;if(Ce>=Je)return`Visto por último ontem às ${vn}`;const Jt={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Ce.toLocaleDateString("pt-BR",Jt)}`};J.useEffect(()=>{if(te){const _e=gt(Re,"groups",e.id),Ce=Mn(_e,Be=>{Be.exists()?fe({...Be.data(),id:Be.id,isGroup:!0}):t()});return()=>Ce()}},[te,e.id,t]),J.useEffect(()=>{const _e=`conversations/${X}/messages`,Ce=cn(Ot(Re,_e),pA("createdAt","asc")),Be=Mn(Ce,Qt=>{const Je=Qt.docs.map(Ve=>({id:Ve.id,...Ve.data()})).filter(Ve=>!Ve.deletedFor?.includes(n.uid));a(Je)});return()=>Be()},[X,n.uid]),J.useEffect(()=>{if(te)return;(async()=>{const Ce=Ot(Re,`conversations/${X}/messages`),Be=cn(Ce,Tt("receiverId","==",n.uid),Tt("status","!=","read")),Qt=await sc(Be);if(!Qt.empty){const Je=r1(Re);Qt.docs.forEach(Ve=>{Je.update(Ve.ref,{status:"read"})}),await Je.commit()}})()},[X,n.uid,te,s]),J.useEffect(()=>{if(te)return;const _e=Ua(za,`typing/${X}/${e.uid}`),Ce=rv(_e,Be=>p(Be.val()===!0));return()=>Ce()},[X,e.uid,te]);const Ae=_e=>{if(c(_e.target.value),te)return;const Ce=Ua(za,`typing/${X}/${n.uid}`);_e.target.value.trim().length>0?(tm(Ce,!0),ne.current&&clearTimeout(ne.current),ne.current=setTimeout(()=>Rg(Ce),3e3)):Rg(Ce)},Vt=async _e=>{if(_e.preventDefault(),l.trim()===""||!te&&(be?.blockedBy?.includes(e.uid)||be?.blockedBy?.includes(n.uid)))return;const Ce=l;c(""),te||(Rg(Ua(za,`typing/${X}/${n.uid}`)),ne.current&&clearTimeout(ne.current));const Be={text:Ce,createdAt:yl(),senderId:n.uid,senderName:n.displayName};te||(Be.receiverId=e.uid,Be.status=k?.presence==="online"?"delivered":"sent"),R&&(Be.replyTo={id:R.id,text:R.text,senderName:R.senderId===n.uid?"Você":te?R.senderName:e.displayName});try{await Sy(Ot(Re,`conversations/${X}/messages`),Be),O(null)}catch(Qt){console.error("Falha ao enviar mensagem:",Qt),c(Ce)}},lt=async _e=>{if(_e.preventDefault(),!U||l.trim()==="")return;const Ce=gt(Re,`conversations/${X}/messages`,U.id);await kt(Ce,{text:l,edited:!0}),F(null),c("")},Zn=async()=>{if(!V)return;const{id:_e,type:Ce}=V,Be=gt(Re,`conversations/${X}/messages`,_e);Ce==="self"?await kt(Be,{deletedFor:ja(n.uid)}):Ce==="all"&&await kt(Be,{text:"",isDeleted:!0,replyTo:null}),L(null)},xi=async()=>{const _e=cn(Ot(Re,`conversations/${X}/messages`)),Ce=await sc(_e),Be=r1(Re);Ce.docs.forEach(Qt=>{Be.update(Qt.ref,{deletedFor:ja(n.uid)})}),await Be.commit(),me(!1)},mi=async()=>{if(!be)return;const _e=gt(Re,"friendships",be.id);be.blockedBy?.includes(n.uid)?await kt(_e,{blockedBy:Na(n.uid)}):await kt(_e,{blockedBy:ja(n.uid)}),ge(!1)},is=async _e=>{if(!be)return;const Ce=gt(Re,"friendships",be.id);await kt(Ce,{[`themes.${n.uid}`]:_e}),C(!1)},ss=async _e=>{if(!be||!_e.trim())return;const Ce=gt(Re,"friendships",be.id);await kt(Ce,{[`customNames.${n.uid}`]:_e.trim()}),P(!1)},rs=async _e=>{const Ce=te&&x.admins.includes(n.uid);if(te&&!Ce)return;const Be=te?gt(Re,"groups",x.id):gt(Re,"friendships",be.id),Qt={id:_e.id,text:_e.text,senderName:_e.senderName};await kt(Be,{pinnedMessage:Qt})},Kr=async()=>{const _e=te&&x.admins.includes(n.uid);if(te&&!_e)return;const Ce=te?gt(Re,"groups",x.id):gt(Re,"friendships",be.id);await kt(Ce,{pinnedMessage:null})},to=_e=>{F(_e),c(_e.text),O(null)},On=()=>{F(null),c("")},$s=!te&&be?.blockedBy?.includes(n.uid),as=!te&&be?.blockedBy?.includes(e.uid),Ri=te?x.name:k?.displayName,os=te?x.photoColor?"":x.photoURL:e.photoURL;return T.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[T.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md flex-shrink-0",children:[T.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:T.jsx(NC,{size:24})}),T.jsxs("div",{className:"flex items-center cursor-pointer flex-grow min-w-0",onClick:()=>te?w(!0):y(!0),children:[te?T.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:x.photoColor||"#7c3aed"},children:Ri?.charAt(0).toUpperCase()}):T.jsx("img",{src:os,alt:Ri,className:"w-10 h-10 rounded-full mr-4 flex-shrink-0"}),T.jsxs("div",{className:"min-w-0",children:[T.jsx("h2",{className:"text-xl font-bold text-white truncate",children:Ri}),T.jsx("p",{className:"text-sm text-blue-300 h-4",children:te?`${x.members?.length||0} membros`:d?"Digitando...":k?.presence==="online"?"Online":Pe(k?.last_changed)})]})]}),T.jsxs("div",{className:"relative",children:[T.jsx("button",{onClick:()=>ge(_e=>!_e),className:"p-2 text-gray-400 hover:text-white",children:T.jsx(DC,{})}),le&&T.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[te?T.jsxs("button",{onClick:()=>{w(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(gd,{size:14})," Perfil do Grupo"]}):T.jsxs(T.Fragment,{children:[T.jsxs("button",{onClick:()=>{P(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(uv,{size:14})," Alterar nome do contato"]}),T.jsxs("button",{onClick:()=>{C(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(n6,{size:14})," Alterar tema da conversa"]})]}),T.jsxs("button",{onClick:()=>{me(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[T.jsx(GV,{size:14})," Limpar conversa"]}),!te&&T.jsxs("button",{onClick:mi,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[T.jsx(MC,{size:14})," ",$s?"Desbloquear":"Bloquear"]})]})]})]}),T.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col-reverse",style:te?ve.default:ve[ce],children:[T.jsx("div",{className:"space-y-2",children:s.slice().reverse().map(_e=>T.jsx(F6,{msg:_e,isCurrentUser:_e.senderId===n.uid,onReply:()=>O(_e),onDelete:Ce=>L({id:_e.id,type:Ce}),onEdit:()=>to(_e),onPin:()=>rs(_e)},_e.id))}),ie&&T.jsx("div",{className:"bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in w-full",children:T.jsxs("div",{className:"flex justify-between items-center",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[T.jsx(nm,{size:12})," MENSAGEM FIXADA"]}),T.jsx("p",{className:"text-sm text-white truncate",children:ie.text})]}),(te?x.admins.includes(n.uid):!0)&&T.jsx("button",{onClick:Kr,className:"p-1 text-gray-400 hover:text-white",children:T.jsx(_d,{size:16})})]})})]}),T.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[(R||U)&&T.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[T.jsxs("div",{className:"flex justify-between items-center text-sm",children:[T.jsx("p",{className:"font-bold",children:U?"Editando mensagem":`Respondendo a ${R.senderId===n.uid?"Você":te?R.senderName:k?.displayName}`}),T.jsx("button",{onClick:U?On:()=>O(null),className:"p-1",children:T.jsx(_d,{size:16})})]}),T.jsx("p",{className:"text-xs text-gray-400 truncate",children:U?U.text:R.text})]}),T.jsxs("div",{className:"relative flex items-center gap-2",children:[re&&T.jsx(B6,{onEmojiSelect:_e=>c(Ce=>Ce+_e),onClose:()=>se(!1)}),T.jsx("button",{type:"button",onClick:()=>se(_e=>!_e),className:"p-2 text-gray-400 hover:text-white",children:T.jsx(y6,{})}),T.jsxs("form",{onSubmit:U?lt:Vt,className:"flex-grow flex items-center gap-2",children:[T.jsx("input",{type:"text",value:l,onChange:Ae,placeholder:$s?"Você bloqueou este contato.":as?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:as||$s,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),T.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||as||$s,children:U?T.jsx(av,{size:20}):T.jsx(f6,{size:20})})]})]})]}),g&&T.jsx(M6,{user:e,onClose:()=>y(!1)}),b&&T.jsx(Q6,{groupData:x,currentUser:n,onClose:()=>w(!1),onLeaveChat:t,friendships:Me}),D&&T.jsx(q6,{onClose:()=>C(!1),onSelectTheme:is,currentTheme:ce}),I&&T.jsx(H6,{onClose:()=>P(!1),onSave:ss,currentName:k?.displayName}),T.jsx(wl,{isOpen:ue,onClose:()=>me(!1),onConfirm:xi,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),T.jsx(wl,{isOpen:!!V,onClose:()=>L(null),onConfirm:Zn,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${V?.type==="all"?"para todos":"para você"}?`})]})},Y6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=J.useState(""),[l,c]=J.useState([n.uid]),[d,p]=J.useState(""),g=b=>{c(w=>w.includes(b)?w.filter(R=>R!==b):[...w,b])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await Sy(Ot(Re,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:yl(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(b){console.error("Erro ao criar grupo:",b),p(`Erro: ${b.message}`)}};return T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:T.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:b=>b.stopPropagation(),children:[T.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),T.jsx("input",{type:"text",value:s,onChange:b=>a(b.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),T.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),T.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(b=>T.jsx(OC,{friendship:b,onToggle:g,isSelected:l.includes(b.friendId)},b.id))}),d&&T.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),T.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[T.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),T.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},OC=({friendship:n,onToggle:e,isSelected:t})=>{const s=im(n.friendId,n);return s?T.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("span",{className:"text-white",children:s.displayName})]}),T.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&T.jsx(av,{size:16,className:"text-white"})})]}):null},K6=({user:n,onLogout:e})=>{const[t,s]=J.useState(null),[a,l]=J.useState("chats"),[c,d]=J.useState("list"),[p,g]=J.useState(!1),[y,b]=J.useState(!1),[w,R]=J.useState([]),O=x6(n),U=R6(n);I6(U),J.useEffect(()=>{if(!n?.uid)return;const D=cn(Ot(Re,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),C=Mn(D,I=>{const P=I.docs.map(V=>({id:V.id,...V.data(),friendId:V.data().users.find(L=>L!==n.uid)}));R(P)});return()=>C()},[n.uid]),J.useEffect(()=>{t?(d("chat"),l("chats")):d("list")},[t]);const F=D=>{l(D),s(null)},re=D=>{s(D)},se=()=>{s(null)},le=({count:D})=>D===0?null:T.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:D}),ge=({count:D})=>D===0?null:T.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[T.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),T.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]}),ue=()=>{switch(a){case"chats":return T.jsx(Q1,{currentUser:n,onSelectUser:re,onCreateGroup:()=>b(!0)});case"contacts":return T.jsx(j6,{currentUser:n,onSelectUser:re});case"add":return T.jsx(P6,{currentUser:n});case"requests":return T.jsx(V6,{currentUser:n});case"game":return T.jsx(K1,{});default:return T.jsx(Q1,{currentUser:n,onSelectUser:re,onCreateGroup:()=>b(!0)})}},me=()=>t?T.jsx(Y1,{currentUser:n,otherUser:t,onLeave:se}):a==="game"?T.jsx(K1,{}):T.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[T.jsx(kC,{size:60,className:"mb-4"}),T.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),T.jsx("p",{children:"Ou experimente os jogos na aba de controle!"})]});return T.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&T.jsx(O6,{user:n,onClose:()=>g(!1)}),y&&T.jsx(Y6,{currentUser:n,onClose:()=>b(!1),friendships:w}),T.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[T.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[T.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),T.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:T.jsx(H1,{size:20})})]}),T.jsxs("div",{className:"flex border-b border-gray-700/50",children:[T.jsxs("button",{onClick:()=>F("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[T.jsx(G1,{className:"mx-auto"}),T.jsx(ge,{count:U})]}),T.jsx("button",{onClick:()=>F("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(gd,{className:"mx-auto"})}),T.jsx("button",{onClick:()=>F("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(y_,{className:"mx-auto"})}),T.jsxs("button",{onClick:()=>F("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[T.jsx(q1,{className:"mx-auto"}),T.jsx(le,{count:O})]}),T.jsx("button",{onClick:()=>F("game"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="game"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:T.jsx(__,{className:"mx-auto"})})]}),T.jsx("div",{className:"flex-grow overflow-y-auto",children:ue()})]}),T.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[T.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[T.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[T.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[T.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),T.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),T.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:T.jsx(H1,{size:20})})]}),T.jsx("div",{className:"flex-grow overflow-y-auto",children:ue()}),T.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[T.jsxs("button",{onClick:()=>F("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[T.jsx(G1,{}),T.jsx(ge,{count:U})]}),T.jsx("button",{onClick:()=>F("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:T.jsx(gd,{})}),T.jsx("button",{onClick:()=>F("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:T.jsx(y_,{})}),T.jsxs("button",{onClick:()=>F("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[T.jsx(q1,{}),T.jsx(le,{count:O})]}),T.jsx("button",{onClick:()=>F("game"),className:`relative p-3 rounded-lg ${a==="game"?"text-blue-500":"text-gray-400"}`,children:T.jsx(__,{})})]})]}),c==="chat"&&t&&T.jsx(Y1,{currentUser:n,otherUser:t,onLeave:se})]}),T.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:me()})]})},K1=()=>{const[n,e]=J.useState(null),t=[{id:"tictactoe",name:"Jogo da Velha",component:T.jsx($6,{})},{id:"rps",name:"Jokempô",component:T.jsx(X6,{})},{id:"breakout",name:"Break Bricks",component:T.jsx(W6,{})},{id:"snake",name:"Snake",component:T.jsx(Z6,{})},{id:"pong",name:"Pong",component:T.jsx(J6,{})},{id:"flappy",name:"Flappy Bird",component:T.jsx(e3,{})}];if(n){const s=t.find(a=>a.id===n);return T.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-800",children:[T.jsx("header",{className:"p-2 bg-gray-900 flex items-center flex-shrink-0",children:T.jsxs("button",{onClick:()=>e(null),className:"flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",children:[T.jsx(NC,{size:16})," Voltar para os Jogos"]})}),T.jsx("div",{className:"flex-grow flex items-center justify-center overflow-hidden p-2",children:s.component})]})}return T.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-800",children:[T.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-white",children:"Jogos"}),T.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl",children:t.map(s=>T.jsxs("button",{onClick:()=>e(s.id),className:"p-6 bg-gray-700 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-square",children:[T.jsx(__,{size:48,className:"mb-4 text-blue-400"}),T.jsx("span",{className:"text-lg font-semibold text-white text-center",children:s.name})]},s.id))})]})},$6=()=>{const[n,e]=J.useState(Array(9).fill(null)),[t,s]=J.useState(!0),l=(w=>{const R=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let O=0;O<R.length;O++){const[U,F,re]=R[O];if(w[U]&&w[U]===w[F]&&w[U]===w[re])return w[U]}return null})(n),c=!l&&n.every(w=>w!==null),d=w=>{if(l||n[w])return;const R=n.slice();R[w]=t?"X":"O",e(R),s(!t)},p=()=>{e(Array(9).fill(null)),s(!0)},g=({className:w})=>T.jsx("div",{className:`w-12 h-12 rounded-full border-8 ${w}`}),y=w=>T.jsx("button",{onClick:()=>d(w),className:"w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-lg text-4xl sm:text-5xl font-bold flex items-center justify-center transition-colors hover:bg-gray-600",children:n[w]==="X"?T.jsx(_d,{className:"text-blue-400",size:48}):n[w]==="O"?T.jsx(g,{className:"text-pink-400 border-pink-400"}):null});let b;return l?b=`Vencedor: ${l}`:c?b="Empate!":b=`Próximo jogador: ${t?"X":"O"}`,T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[T.jsx("h3",{className:"text-2xl font-bold mb-4",children:b}),T.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Array(9).fill(null).map((w,R)=>y(R))}),T.jsxs("button",{onClick:p,className:"flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[T.jsx(lv,{size:18})," Reiniciar"]})]})},X6=()=>{const[n,e]=J.useState(null),[t,s]=J.useState(null),[a,l]=J.useState(""),c=["rock","paper","scissors"],d={rock:T.jsx(KV,{size:48}),paper:T.jsx(e6,{size:48}),scissors:T.jsx(c6,{size:48})},p=y=>{const b=c[Math.floor(Math.random()*c.length)];e(y),s(b),l(y===b?"Empate!":y==="rock"&&b==="scissors"||y==="scissors"&&b==="paper"||y==="paper"&&b==="rock"?"Você Venceu!":"Você Perdeu!")},g=()=>{e(null),s(null),l("")};return T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[T.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Jokempô"}),T.jsx("div",{className:"flex gap-4 sm:gap-8 mb-6",children:c.map(y=>T.jsx("button",{onClick:()=>p(y),className:"p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110",children:d[y]},y))}),n&&T.jsxs("div",{className:"text-center animate-fade-in",children:[T.jsxs("div",{className:"flex items-center justify-center gap-8 text-lg mb-4",children:[T.jsxs("div",{className:"flex flex-col items-center",children:[T.jsx("span",{children:"Você"}),d[n]]}),T.jsx("span",{className:"text-2xl",children:"vs"}),T.jsxs("div",{className:"flex flex-col items-center",children:[T.jsx("span",{children:"PC"}),d[t]]})]}),T.jsx("h3",{className:"text-2xl font-bold",children:a})]}),T.jsxs("button",{onClick:g,className:"flex items-center gap-2 mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[T.jsx(lv,{size:18})," Jogar Novamente"]})]})},W6=()=>{const n=J.useRef(null),[e,t]=J.useState({score:0,lives:3,isOver:!1,message:""}),s=J.useRef(null),a=J.useCallback(()=>{const c=n.current;if(!c)return;const d=c.getContext("2d");if(!d)return;s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId);const p=c.parentElement;c.width=p.clientWidth,c.height=p.clientHeight;let g=0,y=3;const b=Math.min(c.width,c.height)*.02;let w=c.width/2,R=c.height-30,O=4,U=-4;const F=10,re=c.width*.2;(c.width-re)/2;const se=5,le=7,ge=10,ue=30,me=30,D=(c.width-2*me-(le-1)*ge)/le,C=20,I=[],P=["#0284c7","#f97316","#16a34a","#db2777","#ca8a04"];for(let x=0;x<le;x++){I[x]=[];for(let fe=0;fe<se;fe++)I[x][fe]={x:0,y:0,status:1,color:P[fe%P.length]}}s.current={rightPressed:!1,leftPressed:!1,paddleX:(c.width-re)/2,animationFrameId:null};const V=()=>{w=c.width/2,R=c.height-30,O=4*(Math.random()>.5?1:-1),U=-4,s.current.paddleX=(c.width-re)/2},L=()=>{d.clearRect(0,0,c.width,c.height);for(let x=0;x<le;x++)for(let fe=0;fe<se;fe++)if(I[x][fe].status===1){const Me=x*(D+ge)+me,Y=fe*(C+ge)+ue;I[x][fe].x=Me,I[x][fe].y=Y,d.beginPath(),d.rect(Me,Y,D,C),d.fillStyle=I[x][fe].color,d.fill(),d.closePath()}d.beginPath(),d.arc(w,R,b,0,Math.PI*2),d.fillStyle="#FFFFFF",d.fill(),d.closePath(),d.beginPath(),d.rect(s.current.paddleX,c.height-F,re,F),d.fillStyle="#38bdf8",d.fill(),d.closePath(),d.font="16px Arial",d.fillStyle="#FFFFFF",d.fillText("Pontos: "+g,8,20),d.fillText("Vidas: "+y,c.width-65,20);for(let x=0;x<le;x++)for(let fe=0;fe<se;fe++){const Me=I[x][fe];if(Me.status===1&&w>Me.x&&w<Me.x+D&&R>Me.y&&R<Me.y+C&&(U=-U,Me.status=0,g++,g===se*le)){t({score:g,lives:y,isOver:!0,message:"VOCÊ VENCEU!"}),cancelAnimationFrame(s.current.animationFrameId);return}}if((w+O>c.width-b||w+O<b)&&(O=-O),R+U<b)U=-U;else if(R+U>c.height-b)if(w>s.current.paddleX&&w<s.current.paddleX+re)U=-U;else if(y--,y)V();else{t({score:g,lives:0,isOver:!0,message:"GAME OVER"}),cancelAnimationFrame(s.current.animationFrameId);return}s.current.rightPressed&&s.current.paddleX<c.width-re?s.current.paddleX+=7:s.current.leftPressed&&s.current.paddleX>0&&(s.current.paddleX-=7),w+=O,R+=U,s.current.animationFrameId=requestAnimationFrame(L)};L()},[]),l=()=>{t({score:0,lives:3,isOver:!1,message:""}),a()};return J.useEffect(()=>{a();const c=n.current,d=c.width*.2,p=R=>{R.key==="Right"||R.key==="ArrowRight"?s.current.rightPressed=!0:(R.key==="Left"||R.key==="ArrowLeft")&&(s.current.leftPressed=!0)},g=R=>{R.key==="Right"||R.key==="ArrowRight"?s.current.rightPressed=!1:(R.key==="Left"||R.key==="ArrowLeft")&&(s.current.leftPressed=!1)},y=R=>{const O=c.getBoundingClientRect();let U=R-O.left;U>0&&U<c.width&&(s.current.paddleX=U-d/2)},b=R=>y(R.clientX),w=R=>{R.preventDefault(),y(R.touches[0].clientX)};return document.addEventListener("keydown",p),document.addEventListener("keyup",g),c.addEventListener("mousemove",b),c.addEventListener("touchmove",w,{passive:!1}),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",g),c.removeEventListener("mousemove",b),c.removeEventListener("touchmove",w),s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId)}},[a]),T.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative",children:[e.isOver&&T.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10",children:[T.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.message}),T.jsxs("p",{className:"text-xl mb-6",children:["Pontuação Final: ",e.score]}),T.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[T.jsx(lv,{size:18})," Jogar Novamente"]})]}),T.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg w-full h-full"})]})},Z6=()=>T.jsx("div",{className:"flex items-center justify-center h-full text-white",children:T.jsx("p",{children:"Snake em breve!"})}),J6=()=>T.jsx("div",{className:"flex items-center justify-center h-full text-white",children:T.jsx("p",{children:"Pong em breve!"})}),e3=()=>T.jsx("div",{className:"flex items-center justify-center h-full text-white",children:T.jsx("p",{children:"Flappy Bird em breve!"})});function t3(){return T.jsxs(T.Fragment,{children:[T.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar, .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto, .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),T.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:T.jsx(n3,{})})]})}const n3=()=>{const[n,e]=J.useState(null),[t,s]=J.useState(!0);C6(n),J.useEffect(()=>{const l=FN(yd,async c=>{if(c){const d=gt(Re,"users",c.uid),p=await vc(d);if(p.exists())e({...c,...p.data()});else{const g={uid:c.uid,displayName:c.displayName,email:c.email,photoURL:c.photoURL,recado:"Olá! Estou usando o ChatD."};await yA(d,g),e({...c,...g})}}else e(null);s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=Ua(za,`/status/${n.uid}`);await tm(l,{state:"offline",last_changed:Date.now()}),await kt(gt(Re,`/users/${n.uid}`),{state:"offline",last_changed:yl()}),await BN(yd),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return t?T.jsx(D6,{}):n?T.jsx(K6,{user:n,onLogout:a}):T.jsx(k6,{})};mR.createRoot(document.getElementById("root")).render(T.jsx(J.StrictMode,{children:T.jsx(t3,{})}));
