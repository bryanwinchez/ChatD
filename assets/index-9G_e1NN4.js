(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Bp={exports:{}},Cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT;function E1(){if(QT)return Cu;QT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Cu.Fragment=e,Cu.jsx=t,Cu.jsxs=t,Cu}var YT;function T1(){return YT||(YT=1,Bp.exports=E1()),Bp.exports}var ee=T1(),qp={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT;function S1(){if(KT)return be;KT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function A(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,Z={};function W(N,$,se){this.props=N,this.context=$,this.refs=Z,this.updater=se||O}W.prototype.isReactComponent={},W.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},W.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function pe(){}pe.prototype=W.prototype;function de(N,$,se){this.props=N,this.context=$,this.refs=Z,this.updater=se||O}var ue=de.prototype=new pe;ue.constructor=de,B(ue,W.prototype),ue.isPureReactComponent=!0;var Fe=Array.isArray,we={H:null,A:null,T:null,S:null,V:null},Qe=Object.prototype.hasOwnProperty;function k(N,$,se,J,fe,Ie){return se=Ie.ref,{$$typeof:i,type:N,key:$,ref:se!==void 0?se:null,props:Ie}}function b(N,$){return k(N.type,$,void 0,void 0,void 0,N.props)}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function M(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return $[se]})}var x=/\/+/g;function V(N,$){return typeof N=="object"&&N!==null&&N.key!=null?M(""+N.key):$.toString(36)}function R(){}function $t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function gt(N,$,se,J,fe){var Ie=typeof N;(Ie==="undefined"||Ie==="boolean")&&(N=null);var Te=!1;if(N===null)Te=!0;else switch(Ie){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(N.$$typeof){case i:case e:Te=!0;break;case v:return Te=N._init,gt(Te(N._payload),$,se,J,fe)}}if(Te)return fe=fe(N),Te=J===""?"."+V(N,0):J,Fe(fe)?(se="",Te!=null&&(se=Te.replace(x,"$&/")+"/"),gt(fe,$,se,"",function(mi){return mi})):fe!=null&&(I(fe)&&(fe=b(fe,se+(fe.key==null||N&&N.key===fe.key?"":(""+fe.key).replace(x,"$&/")+"/")+Te)),$.push(fe)),1;Te=0;var qt=J===""?".":J+":";if(Fe(N))for(var at=0;at<N.length;at++)J=N[at],Ie=qt+V(J,at),Te+=gt(J,$,se,Ie,fe);else if(at=A(N),typeof at=="function")for(N=at.call(N),at=0;!(J=N.next()).done;)J=J.value,Ie=qt+V(J,at++),Te+=gt(J,$,se,Ie,fe);else if(Ie==="object"){if(typeof N.then=="function")return gt($t(N),$,se,J,fe);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Te}function H(N,$,se){if(N==null)return N;var J=[],fe=0;return gt(N,J,"","",function(Ie){return $.call(se,Ie,fe++)}),J}function ie(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function je(){}return be.Children={map:H,forEach:function(N,$,se){H(N,function(){$.apply(this,arguments)},se)},count:function(N){var $=0;return H(N,function(){$++}),$},toArray:function(N){return H(N,function($){return $})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},be.Component=W,be.Fragment=t,be.Profiler=a,be.PureComponent=de,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we,be.__COMPILER_RUNTIME={__proto__:null,c:function(N){return we.H.useMemoCache(N)}},be.cache=function(N){return function(){return N.apply(null,arguments)}},be.cloneElement=function(N,$,se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=B({},N.props),fe=N.key,Ie=void 0;if($!=null)for(Te in $.ref!==void 0&&(Ie=void 0),$.key!==void 0&&(fe=""+$.key),$)!Qe.call($,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&$.ref===void 0||(J[Te]=$[Te]);var Te=arguments.length-2;if(Te===1)J.children=se;else if(1<Te){for(var qt=Array(Te),at=0;at<Te;at++)qt[at]=arguments[at+2];J.children=qt}return k(N.type,fe,void 0,void 0,Ie,J)},be.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},be.createElement=function(N,$,se){var J,fe={},Ie=null;if($!=null)for(J in $.key!==void 0&&(Ie=""+$.key),$)Qe.call($,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(fe[J]=$[J]);var Te=arguments.length-2;if(Te===1)fe.children=se;else if(1<Te){for(var qt=Array(Te),at=0;at<Te;at++)qt[at]=arguments[at+2];fe.children=qt}if(N&&N.defaultProps)for(J in Te=N.defaultProps,Te)fe[J]===void 0&&(fe[J]=Te[J]);return k(N,Ie,void 0,void 0,null,fe)},be.createRef=function(){return{current:null}},be.forwardRef=function(N){return{$$typeof:d,render:N}},be.isValidElement=I,be.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ie}},be.memo=function(N,$){return{$$typeof:g,type:N,compare:$===void 0?null:$}},be.startTransition=function(N){var $=we.T,se={};we.T=se;try{var J=N(),fe=we.S;fe!==null&&fe(se,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(je,ce)}catch(Ie){ce(Ie)}finally{we.T=$}},be.unstable_useCacheRefresh=function(){return we.H.useCacheRefresh()},be.use=function(N){return we.H.use(N)},be.useActionState=function(N,$,se){return we.H.useActionState(N,$,se)},be.useCallback=function(N,$){return we.H.useCallback(N,$)},be.useContext=function(N){return we.H.useContext(N)},be.useDebugValue=function(){},be.useDeferredValue=function(N,$){return we.H.useDeferredValue(N,$)},be.useEffect=function(N,$,se){var J=we.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(N,$)},be.useId=function(){return we.H.useId()},be.useImperativeHandle=function(N,$,se){return we.H.useImperativeHandle(N,$,se)},be.useInsertionEffect=function(N,$){return we.H.useInsertionEffect(N,$)},be.useLayoutEffect=function(N,$){return we.H.useLayoutEffect(N,$)},be.useMemo=function(N,$){return we.H.useMemo(N,$)},be.useOptimistic=function(N,$){return we.H.useOptimistic(N,$)},be.useReducer=function(N,$,se){return we.H.useReducer(N,$,se)},be.useRef=function(N){return we.H.useRef(N)},be.useState=function(N){return we.H.useState(N)},be.useSyncExternalStore=function(N,$,se){return we.H.useSyncExternalStore(N,$,se)},be.useTransition=function(){return we.H.useTransition()},be.version="19.1.1",be}var XT;function Jg(){return XT||(XT=1,qp.exports=S1()),qp.exports}var it=Jg(),Fp={exports:{}},Ru={},jp={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT;function A1(){return WT||(WT=1,(function(i){function e(H,ie){var ce=H.length;H.push(ie);e:for(;0<ce;){var je=ce-1>>>1,N=H[je];if(0<a(N,ie))H[je]=ie,H[ce]=N,ce=je;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ie=H[0],ce=H.pop();if(ce!==ie){H[0]=ce;e:for(var je=0,N=H.length,$=N>>>1;je<$;){var se=2*(je+1)-1,J=H[se],fe=se+1,Ie=H[fe];if(0>a(J,ce))fe<N&&0>a(Ie,J)?(H[je]=Ie,H[fe]=ce,je=fe):(H[je]=J,H[se]=ce,je=se);else if(fe<N&&0>a(Ie,ce))H[je]=Ie,H[fe]=ce,je=fe;else break e}}return ie}function a(H,ie){var ce=H.sortIndex-ie.sortIndex;return ce!==0?ce:H.id-ie.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,A=3,O=!1,B=!1,Z=!1,W=!1,pe=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function Fe(H){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=H)s(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(g)}}function we(H){if(Z=!1,Fe(H),!B)if(t(p)!==null)B=!0,Qe||(Qe=!0,V());else{var ie=t(g);ie!==null&&gt(we,ie.startTime-H)}}var Qe=!1,k=-1,b=5,I=-1;function M(){return W?!0:!(i.unstable_now()-I<b)}function x(){if(W=!1,Qe){var H=i.unstable_now();I=H;var ie=!0;try{e:{B=!1,Z&&(Z=!1,de(k),k=-1),O=!0;var ce=A;try{t:{for(Fe(H),T=t(p);T!==null&&!(T.expirationTime>H&&M());){var je=T.callback;if(typeof je=="function"){T.callback=null,A=T.priorityLevel;var N=je(T.expirationTime<=H);if(H=i.unstable_now(),typeof N=="function"){T.callback=N,Fe(H),ie=!0;break t}T===t(p)&&s(p),Fe(H)}else s(p);T=t(p)}if(T!==null)ie=!0;else{var $=t(g);$!==null&&gt(we,$.startTime-H),ie=!1}}break e}finally{T=null,A=ce,O=!1}ie=void 0}}finally{ie?V():Qe=!1}}}var V;if(typeof ue=="function")V=function(){ue(x)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,$t=R.port2;R.port1.onmessage=x,V=function(){$t.postMessage(null)}}else V=function(){pe(x,0)};function gt(H,ie){k=pe(function(){H(i.unstable_now())},ie)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(H){switch(A){case 1:case 2:case 3:var ie=3;break;default:ie=A}var ce=A;A=ie;try{return H()}finally{A=ce}},i.unstable_requestPaint=function(){W=!0},i.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ce=A;A=H;try{return ie()}finally{A=ce}},i.unstable_scheduleCallback=function(H,ie,ce){var je=i.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?je+ce:je):ce=je,H){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ce+N,H={id:v++,callback:ie,priorityLevel:H,startTime:ce,expirationTime:N,sortIndex:-1},ce>je?(H.sortIndex=ce,e(g,H),t(p)===null&&H===t(g)&&(Z?(de(k),k=-1):Z=!0,gt(we,ce-je))):(H.sortIndex=N,e(p,H),B||O||(B=!0,Qe||(Qe=!0,V()))),H},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(H){var ie=A;return function(){var ce=A;A=ie;try{return H.apply(this,arguments)}finally{A=ce}}}})(Hp)),Hp}var $T;function w1(){return $T||($T=1,jp.exports=A1()),jp.exports}var Gp={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT;function b1(){if(ZT)return un;ZT=1;var i=Jg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},un.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},un.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},un.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},un.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:O}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:A,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},un.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},un.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},un.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},un.requestFormReset=function(p){s.d.r(p)},un.unstable_batchedUpdates=function(p,g){return p(g)},un.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},un.useFormStatus=function(){return c.H.useHostTransitionStatus()},un.version="19.1.1",un}var JT;function C1(){if(JT)return Gp.exports;JT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Gp.exports=b1(),Gp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function R1(){if(e0)return Ru;e0=1;var i=w1(),e=Jg(),t=C1();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),de=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=x&&n[x]||n["@@iterator"],typeof n=="function"?n:null)}var R=Symbol.for("react.client.reference");function $t(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===R?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case W:return"Profiler";case Z:return"StrictMode";case we:return"Suspense";case Qe:return"SuspenseList";case I:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case O:return"Portal";case ue:return(n.displayName||"Context")+".Provider";case de:return(n._context.displayName||"Context")+".Consumer";case Fe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case k:return r=n.displayName||null,r!==null?r:$t(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return $t(n(r))}catch{}}return null}var gt=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},je=[],N=-1;function $(n){return{current:n}}function se(n){0>N||(n.current=je[N],je[N]=null,N--)}function J(n,r){N++,je[N]=n.current,n.current=r}var fe=$(null),Ie=$(null),Te=$(null),qt=$(null);function at(n,r){switch(J(Te,r),J(Ie,n),J(fe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?ET(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=ET(r),n=TT(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}se(fe),J(fe,n)}function mi(){se(fe),se(Ie),se(Te)}function Os(n){n.memoizedState!==null&&J(qt,n);var r=fe.current,o=TT(r,n.type);r!==o&&(J(Ie,n),J(fe,o))}function qi(n){Ie.current===n&&(se(fe),se(Ie)),qt.current===n&&(se(qt),Tu._currentValue=ce)}var kr=Object.prototype.hasOwnProperty,Pr=i.unstable_scheduleCallback,Vr=i.unstable_cancelCallback,yl=i.unstable_shouldYield,Ic=i.unstable_requestPaint,zn=i.unstable_now,Bd=i.unstable_getCurrentPriorityLevel,vl=i.unstable_ImmediatePriority,Ba=i.unstable_UserBlockingPriority,Lr=i.unstable_NormalPriority,qd=i.unstable_LowPriority,qa=i.unstable_IdlePriority,El=i.log,Nc=i.unstable_setDisableYieldValue,_t=null,Xe=null;function In(n){if(typeof El=="function"&&Nc(n),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(_t,n)}catch{}}var on=Math.clz32?Math.clz32:Ur,Dc=Math.log,Fd=Math.LN2;function Ur(n){return n>>>=0,n===0?32:31-(Dc(n)/Fd|0)|0}var zr=256,Br=4194304;function ti(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Fa(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ti(u):(E&=S,E!==0?f=ti(E):o||(o=S&~n,o!==0&&(f=ti(o))))):(S=u&~m,S!==0?f=ti(S):E!==0?f=ti(E):o||(o=u&~n,o!==0&&(f=ti(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function qr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Tl(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var n=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),n}function Al(){var n=Br;return Br<<=1,(Br&62914560)===0&&(Br=4194304),n}function Fi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function ji(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wl(n,r,o,u,f,m){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,C=n.expirationTimes,z=n.hiddenUpdates;for(o=E&~o;0<o;){var G=31-on(o),K=1<<G;S[G]=0,C[G]=-1;var q=z[G];if(q!==null)for(z[G]=null,G=0;G<q.length;G++){var F=q[G];F!==null&&(F.lane&=-536870913)}o&=~K}u!==0&&pi(n,u,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function pi(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-on(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function bl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-on(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Ms(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ja(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function xs(){var n=ie.p;return n!==0?n:(n=window.event,n===void 0?32:BT(n.type))}function Oc(n,r){var o=ie.p;try{return ie.p=n,r()}finally{ie.p=o}}var ht=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ht,Ct="__reactProps$"+ht,Bn="__reactContainer$"+ht,Cl="__reactEvents$"+ht,jd="__reactListeners$"+ht,ks="__reactHandles$"+ht,Mc="__reactResources$"+ht,Fr="__reactMarker$"+ht;function Ps(n){delete n[Pt],delete n[Ct],delete n[Cl],delete n[jd],delete n[ks]}function Hi(n){var r=n[Pt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Bn]||o[Pt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=bT(n);n!==null;){if(o=n[Pt])return o;n=bT(n)}return r}n=o,o=n.parentNode}return null}function gi(n){if(n=n[Pt]||n[Bn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function _i(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function pn(n){var r=n[Mc];return r||(r=n[Mc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Tt(n){n[Fr]=!0}var Rl=new Set,Ha={};function ni(n,r){Gi(n,r),Gi(n+"Capture",r)}function Gi(n,r){for(Ha[n]=r,n=0;n<r.length;n++)Rl.add(r[n])}var xc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kc={},jr={};function Pc(n){return kr.call(jr,n)?!0:kr.call(kc,n)?!1:xc.test(n)?jr[n]=!0:(kc[n]=!0,!1)}function Vs(n,r,o){if(Pc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function yi(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Zt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Hr,Vc;function Qi(n){if(Hr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Hr=r&&r[1]||"",Vc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hr+n+Vc}var Ga=!1;function Qa(n,r){if(!n||Ga)return"";Ga=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(F){var q=F}Reflect.construct(n,[],K)}else{try{K.call()}catch(F){q=F}n.call(K.prototype)}}else{try{throw Error()}catch(F){q=F}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var C=E.split(`
`),z=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===z.length)for(u=C.length-1,f=z.length-1;1<=u&&0<=f&&C[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==z[f]){var G=`
`+C[u].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=u&&0<=f);break}}}finally{Ga=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Qi(o):""}function Il(n){switch(n.tag){case 26:case 27:case 5:return Qi(n.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return Qa(n.type,!1);case 11:return Qa(n.type.render,!1);case 1:return Qa(n.type,!0);case 31:return Qi("Activity");default:return""}}function Ya(n){try{var r="";do r+=Il(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function gn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Nl(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Hd(n){var r=Nl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ka(n){n._valueTracker||(n._valueTracker=Hd(n))}function Dl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Nl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Gr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Gd=/[\n"\\]/g;function Rt(n){return n.replace(Gd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Nn(n,r,o,u,f,m,E,S){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+gn(r)):n.value!==""+gn(r)&&(n.value=""+gn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Ls(n,E,gn(r)):o!=null?Ls(n,E,gn(o)):u!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+gn(S):n.removeAttribute("name")}function Qr(n,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+gn(o):"",r=r!=null?""+gn(r):o,S||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ls(n,r,o){r==="number"&&Gr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Yi(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+gn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Je(n,r,o){if(r!=null&&(r=""+gn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+gn(o):""}function Yr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(gt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=gn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function qn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Kr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||Kr.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Ol(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Lc(n,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Lc(n,m,r[m])}function Ml(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xa(n){return Yd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Ki=null;function Fn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xi=null,Wi=null;function xl(n){var r=gi(n);if(r&&(n=r.stateNode)){var o=n[Ct]||null;e:switch(n=r.stateNode,r.type){case"input":if(Nn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Ct]||null;if(!f)throw Error(s(90));Nn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Dl(u)}break e;case"textarea":Je(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Yi(n,!!o.multiple,r,!1)}}}var vi=!1;function Uc(n,r,o){if(vi)return n(r,o);vi=!0;try{var u=n(r);return u}finally{if(vi=!1,(Xi!==null||Wi!==null)&&(Oh(),Xi&&(r=Xi,n=Wi,Wi=Xi=null,xl(r),n)))for(r=0;r<n.length;r++)xl(n[r])}}function Xr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jn=!1;if(ii)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){jn=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{jn=!1}var Ei=null,Us=null,$i=null;function kl(){if($i)return $i;var n,r=Us,o=r.length,u,f="value"in Ei?Ei.value:Ei.textContent,m=f.length;for(n=0;n<o&&r[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return $i=f.slice(n,1<u?1-u:void 0)}function Ti(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Si(){return!0}function Pl(){return!1}function Ft(n){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Si:Pl,this.isPropagationStopped=Pl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Ft(Ye),$r=v({},Ye,{view:0,detail:0}),zc=Ft($r),$a,Za,Ai,Zr=v({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ai&&(Ai&&n.type==="mousemove"?($a=n.screenX-Ai.screenX,Za=n.screenY-Ai.screenY):Za=$a=0,Ai=n),$a)},movementY:function(n){return"movementY"in n?n.movementY:Za}}),Hn=Ft(Zr),Bc=v({},Zr,{dataTransfer:0}),Kd=Ft(Bc),Jr=v({},$r,{relatedTarget:0}),Ja=Ft(Jr),Vl=v({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),eo=Ft(Vl),qc=v({},Ye,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),to=Ft(qc),Xd=v({},Ye,{data:0}),Ll=Ft(Xd),ea={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ul(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=jc[n])?!!r[n]:!1}function ta(){return Ul}var Hc=v({},$r,{key:function(n){if(n.key){var r=ea[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ti(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(n){return n.type==="keypress"?Ti(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ti(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),no=Ft(Hc),Gc=v({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zl=Ft(Gc),Zi=v({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Qc=Ft(Zi),Yc=v({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=Ft(Yc),Xc=v({},Zr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),io=Ft(Xc),_n=v({},Ye,{newState:0,oldState:0}),Wc=Ft(_n),$c=[9,13,27,32],wi=ii&&"CompositionEvent"in window,h=null;ii&&"documentMode"in document&&(h=document.documentMode);var _=ii&&"TextEvent"in window&&!h,y=ii&&(!wi||h&&8<h&&11>=h),w=" ",L=!1;function j(n,r){switch(n){case"keyup":return $c.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Le=!1;function Vt(n,r){switch(n){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(L=!0,w);case"textInput":return n=r.data,n===w&&L?null:n;default:return null}}function Ue(n,r){if(Le)return n==="compositionend"||!wi&&j(n,r)?(n=kl(),$i=Us=Ei=null,Le=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!jt[n.type]:r==="textarea"}function Ji(n,r,o,u){Xi?Wi?Wi.push(u):Wi=[u]:Xi=u,r=Lh(r,"onChange"),0<r.length&&(o=new Wa("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Jt=null,bi=null;function Bl(n){pT(n,0)}function Zc(n){var r=_i(n);if(Dl(r))return n}function Vy(n,r){if(n==="change")return r}var Ly=!1;if(ii){var Wd;if(ii){var $d="oninput"in document;if(!$d){var Uy=document.createElement("div");Uy.setAttribute("oninput","return;"),$d=typeof Uy.oninput=="function"}Wd=$d}else Wd=!1;Ly=Wd&&(!document.documentMode||9<document.documentMode)}function zy(){Jt&&(Jt.detachEvent("onpropertychange",By),bi=Jt=null)}function By(n){if(n.propertyName==="value"&&Zc(bi)){var r=[];Ji(r,bi,n,Fn(n)),Uc(Bl,r)}}function WC(n,r,o){n==="focusin"?(zy(),Jt=r,bi=o,Jt.attachEvent("onpropertychange",By)):n==="focusout"&&zy()}function $C(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zc(bi)}function ZC(n,r){if(n==="click")return Zc(r)}function JC(n,r){if(n==="input"||n==="change")return Zc(r)}function eR(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:eR;function ql(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!kr.call(r,f)||!Dn(n[f],r[f]))return!1}return!0}function qy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fy(n,r){var o=qy(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qy(o)}}function jy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?jy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Hy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Gr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Gr(n.document)}return r}function Zd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var tR=ii&&"documentMode"in document&&11>=document.documentMode,so=null,Jd=null,Fl=null,em=!1;function Gy(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;em||so==null||so!==Gr(u)||(u=so,"selectionStart"in u&&Zd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Fl&&ql(Fl,u)||(Fl=u,u=Lh(Jd,"onSelect"),0<u.length&&(r=new Wa("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=so)))}function na(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var ro={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},tm={},Qy={};ii&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function ia(n){if(tm[n])return tm[n];if(!ro[n])return n;var r=ro[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Qy)return tm[n]=r[o];return n}var Yy=ia("animationend"),Ky=ia("animationiteration"),Xy=ia("animationstart"),nR=ia("transitionrun"),iR=ia("transitionstart"),sR=ia("transitioncancel"),Wy=ia("transitionend"),$y=new Map,nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nm.push("scrollEnd");function si(n,r){$y.set(n,r),ni(r,[n])}var Zy=new WeakMap;function Gn(n,r){if(typeof n=="object"&&n!==null){var o=Zy.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Ya(r)},Zy.set(n,r),r)}return{value:n,source:r,stack:Ya(r)}}var Qn=[],ao=0,im=0;function Jc(){for(var n=ao,r=im=ao=0;r<n;){var o=Qn[r];Qn[r++]=null;var u=Qn[r];Qn[r++]=null;var f=Qn[r];Qn[r++]=null;var m=Qn[r];if(Qn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Jy(o,f,m)}}function eh(n,r,o,u){Qn[ao++]=n,Qn[ao++]=r,Qn[ao++]=o,Qn[ao++]=u,im|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function sm(n,r,o,u){return eh(n,r,o,u),th(n)}function oo(n,r){return eh(n,null,null,r),th(n)}function Jy(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-on(o),n=m.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function th(n){if(50<du)throw du=0,cp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var lo={};function rR(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(n,r,o,u){return new rR(n,r,o,u)}function rm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function es(n,r){var o=n.alternate;return o===null?(o=On(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function ev(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function nh(n,r,o,u,f,m){var E=0;if(u=n,typeof n=="function")rm(n)&&(E=1);else if(typeof n=="string")E=o1(n,o,fe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case I:return n=On(31,o,r,f),n.elementType=I,n.lanes=m,n;case B:return sa(o.children,f,m,r);case Z:E=8,f|=24;break;case W:return n=On(12,o,r,f|2),n.elementType=W,n.lanes=m,n;case we:return n=On(13,o,r,f),n.elementType=we,n.lanes=m,n;case Qe:return n=On(19,o,r,f),n.elementType=Qe,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case pe:case ue:E=10;break e;case de:E=9;break e;case Fe:E=11;break e;case k:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=On(E,o,r,f),r.elementType=n,r.type=u,r.lanes=m,r}function sa(n,r,o,u){return n=On(7,n,u,r),n.lanes=o,n}function am(n,r,o){return n=On(6,n,null,r),n.lanes=o,n}function om(n,r,o){return r=On(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var uo=[],co=0,ih=null,sh=0,Yn=[],Kn=0,ra=null,ts=1,ns="";function aa(n,r){uo[co++]=sh,uo[co++]=ih,ih=n,sh=r}function tv(n,r,o){Yn[Kn++]=ts,Yn[Kn++]=ns,Yn[Kn++]=ra,ra=n;var u=ts;n=ns;var f=32-on(u)-1;u&=~(1<<f),o+=1;var m=32-on(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ts=1<<32-on(r)+f|o<<f|u,ns=m+n}else ts=1<<m|o<<f|u,ns=n}function lm(n){n.return!==null&&(aa(n,1),tv(n,1,0))}function um(n){for(;n===ih;)ih=uo[--co],uo[co]=null,sh=uo[--co],uo[co]=null;for(;n===ra;)ra=Yn[--Kn],Yn[Kn]=null,ns=Yn[--Kn],Yn[Kn]=null,ts=Yn[--Kn],Yn[Kn]=null}var yn=null,yt=null,He=!1,oa=null,Ci=!1,cm=Error(s(519));function la(n){var r=Error(s(418,""));throw Gl(Gn(r,n)),cm}function nv(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Pt]=n,r[Ct]=u,o){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(o=0;o<pu.length;o++)xe(pu[o],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Qr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ka(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Yr(r,u.value,u.defaultValue,u.children),Ka(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||vT(r.textContent,o)?(u.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),u.onScroll!=null&&xe("scroll",r),u.onScrollEnd!=null&&xe("scrollend",r),u.onClick!=null&&(r.onclick=Uh),r=!0):r=!1,r||la(n)}function iv(n){for(yn=n.return;yn;)switch(yn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:yn=yn.return}}function jl(n){if(n!==yn)return!1;if(!He)return iv(n),He=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Cp(n.type,n.memoizedProps)),o=!o),o&&yt&&la(n),iv(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){yt=ai(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}yt=null}}else r===27?(r=yt,er(n.type)?(n=Dp,Dp=null,yt=n):yt=r):yt=yn?ai(n.stateNode.nextSibling):null;return!0}function Hl(){yt=yn=null,He=!1}function sv(){var n=oa;return n!==null&&(Tn===null?Tn=n:Tn.push.apply(Tn,n),oa=null),n}function Gl(n){oa===null?oa=[n]:oa.push(n)}var hm=$(null),ua=null,is=null;function zs(n,r,o){J(hm,r._currentValue),r._currentValue=o}function ss(n){n._currentValue=hm.current,se(hm)}function fm(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function dm(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var C=0;C<r.length;C++)if(S.context===r[C]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),fm(m.return,o,n),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),fm(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Ql(n,r,o,u){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Dn(f.pendingProps.value,E.value)||(n!==null?n.push(S):n=[S])}}else if(f===qt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Tu):n=[Tu])}f=f.return}n!==null&&dm(r,n,o,u),r.flags|=262144}function rh(n){for(n=n.firstContext;n!==null;){if(!Dn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ca(n){ua=n,is=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ln(n){return rv(ua,n)}function ah(n,r){return ua===null&&ca(n),rv(n,r)}function rv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},is===null){if(n===null)throw Error(s(308));is=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else is=is.next=r;return o}var aR=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},oR=i.unstable_scheduleCallback,lR=i.unstable_NormalPriority,Ut={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mm(){return{controller:new aR,data:new Map,refCount:0}}function Yl(n){n.refCount--,n.refCount===0&&oR(lR,function(){n.controller.abort()})}var Kl=null,pm=0,ho=0,fo=null;function uR(n,r){if(Kl===null){var o=Kl=[];pm=0,ho=_p(),fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return pm++,r.then(av,av),r}function av(){if(--pm===0&&Kl!==null){fo!==null&&(fo.status="fulfilled");var n=Kl;Kl=null,ho=0,fo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function cR(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var ov=H.S;H.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&uR(n,r),ov!==null&&ov(n,r)};var ha=$(null);function gm(){var n=ha.current;return n!==null?n:ot.pooledCache}function oh(n,r){r===null?J(ha,ha.current):J(ha,r.pool)}function lv(){var n=gm();return n===null?null:{parent:Ut._currentValue,pool:n}}var Xl=Error(s(460)),uv=Error(s(474)),lh=Error(s(542)),_m={then:function(){}};function cv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function uh(){}function hv(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(uh,uh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,dv(n),n;default:if(typeof r.status=="string")r.then(uh,uh);else{if(n=ot,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,dv(n),n}throw Wl=r,Xl}}var Wl=null;function fv(){if(Wl===null)throw Error(s(459));var n=Wl;return Wl=null,n}function dv(n){if(n===Xl||n===lh)throw Error(s(483))}var Bs=!1;function ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function qs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Fs(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=th(n),Jy(n,null,o),r}return eh(n,u,r,o),th(n)}function $l(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,bl(n,o)}}function Em(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Tm=!1;function Zl(){if(Tm){var n=fo;if(n!==null)throw n}}function Jl(n,r,o,u){Tm=!1;var f=n.updateQueue;Bs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,z=C.next;C.next=null,E===null?m=z:E.next=z,E=C;var G=n.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==E&&(S===null?G.firstBaseUpdate=z:S.next=z,G.lastBaseUpdate=C))}if(m!==null){var K=f.baseState;E=0,G=z=C=null,S=m;do{var q=S.lane&-536870913,F=q!==S.lane;if(F?(ze&q)===q:(u&q)===q){q!==0&&q===ho&&(Tm=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ye=n,me=S;q=r;var nt=o;switch(me.tag){case 1:if(ye=me.payload,typeof ye=="function"){K=ye.call(nt,K,q);break e}K=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=me.payload,q=typeof ye=="function"?ye.call(nt,K,q):ye,q==null)break e;K=v({},K,q);break e;case 2:Bs=!0}}q=S.callback,q!==null&&(n.flags|=64,F&&(n.flags|=8192),F=f.callbacks,F===null?f.callbacks=[q]:F.push(q))}else F={lane:q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(z=G=F,C=K):G=G.next=F,E|=q;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;F=S,S=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);G===null&&(C=K),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=G,m===null&&(f.shared.lanes=0),Ws|=E,n.lanes=E,n.memoizedState=K}}function mv(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function pv(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)mv(o[n],r)}var mo=$(null),ch=$(0);function gv(n,r){n=hs,J(ch,n),J(mo,r),hs=n|r.baseLanes}function Sm(){J(ch,hs),J(mo,mo.current)}function Am(){hs=ch.current,se(mo),se(ch)}var js=0,Ce=null,et=null,It=null,hh=!1,po=!1,fa=!1,fh=0,eu=0,go=null,hR=0;function St(){throw Error(s(321))}function wm(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Dn(n[o],r[o]))return!1;return!0}function bm(n,r,o,u,f,m){return js=m,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,H.H=n===null||n.memoizedState===null?Jv:eE,fa=!1,m=o(u,f),fa=!1,po&&(m=yv(r,o,u,f)),_v(n),m}function _v(n){H.H=yh;var r=et!==null&&et.next!==null;if(js=0,It=et=Ce=null,hh=!1,eu=0,go=null,r)throw Error(s(300));n===null||Ht||(n=n.dependencies,n!==null&&rh(n)&&(Ht=!0))}function yv(n,r,o,u){Ce=n;var f=0;do{if(po&&(go=null),eu=0,po=!1,25<=f)throw Error(s(301));if(f+=1,It=et=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=yR,m=r(o,u)}while(po);return m}function fR(){var n=H.H,r=n.useState()[0];return r=typeof r.then=="function"?tu(r):r,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(Ce.flags|=1024),r}function Cm(){var n=fh!==0;return fh=0,n}function Rm(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Im(n){if(hh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}hh=!1}js=0,It=et=Ce=null,po=!1,eu=fh=0,go=null}function vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ce.memoizedState=It=n:It=It.next=n,It}function Nt(){if(et===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var r=It===null?Ce.memoizedState:It.next;if(r!==null)It=r,et=n;else{if(n===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},It===null?Ce.memoizedState=It=n:It=It.next=n}return It}function Nm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tu(n){var r=eu;return eu+=1,go===null&&(go=[]),n=hv(go,n,r),r=Ce,(It===null?r.memoizedState:It.next)===null&&(r=r.alternate,H.H=r===null||r.memoizedState===null?Jv:eE),n}function dh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return tu(n);if(n.$$typeof===ue)return ln(n)}throw Error(s(438,String(n)))}function Dm(n){var r=null,o=Ce.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Nm(),Ce.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function rs(n,r){return typeof r=="function"?r(n):r}function mh(n){var r=Nt();return Om(r,et,n)}function Om(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var S=E=null,C=null,z=r,G=!1;do{var K=z.lane&-536870913;if(K!==z.lane?(ze&K)===K:(js&K)===K){var q=z.revertLane;if(q===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),K===ho&&(G=!0);else if((js&q)===q){z=z.next,q===ho&&(G=!0);continue}else K={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=K,E=m):C=C.next=K,Ce.lanes|=q,Ws|=q;K=z.action,fa&&o(m,K),m=z.hasEagerState?z.eagerState:o(m,K)}else q={lane:K,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=q,E=m):C=C.next=q,Ce.lanes|=K,Ws|=K;z=z.next}while(z!==null&&z!==r);if(C===null?E=m:C.next=S,!Dn(m,n.memoizedState)&&(Ht=!0,G&&(o=fo,o!==null)))throw o;n.memoizedState=m,n.baseState=E,n.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Mm(n){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);Dn(m,r.memoizedState)||(Ht=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function vv(n,r,o){var u=Ce,f=Nt(),m=He;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Dn((et||f).memoizedState,o);E&&(f.memoizedState=o,Ht=!0),f=f.queue;var S=Sv.bind(null,u,f,n);if(nu(2048,8,S,[n]),f.getSnapshot!==r||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,_o(9,ph(),Tv.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(js&124)!==0||Ev(u,r,o)}return o}function Ev(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ce.updateQueue,r===null?(r=Nm(),Ce.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Tv(n,r,o,u){r.value=o,r.getSnapshot=u,Av(r)&&wv(n)}function Sv(n,r,o){return o(function(){Av(r)&&wv(n)})}function Av(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Dn(n,o)}catch{return!0}}function wv(n){var r=oo(n,2);r!==null&&Vn(r,n,2)}function xm(n){var r=vn();if(typeof n=="function"){var o=n;if(n=o(),fa){In(!0);try{o()}finally{In(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},r}function bv(n,r,o,u){return n.baseState=o,Om(n,et,typeof u=="function"?u:rs)}function dR(n,r,o,u,f){if(_h(n))throw Error(s(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};H.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Cv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Cv(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var m=H.T,E={};H.T=E;try{var S=o(f,u),C=H.S;C!==null&&C(E,S),Rv(n,r,S)}catch(z){km(n,r,z)}finally{H.T=m}}else try{m=o(f,u),Rv(n,r,m)}catch(z){km(n,r,z)}}function Rv(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Iv(n,r,u)},function(u){return km(n,r,u)}):Iv(n,r,o)}function Iv(n,r,o){r.status="fulfilled",r.value=o,Nv(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Cv(n,o)))}function km(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Nv(r),r=r.next;while(r!==u)}n.action=null}function Nv(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Dv(n,r){return r}function Ov(n,r){if(He){var o=ot.formState;if(o!==null){e:{var u=Ce;if(He){if(yt){t:{for(var f=yt,m=Ci;f.nodeType!==8;){if(!m){f=null;break t}if(f=ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){yt=ai(f.nextSibling),u=f.data==="F!";break e}}la(u)}u=!1}u&&(r=o[0])}}return o=vn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:r},o.queue=u,o=Wv.bind(null,Ce,u),u.dispatch=o,u=xm(!1),m=zm.bind(null,Ce,!1,u.queue),u=vn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=dR.bind(null,Ce,f,m,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Mv(n){var r=Nt();return xv(r,et,n)}function xv(n,r,o){if(r=Om(n,r,Dv)[0],n=mh(rs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=tu(r)}catch(E){throw E===Xl?lh:E}else u=r;r=Nt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ce.flags|=2048,_o(9,ph(),mR.bind(null,f,o),null)),[u,m,n]}function mR(n,r){n.action=r}function kv(n){var r=Nt(),o=et;if(o!==null)return xv(r,o,n);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function _o(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=Nm(),Ce.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function ph(){return{destroy:void 0,resource:void 0}}function Pv(){return Nt().memoizedState}function gh(n,r,o,u){var f=vn();u=u===void 0?null:u,Ce.flags|=n,f.memoizedState=_o(1|r,ph(),o,u)}function nu(n,r,o,u){var f=Nt();u=u===void 0?null:u;var m=f.memoizedState.inst;et!==null&&u!==null&&wm(u,et.memoizedState.deps)?f.memoizedState=_o(r,m,o,u):(Ce.flags|=n,f.memoizedState=_o(1|r,m,o,u))}function Vv(n,r){gh(8390656,8,n,r)}function Lv(n,r){nu(2048,8,n,r)}function Uv(n,r){return nu(4,2,n,r)}function zv(n,r){return nu(4,4,n,r)}function Bv(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function qv(n,r,o){o=o!=null?o.concat([n]):null,nu(4,4,Bv.bind(null,r,n),o)}function Pm(){}function Fv(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&wm(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function jv(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&wm(r,u[1]))return u[0];if(u=n(),fa){In(!0);try{n()}finally{In(!1)}}return o.memoizedState=[u,r],u}function Vm(n,r,o){return o===void 0||(js&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=QE(),Ce.lanes|=n,Ws|=n,o)}function Hv(n,r,o,u){return Dn(o,r)?o:mo.current!==null?(n=Vm(n,o,u),Dn(n,r)||(Ht=!0),n):(js&42)===0?(Ht=!0,n.memoizedState=o):(n=QE(),Ce.lanes|=n,Ws|=n,r)}function Gv(n,r,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=H.T,S={};H.T=S,zm(n,!1,r,o);try{var C=f(),z=H.S;if(z!==null&&z(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=cR(C,u);iu(n,r,G,Pn(n))}else iu(n,r,u,Pn(n))}catch(K){iu(n,r,{then:function(){},status:"rejected",reason:K},Pn())}finally{ie.p=m,H.T=E}}function pR(){}function Lm(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=Qv(n).queue;Gv(n,f,r,ce,o===null?pR:function(){return Yv(n),o(u)})}function Qv(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:ce},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Yv(n){var r=Qv(n).next.queue;iu(n,r,{},Pn())}function Um(){return ln(Tu)}function Kv(){return Nt().memoizedState}function Xv(){return Nt().memoizedState}function gR(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Pn();n=qs(o);var u=Fs(r,n,o);u!==null&&(Vn(u,r,o),$l(u,r,o)),r={cache:mm()},n.payload=r;return}r=r.return}}function _R(n,r,o){var u=Pn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},_h(n)?$v(r,o):(o=sm(n,r,o,u),o!==null&&(Vn(o,n,u),Zv(o,r,u)))}function Wv(n,r,o){var u=Pn();iu(n,r,o,u)}function iu(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(n))$v(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Dn(S,E))return eh(n,r,f,0),ot===null&&Jc(),!1}catch{}finally{}if(o=sm(n,r,f,u),o!==null)return Vn(o,n,u),Zv(o,r,u),!0}return!1}function zm(n,r,o,u){if(u={lane:2,revertLane:_p(),action:u,hasEagerState:!1,eagerState:null,next:null},_h(n)){if(r)throw Error(s(479))}else r=sm(n,o,u,2),r!==null&&Vn(r,n,2)}function _h(n){var r=n.alternate;return n===Ce||r!==null&&r===Ce}function $v(n,r){po=hh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Zv(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,bl(n,o)}}var yh={readContext:ln,use:dh,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},Jv={readContext:ln,use:dh,useCallback:function(n,r){return vn().memoizedState=[n,r===void 0?null:r],n},useContext:ln,useEffect:Vv,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,gh(4194308,4,Bv.bind(null,r,n),o)},useLayoutEffect:function(n,r){return gh(4194308,4,n,r)},useInsertionEffect:function(n,r){gh(4,2,n,r)},useMemo:function(n,r){var o=vn();r=r===void 0?null:r;var u=n();if(fa){In(!0);try{n()}finally{In(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=vn();if(o!==void 0){var f=o(r);if(fa){In(!0);try{o(r)}finally{In(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=_R.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var r=vn();return n={current:n},r.memoizedState=n},useState:function(n){n=xm(n);var r=n.queue,o=Wv.bind(null,Ce,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Pm,useDeferredValue:function(n,r){var o=vn();return Vm(o,n,r)},useTransition:function(){var n=xm(!1);return n=Gv.bind(null,Ce,n.queue,!0,!1),vn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ce,f=vn();if(He){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(ze&124)!==0||Ev(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Vv(Sv.bind(null,u,m,n),[n]),u.flags|=2048,_o(9,ph(),Tv.bind(null,u,m,o,r),null),o},useId:function(){var n=vn(),r=ot.identifierPrefix;if(He){var o=ns,u=ts;o=(u&~(1<<32-on(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=fh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=hR++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Um,useFormState:Ov,useActionState:Ov,useOptimistic:function(n){var r=vn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=zm.bind(null,Ce,!0,o),o.dispatch=r,[n,r]},useMemoCache:Dm,useCacheRefresh:function(){return vn().memoizedState=gR.bind(null,Ce)}},eE={readContext:ln,use:dh,useCallback:Fv,useContext:ln,useEffect:Lv,useImperativeHandle:qv,useInsertionEffect:Uv,useLayoutEffect:zv,useMemo:jv,useReducer:mh,useRef:Pv,useState:function(){return mh(rs)},useDebugValue:Pm,useDeferredValue:function(n,r){var o=Nt();return Hv(o,et.memoizedState,n,r)},useTransition:function(){var n=mh(rs)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:vv,useId:Kv,useHostTransitionStatus:Um,useFormState:Mv,useActionState:Mv,useOptimistic:function(n,r){var o=Nt();return bv(o,et,n,r)},useMemoCache:Dm,useCacheRefresh:Xv},yR={readContext:ln,use:dh,useCallback:Fv,useContext:ln,useEffect:Lv,useImperativeHandle:qv,useInsertionEffect:Uv,useLayoutEffect:zv,useMemo:jv,useReducer:Mm,useRef:Pv,useState:function(){return Mm(rs)},useDebugValue:Pm,useDeferredValue:function(n,r){var o=Nt();return et===null?Vm(o,n,r):Hv(o,et.memoizedState,n,r)},useTransition:function(){var n=Mm(rs)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:tu(n),r]},useSyncExternalStore:vv,useId:Kv,useHostTransitionStatus:Um,useFormState:kv,useActionState:kv,useOptimistic:function(n,r){var o=Nt();return et!==null?bv(o,et,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Dm,useCacheRefresh:Xv},yo=null,su=0;function vh(n){var r=su;return su+=1,yo===null&&(yo=[]),hv(yo,n,r)}function ru(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Eh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function tE(n){var r=n._init;return r(n._payload)}function nE(n){function r(P,D){if(n){var U=P.deletions;U===null?(P.deletions=[D],P.flags|=16):U.push(D)}}function o(P,D){if(!n)return null;for(;D!==null;)r(P,D),D=D.sibling;return null}function u(P){for(var D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function f(P,D){return P=es(P,D),P.index=0,P.sibling=null,P}function m(P,D,U){return P.index=U,n?(U=P.alternate,U!==null?(U=U.index,U<D?(P.flags|=67108866,D):U):(P.flags|=67108866,D)):(P.flags|=1048576,D)}function E(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function S(P,D,U,Q){return D===null||D.tag!==6?(D=am(U,P.mode,Q),D.return=P,D):(D=f(D,U),D.return=P,D)}function C(P,D,U,Q){var oe=U.type;return oe===B?G(P,D,U.props.children,Q,U.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&tE(oe)===D.type)?(D=f(D,U.props),ru(D,U),D.return=P,D):(D=nh(U.type,U.key,U.props,null,P.mode,Q),ru(D,U),D.return=P,D)}function z(P,D,U,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=om(U,P.mode,Q),D.return=P,D):(D=f(D,U.children||[]),D.return=P,D)}function G(P,D,U,Q,oe){return D===null||D.tag!==7?(D=sa(U,P.mode,Q,oe),D.return=P,D):(D=f(D,U),D.return=P,D)}function K(P,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=am(""+D,P.mode,U),D.return=P,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return U=nh(D.type,D.key,D.props,null,P.mode,U),ru(U,D),U.return=P,U;case O:return D=om(D,P.mode,U),D.return=P,D;case b:var Q=D._init;return D=Q(D._payload),K(P,D,U)}if(gt(D)||V(D))return D=sa(D,P.mode,U,null),D.return=P,D;if(typeof D.then=="function")return K(P,vh(D),U);if(D.$$typeof===ue)return K(P,ah(P,D),U);Eh(P,D)}return null}function q(P,D,U,Q){var oe=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return oe!==null?null:S(P,D,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return U.key===oe?C(P,D,U,Q):null;case O:return U.key===oe?z(P,D,U,Q):null;case b:return oe=U._init,U=oe(U._payload),q(P,D,U,Q)}if(gt(U)||V(U))return oe!==null?null:G(P,D,U,Q,null);if(typeof U.then=="function")return q(P,D,vh(U),Q);if(U.$$typeof===ue)return q(P,D,ah(P,U),Q);Eh(P,U)}return null}function F(P,D,U,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return P=P.get(U)||null,S(D,P,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return P=P.get(Q.key===null?U:Q.key)||null,C(D,P,Q,oe);case O:return P=P.get(Q.key===null?U:Q.key)||null,z(D,P,Q,oe);case b:var Ne=Q._init;return Q=Ne(Q._payload),F(P,D,U,Q,oe)}if(gt(Q)||V(Q))return P=P.get(U)||null,G(D,P,Q,oe,null);if(typeof Q.then=="function")return F(P,D,U,vh(Q),oe);if(Q.$$typeof===ue)return F(P,D,U,ah(D,Q),oe);Eh(D,Q)}return null}function ye(P,D,U,Q){for(var oe=null,Ne=null,le=D,ge=D=0,Qt=null;le!==null&&ge<U.length;ge++){le.index>ge?(Qt=le,le=null):Qt=le.sibling;var qe=q(P,le,U[ge],Q);if(qe===null){le===null&&(le=Qt);break}n&&le&&qe.alternate===null&&r(P,le),D=m(qe,D,ge),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe,le=Qt}if(ge===U.length)return o(P,le),He&&aa(P,ge),oe;if(le===null){for(;ge<U.length;ge++)le=K(P,U[ge],Q),le!==null&&(D=m(le,D,ge),Ne===null?oe=le:Ne.sibling=le,Ne=le);return He&&aa(P,ge),oe}for(le=u(le);ge<U.length;ge++)Qt=F(le,P,ge,U[ge],Q),Qt!==null&&(n&&Qt.alternate!==null&&le.delete(Qt.key===null?ge:Qt.key),D=m(Qt,D,ge),Ne===null?oe=Qt:Ne.sibling=Qt,Ne=Qt);return n&&le.forEach(function(rr){return r(P,rr)}),He&&aa(P,ge),oe}function me(P,D,U,Q){if(U==null)throw Error(s(151));for(var oe=null,Ne=null,le=D,ge=D=0,Qt=null,qe=U.next();le!==null&&!qe.done;ge++,qe=U.next()){le.index>ge?(Qt=le,le=null):Qt=le.sibling;var rr=q(P,le,qe.value,Q);if(rr===null){le===null&&(le=Qt);break}n&&le&&rr.alternate===null&&r(P,le),D=m(rr,D,ge),Ne===null?oe=rr:Ne.sibling=rr,Ne=rr,le=Qt}if(qe.done)return o(P,le),He&&aa(P,ge),oe;if(le===null){for(;!qe.done;ge++,qe=U.next())qe=K(P,qe.value,Q),qe!==null&&(D=m(qe,D,ge),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe);return He&&aa(P,ge),oe}for(le=u(le);!qe.done;ge++,qe=U.next())qe=F(le,P,ge,qe.value,Q),qe!==null&&(n&&qe.alternate!==null&&le.delete(qe.key===null?ge:qe.key),D=m(qe,D,ge),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe);return n&&le.forEach(function(v1){return r(P,v1)}),He&&aa(P,ge),oe}function nt(P,D,U,Q){if(typeof U=="object"&&U!==null&&U.type===B&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case A:e:{for(var oe=U.key;D!==null;){if(D.key===oe){if(oe=U.type,oe===B){if(D.tag===7){o(P,D.sibling),Q=f(D,U.props.children),Q.return=P,P=Q;break e}}else if(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&tE(oe)===D.type){o(P,D.sibling),Q=f(D,U.props),ru(Q,U),Q.return=P,P=Q;break e}o(P,D);break}else r(P,D);D=D.sibling}U.type===B?(Q=sa(U.props.children,P.mode,Q,U.key),Q.return=P,P=Q):(Q=nh(U.type,U.key,U.props,null,P.mode,Q),ru(Q,U),Q.return=P,P=Q)}return E(P);case O:e:{for(oe=U.key;D!==null;){if(D.key===oe)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){o(P,D.sibling),Q=f(D,U.children||[]),Q.return=P,P=Q;break e}else{o(P,D);break}else r(P,D);D=D.sibling}Q=om(U,P.mode,Q),Q.return=P,P=Q}return E(P);case b:return oe=U._init,U=oe(U._payload),nt(P,D,U,Q)}if(gt(U))return ye(P,D,U,Q);if(V(U)){if(oe=V(U),typeof oe!="function")throw Error(s(150));return U=oe.call(U),me(P,D,U,Q)}if(typeof U.then=="function")return nt(P,D,vh(U),Q);if(U.$$typeof===ue)return nt(P,D,ah(P,U),Q);Eh(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(o(P,D.sibling),Q=f(D,U),Q.return=P,P=Q):(o(P,D),Q=am(U,P.mode,Q),Q.return=P,P=Q),E(P)):o(P,D)}return function(P,D,U,Q){try{su=0;var oe=nt(P,D,U,Q);return yo=null,oe}catch(le){if(le===Xl||le===lh)throw le;var Ne=On(29,le,null,P.mode);return Ne.lanes=Q,Ne.return=P,Ne}finally{}}}var vo=nE(!0),iE=nE(!1),Xn=$(null),Ri=null;function Hs(n){var r=n.alternate;J(zt,zt.current&1),J(Xn,n),Ri===null&&(r===null||mo.current!==null||r.memoizedState!==null)&&(Ri=n)}function sE(n){if(n.tag===22){if(J(zt,zt.current),J(Xn,n),Ri===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ri=n)}}else Gs()}function Gs(){J(zt,zt.current),J(Xn,Xn.current)}function as(n){se(Xn),Ri===n&&(Ri=null),se(zt)}var zt=$(0);function Th(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Np(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Bm(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var qm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Pn(),f=qs(u);f.payload=r,o!=null&&(f.callback=o),r=Fs(n,f,u),r!==null&&(Vn(r,n,u),$l(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Pn(),f=qs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Fs(n,f,u),r!==null&&(Vn(r,n,u),$l(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Pn(),u=qs(o);u.tag=2,r!=null&&(u.callback=r),r=Fs(n,u,o),r!==null&&(Vn(r,n,o),$l(r,n,o))}};function rE(n,r,o,u,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!ql(o,u)||!ql(f,m):!0}function aE(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&qm.enqueueReplaceState(r,r.state,null)}function da(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Sh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function oE(n){Sh(n)}function lE(n){console.error(n)}function uE(n){Sh(n)}function Ah(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function cE(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Fm(n,r,o){return o=qs(o),o.tag=3,o.payload={element:null},o.callback=function(){Ah(n,r)},o}function hE(n){return n=qs(n),n.tag=3,n}function fE(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;n.payload=function(){return f(m)},n.callback=function(){cE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){cE(r,o,u),typeof f!="function"&&($s===null?$s=new Set([this]):$s.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function vR(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Ql(r,o,f,!0),o=Xn.current,o!==null){switch(o.tag){case 13:return Ri===null?fp():o.alternate===null&&vt===0&&(vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===_m?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),mp(n,u,f)),!1;case 22:return o.flags|=65536,u===_m?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),mp(n,u,f)),!1}throw Error(s(435,o.tag))}return mp(n,u,f),fp(),!1}if(He)return r=Xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==cm&&(n=Error(s(422),{cause:u}),Gl(Gn(n,o)))):(u!==cm&&(r=Error(s(423),{cause:u}),Gl(Gn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Gn(u,o),f=Fm(n.stateNode,u,f),Em(n,f),vt!==4&&(vt=2)),!1;var m=Error(s(520),{cause:u});if(m=Gn(m,o),fu===null?fu=[m]:fu.push(m),vt!==4&&(vt=2),r===null)return!0;u=Gn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Fm(o.stateNode,u,n),Em(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($s===null||!$s.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=hE(f),fE(f,n,o,u),Em(o,f),!1}o=o.return}while(o!==null);return!1}var dE=Error(s(461)),Ht=!1;function en(n,r,o,u){r.child=n===null?iE(r,null,o,u):vo(r,n.child,o,u)}function mE(n,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ca(r),u=bm(n,r,o,E,m,f),S=Cm(),n!==null&&!Ht?(Rm(n,r,f),os(n,r,f)):(He&&S&&lm(r),r.flags|=1,en(n,r,u,f),r.child)}function pE(n,r,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!rm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,gE(n,r,m,u,f)):(n=nh(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Wm(n,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:ql,o(E,u)&&n.ref===r.ref)return os(n,r,f)}return r.flags|=1,n=es(m,u),n.ref=r.ref,n.return=r,r.child=n}function gE(n,r,o,u,f){if(n!==null){var m=n.memoizedProps;if(ql(m,u)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=u=m,Wm(n,f))(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,os(n,r,f)}return jm(n,r,o,u,f)}function _E(n,r,o){var u=r.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,n!==null){for(f=r.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return yE(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&oh(r,m!==null?m.cachePool:null),m!==null?gv(r,m):Sm(),sE(r);else return r.lanes=r.childLanes=536870912,yE(n,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(oh(r,m.cachePool),gv(r,m),Gs(),r.memoizedState=null):(n!==null&&oh(r,null),Sm(),Gs());return en(n,r,f,o),r.child}function yE(n,r,o,u){var f=gm();return f=f===null?null:{parent:Ut._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&oh(r,null),Sm(),sE(r),n!==null&&Ql(n,r,u,!0),null}function wh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function jm(n,r,o,u,f){return ca(r),o=bm(n,r,o,u,void 0,f),u=Cm(),n!==null&&!Ht?(Rm(n,r,f),os(n,r,f)):(He&&u&&lm(r),r.flags|=1,en(n,r,o,f),r.child)}function vE(n,r,o,u,f,m){return ca(r),r.updateQueue=null,o=yv(r,u,o,f),_v(n),u=Cm(),n!==null&&!Ht?(Rm(n,r,m),os(n,r,m)):(He&&u&&lm(r),r.flags|=1,en(n,r,o,m),r.child)}function EE(n,r,o,u,f){if(ca(r),r.stateNode===null){var m=lo,E=o.contextType;typeof E=="object"&&E!==null&&(m=ln(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=qm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},ym(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?ln(E):lo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Bm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&qm.enqueueReplaceState(m,m.state,null),Jl(r,u,m,f),Zl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var S=r.memoizedProps,C=da(o,S);m.props=C;var z=m.context,G=o.contextType;E=lo,typeof G=="object"&&G!==null&&(E=ln(G));var K=o.getDerivedStateFromProps;G=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,G||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||z!==E)&&aE(r,m,u,E),Bs=!1;var q=r.memoizedState;m.state=q,Jl(r,u,m,f),Zl(),z=r.memoizedState,S||q!==z||Bs?(typeof K=="function"&&(Bm(r,o,K,u),z=r.memoizedState),(C=Bs||rE(r,o,C,u,q,z,E))?(G||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),m.props=u,m.state=z,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,vm(n,r),E=r.memoizedProps,G=da(o,E),m.props=G,K=r.pendingProps,q=m.context,z=o.contextType,C=lo,typeof z=="object"&&z!==null&&(C=ln(z)),S=o.getDerivedStateFromProps,(z=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==K||q!==C)&&aE(r,m,u,C),Bs=!1,q=r.memoizedState,m.state=q,Jl(r,u,m,f),Zl();var F=r.memoizedState;E!==K||q!==F||Bs||n!==null&&n.dependencies!==null&&rh(n.dependencies)?(typeof S=="function"&&(Bm(r,o,S,u),F=r.memoizedState),(G=Bs||rE(r,o,G,u,q,F,C)||n!==null&&n.dependencies!==null&&rh(n.dependencies))?(z||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,F,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,F,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=C,u=G):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,wh(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=vo(r,n.child,null,f),r.child=vo(r,null,o,f)):en(n,r,o,f),r.memoizedState=m.state,n=r.child):n=os(n,r,f),n}function TE(n,r,o,u){return Hl(),r.flags|=256,en(n,r,o,u),r.child}var Hm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gm(n){return{baseLanes:n,cachePool:lv()}}function Qm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Wn),n}function SE(n,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(zt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(He){if(f?Hs(r):Gs(),He){var S=yt,C;if(C=S){e:{for(C=S,S=Ci;C.nodeType!==8;){if(!S){S=null;break e}if(C=ai(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:ra!==null?{id:ts,overflow:ns}:null,retryLane:536870912,hydrationErrors:null},C=On(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,yn=r,yt=null,C=!0):C=!1}C||la(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Np(S)?r.lanes=32:r.lanes=536870912,null;as(r)}return S=u.children,u=u.fallback,f?(Gs(),f=r.mode,S=bh({mode:"hidden",children:S},f),u=sa(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Gm(o),f.childLanes=Qm(n,E,o),r.memoizedState=Hm,u):(Hs(r),Ym(r,S))}if(C=n.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(m)r.flags&256?(Hs(r),r.flags&=-257,r=Km(n,r,o)):r.memoizedState!==null?(Gs(),r.child=n.child,r.flags|=128,r=null):(Gs(),f=u.fallback,S=r.mode,u=bh({mode:"visible",children:u.children},S),f=sa(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,vo(r,n.child,null,o),u=r.child,u.memoizedState=Gm(o),u.childLanes=Qm(n,E,o),r.memoizedState=Hm,r=f);else if(Hs(r),Np(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(s(419)),u.stack="",u.digest=E,Gl({value:u,source:null,stack:null}),r=Km(n,r,o)}else if(Ht||Ql(n,r,o,!1),E=(o&n.childLanes)!==0,Ht||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ms(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,oo(n,u),Vn(E,n,u),dE;S.data==="$?"||fp(),r=Km(n,r,o)}else S.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=C.treeContext,yt=ai(S.nextSibling),yn=r,He=!0,oa=null,Ci=!1,n!==null&&(Yn[Kn++]=ts,Yn[Kn++]=ns,Yn[Kn++]=ra,ts=n.id,ns=n.overflow,ra=r),r=Ym(r,u.children),r.flags|=4096);return r}return f?(Gs(),f=u.fallback,S=r.mode,C=n.child,z=C.sibling,u=es(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,z!==null?f=es(z,f):(f=sa(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=n.child.memoizedState,S===null?S=Gm(o):(C=S.cachePool,C!==null?(z=Ut._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=lv(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Qm(n,E,o),r.memoizedState=Hm,u):(Hs(r),o=n.child,n=o.sibling,o=es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Ym(n,r){return r=bh({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function bh(n,r){return n=On(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Km(n,r,o){return vo(r,n.child,null,o),n=Ym(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function AE(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),fm(n.return,r,o)}function Xm(n,r,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function wE(n,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(en(n,r,u.children,o),u=zt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&AE(n,o,r);else if(n.tag===19)AE(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(J(zt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&Th(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Xm(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Th(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Xm(r,!0,o,null,m);break;case"together":Xm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function os(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ws|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Ql(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=es(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=es(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Wm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&rh(n)))}function ER(n,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),zs(r,Ut,n.memoizedState.cache),Hl();break;case 27:case 5:Os(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:zs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Hs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?SE(n,r,o):(Hs(r),n=os(n,r,o),n!==null?n.sibling:null);Hs(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Ql(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return wE(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(zt,zt.current),u)break;return null;case 22:case 23:return r.lanes=0,_E(n,r,o);case 24:zs(r,Ut,n.memoizedState.cache)}return os(n,r,o)}function bE(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ht=!0;else{if(!Wm(n,o)&&(r.flags&128)===0)return Ht=!1,ER(n,r,o);Ht=(n.flags&131072)!==0}else Ht=!1,He&&(r.flags&1048576)!==0&&tv(r,sh,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")rm(u)?(n=da(u,n),r.tag=1,r=EE(null,r,u,n,o)):(r.tag=0,r=jm(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===Fe){r.tag=11,r=mE(null,r,u,n,o);break e}else if(f===k){r.tag=14,r=pE(null,r,u,n,o);break e}}throw r=$t(u)||u,Error(s(306,r,""))}}return r;case 0:return jm(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=da(u,r.pendingProps),EE(n,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,vm(n,r),Jl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,zs(r,Ut,u),u!==m.cache&&dm(r,[Ut],o,!0),Zl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=TE(n,r,u,o);break e}else if(u!==f){f=Gn(Error(s(424)),r),Gl(f),r=TE(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(yt=ai(n.firstChild),yn=r,He=!0,oa=null,Ci=!0,o=iE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Hl(),u===f){r=os(n,r,o);break e}en(n,r,u,o)}r=r.child}return r;case 26:return wh(n,r),n===null?(o=NT(r.type,null,r.pendingProps,null))?r.memoizedState=o:He||(o=r.type,n=r.pendingProps,u=zh(Te.current).createElement(o),u[Pt]=r,u[Ct]=n,nn(u,o,n),Tt(u),r.stateNode=u):r.memoizedState=NT(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Os(r),n===null&&He&&(u=r.stateNode=CT(r.type,r.pendingProps,Te.current),yn=r,Ci=!0,f=yt,er(r.type)?(Dp=f,yt=ai(u.firstChild)):yt=f),en(n,r,r.pendingProps.children,o),wh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&He&&((f=u=yt)&&(u=KR(u,r.type,r.pendingProps,Ci),u!==null?(r.stateNode=u,yn=r,yt=ai(u.firstChild),Ci=!1,f=!0):f=!1),f||la(r)),Os(r),f=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,Cp(f,m)?u=null:E!==null&&Cp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=bm(n,r,fR,null,null,o),Tu._currentValue=f),wh(n,r),en(n,r,u,o),r.child;case 6:return n===null&&He&&((n=o=yt)&&(o=XR(o,r.pendingProps,Ci),o!==null?(r.stateNode=o,yn=r,yt=null,n=!0):n=!1),n||la(r)),null;case 13:return SE(n,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=vo(r,null,u,o):en(n,r,u,o),r.child;case 11:return mE(n,r,r.type,r.pendingProps,o);case 7:return en(n,r,r.pendingProps,o),r.child;case 8:return en(n,r,r.pendingProps.children,o),r.child;case 12:return en(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,zs(r,r.type,u.value),en(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ca(r),f=ln(f),u=u(f),r.flags|=1,en(n,r,u,o),r.child;case 14:return pE(n,r,r.type,r.pendingProps,o);case 15:return gE(n,r,r.type,r.pendingProps,o);case 19:return wE(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=bh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=es(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return _E(n,r,o);case 24:return ca(r),u=ln(Ut),n===null?(f=gm(),f===null&&(f=ot,m=mm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},ym(r),zs(r,Ut,f)):((n.lanes&o)!==0&&(vm(n,r),Jl(r,null,null,o),Zl()),f=n.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),zs(r,Ut,u)):(u=m.cache,zs(r,Ut,u),u!==f.cache&&dm(r,[Ut],o,!0))),en(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ls(n){n.flags|=4}function CE(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!kT(r)){if(r=Xn.current,r!==null&&((ze&4194048)===ze?Ri!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==Ri))throw Wl=_m,uv;n.flags|=8192}}function Ch(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Al():536870912,n.lanes|=r,Ao|=r)}function au(n,r){if(!He)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function TR(n,r,o){var u=r.pendingProps;switch(um(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ss(Ut),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(jl(r)?ls(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,sv())),mt(r),null;case 26:return o=r.memoizedState,n===null?(ls(r),o!==null?(mt(r),CE(r,o)):(mt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(ls(r),mt(r),CE(r,o)):(mt(r),r.flags&=-16777217):(n.memoizedProps!==u&&ls(r),mt(r),r.flags&=-16777217),null;case 27:qi(r),o=Te.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}n=fe.current,jl(r)?nv(r):(n=CT(f,u,o),r.stateNode=n,ls(r))}return mt(r),null;case 5:if(qi(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(n=fe.current,jl(r))nv(r);else{switch(f=zh(Te.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Pt]=r,n[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(nn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ls(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Te.current,jl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=yn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Pt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||vT(n.nodeValue,o)),n||la(r)}else n=zh(n).createTextNode(u),n[Pt]=r,r.stateNode=n}return mt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=jl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Pt]=r}else Hl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else f=sv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(as(r),r):(as(r),null)}if(as(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),Ch(r,r.updateQueue),mt(r),null;case 4:return mi(),n===null&&Tp(r.stateNode.containerInfo),mt(r),null;case 10:return ss(r.type),mt(r),null;case 19:if(se(zt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)au(f,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Th(n),m!==null){for(r.flags|=128,au(f,!1),n=m.updateQueue,r.updateQueue=n,Ch(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)ev(o,n),o=o.sibling;return J(zt,zt.current&1|2),r.child}n=n.sibling}f.tail!==null&&zn()>Nh&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304)}else{if(!u)if(n=Th(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,Ch(r,n),au(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!He)return mt(r),null}else 2*zn()-f.renderingStartTime>Nh&&o!==536870912&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(n=f.last,n!==null?n.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=zn(),r.sibling=null,n=zt.current,J(zt,u?n&1|2:n&1),r):(mt(r),null);case 22:case 23:return as(r),Am(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&Ch(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&se(ha),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ss(Ut),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function SR(n,r){switch(um(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ss(Ut),mi(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return qi(r),null;case 13:if(as(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Hl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return se(zt),null;case 4:return mi(),null;case 10:return ss(r.type),null;case 22:case 23:return as(r),Am(),n!==null&&se(ha),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ss(Ut),null;case 25:return null;default:return null}}function RE(n,r){switch(um(r),r.tag){case 3:ss(Ut),mi();break;case 26:case 27:case 5:qi(r);break;case 4:mi();break;case 13:as(r);break;case 19:se(zt);break;case 10:ss(r.type);break;case 22:case 23:as(r),Am(),n!==null&&se(ha);break;case 24:ss(Ut)}}function ou(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){st(r,r.return,S)}}function Qs(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&n)===n){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var C=o,z=S;try{z()}catch(G){st(f,C,G)}}}u=u.next}while(u!==m)}}catch(G){st(r,r.return,G)}}function IE(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{pv(r,o)}catch(u){st(n,n.return,u)}}}function NE(n,r,o){o.props=da(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){st(n,r,u)}}function lu(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){st(n,r,f)}}function Ii(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(n,r,f)}else o.current=null}function DE(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(n,n.return,f)}}function $m(n,r,o){try{var u=n.stateNode;jR(u,n.type,o,r),u[Ct]=r}catch(f){st(n,n.return,f)}}function OE(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&er(n.type)||n.tag===4}function Zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||OE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&er(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jm(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Uh));else if(u!==4&&(u===27&&er(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Jm(n,r,o),n=n.sibling;n!==null;)Jm(n,r,o),n=n.sibling}function Rh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&er(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Rh(n,r,o),n=n.sibling;n!==null;)Rh(n,r,o),n=n.sibling}function ME(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);nn(r,u,o),r[Pt]=n,r[Ct]=o}catch(m){st(n,n.return,m)}}var us=!1,At=!1,ep=!1,xE=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function AR(n,r){if(n=n.containerInfo,wp=Gh,n=Hy(n),Zd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,C=-1,z=0,G=0,K=n,q=null;t:for(;;){for(var F;K!==o||f!==0&&K.nodeType!==3||(S=E+f),K!==m||u!==0&&K.nodeType!==3||(C=E+u),K.nodeType===3&&(E+=K.nodeValue.length),(F=K.firstChild)!==null;)q=K,K=F;for(;;){if(K===n)break t;if(q===o&&++z===f&&(S=E),q===m&&++G===u&&(C=E),(F=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=F}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(bp={focusedElem:n,selectionRange:o},Gh=!1,Gt=r;Gt!==null;)if(r=Gt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Gt=n;else for(;Gt!==null;){switch(r=Gt,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var ye=da(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ye,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(me){st(o,o.return,me)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Ip(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ip(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Gt=n;break}Gt=r.return}}function kE(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ys(n,o),u&4&&ou(5,o);break;case 1:if(Ys(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=da(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&IE(o),u&512&&lu(o,o.return);break;case 3:if(Ys(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{pv(n,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&ME(o);case 26:case 5:Ys(n,o),r===null&&u&4&&DE(o),u&512&&lu(o,o.return);break;case 12:Ys(n,o);break;case 13:Ys(n,o),u&4&&LE(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=MR.bind(null,o),WR(n,o))));break;case 22:if(u=o.memoizedState!==null||us,!u){r=r!==null&&r.memoizedState!==null||At,f=us;var m=At;us=u,(At=r)&&!m?Ks(n,o,(o.subtreeFlags&8772)!==0):Ys(n,o),us=f,At=m}break;case 30:break;default:Ys(n,o)}}function PE(n){var r=n.alternate;r!==null&&(n.alternate=null,PE(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ps(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ft=null,En=!1;function cs(n,r,o){for(o=o.child;o!==null;)VE(n,r,o),o=o.sibling}function VE(n,r,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:At||Ii(o,r),cs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:At||Ii(o,r);var u=ft,f=En;er(o.type)&&(ft=o.stateNode,En=!1),cs(n,r,o),_u(o.stateNode),ft=u,En=f;break;case 5:At||Ii(o,r);case 6:if(u=ft,f=En,ft=null,cs(n,r,o),ft=u,En=f,ft!==null)if(En)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{ft.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:ft!==null&&(En?(n=ft,wT(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),bu(n)):wT(ft,o.stateNode));break;case 4:u=ft,f=En,ft=o.stateNode.containerInfo,En=!0,cs(n,r,o),ft=u,En=f;break;case 0:case 11:case 14:case 15:At||Qs(2,o,r),At||Qs(4,o,r),cs(n,r,o);break;case 1:At||(Ii(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&NE(o,r,u)),cs(n,r,o);break;case 21:cs(n,r,o);break;case 22:At=(u=At)||o.memoizedState!==null,cs(n,r,o),At=u;break;default:cs(n,r,o)}}function LE(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{bu(n)}catch(o){st(r,r.return,o)}}function wR(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new xE),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new xE),r;default:throw Error(s(435,n.tag))}}function tp(n,r){var o=wR(n);r.forEach(function(u){var f=xR.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Mn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=n,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(er(S.type)){ft=S.stateNode,En=!1;break e}break;case 5:ft=S.stateNode,En=!1;break e;case 3:case 4:ft=S.stateNode.containerInfo,En=!0;break e}S=S.return}if(ft===null)throw Error(s(160));VE(m,E,f),ft=null,En=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)UE(r,n),r=r.sibling}var ri=null;function UE(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Mn(r,n),xn(n),u&4&&(Qs(3,n,n.return),ou(3,n),Qs(5,n,n.return));break;case 1:Mn(r,n),xn(n),u&512&&(At||o===null||Ii(o,o.return)),u&64&&us&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ri;if(Mn(r,n),xn(n),u&512&&(At||o===null||Ii(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Fr]||m[Pt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),nn(m,u,o),m[Pt]=n,Tt(m),u=m;break e;case"link":var E=MT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),nn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=MT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),nn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Pt]=n,Tt(m),u=m}n.stateNode=u}else xT(f,n.type,n.stateNode);else n.stateNode=OT(f,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?xT(f,n.type,n.stateNode):OT(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&$m(n,n.memoizedProps,o.memoizedProps)}break;case 27:Mn(r,n),xn(n),u&512&&(At||o===null||Ii(o,o.return)),o!==null&&u&4&&$m(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Mn(r,n),xn(n),u&512&&(At||o===null||Ii(o,o.return)),n.flags&32){f=n.stateNode;try{qn(f,"")}catch(F){st(n,n.return,F)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,$m(n,f,o!==null?o.memoizedProps:f)),u&1024&&(ep=!0);break;case 6:if(Mn(r,n),xn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(F){st(n,n.return,F)}}break;case 3:if(Fh=null,f=ri,ri=Bh(r.containerInfo),Mn(r,n),ri=f,xn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{bu(r.containerInfo)}catch(F){st(n,n.return,F)}ep&&(ep=!1,zE(n));break;case 4:u=ri,ri=Bh(n.stateNode.containerInfo),Mn(r,n),xn(n),ri=u;break;case 12:Mn(r,n),xn(n);break;case 13:Mn(r,n),xn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(op=zn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,tp(n,u)));break;case 22:f=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,z=us,G=At;if(us=z||f,At=G||C,Mn(r,n),At=G,us=z,xn(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||us||At||ma(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=C.stateNode;var K=C.memoizedProps.style,q=K!=null&&K.hasOwnProperty("display")?K.display:null;S.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){st(C,C.return,F)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){st(C,C.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,tp(n,o))));break;case 19:Mn(r,n),xn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,tp(n,u)));break;case 30:break;case 21:break;default:Mn(r,n),xn(n)}}function xn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(OE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Zm(n);Rh(n,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(qn(E,""),o.flags&=-33);var S=Zm(n);Rh(n,S,E);break;case 3:case 4:var C=o.stateNode.containerInfo,z=Zm(n);Jm(n,z,C);break;default:throw Error(s(161))}}catch(G){st(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function zE(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;zE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ys(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)kE(n,r.alternate,r),r=r.sibling}function ma(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Qs(4,r,r.return),ma(r);break;case 1:Ii(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&NE(r,r.return,o),ma(r);break;case 27:_u(r.stateNode);case 26:case 5:Ii(r,r.return),ma(r);break;case 22:r.memoizedState===null&&ma(r);break;case 30:ma(r);break;default:ma(r)}n=n.sibling}}function Ks(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ks(f,m,o),ou(4,m);break;case 1:if(Ks(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){st(u,u.return,z)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)mv(C[f],S)}catch(z){st(u,u.return,z)}}o&&E&64&&IE(m),lu(m,m.return);break;case 27:ME(m);case 26:case 5:Ks(f,m,o),o&&u===null&&E&4&&DE(m),lu(m,m.return);break;case 12:Ks(f,m,o);break;case 13:Ks(f,m,o),o&&E&4&&LE(f,m);break;case 22:m.memoizedState===null&&Ks(f,m,o),lu(m,m.return);break;case 30:break;default:Ks(f,m,o)}r=r.sibling}}function np(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Yl(o))}function ip(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Yl(n))}function Ni(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)BE(n,r,o,u),r=r.sibling}function BE(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ni(n,r,o,u),f&2048&&ou(9,r);break;case 1:Ni(n,r,o,u);break;case 3:Ni(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Yl(n)));break;case 12:if(f&2048){Ni(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Ni(n,r,o,u);break;case 13:Ni(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ni(n,r,o,u):uu(n,r):m._visibility&2?Ni(n,r,o,u):(m._visibility|=2,Eo(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&np(E,r);break;case 24:Ni(n,r,o,u),f&2048&&ip(r.alternate,r);break;default:Ni(n,r,o,u)}}function Eo(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,E=r,S=o,C=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:Eo(m,E,S,C,f),ou(8,E);break;case 23:break;case 22:var G=E.stateNode;E.memoizedState!==null?G._visibility&2?Eo(m,E,S,C,f):uu(m,E):(G._visibility|=2,Eo(m,E,S,C,f)),f&&z&2048&&np(E.alternate,E);break;case 24:Eo(m,E,S,C,f),f&&z&2048&&ip(E.alternate,E);break;default:Eo(m,E,S,C,f)}r=r.sibling}}function uu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:uu(o,u),f&2048&&np(u.alternate,u);break;case 24:uu(o,u),f&2048&&ip(u.alternate,u);break;default:uu(o,u)}r=r.sibling}}var cu=8192;function To(n){if(n.subtreeFlags&cu)for(n=n.child;n!==null;)qE(n),n=n.sibling}function qE(n){switch(n.tag){case 26:To(n),n.flags&cu&&n.memoizedState!==null&&u1(ri,n.memoizedState,n.memoizedProps);break;case 5:To(n);break;case 3:case 4:var r=ri;ri=Bh(n.stateNode.containerInfo),To(n),ri=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=cu,cu=16777216,To(n),cu=r):To(n));break;default:To(n)}}function FE(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function hu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,HE(u,n)}FE(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jE(n),n=n.sibling}function jE(n){switch(n.tag){case 0:case 11:case 15:hu(n),n.flags&2048&&Qs(9,n,n.return);break;case 3:hu(n);break;case 12:hu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Ih(n)):hu(n);break;default:hu(n)}}function Ih(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,HE(u,n)}FE(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Qs(8,r,r.return),Ih(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Ih(r));break;default:Ih(r)}n=n.sibling}}function HE(n,r){for(;Gt!==null;){var o=Gt;switch(o.tag){case 0:case 11:case 15:Qs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Yl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Gt=u;else e:for(o=n;Gt!==null;){u=Gt;var f=u.sibling,m=u.return;if(PE(u),u===o){Gt=null;break e}if(f!==null){f.return=m,Gt=f;break e}Gt=m}}}var bR={getCacheForType:function(n){var r=ln(Ut),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},CR=typeof WeakMap=="function"?WeakMap:Map,We=0,ot=null,Me=null,ze=0,$e=0,kn=null,Xs=!1,So=!1,sp=!1,hs=0,vt=0,Ws=0,pa=0,rp=0,Wn=0,Ao=0,fu=null,Tn=null,ap=!1,op=0,Nh=1/0,Dh=null,$s=null,tn=0,Zs=null,wo=null,bo=0,lp=0,up=null,GE=null,du=0,cp=null;function Pn(){if((We&2)!==0&&ze!==0)return ze&-ze;if(H.T!==null){var n=ho;return n!==0?n:_p()}return xs()}function QE(){Wn===0&&(Wn=(ze&536870912)===0||He?Sl():536870912);var n=Xn.current;return n!==null&&(n.flags|=32),Wn}function Vn(n,r,o){(n===ot&&($e===2||$e===9)||n.cancelPendingCommit!==null)&&(Co(n,0),Js(n,ze,Wn,!1)),ji(n,o),((We&2)===0||n!==ot)&&(n===ot&&((We&2)===0&&(pa|=o),vt===4&&Js(n,ze,Wn,!1)),Di(n))}function YE(n,r,o){if((We&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||qr(n,r),f=u?NR(n,r):dp(n,r,!0),m=u;do{if(f===0){So&&!u&&Js(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!RR(o)){f=dp(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=n;f=fu;var C=S.current.memoizedState.isDehydrated;if(C&&(Co(S,E).flags|=256),E=dp(S,E,!1),E!==2){if(sp&&!C){S.errorRecoveryDisabledLanes|=m,pa|=m,f=4;break e}m=Tn,Tn=f,m!==null&&(Tn===null?Tn=m:Tn.push.apply(Tn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Co(n,0),Js(n,r,0,!0);break}e:{switch(u=n,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Js(u,r,Wn,!Xs);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=op+300-zn(),10<f)){if(Js(u,r,Wn,!Xs),Fa(u,0,!0)!==0)break e;u.timeoutHandle=ST(KE.bind(null,u,o,Tn,Dh,ap,r,Wn,pa,Ao,Xs,m,2,-0,0),f);break e}KE(u,o,Tn,Dh,ap,r,Wn,pa,Ao,Xs,m,0,-0,0)}}break}while(!0);Di(n)}function KE(n,r,o,u,f,m,E,S,C,z,G,K,q,F){if(n.timeoutHandle=-1,K=r.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Eu={stylesheets:null,count:0,unsuspend:l1},qE(r),K=c1(),K!==null)){n.cancelPendingCommit=K(tT.bind(null,n,r,m,o,u,f,E,S,C,G,1,q,F)),Js(n,m,E,!z);return}tT(n,r,m,o,u,f,E,S,C)}function RR(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Dn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Js(n,r,o,u){r&=~rp,r&=~pa,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var m=31-on(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&pi(n,o,r)}function Oh(){return(We&6)===0?(mu(0),!1):!0}function hp(){if(Me!==null){if($e===0)var n=Me.return;else n=Me,is=ua=null,Im(n),yo=null,su=0,n=Me;for(;n!==null;)RE(n.alternate,n),n=n.return;Me=null}}function Co(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,GR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),hp(),ot=n,Me=o=es(n.current,null),ze=r,$e=0,kn=null,Xs=!1,So=qr(n,r),sp=!1,Ao=Wn=rp=pa=Ws=vt=0,Tn=fu=null,ap=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-on(u),m=1<<f;r|=n[f],u&=~m}return hs=r,Jc(),o}function XE(n,r){Ce=null,H.H=yh,r===Xl||r===lh?(r=fv(),$e=3):r===uv?(r=fv(),$e=4):$e=r===dE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,kn=r,Me===null&&(vt=1,Ah(n,Gn(r,n.current)))}function WE(){var n=H.H;return H.H=yh,n===null?yh:n}function $E(){var n=H.A;return H.A=bR,n}function fp(){vt=4,Xs||(ze&4194048)!==ze&&Xn.current!==null||(So=!0),(Ws&134217727)===0&&(pa&134217727)===0||ot===null||Js(ot,ze,Wn,!1)}function dp(n,r,o){var u=We;We|=2;var f=WE(),m=$E();(ot!==n||ze!==r)&&(Dh=null,Co(n,r)),r=!1;var E=vt;e:do try{if($e!==0&&Me!==null){var S=Me,C=kn;switch($e){case 8:hp(),E=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(r=!0);var z=$e;if($e=0,kn=null,Ro(n,S,C,z),o&&So){E=0;break e}break;default:z=$e,$e=0,kn=null,Ro(n,S,C,z)}}IR(),E=vt;break}catch(G){XE(n,G)}while(!0);return r&&n.shellSuspendCounter++,is=ua=null,We=u,H.H=f,H.A=m,Me===null&&(ot=null,ze=0,Jc()),E}function IR(){for(;Me!==null;)ZE(Me)}function NR(n,r){var o=We;We|=2;var u=WE(),f=$E();ot!==n||ze!==r?(Dh=null,Nh=zn()+500,Co(n,r)):So=qr(n,r);e:do try{if($e!==0&&Me!==null){r=Me;var m=kn;t:switch($e){case 1:$e=0,kn=null,Ro(n,r,m,1);break;case 2:case 9:if(cv(m)){$e=0,kn=null,JE(r);break}r=function(){$e!==2&&$e!==9||ot!==n||($e=7),Di(n)},m.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:cv(m)?($e=0,kn=null,JE(r)):($e=0,kn=null,Ro(n,r,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var S=Me;if(!E||kT(E)){$e=0,kn=null;var C=S.sibling;if(C!==null)Me=C;else{var z=S.return;z!==null?(Me=z,Mh(z)):Me=null}break t}}$e=0,kn=null,Ro(n,r,m,5);break;case 6:$e=0,kn=null,Ro(n,r,m,6);break;case 8:hp(),vt=6;break e;default:throw Error(s(462))}}DR();break}catch(G){XE(n,G)}while(!0);return is=ua=null,H.H=u,H.A=f,We=o,Me!==null?0:(ot=null,ze=0,Jc(),vt)}function DR(){for(;Me!==null&&!yl();)ZE(Me)}function ZE(n){var r=bE(n.alternate,n,hs);n.memoizedProps=n.pendingProps,r===null?Mh(n):Me=r}function JE(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=vE(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=vE(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Im(r);default:RE(o,r),r=Me=ev(r,hs),r=bE(o,r,hs)}n.memoizedProps=n.pendingProps,r===null?Mh(n):Me=r}function Ro(n,r,o,u){is=ua=null,Im(r),yo=null,su=0;var f=r.return;try{if(vR(n,f,r,o,ze)){vt=1,Ah(n,Gn(o,n.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;vt=1,Ah(n,Gn(o,n.current)),Me=null;return}r.flags&32768?(He||u===1?n=!0:So||(ze&536870912)!==0?n=!1:(Xs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Xn.current,u!==null&&u.tag===13&&(u.flags|=16384))),eT(r,n)):Mh(r)}function Mh(n){var r=n;do{if((r.flags&32768)!==0){eT(r,Xs);return}n=r.return;var o=TR(r.alternate,r,hs);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=n}while(r!==null);vt===0&&(vt=5)}function eT(n,r){do{var o=SR(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);vt=6,Me=null}function tT(n,r,o,u,f,m,E,S,C){n.cancelPendingCommit=null;do xh();while(tn!==0);if((We&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=im,wl(n,o,m,E,S,C),n===ot&&(Me=ot=null,ze=0),wo=r,Zs=n,bo=o,lp=m,up=f,GE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,kR(Lr,function(){return aT(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=H.T,H.T=null,f=ie.p,ie.p=2,E=We,We|=4;try{AR(n,r,o)}finally{We=E,ie.p=f,H.T=u}}tn=1,nT(),iT(),sT()}}function nT(){if(tn===1){tn=0;var n=Zs,r=wo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=H.T,H.T=null;var u=ie.p;ie.p=2;var f=We;We|=4;try{UE(r,n);var m=bp,E=Hy(n.containerInfo),S=m.focusedElem,C=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&jy(S.ownerDocument.documentElement,S)){if(C!==null&&Zd(S)){var z=C.start,G=C.end;if(G===void 0&&(G=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(G,S.value.length);else{var K=S.ownerDocument||document,q=K&&K.defaultView||window;if(q.getSelection){var F=q.getSelection(),ye=S.textContent.length,me=Math.min(C.start,ye),nt=C.end===void 0?me:Math.min(C.end,ye);!F.extend&&me>nt&&(E=nt,nt=me,me=E);var P=Fy(S,me),D=Fy(S,nt);if(P&&D&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==D.node||F.focusOffset!==D.offset)){var U=K.createRange();U.setStart(P.node,P.offset),F.removeAllRanges(),me>nt?(F.addRange(U),F.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),F.addRange(U))}}}}for(K=[],F=S;F=F.parentNode;)F.nodeType===1&&K.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<K.length;S++){var Q=K[S];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gh=!!wp,bp=wp=null}finally{We=f,ie.p=u,H.T=o}}n.current=r,tn=2}}function iT(){if(tn===2){tn=0;var n=Zs,r=wo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=H.T,H.T=null;var u=ie.p;ie.p=2;var f=We;We|=4;try{kE(n,r.alternate,r)}finally{We=f,ie.p=u,H.T=o}}tn=3}}function sT(){if(tn===4||tn===3){tn=0,Ic();var n=Zs,r=wo,o=bo,u=GE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?tn=5:(tn=0,wo=Zs=null,rT(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&($s=null),ja(o),r=r.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(_t,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=H.T,f=ie.p,ie.p=2,H.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{H.T=r,ie.p=f}}(bo&3)!==0&&xh(),Di(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===cp?du++:(du=0,cp=n):du=0,mu(0)}}function rT(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Yl(r)))}function xh(n){return nT(),iT(),sT(),aT()}function aT(){if(tn!==5)return!1;var n=Zs,r=lp;lp=0;var o=ja(bo),u=H.T,f=ie.p;try{ie.p=32>o?32:o,H.T=null,o=up,up=null;var m=Zs,E=bo;if(tn=0,wo=Zs=null,bo=0,(We&6)!==0)throw Error(s(331));var S=We;if(We|=4,jE(m.current),BE(m,m.current,E,o),We=S,mu(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{ie.p=f,H.T=u,rT(n,r)}}function oT(n,r,o){r=Gn(o,r),r=Fm(n.stateNode,r,2),n=Fs(n,r,2),n!==null&&(ji(n,2),Di(n))}function st(n,r,o){if(n.tag===3)oT(n,n,o);else for(;r!==null;){if(r.tag===3){oT(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&($s===null||!$s.has(u))){n=Gn(o,n),o=hE(2),u=Fs(r,o,2),u!==null&&(fE(o,u,r,n),ji(u,2),Di(u));break}}r=r.return}}function mp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new CR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(sp=!0,f.add(o),n=OR.bind(null,n,r,o),r.then(n,n))}function OR(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ot===n&&(ze&o)===o&&(vt===4||vt===3&&(ze&62914560)===ze&&300>zn()-op?(We&2)===0&&Co(n,0):rp|=o,Ao===ze&&(Ao=0)),Di(n)}function lT(n,r){r===0&&(r=Al()),n=oo(n,r),n!==null&&(ji(n,r),Di(n))}function MR(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),lT(n,o)}function xR(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),lT(n,o)}function kR(n,r){return Pr(n,r)}var kh=null,Io=null,pp=!1,Ph=!1,gp=!1,ga=0;function Di(n){n!==Io&&n.next===null&&(Io===null?kh=Io=n:Io=Io.next=n),Ph=!0,pp||(pp=!0,VR())}function mu(n,r){if(!gp&&Ph){gp=!0;do for(var o=!1,u=kh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-on(42|n)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,fT(u,m))}else m=ze,m=Fa(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||qr(u,m)||(o=!0,fT(u,m));u=u.next}while(o);gp=!1}}function PR(){uT()}function uT(){Ph=pp=!1;var n=0;ga!==0&&(HR()&&(n=ga),ga=0);for(var r=zn(),o=null,u=kh;u!==null;){var f=u.next,m=cT(u,r);m===0?(u.next=null,o===null?kh=f:o.next=f,f===null&&(Io=o)):(o=u,(n!==0||(m&3)!==0)&&(Ph=!0)),u=f}mu(n)}function cT(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-on(m),S=1<<E,C=f[E];C===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Tl(S,r)):C<=r&&(n.expiredLanes|=S),m&=~S}if(r=ot,o=ze,o=Fa(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&($e===2||$e===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Vr(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||qr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Vr(u),ja(o)){case 2:case 8:o=Ba;break;case 32:o=Lr;break;case 268435456:o=qa;break;default:o=Lr}return u=hT.bind(null,n),o=Pr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Vr(u),n.callbackPriority=2,n.callbackNode=null,2}function hT(n,r){if(tn!==0&&tn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(xh()&&n.callbackNode!==o)return null;var u=ze;return u=Fa(n,n===ot?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(YE(n,u,r),cT(n,zn()),n.callbackNode!=null&&n.callbackNode===o?hT.bind(null,n):null)}function fT(n,r){if(xh())return null;YE(n,r,!0)}function VR(){QR(function(){(We&6)!==0?Pr(vl,PR):uT()})}function _p(){return ga===0&&(ga=Sl()),ga}function dT(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Xa(""+n)}function mT(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function LR(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=dT((f[Ct]||null).action),E=u.submitter;E&&(r=(r=E[Ct]||null)?dT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new Wa("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ga!==0){var C=E?mT(f,E):new FormData(f);Lm(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(S.preventDefault(),C=E?mT(f,E):new FormData(f),Lm(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var yp=0;yp<nm.length;yp++){var vp=nm[yp],UR=vp.toLowerCase(),zR=vp[0].toUpperCase()+vp.slice(1);si(UR,"on"+zR)}si(Yy,"onAnimationEnd"),si(Ky,"onAnimationIteration"),si(Xy,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(nR,"onTransitionRun"),si(iR,"onTransitionStart"),si(sR,"onTransitionCancel"),si(Wy,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pu));function pT(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],C=S.instance,z=S.currentTarget;if(S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(G){Sh(G)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(S=u[E],C=S.instance,z=S.currentTarget,S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(G){Sh(G)}f.currentTarget=null,m=C}}}}function xe(n,r){var o=r[Cl];o===void 0&&(o=r[Cl]=new Set);var u=n+"__bubble";o.has(u)||(gT(r,n,2,!1),o.add(u))}function Ep(n,r,o){var u=0;r&&(u|=4),gT(o,n,u,r)}var Vh="_reactListening"+Math.random().toString(36).slice(2);function Tp(n){if(!n[Vh]){n[Vh]=!0,Rl.forEach(function(o){o!=="selectionchange"&&(BR.has(o)||Ep(o,!1,n),Ep(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vh]||(r[Vh]=!0,Ep("selectionchange",!1,r))}}function gT(n,r,o,u){switch(BT(r)){case 2:var f=d1;break;case 8:f=m1;break;default:f=Pp}o=f.bind(null,r,o,n),f=void 0,!jn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Sp(n,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Hi(S),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Uc(function(){var z=m,G=Fn(o),K=[];e:{var q=$y.get(n);if(q!==void 0){var F=Wa,ye=n;switch(n){case"keypress":if(Ti(o)===0)break e;case"keydown":case"keyup":F=no;break;case"focusin":ye="focus",F=Ja;break;case"focusout":ye="blur",F=Ja;break;case"beforeblur":case"afterblur":F=Ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Qc;break;case Yy:case Ky:case Xy:F=eo;break;case Wy:F=Kc;break;case"scroll":case"scrollend":F=zc;break;case"wheel":F=io;break;case"copy":case"cut":case"paste":F=to;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=zl;break;case"toggle":case"beforetoggle":F=Wc}var me=(r&4)!==0,nt=!me&&(n==="scroll"||n==="scrollend"),P=me?q!==null?q+"Capture":null:q;me=[];for(var D=z,U;D!==null;){var Q=D;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||P===null||(Q=Xr(D,P),Q!=null&&me.push(gu(D,Q,U))),nt)break;D=D.return}0<me.length&&(q=new F(q,ye,null,o,G),K.push({event:q,listeners:me}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",q&&o!==Ki&&(ye=o.relatedTarget||o.fromElement)&&(Hi(ye)||ye[Bn]))break e;if((F||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,F?(ye=o.relatedTarget||o.toElement,F=z,ye=ye?Hi(ye):null,ye!==null&&(nt=l(ye),me=ye.tag,ye!==nt||me!==5&&me!==27&&me!==6)&&(ye=null)):(F=null,ye=z),F!==ye)){if(me=Hn,Q="onMouseLeave",P="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(me=zl,Q="onPointerLeave",P="onPointerEnter",D="pointer"),nt=F==null?q:_i(F),U=ye==null?q:_i(ye),q=new me(Q,D+"leave",F,o,G),q.target=nt,q.relatedTarget=U,Q=null,Hi(G)===z&&(me=new me(P,D+"enter",ye,o,G),me.target=U,me.relatedTarget=nt,Q=me),nt=Q,F&&ye)t:{for(me=F,P=ye,D=0,U=me;U;U=No(U))D++;for(U=0,Q=P;Q;Q=No(Q))U++;for(;0<D-U;)me=No(me),D--;for(;0<U-D;)P=No(P),U--;for(;D--;){if(me===P||P!==null&&me===P.alternate)break t;me=No(me),P=No(P)}me=null}else me=null;F!==null&&_T(K,q,F,me,!1),ye!==null&&nt!==null&&_T(K,nt,ye,me,!0)}}e:{if(q=z?_i(z):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var oe=Vy;else if(Lt(q))if(Ly)oe=JC;else{oe=$C;var Ne=WC}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?z&&Ml(z.elementType)&&(oe=Vy):oe=ZC;if(oe&&(oe=oe(n,z))){Ji(K,oe,o,G);break e}Ne&&Ne(n,q,z),n==="focusout"&&z&&q.type==="number"&&z.memoizedProps.value!=null&&Ls(q,"number",q.value)}switch(Ne=z?_i(z):window,n){case"focusin":(Lt(Ne)||Ne.contentEditable==="true")&&(so=Ne,Jd=z,Fl=null);break;case"focusout":Fl=Jd=so=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,Gy(K,o,G);break;case"selectionchange":if(tR)break;case"keydown":case"keyup":Gy(K,o,G)}var le;if(wi)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Le?j(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(y&&o.locale!=="ko"&&(Le||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Le&&(le=kl()):(Ei=G,Us="value"in Ei?Ei.value:Ei.textContent,Le=!0)),Ne=Lh(z,ge),0<Ne.length&&(ge=new Ll(ge,n,null,o,G),K.push({event:ge,listeners:Ne}),le?ge.data=le:(le=te(o),le!==null&&(ge.data=le)))),(le=_?Vt(n,o):Ue(n,o))&&(ge=Lh(z,"onBeforeInput"),0<ge.length&&(Ne=new Ll("onBeforeInput","beforeinput",null,o,G),K.push({event:Ne,listeners:ge}),Ne.data=le)),LR(K,n,z,o,G)}pT(K,r)})}function gu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Lh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Xr(n,o),f!=null&&u.unshift(gu(n,f,m)),f=Xr(n,r),f!=null&&u.push(gu(n,f,m))),n.tag===3)return u;n=n.return}return[]}function No(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function _T(n,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,C=S.alternate,z=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||z===null||(C=z,f?(z=Xr(o,m),z!=null&&E.unshift(gu(o,z,C))):f||(z=Xr(o,m),z!=null&&E.push(gu(o,z,C)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var qR=/\r\n?/g,FR=/\u0000|\uFFFD/g;function yT(n){return(typeof n=="string"?n:""+n).replace(qR,`
`).replace(FR,"")}function vT(n,r){return r=yT(r),yT(n)===r}function Uh(){}function tt(n,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||qn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&qn(n,""+u);break;case"className":yi(n,"class",u);break;case"tabIndex":yi(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(n,o,u);break;case"style":Ol(n,u,m);break;case"data":if(r!=="object"){yi(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Xa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&tt(n,r,"name",f.name,f,null),tt(n,r,"formEncType",f.formEncType,f,null),tt(n,r,"formMethod",f.formMethod,f,null),tt(n,r,"formTarget",f.formTarget,f,null)):(tt(n,r,"encType",f.encType,f,null),tt(n,r,"method",f.method,f,null),tt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Xa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Uh);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Xa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Vs(n,"popover",u);break;case"xlinkActuate":Zt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Zt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Zt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Zt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Zt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Zt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Vs(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Qd.get(o)||o,Vs(n,o,u))}}function Ap(n,r,o,u,f,m){switch(o){case"style":Ol(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?qn(n,u):(typeof u=="number"||typeof u=="bigint")&&qn(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Uh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ha.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=n[Ct]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Vs(n,o,u)}}}function nn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(n,r,m,E,o,null)}}f&&tt(n,r,"srcSet",o.srcSet,o,null),u&&tt(n,r,"src",o.src,o,null);return;case"input":xe("invalid",n);var S=m=E=f=null,C=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var G=o[u];if(G!=null)switch(u){case"name":f=G;break;case"type":E=G;break;case"checked":C=G;break;case"defaultChecked":z=G;break;case"value":m=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:tt(n,r,u,G,o,null)}}Qr(n,m,S,C,z,E,f,!1),Ka(n);return;case"select":xe("invalid",n),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:tt(n,r,f,S,o,null)}r=m,o=E,n.multiple=!!u,r!=null?Yi(n,!!u,r,!1):o!=null&&Yi(n,!!u,o,!0);return;case"textarea":xe("invalid",n),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:tt(n,r,E,S,o,null)}Yr(n,u,f,m),Ka(n);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(n,r,C,u,o,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<pu.length;u++)xe(pu[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(n,r,z,u,o,null)}return;default:if(Ml(r)){for(G in o)o.hasOwnProperty(G)&&(u=o[G],u!==void 0&&Ap(n,r,G,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&tt(n,r,S,u,o,null))}function jR(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,C=null,z=null,G=null;for(F in o){var K=o[F];if(o.hasOwnProperty(F)&&K!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=K;default:u.hasOwnProperty(F)||tt(n,r,F,null,u,K)}}for(var q in u){var F=u[q];if(K=o[q],u.hasOwnProperty(q)&&(F!=null||K!=null))switch(q){case"type":m=F;break;case"name":f=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":E=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==K&&tt(n,r,q,F,u,K)}}Nn(n,E,S,C,z,G,m,f);return;case"select":F=E=S=q=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":F=C;default:u.hasOwnProperty(m)||tt(n,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":q=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==C&&tt(n,r,f,m,u,C)}r=S,o=E,u=F,q!=null?Yi(n,!!o,q,!1):!!u!=!!o&&(r!=null?Yi(n,!!o,r,!0):Yi(n,!!o,o?[]:"",!1));return;case"textarea":F=q=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:tt(n,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":q=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&tt(n,r,E,f,u,m)}Je(n,q,F);return;case"option":for(var ye in o)if(q=o[ye],o.hasOwnProperty(ye)&&q!=null&&!u.hasOwnProperty(ye))switch(ye){case"selected":n.selected=!1;break;default:tt(n,r,ye,null,u,q)}for(C in u)if(q=u[C],F=o[C],u.hasOwnProperty(C)&&q!==F&&(q!=null||F!=null))switch(C){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(n,r,C,q,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in o)q=o[me],o.hasOwnProperty(me)&&q!=null&&!u.hasOwnProperty(me)&&tt(n,r,me,null,u,q);for(z in u)if(q=u[z],F=o[z],u.hasOwnProperty(z)&&q!==F&&(q!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:tt(n,r,z,q,u,F)}return;default:if(Ml(r)){for(var nt in o)q=o[nt],o.hasOwnProperty(nt)&&q!==void 0&&!u.hasOwnProperty(nt)&&Ap(n,r,nt,void 0,u,q);for(G in u)q=u[G],F=o[G],!u.hasOwnProperty(G)||q===F||q===void 0&&F===void 0||Ap(n,r,G,q,u,F);return}}for(var P in o)q=o[P],o.hasOwnProperty(P)&&q!=null&&!u.hasOwnProperty(P)&&tt(n,r,P,null,u,q);for(K in u)q=u[K],F=o[K],!u.hasOwnProperty(K)||q===F||q==null&&F==null||tt(n,r,K,q,u,F)}var wp=null,bp=null;function zh(n){return n.nodeType===9?n:n.ownerDocument}function ET(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TT(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Cp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Rp=null;function HR(){var n=window.event;return n&&n.type==="popstate"?n===Rp?!1:(Rp=n,!0):(Rp=null,!1)}var ST=typeof setTimeout=="function"?setTimeout:void 0,GR=typeof clearTimeout=="function"?clearTimeout:void 0,AT=typeof Promise=="function"?Promise:void 0,QR=typeof queueMicrotask=="function"?queueMicrotask:typeof AT<"u"?function(n){return AT.resolve(null).then(n).catch(YR)}:ST;function YR(n){setTimeout(function(){throw n})}function er(n){return n==="head"}function wT(n,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&_u(E.documentElement),o&2&&_u(E.body),o&4)for(o=E.head,_u(o),E=o.firstChild;E;){var S=E.nextSibling,C=E.nodeName;E[Fr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){n.removeChild(m),bu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);bu(r)}function Ip(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Ip(o),Ps(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function KR(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Fr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=ai(n.nextSibling),n===null)break}return null}function XR(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ai(n.nextSibling),n===null))return null;return n}function Np(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function WR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ai(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Dp=null;function bT(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function CT(n,r,o){switch(r=zh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function _u(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ps(n)}var $n=new Map,RT=new Set;function Bh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var fs=ie.d;ie.d={f:$R,r:ZR,D:JR,C:e1,L:t1,m:n1,X:s1,S:i1,M:r1};function $R(){var n=fs.f(),r=Oh();return n||r}function ZR(n){var r=gi(n);r!==null&&r.tag===5&&r.type==="form"?Yv(r):fs.r(n)}var Do=typeof document>"u"?null:document;function IT(n,r,o){var u=Do;if(u&&typeof r=="string"&&r){var f=Rt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),RT.has(f)||(RT.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),nn(r,"link",n),Tt(r),u.head.appendChild(r)))}}function JR(n){fs.D(n),IT("dns-prefetch",n,null)}function e1(n,r){fs.C(n,r),IT("preconnect",n,r)}function t1(n,r,o){fs.L(n,r,o);var u=Do;if(u&&n&&r){var f='link[rel="preload"][as="'+Rt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Rt(o.imageSizes)+'"]')):f+='[href="'+Rt(n)+'"]';var m=f;switch(r){case"style":m=Oo(n);break;case"script":m=Mo(n)}$n.has(m)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),$n.set(m,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(yu(m))||r==="script"&&u.querySelector(vu(m))||(r=u.createElement("link"),nn(r,"link",n),Tt(r),u.head.appendChild(r)))}}function n1(n,r){fs.m(n,r);var o=Do;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(n)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Mo(n)}if(!$n.has(m)&&(n=v({rel:"modulepreload",href:n},r),$n.set(m,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(vu(m)))return}u=o.createElement("link"),nn(u,"link",n),Tt(u),o.head.appendChild(u)}}}function i1(n,r,o){fs.S(n,r,o);var u=Do;if(u&&n){var f=pn(u).hoistableStyles,m=Oo(n);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(yu(m)))S.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=$n.get(m))&&Op(n,o);var C=E=u.createElement("link");Tt(C),nn(C,"link",n),C._p=new Promise(function(z,G){C.onload=z,C.onerror=G}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function s1(n,r){fs.X(n,r);var o=Do;if(o&&n){var u=pn(o).hoistableScripts,f=Mo(n),m=u.get(f);m||(m=o.querySelector(vu(f)),m||(n=v({src:n,async:!0},r),(r=$n.get(f))&&Mp(n,r),m=o.createElement("script"),Tt(m),nn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function r1(n,r){fs.M(n,r);var o=Do;if(o&&n){var u=pn(o).hoistableScripts,f=Mo(n),m=u.get(f);m||(m=o.querySelector(vu(f)),m||(n=v({src:n,async:!0,type:"module"},r),(r=$n.get(f))&&Mp(n,r),m=o.createElement("script"),Tt(m),nn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function NT(n,r,o,u){var f=(f=Te.current)?Bh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Oo(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Oo(o.href);var m=pn(f).hoistableStyles,E=m.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=f.querySelector(yu(n)))&&!m._p&&(E.instance=m,E.state.loading=5),$n.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},$n.set(n,o),m||a1(f,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Mo(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Oo(n){return'href="'+Rt(n)+'"'}function yu(n){return'link[rel="stylesheet"]['+n+"]"}function DT(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function a1(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),nn(r,"link",o),Tt(r),n.head.appendChild(r))}function Mo(n){return'[src="'+Rt(n)+'"]'}function vu(n){return"script[async]"+n}function OT(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return r.instance=u,Tt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Tt(u),nn(u,"style",f),qh(u,o.precedence,n),r.instance=u;case"stylesheet":f=Oo(o.href);var m=n.querySelector(yu(f));if(m)return r.state.loading|=4,r.instance=m,Tt(m),m;u=DT(o),(f=$n.get(f))&&Op(u,f),m=(n.ownerDocument||n).createElement("link"),Tt(m);var E=m;return E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),nn(m,"link",u),r.state.loading|=4,qh(m,o.precedence,n),r.instance=m;case"script":return m=Mo(o.src),(f=n.querySelector(vu(m)))?(r.instance=f,Tt(f),f):(u=o,(f=$n.get(m))&&(u=v({},o),Mp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),Tt(f),nn(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,qh(u,o.precedence,n));return r.instance}function qh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Op(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Mp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Fh=null;function MT(n,r,o){if(Fh===null){var u=new Map,f=Fh=new Map;f.set(o,u)}else f=Fh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Fr]||m[Pt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function xT(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function o1(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function kT(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Eu=null;function l1(){}function u1(n,r,o){if(Eu===null)throw Error(s(475));var u=Eu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Oo(o.href),m=n.querySelector(yu(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=jh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,Tt(m);return}m=n.ownerDocument||n,o=DT(o),(f=$n.get(f))&&Op(o,f),m=m.createElement("link"),Tt(m);var E=m;E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),nn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=jh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function c1(){if(Eu===null)throw Error(s(475));var n=Eu;return n.stylesheets&&n.count===0&&xp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&xp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function jh(){if(this.count--,this.count===0){if(this.stylesheets)xp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Hh=null;function xp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Hh=new Map,r.forEach(h1,n),Hh=null,jh.call(n))}function h1(n,r){if(!(r.state.loading&4)){var o=Hh.get(n);if(o)var u=o.get(null);else{o=new Map,Hh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=jh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Tu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function f1(n,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function PT(n,r,o,u,f,m,E,S,C,z,G,K){return n=new f1(n,r,o,E,S,C,z,K),r=1,m===!0&&(r|=24),m=On(3,null,null,r),n.current=m,m.stateNode=n,r=mm(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},ym(m),n}function VT(n){return n?(n=lo,n):lo}function LT(n,r,o,u,f,m){f=VT(f),u.context===null?u.context=f:u.pendingContext=f,u=qs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Fs(n,u,r),o!==null&&(Vn(o,n,r),$l(o,n,r))}function UT(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function kp(n,r){UT(n,r),(n=n.alternate)&&UT(n,r)}function zT(n){if(n.tag===13){var r=oo(n,67108864);r!==null&&Vn(r,n,67108864),kp(n,67108864)}}var Gh=!0;function d1(n,r,o,u){var f=H.T;H.T=null;var m=ie.p;try{ie.p=2,Pp(n,r,o,u)}finally{ie.p=m,H.T=f}}function m1(n,r,o,u){var f=H.T;H.T=null;var m=ie.p;try{ie.p=8,Pp(n,r,o,u)}finally{ie.p=m,H.T=f}}function Pp(n,r,o,u){if(Gh){var f=Vp(u);if(f===null)Sp(n,r,u,Qh,o),qT(n,u);else if(g1(f,n,r,o,u))u.stopPropagation();else if(qT(n,u),r&4&&-1<p1.indexOf(n)){for(;f!==null;){var m=gi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ti(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var C=1<<31-on(E);S.entanglements[1]|=C,E&=~C}Di(m),(We&6)===0&&(Nh=zn()+500,mu(0))}}break;case 13:S=oo(m,2),S!==null&&Vn(S,m,2),Oh(),kp(m,2)}if(m=Vp(u),m===null&&Sp(n,r,u,Qh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Sp(n,r,u,null,o)}}function Vp(n){return n=Fn(n),Lp(n)}var Qh=null;function Lp(n){if(Qh=null,n=Hi(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Qh=n,null}function BT(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bd()){case vl:return 2;case Ba:return 8;case Lr:case qd:return 32;case qa:return 268435456;default:return 32}default:return 32}}var Up=!1,tr=null,nr=null,ir=null,Su=new Map,Au=new Map,sr=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qT(n,r){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Su.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(r.pointerId)}}function wu(n,r,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=gi(r),r!==null&&zT(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function g1(n,r,o,u,f){switch(r){case"focusin":return tr=wu(tr,n,r,o,u,f),!0;case"dragenter":return nr=wu(nr,n,r,o,u,f),!0;case"mouseover":return ir=wu(ir,n,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Su.set(m,wu(Su.get(m)||null,n,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Au.set(m,wu(Au.get(m)||null,n,r,o,u,f)),!0}return!1}function FT(n){var r=Hi(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Oc(n.priority,function(){if(o.tag===13){var u=Pn();u=Ms(u);var f=oo(o,u);f!==null&&Vn(f,o,u),kp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Vp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ki=u,o.target.dispatchEvent(u),Ki=null}else return r=gi(o),r!==null&&zT(r),n.blockedOn=o,!1;r.shift()}return!0}function jT(n,r,o){Yh(n)&&o.delete(r)}function _1(){Up=!1,tr!==null&&Yh(tr)&&(tr=null),nr!==null&&Yh(nr)&&(nr=null),ir!==null&&Yh(ir)&&(ir=null),Su.forEach(jT),Au.forEach(jT)}function Kh(n,r){n.blockedOn===r&&(n.blockedOn=null,Up||(Up=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_1)))}var Xh=null;function HT(n){Xh!==n&&(Xh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Xh===n&&(Xh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(Lp(u||o)===null)continue;break}var m=gi(o);m!==null&&(n.splice(r,3),r-=3,Lm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function bu(n){function r(C){return Kh(C,n)}tr!==null&&Kh(tr,n),nr!==null&&Kh(nr,n),ir!==null&&Kh(ir,n),Su.forEach(r),Au.forEach(r);for(var o=0;o<sr.length;o++){var u=sr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)FT(o),o.blockedOn===null&&sr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ct]||null;if(typeof m=="function")E||HT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ct]||null)S=E.formAction;else if(Lp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),HT(o)}}}function zp(n){this._internalRoot=n}Wh.prototype.render=zp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Pn();LT(o,u,n,r,null,null)},Wh.prototype.unmount=zp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;LT(n.current,2,null,n,null,null),Oh(),r[Bn]=null}};function Wh(n){this._internalRoot=n}Wh.prototype.unstable_scheduleHydration=function(n){if(n){var r=xs();n={blockedOn:null,target:n,priority:r};for(var o=0;o<sr.length&&r!==0&&r<sr[o].priority;o++);sr.splice(o,0,n),o===0&&FT(n)}};var GT=e.version;if(GT!=="19.1.1")throw Error(s(527,GT,"19.1.1"));ie.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var y1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $h=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$h.isDisabled&&$h.supportsFiber)try{_t=$h.inject(y1),Xe=$h}catch{}}return Ru.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=oE,m=lE,E=uE,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=PT(n,1,!1,null,null,o,u,f,m,E,S,null),n[Bn]=r.current,Tp(n),new zp(r)},Ru.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",m=oE,E=lE,S=uE,C=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=PT(n,1,!0,r,o??null,u,f,m,E,S,C,z),r.context=VT(null),o=r.current,u=Pn(),u=Ms(u),f=qs(u),f.callback=null,Fs(o,f,u),o=u,r.current.lanes=o,ji(r,o),Di(r),n[Bn]=r.current,Tp(n),new Wh(r)},Ru.version="19.1.1",Ru}var t0;function I1(){if(t0)return Fp.exports;t0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Fp.exports=R1(),Fp.exports}var N1=I1();const D1=()=>{};var n0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(i,e){if(!i)throw ol(e)},ol=function(i){return new Error("Firebase Database ("+mA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},O1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let A=(d&15)<<2|g>>6,O=g&63;p||(O=64,c||(A=64)),s.push(t[v],t[T],t[A],t[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(pA(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):O1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new M1;const A=l<<2|d>>4;if(s.push(A),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const B=g<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class M1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gA=function(i){const e=pA(i);return e_.encodeByteArray(e,!0)},yf=function(i){return gA(i).replace(/\./g,"")},vf=function(i){try{return e_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(i){return _A(void 0,i)}function _A(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!k1(t)||(i[t]=_A(i[t],e[t]));return i}function k1(i){return i!=="__proto__"}/**
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
 */function P1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V1=()=>P1().__FIREBASE_DEFAULTS__,L1=()=>{if(typeof process>"u"||typeof n0>"u")return;const i=n0.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},U1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vf(i[1]);return e&&JSON.parse(e)},nd=()=>{try{return D1()||V1()||L1()||U1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},yA=i=>nd()?.emulatorHosts?.[i],vA=i=>{const e=yA(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},EA=()=>nd()?.config,TA=i=>nd()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Dr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t_(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function SA(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...i};return[yf(JSON.stringify(t)),yf(JSON.stringify(c)),""].join(".")}const Lu={};function z1(){const i={prod:[],emulator:[]};for(const e of Object.keys(Lu))Lu[e]?i.emulator.push(e):i.prod.push(e);return i}function B1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let i0=!1;function n_(i,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||Lu[i]===e||Lu[i]||i0)return;Lu[i]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",l=z1().prod.length>0;function c(){const A=document.getElementById(s);A&&A.remove()}function d(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function p(A,O){A.setAttribute("width","24"),A.setAttribute("id",O),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{i0=!0,c()},A}function v(A,O){A.setAttribute("id",O),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=B1(s),O=t("text"),B=document.getElementById(O)||document.createElement("span"),Z=t("learnmore"),W=document.getElementById(Z)||document.createElement("a"),pe=t("preprendIcon"),de=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ue=A.element;d(ue),v(W,Z);const Fe=g();p(de,pe),ue.append(de,B,W,Fe),document.body.appendChild(ue)}l?(B.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function q1(){const i=nd()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function F1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function j1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H1(){const i=dn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function G1(){return mA.NODE_ADMIN===!0}function Q1(){return!q1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y1(){try{return typeof indexedDB=="object"}catch{return!1}}function K1(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="FirebaseError";class Is extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=X1,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?W1(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Is(a,d,s)}}function W1(i,e){return i.replace($1,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const $1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(i){return JSON.parse(i)}function Wt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Ku(vf(l[0])||""),t=Ku(vf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},Z1=function(i){const e=wA(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},J1=function(i){const e=wA(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Qo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Ef(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Tf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function vr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(s0(l)&&s0(c)){if(!vr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function s0(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const A=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(A<<1|A>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const A=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=A}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function tI(i,e){const t=new nI(i,e);return t.subscribe.bind(t)}class nI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");iI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Qp),a.error===void 0&&(a.error=Qp),a.complete===void 0&&(a.complete=Qp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Qp(){}function Yo(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},id=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function dt(i){return i&&i._delegate?i._delegate:i}class Er{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _a="[DEFAULT]";/**
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
 */class rI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ms;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:_a})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=_a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_a){return this.instances.has(e)}getOptions(e=_a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_a){return this.component?this.component.multipleInstances?e:_a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aI(i){return i===_a?void 0:i}function oI(i){return i.instantiationMode==="EAGER"}/**
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
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const uI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},cI=ke.INFO,hI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},fI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=hI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=cI,this._logHandler=fI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const dI=(i,e)=>e.some(t=>i instanceof t);let r0,a0;function mI(){return r0||(r0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return a0||(a0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bA=new WeakMap,hg=new WeakMap,CA=new WeakMap,Yp=new WeakMap,s_=new WeakMap;function gI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(fr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&bA.set(t,i)}).catch(()=>{}),s_.set(e,i),e}function _I(i){if(hg.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});hg.set(i,e)}let fg={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return hg.get(i);if(e==="objectStoreNames")return i.objectStoreNames||CA.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function yI(i){fg=i(fg)}function vI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Kp(this),e,...t);return CA.set(s,e.sort?e.sort():[e]),fr(s)}:pI().includes(i)?function(...e){return i.apply(Kp(this),e),fr(bA.get(this))}:function(...e){return fr(i.apply(Kp(this),e))}}function EI(i){return typeof i=="function"?vI(i):(i instanceof IDBTransaction&&_I(i),dI(i,mI())?new Proxy(i,fg):i)}function fr(i){if(i instanceof IDBRequest)return gI(i);if(Yp.has(i))return Yp.get(i);const e=EI(i);return e!==i&&(Yp.set(i,e),s_.set(e,i)),e}const Kp=i=>s_.get(i);function TI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=fr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(fr(c.result),p.oldVersion,p.newVersion,fr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const SI=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],Xp=new Map;function o0(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xp.get(e))return Xp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=AI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||SI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Xp.set(e,l),l}yI(i=>({...i,get:(e,t,s)=>o0(e,t)||i.get(e,t,s),has:(e,t)=>!!o0(e,t)||i.has(e,t)}));/**
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
 */class wI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function bI(i){return i.getComponent()?.type==="VERSION"}const dg="@firebase/app",l0="0.14.1";/**
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
 */const Ss=new sd("@firebase/app"),CI="@firebase/app-compat",RI="@firebase/analytics-compat",II="@firebase/analytics",NI="@firebase/app-check-compat",DI="@firebase/app-check",OI="@firebase/auth",MI="@firebase/auth-compat",xI="@firebase/database",kI="@firebase/data-connect",PI="@firebase/database-compat",VI="@firebase/functions",LI="@firebase/functions-compat",UI="@firebase/installations",zI="@firebase/installations-compat",BI="@firebase/messaging",qI="@firebase/messaging-compat",FI="@firebase/performance",jI="@firebase/performance-compat",HI="@firebase/remote-config",GI="@firebase/remote-config-compat",QI="@firebase/storage",YI="@firebase/storage-compat",KI="@firebase/firestore",XI="@firebase/ai",WI="@firebase/firestore-compat",$I="firebase",ZI="12.1.0";/**
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
 */const mg="[DEFAULT]",JI={[dg]:"fire-core",[CI]:"fire-core-compat",[II]:"fire-analytics",[RI]:"fire-analytics-compat",[DI]:"fire-app-check",[NI]:"fire-app-check-compat",[OI]:"fire-auth",[MI]:"fire-auth-compat",[xI]:"fire-rtdb",[kI]:"fire-data-connect",[PI]:"fire-rtdb-compat",[VI]:"fire-fn",[LI]:"fire-fn-compat",[UI]:"fire-iid",[zI]:"fire-iid-compat",[BI]:"fire-fcm",[qI]:"fire-fcm-compat",[FI]:"fire-perf",[jI]:"fire-perf-compat",[HI]:"fire-rc",[GI]:"fire-rc-compat",[QI]:"fire-gcs",[YI]:"fire-gcs-compat",[KI]:"fire-fst",[WI]:"fire-fst-compat",[XI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const Sf=new Map,eN=new Map,pg=new Map;function u0(i,e){try{i.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ca(i){const e=i.name;if(pg.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;pg.set(e,i);for(const t of Sf.values())u0(t,i);for(const t of eN.values())u0(t,i);return!0}function rd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Zn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const tN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new fc("app","Firebase",tN);/**
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
 */class nN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Pa=ZI;function RA(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:mg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw dr.create("bad-app-name",{appName:String(a)});if(t||(t=EA()),!t)throw dr.create("no-options");const l=Sf.get(a);if(l){if(vr(t,l.options)&&vr(s,l.config))return l;throw dr.create("duplicate-app",{appName:a})}const c=new lI(a);for(const p of pg.values())c.addComponent(p);const d=new nN(t,s,c);return Sf.set(a,d),d}function r_(i=mg){const e=Sf.get(i);if(!e&&i===mg&&EA())return RA();if(!e)throw dr.create("no-app",{appName:i});return e}function Mi(i,e,t){let s=JI[i]??i;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(c.join(" "));return}Ca(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iN="firebase-heartbeat-database",sN=1,Xu="firebase-heartbeat-store";let Wp=null;function IA(){return Wp||(Wp=TI(iN,sN,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Xu)}catch(t){console.warn(t)}}}}).catch(i=>{throw dr.create("idb-open",{originalErrorMessage:i.message})})),Wp}async function rN(i){try{const t=(await IA()).transaction(Xu),s=await t.objectStore(Xu).get(NA(i));return await t.done,s}catch(e){if(e instanceof Is)Ss.warn(e.message);else{const t=dr.create("idb-get",{originalErrorMessage:e?.message});Ss.warn(t.message)}}}async function c0(i,e){try{const s=(await IA()).transaction(Xu,"readwrite");await s.objectStore(Xu).put(e,NA(i)),await s.done}catch(t){if(t instanceof Is)Ss.warn(t.message);else{const s=dr.create("idb-set",{originalErrorMessage:t?.message});Ss.warn(s.message)}}}function NA(i){return`${i.name}!${i.options.appId}`}/**
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
 */const aN=1024,oN=30;class lN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=h0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>oN){const a=hN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ss.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=h0(),{heartbeatsToSend:t,unsentEntries:s}=uN(this._heartbeatsCache.heartbeats),a=yf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ss.warn(e),""}}}function h0(){return new Date().toISOString().substring(0,10)}function uN(i,e=aN){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),f0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),f0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class cN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y1()?K1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return c0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return c0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function f0(i){return yf(JSON.stringify({version:2,heartbeats:i})).length}function hN(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function fN(i){Ca(new Er("platform-logger",e=>new wI(e),"PRIVATE")),Ca(new Er("heartbeat",e=>new lN(e),"PRIVATE")),Mi(dg,l0,i),Mi(dg,l0,"esm2020"),Mi("fire-js","")}fN("");var dN="firebase",mN="12.1.0";/**
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
 */Mi(dN,mN,"app");function DA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=DA,OA=new fc("auth","Firebase",DA());/**
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
 */const Af=new sd("@firebase/auth");function gN(i,...e){Af.logLevel<=ke.WARN&&Af.warn(`Auth (${Pa}): ${i}`,...e)}function of(i,...e){Af.logLevel<=ke.ERROR&&Af.error(`Auth (${Pa}): ${i}`,...e)}/**
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
 */function Ui(i,...e){throw o_(i,...e)}function ci(i,...e){return o_(i,...e)}function a_(i,e,t){const s={...pN(),[e]:t};return new fc("auth","Firebase",s).create(e,{appName:i.name})}function Aa(i){return a_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _N(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ui(i,"argument-error"),a_(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function o_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return OA.create(i,...e)}function Ee(i,e,...t){if(!i)throw o_(e,...t)}function gs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw of(e),new Error(e)}function As(i,e){i||gs(e)}/**
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
 */function gg(){return typeof self<"u"&&self.location?.href||""}function yN(){return d0()==="http:"||d0()==="https:"}function d0(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function vN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yN()||j1()||"connection"in navigator)?navigator.onLine:!0}function EN(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class dc{constructor(e,t){this.shortDelay=e,this.longDelay=t,As(t>e,"Short delay should be less than long delay!"),this.isMobile=i_()||AA()}get(){return vN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function l_(i,e){As(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class MA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AN=new dc(3e4,6e4);function u_(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ul(i,e,t,s,a={}){return xA(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ll({key:i.config.apiKey,...c}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:p,...l};return F1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Dr(i.emulatorConfig.host)&&(g.credentials="include"),MA.fetch()(await kA(i,i.config.apiHost,t,d),g)})}async function xA(i,e,t){i._canInitEmulator=!1;const s={...TN,...e};try{const a=new bN(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zh(i,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw a_(i,v,g);Ui(i,v)}}catch(a){if(a instanceof Is)throw a;Ui(i,"network-request-failed",{message:String(a)})}}async function wN(i,e,t,s,a={}){const l=await ul(i,e,t,s,a);return"mfaPendingCredential"in l&&Ui(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function kA(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?l_(i.config,a):`${i.config.apiScheme}://${a}`;return SN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class bN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ci(this.auth,"network-request-failed")),AN.get())})}}function Zh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ci(i,e,s);return a.customData._tokenResponse=t,a}/**
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
 */async function CN(i,e){return ul(i,"POST","/v1/accounts:delete",e)}async function wf(i,e){return ul(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Uu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RN(i,e=!1){const t=dt(i),s=await t.getIdToken(e),a=c_(s);Ee(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Uu($p(a.auth_time)),issuedAtTime:Uu($p(a.iat)),expirationTime:Uu($p(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function $p(i){return Number(i)*1e3}function c_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return of("JWT malformed, contained fewer than 3 sections"),null;try{const a=vf(t);return a?JSON.parse(a):(of("Failed to decode base64 JWT payload"),null)}catch(a){return of("Caught error parsing JWT payload as JSON",a?.toString()),null}}function m0(i){const e=c_(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Is&&IN(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function IN({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class NN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _g{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uu(this.lastLoginAt),this.creationTime=Uu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bf(i){const e=i.auth,t=await i.getIdToken(),s=await Wu(i,wf(e,{idToken:t}));Ee(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const l=a.providerUserInfo?.length?PA(a.providerUserInfo):[],c=ON(i.providerData,l),d=i.isAnonymous,p=!(i.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new _g(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(i,v)}async function DN(i){const e=dt(i);await bf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function PA(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function MN(i,e){const t=await xA(i,{},async()=>{const s=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await kA(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return i.emulatorConfig&&Dr(i.emulatorConfig.host)&&(p.credentials="include"),MA.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xN(i,e){return ul(i,"POST","/v2/accounts:revokeToken",u_(i,e))}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=m0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await MN(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new zo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ee(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return gs("not implemented")}}/**
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
 */function ar(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class li{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new NN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new _g(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Wu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RN(this,e)}reload(){return DN(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new li({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Aa(this.auth));const e=await this.getIdToken();return await Wu(this,CN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:O,providerData:B,stsTokenManager:Z}=t;Ee(T&&Z,e,"internal-error");const W=zo.fromJSON(this.name,Z);Ee(typeof T=="string",e,"internal-error"),ar(s,e.name),ar(a,e.name),Ee(typeof A=="boolean",e,"internal-error"),Ee(typeof O=="boolean",e,"internal-error"),ar(l,e.name),ar(c,e.name),ar(d,e.name),ar(p,e.name),ar(g,e.name),ar(v,e.name);const pe=new li({uid:T,auth:e,email:a,emailVerified:A,displayName:s,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:W,createdAt:g,lastLoginAt:v});return B&&Array.isArray(B)&&(pe.providerData=B.map(de=>({...de}))),p&&(pe._redirectEventId=p),pe}static async _fromIdTokenResponse(e,t,s=!1){const a=new zo;a.updateFromServerResponse(t);const l=new li({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await bf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ee(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?PA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new zo;d.updateFromIdToken(s);const p=new li({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new _g(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
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
 */const p0=new Map;function _s(i){As(i instanceof Function,"Expected a class definition");let e=p0.get(i);return e?(As(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,p0.set(i,e),e)}/**
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
 */class VA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}VA.type="NONE";const g0=VA;/**
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
 */function lf(i,e,t){return`firebase:${i}:${e}:${t}`}class Bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=lf(this.userKey,a.apiKey,l),this.fullPersistenceKey=lf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wf(this.auth,{idToken:e}).catch(()=>{});return t?li._fromGetAccountInfoResponse(this.auth,t,e):null}return li._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Bo(_s(g0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||_s(g0);const c=lf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const A=await wf(e,{idToken:v}).catch(()=>{});if(!A)break;T=await li._fromGetAccountInfoResponse(e,A,v)}else T=li._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Bo(l,e,s))}}/**
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
 */function _0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FA(e))return"Blackberry";if(jA(e))return"Webos";if(UA(e))return"Safari";if((e.includes("chrome/")||zA(e))&&!e.includes("edge/"))return"Chrome";if(qA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function LA(i=dn()){return/firefox\//i.test(i)}function UA(i=dn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zA(i=dn()){return/crios\//i.test(i)}function BA(i=dn()){return/iemobile/i.test(i)}function qA(i=dn()){return/android/i.test(i)}function FA(i=dn()){return/blackberry/i.test(i)}function jA(i=dn()){return/webos/i.test(i)}function h_(i=dn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function kN(i=dn()){return h_(i)&&!!window.navigator?.standalone}function PN(){return H1()&&document.documentMode===10}function HA(i=dn()){return h_(i)||qA(i)||jA(i)||FA(i)||/windows phone/i.test(i)||BA(i)}/**
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
 */function GA(i,e=[]){let t;switch(i){case"Browser":t=_0(dn());break;case"Worker":t=`${_0(dn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pa}/${s}`}/**
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
 */class VN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function LN(i,e={}){return ul(i,"GET","/v2/passwordPolicy",u_(i,e))}/**
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
 */const UN=6;class zN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??UN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class BN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new y0(this),this.idTokenSubscription=new y0(this),this.beforeStateQueue=new VN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_s(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wf(this,{idToken:e}),s=await li._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Zn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Aa(this));const t=e?dt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Aa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Aa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LN(this),t=new zN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await xN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_s(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[_s(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ad(i){return dt(i)}class y0{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let f_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qN(i){f_=i}function FN(i){return f_.loadJS(i)}function jN(){return f_.gapiScript}function HN(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function GN(i,e){const t=rd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(vr(l,e??{}))return a;Ui(a,"already-initialized")}return t.initialize({options:e})}function QN(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(_s);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function YN(i,e,t){const s=ad(i);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=QA(e),{host:c,port:d}=KN(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(vr(g,s.config.emulator)&&vr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Dr(c)?(t_(`${l}//${c}${p}`),n_("Auth",!0)):XN()}function QA(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function KN(i){const e=QA(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:v0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:v0(c)}}}function v0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function XN(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class YA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gs("not implemented")}_getIdTokenResponse(e){return gs("not implemented")}_linkToIdToken(e,t){return gs("not implemented")}_getReauthenticationResolver(e){return gs("not implemented")}}/**
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
 */async function qo(i,e){return wN(i,"POST","/v1/accounts:signInWithIdp",u_(i,e))}/**
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
 */const WN="http://localhost";class Ra extends YA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ra(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ui("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Ra(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return qo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,qo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qo(e,t)}buildRequest(){const e={requestUri:WN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ll(t)}return e}}/**
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
 */class d_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mc extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends mc{constructor(){super("facebook.com")}static credential(e){return Ra._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class ps extends mc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ra._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ps.credential(t,s)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
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
 */class lr extends mc{constructor(){super("github.com")}static credential(e){return Ra._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
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
 */class ur extends mc{constructor(){super("twitter.com")}static credential(e,t){return Ra._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ur.credential(t,s)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */class Ko{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await li._fromIdTokenResponse(e,s,a),c=E0(s);return new Ko({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=E0(s);return new Ko({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function E0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Cf extends Is{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Cf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Cf(e,t,s,a)}}function KA(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cf._fromErrorAndOperation(i,l,e,s):l})}async function $N(i,e,t=!1){const s=await Wu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ko._forOperation(i,"link",s)}/**
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
 */async function ZN(i,e,t=!1){const{auth:s}=i;if(Zn(s.app))return Promise.reject(Aa(s));const a="reauthenticate";try{const l=await Wu(i,KA(s,a,e,i),t);Ee(l.idToken,s,"internal-error");const c=c_(l.idToken);Ee(c,s,"internal-error");const{sub:d}=c;return Ee(i.uid===d,s,"user-mismatch"),Ko._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ui(s,"user-mismatch"),l}}/**
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
 */async function JN(i,e,t=!1){if(Zn(i.app))return Promise.reject(Aa(i));const s="signIn",a=await KA(i,s,e),l=await Ko._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}function eD(i,e,t,s){return dt(i).onIdTokenChanged(e,t,s)}function tD(i,e,t){return dt(i).beforeAuthStateChanged(e,t)}function nD(i,e,t,s){return dt(i).onAuthStateChanged(e,t,s)}function iD(i){return dt(i).signOut()}const Rf="__sak";/**
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
 */class XA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rf,"1"),this.storage.removeItem(Rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sD=1e3,rD=10;class WA extends XA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);PN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,rD):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},sD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}WA.type="LOCAL";const aD=WA;/**
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
 */class $A extends XA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$A.type="SESSION";const ZA=$A;/**
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
 */function oD(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class od{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new od(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await oD(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}od.receivers=[];/**
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
 */function m_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class lD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=m_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(A.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function xi(){return window}function uD(i){xi().location.href=i}/**
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
 */function JA(){return typeof xi().WorkerGlobalScope<"u"&&typeof xi().importScripts=="function"}async function cD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hD(){return navigator?.serviceWorker?.controller||null}function fD(){return JA()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",dD=1,If="firebaseLocalStorage",tw="fbase_key";class pc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ld(i,e){return i.transaction([If],e?"readwrite":"readonly").objectStore(If)}function mD(){const i=indexedDB.deleteDatabase(ew);return new pc(i).toPromise()}function yg(){const i=indexedDB.open(ew,dD);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(If,{keyPath:tw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(If)?e(s):(s.close(),await mD(),e(await yg()))})})}async function T0(i,e,t){const s=ld(i,!0).put({[tw]:e,value:t});return new pc(s).toPromise()}async function pD(i,e){const t=ld(i,!1).get(e),s=await new pc(t).toPromise();return s===void 0?null:s.value}function S0(i,e){const t=ld(i,!0).delete(e);return new pc(t).toPromise()}const gD=800,_D=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>_D)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=od._getInstance(fD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cD(),!this.activeServiceWorker)return;this.sender=new lD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yg();return await T0(e,Rf,"1"),await S0(e,Rf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>T0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>pD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>S0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=ld(a,!1).getAll();return new pc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const yD=nw;new dc(3e4,6e4);/**
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
 */function iw(i,e){return e?_s(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class p_ extends YA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vD(i){return JN(i.auth,new p_(i),i.bypassAuthState)}function ED(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),ZN(t,new p_(i),i.bypassAuthState)}async function TD(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),$N(t,new p_(i),i.bypassAuthState)}/**
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
 */class sw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vD;case"linkViaPopup":case"linkViaRedirect":return TD;case"reauthViaPopup":case"reauthViaRedirect":return ED;default:Ui(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SD=new dc(2e3,1e4);async function AD(i,e,t){if(Zn(i.app))return Promise.reject(ci(i,"operation-not-supported-in-this-environment"));const s=ad(i);_N(i,e,d_);const a=iw(s,t);return new va(s,"signInViaPopup",e,a).executeNotNull()}class va extends sw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,va.currentPopupAction&&va.currentPopupAction.cancel(),va.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=m_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,va.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SD.get())};e()}}va.currentPopupAction=null;/**
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
 */const wD="pendingRedirect",uf=new Map;class bD extends sw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=uf.get(this.auth._key());if(!e){try{const s=await CD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}uf.set(this.auth._key(),e)}return this.bypassAuthState||uf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CD(i,e){const t=ND(e),s=ID(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function RD(i,e){uf.set(i._key(),e)}function ID(i){return _s(i._redirectPersistence)}function ND(i){return lf(wD,i.config.apiKey,i.name)}async function DD(i,e,t=!1){if(Zn(i.app))return Promise.reject(Aa(i));const s=ad(i),a=iw(s,e),c=await new bD(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const OD=600*1e3;class MD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ci(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OD&&this.cachedEventUids.clear(),this.cachedEventUids.has(A0(e))}saveEventToCache(e){this.cachedEventUids.add(A0(e)),this.lastProcessedEventTime=Date.now()}}function A0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function rw({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function xD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rw(i);default:return!1}}/**
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
 */async function kD(i,e={}){return ul(i,"GET","/v1/projects",e)}/**
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
 */const PD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VD=/^https?/;async function LD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await kD(i);for(const t of e)try{if(UD(t))return}catch{}Ui(i,"unauthorized-domain")}function UD(i){const e=gg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!VD.test(t))return!1;if(PD.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const zD=new dc(3e4,6e4);function w0(){const i=xi().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function BD(i){return new Promise((e,t)=>{function s(){w0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{w0(),t(ci(i,"network-request-failed"))},timeout:zD.get()})}if(xi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xi().gapi?.load)s();else{const a=HN("iframefcb");return xi()[a]=()=>{gapi.load?s():t(ci(i,"network-request-failed"))},FN(`${jN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw cf=null,e})}let cf=null;function qD(i){return cf=cf||BD(i),cf}/**
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
 */const FD=new dc(5e3,15e3),jD="__/auth/iframe",HD="emulator/auth/iframe",GD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YD(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?l_(e,HD):`https://${i.config.authDomain}/${jD}`,s={apiKey:e.apiKey,appName:i.name,v:Pa},a=QD.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ll(s).slice(1)}`}async function KD(i){const e=await qD(i),t=xi().gapi;return Ee(t,i,"internal-error"),e.open({where:document.body,url:YD(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GD,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ci(i,"network-request-failed"),d=xi().setTimeout(()=>{l(c)},FD.get());function p(){xi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const XD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WD=500,$D=600,ZD="_blank",JD="http://localhost";class b0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e2(i,e,t,s=WD,a=$D){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...XD,width:s.toString(),height:a.toString(),top:l,left:c},g=dn().toLowerCase();t&&(d=zA(g)?ZD:t),LA(g)&&(e=e||JD,p.scrollbars="yes");const v=Object.entries(p).reduce((A,[O,B])=>`${A}${O}=${B},`,"");if(kN(g)&&d!=="_self")return t2(e||"",d),new b0(null);const T=window.open(e||"",d,v);Ee(T,i,"popup-blocked");try{T.focus()}catch{}return new b0(T)}function t2(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const n2="__/auth/handler",i2="emulator/auth/handler",s2=encodeURIComponent("fac");async function C0(i,e,t,s,a,l){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Pa,eventId:a};if(e instanceof d_){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Ef(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof mc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await i._getAppCheckToken(),g=p?`#${s2}=${encodeURIComponent(p)}`:"";return`${r2(i)}?${ll(d).slice(1)}${g}`}function r2({config:i}){return i.emulator?l_(i,i2):`https://${i.authDomain}/${n2}`}/**
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
 */const Zp="webStorageSupport";class a2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZA,this._completeRedirectFn=DD,this._overrideRedirectResult=RD}async _openPopup(e,t,s,a){As(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await C0(e,t,s,gg(),a);return e2(e,l,m_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await C0(e,t,s,gg(),a);return uD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(As(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await KD(e),s=new MD(e);return t.register("authEvent",a=>(Ee(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zp,{type:Zp},a=>{const l=a?.[0]?.[Zp];l!==void 0&&t(!!l),Ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return HA()||UA()||h_()}}const o2=a2;var R0="@firebase/auth",I0="1.11.0";/**
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
 */class l2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u2(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c2(i){Ca(new Er("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GA(i)},g=new BN(s,a,l,p);return QN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ca(new Er("auth-internal",e=>{const t=ad(e.getProvider("auth").getImmediate());return(s=>new l2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mi(R0,I0,u2(i)),Mi(R0,I0,"esm2020")}/**
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
 */const h2=300,f2=TA("authIdTokenMaxAge")||h2;let N0=null;const d2=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>f2)return;const a=t?.token;N0!==a&&(N0=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function m2(i=r_()){const e=rd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=GN(i,{popupRedirectResolver:o2,persistence:[yD,aD,ZA]}),s=TA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=d2(l.toString());tD(t,c,()=>c(t.currentUser)),eD(t,d=>c(d))}}const a=yA("auth");return a&&YN(t,`http://${a}`),t}function p2(){return document.getElementsByTagName("head")?.[0]??document}qN({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=ci("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",p2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c2("Browser");var D0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,aw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,b){function I(){}I.prototype=b.prototype,k.D=b.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(M,x,V){for(var R=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)R[$t-2]=arguments[$t];return b.prototype[x].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,b,I){I||(I=0);var M=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)M[x]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(x=0;16>x;++x)M[x]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=k.g[0],I=k.g[1],x=k.g[2];var V=k.g[3],R=b+(V^I&(x^V))+M[0]+3614090360&4294967295;b=I+(R<<7&4294967295|R>>>25),R=V+(x^b&(I^x))+M[1]+3905402710&4294967295,V=b+(R<<12&4294967295|R>>>20),R=x+(I^V&(b^I))+M[2]+606105819&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(b^x&(V^b))+M[3]+3250441966&4294967295,I=x+(R<<22&4294967295|R>>>10),R=b+(V^I&(x^V))+M[4]+4118548399&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(x^b&(I^x))+M[5]+1200080426&4294967295,V=b+(R<<12&4294967295|R>>>20),R=x+(I^V&(b^I))+M[6]+2821735955&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(b^x&(V^b))+M[7]+4249261313&4294967295,I=x+(R<<22&4294967295|R>>>10),R=b+(V^I&(x^V))+M[8]+1770035416&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(x^b&(I^x))+M[9]+2336552879&4294967295,V=b+(R<<12&4294967295|R>>>20),R=x+(I^V&(b^I))+M[10]+4294925233&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(b^x&(V^b))+M[11]+2304563134&4294967295,I=x+(R<<22&4294967295|R>>>10),R=b+(V^I&(x^V))+M[12]+1804603682&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(x^b&(I^x))+M[13]+4254626195&4294967295,V=b+(R<<12&4294967295|R>>>20),R=x+(I^V&(b^I))+M[14]+2792965006&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(b^x&(V^b))+M[15]+1236535329&4294967295,I=x+(R<<22&4294967295|R>>>10),R=b+(x^V&(I^x))+M[1]+4129170786&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(b^I))+M[6]+3225465664&4294967295,V=b+(R<<9&4294967295|R>>>23),R=x+(b^I&(V^b))+M[11]+643717713&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(x^V))+M[0]+3921069994&4294967295,I=x+(R<<20&4294967295|R>>>12),R=b+(x^V&(I^x))+M[5]+3593408605&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(b^I))+M[10]+38016083&4294967295,V=b+(R<<9&4294967295|R>>>23),R=x+(b^I&(V^b))+M[15]+3634488961&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(x^V))+M[4]+3889429448&4294967295,I=x+(R<<20&4294967295|R>>>12),R=b+(x^V&(I^x))+M[9]+568446438&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(b^I))+M[14]+3275163606&4294967295,V=b+(R<<9&4294967295|R>>>23),R=x+(b^I&(V^b))+M[3]+4107603335&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(x^V))+M[8]+1163531501&4294967295,I=x+(R<<20&4294967295|R>>>12),R=b+(x^V&(I^x))+M[13]+2850285829&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(b^I))+M[2]+4243563512&4294967295,V=b+(R<<9&4294967295|R>>>23),R=x+(b^I&(V^b))+M[7]+1735328473&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(x^V))+M[12]+2368359562&4294967295,I=x+(R<<20&4294967295|R>>>12),R=b+(I^x^V)+M[5]+4294588738&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^x)+M[8]+2272392833&4294967295,V=b+(R<<11&4294967295|R>>>21),R=x+(V^b^I)+M[11]+1839030562&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^b)+M[14]+4259657740&4294967295,I=x+(R<<23&4294967295|R>>>9),R=b+(I^x^V)+M[1]+2763975236&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^x)+M[4]+1272893353&4294967295,V=b+(R<<11&4294967295|R>>>21),R=x+(V^b^I)+M[7]+4139469664&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^b)+M[10]+3200236656&4294967295,I=x+(R<<23&4294967295|R>>>9),R=b+(I^x^V)+M[13]+681279174&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^x)+M[0]+3936430074&4294967295,V=b+(R<<11&4294967295|R>>>21),R=x+(V^b^I)+M[3]+3572445317&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^b)+M[6]+76029189&4294967295,I=x+(R<<23&4294967295|R>>>9),R=b+(I^x^V)+M[9]+3654602809&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^x)+M[12]+3873151461&4294967295,V=b+(R<<11&4294967295|R>>>21),R=x+(V^b^I)+M[15]+530742520&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^b)+M[2]+3299628645&4294967295,I=x+(R<<23&4294967295|R>>>9),R=b+(x^(I|~V))+M[0]+4096336452&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~x))+M[7]+1126891415&4294967295,V=b+(R<<10&4294967295|R>>>22),R=x+(b^(V|~I))+M[14]+2878612391&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~b))+M[5]+4237533241&4294967295,I=x+(R<<21&4294967295|R>>>11),R=b+(x^(I|~V))+M[12]+1700485571&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~x))+M[3]+2399980690&4294967295,V=b+(R<<10&4294967295|R>>>22),R=x+(b^(V|~I))+M[10]+4293915773&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~b))+M[1]+2240044497&4294967295,I=x+(R<<21&4294967295|R>>>11),R=b+(x^(I|~V))+M[8]+1873313359&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~x))+M[15]+4264355552&4294967295,V=b+(R<<10&4294967295|R>>>22),R=x+(b^(V|~I))+M[6]+2734768916&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~b))+M[13]+1309151649&4294967295,I=x+(R<<21&4294967295|R>>>11),R=b+(x^(I|~V))+M[4]+4149444226&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~x))+M[11]+3174756917&4294967295,V=b+(R<<10&4294967295|R>>>22),R=x+(b^(V|~I))+M[2]+718787259&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~b))+M[9]+3951481745&4294967295,k.g[0]=k.g[0]+b&4294967295,k.g[1]=k.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,b){b===void 0&&(b=k.length);for(var I=b-this.blockSize,M=this.B,x=this.h,V=0;V<b;){if(x==0)for(;V<=I;)a(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<b;)if(M[x++]=k.charCodeAt(V++),x==this.blockSize){a(this,M),x=0;break}}else for(;V<b;)if(M[x++]=k[V++],x==this.blockSize){a(this,M),x=0;break}}this.h=x,this.o+=b},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var b=1;b<k.length-8;++b)k[b]=0;var I=8*this.o;for(b=k.length-8;b<k.length;++b)k[b]=I&255,I/=256;for(this.u(k),k=Array(16),b=I=0;4>b;++b)for(var M=0;32>M;M+=8)k[I++]=this.g[b]>>>M&255;return k};function l(k,b){var I=d;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=b(k)}function c(k,b){this.h=b;for(var I=[],M=!0,x=k.length-1;0<=x;x--){var V=k[x]|0;M&&V==b||(I[x]=V,M=!1)}this.g=I}var d={};function p(k){return-128<=k&&128>k?l(k,function(b){return new c([b|0],0>b?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return W(g(-k));for(var b=[],I=1,M=0;k>=I;M++)b[M]=k/I|0,I*=4294967296;return new c(b,0)}function v(k,b){if(k.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k.charAt(0)=="-")return W(v(k.substring(1),b));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(b,8)),M=T,x=0;x<k.length;x+=8){var V=Math.min(8,k.length-x),R=parseInt(k.substring(x,x+V),b);8>V?(V=g(Math.pow(b,V)),M=M.j(V).add(g(R))):(M=M.j(I),M=M.add(g(R)))}return M}var T=p(0),A=p(1),O=p(16777216);i=c.prototype,i.m=function(){if(Z(this))return-W(this).m();for(var k=0,b=1,I=0;I<this.g.length;I++){var M=this.i(I);k+=(0<=M?M:4294967296+M)*b,b*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(B(this))return"0";if(Z(this))return"-"+W(this).toString(k);for(var b=g(Math.pow(k,6)),I=this,M="";;){var x=Fe(I,b).g;I=pe(I,x.j(b));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=x,B(I))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function B(k){if(k.h!=0)return!1;for(var b=0;b<k.g.length;b++)if(k.g[b]!=0)return!1;return!0}function Z(k){return k.h==-1}i.l=function(k){return k=pe(this,k),Z(k)?-1:B(k)?0:1};function W(k){for(var b=k.g.length,I=[],M=0;M<b;M++)I[M]=~k.g[M];return new c(I,~k.h).add(A)}i.abs=function(){return Z(this)?W(this):this},i.add=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],M=0,x=0;x<=b;x++){var V=M+(this.i(x)&65535)+(k.i(x)&65535),R=(V>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);M=R>>>16,V&=65535,R&=65535,I[x]=R<<16|V}return new c(I,I[I.length-1]&-2147483648?-1:0)};function pe(k,b){return k.add(W(b))}i.j=function(k){if(B(this)||B(k))return T;if(Z(this))return Z(k)?W(this).j(W(k)):W(W(this).j(k));if(Z(k))return W(this.j(W(k)));if(0>this.l(O)&&0>k.l(O))return g(this.m()*k.m());for(var b=this.g.length+k.g.length,I=[],M=0;M<2*b;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(var x=0;x<k.g.length;x++){var V=this.i(M)>>>16,R=this.i(M)&65535,$t=k.i(x)>>>16,gt=k.i(x)&65535;I[2*M+2*x]+=R*gt,de(I,2*M+2*x),I[2*M+2*x+1]+=V*gt,de(I,2*M+2*x+1),I[2*M+2*x+1]+=R*$t,de(I,2*M+2*x+1),I[2*M+2*x+2]+=V*$t,de(I,2*M+2*x+2)}for(M=0;M<b;M++)I[M]=I[2*M+1]<<16|I[2*M];for(M=b;M<2*b;M++)I[M]=0;return new c(I,0)};function de(k,b){for(;(k[b]&65535)!=k[b];)k[b+1]+=k[b]>>>16,k[b]&=65535,b++}function ue(k,b){this.g=k,this.h=b}function Fe(k,b){if(B(b))throw Error("division by zero");if(B(k))return new ue(T,T);if(Z(k))return b=Fe(W(k),b),new ue(W(b.g),W(b.h));if(Z(b))return b=Fe(k,W(b)),new ue(W(b.g),b.h);if(30<k.g.length){if(Z(k)||Z(b))throw Error("slowDivide_ only works with positive integers.");for(var I=A,M=b;0>=M.l(k);)I=we(I),M=we(M);var x=Qe(I,1),V=Qe(M,1);for(M=Qe(M,2),I=Qe(I,2);!B(M);){var R=V.add(M);0>=R.l(k)&&(x=x.add(I),V=R),M=Qe(M,1),I=Qe(I,1)}return b=pe(k,x.j(b)),new ue(x,b)}for(x=T;0<=k.l(b);){for(I=Math.max(1,Math.floor(k.m()/b.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(I),R=V.j(b);Z(R)||0<R.l(k);)I-=M,V=g(I),R=V.j(b);B(V)&&(V=A),x=x.add(V),k=pe(k,R)}return new ue(x,k)}i.A=function(k){return Fe(this,k).h},i.and=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)&k.i(M);return new c(I,this.h&k.h)},i.or=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)|k.i(M);return new c(I,this.h|k.h)},i.xor=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)^k.i(M);return new c(I,this.h^k.h)};function we(k){for(var b=k.g.length+1,I=[],M=0;M<b;M++)I[M]=k.i(M)<<1|k.i(M-1)>>>31;return new c(I,k.h)}function Qe(k,b){var I=b>>5;b%=32;for(var M=k.g.length-I,x=[],V=0;V<M;V++)x[V]=0<b?k.i(V+I)>>>b|k.i(V+I+1)<<32-b:k.i(V+I);return new c(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,aw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,mr=c}).apply(typeof D0<"u"?D0:typeof self<"u"?self:typeof window<"u"?window:{});var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ow,Mu,lw,hf,vg,uw,cw,hw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jh=="object"&&Jh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var L=h[w];if(!(L in y))break e;y=y[L]}h=h[h.length-1],w=y[h],_=_(w),_!=w&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,w=!1,L={next:function(){if(!w&&y<h.length){var j=y++;return{value:_(j,h[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function A(h,_,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,A.apply(null,arguments)}function O(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function B(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,L,j){for(var te=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)te[Le-2]=arguments[Le];return _.prototype[L].apply(w,te)}}function Z(h){const _=h.length;if(0<_){const y=Array(_);for(let w=0;w<_;w++)y[w]=h[w];return y}return[]}function W(h,_){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(p(w)){const L=h.length||0,j=w.length||0;h.length=L+j;for(let te=0;te<j;te++)h[L+te]=w[te]}else h.push(w)}}class pe{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function de(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Fe(h){return Fe[" "](h),h}Fe[" "]=function(){};var we=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Qe(h,_,y){for(const w in h)_.call(y,h[w],w,h)}function k(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function b(h){const _={};for(const y in h)_[y]=h[y];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)h[y]=w[y];for(let j=0;j<I.length;j++)y=I[j],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function x(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function V(h){d.setTimeout(()=>{throw h},0)}function R(){var h=je;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class $t{constructor(){this.h=this.g=null}add(_,y){const w=gt.get();w.set(_,y),this.h?this.h.next=w:this.g=w,this.h=w}}var gt=new pe(()=>new H,h=>h.reset());class H{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,ce=!1,je=new $t,N=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then($)}};var $=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(y){V(y)}var _=gt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ce=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var fe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function Ie(h,_){if(J.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(we){e:{try{Fe(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Te[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ie.aa.h.call(this)}}B(Ie,J);var Te={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var qt="closure_listenable_"+(1e6*Math.random()|0),at=0;function mi(h,_,y,w,L){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!w,this.ha=L,this.key=++at,this.da=this.fa=!1}function Os(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function qi(h){this.src=h,this.g={},this.h=0}qi.prototype.add=function(h,_,y,w,L){var j=h.toString();h=this.g[j],h||(h=this.g[j]=[],this.h++);var te=Pr(h,_,w,L);return-1<te?(_=h[te],y||(_.fa=!1)):(_=new mi(_,this.src,j,!!w,L),_.fa=y,h.push(_)),_};function kr(h,_){var y=_.type;if(y in h.g){var w=h.g[y],L=Array.prototype.indexOf.call(w,_,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(Os(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Pr(h,_,y,w){for(var L=0;L<h.length;++L){var j=h[L];if(!j.da&&j.listener==_&&j.capture==!!y&&j.ha==w)return L}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),yl={};function Ic(h,_,y,w,L){if(Array.isArray(_)){for(var j=0;j<_.length;j++)Ic(h,_[j],y,w,L);return null}return y=Nc(y),h&&h[qt]?h.K(_,y,g(w)?!!w.capture:!1,L):zn(h,_,y,!1,w,L)}function zn(h,_,y,w,L,j){if(!_)throw Error("Invalid event type");var te=g(L)?!!L.capture:!!L,Le=qa(h);if(Le||(h[Vr]=Le=new qi(h)),y=Le.add(_,y,w,te,j),y.proxy)return y;if(w=Bd(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)fe||(L=te),L===void 0&&(L=!1),h.addEventListener(_.toString(),w,L);else if(h.attachEvent)h.attachEvent(Lr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Bd(){function h(y){return _.call(h.src,h.listener,y)}const _=qd;return h}function vl(h,_,y,w,L){if(Array.isArray(_))for(var j=0;j<_.length;j++)vl(h,_[j],y,w,L);else w=g(w)?!!w.capture:!!w,y=Nc(y),h&&h[qt]?(h=h.i,_=String(_).toString(),_ in h.g&&(j=h.g[_],y=Pr(j,y,w,L),-1<y&&(Os(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete h.g[_],h.h--)))):h&&(h=qa(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Pr(_,y,w,L)),(y=-1<h?_[h]:null)&&Ba(y))}function Ba(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[qt])kr(_.i,h);else{var y=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(y,w,h.capture):_.detachEvent?_.detachEvent(Lr(y),w):_.addListener&&_.removeListener&&_.removeListener(w),(y=qa(_))?(kr(y,h),y.h==0&&(y.src=null,_[Vr]=null)):Os(h)}}}function Lr(h){return h in yl?yl[h]:yl[h]="on"+h}function qd(h,_){if(h.da)h=!0;else{_=new Ie(_,this);var y=h.listener,w=h.ha||h.src;h.fa&&Ba(h),h=y.call(w,_)}return h}function qa(h){return h=h[Vr],h instanceof qi?h:null}var El="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nc(h){return typeof h=="function"?h:(h[El]||(h[El]=function(_){return h.handleEvent(_)}),h[El])}function _t(){se.call(this),this.i=new qi(this),this.M=this,this.F=null}B(_t,se),_t.prototype[qt]=!0,_t.prototype.removeEventListener=function(h,_,y,w){vl(this,h,_,y,w)};function Xe(h,_){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new J(_,h);else if(_ instanceof J)_.target=_.target||h;else{var L=_;_=new J(w,h),M(_,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var te=_.g=y[j];L=In(te,w,!0,_)&&L}if(te=_.g=h,L=In(te,w,!0,_)&&L,L=In(te,w,!1,_)&&L,y)for(j=0;j<y.length;j++)te=_.g=y[j],L=In(te,w,!1,_)&&L}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],w=0;w<y.length;w++)Os(y[w]);delete h.g[_],h.h--}}this.F=null},_t.prototype.K=function(h,_,y,w){return this.i.add(String(h),_,!1,y,w)},_t.prototype.L=function(h,_,y,w){return this.i.add(String(h),_,!0,y,w)};function In(h,_,y,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,j=0;j<_.length;++j){var te=_[j];if(te&&!te.da&&te.capture==y){var Le=te.listener,Vt=te.ha||te.src;te.fa&&kr(h.i,te),L=Le.call(Vt,w)!==!1&&L}}return L&&!w.defaultPrevented}function on(h,_,y){if(typeof h=="function")y&&(h=A(h,y));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Dc(h){h.g=on(()=>{h.g=null,h.i&&(h.i=!1,Dc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Fd extends se{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Dc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(h){se.call(this),this.h=h,this.g={}}B(Ur,se);var zr=[];function Br(h){Qe(h.g,function(_,y){this.g.hasOwnProperty(y)&&Ba(_)},h),h.g={}}Ur.prototype.N=function(){Ur.aa.N.call(this),Br(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=d.JSON.stringify,Fa=d.JSON.parse,qr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Tl(){}Tl.prototype.h=null;function Sl(h){return h.h||(h.h=h.i())}function Al(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ji(){J.call(this,"d")}B(ji,J);function wl(){J.call(this,"c")}B(wl,J);var pi={},bl=null;function Ms(){return bl=bl||new _t}pi.La="serverreachability";function ja(h){J.call(this,pi.La,h)}B(ja,J);function xs(h){const _=Ms();Xe(_,new ja(_))}pi.STAT_EVENT="statevent";function Oc(h,_){J.call(this,pi.STAT_EVENT,h),this.stat=_}B(Oc,J);function ht(h){const _=Ms();Xe(_,new Oc(_,h))}pi.Ma="timingevent";function Pt(h,_){J.call(this,pi.Ma,h),this.size=_}B(Pt,J);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function Cl(h,_,y,w,L,j){h.info(function(){if(h.g)if(j)for(var te="",Le=j.split("&"),Vt=0;Vt<Le.length;Vt++){var Ue=Le[Vt].split("=");if(1<Ue.length){var jt=Ue[0];Ue=Ue[1];var Lt=jt.split("_");te=2<=Lt.length&&Lt[1]=="type"?te+(jt+"="+Ue+"&"):te+(jt+"=redacted&")}}else te=null;else te=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+_+`
`+y+`
`+te})}function jd(h,_,y,w,L,j,te){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+_+`
`+y+`
`+j+" "+te})}function ks(h,_,y,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Fr(h,y)+(w?" "+w:"")})}function Mc(h,_){h.info(function(){return"TIMEOUT: "+_})}Bn.prototype.info=function(){};function Fr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var te=1;te<L.length;te++)L[te]=""}}}}return ti(y)}catch{return _}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gi;function _i(){}B(_i,Tl),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},gi=new _i;function pn(h,_,y,w){this.j=h,this.i=_,this.l=y,this.R=w||1,this.U=new Ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Rl={},Ha={};function ni(h,_,y){h.L=1,h.v=Yr(Nn(_)),h.m=y,h.P=!0,Gi(h,null)}function Gi(h,_){h.F=Date.now(),jr(h),h.A=Nn(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),xl(y.i,"t",w),h.C=0,y=h.j.J,h.h=new Tt,h.g=Kc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Fd(A(h.Y,h,h.g),h.O)),_=h.U,y=h.g,w=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(zr[0]=L.toString()),L=zr);for(var j=0;j<L.length;j++){var te=Ic(y,L[j],w||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),xs(),Cl(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Hn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const Lt=Hn(this.g);var _=this.g.Ba();const Ji=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Bc(this.g)))){this.J||Lt!=4||_==7||(_==8||0>=Ji?xs(3):xs(2)),Vs(this);var y=this.g.Z();this.X=y;t:if(xc(this)){var w=Bc(this.g);h="";var L=w.length,j=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),yi(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(j&&_==L-1)});w.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,jd(this.i,this.u,this.A,this.l,this.R,Lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,Vt=this.g;if((Le=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(Le)){var Ue=Le;break t}}Ue=null}if(y=Ue)ks(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,y);else{this.o=!1,this.s=3,ht(12),Zt(this),yi(this);break e}}if(this.P){y=!0;let Jt;for(;!this.J&&this.C<te.length;)if(Jt=kc(this,te),Jt==Ha){Lt==4&&(this.s=4,ht(14),y=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Rl){this.s=4,ht(15),ks(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else ks(this.i,this.l,Jt,null),Hr(this,Jt);if(xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||te.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)ks(this.i,this.l,te,"[Invalid Chunked Response]"),Zt(this),yi(this);else if(0<te.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ta(jt),jt.M=!0,ht(11))}}else ks(this.i,this.l,te,null),Hr(this,te);Lt==4&&Zt(this),this.o&&!this.J&&(Lt==4?Gc(this.j,this):(this.o=!1,jr(this)))}else Kd(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Zt(this),yi(this)}}}catch{}finally{}};function xc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function kc(h,_){var y=h.C,w=_.indexOf(`
`,y);return w==-1?Ha:(y=Number(_.substring(y,w)),isNaN(y)?Rl:(w+=1,w+y>_.length?Ha:(_=_.slice(w,w+y),h.C=w+y,_)))}pn.prototype.cancel=function(){this.J=!0,Zt(this)};function jr(h){h.S=Date.now()+h.I,Pc(h,h.I)}function Pc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(A(h.ba,h),_)}function Vs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Mc(this.i,this.A),this.L!=2&&(xs(),ht(17)),Zt(this),this.s=2,yi(this)):Pc(this,this.S-h)};function yi(h){h.j.G==0||h.J||Gc(h.j,h)}function Zt(h){Vs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Br(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Hr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Il(y.h,h))){if(!h.K&&Il(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)no(y),eo(y);else break e;Ul(y),ht(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ct(A(y.Za,y),6e3));if(1>=Qa(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Zi(y,11)}else if((h.K||y.g==h)&&no(y),!de(_))for(L=y.Da.g.parse(_),_=0;_<L.length;_++){let Ue=L[_];if(y.T=Ue[0],Ue=Ue[1],y.G==2)if(Ue[0]=="c"){y.K=Ue[1],y.ia=Ue[2];const jt=Ue[3];jt!=null&&(y.la=jt,y.j.info("VER="+y.la));const Lt=Ue[4];Lt!=null&&(y.Aa=Lt,y.j.info("SVER="+y.Aa));const Ji=Ue[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(w=1.5*Ji,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Jt=h.g;if(Jt){const bi=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var j=w.h;j.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ya(j,j.h),j.h=null))}if(w.D){const Bl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bl&&(w.ya=Bl,Je(w.I,w.D,Bl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var te=h;if(w.qa=Yc(w,w.J?w.ia:null,w.W),te.K){gn(w.h,te);var Le=te,Vt=w.L;Vt&&(Le.I=Vt),Le.B&&(Vs(Le),jr(Le)),w.g=te}else jc(w);0<y.i.length&&to(y)}else Ue[0]!="stop"&&Ue[0]!="close"||Zi(y,7);else y.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Zi(y,7):Vl(y):Ue[0]!="noop"&&y.l&&y.l.ta(Ue),y.v=0)}}xs(4)}catch{}}var Vc=class{constructor(h,_){this.g=h,this.map=_}};function Qi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Qa(h){return h.h?1:h.g?h.g.size:0}function Il(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ya(h,_){h.g?h.g.add(_):h.h=_}function gn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Qi.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Nl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return Z(h.i)}function Hd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,w=0;w<y;w++)_.push(h[w]);return _}_=[],y=0;for(w in h)_[y++]=h[w];return _}function Ka(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const w in h)_[y++]=w;return _}}}function Dl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=Ka(h),w=Hd(h),L=w.length,j=0;j<L;j++)_.call(void 0,w[j],y&&y[j],h)}var Gr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),L=null;if(0<=w){var j=h[y].substring(0,w);L=h[y].substring(w+1)}else j=h[y];_(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Rt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Rt){this.h=h.h,Qr(this,h.j),this.o=h.o,this.g=h.g,Ls(this,h.s),this.l=h.l;var _=h.i,y=new Ki;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Yi(this,y),this.m=h.m}else h&&(_=String(h).match(Gr))?(this.h=!1,Qr(this,_[1]||"",!0),this.o=qn(_[2]||""),this.g=qn(_[3]||"",!0),Ls(this,_[4]),this.l=qn(_[5]||"",!0),Yi(this,_[6]||"",!0),this.m=qn(_[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}Rt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Kr(_,Ol,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Kr(_,Ol,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Kr(y,y.charAt(0)=="/"?Qd:Ml,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Kr(y,Xa)),h.join("")};function Nn(h){return new Rt(h)}function Qr(h,_,y){h.j=y?qn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ls(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Yi(h,_,y){_ instanceof Ki?(h.i=_,Uc(h.i,h.h)):(y||(_=Kr(_,Yd)),h.i=new Ki(_,h.h))}function Je(h,_,y){h.i.set(_,y)}function Yr(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function qn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Kr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Lc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Lc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ol=/[#\/\?@]/g,Ml=/[#\?:]/g,Qd=/[#\?]/g,Yd=/[#\?@]/g,Xa=/#/g;function Ki(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Fn(h){h.g||(h.g=new Map,h.h=0,h.i&&Gd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=Ki.prototype,i.add=function(h,_){Fn(this),this.i=null,h=vi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Xi(h,_){Fn(h),_=vi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Wi(h,_){return Fn(h),_=vi(h,_),h.g.has(_)}i.forEach=function(h,_){Fn(this),this.g.forEach(function(y,w){y.forEach(function(L){h.call(_,L,w,this)},this)},this)},i.na=function(){Fn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let w=0;w<_.length;w++){const L=h[w];for(let j=0;j<L.length;j++)y.push(_[w])}return y},i.V=function(h){Fn(this);let _=[];if(typeof h=="string")Wi(this,h)&&(_=_.concat(this.g.get(vi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},i.set=function(h,_){return Fn(this),this.i=null,h=vi(this,h),Wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function xl(h,_,y){Xi(h,_),0<y.length&&(h.i=null,h.g.set(vi(h,_),Z(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var w=_[y];const j=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var L=j;te[w]!==""&&(L+="="+encodeURIComponent(String(te[w]))),h.push(L)}}return this.i=h.join("&")};function vi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Uc(h,_){_&&!h.j&&(Fn(h),h.i=null,h.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Xi(this,w),xl(this,L,y))},h)),h.j=_}function Xr(h,_){const y=new Bn;if(d.Image){const w=new Image;w.onload=O(jn,y,"TestLoadImage: loaded",!0,_,w),w.onerror=O(jn,y,"TestLoadImage: error",!1,_,w),w.onabort=O(jn,y,"TestLoadImage: abort",!1,_,w),w.ontimeout=O(jn,y,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function ii(h,_){const y=new Bn,w=new AbortController,L=setTimeout(()=>{w.abort(),jn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?jn(y,"TestPingServer: ok",!0,_):jn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),jn(y,"TestPingServer: error",!1,_)})}function jn(h,_,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Wr(){this.g=new qr}function Ei(h,_,y){const w=y||"";try{Dl(h,function(L,j){let te=L;g(L)&&(te=ti(L)),_.push(w+j+"="+encodeURIComponent(te))})}catch(L){throw _.push(w+"type="+encodeURIComponent("_badmap")),L}}function Us(h){this.l=h.Ub||null,this.j=h.eb||!1}B(Us,Tl),Us.prototype.g=function(){return new $i(this.l,this.j)},Us.prototype.i=(function(h){return function(){return h}})({});function $i(h,_){_t.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B($i,_t),i=$i.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Si(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ti(this):Si(this),this.readyState==3&&kl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Ti(this))},i.Qa=function(h){this.g&&(this.response=h,Ti(this))},i.ga=function(){this.g&&Ti(this)};function Ti(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Si(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Si(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Pl(h){let _="";return Qe(h,function(y,w){_+=w,_+=":",_+=y,_+=`\r
`}),_}function Ft(h,_,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Pl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Je(h,_,y))}function Ye(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,_t);var Wa=/^https?$/i,$r=["POST","PUT"];i=Ye.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gi.g(),this.v=this.o?Sl(this.o):Sl(gi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(j){zc(this,j);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call($r,_,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,te]of y)this.g.setRequestHeader(j,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zr(this),this.u=!0,this.g.send(h),this.u=!1}catch(j){zc(this,j)}};function zc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,$a(h),Ai(h)}function $a(h){h.A||(h.A=!0,Xe(h,"complete"),Xe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Xe(this,"complete"),Xe(this,"abort"),Ai(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),Ye.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Za(this):this.bb())},i.bb=function(){Za(this)};function Za(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Hn(h)!=4||h.Z()!=2)){if(h.u&&Hn(h)==4)on(h.Ea,0,h);else if(Xe(h,"readystatechange"),Hn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var w;if(w=te===0){var L=String(h.D).match(Gr)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),w=!Wa.test(L?L.toLowerCase():"")}y=w}if(y)Xe(h,"complete"),Xe(h,"success");else{h.m=6;try{var j=2<Hn(h)?h.g.statusText:""}catch{j=""}h.l=j+" ["+h.Z()+"]",$a(h)}}finally{Ai(h)}}}}function Ai(h,_){if(h.g){Zr(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Xe(h,"ready");try{y.onreadystatechange=w}catch{}}}function Zr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Hn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Fa(_)}};function Bc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Kd(h){const _={};h=(h.g&&2<=Hn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(de(h[w]))continue;var y=x(h[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=_[L]||[];_[L]=j,j.push(y)}k(_,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function Ja(h){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,h),this.cb=Jr("retryDelaySeedMs",1e4,h),this.Wa=Jr("forwardChannelMaxRetries",2,h),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(h&&h.concurrentRequestLimit),this.Da=new Wr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ja.prototype,i.la=8,i.G=1,i.connect=function(h,_,y,w){ht(0),this.W=h,this.H=_||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Yc(this,null,this.W),to(this)};function Vl(h){if(qc(h),h.G==3){var _=h.U++,y=Nn(h.I);if(Je(y,"SID",h.K),Je(y,"RID",_),Je(y,"TYPE","terminate"),ea(h,y),_=new pn(h,h.j,_),_.L=2,_.v=Yr(Nn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Kc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),jr(_)}Qc(h)}function eo(h){h.g&&(ta(h),h.g.cancel(),h.g=null)}function qc(h){eo(h),h.u&&(d.clearTimeout(h.u),h.u=null),no(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function to(h){if(!Ga(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||N(),ce||(ie(),ce=!0),je.add(_,h),h.B=0}}function Xd(h,_){return Qa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(A(h.Ga,h,_),zl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new pn(this,this.j,h);let j=this.o;if(this.S&&(j?(j=b(j),M(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Fc(this,L,_),y=Nn(this.I),Je(y,"RID",h),Je(y,"CVER",22),this.D&&Je(y,"X-HTTP-Session-Id",this.D),ea(this,y),j&&(this.O?_="headers="+encodeURIComponent(String(Pl(j)))+"&"+_:this.m&&Ft(y,this.m,j)),Ya(this.h,L),this.Ua&&Je(y,"TYPE","init"),this.P?(Je(y,"$req",_),Je(y,"SID","null"),L.T=!0,ni(L,y,null)):ni(L,y,_),this.G=2}}else this.G==3&&(h?Ll(this,h):this.i.length==0||Ga(this.h)||Ll(this))};function Ll(h,_){var y;_?y=_.l:y=h.U++;const w=Nn(h.I);Je(w,"SID",h.K),Je(w,"RID",y),Je(w,"AID",h.T),ea(h,w),h.m&&h.o&&Ft(w,h.m,h.o),y=new pn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Fc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ya(h.h,y),ni(y,w,_)}function ea(h,_){h.H&&Qe(h.H,function(y,w){Je(_,w,y)}),h.l&&Dl({},function(y,w){Je(_,w,y)})}function Fc(h,_,y){y=Math.min(h.i.length,y);var w=h.l?A(h.l.Na,h.l,h):null;e:{var L=h.i;let j=-1;for(;;){const te=["count="+y];j==-1?0<y?(j=L[0].g,te.push("ofs="+j)):j=0:te.push("ofs="+j);let Le=!0;for(let Vt=0;Vt<y;Vt++){let Ue=L[Vt].g;const jt=L[Vt].map;if(Ue-=j,0>Ue)j=Math.max(0,L[Vt].g-100),Le=!1;else try{Ei(jt,te,"req"+Ue+"_")}catch{w&&w(jt)}}if(Le){w=te.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,w}function jc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||N(),ce||(ie(),ce=!0),je.add(_,h),h.v=0}}function Ul(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(A(h.Fa,h),zl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Hc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(A(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),eo(this),Hc(this))};function ta(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Hc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Nn(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),ea(h,_),h.m&&h.o&&Ft(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Yr(Nn(_)),y.m=null,y.P=!0,Gi(y,h)}i.Za=function(){this.C!=null&&(this.C=null,eo(this),Ul(this),ht(19))};function no(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Gc(h,_){var y=null;if(h.g==_){no(h),ta(h),h.g=null;var w=2}else if(Il(h.h,_))y=_.D,gn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;w=Ms(),Xe(w,new Pt(w,y)),to(h)}else jc(h);else if(L=_.s,L==3||L==0&&0<_.X||!(w==1&&Xd(h,_)||w==2&&Ul(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),L){case 1:Zi(h,5);break;case 4:Zi(h,10);break;case 3:Zi(h,6);break;default:Zi(h,2)}}}function zl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function Zi(h,_){if(h.j.info("Error code "+_),_==2){var y=A(h.fb,h),w=h.Xa;const L=!w;w=new Rt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Qr(w,"https"),Yr(w),L?Xr(w.toString(),y):ii(w.toString(),y)}else ht(2);h.G=0,h.l&&h.l.sa(_),Qc(h),qc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Qc(h){if(h.G=0,h.ka=[],h.l){const _=Nl(h.h);(_.length!=0||h.i.length!=0)&&(W(h.ka,_),W(h.ka,h.i),h.h.i.length=0,Z(h.i),h.i.length=0),h.l.ra()}}function Yc(h,_,y){var w=y instanceof Rt?Nn(y):new Rt(y);if(w.g!="")_&&(w.g=_+"."+w.g),Ls(w,w.s);else{var L=d.location;w=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var j=new Rt(null);w&&Qr(j,w),_&&(j.g=_),L&&Ls(j,L),y&&(j.l=y),w=j}return y=h.D,_=h.ya,y&&_&&Je(w,y,_),Je(w,"VER",h.la),ea(h,w),w}function Kc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Us({eb:y})):new Ye(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xc(){}i=Xc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function io(){}io.prototype.g=function(h,_){return new _n(h,_)};function _n(h,_){_t.call(this),this.g=new Ja(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!de(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!de(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new wi(this)}B(_n,_t),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Vl(this.g)},_n.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ti(h),h=y);_.i.push(new Vc(_.Ya++,h)),_.G==3&&to(_)},_n.prototype.N=function(){this.g.l=null,delete this.j,Vl(this.g),delete this.g,_n.aa.N.call(this)};function Wc(h){ji.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}B(Wc,ji);function $c(){wl.call(this),this.status=1}B($c,wl);function wi(h){this.g=h}B(wi,Xc),wi.prototype.ua=function(){Xe(this.g,"a")},wi.prototype.ta=function(h){Xe(this.g,new Wc(h))},wi.prototype.sa=function(h){Xe(this.g,new $c)},wi.prototype.ra=function(){Xe(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,hw=function(){return new io},cw=function(){return Ms()},uw=pi,vg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,hf=Ps,Hi.COMPLETE="complete",lw=Hi,Al.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Mu=Al,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,ow=Ye}).apply(typeof Jh<"u"?Jh:typeof self<"u"?self:typeof window<"u"?window:{});const O0="@firebase/firestore",M0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}hn.UNAUTHENTICATED=new hn(null),hn.GOOGLE_CREDENTIALS=new hn("google-credentials-uid"),hn.FIRST_PARTY=new hn("first-party-uid"),hn.MOCK_USER=new hn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new sd("@firebase/firestore");function ko(){return Ia.logLevel}function ae(i,...e){if(Ia.logLevel<=ke.DEBUG){const t=e.map(g_);Ia.debug(`Firestore (${cl}): ${i}`,...t)}}function ws(i,...e){if(Ia.logLevel<=ke.ERROR){const t=e.map(g_);Ia.error(`Firestore (${cl}): ${i}`,...t)}}function Xo(i,...e){if(Ia.logLevel<=ke.WARN){const t=e.map(g_);Ia.warn(`Firestore (${cl}): ${i}`,...t)}}function g_(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,fw(i,s,t)}function fw(i,e,t){let s=`FIRESTORE (${cl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ws(s),new Error(s)}function Ke(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||fw(e,a,s)}function Ae(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Is{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(hn.UNAUTHENTICATED)))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class y2{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vs,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new dw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new hn(e)}}class v2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new v2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(hn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class x0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new x0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new x0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function S2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=S2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function Eg(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const a=i.charAt(s),l=e.charAt(s);if(a!==l)return Jp(a)===Jp(l)?Pe(a,l):Jp(a)?1:-1}return Pe(i.length,e.length)}const A2=55296,w2=57343;function Jp(i){const e=i.charCodeAt(0);return e>=A2&&e<=w2}function Wo(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="__name__";class Oi{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Oi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Oi.isNumericId(e),a=Oi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Oi.extractNumericId(e).compare(Oi.extractNumericId(t)):Eg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class lt extends Oi{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const b2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Oi{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return b2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===k0}static keyField(){return new rn([k0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new re(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new re(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new re(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new re(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(lt.fromString(e))}static fromName(e){return new he(lt.fromString(e).popFirst(5))}static empty(){return new he(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(i,e,t){if(!t)throw new re(Y.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function C2(i,e,t,s){if(e===!0&&s===!0)throw new re(Y.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function P0(i){if(!he.isDocumentKey(i))throw new re(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function V0(i){if(he.isDocumentKey(i))throw new re(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function pw(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ud(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Un(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new re(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ud(i);throw new re(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function xt(i,e){const t={typeString:i};return e&&(t.value=e),t}function gc(i,e){if(!pw(i))throw new re(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=-62135596800,U0=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*U0);return new ct(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<L0)throw new re(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/U0}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-L0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:xt("string",ct._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new ct(0,0))}static max(){return new Se(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $u=-1;function R2(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Se.fromTimestamp(s===1e9?new ct(t+1,0):new ct(t,s));return new Tr(a,he.empty(),e)}function I2(i){return new Tr(i.readTime,i.key,$u)}class Tr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Tr(Se.min(),he.empty(),$u)}static max(){return new Tr(Se.max(),he.empty(),$u)}}function N2(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
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
 */const D2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(i){if(i.code!==Y.FAILED_PRECONDITION||i.message!==D2)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,s)=>{t(e)}))}static reject(e){return new X(((t,s)=>{s(e)}))}static waitFor(e){return new X(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=X.resolve(!1);for(const s of e)t=t.next((a=>a?X.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new X(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new X(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function M2(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class cd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=-1;function hd(i){return i==null}function Nf(i){return i===0&&1/i==-1/0}function x2(i){return typeof i=="number"&&Number.isInteger(i)&&!Nf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="";function k2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=z0(e)),e=P2(i.get(t),e);return z0(e)}function P2(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case gw:t+="";break;default:t+=l}}return t}function z0(i){return i+gw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Or(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function _w(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt=class Tg{constructor(e,t){this.comparator=e,this.root=t||pr.EMPTY}insert(e,t){return new Tg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pr.BLACK,null,null))}remove(e){return new Tg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ef(this.root,e,this.comparator,!0)}},ef=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pr=class ds{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ds.RED,this.left=a??ds.EMPTY,this.right=l??ds.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new ds(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ds.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ds.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ds.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ds.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}};pr.EMPTY=null,pr.RED=!0,pr.BLACK=!1;pr.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new pr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new q0(this.data.getIterator())}getIteratorFrom(e){return new q0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class q0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ln{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Ln([])}unionWith(e){let t=new Bt(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new yw("Invalid base64 string: "+l):l}})(e);return new an(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=V2.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ar(i){return typeof i=="string"?an.fromBase64String(i):an.fromUint8Array(i)}/**
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
 */const vw="server_timestamp",Ew="__type__",Tw="__previous_value__",Sw="__local_write_time__";function v_(i){return(i?.mapValue?.fields||{})[Ew]?.stringValue===vw}function fd(i){const e=i.mapValue.fields[Tw];return v_(e)?fd(e):e}function Zu(i){const e=Sr(i.mapValue.fields[Sw].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Df="(default)";class Ju{constructor(e,t){this.projectId=e,this.database=t||Df}static empty(){return new Ju("","")}get isDefaultDatabase(){return this.database===Df}isEqual(e){return e instanceof Ju&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Aw="__type__",U2="__max__",tf={mapValue:{}},ww="__vector__",Of="value";function wr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?v_(i)?4:B2(i)?9007199254740991:z2(i)?10:11:_e(28295,{value:i})}function zi(i,e){if(i===e)return!0;const t=wr(i);if(t!==wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Zu(i).isEqual(Zu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Sr(a.timestampValue),d=Sr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,l){return Ar(a.bytesValue).isEqual(Ar(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,l){return wt(a.geoPointValue.latitude)===wt(l.geoPointValue.latitude)&&wt(a.geoPointValue.longitude)===wt(l.geoPointValue.longitude)})(i,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return wt(a.integerValue)===wt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=wt(a.doubleValue),d=wt(l.doubleValue);return c===d?Nf(c)===Nf(d):isNaN(c)&&isNaN(d)}return!1})(i,e);case 9:return Wo(i.arrayValue.values||[],e.arrayValue.values||[],zi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(B0(c)!==B0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!zi(c[p],d[p])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function ec(i,e){return(i.values||[]).find((t=>zi(t,e)))!==void 0}function $o(i,e){if(i===e)return 0;const t=wr(i),s=wr(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=wt(l.integerValue||l.doubleValue),p=wt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(i,e);case 3:return F0(i.timestampValue,e.timestampValue);case 4:return F0(Zu(i),Zu(e));case 5:return Eg(i.stringValue,e.stringValue);case 6:return(function(l,c){const d=Ar(l),p=Ar(c);return d.compareTo(p)})(i.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Pe(d[g],p[g]);if(v!==0)return v}return Pe(d.length,p.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Pe(wt(l.latitude),wt(c.latitude));return d!==0?d:Pe(wt(l.longitude),wt(c.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return j0(i.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Of]?.arrayValue,v=p[Of]?.arrayValue,T=Pe(g?.values?.length||0,v?.values?.length||0);return T!==0?T:j0(g,v)})(i.mapValue,e.mapValue);case 11:return(function(l,c){if(l===tf.mapValue&&c===tf.mapValue)return 0;if(l===tf.mapValue)return 1;if(c===tf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const A=Eg(p[T],v[T]);if(A!==0)return A;const O=$o(d[p[T]],g[v[T]]);if(O!==0)return O}return Pe(p.length,v.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function F0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=Sr(i),s=Sr(e),a=Pe(t.seconds,s.seconds);return a!==0?a:Pe(t.nanos,s.nanos)}function j0(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=$o(t[a],s[a]);if(l)return l}return Pe(t.length,s.length)}function Zo(i){return Sg(i)}function Sg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Sr(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ar(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return he.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Sg(l);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Sg(t.fields[c])}`;return a+"}"})(i.mapValue):_e(61005,{value:i})}function ff(i){switch(wr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fd(i);return e?16+ff(e):16;case 5:return 2*i.stringValue.length;case 6:return Ar(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+ff(l)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return Or(s.fields,((l,c)=>{a+=l.length+ff(c)})),a})(i.mapValue);default:throw _e(13486,{value:i})}}function H0(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Ag(i){return!!i&&"integerValue"in i}function E_(i){return!!i&&"arrayValue"in i}function G0(i){return!!i&&"nullValue"in i}function Q0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function df(i){return!!i&&"mapValue"in i}function z2(i){return(i?.mapValue?.fields||{})[Aw]?.stringValue===ww}function zu(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Or(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=zu(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zu(i.arrayValue.values[t]);return e}return{...i}}function B2(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===U2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!df(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zu(t)}setAll(e){let t=rn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=zu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());df(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];df(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Or(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new An(zu(this.value))}}function bw(i){const e=[];return Or(i.fields,((t,s)=>{const a=new rn([t]);if(df(s)){const l=bw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new fn(e,0,Se.min(),Se.min(),Se.min(),An.empty(),0)}static newFoundDocument(e,t,s,a){return new fn(e,1,t,Se.min(),s,a,0)}static newNoDocument(e,t){return new fn(e,2,t,Se.min(),Se.min(),An.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,Se.min(),Se.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mf{constructor(e,t){this.position=e,this.inclusive=t}}function Y0(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=he.comparator(he.fromName(c.referenceValue),t.key):s=$o(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function K0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!zi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function q2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Cw{}class Mt extends Cw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new j2(e,t,s):t==="array-contains"?new Q2(e,s):t==="in"?new Y2(e,s):t==="not-in"?new K2(e,s):t==="array-contains-any"?new X2(e,s):new Mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new H2(e,s):new G2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($o(t,this.value)):t!==null&&wr(this.value)===wr(t)&&this.matchesComparison($o(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class di extends Cw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new di(e,t)}matches(e){return Rw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rw(i){return i.op==="and"}function Iw(i){return F2(i)&&Rw(i)}function F2(i){for(const e of i.filters)if(e instanceof di)return!1;return!0}function wg(i){if(i instanceof Mt)return i.field.canonicalString()+i.op.toString()+Zo(i.value);if(Iw(i))return i.filters.map((e=>wg(e))).join(",");{const e=i.filters.map((t=>wg(t))).join(",");return`${i.op}(${e})`}}function Nw(i,e){return i instanceof Mt?(function(s,a){return a instanceof Mt&&s.op===a.op&&s.field.isEqual(a.field)&&zi(s.value,a.value)})(i,e):i instanceof di?(function(s,a){return a instanceof di&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&Nw(c,a.filters[d])),!0):!1})(i,e):void _e(19439)}function Dw(i){return i instanceof Mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zo(t.value)}`})(i):i instanceof di?(function(t){return t.op.toString()+" {"+t.getFilters().map(Dw).join(" ,")+"}"})(i):"Filter"}class j2 extends Mt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class H2 extends Mt{constructor(e,t){super(e,"in",t),this.keys=Ow("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class G2 extends Mt{constructor(e,t){super(e,"not-in",t),this.keys=Ow("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ow(i,e){return(e.arrayValue?.values||[]).map((t=>he.fromName(t.referenceValue)))}class Q2 extends Mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return E_(t)&&ec(t.arrayValue,this.value)}}class Y2 extends Mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ec(this.value.arrayValue,t)}}class K2 extends Mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ec(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ec(this.value.arrayValue,t)}}class X2 extends Mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!E_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ec(this.value.arrayValue,s)))}}/**
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
 */class W2{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function X0(i,e=null,t=[],s=[],a=null,l=null,c=null){return new W2(i,e,t,s,a,l,c)}function T_(i){const e=Ae(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>wg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),hd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Zo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Zo(s))).join(",")),e.Te=t}return e.Te}function S_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!q2(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Nw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!K0(i.startAt,e.startAt)&&K0(i.endAt,e.endAt)}function bg(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $2(i,e,t,s,a,l,c,d){return new dl(i,e,t,s,a,l,c,d)}function dd(i){return new dl(i)}function W0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Mw(i){return i.collectionGroup!==null}function Bu(i){const e=Ae(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Bt(rn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new tc(l,s))})),t.has(rn.keyField().canonicalString())||e.Ie.push(new tc(rn.keyField(),s))}return e.Ie}function ki(i){const e=Ae(i);return e.Ee||(e.Ee=Z2(e,Bu(i))),e.Ee}function Z2(i,e){if(i.limitType==="F")return X0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new tc(a.field,l)}));const t=i.endAt?new Mf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Mf(i.startAt.position,i.startAt.inclusive):null;return X0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Cg(i,e){const t=i.filters.concat([e]);return new dl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function xf(i,e,t){return new dl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function md(i,e){return S_(ki(i),ki(e))&&i.limitType===e.limitType}function xw(i){return`${T_(ki(i))}|lt:${i.limitType}`}function Po(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>Dw(a))).join(", ")}]`),hd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>Zo(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>Zo(a))).join(",")),`Target(${s})`})(ki(i))}; limitType=${i.limitType})`}function pd(i,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):he.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(i,e)&&(function(s,a){for(const l of Bu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=Y0(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Bu(s),a)||s.endAt&&!(function(c,d,p){const g=Y0(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Bu(s),a))})(i,e)}function J2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function kw(i){return(e,t)=>{let s=!1;for(const a of Bu(i)){const l=eO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function eO(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?$o(p,g):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new kt(he.comparator);function bs(){return tO}const Pw=new kt(he.comparator);function xu(...i){let e=Pw;for(const t of i)e=e.insert(t.key,t);return e}function Vw(i){let e=Pw;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ea(){return qu()}function Lw(){return qu()}function qu(){return new Va((i=>i.toString()),((i,e)=>i.isEqual(e)))}const nO=new kt(he.comparator),iO=new Bt(he.comparator);function Ve(...i){let e=iO;for(const t of i)e=e.add(t);return e}const sO=new Bt(Pe);function rO(){return sO}/**
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
 */function A_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nf(e)?"-0":e}}function Uw(i){return{integerValue:""+i}}function aO(i,e){return x2(e)?Uw(e):A_(i,e)}/**
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
 */class gd{constructor(){this._=void 0}}function oO(i,e,t){return i instanceof nc?(function(a,l){const c={fields:{[Ew]:{stringValue:vw},[Sw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&v_(l)&&(l=fd(l)),l&&(c.fields[Tw]=l),{mapValue:c}})(t,e):i instanceof ic?Bw(i,e):i instanceof sc?qw(i,e):(function(a,l){const c=zw(a,l),d=$0(c)+$0(a.Ae);return Ag(c)&&Ag(a.Ae)?Uw(d):A_(a.serializer,d)})(i,e)}function lO(i,e,t){return i instanceof ic?Bw(i,e):i instanceof sc?qw(i,e):t}function zw(i,e){return i instanceof kf?(function(s){return Ag(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class nc extends gd{}class ic extends gd{constructor(e){super(),this.elements=e}}function Bw(i,e){const t=Fw(e);for(const s of i.elements)t.some((a=>zi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class sc extends gd{constructor(e){super(),this.elements=e}}function qw(i,e){let t=Fw(e);for(const s of i.elements)t=t.filter((a=>!zi(a,s)));return{arrayValue:{values:t}}}class kf extends gd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $0(i){return wt(i.integerValue||i.doubleValue)}function Fw(i){return E_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,t){this.field=e,this.transform=t}}function cO(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof ic&&a instanceof ic||s instanceof sc&&a instanceof sc?Wo(s.elements,a.elements,zi):s instanceof kf&&a instanceof kf?zi(s.Ae,a.Ae):s instanceof nc&&a instanceof nc})(i.transform,e.transform)}class hO{constructor(e,t){this.version=e,this.transformResults=t}}class hi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class _d{}function jw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Gw(i.key,hi.none()):new _c(i.key,i.data,hi.none());{const t=i.data,s=An.empty();let a=new Bt(rn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Mr(i.key,s,new Ln(a.toArray()),hi.none())}}function fO(i,e,t){i instanceof _c?(function(a,l,c){const d=a.value.clone(),p=J0(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(i,e,t):i instanceof Mr?(function(a,l,c){if(!mf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=J0(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Hw(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(i,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Fu(i,e,t,s){return i instanceof _c?(function(l,c,d,p){if(!mf(l.precondition,c))return d;const g=l.value.clone(),v=eS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(i,e,t,s):i instanceof Mr?(function(l,c,d,p){if(!mf(l.precondition,c))return d;const g=eS(l.fieldTransforms,p,c),v=c.data;return v.setAll(Hw(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(l,c,d){return mf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(i,e,t)}function dO(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=zw(s.transform,a||null);l!=null&&(t===null&&(t=An.empty()),t.set(s.field,l))}return t||null}function Z0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Wo(s,a,((l,c)=>cO(l,c)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class _c extends _d{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Mr extends _d{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function J0(i,e,t){const s=new Map;Ke(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,lO(c,d,t[a]))}return s}function eS(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,oO(l,c,e))}return s}class Gw extends _d{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mO extends _d{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&fO(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Lw();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=jw(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,((t,s)=>Z0(t,s)))&&Wo(this.baseMutations,e.baseMutations,((t,s)=>Z0(t,s)))}}class w_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return nO})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new w_(e,t,s,a)}}/**
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
 */class gO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _O{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Be;function yO(i){switch(i){case Y.OK:return _e(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function Qw(i){if(i===void 0)return ws("GRPC error has no .code"),Y.UNKNOWN;switch(i){case Dt.OK:return Y.OK;case Dt.CANCELLED:return Y.CANCELLED;case Dt.UNKNOWN:return Y.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return Y.INTERNAL;case Dt.UNAVAILABLE:return Y.UNAVAILABLE;case Dt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Dt.NOT_FOUND:return Y.NOT_FOUND;case Dt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Dt.ABORTED:return Y.ABORTED;case Dt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Dt.DATA_LOSS:return Y.DATA_LOSS;default:return _e(39323,{code:i})}}(Be=Dt||(Dt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vO(){return new TextEncoder}/**
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
 */const EO=new mr([4294967295,4294967295],0);function tS(i){const e=vO().encode(i),t=new aw;return t.update(e),new Uint8Array(t.digest())}function nS(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new mr([t,s],0),new mr([a,l],0)]}class b_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ku(`Invalid padding: ${t}`);if(s<0)throw new ku(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ku(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ku(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=mr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(mr.fromNumber(s)));return a.compare(EO)===1&&(a=new mr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=tS(e),[s,a]=nS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new b_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=tS(e),[s,a]=nS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ku extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,yc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yd(Se.min(),a,new kt(Pe),bs(),Ve())}}class yc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new yc(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class Yw{constructor(e,t){this.targetId=e,this.Ce=t}}class Kw{constructor(e,t,s=an.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class iS{constructor(){this.ve=0,this.Fe=sS(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:_e(38017,{changeType:l})}})),new yc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=sS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class TO{constructor(e){this.Ge=e,this.ze=new Map,this.je=bs(),this.Je=nf(),this.He=nf(),this.Ye=new kt(Pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(bg(l))if(s===0){const c=new he(l.path);this.et(t,c,fn.newNoDocument(c,Se.min()))}else Ke(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ar(s).toUint8Array()}catch(p){if(p instanceof yw)return Xo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new b_(c,a,l)}catch(p){return Xo(p instanceof ku?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&bg(d.target)){const p=new he(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,fn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ve();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new yd(e,t,this.Ye,this.je,s);return this.je=bs(),this.Je=nf(),this.He=nf(),this.Ye=new kt(Pe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new iS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Bt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Bt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new iS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function nf(){return new kt(he.comparator)}function sS(){return new kt(he.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},AO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wO={and:"AND",or:"OR"};class bO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rg(i,e){return i.useProto3Json||hd(e)?e:{value:e}}function Pf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CO(i,e){return Pf(i,e.toTimestamp())}function Pi(i){return Ke(!!i,49232),Se.fromTimestamp((function(t){const s=Sr(t);return new ct(s.seconds,s.nanos)})(i))}function C_(i,e){return Ig(i,e).canonicalString()}function Ig(i,e){const t=(function(a){return new lt(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Ww(i){const e=lt.fromString(i);return Ke(tb(e),10190,{key:e.toString()}),e}function Ng(i,e){return C_(i.databaseId,e.path)}function eg(i,e){const t=Ww(e);if(t.get(1)!==i.databaseId.projectId)throw new re(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new re(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(Zw(t))}function $w(i,e){return C_(i.databaseId,e)}function RO(i){const e=Ww(i);return e.length===4?lt.emptyPath():Zw(e)}function Dg(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Zw(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function rS(i,e,t){return{name:Ng(i,e),fields:t.value.mapValue.fields}}function IO(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:_e(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(Ke(v===void 0||typeof v=="string",58123),an.fromBase64String(v||"")):(Ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),an.fromUint8Array(v||new Uint8Array))})(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?Y.UNKNOWN:Qw(g.code);return new re(v,g.message||"")})(c);t=new Kw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=eg(i,s.document.name),l=Pi(s.document.updateTime),c=s.document.createTime?Pi(s.document.createTime):Se.min(),d=new An({mapValue:{fields:s.document.fields}}),p=fn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new pf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=eg(i,s.document),l=s.readTime?Pi(s.readTime):Se.min(),c=fn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new pf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=eg(i,s.document),l=s.removedTargetIds||[];t=new pf([],l,a,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new _O(a,l),d=s.targetId;t=new Yw(d,c)}}return t}function NO(i,e){let t;if(e instanceof _c)t={update:rS(i,e.key,e.value)};else if(e instanceof Gw)t={delete:Ng(i,e.key)};else if(e instanceof Mr)t={update:rS(i,e.key,e.data),updateMask:UO(e.fieldMask)};else{if(!(e instanceof mO))return _e(16599,{Vt:e.type});t={verify:Ng(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof nc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ic)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof sc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw _e(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:CO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(i,e.precondition)),t}function DO(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map((t=>(function(a,l){let c=a.updateTime?Pi(a.updateTime):Pi(l);return c.isEqual(Se.min())&&(c=Pi(l)),new hO(c,a.transformResults||[])})(t,e)))):[]}function OO(i,e){return{documents:[$w(i,e.path)]}}function MO(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=$w(i,a);const l=(function(g){if(g.length!==0)return eb(di.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(A){return{field:Vo(A.field),direction:PO(A.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Rg(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function xO(i){let e=RO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ke(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const A=Jw(T);return A instanceof di&&Iw(A)?A.getFilters():[A]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((A=>(function(B){return new tc(Lo(B.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(A)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let A;return A=typeof T=="object"?T.value:T,hd(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(T){const A=!!T.before,O=T.values||[];return new Mf(O,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const A=!T.before,O=T.values||[];return new Mf(O,A)})(t.endAt)),$2(e,a,c,l,d,"F",p,g)}function kO(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jw(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Lo(t.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Lo(t.unaryFilter.field);return Mt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Lo(t.unaryFilter.field);return Mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Lo(t.unaryFilter.field);return Mt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Mt.create(Lo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return di.create(t.compositeFilter.filters.map((s=>Jw(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function PO(i){return SO[i]}function VO(i){return AO[i]}function LO(i){return wO[i]}function Vo(i){return{fieldPath:i.canonicalString()}}function Lo(i){return rn.fromServerFormat(i.fieldPath)}function eb(i){return i instanceof Mt?(function(t){if(t.op==="=="){if(Q0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NAN"}};if(G0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Q0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NAN"}};if(G0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vo(t.field),op:VO(t.op),value:t.value}}})(i):i instanceof di?(function(t){const s=t.getFilters().map((a=>eb(a)));return s.length===1?s[0]:{compositeFilter:{op:LO(t.op),filters:s}}})(i):_e(54877,{filter:i})}function UO(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tb(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,s,a,l=Se.min(),c=Se.min(),d=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.yt=e}}function BO(i){const e=xO({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?xf(e,e.limit,"L"):e}/**
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
 */class qO{constructor(){this.Cn=new FO}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Tr.min())}updateCollectionGroup(e,t,s){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class FO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Bt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Bt(lt.comparator)).toArray()}}/**
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
 */const aS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nb=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(nb,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Jo(0)}static cr(){return new Jo(-1)}}/**
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
 */const oS="LruGarbageCollector",jO=1048576;function lS([i,e],[t,s]){const a=Pe(i,t);return a===0?Pe(e,s):a}class HO{constructor(e){this.Ir=e,this.buffer=new Bt(lS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();lS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(oS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fl(t)?ae(oS,"Ignoring IndexedDB error during garbage collection: ",t):await hl(t)}await this.Vr(3e5)}))}}class QO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(cd.ce);const s=new HO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(aS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),aS):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),ko()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function YO(i,e){return new QO(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.changes=new Va((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?X.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Fu(s.mutation,a,Ln.empty(),ct.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const a=Ea();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=xu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Ea();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=bs();const c=qu(),d=(function(){return qu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Mr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Fu(v.mutation,g,v.mutation.getFieldMask(),ct.now())):c.set(g.key,Ln.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new XO(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=qu();let a=new kt(((c,d)=>c-d)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||Ln.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||Ve()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=Lw();v.forEach((A=>{if(!l.has(A)){const O=jw(t.get(A),s.get(A));O!==null&&T.set(A,O),l=l.add(A)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return X.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return he.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):X.resolve(Ea());let d=$u,p=l;return c.next((g=>X.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?X.resolve():this.remoteDocumentCache.getEntry(e,v).next((A=>{p=p.insert(v,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ve()))).next((v=>({batchId:d,changes:Vw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let a=xu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=xu();return this.indexManager.getCollectionParents(e,l).next((d=>X.forEach(d,(p=>{const g=(function(T,A){return new dl(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,A)=>{c=c.insert(T,A)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,fn.newInvalidDocument(v)))}));let d=xu();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Fu(v.mutation,g,Ln.empty(),ct.now()),pd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
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
 */class $O{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return X.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Pi(a.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:BO(a.bundledQuery),readTime:Pi(a.readTime)}})(t)),X.resolve()}}/**
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
 */class ZO{constructor(){this.overlays=new kt(he.comparator),this.qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ea();return X.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),X.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),X.resolve()}getOverlaysForCollection(e,t,s){const a=Ea(),l=t.length+1,c=new he(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return X.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new kt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=Ea(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ea(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return X.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new gO(t,s));let l=this.qr.get(t);l===void 0&&(l=Ve(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class JO{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Qr=new Bt(Kt.$r),this.Ur=new Bt(Kt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Kt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Kt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new he(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new he(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1);let l=Ve();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Kt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Kt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return he.comparator(e.key,t.key)||Pe(e.Yr,t.Yr)}static Kr(e,t){return Pe(e.Yr,t.Yr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Bt(Kt.$r)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new pO(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new Kt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(c)}lookupMutationBatch(e,t){return X.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?y_:this.tr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Kt(t,0),a=new Kt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Bt(Pe);return t.forEach((a=>{const l=new Kt(a,0),c=new Kt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),X.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;he.isDocumentKey(l)||(l=l.child(""));const c=new Kt(new he(l),0);let d=new Bt(Pe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),X.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Ke(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return X.forEach(t.mutations,(a=>{const l=new Kt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Kt(t,0),a=this.Zr.firstAfterOrEqual(s);return X.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.ri=e,this.docs=(function(){return new kt(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return X.resolve(s?s.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let s=bs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():fn.newInvalidDocument(a))})),X.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=bs();const c=t.path,d=new he(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||N2(I2(v),s)<=0||(a.has(v.key)||pd(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,s,a){_e(9500)}ii(e,t){return X.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new nM(this)}getSize(e){return X.resolve(this.size)}}class nM extends KO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),X.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.persistence=e,this.si=new Va((t=>T_(t)),S_),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new R_,this.targetCount=0,this.ai=Jo.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),X.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Pr(t),X.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),X.waitFor(l).next((()=>a))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return X.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),X.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return X.resolve(s)}containsKey(e,t){return X.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.ui={},this.overlays={},this.ci=new cd(0),this.li=!1,this.li=!0,this.hi=new JO,this.referenceDelegate=e(this),this.Pi=new iM(this),this.indexManager=new qO,this.remoteDocumentCache=(function(a){return new tM(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new zO(t),this.Ii=new $O(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new eM(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new sM(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return X.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class sM extends O2{constructor(e){super(),this.currentSequenceNumber=e}}class I_{constructor(e){this.persistence=e,this.Ri=new R_,this.Vi=null}static mi(e){return new I_(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),X.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(s=>{const a=he.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Se.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return X.or([()=>X.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Vf{constructor(e,t){this.persistence=e,this.pi=new Va((s=>k2(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=YO(this,t)}static mi(e,t){return new Vf(e,t)}Ei(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return X.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?X.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Se.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ff(e.data.value)),t}br(e,t,s){return X.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return X.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ve(),a=Ve();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new N_(e,t.fromCache,s,a)}}/**
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
 */class rM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Q1()?8:M2(dn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new rM;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(ko()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(ko()<=ke.DEBUG&&ae("QueryEngine","Query:",Po(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(ko()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ki(t))):X.resolve())}ys(e,t){if(W0(t))return X.resolve(null);let s=ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=xf(t,null,"F"),s=ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ve(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,xf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return W0(t)||a.isEqual(Se.min())?X.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?X.resolve(null):(ko()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Po(t)),this.vs(e,c,t,R2(a,$u)).next((d=>d)))}))}Ds(e,t){let s=new Bt(kw(e));return t.forEach(((a,l)=>{pd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return ko()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Po(t)),this.ps.getDocumentsMatchingQuery(e,t,Tr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const D_="LocalStore",oM=3e8;class lM{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new kt(Pe),this.xs=new Va((l=>T_(l)),S_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function uM(i,e,t,s){return new lM(i,e,t,s)}async function sb(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ve();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function cM(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,A=T.keys();let O=X.resolve();return A.forEach((B=>{O=O.next((()=>v.getEntry(p,B))).next((Z=>{const W=g.docVersions.get(B);Ke(W!==null,48541),Z.version.compareTo(W)<0&&(T.applyToRemoteDocument(Z,g),Z.isValidDocument()&&(Z.setReadTime(g.commitVersion),v.addEntry(Z)))}))})),O.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ve();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function rb(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function hM(i,e){const t=Ae(i),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const A=a.get(T);if(!A)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let O=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(an.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,s)),a=a.insert(T,O),(function(Z,W,pe){return Z.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=oM?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(A,O,v)&&d.push(t.Pi.updateTargetData(l,O))}));let p=bs(),g=Ve();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(fM(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(Se.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return X.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function fM(i,e,t){let s=Ve(),a=Ve();return t.forEach((l=>s=s.add(l))),e.getEntries(i,s).next((l=>{let c=bs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(D_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function dM(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=y_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function mM(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,X.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new cr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Og(i,e,t){const s=Ae(i),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!fl(c))throw c;ae(D_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function uS(i,e,t){const s=Ae(i);let a=Se.min(),l=Ve();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=Ae(p),A=T.xs.get(v);return A!==void 0?X.resolve(T.Ms.get(A)):T.Pi.getTargetData(g,v)})(s,c,ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Se.min(),t?l:Ve()))).next((d=>(pM(s,J2(e),d),{documents:d,Qs:l})))))}function pM(i,e,t){let s=i.Os.get(e)||Se.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),i.Os.set(e,s)}class cS{constructor(){this.activeTargetIds=rO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gM{constructor(){this.Mo=new cS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new cS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _M{Oo(e){}shutdown(){}}/**
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
 */const hS="ConnectivityMonitor";class fS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(hS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(hS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sf=null;function Mg(){return sf===null?sf=(function(){return 268435456+Math.round(2147483648*Math.random())})():sf++,"0x"+sf.toString(16)}/**
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
 */const tg="RestConnection",yM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Df?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Mg(),d=this.zo(e,t.toUriEncodedString());ae(tg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Dr(g);return this.Jo(e,d,p,s,v).then((T=>(ae(tg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Xo(tg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=yM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class TM extends vM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Mg();return new Promise(((d,p)=>{const g=new ow;g.setWithCredentials(!0),g.listenOnce(lw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case hf.NO_ERROR:const T=g.getResponseJson();ae(cn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case hf.TIMEOUT:ae(cn,`RPC '${e}' ${c} timed out`),p(new re(Y.DEADLINE_EXCEEDED,"Request time out"));break;case hf.HTTP_ERROR:const A=g.getStatus();if(ae(cn,`RPC '${e}' ${c} failed with status:`,A,"response text:",g.getResponseText()),A>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const B=O?.error;if(B&&B.status&&B.message){const Z=(function(pe){const de=pe.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(de)>=0?de:Y.UNKNOWN})(B.status);p(new re(Z,B.message))}else p(new re(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new re(Y.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ae(cn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ae(cn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=Mg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=hw(),d=cw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(cn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let A=!1,O=!1;const B=new EM({Yo:W=>{O?ae(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(A||(ae(cn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),A=!0),ae(cn,`RPC '${e}' stream ${a} sending:`,W),T.send(W))},Zo:()=>T.close()}),Z=(W,pe,de)=>{W.listen(pe,(ue=>{try{de(ue)}catch(Fe){setTimeout((()=>{throw Fe}),0)}}))};return Z(T,Mu.EventType.OPEN,(()=>{O||(ae(cn,`RPC '${e}' stream ${a} transport opened.`),B.o_())})),Z(T,Mu.EventType.CLOSE,(()=>{O||(O=!0,ae(cn,`RPC '${e}' stream ${a} transport closed`),B.a_(),this.E_(T))})),Z(T,Mu.EventType.ERROR,(W=>{O||(O=!0,Xo(cn,`RPC '${e}' stream ${a} transport errored. Name:`,W.name,"Message:",W.message),B.a_(new re(Y.UNAVAILABLE,"The operation could not be completed")))})),Z(T,Mu.EventType.MESSAGE,(W=>{if(!O){const pe=W.data[0];Ke(!!pe,16349);const de=pe,ue=de?.error||de[0]?.error;if(ue){ae(cn,`RPC '${e}' stream ${a} received error:`,ue);const Fe=ue.status;let we=(function(b){const I=Dt[b];if(I!==void 0)return Qw(I)})(Fe),Qe=ue.message;we===void 0&&(we=Y.INTERNAL,Qe="Unknown error status: "+Fe+" with message "+ue.message),O=!0,B.a_(new re(we,Qe)),T.close()}else ae(cn,`RPC '${e}' stream ${a} received:`,pe),B.u_(pe)}})),Z(d,uw.STAT_EVENT,(W=>{W.stat===vg.PROXY?ae(cn,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===vg.NOPROXY&&ae(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ng(){return typeof document<"u"?document:null}/**
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
 */function vd(i){return new bO(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="PersistentStream";class ob{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ab(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(ws(t.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new re(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(dS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(dS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SM extends ob{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=IO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Se.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Se.min():c.readTime?Pi(c.readTime):Se.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Dg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=bg(p)?{documents:OO(l,p)}:{query:MO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Xw(l,c.resumeToken);const g=Rg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Se.min())>0){d.readTime=Pf(l,c.snapshotVersion.toTimestamp());const g=Rg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=kO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Dg(this.serializer),t.removeTarget=e,this.q_(t)}}class AM extends ob{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=DO(e.writeResults,e.commitTime),s=Pi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Dg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>NO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{}class bM extends wM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new re(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Ig(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(Y.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Ig(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(Y.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class CM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ws(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="RemoteStore";class RM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{La(this)&&(ae(Na,"Restarting streams for network reachability change."),await(async function(p){const g=Ae(p);g.Ea.add(4),await vc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ed(g)})(this))}))})),this.Ra=new CM(s,a)}}async function Ed(i){if(La(i))for(const e of i.da)await e(!0)}async function vc(i){for(const e of i.da)await e(!1)}function lb(i,e){const t=Ae(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),k_(t)?x_(t):ml(t).O_()&&M_(t,e))}function O_(i,e){const t=Ae(i),s=ml(t);t.Ia.delete(e),s.O_()&&ub(t,e),t.Ia.size===0&&(s.O_()?s.L_():La(t)&&t.Ra.set("Unknown"))}function M_(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(i).Y_(e)}function ub(i,e){i.Va.Ue(e),ml(i).Z_(e)}function x_(i){i.Va=new TO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ml(i).start(),i.Ra.ua()}function k_(i){return La(i)&&!ml(i).x_()&&i.Ia.size>0}function La(i){return Ae(i).Ea.size===0}function cb(i){i.Va=void 0}async function IM(i){i.Ra.set("Online")}async function NM(i){i.Ia.forEach(((e,t)=>{M_(i,e)}))}async function DM(i,e){cb(i),k_(i)?(i.Ra.ha(e),x_(i)):i.Ra.set("Unknown")}async function OM(i,e,t){if(i.Ra.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(i,e)}catch(s){ae(Na,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Lf(i,s)}else if(e instanceof pf?i.Va.Ze(e):e instanceof Yw?i.Va.st(e):i.Va.tt(e),!t.isEqual(Se.min()))try{const s=await rb(i.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(an.EMPTY_BYTE_STRING,v.snapshotVersion)),ub(l,p);const T=new cr(v.target,p,g,v.sequenceNumber);M_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(i,t)}catch(s){ae(Na,"Failed to raise snapshot:",s),await Lf(i,s)}}async function Lf(i,e,t){if(!fl(e))throw e;i.Ea.add(1),await vc(i),i.Ra.set("Offline"),t||(t=()=>rb(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ae(Na,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Ed(i)}))}function hb(i,e){return e().catch((t=>Lf(i,t,e)))}async function Td(i){const e=Ae(i),t=br(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:y_;for(;MM(e);)try{const a=await dM(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,xM(e,a)}catch(a){await Lf(e,a)}fb(e)&&db(e)}function MM(i){return La(i)&&i.Ta.length<10}function xM(i,e){i.Ta.push(e);const t=br(i);t.O_()&&t.X_&&t.ea(e.mutations)}function fb(i){return La(i)&&!br(i).x_()&&i.Ta.length>0}function db(i){br(i).start()}async function kM(i){br(i).ra()}async function PM(i){const e=br(i);for(const t of i.Ta)e.ea(t.mutations)}async function VM(i,e,t){const s=i.Ta.shift(),a=w_.from(s,e,t);await hb(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await Td(i)}async function LM(i,e){e&&br(i).X_&&await(async function(s,a){if((function(c){return yO(c)&&c!==Y.ABORTED})(a.code)){const l=s.Ta.shift();br(s).B_(),await hb(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Td(s)}})(i,e),fb(i)&&db(i)}async function mS(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ae(Na,"RemoteStore received new credentials");const s=La(t);t.Ea.add(3),await vc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ed(t)}async function UM(i,e){const t=Ae(i);e?(t.Ea.delete(2),await Ed(t)):e||(t.Ea.add(2),await vc(t),t.Ra.set("Unknown"))}function ml(i){return i.ma||(i.ma=(function(t,s,a){const l=Ae(t);return l.sa(),new SM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:IM.bind(null,i),t_:NM.bind(null,i),r_:DM.bind(null,i),H_:OM.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),k_(i)?x_(i):i.Ra.set("Unknown")):(await i.ma.stop(),cb(i))}))),i.ma}function br(i){return i.fa||(i.fa=(function(t,s,a){const l=Ae(t);return l.sa(),new AM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:kM.bind(null,i),r_:LM.bind(null,i),ta:PM.bind(null,i),na:VM.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await Td(i)):(await i.fa.stop(),i.Ta.length>0&&(ae(Na,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new P_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function V_(i,e){if(ws("AsyncQueue",`${e}: ${i}`),fl(i))return new re(Y.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{static emptySet(e){return new Fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=xu(),this.sortedSet=new kt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Fo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.ga=new kt(he.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class el{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new el(e,t,Fo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class BM{constructor(){this.queries=gS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ae(t),l=a.queries;a.queries=gS(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new re(Y.ABORTED,"Firestore shutting down"))}}function gS(){return new Va((i=>xw(i)),md)}async function L_(i,e){const t=Ae(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new zM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=V_(c,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&z_(t)}async function U_(i,e){const t=Ae(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qM(i,e){const t=Ae(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&z_(t)}function FM(i,e,t){const s=Ae(i),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function z_(i){i.Ca.forEach((e=>{e.next()}))}var xg,_S;(_S=xg||(xg={})).Ma="default",_S.Cache="cache";class B_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new el(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=el.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.key=e}}class pb{constructor(e){this.key=e}}class jM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ve(),this.mutatedKeys=Ve(),this.eu=kw(e),this.tu=new Fo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new pS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const A=a.get(v),O=pd(this.query,T)?T:null,B=!!A&&this.mutatedKeys.has(A.key),Z=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let W=!1;A&&O?A.data.isEqual(O.data)?B!==Z&&(s.track({type:3,doc:O}),W=!0):this.su(A,O)||(s.track({type:2,doc:O}),W=!0,(p&&this.eu(O,p)>0||g&&this.eu(O,g)<0)&&(d=!0)):!A&&O?(s.track({type:0,doc:O}),W=!0):A&&!O&&(s.track({type:1,doc:A}),W=!0,(p||g)&&(d=!0)),W&&(O?(c=c.add(O),l=Z?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(O,B){const Z=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:W})}};return Z(O)-Z(B)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new el(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new pb(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new mb(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return el.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const q_="SyncEngine";class HM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class GM{constructor(e){this.key=e,this.hu=!1}}class QM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Va((d=>xw(d)),md),this.Iu=new Map,this.Eu=new Set,this.du=new kt(he.comparator),this.Au=new Map,this.Ru=new R_,this.Vu={},this.mu=new Map,this.fu=Jo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YM(i,e,t=!0){const s=Tb(i);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await gb(s,e,t,!0),a}async function KM(i,e){const t=Tb(i);await gb(t,e,!0,!1)}async function gb(i,e,t,s){const a=await mM(i.localStore,ki(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await XM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&lb(i.remoteStore,a),d}async function XM(i,e,t,s,a){i.pu=(T,A,O)=>(async function(Z,W,pe,de){let ue=W.view.ru(pe);ue.Cs&&(ue=await uS(Z.localStore,W.query,!1).then((({documents:k})=>W.view.ru(k,ue))));const Fe=de&&de.targetChanges.get(W.targetId),we=de&&de.targetMismatches.get(W.targetId)!=null,Qe=W.view.applyChanges(ue,Z.isPrimaryClient,Fe,we);return vS(Z,W.targetId,Qe.au),Qe.snapshot})(i,T,A,O);const l=await uS(i.localStore,e,!0),c=new jM(e,l.Qs),d=c.ru(l.documents),p=yc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,p);vS(i,t,g.au);const v=new HM(e,t,c);return i.Tu.set(e,v),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),g.snapshot}async function WM(i,e,t){const s=Ae(i),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!md(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Og(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&O_(s.remoteStore,a.targetId),kg(s,a.targetId)})).catch(hl)):(kg(s,a.targetId),await Og(s.localStore,a.targetId,!0))}async function $M(i,e){const t=Ae(i),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),O_(t.remoteStore,s.targetId))}async function ZM(i,e,t){const s=rx(i);try{const a=await(function(c,d){const p=Ae(c),g=ct.now(),v=d.reduce(((O,B)=>O.add(B.key)),Ve());let T,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let B=bs(),Z=Ve();return p.Ns.getEntries(O,v).next((W=>{B=W,B.forEach(((pe,de)=>{de.isValidDocument()||(Z=Z.add(pe))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,B))).next((W=>{T=W;const pe=[];for(const de of d){const ue=dO(de,T.get(de.key).overlayedDocument);ue!=null&&pe.push(new Mr(de.key,ue,bw(ue.value.mapValue),hi.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,pe,d)})).next((W=>{A=W;const pe=W.applyToLocalDocumentSet(T,Z);return p.documentOverlayCache.saveOverlays(O,W.batchId,pe)}))})).then((()=>({batchId:A.batchId,changes:Vw(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new kt(Pe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Ec(s,a.changes),await Td(s.remoteStore)}catch(a){const l=V_(a,"Failed to persist write");t.reject(l)}}async function _b(i,e){const t=Ae(i);try{const s=await hM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Ke(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Ke(c.hu,14607):a.removedDocuments.size>0&&(Ke(c.hu,42227),c.hu=!1))})),await Ec(t,s,e)}catch(s){await hl(s)}}function yS(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Ae(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const A of T.Sa)A.va(d)&&(g=!0)})),g&&z_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function JM(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new kt(he.comparator);c=c.insert(l,fn.newNoDocument(l,Se.min()));const d=Ve().add(l),p=new yd(Se.min(),new Map,new kt(Pe),c,d);await _b(s,p),s.du=s.du.remove(l),s.Au.delete(e),F_(s)}else await Og(s.localStore,e,!1).then((()=>kg(s,e,t))).catch(hl)}async function ex(i,e){const t=Ae(i),s=e.batch.batchId;try{const a=await cM(t.localStore,e);vb(t,s,null),yb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ec(t,a)}catch(a){await hl(a)}}async function tx(i,e,t){const s=Ae(i);try{const a=await(function(c,d){const p=Ae(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Ke(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);vb(s,e,t),yb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ec(s,a)}catch(a){await hl(a)}}function yb(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function vb(i,e,t){const s=Ae(i);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function kg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Eb(i,s)}))}function Eb(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(O_(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),F_(i))}function vS(i,e,t){for(const s of t)s instanceof mb?(i.Ru.addReference(s.key,e),nx(i,s)):s instanceof pb?(ae(q_,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Eb(i,s.key)):_e(19791,{wu:s})}function nx(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ae(q_,"New document in limbo: "+t),i.Eu.add(s),F_(i))}function F_(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new he(lt.fromString(e)),s=i.fu.next();i.Au.set(s,new GM(t)),i.du=i.du.insert(t,s),lb(i.remoteStore,new cr(ki(dd(t.path)),s,"TargetPurposeLimboResolution",cd.ce))}}async function Ec(i,e,t){const s=Ae(i),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=N_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>X.forEach(g,(A=>X.forEach(A.Es,(O=>v.persistence.referenceDelegate.addReference(T,A.targetId,O))).next((()=>X.forEach(A.ds,(O=>v.persistence.referenceDelegate.removeReference(T,A.targetId,O)))))))))}catch(T){if(!fl(T))throw T;ae(D_,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const O=v.Ms.get(A),B=O.snapshotVersion,Z=O.withLastLimboFreeSnapshotVersion(B);v.Ms=v.Ms.insert(A,Z)}}})(s.localStore,l))}async function ix(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ae(q_,"User change. New user:",e.toKey());const s=await sb(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new re(Y.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ec(t,s.Ls)}}function sx(i,e){const t=Ae(i),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let a=Ve();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function Tb(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=_b.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JM.bind(null,e),e.Pu.H_=qM.bind(null,e.eventManager),e.Pu.yu=FM.bind(null,e.eventManager),e}function rx(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ex.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tx.bind(null,e),e}class Uf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return uM(this.persistence,new aM,e.initialUser,this.serializer)}Cu(e){return new ib(I_.mi,this.serializer)}Du(e){return new gM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uf.provider={build:()=>new Uf};class ax extends Uf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ke(this.persistence.referenceDelegate instanceof Vf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new ib((s=>Vf.mi(s,t)),this.serializer)}}class Pg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ix.bind(null,this.syncEngine),await UM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new BM})()}createDatastore(e){const t=vd(e.databaseInfo.databaseId),s=(function(l){return new TM(l)})(e.databaseInfo);return(function(l,c,d,p){return new bM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new RM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>yS(this.syncEngine,t,0)),(function(){return fS.v()?new fS:new _M})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new QM(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ae(t);ae(Na,"RemoteStore shutting down."),s.Ea.add(5),await vc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Pg.provider={build:()=>new Pg};/**
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
 */class j_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="FirestoreClient";class ox{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=__.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ae(Cr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ae(Cr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=V_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ig(i,e){i.asyncQueue.verifyOperationInProgress(),ae(Cr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await sb(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function ES(i,e){i.asyncQueue.verifyOperationInProgress();const t=await lx(i);ae(Cr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>mS(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>mS(e.remoteStore,a))),i._onlineComponents=e}async function lx(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(Cr,"Using user provided OfflineComponentProvider");try{await ig(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===Y.FAILED_PRECONDITION||a.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;Xo("Error using user provided cache. Falling back to memory cache: "+t),await ig(i,new Uf)}}else ae(Cr,"Using default OfflineComponentProvider"),await ig(i,new ax(void 0));return i._offlineComponents}async function Sb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(Cr,"Using user provided OnlineComponentProvider"),await ES(i,i._uninitializedComponentsProvider._online)):(ae(Cr,"Using default OnlineComponentProvider"),await ES(i,new Pg))),i._onlineComponents}function ux(i){return Sb(i).then((e=>e.syncEngine))}async function zf(i){const e=await Sb(i),t=e.eventManager;return t.onListen=YM.bind(null,e.syncEngine),t.onUnlisten=WM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=KM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$M.bind(null,e.syncEngine),t}function cx(i,e,t={}){const s=new vs;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new j_({next:A=>{v.Nu(),c.enqueueAndForget((()=>U_(l,T)));const O=A.docs.has(d);!O&&A.fromCache?g.reject(new re(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&A.fromCache&&p&&p.source==="server"?g.reject(new re(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new B_(dd(d.path),v,{includeMetadataChanges:!0,qa:!0});return L_(l,T)})(await zf(i),i.asyncQueue,e,t,s))),s.promise}function hx(i,e,t={}){const s=new vs;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new j_({next:A=>{v.Nu(),c.enqueueAndForget((()=>U_(l,T))),A.fromCache&&p.source==="server"?g.reject(new re(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new B_(d,v,{includeMetadataChanges:!0,qa:!0});return L_(l,T)})(await zf(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function Ab(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const TS=new Map;/**
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
 */const wb="firestore.googleapis.com",SS=!0;class AS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wb,this.ssl=SS}else this.host=e.host,this.ssl=e.ssl??SS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jO)throw new re(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ab(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new g2;switch(s.type){case"firstParty":return new E2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=TS.get(t);s&&(ae("ComponentProvider","Removing Datastore"),TS.delete(t),s.terminate())})(this),Promise.resolve()}}function fx(i,e,t,s={}){i=Un(i,Sd);const a=Dr(e),l=i._getSettings(),c={...l,emulatorOptions:i._getEmulatorOptions()},d=`${e}:${t}`;a&&(t_(`https://${d}`),n_("Firestore",!0)),l.host!==wb&&l.host!==d&&Xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!vr(p,c)&&(i._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=hn.MOCK_USER;else{g=SA(s.mockUserToken,i._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new re(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new hn(T)}i._authCredentials=new _2(new dw(g,v))}}/**
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
 */class Ns{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(gc(t,Et._jsonSchema))return new Et(e,s||null,new he(lt.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:xt("string",Et._jsonSchemaVersion),referencePath:xt("string")};class gr extends Ns{constructor(e,t,s){super(e,t,dd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new he(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function _r(i,e,...t){if(i=dt(i),mw("collection","path",e),i instanceof Sd){const s=lt.fromString(e,...t);return V0(s),new gr(i,null,s)}{if(!(i instanceof Et||i instanceof gr))throw new re(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return V0(s),new gr(i.firestore,null,s)}}function Da(i,e,...t){if(i=dt(i),arguments.length===1&&(e=__.newId()),mw("doc","path",e),i instanceof Sd){const s=lt.fromString(e,...t);return P0(s),new Et(i,null,new he(s))}{if(!(i instanceof Et||i instanceof gr))throw new re(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return P0(s),new Et(i.firestore,i instanceof gr?i.converter:null,new he(s))}}/**
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
 */const wS="AsyncQueue";class bS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ab(this,"async_queue_retry"),this._c=()=>{const s=ng();s&&ae(wS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ng();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ng();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new vs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fl(e))throw e;ae(wS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",CS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=P_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&_e(47125,{Pc:CS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function CS(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(i,["next","error","complete"])}class Rr extends Sd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new bS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bS(e),this._firestoreClient=void 0,await e}}}function dx(i,e){const t=typeof i=="object"?i:r_(),s=typeof i=="string"?i:Df,a=rd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=vA("firestore");l&&fx(a,...l)}return a}function Ad(i){if(i._terminated)throw new re(Y.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||mx(i),i._firestoreClient}function mx(i){const e=i._freezeSettings(),t=(function(a,l,c,d){return new L2(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ab(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new ox(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(i._componentsProvider))}/**
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
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(an.fromBase64String(e))}catch(t){throw new re(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gc(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:xt("string",Jn._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class wd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vi._jsonSchemaVersion}}static fromJSON(e){if(gc(e,Vi._jsonSchema))return new Vi(e.latitude,e.longitude)}}Vi._jsonSchemaVersion="firestore/geoPoint/1.0",Vi._jsonSchema={type:xt("string",Vi._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Li{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gc(e,Li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Li(e.vectorValues);throw new re(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Li._jsonSchemaVersion="firestore/vectorValue/1.0",Li._jsonSchema={type:xt("string",Li._jsonSchemaVersion),vectorValues:xt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=/^__.*__$/;class gx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new _c(e,this.data,t,this.fieldTransforms)}}class bb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:i})}}class H_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new H_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Cb(this.Ac)&&px.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _x{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||vd(e)}Cc(e,t,s,a=!1){return new H_({Ac:e,methodName:t,Dc:s,path:rn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cd(i){const e=i._freezeSettings(),t=vd(i._databaseId);return new _x(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Rb(i,e,t,s,a,l={}){const c=i.Cc(l.merge||l.mergeFields?2:0,e,t,a);Q_("Data must be an object, but it was:",c,s);const d=Ib(s,c);let p,g;if(l.merge)p=new Ln(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const A=Vg(e,T,t);if(!c.contains(A))throw new re(Y.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Db(v,A)||v.push(A)}p=new Ln(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new gx(new An(d),p,g)}class Rd extends bd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rd}}class G_ extends bd{_toFieldTransform(e){return new uO(e.path,new nc)}isEqual(e){return e instanceof G_}}function yx(i,e,t,s){const a=i.Cc(1,e,t);Q_("Data must be an object, but it was:",a,s);const l=[],c=An.empty();Or(s,((p,g)=>{const v=Y_(e,p,t);g=dt(g);const T=a.yc(v);if(g instanceof Rd)l.push(v);else{const A=Tc(g,T);A!=null&&(l.push(v),c.set(v,A))}}));const d=new Ln(l);return new bb(c,d,a.fieldTransforms)}function vx(i,e,t,s,a,l){const c=i.Cc(1,e,t),d=[Vg(e,s,t)],p=[a];if(l.length%2!=0)throw new re(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)d.push(Vg(e,l[A])),p.push(l[A+1]);const g=[],v=An.empty();for(let A=d.length-1;A>=0;--A)if(!Db(g,d[A])){const O=d[A];let B=p[A];B=dt(B);const Z=c.yc(O);if(B instanceof Rd)g.push(O);else{const W=Tc(B,Z);W!=null&&(g.push(O),v.set(O,W))}}const T=new Ln(g);return new bb(v,T,c.fieldTransforms)}function Ex(i,e,t,s=!1){return Tc(t,i.Cc(s?4:3,e))}function Tc(i,e){if(Nb(i=dt(i)))return Q_("Unsupported field value:",e,i),Ib(i,e);if(i instanceof bd)return(function(s,a){if(!Cb(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Tc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(i,e)}return(function(s,a){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ct.fromDate(s);return{timestampValue:Pf(a.serializer,l)}}if(s instanceof ct){const l=new ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pf(a.serializer,l)}}if(s instanceof Vi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:Xw(a.serializer,s._byteString)};if(s instanceof Et){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:C_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Li)return(function(c,d){return{mapValue:{fields:{[Aw]:{stringValue:ww},[Of]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return A_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${ud(s)}`)})(i,e)}function Ib(i,e){const t={};return _w(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(i,((s,a)=>{const l=Tc(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Nb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ct||i instanceof Vi||i instanceof Jn||i instanceof Et||i instanceof bd||i instanceof Li)}function Q_(i,e,t){if(!Nb(t)||!pw(t)){const s=ud(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Vg(i,e,t){if((e=dt(e))instanceof wd)return e._internalPath;if(typeof e=="string")return Y_(i,e);throw Bf("Field path arguments must be of type string or ",i,!1,void 0,t)}const Tx=new RegExp("[~\\*/\\[\\]]");function Y_(i,e,t){if(e.search(Tx)>=0)throw Bf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new wd(...e.split("."))._internalPath}catch{throw Bf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Bf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new re(Y.INVALID_ARGUMENT,d+i+p)}function Db(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Ob{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Id("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sx extends Ob{data(){return super.data()}}function Id(i,e){return typeof e=="string"?Y_(i,e):e instanceof wd?e._internalPath:e._delegate._internalPath}/**
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
 */function Mb(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new re(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class K_{}class X_ extends K_{}function tl(i,e,...t){let s=[];e instanceof K_&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof W_)).length,d=l.filter((p=>p instanceof Nd)).length;if(c>1||c>0&&d>0)throw new re(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)i=a._apply(i);return i}class Nd extends X_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Nd(e,t,s)}_apply(e){const t=this._parse(e);return xb(e._query,t),new Ns(e.firestore,e.converter,Cg(e._query,t))}_parse(e){const t=Cd(e.firestore);return(function(l,c,d,p,g,v,T){let A;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new re(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){NS(T,v);const B=[];for(const Z of T)B.push(IS(p,l,Z));A={arrayValue:{values:B}}}else A=IS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||NS(T,v),A=Ex(d,c,T,v==="in"||v==="not-in");return Mt.create(g,v,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Es(i,e,t){const s=e,a=Id("where",i);return Nd._create(a,s,t)}class W_ extends K_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new W_(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:di.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)xb(c,p),c=Cg(c,p)})(e._query,t),new Ns(e.firestore,e.converter,Cg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $_ extends X_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $_(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new re(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tc(l,c)})(e._query,this._field,this._direction);return new Ns(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new dl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function Ax(i,e="asc"){const t=e,s=Id("orderBy",i);return $_._create(s,t)}class Z_ extends X_{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Z_(e,t,s)}_apply(e){return new Ns(e.firestore,e.converter,xf(e._query,this._limit,this._limitType))}}function wx(i){return Z_._create("limit",i,"F")}function IS(i,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new re(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mw(e)&&t.indexOf("/")!==-1)throw new re(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!he.isDocumentKey(s))throw new re(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return H0(i,new he(s))}if(t instanceof Et)return H0(i,t._key);throw new re(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ud(t)}.`)}function NS(i,e){if(!Array.isArray(i)||i.length===0)throw new re(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xb(i,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(i.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bx{convertValue(e,t="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Or(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Of].arrayValue?.values?.map((s=>wt(s.doubleValue)));return new Li(t)}convertGeoPoint(e){return new Vi(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Zu(e));default:return null}}convertTimestamp(e){const t=Sr(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Ke(tb(s),9688,{name:e});const a=new Ju(s.get(1),s.get(3)),l=new he(s.popFirst(5));return a.isEqual(t)||ws(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function kb(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wa extends Ob{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Id("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wa._jsonSchemaVersion="firestore/documentSnapshot/1.0",wa._jsonSchema={type:xt("string",wa._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class gf extends wa{data(e={}){return super.data(e)}}class ba{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Pu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new gf(this._firestore,this._userDataWriter,s.key,s,new Pu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new gf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Pu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new gf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Pu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:Cx(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ba._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=__.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Cx(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
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
 */function Pb(i){i=Un(i,Et);const e=Un(i.firestore,Rr);return cx(Ad(e),i._key).then((t=>Lb(e,i,t)))}ba._jsonSchemaVersion="firestore/querySnapshot/1.0",ba._jsonSchema={type:xt("string",ba._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class J_ extends bx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function DS(i){i=Un(i,Ns);const e=Un(i.firestore,Rr),t=Ad(e),s=new J_(e);return Mb(i._query),hx(t,i._query).then((a=>new ba(e,s,i,a)))}function Rx(i,e,t){i=Un(i,Et);const s=Un(i.firestore,Rr),a=kb(i.converter,e);return ey(s,[Rb(Cd(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,hi.none())])}function nl(i,e,t,...s){i=Un(i,Et);const a=Un(i.firestore,Rr),l=Cd(a);let c;return c=typeof(e=dt(e))=="string"||e instanceof wd?vx(l,"updateDoc",i._key,e,t,s):yx(l,"updateDoc",i._key,e),ey(a,[c.toMutation(i._key,hi.exists(!0))])}function Vb(i,e){const t=Un(i.firestore,Rr),s=Da(i),a=kb(i.converter,e);return ey(t,[Rb(Cd(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,hi.exists(!1))]).then((()=>s))}function Sc(i,...e){i=dt(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||RS(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(RS(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(i instanceof Et)c=Un(i.firestore,Rr),d=dd(i._key.path),l={next:p=>{e[s]&&e[s](Lb(c,i,p))},error:e[s+1],complete:e[s+2]};else{const p=Un(i,Ns);c=Un(p.firestore,Rr),d=p._query;const g=new J_(c);l={next:v=>{e[s]&&e[s](new ba(c,g,p,v))},error:e[s+1],complete:e[s+2]},Mb(i._query)}return(function(g,v,T,A){const O=new j_(A),B=new B_(v,O,T);return g.asyncQueue.enqueueAndForget((async()=>L_(await zf(g),B))),()=>{O.Nu(),g.asyncQueue.enqueueAndForget((async()=>U_(await zf(g),B)))}})(Ad(c),d,a,l)}function ey(i,e){return(function(s,a){const l=new vs;return s.asyncQueue.enqueueAndForget((async()=>ZM(await ux(s),a,l))),l.promise})(Ad(i),e)}function Lb(i,e,t){const s=t.docs.get(e._key),a=new J_(i);return new wa(i,a,e._key,s,new Pu(t.hasPendingWrites,t.fromCache),e.converter)}function hr(){return new G_("serverTimestamp")}(function(e,t=!0){(function(a){cl=a})(Pa),Ca(new Er("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Rr(new y2(s.getProvider("auth-internal")),new T2(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new re(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ju(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Mi(O0,M0,e),Mi(O0,M0,"esm2020")})();var OS={};const MS="@firebase/database",xS="1.1.0";/**
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
 */let Ub="";function Ix(i){Ub=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ku(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Bi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nx(e)}}catch{}return new Dx},Ta=zb("localStorage"),Ox=zb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new sd("@firebase/database"),Mx=(function(){let i=1;return function(){return i++}})(),Bb=function(i){const e=sI(i),t=new eI;t.update(e);const s=t.digest();return e_.encodeByteArray(s)},Ac=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ac.apply(null,s):typeof s=="object"?e+=Wt(s):e+=s,e+=" "}return e};let ju=null,kS=!0;const xx=function(i,e){ne(!0,"Can't turn on custom loggers persistently."),jo.logLevel=ke.VERBOSE,ju=jo.log.bind(jo)},sn=function(...i){if(kS===!0&&(kS=!1,ju===null&&Ox.get("logging_enabled")===!0&&xx()),ju){const e=Ac.apply(null,i);ju(e)}},wc=function(i){return function(...e){sn(i,...e)}},Lg=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ac(...i);jo.error(e)},Cs=function(...i){const e=`FIREBASE FATAL ERROR: ${Ac(...i)}`;throw jo.error(e),new Error(e)},Cn=function(...i){const e="FIREBASE WARNING: "+Ac(...i);jo.warn(e)},kx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dd=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Px=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},il="[MIN_NAME]",Oa="[MAX_NAME]",Ua=function(i,e){if(i===e)return 0;if(i===il||e===Oa)return-1;if(e===il||i===Oa)return 1;{const t=PS(i),s=PS(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},Vx=function(i,e){return i===e?0:i<e?-1:1},Iu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Wt(e))},ty=function(i){if(typeof i!="object"||i===null)return Wt(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Wt(e[s]),t+=":",t+=ty(i[e[s]]);return t+="}",t},qb=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function mn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const Fb=function(i){ne(!Dd(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let A=parseInt(v.substr(p,8),2).toString(16);A.length===1&&(A="0"+A),T=T+A}return T.toLowerCase()},Lx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ux=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zx(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+t);return s.code=i.toUpperCase(),s}const Bx=new RegExp("^-?(0*)\\d{1,10}$"),qx=-2147483648,Fx=2147483647,PS=function(i){if(Bx.test(i)){const e=Number(i);if(e>=qx&&e<=Fx)return e}return null},pl=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Cn("Exception was thrown by user callback.",t),e},Math.floor(0))}},jx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Hx{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Zn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Cn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(sn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Cn(e)}}class _f{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_f.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="5",jb="v",Hb="s",Gb="r",Qb="f",Yb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kb="ls",Xb="p",Ug="ac",Wb="websocket",$b="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ta.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ta.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qx(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Jb(i,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===Wb)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===$b)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qx(i)&&(t.ns=i.namespace);const a=[];return mn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.counters_={}}incrementCounter(e,t=1){Bi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return x1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={},rg={};function iy(i){const e=i.toString();return sg[e]||(sg[e]=new Yx),sg[e]}function Kx(i,e){const t=i.toString();return rg[t]||(rg[t]=e()),rg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&pl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="start",Wx="close",$x="pLPCommand",Zx="pRTLPCB",eC="id",tC="pw",nC="ser",Jx="cb",ek="seg",tk="ts",nk="d",ik="dframe",iC=1870,sC=30,sk=iC-sC,rk=25e3,ak=3e4;class Uo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wc(e),this.stats_=iy(t),this.urlFn=p=>(this.appCheckToken&&(p[Ug]=this.appCheckToken),Jb(t,$b,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ak)),Px(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===VS)this.id=d,this.password=p;else if(c===Wx)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[VS]="t",s[nC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jb]=ny,this.transportSessionId&&(s[Hb]=this.transportSessionId),this.lastSessionId&&(s[Kb]=this.lastSessionId),this.applicationId&&(s[Xb]=this.applicationId),this.appCheckToken&&(s[Ug]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yb.test(location.hostname)&&(s[Gb]=Qb);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Uo.forceAllow_=!0}static forceDisallow(){Uo.forceDisallow_=!0}static isAvailable(){return Uo.forceAllow_?!0:!Uo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lx()&&!Ux()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=gA(t),a=qb(s,sk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ik]="t",s[eC]=e,s[tC]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class sy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mx(),window[$x+this.uniqueCallbackIdentifier]=e,window[Zx+this.uniqueCallbackIdentifier]=t,this.myIFrame=sy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){sn("frame writing exception"),d.stack&&sn(d.stack),sn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||sn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eC]=this.myID,e[tC]=this.myPW,e[nC]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sC+s.length<=iC;){const c=this.pendingSegs.shift();s=s+"&"+ek+a+"="+c.seg+"&"+tk+a+"="+c.ts+"&"+nk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(rk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{sn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=16384,lk=45e3;let qf=null;typeof MozWebSocket<"u"?qf=MozWebSocket:typeof WebSocket<"u"&&(qf=WebSocket);class oi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wc(this.connId),this.stats_=iy(t),this.connURL=oi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[jb]=ny,typeof location<"u"&&location.hostname&&Yb.test(location.hostname)&&(c[Gb]=Qb),t&&(c[Hb]=t),s&&(c[Kb]=s),a&&(c[Ug]=a),l&&(c[Xb]=l),Jb(e,Wb,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ta.set("previous_websocket_failure",!0);try{let s;G1(),this.mySock=new qf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&qf!==null&&!oi.forceDisallow_}static previouslyFailed(){return Ta.isInMemoryStorage||Ta.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ta.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ku(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=qb(t,ok);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oi.responsesRequiredToBeHealthy=2;oi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static get ALL_TRANSPORTS(){return[Uo,oi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=oi&&oi.isAvailable();let s=t&&!oi.previouslyFailed();if(e.webSocketOnly&&(t||Cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oi];else{const a=this.transports_=[];for(const l of rc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);rc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=6e4,ck=5e3,hk=10*1024,fk=100*1024,ag="t",LS="d",dk="s",US="r",mk="e",zS="o",BS="a",qS="n",FS="p",pk="h";class gk{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wc("c:"+this.id+":"),this.transportManager_=new rc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Hu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ag in e){const t=e[ag];t===BS?this.upgradeIfSecondaryHealthy_():t===US?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Iu("t",e),s=Iu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:FS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:BS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Iu("t",e),s=Iu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Iu(ag,e);if(LS in e){const s=e[LS];if(t===pk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===qS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===dk?this.onConnectionShutdown_(s):t===US?this.onReset_(s):t===mk?Lg("Server Error: "+s):t===zS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ny!==s&&Cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Hu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ck))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:FS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ta.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends aC{static getInstance(){return new Ff}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!i_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=32,HS=768;class Ze{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ge(){return new Ze("")}function Re(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Ir(i){return i.pieces_.length-i.pieceNum_}function rt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ze(i.pieces_,e)}function ry(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function _k(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function ac(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function oC(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new Ze(e,0)}function bt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof Ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Ze(t,0)}function De(i){return i.pieceNum_>=i.pieces_.length}function wn(i,e){const t=Re(i),s=Re(e);if(t===null)return e;if(t===s)return wn(rt(i),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function yk(i,e){const t=ac(i,0),s=ac(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ua(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function ay(i,e){if(Ir(i)!==Ir(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function ei(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(Ir(i)>Ir(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class vk{constructor(e,t){this.errorPrefix_=t,this.parts_=ac(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=id(this.parts_[s]);lC(this)}}function Ek(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=id(e),lC(i)}function Tk(i){const e=i.parts_.pop();i.byteLength_-=id(e),i.parts_.length>0&&(i.byteLength_-=1)}function lC(i){if(i.byteLength_>HS)throw new Error(i.errorPrefix_+"has a key path longer than "+HS+" bytes ("+i.byteLength_+").");if(i.parts_.length>jS)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jS+") or object contains a cycle "+ya(i))}function ya(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends aC{static getInstance(){return new oy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=1e3,Sk=300*1e3,GS=30*1e3,Ak=1.3,wk=3e4,bk="server_kill",QS=3;class Ts extends rC{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ts.nextPersistentConnectionId_++,this.log_=wc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nu,this.maxReconnectDelay_=Sk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");oy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ff.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Wt(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ms,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ts.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Bi(e,"w")){const s=Qo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=GS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Z1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Lg("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wk&&(this.reconnectDelay_=Nu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ak)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ts.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,A]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?sn("getToken() completed but was canceled"):(sn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=A&&A.token,d=new gk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{Cn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(bk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Cn(T),p())}}}interrupt(e){sn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ef(this.interruptReasons_)&&(this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>ty(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Ze(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){sn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=QS&&(this.reconnectDelay_=GS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){sn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=QS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ub.replace(/\./g,"-")]=1,i_()?e["framework.cordova"]=1:AA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ff.getInstance().currentlyOnline();return Ef(this.interruptReasons_)&&e}}Ts.nextPersistentConnectionId_=0;Ts.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Oe(il,e),a=new Oe(il,t);return this.compare(s,a)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;class uC extends Od{static get __EMPTY_NODE(){return rf}static set __EMPTY_NODE(e){rf=e}compare(e,t){return Ua(e.name,t.name)}isDefinedOn(e){throw ol("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,rf)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,rf)}toString(){return".key"}}const Ho=new uC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Xt.RED,this.left=a??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(e,t,s,a,l){return new Xt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return bn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class Ck{copy(e,t,s,a,l){return this}insert(e,t,s){return new Xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(e,t=bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new af(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new af(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new af(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new af(this.root_,null,this.comparator_,!0,e)}}bn.EMPTY_NODE=new Ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(i,e){return Ua(i.name,e.name)}function ly(i,e){return Ua(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zg;function Ik(i){zg=i}const cC=function(i){return typeof i=="number"?"number:"+Fb(i):"string:"+i},hC=function(i){if(i.isLeafNode()){const e=i.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bi(e,".sv"),"Priority must be a string or number.")}else ne(i===zg||i.isEmpty(),"priority of unexpected type.");ne(i===zg||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YS;class Yt{static set __childrenNodeConstructor(e){YS=e}static get __childrenNodeConstructor(){return YS}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Re(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Re(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Fb(this.value_):e+=this.value_,this.lazyHash_=Bb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fC,dC;function Nk(i){fC=i}function Dk(i){dC=i}class Ok extends Od{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ua(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,new Yt("[PRIORITY-POST]",dC))}makePost(e,t){const s=fC(e);return new Oe(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pt=new Ok;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=Math.log(2);class xk{constructor(e){const t=l=>parseInt(Math.log(l)/Mk,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jf=function(i,e,t,s){i.sort(e);const a=function(p,g){const v=g-p;let T,A;if(v===0)return null;if(v===1)return T=i[p],A=t?t(T):T,new Xt(A,T.node,Xt.BLACK,null,null);{const O=parseInt(v/2,10)+p,B=a(p,O),Z=a(O+1,g);return T=i[O],A=t?t(T):T,new Xt(A,T.node,Xt.BLACK,B,Z)}},l=function(p){let g=null,v=null,T=i.length;const A=function(B,Z){const W=T-B,pe=T;T-=B;const de=a(W+1,pe),ue=i[W],Fe=t?t(ue):ue;O(new Xt(Fe,ue.node,Z,null,de))},O=function(B){g?(g.left=B,g=B):(v=B,g=B)};for(let B=0;B<p.count;++B){const Z=p.nextBitIsOne(),W=Math.pow(2,p.count-(B+1));Z?A(W,Xt.BLACK):(A(W,Xt.BLACK),A(W,Xt.RED))}return v},c=new xk(i.length),d=l(c);return new bn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let og;const xo={};class ys{static get Default(){return ne(xo&&pt,"ChildrenNode.ts has not been loaded"),og=og||new ys({".priority":xo},{".priority":pt}),og}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bn?t:null}hasIndex(e){return Bi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Ho,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=jf(s,e.getCompare()):d=xo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new ys(v,g)}addToIndexes(e,t){const s=Tf(this.indexes_,(a,l)=>{const c=Qo(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===xo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Oe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),jf(d,c.getCompare())}else return xo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Oe(e.name,d))),p.insert(e,e.node)}});return new ys(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tf(this.indexes_,a=>{if(a===xo)return a;{const l=t.get(e.name);return l?a.remove(new Oe(e.name,l)):a}});return new ys(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du;class ve{static get EMPTY_NODE(){return Du||(Du=new ve(new bn(ly),null,ys.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&hC(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Du}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Du:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Oe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Du:this.priorityNode_;return new ve(a,c,l)}}updateChild(e,t){const s=Re(e);if(s===null)return t;{ne(Re(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(rt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pt,(c,d)=>{t[c]=d.val(e),s++,l&&ve.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cC(this.getPriority().val())+":"),this.forEachChild(pt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Bb(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Oe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bc?-1:0}withIndex(e){if(e===Ho||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ho||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pt),a=t.getIterator(pt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ho?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kk extends ve{constructor(){super(new bn(ly),ve.EMPTY_NODE,ys.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const bc=new kk;Object.defineProperties(Oe,{MIN:{value:new Oe(il,ve.EMPTY_NODE)},MAX:{value:new Oe(Oa,bc)}});uC.__EMPTY_NODE=ve.EMPTY_NODE;Yt.__childrenNodeConstructor=ve;Ik(bc);Dk(bc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=!0;function Ot(i,e=null){if(i===null)return ve.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Yt(t,Ot(e))}if(!(i instanceof Array)&&Pk){const t=[];let s=!1;if(mn(i,(c,d)=>{if(c.substring(0,1)!=="."){const p=Ot(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Oe(c,p)))}}),t.length===0)return ve.EMPTY_NODE;const l=jf(t,Rk,c=>c.name,ly);if(s){const c=jf(t,pt.getCompare());return new ve(l,Ot(e),new ys({".priority":c},{".priority":pt}))}else return new ve(l,Ot(e),ys.Default)}else{let t=ve.EMPTY_NODE;return mn(i,(s,a)=>{if(Bi(i,s)&&s.substring(0,1)!=="."){const l=Ot(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ot(e))}}Nk(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk extends Od{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ua(e.name,t.name):l}makePost(e,t){const s=Ot(e),a=ve.EMPTY_NODE.updateChild(this.indexPath_,s);return new Oe(t,a)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,bc);return new Oe(Oa,e)}toString(){return ac(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk extends Od{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ua(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const s=Ot(e);return new Oe(t,s)}toString(){return".value"}}const Uk=new Lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(i){return{type:"value",snapshotNode:i}}function sl(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function oc(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function lc(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function zk(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(oc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(sl(t,s)):c.trackChildChange(lc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pt,(a,l)=>{t.hasChild(a)||s.trackChildChange(oc(a,l))}),t.isLeafNode()||t.forEachChild(pt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(lc(a,l,c))}else s.trackChildChange(sl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ve.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.indexedFilter_=new uy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=uc.getStartPost_(e),this.endPost_=uc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Oe(t,s))||(s=ve.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ve.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(ve.EMPTY_NODE);const l=this;return t.forEachChild(pt,(c,d)=>{l.matches(new Oe(c,d))||(a=a.updateImmediateChild(c,ve.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new uc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Oe(t,s))||(s=ve.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=ve.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=ve.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(ve.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,ve.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(A,O)=>T(O,A)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const p=new Oe(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let A=a.getChildAfterChild(this.index_,g,this.reverse_);for(;A!=null&&(A.name===t||d.hasChild(A.name));)A=a.getChildAfterChild(this.index_,A,this.reverse_);const O=A==null?1:c(A,p);if(v&&!s.isEmpty()&&O>=0)return l?.trackChildChange(lc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(oc(t,T));const Z=d.updateImmediateChild(t,ve.EMPTY_NODE);return A!=null&&this.rangedFilter_.matches(A)?(l?.trackChildChange(sl(A.name,A.node)),Z.updateImmediateChild(A.name,A.node)):Z}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(oc(g.name,g.node)),l.trackChildChange(sl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,ve.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:il}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new cy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qk(i){return i.loadsAllData()?new uy(i.getIndex()):i.hasLimit()?new Bk(i):new uc(i)}function KS(i){const e={};if(i.isDefault())return e;let t;if(i.index_===pt?t="$priority":i.index_===Uk?t="$value":i.index_===Ho?t="$key":(ne(i.index_ instanceof Vk,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Wt(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Wt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Wt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Wt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Wt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function XS(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==pt&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends rC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=wc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Hf.getListenId_(e,s),d={};this.listens_[c]=d;const p=KS(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Qo(this.listens_,c)===d){let A;g?g===401?A="permission_denied":A="rest_error:"+g:A="ok",a(A,null)}})}unlisten(e,t){const s=Hf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=KS(e._queryParams),s=e._path.toString(),a=new ms;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ll(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Ku(d.responseText)}catch{Cn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Cn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return{value:null,children:new Map}}function gl(i,e,t){if(De(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Re(e);i.children.has(s)||i.children.set(s,Gf());const a=i.children.get(s);e=rt(e),gl(a,e,t)}}function Bg(i,e){if(De(e))return i.value=null,i.children.clear(),!0;if(i.value!==null){if(i.value.isLeafNode())return!1;{const t=i.value;return i.value=null,t.forEachChild(pt,(s,a)=>{gl(i,new Ze(s),a)}),Bg(i,e)}}else if(i.children.size>0){const t=Re(e);return e=rt(e),i.children.has(t)&&Bg(i.children.get(t),e)&&i.children.delete(t),i.children.size===0}else return!0}function qg(i,e,t){i.value!==null?t(e,i.value):jk(i,(s,a)=>{const l=new Ze(e.toString()+"/"+s);qg(a,l,t)})}function jk(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&mn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=10*1e3,Gk=30*1e3,Qk=300*1e3;class Yk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hk(e);const s=WS+(Gk-WS)*Math.random();Hu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;mn(e,(a,l)=>{l>0&&Bi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Hu(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ui;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ui||(ui={}));function pC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fy(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ui.ACK_USER_WRITE,this.source=pC()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ze(e));return new Qf(Ge(),t,this.revert)}}else return ne(Re(this.path)===e,"operationForChild called for unrelated child."),new Qf(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.source=e,this.path=t,this.type=ui.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new cc(this.source,Ge()):new cc(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ui.OVERWRITE}operationForChild(e){return De(this.path)?new Ma(this.source,Ge(),this.snap.getImmediateChild(e)):new Ma(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ui.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Ze(e));return t.isEmpty()?null:t.value?new Ma(this.source,Ge(),t.value):new hc(this.source,Ge(),t)}else return ne(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xk(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(zk(c.childName,c.snapshotNode))}),Ou(i,a,"child_removed",e,s,t),Ou(i,a,"child_added",e,s,t),Ou(i,a,"child_moved",l,s,t),Ou(i,a,"child_changed",e,s,t),Ou(i,a,"value",e,s,t),a}function Ou(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>$k(i,d,p)),c.forEach(d=>{const p=Wk(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,i.query_))})})}function Wk(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function $k(i,e,t){if(e.childName==null||t.childName==null)throw ol("Should only compare child_ events.");const s=new Oe(e.childName,e.snapshotNode),a=new Oe(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(i,e){return{eventCache:i,serverCache:e}}function Gu(i,e,t,s){return Md(new xa(e,t,s),i.serverCache)}function gC(i,e,t,s){return Md(i.eventCache,new xa(e,t,s))}function Fg(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ka(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg;const Zk=()=>(lg||(lg=new bn(Vx)),lg);class ut{static fromObject(e){let t=new ut(null);return mn(e,(s,a)=>{t=t.set(new Ze(s),a)}),t}constructor(e,t=Zk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ge(),value:this.value};if(De(e))return null;{const s=Re(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:bt(new Ze(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Re(e),s=this.children.get(t);return s!==null?s.subtree(rt(e)):new ut(null)}}set(e,t){if(De(e))return new ut(t,this.children);{const s=Re(e),l=(this.children.get(s)||new ut(null)).set(rt(e),t),c=this.children.insert(s,l);return new ut(this.value,c)}}remove(e){if(De(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Re(e),s=this.children.get(t);if(s){const a=s.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(De(e))return this.value;{const t=Re(e),s=this.children.get(t);return s?s.get(rt(e)):null}}setTree(e,t){if(De(e))return t;{const s=Re(e),l=(this.children.get(s)||new ut(null)).setTree(rt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ut(this.value,c)}}fold(e){return this.fold_(Ge(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(bt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ge(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(De(e))return null;{const l=Re(e),c=this.children.get(l);return c?c.findOnPath_(rt(e),bt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ge(),t)}foreachOnPath_(e,t,s){if(De(e))return this;{this.value&&s(t,this.value);const a=Re(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),bt(t,a),s):new ut(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(bt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new ut(null))}}function Qu(i,e,t){if(De(e))return new fi(new ut(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=wn(a,e);return l=l.updateChild(c,t),new fi(i.writeTree_.set(a,l))}else{const a=new ut(t),l=i.writeTree_.setTree(e,a);return new fi(l)}}}function $S(i,e,t){let s=i;return mn(t,(a,l)=>{s=Qu(s,bt(e,a),l)}),s}function ZS(i,e){if(De(e))return fi.empty();{const t=i.writeTree_.setTree(e,new ut(null));return new fi(t)}}function jg(i,e){return za(i,e)!=null}function za(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(wn(t.path,e)):null}function JS(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pt,(s,a)=>{e.push(new Oe(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Oe(s,a.value))}),e}function yr(i,e){if(De(e))return i;{const t=za(i,e);return t!=null?new fi(new ut(t)):new fi(i.writeTree_.subtree(e))}}function Hg(i){return i.writeTree_.isEmpty()}function rl(i,e){return _C(Ge(),i.writeTree_,e)}function _C(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=_C(bt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(bt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(i,e){return TC(e,i)}function Jk(i,e,t,s,a){ne(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Qu(i.visibleWrites,e,t)),i.lastWriteId=s}function eP(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function tP(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&nP(d,s.path)?a=!1:ei(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return iP(i),!0;if(s.snap)i.visibleWrites=ZS(i.visibleWrites,s.path);else{const d=s.children;mn(d,p=>{i.visibleWrites=ZS(i.visibleWrites,bt(s.path,p))})}return!0}else return!1}function nP(i,e){if(i.snap)return ei(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&ei(bt(i.path,t),e))return!0;return!1}function iP(i){i.visibleWrites=yC(i.allWrites,sP,Ge()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function sP(i){return i.visible}function yC(i,e,t){let s=fi.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)ei(t,c)?(d=wn(t,c),s=Qu(s,d,l.snap)):ei(c,t)&&(d=wn(c,t),s=Qu(s,Ge(),l.snap.getChild(d)));else if(l.children){if(ei(t,c))d=wn(t,c),s=$S(s,d,l.children);else if(ei(c,t))if(d=wn(c,t),De(d))s=$S(s,Ge(),l.children);else{const p=Qo(l.children,Re(d));if(p){const g=p.getChild(rt(d));s=Qu(s,Ge(),g)}}}else throw ol("WriteRecord should have .snap or .children")}}return s}function vC(i,e,t,s,a){if(!s&&!a){const l=za(i.visibleWrites,e);if(l!=null)return l;{const c=yr(i.visibleWrites,e);if(Hg(c))return t;if(t==null&&!jg(c,Ge()))return null;{const d=t||ve.EMPTY_NODE;return rl(c,d)}}}else{const l=yr(i.visibleWrites,e);if(!a&&Hg(l))return t;if(!a&&t==null&&!jg(l,Ge()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ei(g.path,e)||ei(e,g.path))},d=yC(i.allWrites,c,e),p=t||ve.EMPTY_NODE;return rl(d,p)}}}function rP(i,e,t){let s=ve.EMPTY_NODE;const a=za(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=yr(i.visibleWrites,e);return t.forEachChild(pt,(c,d)=>{const p=rl(yr(l,new Ze(c)),d);s=s.updateImmediateChild(c,p)}),JS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=yr(i.visibleWrites,e);return JS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function aP(i,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=bt(e,t);if(jg(i.visibleWrites,l))return null;{const c=yr(i.visibleWrites,l);return Hg(c)?a.getChild(t):rl(c,a.getChild(t))}}function oP(i,e,t,s){const a=bt(e,t),l=za(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=yr(i.visibleWrites,a);return rl(c,s.getNode().getImmediateChild(t))}else return null}function lP(i,e){return za(i.visibleWrites,e)}function uP(i,e,t,s,a,l,c){let d;const p=yr(i.visibleWrites,e),g=za(p,Ge());if(g!=null)d=g;else if(t!=null)d=rl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),A=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=A.getNext();for(;O&&v.length<a;)T(O,s)!==0&&v.push(O),O=A.getNext();return v}else return[]}function cP(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function Yf(i,e,t,s){return vC(i.writeTree,i.treePath,e,t,s)}function my(i,e){return rP(i.writeTree,i.treePath,e)}function eA(i,e,t,s){return aP(i.writeTree,i.treePath,e,t,s)}function Kf(i,e){return lP(i.writeTree,bt(i.treePath,e))}function hP(i,e,t,s,a,l){return uP(i.writeTree,i.treePath,e,t,s,a,l)}function py(i,e,t){return oP(i.writeTree,i.treePath,e,t)}function EC(i,e){return TC(bt(i.treePath,e),i.writeTree)}function TC(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,lc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,oc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,sl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,lc(s,e.snapshotNode,a.oldSnap));else throw ol("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const SC=new dP;class gy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return py(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ka(this.viewCache_),l=hP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(i){return{filter:i}}function pP(i,e){ne(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function gP(i,e,t,s,a){const l=new fP;let c,d;if(t.type===ui.OVERWRITE){const g=t;g.source.fromUser?c=Gg(i,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!De(g.path),c=Xf(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===ui.MERGE){const g=t;g.source.fromUser?c=yP(i,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Qg(i,e,g.path,g.children,s,a,d,l))}else if(t.type===ui.ACK_USER_WRITE){const g=t;g.revert?c=TP(i,e,g.path,s,a,l):c=vP(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===ui.LISTEN_COMPLETE)c=EP(i,e,t.path,s,l);else throw ol("Unknown operation type: "+t.type);const p=l.getChanges();return _P(e,c,p),{viewCache:c,changes:p}}function _P(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Fg(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(mC(Fg(e)))}}function AC(i,e,t,s,a,l){const c=e.eventCache;if(Kf(s,t)!=null)return e;{let d,p;if(De(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ka(e),v=g instanceof ve?g:ve.EMPTY_NODE,T=my(s,v);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Yf(s,ka(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Re(t);if(g===".priority"){ne(Ir(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=eA(s,t,v,p);T!=null?d=i.filter.updatePriority(v,T):d=c.getNode()}else{const v=rt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const A=eA(s,t,c.getNode(),p);A!=null?T=c.getNode().getImmediateChild(g).updateChild(v,A):T=c.getNode().getImmediateChild(g)}else T=py(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Gu(e,d,c.isFullyInitialized()||De(t),i.filter.filtersNodes())}}function Xf(i,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?i.filter:i.filter.getIndexedFilter();if(De(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),O,null)}else{const O=Re(t);if(!p.isCompleteForPath(t)&&Ir(t)>1)return e;const B=rt(t),W=p.getNode().getImmediateChild(O).updateChild(B,s);O===".priority"?g=v.updatePriority(p.getNode(),W):g=v.updateChild(p.getNode(),O,W,B,SC,null)}const T=gC(e,g,p.isFullyInitialized()||De(t),v.filtersNodes()),A=new gy(a,T,l);return AC(i,T,t,a,A,d)}function Gg(i,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new gy(a,e,l);if(De(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Gu(e,g,!0,i.filter.filtersNodes());else{const T=Re(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Gu(e,g,d.isFullyInitialized(),d.isFiltered());else{const A=rt(t),O=d.getNode().getImmediateChild(T);let B;if(De(A))B=s;else{const Z=v.getCompleteChild(T);Z!=null?ry(A)===".priority"&&Z.getChild(oC(A)).isEmpty()?B=Z:B=Z.updateChild(A,s):B=ve.EMPTY_NODE}if(O.equals(B))p=e;else{const Z=i.filter.updateChild(d.getNode(),T,B,A,v,c);p=Gu(e,Z,d.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function tA(i,e){return i.eventCache.isCompleteForChild(e)}function yP(i,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=bt(t,p);tA(e,Re(v))&&(d=Gg(i,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=bt(t,p);tA(e,Re(v))||(d=Gg(i,d,v,g,a,l,c))}),d}function nA(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Qg(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;De(t)?g=s:g=new ut(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,A)=>{if(v.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),B=nA(i,O,A);p=Xf(i,p,new Ze(T),B,a,l,c,d)}}),g.children.inorderTraversal((T,A)=>{const O=!e.serverCache.isCompleteForChild(T)&&A.value===null;if(!v.hasChild(T)&&!O){const B=e.serverCache.getNode().getImmediateChild(T),Z=nA(i,B,A);p=Xf(i,p,new Ze(T),Z,a,l,c,d)}}),p}function vP(i,e,t,s,a,l,c){if(Kf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(De(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Xf(i,e,t,p.getNode().getChild(t),a,l,d,c);if(De(t)){let g=new ut(null);return p.getNode().forEachChild(Ho,(v,T)=>{g=g.set(new Ze(v),T)}),Qg(i,e,t,g,a,l,d,c)}else return e}else{let g=new ut(null);return s.foreach((v,T)=>{const A=bt(t,v);p.isCompleteForPath(A)&&(g=g.set(v,p.getNode().getChild(A)))}),Qg(i,e,t,g,a,l,d,c)}}function EP(i,e,t,s,a){const l=e.serverCache,c=gC(e,l.getNode(),l.isFullyInitialized()||De(t),l.isFiltered());return AC(i,c,t,s,SC,a)}function TP(i,e,t,s,a,l){let c;if(Kf(s,t)!=null)return e;{const d=new gy(s,e,a),p=e.eventCache.getNode();let g;if(De(t)||Re(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Yf(s,ka(e));else{const T=e.serverCache.getNode();ne(T instanceof ve,"serverChildren would be complete if leaf node"),v=my(s,T)}v=v,g=i.filter.updateFullNode(p,v,l)}else{const v=Re(t);let T=py(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=i.filter.updateChild(p,v,T,rt(t),d,l):e.eventCache.getNode().hasChild(v)?g=i.filter.updateChild(p,v,ve.EMPTY_NODE,rt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Yf(s,ka(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Kf(s,Ge())!=null,Gu(e,g,c,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new uy(s.getIndex()),l=qk(s);this.processor_=mP(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(ve.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(ve.EMPTY_NODE,d.getNode(),null),v=new xa(p,c.isFullyInitialized(),a.filtersNodes()),T=new xa(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Md(T,v),this.eventGenerator_=new Kk(this.query_)}get query(){return this.query_}}function AP(i){return i.viewCache_.serverCache.getNode()}function wP(i,e){const t=ka(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function iA(i){return i.eventRegistrations_.length===0}function bP(i,e){i.eventRegistrations_.push(e)}function sA(i,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=i.query._path;i.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<i.eventRegistrations_.length;++l){const c=i.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(i.eventRegistrations_.slice(l+1));break}}i.eventRegistrations_=a}else i.eventRegistrations_=[];return s}function rA(i,e,t,s){e.type===ui.MERGE&&e.source.queryId!==null&&(ne(ka(i.viewCache_),"We should always have a full cache before handling merges"),ne(Fg(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=gP(i.processor_,a,e,t,s);return pP(i.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,wC(i,l.changes,l.viewCache.eventCache.getNode(),null)}function CP(i,e){const t=i.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(pt,(l,c)=>{s.push(sl(l,c))}),t.isFullyInitialized()&&s.push(mC(t.getNode())),wC(i,s,t.getNode(),e)}function wC(i,e,t,s){const a=s?[s]:i.eventRegistrations_;return Xk(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;class RP{constructor(){this.views=new Map}}function IP(i){ne(!Wf,"__referenceConstructor has already been defined"),Wf=i}function NP(){return ne(Wf,"Reference.ts has not been loaded"),Wf}function DP(i){return i.views.size===0}function _y(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),rA(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(rA(c,e,t,s));return l}}function OP(i,e,t,s,a){const l=e._queryIdentifier,c=i.views.get(l);if(!c){let d=Yf(t,a?s:null),p=!1;d?p=!0:s instanceof ve?(d=my(t,s),p=!1):(d=ve.EMPTY_NODE,p=!1);const g=Md(new xa(d,p,!1),new xa(s,a,!1));return new SP(e,g)}return c}function MP(i,e,t,s,a,l){const c=OP(i,e,s,a,l);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,c),bP(c,t),CP(c,t)}function xP(i,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Nr(i);if(a==="default")for(const[p,g]of i.views.entries())c=c.concat(sA(g,t,s)),iA(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=i.views.get(a);p&&(c=c.concat(sA(p,t,s)),iA(p)&&(i.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Nr(i)&&l.push(new(NP())(e._repo,e._path)),{removed:l,events:c}}function bC(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Go(i,e){let t=null;for(const s of i.views.values())t=t||wP(s,e);return t}function CC(i,e){if(e._queryParams.loadsAllData())return xd(i);{const s=e._queryIdentifier;return i.views.get(s)}}function RC(i,e){return CC(i,e)!=null}function Nr(i){return xd(i)!=null}function xd(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;function kP(i){ne(!$f,"__referenceConstructor has already been defined"),$f=i}function PP(){return ne($f,"Reference.ts has not been loaded"),$f}let VP=1;class aA{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=cP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IC(i,e,t,s,a){return Jk(i.pendingWriteTree_,e,t,s,a),a?Cc(i,new Ma(pC(),e,t)):[]}function Sa(i,e,t=!1){const s=eP(i.pendingWriteTree_,e);if(tP(i.pendingWriteTree_,e)){let l=new ut(null);return s.snap!=null?l=l.set(Ge(),!0):mn(s.children,c=>{l=l.set(new Ze(c),!0)}),Cc(i,new Qf(s.path,l,t))}else return[]}function kd(i,e,t){return Cc(i,new Ma(hy(),e,t))}function LP(i,e,t){const s=ut.fromObject(t);return Cc(i,new hc(hy(),e,s))}function UP(i,e){return Cc(i,new cc(hy(),e))}function zP(i,e,t){const s=vy(i,t);if(s){const a=Ey(s),l=a.path,c=a.queryId,d=wn(l,e),p=new cc(fy(c),d);return Ty(i,l,p)}else return[]}function Yg(i,e,t,s,a=!1){const l=e._path,c=i.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||RC(c,e))){const p=xP(c,e,t,s);DP(c)&&(i.syncPointTree_=i.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(A=>A._queryParams.loadsAllData())!==-1,T=i.syncPointTree_.findOnPath(l,(A,O)=>Nr(O));if(v&&!T){const A=i.syncPointTree_.subtree(l);if(!A.isEmpty()){const O=FP(A);for(let B=0;B<O.length;++B){const Z=O[B],W=Z.query,pe=OC(i,Z);i.listenProvider_.startListening(Yu(W),Zf(i,W),pe.hashFn,pe.onComplete)}}}!T&&g.length>0&&!s&&(v?i.listenProvider_.stopListening(Yu(e),null):g.forEach(A=>{const O=i.queryToTagMap.get(Pd(A));i.listenProvider_.stopListening(Yu(A),O)}))}jP(i,g)}return d}function BP(i,e,t,s){const a=vy(i,s);if(a!=null){const l=Ey(a),c=l.path,d=l.queryId,p=wn(c,e),g=new Ma(fy(d),p,t);return Ty(i,c,g)}else return[]}function qP(i,e,t,s){const a=vy(i,s);if(a){const l=Ey(a),c=l.path,d=l.queryId,p=wn(c,e),g=ut.fromObject(t),v=new hc(fy(d),p,g);return Ty(i,c,v)}else return[]}function oA(i,e,t,s=!1){const a=e._path;let l=null,c=!1;i.syncPointTree_.foreachOnPath(a,(A,O)=>{const B=wn(A,a);l=l||Go(O,B),c=c||Nr(O)});let d=i.syncPointTree_.get(a);d?(c=c||Nr(d),l=l||Go(d,Ge())):(d=new RP,i.syncPointTree_=i.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=ve.EMPTY_NODE,i.syncPointTree_.subtree(a).foreachChild((O,B)=>{const Z=Go(B,Ge());Z&&(l=l.updateImmediateChild(O,Z))}));const g=RC(d,e);if(!g&&!e._queryParams.loadsAllData()){const A=Pd(e);ne(!i.queryToTagMap.has(A),"View does not exist, but we have a tag");const O=HP();i.queryToTagMap.set(A,O),i.tagToQueryMap.set(O,A)}const v=dy(i.pendingWriteTree_,a);let T=MP(d,e,t,v,l,p);if(!g&&!c&&!s){const A=CC(d,e);T=T.concat(GP(i,e,A))}return T}function yy(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const p=wn(c,e),g=Go(d,p);if(g)return g});return vC(a,e,l,t,!0)}function Cc(i,e){return NC(e,i.syncPointTree_,null,dy(i.pendingWriteTree_,Ge()))}function NC(i,e,t,s){if(De(i.path))return DC(i,e,t,s);{const a=e.get(Ge());t==null&&a!=null&&(t=Go(a,Ge()));let l=[];const c=Re(i.path),d=i.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=EC(s,c);l=l.concat(NC(d,p,g,v))}return a&&(l=l.concat(_y(a,i,s,t))),l}}function DC(i,e,t,s){const a=e.get(Ge());t==null&&a!=null&&(t=Go(a,Ge()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=EC(s,c),v=i.operationForChild(c);v&&(l=l.concat(DC(v,d,p,g)))}),a&&(l=l.concat(_y(a,i,s,t))),l}function OC(i,e){const t=e.query,s=Zf(i,t);return{hashFn:()=>(AP(e)||ve.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?zP(i,t._path,s):UP(i,t._path);{const l=zx(a,t);return Yg(i,t,null,l)}}}}function Zf(i,e){const t=Pd(e);return i.queryToTagMap.get(t)}function Pd(i){return i._path.toString()+"$"+i._queryIdentifier}function vy(i,e){return i.tagToQueryMap.get(e)}function Ey(i){const e=i.indexOf("$");return ne(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ze(i.substr(0,e))}}function Ty(i,e,t){const s=i.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=dy(i.pendingWriteTree_,e);return _y(s,t,a,null)}function FP(i){return i.fold((e,t,s)=>{if(t&&Nr(t))return[xd(t)];{let a=[];return t&&(a=bC(t)),mn(s,(l,c)=>{a=a.concat(c)}),a}})}function Yu(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(PP())(i._repo,i._path):i}function jP(i,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Pd(s),l=i.queryToTagMap.get(a);i.queryToTagMap.delete(a),i.tagToQueryMap.delete(l)}}}function HP(){return VP++}function GP(i,e,t){const s=e._path,a=Zf(i,e),l=OC(i,t),c=i.listenProvider_.startListening(Yu(e),a,l.hashFn,l.onComplete),d=i.syncPointTree_.subtree(s);if(a)ne(!Nr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!De(g)&&v&&Nr(v))return[xd(v).query];{let A=[];return v&&(A=A.concat(bC(v).map(O=>O.query))),mn(T,(O,B)=>{A=A.concat(B)}),A}});for(let g=0;g<p.length;++g){const v=p[g];i.listenProvider_.stopListening(Yu(v),Zf(i,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sy(t)}node(){return this.node_}}class Ay{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new Ay(this.syncTree_,t)}node(){return yy(this.syncTree_,this.path_)}}const QP=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},lA=function(i,e,t){if(!i||typeof i!="object")return i;if(ne(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return YP(i[".sv"],e,t);if(typeof i[".sv"]=="object")return KP(i[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},YP=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+i)}},KP=function(i,e,t){i.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},XP=function(i,e,t,s){return wy(e,new Ay(t,i),s)},MC=function(i,e,t){return wy(i,new Sy(e),t)};function wy(i,e,t){const s=i.getPriority().val(),a=lA(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=lA(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,Ot(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(pt,(d,p)=>{const g=wy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Cy(i,e){let t=e instanceof Ze?e:new Ze(e),s=i,a=Re(t);for(;a!==null;){const l=Qo(s.node.children,a)||{children:{},childCount:0};s=new by(a,s,l),t=rt(t),a=Re(t)}return s}function _l(i){return i.node.value}function xC(i,e){i.node.value=e,Kg(i)}function kC(i){return i.node.childCount>0}function WP(i){return _l(i)===void 0&&!kC(i)}function Vd(i,e){mn(i.node.children,(t,s)=>{e(new by(t,i,s))})}function PC(i,e,t,s){t&&e(i),Vd(i,a=>{PC(a,e,!0)})}function $P(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Rc(i){return new Ze(i.parent===null?i.name:Rc(i.parent)+"/"+i.name)}function Kg(i){i.parent!==null&&ZP(i.parent,i.name,i)}function ZP(i,e,t){const s=WP(t),a=Bi(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,Kg(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,Kg(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/[\[\].#$\/\u0000-\u001F\u007F]/,eV=/[\[\].#$\u0000-\u001F\u007F]/,ug=10*1024*1024,Ry=function(i){return typeof i=="string"&&i.length!==0&&!JP.test(i)},VC=function(i){return typeof i=="string"&&i.length!==0&&!eV.test(i)},tV=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),VC(i)},LC=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Dd(i)||i&&typeof i=="object"&&Bi(i,".sv")},Xg=function(i,e,t,s){Ld(Yo(i,"value"),e,t)},Ld=function(i,e,t){const s=t instanceof Ze?new vk(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+ya(s));if(typeof e=="function")throw new Error(i+"contains a function "+ya(s)+" with contents = "+e.toString());if(Dd(e))throw new Error(i+"contains "+e.toString()+" "+ya(s));if(typeof e=="string"&&e.length>ug/3&&id(e)>ug)throw new Error(i+"contains a string greater than "+ug+" utf8 bytes "+ya(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(mn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ry(c)))throw new Error(i+" contains an invalid key ("+c+") "+ya(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ek(s,c),Ld(i,d,s),Tk(s)}),a&&l)throw new Error(i+' contains ".value" child '+ya(s)+" in addition to actual children.")}},nV=function(i,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=ac(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Ry(l[c]))throw new Error(i+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(yk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&ei(a,s))throw new Error(i+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},iV=function(i,e,t,s){const a=Yo(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];mn(e,(c,d)=>{const p=new Ze(c);if(Ld(a,d,bt(t,p)),ry(p)===".priority"&&!LC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),nV(a,l)},sV=function(i,e,t){if(Dd(e))throw new Error(Yo(i,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!LC(e))throw new Error(Yo(i,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},UC=function(i,e,t,s){if(!VC(t))throw new Error(Yo(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rV=function(i,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),UC(i,e,t)},Vu=function(i,e){if(Re(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},aV=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ry(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tV(t))throw new Error(Yo(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iy(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!ay(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function zC(i,e,t){Iy(i,t),BC(i,s=>ay(s,e))}function Rs(i,e,t){Iy(i,t),BC(i,s=>ei(s,e)||ei(e,s))}function BC(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(lV(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function lV(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();ju&&sn("event: "+t.toString()),pl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV="repo_interrupt",cV=25;class hV{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gf(),this.transactionQueueTree_=new by,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fV(i,e,t){if(i.stats_=iy(i.repoInfo_),i.forceRestClient_||jx())i.server_=new Hf(i.repoInfo_,(s,a,l,c)=>{uA(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>cA(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Ts(i.repoInfo_,e,(s,a,l,c)=>{uA(i,s,a,l,c)},s=>{cA(i,s)},s=>{mV(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=Kx(i.repoInfo_,()=>new Yk(i.stats_,i.server_)),i.infoData_=new Fk,i.infoSyncTree_=new aA({startListening:(s,a,l,c)=>{let d=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(d=kd(i.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Dy(i,"connected",!1),i.serverSyncTree_=new aA({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Rs(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function dV(i){const t=i.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ny(i){return QP({timestamp:dV(i)})}function uA(i,e,t,s,a){i.dataUpdateCount++;const l=new Ze(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Tf(t,g=>Ot(g));c=qP(i.serverSyncTree_,l,p,a)}else{const p=Ot(t);c=BP(i.serverSyncTree_,l,p,a)}else if(s){const p=Tf(t,g=>Ot(g));c=LP(i.serverSyncTree_,l,p)}else{const p=Ot(t);c=kd(i.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Ud(i,l)),Rs(i.eventQueue_,d,c)}function cA(i,e){Dy(i,"connected",e),e===!1&&gV(i)}function mV(i,e){mn(e,(t,s)=>{Dy(i,t,s)})}function Dy(i,e,t){const s=new Ze("/.info/"+e),a=Ot(t);i.infoData_.updateSnapshot(s,a);const l=kd(i.infoSyncTree_,s,a);Rs(i.eventQueue_,s,l)}function qC(i){return i.nextWriteId_++}function pV(i,e,t,s,a){Oy(i,"set",{path:e.toString(),value:t,priority:s});const l=Ny(i),c=Ot(t,s),d=yy(i.serverSyncTree_,e),p=MC(c,d,l),g=qC(i),v=IC(i.serverSyncTree_,e,p,g,!0);Iy(i.eventQueue_,v),i.server_.put(e.toString(),c.val(!0),(A,O)=>{const B=A==="ok";B||Cn("set at "+e+" failed: "+A);const Z=Sa(i.serverSyncTree_,g,!B);Rs(i.eventQueue_,e,Z),al(i,a,A,O)});const T=QC(i,e);Ud(i,T),Rs(i.eventQueue_,T,[])}function gV(i){Oy(i,"onDisconnectEvents");const e=Ny(i),t=Gf();qg(i.onDisconnect_,Ge(),(a,l)=>{const c=XP(a,l,i.serverSyncTree_,e);gl(t,a,c)});let s=[];qg(t,Ge(),(a,l)=>{s=s.concat(kd(i.serverSyncTree_,a,l));const c=QC(i,a);Ud(i,c)}),i.onDisconnect_=Gf(),Rs(i.eventQueue_,Ge(),s)}function _V(i,e,t){i.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&Bg(i.onDisconnect_,e),al(i,t,s,a)})}function hA(i,e,t,s){const a=Ot(t);i.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&gl(i.onDisconnect_,e,a),al(i,s,l,c)})}function yV(i,e,t,s,a){const l=Ot(t,s);i.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&gl(i.onDisconnect_,e,l),al(i,a,c,d)})}function vV(i,e,t,s){if(Ef(t)){sn("onDisconnect().update() called with empty data.  Don't do anything."),al(i,s,"ok",void 0);return}i.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&mn(t,(c,d)=>{const p=Ot(d);gl(i.onDisconnect_,bt(e,c),p)}),al(i,s,a,l)})}function EV(i,e,t){let s;Re(e._path)===".info"?s=oA(i.infoSyncTree_,e,t):s=oA(i.serverSyncTree_,e,t),zC(i.eventQueue_,e._path,s)}function TV(i,e,t){let s;Re(e._path)===".info"?s=Yg(i.infoSyncTree_,e,t):s=Yg(i.serverSyncTree_,e,t),zC(i.eventQueue_,e._path,s)}function SV(i){i.persistentConnection_&&i.persistentConnection_.interrupt(uV)}function Oy(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),sn(t,...e)}function al(i,e,t,s){e&&pl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function FC(i,e,t){return yy(i.serverSyncTree_,e,t)||ve.EMPTY_NODE}function My(i,e=i.transactionQueueTree_){if(e||zd(i,e),_l(e)){const t=HC(i,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&AV(i,Rc(e),t)}else kC(e)&&Vd(e,t=>{My(i,t)})}function AV(i,e,t){const s=t.map(g=>g.currentWriteId),a=FC(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=wn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;i.server_.put(p.toString(),d,g=>{Oy(i,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let A=0;A<t.length;A++)t[A].status=2,v=v.concat(Sa(i.serverSyncTree_,t[A].currentWriteId)),t[A].onComplete&&T.push(()=>t[A].onComplete(null,!0,t[A].currentOutputSnapshotResolved)),t[A].unwatcher();zd(i,Cy(i.transactionQueueTree_,e)),My(i,i.transactionQueueTree_),Rs(i.eventQueue_,e,v);for(let A=0;A<T.length;A++)pl(T[A])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Cn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Ud(i,e)}},c)}function Ud(i,e){const t=jC(i,e),s=Rc(t),a=HC(i,t);return wV(i,a,s),s}function wV(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=wn(t,p.path);let v=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Sa(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=cV)v=!0,T="maxretry",a=a.concat(Sa(i.serverSyncTree_,p.currentWriteId,!0));else{const A=FC(i,p.path,c);p.currentInputSnapshot=A;const O=e[d].update(A.val());if(O!==void 0){Ld("transaction failed: Data returned ",O,p.path);let B=Ot(O);typeof O=="object"&&O!=null&&Bi(O,".priority")||(B=B.updatePriority(A.getPriority()));const W=p.currentWriteId,pe=Ny(i),de=MC(B,A,pe);p.currentOutputSnapshotRaw=B,p.currentOutputSnapshotResolved=de,p.currentWriteId=qC(i),c.splice(c.indexOf(W),1),a=a.concat(IC(i.serverSyncTree_,p.path,de,p.currentWriteId,p.applyLocally)),a=a.concat(Sa(i.serverSyncTree_,W,!0))}else v=!0,T="nodata",a=a.concat(Sa(i.serverSyncTree_,p.currentWriteId,!0))}Rs(i.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(A){setTimeout(A,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}zd(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)pl(s[d]);My(i,i.transactionQueueTree_)}function jC(i,e){let t,s=i.transactionQueueTree_;for(t=Re(e);t!==null&&_l(s)===void 0;)s=Cy(s,t),e=rt(e),t=Re(e);return s}function HC(i,e){const t=[];return GC(i,e,t),t.sort((s,a)=>s.order-a.order),t}function GC(i,e,t){const s=_l(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Vd(e,a=>{GC(i,a,t)})}function zd(i,e){const t=_l(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,xC(e,t.length>0?t:void 0)}Vd(e,s=>{zd(i,s)})}function QC(i,e){const t=Rc(jC(i,e)),s=Cy(i.transactionQueueTree_,e);return $P(s,a=>{cg(i,a)}),cg(i,s),PC(s,a=>{cg(i,a)}),t}function cg(i,e){const t=_l(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Sa(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?xC(e,void 0):t.length=l+1,Rs(i.eventQueue_,Rc(e),a);for(let c=0;c<s.length;c++)pl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function CV(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Cn(`Invalid query segment '${t}' in query '${i}'`)}return e}const fA=function(i,e){const t=RV(i),s=t.namespace;t.domain==="firebase.com"&&Cs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Cs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||kx();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Zb(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Ze(t.pathString)}},RV=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let v=i.indexOf("/");v===-1&&(v=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(v,T)),v<T&&(a=bV(i.substring(v,T)));const A=CV(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),t=e.substring(B+1),l=s}"ns"in A&&(l=A.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wt(this.snapshot.exportVal())}}class NV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class OV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ms;return _V(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Vu("OnDisconnect.remove",this._path);const e=new ms;return hA(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Vu("OnDisconnect.set",this._path),Xg("OnDisconnect.set",e,this._path);const t=new ms;return hA(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Vu("OnDisconnect.setWithPriority",this._path),Xg("OnDisconnect.setWithPriority",e,this._path),sV("OnDisconnect.setWithPriority",t);const s=new ms;return yV(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Vu("OnDisconnect.update",this._path),iV("OnDisconnect.update",e,this._path);const t=new ms;return vV(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class xy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return De(this._path)?null:ry(this._path)}get ref(){return new xr(this._repo,this._path)}get _queryIdentifier(){const e=XS(this._queryParams),t=ty(e);return t==="{}"?"default":t}get _queryObject(){return XS(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof xy))return!1;const t=this._repo===e._repo,s=ay(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+_k(this._path)}}class xr extends xy{constructor(e,t){super(e,t,new cy,!1)}get parent(){const e=oC(this._path);return e===null?null:new xr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jf{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ze(e),s=Wg(this.ref,e);return new Jf(this._node.getChild(t),s,pt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new Jf(a,Wg(this.ref,s),pt)))}hasChild(e){const t=new Ze(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ed(i,e){return i=dt(i),i._checkNotDeleted("ref"),e!==void 0?Wg(i._root,e):i._root}function Wg(i,e){return i=dt(i),Re(i._path)===null?rV("child","path",e):UC("child","path",e),new xr(i._repo,bt(i._path,e))}function MV(i){return i=dt(i),new OV(i._repo,i._path)}function YC(i,e){i=dt(i),Vu("set",i._path),Xg("set",e,i._path);const t=new ms;return pV(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}class ky{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new IV("value",this,new Jf(e.snapshotNode,new xr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new NV(this,e,t):null}matches(e){return e instanceof ky?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xV(i,e,t,s,a){const l=new DV(t,void 0),c=new ky(l);return EV(i._repo,i,c),()=>TV(i._repo,i,c)}function KC(i,e,t,s){return xV(i,"value",e)}IP(xr);kP(xr);/**
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
 */const kV="FIREBASE_DATABASE_EMULATOR_HOST",$g={};let PV=!1;function VV(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Dr(l);i.repoInfo_=new Zb(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function LV(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Cs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sn("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=fA(l,a),d=c.repoInfo,p;typeof process<"u"&&OS&&(p=OS[kV]),p?(l=`http://${p}?ns=${d.namespace}`,c=fA(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Gx(i.name,i.options,e);aV("Invalid Firebase Database URL",c),De(c.path)||Cs("Database URL must point to the root of a Firebase Database (not including a child path).");const v=zV(d,i,g,new Hx(i,t));return new BV(v,i)}function UV(i,e){const t=$g[e];(!t||t[i.key]!==i)&&Cs(`Database ${e}(${i.repoInfo_}) has already been deleted.`),SV(i),delete t[i.key]}function zV(i,e,t,s){let a=$g[e.name];a||(a={},$g[e.name]=a);let l=a[i.toURLString()];return l&&Cs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new hV(i,PV,t,s),a[i.toURLString()]=l,l}class BV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xr(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cs("Cannot call "+e+" on a deleted database.")}}function qV(i=r_(),e){const t=rd(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=vA("database");s&&FV(t,...s)}return t}function FV(i,e,t,s={}){i=dt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&vr(s,l.repoInfo_.emulatorOptions))return;Cs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new _f(_f.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:SA(s.mockUserToken,i.app.options.projectId);c=new _f(d)}Dr(e)&&(t_(e),n_("Database",!0)),VV(l,a,s,c)}/**
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
 */function jV(i){Ix(Pa),Ca(new Er("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return LV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Mi(MS,xS,i),Mi(MS,xS,"esm2020")}Ts.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Ts.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};jV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GV=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),dA=i=>{const e=GV(i);return e.charAt(0).toUpperCase()+e.slice(1)},XC=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),QV=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=it.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>it.createElement("svg",{ref:p,...YV,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:XC("lucide",a),...!l&&!QV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>it.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=(i,e)=>{const t=it.forwardRef(({className:s,...a},l)=>it.createElement(KV,{ref:l,iconNode:e,className:XC(`lucide-${HV(dA(i))}`,`lucide-${i}`,s),...a}));return t.displayName=dA(i),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],WV=Ds("arrow-left",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ZV=Ds("bell",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],e4=Ds("check",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],n4=Ds("log-out",t4);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],s4=Ds("message-square",i4);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],a4=Ds("send",r4);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],l4=Ds("user-plus",o4);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],c4=Ds("users",u4);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f4=Ds("x",h4),d4={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Py=RA(d4),Zg=m2(Py),Rn=dx(Py),td=qV(Py),m4=i=>{it.useEffect(()=>{if(!i)return;const e=ed(td,"/status/"+i.uid),t=Da(Rn,"/users/"+i.uid),s={state:"offline",last_changed:hr()},a={state:"online",last_changed:hr()},l=ed(td,".info/connected"),c=KC(l,d=>{if(d.val()===!1){nl(t,{state:"offline",last_changed:hr()});return}MV(e).set(s).then(()=>{YC(e,a),nl(t,{state:"online",last_changed:hr()})})});return()=>c()},[i])},p4=i=>{const[e,t]=it.useState(null);return it.useEffect(()=>{if(!i){t(null);return}const s=Sc(Da(Rn,"users",i),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=ed(td,"/status/"+i),l=KC(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[i]),e},g4=()=>ee.jsx("div",{className:"flex justify-center items-center h-full bg-gray-900",children:ee.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}),_4=()=>{const i=async()=>{const e=new ps;try{const s=(await AD(Zg,e)).user,a=Da(Rn,"users",s.uid);(await Pb(a)).exists()||await Rx(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return ee.jsxs("div",{className:"flex flex-col items-center justify-center h-full bg-gray-800 p-4 text-white",children:[ee.jsx(s4,{size:80,className:"text-blue-400 mb-6"}),ee.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Chat Nível WhatsApp"}),ee.jsx("p",{className:"text-gray-300 mb-8",children:"Faça login para entrar no universo das conversas."}),ee.jsxs("button",{onClick:i,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors",children:[ee.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})},y4=({currentUser:i})=>{const[e,t]=it.useState(""),[s,a]=it.useState([]),[l,c]=it.useState({}),d=async g=>{if(g.preventDefault(),e.trim()==="")return;const v=tl(_r(Rn,"users"),Es("email","==",e.trim()),Es("uid","!=",i.uid),wx(1)),A=(await DS(v)).docs.map(O=>O.data())[0];if(A){a([A]);const O=tl(_r(Rn,"friendships"),Es("users","array-contains",i.uid)),Z=(await DS(O)).docs.find(W=>W.data().users.includes(A.uid));c(Z?{[A.uid]:Z.data().status}:{[A.uid]:"not_friends"})}else a([])},p=async g=>{await Vb(_r(Rn,"friendships"),{users:[i.uid,g.uid],status:"pending",requestedBy:i.uid,createdAt:hr()}),c({...l,[g.uid]:"pending"})};return ee.jsxs("div",{className:"p-4",children:[ee.jsx("h3",{className:"text-lg font-bold mb-2 text-white",children:"Adicionar Contato"}),ee.jsxs("form",{onSubmit:d,className:"flex gap-2",children:[ee.jsx("input",{type:"email",value:e,onChange:g=>t(g.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"}),ee.jsx("button",{type:"submit",className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700",children:"Buscar"})]}),ee.jsx("div",{className:"mt-4",children:s.map(g=>ee.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg",children:[ee.jsxs("div",{className:"flex items-center gap-3",children:[ee.jsx("img",{src:g.photoURL,alt:g.displayName,className:"w-10 h-10 rounded-full"}),ee.jsx("span",{className:"text-white",children:g.displayName})]}),l[g.uid]==="not_friends"&&ee.jsx("button",{onClick:()=>p(g),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700",children:"Adicionar"}),l[g.uid]==="pending"&&ee.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[g.uid]==="accepted"&&ee.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"})]},g.uid))})]})},v4=({currentUser:i})=>{const[e,t]=it.useState([]);it.useEffect(()=>{const a=tl(_r(Rn,"friendships"),Es("users","array-contains",i.uid),Es("status","==","pending")),l=Sc(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==i.uid){const v=g.users.find(A=>A!==i.uid),T=await Pb(Da(Rn,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[i.uid]);const s=async(a,l)=>{const c=Da(Rn,"friendships",a);l?await nl(c,{status:"accepted"}):await nl(c,{status:"declined"})};return ee.jsxs("div",{className:"p-4",children:[ee.jsx("h3",{className:"text-lg font-bold mb-2 text-white",children:"Pedidos de Amizade"}),e.length===0?ee.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):ee.jsx("ul",{className:"space-y-2",children:e.map(a=>ee.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg",children:[ee.jsxs("div",{className:"flex items-center gap-3",children:[ee.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),ee.jsx("span",{className:"text-white",children:a.displayName})]}),ee.jsxs("div",{className:"flex gap-2",children:[ee.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700",children:ee.jsx(e4,{size:16})}),ee.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700",children:ee.jsx(f4,{size:16})})]})]},a.id))})]})},E4=({currentUser:i,onSelectUser:e})=>{const[t,s]=it.useState([]);return it.useEffect(()=>{const a=tl(_r(Rn,"friendships"),Es("users","array-contains",i.uid),Es("status","==","accepted")),l=Sc(a,c=>{const d=c.docs.map(p=>p.data().users.find(g=>g!==i.uid));s(d)});return()=>l()},[i.uid]),ee.jsx("div",{className:"flex-grow overflow-y-auto",children:t.length===0?ee.jsx("p",{className:"text-gray-400 text-center p-8",children:"Adicione contatos para começar a conversar."}):ee.jsx("ul",{className:"divide-y divide-gray-700",children:t.map(a=>ee.jsx(T4,{friendId:a,currentUser:i,onSelectUser:e},a))})})},T4=({friendId:i,currentUser:e,onSelectUser:t})=>{const s=p4(i),[a,l]=it.useState(0);if(it.useEffect(()=>{if(!i||!e)return;const d=[e.uid,i].sort().join("_"),p=tl(_r(Rn,`conversations/${d}/messages`),Es("receiverId","==",e.uid),Es("isRead","==",!1)),g=Sc(p,v=>{l(v.size)});return()=>g()},[i,e]),!s||!s.uid)return null;const c=d=>d&&typeof d.seconds=="number"?`Visto por último: ${new Date(d.seconds*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Offline";return ee.jsxs("li",{onClick:()=>t(s),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700 transition-colors",children:[ee.jsxs("div",{className:"flex items-center gap-4 relative",children:[ee.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),s.presence==="online"&&ee.jsx("div",{className:"absolute left-9 top-9 w-3.5 h-3.5 bg-green-500 border-2 border-gray-800 rounded-full"}),ee.jsxs("div",{children:[ee.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName}),ee.jsx("p",{className:"text-sm text-gray-400",children:s.presence==="online"?"Online":c(s.last_changed)})]})]}),a>0&&ee.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:a})]})},S4=({currentUser:i,otherUser:e,onLeave:t})=>{const[s,a]=it.useState([]),[l,c]=it.useState(""),d=it.useRef(null),p=[i.uid,e.uid].sort().join("_");it.useEffect(()=>{const v=`conversations/${p}/messages`,T=tl(_r(Rn,v),Ax("createdAt","asc")),A=Sc(T,O=>{a(O.docs.map(B=>({id:B.id,...B.data()}))),O.docs.forEach(B=>{B.data().receiverId===i.uid&&!B.data().isRead&&nl(B.ref,{isRead:!0})})});return()=>A()},[p,i.uid]),it.useEffect(()=>{d.current?.scrollIntoView({behavior:"smooth"})},[s]);const g=async v=>{if(v.preventDefault(),l.trim()==="")return;const T=`conversations/${p}/messages`;await Vb(_r(Rn,T),{text:l,createdAt:hr(),senderId:i.uid,receiverId:e.uid,isRead:!1}),c("")};return ee.jsxs("div",{className:"flex flex-col h-full bg-gray-800",children:[ee.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[ee.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full",children:ee.jsx(WV,{size:24})}),ee.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),ee.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName})]}),ee.jsxs("main",{className:"flex-grow p-4 overflow-y-auto",children:[ee.jsx("div",{className:"space-y-4",children:s.map(v=>{const T=v.senderId===i.uid;return ee.jsx("div",{className:`flex ${T?"justify-end":"justify-start"}`,children:ee.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${T?"bg-blue-600 text-white":"bg-gray-700 text-white"}`,children:[ee.jsx("p",{children:v.text}),ee.jsx("p",{className:"text-xs text-right mt-1 opacity-60",children:v.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},v.id)})}),ee.jsx("div",{ref:d})]}),ee.jsx("footer",{className:"p-4 bg-gray-900",children:ee.jsxs("form",{onSubmit:g,className:"flex items-center gap-2",children:[ee.jsx("input",{type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"}),ee.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors",children:ee.jsx(a4,{size:20})})]})})]})},A4=({children:i,onLogout:e,user:t})=>{const[s,a]=it.useState("contacts");return ee.jsxs("div",{className:"flex h-full",children:[ee.jsxs("nav",{className:"w-20 bg-gray-900 flex flex-col items-center py-4 gap-6",children:[ee.jsx("img",{src:t.photoURL,alt:t.displayName,className:"w-12 h-12 rounded-full"}),ee.jsx("button",{onClick:()=>a("contacts"),className:`p-3 rounded-lg ${s==="contacts"?"bg-blue-600":"hover:bg-gray-700"}`,children:ee.jsx(c4,{size:24,color:"white"})}),ee.jsx("button",{onClick:()=>a("add"),className:`p-3 rounded-lg ${s==="add"?"bg-blue-600":"hover:bg-gray-700"}`,children:ee.jsx(l4,{size:24,color:"white"})}),ee.jsx("button",{onClick:()=>a("requests"),className:`p-3 rounded-lg ${s==="requests"?"bg-blue-600":"hover:bg-gray-700"}`,children:ee.jsx(ZV,{size:24,color:"white"})}),ee.jsx("button",{onClick:e,className:"p-3 mt-auto rounded-lg hover:bg-red-700",children:ee.jsx(n4,{size:24,color:"white"})})]}),ee.jsxs("div",{className:"flex-grow bg-gray-800",children:[s==="contacts"&&i[0],s==="add"&&ee.jsx(y4,{currentUser:t}),s==="requests"&&ee.jsx(v4,{currentUser:t})]})]})};function w4(){const[i,e]=it.useState(null),[t,s]=it.useState(!0),[a,l]=it.useState(null);m4(i),it.useEffect(()=>{const d=nD(Zg,p=>{e(p),s(!1)});return()=>d()},[]);const c=async()=>{const d=ed(td,"/status/"+i.uid);await YC(d,{state:"offline",last_changed:hr()}),await nl(Da(Rn,"/users/"+i.uid),{state:"offline",last_changed:hr()}),await iD(Zg),l(null)};return t?ee.jsx(g4,{}):i?a?ee.jsx(S4,{currentUser:i,otherUser:a,onLeave:()=>l(null)}):ee.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen",children:ee.jsx(A4,{onLogout:c,user:i,children:ee.jsx(E4,{currentUser:i,onSelectUser:l})})}):ee.jsx(_4,{})}N1.createRoot(document.getElementById("root")).render(ee.jsx(it.StrictMode,{children:ee.jsx(w4,{})}));
