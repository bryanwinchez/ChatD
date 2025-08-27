(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var jp={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT;function O1(){if(YT)return wu;YT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return wu.Fragment=e,wu.jsx=t,wu.jsxs=t,wu}var KT;function x1(){return KT||(KT=1,jp.exports=O1()),jp.exports}var H=x1(),Fp={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT;function M1(){if(XT)return be;XT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function A(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function W(N,J,se){this.props=N,this.context=J,this.refs=Y,this.updater=se||O}W.prototype.isReactComponent={},W.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},W.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function me(){}me.prototype=W.prototype;function le(N,J,se){this.props=N,this.context=J,this.refs=Y,this.updater=se||O}var ue=le.prototype=new me;ue.constructor=le,q(ue,W.prototype),ue.isPureReactComponent=!0;var je=Array.isArray,Te={H:null,A:null,T:null,S:null,V:null},Fe=Object.prototype.hasOwnProperty;function k(N,J,se,ee,de,Ie){return se=Ie.ref,{$$typeof:n,type:N,key:J,ref:se!==void 0?se:null,props:Ie}}function b(N,J){return k(N.type,J,void 0,void 0,void 0,N.props)}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function x(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return J[se]})}var M=/\/+/g;function V(N,J){return typeof N=="object"&&N!==null&&N.key!=null?x(""+N.key):J.toString(36)}function R(){}function $t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function gt(N,J,se,ee,de){var Ie=typeof N;(Ie==="undefined"||Ie==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case n:case e:Se=!0;break;case v:return Se=N._init,gt(Se(N._payload),J,se,ee,de)}}if(Se)return de=de(N),Se=ee===""?"."+V(N,0):ee,je(de)?(se="",Se!=null&&(se=Se.replace(M,"$&/")+"/"),gt(de,J,se,"",function(mi){return mi})):de!=null&&(I(de)&&(de=b(de,se+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(M,"$&/")+"/")+Se)),J.push(de)),1;Se=0;var Bt=ee===""?".":ee+":";if(je(N))for(var at=0;at<N.length;at++)ee=N[at],Ie=Bt+V(ee,at),Se+=gt(ee,J,se,Ie,de);else if(at=A(N),typeof at=="function")for(N=at.call(N),at=0;!(ee=N.next()).done;)ee=ee.value,Ie=Bt+V(ee,at++),Se+=gt(ee,J,se,Ie,de);else if(Ie==="object"){if(typeof N.then=="function")return gt($t(N),J,se,ee,de);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(N,J,se){if(N==null)return N;var ee=[],de=0;return gt(N,ee,"","",function(Ie){return J.call(se,Ie,de++)}),ee}function ie(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var he=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Ge(){}return be.Children={map:G,forEach:function(N,J,se){G(N,function(){J.apply(this,arguments)},se)},count:function(N){var J=0;return G(N,function(){J++}),J},toArray:function(N){return G(N,function(J){return J})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},be.Component=W,be.Fragment=t,be.Profiler=a,be.PureComponent=le,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te,be.__COMPILER_RUNTIME={__proto__:null,c:function(N){return Te.H.useMemoCache(N)}},be.cache=function(N){return function(){return N.apply(null,arguments)}},be.cloneElement=function(N,J,se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ee=q({},N.props),de=N.key,Ie=void 0;if(J!=null)for(Se in J.ref!==void 0&&(Ie=void 0),J.key!==void 0&&(de=""+J.key),J)!Fe.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(ee[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)ee.children=se;else if(1<Se){for(var Bt=Array(Se),at=0;at<Se;at++)Bt[at]=arguments[at+2];ee.children=Bt}return k(N.type,de,void 0,void 0,Ie,ee)},be.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},be.createElement=function(N,J,se){var ee,de={},Ie=null;if(J!=null)for(ee in J.key!==void 0&&(Ie=""+J.key),J)Fe.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(de[ee]=J[ee]);var Se=arguments.length-2;if(Se===1)de.children=se;else if(1<Se){for(var Bt=Array(Se),at=0;at<Se;at++)Bt[at]=arguments[at+2];de.children=Bt}if(N&&N.defaultProps)for(ee in Se=N.defaultProps,Se)de[ee]===void 0&&(de[ee]=Se[ee]);return k(N,Ie,void 0,void 0,null,de)},be.createRef=function(){return{current:null}},be.forwardRef=function(N){return{$$typeof:d,render:N}},be.isValidElement=I,be.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ie}},be.memo=function(N,J){return{$$typeof:g,type:N,compare:J===void 0?null:J}},be.startTransition=function(N){var J=Te.T,se={};Te.T=se;try{var ee=N(),de=Te.S;de!==null&&de(se,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ge,he)}catch(Ie){he(Ie)}finally{Te.T=J}},be.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()},be.use=function(N){return Te.H.use(N)},be.useActionState=function(N,J,se){return Te.H.useActionState(N,J,se)},be.useCallback=function(N,J){return Te.H.useCallback(N,J)},be.useContext=function(N){return Te.H.useContext(N)},be.useDebugValue=function(){},be.useDeferredValue=function(N,J){return Te.H.useDeferredValue(N,J)},be.useEffect=function(N,J,se){var ee=Te.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(N,J)},be.useId=function(){return Te.H.useId()},be.useImperativeHandle=function(N,J,se){return Te.H.useImperativeHandle(N,J,se)},be.useInsertionEffect=function(N,J){return Te.H.useInsertionEffect(N,J)},be.useLayoutEffect=function(N,J){return Te.H.useLayoutEffect(N,J)},be.useMemo=function(N,J){return Te.H.useMemo(N,J)},be.useOptimistic=function(N,J){return Te.H.useOptimistic(N,J)},be.useReducer=function(N,J,se){return Te.H.useReducer(N,J,se)},be.useRef=function(N){return Te.H.useRef(N)},be.useState=function(N){return Te.H.useState(N)},be.useSyncExternalStore=function(N,J,se){return Te.H.useSyncExternalStore(N,J,se)},be.useTransition=function(){return Te.H.useTransition()},be.version="19.1.1",be}var WT;function e_(){return WT||(WT=1,Fp.exports=M1()),Fp.exports}var Be=e_(),Hp={exports:{}},bu={},Gp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T;function k1(){return $T||($T=1,(function(n){function e(G,ie){var he=G.length;G.push(ie);e:for(;0<he;){var Ge=he-1>>>1,N=G[Ge];if(0<a(N,ie))G[Ge]=ie,G[he]=N,he=Ge;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ie=G[0],he=G.pop();if(he!==ie){G[0]=he;e:for(var Ge=0,N=G.length,J=N>>>1;Ge<J;){var se=2*(Ge+1)-1,ee=G[se],de=se+1,Ie=G[de];if(0>a(ee,he))de<N&&0>a(Ie,ee)?(G[Ge]=Ie,G[de]=he,Ge=de):(G[Ge]=ee,G[se]=he,Ge=se);else if(de<N&&0>a(Ie,he))G[Ge]=Ie,G[de]=he,Ge=de;else break e}}return ie}function a(G,ie){var he=G.sortIndex-ie.sortIndex;return he!==0?he:G.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,A=3,O=!1,q=!1,Y=!1,W=!1,me=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function je(G){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=G)s(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(g)}}function Te(G){if(Y=!1,je(G),!q)if(t(p)!==null)q=!0,Fe||(Fe=!0,V());else{var ie=t(g);ie!==null&&gt(Te,ie.startTime-G)}}var Fe=!1,k=-1,b=5,I=-1;function x(){return W?!0:!(n.unstable_now()-I<b)}function M(){if(W=!1,Fe){var G=n.unstable_now();I=G;var ie=!0;try{e:{q=!1,Y&&(Y=!1,le(k),k=-1),O=!0;var he=A;try{t:{for(je(G),T=t(p);T!==null&&!(T.expirationTime>G&&x());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,A=T.priorityLevel;var N=Ge(T.expirationTime<=G);if(G=n.unstable_now(),typeof N=="function"){T.callback=N,je(G),ie=!0;break t}T===t(p)&&s(p),je(G)}else s(p);T=t(p)}if(T!==null)ie=!0;else{var J=t(g);J!==null&&gt(Te,J.startTime-G),ie=!1}}break e}finally{T=null,A=he,O=!1}ie=void 0}}finally{ie?V():Fe=!1}}}var V;if(typeof ue=="function")V=function(){ue(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,$t=R.port2;R.port1.onmessage=M,V=function(){$t.postMessage(null)}}else V=function(){me(M,0)};function gt(G,ie){k=me(function(){G(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(G){switch(A){case 1:case 2:case 3:var ie=3;break;default:ie=A}var he=A;A=ie;try{return G()}finally{A=he}},n.unstable_requestPaint=function(){W=!0},n.unstable_runWithPriority=function(G,ie){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var he=A;A=G;try{return ie()}finally{A=he}},n.unstable_scheduleCallback=function(G,ie,he){var Ge=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?Ge+he:Ge):he=Ge,G){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=he+N,G={id:v++,callback:ie,priorityLevel:G,startTime:he,expirationTime:N,sortIndex:-1},he>Ge?(G.sortIndex=he,e(g,G),t(p)===null&&G===t(g)&&(Y?(le(k),k=-1):Y=!0,gt(Te,he-Ge))):(G.sortIndex=N,e(p,G),q||O||(q=!0,Fe||(Fe=!0,V()))),G},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(G){var ie=A;return function(){var he=A;A=ie;try{return G.apply(this,arguments)}finally{A=he}}}})(Qp)),Qp}var ZT;function P1(){return ZT||(ZT=1,Gp.exports=k1()),Gp.exports}var Yp={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT;function V1(){if(JT)return un;JT=1;var n=e_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},un.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},un.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},un.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},un.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:O}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:A,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},un.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},un.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},un.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},un.requestFormReset=function(p){s.d.r(p)},un.unstable_batchedUpdates=function(p,g){return p(g)},un.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},un.useFormStatus=function(){return c.H.useHostTransitionStatus()},un.version="19.1.1",un}var e0;function L1(){if(e0)return Yp.exports;e0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yp.exports=V1(),Yp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function U1(){if(t0)return bu;t0=1;var n=P1(),e=e_(),t=L1();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=M&&i[M]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function $t(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case q:return"Fragment";case W:return"Profiler";case Y:return"StrictMode";case Te:return"Suspense";case Fe:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case O:return"Portal";case ue:return(i.displayName||"Context")+".Provider";case le:return(i._context.displayName||"Context")+".Consumer";case je:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:$t(i.type)||"Memo";case b:r=i._payload,i=i._init;try{return $t(i(r))}catch{}}return null}var gt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},Ge=[],N=-1;function J(i){return{current:i}}function se(i){0>N||(i.current=Ge[N],Ge[N]=null,N--)}function ee(i,r){N++,Ge[N]=i.current,i.current=r}var de=J(null),Ie=J(null),Se=J(null),Bt=J(null);function at(i,r){switch(ee(Se,r),ee(Ie,i),ee(de,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?TT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=TT(r),i=ST(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}se(de),ee(de,i)}function mi(){se(de),se(Ie),se(Se)}function Ds(i){i.memoizedState!==null&&ee(Bt,i);var r=de.current,o=ST(r,i.type);r!==o&&(ee(Ie,i),ee(de,o))}function ji(i){Ie.current===i&&(se(de),se(Ie)),Bt.current===i&&(se(Bt),vu._currentValue=he)}var kr=Object.prototype.hasOwnProperty,Pr=n.unstable_scheduleCallback,Vr=n.unstable_cancelCallback,gl=n.unstable_shouldYield,Nc=n.unstable_requestPaint,qn=n.unstable_now,jd=n.unstable_getCurrentPriorityLevel,_l=n.unstable_ImmediatePriority,qa=n.unstable_UserBlockingPriority,Lr=n.unstable_NormalPriority,Fd=n.unstable_LowPriority,Ba=n.unstable_IdlePriority,yl=n.log,Dc=n.unstable_setDisableYieldValue,_t=null,We=null;function In(i){if(typeof yl=="function"&&Dc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(_t,i)}catch{}}var on=Math.clz32?Math.clz32:Ur,Oc=Math.log,Hd=Math.LN2;function Ur(i){return i>>>=0,i===0?32:31-(Oc(i)/Hd|0)|0}var zr=256,qr=4194304;function ti(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ja(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ti(u):(E&=S,E!==0?f=ti(E):o||(o=S&~i,o!==0&&(f=ti(o))))):(S=u&~m,S!==0?f=ti(S):E!==0?f=ti(E):o||(o=u&~i,o!==0&&(f=ti(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Br(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function vl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(){var i=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),i}function Tl(){var i=qr;return qr<<=1,(qr&62914560)===0&&(qr=4194304),i}function Fi(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Hi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Sl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,C=i.expirationTimes,z=i.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-on(o),$=1<<Q;S[Q]=0,C[Q]=-1;var B=z[Q];if(B!==null)for(z[Q]=null,Q=0;Q<B.length;Q++){var j=B[Q];j!==null&&(j.lane&=-536870913)}o&=~$}u!==0&&pi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function pi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-on(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Al(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-on(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Os(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Fa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function xs(){var i=ie.p;return i!==0?i:(i=window.event,i===void 0?32:BT(i.type))}function xc(i,r){var o=ie.p;try{return ie.p=i,r()}finally{ie.p=o}}var ht=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ht,Ct="__reactProps$"+ht,Bn="__reactContainer$"+ht,wl="__reactEvents$"+ht,Gd="__reactListeners$"+ht,Ms="__reactHandles$"+ht,Mc="__reactResources$"+ht,jr="__reactMarker$"+ht;function ks(i){delete i[Pt],delete i[Ct],delete i[wl],delete i[Gd],delete i[Ms]}function Gi(i){var r=i[Pt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Bn]||o[Pt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=CT(i);i!==null;){if(o=i[Pt])return o;i=CT(i)}return r}i=o,o=i.parentNode}return null}function gi(i){if(i=i[Pt]||i[Bn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function _i(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function pn(i){var r=i[Mc];return r||(r=i[Mc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Tt(i){i[jr]=!0}var bl=new Set,Ha={};function ni(i,r){Qi(i,r),Qi(i+"Capture",r)}function Qi(i,r){for(Ha[i]=r,i=0;i<r.length;i++)bl.add(r[i])}var kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},Fr={};function Vc(i){return kr.call(Fr,i)?!0:kr.call(Pc,i)?!1:kc.test(i)?Fr[i]=!0:(Pc[i]=!0,!1)}function Ps(i,r,o){if(Vc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function yi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Zt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Hr,Lc;function Yi(i){if(Hr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Hr=r&&r[1]||"",Lc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hr+i+Lc}var Ga=!1;function Qa(i,r){if(!i||Ga)return"";Ga=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(j){var B=j}Reflect.construct(i,[],$)}else{try{$.call()}catch(j){B=j}i.call($.prototype)}}else{try{throw Error()}catch(j){B=j}($=i())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(j){if(j&&B&&typeof j.stack=="string")return[j.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var C=E.split(`
`),z=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===z.length)for(u=C.length-1,f=z.length-1;1<=u&&0<=f&&C[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==z[f]){var Q=`
`+C[u].replace(" at new "," at ");return i.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",i.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Ga=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Yi(o):""}function Cl(i){switch(i.tag){case 26:case 27:case 5:return Yi(i.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 15:return Qa(i.type,!1);case 11:return Qa(i.type.render,!1);case 1:return Qa(i.type,!0);case 31:return Yi("Activity");default:return""}}function Ya(i){try{var r="";do r+=Cl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function gn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Rl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qd(i){var r=Rl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Ka(i){i._valueTracker||(i._valueTracker=Qd(i))}function Il(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Rl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Gr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Yd=/[\n"\\]/g;function Rt(i){return i.replace(Yd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Nn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+gn(r)):i.value!==""+gn(r)&&(i.value=""+gn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Vs(i,E,gn(r)):o!=null?Vs(i,E,gn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+gn(S):i.removeAttribute("name")}function Qr(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+gn(o):"",r=r!=null?""+gn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Vs(i,r,o){r==="number"&&Gr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Ki(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+gn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function et(i,r,o){if(r!=null&&(r=""+gn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+gn(o):""}function Yr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(gt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=gn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function jn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Kr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Kr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Nl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Uc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Uc(i,m,r[m])}function Dl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xa(i){return Xd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Xi=null;function Fn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Wi=null,$i=null;function Ol(i){var r=gi(i);if(r&&(i=r.stateNode)){var o=i[Ct]||null;e:switch(i=r.stateNode,r.type){case"input":if(Nn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ct]||null;if(!f)throw Error(s(90));Nn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Il(u)}break e;case"textarea":et(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ki(i,!!o.multiple,r,!1)}}}var vi=!1;function zc(i,r,o){if(vi)return i(r,o);vi=!0;try{var u=i(r);return u}finally{if(vi=!1,(Wi!==null||$i!==null)&&(xh(),Wi&&(r=Wi,i=$i,$i=Wi=null,Ol(r),i)))for(r=0;r<i.length;r++)Ol(i[r])}}function Xr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hn=!1;if(ii)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Hn=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Hn=!1}var Ei=null,Ls=null,Zi=null;function xl(){if(Zi)return Zi;var i,r=Ls,o=r.length,u,f="value"in Ei?Ei.value:Ei.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return Zi=f.slice(i,1<u?1-u:void 0)}function Ti(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Si(){return!0}function Ml(){return!1}function jt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Si:Ml,this.isPropagationStopped=Ml,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=jt(Ke),$r=v({},Ke,{view:0,detail:0}),qc=jt($r),$a,Za,Ai,Zr=v({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ai&&(Ai&&i.type==="mousemove"?($a=i.screenX-Ai.screenX,Za=i.screenY-Ai.screenY):Za=$a=0,Ai=i),$a)},movementY:function(i){return"movementY"in i?i.movementY:Za}}),Gn=jt(Zr),Bc=v({},Zr,{dataTransfer:0}),Wd=jt(Bc),Jr=v({},$r,{relatedTarget:0}),Ja=jt(Jr),kl=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),eo=jt(kl),jc=v({},Ke,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),to=jt(jc),$d=v({},Ke,{data:0}),Pl=jt($d),ea={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Hc[i])?!!r[i]:!1}function ta(){return Vl}var Gc=v({},$r,{key:function(i){if(i.key){var r=ea[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ti(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Fc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(i){return i.type==="keypress"?Ti(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ti(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),no=jt(Gc),Qc=v({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ll=jt(Qc),Ji=v({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Yc=jt(Ji),Kc=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xc=jt(Kc),Wc=v({},Zr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),io=jt(Wc),_n=v({},Ke,{newState:0,oldState:0}),$c=jt(_n),Zc=[9,13,27,32],wi=ii&&"CompositionEvent"in window,h=null;ii&&"documentMode"in document&&(h=document.documentMode);var _=ii&&"TextEvent"in window&&!h,y=ii&&(!wi||h&&8<h&&11>=h),w=" ",L=!1;function F(i,r){switch(i){case"keyup":return Zc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Le=!1;function Vt(i,r){switch(i){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(L=!0,w);case"textInput":return i=r.data,i===w&&L?null:i;default:return null}}function Ue(i,r){if(Le)return i==="compositionend"||!wi&&F(i,r)?(i=xl(),Zi=Ls=Ei=null,Le=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Ft={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Ft[i.type]:r==="textarea"}function es(i,r,o,u){Wi?$i?$i.push(u):$i=[u]:Wi=u,r=Uh(r,"onChange"),0<r.length&&(o=new Wa("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Jt=null,bi=null;function Ul(i){gT(i,0)}function Jc(i){var r=_i(i);if(Il(r))return i}function Ly(i,r){if(i==="change")return r}var Uy=!1;if(ii){var Zd;if(ii){var Jd="oninput"in document;if(!Jd){var zy=document.createElement("div");zy.setAttribute("oninput","return;"),Jd=typeof zy.oninput=="function"}Zd=Jd}else Zd=!1;Uy=Zd&&(!document.documentMode||9<document.documentMode)}function qy(){Jt&&(Jt.detachEvent("onpropertychange",By),bi=Jt=null)}function By(i){if(i.propertyName==="value"&&Jc(bi)){var r=[];es(r,bi,i,Fn(i)),zc(Ul,r)}}function oR(i,r,o){i==="focusin"?(qy(),Jt=r,bi=o,Jt.attachEvent("onpropertychange",By)):i==="focusout"&&qy()}function lR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Jc(bi)}function uR(i,r){if(i==="click")return Jc(r)}function cR(i,r){if(i==="input"||i==="change")return Jc(r)}function hR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Dn=typeof Object.is=="function"?Object.is:hR;function zl(i,r){if(Dn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!kr.call(r,f)||!Dn(i[f],r[f]))return!1}return!0}function jy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Fy(i,r){var o=jy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jy(o)}}function Hy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Hy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Gy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Gr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Gr(i.document)}return r}function em(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var fR=ii&&"documentMode"in document&&11>=document.documentMode,so=null,tm=null,ql=null,nm=!1;function Qy(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nm||so==null||so!==Gr(u)||(u=so,"selectionStart"in u&&em(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ql&&zl(ql,u)||(ql=u,u=Uh(tm,"onSelect"),0<u.length&&(r=new Wa("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=so)))}function na(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var ro={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},im={},Yy={};ii&&(Yy=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function ia(i){if(im[i])return im[i];if(!ro[i])return i;var r=ro[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Yy)return im[i]=r[o];return i}var Ky=ia("animationend"),Xy=ia("animationiteration"),Wy=ia("animationstart"),dR=ia("transitionrun"),mR=ia("transitionstart"),pR=ia("transitioncancel"),$y=ia("transitionend"),Zy=new Map,sm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sm.push("scrollEnd");function si(i,r){Zy.set(i,r),ni(r,[i])}var Jy=new WeakMap;function Qn(i,r){if(typeof i=="object"&&i!==null){var o=Jy.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ya(r)},Jy.set(i,r),r)}return{value:i,source:r,stack:Ya(r)}}var Yn=[],ao=0,rm=0;function eh(){for(var i=ao,r=rm=ao=0;r<i;){var o=Yn[r];Yn[r++]=null;var u=Yn[r];Yn[r++]=null;var f=Yn[r];Yn[r++]=null;var m=Yn[r];if(Yn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&ev(o,f,m)}}function th(i,r,o,u){Yn[ao++]=i,Yn[ao++]=r,Yn[ao++]=o,Yn[ao++]=u,rm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function am(i,r,o,u){return th(i,r,o,u),nh(i)}function oo(i,r){return th(i,null,null,r),nh(i)}function ev(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-on(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function nh(i){if(50<hu)throw hu=0,fp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var lo={};function gR(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(i,r,o,u){return new gR(i,r,o,u)}function om(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ts(i,r){var o=i.alternate;return o===null?(o=On(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function tv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function ih(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")om(i)&&(E=1);else if(typeof i=="string")E=y1(i,o,de.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=On(31,o,r,f),i.elementType=I,i.lanes=m,i;case q:return sa(o.children,f,m,r);case Y:E=8,f|=24;break;case W:return i=On(12,o,r,f|2),i.elementType=W,i.lanes=m,i;case Te:return i=On(13,o,r,f),i.elementType=Te,i.lanes=m,i;case Fe:return i=On(19,o,r,f),i.elementType=Fe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case me:case ue:E=10;break e;case le:E=9;break e;case je:E=11;break e;case k:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=On(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function sa(i,r,o,u){return i=On(7,i,u,r),i.lanes=o,i}function lm(i,r,o){return i=On(6,i,null,r),i.lanes=o,i}function um(i,r,o){return r=On(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var uo=[],co=0,sh=null,rh=0,Kn=[],Xn=0,ra=null,ns=1,is="";function aa(i,r){uo[co++]=rh,uo[co++]=sh,sh=i,rh=r}function nv(i,r,o){Kn[Xn++]=ns,Kn[Xn++]=is,Kn[Xn++]=ra,ra=i;var u=ns;i=is;var f=32-on(u)-1;u&=~(1<<f),o+=1;var m=32-on(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ns=1<<32-on(r)+f|o<<f|u,is=m+i}else ns=1<<m|o<<f|u,is=i}function cm(i){i.return!==null&&(aa(i,1),nv(i,1,0))}function hm(i){for(;i===sh;)sh=uo[--co],uo[co]=null,rh=uo[--co],uo[co]=null;for(;i===ra;)ra=Kn[--Xn],Kn[Xn]=null,is=Kn[--Xn],Kn[Xn]=null,ns=Kn[--Xn],Kn[Xn]=null}var yn=null,yt=null,Qe=!1,oa=null,Ci=!1,fm=Error(s(519));function la(i){var r=Error(s(418,""));throw Fl(Qn(r,i)),fm}function iv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Pt]=i,r[Ct]=u,o){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<du.length;o++)Me(du[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),Qr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ka(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Yr(r,u.value,u.defaultValue,u.children),Ka(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||ET(r.textContent,o)?(u.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),u.onScroll!=null&&Me("scroll",r),u.onScrollEnd!=null&&Me("scrollend",r),u.onClick!=null&&(r.onclick=zh),r=!0):r=!1,r||la(i)}function sv(i){for(yn=i.return;yn;)switch(yn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:yn=yn.return}}function Bl(i){if(i!==yn)return!1;if(!Qe)return sv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Ip(i.type,i.memoizedProps)),o=!o),o&&yt&&la(i),sv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){yt=ai(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}yt=null}}else r===27?(r=yt,Js(i.type)?(i=xp,xp=null,yt=i):yt=r):yt=yn?ai(i.stateNode.nextSibling):null;return!0}function jl(){yt=yn=null,Qe=!1}function rv(){var i=oa;return i!==null&&(Tn===null?Tn=i:Tn.push.apply(Tn,i),oa=null),i}function Fl(i){oa===null?oa=[i]:oa.push(i)}var dm=J(null),ua=null,ss=null;function Us(i,r,o){ee(dm,r._currentValue),r._currentValue=o}function rs(i){i._currentValue=dm.current,se(dm)}function mm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function pm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var C=0;C<r.length;C++)if(S.context===r[C]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),mm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),mm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Hl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Dn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Bt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(vu):i=[vu])}f=f.return}i!==null&&pm(r,i,o,u),r.flags|=262144}function ah(i){for(i=i.firstContext;i!==null;){if(!Dn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ca(i){ua=i,ss=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function ln(i){return av(ua,i)}function oh(i,r){return ua===null&&ca(i),av(i,r)}function av(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ss===null){if(i===null)throw Error(s(308));ss=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ss=ss.next=r;return o}var _R=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},yR=n.unstable_scheduleCallback,vR=n.unstable_NormalPriority,Ut={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gm(){return{controller:new _R,data:new Map,refCount:0}}function Gl(i){i.refCount--,i.refCount===0&&yR(vR,function(){i.controller.abort()})}var Ql=null,_m=0,ho=0,fo=null;function ER(i,r){if(Ql===null){var o=Ql=[];_m=0,ho=vp(),fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return _m++,r.then(ov,ov),r}function ov(){if(--_m===0&&Ql!==null){fo!==null&&(fo.status="fulfilled");var i=Ql;Ql=null,ho=0,fo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function TR(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var lv=G.S;G.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&ER(i,r),lv!==null&&lv(i,r)};var ha=J(null);function ym(){var i=ha.current;return i!==null?i:ot.pooledCache}function lh(i,r){r===null?ee(ha,ha.current):ee(ha,r.pool)}function uv(){var i=ym();return i===null?null:{parent:Ut._currentValue,pool:i}}var Yl=Error(s(460)),cv=Error(s(474)),uh=Error(s(542)),vm={then:function(){}};function hv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ch(){}function fv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(ch,ch),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,mv(i),i;default:if(typeof r.status=="string")r.then(ch,ch);else{if(i=ot,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,mv(i),i}throw Kl=r,Yl}}var Kl=null;function dv(){if(Kl===null)throw Error(s(459));var i=Kl;return Kl=null,i}function mv(i){if(i===Yl||i===uh)throw Error(s(483))}var zs=!1;function Em(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function qs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Bs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=nh(i),ev(i,null,o),r}return th(i,u,r,o),nh(i)}function Xl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Al(i,o)}}function Sm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Am=!1;function Wl(){if(Am){var i=fo;if(i!==null)throw i}}function $l(i,r,o,u){Am=!1;var f=i.updateQueue;zs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,z=C.next;C.next=null,E===null?m=z:E.next=z,E=C;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==E&&(S===null?Q.firstBaseUpdate=z:S.next=z,Q.lastBaseUpdate=C))}if(m!==null){var $=f.baseState;E=0,Q=z=C=null,S=m;do{var B=S.lane&-536870913,j=B!==S.lane;if(j?(ze&B)===B:(u&B)===B){B!==0&&B===ho&&(Am=!0),Q!==null&&(Q=Q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ye=i,pe=S;B=r;var it=o;switch(pe.tag){case 1:if(ye=pe.payload,typeof ye=="function"){$=ye.call(it,$,B);break e}$=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=pe.payload,B=typeof ye=="function"?ye.call(it,$,B):ye,B==null)break e;$=v({},$,B);break e;case 2:zs=!0}}B=S.callback,B!==null&&(i.flags|=64,j&&(i.flags|=8192),j=f.callbacks,j===null?f.callbacks=[B]:j.push(B))}else j={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(z=Q=j,C=$):Q=Q.next=j,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;j=S,S=j.next,j.next=null,f.lastBaseUpdate=j,f.shared.pending=null}}while(!0);Q===null&&(C=$),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),Xs|=E,i.lanes=E,i.memoizedState=$}}function pv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function gv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)pv(o[i],r)}var mo=J(null),hh=J(0);function _v(i,r){i=fs,ee(hh,i),ee(mo,r),fs=i|r.baseLanes}function wm(){ee(hh,fs),ee(mo,mo.current)}function bm(){fs=hh.current,se(mo),se(hh)}var js=0,Ce=null,tt=null,It=null,fh=!1,po=!1,fa=!1,dh=0,Zl=0,go=null,SR=0;function St(){throw Error(s(321))}function Cm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Dn(i[o],r[o]))return!1;return!0}function Rm(i,r,o,u,f,m){return js=m,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=i===null||i.memoizedState===null?eE:tE,fa=!1,m=o(u,f),fa=!1,po&&(m=vv(r,o,u,f)),yv(i),m}function yv(i){G.H=vh;var r=tt!==null&&tt.next!==null;if(js=0,It=tt=Ce=null,fh=!1,Zl=0,go=null,r)throw Error(s(300));i===null||Ht||(i=i.dependencies,i!==null&&ah(i)&&(Ht=!0))}function vv(i,r,o,u){Ce=i;var f=0;do{if(po&&(go=null),Zl=0,po=!1,25<=f)throw Error(s(301));if(f+=1,It=tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=NR,m=r(o,u)}while(po);return m}function AR(){var i=G.H,r=i.useState()[0];return r=typeof r.then=="function"?Jl(r):r,i=i.useState()[0],(tt!==null?tt.memoizedState:null)!==i&&(Ce.flags|=1024),r}function Im(){var i=dh!==0;return dh=0,i}function Nm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Dm(i){if(fh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fh=!1}js=0,It=tt=Ce=null,po=!1,Zl=dh=0,go=null}function vn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ce.memoizedState=It=i:It=It.next=i,It}function Nt(){if(tt===null){var i=Ce.alternate;i=i!==null?i.memoizedState:null}else i=tt.next;var r=It===null?Ce.memoizedState:It.next;if(r!==null)It=r,tt=i;else{if(i===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));tt=i,i={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},It===null?Ce.memoizedState=It=i:It=It.next=i}return It}function Om(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(i){var r=Zl;return Zl+=1,go===null&&(go=[]),i=fv(go,i,r),r=Ce,(It===null?r.memoizedState:It.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?eE:tE),i}function mh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Jl(i);if(i.$$typeof===ue)return ln(i)}throw Error(s(438,String(i)))}function xm(i){var r=null,o=Ce.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Om(),Ce.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=x;return r.index++,o}function as(i,r){return typeof r=="function"?r(i):r}function ph(i){var r=Nt();return Mm(r,tt,i)}function Mm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,C=null,z=r,Q=!1;do{var $=z.lane&-536870913;if($!==z.lane?(ze&$)===$:(js&$)===$){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),$===ho&&(Q=!0);else if((js&B)===B){z=z.next,B===ho&&(Q=!0);continue}else $={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=$,E=m):C=C.next=$,Ce.lanes|=B,Xs|=B;$=z.action,fa&&o(m,$),m=z.hasEagerState?z.eagerState:o(m,$)}else B={lane:$,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=B,E=m):C=C.next=B,Ce.lanes|=$,Xs|=$;z=z.next}while(z!==null&&z!==r);if(C===null?E=m:C.next=S,!Dn(m,i.memoizedState)&&(Ht=!0,Q&&(o=fo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function km(i){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Dn(m,r.memoizedState)||(Ht=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Ev(i,r,o){var u=Ce,f=Nt(),m=Qe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Dn((tt||f).memoizedState,o);E&&(f.memoizedState=o,Ht=!0),f=f.queue;var S=Av.bind(null,u,f,i);if(eu(2048,8,S,[i]),f.getSnapshot!==r||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,_o(9,gh(),Sv.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(js&124)!==0||Tv(u,r,o)}return o}function Tv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ce.updateQueue,r===null?(r=Om(),Ce.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Sv(i,r,o,u){r.value=o,r.getSnapshot=u,wv(r)&&bv(i)}function Av(i,r,o){return o(function(){wv(r)&&bv(i)})}function wv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Dn(i,o)}catch{return!0}}function bv(i){var r=oo(i,2);r!==null&&Vn(r,i,2)}function Pm(i){var r=vn();if(typeof i=="function"){var o=i;if(i=o(),fa){In(!0);try{o()}finally{In(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:i},r}function Cv(i,r,o,u){return i.baseState=o,Mm(i,tt,typeof u=="function"?u:as)}function wR(i,r,o,u,f){if(yh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};G.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Rv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Rv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=G.T,E={};G.T=E;try{var S=o(f,u),C=G.S;C!==null&&C(E,S),Iv(i,r,S)}catch(z){Vm(i,r,z)}finally{G.T=m}}else try{m=o(f,u),Iv(i,r,m)}catch(z){Vm(i,r,z)}}function Iv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Nv(i,r,u)},function(u){return Vm(i,r,u)}):Nv(i,r,o)}function Nv(i,r,o){r.status="fulfilled",r.value=o,Dv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Rv(i,o)))}function Vm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Dv(r),r=r.next;while(r!==u)}i.action=null}function Dv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Ov(i,r){return r}function xv(i,r){if(Qe){var o=ot.formState;if(o!==null){e:{var u=Ce;if(Qe){if(yt){t:{for(var f=yt,m=Ci;f.nodeType!==8;){if(!m){f=null;break t}if(f=ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){yt=ai(f.nextSibling),u=f.data==="F!";break e}}la(u)}u=!1}u&&(r=o[0])}}return o=vn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ov,lastRenderedState:r},o.queue=u,o=$v.bind(null,Ce,u),u.dispatch=o,u=Pm(!1),m=Bm.bind(null,Ce,!1,u.queue),u=vn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=wR.bind(null,Ce,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Mv(i){var r=Nt();return kv(r,tt,i)}function kv(i,r,o){if(r=Mm(i,r,Ov)[0],i=ph(as)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Jl(r)}catch(E){throw E===Yl?uh:E}else u=r;r=Nt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ce.flags|=2048,_o(9,gh(),bR.bind(null,f,o),null)),[u,m,i]}function bR(i,r){i.action=r}function Pv(i){var r=Nt(),o=tt;if(o!==null)return kv(r,o,i);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function _o(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=Om(),Ce.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function gh(){return{destroy:void 0,resource:void 0}}function Vv(){return Nt().memoizedState}function _h(i,r,o,u){var f=vn();u=u===void 0?null:u,Ce.flags|=i,f.memoizedState=_o(1|r,gh(),o,u)}function eu(i,r,o,u){var f=Nt();u=u===void 0?null:u;var m=f.memoizedState.inst;tt!==null&&u!==null&&Cm(u,tt.memoizedState.deps)?f.memoizedState=_o(r,m,o,u):(Ce.flags|=i,f.memoizedState=_o(1|r,m,o,u))}function Lv(i,r){_h(8390656,8,i,r)}function Uv(i,r){eu(2048,8,i,r)}function zv(i,r){return eu(4,2,i,r)}function qv(i,r){return eu(4,4,i,r)}function Bv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function jv(i,r,o){o=o!=null?o.concat([i]):null,eu(4,4,Bv.bind(null,r,i),o)}function Lm(){}function Fv(i,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Cm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Hv(i,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Cm(r,u[1]))return u[0];if(u=i(),fa){In(!0);try{i()}finally{In(!1)}}return o.memoizedState=[u,r],u}function Um(i,r,o){return o===void 0||(js&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=YE(),Ce.lanes|=i,Xs|=i,o)}function Gv(i,r,o,u){return Dn(o,r)?o:mo.current!==null?(i=Um(i,o,u),Dn(i,r)||(Ht=!0),i):(js&42)===0?(Ht=!0,i.memoizedState=o):(i=YE(),Ce.lanes|=i,Xs|=i,r)}function Qv(i,r,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=G.T,S={};G.T=S,Bm(i,!1,r,o);try{var C=f(),z=G.S;if(z!==null&&z(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=TR(C,u);tu(i,r,Q,Pn(i))}else tu(i,r,u,Pn(i))}catch($){tu(i,r,{then:function(){},status:"rejected",reason:$},Pn())}finally{ie.p=m,G.T=E}}function CR(){}function zm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=Yv(i).queue;Qv(i,f,r,he,o===null?CR:function(){return Kv(i),o(u)})}function Yv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:he},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Kv(i){var r=Yv(i).next.queue;tu(i,r,{},Pn())}function qm(){return ln(vu)}function Xv(){return Nt().memoizedState}function Wv(){return Nt().memoizedState}function RR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Pn();i=qs(o);var u=Bs(r,i,o);u!==null&&(Vn(u,r,o),Xl(u,r,o)),r={cache:gm()},i.payload=r;return}r=r.return}}function IR(i,r,o){var u=Pn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},yh(i)?Zv(r,o):(o=am(i,r,o,u),o!==null&&(Vn(o,i,u),Jv(o,r,u)))}function $v(i,r,o){var u=Pn();tu(i,r,o,u)}function tu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(yh(i))Zv(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Dn(S,E))return th(i,r,f,0),ot===null&&eh(),!1}catch{}finally{}if(o=am(i,r,f,u),o!==null)return Vn(o,i,u),Jv(o,r,u),!0}return!1}function Bm(i,r,o,u){if(u={lane:2,revertLane:vp(),action:u,hasEagerState:!1,eagerState:null,next:null},yh(i)){if(r)throw Error(s(479))}else r=am(i,o,u,2),r!==null&&Vn(r,i,2)}function yh(i){var r=i.alternate;return i===Ce||r!==null&&r===Ce}function Zv(i,r){po=fh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Jv(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Al(i,o)}}var vh={readContext:ln,use:mh,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},eE={readContext:ln,use:mh,useCallback:function(i,r){return vn().memoizedState=[i,r===void 0?null:r],i},useContext:ln,useEffect:Lv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,_h(4194308,4,Bv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return _h(4194308,4,i,r)},useInsertionEffect:function(i,r){_h(4,2,i,r)},useMemo:function(i,r){var o=vn();r=r===void 0?null:r;var u=i();if(fa){In(!0);try{i()}finally{In(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=vn();if(o!==void 0){var f=o(r);if(fa){In(!0);try{o(r)}finally{In(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=IR.bind(null,Ce,i),[u.memoizedState,i]},useRef:function(i){var r=vn();return i={current:i},r.memoizedState=i},useState:function(i){i=Pm(i);var r=i.queue,o=$v.bind(null,Ce,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Lm,useDeferredValue:function(i,r){var o=vn();return Um(o,i,r)},useTransition:function(){var i=Pm(!1);return i=Qv.bind(null,Ce,i.queue,!0,!1),vn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ce,f=vn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(ze&124)!==0||Tv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Lv(Av.bind(null,u,m,i),[i]),u.flags|=2048,_o(9,gh(),Sv.bind(null,u,m,o,r),null),o},useId:function(){var i=vn(),r=ot.identifierPrefix;if(Qe){var o=is,u=ns;o=(u&~(1<<32-on(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=dh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=SR++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:qm,useFormState:xv,useActionState:xv,useOptimistic:function(i){var r=vn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Bm.bind(null,Ce,!0,o),o.dispatch=r,[i,r]},useMemoCache:xm,useCacheRefresh:function(){return vn().memoizedState=RR.bind(null,Ce)}},tE={readContext:ln,use:mh,useCallback:Fv,useContext:ln,useEffect:Uv,useImperativeHandle:jv,useInsertionEffect:zv,useLayoutEffect:qv,useMemo:Hv,useReducer:ph,useRef:Vv,useState:function(){return ph(as)},useDebugValue:Lm,useDeferredValue:function(i,r){var o=Nt();return Gv(o,tt.memoizedState,i,r)},useTransition:function(){var i=ph(as)[0],r=Nt().memoizedState;return[typeof i=="boolean"?i:Jl(i),r]},useSyncExternalStore:Ev,useId:Xv,useHostTransitionStatus:qm,useFormState:Mv,useActionState:Mv,useOptimistic:function(i,r){var o=Nt();return Cv(o,tt,i,r)},useMemoCache:xm,useCacheRefresh:Wv},NR={readContext:ln,use:mh,useCallback:Fv,useContext:ln,useEffect:Uv,useImperativeHandle:jv,useInsertionEffect:zv,useLayoutEffect:qv,useMemo:Hv,useReducer:km,useRef:Vv,useState:function(){return km(as)},useDebugValue:Lm,useDeferredValue:function(i,r){var o=Nt();return tt===null?Um(o,i,r):Gv(o,tt.memoizedState,i,r)},useTransition:function(){var i=km(as)[0],r=Nt().memoizedState;return[typeof i=="boolean"?i:Jl(i),r]},useSyncExternalStore:Ev,useId:Xv,useHostTransitionStatus:qm,useFormState:Pv,useActionState:Pv,useOptimistic:function(i,r){var o=Nt();return tt!==null?Cv(o,tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:xm,useCacheRefresh:Wv},yo=null,nu=0;function Eh(i){var r=nu;return nu+=1,yo===null&&(yo=[]),fv(yo,i,r)}function iu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Th(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function nE(i){var r=i._init;return r(i._payload)}function iE(i){function r(P,D){if(i){var U=P.deletions;U===null?(P.deletions=[D],P.flags|=16):U.push(D)}}function o(P,D){if(!i)return null;for(;D!==null;)r(P,D),D=D.sibling;return null}function u(P){for(var D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function f(P,D){return P=ts(P,D),P.index=0,P.sibling=null,P}function m(P,D,U){return P.index=U,i?(U=P.alternate,U!==null?(U=U.index,U<D?(P.flags|=67108866,D):U):(P.flags|=67108866,D)):(P.flags|=1048576,D)}function E(P){return i&&P.alternate===null&&(P.flags|=67108866),P}function S(P,D,U,K){return D===null||D.tag!==6?(D=lm(U,P.mode,K),D.return=P,D):(D=f(D,U),D.return=P,D)}function C(P,D,U,K){var oe=U.type;return oe===q?Q(P,D,U.props.children,K,U.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&nE(oe)===D.type)?(D=f(D,U.props),iu(D,U),D.return=P,D):(D=ih(U.type,U.key,U.props,null,P.mode,K),iu(D,U),D.return=P,D)}function z(P,D,U,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=um(U,P.mode,K),D.return=P,D):(D=f(D,U.children||[]),D.return=P,D)}function Q(P,D,U,K,oe){return D===null||D.tag!==7?(D=sa(U,P.mode,K,oe),D.return=P,D):(D=f(D,U),D.return=P,D)}function $(P,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=lm(""+D,P.mode,U),D.return=P,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return U=ih(D.type,D.key,D.props,null,P.mode,U),iu(U,D),U.return=P,U;case O:return D=um(D,P.mode,U),D.return=P,D;case b:var K=D._init;return D=K(D._payload),$(P,D,U)}if(gt(D)||V(D))return D=sa(D,P.mode,U,null),D.return=P,D;if(typeof D.then=="function")return $(P,Eh(D),U);if(D.$$typeof===ue)return $(P,oh(P,D),U);Th(P,D)}return null}function B(P,D,U,K){var oe=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return oe!==null?null:S(P,D,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return U.key===oe?C(P,D,U,K):null;case O:return U.key===oe?z(P,D,U,K):null;case b:return oe=U._init,U=oe(U._payload),B(P,D,U,K)}if(gt(U)||V(U))return oe!==null?null:Q(P,D,U,K,null);if(typeof U.then=="function")return B(P,D,Eh(U),K);if(U.$$typeof===ue)return B(P,D,oh(P,U),K);Th(P,U)}return null}function j(P,D,U,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(U)||null,S(D,P,""+K,oe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case A:return P=P.get(K.key===null?U:K.key)||null,C(D,P,K,oe);case O:return P=P.get(K.key===null?U:K.key)||null,z(D,P,K,oe);case b:var Ne=K._init;return K=Ne(K._payload),j(P,D,U,K,oe)}if(gt(K)||V(K))return P=P.get(U)||null,Q(D,P,K,oe,null);if(typeof K.then=="function")return j(P,D,U,Eh(K),oe);if(K.$$typeof===ue)return j(P,D,U,oh(D,K),oe);Th(D,K)}return null}function ye(P,D,U,K){for(var oe=null,Ne=null,ce=D,ge=D=0,Qt=null;ce!==null&&ge<U.length;ge++){ce.index>ge?(Qt=ce,ce=null):Qt=ce.sibling;var He=B(P,ce,U[ge],K);if(He===null){ce===null&&(ce=Qt);break}i&&ce&&He.alternate===null&&r(P,ce),D=m(He,D,ge),Ne===null?oe=He:Ne.sibling=He,Ne=He,ce=Qt}if(ge===U.length)return o(P,ce),Qe&&aa(P,ge),oe;if(ce===null){for(;ge<U.length;ge++)ce=$(P,U[ge],K),ce!==null&&(D=m(ce,D,ge),Ne===null?oe=ce:Ne.sibling=ce,Ne=ce);return Qe&&aa(P,ge),oe}for(ce=u(ce);ge<U.length;ge++)Qt=j(ce,P,ge,U[ge],K),Qt!==null&&(i&&Qt.alternate!==null&&ce.delete(Qt.key===null?ge:Qt.key),D=m(Qt,D,ge),Ne===null?oe=Qt:Ne.sibling=Qt,Ne=Qt);return i&&ce.forEach(function(sr){return r(P,sr)}),Qe&&aa(P,ge),oe}function pe(P,D,U,K){if(U==null)throw Error(s(151));for(var oe=null,Ne=null,ce=D,ge=D=0,Qt=null,He=U.next();ce!==null&&!He.done;ge++,He=U.next()){ce.index>ge?(Qt=ce,ce=null):Qt=ce.sibling;var sr=B(P,ce,He.value,K);if(sr===null){ce===null&&(ce=Qt);break}i&&ce&&sr.alternate===null&&r(P,ce),D=m(sr,D,ge),Ne===null?oe=sr:Ne.sibling=sr,Ne=sr,ce=Qt}if(He.done)return o(P,ce),Qe&&aa(P,ge),oe;if(ce===null){for(;!He.done;ge++,He=U.next())He=$(P,He.value,K),He!==null&&(D=m(He,D,ge),Ne===null?oe=He:Ne.sibling=He,Ne=He);return Qe&&aa(P,ge),oe}for(ce=u(ce);!He.done;ge++,He=U.next())He=j(ce,P,ge,He.value,K),He!==null&&(i&&He.alternate!==null&&ce.delete(He.key===null?ge:He.key),D=m(He,D,ge),Ne===null?oe=He:Ne.sibling=He,Ne=He);return i&&ce.forEach(function(D1){return r(P,D1)}),Qe&&aa(P,ge),oe}function it(P,D,U,K){if(typeof U=="object"&&U!==null&&U.type===q&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case A:e:{for(var oe=U.key;D!==null;){if(D.key===oe){if(oe=U.type,oe===q){if(D.tag===7){o(P,D.sibling),K=f(D,U.props.children),K.return=P,P=K;break e}}else if(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&nE(oe)===D.type){o(P,D.sibling),K=f(D,U.props),iu(K,U),K.return=P,P=K;break e}o(P,D);break}else r(P,D);D=D.sibling}U.type===q?(K=sa(U.props.children,P.mode,K,U.key),K.return=P,P=K):(K=ih(U.type,U.key,U.props,null,P.mode,K),iu(K,U),K.return=P,P=K)}return E(P);case O:e:{for(oe=U.key;D!==null;){if(D.key===oe)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){o(P,D.sibling),K=f(D,U.children||[]),K.return=P,P=K;break e}else{o(P,D);break}else r(P,D);D=D.sibling}K=um(U,P.mode,K),K.return=P,P=K}return E(P);case b:return oe=U._init,U=oe(U._payload),it(P,D,U,K)}if(gt(U))return ye(P,D,U,K);if(V(U)){if(oe=V(U),typeof oe!="function")throw Error(s(150));return U=oe.call(U),pe(P,D,U,K)}if(typeof U.then=="function")return it(P,D,Eh(U),K);if(U.$$typeof===ue)return it(P,D,oh(P,U),K);Th(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(o(P,D.sibling),K=f(D,U),K.return=P,P=K):(o(P,D),K=lm(U,P.mode,K),K.return=P,P=K),E(P)):o(P,D)}return function(P,D,U,K){try{nu=0;var oe=it(P,D,U,K);return yo=null,oe}catch(ce){if(ce===Yl||ce===uh)throw ce;var Ne=On(29,ce,null,P.mode);return Ne.lanes=K,Ne.return=P,Ne}finally{}}}var vo=iE(!0),sE=iE(!1),Wn=J(null),Ri=null;function Fs(i){var r=i.alternate;ee(zt,zt.current&1),ee(Wn,i),Ri===null&&(r===null||mo.current!==null||r.memoizedState!==null)&&(Ri=i)}function rE(i){if(i.tag===22){if(ee(zt,zt.current),ee(Wn,i),Ri===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Ri=i)}}else Hs()}function Hs(){ee(zt,zt.current),ee(Wn,Wn.current)}function os(i){se(Wn),Ri===i&&(Ri=null),se(zt)}var zt=J(0);function Sh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Op(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function jm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Fm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=qs(u);f.payload=r,o!=null&&(f.callback=o),r=Bs(i,f,u),r!==null&&(Vn(r,i,u),Xl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=qs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Bs(i,f,u),r!==null&&(Vn(r,i,u),Xl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Pn(),u=qs(o);u.tag=2,r!=null&&(u.callback=r),r=Bs(i,u,o),r!==null&&(Vn(r,i,o),Xl(r,i,o))}};function aE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!zl(o,u)||!zl(f,m):!0}function oE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Fm.enqueueReplaceState(r,r.state,null)}function da(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Ah=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function lE(i){Ah(i)}function uE(i){console.error(i)}function cE(i){Ah(i)}function wh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function hE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hm(i,r,o){return o=qs(o),o.tag=3,o.payload={element:null},o.callback=function(){wh(i,r)},o}function fE(i){return i=qs(i),i.tag=3,i}function dE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){hE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){hE(r,o,u),typeof f!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function DR(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Hl(r,o,f,!0),o=Wn.current,o!==null){switch(o.tag){case 13:return Ri===null?mp():o.alternate===null&&vt===0&&(vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===vm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),gp(i,u,f)),!1;case 22:return o.flags|=65536,u===vm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),gp(i,u,f)),!1}throw Error(s(435,o.tag))}return gp(i,u,f),mp(),!1}if(Qe)return r=Wn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==fm&&(i=Error(s(422),{cause:u}),Fl(Qn(i,o)))):(u!==fm&&(r=Error(s(423),{cause:u}),Fl(Qn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Qn(u,o),f=Hm(i.stateNode,u,f),Sm(i,f),vt!==4&&(vt=2)),!1;var m=Error(s(520),{cause:u});if(m=Qn(m,o),cu===null?cu=[m]:cu.push(m),vt!==4&&(vt=2),r===null)return!0;u=Qn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Hm(o.stateNode,u,i),Sm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ws===null||!Ws.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=fE(f),dE(f,i,o,u),Sm(o,f),!1}o=o.return}while(o!==null);return!1}var mE=Error(s(461)),Ht=!1;function en(i,r,o,u){r.child=i===null?sE(r,null,o,u):vo(r,i.child,o,u)}function pE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ca(r),u=Rm(i,r,o,E,m,f),S=Im(),i!==null&&!Ht?(Nm(i,r,f),ls(i,r,f)):(Qe&&S&&cm(r),r.flags|=1,en(i,r,u,f),r.child)}function gE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!om(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,_E(i,r,m,u,f)):(i=ih(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!Zm(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:zl,o(E,u)&&i.ref===r.ref)return ls(i,r,f)}return r.flags|=1,i=ts(m,u),i.ref=r.ref,i.return=r,r.child=i}function _E(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(zl(m,u)&&i.ref===r.ref)if(Ht=!1,r.pendingProps=u=m,Zm(i,f))(i.flags&131072)!==0&&(Ht=!0);else return r.lanes=i.lanes,ls(i,r,f)}return Gm(i,r,o,u,f)}function yE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return vE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&lh(r,m!==null?m.cachePool:null),m!==null?_v(r,m):wm(),rE(r);else return r.lanes=r.childLanes=536870912,vE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(lh(r,m.cachePool),_v(r,m),Hs(),r.memoizedState=null):(i!==null&&lh(r,null),wm(),Hs());return en(i,r,f,o),r.child}function vE(i,r,o,u){var f=ym();return f=f===null?null:{parent:Ut._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&lh(r,null),wm(),rE(r),i!==null&&Hl(i,r,u,!0),null}function bh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Gm(i,r,o,u,f){return ca(r),o=Rm(i,r,o,u,void 0,f),u=Im(),i!==null&&!Ht?(Nm(i,r,f),ls(i,r,f)):(Qe&&u&&cm(r),r.flags|=1,en(i,r,o,f),r.child)}function EE(i,r,o,u,f,m){return ca(r),r.updateQueue=null,o=vv(r,u,o,f),yv(i),u=Im(),i!==null&&!Ht?(Nm(i,r,m),ls(i,r,m)):(Qe&&u&&cm(r),r.flags|=1,en(i,r,o,m),r.child)}function TE(i,r,o,u,f){if(ca(r),r.stateNode===null){var m=lo,E=o.contextType;typeof E=="object"&&E!==null&&(m=ln(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Fm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Em(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?ln(E):lo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(jm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Fm.enqueueReplaceState(m,m.state,null),$l(r,u,m,f),Wl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,C=da(o,S);m.props=C;var z=m.context,Q=o.contextType;E=lo,typeof Q=="object"&&Q!==null&&(E=ln(Q));var $=o.getDerivedStateFromProps;Q=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||z!==E)&&oE(r,m,u,E),zs=!1;var B=r.memoizedState;m.state=B,$l(r,u,m,f),Wl(),z=r.memoizedState,S||B!==z||zs?(typeof $=="function"&&(jm(r,o,$,u),z=r.memoizedState),(C=zs||aE(r,o,C,u,B,z,E))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),m.props=u,m.state=z,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Tm(i,r),E=r.memoizedProps,Q=da(o,E),m.props=Q,$=r.pendingProps,B=m.context,z=o.contextType,C=lo,typeof z=="object"&&z!==null&&(C=ln(z)),S=o.getDerivedStateFromProps,(z=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==$||B!==C)&&oE(r,m,u,C),zs=!1,B=r.memoizedState,m.state=B,$l(r,u,m,f),Wl();var j=r.memoizedState;E!==$||B!==j||zs||i!==null&&i.dependencies!==null&&ah(i.dependencies)?(typeof S=="function"&&(jm(r,o,S,u),j=r.memoizedState),(Q=zs||aE(r,o,Q,u,B,j,C)||i!==null&&i.dependencies!==null&&ah(i.dependencies))?(z||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,j,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,j,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=j),m.props=u,m.state=j,m.context=C,u=Q):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,bh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=vo(r,i.child,null,f),r.child=vo(r,null,o,f)):en(i,r,o,f),r.memoizedState=m.state,i=r.child):i=ls(i,r,f),i}function SE(i,r,o,u){return jl(),r.flags|=256,en(i,r,o,u),r.child}var Qm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ym(i){return{baseLanes:i,cachePool:uv()}}function Km(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=$n),i}function AE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(zt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?Fs(r):Hs(),Qe){var S=yt,C;if(C=S){e:{for(C=S,S=Ci;C.nodeType!==8;){if(!S){S=null;break e}if(C=ai(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:ra!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},C=On(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,yn=r,yt=null,C=!0):C=!1}C||la(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Op(S)?r.lanes=32:r.lanes=536870912,null;os(r)}return S=u.children,u=u.fallback,f?(Hs(),f=r.mode,S=Ch({mode:"hidden",children:S},f),u=sa(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Ym(o),f.childLanes=Km(i,E,o),r.memoizedState=Qm,u):(Fs(r),Xm(r,S))}if(C=i.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(m)r.flags&256?(Fs(r),r.flags&=-257,r=Wm(i,r,o)):r.memoizedState!==null?(Hs(),r.child=i.child,r.flags|=128,r=null):(Hs(),f=u.fallback,S=r.mode,u=Ch({mode:"visible",children:u.children},S),f=sa(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,vo(r,i.child,null,o),u=r.child,u.memoizedState=Ym(o),u.childLanes=Km(i,E,o),r.memoizedState=Qm,r=f);else if(Fs(r),Op(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(s(419)),u.stack="",u.digest=E,Fl({value:u,source:null,stack:null}),r=Wm(i,r,o)}else if(Ht||Hl(i,r,o,!1),E=(o&i.childLanes)!==0,Ht||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Os(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,oo(i,u),Vn(E,i,u),mE;S.data==="$?"||mp(),r=Wm(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,yt=ai(S.nextSibling),yn=r,Qe=!0,oa=null,Ci=!1,i!==null&&(Kn[Xn++]=ns,Kn[Xn++]=is,Kn[Xn++]=ra,ns=i.id,is=i.overflow,ra=r),r=Xm(r,u.children),r.flags|=4096);return r}return f?(Hs(),f=u.fallback,S=r.mode,C=i.child,z=C.sibling,u=ts(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,z!==null?f=ts(z,f):(f=sa(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=Ym(o):(C=S.cachePool,C!==null?(z=Ut._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=uv(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Km(i,E,o),r.memoizedState=Qm,u):(Fs(r),o=i.child,i=o.sibling,o=ts(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Xm(i,r){return r=Ch({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Ch(i,r){return i=On(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Wm(i,r,o){return vo(r,i.child,null,o),i=Xm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function wE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),mm(i.return,r,o)}function $m(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function bE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(en(i,r,u.children,o),u=zt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&wE(i,o,r);else if(i.tag===19)wE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(zt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Sh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),$m(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Sh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}$m(r,!0,o,null,m);break;case"together":$m(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ls(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Xs|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Hl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ts(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ts(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Zm(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ah(i)))}function OR(i,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Us(r,Ut,i.memoizedState.cache),jl();break;case 27:case 5:Ds(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Us(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Fs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?AE(i,r,o):(Fs(r),i=ls(i,r,o),i!==null?i.sibling:null);Fs(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Hl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return bE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(zt,zt.current),u)break;return null;case 22:case 23:return r.lanes=0,yE(i,r,o);case 24:Us(r,Ut,i.memoizedState.cache)}return ls(i,r,o)}function CE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ht=!0;else{if(!Zm(i,o)&&(r.flags&128)===0)return Ht=!1,OR(i,r,o);Ht=(i.flags&131072)!==0}else Ht=!1,Qe&&(r.flags&1048576)!==0&&nv(r,rh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")om(u)?(i=da(u,i),r.tag=1,r=TE(null,r,u,i,o)):(r.tag=0,r=Gm(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===je){r.tag=11,r=pE(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=gE(null,r,u,i,o);break e}}throw r=$t(u)||u,Error(s(306,r,""))}}return r;case 0:return Gm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=da(u,r.pendingProps),TE(i,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Tm(i,r),$l(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Us(r,Ut,u),u!==m.cache&&pm(r,[Ut],o,!0),Wl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=SE(i,r,u,o);break e}else if(u!==f){f=Qn(Error(s(424)),r),Fl(f),r=SE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(yt=ai(i.firstChild),yn=r,Qe=!0,oa=null,Ci=!0,o=sE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(jl(),u===f){r=ls(i,r,o);break e}en(i,r,u,o)}r=r.child}return r;case 26:return bh(i,r),i===null?(o=DT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=qh(Se.current).createElement(o),u[Pt]=r,u[Ct]=i,nn(u,o,i),Tt(u),r.stateNode=u):r.memoizedState=DT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ds(r),i===null&&Qe&&(u=r.stateNode=RT(r.type,r.pendingProps,Se.current),yn=r,Ci=!0,f=yt,Js(r.type)?(xp=f,yt=ai(u.firstChild)):yt=f),en(i,r,r.pendingProps.children,o),bh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=yt)&&(u=r1(u,r.type,r.pendingProps,Ci),u!==null?(r.stateNode=u,yn=r,yt=ai(u.firstChild),Ci=!1,f=!0):f=!1),f||la(r)),Ds(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Ip(f,m)?u=null:E!==null&&Ip(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Rm(i,r,AR,null,null,o),vu._currentValue=f),bh(i,r),en(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=yt)&&(o=a1(o,r.pendingProps,Ci),o!==null?(r.stateNode=o,yn=r,yt=null,i=!0):i=!1),i||la(r)),null;case 13:return AE(i,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=vo(r,null,u,o):en(i,r,u,o),r.child;case 11:return pE(i,r,r.type,r.pendingProps,o);case 7:return en(i,r,r.pendingProps,o),r.child;case 8:return en(i,r,r.pendingProps.children,o),r.child;case 12:return en(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Us(r,r.type,u.value),en(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ca(r),f=ln(f),u=u(f),r.flags|=1,en(i,r,u,o),r.child;case 14:return gE(i,r,r.type,r.pendingProps,o);case 15:return _E(i,r,r.type,r.pendingProps,o);case 19:return bE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Ch(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ts(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return yE(i,r,o);case 24:return ca(r),u=ln(Ut),i===null?(f=ym(),f===null&&(f=ot,m=gm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Em(r),Us(r,Ut,f)):((i.lanes&o)!==0&&(Tm(i,r),$l(r,null,null,o),Wl()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Us(r,Ut,u)):(u=m.cache,Us(r,Ut,u),u!==f.cache&&pm(r,[Ut],o,!0))),en(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function us(i){i.flags|=4}function RE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!PT(r)){if(r=Wn.current,r!==null&&((ze&4194048)===ze?Ri!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==Ri))throw Kl=vm,cv;i.flags|=8192}}function Rh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Tl():536870912,i.lanes|=r,Ao|=r)}function su(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function mt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function xR(i,r,o){var u=r.pendingProps;switch(hm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),rs(Ut),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Bl(r)?us(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,rv())),mt(r),null;case 26:return o=r.memoizedState,i===null?(us(r),o!==null?(mt(r),RE(r,o)):(mt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(us(r),mt(r),RE(r,o)):(mt(r),r.flags&=-16777217):(i.memoizedProps!==u&&us(r),mt(r),r.flags&=-16777217),null;case 27:ji(r),o=Se.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}i=de.current,Bl(r)?iv(r):(i=RT(f,u,o),r.stateNode=i,us(r))}return mt(r),null;case 5:if(ji(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(i=de.current,Bl(r))iv(r);else{switch(f=qh(Se.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Pt]=r,i[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(nn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&us(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Se.current,Bl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=yn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Pt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||ET(i.nodeValue,o)),i||la(r)}else i=qh(i).createTextNode(u),i[Pt]=r,r.stateNode=i}return mt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Bl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Pt]=r}else jl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else f=rv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(os(r),r):(os(r),null)}if(os(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Rh(r,r.updateQueue),mt(r),null;case 4:return mi(),i===null&&Ap(r.stateNode.containerInfo),mt(r),null;case 10:return rs(r.type),mt(r),null;case 19:if(se(zt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)su(f,!1);else{if(vt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Sh(i),m!==null){for(r.flags|=128,su(f,!1),i=m.updateQueue,r.updateQueue=i,Rh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)tv(o,i),o=o.sibling;return ee(zt,zt.current&1|2),r.child}i=i.sibling}f.tail!==null&&qn()>Dh&&(r.flags|=128,u=!0,su(f,!1),r.lanes=4194304)}else{if(!u)if(i=Sh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Rh(r,i),su(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return mt(r),null}else 2*qn()-f.renderingStartTime>Dh&&o!==536870912&&(r.flags|=128,u=!0,su(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=qn(),r.sibling=null,i=zt.current,ee(zt,u?i&1|2:i&1),r):(mt(r),null);case 22:case 23:return os(r),bm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&Rh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&se(ha),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),rs(Ut),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function MR(i,r){switch(hm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return rs(Ut),mi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return ji(r),null;case 13:if(os(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));jl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return se(zt),null;case 4:return mi(),null;case 10:return rs(r.type),null;case 22:case 23:return os(r),bm(),i!==null&&se(ha),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return rs(Ut),null;case 25:return null;default:return null}}function IE(i,r){switch(hm(r),r.tag){case 3:rs(Ut),mi();break;case 26:case 27:case 5:ji(r);break;case 4:mi();break;case 13:os(r);break;case 19:se(zt);break;case 10:rs(r.type);break;case 22:case 23:os(r),bm(),i!==null&&se(ha);break;case 24:rs(Ut)}}function ru(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){st(r,r.return,S)}}function Gs(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var C=o,z=S;try{z()}catch(Q){st(f,C,Q)}}}u=u.next}while(u!==m)}}catch(Q){st(r,r.return,Q)}}function NE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{gv(r,o)}catch(u){st(i,i.return,u)}}}function DE(i,r,o){o.props=da(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function au(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function Ii(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function OE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function Jm(i,r,o){try{var u=i.stateNode;e1(u,i.type,o,r),u[Ct]=r}catch(f){st(i,i.return,f)}}function xE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Js(i.type)||i.tag===4}function ep(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Js(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function tp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=zh));else if(u!==4&&(u===27&&Js(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(tp(i,r,o),i=i.sibling;i!==null;)tp(i,r,o),i=i.sibling}function Ih(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Js(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Ih(i,r,o),i=i.sibling;i!==null;)Ih(i,r,o),i=i.sibling}function ME(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);nn(r,u,o),r[Pt]=i,r[Ct]=o}catch(m){st(i,i.return,m)}}var cs=!1,At=!1,np=!1,kE=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function kR(i,r){if(i=i.containerInfo,Cp=Qh,i=Gy(i),em(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,C=-1,z=0,Q=0,$=i,B=null;t:for(;;){for(var j;$!==o||f!==0&&$.nodeType!==3||(S=E+f),$!==m||u!==0&&$.nodeType!==3||(C=E+u),$.nodeType===3&&(E+=$.nodeValue.length),(j=$.firstChild)!==null;)B=$,$=j;for(;;){if($===i)break t;if(B===o&&++z===f&&(S=E),B===m&&++Q===u&&(C=E),(j=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=j}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rp={focusedElem:i,selectionRange:o},Qh=!1,Gt=r;Gt!==null;)if(r=Gt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Gt=i;else for(;Gt!==null;){switch(r=Gt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var ye=da(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(ye,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(pe){st(o,o.return,pe)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Dp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Dp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Gt=i;break}Gt=r.return}}function PE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Qs(i,o),u&4&&ru(5,o);break;case 1:if(Qs(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=da(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&NE(o),u&512&&au(o,o.return);break;case 3:if(Qs(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{gv(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&ME(o);case 26:case 5:Qs(i,o),r===null&&u&4&&OE(o),u&512&&au(o,o.return);break;case 12:Qs(i,o);break;case 13:Qs(i,o),u&4&&UE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=FR.bind(null,o),o1(i,o))));break;case 22:if(u=o.memoizedState!==null||cs,!u){r=r!==null&&r.memoizedState!==null||At,f=cs;var m=At;cs=u,(At=r)&&!m?Ys(i,o,(o.subtreeFlags&8772)!==0):Qs(i,o),cs=f,At=m}break;case 30:break;default:Qs(i,o)}}function VE(i){var r=i.alternate;r!==null&&(i.alternate=null,VE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&ks(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ft=null,En=!1;function hs(i,r,o){for(o=o.child;o!==null;)LE(i,r,o),o=o.sibling}function LE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:At||Ii(o,r),hs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:At||Ii(o,r);var u=ft,f=En;Js(o.type)&&(ft=o.stateNode,En=!1),hs(i,r,o),pu(o.stateNode),ft=u,En=f;break;case 5:At||Ii(o,r);case 6:if(u=ft,f=En,ft=null,hs(i,r,o),ft=u,En=f,ft!==null)if(En)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{ft.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:ft!==null&&(En?(i=ft,bT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Au(i)):bT(ft,o.stateNode));break;case 4:u=ft,f=En,ft=o.stateNode.containerInfo,En=!0,hs(i,r,o),ft=u,En=f;break;case 0:case 11:case 14:case 15:At||Gs(2,o,r),At||Gs(4,o,r),hs(i,r,o);break;case 1:At||(Ii(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&DE(o,r,u)),hs(i,r,o);break;case 21:hs(i,r,o);break;case 22:At=(u=At)||o.memoizedState!==null,hs(i,r,o),At=u;break;default:hs(i,r,o)}}function UE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Au(i)}catch(o){st(r,r.return,o)}}function PR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new kE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new kE),r;default:throw Error(s(435,i.tag))}}function ip(i,r){var o=PR(i);r.forEach(function(u){var f=HR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function xn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(Js(S.type)){ft=S.stateNode,En=!1;break e}break;case 5:ft=S.stateNode,En=!1;break e;case 3:case 4:ft=S.stateNode.containerInfo,En=!0;break e}S=S.return}if(ft===null)throw Error(s(160));LE(m,E,f),ft=null,En=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)zE(r,i),r=r.sibling}var ri=null;function zE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:xn(r,i),Mn(i),u&4&&(Gs(3,i,i.return),ru(3,i),Gs(5,i,i.return));break;case 1:xn(r,i),Mn(i),u&512&&(At||o===null||Ii(o,o.return)),u&64&&cs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ri;if(xn(r,i),Mn(i),u&512&&(At||o===null||Ii(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[jr]||m[Pt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),nn(m,u,o),m[Pt]=i,Tt(m),u=m;break e;case"link":var E=MT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),nn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=MT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),nn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Pt]=i,Tt(m),u=m}i.stateNode=u}else kT(f,i.type,i.stateNode);else i.stateNode=xT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?kT(f,i.type,i.stateNode):xT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Jm(i,i.memoizedProps,o.memoizedProps)}break;case 27:xn(r,i),Mn(i),u&512&&(At||o===null||Ii(o,o.return)),o!==null&&u&4&&Jm(i,i.memoizedProps,o.memoizedProps);break;case 5:if(xn(r,i),Mn(i),u&512&&(At||o===null||Ii(o,o.return)),i.flags&32){f=i.stateNode;try{jn(f,"")}catch(j){st(i,i.return,j)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Jm(i,f,o!==null?o.memoizedProps:f)),u&1024&&(np=!0);break;case 6:if(xn(r,i),Mn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(j){st(i,i.return,j)}}break;case 3:if(Fh=null,f=ri,ri=Bh(r.containerInfo),xn(r,i),ri=f,Mn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Au(r.containerInfo)}catch(j){st(i,i.return,j)}np&&(np=!1,qE(i));break;case 4:u=ri,ri=Bh(i.stateNode.containerInfo),xn(r,i),Mn(i),ri=u;break;case 12:xn(r,i),Mn(i);break;case 13:xn(r,i),Mn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(up=qn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,ip(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,z=cs,Q=At;if(cs=z||f,At=Q||C,xn(r,i),At=Q,cs=z,Mn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||cs||At||ma(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(j){st(C,C.return,j)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(j){st(C,C.return,j)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ip(i,o))));break;case 19:xn(r,i),Mn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,ip(i,u)));break;case 30:break;case 21:break;default:xn(r,i),Mn(i)}}function Mn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(xE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=ep(i);Ih(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(jn(E,""),o.flags&=-33);var S=ep(i);Ih(i,S,E);break;case 3:case 4:var C=o.stateNode.containerInfo,z=ep(i);tp(i,z,C);break;default:throw Error(s(161))}}catch(Q){st(i,i.return,Q)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function qE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;qE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Qs(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)PE(i,r.alternate,r),r=r.sibling}function ma(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Gs(4,r,r.return),ma(r);break;case 1:Ii(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&DE(r,r.return,o),ma(r);break;case 27:pu(r.stateNode);case 26:case 5:Ii(r,r.return),ma(r);break;case 22:r.memoizedState===null&&ma(r);break;case 30:ma(r);break;default:ma(r)}i=i.sibling}}function Ys(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ys(f,m,o),ru(4,m);break;case 1:if(Ys(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){st(u,u.return,z)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)pv(C[f],S)}catch(z){st(u,u.return,z)}}o&&E&64&&NE(m),au(m,m.return);break;case 27:ME(m);case 26:case 5:Ys(f,m,o),o&&u===null&&E&4&&OE(m),au(m,m.return);break;case 12:Ys(f,m,o);break;case 13:Ys(f,m,o),o&&E&4&&UE(f,m);break;case 22:m.memoizedState===null&&Ys(f,m,o),au(m,m.return);break;case 30:break;default:Ys(f,m,o)}r=r.sibling}}function sp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Gl(o))}function rp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Gl(i))}function Ni(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)BE(i,r,o,u),r=r.sibling}function BE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ni(i,r,o,u),f&2048&&ru(9,r);break;case 1:Ni(i,r,o,u);break;case 3:Ni(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Gl(i)));break;case 12:if(f&2048){Ni(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Ni(i,r,o,u);break;case 13:Ni(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ni(i,r,o,u):ou(i,r):m._visibility&2?Ni(i,r,o,u):(m._visibility|=2,Eo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&sp(E,r);break;case 24:Ni(i,r,o,u),f&2048&&rp(r.alternate,r);break;default:Ni(i,r,o,u)}}function Eo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,C=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:Eo(m,E,S,C,f),ru(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?Eo(m,E,S,C,f):ou(m,E):(Q._visibility|=2,Eo(m,E,S,C,f)),f&&z&2048&&sp(E.alternate,E);break;case 24:Eo(m,E,S,C,f),f&&z&2048&&rp(E.alternate,E);break;default:Eo(m,E,S,C,f)}r=r.sibling}}function ou(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:ou(o,u),f&2048&&sp(u.alternate,u);break;case 24:ou(o,u),f&2048&&rp(u.alternate,u);break;default:ou(o,u)}r=r.sibling}}var lu=8192;function To(i){if(i.subtreeFlags&lu)for(i=i.child;i!==null;)jE(i),i=i.sibling}function jE(i){switch(i.tag){case 26:To(i),i.flags&lu&&i.memoizedState!==null&&E1(ri,i.memoizedState,i.memoizedProps);break;case 5:To(i);break;case 3:case 4:var r=ri;ri=Bh(i.stateNode.containerInfo),To(i),ri=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=lu,lu=16777216,To(i),lu=r):To(i));break;default:To(i)}}function FE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function uu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,GE(u,i)}FE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)HE(i),i=i.sibling}function HE(i){switch(i.tag){case 0:case 11:case 15:uu(i),i.flags&2048&&Gs(9,i,i.return);break;case 3:uu(i);break;case 12:uu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Nh(i)):uu(i);break;default:uu(i)}}function Nh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,GE(u,i)}FE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Gs(8,r,r.return),Nh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Nh(r));break;default:Nh(r)}i=i.sibling}}function GE(i,r){for(;Gt!==null;){var o=Gt;switch(o.tag){case 0:case 11:case 15:Gs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Gl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Gt=u;else e:for(o=i;Gt!==null;){u=Gt;var f=u.sibling,m=u.return;if(VE(u),u===o){Gt=null;break e}if(f!==null){f.return=m,Gt=f;break e}Gt=m}}}var VR={getCacheForType:function(i){var r=ln(Ut),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},LR=typeof WeakMap=="function"?WeakMap:Map,$e=0,ot=null,xe=null,ze=0,Ze=0,kn=null,Ks=!1,So=!1,ap=!1,fs=0,vt=0,Xs=0,pa=0,op=0,$n=0,Ao=0,cu=null,Tn=null,lp=!1,up=0,Dh=1/0,Oh=null,Ws=null,tn=0,$s=null,wo=null,bo=0,cp=0,hp=null,QE=null,hu=0,fp=null;function Pn(){if(($e&2)!==0&&ze!==0)return ze&-ze;if(G.T!==null){var i=ho;return i!==0?i:vp()}return xs()}function YE(){$n===0&&($n=(ze&536870912)===0||Qe?El():536870912);var i=Wn.current;return i!==null&&(i.flags|=32),$n}function Vn(i,r,o){(i===ot&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Co(i,0),Zs(i,ze,$n,!1)),Hi(i,o),(($e&2)===0||i!==ot)&&(i===ot&&(($e&2)===0&&(pa|=o),vt===4&&Zs(i,ze,$n,!1)),Di(i))}function KE(i,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Br(i,r),f=u?qR(i,r):pp(i,r,!0),m=u;do{if(f===0){So&&!u&&Zs(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!UR(o)){f=pp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=cu;var C=S.current.memoizedState.isDehydrated;if(C&&(Co(S,E).flags|=256),E=pp(S,E,!1),E!==2){if(ap&&!C){S.errorRecoveryDisabledLanes|=m,pa|=m,f=4;break e}m=Tn,Tn=f,m!==null&&(Tn===null?Tn=m:Tn.push.apply(Tn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Co(i,0),Zs(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Zs(u,r,$n,!Ks);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=up+300-qn(),10<f)){if(Zs(u,r,$n,!Ks),ja(u,0,!0)!==0)break e;u.timeoutHandle=AT(XE.bind(null,u,o,Tn,Oh,lp,r,$n,pa,Ao,Ks,m,2,-0,0),f);break e}XE(u,o,Tn,Oh,lp,r,$n,pa,Ao,Ks,m,0,-0,0)}}break}while(!0);Di(i)}function XE(i,r,o,u,f,m,E,S,C,z,Q,$,B,j){if(i.timeoutHandle=-1,$=r.subtreeFlags,($&8192||($&16785408)===16785408)&&(yu={stylesheets:null,count:0,unsuspend:v1},jE(r),$=T1(),$!==null)){i.cancelPendingCommit=$(nT.bind(null,i,r,m,o,u,f,E,S,C,Q,1,B,j)),Zs(i,m,E,!z);return}nT(i,r,m,o,u,f,E,S,C)}function UR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Dn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zs(i,r,o,u){r&=~op,r&=~pa,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-on(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&pi(i,o,r)}function xh(){return($e&6)===0?(fu(0),!1):!0}function dp(){if(xe!==null){if(Ze===0)var i=xe.return;else i=xe,ss=ua=null,Dm(i),yo=null,nu=0,i=xe;for(;i!==null;)IE(i.alternate,i),i=i.return;xe=null}}function Co(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,n1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),dp(),ot=i,xe=o=ts(i.current,null),ze=r,Ze=0,kn=null,Ks=!1,So=Br(i,r),ap=!1,Ao=$n=op=pa=Xs=vt=0,Tn=cu=null,lp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-on(u),m=1<<f;r|=i[f],u&=~m}return fs=r,eh(),o}function WE(i,r){Ce=null,G.H=vh,r===Yl||r===uh?(r=dv(),Ze=3):r===cv?(r=dv(),Ze=4):Ze=r===mE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,kn=r,xe===null&&(vt=1,wh(i,Qn(r,i.current)))}function $E(){var i=G.H;return G.H=vh,i===null?vh:i}function ZE(){var i=G.A;return G.A=VR,i}function mp(){vt=4,Ks||(ze&4194048)!==ze&&Wn.current!==null||(So=!0),(Xs&134217727)===0&&(pa&134217727)===0||ot===null||Zs(ot,ze,$n,!1)}function pp(i,r,o){var u=$e;$e|=2;var f=$E(),m=ZE();(ot!==i||ze!==r)&&(Oh=null,Co(i,r)),r=!1;var E=vt;e:do try{if(Ze!==0&&xe!==null){var S=xe,C=kn;switch(Ze){case 8:dp(),E=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(r=!0);var z=Ze;if(Ze=0,kn=null,Ro(i,S,C,z),o&&So){E=0;break e}break;default:z=Ze,Ze=0,kn=null,Ro(i,S,C,z)}}zR(),E=vt;break}catch(Q){WE(i,Q)}while(!0);return r&&i.shellSuspendCounter++,ss=ua=null,$e=u,G.H=f,G.A=m,xe===null&&(ot=null,ze=0,eh()),E}function zR(){for(;xe!==null;)JE(xe)}function qR(i,r){var o=$e;$e|=2;var u=$E(),f=ZE();ot!==i||ze!==r?(Oh=null,Dh=qn()+500,Co(i,r)):So=Br(i,r);e:do try{if(Ze!==0&&xe!==null){r=xe;var m=kn;t:switch(Ze){case 1:Ze=0,kn=null,Ro(i,r,m,1);break;case 2:case 9:if(hv(m)){Ze=0,kn=null,eT(r);break}r=function(){Ze!==2&&Ze!==9||ot!==i||(Ze=7),Di(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:hv(m)?(Ze=0,kn=null,eT(r)):(Ze=0,kn=null,Ro(i,r,m,7));break;case 5:var E=null;switch(xe.tag){case 26:E=xe.memoizedState;case 5:case 27:var S=xe;if(!E||PT(E)){Ze=0,kn=null;var C=S.sibling;if(C!==null)xe=C;else{var z=S.return;z!==null?(xe=z,Mh(z)):xe=null}break t}}Ze=0,kn=null,Ro(i,r,m,5);break;case 6:Ze=0,kn=null,Ro(i,r,m,6);break;case 8:dp(),vt=6;break e;default:throw Error(s(462))}}BR();break}catch(Q){WE(i,Q)}while(!0);return ss=ua=null,G.H=u,G.A=f,$e=o,xe!==null?0:(ot=null,ze=0,eh(),vt)}function BR(){for(;xe!==null&&!gl();)JE(xe)}function JE(i){var r=CE(i.alternate,i,fs);i.memoizedProps=i.pendingProps,r===null?Mh(i):xe=r}function eT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=EE(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=EE(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Dm(r);default:IE(o,r),r=xe=tv(r,fs),r=CE(o,r,fs)}i.memoizedProps=i.pendingProps,r===null?Mh(i):xe=r}function Ro(i,r,o,u){ss=ua=null,Dm(r),yo=null,nu=0;var f=r.return;try{if(DR(i,f,r,o,ze)){vt=1,wh(i,Qn(o,i.current)),xe=null;return}}catch(m){if(f!==null)throw xe=f,m;vt=1,wh(i,Qn(o,i.current)),xe=null;return}r.flags&32768?(Qe||u===1?i=!0:So||(ze&536870912)!==0?i=!1:(Ks=i=!0,(u===2||u===9||u===3||u===6)&&(u=Wn.current,u!==null&&u.tag===13&&(u.flags|=16384))),tT(r,i)):Mh(r)}function Mh(i){var r=i;do{if((r.flags&32768)!==0){tT(r,Ks);return}i=r.return;var o=xR(r.alternate,r,fs);if(o!==null){xe=o;return}if(r=r.sibling,r!==null){xe=r;return}xe=r=i}while(r!==null);vt===0&&(vt=5)}function tT(i,r){do{var o=MR(i.alternate,i);if(o!==null){o.flags&=32767,xe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){xe=i;return}xe=i=o}while(i!==null);vt=6,xe=null}function nT(i,r,o,u,f,m,E,S,C){i.cancelPendingCommit=null;do kh();while(tn!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=rm,Sl(i,o,m,E,S,C),i===ot&&(xe=ot=null,ze=0),wo=r,$s=i,bo=o,cp=m,hp=f,QE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,GR(Lr,function(){return oT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,f=ie.p,ie.p=2,E=$e,$e|=4;try{kR(i,r,o)}finally{$e=E,ie.p=f,G.T=u}}tn=1,iT(),sT(),rT()}}function iT(){if(tn===1){tn=0;var i=$s,r=wo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{zE(r,i);var m=Rp,E=Gy(i.containerInfo),S=m.focusedElem,C=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&Hy(S.ownerDocument.documentElement,S)){if(C!==null&&em(S)){var z=C.start,Q=C.end;if(Q===void 0&&(Q=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(Q,S.value.length);else{var $=S.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var j=B.getSelection(),ye=S.textContent.length,pe=Math.min(C.start,ye),it=C.end===void 0?pe:Math.min(C.end,ye);!j.extend&&pe>it&&(E=it,it=pe,pe=E);var P=Fy(S,pe),D=Fy(S,it);if(P&&D&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==D.node||j.focusOffset!==D.offset)){var U=$.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),pe>it?(j.addRange(U),j.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),j.addRange(U))}}}}for($=[],j=S;j=j.parentNode;)j.nodeType===1&&$.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<$.length;S++){var K=$[S];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Qh=!!Cp,Rp=Cp=null}finally{$e=f,ie.p=u,G.T=o}}i.current=r,tn=2}}function sT(){if(tn===2){tn=0;var i=$s,r=wo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{PE(i,r.alternate,r)}finally{$e=f,ie.p=u,G.T=o}}tn=3}}function rT(){if(tn===4||tn===3){tn=0,Nc();var i=$s,r=wo,o=bo,u=QE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?tn=5:(tn=0,wo=$s=null,aT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(Ws=null),Fa(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(_t,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=G.T,f=ie.p,ie.p=2,G.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{G.T=r,ie.p=f}}(bo&3)!==0&&kh(),Di(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===fp?hu++:(hu=0,fp=i):hu=0,fu(0)}}function aT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Gl(r)))}function kh(i){return iT(),sT(),rT(),oT()}function oT(){if(tn!==5)return!1;var i=$s,r=cp;cp=0;var o=Fa(bo),u=G.T,f=ie.p;try{ie.p=32>o?32:o,G.T=null,o=hp,hp=null;var m=$s,E=bo;if(tn=0,wo=$s=null,bo=0,($e&6)!==0)throw Error(s(331));var S=$e;if($e|=4,HE(m.current),BE(m,m.current,E,o),$e=S,fu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{ie.p=f,G.T=u,aT(i,r)}}function lT(i,r,o){r=Qn(o,r),r=Hm(i.stateNode,r,2),i=Bs(i,r,2),i!==null&&(Hi(i,2),Di(i))}function st(i,r,o){if(i.tag===3)lT(i,i,o);else for(;r!==null;){if(r.tag===3){lT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ws===null||!Ws.has(u))){i=Qn(o,i),o=fE(2),u=Bs(r,o,2),u!==null&&(dE(o,u,r,i),Hi(u,2),Di(u));break}}r=r.return}}function gp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new LR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(ap=!0,f.add(o),i=jR.bind(null,i,r,o),r.then(i,i))}function jR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ot===i&&(ze&o)===o&&(vt===4||vt===3&&(ze&62914560)===ze&&300>qn()-up?($e&2)===0&&Co(i,0):op|=o,Ao===ze&&(Ao=0)),Di(i)}function uT(i,r){r===0&&(r=Tl()),i=oo(i,r),i!==null&&(Hi(i,r),Di(i))}function FR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),uT(i,o)}function HR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),uT(i,o)}function GR(i,r){return Pr(i,r)}var Ph=null,Io=null,_p=!1,Vh=!1,yp=!1,ga=0;function Di(i){i!==Io&&i.next===null&&(Io===null?Ph=Io=i:Io=Io.next=i),Vh=!0,_p||(_p=!0,YR())}function fu(i,r){if(!yp&&Vh){yp=!0;do for(var o=!1,u=Ph;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-on(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,dT(u,m))}else m=ze,m=ja(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Br(u,m)||(o=!0,dT(u,m));u=u.next}while(o);yp=!1}}function QR(){cT()}function cT(){Vh=_p=!1;var i=0;ga!==0&&(t1()&&(i=ga),ga=0);for(var r=qn(),o=null,u=Ph;u!==null;){var f=u.next,m=hT(u,r);m===0?(u.next=null,o===null?Ph=f:o.next=f,f===null&&(Io=o)):(o=u,(i!==0||(m&3)!==0)&&(Vh=!0)),u=f}fu(i)}function hT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-on(m),S=1<<E,C=f[E];C===-1?((S&o)===0||(S&u)!==0)&&(f[E]=vl(S,r)):C<=r&&(i.expiredLanes|=S),m&=~S}if(r=ot,o=ze,o=ja(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Vr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Br(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Vr(u),Fa(o)){case 2:case 8:o=qa;break;case 32:o=Lr;break;case 268435456:o=Ba;break;default:o=Lr}return u=fT.bind(null,i),o=Pr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Vr(u),i.callbackPriority=2,i.callbackNode=null,2}function fT(i,r){if(tn!==0&&tn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(kh()&&i.callbackNode!==o)return null;var u=ze;return u=ja(i,i===ot?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(KE(i,u,r),hT(i,qn()),i.callbackNode!=null&&i.callbackNode===o?fT.bind(null,i):null)}function dT(i,r){if(kh())return null;KE(i,r,!0)}function YR(){i1(function(){($e&6)!==0?Pr(_l,QR):cT()})}function vp(){return ga===0&&(ga=El()),ga}function mT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Xa(""+i)}function pT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function KR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=mT((f[Ct]||null).action),E=u.submitter;E&&(r=(r=E[Ct]||null)?mT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new Wa("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ga!==0){var C=E?pT(f,E):new FormData(f);zm(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(S.preventDefault(),C=E?pT(f,E):new FormData(f),zm(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var Ep=0;Ep<sm.length;Ep++){var Tp=sm[Ep],XR=Tp.toLowerCase(),WR=Tp[0].toUpperCase()+Tp.slice(1);si(XR,"on"+WR)}si(Ky,"onAnimationEnd"),si(Xy,"onAnimationIteration"),si(Wy,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(dR,"onTransitionRun"),si(mR,"onTransitionStart"),si(pR,"onTransitionCancel"),si($y,"onTransitionEnd"),Qi("onMouseEnter",["mouseout","mouseover"]),Qi("onMouseLeave",["mouseout","mouseover"]),Qi("onPointerEnter",["pointerout","pointerover"]),Qi("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$R=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function gT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],C=S.instance,z=S.currentTarget;if(S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(Q){Ah(Q)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(S=u[E],C=S.instance,z=S.currentTarget,S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(Q){Ah(Q)}f.currentTarget=null,m=C}}}}function Me(i,r){var o=r[wl];o===void 0&&(o=r[wl]=new Set);var u=i+"__bubble";o.has(u)||(_T(r,i,2,!1),o.add(u))}function Sp(i,r,o){var u=0;r&&(u|=4),_T(o,i,u,r)}var Lh="_reactListening"+Math.random().toString(36).slice(2);function Ap(i){if(!i[Lh]){i[Lh]=!0,bl.forEach(function(o){o!=="selectionchange"&&($R.has(o)||Sp(o,!1,i),Sp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Lh]||(r[Lh]=!0,Sp("selectionchange",!1,r))}}function _T(i,r,o,u){switch(BT(r)){case 2:var f=w1;break;case 8:f=b1;break;default:f=Lp}o=f.bind(null,r,o,i),f=void 0,!Hn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function wp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Gi(S),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}S=S.parentNode}}u=u.return}zc(function(){var z=m,Q=Fn(o),$=[];e:{var B=Zy.get(i);if(B!==void 0){var j=Wa,ye=i;switch(i){case"keypress":if(Ti(o)===0)break e;case"keydown":case"keyup":j=no;break;case"focusin":ye="focus",j=Ja;break;case"focusout":ye="blur",j=Ja;break;case"beforeblur":case"afterblur":j=Ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Gn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Yc;break;case Ky:case Xy:case Wy:j=eo;break;case $y:j=Xc;break;case"scroll":case"scrollend":j=qc;break;case"wheel":j=io;break;case"copy":case"cut":case"paste":j=to;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Ll;break;case"toggle":case"beforetoggle":j=$c}var pe=(r&4)!==0,it=!pe&&(i==="scroll"||i==="scrollend"),P=pe?B!==null?B+"Capture":null:B;pe=[];for(var D=z,U;D!==null;){var K=D;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||P===null||(K=Xr(D,P),K!=null&&pe.push(mu(D,K,U))),it)break;D=D.return}0<pe.length&&(B=new j(B,ye,null,o,Q),$.push({event:B,listeners:pe}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",j=i==="mouseout"||i==="pointerout",B&&o!==Xi&&(ye=o.relatedTarget||o.fromElement)&&(Gi(ye)||ye[Bn]))break e;if((j||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,j?(ye=o.relatedTarget||o.toElement,j=z,ye=ye?Gi(ye):null,ye!==null&&(it=l(ye),pe=ye.tag,ye!==it||pe!==5&&pe!==27&&pe!==6)&&(ye=null)):(j=null,ye=z),j!==ye)){if(pe=Gn,K="onMouseLeave",P="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(pe=Ll,K="onPointerLeave",P="onPointerEnter",D="pointer"),it=j==null?B:_i(j),U=ye==null?B:_i(ye),B=new pe(K,D+"leave",j,o,Q),B.target=it,B.relatedTarget=U,K=null,Gi(Q)===z&&(pe=new pe(P,D+"enter",ye,o,Q),pe.target=U,pe.relatedTarget=it,K=pe),it=K,j&&ye)t:{for(pe=j,P=ye,D=0,U=pe;U;U=No(U))D++;for(U=0,K=P;K;K=No(K))U++;for(;0<D-U;)pe=No(pe),D--;for(;0<U-D;)P=No(P),U--;for(;D--;){if(pe===P||P!==null&&pe===P.alternate)break t;pe=No(pe),P=No(P)}pe=null}else pe=null;j!==null&&yT($,B,j,pe,!1),ye!==null&&it!==null&&yT($,it,ye,pe,!0)}}e:{if(B=z?_i(z):window,j=B.nodeName&&B.nodeName.toLowerCase(),j==="select"||j==="input"&&B.type==="file")var oe=Ly;else if(Lt(B))if(Uy)oe=cR;else{oe=lR;var Ne=oR}else j=B.nodeName,!j||j.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Dl(z.elementType)&&(oe=Ly):oe=uR;if(oe&&(oe=oe(i,z))){es($,oe,o,Q);break e}Ne&&Ne(i,B,z),i==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Vs(B,"number",B.value)}switch(Ne=z?_i(z):window,i){case"focusin":(Lt(Ne)||Ne.contentEditable==="true")&&(so=Ne,tm=z,ql=null);break;case"focusout":ql=tm=so=null;break;case"mousedown":nm=!0;break;case"contextmenu":case"mouseup":case"dragend":nm=!1,Qy($,o,Q);break;case"selectionchange":if(fR)break;case"keydown":case"keyup":Qy($,o,Q)}var ce;if(wi)e:{switch(i){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Le?F(i,o)&&(ge="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(y&&o.locale!=="ko"&&(Le||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Le&&(ce=xl()):(Ei=Q,Ls="value"in Ei?Ei.value:Ei.textContent,Le=!0)),Ne=Uh(z,ge),0<Ne.length&&(ge=new Pl(ge,i,null,o,Q),$.push({event:ge,listeners:Ne}),ce?ge.data=ce:(ce=te(o),ce!==null&&(ge.data=ce)))),(ce=_?Vt(i,o):Ue(i,o))&&(ge=Uh(z,"onBeforeInput"),0<ge.length&&(Ne=new Pl("onBeforeInput","beforeinput",null,o,Q),$.push({event:Ne,listeners:ge}),Ne.data=ce)),KR($,i,z,o,Q)}gT($,r)})}function mu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Uh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Xr(i,o),f!=null&&u.unshift(mu(i,f,m)),f=Xr(i,r),f!=null&&u.push(mu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function No(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function yT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,C=S.alternate,z=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||z===null||(C=z,f?(z=Xr(o,m),z!=null&&E.unshift(mu(o,z,C))):f||(z=Xr(o,m),z!=null&&E.push(mu(o,z,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var ZR=/\r\n?/g,JR=/\u0000|\uFFFD/g;function vT(i){return(typeof i=="string"?i:""+i).replace(ZR,`
`).replace(JR,"")}function ET(i,r){return r=vT(r),vT(i)===r}function zh(){}function nt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||jn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&jn(i,""+u);break;case"className":yi(i,"class",u);break;case"tabIndex":yi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(i,o,u);break;case"style":Nl(i,u,m);break;case"data":if(r!=="object"){yi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Xa(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&nt(i,r,"name",f.name,f,null),nt(i,r,"formEncType",f.formEncType,f,null),nt(i,r,"formMethod",f.formMethod,f,null),nt(i,r,"formTarget",f.formTarget,f,null)):(nt(i,r,"encType",f.encType,f,null),nt(i,r,"method",f.method,f,null),nt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Xa(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=zh);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Xa(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Me("beforetoggle",i),Me("toggle",i),Ps(i,"popover",u);break;case"xlinkActuate":Zt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Zt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Zt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Zt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Zt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Zt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ps(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Kd.get(o)||o,Ps(i,o,u))}}function bp(i,r,o,u,f,m){switch(o){case"style":Nl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?jn(i,u):(typeof u=="number"||typeof u=="bigint")&&jn(i,""+u);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"onClick":u!=null&&(i.onclick=zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ha.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Ct]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Ps(i,o,u)}}}function nn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",i),Me("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,m,E,o,null)}}f&&nt(i,r,"srcSet",o.srcSet,o,null),u&&nt(i,r,"src",o.src,o,null);return;case"input":Me("invalid",i);var S=m=E=f=null,C=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":E=Q;break;case"checked":C=Q;break;case"defaultChecked":z=Q;break;case"value":m=Q;break;case"defaultValue":S=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:nt(i,r,u,Q,o,null)}}Qr(i,m,S,C,z,E,f,!1),Ka(i);return;case"select":Me("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:nt(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Ki(i,!!u,r,!1):o!=null&&Ki(i,!!u,o,!0);return;case"textarea":Me("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:nt(i,r,E,S,o,null)}Yr(i,u,f,m),Ka(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(i,r,C,u,o,null)}return;case"dialog":Me("beforetoggle",i),Me("toggle",i),Me("cancel",i),Me("close",i);break;case"iframe":case"object":Me("load",i);break;case"video":case"audio":for(u=0;u<du.length;u++)Me(du[u],i);break;case"image":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"embed":case"source":case"link":Me("error",i),Me("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,z,u,o,null)}return;default:if(Dl(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&bp(i,r,Q,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&nt(i,r,S,u,o,null))}function e1(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,C=null,z=null,Q=null;for(j in o){var $=o[j];if(o.hasOwnProperty(j)&&$!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":C=$;default:u.hasOwnProperty(j)||nt(i,r,j,null,u,$)}}for(var B in u){var j=u[B];if($=o[B],u.hasOwnProperty(B)&&(j!=null||$!=null))switch(B){case"type":m=j;break;case"name":f=j;break;case"checked":z=j;break;case"defaultChecked":Q=j;break;case"value":E=j;break;case"defaultValue":S=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:j!==$&&nt(i,r,B,j,u,$)}}Nn(i,E,S,C,z,Q,m,f);return;case"select":j=E=S=B=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":j=C;default:u.hasOwnProperty(m)||nt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==C&&nt(i,r,f,m,u,C)}r=S,o=E,u=j,B!=null?Ki(i,!!o,B,!1):!!u!=!!o&&(r!=null?Ki(i,!!o,r,!0):Ki(i,!!o,o?[]:"",!1));return;case"textarea":j=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:nt(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":j=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&nt(i,r,E,f,u,m)}et(i,B,j);return;case"option":for(var ye in o)if(B=o[ye],o.hasOwnProperty(ye)&&B!=null&&!u.hasOwnProperty(ye))switch(ye){case"selected":i.selected=!1;break;default:nt(i,r,ye,null,u,B)}for(C in u)if(B=u[C],j=o[C],u.hasOwnProperty(C)&&B!==j&&(B!=null||j!=null))switch(C){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:nt(i,r,C,B,u,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in o)B=o[pe],o.hasOwnProperty(pe)&&B!=null&&!u.hasOwnProperty(pe)&&nt(i,r,pe,null,u,B);for(z in u)if(B=u[z],j=o[z],u.hasOwnProperty(z)&&B!==j&&(B!=null||j!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:nt(i,r,z,B,u,j)}return;default:if(Dl(r)){for(var it in o)B=o[it],o.hasOwnProperty(it)&&B!==void 0&&!u.hasOwnProperty(it)&&bp(i,r,it,void 0,u,B);for(Q in u)B=u[Q],j=o[Q],!u.hasOwnProperty(Q)||B===j||B===void 0&&j===void 0||bp(i,r,Q,B,u,j);return}}for(var P in o)B=o[P],o.hasOwnProperty(P)&&B!=null&&!u.hasOwnProperty(P)&&nt(i,r,P,null,u,B);for($ in u)B=u[$],j=o[$],!u.hasOwnProperty($)||B===j||B==null&&j==null||nt(i,r,$,B,u,j)}var Cp=null,Rp=null;function qh(i){return i.nodeType===9?i:i.ownerDocument}function TT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ST(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Ip(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Np=null;function t1(){var i=window.event;return i&&i.type==="popstate"?i===Np?!1:(Np=i,!0):(Np=null,!1)}var AT=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,wT=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof wT<"u"?function(i){return wT.resolve(null).then(i).catch(s1)}:AT;function s1(i){setTimeout(function(){throw i})}function Js(i){return i==="head"}function bT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&pu(E.documentElement),o&2&&pu(E.body),o&4)for(o=E.head,pu(o),E=o.firstChild;E;){var S=E.nextSibling,C=E.nodeName;E[jr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Au(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Au(r)}function Dp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Dp(o),ks(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function r1(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[jr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ai(i.nextSibling),i===null)break}return null}function a1(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ai(i.nextSibling),i===null))return null;return i}function Op(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function o1(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ai(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var xp=null;function CT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function RT(i,r,o){switch(r=qh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function pu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);ks(i)}var Zn=new Map,IT=new Set;function Bh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ds=ie.d;ie.d={f:l1,r:u1,D:c1,C:h1,L:f1,m:d1,X:p1,S:m1,M:g1};function l1(){var i=ds.f(),r=xh();return i||r}function u1(i){var r=gi(i);r!==null&&r.tag===5&&r.type==="form"?Kv(r):ds.r(i)}var Do=typeof document>"u"?null:document;function NT(i,r,o){var u=Do;if(u&&typeof r=="string"&&r){var f=Rt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),IT.has(f)||(IT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),nn(r,"link",i),Tt(r),u.head.appendChild(r)))}}function c1(i){ds.D(i),NT("dns-prefetch",i,null)}function h1(i,r){ds.C(i,r),NT("preconnect",i,r)}function f1(i,r,o){ds.L(i,r,o);var u=Do;if(u&&i&&r){var f='link[rel="preload"][as="'+Rt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Rt(o.imageSizes)+'"]')):f+='[href="'+Rt(i)+'"]';var m=f;switch(r){case"style":m=Oo(i);break;case"script":m=xo(i)}Zn.has(m)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Zn.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(gu(m))||r==="script"&&u.querySelector(_u(m))||(r=u.createElement("link"),nn(r,"link",i),Tt(r),u.head.appendChild(r)))}}function d1(i,r){ds.m(i,r);var o=Do;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xo(i)}if(!Zn.has(m)&&(i=v({rel:"modulepreload",href:i},r),Zn.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(_u(m)))return}u=o.createElement("link"),nn(u,"link",i),Tt(u),o.head.appendChild(u)}}}function m1(i,r,o){ds.S(i,r,o);var u=Do;if(u&&i){var f=pn(u).hoistableStyles,m=Oo(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(gu(m)))S.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Zn.get(m))&&Mp(i,o);var C=E=u.createElement("link");Tt(C),nn(C,"link",i),C._p=new Promise(function(z,Q){C.onload=z,C.onerror=Q}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,jh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function p1(i,r){ds.X(i,r);var o=Do;if(o&&i){var u=pn(o).hoistableScripts,f=xo(i),m=u.get(f);m||(m=o.querySelector(_u(f)),m||(i=v({src:i,async:!0},r),(r=Zn.get(f))&&kp(i,r),m=o.createElement("script"),Tt(m),nn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function g1(i,r){ds.M(i,r);var o=Do;if(o&&i){var u=pn(o).hoistableScripts,f=xo(i),m=u.get(f);m||(m=o.querySelector(_u(f)),m||(i=v({src:i,async:!0,type:"module"},r),(r=Zn.get(f))&&kp(i,r),m=o.createElement("script"),Tt(m),nn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function DT(i,r,o,u){var f=(f=Se.current)?Bh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Oo(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Oo(o.href);var m=pn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(gu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),Zn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Zn.set(i,o),m||_1(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=xo(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Oo(i){return'href="'+Rt(i)+'"'}function gu(i){return'link[rel="stylesheet"]['+i+"]"}function OT(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function _1(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),nn(r,"link",o),Tt(r),i.head.appendChild(r))}function xo(i){return'[src="'+Rt(i)+'"]'}function _u(i){return"script[async]"+i}function xT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return r.instance=u,Tt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Tt(u),nn(u,"style",f),jh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Oo(o.href);var m=i.querySelector(gu(f));if(m)return r.state.loading|=4,r.instance=m,Tt(m),m;u=OT(o),(f=Zn.get(f))&&Mp(u,f),m=(i.ownerDocument||i).createElement("link"),Tt(m);var E=m;return E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),nn(m,"link",u),r.state.loading|=4,jh(m,o.precedence,i),r.instance=m;case"script":return m=xo(o.src),(f=i.querySelector(_u(m)))?(r.instance=f,Tt(f),f):(u=o,(f=Zn.get(m))&&(u=v({},o),kp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Tt(f),nn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,jh(u,o.precedence,i));return r.instance}function jh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Mp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function kp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Fh=null;function MT(i,r,o){if(Fh===null){var u=new Map,f=Fh=new Map;f.set(o,u)}else f=Fh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[jr]||m[Pt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function kT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function y1(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function PT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var yu=null;function v1(){}function E1(i,r,o){if(yu===null)throw Error(s(475));var u=yu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Oo(o.href),m=i.querySelector(gu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Hh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Tt(m);return}m=i.ownerDocument||i,o=OT(o),(f=Zn.get(f))&&Mp(o,f),m=m.createElement("link"),Tt(m);var E=m;E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),nn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Hh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function T1(){if(yu===null)throw Error(s(475));var i=yu;return i.stylesheets&&i.count===0&&Pp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Pp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Hh(){if(this.count--,this.count===0){if(this.stylesheets)Pp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Gh=null;function Pp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Gh=new Map,r.forEach(S1,i),Gh=null,Hh.call(i))}function S1(i,r){if(!(r.state.loading&4)){var o=Gh.get(i);if(o)var u=o.get(null);else{o=new Map,Gh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Hh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var vu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function A1(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function VT(i,r,o,u,f,m,E,S,C,z,Q,$){return i=new A1(i,r,o,E,S,C,z,$),r=1,m===!0&&(r|=24),m=On(3,null,null,r),i.current=m,m.stateNode=i,r=gm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Em(m),i}function LT(i){return i?(i=lo,i):lo}function UT(i,r,o,u,f,m){f=LT(f),u.context===null?u.context=f:u.pendingContext=f,u=qs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Bs(i,u,r),o!==null&&(Vn(o,i,r),Xl(o,i,r))}function zT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Vp(i,r){zT(i,r),(i=i.alternate)&&zT(i,r)}function qT(i){if(i.tag===13){var r=oo(i,67108864);r!==null&&Vn(r,i,67108864),Vp(i,67108864)}}var Qh=!0;function w1(i,r,o,u){var f=G.T;G.T=null;var m=ie.p;try{ie.p=2,Lp(i,r,o,u)}finally{ie.p=m,G.T=f}}function b1(i,r,o,u){var f=G.T;G.T=null;var m=ie.p;try{ie.p=8,Lp(i,r,o,u)}finally{ie.p=m,G.T=f}}function Lp(i,r,o,u){if(Qh){var f=Up(u);if(f===null)wp(i,r,u,Yh,o),jT(i,u);else if(R1(f,i,r,o,u))u.stopPropagation();else if(jT(i,u),r&4&&-1<C1.indexOf(i)){for(;f!==null;){var m=gi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ti(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var C=1<<31-on(E);S.entanglements[1]|=C,E&=~C}Di(m),($e&6)===0&&(Dh=qn()+500,fu(0))}}break;case 13:S=oo(m,2),S!==null&&Vn(S,m,2),xh(),Vp(m,2)}if(m=Up(u),m===null&&wp(i,r,u,Yh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else wp(i,r,u,null,o)}}function Up(i){return i=Fn(i),zp(i)}var Yh=null;function zp(i){if(Yh=null,i=Gi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Yh=i,null}function BT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jd()){case _l:return 2;case qa:return 8;case Lr:case Fd:return 32;case Ba:return 268435456;default:return 32}default:return 32}}var qp=!1,er=null,tr=null,nr=null,Eu=new Map,Tu=new Map,ir=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jT(i,r){switch(i){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Eu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tu.delete(r.pointerId)}}function Su(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=gi(r),r!==null&&qT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function R1(i,r,o,u,f){switch(r){case"focusin":return er=Su(er,i,r,o,u,f),!0;case"dragenter":return tr=Su(tr,i,r,o,u,f),!0;case"mouseover":return nr=Su(nr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Eu.set(m,Su(Eu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Tu.set(m,Su(Tu.get(m)||null,i,r,o,u,f)),!0}return!1}function FT(i){var r=Gi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,xc(i.priority,function(){if(o.tag===13){var u=Pn();u=Os(u);var f=oo(o,u);f!==null&&Vn(f,o,u),Vp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Kh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Up(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Xi=u,o.target.dispatchEvent(u),Xi=null}else return r=gi(o),r!==null&&qT(r),i.blockedOn=o,!1;r.shift()}return!0}function HT(i,r,o){Kh(i)&&o.delete(r)}function I1(){qp=!1,er!==null&&Kh(er)&&(er=null),tr!==null&&Kh(tr)&&(tr=null),nr!==null&&Kh(nr)&&(nr=null),Eu.forEach(HT),Tu.forEach(HT)}function Xh(i,r){i.blockedOn===r&&(i.blockedOn=null,qp||(qp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,I1)))}var Wh=null;function GT(i){Wh!==i&&(Wh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wh===i&&(Wh=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(zp(u||o)===null)continue;break}var m=gi(o);m!==null&&(i.splice(r,3),r-=3,zm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Au(i){function r(C){return Xh(C,i)}er!==null&&Xh(er,i),tr!==null&&Xh(tr,i),nr!==null&&Xh(nr,i),Eu.forEach(r),Tu.forEach(r);for(var o=0;o<ir.length;o++){var u=ir[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)FT(o),o.blockedOn===null&&ir.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ct]||null;if(typeof m=="function")E||GT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ct]||null)S=E.formAction;else if(zp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),GT(o)}}}function Bp(i){this._internalRoot=i}$h.prototype.render=Bp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Pn();UT(o,u,i,r,null,null)},$h.prototype.unmount=Bp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;UT(i.current,2,null,i,null,null),xh(),r[Bn]=null}};function $h(i){this._internalRoot=i}$h.prototype.unstable_scheduleHydration=function(i){if(i){var r=xs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<ir.length&&r!==0&&r<ir[o].priority;o++);ir.splice(o,0,i),o===0&&FT(i)}};var QT=e.version;if(QT!=="19.1.1")throw Error(s(527,QT,"19.1.1"));ie.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var N1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zh.isDisabled&&Zh.supportsFiber)try{_t=Zh.inject(N1),We=Zh}catch{}}return bu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=lE,m=uE,E=cE,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=VT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Bn]=r.current,Ap(i),new Bp(r)},bu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=lE,E=uE,S=cE,C=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=VT(i,1,!0,r,o??null,u,f,m,E,S,C,z),r.context=LT(null),o=r.current,u=Pn(),u=Os(u),f=qs(u),f.callback=null,Bs(o,f,u),o=u,r.current.lanes=o,Hi(r,o),Di(r),i[Bn]=r.current,Ap(i),new $h(r)},bu.version="19.1.1",bu}var n0;function z1(){if(n0)return Hp.exports;n0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hp.exports=U1(),Hp.exports}var q1=z1();const B1=()=>{};var i0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw rl(e)},rl=function(n){return new Error("Firebase Database ("+AA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},j1=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let A=(d&15)<<2|g>>6,O=g&63;p||(O=64,c||(A=64)),s.push(t[v],t[T],t[A],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):j1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new F1;const A=l<<2|d>>4;if(s.push(A),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const q=g<<6&192|T;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bA=function(n){const e=wA(n);return t_.encodeByteArray(e,!0)},Ef=function(n){return bA(n).replace(/\./g,"")},Tf=function(n){try{return t_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n){return CA(void 0,n)}function CA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!G1(t)||(n[t]=CA(n[t],e[t]));return n}function G1(n){return n!=="__proto__"}/**
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
 */function Q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Y1=()=>Q1().__FIREBASE_DEFAULTS__,K1=()=>{if(typeof process>"u"||typeof i0>"u")return;const n=i0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},X1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tf(n[1]);return e&&JSON.parse(e)},sd=()=>{try{return B1()||Y1()||K1()||X1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},RA=n=>sd()?.emulatorHosts?.[n],IA=n=>{const e=RA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},NA=()=>sd()?.config,DA=n=>sd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Dr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function n_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function OA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ef(JSON.stringify(t)),Ef(JSON.stringify(c)),""].join(".")}const Pu={};function W1(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pu))Pu[e]?n.emulator.push(e):n.prod.push(e);return n}function $1(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let s0=!1;function i_(n,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||Pu[n]===e||Pu[n]||s0)return;Pu[n]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",l=W1().prod.length>0;function c(){const A=document.getElementById(s);A&&A.remove()}function d(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function p(A,O){A.setAttribute("width","24"),A.setAttribute("id",O),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{s0=!0,c()},A}function v(A,O){A.setAttribute("id",O),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=$1(s),O=t("text"),q=document.getElementById(O)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),me=t("preprendIcon"),le=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ue=A.element;d(ue),v(W,Y);const je=g();p(le,me),ue.append(le,q,W,je),document.body.appendChild(ue)}l?(q.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function Z1(){const n=sd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tI(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nI(){return AA.NODE_ADMIN===!0}function iI(){return!Z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function rI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="FirebaseError";class Is extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=aI,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?oI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Is(a,d,s)}}function oI(n,e){return n.replace(lI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const lI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n){return JSON.parse(n)}function Wt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Qu(Tf(l[0])||""),t=Qu(Tf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},uI=function(n){const e=MA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},cI=function(n){const e=MA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Sf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Af(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function yr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(r0(l)&&r0(c)){if(!yr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function r0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const A=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(A<<1|A>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const A=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=A}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function fI(n,e){const t=new dI(n,e);return t.subscribe.bind(t)}class dI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Kp),a.error===void 0&&(a.error=Kp),a.complete===void 0&&(a.complete=Kp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kp(){}function Yo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},rd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function dt(n){return n&&n._delegate?n._delegate:n}class vr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ps;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:_a})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=_a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_a){return this.instances.has(e)}getOptions(e=_a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_a){return this.component?this.component.multipleInstances?e:_a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(n){return n===_a?void 0:n}function yI(n){return n.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const EI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},TI=ke.INFO,SI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},AI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=SI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const wI=(n,e)=>e.some(t=>n instanceof t);let a0,o0;function bI(){return a0||(a0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return o0||(o0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kA=new WeakMap,dg=new WeakMap,PA=new WeakMap,Xp=new WeakMap,r_=new WeakMap;function RI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(cr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&kA.set(t,n)}).catch(()=>{}),r_.set(e,n),e}function II(n){if(dg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});dg.set(n,e)}let mg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||PA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function NI(n){mg=n(mg)}function DI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Wp(this),e,...t);return PA.set(s,e.sort?e.sort():[e]),cr(s)}:CI().includes(n)?function(...e){return n.apply(Wp(this),e),cr(kA.get(this))}:function(...e){return cr(n.apply(Wp(this),e))}}function OI(n){return typeof n=="function"?DI(n):(n instanceof IDBTransaction&&II(n),wI(n,bI())?new Proxy(n,mg):n)}function cr(n){if(n instanceof IDBRequest)return RI(n);if(Xp.has(n))return Xp.get(n);const e=OI(n);return e!==n&&(Xp.set(n,e),r_.set(e,n)),e}const Wp=n=>r_.get(n);function xI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=cr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(cr(c.result),p.oldVersion,p.newVersion,cr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const MI=["get","getKey","getAll","getAllKeys","count"],kI=["put","add","delete","clear"],$p=new Map;function l0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($p.get(e))return $p.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=kI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||MI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return $p.set(e,l),l}NI(n=>({...n,get:(e,t,s)=>l0(e,t)||n.get(e,t,s),has:(e,t)=>!!l0(e,t)||n.has(e,t)}));/**
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
 */class PI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(VI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function VI(n){return n.getComponent()?.type==="VERSION"}const pg="@firebase/app",u0="0.14.1";/**
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
 */const Ss=new ad("@firebase/app"),LI="@firebase/app-compat",UI="@firebase/analytics-compat",zI="@firebase/analytics",qI="@firebase/app-check-compat",BI="@firebase/app-check",jI="@firebase/auth",FI="@firebase/auth-compat",HI="@firebase/database",GI="@firebase/data-connect",QI="@firebase/database-compat",YI="@firebase/functions",KI="@firebase/functions-compat",XI="@firebase/installations",WI="@firebase/installations-compat",$I="@firebase/messaging",ZI="@firebase/messaging-compat",JI="@firebase/performance",eN="@firebase/performance-compat",tN="@firebase/remote-config",nN="@firebase/remote-config-compat",iN="@firebase/storage",sN="@firebase/storage-compat",rN="@firebase/firestore",aN="@firebase/ai",oN="@firebase/firestore-compat",lN="firebase",uN="12.1.0";/**
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
 */const gg="[DEFAULT]",cN={[pg]:"fire-core",[LI]:"fire-core-compat",[zI]:"fire-analytics",[UI]:"fire-analytics-compat",[BI]:"fire-app-check",[qI]:"fire-app-check-compat",[jI]:"fire-auth",[FI]:"fire-auth-compat",[HI]:"fire-rtdb",[GI]:"fire-data-connect",[QI]:"fire-rtdb-compat",[YI]:"fire-fn",[KI]:"fire-fn-compat",[XI]:"fire-iid",[WI]:"fire-iid-compat",[$I]:"fire-fcm",[ZI]:"fire-fcm-compat",[JI]:"fire-perf",[eN]:"fire-perf-compat",[tN]:"fire-rc",[nN]:"fire-rc-compat",[iN]:"fire-gcs",[sN]:"fire-gcs-compat",[rN]:"fire-fst",[oN]:"fire-fst-compat",[aN]:"fire-vertex","fire-js":"fire-js",[lN]:"fire-js-all"};/**
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
 */const wf=new Map,hN=new Map,_g=new Map;function c0(n,e){try{n.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ba(n){const e=n.name;if(_g.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;_g.set(e,n);for(const t of wf.values())c0(t,n);for(const t of hN.values())c0(t,n);return!0}function od(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ln(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new fc("app","Firebase",fN);/**
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
 */class dN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Pa=uN;function VA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:gg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw hr.create("bad-app-name",{appName:String(a)});if(t||(t=NA()),!t)throw hr.create("no-options");const l=wf.get(a);if(l){if(yr(t,l.options)&&yr(s,l.config))return l;throw hr.create("duplicate-app",{appName:a})}const c=new vI(a);for(const p of _g.values())c.addComponent(p);const d=new dN(t,s,c);return wf.set(a,d),d}function a_(n=gg){const e=wf.get(n);if(!e&&n===gg&&NA())return VA();if(!e)throw hr.create("no-app",{appName:n});return e}function xi(n,e,t){let s=cN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(c.join(" "));return}ba(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mN="firebase-heartbeat-database",pN=1,Yu="firebase-heartbeat-store";let Zp=null;function LA(){return Zp||(Zp=xI(mN,pN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yu)}catch(t){console.warn(t)}}}}).catch(n=>{throw hr.create("idb-open",{originalErrorMessage:n.message})})),Zp}async function gN(n){try{const t=(await LA()).transaction(Yu),s=await t.objectStore(Yu).get(UA(n));return await t.done,s}catch(e){if(e instanceof Is)Ss.warn(e.message);else{const t=hr.create("idb-get",{originalErrorMessage:e?.message});Ss.warn(t.message)}}}async function h0(n,e){try{const s=(await LA()).transaction(Yu,"readwrite");await s.objectStore(Yu).put(e,UA(n)),await s.done}catch(t){if(t instanceof Is)Ss.warn(t.message);else{const s=hr.create("idb-set",{originalErrorMessage:t?.message});Ss.warn(s.message)}}}function UA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _N=1024,yN=30;class vN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=f0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>yN){const a=SN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ss.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=f0(),{heartbeatsToSend:t,unsentEntries:s}=EN(this._heartbeatsCache.heartbeats),a=Ef(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ss.warn(e),""}}}function f0(){return new Date().toISOString().substring(0,10)}function EN(n,e=_N){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),d0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),d0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?rI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return h0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return h0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function d0(n){return Ef(JSON.stringify({version:2,heartbeats:n})).length}function SN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function AN(n){ba(new vr("platform-logger",e=>new PI(e),"PRIVATE")),ba(new vr("heartbeat",e=>new vN(e),"PRIVATE")),xi(pg,u0,n),xi(pg,u0,"esm2020"),xi("fire-js","")}AN("");var wN="firebase",bN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi(wN,bN,"app");function zA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CN=zA,qA=new fc("auth","Firebase",zA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new ad("@firebase/auth");function RN(n,...e){bf.logLevel<=ke.WARN&&bf.warn(`Auth (${Pa}): ${n}`,...e)}function lf(n,...e){bf.logLevel<=ke.ERROR&&bf.error(`Auth (${Pa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n,...e){throw l_(n,...e)}function ci(n,...e){return l_(n,...e)}function o_(n,e,t){const s={...CN(),[e]:t};return new fc("auth","Firebase",s).create(e,{appName:n.name})}function fr(n){return o_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ui(n,"argument-error"),o_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function l_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return qA.create(n,...e)}function Ee(n,e,...t){if(!n)throw l_(e,...t)}function _s(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lf(e),new Error(e)}function As(n,e){n||_s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){return typeof self<"u"&&self.location?.href||""}function NN(){return m0()==="http:"||m0()==="https:"}function m0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||eI()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.shortDelay=e,this.longDelay=t,As(t>e,"Short delay should be less than long delay!"),this.isMobile=s_()||xA()}get(){return DN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,e){As(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kN=new dc(3e4,6e4);function ld(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ol(n,e,t,s,a={}){return jA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=al({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return J1()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(g.credentials="include"),BA.fetch()(await HA(n,n.config.apiHost,t,d),g)})}async function jA(n,e,t){n._canInitEmulator=!1;const s={...xN,...e};try{const a=new PN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Jh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Jh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Jh(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw o_(n,v,g);Ui(n,v)}}catch(a){if(a instanceof Is)throw a;Ui(n,"network-request-failed",{message:String(a)})}}async function FA(n,e,t,s,a={}){const l=await ol(n,e,t,s,a);return"mfaPendingCredential"in l&&Ui(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function HA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?u_(n.config,a):`${n.config.apiScheme}://${a}`;return MN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class PN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ci(this.auth,"network-request-failed")),kN.get())})}}function Jh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ci(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(n,e){return ol(n,"POST","/v1/accounts:delete",e)}async function Cf(n,e){return ol(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LN(n,e=!1){const t=dt(n),s=await t.getIdToken(e),a=c_(s);Ee(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Vu(Jp(a.auth_time)),issuedAtTime:Vu(Jp(a.iat)),expirationTime:Vu(Jp(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Jp(n){return Number(n)*1e3}function c_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return lf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Tf(t);return a?JSON.parse(a):(lf("Failed to decode base64 JWT payload"),null)}catch(a){return lf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function p0(n){const e=c_(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Is&&UN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function UN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vu(this.lastLoginAt),this.creationTime=Vu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rf(n){const e=n.auth,t=await n.getIdToken(),s=await Ku(n,Cf(e,{idToken:t}));Ee(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?GA(a.providerUserInfo):[],c=BN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new vg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function qN(n){const e=dt(n);await Rf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function GA(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(n,e){const t=await jA(n,{},async()=>{const s=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await HA(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(p.credentials="include"),BA.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function FN(n,e){return ol(n,"POST","/v2/accounts:revokeToken",ld(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=p0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await jN(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new zo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ee(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class li{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new vg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ku(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LN(this,e)}reload(){return qN(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new li({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Rf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Ku(this,VN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:O,providerData:q,stsTokenManager:Y}=t;Ee(T&&Y,e,"internal-error");const W=zo.fromJSON(this.name,Y);Ee(typeof T=="string",e,"internal-error"),rr(s,e.name),rr(a,e.name),Ee(typeof A=="boolean",e,"internal-error"),Ee(typeof O=="boolean",e,"internal-error"),rr(l,e.name),rr(c,e.name),rr(d,e.name),rr(p,e.name),rr(g,e.name),rr(v,e.name);const me=new li({uid:T,auth:e,email:a,emailVerified:A,displayName:s,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:W,createdAt:g,lastLoginAt:v});return q&&Array.isArray(q)&&(me.providerData=q.map(le=>({...le}))),p&&(me._redirectEventId=p),me}static async _fromIdTokenResponse(e,t,s=!1){const a=new zo;a.updateFromServerResponse(t);const l=new li({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Rf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ee(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?GA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new zo;d.updateFromIdToken(s);const p=new li({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;function ys(n){As(n instanceof Function,"Expected a class definition");let e=g0.get(n);return e?(As(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,g0.set(n,e),e)}/**
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
 */class QA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}QA.type="NONE";const _0=QA;/**
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
 */function uf(n,e,t){return`firebase:${n}:${e}:${t}`}class qo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=uf(this.userKey,a.apiKey,l),this.fullPersistenceKey=uf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Cf(this.auth,{idToken:e}).catch(()=>{});return t?li._fromGetAccountInfoResponse(this.auth,t,e):null}return li._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new qo(ys(_0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ys(_0);const c=uf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const A=await Cf(e,{idToken:v}).catch(()=>{});if(!A)break;T=await li._fromGetAccountInfoResponse(e,A,v)}else T=li._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new qo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new qo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZA(e))return"Blackberry";if(JA(e))return"Webos";if(KA(e))return"Safari";if((e.includes("chrome/")||XA(e))&&!e.includes("edge/"))return"Chrome";if($A(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function YA(n=dn()){return/firefox\//i.test(n)}function KA(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XA(n=dn()){return/crios\//i.test(n)}function WA(n=dn()){return/iemobile/i.test(n)}function $A(n=dn()){return/android/i.test(n)}function ZA(n=dn()){return/blackberry/i.test(n)}function JA(n=dn()){return/webos/i.test(n)}function h_(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function HN(n=dn()){return h_(n)&&!!window.navigator?.standalone}function GN(){return tI()&&document.documentMode===10}function ew(n=dn()){return h_(n)||$A(n)||JA(n)||ZA(n)||/windows phone/i.test(n)||WA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n,e=[]){let t;switch(n){case"Browser":t=y0(dn());break;case"Worker":t=`${y0(dn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pa}/${s}`}/**
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
 */class QN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function YN(n,e={}){return ol(n,"GET","/v2/passwordPolicy",ld(n,e))}/**
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
 */const KN=6;class XN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??KN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v0(this),this.idTokenSubscription=new v0(this),this.beforeStateQueue=new QN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ys(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cf(this,{idToken:e}),s=await li._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ln(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(fr(this));const t=e?dt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YN(this),t=new XN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await FN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ys(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[ys(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&RN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function mc(n){return dt(n)}class v0{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $N(n){f_=n}function ZN(n){return f_.loadJS(n)}function JN(){return f_.gapiScript}function eD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(n,e){const t=od(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(yr(l,e??{}))return a;Ui(a,"already-initialized")}return t.initialize({options:e})}function nD(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ys);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function iD(n,e,t){const s=mc(n);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=nw(e),{host:c,port:d}=sD(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(yr(g,s.config.emulator)&&yr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Dr(c)?(n_(`${l}//${c}${p}`),i_("Auth",!0)):rD()}function nw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sD(n){const e=nw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:E0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:E0(c)}}}function E0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,t){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n,e){return FA(n,"POST","/v1/accounts:signInWithIdp",ld(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="http://localhost";class Ca extends iw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ca(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ui("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Ca(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Bo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bo(e,t)}buildRequest(){const e={requestUri:aD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=al(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pc extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends pc{constructor(){super("facebook.com")}static credential(e){return Ca._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ca._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return gs.credential(t,s)}catch{return null}}}gs.GOOGLE_SIGN_IN_METHOD="google.com";gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends pc{constructor(){super("github.com")}static credential(e){return Ca._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends pc{constructor(){super("twitter.com")}static credential(e,t){return Ca._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return lr.credential(t,s)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await li._fromIdTokenResponse(e,s,a),c=T0(s);return new Ra({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=T0(s);return new Ra({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function T0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Is{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,If.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new If(e,t,s,a)}}function sw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?If._fromErrorAndOperation(n,l,e,s):l})}async function oD(n,e,t=!1){const s=await Ku(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ra._forOperation(n,"link",s)}/**
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
 */async function lD(n,e,t=!1){const{auth:s}=n;if(Ln(s.app))return Promise.reject(fr(s));const a="reauthenticate";try{const l=await Ku(n,sw(s,a,e,n),t);Ee(l.idToken,s,"internal-error");const c=c_(l.idToken);Ee(c,s,"internal-error");const{sub:d}=c;return Ee(n.uid===d,s,"user-mismatch"),Ra._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ui(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(n,e,t=!1){if(Ln(n.app))return Promise.reject(fr(n));const s="signIn",a=await sw(n,s,e),l=await Ra._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(n,e){return FA(n,"POST","/v1/accounts:signInWithCustomToken",ld(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(n,e){if(Ln(n.app))return Promise.reject(fr(n));const t=mc(n),s=await cD(t,{token:e,returnSecureToken:!0}),a=await Ra._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function fD(n,e,t,s){return dt(n).onIdTokenChanged(e,t,s)}function dD(n,e,t){return dt(n).beforeAuthStateChanged(e,t)}function mD(n,e,t,s){return dt(n).onAuthStateChanged(e,t,s)}function pD(n){return dt(n).signOut()}const Nf="__sak";/**
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
 */class rw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nf,"1"),this.storage.removeItem(Nf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=1e3,_D=10;class aw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);GN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,_D):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aw.type="LOCAL";const yD=aw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ow.type="SESSION";const lw=ow;/**
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
 */function vD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new ud(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await vD(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ud.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ED{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=m_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(A.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){return window}function TD(n){Mi().location.href=n}/**
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
 */function uw(){return typeof Mi().WorkerGlobalScope<"u"&&typeof Mi().importScripts=="function"}async function SD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AD(){return navigator?.serviceWorker?.controller||null}function wD(){return uw()?self:null}/**
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
 */const cw="firebaseLocalStorageDb",bD=1,Df="firebaseLocalStorage",hw="fbase_key";class gc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cd(n,e){return n.transaction([Df],e?"readwrite":"readonly").objectStore(Df)}function CD(){const n=indexedDB.deleteDatabase(cw);return new gc(n).toPromise()}function Eg(){const n=indexedDB.open(cw,bD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Df,{keyPath:hw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Df)?e(s):(s.close(),await CD(),e(await Eg()))})})}async function S0(n,e,t){const s=cd(n,!0).put({[hw]:e,value:t});return new gc(s).toPromise()}async function RD(n,e){const t=cd(n,!1).get(e),s=await new gc(t).toPromise();return s===void 0?null:s.value}function A0(n,e){const t=cd(n,!0).delete(e);return new gc(t).toPromise()}const ID=800,ND=3;class fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ND)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ud._getInstance(wD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await SD(),!this.activeServiceWorker)return;this.sender=new ED(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eg();return await S0(e,Nf,"1"),await A0(e,Nf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>S0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>RD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>A0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=cd(a,!1).getAll();return new gc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fw.type="LOCAL";const DD=fw;new dc(3e4,6e4);/**
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
 */function dw(n,e){return e?ys(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class p_ extends iw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OD(n){return uD(n.auth,new p_(n),n.bypassAuthState)}function xD(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),lD(t,new p_(n),n.bypassAuthState)}async function MD(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),oD(t,new p_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OD;case"linkViaPopup":case"linkViaRedirect":return MD;case"reauthViaPopup":case"reauthViaRedirect":return xD;default:Ui(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new dc(2e3,1e4);async function PD(n,e,t){if(Ln(n.app))return Promise.reject(ci(n,"operation-not-supported-in-this-environment"));const s=mc(n);IN(n,e,d_);const a=dw(s,t);return new va(s,"signInViaPopup",e,a).executeNotNull()}class va extends mw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,va.currentPopupAction&&va.currentPopupAction.cancel(),va.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=m_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,va.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kD.get())};e()}}va.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="pendingRedirect",cf=new Map;class LD extends mw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=cf.get(this.auth._key());if(!e){try{const s=await UD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}cf.set(this.auth._key(),e)}return this.bypassAuthState||cf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UD(n,e){const t=BD(e),s=qD(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function zD(n,e){cf.set(n._key(),e)}function qD(n){return ys(n._redirectPersistence)}function BD(n){return uf(VD,n.config.apiKey,n.name)}async function jD(n,e,t=!1){if(Ln(n.app))return Promise.reject(fr(n));const s=mc(n),a=dw(s,e),c=await new LD(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=600*1e3;class HD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!pw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ci(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FD&&this.cachedEventUids.clear(),this.cachedEventUids.has(w0(e))}saveEventToCache(e){this.cachedEventUids.add(w0(e)),this.lastProcessedEventTime=Date.now()}}function w0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function GD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(n,e={}){return ol(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KD=/^https?/;async function XD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QD(n);for(const t of e)try{if(WD(t))return}catch{}Ui(n,"unauthorized-domain")}function WD(n){const e=yg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!KD.test(t))return!1;if(YD.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const $D=new dc(3e4,6e4);function b0(){const n=Mi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ZD(n){return new Promise((e,t)=>{function s(){b0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b0(),t(ci(n,"network-request-failed"))},timeout:$D.get()})}if(Mi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Mi().gapi?.load)s();else{const a=eD("iframefcb");return Mi()[a]=()=>{gapi.load?s():t(ci(n,"network-request-failed"))},ZN(`${JN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw hf=null,e})}let hf=null;function JD(n){return hf=hf||ZD(n),hf}/**
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
 */const e2=new dc(5e3,15e3),t2="__/auth/iframe",n2="emulator/auth/iframe",i2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r2(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?u_(e,n2):`https://${n.config.authDomain}/${t2}`,s={apiKey:e.apiKey,appName:n.name,v:Pa},a=s2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${al(s).slice(1)}`}async function a2(n){const e=await JD(n),t=Mi().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:r2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ci(n,"network-request-failed"),d=Mi().setTimeout(()=>{l(c)},e2.get());function p(){Mi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const o2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l2=500,u2=600,c2="_blank",h2="http://localhost";class C0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f2(n,e,t,s=l2,a=u2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...o2,width:s.toString(),height:a.toString(),top:l,left:c},g=dn().toLowerCase();t&&(d=XA(g)?c2:t),YA(g)&&(e=e||h2,p.scrollbars="yes");const v=Object.entries(p).reduce((A,[O,q])=>`${A}${O}=${q},`,"");if(HN(g)&&d!=="_self")return d2(e||"",d),new C0(null);const T=window.open(e||"",d,v);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new C0(T)}function d2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const m2="__/auth/handler",p2="emulator/auth/handler",g2=encodeURIComponent("fac");async function R0(n,e,t,s,a,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pa,eventId:a};if(e instanceof d_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Sf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof pc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${g2}=${encodeURIComponent(p)}`:"";return`${_2(n)}?${al(d).slice(1)}${g}`}function _2({config:n}){return n.emulator?u_(n,p2):`https://${n.authDomain}/${m2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="webStorageSupport";class y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=jD,this._overrideRedirectResult=zD}async _openPopup(e,t,s,a){As(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await R0(e,t,s,yg(),a);return f2(e,l,m_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await R0(e,t,s,yg(),a);return TD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(As(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await a2(e),s=new HD(e);return t.register("authEvent",a=>(Ee(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eg,{type:eg},a=>{const l=a?.[0]?.[eg];l!==void 0&&t(!!l),Ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ew()||KA()||h_()}}const v2=y2;var I0="@firebase/auth",N0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function S2(n){ba(new vr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tw(n)},g=new WN(s,a,l,p);return nD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ba(new vr("auth-internal",e=>{const t=mc(e.getProvider("auth").getImmediate());return(s=>new E2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(I0,N0,T2(n)),xi(I0,N0,"esm2020")}/**
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
 */const A2=300,w2=DA("authIdTokenMaxAge")||A2;let D0=null;const b2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>w2)return;const a=t?.token;D0!==a&&(D0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function C2(n=a_()){const e=od(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tD(n,{popupRedirectResolver:v2,persistence:[DD,yD,lw]}),s=DA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=b2(l.toString());dD(t,c,()=>c(t.currentUser)),fD(t,d=>c(d))}}const a=RA("auth");return a&&iD(t,`http://${a}`),t}function R2(){return document.getElementsByTagName("head")?.[0]??document}$N({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=ci("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",R2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});S2("Browser");var O0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,gw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,b){function I(){}I.prototype=b.prototype,k.D=b.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(x,M,V){for(var R=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)R[$t-2]=arguments[$t];return b.prototype[M].apply(x,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,b,I){I||(I=0);var x=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)x[M]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(M=0;16>M;++M)x[M]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=k.g[0],I=k.g[1],M=k.g[2];var V=k.g[3],R=b+(V^I&(M^V))+x[0]+3614090360&4294967295;b=I+(R<<7&4294967295|R>>>25),R=V+(M^b&(I^M))+x[1]+3905402710&4294967295,V=b+(R<<12&4294967295|R>>>20),R=M+(I^V&(b^I))+x[2]+606105819&4294967295,M=V+(R<<17&4294967295|R>>>15),R=I+(b^M&(V^b))+x[3]+3250441966&4294967295,I=M+(R<<22&4294967295|R>>>10),R=b+(V^I&(M^V))+x[4]+4118548399&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(M^b&(I^M))+x[5]+1200080426&4294967295,V=b+(R<<12&4294967295|R>>>20),R=M+(I^V&(b^I))+x[6]+2821735955&4294967295,M=V+(R<<17&4294967295|R>>>15),R=I+(b^M&(V^b))+x[7]+4249261313&4294967295,I=M+(R<<22&4294967295|R>>>10),R=b+(V^I&(M^V))+x[8]+1770035416&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(M^b&(I^M))+x[9]+2336552879&4294967295,V=b+(R<<12&4294967295|R>>>20),R=M+(I^V&(b^I))+x[10]+4294925233&4294967295,M=V+(R<<17&4294967295|R>>>15),R=I+(b^M&(V^b))+x[11]+2304563134&4294967295,I=M+(R<<22&4294967295|R>>>10),R=b+(V^I&(M^V))+x[12]+1804603682&4294967295,b=I+(R<<7&4294967295|R>>>25),R=V+(M^b&(I^M))+x[13]+4254626195&4294967295,V=b+(R<<12&4294967295|R>>>20),R=M+(I^V&(b^I))+x[14]+2792965006&4294967295,M=V+(R<<17&4294967295|R>>>15),R=I+(b^M&(V^b))+x[15]+1236535329&4294967295,I=M+(R<<22&4294967295|R>>>10),R=b+(M^V&(I^M))+x[1]+4129170786&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^M&(b^I))+x[6]+3225465664&4294967295,V=b+(R<<9&4294967295|R>>>23),R=M+(b^I&(V^b))+x[11]+643717713&4294967295,M=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(M^V))+x[0]+3921069994&4294967295,I=M+(R<<20&4294967295|R>>>12),R=b+(M^V&(I^M))+x[5]+3593408605&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^M&(b^I))+x[10]+38016083&4294967295,V=b+(R<<9&4294967295|R>>>23),R=M+(b^I&(V^b))+x[15]+3634488961&4294967295,M=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(M^V))+x[4]+3889429448&4294967295,I=M+(R<<20&4294967295|R>>>12),R=b+(M^V&(I^M))+x[9]+568446438&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^M&(b^I))+x[14]+3275163606&4294967295,V=b+(R<<9&4294967295|R>>>23),R=M+(b^I&(V^b))+x[3]+4107603335&4294967295,M=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(M^V))+x[8]+1163531501&4294967295,I=M+(R<<20&4294967295|R>>>12),R=b+(M^V&(I^M))+x[13]+2850285829&4294967295,b=I+(R<<5&4294967295|R>>>27),R=V+(I^M&(b^I))+x[2]+4243563512&4294967295,V=b+(R<<9&4294967295|R>>>23),R=M+(b^I&(V^b))+x[7]+1735328473&4294967295,M=V+(R<<14&4294967295|R>>>18),R=I+(V^b&(M^V))+x[12]+2368359562&4294967295,I=M+(R<<20&4294967295|R>>>12),R=b+(I^M^V)+x[5]+4294588738&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^M)+x[8]+2272392833&4294967295,V=b+(R<<11&4294967295|R>>>21),R=M+(V^b^I)+x[11]+1839030562&4294967295,M=V+(R<<16&4294967295|R>>>16),R=I+(M^V^b)+x[14]+4259657740&4294967295,I=M+(R<<23&4294967295|R>>>9),R=b+(I^M^V)+x[1]+2763975236&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^M)+x[4]+1272893353&4294967295,V=b+(R<<11&4294967295|R>>>21),R=M+(V^b^I)+x[7]+4139469664&4294967295,M=V+(R<<16&4294967295|R>>>16),R=I+(M^V^b)+x[10]+3200236656&4294967295,I=M+(R<<23&4294967295|R>>>9),R=b+(I^M^V)+x[13]+681279174&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^M)+x[0]+3936430074&4294967295,V=b+(R<<11&4294967295|R>>>21),R=M+(V^b^I)+x[3]+3572445317&4294967295,M=V+(R<<16&4294967295|R>>>16),R=I+(M^V^b)+x[6]+76029189&4294967295,I=M+(R<<23&4294967295|R>>>9),R=b+(I^M^V)+x[9]+3654602809&4294967295,b=I+(R<<4&4294967295|R>>>28),R=V+(b^I^M)+x[12]+3873151461&4294967295,V=b+(R<<11&4294967295|R>>>21),R=M+(V^b^I)+x[15]+530742520&4294967295,M=V+(R<<16&4294967295|R>>>16),R=I+(M^V^b)+x[2]+3299628645&4294967295,I=M+(R<<23&4294967295|R>>>9),R=b+(M^(I|~V))+x[0]+4096336452&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~M))+x[7]+1126891415&4294967295,V=b+(R<<10&4294967295|R>>>22),R=M+(b^(V|~I))+x[14]+2878612391&4294967295,M=V+(R<<15&4294967295|R>>>17),R=I+(V^(M|~b))+x[5]+4237533241&4294967295,I=M+(R<<21&4294967295|R>>>11),R=b+(M^(I|~V))+x[12]+1700485571&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~M))+x[3]+2399980690&4294967295,V=b+(R<<10&4294967295|R>>>22),R=M+(b^(V|~I))+x[10]+4293915773&4294967295,M=V+(R<<15&4294967295|R>>>17),R=I+(V^(M|~b))+x[1]+2240044497&4294967295,I=M+(R<<21&4294967295|R>>>11),R=b+(M^(I|~V))+x[8]+1873313359&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~M))+x[15]+4264355552&4294967295,V=b+(R<<10&4294967295|R>>>22),R=M+(b^(V|~I))+x[6]+2734768916&4294967295,M=V+(R<<15&4294967295|R>>>17),R=I+(V^(M|~b))+x[13]+1309151649&4294967295,I=M+(R<<21&4294967295|R>>>11),R=b+(M^(I|~V))+x[4]+4149444226&4294967295,b=I+(R<<6&4294967295|R>>>26),R=V+(I^(b|~M))+x[11]+3174756917&4294967295,V=b+(R<<10&4294967295|R>>>22),R=M+(b^(V|~I))+x[2]+718787259&4294967295,M=V+(R<<15&4294967295|R>>>17),R=I+(V^(M|~b))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+b&4294967295,k.g[1]=k.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+M&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,b){b===void 0&&(b=k.length);for(var I=b-this.blockSize,x=this.B,M=this.h,V=0;V<b;){if(M==0)for(;V<=I;)a(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<b;)if(x[M++]=k.charCodeAt(V++),M==this.blockSize){a(this,x),M=0;break}}else for(;V<b;)if(x[M++]=k[V++],M==this.blockSize){a(this,x),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var b=1;b<k.length-8;++b)k[b]=0;var I=8*this.o;for(b=k.length-8;b<k.length;++b)k[b]=I&255,I/=256;for(this.u(k),k=Array(16),b=I=0;4>b;++b)for(var x=0;32>x;x+=8)k[I++]=this.g[b]>>>x&255;return k};function l(k,b){var I=d;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=b(k)}function c(k,b){this.h=b;for(var I=[],x=!0,M=k.length-1;0<=M;M--){var V=k[M]|0;x&&V==b||(I[M]=V,x=!1)}this.g=I}var d={};function p(k){return-128<=k&&128>k?l(k,function(b){return new c([b|0],0>b?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return W(g(-k));for(var b=[],I=1,x=0;k>=I;x++)b[x]=k/I|0,I*=4294967296;return new c(b,0)}function v(k,b){if(k.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k.charAt(0)=="-")return W(v(k.substring(1),b));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(b,8)),x=T,M=0;M<k.length;M+=8){var V=Math.min(8,k.length-M),R=parseInt(k.substring(M,M+V),b);8>V?(V=g(Math.pow(b,V)),x=x.j(V).add(g(R))):(x=x.j(I),x=x.add(g(R)))}return x}var T=p(0),A=p(1),O=p(16777216);n=c.prototype,n.m=function(){if(Y(this))return-W(this).m();for(var k=0,b=1,I=0;I<this.g.length;I++){var x=this.i(I);k+=(0<=x?x:4294967296+x)*b,b*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if(Y(this))return"-"+W(this).toString(k);for(var b=g(Math.pow(k,6)),I=this,x="";;){var M=je(I,b).g;I=me(I,M.j(b));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=M,q(I))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(var b=0;b<k.g.length;b++)if(k.g[b]!=0)return!1;return!0}function Y(k){return k.h==-1}n.l=function(k){return k=me(this,k),Y(k)?-1:q(k)?0:1};function W(k){for(var b=k.g.length,I=[],x=0;x<b;x++)I[x]=~k.g[x];return new c(I,~k.h).add(A)}n.abs=function(){return Y(this)?W(this):this},n.add=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],x=0,M=0;M<=b;M++){var V=x+(this.i(M)&65535)+(k.i(M)&65535),R=(V>>>16)+(this.i(M)>>>16)+(k.i(M)>>>16);x=R>>>16,V&=65535,R&=65535,I[M]=R<<16|V}return new c(I,I[I.length-1]&-2147483648?-1:0)};function me(k,b){return k.add(W(b))}n.j=function(k){if(q(this)||q(k))return T;if(Y(this))return Y(k)?W(this).j(W(k)):W(W(this).j(k));if(Y(k))return W(this.j(W(k)));if(0>this.l(O)&&0>k.l(O))return g(this.m()*k.m());for(var b=this.g.length+k.g.length,I=[],x=0;x<2*b;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var M=0;M<k.g.length;M++){var V=this.i(x)>>>16,R=this.i(x)&65535,$t=k.i(M)>>>16,gt=k.i(M)&65535;I[2*x+2*M]+=R*gt,le(I,2*x+2*M),I[2*x+2*M+1]+=V*gt,le(I,2*x+2*M+1),I[2*x+2*M+1]+=R*$t,le(I,2*x+2*M+1),I[2*x+2*M+2]+=V*$t,le(I,2*x+2*M+2)}for(x=0;x<b;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=b;x<2*b;x++)I[x]=0;return new c(I,0)};function le(k,b){for(;(k[b]&65535)!=k[b];)k[b+1]+=k[b]>>>16,k[b]&=65535,b++}function ue(k,b){this.g=k,this.h=b}function je(k,b){if(q(b))throw Error("division by zero");if(q(k))return new ue(T,T);if(Y(k))return b=je(W(k),b),new ue(W(b.g),W(b.h));if(Y(b))return b=je(k,W(b)),new ue(W(b.g),b.h);if(30<k.g.length){if(Y(k)||Y(b))throw Error("slowDivide_ only works with positive integers.");for(var I=A,x=b;0>=x.l(k);)I=Te(I),x=Te(x);var M=Fe(I,1),V=Fe(x,1);for(x=Fe(x,2),I=Fe(I,2);!q(x);){var R=V.add(x);0>=R.l(k)&&(M=M.add(I),V=R),x=Fe(x,1),I=Fe(I,1)}return b=me(k,M.j(b)),new ue(M,b)}for(M=T;0<=k.l(b);){for(I=Math.max(1,Math.floor(k.m()/b.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=g(I),R=V.j(b);Y(R)||0<R.l(k);)I-=x,V=g(I),R=V.j(b);q(V)&&(V=A),M=M.add(V),k=me(k,R)}return new ue(M,k)}n.A=function(k){return je(this,k).h},n.and=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],x=0;x<b;x++)I[x]=this.i(x)&k.i(x);return new c(I,this.h&k.h)},n.or=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],x=0;x<b;x++)I[x]=this.i(x)|k.i(x);return new c(I,this.h|k.h)},n.xor=function(k){for(var b=Math.max(this.g.length,k.g.length),I=[],x=0;x<b;x++)I[x]=this.i(x)^k.i(x);return new c(I,this.h^k.h)};function Te(k){for(var b=k.g.length+1,I=[],x=0;x<b;x++)I[x]=k.i(x)<<1|k.i(x-1)>>>31;return new c(I,k.h)}function Fe(k,b){var I=b>>5;b%=32;for(var x=k.g.length-I,M=[],V=0;V<x;V++)M[V]=0<b?k.i(V+I)>>>b|k.i(V+I+1)<<32-b:k.i(V+I);return new c(M,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,gw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,dr=c}).apply(typeof O0<"u"?O0:typeof self<"u"?self:typeof window<"u"?window:{});var ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _w,Du,yw,ff,Tg,vw,Ew,Tw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ef=="object"&&ef];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var L=h[w];if(!(L in y))break e;y=y[L]}h=h[h.length-1],w=y[h],_=_(w),_!=w&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,w=!1,L={next:function(){if(!w&&y<h.length){var F=y++;return{value:_(F,h[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function A(h,_,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,A.apply(null,arguments)}function O(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function q(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,L,F){for(var te=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)te[Le-2]=arguments[Le];return _.prototype[L].apply(w,te)}}function Y(h){const _=h.length;if(0<_){const y=Array(_);for(let w=0;w<_;w++)y[w]=h[w];return y}return[]}function W(h,_){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(p(w)){const L=h.length||0,F=w.length||0;h.length=L+F;for(let te=0;te<F;te++)h[L+te]=w[te]}else h.push(w)}}class me{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function le(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function je(h){return je[" "](h),h}je[" "]=function(){};var Te=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Fe(h,_,y){for(const w in h)_.call(y,h[w],w,h)}function k(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function b(h){const _={};for(const y in h)_[y]=h[y];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)h[y]=w[y];for(let F=0;F<I.length;F++)y=I[F],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function M(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function V(h){d.setTimeout(()=>{throw h},0)}function R(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class $t{constructor(){this.h=this.g=null}add(_,y){const w=gt.get();w.set(_,y),this.h?this.h.next=w:this.g=w,this.h=w}}var gt=new me(()=>new G,h=>h.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,he=!1,Ge=new $t,N=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(J)}};var J=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(y){V(y)}var _=gt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}he=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var de=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function Ie(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(Te){e:{try{je(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ie.aa.h.call(this)}}q(Ie,ee);var Se={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),at=0;function mi(h,_,y,w,L){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!w,this.ha=L,this.key=++at,this.da=this.fa=!1}function Ds(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ji(h){this.src=h,this.g={},this.h=0}ji.prototype.add=function(h,_,y,w,L){var F=h.toString();h=this.g[F],h||(h=this.g[F]=[],this.h++);var te=Pr(h,_,w,L);return-1<te?(_=h[te],y||(_.fa=!1)):(_=new mi(_,this.src,F,!!w,L),_.fa=y,h.push(_)),_};function kr(h,_){var y=_.type;if(y in h.g){var w=h.g[y],L=Array.prototype.indexOf.call(w,_,void 0),F;(F=0<=L)&&Array.prototype.splice.call(w,L,1),F&&(Ds(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Pr(h,_,y,w){for(var L=0;L<h.length;++L){var F=h[L];if(!F.da&&F.listener==_&&F.capture==!!y&&F.ha==w)return L}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),gl={};function Nc(h,_,y,w,L){if(Array.isArray(_)){for(var F=0;F<_.length;F++)Nc(h,_[F],y,w,L);return null}return y=Dc(y),h&&h[Bt]?h.K(_,y,g(w)?!!w.capture:!1,L):qn(h,_,y,!1,w,L)}function qn(h,_,y,w,L,F){if(!_)throw Error("Invalid event type");var te=g(L)?!!L.capture:!!L,Le=Ba(h);if(Le||(h[Vr]=Le=new ji(h)),y=Le.add(_,y,w,te,F),y.proxy)return y;if(w=jd(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)de||(L=te),L===void 0&&(L=!1),h.addEventListener(_.toString(),w,L);else if(h.attachEvent)h.attachEvent(Lr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function jd(){function h(y){return _.call(h.src,h.listener,y)}const _=Fd;return h}function _l(h,_,y,w,L){if(Array.isArray(_))for(var F=0;F<_.length;F++)_l(h,_[F],y,w,L);else w=g(w)?!!w.capture:!!w,y=Dc(y),h&&h[Bt]?(h=h.i,_=String(_).toString(),_ in h.g&&(F=h.g[_],y=Pr(F,y,w,L),-1<y&&(Ds(F[y]),Array.prototype.splice.call(F,y,1),F.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ba(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Pr(_,y,w,L)),(y=-1<h?_[h]:null)&&qa(y))}function qa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Bt])kr(_.i,h);else{var y=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(y,w,h.capture):_.detachEvent?_.detachEvent(Lr(y),w):_.addListener&&_.removeListener&&_.removeListener(w),(y=Ba(_))?(kr(y,h),y.h==0&&(y.src=null,_[Vr]=null)):Ds(h)}}}function Lr(h){return h in gl?gl[h]:gl[h]="on"+h}function Fd(h,_){if(h.da)h=!0;else{_=new Ie(_,this);var y=h.listener,w=h.ha||h.src;h.fa&&qa(h),h=y.call(w,_)}return h}function Ba(h){return h=h[Vr],h instanceof ji?h:null}var yl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(h){return typeof h=="function"?h:(h[yl]||(h[yl]=function(_){return h.handleEvent(_)}),h[yl])}function _t(){se.call(this),this.i=new ji(this),this.M=this,this.F=null}q(_t,se),_t.prototype[Bt]=!0,_t.prototype.removeEventListener=function(h,_,y,w){_l(this,h,_,y,w)};function We(h,_){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var L=_;_=new ee(w,h),x(_,L)}if(L=!0,y)for(var F=y.length-1;0<=F;F--){var te=_.g=y[F];L=In(te,w,!0,_)&&L}if(te=_.g=h,L=In(te,w,!0,_)&&L,L=In(te,w,!1,_)&&L,y)for(F=0;F<y.length;F++)te=_.g=y[F],L=In(te,w,!1,_)&&L}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],w=0;w<y.length;w++)Ds(y[w]);delete h.g[_],h.h--}}this.F=null},_t.prototype.K=function(h,_,y,w){return this.i.add(String(h),_,!1,y,w)},_t.prototype.L=function(h,_,y,w){return this.i.add(String(h),_,!0,y,w)};function In(h,_,y,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,F=0;F<_.length;++F){var te=_[F];if(te&&!te.da&&te.capture==y){var Le=te.listener,Vt=te.ha||te.src;te.fa&&kr(h.i,te),L=Le.call(Vt,w)!==!1&&L}}return L&&!w.defaultPrevented}function on(h,_,y){if(typeof h=="function")y&&(h=A(h,y));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Oc(h){h.g=on(()=>{h.g=null,h.i&&(h.i=!1,Oc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Hd extends se{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Oc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(h){se.call(this),this.h=h,this.g={}}q(Ur,se);var zr=[];function qr(h){Fe(h.g,function(_,y){this.g.hasOwnProperty(y)&&qa(_)},h),h.g={}}Ur.prototype.N=function(){Ur.aa.N.call(this),qr(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=d.JSON.stringify,ja=d.JSON.parse,Br=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function vl(){}vl.prototype.h=null;function El(h){return h.h||(h.h=h.i())}function Tl(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){ee.call(this,"d")}q(Hi,ee);function Sl(){ee.call(this,"c")}q(Sl,ee);var pi={},Al=null;function Os(){return Al=Al||new _t}pi.La="serverreachability";function Fa(h){ee.call(this,pi.La,h)}q(Fa,ee);function xs(h){const _=Os();We(_,new Fa(_))}pi.STAT_EVENT="statevent";function xc(h,_){ee.call(this,pi.STAT_EVENT,h),this.stat=_}q(xc,ee);function ht(h){const _=Os();We(_,new xc(_,h))}pi.Ma="timingevent";function Pt(h,_){ee.call(this,pi.Ma,h),this.size=_}q(Pt,ee);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function wl(h,_,y,w,L,F){h.info(function(){if(h.g)if(F)for(var te="",Le=F.split("&"),Vt=0;Vt<Le.length;Vt++){var Ue=Le[Vt].split("=");if(1<Ue.length){var Ft=Ue[0];Ue=Ue[1];var Lt=Ft.split("_");te=2<=Lt.length&&Lt[1]=="type"?te+(Ft+"="+Ue+"&"):te+(Ft+"=redacted&")}}else te=null;else te=F;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+_+`
`+y+`
`+te})}function Gd(h,_,y,w,L,F,te){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+_+`
`+y+`
`+F+" "+te})}function Ms(h,_,y,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+jr(h,y)+(w?" "+w:"")})}function Mc(h,_){h.info(function(){return"TIMEOUT: "+_})}Bn.prototype.info=function(){};function jr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var te=1;te<L.length;te++)L[te]=""}}}}return ti(y)}catch{return _}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gi;function _i(){}q(_i,vl),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},gi=new _i;function pn(h,_,y,w){this.j=h,this.i=_,this.l=y,this.R=w||1,this.U=new Ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var bl={},Ha={};function ni(h,_,y){h.L=1,h.v=Yr(Nn(_)),h.m=y,h.P=!0,Qi(h,null)}function Qi(h,_){h.F=Date.now(),Fr(h),h.A=Nn(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Ol(y.i,"t",w),h.C=0,y=h.j.J,h.h=new Tt,h.g=Xc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Hd(A(h.Y,h,h.g),h.O)),_=h.U,y=h.g,w=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(zr[0]=L.toString()),L=zr);for(var F=0;F<L.length;F++){var te=Nc(y,L[F],w||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),xs(),wl(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Gn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const Lt=Gn(this.g);var _=this.g.Ba();const es=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Bc(this.g)))){this.J||Lt!=4||_==7||(_==8||0>=es?xs(3):xs(2)),Ps(this);var y=this.g.Z();this.X=y;t:if(kc(this)){var w=Bc(this.g);h="";var L=w.length,F=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),yi(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(F&&_==L-1)});w.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Gd(this.i,this.u,this.A,this.l,this.R,Lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,Vt=this.g;if((Le=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(Le)){var Ue=Le;break t}}Ue=null}if(y=Ue)Ms(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,y);else{this.o=!1,this.s=3,ht(12),Zt(this),yi(this);break e}}if(this.P){y=!0;let Jt;for(;!this.J&&this.C<te.length;)if(Jt=Pc(this,te),Jt==Ha){Lt==4&&(this.s=4,ht(14),y=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==bl){this.s=4,ht(15),Ms(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Ms(this.i,this.l,Jt,null),Hr(this,Jt);if(kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||te.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)Ms(this.i,this.l,te,"[Invalid Chunked Response]"),Zt(this),yi(this);else if(0<te.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ta(Ft),Ft.M=!0,ht(11))}}else Ms(this.i,this.l,te,null),Hr(this,te);Lt==4&&Zt(this),this.o&&!this.J&&(Lt==4?Qc(this.j,this):(this.o=!1,Fr(this)))}else Wd(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Zt(this),yi(this)}}}catch{}finally{}};function kc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Pc(h,_){var y=h.C,w=_.indexOf(`
`,y);return w==-1?Ha:(y=Number(_.substring(y,w)),isNaN(y)?bl:(w+=1,w+y>_.length?Ha:(_=_.slice(w,w+y),h.C=w+y,_)))}pn.prototype.cancel=function(){this.J=!0,Zt(this)};function Fr(h){h.S=Date.now()+h.I,Vc(h,h.I)}function Vc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(A(h.ba,h),_)}function Ps(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Mc(this.i,this.A),this.L!=2&&(xs(),ht(17)),Zt(this),this.s=2,yi(this)):Vc(this,this.S-h)};function yi(h){h.j.G==0||h.J||Qc(h.j,h)}function Zt(h){Ps(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,qr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Hr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Cl(y.h,h))){if(!h.K&&Cl(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)no(y),eo(y);else break e;Vl(y),ht(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ct(A(y.Za,y),6e3));if(1>=Qa(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ji(y,11)}else if((h.K||y.g==h)&&no(y),!le(_))for(L=y.Da.g.parse(_),_=0;_<L.length;_++){let Ue=L[_];if(y.T=Ue[0],Ue=Ue[1],y.G==2)if(Ue[0]=="c"){y.K=Ue[1],y.ia=Ue[2];const Ft=Ue[3];Ft!=null&&(y.la=Ft,y.j.info("VER="+y.la));const Lt=Ue[4];Lt!=null&&(y.Aa=Lt,y.j.info("SVER="+y.Aa));const es=Ue[5];es!=null&&typeof es=="number"&&0<es&&(w=1.5*es,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Jt=h.g;if(Jt){const bi=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var F=w.h;F.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Ya(F,F.h),F.h=null))}if(w.D){const Ul=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(w.ya=Ul,et(w.I,w.D,Ul))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var te=h;if(w.qa=Kc(w,w.J?w.ia:null,w.W),te.K){gn(w.h,te);var Le=te,Vt=w.L;Vt&&(Le.I=Vt),Le.B&&(Ps(Le),Fr(Le)),w.g=te}else Hc(w);0<y.i.length&&to(y)}else Ue[0]!="stop"&&Ue[0]!="close"||Ji(y,7);else y.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Ji(y,7):kl(y):Ue[0]!="noop"&&y.l&&y.l.ta(Ue),y.v=0)}}xs(4)}catch{}}var Lc=class{constructor(h,_){this.g=h,this.map=_}};function Yi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Qa(h){return h.h?1:h.g?h.g.size:0}function Cl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ya(h,_){h.g?h.g.add(_):h.h=_}function gn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Yi.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Rl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return Y(h.i)}function Qd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,w=0;w<y;w++)_.push(h[w]);return _}_=[],y=0;for(w in h)_[y++]=h[w];return _}function Ka(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const w in h)_[y++]=w;return _}}}function Il(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=Ka(h),w=Qd(h),L=w.length,F=0;F<L;F++)_.call(void 0,w[F],y&&y[F],h)}var Gr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),L=null;if(0<=w){var F=h[y].substring(0,w);L=h[y].substring(w+1)}else F=h[y];_(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Rt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Rt){this.h=h.h,Qr(this,h.j),this.o=h.o,this.g=h.g,Vs(this,h.s),this.l=h.l;var _=h.i,y=new Xi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ki(this,y),this.m=h.m}else h&&(_=String(h).match(Gr))?(this.h=!1,Qr(this,_[1]||"",!0),this.o=jn(_[2]||""),this.g=jn(_[3]||"",!0),Vs(this,_[4]),this.l=jn(_[5]||"",!0),Ki(this,_[6]||"",!0),this.m=jn(_[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}Rt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Kr(_,Nl,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Kr(_,Nl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Kr(y,y.charAt(0)=="/"?Kd:Dl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Kr(y,Xa)),h.join("")};function Nn(h){return new Rt(h)}function Qr(h,_,y){h.j=y?jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Vs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ki(h,_,y){_ instanceof Xi?(h.i=_,zc(h.i,h.h)):(y||(_=Kr(_,Xd)),h.i=new Xi(_,h.h))}function et(h,_,y){h.i.set(_,y)}function Yr(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Kr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Uc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Uc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Nl=/[#\/\?@]/g,Dl=/[#\?:]/g,Kd=/[#\?]/g,Xd=/[#\?@]/g,Xa=/#/g;function Xi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Fn(h){h.g||(h.g=new Map,h.h=0,h.i&&Yd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=Xi.prototype,n.add=function(h,_){Fn(this),this.i=null,h=vi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Wi(h,_){Fn(h),_=vi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function $i(h,_){return Fn(h),_=vi(h,_),h.g.has(_)}n.forEach=function(h,_){Fn(this),this.g.forEach(function(y,w){y.forEach(function(L){h.call(_,L,w,this)},this)},this)},n.na=function(){Fn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let w=0;w<_.length;w++){const L=h[w];for(let F=0;F<L.length;F++)y.push(_[w])}return y},n.V=function(h){Fn(this);let _=[];if(typeof h=="string")$i(this,h)&&(_=_.concat(this.g.get(vi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return Fn(this),this.i=null,h=vi(this,h),$i(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ol(h,_,y){Wi(h,_),0<y.length&&(h.i=null,h.g.set(vi(h,_),Y(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var w=_[y];const F=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var L=F;te[w]!==""&&(L+="="+encodeURIComponent(String(te[w]))),h.push(L)}}return this.i=h.join("&")};function vi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function zc(h,_){_&&!h.j&&(Fn(h),h.i=null,h.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Wi(this,w),Ol(this,L,y))},h)),h.j=_}function Xr(h,_){const y=new Bn;if(d.Image){const w=new Image;w.onload=O(Hn,y,"TestLoadImage: loaded",!0,_,w),w.onerror=O(Hn,y,"TestLoadImage: error",!1,_,w),w.onabort=O(Hn,y,"TestLoadImage: abort",!1,_,w),w.ontimeout=O(Hn,y,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function ii(h,_){const y=new Bn,w=new AbortController,L=setTimeout(()=>{w.abort(),Hn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(F=>{clearTimeout(L),F.ok?Hn(y,"TestPingServer: ok",!0,_):Hn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),Hn(y,"TestPingServer: error",!1,_)})}function Hn(h,_,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Wr(){this.g=new Br}function Ei(h,_,y){const w=y||"";try{Il(h,function(L,F){let te=L;g(L)&&(te=ti(L)),_.push(w+F+"="+encodeURIComponent(te))})}catch(L){throw _.push(w+"type="+encodeURIComponent("_badmap")),L}}function Ls(h){this.l=h.Ub||null,this.j=h.eb||!1}q(Ls,vl),Ls.prototype.g=function(){return new Zi(this.l,this.j)},Ls.prototype.i=(function(h){return function(){return h}})({});function Zi(h,_){_t.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Zi,_t),n=Zi.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Si(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ti(this):Si(this),this.readyState==3&&xl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ti(this))},n.Qa=function(h){this.g&&(this.response=h,Ti(this))},n.ga=function(){this.g&&Ti(this)};function Ti(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Si(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Si(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ml(h){let _="";return Fe(h,function(y,w){_+=w,_+=":",_+=y,_+=`\r
`}),_}function jt(h,_,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Ml(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):et(h,_,y))}function Ke(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ke,_t);var Wa=/^https?$/i,$r=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gi.g(),this.v=this.o?El(this.o):El(gi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(F){qc(this,F);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())y.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(F=>F.toLowerCase()=="content-type"),L=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call($r,_,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,te]of y)this.g.setRequestHeader(F,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zr(this),this.u=!0,this.g.send(h),this.u=!1}catch(F){qc(this,F)}};function qc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,$a(h),Ai(h)}function $a(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Za(this):this.bb())},n.bb=function(){Za(this)};function Za(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Gn(h)!=4||h.Z()!=2)){if(h.u&&Gn(h)==4)on(h.Ea,0,h);else if(We(h,"readystatechange"),Gn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var w;if(w=te===0){var L=String(h.D).match(Gr)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),w=!Wa.test(L?L.toLowerCase():"")}y=w}if(y)We(h,"complete"),We(h,"success");else{h.m=6;try{var F=2<Gn(h)?h.g.statusText:""}catch{F=""}h.l=F+" ["+h.Z()+"]",$a(h)}}finally{Ai(h)}}}}function Ai(h,_){if(h.g){Zr(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{y.onreadystatechange=w}catch{}}}function Zr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Gn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),ja(_)}};function Bc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Wd(h){const _={};h=(h.g&&2<=Gn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(le(h[w]))continue;var y=M(h[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const F=_[L]||[];_[L]=F,F.push(y)}k(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function Ja(h){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,h),this.cb=Jr("retryDelaySeedMs",1e4,h),this.Wa=Jr("forwardChannelMaxRetries",2,h),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(h&&h.concurrentRequestLimit),this.Da=new Wr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ja.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,w){ht(0),this.W=h,this.H=_||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Kc(this,null,this.W),to(this)};function kl(h){if(jc(h),h.G==3){var _=h.U++,y=Nn(h.I);if(et(y,"SID",h.K),et(y,"RID",_),et(y,"TYPE","terminate"),ea(h,y),_=new pn(h,h.j,_),_.L=2,_.v=Yr(Nn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Xc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Fr(_)}Yc(h)}function eo(h){h.g&&(ta(h),h.g.cancel(),h.g=null)}function jc(h){eo(h),h.u&&(d.clearTimeout(h.u),h.u=null),no(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function to(h){if(!Ga(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||N(),he||(ie(),he=!0),Ge.add(_,h),h.B=0}}function $d(h,_){return Qa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(A(h.Ga,h,_),Ll(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new pn(this,this.j,h);let F=this.o;if(this.S&&(F?(F=b(F),x(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Fc(this,L,_),y=Nn(this.I),et(y,"RID",h),et(y,"CVER",22),this.D&&et(y,"X-HTTP-Session-Id",this.D),ea(this,y),F&&(this.O?_="headers="+encodeURIComponent(String(Ml(F)))+"&"+_:this.m&&jt(y,this.m,F)),Ya(this.h,L),this.Ua&&et(y,"TYPE","init"),this.P?(et(y,"$req",_),et(y,"SID","null"),L.T=!0,ni(L,y,null)):ni(L,y,_),this.G=2}}else this.G==3&&(h?Pl(this,h):this.i.length==0||Ga(this.h)||Pl(this))};function Pl(h,_){var y;_?y=_.l:y=h.U++;const w=Nn(h.I);et(w,"SID",h.K),et(w,"RID",y),et(w,"AID",h.T),ea(h,w),h.m&&h.o&&jt(w,h.m,h.o),y=new pn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Fc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ya(h.h,y),ni(y,w,_)}function ea(h,_){h.H&&Fe(h.H,function(y,w){et(_,w,y)}),h.l&&Il({},function(y,w){et(_,w,y)})}function Fc(h,_,y){y=Math.min(h.i.length,y);var w=h.l?A(h.l.Na,h.l,h):null;e:{var L=h.i;let F=-1;for(;;){const te=["count="+y];F==-1?0<y?(F=L[0].g,te.push("ofs="+F)):F=0:te.push("ofs="+F);let Le=!0;for(let Vt=0;Vt<y;Vt++){let Ue=L[Vt].g;const Ft=L[Vt].map;if(Ue-=F,0>Ue)F=Math.max(0,L[Vt].g-100),Le=!1;else try{Ei(Ft,te,"req"+Ue+"_")}catch{w&&w(Ft)}}if(Le){w=te.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,w}function Hc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||N(),he||(ie(),he=!0),Ge.add(_,h),h.v=0}}function Vl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(A(h.Fa,h),Ll(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Gc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(A(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),eo(this),Gc(this))};function ta(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Gc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Nn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),ea(h,_),h.m&&h.o&&jt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Yr(Nn(_)),y.m=null,y.P=!0,Qi(y,h)}n.Za=function(){this.C!=null&&(this.C=null,eo(this),Vl(this),ht(19))};function no(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Qc(h,_){var y=null;if(h.g==_){no(h),ta(h),h.g=null;var w=2}else if(Cl(h.h,_))y=_.D,gn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;w=Os(),We(w,new Pt(w,y)),to(h)}else Hc(h);else if(L=_.s,L==3||L==0&&0<_.X||!(w==1&&$d(h,_)||w==2&&Vl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),L){case 1:Ji(h,5);break;case 4:Ji(h,10);break;case 3:Ji(h,6);break;default:Ji(h,2)}}}function Ll(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function Ji(h,_){if(h.j.info("Error code "+_),_==2){var y=A(h.fb,h),w=h.Xa;const L=!w;w=new Rt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Qr(w,"https"),Yr(w),L?Xr(w.toString(),y):ii(w.toString(),y)}else ht(2);h.G=0,h.l&&h.l.sa(_),Yc(h),jc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Yc(h){if(h.G=0,h.ka=[],h.l){const _=Rl(h.h);(_.length!=0||h.i.length!=0)&&(W(h.ka,_),W(h.ka,h.i),h.h.i.length=0,Y(h.i),h.i.length=0),h.l.ra()}}function Kc(h,_,y){var w=y instanceof Rt?Nn(y):new Rt(y);if(w.g!="")_&&(w.g=_+"."+w.g),Vs(w,w.s);else{var L=d.location;w=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var F=new Rt(null);w&&Qr(F,w),_&&(F.g=_),L&&Vs(F,L),y&&(F.l=y),w=F}return y=h.D,_=h.ya,y&&_&&et(w,y,_),et(w,"VER",h.la),ea(h,w),w}function Xc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Ls({eb:y})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wc(){}n=Wc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function io(){}io.prototype.g=function(h,_){return new _n(h,_)};function _n(h,_){_t.call(this),this.g=new Ja(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!le(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!le(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new wi(this)}q(_n,_t),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){kl(this.g)},_n.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ti(h),h=y);_.i.push(new Lc(_.Ya++,h)),_.G==3&&to(_)},_n.prototype.N=function(){this.g.l=null,delete this.j,kl(this.g),delete this.g,_n.aa.N.call(this)};function $c(h){Hi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}q($c,Hi);function Zc(){Sl.call(this),this.status=1}q(Zc,Sl);function wi(h){this.g=h}q(wi,Wc),wi.prototype.ua=function(){We(this.g,"a")},wi.prototype.ta=function(h){We(this.g,new $c(h))},wi.prototype.sa=function(h){We(this.g,new Zc)},wi.prototype.ra=function(){We(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,Tw=function(){return new io},Ew=function(){return Os()},vw=pi,Tg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,ff=ks,Gi.COMPLETE="complete",yw=Gi,Tl.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Du=Tl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,_w=Ke}).apply(typeof ef<"u"?ef:typeof self<"u"?self:typeof window<"u"?window:{});const x0="@firebase/firestore",M0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ll="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new ad("@firebase/firestore");function ko(){return Ia.logLevel}function ae(n,...e){if(Ia.logLevel<=ke.DEBUG){const t=e.map(g_);Ia.debug(`Firestore (${ll}): ${n}`,...t)}}function ws(n,...e){if(Ia.logLevel<=ke.ERROR){const t=e.map(g_);Ia.error(`Firestore (${ll}): ${n}`,...t)}}function Ko(n,...e){if(Ia.logLevel<=ke.WARN){const t=e.map(g_);Ia.warn(`Firestore (${ll}): ${n}`,...t)}}function g_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Sw(n,s,t)}function Sw(n,e,t){let s=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ws(s),new Error(s)}function Xe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Sw(e,a,s)}function we(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Is{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(hn.UNAUTHENTICATED)))}shutdown(){}}class N2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class D2{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Es;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Es,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Es)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new Aw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new hn(e)}}class O2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class x2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new O2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(hn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class k0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new k0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new k0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=k2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Pe(n,e){return n<e?-1:n>e?1:0}function Sg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return tg(a)===tg(l)?Pe(a,l):tg(a)?1:-1}return Pe(n.length,e.length)}const P2=55296,V2=57343;function tg(n){const e=n.charCodeAt(0);return e>=P2&&e<=V2}function Xo(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__name__";class Oi{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Oi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Oi.isNumericId(e),a=Oi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Oi.extractNumericId(e).compare(Oi.extractNumericId(t)):Sg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class lt extends Oi{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const L2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Oi{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return L2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P0}static keyField(){return new rn([P0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new re(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new re(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new re(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(lt.fromString(e))}static fromName(e){return new fe(lt.fromString(e).popFirst(5))}static empty(){return new fe(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n,e,t){if(!t)throw new re(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function U2(n,e,t,s){if(e===!0&&s===!0)throw new re(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function V0(n){if(!fe.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function L0(n){if(fe.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function hd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e(12329,{type:typeof n})}function zn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hd(n);throw new re(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function _c(n,e){if(!bw(n))throw new re(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=-62135596800,z0=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*z0);return new ct(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<U0)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/z0}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_c(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-U0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Mt("string",ct._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ct(0,0))}static max(){return new Ae(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xu=-1;function z2(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new ct(t+1,0):new ct(t,s));return new Er(a,fe.empty(),e)}function q2(n){return new Er(n.readTime,n.key,Xu)}class Er{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Er(Ae.min(),fe.empty(),Xu)}static max(){return new Er(Ae.max(),fe.empty(),Xu)}}function B2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==j2)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,s)=>{t(e)}))}static reject(e){return new Z(((t,s)=>{s(e)}))}static waitFor(e){return new Z(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next((a=>a?Z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new Z(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new Z(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function H2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=-1;function dd(n){return n==null}function Of(n){return n===0&&1/n==-1/0}function G2(n){return typeof n=="number"&&Number.isInteger(n)&&!Of(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="";function Q2(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=q0(e)),e=Y2(n.get(t),e);return q0(e)}function Y2(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Cw:t+="";break;default:t+=l}}return t}function q0(n){return n+Cw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt=class Ag{constructor(e,t){this.comparator=e,this.root=t||mr.EMPTY}insert(e,t){return new Ag(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mr.BLACK,null,null))}remove(e){return new Ag(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tf(this.root,e,this.comparator,!0)}},tf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},mr=class ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ms.RED,this.left=a??ms.EMPTY,this.right=l??ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}};mr.EMPTY=null,mr.RED=!0,mr.BLACK=!1;mr.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new mr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new j0(this.data.getIterator())}getIteratorFrom(e){return new j0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qt(this.comparator);return t.data=e,t}}class j0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Un([])}unionWith(e){let t=new qt(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Iw("Invalid base64 string: "+l):l}})(e);return new an(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const K2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=K2.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sr(n){return typeof n=="string"?an.fromBase64String(n):an.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="server_timestamp",Dw="__type__",Ow="__previous_value__",xw="__local_write_time__";function v_(n){return(n?.mapValue?.fields||{})[Dw]?.stringValue===Nw}function md(n){const e=n.mapValue.fields[Ow];return v_(e)?md(e):e}function Wu(n){const e=Tr(n.mapValue.fields[xw].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const xf="(default)";class $u{constructor(e,t){this.projectId=e,this.database=t||xf}static empty(){return new $u("","")}get isDefaultDatabase(){return this.database===xf}isEqual(e){return e instanceof $u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="__type__",W2="__max__",nf={mapValue:{}},kw="__vector__",Mf="value";function Ar(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?v_(n)?4:Z2(n)?9007199254740991:$2(n)?10:11:_e(28295,{value:n})}function zi(n,e){if(n===e)return!0;const t=Ar(n);if(t!==Ar(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wu(n).isEqual(Wu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Tr(a.timestampValue),d=Tr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Sr(a.bytesValue).isEqual(Sr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return wt(a.geoPointValue.latitude)===wt(l.geoPointValue.latitude)&&wt(a.geoPointValue.longitude)===wt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return wt(a.integerValue)===wt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=wt(a.doubleValue),d=wt(l.doubleValue);return c===d?Of(c)===Of(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return Xo(n.arrayValue.values||[],e.arrayValue.values||[],zi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(B0(c)!==B0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!zi(c[p],d[p])))return!1;return!0})(n,e);default:return _e(52216,{left:n})}}function Zu(n,e){return(n.values||[]).find((t=>zi(t,e)))!==void 0}function Wo(n,e){if(n===e)return 0;const t=Ar(n),s=Ar(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=wt(l.integerValue||l.doubleValue),p=wt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return F0(n.timestampValue,e.timestampValue);case 4:return F0(Wu(n),Wu(e));case 5:return Sg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Sr(l),p=Sr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Pe(d[g],p[g]);if(v!==0)return v}return Pe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Pe(wt(l.latitude),wt(c.latitude));return d!==0?d:Pe(wt(l.longitude),wt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return H0(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Mf]?.arrayValue,v=p[Mf]?.arrayValue,T=Pe(g?.values?.length||0,v?.values?.length||0);return T!==0?T:H0(g,v)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===nf.mapValue&&c===nf.mapValue)return 0;if(l===nf.mapValue)return 1;if(c===nf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const A=Sg(p[T],v[T]);if(A!==0)return A;const O=Wo(d[p[T]],g[v[T]]);if(O!==0)return O}return Pe(p.length,v.length)})(n.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function F0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=Tr(n),s=Tr(e),a=Pe(t.seconds,s.seconds);return a!==0?a:Pe(t.nanos,s.nanos)}function H0(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Wo(t[a],s[a]);if(l)return l}return Pe(t.length,s.length)}function $o(n){return wg(n)}function wg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Tr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Sr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return fe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=wg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${wg(t.fields[c])}`;return a+"}"})(n.mapValue):_e(61005,{value:n})}function df(n){switch(Ar(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=md(n);return e?16+df(e):16;case 5:return 2*n.stringValue.length;case 6:return Sr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+df(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Or(s.fields,((l,c)=>{a+=l.length+df(c)})),a})(n.mapValue);default:throw _e(13486,{value:n})}}function G0(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bg(n){return!!n&&"integerValue"in n}function E_(n){return!!n&&"arrayValue"in n}function Q0(n){return!!n&&"nullValue"in n}function Y0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mf(n){return!!n&&"mapValue"in n}function $2(n){return(n?.mapValue?.fields||{})[Mw]?.stringValue===kw}function Lu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Or(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Lu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lu(n.arrayValue.values[t]);return e}return{...n}}function Z2(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===W2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!mf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lu(t)}setAll(e){let t=rn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Lu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());mf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];mf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Or(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new An(Lu(this.value))}}function Pw(n){const e=[];return Or(n.fields,((t,s)=>{const a=new rn([t]);if(mf(s)){const l=Pw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new fn(e,0,Ae.min(),Ae.min(),Ae.min(),An.empty(),0)}static newFoundDocument(e,t,s,a){return new fn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new fn(e,2,t,Ae.min(),Ae.min(),An.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,Ae.min(),Ae.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kf{constructor(e,t){this.position=e,this.inclusive=t}}function K0(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=fe.comparator(fe.fromName(c.referenceValue),t.key):s=Wo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function X0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function J2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vw{}class xt extends Vw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new tO(e,t,s):t==="array-contains"?new sO(e,s):t==="in"?new rO(e,s):t==="not-in"?new aO(e,s):t==="array-contains-any"?new oO(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new nO(e,s):new iO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wo(t,this.value)):t!==null&&Ar(this.value)===Ar(t)&&this.matchesComparison(Wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class di extends Vw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new di(e,t)}matches(e){return Lw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lw(n){return n.op==="and"}function Uw(n){return eO(n)&&Lw(n)}function eO(n){for(const e of n.filters)if(e instanceof di)return!1;return!0}function Cg(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+$o(n.value);if(Uw(n))return n.filters.map((e=>Cg(e))).join(",");{const e=n.filters.map((t=>Cg(t))).join(",");return`${n.op}(${e})`}}function zw(n,e){return n instanceof xt?(function(s,a){return a instanceof xt&&s.op===a.op&&s.field.isEqual(a.field)&&zi(s.value,a.value)})(n,e):n instanceof di?(function(s,a){return a instanceof di&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&zw(c,a.filters[d])),!0):!1})(n,e):void _e(19439)}function qw(n){return n instanceof xt?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(n):n instanceof di?(function(t){return t.op.toString()+" {"+t.getFilters().map(qw).join(" ,")+"}"})(n):"Filter"}class tO extends xt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class nO extends xt{constructor(e,t){super(e,"in",t),this.keys=Bw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class iO extends xt{constructor(e,t){super(e,"not-in",t),this.keys=Bw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bw(n,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class sO extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return E_(t)&&Zu(t.arrayValue,this.value)}}class rO extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zu(this.value.arrayValue,t)}}class aO extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zu(this.value.arrayValue,t)}}class oO extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!E_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Zu(this.value.arrayValue,s)))}}/**
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
 */class lO{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function W0(n,e=null,t=[],s=[],a=null,l=null,c=null){return new lO(n,e,t,s,a,l,c)}function T_(n){const e=we(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Cg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),dd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>$o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>$o(s))).join(",")),e.Te=t}return e.Te}function S_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!J2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!X0(n.startAt,e.startAt)&&X0(n.endAt,e.endAt)}function Rg(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uO(n,e,t,s,a,l,c,d){return new hl(n,e,t,s,a,l,c,d)}function pd(n){return new hl(n)}function $0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jw(n){return n.collectionGroup!==null}function Uu(n){const e=we(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new qt(rn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Ju(l,s))})),t.has(rn.keyField().canonicalString())||e.Ie.push(new Ju(rn.keyField(),s))}return e.Ie}function ki(n){const e=we(n);return e.Ee||(e.Ee=cO(e,Uu(n))),e.Ee}function cO(n,e){if(n.limitType==="F")return W0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Ju(a.field,l)}));const t=n.endAt?new kf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new kf(n.startAt.position,n.startAt.inclusive):null;return W0(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ig(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Pf(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gd(n,e){return S_(ki(n),ki(e))&&n.limitType===e.limitType}function Fw(n){return`${T_(ki(n))}|lt:${n.limitType}`}function Po(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>qw(a))).join(", ")}]`),dd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>$o(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>$o(a))).join(",")),`Target(${s})`})(ki(n))}; limitType=${n.limitType})`}function _d(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):fe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Uu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=K0(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Uu(s),a)||s.endAt&&!(function(c,d,p){const g=K0(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Uu(s),a))})(n,e)}function hO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hw(n){return(e,t)=>{let s=!1;for(const a of Uu(n)){const l=fO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function fO(n,e,t){const s=n.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Wo(p,g):_e(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Rw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=new kt(fe.comparator);function bs(){return dO}const Gw=new kt(fe.comparator);function Ou(...n){let e=Gw;for(const t of n)e=e.insert(t.key,t);return e}function Qw(n){let e=Gw;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ea(){return zu()}function Yw(){return zu()}function zu(){return new Va((n=>n.toString()),((n,e)=>n.isEqual(e)))}const mO=new kt(fe.comparator),pO=new qt(fe.comparator);function Ve(...n){let e=pO;for(const t of n)e=e.add(t);return e}const gO=new qt(Pe);function _O(){return gO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Of(e)?"-0":e}}function Kw(n){return{integerValue:""+n}}function yO(n,e){return G2(e)?Kw(e):A_(n,e)}/**
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
 */class yd{constructor(){this._=void 0}}function vO(n,e,t){return n instanceof ec?(function(a,l){const c={fields:{[Dw]:{stringValue:Nw},[xw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&v_(l)&&(l=md(l)),l&&(c.fields[Ow]=l),{mapValue:c}})(t,e):n instanceof tc?Ww(n,e):n instanceof nc?$w(n,e):(function(a,l){const c=Xw(a,l),d=Z0(c)+Z0(a.Ae);return bg(c)&&bg(a.Ae)?Kw(d):A_(a.serializer,d)})(n,e)}function EO(n,e,t){return n instanceof tc?Ww(n,e):n instanceof nc?$w(n,e):t}function Xw(n,e){return n instanceof Vf?(function(s){return bg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ec extends yd{}class tc extends yd{constructor(e){super(),this.elements=e}}function Ww(n,e){const t=Zw(e);for(const s of n.elements)t.some((a=>zi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class nc extends yd{constructor(e){super(),this.elements=e}}function $w(n,e){let t=Zw(e);for(const s of n.elements)t=t.filter((a=>!zi(a,s)));return{arrayValue:{values:t}}}class Vf extends yd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Z0(n){return wt(n.integerValue||n.doubleValue)}function Zw(n){return E_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,t){this.field=e,this.transform=t}}function SO(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof tc&&a instanceof tc||s instanceof nc&&a instanceof nc?Xo(s.elements,a.elements,zi):s instanceof Vf&&a instanceof Vf?zi(s.Ae,a.Ae):s instanceof ec&&a instanceof ec})(n.transform,e.transform)}class AO{constructor(e,t){this.version=e,this.transformResults=t}}class hi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vd{}function Jw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tb(n.key,hi.none()):new yc(n.key,n.data,hi.none());{const t=n.data,s=An.empty();let a=new qt(rn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new xr(n.key,s,new Un(a.toArray()),hi.none())}}function wO(n,e,t){n instanceof yc?(function(a,l,c){const d=a.value.clone(),p=eS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof xr?(function(a,l,c){if(!pf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=eS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(eb(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function qu(n,e,t,s){return n instanceof yc?(function(l,c,d,p){if(!pf(l.precondition,c))return d;const g=l.value.clone(),v=tS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof xr?(function(l,c,d,p){if(!pf(l.precondition,c))return d;const g=tS(l.fieldTransforms,p,c),v=c.data;return v.setAll(eb(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return pf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function bO(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=Xw(s.transform,a||null);l!=null&&(t===null&&(t=An.empty()),t.set(s.field,l))}return t||null}function J0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Xo(s,a,((l,c)=>SO(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yc extends vd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class xr extends vd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function eb(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function eS(n,e,t){const s=new Map;Xe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,EO(c,d,t[a]))}return s}function tS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,vO(l,c,e))}return s}class tb extends vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CO extends vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&wO(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Yw();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=Jw(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,((t,s)=>J0(t,s)))&&Xo(this.baseMutations,e.baseMutations,((t,s)=>J0(t,s)))}}class w_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return mO})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new w_(e,t,s,a)}}/**
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
 */class IO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class NO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,qe;function DO(n){switch(n){case X.OK:return _e(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return _e(15467,{code:n})}}function nb(n){if(n===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(n){case Dt.OK:return X.OK;case Dt.CANCELLED:return X.CANCELLED;case Dt.UNKNOWN:return X.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return X.INTERNAL;case Dt.UNAVAILABLE:return X.UNAVAILABLE;case Dt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Dt.NOT_FOUND:return X.NOT_FOUND;case Dt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Dt.ABORTED:return X.ABORTED;case Dt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Dt.DATA_LOSS:return X.DATA_LOSS;default:return _e(39323,{code:n})}}(qe=Dt||(Dt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function OO(){return new TextEncoder}/**
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
 */const xO=new dr([4294967295,4294967295],0);function nS(n){const e=OO().encode(n),t=new gw;return t.update(e),new Uint8Array(t.digest())}function iS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new dr([t,s],0),new dr([a,l],0)]}class b_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xu(`Invalid padding: ${t}`);if(s<0)throw new xu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(dr.fromNumber(s)));return a.compare(xO)===1&&(a=new dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=nS(e),[s,a]=iS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new b_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=nS(e),[s,a]=iS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,vc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ed(Ae.min(),a,new kt(Pe),bs(),Ve())}}class vc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new vc(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class ib{constructor(e,t){this.targetId=e,this.Ce=t}}class sb{constructor(e,t,s=an.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class sS{constructor(){this.ve=0,this.Fe=rS(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:_e(38017,{changeType:l})}})),new vc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=rS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class MO{constructor(e){this.Ge=e,this.ze=new Map,this.je=bs(),this.Je=sf(),this.He=sf(),this.Ye=new kt(Pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Rg(l))if(s===0){const c=new fe(l.path);this.et(t,c,fn.newNoDocument(c,Ae.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Sr(s).toUint8Array()}catch(p){if(p instanceof Iw)return Ko("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new b_(c,a,l)}catch(p){return Ko(p instanceof xu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Rg(d.target)){const p=new fe(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,fn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ve();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Ed(e,t,this.Ye,this.je,s);return this.je=bs(),this.Je=sf(),this.He=sf(),this.Ye=new kt(Pe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new sS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new qt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new qt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function sf(){return new kt(fe.comparator)}function rS(){return new kt(fe.comparator)}const kO={asc:"ASCENDING",desc:"DESCENDING"},PO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VO={and:"AND",or:"OR"};class LO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ng(n,e){return n.useProto3Json||dd(e)?e:{value:e}}function Lf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function UO(n,e){return Lf(n,e.toTimestamp())}function Pi(n){return Xe(!!n,49232),Ae.fromTimestamp((function(t){const s=Tr(t);return new ct(s.seconds,s.nanos)})(n))}function C_(n,e){return Dg(n,e).canonicalString()}function Dg(n,e){const t=(function(a){return new lt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ab(n){const e=lt.fromString(n);return Xe(hb(e),10190,{key:e.toString()}),e}function Og(n,e){return C_(n.databaseId,e.path)}function ng(n,e){const t=ab(e);if(t.get(1)!==n.databaseId.projectId)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(lb(t))}function ob(n,e){return C_(n.databaseId,e)}function zO(n){const e=ab(n);return e.length===4?lt.emptyPath():lb(e)}function xg(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lb(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function aS(n,e,t){return{name:Og(n,e),fields:t.value.mapValue.fields}}function qO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:_e(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(Xe(v===void 0||typeof v=="string",58123),an.fromBase64String(v||"")):(Xe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),an.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?X.UNKNOWN:nb(g.code);return new re(v,g.message||"")})(c);t=new sb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=ng(n,s.document.name),l=Pi(s.document.updateTime),c=s.document.createTime?Pi(s.document.createTime):Ae.min(),d=new An({mapValue:{fields:s.document.fields}}),p=fn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new gf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=ng(n,s.document),l=s.readTime?Pi(s.readTime):Ae.min(),c=fn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new gf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=ng(n,s.document),l=s.removedTargetIds||[];t=new gf([],l,a,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new NO(a,l),d=s.targetId;t=new ib(d,c)}}return t}function BO(n,e){let t;if(e instanceof yc)t={update:aS(n,e.key,e.value)};else if(e instanceof tb)t={delete:Og(n,e.key)};else if(e instanceof xr)t={update:aS(n,e.key,e.data),updateMask:WO(e.fieldMask)};else{if(!(e instanceof CO))return _e(16599,{Vt:e.type});t={verify:Og(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof ec)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof tc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof nc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Vf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw _e(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:UO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(n,e.precondition)),t}function jO(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Pi(a.updateTime):Pi(l);return c.isEqual(Ae.min())&&(c=Pi(l)),new AO(c,a.transformResults||[])})(t,e)))):[]}function FO(n,e){return{documents:[ob(n,e.path)]}}function HO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ob(n,a);const l=(function(g){if(g.length!==0)return cb(di.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(A){return{field:Vo(A.field),direction:YO(A.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Ng(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function GO(n){let e=zO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const A=ub(T);return A instanceof di&&Uw(A)?A.getFilters():[A]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((A=>(function(q){return new Ju(Lo(q.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(A)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let A;return A=typeof T=="object"?T.value:T,dd(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(T){const A=!!T.before,O=T.values||[];return new kf(O,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const A=!T.before,O=T.values||[];return new kf(O,A)})(t.endAt)),uO(e,a,c,l,d,"F",p,g)}function QO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ub(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Lo(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Lo(t.unaryFilter.field);return xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Lo(t.unaryFilter.field);return xt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Lo(t.unaryFilter.field);return xt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(n):n.fieldFilter!==void 0?(function(t){return xt.create(Lo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return di.create(t.compositeFilter.filters.map((s=>ub(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(n):_e(30097,{filter:n})}function YO(n){return kO[n]}function KO(n){return PO[n]}function XO(n){return VO[n]}function Vo(n){return{fieldPath:n.canonicalString()}}function Lo(n){return rn.fromServerFormat(n.fieldPath)}function cb(n){return n instanceof xt?(function(t){if(t.op==="=="){if(Y0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NAN"}};if(Q0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Y0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NAN"}};if(Q0(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vo(t.field),op:KO(t.op),value:t.value}}})(n):n instanceof di?(function(t){const s=t.getFilters().map((a=>cb(a)));return s.length===1?s[0]:{compositeFilter:{op:XO(t.op),filters:s}}})(n):_e(54877,{filter:n})}function WO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,s,a,l=Ae.min(),c=Ae.min(),d=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.yt=e}}function ZO(n){const e=GO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
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
 */class JO{constructor(){this.Cn=new ex}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Er.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class ex{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new qt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new qt(lt.comparator)).toArray()}}/**
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
 */const oS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fb=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(fb,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zo(0)}static cr(){return new Zo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="LruGarbageCollector",tx=1048576;function uS([n,e],[t,s]){const a=Pe(n,t);return a===0?Pe(e,s):a}class nx{constructor(e){this.Ir=e,this.buffer=new qt(uS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();uS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ix{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(lS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?ae(lS,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Vr(3e5)}))}}class sx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(fd.ce);const s=new nx(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(oS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oS):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),ko()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function rx(n,e){return new sx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changes=new Va((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ox{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&qu(s.mutation,a,Un.empty(),ct.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const a=Ea();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Ou();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Ea();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=bs();const c=zu(),d=(function(){return zu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof xr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),qu(v.mutation,g,v.mutation.getFieldMask(),ct.now())):c.set(g.key,Un.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new ox(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=zu();let a=new kt(((c,d)=>c-d)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||Un.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||Ve()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=Yw();v.forEach((A=>{if(!l.has(A)){const O=Jw(t.get(A),s.get(A));O!==null&&T.set(A,O),l=l.add(A)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return fe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Ea());let d=Xu,p=l;return c.next((g=>Z.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next((A=>{p=p.insert(v,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ve()))).next((v=>({batchId:d,changes:Qw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let a=Ou();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Ou();return this.indexManager.getCollectionParents(e,l).next((d=>Z.forEach(d,(p=>{const g=(function(T,A){return new hl(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,A)=>{c=c.insert(T,A)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,fn.newInvalidDocument(v)))}));let d=Ou();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&qu(v.mutation,g,Un.empty(),ct.now()),_d(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Pi(a.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:ZO(a.bundledQuery),readTime:Pi(a.readTime)}})(t)),Z.resolve()}}/**
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
 */class cx{constructor(){this.overlays=new kt(fe.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ea();return Z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Ea(),l=t.length+1,c=new fe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new kt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=Ea(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ea(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return Z.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new IO(t,s));let l=this.qr.get(t);l===void 0&&(l=Ve(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class hx{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Qr=new qt(Kt.$r),this.Ur=new qt(Kt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Kt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Kt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new fe(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1);let l=Ve();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Kt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Kt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||Pe(e.Yr,t.Yr)}static Kr(e,t){return Pe(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new qt(Kt.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RO(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new Kt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?y_:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Kt(t,0),a=new Kt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new qt(Pe);return t.forEach((a=>{const l=new Kt(a,0),c=new Kt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;fe.isDocumentKey(l)||(l=l.child(""));const c=new Kt(new fe(l),0);let d=new qt(Pe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Xe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,(a=>{const l=new Kt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Kt(t,0),a=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.ri=e,this.docs=(function(){return new kt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let s=bs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():fn.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=bs();const c=t.path,d=new fe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||B2(q2(v),s)<=0||(a.has(v.key)||_d(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){_e(9500)}ii(e,t){return Z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new mx(this)}getSize(e){return Z.resolve(this.size)}}class mx extends ax{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.persistence=e,this.si=new Va((t=>T_(t)),S_),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new R_,this.targetCount=0,this.ai=Zo.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),Z.waitFor(l).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t){this.ui={},this.overlays={},this.ci=new fd(0),this.li=!1,this.li=!0,this.hi=new hx,this.referenceDelegate=e(this),this.Pi=new px(this),this.indexManager=new JO,this.remoteDocumentCache=(function(a){return new dx(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new $O(t),this.Ii=new ux(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new fx(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new gx(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return Z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class gx extends F2{constructor(e){super(),this.currentSequenceNumber=e}}class I_{constructor(e){this.persistence=e,this.Ri=new R_,this.Vi=null}static mi(e){return new I_(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(s=>{const a=fe.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ae.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Uf{constructor(e,t){this.persistence=e,this.pi=new Va((s=>Q2(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=rx(this,t)}static mi(e,t){return new Uf(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return Z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?Z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ae.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=df(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return iI()?8:H2(dn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new _x;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(ko()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(ko()<=ke.DEBUG&&ae("QueryEngine","Query:",Po(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(ko()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ki(t))):Z.resolve())}ys(e,t){if($0(t))return Z.resolve(null);let s=ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Pf(t,null,"F"),s=ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ve(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Pf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return $0(t)||a.isEqual(Ae.min())?Z.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?Z.resolve(null):(ko()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Po(t)),this.vs(e,c,t,z2(a,Xu)).next((d=>d)))}))}Ds(e,t){let s=new qt(Hw(e));return t.forEach(((a,l)=>{_d(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return ko()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Po(t)),this.ps.getDocumentsMatchingQuery(e,t,Er.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="LocalStore",vx=3e8;class Ex{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new kt(Pe),this.xs=new Va((l=>T_(l)),S_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Tx(n,e,t,s){return new Ex(n,e,t,s)}async function mb(n,e){const t=we(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ve();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function Sx(n,e){const t=we(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,A=T.keys();let O=Z.resolve();return A.forEach((q=>{O=O.next((()=>v.getEntry(p,q))).next((Y=>{const W=g.docVersions.get(q);Xe(W!==null,48541),Y.version.compareTo(W)<0&&(T.applyToRemoteDocument(Y,g),Y.isValidDocument()&&(Y.setReadTime(g.commitVersion),v.addEntry(Y)))}))})),O.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ve();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function pb(n){const e=we(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Ax(n,e){const t=we(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const A=a.get(T);if(!A)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let O=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(an.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,s)),a=a.insert(T,O),(function(Y,W,me){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=vx?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(A,O,v)&&d.push(t.Pi.updateTargetData(l,O))}));let p=bs(),g=Ve();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(wx(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(Ae.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return Z.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function wx(n,e,t){let s=Ve(),a=Ve();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=bs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(D_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function bx(n,e){const t=we(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=y_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Cx(n,e){const t=we(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,Z.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new ur(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Mg(n,e,t){const s=we(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!cl(c))throw c;ae(D_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function cS(n,e,t){const s=we(n);let a=Ae.min(),l=Ve();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=we(p),A=T.xs.get(v);return A!==void 0?Z.resolve(T.Ms.get(A)):T.Pi.getTargetData(g,v)})(s,c,ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ae.min(),t?l:Ve()))).next((d=>(Rx(s,hO(e),d),{documents:d,Qs:l})))))}function Rx(n,e,t){let s=n.Os.get(e)||Ae.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class hS{constructor(){this.activeTargetIds=_O()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ix{constructor(){this.Mo=new hS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Nx{Oo(e){}shutdown(){}}/**
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
 */const fS="ConnectivityMonitor";class dS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(fS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(fS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rf=null;function kg(){return rf===null?rf=(function(){return 268435456+Math.round(2147483648*Math.random())})():rf++,"0x"+rf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="RestConnection",Dx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ox{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===xf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=kg(),d=this.zo(e,t.toUriEncodedString());ae(ig,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Dr(g);return this.Jo(e,d,p,s,v).then((T=>(ae(ig,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Ko(ig,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=Dx[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class Mx extends Ox{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=kg();return new Promise(((d,p)=>{const g=new _w;g.setWithCredentials(!0),g.listenOnce(yw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case ff.NO_ERROR:const T=g.getResponseJson();ae(cn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case ff.TIMEOUT:ae(cn,`RPC '${e}' ${c} timed out`),p(new re(X.DEADLINE_EXCEEDED,"Request time out"));break;case ff.HTTP_ERROR:const A=g.getStatus();if(ae(cn,`RPC '${e}' ${c} failed with status:`,A,"response text:",g.getResponseText()),A>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const q=O?.error;if(q&&q.status&&q.message){const Y=(function(me){const le=me.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(le)>=0?le:X.UNKNOWN})(q.status);p(new re(Y,q.message))}else p(new re(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new re(X.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ae(cn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ae(cn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=kg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Tw(),d=Ew(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(cn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let A=!1,O=!1;const q=new xx({Yo:W=>{O?ae(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(A||(ae(cn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),A=!0),ae(cn,`RPC '${e}' stream ${a} sending:`,W),T.send(W))},Zo:()=>T.close()}),Y=(W,me,le)=>{W.listen(me,(ue=>{try{le(ue)}catch(je){setTimeout((()=>{throw je}),0)}}))};return Y(T,Du.EventType.OPEN,(()=>{O||(ae(cn,`RPC '${e}' stream ${a} transport opened.`),q.o_())})),Y(T,Du.EventType.CLOSE,(()=>{O||(O=!0,ae(cn,`RPC '${e}' stream ${a} transport closed`),q.a_(),this.E_(T))})),Y(T,Du.EventType.ERROR,(W=>{O||(O=!0,Ko(cn,`RPC '${e}' stream ${a} transport errored. Name:`,W.name,"Message:",W.message),q.a_(new re(X.UNAVAILABLE,"The operation could not be completed")))})),Y(T,Du.EventType.MESSAGE,(W=>{if(!O){const me=W.data[0];Xe(!!me,16349);const le=me,ue=le?.error||le[0]?.error;if(ue){ae(cn,`RPC '${e}' stream ${a} received error:`,ue);const je=ue.status;let Te=(function(b){const I=Dt[b];if(I!==void 0)return nb(I)})(je),Fe=ue.message;Te===void 0&&(Te=X.INTERNAL,Fe="Unknown error status: "+je+" with message "+ue.message),O=!0,q.a_(new re(Te,Fe)),T.close()}else ae(cn,`RPC '${e}' stream ${a} received:`,me),q.u_(me)}})),Y(d,vw.STAT_EVENT,(W=>{W.stat===Tg.PROXY?ae(cn,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===Tg.NOPROXY&&ae(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{q.__()}),0),q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function sg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){return new LO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="PersistentStream";class _b{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gb(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(ws(t.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new re(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(mS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(mS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kx extends _b{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=qO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?Pi(c.readTime):Ae.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=xg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Rg(p)?{documents:FO(l,p)}:{query:HO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=rb(l,c.resumeToken);const g=Ng(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=Lf(l,c.snapshotVersion.toTimestamp());const g=Ng(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=QO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=xg(this.serializer),t.removeTarget=e,this.q_(t)}}class Px extends _b{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=jO(e.writeResults,e.commitTime),s=Pi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=xg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>BO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{}class Lx extends Vx{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Dg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(X.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Dg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(X.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Ux{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Na="RemoteStore";class zx{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{La(this)&&(ae(Na,"Restarting streams for network reachability change."),await(async function(p){const g=we(p);g.Ea.add(4),await Ec(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Sd(g)})(this))}))})),this.Ra=new Ux(s,a)}}async function Sd(n){if(La(n))for(const e of n.da)await e(!0)}async function Ec(n){for(const e of n.da)await e(!1)}function yb(n,e){const t=we(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),k_(t)?M_(t):fl(t).O_()&&x_(t,e))}function O_(n,e){const t=we(n),s=fl(t);t.Ia.delete(e),s.O_()&&vb(t,e),t.Ia.size===0&&(s.O_()?s.L_():La(t)&&t.Ra.set("Unknown"))}function x_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fl(n).Y_(e)}function vb(n,e){n.Va.Ue(e),fl(n).Z_(e)}function M_(n){n.Va=new MO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),fl(n).start(),n.Ra.ua()}function k_(n){return La(n)&&!fl(n).x_()&&n.Ia.size>0}function La(n){return we(n).Ea.size===0}function Eb(n){n.Va=void 0}async function qx(n){n.Ra.set("Online")}async function Bx(n){n.Ia.forEach(((e,t)=>{x_(n,e)}))}async function jx(n,e){Eb(n),k_(n)?(n.Ra.ha(e),M_(n)):n.Ra.set("Unknown")}async function Fx(n,e,t){if(n.Ra.set("Online"),e instanceof sb&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){ae(Na,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zf(n,s)}else if(e instanceof gf?n.Va.Ze(e):e instanceof ib?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await pb(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(an.EMPTY_BYTE_STRING,v.snapshotVersion)),vb(l,p);const T=new ur(v.target,p,g,v.sequenceNumber);x_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){ae(Na,"Failed to raise snapshot:",s),await zf(n,s)}}async function zf(n,e,t){if(!cl(e))throw e;n.Ea.add(1),await Ec(n),n.Ra.set("Offline"),t||(t=()=>pb(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Na,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Sd(n)}))}function Tb(n,e){return e().catch((t=>zf(n,t,e)))}async function Ad(n){const e=we(n),t=wr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:y_;for(;Hx(e);)try{const a=await bx(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,Gx(e,a)}catch(a){await zf(e,a)}Sb(e)&&Ab(e)}function Hx(n){return La(n)&&n.Ta.length<10}function Gx(n,e){n.Ta.push(e);const t=wr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Sb(n){return La(n)&&!wr(n).x_()&&n.Ta.length>0}function Ab(n){wr(n).start()}async function Qx(n){wr(n).ra()}async function Yx(n){const e=wr(n);for(const t of n.Ta)e.ea(t.mutations)}async function Kx(n,e,t){const s=n.Ta.shift(),a=w_.from(s,e,t);await Tb(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Ad(n)}async function Xx(n,e){e&&wr(n).X_&&await(async function(s,a){if((function(c){return DO(c)&&c!==X.ABORTED})(a.code)){const l=s.Ta.shift();wr(s).B_(),await Tb(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Ad(s)}})(n,e),Sb(n)&&Ab(n)}async function pS(n,e){const t=we(n);t.asyncQueue.verifyOperationInProgress(),ae(Na,"RemoteStore received new credentials");const s=La(t);t.Ea.add(3),await Ec(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Sd(t)}async function Wx(n,e){const t=we(n);e?(t.Ea.delete(2),await Sd(t)):e||(t.Ea.add(2),await Ec(t),t.Ra.set("Unknown"))}function fl(n){return n.ma||(n.ma=(function(t,s,a){const l=we(t);return l.sa(),new kx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:qx.bind(null,n),t_:Bx.bind(null,n),r_:jx.bind(null,n),H_:Fx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),k_(n)?M_(n):n.Ra.set("Unknown")):(await n.ma.stop(),Eb(n))}))),n.ma}function wr(n){return n.fa||(n.fa=(function(t,s,a){const l=we(t);return l.sa(),new Px(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Qx.bind(null,n),r_:Xx.bind(null,n),ta:Yx.bind(null,n),na:Kx.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ad(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(Na,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new P_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function V_(n,e){if(ws("AsyncQueue",`${e}: ${n}`),cl(n))return new re(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static emptySet(e){return new jo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Ou(),this.sortedSet=new kt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new jo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.ga=new kt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Jo{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new Jo(e,t,jo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Zx{constructor(){this.queries=_S(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=we(t),l=a.queries;a.queries=_S(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new re(X.ABORTED,"Firestore shutting down"))}}function _S(){return new Va((n=>Fw(n)),gd)}async function L_(n,e){const t=we(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new $x,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=V_(c,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&z_(t)}async function U_(n,e){const t=we(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Jx(n,e){const t=we(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&z_(t)}function eM(n,e,t){const s=we(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function z_(n){n.Ca.forEach((e=>{e.next()}))}var Pg,yS;(yS=Pg||(Pg={})).Ma="default",yS.Cache="cache";class q_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Jo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.key=e}}class bb{constructor(e){this.key=e}}class tM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ve(),this.mutatedKeys=Ve(),this.eu=Hw(e),this.tu=new jo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new gS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const A=a.get(v),O=_d(this.query,T)?T:null,q=!!A&&this.mutatedKeys.has(A.key),Y=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let W=!1;A&&O?A.data.isEqual(O.data)?q!==Y&&(s.track({type:3,doc:O}),W=!0):this.su(A,O)||(s.track({type:2,doc:O}),W=!0,(p&&this.eu(O,p)>0||g&&this.eu(O,g)<0)&&(d=!0)):!A&&O?(s.track({type:0,doc:O}),W=!0):A&&!O&&(s.track({type:1,doc:A}),W=!0,(p||g)&&(d=!0)),W&&(O?(c=c.add(O),l=Y?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(O,q){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:W})}};return Y(O)-Y(q)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Jo(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new bb(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new wb(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const B_="SyncEngine";class nM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class iM{constructor(e){this.key=e,this.hu=!1}}class sM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Va((d=>Fw(d)),gd),this.Iu=new Map,this.Eu=new Set,this.du=new kt(fe.comparator),this.Au=new Map,this.Ru=new R_,this.Vu={},this.mu=new Map,this.fu=Zo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function rM(n,e,t=!0){const s=Ob(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await Cb(s,e,t,!0),a}async function aM(n,e){const t=Ob(n);await Cb(t,e,!0,!1)}async function Cb(n,e,t,s){const a=await Cx(n.localStore,ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await oM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&yb(n.remoteStore,a),d}async function oM(n,e,t,s,a){n.pu=(T,A,O)=>(async function(Y,W,me,le){let ue=W.view.ru(me);ue.Cs&&(ue=await cS(Y.localStore,W.query,!1).then((({documents:k})=>W.view.ru(k,ue))));const je=le&&le.targetChanges.get(W.targetId),Te=le&&le.targetMismatches.get(W.targetId)!=null,Fe=W.view.applyChanges(ue,Y.isPrimaryClient,je,Te);return ES(Y,W.targetId,Fe.au),Fe.snapshot})(n,T,A,O);const l=await cS(n.localStore,e,!0),c=new tM(e,l.Qs),d=c.ru(l.documents),p=vc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);ES(n,t,g.au);const v=new nM(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function lM(n,e,t){const s=we(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!gd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Mg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&O_(s.remoteStore,a.targetId),Vg(s,a.targetId)})).catch(ul)):(Vg(s,a.targetId),await Mg(s.localStore,a.targetId,!0))}async function uM(n,e){const t=we(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),O_(t.remoteStore,s.targetId))}async function cM(n,e,t){const s=_M(n);try{const a=await(function(c,d){const p=we(c),g=ct.now(),v=d.reduce(((O,q)=>O.add(q.key)),Ve());let T,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let q=bs(),Y=Ve();return p.Ns.getEntries(O,v).next((W=>{q=W,q.forEach(((me,le)=>{le.isValidDocument()||(Y=Y.add(me))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,q))).next((W=>{T=W;const me=[];for(const le of d){const ue=bO(le,T.get(le.key).overlayedDocument);ue!=null&&me.push(new xr(le.key,ue,Pw(ue.value.mapValue),hi.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,me,d)})).next((W=>{A=W;const me=W.applyToLocalDocumentSet(T,Y);return p.documentOverlayCache.saveOverlays(O,W.batchId,me)}))})).then((()=>({batchId:A.batchId,changes:Qw(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new kt(Pe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Tc(s,a.changes),await Ad(s.remoteStore)}catch(a){const l=V_(a,"Failed to persist write");t.reject(l)}}async function Rb(n,e){const t=we(n);try{const s=await Ax(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Xe(c.hu,14607):a.removedDocuments.size>0&&(Xe(c.hu,42227),c.hu=!1))})),await Tc(t,s,e)}catch(s){await ul(s)}}function vS(n,e,t){const s=we(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=we(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const A of T.Sa)A.va(d)&&(g=!0)})),g&&z_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hM(n,e,t){const s=we(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new kt(fe.comparator);c=c.insert(l,fn.newNoDocument(l,Ae.min()));const d=Ve().add(l),p=new Ed(Ae.min(),new Map,new kt(Pe),c,d);await Rb(s,p),s.du=s.du.remove(l),s.Au.delete(e),j_(s)}else await Mg(s.localStore,e,!1).then((()=>Vg(s,e,t))).catch(ul)}async function fM(n,e){const t=we(n),s=e.batch.batchId;try{const a=await Sx(t.localStore,e);Nb(t,s,null),Ib(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Tc(t,a)}catch(a){await ul(a)}}async function dM(n,e,t){const s=we(n);try{const a=await(function(c,d){const p=we(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Xe(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);Nb(s,e,t),Ib(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Tc(s,a)}catch(a){await ul(a)}}function Ib(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Nb(n,e,t){const s=we(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Vg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Db(n,s)}))}function Db(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(O_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),j_(n))}function ES(n,e,t){for(const s of t)s instanceof wb?(n.Ru.addReference(s.key,e),mM(n,s)):s instanceof bb?(ae(B_,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Db(n,s.key)):_e(19791,{wu:s})}function mM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ae(B_,"New document in limbo: "+t),n.Eu.add(s),j_(n))}function j_(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new fe(lt.fromString(e)),s=n.fu.next();n.Au.set(s,new iM(t)),n.du=n.du.insert(t,s),yb(n.remoteStore,new ur(ki(pd(t.path)),s,"TargetPurposeLimboResolution",fd.ce))}}async function Tc(n,e,t){const s=we(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=N_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=we(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Z.forEach(g,(A=>Z.forEach(A.Es,(O=>v.persistence.referenceDelegate.addReference(T,A.targetId,O))).next((()=>Z.forEach(A.ds,(O=>v.persistence.referenceDelegate.removeReference(T,A.targetId,O)))))))))}catch(T){if(!cl(T))throw T;ae(D_,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const O=v.Ms.get(A),q=O.snapshotVersion,Y=O.withLastLimboFreeSnapshotVersion(q);v.Ms=v.Ms.insert(A,Y)}}})(s.localStore,l))}async function pM(n,e){const t=we(n);if(!t.currentUser.isEqual(e)){ae(B_,"User change. New user:",e.toKey());const s=await mb(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new re(X.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Tc(t,s.Ls)}}function gM(n,e){const t=we(n),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let a=Ve();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function Ob(n){const e=we(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hM.bind(null,e),e.Pu.H_=Jx.bind(null,e.eventManager),e.Pu.yu=eM.bind(null,e.eventManager),e}function _M(n){const e=we(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dM.bind(null,e),e}class qf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Td(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Tx(this.persistence,new yx,e.initialUser,this.serializer)}Cu(e){return new db(I_.mi,this.serializer)}Du(e){return new Ix}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qf.provider={build:()=>new qf};class yM extends qf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Xe(this.persistence.referenceDelegate instanceof Uf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ix(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new db((s=>Uf.mi(s,t)),this.serializer)}}class Lg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pM.bind(null,this.syncEngine),await Wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Zx})()}createDatastore(e){const t=Td(e.databaseInfo.databaseId),s=(function(l){return new Mx(l)})(e.databaseInfo);return(function(l,c,d,p){return new Lx(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new zx(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>vS(this.syncEngine,t,0)),(function(){return dS.v()?new dS:new Nx})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new sM(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=we(t);ae(Na,"RemoteStore shutting down."),s.Ea.add(5),await Ec(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Lg.provider={build:()=>new Lg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class F_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirestoreClient";class vM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=__.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ae(br,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ae(br,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=V_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rg(n,e){n.asyncQueue.verifyOperationInProgress(),ae(br,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await mb(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function TS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await EM(n);ae(br,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>pS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>pS(e.remoteStore,a))),n._onlineComponents=e}async function EM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(br,"Using user provided OfflineComponentProvider");try{await rg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===X.FAILED_PRECONDITION||a.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;Ko("Error using user provided cache. Falling back to memory cache: "+t),await rg(n,new qf)}}else ae(br,"Using default OfflineComponentProvider"),await rg(n,new yM(void 0));return n._offlineComponents}async function xb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(br,"Using user provided OnlineComponentProvider"),await TS(n,n._uninitializedComponentsProvider._online)):(ae(br,"Using default OnlineComponentProvider"),await TS(n,new Lg))),n._onlineComponents}function TM(n){return xb(n).then((e=>e.syncEngine))}async function Bf(n){const e=await xb(n),t=e.eventManager;return t.onListen=rM.bind(null,e.syncEngine),t.onUnlisten=lM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uM.bind(null,e.syncEngine),t}function SM(n,e,t={}){const s=new Es;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new F_({next:A=>{v.Nu(),c.enqueueAndForget((()=>U_(l,T)));const O=A.docs.has(d);!O&&A.fromCache?g.reject(new re(X.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&A.fromCache&&p&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new q_(pd(d.path),v,{includeMetadataChanges:!0,qa:!0});return L_(l,T)})(await Bf(n),n.asyncQueue,e,t,s))),s.promise}function AM(n,e,t={}){const s=new Es;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new F_({next:A=>{v.Nu(),c.enqueueAndForget((()=>U_(l,T))),A.fromCache&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new q_(d,v,{includeMetadataChanges:!0,qa:!0});return L_(l,T)})(await Bf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Mb(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="firestore.googleapis.com",AS=!0;class wS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kb,this.ssl=AS}else this.host=e.host,this.ssl=e.ssl??AS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tx)throw new re(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mb(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new I2;switch(s.type){case"firstParty":return new x2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=SS.get(t);s&&(ae("ComponentProvider","Removing Datastore"),SS.delete(t),s.terminate())})(this),Promise.resolve()}}function wM(n,e,t,s={}){n=zn(n,wd);const a=Dr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(n_(`https://${d}`),i_("Firestore",!0)),l.host!==kb&&l.host!==d&&Ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!yr(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=hn.MOCK_USER;else{g=OA(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new re(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new hn(T)}n._authCredentials=new N2(new Aw(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(_c(t,Et._jsonSchema))return new Et(e,s||null,new fe(lt.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:Mt("string",Et._jsonSchemaVersion),referencePath:Mt("string")};class pr extends Ns{constructor(e,t,s){super(e,t,pd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new fe(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function gr(n,e,...t){if(n=dt(n),ww("collection","path",e),n instanceof wd){const s=lt.fromString(e,...t);return L0(s),new pr(n,null,s)}{if(!(n instanceof Et||n instanceof pr))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return L0(s),new pr(n.firestore,null,s)}}function Da(n,e,...t){if(n=dt(n),arguments.length===1&&(e=__.newId()),ww("doc","path",e),n instanceof wd){const s=lt.fromString(e,...t);return V0(s),new Et(n,null,new fe(s))}{if(!(n instanceof Et||n instanceof pr))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return V0(s),new Et(n.firestore,n instanceof pr?n.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="AsyncQueue";class CS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gb(this,"async_queue_retry"),this._c=()=>{const s=sg();s&&ae(bS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=sg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Es;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!cl(e))throw e;ae(bS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",RS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=P_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&_e(47125,{Pc:RS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function RS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function IS(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Cr extends wd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new CS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new CS(e),this._firestoreClient=void 0,await e}}}function bM(n,e){const t=typeof n=="object"?n:a_(),s=typeof n=="string"?n:xf,a=od(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=IA("firestore");l&&wM(a,...l)}return a}function bd(n){if(n._terminated)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CM(n),n._firestoreClient}function CM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new X2(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Mb(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new vM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(an.fromBase64String(e))}catch(t){throw new re(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_c(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:Mt("string",Jn._jsonSchemaVersion),bytes:Mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vi._jsonSchemaVersion}}static fromJSON(e){if(_c(e,Vi._jsonSchema))return new Vi(e.latitude,e.longitude)}}Vi._jsonSchemaVersion="firestore/geoPoint/1.0",Vi._jsonSchema={type:Mt("string",Vi._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
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
 */class Li{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_c(e,Li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Li(e.vectorValues);throw new re(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Li._jsonSchemaVersion="firestore/vectorValue/1.0",Li._jsonSchema={type:Mt("string",Li._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=/^__.*__$/;class IM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,t,this.fieldTransforms):new yc(e,this.data,t,this.fieldTransforms)}}class Pb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new xr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:n})}}class H_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new H_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return jf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vb(this.Ac)&&RM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class NM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Td(e)}Cc(e,t,s,a=!1){return new H_({Ac:e,methodName:t,Dc:s,path:rn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Id(n){const e=n._freezeSettings(),t=Td(n._databaseId);return new NM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lb(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);Q_("Data must be an object, but it was:",c,s);const d=Ub(s,c);let p,g;if(l.merge)p=new Un(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const A=Ug(e,T,t);if(!c.contains(A))throw new re(X.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);qb(v,A)||v.push(A)}p=new Un(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new IM(new An(d),p,g)}class Nd extends Rd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nd}}class G_ extends Rd{_toFieldTransform(e){return new TO(e.path,new ec)}isEqual(e){return e instanceof G_}}function DM(n,e,t,s){const a=n.Cc(1,e,t);Q_("Data must be an object, but it was:",a,s);const l=[],c=An.empty();Or(s,((p,g)=>{const v=Y_(e,p,t);g=dt(g);const T=a.yc(v);if(g instanceof Nd)l.push(v);else{const A=Sc(g,T);A!=null&&(l.push(v),c.set(v,A))}}));const d=new Un(l);return new Pb(c,d,a.fieldTransforms)}function OM(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Ug(e,s,t)],p=[a];if(l.length%2!=0)throw new re(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)d.push(Ug(e,l[A])),p.push(l[A+1]);const g=[],v=An.empty();for(let A=d.length-1;A>=0;--A)if(!qb(g,d[A])){const O=d[A];let q=p[A];q=dt(q);const Y=c.yc(O);if(q instanceof Nd)g.push(O);else{const W=Sc(q,Y);W!=null&&(g.push(O),v.set(O,W))}}const T=new Un(g);return new Pb(v,T,c.fieldTransforms)}function xM(n,e,t,s=!1){return Sc(t,n.Cc(s?4:3,e))}function Sc(n,e){if(zb(n=dt(n)))return Q_("Unsupported field value:",e,n),Ub(n,e);if(n instanceof Rd)return(function(s,a){if(!Vb(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Sc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return yO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ct.fromDate(s);return{timestampValue:Lf(a.serializer,l)}}if(s instanceof ct){const l=new ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lf(a.serializer,l)}}if(s instanceof Vi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:rb(a.serializer,s._byteString)};if(s instanceof Et){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:C_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Li)return(function(c,d){return{mapValue:{fields:{[Mw]:{stringValue:kw},[Mf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return A_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${hd(s)}`)})(n,e)}function Ub(n,e){const t={};return Rw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(n,((s,a)=>{const l=Sc(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function zb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof Vi||n instanceof Jn||n instanceof Et||n instanceof Rd||n instanceof Li)}function Q_(n,e,t){if(!zb(t)||!bw(t)){const s=hd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Ug(n,e,t){if((e=dt(e))instanceof Cd)return e._internalPath;if(typeof e=="string")return Y_(n,e);throw jf("Field path arguments must be of type string or ",n,!1,void 0,t)}const MM=new RegExp("[~\\*/\\[\\]]");function Y_(n,e,t){if(e.search(MM)>=0)throw jf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cd(...e.split("."))._internalPath}catch{throw jf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new re(X.INVALID_ARGUMENT,d+n+p)}function qb(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kM extends Bb{data(){return super.data()}}function Dd(n,e){return typeof e=="string"?Y_(n,e):e instanceof Cd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class K_{}class X_ extends K_{}function el(n,e,...t){let s=[];e instanceof K_&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof W_)).length,d=l.filter((p=>p instanceof Od)).length;if(c>1||c>0&&d>0)throw new re(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Od extends X_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Od(e,t,s)}_apply(e){const t=this._parse(e);return Fb(e._query,t),new Ns(e.firestore,e.converter,Ig(e._query,t))}_parse(e){const t=Id(e.firestore);return(function(l,c,d,p,g,v,T){let A;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new re(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){DS(T,v);const q=[];for(const Y of T)q.push(NS(p,l,Y));A={arrayValue:{values:q}}}else A=NS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||DS(T,v),A=xM(d,c,T,v==="in"||v==="not-in");return xt.create(g,v,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rr(n,e,t){const s=e,a=Dd("where",n);return Od._create(a,s,t)}class W_ extends K_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new W_(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:di.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Fb(c,p),c=Ig(c,p)})(e._query,t),new Ns(e.firestore,e.converter,Ig(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $_ extends X_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $_(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ju(l,c)})(e._query,this._field,this._direction);return new Ns(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new hl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function PM(n,e="asc"){const t=e,s=Dd("orderBy",n);return $_._create(s,t)}class Z_ extends X_{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Z_(e,t,s)}_apply(e){return new Ns(e.firestore,e.converter,Pf(e._query,this._limit,this._limitType))}}function VM(n){return Z_._create("limit",n,"F")}function NS(n,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new re(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jw(e)&&t.indexOf("/")!==-1)throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!fe.isDocumentKey(s))throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return G0(n,new fe(s))}if(t instanceof Et)return G0(n,t._key);throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hd(t)}.`)}function DS(n,e){if(!Array.isArray(n)||n.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fb(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LM{convertValue(e,t="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Or(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Mf].arrayValue?.values?.map((s=>wt(s.doubleValue)));return new Li(t)}convertGeoPoint(e){return new Vi(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=md(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wu(e));default:return null}}convertTimestamp(e){const t=Tr(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(hb(s),9688,{name:e});const a=new $u(s.get(1),s.get(3)),l=new fe(s.popFirst(5));return a.isEqual(t)||ws(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Mu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Aa extends Bb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Dd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Aa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Aa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Aa._jsonSchema={type:Mt("string",Aa._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class _f extends Aa{data(e={}){return super.data(e)}}class wa{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Mu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new _f(this._firestore,this._userDataWriter,s.key,s,new Mu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new _f(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Mu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new _f(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Mu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:UM(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=__.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(n){n=zn(n,Et);const e=zn(n.firestore,Cr);return SM(bd(e),n._key).then((t=>Yb(e,n,t)))}wa._jsonSchemaVersion="firestore/querySnapshot/1.0",wa._jsonSchema={type:Mt("string",wa._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class J_ extends LM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function OS(n){n=zn(n,Ns);const e=zn(n.firestore,Cr),t=bd(e),s=new J_(e);return jb(n._query),AM(t,n._query).then((a=>new wa(e,s,n,a)))}function zM(n,e,t){n=zn(n,Et);const s=zn(n.firestore,Cr),a=Hb(n.converter,e);return ey(s,[Lb(Id(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,hi.none())])}function ic(n,e,t,...s){n=zn(n,Et);const a=zn(n.firestore,Cr),l=Id(a);let c;return c=typeof(e=dt(e))=="string"||e instanceof Cd?OM(l,"updateDoc",n._key,e,t,s):DM(l,"updateDoc",n._key,e),ey(a,[c.toMutation(n._key,hi.exists(!0))])}function Qb(n,e){const t=zn(n.firestore,Cr),s=Da(n),a=Hb(n.converter,e);return ey(t,[Lb(Id(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,hi.exists(!1))]).then((()=>s))}function Ac(n,...e){n=dt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||IS(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(IS(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Et)c=zn(n.firestore,Cr),d=pd(n._key.path),l={next:p=>{e[s]&&e[s](Yb(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=zn(n,Ns);c=zn(p.firestore,Cr),d=p._query;const g=new J_(c);l={next:v=>{e[s]&&e[s](new wa(c,g,p,v))},error:e[s+1],complete:e[s+2]},jb(n._query)}return(function(g,v,T,A){const O=new F_(A),q=new q_(v,O,T);return g.asyncQueue.enqueueAndForget((async()=>L_(await Bf(g),q))),()=>{O.Nu(),g.asyncQueue.enqueueAndForget((async()=>U_(await Bf(g),q)))}})(bd(c),d,a,l)}function ey(n,e){return(function(s,a){const l=new Es;return s.asyncQueue.enqueueAndForget((async()=>cM(await TM(s),a,l))),l.promise})(bd(n),e)}function Yb(n,e,t){const s=t.docs.get(e._key),a=new J_(n);return new Aa(n,a,e._key,s,new Mu(t.hasPendingWrites,t.fromCache),e.converter)}function sc(){return new G_("serverTimestamp")}(function(e,t=!0){(function(a){ll=a})(Pa),ba(new vr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Cr(new D2(s.getProvider("auth-internal")),new M2(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new re(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $u(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),xi(x0,M0,e),xi(x0,M0,"esm2020")})();var xS={};const MS="@firebase/database",kS="1.1.0";/**
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
 */let Kb="";function qM(n){Kb=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BM(e)}}catch{}return new jM},Ta=Xb("localStorage"),FM=Xb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new ad("@firebase/database"),HM=(function(){let n=1;return function(){return n++}})(),Wb=function(n){const e=pI(n),t=new hI;t.update(e);const s=t.digest();return t_.encodeByteArray(s)},wc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wc.apply(null,s):typeof s=="object"?e+=Wt(s):e+=s,e+=" "}return e};let Bu=null,PS=!0;const GM=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Fo.logLevel=ke.VERBOSE,Bu=Fo.log.bind(Fo)},sn=function(...n){if(PS===!0&&(PS=!1,Bu===null&&FM.get("logging_enabled")===!0&&GM()),Bu){const e=wc.apply(null,n);Bu(e)}},bc=function(n){return function(...e){sn(n,...e)}},zg=function(...n){const e="FIREBASE INTERNAL ERROR: "+wc(...n);Fo.error(e)},Cs=function(...n){const e=`FIREBASE FATAL ERROR: ${wc(...n)}`;throw Fo.error(e),new Error(e)},Cn=function(...n){const e="FIREBASE WARNING: "+wc(...n);Fo.warn(e)},QM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},YM=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tl="[MIN_NAME]",Oa="[MAX_NAME]",Ua=function(n,e){if(n===e)return 0;if(n===tl||e===Oa)return-1;if(e===tl||n===Oa)return 1;{const t=VS(n),s=VS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},KM=function(n,e){return n===e?0:n<e?-1:1},Cu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Wt(e))},ty=function(n){if(typeof n!="object"||n===null)return Wt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Wt(e[s]),t+=":",t+=ty(n[e[s]]);return t+="}",t},$b=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function mn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Zb=function(n){ne(!xd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let A=parseInt(v.substr(p,8),2).toString(16);A.length===1&&(A="0"+A),T=T+A}return T.toLowerCase()},XM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $M(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const ZM=new RegExp("^-?(0*)\\d{1,10}$"),JM=-2147483648,ek=2147483647,VS=function(n){if(ZM.test(n)){const e=Number(n);if(e>=JM&&e<=ek)return e}return null},dl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Cn("Exception was thrown by user callback.",t),e},Math.floor(0))}},tk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ju=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class nk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ln(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Cn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(sn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Cn(e)}}class yf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="5",Jb="v",eC="s",tC="r",nC="f",iC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sC="ls",rC="p",qg="ac",aC="websocket",oC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ta.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ta.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function uC(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===aC)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===oC)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sk(n)&&(t.ns=n.namespace);const a=[];return mn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.counters_={}}incrementCounter(e,t=1){qi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return H1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={},og={};function iy(n){const e=n.toString();return ag[e]||(ag[e]=new rk),ag[e]}function ak(n,e){const t=n.toString();return og[t]||(og[t]=e()),og[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&dl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="start",lk="close",uk="pLPCommand",ck="pRTLPCB",cC="id",hC="pw",fC="ser",hk="cb",fk="seg",dk="ts",mk="d",pk="dframe",dC=1870,mC=30,gk=dC-mC,_k=25e3,yk=3e4;class Uo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bc(e),this.stats_=iy(t),this.urlFn=p=>(this.appCheckToken&&(p[qg]=this.appCheckToken),uC(t,oC,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ok(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yk)),YM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===LS)this.id=d,this.password=p;else if(c===lk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[LS]="t",s[fC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Jb]=ny,this.transportSessionId&&(s[eC]=this.transportSessionId),this.lastSessionId&&(s[sC]=this.lastSessionId),this.applicationId&&(s[rC]=this.applicationId),this.appCheckToken&&(s[qg]=this.appCheckToken),typeof location<"u"&&location.hostname&&iC.test(location.hostname)&&(s[tC]=nC);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Uo.forceAllow_=!0}static forceDisallow(){Uo.forceDisallow_=!0}static isAvailable(){return Uo.forceAllow_?!0:!Uo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XM()&&!WM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=bA(t),a=$b(s,gk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[pk]="t",s[cC]=e,s[hC]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class sy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HM(),window[uk+this.uniqueCallbackIdentifier]=e,window[ck+this.uniqueCallbackIdentifier]=t,this.myIFrame=sy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){sn("frame writing exception"),d.stack&&sn(d.stack),sn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||sn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cC]=this.myID,e[hC]=this.myPW,e[fC]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mC+s.length<=dC;){const c=this.pendingSegs.shift();s=s+"&"+fk+a+"="+c.seg+"&"+dk+a+"="+c.ts+"&"+mk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(_k)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{sn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=16384,Ek=45e3;let Ff=null;typeof MozWebSocket<"u"?Ff=MozWebSocket:typeof WebSocket<"u"&&(Ff=WebSocket);class oi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bc(this.connId),this.stats_=iy(t),this.connURL=oi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[Jb]=ny,typeof location<"u"&&location.hostname&&iC.test(location.hostname)&&(c[tC]=nC),t&&(c[eC]=t),s&&(c[sC]=s),a&&(c[qg]=a),l&&(c[rC]=l),uC(e,aC,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ta.set("previous_websocket_failure",!0);try{let s;nI(),this.mySock=new Ff(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ff!==null&&!oi.forceDisallow_}static previouslyFailed(){return Ta.isInMemoryStorage||Ta.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ta.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Qu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$b(t,vk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ek))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oi.responsesRequiredToBeHealthy=2;oi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Tk=6e4,Sk=5e3,Ak=10*1024,wk=100*1024,lg="t",US="d",bk="s",zS="r",Ck="e",qS="o",BS="a",jS="n",FS="p",Rk="h";class Ik{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bc("c:"+this.id+":"),this.transportManager_=new rc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ju(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ak?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lg in e){const t=e[lg];t===BS?this.upgradeIfSecondaryHealthy_():t===zS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cu("t",e),s=Cu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:FS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:BS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cu("t",e),s=Cu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cu(lg,e);if(US in e){const s=e[US];if(t===Rk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===jS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bk?this.onConnectionShutdown_(s):t===zS?this.onReset_(s):t===Ck?zg("Server Error: "+s):t===qS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ny!==s&&Cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ju(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ju(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Sk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:FS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ta.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends gC{static getInstance(){return new Hf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!s_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=32,GS=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new Je("")}function Re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ir(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function ry(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ac(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _C(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function bt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Je(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function wn(n,e){const t=Re(n),s=Re(e);if(t===null)return e;if(t===s)return wn(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Dk(n,e){const t=ac(n,0),s=ac(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ua(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function ay(n,e){if(Ir(n)!==Ir(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ei(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ir(n)>Ir(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Ok{constructor(e,t){this.errorPrefix_=t,this.parts_=ac(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=rd(this.parts_[s]);yC(this)}}function xk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rd(e),yC(n)}function Mk(n){const e=n.parts_.pop();n.byteLength_-=rd(e),n.parts_.length>0&&(n.byteLength_-=1)}function yC(n){if(n.byteLength_>GS)throw new Error(n.errorPrefix_+"has a key path longer than "+GS+" bytes ("+n.byteLength_+").");if(n.parts_.length>HS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+HS+") or object contains a cycle "+ya(n))}function ya(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends gC{static getInstance(){return new oy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=1e3,kk=300*1e3,QS=30*1e3,Pk=1.3,Vk=3e4,Lk="server_kill",YS=3;class Ts extends pC{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ts.nextPersistentConnectionId_++,this.log_=bc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ru,this.maxReconnectDelay_=kk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");oy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Wt(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ps,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ts.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qi(e,"w")){const s=Qo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=QS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):zg("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vk&&(this.reconnectDelay_=Ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ts.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,A]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?sn("getToken() completed but was canceled"):(sn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=A&&A.token,d=new Ik(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{Cn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Cn(T),p())}}}interrupt(e){sn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sf(this.interruptReasons_)&&(this.reconnectDelay_=Ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>ty(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){sn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=YS&&(this.reconnectDelay_=QS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){sn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=YS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kb.replace(/\./g,"-")]=1,s_()?e["framework.cordova"]=1:xA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hf.getInstance().currentlyOnline();return Sf(this.interruptReasons_)&&e}}Ts.nextPersistentConnectionId_=0;Ts.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Md{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Oe(tl,e),a=new Oe(tl,t);return this.compare(s,a)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;class vC extends Md{static get __EMPTY_NODE(){return af}static set __EMPTY_NODE(e){af=e}compare(e,t){return Ua(e.name,t.name)}isDefinedOn(e){throw rl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,af)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,af)}toString(){return".key"}}const Ho=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Xt.RED,this.left=a??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(e,t,s,a,l){return new Xt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return bn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class Uk{copy(e,t,s,a,l){return this}insert(e,t,s){return new Xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(e,t=bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new of(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new of(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new of(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new of(this.root_,null,this.comparator_,!0,e)}}bn.EMPTY_NODE=new Uk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(n,e){return Ua(n.name,e.name)}function ly(n,e){return Ua(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg;function qk(n){Bg=n}const EC=function(n){return typeof n=="number"?"number:"+Zb(n):"string:"+n},TC=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qi(e,".sv"),"Priority must be a string or number.")}else ne(n===Bg||n.isEmpty(),"priority of unexpected type.");ne(n===Bg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KS;class Yt{static set __childrenNodeConstructor(e){KS=e}static get __childrenNodeConstructor(){return KS}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),TC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Re(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Re(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+EC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Zb(this.value_):e+=this.value_,this.lazyHash_=Wb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SC,AC;function Bk(n){SC=n}function jk(n){AC=n}class Fk extends Md{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ua(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,new Yt("[PRIORITY-POST]",AC))}makePost(e,t){const s=SC(e);return new Oe(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pt=new Fk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=Math.log(2);class Gk{constructor(e){const t=l=>parseInt(Math.log(l)/Hk,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gf=function(n,e,t,s){n.sort(e);const a=function(p,g){const v=g-p;let T,A;if(v===0)return null;if(v===1)return T=n[p],A=t?t(T):T,new Xt(A,T.node,Xt.BLACK,null,null);{const O=parseInt(v/2,10)+p,q=a(p,O),Y=a(O+1,g);return T=n[O],A=t?t(T):T,new Xt(A,T.node,Xt.BLACK,q,Y)}},l=function(p){let g=null,v=null,T=n.length;const A=function(q,Y){const W=T-q,me=T;T-=q;const le=a(W+1,me),ue=n[W],je=t?t(ue):ue;O(new Xt(je,ue.node,Y,null,le))},O=function(q){g?(g.left=q,g=q):(v=q,g=q)};for(let q=0;q<p.count;++q){const Y=p.nextBitIsOne(),W=Math.pow(2,p.count-(q+1));Y?A(W,Xt.BLACK):(A(W,Xt.BLACK),A(W,Xt.RED))}return v},c=new Gk(n.length),d=l(c);return new bn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;const Mo={};class vs{static get Default(){return ne(Mo&&pt,"ChildrenNode.ts has not been loaded"),ug=ug||new vs({".priority":Mo},{".priority":pt}),ug}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bn?t:null}hasIndex(e){return qi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Ho,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Gf(s,e.getCompare()):d=Mo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new vs(v,g)}addToIndexes(e,t){const s=Af(this.indexes_,(a,l)=>{const c=Qo(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===Mo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Oe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Gf(d,c.getCompare())}else return Mo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Oe(e.name,d))),p.insert(e,e.node)}});return new vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Af(this.indexes_,a=>{if(a===Mo)return a;{const l=t.get(e.name);return l?a.remove(new Oe(e.name,l)):a}});return new vs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;class ve{static get EMPTY_NODE(){return Iu||(Iu=new ve(new bn(ly),null,vs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&TC(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Iu}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Iu:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Oe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Iu:this.priorityNode_;return new ve(a,c,l)}}updateChild(e,t){const s=Re(e);if(s===null)return t;{ne(Re(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(rt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pt,(c,d)=>{t[c]=d.val(e),s++,l&&ve.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+EC(this.getPriority().val())+":"),this.forEachChild(pt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Wb(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Oe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cc?-1:0}withIndex(e){if(e===Ho||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ho||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pt),a=t.getIterator(pt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ho?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qk extends ve{constructor(){super(new bn(ly),ve.EMPTY_NODE,vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const Cc=new Qk;Object.defineProperties(Oe,{MIN:{value:new Oe(tl,ve.EMPTY_NODE)},MAX:{value:new Oe(Oa,Cc)}});vC.__EMPTY_NODE=ve.EMPTY_NODE;Yt.__childrenNodeConstructor=ve;qk(Cc);jk(Cc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=!0;function Ot(n,e=null){if(n===null)return ve.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Yt(t,Ot(e))}if(!(n instanceof Array)&&Yk){const t=[];let s=!1;if(mn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Ot(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Oe(c,p)))}}),t.length===0)return ve.EMPTY_NODE;const l=Gf(t,zk,c=>c.name,ly);if(s){const c=Gf(t,pt.getCompare());return new ve(l,Ot(e),new vs({".priority":c},{".priority":pt}))}else return new ve(l,Ot(e),vs.Default)}else{let t=ve.EMPTY_NODE;return mn(n,(s,a)=>{if(qi(n,s)&&s.substring(0,1)!=="."){const l=Ot(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ot(e))}}Bk(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk extends Md{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ua(e.name,t.name):l}makePost(e,t){const s=Ot(e),a=ve.EMPTY_NODE.updateChild(this.indexPath_,s);return new Oe(t,a)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,Cc);return new Oe(Oa,e)}toString(){return ac(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk extends Md{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ua(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const s=Ot(e);return new Oe(t,s)}toString(){return".value"}}const Wk=new Xk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(n){return{type:"value",snapshotNode:n}}function nl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function oc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function lc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $k(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(oc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(nl(t,s)):c.trackChildChange(lc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pt,(a,l)=>{t.hasChild(a)||s.trackChildChange(oc(a,l))}),t.isLeafNode()||t.forEachChild(pt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(lc(a,l,c))}else s.trackChildChange(nl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ve.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new uc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Oe(t,s))||(s=ve.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=ve.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=ve.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(ve.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,ve.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(A,O)=>T(O,A)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const p=new Oe(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let A=a.getChildAfterChild(this.index_,g,this.reverse_);for(;A!=null&&(A.name===t||d.hasChild(A.name));)A=a.getChildAfterChild(this.index_,A,this.reverse_);const O=A==null?1:c(A,p);if(v&&!s.isEmpty()&&O>=0)return l?.trackChildChange(lc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(oc(t,T));const Y=d.updateImmediateChild(t,ve.EMPTY_NODE);return A!=null&&this.rangedFilter_.matches(A)?(l?.trackChildChange(nl(A.name,A.node)),Y.updateImmediateChild(A.name,A.node)):Y}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(oc(g.name,g.node)),l.trackChildChange(nl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,ve.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tl}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new cy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jk(n){return n.loadsAllData()?new uy(n.getIndex()):n.hasLimit()?new Zk(n):new uc(n)}function XS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pt?t="$priority":n.index_===Wk?t="$value":n.index_===Ho?t="$key":(ne(n.index_ instanceof Kk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Wt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Wt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Wt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Wt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function WS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends pC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=bc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Qf.getListenId_(e,s),d={};this.listens_[c]=d;const p=XS(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Qo(this.listens_,c)===d){let A;g?g===401?A="permission_denied":A="rest_error:"+g:A="ok",a(A,null)}})}unlisten(e,t){const s=Qf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=XS(e._queryParams),s=e._path.toString(),a=new ps;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+al(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Qu(d.responseText)}catch{Cn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Cn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){return{value:null,children:new Map}}function ml(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Re(e);n.children.has(s)||n.children.set(s,Yf());const a=n.children.get(s);e=rt(e),ml(a,e,t)}}function jg(n,e){if(De(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(pt,(s,a)=>{ml(n,new Je(s),a)}),jg(n,e)}}else if(n.children.size>0){const t=Re(e);return e=rt(e),n.children.has(t)&&jg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Fg(n,e,t){n.value!==null?t(e,n.value):tP(n,(s,a)=>{const l=new Je(e.toString()+"/"+s);Fg(a,l,t)})}function tP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&mn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=10*1e3,iP=30*1e3,sP=300*1e3;class rP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nP(e);const s=$S+(iP-$S)*Math.random();ju(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;mn(e,(a,l)=>{l>0&&qi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ju(this.reportStats_.bind(this),Math.floor(Math.random()*2*sP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ui;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ui||(ui={}));function bC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ui.ACK_USER_WRITE,this.source=bC()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new Kf(Ye(),t,this.revert)}}else return ne(Re(this.path)===e,"operationForChild called for unrelated child."),new Kf(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.source=e,this.path=t,this.type=ui.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new cc(this.source,Ye()):new cc(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ui.OVERWRITE}operationForChild(e){return De(this.path)?new xa(this.source,Ye(),this.snap.getImmediateChild(e)):new xa(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ui.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new xa(this.source,Ye(),t.value):new hc(this.source,Ye(),t)}else return ne(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oP(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push($k(c.childName,c.snapshotNode))}),Nu(n,a,"child_removed",e,s,t),Nu(n,a,"child_added",e,s,t),Nu(n,a,"child_moved",l,s,t),Nu(n,a,"child_changed",e,s,t),Nu(n,a,"value",e,s,t),a}function Nu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>uP(n,d,p)),c.forEach(d=>{const p=lP(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function lP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function uP(n,e,t){if(e.childName==null||t.childName==null)throw rl("Should only compare child_ events.");const s=new Oe(e.childName,e.snapshotNode),a=new Oe(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e){return{eventCache:n,serverCache:e}}function Fu(n,e,t,s){return kd(new Ma(e,t,s),n.serverCache)}function CC(n,e,t,s){return kd(n.eventCache,new Ma(e,t,s))}function Hg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ka(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg;const cP=()=>(cg||(cg=new bn(KM)),cg);class ut{static fromObject(e){let t=new ut(null);return mn(e,(s,a)=>{t=t.set(new Je(s),a)}),t}constructor(e,t=cP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(De(e))return null;{const s=Re(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:bt(new Je(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Re(e),s=this.children.get(t);return s!==null?s.subtree(rt(e)):new ut(null)}}set(e,t){if(De(e))return new ut(t,this.children);{const s=Re(e),l=(this.children.get(s)||new ut(null)).set(rt(e),t),c=this.children.insert(s,l);return new ut(this.value,c)}}remove(e){if(De(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Re(e),s=this.children.get(t);if(s){const a=s.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(De(e))return this.value;{const t=Re(e),s=this.children.get(t);return s?s.get(rt(e)):null}}setTree(e,t){if(De(e))return t;{const s=Re(e),l=(this.children.get(s)||new ut(null)).setTree(rt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ut(this.value,c)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(bt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(De(e))return null;{const l=Re(e),c=this.children.get(l);return c?c.findOnPath_(rt(e),bt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(De(e))return this;{this.value&&s(t,this.value);const a=Re(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),bt(t,a),s):new ut(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(bt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new ut(null))}}function Hu(n,e,t){if(De(e))return new fi(new ut(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=wn(a,e);return l=l.updateChild(c,t),new fi(n.writeTree_.set(a,l))}else{const a=new ut(t),l=n.writeTree_.setTree(e,a);return new fi(l)}}}function ZS(n,e,t){let s=n;return mn(t,(a,l)=>{s=Hu(s,bt(e,a),l)}),s}function JS(n,e){if(De(e))return fi.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new fi(t)}}function Gg(n,e){return za(n,e)!=null}function za(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(wn(t.path,e)):null}function eA(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pt,(s,a)=>{e.push(new Oe(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Oe(s,a.value))}),e}function _r(n,e){if(De(e))return n;{const t=za(n,e);return t!=null?new fi(new ut(t)):new fi(n.writeTree_.subtree(e))}}function Qg(n){return n.writeTree_.isEmpty()}function il(n,e){return RC(Ye(),n.writeTree_,e)}function RC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=RC(bt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(bt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n,e){return OC(e,n)}function hP(n,e,t,s,a){ne(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Hu(n.visibleWrites,e,t)),n.lastWriteId=s}function fP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function dP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&mP(d,s.path)?a=!1:ei(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return pP(n),!0;if(s.snap)n.visibleWrites=JS(n.visibleWrites,s.path);else{const d=s.children;mn(d,p=>{n.visibleWrites=JS(n.visibleWrites,bt(s.path,p))})}return!0}else return!1}function mP(n,e){if(n.snap)return ei(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ei(bt(n.path,t),e))return!0;return!1}function pP(n){n.visibleWrites=IC(n.allWrites,gP,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gP(n){return n.visible}function IC(n,e,t){let s=fi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)ei(t,c)?(d=wn(t,c),s=Hu(s,d,l.snap)):ei(c,t)&&(d=wn(c,t),s=Hu(s,Ye(),l.snap.getChild(d)));else if(l.children){if(ei(t,c))d=wn(t,c),s=ZS(s,d,l.children);else if(ei(c,t))if(d=wn(c,t),De(d))s=ZS(s,Ye(),l.children);else{const p=Qo(l.children,Re(d));if(p){const g=p.getChild(rt(d));s=Hu(s,Ye(),g)}}}else throw rl("WriteRecord should have .snap or .children")}}return s}function NC(n,e,t,s,a){if(!s&&!a){const l=za(n.visibleWrites,e);if(l!=null)return l;{const c=_r(n.visibleWrites,e);if(Qg(c))return t;if(t==null&&!Gg(c,Ye()))return null;{const d=t||ve.EMPTY_NODE;return il(c,d)}}}else{const l=_r(n.visibleWrites,e);if(!a&&Qg(l))return t;if(!a&&t==null&&!Gg(l,Ye()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ei(g.path,e)||ei(e,g.path))},d=IC(n.allWrites,c,e),p=t||ve.EMPTY_NODE;return il(d,p)}}}function _P(n,e,t){let s=ve.EMPTY_NODE;const a=za(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=_r(n.visibleWrites,e);return t.forEachChild(pt,(c,d)=>{const p=il(_r(l,new Je(c)),d);s=s.updateImmediateChild(c,p)}),eA(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=_r(n.visibleWrites,e);return eA(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function yP(n,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=bt(e,t);if(Gg(n.visibleWrites,l))return null;{const c=_r(n.visibleWrites,l);return Qg(c)?a.getChild(t):il(c,a.getChild(t))}}function vP(n,e,t,s){const a=bt(e,t),l=za(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=_r(n.visibleWrites,a);return il(c,s.getNode().getImmediateChild(t))}else return null}function EP(n,e){return za(n.visibleWrites,e)}function TP(n,e,t,s,a,l,c){let d;const p=_r(n.visibleWrites,e),g=za(p,Ye());if(g!=null)d=g;else if(t!=null)d=il(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),A=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=A.getNext();for(;O&&v.length<a;)T(O,s)!==0&&v.push(O),O=A.getNext();return v}else return[]}function SP(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function Xf(n,e,t,s){return NC(n.writeTree,n.treePath,e,t,s)}function my(n,e){return _P(n.writeTree,n.treePath,e)}function tA(n,e,t,s){return yP(n.writeTree,n.treePath,e,t,s)}function Wf(n,e){return EP(n.writeTree,bt(n.treePath,e))}function AP(n,e,t,s,a,l){return TP(n.writeTree,n.treePath,e,t,s,a,l)}function py(n,e,t){return vP(n.writeTree,n.treePath,e,t)}function DC(n,e){return OC(bt(n.treePath,e),n.writeTree)}function OC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,lc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,oc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,nl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,lc(s,e.snapshotNode,a.oldSnap));else throw rl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const xC=new bP;class gy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ma(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return py(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ka(this.viewCache_),l=AP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(n){return{filter:n}}function RP(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function IP(n,e,t,s,a){const l=new wP;let c,d;if(t.type===ui.OVERWRITE){const g=t;g.source.fromUser?c=Yg(n,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!De(g.path),c=$f(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===ui.MERGE){const g=t;g.source.fromUser?c=DP(n,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Kg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===ui.ACK_USER_WRITE){const g=t;g.revert?c=MP(n,e,g.path,s,a,l):c=OP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===ui.LISTEN_COMPLETE)c=xP(n,e,t.path,s,l);else throw rl("Unknown operation type: "+t.type);const p=l.getChanges();return NP(e,c,p),{viewCache:c,changes:p}}function NP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Hg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(wC(Hg(e)))}}function MC(n,e,t,s,a,l){const c=e.eventCache;if(Wf(s,t)!=null)return e;{let d,p;if(De(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ka(e),v=g instanceof ve?g:ve.EMPTY_NODE,T=my(s,v);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Xf(s,ka(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Re(t);if(g===".priority"){ne(Ir(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=tA(s,t,v,p);T!=null?d=n.filter.updatePriority(v,T):d=c.getNode()}else{const v=rt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const A=tA(s,t,c.getNode(),p);A!=null?T=c.getNode().getImmediateChild(g).updateChild(v,A):T=c.getNode().getImmediateChild(g)}else T=py(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Fu(e,d,c.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function $f(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(De(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),O,null)}else{const O=Re(t);if(!p.isCompleteForPath(t)&&Ir(t)>1)return e;const q=rt(t),W=p.getNode().getImmediateChild(O).updateChild(q,s);O===".priority"?g=v.updatePriority(p.getNode(),W):g=v.updateChild(p.getNode(),O,W,q,xC,null)}const T=CC(e,g,p.isFullyInitialized()||De(t),v.filtersNodes()),A=new gy(a,T,l);return MC(n,T,t,a,A,d)}function Yg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new gy(a,e,l);if(De(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Fu(e,g,!0,n.filter.filtersNodes());else{const T=Re(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Fu(e,g,d.isFullyInitialized(),d.isFiltered());else{const A=rt(t),O=d.getNode().getImmediateChild(T);let q;if(De(A))q=s;else{const Y=v.getCompleteChild(T);Y!=null?ry(A)===".priority"&&Y.getChild(_C(A)).isEmpty()?q=Y:q=Y.updateChild(A,s):q=ve.EMPTY_NODE}if(O.equals(q))p=e;else{const Y=n.filter.updateChild(d.getNode(),T,q,A,v,c);p=Fu(e,Y,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function nA(n,e){return n.eventCache.isCompleteForChild(e)}function DP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=bt(t,p);nA(e,Re(v))&&(d=Yg(n,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=bt(t,p);nA(e,Re(v))||(d=Yg(n,d,v,g,a,l,c))}),d}function iA(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Kg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;De(t)?g=s:g=new ut(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,A)=>{if(v.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),q=iA(n,O,A);p=$f(n,p,new Je(T),q,a,l,c,d)}}),g.children.inorderTraversal((T,A)=>{const O=!e.serverCache.isCompleteForChild(T)&&A.value===null;if(!v.hasChild(T)&&!O){const q=e.serverCache.getNode().getImmediateChild(T),Y=iA(n,q,A);p=$f(n,p,new Je(T),Y,a,l,c,d)}}),p}function OP(n,e,t,s,a,l,c){if(Wf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(De(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return $f(n,e,t,p.getNode().getChild(t),a,l,d,c);if(De(t)){let g=new ut(null);return p.getNode().forEachChild(Ho,(v,T)=>{g=g.set(new Je(v),T)}),Kg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ut(null);return s.foreach((v,T)=>{const A=bt(t,v);p.isCompleteForPath(A)&&(g=g.set(v,p.getNode().getChild(A)))}),Kg(n,e,t,g,a,l,d,c)}}function xP(n,e,t,s,a){const l=e.serverCache,c=CC(e,l.getNode(),l.isFullyInitialized()||De(t),l.isFiltered());return MC(n,c,t,s,xC,a)}function MP(n,e,t,s,a,l){let c;if(Wf(s,t)!=null)return e;{const d=new gy(s,e,a),p=e.eventCache.getNode();let g;if(De(t)||Re(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Xf(s,ka(e));else{const T=e.serverCache.getNode();ne(T instanceof ve,"serverChildren would be complete if leaf node"),v=my(s,T)}v=v,g=n.filter.updateFullNode(p,v,l)}else{const v=Re(t);let T=py(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=n.filter.updateChild(p,v,T,rt(t),d,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,ve.EMPTY_NODE,rt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Xf(s,ka(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Wf(s,Ye())!=null,Fu(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new uy(s.getIndex()),l=Jk(s);this.processor_=CP(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(ve.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(ve.EMPTY_NODE,d.getNode(),null),v=new Ma(p,c.isFullyInitialized(),a.filtersNodes()),T=new Ma(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=kd(T,v),this.eventGenerator_=new aP(this.query_)}get query(){return this.query_}}function PP(n){return n.viewCache_.serverCache.getNode()}function VP(n,e){const t=ka(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function sA(n){return n.eventRegistrations_.length===0}function LP(n,e){n.eventRegistrations_.push(e)}function rA(n,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function aA(n,e,t,s){e.type===ui.MERGE&&e.source.queryId!==null&&(ne(ka(n.viewCache_),"We should always have a full cache before handling merges"),ne(Hg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=IP(n.processor_,a,e,t,s);return RP(n.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,kC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function UP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(pt,(l,c)=>{s.push(nl(l,c))}),t.isFullyInitialized()&&s.push(wC(t.getNode())),kC(n,s,t.getNode(),e)}function kC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return oP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;class zP{constructor(){this.views=new Map}}function qP(n){ne(!Zf,"__referenceConstructor has already been defined"),Zf=n}function BP(){return ne(Zf,"Reference.ts has not been loaded"),Zf}function jP(n){return n.views.size===0}function _y(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),aA(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(aA(c,e,t,s));return l}}function FP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=Xf(t,a?s:null),p=!1;d?p=!0:s instanceof ve?(d=my(t,s),p=!1):(d=ve.EMPTY_NODE,p=!1);const g=kd(new Ma(d,p,!1),new Ma(s,a,!1));return new kP(e,g)}return c}function HP(n,e,t,s,a,l){const c=FP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),LP(c,t),UP(c,t)}function GP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Nr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(rA(g,t,s)),sA(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(rA(p,t,s)),sA(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Nr(n)&&l.push(new(BP())(e._repo,e._path)),{removed:l,events:c}}function PC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Go(n,e){let t=null;for(const s of n.views.values())t=t||VP(s,e);return t}function VC(n,e){if(e._queryParams.loadsAllData())return Pd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function LC(n,e){return VC(n,e)!=null}function Nr(n){return Pd(n)!=null}function Pd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf;function QP(n){ne(!Jf,"__referenceConstructor has already been defined"),Jf=n}function YP(){return ne(Jf,"Reference.ts has not been loaded"),Jf}let KP=1;class oA{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=SP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function UC(n,e,t,s,a){return hP(n.pendingWriteTree_,e,t,s,a),a?Rc(n,new xa(bC(),e,t)):[]}function Sa(n,e,t=!1){const s=fP(n.pendingWriteTree_,e);if(dP(n.pendingWriteTree_,e)){let l=new ut(null);return s.snap!=null?l=l.set(Ye(),!0):mn(s.children,c=>{l=l.set(new Je(c),!0)}),Rc(n,new Kf(s.path,l,t))}else return[]}function Vd(n,e,t){return Rc(n,new xa(hy(),e,t))}function XP(n,e,t){const s=ut.fromObject(t);return Rc(n,new hc(hy(),e,s))}function WP(n,e){return Rc(n,new cc(hy(),e))}function $P(n,e,t){const s=vy(n,t);if(s){const a=Ey(s),l=a.path,c=a.queryId,d=wn(l,e),p=new cc(fy(c),d);return Ty(n,l,p)}else return[]}function Xg(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||LC(c,e))){const p=GP(c,e,t,s);jP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(A=>A._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(A,O)=>Nr(O));if(v&&!T){const A=n.syncPointTree_.subtree(l);if(!A.isEmpty()){const O=e4(A);for(let q=0;q<O.length;++q){const Y=O[q],W=Y.query,me=BC(n,Y);n.listenProvider_.startListening(Gu(W),ed(n,W),me.hashFn,me.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening(Gu(e),null):g.forEach(A=>{const O=n.queryToTagMap.get(Ld(A));n.listenProvider_.stopListening(Gu(A),O)}))}t4(n,g)}return d}function ZP(n,e,t,s){const a=vy(n,s);if(a!=null){const l=Ey(a),c=l.path,d=l.queryId,p=wn(c,e),g=new xa(fy(d),p,t);return Ty(n,c,g)}else return[]}function JP(n,e,t,s){const a=vy(n,s);if(a){const l=Ey(a),c=l.path,d=l.queryId,p=wn(c,e),g=ut.fromObject(t),v=new hc(fy(d),p,g);return Ty(n,c,v)}else return[]}function lA(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(A,O)=>{const q=wn(A,a);l=l||Go(O,q),c=c||Nr(O)});let d=n.syncPointTree_.get(a);d?(c=c||Nr(d),l=l||Go(d,Ye())):(d=new zP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=ve.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((O,q)=>{const Y=Go(q,Ye());Y&&(l=l.updateImmediateChild(O,Y))}));const g=LC(d,e);if(!g&&!e._queryParams.loadsAllData()){const A=Ld(e);ne(!n.queryToTagMap.has(A),"View does not exist, but we have a tag");const O=n4();n.queryToTagMap.set(A,O),n.tagToQueryMap.set(O,A)}const v=dy(n.pendingWriteTree_,a);let T=HP(d,e,t,v,l,p);if(!g&&!c&&!s){const A=VC(d,e);T=T.concat(i4(n,e,A))}return T}function yy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=wn(c,e),g=Go(d,p);if(g)return g});return NC(a,e,l,t,!0)}function Rc(n,e){return zC(e,n.syncPointTree_,null,dy(n.pendingWriteTree_,Ye()))}function zC(n,e,t,s){if(De(n.path))return qC(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Go(a,Ye()));let l=[];const c=Re(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=DC(s,c);l=l.concat(zC(d,p,g,v))}return a&&(l=l.concat(_y(a,n,s,t))),l}}function qC(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Go(a,Ye()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=DC(s,c),v=n.operationForChild(c);v&&(l=l.concat(qC(v,d,p,g)))}),a&&(l=l.concat(_y(a,n,s,t))),l}function BC(n,e){const t=e.query,s=ed(n,t);return{hashFn:()=>(PP(e)||ve.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?$P(n,t._path,s):WP(n,t._path);{const l=$M(a,t);return Xg(n,t,null,l)}}}}function ed(n,e){const t=Ld(e);return n.queryToTagMap.get(t)}function Ld(n){return n._path.toString()+"$"+n._queryIdentifier}function vy(n,e){return n.tagToQueryMap.get(e)}function Ey(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function Ty(n,e,t){const s=n.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=dy(n.pendingWriteTree_,e);return _y(s,t,a,null)}function e4(n){return n.fold((e,t,s)=>{if(t&&Nr(t))return[Pd(t)];{let a=[];return t&&(a=PC(t)),mn(s,(l,c)=>{a=a.concat(c)}),a}})}function Gu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(YP())(n._repo,n._path):n}function t4(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Ld(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function n4(){return KP++}function i4(n,e,t){const s=e._path,a=ed(n,e),l=BC(n,t),c=n.listenProvider_.startListening(Gu(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ne(!Nr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!De(g)&&v&&Nr(v))return[Pd(v).query];{let A=[];return v&&(A=A.concat(PC(v).map(O=>O.query))),mn(T,(O,q)=>{A=A.concat(q)}),A}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening(Gu(v),ed(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sy(t)}node(){return this.node_}}class Ay{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new Ay(this.syncTree_,t)}node(){return yy(this.syncTree_,this.path_)}}const s4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},uA=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return r4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return a4(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},r4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},a4=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},o4=function(n,e,t,s){return wy(e,new Ay(t,n),s)},jC=function(n,e,t){return wy(n,new Sy(e),t)};function wy(n,e,t){const s=n.getPriority().val(),a=uA(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=uA(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,Ot(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(pt,(d,p)=>{const g=wy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Cy(n,e){let t=e instanceof Je?e:new Je(e),s=n,a=Re(t);for(;a!==null;){const l=Qo(s.node.children,a)||{children:{},childCount:0};s=new by(a,s,l),t=rt(t),a=Re(t)}return s}function pl(n){return n.node.value}function FC(n,e){n.node.value=e,Wg(n)}function HC(n){return n.node.childCount>0}function l4(n){return pl(n)===void 0&&!HC(n)}function Ud(n,e){mn(n.node.children,(t,s)=>{e(new by(t,n,s))})}function GC(n,e,t,s){t&&e(n),Ud(n,a=>{GC(a,e,!0)})}function u4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ic(n){return new Je(n.parent===null?n.name:Ic(n.parent)+"/"+n.name)}function Wg(n){n.parent!==null&&c4(n.parent,n.name,n)}function c4(n,e,t){const s=l4(t),a=qi(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,Wg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,Wg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=/[\[\].#$\/\u0000-\u001F\u007F]/,f4=/[\[\].#$\u0000-\u001F\u007F]/,hg=10*1024*1024,Ry=function(n){return typeof n=="string"&&n.length!==0&&!h4.test(n)},QC=function(n){return typeof n=="string"&&n.length!==0&&!f4.test(n)},d4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),QC(n)},YC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!xd(n)||n&&typeof n=="object"&&qi(n,".sv")},$g=function(n,e,t,s){zd(Yo(n,"value"),e,t)},zd=function(n,e,t){const s=t instanceof Je?new Ok(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ya(s));if(typeof e=="function")throw new Error(n+"contains a function "+ya(s)+" with contents = "+e.toString());if(xd(e))throw new Error(n+"contains "+e.toString()+" "+ya(s));if(typeof e=="string"&&e.length>hg/3&&rd(e)>hg)throw new Error(n+"contains a string greater than "+hg+" utf8 bytes "+ya(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(mn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ry(c)))throw new Error(n+" contains an invalid key ("+c+") "+ya(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xk(s,c),zd(n,d,s),Mk(s)}),a&&l)throw new Error(n+' contains ".value" child '+ya(s)+" in addition to actual children.")}},m4=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=ac(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Ry(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Dk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&ei(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},p4=function(n,e,t,s){const a=Yo(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];mn(e,(c,d)=>{const p=new Je(c);if(zd(a,d,bt(t,p)),ry(p)===".priority"&&!YC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),m4(a,l)},g4=function(n,e,t){if(xd(e))throw new Error(Yo(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!YC(e))throw new Error(Yo(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},KC=function(n,e,t,s){if(!QC(t))throw new Error(Yo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_4=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),KC(n,e,t)},ku=function(n,e){if(Re(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},y4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ry(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!d4(t))throw new Error(Yo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!ay(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function XC(n,e,t){Iy(n,t),WC(n,s=>ay(s,e))}function Rs(n,e,t){Iy(n,t),WC(n,s=>ei(s,e)||ei(e,s))}function WC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(E4(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function E4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Bu&&sn("event: "+t.toString()),dl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="repo_interrupt",S4=25;class A4{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yf(),this.transactionQueueTree_=new by,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w4(n,e,t){if(n.stats_=iy(n.repoInfo_),n.forceRestClient_||tk())n.server_=new Qf(n.repoInfo_,(s,a,l,c)=>{cA(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>hA(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ts(n.repoInfo_,e,(s,a,l,c)=>{cA(n,s,a,l,c)},s=>{hA(n,s)},s=>{C4(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ak(n.repoInfo_,()=>new rP(n.stats_,n.server_)),n.infoData_=new eP,n.infoSyncTree_=new oA({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Vd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Dy(n,"connected",!1),n.serverSyncTree_=new oA({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Rs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function b4(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ny(n){return s4({timestamp:b4(n)})}function cA(n,e,t,s,a){n.dataUpdateCount++;const l=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Af(t,g=>Ot(g));c=JP(n.serverSyncTree_,l,p,a)}else{const p=Ot(t);c=ZP(n.serverSyncTree_,l,p,a)}else if(s){const p=Af(t,g=>Ot(g));c=XP(n.serverSyncTree_,l,p)}else{const p=Ot(t);c=Vd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=qd(n,l)),Rs(n.eventQueue_,d,c)}function hA(n,e){Dy(n,"connected",e),e===!1&&I4(n)}function C4(n,e){mn(e,(t,s)=>{Dy(n,t,s)})}function Dy(n,e,t){const s=new Je("/.info/"+e),a=Ot(t);n.infoData_.updateSnapshot(s,a);const l=Vd(n.infoSyncTree_,s,a);Rs(n.eventQueue_,s,l)}function $C(n){return n.nextWriteId_++}function R4(n,e,t,s,a){Oy(n,"set",{path:e.toString(),value:t,priority:s});const l=Ny(n),c=Ot(t,s),d=yy(n.serverSyncTree_,e),p=jC(c,d,l),g=$C(n),v=UC(n.serverSyncTree_,e,p,g,!0);Iy(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(A,O)=>{const q=A==="ok";q||Cn("set at "+e+" failed: "+A);const Y=Sa(n.serverSyncTree_,g,!q);Rs(n.eventQueue_,e,Y),sl(n,a,A,O)});const T=nR(n,e);qd(n,T),Rs(n.eventQueue_,T,[])}function I4(n){Oy(n,"onDisconnectEvents");const e=Ny(n),t=Yf();Fg(n.onDisconnect_,Ye(),(a,l)=>{const c=o4(a,l,n.serverSyncTree_,e);ml(t,a,c)});let s=[];Fg(t,Ye(),(a,l)=>{s=s.concat(Vd(n.serverSyncTree_,a,l));const c=nR(n,a);qd(n,c)}),n.onDisconnect_=Yf(),Rs(n.eventQueue_,Ye(),s)}function N4(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&jg(n.onDisconnect_,e),sl(n,t,s,a)})}function fA(n,e,t,s){const a=Ot(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&ml(n.onDisconnect_,e,a),sl(n,s,l,c)})}function D4(n,e,t,s,a){const l=Ot(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&ml(n.onDisconnect_,e,l),sl(n,a,c,d)})}function O4(n,e,t,s){if(Sf(t)){sn("onDisconnect().update() called with empty data.  Don't do anything."),sl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&mn(t,(c,d)=>{const p=Ot(d);ml(n.onDisconnect_,bt(e,c),p)}),sl(n,s,a,l)})}function x4(n,e,t){let s;Re(e._path)===".info"?s=lA(n.infoSyncTree_,e,t):s=lA(n.serverSyncTree_,e,t),XC(n.eventQueue_,e._path,s)}function M4(n,e,t){let s;Re(e._path)===".info"?s=Xg(n.infoSyncTree_,e,t):s=Xg(n.serverSyncTree_,e,t),XC(n.eventQueue_,e._path,s)}function k4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(T4)}function Oy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),sn(t,...e)}function sl(n,e,t,s){e&&dl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function ZC(n,e,t){return yy(n.serverSyncTree_,e,t)||ve.EMPTY_NODE}function xy(n,e=n.transactionQueueTree_){if(e||Bd(n,e),pl(e)){const t=eR(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&P4(n,Ic(e),t)}else HC(e)&&Ud(e,t=>{xy(n,t)})}function P4(n,e,t){const s=t.map(g=>g.currentWriteId),a=ZC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=wn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Oy(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let A=0;A<t.length;A++)t[A].status=2,v=v.concat(Sa(n.serverSyncTree_,t[A].currentWriteId)),t[A].onComplete&&T.push(()=>t[A].onComplete(null,!0,t[A].currentOutputSnapshotResolved)),t[A].unwatcher();Bd(n,Cy(n.transactionQueueTree_,e)),xy(n,n.transactionQueueTree_),Rs(n.eventQueue_,e,v);for(let A=0;A<T.length;A++)dl(T[A])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Cn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}qd(n,e)}},c)}function qd(n,e){const t=JC(n,e),s=Ic(t),a=eR(n,t);return V4(n,a,s),s}function V4(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=wn(t,p.path);let v=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Sa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=S4)v=!0,T="maxretry",a=a.concat(Sa(n.serverSyncTree_,p.currentWriteId,!0));else{const A=ZC(n,p.path,c);p.currentInputSnapshot=A;const O=e[d].update(A.val());if(O!==void 0){zd("transaction failed: Data returned ",O,p.path);let q=Ot(O);typeof O=="object"&&O!=null&&qi(O,".priority")||(q=q.updatePriority(A.getPriority()));const W=p.currentWriteId,me=Ny(n),le=jC(q,A,me);p.currentOutputSnapshotRaw=q,p.currentOutputSnapshotResolved=le,p.currentWriteId=$C(n),c.splice(c.indexOf(W),1),a=a.concat(UC(n.serverSyncTree_,p.path,le,p.currentWriteId,p.applyLocally)),a=a.concat(Sa(n.serverSyncTree_,W,!0))}else v=!0,T="nodata",a=a.concat(Sa(n.serverSyncTree_,p.currentWriteId,!0))}Rs(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(A){setTimeout(A,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Bd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)dl(s[d]);xy(n,n.transactionQueueTree_)}function JC(n,e){let t,s=n.transactionQueueTree_;for(t=Re(e);t!==null&&pl(s)===void 0;)s=Cy(s,t),e=rt(e),t=Re(e);return s}function eR(n,e){const t=[];return tR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function tR(n,e,t){const s=pl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Ud(e,a=>{tR(n,a,t)})}function Bd(n,e){const t=pl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,FC(e,t.length>0?t:void 0)}Ud(e,s=>{Bd(n,s)})}function nR(n,e){const t=Ic(JC(n,e)),s=Cy(n.transactionQueueTree_,e);return u4(s,a=>{fg(n,a)}),fg(n,s),GC(s,a=>{fg(n,a)}),t}function fg(n,e){const t=pl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Sa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?FC(e,void 0):t.length=l+1,Rs(n.eventQueue_,Ic(e),a);for(let c=0;c<s.length;c++)dl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function U4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Cn(`Invalid query segment '${t}' in query '${n}'`)}return e}const dA=function(n,e){const t=z4(n),s=t.namespace;t.domain==="firebase.com"&&Cs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Cs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||QM();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lC(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Je(t.pathString)}},z4=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=L4(n.substring(v,T)));const A=U4(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const q=e.indexOf(".");s=e.substring(0,q).toLowerCase(),t=e.substring(q+1),l=s}"ns"in A&&(l=A.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wt(this.snapshot.exportVal())}}class B4{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class F4{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ps;return N4(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ku("OnDisconnect.remove",this._path);const e=new ps;return fA(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ku("OnDisconnect.set",this._path),$g("OnDisconnect.set",e,this._path);const t=new ps;return fA(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ku("OnDisconnect.setWithPriority",this._path),$g("OnDisconnect.setWithPriority",e,this._path),g4("OnDisconnect.setWithPriority",t);const s=new ps;return D4(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){ku("OnDisconnect.update",this._path),p4("OnDisconnect.update",e,this._path);const t=new ps;return O4(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return De(this._path)?null:ry(this._path)}get ref(){return new Mr(this._repo,this._path)}get _queryIdentifier(){const e=WS(this._queryParams),t=ty(e);return t==="{}"?"default":t}get _queryObject(){return WS(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof My))return!1;const t=this._repo===e._repo,s=ay(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nk(this._path)}}class Mr extends My{constructor(e,t){super(e,t,new cy,!1)}get parent(){const e=_C(this._path);return e===null?null:new Mr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class td{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),s=Zg(this.ref,e);return new td(this._node.getChild(t),s,pt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new td(a,Zg(this.ref,s),pt)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nd(n,e){return n=dt(n),n._checkNotDeleted("ref"),e!==void 0?Zg(n._root,e):n._root}function Zg(n,e){return n=dt(n),Re(n._path)===null?_4("child","path",e):KC("child","path",e),new Mr(n._repo,bt(n._path,e))}function H4(n){return n=dt(n),new F4(n._repo,n._path)}function iR(n,e){n=dt(n),ku("set",n._path),$g("set",e,n._path);const t=new ps;return R4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ky{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new q4("value",this,new td(e.snapshotNode,new Mr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new B4(this,e,t):null}matches(e){return e instanceof ky?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function G4(n,e,t,s,a){const l=new j4(t,void 0),c=new ky(l);return x4(n._repo,n,c),()=>M4(n._repo,n,c)}function sR(n,e,t,s){return G4(n,"value",e)}qP(Mr);QP(Mr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4="FIREBASE_DATABASE_EMULATOR_HOST",Jg={};let Y4=!1;function K4(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Dr(l);n.repoInfo_=new lC(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function X4(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Cs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=dA(l,a),d=c.repoInfo,p;typeof process<"u"&&xS&&(p=xS[Q4]),p?(l=`http://${p}?ns=${d.namespace}`,c=dA(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new ik(n.name,n.options,e);y4("Invalid Firebase Database URL",c),De(c.path)||Cs("Database URL must point to the root of a Firebase Database (not including a child path).");const v=$4(d,n,g,new nk(n,t));return new Z4(v,n)}function W4(n,e){const t=Jg[e];(!t||t[n.key]!==n)&&Cs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),k4(n),delete t[n.key]}function $4(n,e,t,s){let a=Jg[e.name];a||(a={},Jg[e.name]=a);let l=a[n.toURLString()];return l&&Cs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new A4(n,Y4,t,s),a[n.toURLString()]=l,l}class Z4{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mr(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cs("Cannot call "+e+" on a deleted database.")}}function J4(n=a_(),e){const t=od(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=IA("database");s&&eV(t,...s)}return t}function eV(n,e,t,s={}){n=dt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&yr(s,l.repoInfo_.emulatorOptions))return;Cs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new yf(yf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:OA(s.mockUserToken,n.app.options.projectId);c=new yf(d)}Dr(e)&&(n_(e),i_("Database",!0)),K4(l,a,s,c)}/**
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
 */function tV(n){qM(Pa),ba(new vr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return X4(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),xi(MS,kS,n),xi(MS,kS,"esm2020")}Ts.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ts.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};tV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),mA=n=>{const e=iV(n);return e.charAt(0).toUpperCase()+e.slice(1)},rR=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),sV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=Be.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>Be.createElement("svg",{ref:p,...rV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:rR("lucide",a),...!l&&!sV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>Be.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=(n,e)=>{const t=Be.forwardRef(({className:s,...a},l)=>Be.createElement(aV,{ref:l,iconNode:e,className:rR(`lucide-${nV(mA(n))}`,`lucide-${n}`,s),...a}));return t.displayName=mA(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lV=Bi("arrow-left",oV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],pA=Bi("bell",uV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hV=Bi("check",cV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aR=Bi("loader-circle",fV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],gA=Bi("log-out",dV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Py=Bi("message-square",mV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],gV=Bi("send",pV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],_A=Bi("user-plus",_V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yA=Bi("users",yV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],EV=Bi("x",vV),TV={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Vy=VA(TV),vf=C2(Vy),Rn=bM(Vy),id=J4(Vy),SV=n=>{Be.useEffect(()=>{if(!n)return;const e=nd(id,`/status/${n.uid}`),t=Da(Rn,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=nd(id,".info/connected"),c=sR(l,d=>{if(d.val()===!1){ic(t,{state:"offline",last_changed:sc()});return}H4(e).set(s).then(()=>{iR(e,a),ic(t,{state:"online",last_changed:sc()})})});return()=>c()},[n])},AV=n=>{const[e,t]=Be.useState(null);return Be.useEffect(()=>{if(!n){t(null);return}const s=Ac(Da(Rn,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=nd(id,`/status/${n}`),l=sR(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[n]),e},wV=({text:n="Preparando seu bate-papo..."})=>H.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:H.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[H.jsx(Py,{size:80,className:"text-blue-400 mb-6 mx-auto"}),H.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),H.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[H.jsx(aR,{className:"animate-spin h-10 w-10 text-blue-400"}),H.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),bV=()=>{const n=async()=>{const e=new gs;try{const s=(await PD(vf,e)).user,a=Da(Rn,"users",s.uid);(await Gb(a)).exists()||await zM(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return H.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:H.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[H.jsx(Py,{size:80,className:"text-blue-400 mb-6 mx-auto"}),H.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),H.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens minimalista e segura. Conecte-se para começar."}),H.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[H.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},vA=({currentUser:n})=>{const[e,t]=Be.useState(""),[s,a]=Be.useState([]),[l,c]=Be.useState({}),[d,p]=Be.useState(!1),[g,v]=Be.useState(""),[T,A]=Be.useState(""),O=async Y=>{if(Y.preventDefault(),e.trim()!==""){p(!0),v(""),A(""),a([]);try{const W=el(gr(Rn,"users"),Rr("email","==",e.trim()),VM(1)),le=(await OS(W)).docs.map(ue=>ue.data())[0];if(le&&le.uid!==n.uid){a([le]);const ue=el(gr(Rn,"friendships"),Rr("users","array-contains",n.uid)),Te=(await OS(ue)).docs.find(Fe=>Fe.data().users.includes(le.uid));c({[le.uid]:Te?Te.data().status:"not_friends"})}else le&&le.uid===n.uid?A("Você não pode adicionar a si mesmo."):A("Nenhum usuário encontrado com este e-mail.")}catch(W){v("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(W)}finally{p(!1)}}},q=async Y=>{try{await Qb(gr(Rn,"friendships"),{users:[n.uid,Y.uid],status:"pending",requestedBy:n.uid,createdAt:sc()}),c(W=>({...W,[Y.uid]:"pending"}))}catch(W){v("Falha ao enviar pedido."),console.error(W)}};return H.jsxs("div",{className:"p-4",children:[H.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),H.jsxs("form",{onSubmit:O,className:"flex gap-2",children:[H.jsx("input",{type:"email",value:e,onChange:Y=>t(Y.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),H.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?H.jsx(aR,{className:"animate-spin"}):"Buscar"})]}),H.jsxs("div",{className:"mt-4 h-24",children:[g&&H.jsx("p",{className:"text-red-400",children:g}),T&&H.jsx("p",{className:"text-yellow-400",children:T}),s.map(Y=>H.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("img",{src:Y.photoURL,alt:Y.displayName,className:"w-10 h-10 rounded-full"}),H.jsx("span",{className:"text-white",children:Y.displayName})]}),H.jsxs("div",{children:[l[Y.uid]==="not_friends"&&H.jsx("button",{onClick:()=>q(Y),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Y.uid]==="pending"&&H.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Y.uid]==="accepted"&&H.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Y.uid]==="declined"&&H.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Y.uid))]})]})},EA=({currentUser:n})=>{const[e,t]=Be.useState([]);Be.useEffect(()=>{const a=el(gr(Rn,"friendships"),Rr("users","array-contains",n.uid),Rr("status","==","pending")),l=Ac(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const v=g.users.find(A=>A!==n.uid),T=await Gb(Da(Rn,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await ic(Da(Rn,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return H.jsxs("div",{className:"p-4",children:[H.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?H.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):H.jsx("ul",{className:"space-y-2",children:e.map(a=>H.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),H.jsx("span",{className:"text-white",children:a.displayName})]}),H.jsxs("div",{className:"flex gap-2",children:[H.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:H.jsx(hV,{size:16})}),H.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:H.jsx(EV,{size:16})})]})]},a.id))})]})},TA=({currentUser:n,onSelectUser:e})=>{const[t,s]=Be.useState([]);return Be.useEffect(()=>{if(!n?.uid)return;const a=el(gr(Rn,"friendships"),Rr("users","array-contains",n.uid),Rr("status","==","accepted")),l=Ac(a,c=>{const d=c.docs.map(p=>p.data().users.find(g=>g!==n.uid));s(d)});return()=>l()},[n.uid]),H.jsxs("div",{className:"flex-grow overflow-y-auto",children:[H.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Contatos"}),t.length===0?H.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):H.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(a=>H.jsx(CV,{friendId:a,currentUser:n,onSelectUser:e},a))})]})},CV=({friendId:n,currentUser:e,onSelectUser:t})=>{const s=AV(n),[a,l]=Be.useState(0);if(Be.useEffect(()=>{if(!n||!e)return;const d=[e.uid,n].sort().join("_"),p=el(gr(Rn,`conversations/${d}/messages`),Rr("receiverId","==",e.uid),Rr("isRead","==",!1)),g=Ac(p,v=>l(v.size));return()=>g()},[n,e]),!s||!s.uid)return H.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const c=d=>d&&typeof d.seconds=="number"?`Visto por último: ${new Date(d.seconds*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Offline";return H.jsxs("li",{onClick:()=>t(s),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200",children:[H.jsxs("div",{className:"flex items-center gap-4 relative",children:[H.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),H.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${s.presence==="online"?"bg-green-500":"bg-gray-500"}`}),H.jsxs("div",{children:[H.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName}),H.jsx("p",{className:"text-sm text-gray-400",children:s.presence==="online"?"Online":c(s.last_changed)})]})]}),a>0&&H.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce",children:a})]})},SA=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=Be.useState([]),[l,c]=Be.useState(""),d=Be.useRef(null),p=[n.uid,e.uid].sort().join("_");Be.useEffect(()=>{const v=`conversations/${p}/messages`,T=el(gr(Rn,v),PM("createdAt","asc")),A=Ac(T,O=>{a(O.docs.map(q=>({id:q.id,...q.data()}))),O.docs.forEach(q=>{q.data().receiverId===n.uid&&!q.data().isRead&&ic(q.ref,{isRead:!0})})});return()=>A()},[p,n.uid]),Be.useEffect(()=>{d.current?.scrollIntoView({behavior:"smooth"})},[s]);const g=async v=>{if(v.preventDefault(),l.trim()==="")return;const T=l;c("");try{const A=`conversations/${p}/messages`;await Qb(gr(Rn,A),{text:T,createdAt:sc(),senderId:n.uid,receiverId:e.uid,isRead:!1})}catch(A){console.error("Falha ao enviar mensagem:",A),c(T)}};return H.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[H.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[H.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:H.jsx(lV,{size:24})}),H.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),H.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName})]}),H.jsxs("main",{className:"flex-grow p-4 overflow-y-auto",children:[H.jsx("div",{className:"space-y-2",children:s.map((v,T)=>{const A=v.senderId===n.uid;return H.jsx("div",{className:`flex items-end gap-2 ${A?"justify-end":"justify-start"} animate-fade-in-up`,children:H.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${A?"bg-blue-600 text-white rounded-br-none":"bg-gray-700 text-white rounded-bl-none"}`,children:[H.jsx("p",{className:"break-words",children:v.text}),H.jsx("p",{className:"text-xs text-right mt-1 opacity-60",children:v.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},v.id||T)})}),H.jsx("div",{ref:d})]}),H.jsx("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:H.jsxs("form",{onSubmit:g,className:"flex items-center gap-2",children:[H.jsx("input",{type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),H.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim(),children:H.jsx(gV,{size:20})})]})})]})},RV=({user:n,onLogout:e})=>{const[t,s]=Be.useState(null),[a,l]=Be.useState("contacts"),[c,d]=Be.useState("list");Be.useEffect(()=>{d(t?"chat":"list")},[t]);const p=v=>{s(v)},g=()=>{s(null)};return H.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[H.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[H.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),H.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),H.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:H.jsx(gA,{size:20})})]}),H.jsxs("div",{className:"flex border-b border-gray-700/50",children:[H.jsx("button",{onClick:()=>l("contacts"),className:`flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:H.jsx(yA,{className:"mx-auto"})}),H.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:H.jsx(_A,{className:"mx-auto"})}),H.jsx("button",{onClick:()=>l("requests"),className:`flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:H.jsx(pA,{className:"mx-auto"})})]}),H.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&H.jsx(TA,{currentUser:n,onSelectUser:p}),a==="add"&&H.jsx(vA,{currentUser:n}),a==="requests"&&H.jsx(EA,{currentUser:n})]})]}),H.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full",children:c==="list"?H.jsxs("div",{className:"flex flex-col h-full",children:[H.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),H.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),H.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:H.jsx(gA,{size:20})})]}),H.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&H.jsx(TA,{currentUser:n,onSelectUser:p}),a==="add"&&H.jsx(vA,{currentUser:n}),a==="requests"&&H.jsx(EA,{currentUser:n})]}),H.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[H.jsx("button",{onClick:()=>l("contacts"),className:`p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:H.jsx(yA,{})}),H.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:H.jsx(_A,{})}),H.jsx("button",{onClick:()=>l("requests"),className:`p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:H.jsx(pA,{})})]})]}):H.jsx(SA,{currentUser:n,otherUser:t,onLeave:g})}),H.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?H.jsx(SA,{currentUser:n,otherUser:t,onLeave:g}):H.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[H.jsx(Py,{size:60,className:"mb-4"}),H.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um contato"}),H.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function IV(){const[n,e]=Be.useState(null),[t,s]=Be.useState(!0);SV(n),Be.useEffect(()=>{const l=mD(vf,async c=>{if(c)e(c);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await hD(vf,__initial_auth_token):e(null)}catch(d){console.error("Falha na autenticação automática, mostrando tela de login.",d),e(null)}s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=nd(id,`/status/${n.uid}`);await iR(l,{state:"offline",last_changed:Date.now()}),await ic(Da(Rn,`/users/${n.uid}`),{state:"offline",last_changed:sc()}),await pD(vf),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return H.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:t?H.jsx(wV,{}):n?H.jsx(RV,{user:n,onLogout:a}):H.jsx(bV,{})})}q1.createRoot(document.getElementById("root")).render(H.jsx(Be.StrictMode,{children:H.jsx(IV,{})}));
