(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Hp={exports:{}},Iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function jR(){if(t0)return Iu;t0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Iu.Fragment=e,Iu.jsx=t,Iu.jsxs=t,Iu}var n0;function qR(){return n0||(n0=1,Hp.exports=jR()),Hp.exports}var L=qR(),Gp={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function BR(){if(i0)return Ce;i0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,Y={};function K(D,J,se){this.props=D,this.context=J,this.refs=Y,this.updater=se||x}K.prototype.isReactComponent={},K.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},K.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ce(){}ce.prototype=K.prototype;function oe(D,J,se){this.props=D,this.context=J,this.refs=Y,this.updater=se||x}var ue=oe.prototype=new ce;ue.constructor=oe,j(ue,K.prototype),ue.isPureReactComponent=!0;var Ue=Array.isArray,ve={H:null,A:null,T:null,S:null,V:null},ze=Object.prototype.hasOwnProperty;function N(D,J,se,ee,pe,Ne){return se=Ne.ref,{$$typeof:n,type:D,key:J,ref:se!==void 0?se:null,props:Ne}}function b(D,J){return N(D.type,J,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function M(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return J[se]})}var k=/\/+/g;function P(D,J){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):J.toString(36)}function I(){}function Zt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function gt(D,J,se,ee,pe){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Ne){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case n:case e:we=!0;break;case v:return we=D._init,gt(we(D._payload),J,se,ee,pe)}}if(we)return pe=pe(D),we=ee===""?"."+P(D,0):ee,Ue(pe)?(se="",we!=null&&(se=we.replace(k,"$&/")+"/"),gt(pe,J,se,"",function(_i){return _i})):pe!=null&&(R(pe)&&(pe=b(pe,se+(pe.key==null||D&&D.key===pe.key?"":(""+pe.key).replace(k,"$&/")+"/")+we)),J.push(pe)),1;we=0;var Bt=ee===""?".":ee+":";if(Ue(D))for(var at=0;at<D.length;at++)ee=D[at],Ne=Bt+P(ee,at),we+=gt(ee,J,se,Ne,pe);else if(at=w(D),typeof at=="function")for(D=at.call(D),at=0;!(ee=D.next()).done;)ee=ee.value,Ne=Bt+P(ee,at++),we+=gt(ee,J,se,Ne,pe);else if(Ne==="object"){if(typeof D.then=="function")return gt(Zt(D),J,se,ee,pe);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return we}function G(D,J,se){if(D==null)return D;var ee=[],pe=0;return gt(D,ee,"","",function(Ne){return J.call(se,Ne,pe++)}),ee}function ie(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ge(){}return Ce.Children={map:G,forEach:function(D,J,se){G(D,function(){J.apply(this,arguments)},se)},count:function(D){var J=0;return G(D,function(){J++}),J},toArray:function(D){return G(D,function(J){return J})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=K,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=oe,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ve.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,J,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ee=j({},D.props),pe=D.key,Ne=void 0;if(J!=null)for(we in J.ref!==void 0&&(Ne=void 0),J.key!==void 0&&(pe=""+J.key),J)!ze.call(J,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&J.ref===void 0||(ee[we]=J[we]);var we=arguments.length-2;if(we===1)ee.children=se;else if(1<we){for(var Bt=Array(we),at=0;at<we;at++)Bt[at]=arguments[at+2];ee.children=Bt}return N(D.type,pe,void 0,void 0,Ne,ee)},Ce.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ce.createElement=function(D,J,se){var ee,pe={},Ne=null;if(J!=null)for(ee in J.key!==void 0&&(Ne=""+J.key),J)ze.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(pe[ee]=J[ee]);var we=arguments.length-2;if(we===1)pe.children=se;else if(1<we){for(var Bt=Array(we),at=0;at<we;at++)Bt[at]=arguments[at+2];pe.children=Bt}if(D&&D.defaultProps)for(ee in we=D.defaultProps,we)pe[ee]===void 0&&(pe[ee]=we[ee]);return N(D,Ne,void 0,void 0,null,pe)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:d,render:D}},Ce.isValidElement=R,Ce.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:ie}},Ce.memo=function(D,J){return{$$typeof:g,type:D,compare:J===void 0?null:J}},Ce.startTransition=function(D){var J=ve.T,se={};ve.T=se;try{var ee=D(),pe=ve.S;pe!==null&&pe(se,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ge,fe)}catch(Ne){fe(Ne)}finally{ve.T=J}},Ce.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()},Ce.use=function(D){return ve.H.use(D)},Ce.useActionState=function(D,J,se){return ve.H.useActionState(D,J,se)},Ce.useCallback=function(D,J){return ve.H.useCallback(D,J)},Ce.useContext=function(D){return ve.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,J){return ve.H.useDeferredValue(D,J)},Ce.useEffect=function(D,J,se){var ee=ve.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(D,J)},Ce.useId=function(){return ve.H.useId()},Ce.useImperativeHandle=function(D,J,se){return ve.H.useImperativeHandle(D,J,se)},Ce.useInsertionEffect=function(D,J){return ve.H.useInsertionEffect(D,J)},Ce.useLayoutEffect=function(D,J){return ve.H.useLayoutEffect(D,J)},Ce.useMemo=function(D,J){return ve.H.useMemo(D,J)},Ce.useOptimistic=function(D,J){return ve.H.useOptimistic(D,J)},Ce.useReducer=function(D,J,se){return ve.H.useReducer(D,J,se)},Ce.useRef=function(D){return ve.H.useRef(D)},Ce.useState=function(D){return ve.H.useState(D)},Ce.useSyncExternalStore=function(D,J,se){return ve.H.useSyncExternalStore(D,J,se)},Ce.useTransition=function(){return ve.H.useTransition()},Ce.version="19.1.1",Ce}var s0;function r_(){return s0||(s0=1,Gp.exports=BR()),Gp.exports}var me=r_(),Qp={exports:{}},Nu={},Yp={exports:{}},Kp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function FR(){return r0||(r0=1,(function(n){function e(G,ie){var fe=G.length;G.push(ie);e:for(;0<fe;){var Ge=fe-1>>>1,D=G[Ge];if(0<a(D,ie))G[Ge]=ie,G[fe]=D,fe=Ge;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ie=G[0],fe=G.pop();if(fe!==ie){G[0]=fe;e:for(var Ge=0,D=G.length,J=D>>>1;Ge<J;){var se=2*(Ge+1)-1,ee=G[se],pe=se+1,Ne=G[pe];if(0>a(ee,fe))pe<D&&0>a(Ne,ee)?(G[Ge]=Ne,G[pe]=fe,Ge=pe):(G[Ge]=ee,G[se]=fe,Ge=se);else if(pe<D&&0>a(Ne,fe))G[Ge]=Ne,G[pe]=fe,Ge=pe;else break e}}return ie}function a(G,ie){var fe=G.sortIndex-ie.sortIndex;return fe!==0?fe:G.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,w=3,x=!1,j=!1,Y=!1,K=!1,ce=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function Ue(G){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=G)s(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(g)}}function ve(G){if(Y=!1,Ue(G),!j)if(t(p)!==null)j=!0,ze||(ze=!0,P());else{var ie=t(g);ie!==null&&gt(ve,ie.startTime-G)}}var ze=!1,N=-1,b=5,R=-1;function M(){return K?!0:!(n.unstable_now()-R<b)}function k(){if(K=!1,ze){var G=n.unstable_now();R=G;var ie=!0;try{e:{j=!1,Y&&(Y=!1,oe(N),N=-1),x=!0;var fe=w;try{t:{for(Ue(G),T=t(p);T!==null&&!(T.expirationTime>G&&M());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,w=T.priorityLevel;var D=Ge(T.expirationTime<=G);if(G=n.unstable_now(),typeof D=="function"){T.callback=D,Ue(G),ie=!0;break t}T===t(p)&&s(p),Ue(G)}else s(p);T=t(p)}if(T!==null)ie=!0;else{var J=t(g);J!==null&&gt(ve,J.startTime-G),ie=!1}}break e}finally{T=null,w=fe,x=!1}ie=void 0}}finally{ie?P():ze=!1}}}var P;if(typeof ue=="function")P=function(){ue(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Zt=I.port2;I.port1.onmessage=k,P=function(){Zt.postMessage(null)}}else P=function(){ce(k,0)};function gt(G,ie){N=ce(function(){G(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(G){switch(w){case 1:case 2:case 3:var ie=3;break;default:ie=w}var fe=w;w=ie;try{return G()}finally{w=fe}},n.unstable_requestPaint=function(){K=!0},n.unstable_runWithPriority=function(G,ie){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var fe=w;w=G;try{return ie()}finally{w=fe}},n.unstable_scheduleCallback=function(G,ie,fe){var Ge=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ge+fe:Ge):fe=Ge,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,G={id:v++,callback:ie,priorityLevel:G,startTime:fe,expirationTime:D,sortIndex:-1},fe>Ge?(G.sortIndex=fe,e(g,G),t(p)===null&&G===t(g)&&(Y?(oe(N),N=-1):Y=!0,gt(ve,fe-Ge))):(G.sortIndex=D,e(p,G),j||x||(j=!0,ze||(ze=!0,P()))),G},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(G){var ie=w;return function(){var fe=w;w=ie;try{return G.apply(this,arguments)}finally{w=fe}}}})(Kp)),Kp}var a0;function HR(){return a0||(a0=1,Yp.exports=FR()),Yp.exports}var Xp={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function GR(){if(o0)return cn;o0=1;var n=r_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,cn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},cn.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},cn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},cn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},cn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:x}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},cn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},cn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},cn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},cn.requestFormReset=function(p){s.d.r(p)},cn.unstable_batchedUpdates=function(p,g){return p(g)},cn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},cn.useFormStatus=function(){return c.H.useHostTransitionStatus()},cn.version="19.1.1",cn}var l0;function QR(){if(l0)return Xp.exports;l0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Xp.exports=GR(),Xp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function YR(){if(u0)return Nu;u0=1;var n=HR(),e=r_(),t=QR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),oe=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function P(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var I=Symbol.for("react.client.reference");function Zt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===I?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case j:return"Fragment";case K:return"Profiler";case Y:return"StrictMode";case ve:return"Suspense";case ze:return"SuspenseList";case R:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case ue:return(i.displayName||"Context")+".Provider";case oe:return(i._context.displayName||"Context")+".Consumer";case Ue:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case N:return r=i.displayName||null,r!==null?r:Zt(i.type)||"Memo";case b:r=i._payload,i=i._init;try{return Zt(i(r))}catch{}}return null}var gt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ge=[],D=-1;function J(i){return{current:i}}function se(i){0>D||(i.current=Ge[D],Ge[D]=null,D--)}function ee(i,r){D++,Ge[D]=i.current,i.current=r}var pe=J(null),Ne=J(null),we=J(null),Bt=J(null);function at(i,r){switch(ee(we,r),ee(Ne,i),ee(pe,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?NT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=NT(r),i=DT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}se(pe),ee(pe,i)}function _i(){se(pe),se(Ne),se(we)}function ks(i){i.memoizedState!==null&&ee(Bt,i);var r=pe.current,o=DT(r,i.type);r!==o&&(ee(Ne,i),ee(pe,o))}function Gi(i){Ne.current===i&&(se(pe),se(Ne)),Bt.current===i&&(se(Bt),wu._currentValue=fe)}var Vr=Object.prototype.hasOwnProperty,Lr=n.unstable_scheduleCallback,Ur=n.unstable_cancelCallback,El=n.unstable_shouldYield,Mc=n.unstable_requestPaint,Fn=n.unstable_now,Hd=n.unstable_getCurrentPriorityLevel,Tl=n.unstable_ImmediatePriority,Ha=n.unstable_UserBlockingPriority,zr=n.unstable_NormalPriority,Gd=n.unstable_LowPriority,Ga=n.unstable_IdlePriority,Sl=n.log,kc=n.unstable_setDisableYieldValue,_t=null,We=null;function xn(i){if(typeof Sl=="function"&&kc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(_t,i)}catch{}}var ln=Math.clz32?Math.clz32:jr,Pc=Math.log,Qd=Math.LN2;function jr(i){return i>>>=0,i===0?32:31-(Pc(i)/Qd|0)|0}var qr=256,Br=4194304;function ri(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Qa(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ri(u):(E&=S,E!==0?f=ri(E):o||(o=S&~i,o!==0&&(f=ri(o))))):(S=u&~m,S!==0?f=ri(S):E!==0?f=ri(E):o||(o=u&~i,o!==0&&(f=ri(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Fr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function wl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var i=qr;return qr<<=1,(qr&4194048)===0&&(qr=256),i}function bl(){var i=Br;return Br<<=1,(Br&62914560)===0&&(Br=4194304),i}function Qi(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Cl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,C=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-ln(o),$=1<<Q;S[Q]=0,C[Q]=-1;var B=q[Q];if(B!==null)for(q[Q]=null,Q=0;Q<B.length;Q++){var F=B[Q];F!==null&&(F.lane&=-536870913)}o&=~$}u!==0&&yi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function yi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-ln(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Rl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-ln(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Ps(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ya(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Vs(){var i=ie.p;return i!==0?i:(i=window.event,i===void 0?32:XT(i.type))}function Vc(i,r){var o=ie.p;try{return ie.p=i,r()}finally{ie.p=o}}var ft=Math.random().toString(36).slice(2),Vt="__reactFiber$"+ft,Ct="__reactProps$"+ft,Hn="__reactContainer$"+ft,Il="__reactEvents$"+ft,Yd="__reactListeners$"+ft,Ls="__reactHandles$"+ft,Lc="__reactResources$"+ft,Hr="__reactMarker$"+ft;function Us(i){delete i[Vt],delete i[Ct],delete i[Il],delete i[Yd],delete i[Ls]}function Ki(i){var r=i[Vt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Hn]||o[Vt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=kT(i);i!==null;){if(o=i[Vt])return o;i=kT(i)}return r}i=o,o=i.parentNode}return null}function vi(i){if(i=i[Vt]||i[Hn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ei(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function _n(i){var r=i[Lc];return r||(r=i[Lc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Tt(i){i[Hr]=!0}var Nl=new Set,Ka={};function ai(i,r){Xi(i,r),Xi(i+"Capture",r)}function Xi(i,r){for(Ka[i]=r,i=0;i<r.length;i++)Nl.add(r[i])}var Uc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zc={},Gr={};function jc(i){return Vr.call(Gr,i)?!0:Vr.call(zc,i)?!1:Uc.test(i)?Gr[i]=!0:(zc[i]=!0,!1)}function zs(i,r,o){if(jc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Ti(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Jt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Qr,qc;function Wi(i){if(Qr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Qr=r&&r[1]||"",qc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qr+i+qc}var Xa=!1;function Wa(i,r){if(!i||Xa)return"";Xa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(F){var B=F}Reflect.construct(i,[],$)}else{try{$.call()}catch(F){B=F}i.call($.prototype)}}else{try{throw Error()}catch(F){B=F}($=i())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var C=E.split(`
`),q=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===q.length)for(u=C.length-1,f=q.length-1;1<=u&&0<=f&&C[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==q[f]){var Q=`
`+C[u].replace(" at new "," at ");return i.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",i.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Xa=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Wi(o):""}function Dl(i){switch(i.tag){case 26:case 27:case 5:return Wi(i.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 15:return Wa(i.type,!1);case 11:return Wa(i.type.render,!1);case 1:return Wa(i.type,!0);case 31:return Wi("Activity");default:return""}}function $a(i){try{var r="";do r+=Dl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function yn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function xl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Kd(i){var r=xl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Za(i){i._valueTracker||(i._valueTracker=Kd(i))}function Ol(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=xl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Yr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Xd=/[\n"\\]/g;function Rt(i){return i.replace(Xd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function On(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+yn(r)):i.value!==""+yn(r)&&(i.value=""+yn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?js(i,E,yn(r)):o!=null?js(i,E,yn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+yn(S):i.removeAttribute("name")}function Kr(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+yn(o):"",r=r!=null?""+yn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function js(i,r,o){r==="number"&&Yr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function $i(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+yn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function et(i,r,o){if(r!=null&&(r=""+yn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+yn(o):""}function Xr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(gt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=yn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Gn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Wr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Wr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Ml(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Bc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Bc(i,m,r[m])}function kl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ja(i){return $d.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Zi=null;function Qn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ji=null,es=null;function Pl(i){var r=vi(i);if(r&&(i=r.stateNode)){var o=i[Ct]||null;e:switch(i=r.stateNode,r.type){case"input":if(On(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ct]||null;if(!f)throw Error(s(90));On(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ol(u)}break e;case"textarea":et(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&$i(i,!!o.multiple,r,!1)}}}var Si=!1;function Fc(i,r,o){if(Si)return i(r,o);Si=!0;try{var u=i(r);return u}finally{if(Si=!1,(Ji!==null||es!==null)&&(Vh(),Ji&&(r=Ji,i=es,es=Ji=null,Pl(r),i)))for(r=0;r<i.length;r++)Pl(i[r])}}function $r(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yn=!1;if(oi)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Yn=!1}var wi=null,qs=null,ts=null;function Vl(){if(ts)return ts;var i,r=qs,o=r.length,u,f="value"in wi?wi.value:wi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ts=f.slice(i,1<u?1-u:void 0)}function Ai(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function bi(){return!0}function Ll(){return!1}function Ft(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bi:Ll,this.isPropagationStopped=Ll,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Ft(Ke),Jr=v({},Ke,{view:0,detail:0}),Hc=Ft(Jr),to,no,Ci,ea=v({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ci&&(Ci&&i.type==="mousemove"?(to=i.screenX-Ci.screenX,no=i.screenY-Ci.screenY):no=to=0,Ci=i),to)},movementY:function(i){return"movementY"in i?i.movementY:no}}),Kn=Ft(ea),Gc=v({},ea,{dataTransfer:0}),Zd=Ft(Gc),ta=v({},Jr,{relatedTarget:0}),io=Ft(ta),Ul=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),so=Ft(Ul),Qc=v({},Ke,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ro=Ft(Qc),Jd=v({},Ke,{data:0}),zl=Ft(Jd),na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Kc[i])?!!r[i]:!1}function ia(){return jl}var Xc=v({},Jr,{key:function(i){if(i.key){var r=na[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ai(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Yc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(i){return i.type==="keypress"?Ai(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ai(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ao=Ft(Xc),Wc=v({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ql=Ft(Wc),ns=v({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),$c=Ft(ns),Zc=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jc=Ft(Zc),eh=v({},ea,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),oo=Ft(eh),vn=v({},Ke,{newState:0,oldState:0}),th=Ft(vn),nh=[9,13,27,32],Ri=oi&&"CompositionEvent"in window,h=null;oi&&"documentMode"in document&&(h=document.documentMode);var _=oi&&"TextEvent"in window&&!h,y=oi&&(!Ri||h&&8<h&&11>=h),A=" ",U=!1;function H(i,r){switch(i){case"keyup":return nh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Lt(i,r){switch(i){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(U=!0,A);case"textInput":return i=r.data,i===A&&U?null:i;default:return null}}function qe(i,r){if(je)return i==="compositionend"||!Ri&&H(i,r)?(i=Vl(),ts=qs=wi=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ut(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Ht[i.type]:r==="textarea"}function is(i,r,o,u){Ji?es?es.push(u):es=[u]:Ji=u,r=Bh(r,"onChange"),0<r.length&&(o=new eo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var en=null,Ii=null;function Bl(i){AT(i,0)}function ih(i){var r=Ei(i);if(Ol(r))return i}function Gy(i,r){if(i==="change")return r}var Qy=!1;if(oi){var em;if(oi){var tm="oninput"in document;if(!tm){var Yy=document.createElement("div");Yy.setAttribute("oninput","return;"),tm=typeof Yy.oninput=="function"}em=tm}else em=!1;Qy=em&&(!document.documentMode||9<document.documentMode)}function Ky(){en&&(en.detachEvent("onpropertychange",Xy),Ii=en=null)}function Xy(i){if(i.propertyName==="value"&&ih(Ii)){var r=[];is(r,Ii,i,Qn(i)),Fc(Bl,r)}}function gC(i,r,o){i==="focusin"?(Ky(),en=r,Ii=o,en.attachEvent("onpropertychange",Xy)):i==="focusout"&&Ky()}function _C(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ih(Ii)}function yC(i,r){if(i==="click")return ih(r)}function vC(i,r){if(i==="input"||i==="change")return ih(r)}function EC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Mn=typeof Object.is=="function"?Object.is:EC;function Fl(i,r){if(Mn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Vr.call(r,f)||!Mn(i[f],r[f]))return!1}return!0}function Wy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function $y(i,r){var o=Wy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wy(o)}}function Zy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Zy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Jy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Yr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Yr(i.document)}return r}function nm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var TC=oi&&"documentMode"in document&&11>=document.documentMode,lo=null,im=null,Hl=null,sm=!1;function ev(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sm||lo==null||lo!==Yr(u)||(u=lo,"selectionStart"in u&&nm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Hl&&Fl(Hl,u)||(Hl=u,u=Bh(im,"onSelect"),0<u.length&&(r=new eo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=lo)))}function sa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var uo={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},rm={},tv={};oi&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function ra(i){if(rm[i])return rm[i];if(!uo[i])return i;var r=uo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in tv)return rm[i]=r[o];return i}var nv=ra("animationend"),iv=ra("animationiteration"),sv=ra("animationstart"),SC=ra("transitionrun"),wC=ra("transitionstart"),AC=ra("transitioncancel"),rv=ra("transitionend"),av=new Map,am="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");am.push("scrollEnd");function li(i,r){av.set(i,r),ai(r,[i])}var ov=new WeakMap;function Xn(i,r){if(typeof i=="object"&&i!==null){var o=ov.get(i);return o!==void 0?o:(r={value:i,source:r,stack:$a(r)},ov.set(i,r),r)}return{value:i,source:r,stack:$a(r)}}var Wn=[],co=0,om=0;function sh(){for(var i=co,r=om=co=0;r<i;){var o=Wn[r];Wn[r++]=null;var u=Wn[r];Wn[r++]=null;var f=Wn[r];Wn[r++]=null;var m=Wn[r];if(Wn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&lv(o,f,m)}}function rh(i,r,o,u){Wn[co++]=i,Wn[co++]=r,Wn[co++]=o,Wn[co++]=u,om|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function lm(i,r,o,u){return rh(i,r,o,u),ah(i)}function ho(i,r){return rh(i,null,null,r),ah(i)}function lv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-ln(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function ah(i){if(50<pu)throw pu=0,mp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var fo={};function bC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(i,r,o,u){return new bC(i,r,o,u)}function um(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ss(i,r){var o=i.alternate;return o===null?(o=kn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function uv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function oh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")um(i)&&(E=1);else if(typeof i=="string")E=RR(i,o,pe.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case R:return i=kn(31,o,r,f),i.elementType=R,i.lanes=m,i;case j:return aa(o.children,f,m,r);case Y:E=8,f|=24;break;case K:return i=kn(12,o,r,f|2),i.elementType=K,i.lanes=m,i;case ve:return i=kn(13,o,r,f),i.elementType=ve,i.lanes=m,i;case ze:return i=kn(19,o,r,f),i.elementType=ze,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ce:case ue:E=10;break e;case oe:E=9;break e;case Ue:E=11;break e;case N:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=kn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function aa(i,r,o,u){return i=kn(7,i,u,r),i.lanes=o,i}function cm(i,r,o){return i=kn(6,i,null,r),i.lanes=o,i}function hm(i,r,o){return r=kn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var mo=[],po=0,lh=null,uh=0,$n=[],Zn=0,oa=null,rs=1,as="";function la(i,r){mo[po++]=uh,mo[po++]=lh,lh=i,uh=r}function cv(i,r,o){$n[Zn++]=rs,$n[Zn++]=as,$n[Zn++]=oa,oa=i;var u=rs;i=as;var f=32-ln(u)-1;u&=~(1<<f),o+=1;var m=32-ln(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,rs=1<<32-ln(r)+f|o<<f|u,as=m+i}else rs=1<<m|o<<f|u,as=i}function fm(i){i.return!==null&&(la(i,1),cv(i,1,0))}function dm(i){for(;i===lh;)lh=mo[--po],mo[po]=null,uh=mo[--po],mo[po]=null;for(;i===oa;)oa=$n[--Zn],$n[Zn]=null,as=$n[--Zn],$n[Zn]=null,rs=$n[--Zn],$n[Zn]=null}var En=null,yt=null,Qe=!1,ua=null,Ni=!1,mm=Error(s(519));function ca(i){var r=Error(s(418,""));throw Yl(Xn(r,i)),mm}function hv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Vt]=i,r[Ct]=u,o){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<_u.length;o++)ke(_u[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),Kr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Za(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Xr(r,u.value,u.defaultValue,u.children),Za(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||IT(r.textContent,o)?(u.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),u.onScroll!=null&&ke("scroll",r),u.onScrollEnd!=null&&ke("scrollend",r),u.onClick!=null&&(r.onclick=Fh),r=!0):r=!1,r||ca(i)}function fv(i){for(En=i.return;En;)switch(En.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:En=En.return}}function Gl(i){if(i!==En)return!1;if(!Qe)return fv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Dp(i.type,i.memoizedProps)),o=!o),o&&yt&&ca(i),fv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){yt=ci(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}yt=null}}else r===27?(r=yt,ir(i.type)?(i=kp,kp=null,yt=i):yt=r):yt=En?ci(i.stateNode.nextSibling):null;return!0}function Ql(){yt=En=null,Qe=!1}function dv(){var i=ua;return i!==null&&(wn===null?wn=i:wn.push.apply(wn,i),ua=null),i}function Yl(i){ua===null?ua=[i]:ua.push(i)}var pm=J(null),ha=null,os=null;function Bs(i,r,o){ee(pm,r._currentValue),r._currentValue=o}function ls(i){i._currentValue=pm.current,se(pm)}function gm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function _m(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var C=0;C<r.length;C++)if(S.context===r[C]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),gm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),gm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Kl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Mn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Bt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(wu):i=[wu])}f=f.return}i!==null&&_m(r,i,o,u),r.flags|=262144}function ch(i){for(i=i.firstContext;i!==null;){if(!Mn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function fa(i){ha=i,os=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function un(i){return mv(ha,i)}function hh(i,r){return ha===null&&fa(i),mv(i,r)}function mv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},os===null){if(i===null)throw Error(s(308));os=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else os=os.next=r;return o}var CC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},RC=n.unstable_scheduleCallback,IC=n.unstable_NormalPriority,zt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ym(){return{controller:new CC,data:new Map,refCount:0}}function Xl(i){i.refCount--,i.refCount===0&&RC(IC,function(){i.controller.abort()})}var Wl=null,vm=0,go=0,_o=null;function NC(i,r){if(Wl===null){var o=Wl=[];vm=0,go=Tp(),_o={status:"pending",value:void 0,then:function(u){o.push(u)}}}return vm++,r.then(pv,pv),r}function pv(){if(--vm===0&&Wl!==null){_o!==null&&(_o.status="fulfilled");var i=Wl;Wl=null,go=0,_o=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function DC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var gv=G.S;G.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&NC(i,r),gv!==null&&gv(i,r)};var da=J(null);function Em(){var i=da.current;return i!==null?i:ot.pooledCache}function fh(i,r){r===null?ee(da,da.current):ee(da,r.pool)}function _v(){var i=Em();return i===null?null:{parent:zt._currentValue,pool:i}}var $l=Error(s(460)),yv=Error(s(474)),dh=Error(s(542)),Tm={then:function(){}};function vv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function mh(){}function Ev(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(mh,mh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Sv(i),i;default:if(typeof r.status=="string")r.then(mh,mh);else{if(i=ot,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Sv(i),i}throw Zl=r,$l}}var Zl=null;function Tv(){if(Zl===null)throw Error(s(459));var i=Zl;return Zl=null,i}function Sv(i){if(i===$l||i===dh)throw Error(s(483))}var Fs=!1;function Sm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Hs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Gs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=ah(i),lv(i,null,o),r}return rh(i,u,r,o),ah(i)}function Jl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Rl(i,o)}}function Am(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var bm=!1;function eu(){if(bm){var i=_o;if(i!==null)throw i}}function tu(i,r,o,u){bm=!1;var f=i.updateQueue;Fs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,q=C.next;C.next=null,E===null?m=q:E.next=q,E=C;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==E&&(S===null?Q.firstBaseUpdate=q:S.next=q,Q.lastBaseUpdate=C))}if(m!==null){var $=f.baseState;E=0,Q=q=C=null,S=m;do{var B=S.lane&-536870913,F=B!==S.lane;if(F?(Be&B)===B:(u&B)===B){B!==0&&B===go&&(bm=!0),Q!==null&&(Q=Q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ee=i,ge=S;B=r;var it=o;switch(ge.tag){case 1:if(Ee=ge.payload,typeof Ee=="function"){$=Ee.call(it,$,B);break e}$=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ge.payload,B=typeof Ee=="function"?Ee.call(it,$,B):Ee,B==null)break e;$=v({},$,B);break e;case 2:Fs=!0}}B=S.callback,B!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(q=Q=F,C=$):Q=Q.next=F,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;F=S,S=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Q===null&&(C=$),f.baseState=C,f.firstBaseUpdate=q,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),Js|=E,i.lanes=E,i.memoizedState=$}}function wv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Av(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)wv(o[i],r)}var yo=J(null),ph=J(0);function bv(i,r){i=ps,ee(ph,i),ee(yo,r),ps=i|r.baseLanes}function Cm(){ee(ph,ps),ee(yo,yo.current)}function Rm(){ps=ph.current,se(yo),se(ph)}var Qs=0,Re=null,tt=null,It=null,gh=!1,vo=!1,ma=!1,_h=0,nu=0,Eo=null,xC=0;function St(){throw Error(s(321))}function Im(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Mn(i[o],r[o]))return!1;return!0}function Nm(i,r,o,u,f,m){return Qs=m,Re=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=i===null||i.memoizedState===null?lE:uE,ma=!1,m=o(u,f),ma=!1,vo&&(m=Rv(r,o,u,f)),Cv(i),m}function Cv(i){G.H=wh;var r=tt!==null&&tt.next!==null;if(Qs=0,It=tt=Re=null,gh=!1,nu=0,Eo=null,r)throw Error(s(300));i===null||Gt||(i=i.dependencies,i!==null&&ch(i)&&(Gt=!0))}function Rv(i,r,o,u){Re=i;var f=0;do{if(vo&&(Eo=null),nu=0,vo=!1,25<=f)throw Error(s(301));if(f+=1,It=tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=UC,m=r(o,u)}while(vo);return m}function OC(){var i=G.H,r=i.useState()[0];return r=typeof r.then=="function"?iu(r):r,i=i.useState()[0],(tt!==null?tt.memoizedState:null)!==i&&(Re.flags|=1024),r}function Dm(){var i=_h!==0;return _h=0,i}function xm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Om(i){if(gh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gh=!1}Qs=0,It=tt=Re=null,vo=!1,nu=_h=0,Eo=null}function Tn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Re.memoizedState=It=i:It=It.next=i,It}function Nt(){if(tt===null){var i=Re.alternate;i=i!==null?i.memoizedState:null}else i=tt.next;var r=It===null?Re.memoizedState:It.next;if(r!==null)It=r,tt=i;else{if(i===null)throw Re.alternate===null?Error(s(467)):Error(s(310));tt=i,i={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},It===null?Re.memoizedState=It=i:It=It.next=i}return It}function Mm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function iu(i){var r=nu;return nu+=1,Eo===null&&(Eo=[]),i=Ev(Eo,i,r),r=Re,(It===null?r.memoizedState:It.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?lE:uE),i}function yh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return iu(i);if(i.$$typeof===ue)return un(i)}throw Error(s(438,String(i)))}function km(i){var r=null,o=Re.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Re.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Mm(),Re.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function us(i,r){return typeof r=="function"?r(i):r}function vh(i){var r=Nt();return Pm(r,tt,i)}function Pm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,C=null,q=r,Q=!1;do{var $=q.lane&-536870913;if($!==q.lane?(Be&$)===$:(Qs&$)===$){var B=q.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),$===go&&(Q=!0);else if((Qs&B)===B){q=q.next,B===go&&(Q=!0);continue}else $={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=$,E=m):C=C.next=$,Re.lanes|=B,Js|=B;$=q.action,ma&&o(m,$),m=q.hasEagerState?q.eagerState:o(m,$)}else B={lane:$,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=B,E=m):C=C.next=B,Re.lanes|=$,Js|=$;q=q.next}while(q!==null&&q!==r);if(C===null?E=m:C.next=S,!Mn(m,i.memoizedState)&&(Gt=!0,Q&&(o=_o,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Vm(i){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Mn(m,r.memoizedState)||(Gt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Iv(i,r,o){var u=Re,f=Nt(),m=Qe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Mn((tt||f).memoizedState,o);E&&(f.memoizedState=o,Gt=!0),f=f.queue;var S=xv.bind(null,u,f,i);if(su(2048,8,S,[i]),f.getSnapshot!==r||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,To(9,Eh(),Dv.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(Qs&124)!==0||Nv(u,r,o)}return o}function Nv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Re.updateQueue,r===null?(r=Mm(),Re.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Dv(i,r,o,u){r.value=o,r.getSnapshot=u,Ov(r)&&Mv(i)}function xv(i,r,o){return o(function(){Ov(r)&&Mv(i)})}function Ov(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Mn(i,o)}catch{return!0}}function Mv(i){var r=ho(i,2);r!==null&&zn(r,i,2)}function Lm(i){var r=Tn();if(typeof i=="function"){var o=i;if(i=o(),ma){xn(!0);try{o()}finally{xn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:i},r}function kv(i,r,o,u){return i.baseState=o,Pm(i,tt,typeof u=="function"?u:us)}function MC(i,r,o,u,f){if(Sh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};G.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Pv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Pv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=G.T,E={};G.T=E;try{var S=o(f,u),C=G.S;C!==null&&C(E,S),Vv(i,r,S)}catch(q){Um(i,r,q)}finally{G.T=m}}else try{m=o(f,u),Vv(i,r,m)}catch(q){Um(i,r,q)}}function Vv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Lv(i,r,u)},function(u){return Um(i,r,u)}):Lv(i,r,o)}function Lv(i,r,o){r.status="fulfilled",r.value=o,Uv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Pv(i,o)))}function Um(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Uv(r),r=r.next;while(r!==u)}i.action=null}function Uv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function zv(i,r){return r}function jv(i,r){if(Qe){var o=ot.formState;if(o!==null){e:{var u=Re;if(Qe){if(yt){t:{for(var f=yt,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){yt=ci(f.nextSibling),u=f.data==="F!";break e}}ca(u)}u=!1}u&&(r=o[0])}}return o=Tn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zv,lastRenderedState:r},o.queue=u,o=rE.bind(null,Re,u),u.dispatch=o,u=Lm(!1),m=Fm.bind(null,Re,!1,u.queue),u=Tn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=MC.bind(null,Re,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function qv(i){var r=Nt();return Bv(r,tt,i)}function Bv(i,r,o){if(r=Pm(i,r,zv)[0],i=vh(us)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=iu(r)}catch(E){throw E===$l?dh:E}else u=r;r=Nt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Re.flags|=2048,To(9,Eh(),kC.bind(null,f,o),null)),[u,m,i]}function kC(i,r){i.action=r}function Fv(i){var r=Nt(),o=tt;if(o!==null)return Bv(r,o,i);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function To(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Re.updateQueue,r===null&&(r=Mm(),Re.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Eh(){return{destroy:void 0,resource:void 0}}function Hv(){return Nt().memoizedState}function Th(i,r,o,u){var f=Tn();u=u===void 0?null:u,Re.flags|=i,f.memoizedState=To(1|r,Eh(),o,u)}function su(i,r,o,u){var f=Nt();u=u===void 0?null:u;var m=f.memoizedState.inst;tt!==null&&u!==null&&Im(u,tt.memoizedState.deps)?f.memoizedState=To(r,m,o,u):(Re.flags|=i,f.memoizedState=To(1|r,m,o,u))}function Gv(i,r){Th(8390656,8,i,r)}function Qv(i,r){su(2048,8,i,r)}function Yv(i,r){return su(4,2,i,r)}function Kv(i,r){return su(4,4,i,r)}function Xv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Wv(i,r,o){o=o!=null?o.concat([i]):null,su(4,4,Xv.bind(null,r,i),o)}function zm(){}function $v(i,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Im(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Zv(i,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Im(r,u[1]))return u[0];if(u=i(),ma){xn(!0);try{i()}finally{xn(!1)}}return o.memoizedState=[u,r],u}function jm(i,r,o){return o===void 0||(Qs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=tT(),Re.lanes|=i,Js|=i,o)}function Jv(i,r,o,u){return Mn(o,r)?o:yo.current!==null?(i=jm(i,o,u),Mn(i,r)||(Gt=!0),i):(Qs&42)===0?(Gt=!0,i.memoizedState=o):(i=tT(),Re.lanes|=i,Js|=i,r)}function eE(i,r,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=G.T,S={};G.T=S,Fm(i,!1,r,o);try{var C=f(),q=G.S;if(q!==null&&q(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=DC(C,u);ru(i,r,Q,Un(i))}else ru(i,r,u,Un(i))}catch($){ru(i,r,{then:function(){},status:"rejected",reason:$},Un())}finally{ie.p=m,G.T=E}}function PC(){}function qm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=tE(i).queue;eE(i,f,r,fe,o===null?PC:function(){return nE(i),o(u)})}function tE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function nE(i){var r=tE(i).next.queue;ru(i,r,{},Un())}function Bm(){return un(wu)}function iE(){return Nt().memoizedState}function sE(){return Nt().memoizedState}function VC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Un();i=Hs(o);var u=Gs(r,i,o);u!==null&&(zn(u,r,o),Jl(u,r,o)),r={cache:ym()},i.payload=r;return}r=r.return}}function LC(i,r,o){var u=Un();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(i)?aE(r,o):(o=lm(i,r,o,u),o!==null&&(zn(o,i,u),oE(o,r,u)))}function rE(i,r,o){var u=Un();ru(i,r,o,u)}function ru(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(i))aE(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Mn(S,E))return rh(i,r,f,0),ot===null&&sh(),!1}catch{}finally{}if(o=lm(i,r,f,u),o!==null)return zn(o,i,u),oE(o,r,u),!0}return!1}function Fm(i,r,o,u){if(u={lane:2,revertLane:Tp(),action:u,hasEagerState:!1,eagerState:null,next:null},Sh(i)){if(r)throw Error(s(479))}else r=lm(i,o,u,2),r!==null&&zn(r,i,2)}function Sh(i){var r=i.alternate;return i===Re||r!==null&&r===Re}function aE(i,r){vo=gh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function oE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Rl(i,o)}}var wh={readContext:un,use:yh,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},lE={readContext:un,use:yh,useCallback:function(i,r){return Tn().memoizedState=[i,r===void 0?null:r],i},useContext:un,useEffect:Gv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Th(4194308,4,Xv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Th(4194308,4,i,r)},useInsertionEffect:function(i,r){Th(4,2,i,r)},useMemo:function(i,r){var o=Tn();r=r===void 0?null:r;var u=i();if(ma){xn(!0);try{i()}finally{xn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Tn();if(o!==void 0){var f=o(r);if(ma){xn(!0);try{o(r)}finally{xn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=LC.bind(null,Re,i),[u.memoizedState,i]},useRef:function(i){var r=Tn();return i={current:i},r.memoizedState=i},useState:function(i){i=Lm(i);var r=i.queue,o=rE.bind(null,Re,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:zm,useDeferredValue:function(i,r){var o=Tn();return jm(o,i,r)},useTransition:function(){var i=Lm(!1);return i=eE.bind(null,Re,i.queue,!0,!1),Tn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Re,f=Tn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(Be&124)!==0||Nv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Gv(xv.bind(null,u,m,i),[i]),u.flags|=2048,To(9,Eh(),Dv.bind(null,u,m,o,r),null),o},useId:function(){var i=Tn(),r=ot.identifierPrefix;if(Qe){var o=as,u=rs;o=(u&~(1<<32-ln(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=_h++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=xC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Bm,useFormState:jv,useActionState:jv,useOptimistic:function(i){var r=Tn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Fm.bind(null,Re,!0,o),o.dispatch=r,[i,r]},useMemoCache:km,useCacheRefresh:function(){return Tn().memoizedState=VC.bind(null,Re)}},uE={readContext:un,use:yh,useCallback:$v,useContext:un,useEffect:Qv,useImperativeHandle:Wv,useInsertionEffect:Yv,useLayoutEffect:Kv,useMemo:Zv,useReducer:vh,useRef:Hv,useState:function(){return vh(us)},useDebugValue:zm,useDeferredValue:function(i,r){var o=Nt();return Jv(o,tt.memoizedState,i,r)},useTransition:function(){var i=vh(us)[0],r=Nt().memoizedState;return[typeof i=="boolean"?i:iu(i),r]},useSyncExternalStore:Iv,useId:iE,useHostTransitionStatus:Bm,useFormState:qv,useActionState:qv,useOptimistic:function(i,r){var o=Nt();return kv(o,tt,i,r)},useMemoCache:km,useCacheRefresh:sE},UC={readContext:un,use:yh,useCallback:$v,useContext:un,useEffect:Qv,useImperativeHandle:Wv,useInsertionEffect:Yv,useLayoutEffect:Kv,useMemo:Zv,useReducer:Vm,useRef:Hv,useState:function(){return Vm(us)},useDebugValue:zm,useDeferredValue:function(i,r){var o=Nt();return tt===null?jm(o,i,r):Jv(o,tt.memoizedState,i,r)},useTransition:function(){var i=Vm(us)[0],r=Nt().memoizedState;return[typeof i=="boolean"?i:iu(i),r]},useSyncExternalStore:Iv,useId:iE,useHostTransitionStatus:Bm,useFormState:Fv,useActionState:Fv,useOptimistic:function(i,r){var o=Nt();return tt!==null?kv(o,tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:km,useCacheRefresh:sE},So=null,au=0;function Ah(i){var r=au;return au+=1,So===null&&(So=[]),Ev(So,i,r)}function ou(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function bh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function cE(i){var r=i._init;return r(i._payload)}function hE(i){function r(V,O){if(i){var z=V.deletions;z===null?(V.deletions=[O],V.flags|=16):z.push(O)}}function o(V,O){if(!i)return null;for(;O!==null;)r(V,O),O=O.sibling;return null}function u(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function f(V,O){return V=ss(V,O),V.index=0,V.sibling=null,V}function m(V,O,z){return V.index=z,i?(z=V.alternate,z!==null?(z=z.index,z<O?(V.flags|=67108866,O):z):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function S(V,O,z,W){return O===null||O.tag!==6?(O=cm(z,V.mode,W),O.return=V,O):(O=f(O,z),O.return=V,O)}function C(V,O,z,W){var le=z.type;return le===j?Q(V,O,z.props.children,W,z.key):O!==null&&(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===b&&cE(le)===O.type)?(O=f(O,z.props),ou(O,z),O.return=V,O):(O=oh(z.type,z.key,z.props,null,V.mode,W),ou(O,z),O.return=V,O)}function q(V,O,z,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=hm(z,V.mode,W),O.return=V,O):(O=f(O,z.children||[]),O.return=V,O)}function Q(V,O,z,W,le){return O===null||O.tag!==7?(O=aa(z,V.mode,W,le),O.return=V,O):(O=f(O,z),O.return=V,O)}function $(V,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=cm(""+O,V.mode,z),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return z=oh(O.type,O.key,O.props,null,V.mode,z),ou(z,O),z.return=V,z;case x:return O=hm(O,V.mode,z),O.return=V,O;case b:var W=O._init;return O=W(O._payload),$(V,O,z)}if(gt(O)||P(O))return O=aa(O,V.mode,z,null),O.return=V,O;if(typeof O.then=="function")return $(V,Ah(O),z);if(O.$$typeof===ue)return $(V,hh(V,O),z);bh(V,O)}return null}function B(V,O,z,W){var le=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return le!==null?null:S(V,O,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===le?C(V,O,z,W):null;case x:return z.key===le?q(V,O,z,W):null;case b:return le=z._init,z=le(z._payload),B(V,O,z,W)}if(gt(z)||P(z))return le!==null?null:Q(V,O,z,W,null);if(typeof z.then=="function")return B(V,O,Ah(z),W);if(z.$$typeof===ue)return B(V,O,hh(V,z),W);bh(V,z)}return null}function F(V,O,z,W,le){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return V=V.get(z)||null,S(O,V,""+W,le);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return V=V.get(W.key===null?z:W.key)||null,C(O,V,W,le);case x:return V=V.get(W.key===null?z:W.key)||null,q(O,V,W,le);case b:var De=W._init;return W=De(W._payload),F(V,O,z,W,le)}if(gt(W)||P(W))return V=V.get(z)||null,Q(O,V,W,le,null);if(typeof W.then=="function")return F(V,O,z,Ah(W),le);if(W.$$typeof===ue)return F(V,O,z,hh(O,W),le);bh(O,W)}return null}function Ee(V,O,z,W){for(var le=null,De=null,he=O,_e=O=0,Yt=null;he!==null&&_e<z.length;_e++){he.index>_e?(Yt=he,he=null):Yt=he.sibling;var He=B(V,he,z[_e],W);if(He===null){he===null&&(he=Yt);break}i&&he&&He.alternate===null&&r(V,he),O=m(He,O,_e),De===null?le=He:De.sibling=He,De=He,he=Yt}if(_e===z.length)return o(V,he),Qe&&la(V,_e),le;if(he===null){for(;_e<z.length;_e++)he=$(V,z[_e],W),he!==null&&(O=m(he,O,_e),De===null?le=he:De.sibling=he,De=he);return Qe&&la(V,_e),le}for(he=u(he);_e<z.length;_e++)Yt=F(he,V,_e,z[_e],W),Yt!==null&&(i&&Yt.alternate!==null&&he.delete(Yt.key===null?_e:Yt.key),O=m(Yt,O,_e),De===null?le=Yt:De.sibling=Yt,De=Yt);return i&&he.forEach(function(lr){return r(V,lr)}),Qe&&la(V,_e),le}function ge(V,O,z,W){if(z==null)throw Error(s(151));for(var le=null,De=null,he=O,_e=O=0,Yt=null,He=z.next();he!==null&&!He.done;_e++,He=z.next()){he.index>_e?(Yt=he,he=null):Yt=he.sibling;var lr=B(V,he,He.value,W);if(lr===null){he===null&&(he=Yt);break}i&&he&&lr.alternate===null&&r(V,he),O=m(lr,O,_e),De===null?le=lr:De.sibling=lr,De=lr,he=Yt}if(He.done)return o(V,he),Qe&&la(V,_e),le;if(he===null){for(;!He.done;_e++,He=z.next())He=$(V,He.value,W),He!==null&&(O=m(He,O,_e),De===null?le=He:De.sibling=He,De=He);return Qe&&la(V,_e),le}for(he=u(he);!He.done;_e++,He=z.next())He=F(he,V,_e,He.value,W),He!==null&&(i&&He.alternate!==null&&he.delete(He.key===null?_e:He.key),O=m(He,O,_e),De===null?le=He:De.sibling=He,De=He);return i&&he.forEach(function(zR){return r(V,zR)}),Qe&&la(V,_e),le}function it(V,O,z,W){if(typeof z=="object"&&z!==null&&z.type===j&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var le=z.key;O!==null;){if(O.key===le){if(le=z.type,le===j){if(O.tag===7){o(V,O.sibling),W=f(O,z.props.children),W.return=V,V=W;break e}}else if(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===b&&cE(le)===O.type){o(V,O.sibling),W=f(O,z.props),ou(W,z),W.return=V,V=W;break e}o(V,O);break}else r(V,O);O=O.sibling}z.type===j?(W=aa(z.props.children,V.mode,W,z.key),W.return=V,V=W):(W=oh(z.type,z.key,z.props,null,V.mode,W),ou(W,z),W.return=V,V=W)}return E(V);case x:e:{for(le=z.key;O!==null;){if(O.key===le)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(V,O.sibling),W=f(O,z.children||[]),W.return=V,V=W;break e}else{o(V,O);break}else r(V,O);O=O.sibling}W=hm(z,V.mode,W),W.return=V,V=W}return E(V);case b:return le=z._init,z=le(z._payload),it(V,O,z,W)}if(gt(z))return Ee(V,O,z,W);if(P(z)){if(le=P(z),typeof le!="function")throw Error(s(150));return z=le.call(z),ge(V,O,z,W)}if(typeof z.then=="function")return it(V,O,Ah(z),W);if(z.$$typeof===ue)return it(V,O,hh(V,z),W);bh(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(V,O.sibling),W=f(O,z),W.return=V,V=W):(o(V,O),W=cm(z,V.mode,W),W.return=V,V=W),E(V)):o(V,O)}return function(V,O,z,W){try{au=0;var le=it(V,O,z,W);return So=null,le}catch(he){if(he===$l||he===dh)throw he;var De=kn(29,he,null,V.mode);return De.lanes=W,De.return=V,De}finally{}}}var wo=hE(!0),fE=hE(!1),Jn=J(null),Di=null;function Ys(i){var r=i.alternate;ee(jt,jt.current&1),ee(Jn,i),Di===null&&(r===null||yo.current!==null||r.memoizedState!==null)&&(Di=i)}function dE(i){if(i.tag===22){if(ee(jt,jt.current),ee(Jn,i),Di===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Di=i)}}else Ks()}function Ks(){ee(jt,jt.current),ee(Jn,Jn.current)}function cs(i){se(Jn),Di===i&&(Di=null),se(jt)}var jt=J(0);function Ch(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Mp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Hm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Gm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Un(),f=Hs(u);f.payload=r,o!=null&&(f.callback=o),r=Gs(i,f,u),r!==null&&(zn(r,i,u),Jl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Un(),f=Hs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Gs(i,f,u),r!==null&&(zn(r,i,u),Jl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Un(),u=Hs(o);u.tag=2,r!=null&&(u.callback=r),r=Gs(i,u,o),r!==null&&(zn(r,i,o),Jl(r,i,o))}};function mE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Fl(o,u)||!Fl(f,m):!0}function pE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Gm.enqueueReplaceState(r,r.state,null)}function pa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Rh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function gE(i){Rh(i)}function _E(i){console.error(i)}function yE(i){Rh(i)}function Ih(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function vE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Qm(i,r,o){return o=Hs(o),o.tag=3,o.payload={element:null},o.callback=function(){Ih(i,r)},o}function EE(i){return i=Hs(i),i.tag=3,i}function TE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){vE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){vE(r,o,u),typeof f!="function"&&(er===null?er=new Set([this]):er.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function zC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Kl(r,o,f,!0),o=Jn.current,o!==null){switch(o.tag){case 13:return Di===null?gp():o.alternate===null&&vt===0&&(vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Tm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),yp(i,u,f)),!1;case 22:return o.flags|=65536,u===Tm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),yp(i,u,f)),!1}throw Error(s(435,o.tag))}return yp(i,u,f),gp(),!1}if(Qe)return r=Jn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==mm&&(i=Error(s(422),{cause:u}),Yl(Xn(i,o)))):(u!==mm&&(r=Error(s(423),{cause:u}),Yl(Xn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Xn(u,o),f=Qm(i.stateNode,u,f),Am(i,f),vt!==4&&(vt=2)),!1;var m=Error(s(520),{cause:u});if(m=Xn(m,o),mu===null?mu=[m]:mu.push(m),vt!==4&&(vt=2),r===null)return!0;u=Xn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Qm(o.stateNode,u,i),Am(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=EE(f),TE(f,i,o,u),Am(o,f),!1}o=o.return}while(o!==null);return!1}var SE=Error(s(461)),Gt=!1;function tn(i,r,o,u){r.child=i===null?fE(r,null,o,u):wo(r,i.child,o,u)}function wE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return fa(r),u=Nm(i,r,o,E,m,f),S=Dm(),i!==null&&!Gt?(xm(i,r,f),hs(i,r,f)):(Qe&&S&&fm(r),r.flags|=1,tn(i,r,u,f),r.child)}function AE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!um(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,bE(i,r,m,u,f)):(i=oh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!ep(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Fl,o(E,u)&&i.ref===r.ref)return hs(i,r,f)}return r.flags|=1,i=ss(m,u),i.ref=r.ref,i.return=r,r.child=i}function bE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Fl(m,u)&&i.ref===r.ref)if(Gt=!1,r.pendingProps=u=m,ep(i,f))(i.flags&131072)!==0&&(Gt=!0);else return r.lanes=i.lanes,hs(i,r,f)}return Ym(i,r,o,u,f)}function CE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return RE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&fh(r,m!==null?m.cachePool:null),m!==null?bv(r,m):Cm(),dE(r);else return r.lanes=r.childLanes=536870912,RE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(fh(r,m.cachePool),bv(r,m),Ks(),r.memoizedState=null):(i!==null&&fh(r,null),Cm(),Ks());return tn(i,r,f,o),r.child}function RE(i,r,o,u){var f=Em();return f=f===null?null:{parent:zt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&fh(r,null),Cm(),dE(r),i!==null&&Kl(i,r,u,!0),null}function Nh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Ym(i,r,o,u,f){return fa(r),o=Nm(i,r,o,u,void 0,f),u=Dm(),i!==null&&!Gt?(xm(i,r,f),hs(i,r,f)):(Qe&&u&&fm(r),r.flags|=1,tn(i,r,o,f),r.child)}function IE(i,r,o,u,f,m){return fa(r),r.updateQueue=null,o=Rv(r,u,o,f),Cv(i),u=Dm(),i!==null&&!Gt?(xm(i,r,m),hs(i,r,m)):(Qe&&u&&fm(r),r.flags|=1,tn(i,r,o,m),r.child)}function NE(i,r,o,u,f){if(fa(r),r.stateNode===null){var m=fo,E=o.contextType;typeof E=="object"&&E!==null&&(m=un(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Gm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Sm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?un(E):fo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Hm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Gm.enqueueReplaceState(m,m.state,null),tu(r,u,m,f),eu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,C=pa(o,S);m.props=C;var q=m.context,Q=o.contextType;E=fo,typeof Q=="object"&&Q!==null&&(E=un(Q));var $=o.getDerivedStateFromProps;Q=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&pE(r,m,u,E),Fs=!1;var B=r.memoizedState;m.state=B,tu(r,u,m,f),eu(),q=r.memoizedState,S||B!==q||Fs?(typeof $=="function"&&(Hm(r,o,$,u),q=r.memoizedState),(C=Fs||mE(r,o,C,u,B,q,E))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,wm(i,r),E=r.memoizedProps,Q=pa(o,E),m.props=Q,$=r.pendingProps,B=m.context,q=o.contextType,C=fo,typeof q=="object"&&q!==null&&(C=un(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==$||B!==C)&&pE(r,m,u,C),Fs=!1,B=r.memoizedState,m.state=B,tu(r,u,m,f),eu();var F=r.memoizedState;E!==$||B!==F||Fs||i!==null&&i.dependencies!==null&&ch(i.dependencies)?(typeof S=="function"&&(Hm(r,o,S,u),F=r.memoizedState),(Q=Fs||mE(r,o,Q,u,B,F,C)||i!==null&&i.dependencies!==null&&ch(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,F,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,F,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=C,u=Q):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Nh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=wo(r,i.child,null,f),r.child=wo(r,null,o,f)):tn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=hs(i,r,f),i}function DE(i,r,o,u){return Ql(),r.flags|=256,tn(i,r,o,u),r.child}var Km={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xm(i){return{baseLanes:i,cachePool:_v()}}function Wm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ei),i}function xE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(jt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?Ys(r):Ks(),Qe){var S=yt,C;if(C=S){e:{for(C=S,S=Ni;C.nodeType!==8;){if(!S){S=null;break e}if(C=ci(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:oa!==null?{id:rs,overflow:as}:null,retryLane:536870912,hydrationErrors:null},C=kn(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,En=r,yt=null,C=!0):C=!1}C||ca(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Mp(S)?r.lanes=32:r.lanes=536870912,null;cs(r)}return S=u.children,u=u.fallback,f?(Ks(),f=r.mode,S=Dh({mode:"hidden",children:S},f),u=aa(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Xm(o),f.childLanes=Wm(i,E,o),r.memoizedState=Km,u):(Ys(r),$m(r,S))}if(C=i.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(m)r.flags&256?(Ys(r),r.flags&=-257,r=Zm(i,r,o)):r.memoizedState!==null?(Ks(),r.child=i.child,r.flags|=128,r=null):(Ks(),f=u.fallback,S=r.mode,u=Dh({mode:"visible",children:u.children},S),f=aa(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,wo(r,i.child,null,o),u=r.child,u.memoizedState=Xm(o),u.childLanes=Wm(i,E,o),r.memoizedState=Km,r=f);else if(Ys(r),Mp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,Yl({value:u,source:null,stack:null}),r=Zm(i,r,o)}else if(Gt||Kl(i,r,o,!1),E=(o&i.childLanes)!==0,Gt||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ps(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,ho(i,u),zn(E,i,u),SE;S.data==="$?"||gp(),r=Zm(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,yt=ci(S.nextSibling),En=r,Qe=!0,ua=null,Ni=!1,i!==null&&($n[Zn++]=rs,$n[Zn++]=as,$n[Zn++]=oa,rs=i.id,as=i.overflow,oa=r),r=$m(r,u.children),r.flags|=4096);return r}return f?(Ks(),f=u.fallback,S=r.mode,C=i.child,q=C.sibling,u=ss(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,q!==null?f=ss(q,f):(f=aa(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=Xm(o):(C=S.cachePool,C!==null?(q=zt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=_v(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Wm(i,E,o),r.memoizedState=Km,u):(Ys(r),o=i.child,i=o.sibling,o=ss(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function $m(i,r){return r=Dh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Dh(i,r){return i=kn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Zm(i,r,o){return wo(r,i.child,null,o),i=$m(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function OE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),gm(i.return,r,o)}function Jm(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function ME(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(tn(i,r,u.children,o),u=jt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&OE(i,o,r);else if(i.tag===19)OE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(jt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ch(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Jm(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ch(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Jm(r,!0,o,null,m);break;case"together":Jm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Js|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Kl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ss(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ss(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function ep(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ch(i)))}function jC(i,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Bs(r,zt,i.memoizedState.cache),Ql();break;case 27:case 5:ks(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Bs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ys(r),r.flags|=128,null):(o&r.child.childLanes)!==0?xE(i,r,o):(Ys(r),i=hs(i,r,o),i!==null?i.sibling:null);Ys(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Kl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return ME(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(jt,jt.current),u)break;return null;case 22:case 23:return r.lanes=0,CE(i,r,o);case 24:Bs(r,zt,i.memoizedState.cache)}return hs(i,r,o)}function kE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Gt=!0;else{if(!ep(i,o)&&(r.flags&128)===0)return Gt=!1,jC(i,r,o);Gt=(i.flags&131072)!==0}else Gt=!1,Qe&&(r.flags&1048576)!==0&&cv(r,uh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")um(u)?(i=pa(u,i),r.tag=1,r=NE(null,r,u,i,o)):(r.tag=0,r=Ym(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===Ue){r.tag=11,r=wE(null,r,u,i,o);break e}else if(f===N){r.tag=14,r=AE(null,r,u,i,o);break e}}throw r=Zt(u)||u,Error(s(306,r,""))}}return r;case 0:return Ym(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=pa(u,r.pendingProps),NE(i,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,wm(i,r),tu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Bs(r,zt,u),u!==m.cache&&_m(r,[zt],o,!0),eu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=DE(i,r,u,o);break e}else if(u!==f){f=Xn(Error(s(424)),r),Yl(f),r=DE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(yt=ci(i.firstChild),En=r,Qe=!0,ua=null,Ni=!0,o=fE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ql(),u===f){r=hs(i,r,o);break e}tn(i,r,u,o)}r=r.child}return r;case 26:return Nh(i,r),i===null?(o=UT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=Hh(we.current).createElement(o),u[Vt]=r,u[Ct]=i,sn(u,o,i),Tt(u),r.stateNode=u):r.memoizedState=UT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return ks(r),i===null&&Qe&&(u=r.stateNode=PT(r.type,r.pendingProps,we.current),En=r,Ni=!0,f=yt,ir(r.type)?(kp=f,yt=ci(u.firstChild)):yt=f),tn(i,r,r.pendingProps.children,o),Nh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=yt)&&(u=mR(u,r.type,r.pendingProps,Ni),u!==null?(r.stateNode=u,En=r,yt=ci(u.firstChild),Ni=!1,f=!0):f=!1),f||ca(r)),ks(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Dp(f,m)?u=null:E!==null&&Dp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Nm(i,r,OC,null,null,o),wu._currentValue=f),Nh(i,r),tn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=yt)&&(o=pR(o,r.pendingProps,Ni),o!==null?(r.stateNode=o,En=r,yt=null,i=!0):i=!1),i||ca(r)),null;case 13:return xE(i,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=wo(r,null,u,o):tn(i,r,u,o),r.child;case 11:return wE(i,r,r.type,r.pendingProps,o);case 7:return tn(i,r,r.pendingProps,o),r.child;case 8:return tn(i,r,r.pendingProps.children,o),r.child;case 12:return tn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Bs(r,r.type,u.value),tn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,fa(r),f=un(f),u=u(f),r.flags|=1,tn(i,r,u,o),r.child;case 14:return AE(i,r,r.type,r.pendingProps,o);case 15:return bE(i,r,r.type,r.pendingProps,o);case 19:return ME(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Dh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ss(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return CE(i,r,o);case 24:return fa(r),u=un(zt),i===null?(f=Em(),f===null&&(f=ot,m=ym(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Sm(r),Bs(r,zt,f)):((i.lanes&o)!==0&&(wm(i,r),tu(r,null,null,o),eu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Bs(r,zt,u)):(u=m.cache,Bs(r,zt,u),u!==f.cache&&_m(r,[zt],o,!0))),tn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function fs(i){i.flags|=4}function PE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!FT(r)){if(r=Jn.current,r!==null&&((Be&4194048)===Be?Di!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==Di))throw Zl=Tm,yv;i.flags|=8192}}function xh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?bl():536870912,i.lanes|=r,Ro|=r)}function lu(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function mt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function qC(i,r,o){var u=r.pendingProps;switch(dm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ls(zt),_i(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Gl(r)?fs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,dv())),mt(r),null;case 26:return o=r.memoizedState,i===null?(fs(r),o!==null?(mt(r),PE(r,o)):(mt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(fs(r),mt(r),PE(r,o)):(mt(r),r.flags&=-16777217):(i.memoizedProps!==u&&fs(r),mt(r),r.flags&=-16777217),null;case 27:Gi(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}i=pe.current,Gl(r)?hv(r):(i=PT(f,u,o),r.stateNode=i,fs(r))}return mt(r),null;case 5:if(Gi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(i=pe.current,Gl(r))hv(r);else{switch(f=Hh(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Vt]=r,i[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(sn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fs(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,Gl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=En,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Vt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||IT(i.nodeValue,o)),i||ca(r)}else i=Hh(i).createTextNode(u),i[Vt]=r,r.stateNode=i}return mt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Gl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Vt]=r}else Ql(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else f=dv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(cs(r),r):(cs(r),null)}if(cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),xh(r,r.updateQueue),mt(r),null;case 4:return _i(),i===null&&bp(r.stateNode.containerInfo),mt(r),null;case 10:return ls(r.type),mt(r),null;case 19:if(se(jt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)lu(f,!1);else{if(vt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ch(i),m!==null){for(r.flags|=128,lu(f,!1),i=m.updateQueue,r.updateQueue=i,xh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)uv(o,i),o=o.sibling;return ee(jt,jt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Fn()>kh&&(r.flags|=128,u=!0,lu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ch(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,xh(r,i),lu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return mt(r),null}else 2*Fn()-f.renderingStartTime>kh&&o!==536870912&&(r.flags|=128,u=!0,lu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Fn(),r.sibling=null,i=jt.current,ee(jt,u?i&1|2:i&1),r):(mt(r),null);case 22:case 23:return cs(r),Rm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&xh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&se(da),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ls(zt),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function BC(i,r){switch(dm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ls(zt),_i(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Gi(r),null;case 13:if(cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ql()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return se(jt),null;case 4:return _i(),null;case 10:return ls(r.type),null;case 22:case 23:return cs(r),Rm(),i!==null&&se(da),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ls(zt),null;case 25:return null;default:return null}}function VE(i,r){switch(dm(r),r.tag){case 3:ls(zt),_i();break;case 26:case 27:case 5:Gi(r);break;case 4:_i();break;case 13:cs(r);break;case 19:se(jt);break;case 10:ls(r.type);break;case 22:case 23:cs(r),Rm(),i!==null&&se(da);break;case 24:ls(zt)}}function uu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){st(r,r.return,S)}}function Xs(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var C=o,q=S;try{q()}catch(Q){st(f,C,Q)}}}u=u.next}while(u!==m)}}catch(Q){st(r,r.return,Q)}}function LE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Av(r,o)}catch(u){st(i,i.return,u)}}}function UE(i,r,o){o.props=pa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function cu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function xi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function zE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function tp(i,r,o){try{var u=i.stateNode;uR(u,i.type,o,r),u[Ct]=r}catch(f){st(i,i.return,f)}}function jE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&ir(i.type)||i.tag===4}function np(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||jE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&ir(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ip(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Fh));else if(u!==4&&(u===27&&ir(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(ip(i,r,o),i=i.sibling;i!==null;)ip(i,r,o),i=i.sibling}function Oh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&ir(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Oh(i,r,o),i=i.sibling;i!==null;)Oh(i,r,o),i=i.sibling}function qE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);sn(r,u,o),r[Vt]=i,r[Ct]=o}catch(m){st(i,i.return,m)}}var ds=!1,wt=!1,sp=!1,BE=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function FC(i,r){if(i=i.containerInfo,Ip=Wh,i=Jy(i),nm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,C=-1,q=0,Q=0,$=i,B=null;t:for(;;){for(var F;$!==o||f!==0&&$.nodeType!==3||(S=E+f),$!==m||u!==0&&$.nodeType!==3||(C=E+u),$.nodeType===3&&(E+=$.nodeValue.length),(F=$.firstChild)!==null;)B=$,$=F;for(;;){if($===i)break t;if(B===o&&++q===f&&(S=E),B===m&&++Q===u&&(C=E),(F=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=F}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Np={focusedElem:i,selectionRange:o},Wh=!1,Qt=r;Qt!==null;)if(r=Qt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Qt=i;else for(;Qt!==null;){switch(r=Qt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ee=pa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Ee,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ge){st(o,o.return,ge)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Op(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Op(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Qt=i;break}Qt=r.return}}function FE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ws(i,o),u&4&&uu(5,o);break;case 1:if(Ws(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=pa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&LE(o),u&512&&cu(o,o.return);break;case 3:if(Ws(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Av(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&qE(o);case 26:case 5:Ws(i,o),r===null&&u&4&&zE(o),u&512&&cu(o,o.return);break;case 12:Ws(i,o);break;case 13:Ws(i,o),u&4&&QE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=ZC.bind(null,o),gR(i,o))));break;case 22:if(u=o.memoizedState!==null||ds,!u){r=r!==null&&r.memoizedState!==null||wt,f=ds;var m=wt;ds=u,(wt=r)&&!m?$s(i,o,(o.subtreeFlags&8772)!==0):Ws(i,o),ds=f,wt=m}break;case 30:break;default:Ws(i,o)}}function HE(i){var r=i.alternate;r!==null&&(i.alternate=null,HE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Us(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var dt=null,Sn=!1;function ms(i,r,o){for(o=o.child;o!==null;)GE(i,r,o),o=o.sibling}function GE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:wt||xi(o,r),ms(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:wt||xi(o,r);var u=dt,f=Sn;ir(o.type)&&(dt=o.stateNode,Sn=!1),ms(i,r,o),vu(o.stateNode),dt=u,Sn=f;break;case 5:wt||xi(o,r);case 6:if(u=dt,f=Sn,dt=null,ms(i,r,o),dt=u,Sn=f,dt!==null)if(Sn)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{dt.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:dt!==null&&(Sn?(i=dt,MT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Ru(i)):MT(dt,o.stateNode));break;case 4:u=dt,f=Sn,dt=o.stateNode.containerInfo,Sn=!0,ms(i,r,o),dt=u,Sn=f;break;case 0:case 11:case 14:case 15:wt||Xs(2,o,r),wt||Xs(4,o,r),ms(i,r,o);break;case 1:wt||(xi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&UE(o,r,u)),ms(i,r,o);break;case 21:ms(i,r,o);break;case 22:wt=(u=wt)||o.memoizedState!==null,ms(i,r,o),wt=u;break;default:ms(i,r,o)}}function QE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Ru(i)}catch(o){st(r,r.return,o)}}function HC(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new BE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new BE),r;default:throw Error(s(435,i.tag))}}function rp(i,r){var o=HC(i);r.forEach(function(u){var f=JC.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Pn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(ir(S.type)){dt=S.stateNode,Sn=!1;break e}break;case 5:dt=S.stateNode,Sn=!1;break e;case 3:case 4:dt=S.stateNode.containerInfo,Sn=!0;break e}S=S.return}if(dt===null)throw Error(s(160));GE(m,E,f),dt=null,Sn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)YE(r,i),r=r.sibling}var ui=null;function YE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Pn(r,i),Vn(i),u&4&&(Xs(3,i,i.return),uu(3,i),Xs(5,i,i.return));break;case 1:Pn(r,i),Vn(i),u&512&&(wt||o===null||xi(o,o.return)),u&64&&ds&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ui;if(Pn(r,i),Vn(i),u&512&&(wt||o===null||xi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Hr]||m[Vt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),sn(m,u,o),m[Vt]=i,Tt(m),u=m;break e;case"link":var E=qT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),sn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=qT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),sn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Vt]=i,Tt(m),u=m}i.stateNode=u}else BT(f,i.type,i.stateNode);else i.stateNode=jT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?BT(f,i.type,i.stateNode):jT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&tp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Pn(r,i),Vn(i),u&512&&(wt||o===null||xi(o,o.return)),o!==null&&u&4&&tp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Pn(r,i),Vn(i),u&512&&(wt||o===null||xi(o,o.return)),i.flags&32){f=i.stateNode;try{Gn(f,"")}catch(F){st(i,i.return,F)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,tp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(sp=!0);break;case 6:if(Pn(r,i),Vn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(F){st(i,i.return,F)}}break;case 3:if(Yh=null,f=ui,ui=Gh(r.containerInfo),Pn(r,i),ui=f,Vn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ru(r.containerInfo)}catch(F){st(i,i.return,F)}sp&&(sp=!1,KE(i));break;case 4:u=ui,ui=Gh(i.stateNode.containerInfo),Pn(r,i),Vn(i),ui=u;break;case 12:Pn(r,i),Vn(i);break;case 13:Pn(r,i),Vn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(hp=Fn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,rp(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,q=ds,Q=wt;if(ds=q||f,wt=Q||C,Pn(r,i),wt=Q,ds=q,Vn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||ds||wt||ga(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){st(C,C.return,F)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){st(C,C.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,rp(i,o))));break;case 19:Pn(r,i),Vn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,rp(i,u)));break;case 30:break;case 21:break;default:Pn(r,i),Vn(i)}}function Vn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(jE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=np(i);Oh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Gn(E,""),o.flags&=-33);var S=np(i);Oh(i,S,E);break;case 3:case 4:var C=o.stateNode.containerInfo,q=np(i);ip(i,q,C);break;default:throw Error(s(161))}}catch(Q){st(i,i.return,Q)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function KE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;KE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ws(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)FE(i,r.alternate,r),r=r.sibling}function ga(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Xs(4,r,r.return),ga(r);break;case 1:xi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&UE(r,r.return,o),ga(r);break;case 27:vu(r.stateNode);case 26:case 5:xi(r,r.return),ga(r);break;case 22:r.memoizedState===null&&ga(r);break;case 30:ga(r);break;default:ga(r)}i=i.sibling}}function $s(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:$s(f,m,o),uu(4,m);break;case 1:if($s(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){st(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)wv(C[f],S)}catch(q){st(u,u.return,q)}}o&&E&64&&LE(m),cu(m,m.return);break;case 27:qE(m);case 26:case 5:$s(f,m,o),o&&u===null&&E&4&&zE(m),cu(m,m.return);break;case 12:$s(f,m,o);break;case 13:$s(f,m,o),o&&E&4&&QE(f,m);break;case 22:m.memoizedState===null&&$s(f,m,o),cu(m,m.return);break;case 30:break;default:$s(f,m,o)}r=r.sibling}}function ap(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Xl(o))}function op(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Xl(i))}function Oi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)XE(i,r,o,u),r=r.sibling}function XE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Oi(i,r,o,u),f&2048&&uu(9,r);break;case 1:Oi(i,r,o,u);break;case 3:Oi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Xl(i)));break;case 12:if(f&2048){Oi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Oi(i,r,o,u);break;case 13:Oi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Oi(i,r,o,u):hu(i,r):m._visibility&2?Oi(i,r,o,u):(m._visibility|=2,Ao(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&ap(E,r);break;case 24:Oi(i,r,o,u),f&2048&&op(r.alternate,r);break;default:Oi(i,r,o,u)}}function Ao(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,C=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ao(m,E,S,C,f),uu(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?Ao(m,E,S,C,f):hu(m,E):(Q._visibility|=2,Ao(m,E,S,C,f)),f&&q&2048&&ap(E.alternate,E);break;case 24:Ao(m,E,S,C,f),f&&q&2048&&op(E.alternate,E);break;default:Ao(m,E,S,C,f)}r=r.sibling}}function hu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:hu(o,u),f&2048&&ap(u.alternate,u);break;case 24:hu(o,u),f&2048&&op(u.alternate,u);break;default:hu(o,u)}r=r.sibling}}var fu=8192;function bo(i){if(i.subtreeFlags&fu)for(i=i.child;i!==null;)WE(i),i=i.sibling}function WE(i){switch(i.tag){case 26:bo(i),i.flags&fu&&i.memoizedState!==null&&NR(ui,i.memoizedState,i.memoizedProps);break;case 5:bo(i);break;case 3:case 4:var r=ui;ui=Gh(i.stateNode.containerInfo),bo(i),ui=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=fu,fu=16777216,bo(i),fu=r):bo(i));break;default:bo(i)}}function $E(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function du(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Qt=u,JE(u,i)}$E(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ZE(i),i=i.sibling}function ZE(i){switch(i.tag){case 0:case 11:case 15:du(i),i.flags&2048&&Xs(9,i,i.return);break;case 3:du(i);break;case 12:du(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Mh(i)):du(i);break;default:du(i)}}function Mh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Qt=u,JE(u,i)}$E(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Xs(8,r,r.return),Mh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Mh(r));break;default:Mh(r)}i=i.sibling}}function JE(i,r){for(;Qt!==null;){var o=Qt;switch(o.tag){case 0:case 11:case 15:Xs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Xl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Qt=u;else e:for(o=i;Qt!==null;){u=Qt;var f=u.sibling,m=u.return;if(HE(u),u===o){Qt=null;break e}if(f!==null){f.return=m,Qt=f;break e}Qt=m}}}var GC={getCacheForType:function(i){var r=un(zt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},QC=typeof WeakMap=="function"?WeakMap:Map,$e=0,ot=null,Me=null,Be=0,Ze=0,Ln=null,Zs=!1,Co=!1,lp=!1,ps=0,vt=0,Js=0,_a=0,up=0,ei=0,Ro=0,mu=null,wn=null,cp=!1,hp=0,kh=1/0,Ph=null,er=null,nn=0,tr=null,Io=null,No=0,fp=0,dp=null,eT=null,pu=0,mp=null;function Un(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(G.T!==null){var i=go;return i!==0?i:Tp()}return Vs()}function tT(){ei===0&&(ei=(Be&536870912)===0||Qe?Al():536870912);var i=Jn.current;return i!==null&&(i.flags|=32),ei}function zn(i,r,o){(i===ot&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Do(i,0),nr(i,Be,ei,!1)),Yi(i,o),(($e&2)===0||i!==ot)&&(i===ot&&(($e&2)===0&&(_a|=o),vt===4&&nr(i,Be,ei,!1)),Mi(i))}function nT(i,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Fr(i,r),f=u?XC(i,r):_p(i,r,!0),m=u;do{if(f===0){Co&&!u&&nr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!YC(o)){f=_p(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=mu;var C=S.current.memoizedState.isDehydrated;if(C&&(Do(S,E).flags|=256),E=_p(S,E,!1),E!==2){if(lp&&!C){S.errorRecoveryDisabledLanes|=m,_a|=m,f=4;break e}m=wn,wn=f,m!==null&&(wn===null?wn=m:wn.push.apply(wn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Do(i,0),nr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:nr(u,r,ei,!Zs);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=hp+300-Fn(),10<f)){if(nr(u,r,ei,!Zs),Qa(u,0,!0)!==0)break e;u.timeoutHandle=xT(iT.bind(null,u,o,wn,Ph,cp,r,ei,_a,Ro,Zs,m,2,-0,0),f);break e}iT(u,o,wn,Ph,cp,r,ei,_a,Ro,Zs,m,0,-0,0)}}break}while(!0);Mi(i)}function iT(i,r,o,u,f,m,E,S,C,q,Q,$,B,F){if(i.timeoutHandle=-1,$=r.subtreeFlags,($&8192||($&16785408)===16785408)&&(Su={stylesheets:null,count:0,unsuspend:IR},WE(r),$=DR(),$!==null)){i.cancelPendingCommit=$(cT.bind(null,i,r,m,o,u,f,E,S,C,Q,1,B,F)),nr(i,m,E,!q);return}cT(i,r,m,o,u,f,E,S,C)}function YC(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Mn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(i,r,o,u){r&=~up,r&=~_a,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-ln(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&yi(i,o,r)}function Vh(){return($e&6)===0?(gu(0),!1):!0}function pp(){if(Me!==null){if(Ze===0)var i=Me.return;else i=Me,os=ha=null,Om(i),So=null,au=0,i=Me;for(;i!==null;)VE(i.alternate,i),i=i.return;Me=null}}function Do(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,hR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),pp(),ot=i,Me=o=ss(i.current,null),Be=r,Ze=0,Ln=null,Zs=!1,Co=Fr(i,r),lp=!1,Ro=ei=up=_a=Js=vt=0,wn=mu=null,cp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-ln(u),m=1<<f;r|=i[f],u&=~m}return ps=r,sh(),o}function sT(i,r){Re=null,G.H=wh,r===$l||r===dh?(r=Tv(),Ze=3):r===yv?(r=Tv(),Ze=4):Ze=r===SE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Ln=r,Me===null&&(vt=1,Ih(i,Xn(r,i.current)))}function rT(){var i=G.H;return G.H=wh,i===null?wh:i}function aT(){var i=G.A;return G.A=GC,i}function gp(){vt=4,Zs||(Be&4194048)!==Be&&Jn.current!==null||(Co=!0),(Js&134217727)===0&&(_a&134217727)===0||ot===null||nr(ot,Be,ei,!1)}function _p(i,r,o){var u=$e;$e|=2;var f=rT(),m=aT();(ot!==i||Be!==r)&&(Ph=null,Do(i,r)),r=!1;var E=vt;e:do try{if(Ze!==0&&Me!==null){var S=Me,C=Ln;switch(Ze){case 8:pp(),E=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(r=!0);var q=Ze;if(Ze=0,Ln=null,xo(i,S,C,q),o&&Co){E=0;break e}break;default:q=Ze,Ze=0,Ln=null,xo(i,S,C,q)}}KC(),E=vt;break}catch(Q){sT(i,Q)}while(!0);return r&&i.shellSuspendCounter++,os=ha=null,$e=u,G.H=f,G.A=m,Me===null&&(ot=null,Be=0,sh()),E}function KC(){for(;Me!==null;)oT(Me)}function XC(i,r){var o=$e;$e|=2;var u=rT(),f=aT();ot!==i||Be!==r?(Ph=null,kh=Fn()+500,Do(i,r)):Co=Fr(i,r);e:do try{if(Ze!==0&&Me!==null){r=Me;var m=Ln;t:switch(Ze){case 1:Ze=0,Ln=null,xo(i,r,m,1);break;case 2:case 9:if(vv(m)){Ze=0,Ln=null,lT(r);break}r=function(){Ze!==2&&Ze!==9||ot!==i||(Ze=7),Mi(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:vv(m)?(Ze=0,Ln=null,lT(r)):(Ze=0,Ln=null,xo(i,r,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var S=Me;if(!E||FT(E)){Ze=0,Ln=null;var C=S.sibling;if(C!==null)Me=C;else{var q=S.return;q!==null?(Me=q,Lh(q)):Me=null}break t}}Ze=0,Ln=null,xo(i,r,m,5);break;case 6:Ze=0,Ln=null,xo(i,r,m,6);break;case 8:pp(),vt=6;break e;default:throw Error(s(462))}}WC();break}catch(Q){sT(i,Q)}while(!0);return os=ha=null,G.H=u,G.A=f,$e=o,Me!==null?0:(ot=null,Be=0,sh(),vt)}function WC(){for(;Me!==null&&!El();)oT(Me)}function oT(i){var r=kE(i.alternate,i,ps);i.memoizedProps=i.pendingProps,r===null?Lh(i):Me=r}function lT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=IE(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=IE(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:Om(r);default:VE(o,r),r=Me=uv(r,ps),r=kE(o,r,ps)}i.memoizedProps=i.pendingProps,r===null?Lh(i):Me=r}function xo(i,r,o,u){os=ha=null,Om(r),So=null,au=0;var f=r.return;try{if(zC(i,f,r,o,Be)){vt=1,Ih(i,Xn(o,i.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;vt=1,Ih(i,Xn(o,i.current)),Me=null;return}r.flags&32768?(Qe||u===1?i=!0:Co||(Be&536870912)!==0?i=!1:(Zs=i=!0,(u===2||u===9||u===3||u===6)&&(u=Jn.current,u!==null&&u.tag===13&&(u.flags|=16384))),uT(r,i)):Lh(r)}function Lh(i){var r=i;do{if((r.flags&32768)!==0){uT(r,Zs);return}i=r.return;var o=qC(r.alternate,r,ps);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=i}while(r!==null);vt===0&&(vt=5)}function uT(i,r){do{var o=BC(i.alternate,i);if(o!==null){o.flags&=32767,Me=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Me=i;return}Me=i=o}while(i!==null);vt=6,Me=null}function cT(i,r,o,u,f,m,E,S,C){i.cancelPendingCommit=null;do Uh();while(nn!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=om,Cl(i,o,m,E,S,C),i===ot&&(Me=ot=null,Be=0),Io=r,tr=i,No=o,fp=m,dp=f,eT=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,eR(zr,function(){return pT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,f=ie.p,ie.p=2,E=$e,$e|=4;try{FC(i,r,o)}finally{$e=E,ie.p=f,G.T=u}}nn=1,hT(),fT(),dT()}}function hT(){if(nn===1){nn=0;var i=tr,r=Io,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{YE(r,i);var m=Np,E=Jy(i.containerInfo),S=m.focusedElem,C=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&Zy(S.ownerDocument.documentElement,S)){if(C!==null&&nm(S)){var q=C.start,Q=C.end;if(Q===void 0&&(Q=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(Q,S.value.length);else{var $=S.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var F=B.getSelection(),Ee=S.textContent.length,ge=Math.min(C.start,Ee),it=C.end===void 0?ge:Math.min(C.end,Ee);!F.extend&&ge>it&&(E=it,it=ge,ge=E);var V=$y(S,ge),O=$y(S,it);if(V&&O&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var z=$.createRange();z.setStart(V.node,V.offset),F.removeAllRanges(),ge>it?(F.addRange(z),F.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),F.addRange(z))}}}}for($=[],F=S;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<$.length;S++){var W=$[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Wh=!!Ip,Np=Ip=null}finally{$e=f,ie.p=u,G.T=o}}i.current=r,nn=2}}function fT(){if(nn===2){nn=0;var i=tr,r=Io,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{FE(i,r.alternate,r)}finally{$e=f,ie.p=u,G.T=o}}nn=3}}function dT(){if(nn===4||nn===3){nn=0,Mc();var i=tr,r=Io,o=No,u=eT;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?nn=5:(nn=0,Io=tr=null,mT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(er=null),Ya(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(_t,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=G.T,f=ie.p,ie.p=2,G.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{G.T=r,ie.p=f}}(No&3)!==0&&Uh(),Mi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===mp?pu++:(pu=0,mp=i):pu=0,gu(0)}}function mT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Xl(r)))}function Uh(i){return hT(),fT(),dT(),pT()}function pT(){if(nn!==5)return!1;var i=tr,r=fp;fp=0;var o=Ya(No),u=G.T,f=ie.p;try{ie.p=32>o?32:o,G.T=null,o=dp,dp=null;var m=tr,E=No;if(nn=0,Io=tr=null,No=0,($e&6)!==0)throw Error(s(331));var S=$e;if($e|=4,ZE(m.current),XE(m,m.current,E,o),$e=S,gu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{ie.p=f,G.T=u,mT(i,r)}}function gT(i,r,o){r=Xn(o,r),r=Qm(i.stateNode,r,2),i=Gs(i,r,2),i!==null&&(Yi(i,2),Mi(i))}function st(i,r,o){if(i.tag===3)gT(i,i,o);else for(;r!==null;){if(r.tag===3){gT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))){i=Xn(o,i),o=EE(2),u=Gs(r,o,2),u!==null&&(TE(o,u,r,i),Yi(u,2),Mi(u));break}}r=r.return}}function yp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new QC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(lp=!0,f.add(o),i=$C.bind(null,i,r,o),r.then(i,i))}function $C(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ot===i&&(Be&o)===o&&(vt===4||vt===3&&(Be&62914560)===Be&&300>Fn()-hp?($e&2)===0&&Do(i,0):up|=o,Ro===Be&&(Ro=0)),Mi(i)}function _T(i,r){r===0&&(r=bl()),i=ho(i,r),i!==null&&(Yi(i,r),Mi(i))}function ZC(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),_T(i,o)}function JC(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),_T(i,o)}function eR(i,r){return Lr(i,r)}var zh=null,Oo=null,vp=!1,jh=!1,Ep=!1,ya=0;function Mi(i){i!==Oo&&i.next===null&&(Oo===null?zh=Oo=i:Oo=Oo.next=i),jh=!0,vp||(vp=!0,nR())}function gu(i,r){if(!Ep&&jh){Ep=!0;do for(var o=!1,u=zh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-ln(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,TT(u,m))}else m=Be,m=Qa(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Fr(u,m)||(o=!0,TT(u,m));u=u.next}while(o);Ep=!1}}function tR(){yT()}function yT(){jh=vp=!1;var i=0;ya!==0&&(cR()&&(i=ya),ya=0);for(var r=Fn(),o=null,u=zh;u!==null;){var f=u.next,m=vT(u,r);m===0?(u.next=null,o===null?zh=f:o.next=f,f===null&&(Oo=o)):(o=u,(i!==0||(m&3)!==0)&&(jh=!0)),u=f}gu(i)}function vT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-ln(m),S=1<<E,C=f[E];C===-1?((S&o)===0||(S&u)!==0)&&(f[E]=wl(S,r)):C<=r&&(i.expiredLanes|=S),m&=~S}if(r=ot,o=Be,o=Qa(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Ur(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Fr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Ur(u),Ya(o)){case 2:case 8:o=Ha;break;case 32:o=zr;break;case 268435456:o=Ga;break;default:o=zr}return u=ET.bind(null,i),o=Lr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Ur(u),i.callbackPriority=2,i.callbackNode=null,2}function ET(i,r){if(nn!==0&&nn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Uh()&&i.callbackNode!==o)return null;var u=Be;return u=Qa(i,i===ot?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(nT(i,u,r),vT(i,Fn()),i.callbackNode!=null&&i.callbackNode===o?ET.bind(null,i):null)}function TT(i,r){if(Uh())return null;nT(i,r,!0)}function nR(){fR(function(){($e&6)!==0?Lr(Tl,tR):yT()})}function Tp(){return ya===0&&(ya=Al()),ya}function ST(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Ja(""+i)}function wT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function iR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=ST((f[Ct]||null).action),E=u.submitter;E&&(r=(r=E[Ct]||null)?ST(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new eo("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ya!==0){var C=E?wT(f,E):new FormData(f);qm(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(S.preventDefault(),C=E?wT(f,E):new FormData(f),qm(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var Sp=0;Sp<am.length;Sp++){var wp=am[Sp],sR=wp.toLowerCase(),rR=wp[0].toUpperCase()+wp.slice(1);li(sR,"on"+rR)}li(nv,"onAnimationEnd"),li(iv,"onAnimationIteration"),li(sv,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(SC,"onTransitionRun"),li(wC,"onTransitionStart"),li(AC,"onTransitionCancel"),li(rv,"onTransitionEnd"),Xi("onMouseEnter",["mouseout","mouseover"]),Xi("onMouseLeave",["mouseout","mouseover"]),Xi("onPointerEnter",["pointerout","pointerover"]),Xi("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));function AT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],C=S.instance,q=S.currentTarget;if(S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(Q){Rh(Q)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(S=u[E],C=S.instance,q=S.currentTarget,S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(Q){Rh(Q)}f.currentTarget=null,m=C}}}}function ke(i,r){var o=r[Il];o===void 0&&(o=r[Il]=new Set);var u=i+"__bubble";o.has(u)||(bT(r,i,2,!1),o.add(u))}function Ap(i,r,o){var u=0;r&&(u|=4),bT(o,i,u,r)}var qh="_reactListening"+Math.random().toString(36).slice(2);function bp(i){if(!i[qh]){i[qh]=!0,Nl.forEach(function(o){o!=="selectionchange"&&(aR.has(o)||Ap(o,!1,i),Ap(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[qh]||(r[qh]=!0,Ap("selectionchange",!1,r))}}function bT(i,r,o,u){switch(XT(r)){case 2:var f=MR;break;case 8:f=kR;break;default:f=zp}o=f.bind(null,r,o,i),f=void 0,!Yn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Cp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Ki(S),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Fc(function(){var q=m,Q=Qn(o),$=[];e:{var B=av.get(i);if(B!==void 0){var F=eo,Ee=i;switch(i){case"keypress":if(Ai(o)===0)break e;case"keydown":case"keyup":F=ao;break;case"focusin":Ee="focus",F=io;break;case"focusout":Ee="blur",F=io;break;case"beforeblur":case"afterblur":F=io;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=$c;break;case nv:case iv:case sv:F=so;break;case rv:F=Jc;break;case"scroll":case"scrollend":F=Hc;break;case"wheel":F=oo;break;case"copy":case"cut":case"paste":F=ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ql;break;case"toggle":case"beforetoggle":F=th}var ge=(r&4)!==0,it=!ge&&(i==="scroll"||i==="scrollend"),V=ge?B!==null?B+"Capture":null:B;ge=[];for(var O=q,z;O!==null;){var W=O;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||V===null||(W=$r(O,V),W!=null&&ge.push(yu(O,W,z))),it)break;O=O.return}0<ge.length&&(B=new F(B,Ee,null,o,Q),$.push({event:B,listeners:ge}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",B&&o!==Zi&&(Ee=o.relatedTarget||o.fromElement)&&(Ki(Ee)||Ee[Hn]))break e;if((F||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Ee=o.relatedTarget||o.toElement,F=q,Ee=Ee?Ki(Ee):null,Ee!==null&&(it=l(Ee),ge=Ee.tag,Ee!==it||ge!==5&&ge!==27&&ge!==6)&&(Ee=null)):(F=null,Ee=q),F!==Ee)){if(ge=Kn,W="onMouseLeave",V="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ge=ql,W="onPointerLeave",V="onPointerEnter",O="pointer"),it=F==null?B:Ei(F),z=Ee==null?B:Ei(Ee),B=new ge(W,O+"leave",F,o,Q),B.target=it,B.relatedTarget=z,W=null,Ki(Q)===q&&(ge=new ge(V,O+"enter",Ee,o,Q),ge.target=z,ge.relatedTarget=it,W=ge),it=W,F&&Ee)t:{for(ge=F,V=Ee,O=0,z=ge;z;z=Mo(z))O++;for(z=0,W=V;W;W=Mo(W))z++;for(;0<O-z;)ge=Mo(ge),O--;for(;0<z-O;)V=Mo(V),z--;for(;O--;){if(ge===V||V!==null&&ge===V.alternate)break t;ge=Mo(ge),V=Mo(V)}ge=null}else ge=null;F!==null&&CT($,B,F,ge,!1),Ee!==null&&it!==null&&CT($,it,Ee,ge,!0)}}e:{if(B=q?Ei(q):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var le=Gy;else if(Ut(B))if(Qy)le=vC;else{le=_C;var De=gC}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&kl(q.elementType)&&(le=Gy):le=yC;if(le&&(le=le(i,q))){is($,le,o,Q);break e}De&&De(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&js(B,"number",B.value)}switch(De=q?Ei(q):window,i){case"focusin":(Ut(De)||De.contentEditable==="true")&&(lo=De,im=q,Hl=null);break;case"focusout":Hl=im=lo=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,ev($,o,Q);break;case"selectionchange":if(TC)break;case"keydown":case"keyup":ev($,o,Q)}var he;if(Ri)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else je?H(i,o)&&(_e="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(y&&o.locale!=="ko"&&(je||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&je&&(he=Vl()):(wi=Q,qs="value"in wi?wi.value:wi.textContent,je=!0)),De=Bh(q,_e),0<De.length&&(_e=new zl(_e,i,null,o,Q),$.push({event:_e,listeners:De}),he?_e.data=he:(he=te(o),he!==null&&(_e.data=he)))),(he=_?Lt(i,o):qe(i,o))&&(_e=Bh(q,"onBeforeInput"),0<_e.length&&(De=new zl("onBeforeInput","beforeinput",null,o,Q),$.push({event:De,listeners:_e}),De.data=he)),iR($,i,q,o,Q)}AT($,r)})}function yu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Bh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=$r(i,o),f!=null&&u.unshift(yu(i,f,m)),f=$r(i,r),f!=null&&u.push(yu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Mo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function CT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,C=S.alternate,q=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||q===null||(C=q,f?(q=$r(o,m),q!=null&&E.unshift(yu(o,q,C))):f||(q=$r(o,m),q!=null&&E.push(yu(o,q,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var oR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function RT(i){return(typeof i=="string"?i:""+i).replace(oR,`
`).replace(lR,"")}function IT(i,r){return r=RT(r),RT(i)===r}function Fh(){}function nt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Gn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Gn(i,""+u);break;case"className":Ti(i,"class",u);break;case"tabIndex":Ti(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(i,o,u);break;case"style":Ml(i,u,m);break;case"data":if(r!=="object"){Ti(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ja(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&nt(i,r,"name",f.name,f,null),nt(i,r,"formEncType",f.formEncType,f,null),nt(i,r,"formMethod",f.formMethod,f,null),nt(i,r,"formTarget",f.formTarget,f,null)):(nt(i,r,"encType",f.encType,f,null),nt(i,r,"method",f.method,f,null),nt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ja(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Fh);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Ja(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ke("beforetoggle",i),ke("toggle",i),zs(i,"popover",u);break;case"xlinkActuate":Jt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Jt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Jt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Jt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Jt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Jt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":zs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Wd.get(o)||o,zs(i,o,u))}}function Rp(i,r,o,u,f,m){switch(o){case"style":Ml(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Gn(i,u):(typeof u=="number"||typeof u=="bigint")&&Gn(i,""+u);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Fh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Ct]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):zs(i,o,u)}}}function sn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",i),ke("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,m,E,o,null)}}f&&nt(i,r,"srcSet",o.srcSet,o,null),u&&nt(i,r,"src",o.src,o,null);return;case"input":ke("invalid",i);var S=m=E=f=null,C=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":E=Q;break;case"checked":C=Q;break;case"defaultChecked":q=Q;break;case"value":m=Q;break;case"defaultValue":S=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:nt(i,r,u,Q,o,null)}}Kr(i,m,S,C,q,E,f,!1),Za(i);return;case"select":ke("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:nt(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?$i(i,!!u,r,!1):o!=null&&$i(i,!!u,o,!0);return;case"textarea":ke("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:nt(i,r,E,S,o,null)}Xr(i,u,f,m),Za(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(i,r,C,u,o,null)}return;case"dialog":ke("beforetoggle",i),ke("toggle",i),ke("cancel",i),ke("close",i);break;case"iframe":case"object":ke("load",i);break;case"video":case"audio":for(u=0;u<_u.length;u++)ke(_u[u],i);break;case"image":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"embed":case"source":case"link":ke("error",i),ke("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,q,u,o,null)}return;default:if(kl(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Rp(i,r,Q,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&nt(i,r,S,u,o,null))}function uR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,C=null,q=null,Q=null;for(F in o){var $=o[F];if(o.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=$;default:u.hasOwnProperty(F)||nt(i,r,F,null,u,$)}}for(var B in u){var F=u[B];if($=o[B],u.hasOwnProperty(B)&&(F!=null||$!=null))switch(B){case"type":m=F;break;case"name":f=F;break;case"checked":q=F;break;case"defaultChecked":Q=F;break;case"value":E=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==$&&nt(i,r,B,F,u,$)}}On(i,E,S,C,q,Q,m,f);return;case"select":F=E=S=B=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":F=C;default:u.hasOwnProperty(m)||nt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==C&&nt(i,r,f,m,u,C)}r=S,o=E,u=F,B!=null?$i(i,!!o,B,!1):!!u!=!!o&&(r!=null?$i(i,!!o,r,!0):$i(i,!!o,o?[]:"",!1));return;case"textarea":F=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:nt(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&nt(i,r,E,f,u,m)}et(i,B,F);return;case"option":for(var Ee in o)if(B=o[Ee],o.hasOwnProperty(Ee)&&B!=null&&!u.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:nt(i,r,Ee,null,u,B)}for(C in u)if(B=u[C],F=o[C],u.hasOwnProperty(C)&&B!==F&&(B!=null||F!=null))switch(C){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:nt(i,r,C,B,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)B=o[ge],o.hasOwnProperty(ge)&&B!=null&&!u.hasOwnProperty(ge)&&nt(i,r,ge,null,u,B);for(q in u)if(B=u[q],F=o[q],u.hasOwnProperty(q)&&B!==F&&(B!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:nt(i,r,q,B,u,F)}return;default:if(kl(r)){for(var it in o)B=o[it],o.hasOwnProperty(it)&&B!==void 0&&!u.hasOwnProperty(it)&&Rp(i,r,it,void 0,u,B);for(Q in u)B=u[Q],F=o[Q],!u.hasOwnProperty(Q)||B===F||B===void 0&&F===void 0||Rp(i,r,Q,B,u,F);return}}for(var V in o)B=o[V],o.hasOwnProperty(V)&&B!=null&&!u.hasOwnProperty(V)&&nt(i,r,V,null,u,B);for($ in u)B=u[$],F=o[$],!u.hasOwnProperty($)||B===F||B==null&&F==null||nt(i,r,$,B,u,F)}var Ip=null,Np=null;function Hh(i){return i.nodeType===9?i:i.ownerDocument}function NT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function DT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Dp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xp=null;function cR(){var i=window.event;return i&&i.type==="popstate"?i===xp?!1:(xp=i,!0):(xp=null,!1)}var xT=typeof setTimeout=="function"?setTimeout:void 0,hR=typeof clearTimeout=="function"?clearTimeout:void 0,OT=typeof Promise=="function"?Promise:void 0,fR=typeof queueMicrotask=="function"?queueMicrotask:typeof OT<"u"?function(i){return OT.resolve(null).then(i).catch(dR)}:xT;function dR(i){setTimeout(function(){throw i})}function ir(i){return i==="head"}function MT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&vu(E.documentElement),o&2&&vu(E.body),o&4)for(o=E.head,vu(o),E=o.firstChild;E;){var S=E.nextSibling,C=E.nodeName;E[Hr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Ru(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Ru(r)}function Op(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Op(o),Us(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function mR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Hr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ci(i.nextSibling),i===null)break}return null}function pR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ci(i.nextSibling),i===null))return null;return i}function Mp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function gR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var kp=null;function kT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function PT(i,r,o){switch(r=Hh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function vu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Us(i)}var ti=new Map,VT=new Set;function Gh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var gs=ie.d;ie.d={f:_R,r:yR,D:vR,C:ER,L:TR,m:SR,X:AR,S:wR,M:bR};function _R(){var i=gs.f(),r=Vh();return i||r}function yR(i){var r=vi(i);r!==null&&r.tag===5&&r.type==="form"?nE(r):gs.r(i)}var ko=typeof document>"u"?null:document;function LT(i,r,o){var u=ko;if(u&&typeof r=="string"&&r){var f=Rt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),VT.has(f)||(VT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),sn(r,"link",i),Tt(r),u.head.appendChild(r)))}}function vR(i){gs.D(i),LT("dns-prefetch",i,null)}function ER(i,r){gs.C(i,r),LT("preconnect",i,r)}function TR(i,r,o){gs.L(i,r,o);var u=ko;if(u&&i&&r){var f='link[rel="preload"][as="'+Rt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Rt(o.imageSizes)+'"]')):f+='[href="'+Rt(i)+'"]';var m=f;switch(r){case"style":m=Po(i);break;case"script":m=Vo(i)}ti.has(m)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ti.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Eu(m))||r==="script"&&u.querySelector(Tu(m))||(r=u.createElement("link"),sn(r,"link",i),Tt(r),u.head.appendChild(r)))}}function SR(i,r){gs.m(i,r);var o=ko;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Vo(i)}if(!ti.has(m)&&(i=v({rel:"modulepreload",href:i},r),ti.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Tu(m)))return}u=o.createElement("link"),sn(u,"link",i),Tt(u),o.head.appendChild(u)}}}function wR(i,r,o){gs.S(i,r,o);var u=ko;if(u&&i){var f=_n(u).hoistableStyles,m=Po(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Eu(m)))S.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ti.get(m))&&Pp(i,o);var C=E=u.createElement("link");Tt(C),sn(C,"link",i),C._p=new Promise(function(q,Q){C.onload=q,C.onerror=Q}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Qh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function AR(i,r){gs.X(i,r);var o=ko;if(o&&i){var u=_n(o).hoistableScripts,f=Vo(i),m=u.get(f);m||(m=o.querySelector(Tu(f)),m||(i=v({src:i,async:!0},r),(r=ti.get(f))&&Vp(i,r),m=o.createElement("script"),Tt(m),sn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function bR(i,r){gs.M(i,r);var o=ko;if(o&&i){var u=_n(o).hoistableScripts,f=Vo(i),m=u.get(f);m||(m=o.querySelector(Tu(f)),m||(i=v({src:i,async:!0,type:"module"},r),(r=ti.get(f))&&Vp(i,r),m=o.createElement("script"),Tt(m),sn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function UT(i,r,o,u){var f=(f=we.current)?Gh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Po(o.href),o=_n(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Po(o.href);var m=_n(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Eu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ti.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ti.set(i,o),m||CR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Vo(o),o=_n(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Po(i){return'href="'+Rt(i)+'"'}function Eu(i){return'link[rel="stylesheet"]['+i+"]"}function zT(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function CR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),sn(r,"link",o),Tt(r),i.head.appendChild(r))}function Vo(i){return'[src="'+Rt(i)+'"]'}function Tu(i){return"script[async]"+i}function jT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return r.instance=u,Tt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Tt(u),sn(u,"style",f),Qh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Po(o.href);var m=i.querySelector(Eu(f));if(m)return r.state.loading|=4,r.instance=m,Tt(m),m;u=zT(o),(f=ti.get(f))&&Pp(u,f),m=(i.ownerDocument||i).createElement("link"),Tt(m);var E=m;return E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),sn(m,"link",u),r.state.loading|=4,Qh(m,o.precedence,i),r.instance=m;case"script":return m=Vo(o.src),(f=i.querySelector(Tu(m)))?(r.instance=f,Tt(f),f):(u=o,(f=ti.get(m))&&(u=v({},o),Vp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Tt(f),sn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Qh(u,o.precedence,i));return r.instance}function Qh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Pp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Vp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Yh=null;function qT(i,r,o){if(Yh===null){var u=new Map,f=Yh=new Map;f.set(o,u)}else f=Yh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Hr]||m[Vt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function BT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function RR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function FT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Su=null;function IR(){}function NR(i,r,o){if(Su===null)throw Error(s(475));var u=Su;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Po(o.href),m=i.querySelector(Eu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Kh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Tt(m);return}m=i.ownerDocument||i,o=zT(o),(f=ti.get(f))&&Pp(o,f),m=m.createElement("link"),Tt(m);var E=m;E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),sn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Kh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function DR(){if(Su===null)throw Error(s(475));var i=Su;return i.stylesheets&&i.count===0&&Lp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Lp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Kh(){if(this.count--,this.count===0){if(this.stylesheets)Lp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Xh=null;function Lp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Xh=new Map,r.forEach(xR,i),Xh=null,Kh.call(i))}function xR(i,r){if(!(r.state.loading&4)){var o=Xh.get(i);if(o)var u=o.get(null);else{o=new Map,Xh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Kh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var wu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function OR(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.hiddenUpdates=Qi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function HT(i,r,o,u,f,m,E,S,C,q,Q,$){return i=new OR(i,r,o,E,S,C,q,$),r=1,m===!0&&(r|=24),m=kn(3,null,null,r),i.current=m,m.stateNode=i,r=ym(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Sm(m),i}function GT(i){return i?(i=fo,i):fo}function QT(i,r,o,u,f,m){f=GT(f),u.context===null?u.context=f:u.pendingContext=f,u=Hs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Gs(i,u,r),o!==null&&(zn(o,i,r),Jl(o,i,r))}function YT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Up(i,r){YT(i,r),(i=i.alternate)&&YT(i,r)}function KT(i){if(i.tag===13){var r=ho(i,67108864);r!==null&&zn(r,i,67108864),Up(i,67108864)}}var Wh=!0;function MR(i,r,o,u){var f=G.T;G.T=null;var m=ie.p;try{ie.p=2,zp(i,r,o,u)}finally{ie.p=m,G.T=f}}function kR(i,r,o,u){var f=G.T;G.T=null;var m=ie.p;try{ie.p=8,zp(i,r,o,u)}finally{ie.p=m,G.T=f}}function zp(i,r,o,u){if(Wh){var f=jp(u);if(f===null)Cp(i,r,u,$h,o),WT(i,u);else if(VR(f,i,r,o,u))u.stopPropagation();else if(WT(i,u),r&4&&-1<PR.indexOf(i)){for(;f!==null;){var m=vi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ri(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var C=1<<31-ln(E);S.entanglements[1]|=C,E&=~C}Mi(m),($e&6)===0&&(kh=Fn()+500,gu(0))}}break;case 13:S=ho(m,2),S!==null&&zn(S,m,2),Vh(),Up(m,2)}if(m=jp(u),m===null&&Cp(i,r,u,$h,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Cp(i,r,u,null,o)}}function jp(i){return i=Qn(i),qp(i)}var $h=null;function qp(i){if($h=null,i=Ki(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return $h=i,null}function XT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case Tl:return 2;case Ha:return 8;case zr:case Gd:return 32;case Ga:return 268435456;default:return 32}default:return 32}}var Bp=!1,sr=null,rr=null,ar=null,Au=new Map,bu=new Map,or=[],PR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function WT(i,r){switch(i){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Au.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(r.pointerId)}}function Cu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=vi(r),r!==null&&KT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function VR(i,r,o,u,f){switch(r){case"focusin":return sr=Cu(sr,i,r,o,u,f),!0;case"dragenter":return rr=Cu(rr,i,r,o,u,f),!0;case"mouseover":return ar=Cu(ar,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Au.set(m,Cu(Au.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,bu.set(m,Cu(bu.get(m)||null,i,r,o,u,f)),!0}return!1}function $T(i){var r=Ki(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Vc(i.priority,function(){if(o.tag===13){var u=Un();u=Ps(u);var f=ho(o,u);f!==null&&zn(f,o,u),Up(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Zh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=jp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Zi=u,o.target.dispatchEvent(u),Zi=null}else return r=vi(o),r!==null&&KT(r),i.blockedOn=o,!1;r.shift()}return!0}function ZT(i,r,o){Zh(i)&&o.delete(r)}function LR(){Bp=!1,sr!==null&&Zh(sr)&&(sr=null),rr!==null&&Zh(rr)&&(rr=null),ar!==null&&Zh(ar)&&(ar=null),Au.forEach(ZT),bu.forEach(ZT)}function Jh(i,r){i.blockedOn===r&&(i.blockedOn=null,Bp||(Bp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,LR)))}var ef=null;function JT(i){ef!==i&&(ef=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ef===i&&(ef=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(qp(u||o)===null)continue;break}var m=vi(o);m!==null&&(i.splice(r,3),r-=3,qm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Ru(i){function r(C){return Jh(C,i)}sr!==null&&Jh(sr,i),rr!==null&&Jh(rr,i),ar!==null&&Jh(ar,i),Au.forEach(r),bu.forEach(r);for(var o=0;o<or.length;o++){var u=or[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<or.length&&(o=or[0],o.blockedOn===null);)$T(o),o.blockedOn===null&&or.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ct]||null;if(typeof m=="function")E||JT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ct]||null)S=E.formAction;else if(qp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),JT(o)}}}function Fp(i){this._internalRoot=i}tf.prototype.render=Fp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Un();QT(o,u,i,r,null,null)},tf.prototype.unmount=Fp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;QT(i.current,2,null,i,null,null),Vh(),r[Hn]=null}};function tf(i){this._internalRoot=i}tf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Vs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<or.length&&r!==0&&r<or[o].priority;o++);or.splice(o,0,i),o===0&&$T(i)}};var e0=e.version;if(e0!=="19.1.1")throw Error(s(527,e0,"19.1.1"));ie.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var UR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nf.isDisabled&&nf.supportsFiber)try{_t=nf.inject(UR),We=nf}catch{}}return Nu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=gE,m=_E,E=yE,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=HT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Hn]=r.current,bp(i),new Fp(r)},Nu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=gE,E=_E,S=yE,C=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=HT(i,1,!0,r,o??null,u,f,m,E,S,C,q),r.context=GT(null),o=r.current,u=Un(),u=Ps(u),f=Hs(u),f.callback=null,Gs(o,f,u),o=u,r.current.lanes=o,Yi(r,o),Mi(r),i[Hn]=r.current,bp(i),new tf(r)},Nu.version="19.1.1",Nu}var c0;function KR(){if(c0)return Qp.exports;c0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Qp.exports=YR(),Qp.exports}var XR=KR();const WR=()=>{};var h0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw ul(e)},ul=function(n){return new Error("Firebase Database ("+Ow.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},$R=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(w=64)),s.push(t[v],t[T],t[w],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$R(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new ZR;const w=l<<2|d>>4;if(s.push(w),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const j=g<<6&192|T;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ZR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(n){const e=Mw(n);return a_.encodeByteArray(e,!0)},Af=function(n){return kw(n).replace(/\./g,"")},bf=function(n){try{return a_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(n){return Pw(void 0,n)}function Pw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!eI(t)||(n[t]=Pw(n[t],e[t]));return n}function eI(n){return n!=="__proto__"}/**
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
 */function tI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nI=()=>tI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof h0>"u")return;const n=h0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bf(n[1]);return e&&JSON.parse(e)},od=()=>{try{return WR()||nI()||iI()||sI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vw=n=>od()?.emulatorHosts?.[n],Lw=n=>{const e=Vw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Uw=()=>od()?.config,zw=n=>od()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Or(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function o_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function jw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Af(JSON.stringify(t)),Af(JSON.stringify(c)),""].join(".")}const Uu={};function rI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Uu))Uu[e]?n.emulator.push(e):n.prod.push(e);return n}function aI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let f0=!1;function l_(n,e){if(typeof window>"u"||typeof document>"u"||!Or(window.location.host)||Uu[n]===e||Uu[n]||f0)return;Uu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=rI().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,x){w.setAttribute("width","24"),w.setAttribute("id",x),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{f0=!0,c()},w}function v(w,x){w.setAttribute("id",x),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=aI(s),x=t("text"),j=document.getElementById(x)||document.createElement("span"),Y=t("learnmore"),K=document.getElementById(Y)||document.createElement("a"),ce=t("preprendIcon"),oe=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ue=w.element;d(ue),v(K,Y);const Ue=g();p(oe,ce),ue.append(oe,j,K,Ue),document.body.appendChild(ue)}l?(j.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function oI(){const n=od()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cI(){const n=pn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hI(){return Ow.NODE_ADMIN===!0}function fI(){return!oI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="FirebaseError";class Os extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=pI,Object.setPrototypeOf(this,Os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mc.prototype.create)}}class mc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?gI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Os(a,d,s)}}function gI(n,e){return n.replace(_I,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const _I=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){return JSON.parse(n)}function $t(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Xu(bf(l[0])||""),t=Xu(bf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},yI=function(n){const e=Bw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vI=function(n){const e=Bw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $o(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Cf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(d0(l)&&d0(c)){if(!Tr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function d0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const w=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function TI(n,e){const t=new SI(n,e);return t.subscribe.bind(t)}class SI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Wp),a.error===void 0&&(a.error=Wp),a.complete===void 0&&(a.complete=Wp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wp(){}function Zo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},ld=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class Sr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const va="[DEFAULT]";/**
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
 */class bI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ys;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:va})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=va){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=va){return this.instances.has(e)}getOptions(e=va){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=va){return this.component?this.component.multipleInstances?e:va:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(n){return n===va?void 0:n}function RI(n){return n.instantiationMode==="EAGER"}/**
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
 */class II{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const NI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},DI=Pe.INFO,xI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},OI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=xI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const MI=(n,e)=>e.some(t=>n instanceof t);let m0,p0;function kI(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return p0||(p0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fw=new WeakMap,_g=new WeakMap,Hw=new WeakMap,$p=new WeakMap,c_=new WeakMap;function VI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(mr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Fw.set(t,n)}).catch(()=>{}),c_.set(e,n),e}function LI(n){if(_g.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});_g.set(n,e)}let yg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _g.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UI(n){yg=n(yg)}function zI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Zp(this),e,...t);return Hw.set(s,e.sort?e.sort():[e]),mr(s)}:PI().includes(n)?function(...e){return n.apply(Zp(this),e),mr(Fw.get(this))}:function(...e){return mr(n.apply(Zp(this),e))}}function jI(n){return typeof n=="function"?zI(n):(n instanceof IDBTransaction&&LI(n),MI(n,kI())?new Proxy(n,yg):n)}function mr(n){if(n instanceof IDBRequest)return VI(n);if($p.has(n))return $p.get(n);const e=jI(n);return e!==n&&($p.set(n,e),c_.set(e,n)),e}const Zp=n=>c_.get(n);function qI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=mr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(mr(c.result),p.oldVersion,p.newVersion,mr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const BI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],Jp=new Map;function g0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jp.get(e))return Jp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=FI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||BI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Jp.set(e,l),l}UI(n=>({...n,get:(e,t,s)=>g0(e,t)||n.get(e,t,s),has:(e,t)=>!!g0(e,t)||n.has(e,t)}));/**
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
 */class HI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function GI(n){return n.getComponent()?.type==="VERSION"}const vg="@firebase/app",_0="0.14.1";/**
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
 */const bs=new ud("@firebase/app"),QI="@firebase/app-compat",YI="@firebase/analytics-compat",KI="@firebase/analytics",XI="@firebase/app-check-compat",WI="@firebase/app-check",$I="@firebase/auth",ZI="@firebase/auth-compat",JI="@firebase/database",eN="@firebase/data-connect",tN="@firebase/database-compat",nN="@firebase/functions",iN="@firebase/functions-compat",sN="@firebase/installations",rN="@firebase/installations-compat",aN="@firebase/messaging",oN="@firebase/messaging-compat",lN="@firebase/performance",uN="@firebase/performance-compat",cN="@firebase/remote-config",hN="@firebase/remote-config-compat",fN="@firebase/storage",dN="@firebase/storage-compat",mN="@firebase/firestore",pN="@firebase/ai",gN="@firebase/firestore-compat",_N="firebase",yN="12.1.0";/**
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
 */const Eg="[DEFAULT]",vN={[vg]:"fire-core",[QI]:"fire-core-compat",[KI]:"fire-analytics",[YI]:"fire-analytics-compat",[WI]:"fire-app-check",[XI]:"fire-app-check-compat",[$I]:"fire-auth",[ZI]:"fire-auth-compat",[JI]:"fire-rtdb",[eN]:"fire-data-connect",[tN]:"fire-rtdb-compat",[nN]:"fire-fn",[iN]:"fire-fn-compat",[sN]:"fire-iid",[rN]:"fire-iid-compat",[aN]:"fire-fcm",[oN]:"fire-fcm-compat",[lN]:"fire-perf",[uN]:"fire-perf-compat",[cN]:"fire-rc",[hN]:"fire-rc-compat",[fN]:"fire-gcs",[dN]:"fire-gcs-compat",[mN]:"fire-fst",[gN]:"fire-fst-compat",[pN]:"fire-vertex","fire-js":"fire-js",[_N]:"fire-js-all"};/**
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
 */const If=new Map,EN=new Map,Tg=new Map;function y0(n,e){try{n.container.addComponent(e)}catch(t){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Na(n){const e=n.name;if(Tg.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;Tg.set(e,n);for(const t of If.values())y0(t,n);for(const t of EN.values())y0(t,n);return!0}function cd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const TN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new mc("app","Firebase",TN);/**
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
 */class SN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const za=yN;function Gw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Eg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw pr.create("bad-app-name",{appName:String(a)});if(t||(t=Uw()),!t)throw pr.create("no-options");const l=If.get(a);if(l){if(Tr(t,l.options)&&Tr(s,l.config))return l;throw pr.create("duplicate-app",{appName:a})}const c=new II(a);for(const p of Tg.values())c.addComponent(p);const d=new SN(t,s,c);return If.set(a,d),d}function h_(n=Eg){const e=If.get(n);if(!e&&n===Eg&&Uw())return Gw();if(!e)throw pr.create("no-app",{appName:n});return e}function Pi(n,e,t){let s=vN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(c.join(" "));return}Na(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wN="firebase-heartbeat-database",AN=1,Wu="firebase-heartbeat-store";let eg=null;function Qw(){return eg||(eg=qI(wN,AN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wu)}catch(t){console.warn(t)}}}}).catch(n=>{throw pr.create("idb-open",{originalErrorMessage:n.message})})),eg}async function bN(n){try{const t=(await Qw()).transaction(Wu),s=await t.objectStore(Wu).get(Yw(n));return await t.done,s}catch(e){if(e instanceof Os)bs.warn(e.message);else{const t=pr.create("idb-get",{originalErrorMessage:e?.message});bs.warn(t.message)}}}async function v0(n,e){try{const s=(await Qw()).transaction(Wu,"readwrite");await s.objectStore(Wu).put(e,Yw(n)),await s.done}catch(t){if(t instanceof Os)bs.warn(t.message);else{const s=pr.create("idb-set",{originalErrorMessage:t?.message});bs.warn(s.message)}}}function Yw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CN=1024,RN=30;class IN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=E0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>RN){const a=xN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){bs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=E0(),{heartbeatsToSend:t,unsentEntries:s}=NN(this._heartbeatsCache.heartbeats),a=Af(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return bs.warn(e),""}}}function E0(){return new Date().toISOString().substring(0,10)}function NN(n,e=CN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),T0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),T0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class DN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function T0(n){return Af(JSON.stringify({version:2,heartbeats:n})).length}function xN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ON(n){Na(new Sr("platform-logger",e=>new HI(e),"PRIVATE")),Na(new Sr("heartbeat",e=>new IN(e),"PRIVATE")),Pi(vg,_0,n),Pi(vg,_0,"esm2020"),Pi("fire-js","")}ON("");var MN="firebase",kN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi(MN,kN,"app");function Kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PN=Kw,Xw=new mc("auth","Firebase",Kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new ud("@firebase/auth");function VN(n,...e){Nf.logLevel<=Pe.WARN&&Nf.warn(`Auth (${za}): ${n}`,...e)}function ff(n,...e){Nf.logLevel<=Pe.ERROR&&Nf.error(`Auth (${za}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,...e){throw d_(n,...e)}function mi(n,...e){return d_(n,...e)}function f_(n,e,t){const s={...PN(),[e]:t};return new mc("auth","Firebase",s).create(e,{appName:n.name})}function gr(n){return f_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&qi(n,"argument-error"),f_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function d_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Xw.create(n,...e)}function Se(n,e,...t){if(!n)throw d_(e,...t)}function Es(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ff(e),new Error(e)}function Cs(n,e){n||Es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){return typeof self<"u"&&self.location?.href||""}function UN(){return S0()==="http:"||S0()==="https:"}function S0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UN()||uI()||"connection"in navigator)?navigator.onLine:!0}function jN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cs(t>e,"Short delay should be less than long delay!"),this.isMobile=u_()||qw()}get(){return zN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n,e){Cs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FN=new pc(3e4,6e4);function hd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function hl(n,e,t,s,a={}){return $w(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=cl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return lI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Or(n.emulatorConfig.host)&&(g.credentials="include"),Ww.fetch()(await Jw(n,n.config.apiHost,t,d),g)})}async function $w(n,e,t){n._canInitEmulator=!1;const s={...qN,...e};try{const a=new HN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw sf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw sf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw sf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw sf(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw f_(n,v,g);qi(n,v)}}catch(a){if(a instanceof Os)throw a;qi(n,"network-request-failed",{message:String(a)})}}async function Zw(n,e,t,s,a={}){const l=await hl(n,e,t,s,a);return"mfaPendingCredential"in l&&qi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Jw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?m_(n.config,a):`${n.config.apiScheme}://${a}`;return BN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class HN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),FN.get())})}}function sf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=mi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(n,e){return hl(n,"POST","/v1/accounts:delete",e)}async function Df(n,e){return hl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QN(n,e=!1){const t=ut(n),s=await t.getIdToken(e),a=p_(s);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:zu(tg(a.auth_time)),issuedAtTime:zu(tg(a.iat)),expirationTime:zu(tg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function tg(n){return Number(n)*1e3}function p_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ff("JWT malformed, contained fewer than 3 sections"),null;try{const a=bf(t);return a?JSON.parse(a):(ff("Failed to decode base64 JWT payload"),null)}catch(a){return ff("Caught error parsing JWT payload as JSON",a?.toString()),null}}function w0(n){const e=p_(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Os&&YN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function YN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zu(this.lastLoginAt),this.creationTime=zu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xf(n){const e=n.auth,t=await n.getIdToken(),s=await $u(n,Df(e,{idToken:t}));Se(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?eA(a.providerUserInfo):[],c=WN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new wg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function XN(n){const e=ut(n);await xf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function eA(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(n,e){const t=await $w(n,{},async()=>{const s=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await Jw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Or(n.emulatorConfig.host)&&(p.credentials="include"),Ww.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZN(n,e){return hl(n,"POST","/v2/accounts:revokeToken",hd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=w0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await $N(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Ho;return s&&(Se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return Es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new KN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new wg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await $u(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QN(this,e)}reload(){return XN(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await xf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await $u(this,GN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:x,providerData:j,stsTokenManager:Y}=t;Se(T&&Y,e,"internal-error");const K=Ho.fromJSON(this.name,Y);Se(typeof T=="string",e,"internal-error"),ur(s,e.name),ur(a,e.name),Se(typeof w=="boolean",e,"internal-error"),Se(typeof x=="boolean",e,"internal-error"),ur(l,e.name),ur(c,e.name),ur(d,e.name),ur(p,e.name),ur(g,e.name),ur(v,e.name);const ce=new fi({uid:T,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:K,createdAt:g,lastLoginAt:v});return j&&Array.isArray(j)&&(ce.providerData=j.map(oe=>({...oe}))),p&&(ce._redirectEventId=p),ce}static async _fromIdTokenResponse(e,t,s=!1){const a=new Ho;a.updateFromServerResponse(t);const l=new fi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await xf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?eA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Ho;d.updateFromIdToken(s);const p=new fi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new wg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Map;function Ts(n){Cs(n instanceof Function,"Expected a class definition");let e=A0.get(n);return e?(Cs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,A0.set(n,e),e)}/**
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
 */class tA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tA.type="NONE";const b0=tA;/**
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
 */function df(n,e,t){return`firebase:${n}:${e}:${t}`}class Go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=df(this.userKey,a.apiKey,l),this.fullPersistenceKey=df("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Df(this.auth,{idToken:e}).catch(()=>{});return t?fi._fromGetAccountInfoResponse(this.auth,t,e):null}return fi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Go(Ts(b0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ts(b0);const c=df(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await Df(e,{idToken:v}).catch(()=>{});if(!w)break;T=await fi._fromGetAccountInfoResponse(e,w,v)}else T=fi._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Go(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Go(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oA(e))return"Blackberry";if(lA(e))return"Webos";if(iA(e))return"Safari";if((e.includes("chrome/")||sA(e))&&!e.includes("edge/"))return"Chrome";if(aA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function nA(n=pn()){return/firefox\//i.test(n)}function iA(n=pn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sA(n=pn()){return/crios\//i.test(n)}function rA(n=pn()){return/iemobile/i.test(n)}function aA(n=pn()){return/android/i.test(n)}function oA(n=pn()){return/blackberry/i.test(n)}function lA(n=pn()){return/webos/i.test(n)}function g_(n=pn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function JN(n=pn()){return g_(n)&&!!window.navigator?.standalone}function eD(){return cI()&&document.documentMode===10}function uA(n=pn()){return g_(n)||aA(n)||lA(n)||oA(n)||/windows phone/i.test(n)||rA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n,e=[]){let t;switch(n){case"Browser":t=C0(pn());break;case"Worker":t=`${C0(pn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${za}/${s}`}/**
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
 */class tD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function nD(n,e={}){return hl(n,"GET","/v2/passwordPolicy",hd(n,e))}/**
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
 */const iD=6;class sD{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??iD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R0(this),this.idTokenSubscription=new R0(this),this.beforeStateQueue=new tD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ts(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Go.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Df(this,{idToken:e}),s=await fi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(jn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(gr(this));const t=e?ut(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nD(this),t=new sD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ts(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Ts(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&VN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function gc(n){return ut(n)}class R0{constructor(e){this.auth=e,this.observer=null,this.addObserver=TI(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aD(n){__=n}function oD(n){return __.loadJS(n)}function lD(){return __.gapiScript}function uD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(n,e){const t=cd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Tr(l,e??{}))return a;qi(a,"already-initialized")}return t.initialize({options:e})}function hD(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ts);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function fD(n,e,t){const s=gc(n);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=hA(e),{host:c,port:d}=dD(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(Tr(g,s.config.emulator)&&Tr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Or(c)?(o_(`${l}//${c}${p}`),l_("Auth",!0)):mD()}function hA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dD(n){const e=hA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:I0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:I0(c)}}}function I0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Es("not implemented")}_getIdTokenResponse(e){return Es("not implemented")}_linkToIdToken(e,t){return Es("not implemented")}_getReauthenticationResolver(e){return Es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(n,e){return Zw(n,"POST","/v1/accounts:signInWithIdp",hd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="http://localhost";class Da extends fA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Da(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Da(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qo(e,t)}buildRequest(){const e={requestUri:pD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _c extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends _c{constructor(){super("facebook.com")}static credential(e){return Da._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends _c{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Da._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return vs.credential(t,s)}catch{return null}}}vs.GOOGLE_SIGN_IN_METHOD="google.com";vs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends _c{constructor(){super("github.com")}static credential(e){return Da._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends _c{constructor(){super("twitter.com")}static credential(e,t){return Da._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fr.credential(t,s)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await fi._fromIdTokenResponse(e,s,a),c=N0(s);return new xa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=N0(s);return new xa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function N0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends Os{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Of.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Of(e,t,s,a)}}function dA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Of._fromErrorAndOperation(n,l,e,s):l})}async function gD(n,e,t=!1){const s=await $u(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xa._forOperation(n,"link",s)}/**
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
 */async function _D(n,e,t=!1){const{auth:s}=n;if(jn(s.app))return Promise.reject(gr(s));const a="reauthenticate";try{const l=await $u(n,dA(s,a,e,n),t);Se(l.idToken,s,"internal-error");const c=p_(l.idToken);Se(c,s,"internal-error");const{sub:d}=c;return Se(n.uid===d,s,"user-mismatch"),xa._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&qi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(n,e,t=!1){if(jn(n.app))return Promise.reject(gr(n));const s="signIn",a=await dA(n,s,e),l=await xa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(n,e){return Zw(n,"POST","/v1/accounts:signInWithCustomToken",hd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(n,e){if(jn(n.app))return Promise.reject(gr(n));const t=gc(n),s=await vD(t,{token:e,returnSecureToken:!0}),a=await xa._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function TD(n,e,t,s){return ut(n).onIdTokenChanged(e,t,s)}function SD(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function wD(n,e,t,s){return ut(n).onAuthStateChanged(e,t,s)}function AD(n){return ut(n).signOut()}const Mf="__sak";/**
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
 */class mA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mf,"1"),this.storage.removeItem(Mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=1e3,CD=10;class pA extends mA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);eD()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,CD):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pA.type="LOCAL";const RD=pA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA extends mA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gA.type="SESSION";const _A=gA;/**
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
 */function ID(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new fd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await ID(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ND{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=v_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return window}function DD(n){Vi().location.href=n}/**
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
 */function yA(){return typeof Vi().WorkerGlobalScope<"u"&&typeof Vi().importScripts=="function"}async function xD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OD(){return navigator?.serviceWorker?.controller||null}function MD(){return yA()?self:null}/**
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
 */const vA="firebaseLocalStorageDb",kD=1,kf="firebaseLocalStorage",EA="fbase_key";class yc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dd(n,e){return n.transaction([kf],e?"readwrite":"readonly").objectStore(kf)}function PD(){const n=indexedDB.deleteDatabase(vA);return new yc(n).toPromise()}function Ag(){const n=indexedDB.open(vA,kD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(kf,{keyPath:EA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(kf)?e(s):(s.close(),await PD(),e(await Ag()))})})}async function D0(n,e,t){const s=dd(n,!0).put({[EA]:e,value:t});return new yc(s).toPromise()}async function VD(n,e){const t=dd(n,!1).get(e),s=await new yc(t).toPromise();return s===void 0?null:s.value}function x0(n,e){const t=dd(n,!0).delete(e);return new yc(t).toPromise()}const LD=800,UD=3;class TA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ag(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>UD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fd._getInstance(MD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await xD(),!this.activeServiceWorker)return;this.sender=new ND(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ag();return await D0(e,Mf,"1"),await x0(e,Mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>D0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>VD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>x0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=dd(a,!1).getAll();return new yc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TA.type="LOCAL";const zD=TA;new pc(3e4,6e4);/**
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
 */function SA(n,e){return e?Ts(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class E_ extends fA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jD(n){return yD(n.auth,new E_(n),n.bypassAuthState)}function qD(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),_D(t,new E_(n),n.bypassAuthState)}async function BD(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),gD(t,new E_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jD;case"linkViaPopup":case"linkViaRedirect":return BD;case"reauthViaPopup":case"reauthViaRedirect":return qD;default:qi(this.auth,"internal-error")}}resolve(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new pc(2e3,1e4);async function HD(n,e,t){if(jn(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const s=gc(n);LN(n,e,y_);const a=SA(s,t);return new Ta(s,"signInViaPopup",e,a).executeNotNull()}class Ta extends wA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ta.currentPopupAction&&Ta.currentPopupAction.cancel(),Ta.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Cs(this.filter.length===1,"Popup operations only handle one event");const e=v_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ta.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FD.get())};e()}}Ta.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="pendingRedirect",mf=new Map;class QD extends wA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=mf.get(this.auth._key());if(!e){try{const s=await YD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}mf.set(this.auth._key(),e)}return this.bypassAuthState||mf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YD(n,e){const t=WD(e),s=XD(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function KD(n,e){mf.set(n._key(),e)}function XD(n){return Ts(n._redirectPersistence)}function WD(n){return df(GD,n.config.apiKey,n.name)}async function $D(n,e,t=!1){if(jn(n.app))return Promise.reject(gr(n));const s=gc(n),a=SA(s,e),c=await new QD(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=600*1e3;class JD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!AA(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(mi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZD&&this.cachedEventUids.clear(),this.cachedEventUids.has(O0(e))}saveEventToCache(e){this.cachedEventUids.add(O0(e)),this.lastProcessedEventTime=Date.now()}}function O0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function AA({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function e2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(n,e={}){return hl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i2=/^https?/;async function s2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t2(n);for(const t of e)try{if(r2(t))return}catch{}qi(n,"unauthorized-domain")}function r2(n){const e=Sg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!i2.test(t))return!1;if(n2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const a2=new pc(3e4,6e4);function M0(){const n=Vi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function o2(n){return new Promise((e,t)=>{function s(){M0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{M0(),t(mi(n,"network-request-failed"))},timeout:a2.get()})}if(Vi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Vi().gapi?.load)s();else{const a=uD("iframefcb");return Vi()[a]=()=>{gapi.load?s():t(mi(n,"network-request-failed"))},oD(`${lD()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw pf=null,e})}let pf=null;function l2(n){return pf=pf||o2(n),pf}/**
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
 */const u2=new pc(5e3,15e3),c2="__/auth/iframe",h2="emulator/auth/iframe",f2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m2(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?m_(e,h2):`https://${n.config.authDomain}/${c2}`,s={apiKey:e.apiKey,appName:n.name,v:za},a=d2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${cl(s).slice(1)}`}async function p2(n){const e=await l2(n),t=Vi().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:m2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=mi(n,"network-request-failed"),d=Vi().setTimeout(()=>{l(c)},u2.get());function p(){Vi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const g2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_2=500,y2=600,v2="_blank",E2="http://localhost";class k0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T2(n,e,t,s=_2,a=y2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...g2,width:s.toString(),height:a.toString(),top:l,left:c},g=pn().toLowerCase();t&&(d=sA(g)?v2:t),nA(g)&&(e=e||E2,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[x,j])=>`${w}${x}=${j},`,"");if(JN(g)&&d!=="_self")return S2(e||"",d),new k0(null);const T=window.open(e||"",d,v);Se(T,n,"popup-blocked");try{T.focus()}catch{}return new k0(T)}function S2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const w2="__/auth/handler",A2="emulator/auth/handler",b2=encodeURIComponent("fac");async function P0(n,e,t,s,a,l){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:za,eventId:a};if(e instanceof y_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Cf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof _c){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${b2}=${encodeURIComponent(p)}`:"";return`${C2(n)}?${cl(d).slice(1)}${g}`}function C2({config:n}){return n.emulator?m_(n,A2):`https://${n.authDomain}/${w2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="webStorageSupport";class R2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_A,this._completeRedirectFn=$D,this._overrideRedirectResult=KD}async _openPopup(e,t,s,a){Cs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await P0(e,t,s,Sg(),a);return T2(e,l,v_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await P0(e,t,s,Sg(),a);return DD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Cs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await p2(e),s=new JD(e);return t.register("authEvent",a=>(Se(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ng,{type:ng},a=>{const l=a?.[0]?.[ng];l!==void 0&&t(!!l),qi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=s2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uA()||iA()||g_()}}const I2=R2;var V0="@firebase/auth",L0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x2(n){Na(new Sr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cA(n)},g=new rD(s,a,l,p);return hD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Na(new Sr("auth-internal",e=>{const t=gc(e.getProvider("auth").getImmediate());return(s=>new N2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pi(V0,L0,D2(n)),Pi(V0,L0,"esm2020")}/**
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
 */const O2=300,M2=zw("authIdTokenMaxAge")||O2;let U0=null;const k2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>M2)return;const a=t?.token;U0!==a&&(U0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function P2(n=h_()){const e=cd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cD(n,{popupRedirectResolver:I2,persistence:[zD,RD,_A]}),s=zw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=k2(l.toString());SD(t,c,()=>c(t.currentUser)),TD(t,d=>c(d))}}const a=Vw("auth");return a&&fD(t,`http://${a}`),t}function V2(){return document.getElementsByTagName("head")?.[0]??document}aD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=mi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",V2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x2("Browser");var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,bA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,b){function R(){}R.prototype=b.prototype,N.D=b.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(M,k,P){for(var I=Array(arguments.length-2),Zt=2;Zt<arguments.length;Zt++)I[Zt-2]=arguments[Zt];return b.prototype[k].apply(M,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,b,R){R||(R=0);var M=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)M[k]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(k=0;16>k;++k)M[k]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=N.g[0],R=N.g[1],k=N.g[2];var P=N.g[3],I=b+(P^R&(k^P))+M[0]+3614090360&4294967295;b=R+(I<<7&4294967295|I>>>25),I=P+(k^b&(R^k))+M[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=k+(R^P&(b^R))+M[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=R+(b^k&(P^b))+M[3]+3250441966&4294967295,R=k+(I<<22&4294967295|I>>>10),I=b+(P^R&(k^P))+M[4]+4118548399&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(k^b&(R^k))+M[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=k+(R^P&(b^R))+M[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=R+(b^k&(P^b))+M[7]+4249261313&4294967295,R=k+(I<<22&4294967295|I>>>10),I=b+(P^R&(k^P))+M[8]+1770035416&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(k^b&(R^k))+M[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=k+(R^P&(b^R))+M[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=R+(b^k&(P^b))+M[11]+2304563134&4294967295,R=k+(I<<22&4294967295|I>>>10),I=b+(P^R&(k^P))+M[12]+1804603682&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(k^b&(R^k))+M[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=k+(R^P&(b^R))+M[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=R+(b^k&(P^b))+M[15]+1236535329&4294967295,R=k+(I<<22&4294967295|I>>>10),I=b+(k^P&(R^k))+M[1]+4129170786&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^k&(b^R))+M[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=k+(b^R&(P^b))+M[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(k^P))+M[0]+3921069994&4294967295,R=k+(I<<20&4294967295|I>>>12),I=b+(k^P&(R^k))+M[5]+3593408605&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^k&(b^R))+M[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=k+(b^R&(P^b))+M[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(k^P))+M[4]+3889429448&4294967295,R=k+(I<<20&4294967295|I>>>12),I=b+(k^P&(R^k))+M[9]+568446438&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^k&(b^R))+M[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=k+(b^R&(P^b))+M[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(k^P))+M[8]+1163531501&4294967295,R=k+(I<<20&4294967295|I>>>12),I=b+(k^P&(R^k))+M[13]+2850285829&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^k&(b^R))+M[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=k+(b^R&(P^b))+M[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(k^P))+M[12]+2368359562&4294967295,R=k+(I<<20&4294967295|I>>>12),I=b+(R^k^P)+M[5]+4294588738&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^k)+M[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=k+(P^b^R)+M[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=R+(k^P^b)+M[14]+4259657740&4294967295,R=k+(I<<23&4294967295|I>>>9),I=b+(R^k^P)+M[1]+2763975236&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^k)+M[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=k+(P^b^R)+M[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=R+(k^P^b)+M[10]+3200236656&4294967295,R=k+(I<<23&4294967295|I>>>9),I=b+(R^k^P)+M[13]+681279174&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^k)+M[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=k+(P^b^R)+M[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=R+(k^P^b)+M[6]+76029189&4294967295,R=k+(I<<23&4294967295|I>>>9),I=b+(R^k^P)+M[9]+3654602809&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^k)+M[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=k+(P^b^R)+M[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=R+(k^P^b)+M[2]+3299628645&4294967295,R=k+(I<<23&4294967295|I>>>9),I=b+(k^(R|~P))+M[0]+4096336452&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~k))+M[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=k+(b^(P|~R))+M[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=R+(P^(k|~b))+M[5]+4237533241&4294967295,R=k+(I<<21&4294967295|I>>>11),I=b+(k^(R|~P))+M[12]+1700485571&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~k))+M[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=k+(b^(P|~R))+M[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=R+(P^(k|~b))+M[1]+2240044497&4294967295,R=k+(I<<21&4294967295|I>>>11),I=b+(k^(R|~P))+M[8]+1873313359&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~k))+M[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=k+(b^(P|~R))+M[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=R+(P^(k|~b))+M[13]+1309151649&4294967295,R=k+(I<<21&4294967295|I>>>11),I=b+(k^(R|~P))+M[4]+4149444226&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~k))+M[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=k+(b^(P|~R))+M[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=R+(P^(k|~b))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+k&4294967295,N.g[3]=N.g[3]+P&4294967295}s.prototype.u=function(N,b){b===void 0&&(b=N.length);for(var R=b-this.blockSize,M=this.B,k=this.h,P=0;P<b;){if(k==0)for(;P<=R;)a(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<b;)if(M[k++]=N.charCodeAt(P++),k==this.blockSize){a(this,M),k=0;break}}else for(;P<b;)if(M[k++]=N[P++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=b},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;var R=8*this.o;for(b=N.length-8;b<N.length;++b)N[b]=R&255,R/=256;for(this.u(N),N=Array(16),b=R=0;4>b;++b)for(var M=0;32>M;M+=8)N[R++]=this.g[b]>>>M&255;return N};function l(N,b){var R=d;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=b(N)}function c(N,b){this.h=b;for(var R=[],M=!0,k=N.length-1;0<=k;k--){var P=N[k]|0;M&&P==b||(R[k]=P,M=!1)}this.g=R}var d={};function p(N){return-128<=N&&128>N?l(N,function(b){return new c([b|0],0>b?-1:0)}):new c([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return K(g(-N));for(var b=[],R=1,M=0;N>=R;M++)b[M]=N/R|0,R*=4294967296;return new c(b,0)}function v(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return K(v(N.substring(1),b));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(b,8)),M=T,k=0;k<N.length;k+=8){var P=Math.min(8,N.length-k),I=parseInt(N.substring(k,k+P),b);8>P?(P=g(Math.pow(b,P)),M=M.j(P).add(g(I))):(M=M.j(R),M=M.add(g(I)))}return M}var T=p(0),w=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(Y(this))return-K(this).m();for(var N=0,b=1,R=0;R<this.g.length;R++){var M=this.i(R);N+=(0<=M?M:4294967296+M)*b,b*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(j(this))return"0";if(Y(this))return"-"+K(this).toString(N);for(var b=g(Math.pow(N,6)),R=this,M="";;){var k=Ue(R,b).g;R=ce(R,k.j(b));var P=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=k,j(R))return P+M;for(;6>P.length;)P="0"+P;M=P+M}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function j(N){if(N.h!=0)return!1;for(var b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function Y(N){return N.h==-1}n.l=function(N){return N=ce(this,N),Y(N)?-1:j(N)?0:1};function K(N){for(var b=N.g.length,R=[],M=0;M<b;M++)R[M]=~N.g[M];return new c(R,~N.h).add(w)}n.abs=function(){return Y(this)?K(this):this},n.add=function(N){for(var b=Math.max(this.g.length,N.g.length),R=[],M=0,k=0;k<=b;k++){var P=M+(this.i(k)&65535)+(N.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(N.i(k)>>>16);M=I>>>16,P&=65535,I&=65535,R[k]=I<<16|P}return new c(R,R[R.length-1]&-2147483648?-1:0)};function ce(N,b){return N.add(K(b))}n.j=function(N){if(j(this)||j(N))return T;if(Y(this))return Y(N)?K(this).j(K(N)):K(K(this).j(N));if(Y(N))return K(this.j(K(N)));if(0>this.l(x)&&0>N.l(x))return g(this.m()*N.m());for(var b=this.g.length+N.g.length,R=[],M=0;M<2*b;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<N.g.length;k++){var P=this.i(M)>>>16,I=this.i(M)&65535,Zt=N.i(k)>>>16,gt=N.i(k)&65535;R[2*M+2*k]+=I*gt,oe(R,2*M+2*k),R[2*M+2*k+1]+=P*gt,oe(R,2*M+2*k+1),R[2*M+2*k+1]+=I*Zt,oe(R,2*M+2*k+1),R[2*M+2*k+2]+=P*Zt,oe(R,2*M+2*k+2)}for(M=0;M<b;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=b;M<2*b;M++)R[M]=0;return new c(R,0)};function oe(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function ue(N,b){this.g=N,this.h=b}function Ue(N,b){if(j(b))throw Error("division by zero");if(j(N))return new ue(T,T);if(Y(N))return b=Ue(K(N),b),new ue(K(b.g),K(b.h));if(Y(b))return b=Ue(N,K(b)),new ue(K(b.g),b.h);if(30<N.g.length){if(Y(N)||Y(b))throw Error("slowDivide_ only works with positive integers.");for(var R=w,M=b;0>=M.l(N);)R=ve(R),M=ve(M);var k=ze(R,1),P=ze(M,1);for(M=ze(M,2),R=ze(R,2);!j(M);){var I=P.add(M);0>=I.l(N)&&(k=k.add(R),P=I),M=ze(M,1),R=ze(R,1)}return b=ce(N,k.j(b)),new ue(k,b)}for(k=T;0<=N.l(b);){for(R=Math.max(1,Math.floor(N.m()/b.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),P=g(R),I=P.j(b);Y(I)||0<I.l(N);)R-=M,P=g(R),I=P.j(b);j(P)&&(P=w),k=k.add(P),N=ce(N,I)}return new ue(k,N)}n.A=function(N){return Ue(this,N).h},n.and=function(N){for(var b=Math.max(this.g.length,N.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)&N.i(M);return new c(R,this.h&N.h)},n.or=function(N){for(var b=Math.max(this.g.length,N.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)|N.i(M);return new c(R,this.h|N.h)},n.xor=function(N){for(var b=Math.max(this.g.length,N.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)^N.i(M);return new c(R,this.h^N.h)};function ve(N){for(var b=N.g.length+1,R=[],M=0;M<b;M++)R[M]=N.i(M)<<1|N.i(M-1)>>>31;return new c(R,N.h)}function ze(N,b){var R=b>>5;b%=32;for(var M=N.g.length-R,k=[],P=0;P<M;P++)k[P]=0<b?N.i(P+R)>>>b|N.i(P+R+1)<<32-b:N.i(P+R);return new c(k,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,bA=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,_r=c}).apply(typeof z0<"u"?z0:typeof self<"u"?self:typeof window<"u"?window:{});var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var CA,ku,RA,gf,bg,IA,NA,DA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof rf=="object"&&rf];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var U=h[A];if(!(U in y))break e;y=y[U]}h=h[h.length-1],A=y[h],_=_(A),_!=A&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,A=!1,U={next:function(){if(!A&&y<h.length){var H=y++;return{value:_(H,h[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function w(h,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function x(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function j(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(A,U,H){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return _.prototype[U].apply(A,te)}}function Y(h){const _=h.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=h[A];return y}return[]}function K(h,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(p(A)){const U=h.length||0,H=A.length||0;h.length=U+H;for(let te=0;te<H;te++)h[U+te]=A[te]}else h.push(A)}}class ce{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function oe(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Ue(h){return Ue[" "](h),h}Ue[" "]=function(){};var ve=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function ze(h,_,y){for(const A in h)_.call(y,h[A],A,h)}function N(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function b(h){const _={};for(const y in h)_[y]=h[y];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(y in A)h[y]=A[y];for(let H=0;H<R.length;H++)y=R[H],Object.prototype.hasOwnProperty.call(A,y)&&(h[y]=A[y])}}function k(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function P(h){d.setTimeout(()=>{throw h},0)}function I(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Zt{constructor(){this.h=this.g=null}add(_,y){const A=gt.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var gt=new ce(()=>new G,h=>h.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,fe=!1,Ge=new Zt,D=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(J)}};var J=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(y){P(y)}var _=gt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}fe=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var pe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function Ne(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ve){e:{try{Ue(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ne.aa.h.call(this)}}j(Ne,ee);var we={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),at=0;function _i(h,_,y,A,U){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=U,this.key=++at,this.da=this.fa=!1}function ks(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Gi(h){this.src=h,this.g={},this.h=0}Gi.prototype.add=function(h,_,y,A,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var te=Lr(h,_,A,U);return-1<te?(_=h[te],y||(_.fa=!1)):(_=new _i(_,this.src,H,!!A,U),_.fa=y,h.push(_)),_};function Vr(h,_){var y=_.type;if(y in h.g){var A=h.g[y],U=Array.prototype.indexOf.call(A,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(A,U,1),H&&(ks(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Lr(h,_,y,A){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==A)return U}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),El={};function Mc(h,_,y,A,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Mc(h,_[H],y,A,U);return null}return y=kc(y),h&&h[Bt]?h.K(_,y,g(A)?!!A.capture:!1,U):Fn(h,_,y,!1,A,U)}function Fn(h,_,y,A,U,H){if(!_)throw Error("Invalid event type");var te=g(U)?!!U.capture:!!U,je=Ga(h);if(je||(h[Ur]=je=new Gi(h)),y=je.add(_,y,A,te,H),y.proxy)return y;if(A=Hd(),y.proxy=A,A.src=h,A.listener=y,h.addEventListener)pe||(U=te),U===void 0&&(U=!1),h.addEventListener(_.toString(),A,U);else if(h.attachEvent)h.attachEvent(zr(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Hd(){function h(y){return _.call(h.src,h.listener,y)}const _=Gd;return h}function Tl(h,_,y,A,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)Tl(h,_[H],y,A,U);else A=g(A)?!!A.capture:!!A,y=kc(y),h&&h[Bt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],y=Lr(H,y,A,U),-1<y&&(ks(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ga(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Lr(_,y,A,U)),(y=-1<h?_[h]:null)&&Ha(y))}function Ha(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Bt])Vr(_.i,h);else{var y=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(y,A,h.capture):_.detachEvent?_.detachEvent(zr(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=Ga(_))?(Vr(y,h),y.h==0&&(y.src=null,_[Ur]=null)):ks(h)}}}function zr(h){return h in El?El[h]:El[h]="on"+h}function Gd(h,_){if(h.da)h=!0;else{_=new Ne(_,this);var y=h.listener,A=h.ha||h.src;h.fa&&Ha(h),h=y.call(A,_)}return h}function Ga(h){return h=h[Ur],h instanceof Gi?h:null}var Sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function kc(h){return typeof h=="function"?h:(h[Sl]||(h[Sl]=function(_){return h.handleEvent(_)}),h[Sl])}function _t(){se.call(this),this.i=new Gi(this),this.M=this,this.F=null}j(_t,se),_t.prototype[Bt]=!0,_t.prototype.removeEventListener=function(h,_,y,A){Tl(this,h,_,y,A)};function We(h,_){var y,A=h.F;if(A)for(y=[];A;A=A.F)y.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var U=_;_=new ee(A,h),M(_,U)}if(U=!0,y)for(var H=y.length-1;0<=H;H--){var te=_.g=y[H];U=xn(te,A,!0,_)&&U}if(te=_.g=h,U=xn(te,A,!0,_)&&U,U=xn(te,A,!1,_)&&U,y)for(H=0;H<y.length;H++)te=_.g=y[H],U=xn(te,A,!1,_)&&U}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],A=0;A<y.length;A++)ks(y[A]);delete h.g[_],h.h--}}this.F=null},_t.prototype.K=function(h,_,y,A){return this.i.add(String(h),_,!1,y,A)},_t.prototype.L=function(h,_,y,A){return this.i.add(String(h),_,!0,y,A)};function xn(h,_,y,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var te=_[H];if(te&&!te.da&&te.capture==y){var je=te.listener,Lt=te.ha||te.src;te.fa&&Vr(h.i,te),U=je.call(Lt,A)!==!1&&U}}return U&&!A.defaultPrevented}function ln(h,_,y){if(typeof h=="function")y&&(h=w(h,y));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Pc(h){h.g=ln(()=>{h.g=null,h.i&&(h.i=!1,Pc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Qd extends se{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Pc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(h){se.call(this),this.h=h,this.g={}}j(jr,se);var qr=[];function Br(h){ze(h.g,function(_,y){this.g.hasOwnProperty(y)&&Ha(_)},h),h.g={}}jr.prototype.N=function(){jr.aa.N.call(this),Br(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=d.JSON.stringify,Qa=d.JSON.parse,Fr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function wl(){}wl.prototype.h=null;function Al(h){return h.h||(h.h=h.i())}function bl(){}var Qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){ee.call(this,"d")}j(Yi,ee);function Cl(){ee.call(this,"c")}j(Cl,ee);var yi={},Rl=null;function Ps(){return Rl=Rl||new _t}yi.La="serverreachability";function Ya(h){ee.call(this,yi.La,h)}j(Ya,ee);function Vs(h){const _=Ps();We(_,new Ya(_))}yi.STAT_EVENT="statevent";function Vc(h,_){ee.call(this,yi.STAT_EVENT,h),this.stat=_}j(Vc,ee);function ft(h){const _=Ps();We(_,new Vc(_,h))}yi.Ma="timingevent";function Vt(h,_){ee.call(this,yi.Ma,h),this.size=_}j(Vt,ee);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function Il(h,_,y,A,U,H){h.info(function(){if(h.g)if(H)for(var te="",je=H.split("&"),Lt=0;Lt<je.length;Lt++){var qe=je[Lt].split("=");if(1<qe.length){var Ht=qe[0];qe=qe[1];var Ut=Ht.split("_");te=2<=Ut.length&&Ut[1]=="type"?te+(Ht+"="+qe+"&"):te+(Ht+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+_+`
`+y+`
`+te})}function Yd(h,_,y,A,U,H,te){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+_+`
`+y+`
`+H+" "+te})}function Ls(h,_,y,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Hr(h,y)+(A?" "+A:"")})}function Lc(h,_){h.info(function(){return"TIMEOUT: "+_})}Hn.prototype.info=function(){};function Hr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var A=y[h];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return ri(y)}catch{return _}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vi;function Ei(){}j(Ei,wl),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},vi=new Ei;function _n(h,_,y,A){this.j=h,this.i=_,this.l=y,this.R=A||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Nl={},Ka={};function ai(h,_,y){h.L=1,h.v=Xr(On(_)),h.m=y,h.P=!0,Xi(h,null)}function Xi(h,_){h.F=Date.now(),Gr(h),h.A=On(h.v);var y=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Pl(y.i,"t",A),h.C=0,y=h.j.J,h.h=new Tt,h.g=Jc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Qd(w(h.Y,h,h.g),h.O)),_=h.U,y=h.g,A=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(qr[0]=U.toString()),U=qr);for(var H=0;H<U.length;H++){var te=Mc(y,U[H],A||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Vs(),Il(h.i,h.u,h.A,h.l,h.R,h.m)}_n.prototype.ca=function(h){h=h.target;const _=this.M;_&&Kn(h)==3?_.j():this.Y(h)},_n.prototype.Y=function(h){try{if(h==this.g)e:{const Ut=Kn(this.g);var _=this.g.Ba();const is=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Gc(this.g)))){this.J||Ut!=4||_==7||(_==8||0>=is?Vs(3):Vs(2)),zs(this);var y=this.g.Z();this.X=y;t:if(Uc(this)){var A=Gc(this.g);h="";var U=A.length,H=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Ti(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(H&&_==U-1)});A.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Yd(this.i,this.u,this.A,this.l,this.R,Ut,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Lt=this.g;if((je=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(je)){var qe=je;break t}}qe=null}if(y=qe)Ls(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qr(this,y);else{this.o=!1,this.s=3,ft(12),Jt(this),Ti(this);break e}}if(this.P){y=!0;let en;for(;!this.J&&this.C<te.length;)if(en=zc(this,te),en==Ka){Ut==4&&(this.s=4,ft(14),y=!1),Ls(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Nl){this.s=4,ft(15),Ls(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Ls(this.i,this.l,en,null),Qr(this,en);if(Uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||te.length!=0||this.h.h||(this.s=1,ft(16),y=!1),this.o=this.o&&y,!y)Ls(this.i,this.l,te,"[Invalid Chunked Response]"),Jt(this),Ti(this);else if(0<te.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ia(Ht),Ht.M=!0,ft(11))}}else Ls(this.i,this.l,te,null),Qr(this,te);Ut==4&&Jt(this),this.o&&!this.J&&(Ut==4?Wc(this.j,this):(this.o=!1,Gr(this)))}else Zd(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Jt(this),Ti(this)}}}catch{}finally{}};function Uc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function zc(h,_){var y=h.C,A=_.indexOf(`
`,y);return A==-1?Ka:(y=Number(_.substring(y,A)),isNaN(y)?Nl:(A+=1,A+y>_.length?Ka:(_=_.slice(A,A+y),h.C=A+y,_)))}_n.prototype.cancel=function(){this.J=!0,Jt(this)};function Gr(h){h.S=Date.now()+h.I,jc(h,h.I)}function jc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(w(h.ba,h),_)}function zs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}_n.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lc(this.i,this.A),this.L!=2&&(Vs(),ft(17)),Jt(this),this.s=2,Ti(this)):jc(this,this.S-h)};function Ti(h){h.j.G==0||h.J||Wc(h.j,h)}function Jt(h){zs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Br(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Qr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Dl(y.h,h))){if(!h.K&&Dl(y.h,h)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)ao(y),so(y);else break e;jl(y),ft(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ct(w(y.Za,y),6e3));if(1>=Wa(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ns(y,11)}else if((h.K||y.g==h)&&ao(y),!oe(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let qe=U[_];if(y.T=qe[0],qe=qe[1],y.G==2)if(qe[0]=="c"){y.K=qe[1],y.ia=qe[2];const Ht=qe[3];Ht!=null&&(y.la=Ht,y.j.info("VER="+y.la));const Ut=qe[4];Ut!=null&&(y.Aa=Ut,y.j.info("SVER="+y.Aa));const is=qe[5];is!=null&&typeof is=="number"&&0<is&&(A=1.5*is,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const en=h.g;if(en){const Ii=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var H=A.h;H.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&($a(H,H.h),H.h=null))}if(A.D){const Bl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Bl&&(A.ya=Bl,et(A.I,A.D,Bl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var te=h;if(A.qa=Zc(A,A.J?A.ia:null,A.W),te.K){yn(A.h,te);var je=te,Lt=A.L;Lt&&(je.I=Lt),je.B&&(zs(je),Gr(je)),A.g=te}else Kc(A);0<y.i.length&&ro(y)}else qe[0]!="stop"&&qe[0]!="close"||ns(y,7);else y.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?ns(y,7):Ul(y):qe[0]!="noop"&&y.l&&y.l.ta(qe),y.v=0)}}Vs(4)}catch{}}var qc=class{constructor(h,_){this.g=h,this.map=_}};function Wi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Wa(h){return h.h?1:h.g?h.g.size:0}function Dl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function $a(h,_){h.g?h.g.add(_):h.h=_}function yn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Wi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function xl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return Y(h.i)}function Kd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,A=0;A<y;A++)_.push(h[A]);return _}_=[],y=0;for(A in h)_[y++]=h[A];return _}function Za(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const A in h)_[y++]=A;return _}}}function Ol(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=Za(h),A=Kd(h),U=A.length,H=0;H<U;H++)_.call(void 0,A[H],y&&y[H],h)}var Yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var A=h[y].indexOf("="),U=null;if(0<=A){var H=h[y].substring(0,A);U=h[y].substring(A+1)}else H=h[y];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Rt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Rt){this.h=h.h,Kr(this,h.j),this.o=h.o,this.g=h.g,js(this,h.s),this.l=h.l;var _=h.i,y=new Zi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),$i(this,y),this.m=h.m}else h&&(_=String(h).match(Yr))?(this.h=!1,Kr(this,_[1]||"",!0),this.o=Gn(_[2]||""),this.g=Gn(_[3]||"",!0),js(this,_[4]),this.l=Gn(_[5]||"",!0),$i(this,_[6]||"",!0),this.m=Gn(_[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}Rt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Wr(_,Ml,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Wr(_,Ml,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Wr(y,y.charAt(0)=="/"?Wd:kl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Wr(y,Ja)),h.join("")};function On(h){return new Rt(h)}function Kr(h,_,y){h.j=y?Gn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function js(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function $i(h,_,y){_ instanceof Zi?(h.i=_,Fc(h.i,h.h)):(y||(_=Wr(_,$d)),h.i=new Zi(_,h.h))}function et(h,_,y){h.i.set(_,y)}function Xr(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Gn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Wr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Bc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Bc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ml=/[#\/\?@]/g,kl=/[#\?:]/g,Wd=/[#\?]/g,$d=/[#\?@]/g,Ja=/#/g;function Zi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Qn(h){h.g||(h.g=new Map,h.h=0,h.i&&Xd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=Zi.prototype,n.add=function(h,_){Qn(this),this.i=null,h=Si(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Ji(h,_){Qn(h),_=Si(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function es(h,_){return Qn(h),_=Si(h,_),h.g.has(_)}n.forEach=function(h,_){Qn(this),this.g.forEach(function(y,A){y.forEach(function(U){h.call(_,U,A,this)},this)},this)},n.na=function(){Qn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const U=h[A];for(let H=0;H<U.length;H++)y.push(_[A])}return y},n.V=function(h){Qn(this);let _=[];if(typeof h=="string")es(this,h)&&(_=_.concat(this.g.get(Si(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return Qn(this),this.i=null,h=Si(this,h),es(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Pl(h,_,y){Ji(h,_),0<y.length&&(h.i=null,h.g.set(Si(h,_),Y(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const H=encodeURIComponent(String(A)),te=this.V(A);for(A=0;A<te.length;A++){var U=H;te[A]!==""&&(U+="="+encodeURIComponent(String(te[A]))),h.push(U)}}return this.i=h.join("&")};function Si(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Fc(h,_){_&&!h.j&&(Qn(h),h.i=null,h.g.forEach(function(y,A){var U=A.toLowerCase();A!=U&&(Ji(this,A),Pl(this,U,y))},h)),h.j=_}function $r(h,_){const y=new Hn;if(d.Image){const A=new Image;A.onload=x(Yn,y,"TestLoadImage: loaded",!0,_,A),A.onerror=x(Yn,y,"TestLoadImage: error",!1,_,A),A.onabort=x(Yn,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=x(Yn,y,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function oi(h,_){const y=new Hn,A=new AbortController,U=setTimeout(()=>{A.abort(),Yn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(H=>{clearTimeout(U),H.ok?Yn(y,"TestPingServer: ok",!0,_):Yn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Yn(y,"TestPingServer: error",!1,_)})}function Yn(h,_,y,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(y)}catch{}}function Zr(){this.g=new Fr}function wi(h,_,y){const A=y||"";try{Ol(h,function(U,H){let te=U;g(U)&&(te=ri(U)),_.push(A+H+"="+encodeURIComponent(te))})}catch(U){throw _.push(A+"type="+encodeURIComponent("_badmap")),U}}function qs(h){this.l=h.Ub||null,this.j=h.eb||!1}j(qs,wl),qs.prototype.g=function(){return new ts(this.l,this.j)},qs.prototype.i=(function(h){return function(){return h}})({});function ts(h,_){_t.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(ts,_t),n=ts.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,bi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ai(this):bi(this),this.readyState==3&&Vl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ai(this))},n.Qa=function(h){this.g&&(this.response=h,Ai(this))},n.ga=function(){this.g&&Ai(this)};function Ai(h){h.readyState=4,h.l=null,h.j=null,h.v=null,bi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function bi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ll(h){let _="";return ze(h,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function Ft(h,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=Ll(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):et(h,_,y))}function Ke(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ke,_t);var eo=/^https?$/i,Jr=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vi.g(),this.v=this.o?Al(this.o):Al(vi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Hc(this,H);return}if(h=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)y.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())y.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Jr,_,void 0))||A||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of y)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Hc(this,H)}};function Hc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,to(h),Ci(h)}function to(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?no(this):this.bb())},n.bb=function(){no(this)};function no(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Kn(h)!=4||h.Z()!=2)){if(h.u&&Kn(h)==4)ln(h.Ea,0,h);else if(We(h,"readystatechange"),Kn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=te===0){var U=String(h.D).match(Yr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),A=!eo.test(U?U.toLowerCase():"")}y=A}if(y)We(h,"complete"),We(h,"success");else{h.m=6;try{var H=2<Kn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",to(h)}}finally{Ci(h)}}}}function Ci(h,_){if(h.g){ea(h);const y=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{y.onreadystatechange=A}catch{}}}function ea(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Kn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Qa(_)}};function Gc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Zd(h){const _={};h=(h.g&&2<=Kn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(oe(h[A]))continue;var y=k(h[A]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[U]||[];_[U]=H,H.push(y)}N(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function io(h){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,h),this.cb=ta("retryDelaySeedMs",1e4,h),this.Wa=ta("forwardChannelMaxRetries",2,h),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(h&&h.concurrentRequestLimit),this.Da=new Zr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=io.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,A){ft(0),this.W=h,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Zc(this,null,this.W),ro(this)};function Ul(h){if(Qc(h),h.G==3){var _=h.U++,y=On(h.I);if(et(y,"SID",h.K),et(y,"RID",_),et(y,"TYPE","terminate"),na(h,y),_=new _n(h,h.j,_),_.L=2,_.v=Xr(On(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Jc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Gr(_)}$c(h)}function so(h){h.g&&(ia(h),h.g.cancel(),h.g=null)}function Qc(h){so(h),h.u&&(d.clearTimeout(h.u),h.u=null),ao(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function ro(h){if(!Xa(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||D(),fe||(ie(),fe=!0),Ge.add(_,h),h.B=0}}function Jd(h,_){return Wa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(w(h.Ga,h,_),ql(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new _n(this,this.j,h);let H=this.o;if(this.S&&(H?(H=b(H),M(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Yc(this,U,_),y=On(this.I),et(y,"RID",h),et(y,"CVER",22),this.D&&et(y,"X-HTTP-Session-Id",this.D),na(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(Ll(H)))+"&"+_:this.m&&Ft(y,this.m,H)),$a(this.h,U),this.Ua&&et(y,"TYPE","init"),this.P?(et(y,"$req",_),et(y,"SID","null"),U.T=!0,ai(U,y,null)):ai(U,y,_),this.G=2}}else this.G==3&&(h?zl(this,h):this.i.length==0||Xa(this.h)||zl(this))};function zl(h,_){var y;_?y=_.l:y=h.U++;const A=On(h.I);et(A,"SID",h.K),et(A,"RID",y),et(A,"AID",h.T),na(h,A),h.m&&h.o&&Ft(A,h.m,h.o),y=new _n(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Yc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),$a(h.h,y),ai(y,A,_)}function na(h,_){h.H&&ze(h.H,function(y,A){et(_,A,y)}),h.l&&Ol({},function(y,A){et(_,A,y)})}function Yc(h,_,y){y=Math.min(h.i.length,y);var A=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const te=["count="+y];H==-1?0<y?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let je=!0;for(let Lt=0;Lt<y;Lt++){let qe=U[Lt].g;const Ht=U[Lt].map;if(qe-=H,0>qe)H=Math.max(0,U[Lt].g-100),je=!1;else try{wi(Ht,te,"req"+qe+"_")}catch{A&&A(Ht)}}if(je){A=te.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,A}function Kc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||D(),fe||(ie(),fe=!0),Ge.add(_,h),h.v=0}}function jl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(w(h.Fa,h),ql(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),so(this),Xc(this))};function ia(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Xc(h){h.g=new _n(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=On(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),na(h,_),h.m&&h.o&&Ft(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Xr(On(_)),y.m=null,y.P=!0,Xi(y,h)}n.Za=function(){this.C!=null&&(this.C=null,so(this),jl(this),ft(19))};function ao(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Wc(h,_){var y=null;if(h.g==_){ao(h),ia(h),h.g=null;var A=2}else if(Dl(h.h,_))y=_.D,yn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;A=Ps(),We(A,new Vt(A,y)),ro(h)}else Kc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(A==1&&Jd(h,_)||A==2&&jl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),U){case 1:ns(h,5);break;case 4:ns(h,10);break;case 3:ns(h,6);break;default:ns(h,2)}}}function ql(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function ns(h,_){if(h.j.info("Error code "+_),_==2){var y=w(h.fb,h),A=h.Xa;const U=!A;A=new Rt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Kr(A,"https"),Xr(A),U?$r(A.toString(),y):oi(A.toString(),y)}else ft(2);h.G=0,h.l&&h.l.sa(_),$c(h),Qc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function $c(h){if(h.G=0,h.ka=[],h.l){const _=xl(h.h);(_.length!=0||h.i.length!=0)&&(K(h.ka,_),K(h.ka,h.i),h.h.i.length=0,Y(h.i),h.i.length=0),h.l.ra()}}function Zc(h,_,y){var A=y instanceof Rt?On(y):new Rt(y);if(A.g!="")_&&(A.g=_+"."+A.g),js(A,A.s);else{var U=d.location;A=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new Rt(null);A&&Kr(H,A),_&&(H.g=_),U&&js(H,U),y&&(H.l=y),A=H}return y=h.D,_=h.ya,y&&_&&et(A,y,_),et(A,"VER",h.la),na(h,A),A}function Jc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new qs({eb:y})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}n=eh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oo(){}oo.prototype.g=function(h,_){return new vn(h,_)};function vn(h,_){_t.call(this),this.g=new io(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!oe(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!oe(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ri(this)}j(vn,_t),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Ul(this.g)},vn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ri(h),h=y);_.i.push(new qc(_.Ya++,h)),_.G==3&&ro(_)},vn.prototype.N=function(){this.g.l=null,delete this.j,Ul(this.g),delete this.g,vn.aa.N.call(this)};function th(h){Yi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}j(th,Yi);function nh(){Cl.call(this),this.status=1}j(nh,Cl);function Ri(h){this.g=h}j(Ri,eh),Ri.prototype.ua=function(){We(this.g,"a")},Ri.prototype.ta=function(h){We(this.g,new th(h))},Ri.prototype.sa=function(h){We(this.g,new nh)},Ri.prototype.ra=function(){We(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,DA=function(){return new oo},NA=function(){return Ps()},IA=yi,bg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,gf=Us,Ki.COMPLETE="complete",RA=Ki,bl.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",_t.prototype.listen=_t.prototype.K,ku=bl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,CA=Ke}).apply(typeof rf<"u"?rf:typeof self<"u"?self:typeof window<"u"?window:{});const j0="@firebase/firestore",q0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new ud("@firebase/firestore");function Uo(){return Oa.logLevel}function ae(n,...e){if(Oa.logLevel<=Pe.DEBUG){const t=e.map(T_);Oa.debug(`Firestore (${fl}): ${n}`,...t)}}function Rs(n,...e){if(Oa.logLevel<=Pe.ERROR){const t=e.map(T_);Oa.error(`Firestore (${fl}): ${n}`,...t)}}function Jo(n,...e){if(Oa.logLevel<=Pe.WARN){const t=e.map(T_);Oa.warn(`Firestore (${fl}): ${n}`,...t)}}function T_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,xA(n,s,t)}function xA(n,e,t){let s=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rs(s),new Error(s)}function Xe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||xA(e,a,s)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Os{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(fn.UNAUTHENTICATED)))}shutdown(){}}class U2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class z2{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ws,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ws)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new OA(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class j2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class q2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new j2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(fn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class B0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new B0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new B0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=F2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ve(n,e){return n<e?-1:n>e?1:0}function Cg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return ig(a)===ig(l)?Ve(a,l):ig(a)?1:-1}return Ve(n.length,e.length)}const H2=55296,G2=57343;function ig(n){const e=n.charCodeAt(0);return e>=H2&&e<=G2}function el(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="__name__";class ki{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=ki.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ve(e.length,t.length)}static compareSegments(e,t){const s=ki.isNumericId(e),a=ki.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?ki.extractNumericId(e).compare(ki.extractNumericId(t)):Cg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class lt extends ki{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const Q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends ki{construct(e,t,s){return new an(e,t,s)}static isValidIdentifier(e){return Q2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===F0}static keyField(){return new an([F0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new re(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new re(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new re(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(t)}static emptyPath(){return new an([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(lt.fromString(e))}static fromName(e){return new de(lt.fromString(e).popFirst(5))}static empty(){return new de(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n,e,t){if(!t)throw new re(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Y2(n,e,t,s){if(e===!0&&s===!0)throw new re(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function H0(n){if(!de.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function G0(n){if(de.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kA(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function md(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye(12329,{type:typeof n})}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=md(n);throw new re(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function kt(n,e){const t={typeString:n};return e&&(t.value=e),t}function vc(n,e){if(!kA(n))throw new re(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=-62135596800,Y0=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Y0);return new ht(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Q0)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Y0}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vc(e,ht._jsonSchema))return new ht(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Q0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:kt("string",ht._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ht(0,0))}static max(){return new Ae(new ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zu=-1;function K2(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new ht(t+1,0):new ht(t,s));return new wr(a,de.empty(),e)}function X2(n){return new wr(n.readTime,n.key,Zu)}class wr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wr(Ae.min(),de.empty(),Zu)}static max(){return new wr(Ae.max(),de.empty(),Zu)}}function W2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==$2)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,s)=>{t(e)}))}static reject(e){return new Z(((t,s)=>{s(e)}))}static waitFor(e){return new Z(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next((a=>a?Z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new Z(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new Z(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function J2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ml(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class pd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=-1;function gd(n){return n==null}function Pf(n){return n===0&&1/n==-1/0}function ex(n){return typeof n=="number"&&Number.isInteger(n)&&!Pf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="";function tx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=K0(e)),e=nx(n.get(t),e);return K0(e)}function nx(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case PA:t+="";break;default:t+=l}}return t}function K0(n){return n+PA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function VA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class Rg{constructor(e,t){this.comparator=e,this.root=t||yr.EMPTY}insert(e,t){return new Rg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yr.BLACK,null,null))}remove(e){return new Rg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new af(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new af(this.root,e,this.comparator,!1)}getReverseIterator(){return new af(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new af(this.root,e,this.comparator,!0)}},af=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},yr=class _s{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??_s.RED,this.left=a??_s.EMPTY,this.right=l??_s.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new _s(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return _s.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return _s.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_s.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_s.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}};yr.EMPTY=null,yr.RED=!0,yr.BLACK=!1;yr.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new yr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new W0(this.data.getIterator())}getIteratorFrom(e){return new W0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qt(this.comparator);return t.data=e,t}}class W0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new qn([])}unionWith(e){let t=new qt(an.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return el(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class LA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new LA("Invalid base64 string: "+l):l}})(e);return new on(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const ix=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=ix.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function br(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="server_timestamp",zA="__type__",jA="__previous_value__",qA="__local_write_time__";function A_(n){return(n?.mapValue?.fields||{})[zA]?.stringValue===UA}function _d(n){const e=n.mapValue.fields[jA];return A_(e)?_d(e):e}function Ju(n){const e=Ar(n.mapValue.fields[qA].timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Vf="(default)";class ec{constructor(e,t){this.projectId=e,this.database=t||Vf}static empty(){return new ec("","")}get isDefaultDatabase(){return this.database===Vf}isEqual(e){return e instanceof ec&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="__type__",rx="__max__",of={mapValue:{}},FA="__vector__",Lf="value";function Cr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?A_(n)?4:ox(n)?9007199254740991:ax(n)?10:11:ye(28295,{value:n})}function Bi(n,e){if(n===e)return!0;const t=Cr(n);if(t!==Cr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ju(n).isEqual(Ju(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ar(a.timestampValue),d=Ar(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return br(a.bytesValue).isEqual(br(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Pf(c)===Pf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return el(n.arrayValue.values||[],e.arrayValue.values||[],Bi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(X0(c)!==X0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Bi(c[p],d[p])))return!1;return!0})(n,e);default:return ye(52216,{left:n})}}function tc(n,e){return(n.values||[]).find((t=>Bi(t,e)))!==void 0}function tl(n,e){if(n===e)return 0;const t=Cr(n),s=Cr(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return $0(n.timestampValue,e.timestampValue);case 4:return $0(Ju(n),Ju(e));case 5:return Cg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=br(l),p=br(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Ve(d[g],p[g]);if(v!==0)return v}return Ve(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Ve(At(l.latitude),At(c.latitude));return d!==0?d:Ve(At(l.longitude),At(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Z0(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Lf]?.arrayValue,v=p[Lf]?.arrayValue,T=Ve(g?.values?.length||0,v?.values?.length||0);return T!==0?T:Z0(g,v)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===of.mapValue&&c===of.mapValue)return 0;if(l===of.mapValue)return 1;if(c===of.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=Cg(p[T],v[T]);if(w!==0)return w;const x=tl(d[p[T]],g[v[T]]);if(x!==0)return x}return Ve(p.length,v.length)})(n.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function $0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=Ar(n),s=Ar(e),a=Ve(t.seconds,s.seconds);return a!==0?a:Ve(t.nanos,s.nanos)}function Z0(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=tl(t[a],s[a]);if(l)return l}return Ve(t.length,s.length)}function nl(n){return Ig(n)}function Ig(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ar(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return br(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return de.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Ig(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Ig(t.fields[c])}`;return a+"}"})(n.mapValue):ye(61005,{value:n})}function _f(n){switch(Cr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_d(n);return e?16+_f(e):16;case 5:return 2*n.stringValue.length;case 6:return br(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+_f(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Mr(s.fields,((l,c)=>{a+=l.length+_f(c)})),a})(n.mapValue);default:throw ye(13486,{value:n})}}function J0(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ng(n){return!!n&&"integerValue"in n}function b_(n){return!!n&&"arrayValue"in n}function eS(n){return!!n&&"nullValue"in n}function tS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yf(n){return!!n&&"mapValue"in n}function ax(n){return(n?.mapValue?.fields||{})[BA]?.stringValue===FA}function ju(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Mr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ju(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ju(n.arrayValue.values[t]);return e}return{...n}}function ox(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!yf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ju(t)}setAll(e){let t=an.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=ju(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());yf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];yf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Mr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new bn(ju(this.value))}}function HA(n){const e=[];return Mr(n.fields,((t,s)=>{const a=new an([t]);if(yf(s)){const l=HA(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new dn(e,0,Ae.min(),Ae.min(),Ae.min(),bn.empty(),0)}static newFoundDocument(e,t,s,a){return new dn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new dn(e,2,t,Ae.min(),Ae.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new dn(e,3,t,Ae.min(),Ae.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uf{constructor(e,t){this.position=e,this.inclusive=t}}function nS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=de.comparator(de.fromName(c.referenceValue),t.key):s=tl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function iS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Bi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function lx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class GA{}class Ot extends GA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cx(e,t,s):t==="array-contains"?new dx(e,s):t==="in"?new mx(e,s):t==="not-in"?new px(e,s):t==="array-contains-any"?new gx(e,s):new Ot(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new hx(e,s):new fx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tl(t,this.value)):t!==null&&Cr(this.value)===Cr(t)&&this.matchesComparison(tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gi extends GA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new gi(e,t)}matches(e){return QA(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function QA(n){return n.op==="and"}function YA(n){return ux(n)&&QA(n)}function ux(n){for(const e of n.filters)if(e instanceof gi)return!1;return!0}function Dg(n){if(n instanceof Ot)return n.field.canonicalString()+n.op.toString()+nl(n.value);if(YA(n))return n.filters.map((e=>Dg(e))).join(",");{const e=n.filters.map((t=>Dg(t))).join(",");return`${n.op}(${e})`}}function KA(n,e){return n instanceof Ot?(function(s,a){return a instanceof Ot&&s.op===a.op&&s.field.isEqual(a.field)&&Bi(s.value,a.value)})(n,e):n instanceof gi?(function(s,a){return a instanceof gi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&KA(c,a.filters[d])),!0):!1})(n,e):void ye(19439)}function XA(n){return n instanceof Ot?(function(t){return`${t.field.canonicalString()} ${t.op} ${nl(t.value)}`})(n):n instanceof gi?(function(t){return t.op.toString()+" {"+t.getFilters().map(XA).join(" ,")+"}"})(n):"Filter"}class cx extends Ot{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class hx extends Ot{constructor(e,t){super(e,"in",t),this.keys=WA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fx extends Ot{constructor(e,t){super(e,"not-in",t),this.keys=WA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function WA(n,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class dx extends Ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return b_(t)&&tc(t.arrayValue,this.value)}}class mx extends Ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tc(this.value.arrayValue,t)}}class px extends Ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!tc(this.value.arrayValue,t)}}class gx extends Ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!b_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>tc(this.value.arrayValue,s)))}}/**
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
 */class _x{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function sS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new _x(n,e,t,s,a,l,c)}function C_(n){const e=be(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Dg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),gd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>nl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>nl(s))).join(",")),e.Te=t}return e.Te}function R_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!KA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iS(n.startAt,e.startAt)&&iS(n.endAt,e.endAt)}function xg(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yx(n,e,t,s,a,l,c,d){return new pl(n,e,t,s,a,l,c,d)}function yd(n){return new pl(n)}function rS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $A(n){return n.collectionGroup!==null}function qu(n){const e=be(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new qt(an.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new nc(l,s))})),t.has(an.keyField().canonicalString())||e.Ie.push(new nc(an.keyField(),s))}return e.Ie}function Li(n){const e=be(n);return e.Ee||(e.Ee=vx(e,qu(n))),e.Ee}function vx(n,e){if(n.limitType==="F")return sS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new nc(a.field,l)}));const t=n.endAt?new Uf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Uf(n.startAt.position,n.startAt.inclusive):null;return sS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Og(n,e){const t=n.filters.concat([e]);return new pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zf(n,e,t){return new pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vd(n,e){return R_(Li(n),Li(e))&&n.limitType===e.limitType}function ZA(n){return`${C_(Li(n))}|lt:${n.limitType}`}function zo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>XA(a))).join(", ")}]`),gd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>nl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>nl(a))).join(",")),`Target(${s})`})(Li(n))}; limitType=${n.limitType})`}function Ed(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of qu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=nS(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,qu(s),a)||s.endAt&&!(function(c,d,p){const g=nS(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,qu(s),a))})(n,e)}function Ex(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function JA(n){return(e,t)=>{let s=!1;for(const a of qu(n)){const l=Tx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Tx(n,e,t){const s=n.field.isKeyField()?de.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?tl(p,g):ye(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return VA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new Pt(de.comparator);function Is(){return Sx}const eb=new Pt(de.comparator);function Pu(...n){let e=eb;for(const t of n)e=e.insert(t.key,t);return e}function tb(n){let e=eb;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Sa(){return Bu()}function nb(){return Bu()}function Bu(){return new ja((n=>n.toString()),((n,e)=>n.isEqual(e)))}const wx=new Pt(de.comparator),Ax=new qt(de.comparator);function Le(...n){let e=Ax;for(const t of n)e=e.add(t);return e}const bx=new qt(Ve);function Cx(){return bx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pf(e)?"-0":e}}function ib(n){return{integerValue:""+n}}function Rx(n,e){return ex(e)?ib(e):I_(n,e)}/**
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
 */class Td{constructor(){this._=void 0}}function Ix(n,e,t){return n instanceof ic?(function(a,l){const c={fields:{[zA]:{stringValue:UA},[qA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&A_(l)&&(l=_d(l)),l&&(c.fields[jA]=l),{mapValue:c}})(t,e):n instanceof sc?rb(n,e):n instanceof rc?ab(n,e):(function(a,l){const c=sb(a,l),d=aS(c)+aS(a.Ae);return Ng(c)&&Ng(a.Ae)?ib(d):I_(a.serializer,d)})(n,e)}function Nx(n,e,t){return n instanceof sc?rb(n,e):n instanceof rc?ab(n,e):t}function sb(n,e){return n instanceof jf?(function(s){return Ng(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ic extends Td{}class sc extends Td{constructor(e){super(),this.elements=e}}function rb(n,e){const t=ob(e);for(const s of n.elements)t.some((a=>Bi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class rc extends Td{constructor(e){super(),this.elements=e}}function ab(n,e){let t=ob(e);for(const s of n.elements)t=t.filter((a=>!Bi(a,s)));return{arrayValue:{values:t}}}class jf extends Td{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function aS(n){return At(n.integerValue||n.doubleValue)}function ob(n){return b_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t){this.field=e,this.transform=t}}function xx(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof sc&&a instanceof sc||s instanceof rc&&a instanceof rc?el(s.elements,a.elements,Bi):s instanceof jf&&a instanceof jf?Bi(s.Ae,a.Ae):s instanceof ic&&a instanceof ic})(n.transform,e.transform)}class Ox{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Sd{}function lb(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new N_(n.key,Nn.none()):new Ec(n.key,n.data,Nn.none());{const t=n.data,s=bn.empty();let a=new qt(an.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new kr(n.key,s,new qn(a.toArray()),Nn.none())}}function Mx(n,e,t){n instanceof Ec?(function(a,l,c){const d=a.value.clone(),p=lS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof kr?(function(a,l,c){if(!vf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=lS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(ub(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Fu(n,e,t,s){return n instanceof Ec?(function(l,c,d,p){if(!vf(l.precondition,c))return d;const g=l.value.clone(),v=uS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof kr?(function(l,c,d,p){if(!vf(l.precondition,c))return d;const g=uS(l.fieldTransforms,p,c),v=c.data;return v.setAll(ub(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return vf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function kx(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=sb(s.transform,a||null);l!=null&&(t===null&&(t=bn.empty()),t.set(s.field,l))}return t||null}function oS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&el(s,a,((l,c)=>xx(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ec extends Sd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class kr extends Sd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ub(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function lS(n,e,t){const s=new Map;Xe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,Nx(c,d,t[a]))}return s}function uS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,Ix(l,c,e))}return s}class N_ extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Px extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Mx(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=nb();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=lb(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&el(this.mutations,e.mutations,((t,s)=>oS(t,s)))&&el(this.baseMutations,e.baseMutations,((t,s)=>oS(t,s)))}}class D_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return wx})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new D_(e,t,s,a)}}/**
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
 */class Lx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ux{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Fe;function zx(n){switch(n){case X.OK:return ye(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ye(15467,{code:n})}}function cb(n){if(n===void 0)return Rs("GRPC error has no .code"),X.UNKNOWN;switch(n){case Dt.OK:return X.OK;case Dt.CANCELLED:return X.CANCELLED;case Dt.UNKNOWN:return X.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return X.INTERNAL;case Dt.UNAVAILABLE:return X.UNAVAILABLE;case Dt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Dt.NOT_FOUND:return X.NOT_FOUND;case Dt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Dt.ABORTED:return X.ABORTED;case Dt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Dt.DATA_LOSS:return X.DATA_LOSS;default:return ye(39323,{code:n})}}(Fe=Dt||(Dt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jx(){return new TextEncoder}/**
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
 */const qx=new _r([4294967295,4294967295],0);function cS(n){const e=jx().encode(n),t=new bA;return t.update(e),new Uint8Array(t.digest())}function hS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new _r([t,s],0),new _r([a,l],0)]}class x_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Vu(`Invalid padding: ${t}`);if(s<0)throw new Vu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Vu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=_r.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(_r.fromNumber(s)));return a.compare(qx)===1&&(a=new _r([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cS(e),[s,a]=hS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new x_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=cS(e),[s,a]=hS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Vu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Tc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wd(Ae.min(),a,new Pt(Ve),Is(),Le())}}class Tc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Tc(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class hb{constructor(e,t){this.targetId=e,this.Ce=t}}class fb{constructor(e,t,s=on.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class fS{constructor(){this.ve=0,this.Fe=dS(),this.Me=on.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ye(38017,{changeType:l})}})),new Tc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=dS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Bx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Is(),this.Je=lf(),this.He=lf(),this.Ye=new Pt(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(xg(l))if(s===0){const c=new de(l.path);this.et(t,c,dn.newNoDocument(c,Ae.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=br(s).toUint8Array()}catch(p){if(p instanceof LA)return Jo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new x_(c,a,l)}catch(p){return Jo(p instanceof Vu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&xg(d.target)){const p=new de(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,dn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Le();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new wd(e,t,this.Ye,this.je,s);return this.je=Is(),this.Je=lf(),this.He=lf(),this.Ye=new Pt(Ve),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new fS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new qt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new qt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function lf(){return new Pt(de.comparator)}function dS(){return new Pt(de.comparator)}const Fx={asc:"ASCENDING",desc:"DESCENDING"},Hx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gx={and:"AND",or:"OR"};class Qx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mg(n,e){return n.useProto3Json||gd(e)?e:{value:e}}function qf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function db(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Yx(n,e){return qf(n,e.toTimestamp())}function Ui(n){return Xe(!!n,49232),Ae.fromTimestamp((function(t){const s=Ar(t);return new ht(s.seconds,s.nanos)})(n))}function O_(n,e){return kg(n,e).canonicalString()}function kg(n,e){const t=(function(a){return new lt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function mb(n){const e=lt.fromString(n);return Xe(vb(e),10190,{key:e.toString()}),e}function Pg(n,e){return O_(n.databaseId,e.path)}function sg(n,e){const t=mb(e);if(t.get(1)!==n.databaseId.projectId)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(gb(t))}function pb(n,e){return O_(n.databaseId,e)}function Kx(n){const e=mb(n);return e.length===4?lt.emptyPath():gb(e)}function Vg(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gb(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function mS(n,e,t){return{name:Pg(n,e),fields:t.value.mapValue.fields}}function Xx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ye(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(Xe(v===void 0||typeof v=="string",58123),on.fromBase64String(v||"")):(Xe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),on.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?X.UNKNOWN:cb(g.code);return new re(v,g.message||"")})(c);t=new fb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=sg(n,s.document.name),l=Ui(s.document.updateTime),c=s.document.createTime?Ui(s.document.createTime):Ae.min(),d=new bn({mapValue:{fields:s.document.fields}}),p=dn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Ef(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=sg(n,s.document),l=s.readTime?Ui(s.readTime):Ae.min(),c=dn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Ef([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=sg(n,s.document),l=s.removedTargetIds||[];t=new Ef([],l,a,null)}else{if(!("filter"in e))return ye(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new Ux(a,l),d=s.targetId;t=new hb(d,c)}}return t}function Wx(n,e){let t;if(e instanceof Ec)t={update:mS(n,e.key,e.value)};else if(e instanceof N_)t={delete:Pg(n,e.key)};else if(e instanceof kr)t={update:mS(n,e.key,e.data),updateMask:rO(e.fieldMask)};else{if(!(e instanceof Px))return ye(16599,{Vt:e.type});t={verify:Pg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof ic)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof sc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof jf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw ye(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Yx(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(n,e.precondition)),t}function $x(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Ui(a.updateTime):Ui(l);return c.isEqual(Ae.min())&&(c=Ui(l)),new Ox(c,a.transformResults||[])})(t,e)))):[]}function Zx(n,e){return{documents:[pb(n,e.path)]}}function Jx(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=pb(n,a);const l=(function(g){if(g.length!==0)return yb(gi.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:jo(w.field),direction:nO(w.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Mg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function eO(n){let e=Kx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const w=_b(T);return w instanceof gi&&YA(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(j){return new nc(qo(j.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let w;return w=typeof T=="object"?T.value:T,gd(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(T){const w=!!T.before,x=T.values||[];return new Uf(x,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,x=T.values||[];return new Uf(x,w)})(t.endAt)),yx(e,a,c,l,d,"F",p,g)}function tO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _b(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=qo(t.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=qo(t.unaryFilter.field);return Ot.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=qo(t.unaryFilter.field);return Ot.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return Ot.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ot.create(qo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return gi.create(t.compositeFilter.filters.map((s=>_b(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(n):ye(30097,{filter:n})}function nO(n){return Fx[n]}function iO(n){return Hx[n]}function sO(n){return Gx[n]}function jo(n){return{fieldPath:n.canonicalString()}}function qo(n){return an.fromServerFormat(n.fieldPath)}function yb(n){return n instanceof Ot?(function(t){if(t.op==="=="){if(tS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(eS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(eS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:iO(t.op),value:t.value}}})(n):n instanceof gi?(function(t){const s=t.getFilters().map((a=>yb(a)));return s.length===1?s[0]:{compositeFilter:{op:sO(t.op),filters:s}}})(n):ye(54877,{filter:n})}function rO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,s,a,l=Ae.min(),c=Ae.min(),d=on.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.yt=e}}function oO(n){const e=eO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zf(e,e.limit,"L"):e}/**
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
 */class lO{constructor(){this.Cn=new uO}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(wr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class uO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new qt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new qt(lt.comparator)).toArray()}}/**
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
 */const pS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Eb=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(Eb,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new il(0)}static cr(){return new il(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="LruGarbageCollector",cO=1048576;function _S([n,e],[t,s]){const a=Ve(n,t);return a===0?Ve(e,s):a}class hO{constructor(e){this.Ir=e,this.buffer=new qt(_S),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_S(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(gS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ml(t)?ae(gS,"Ignoring IndexedDB error during garbage collection: ",t):await dl(t)}await this.Vr(3e5)}))}}class dO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(pd.ce);const s=new hO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(pS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pS):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Uo()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function mO(n,e){return new dO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.changes=new ja((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Fu(s.mutation,a,qn.empty(),ht.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Le()){const a=Sa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Pu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Sa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Le())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Is();const c=Bu(),d=(function(){return Bu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof kr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Fu(v.mutation,g,v.mutation.getFieldMask(),ht.now())):c.set(g.key,qn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new gO(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Bu();let a=new Pt(((c,d)=>c-d)),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||qn.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||Le()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=nb();v.forEach((w=>{if(!l.has(w)){const x=lb(t.get(w),s.get(w));x!==null&&T.set(w,x),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return de.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$A(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Sa());let d=Zu,p=l;return c.next((g=>Z.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{p=p.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Le()))).next((v=>({batchId:d,changes:tb(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let a=Pu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Pu();return this.indexManager.getCollectionParents(e,l).next((d=>Z.forEach(d,(p=>{const g=(function(T,w){return new pl(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,dn.newInvalidDocument(v)))}));let d=Pu();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Fu(v.mutation,g,qn.empty(),ht.now()),Ed(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Ui(a.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:oO(a.bundledQuery),readTime:Ui(a.readTime)}})(t)),Z.resolve()}}/**
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
 */class vO{constructor(){this.overlays=new Pt(de.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Sa();return Z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Sa(),l=t.length+1,c=new de(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Pt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=Sa(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Sa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return Z.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new Lx(t,s));let l=this.qr.get(t);l===void 0&&(l=Le(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class EO{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Qr=new qt(Xt.$r),this.Ur=new qt(Xt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Xt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Xt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new lt([])),s=new Xt(t,e),a=new Xt(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new lt([])),s=new Xt(t,e),a=new Xt(t,e+1);let l=Le();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Xt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Xt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new qt(Xt.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Vx(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new Xt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?w_:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Xt(t,0),a=new Xt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new qt(Ve);return t.forEach((a=>{const l=new Xt(a,0),c=new Xt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const c=new Xt(new de(l),0);let d=new qt(Ve);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Xe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,(a=>{const l=new Xt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Xt(t,0),a=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.ri=e,this.docs=(function(){return new Pt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(t))}getEntries(e,t){let s=Is();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():dn.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Is();const c=t.path,d=new de(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||W2(X2(v),s)<=0||(a.has(v.key)||Ed(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){ye(9500)}ii(e,t){return Z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new wO(this)}getSize(e){return Z.resolve(this.size)}}class wO extends pO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.persistence=e,this.si=new ja((t=>C_(t)),R_),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new M_,this.targetCount=0,this.ai=il.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new il(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),Z.waitFor(l).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t){this.ui={},this.overlays={},this.ci=new pd(0),this.li=!1,this.li=!0,this.hi=new EO,this.referenceDelegate=e(this),this.Pi=new AO(this),this.indexManager=new lO,this.remoteDocumentCache=(function(a){return new SO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new aO(t),this.Ii=new yO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new TO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new bO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return Z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class bO extends Z2{constructor(e){super(),this.currentSequenceNumber=e}}class k_{constructor(e){this.persistence=e,this.Ri=new M_,this.Vi=null}static mi(e){return new k_(e)}get fi(){if(this.Vi)return this.Vi;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(s=>{const a=de.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ae.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Bf{constructor(e,t){this.persistence=e,this.pi=new ja((s=>tx(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=mO(this,t)}static mi(e,t){return new Bf(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return Z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?Z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ae.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_f(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Le(),a=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new P_(e,t.fromCache,s,a)}}/**
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
 */class CO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return fI()?8:J2(pn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new CO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Uo()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(Uo()<=Pe.DEBUG&&ae("QueryEngine","Query:",zo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Uo()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Li(t))):Z.resolve())}ys(e,t){if(rS(t))return Z.resolve(null);let s=Li(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=zf(t,null,"F"),s=Li(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Le(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,zf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return rS(t)||a.isEqual(Ae.min())?Z.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?Z.resolve(null):(Uo()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zo(t)),this.vs(e,c,t,K2(a,Zu)).next((d=>d)))}))}Ds(e,t){let s=new qt(JA(e));return t.forEach(((a,l)=>{Ed(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Uo()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",zo(t)),this.ps.getDocumentsMatchingQuery(e,t,wr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="LocalStore",IO=3e8;class NO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Pt(Ve),this.xs=new ja((l=>C_(l)),R_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _O(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function DO(n,e,t,s){return new NO(n,e,t,s)}async function Sb(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Le();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function xO(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,w=T.keys();let x=Z.resolve();return w.forEach((j=>{x=x.next((()=>v.getEntry(p,j))).next((Y=>{const K=g.docVersions.get(j);Xe(K!==null,48541),Y.version.compareTo(K)<0&&(T.applyToRemoteDocument(Y,g),Y.isValidDocument()&&(Y.setReadTime(g.commitVersion),v.addEntry(Y)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Le();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function wb(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function OO(n,e){const t=be(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const w=a.get(T);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let x=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(on.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,s)),a=a.insert(T,x),(function(Y,K,ce){return Y.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=IO?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(w,x,v)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Is(),g=Le();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(MO(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(Ae.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return Z.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function MO(n,e,t){let s=Le(),a=Le();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Is();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(V_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function kO(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=w_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function PO(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,Z.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new dr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Lg(n,e,t){const s=be(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!ml(c))throw c;ae(V_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function yS(n,e,t){const s=be(n);let a=Ae.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=be(p),w=T.xs.get(v);return w!==void 0?Z.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,v)})(s,c,Li(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ae.min(),t?l:Le()))).next((d=>(VO(s,Ex(e),d),{documents:d,Qs:l})))))}function VO(n,e,t){let s=n.Os.get(e)||Ae.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class vS{constructor(){this.activeTargetIds=Cx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LO{constructor(){this.Mo=new vS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new vS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UO{Oo(e){}shutdown(){}}/**
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
 */const ES="ConnectivityMonitor";class TS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(ES,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(ES,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uf=null;function Ug(){return uf===null?uf=(function(){return 268435456+Math.round(2147483648*Math.random())})():uf++,"0x"+uf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="RestConnection",zO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Vf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Ug(),d=this.zo(e,t.toUriEncodedString());ae(rg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Or(g);return this.Jo(e,d,p,s,v).then((T=>(ae(rg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Jo(rg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=zO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="WebChannelConnection";class BO extends jO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Ug();return new Promise(((d,p)=>{const g=new CA;g.setWithCredentials(!0),g.listenOnce(RA.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case gf.NO_ERROR:const T=g.getResponseJson();ae(hn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case gf.TIMEOUT:ae(hn,`RPC '${e}' ${c} timed out`),p(new re(X.DEADLINE_EXCEEDED,"Request time out"));break;case gf.HTTP_ERROR:const w=g.getStatus();if(ae(hn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const j=x?.error;if(j&&j.status&&j.message){const Y=(function(ce){const oe=ce.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(oe)>=0?oe:X.UNKNOWN})(j.status);p(new re(Y,j.message))}else p(new re(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new re(X.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ae(hn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ae(hn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=Ug(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=DA(),d=NA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(hn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let w=!1,x=!1;const j=new qO({Yo:K=>{x?ae(hn,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(w||(ae(hn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),ae(hn,`RPC '${e}' stream ${a} sending:`,K),T.send(K))},Zo:()=>T.close()}),Y=(K,ce,oe)=>{K.listen(ce,(ue=>{try{oe(ue)}catch(Ue){setTimeout((()=>{throw Ue}),0)}}))};return Y(T,ku.EventType.OPEN,(()=>{x||(ae(hn,`RPC '${e}' stream ${a} transport opened.`),j.o_())})),Y(T,ku.EventType.CLOSE,(()=>{x||(x=!0,ae(hn,`RPC '${e}' stream ${a} transport closed`),j.a_(),this.E_(T))})),Y(T,ku.EventType.ERROR,(K=>{x||(x=!0,Jo(hn,`RPC '${e}' stream ${a} transport errored. Name:`,K.name,"Message:",K.message),j.a_(new re(X.UNAVAILABLE,"The operation could not be completed")))})),Y(T,ku.EventType.MESSAGE,(K=>{if(!x){const ce=K.data[0];Xe(!!ce,16349);const oe=ce,ue=oe?.error||oe[0]?.error;if(ue){ae(hn,`RPC '${e}' stream ${a} received error:`,ue);const Ue=ue.status;let ve=(function(b){const R=Dt[b];if(R!==void 0)return cb(R)})(Ue),ze=ue.message;ve===void 0&&(ve=X.INTERNAL,ze="Unknown error status: "+Ue+" with message "+ue.message),x=!0,j.a_(new re(ve,ze)),T.close()}else ae(hn,`RPC '${e}' stream ${a} received:`,ce),j.u_(ce)}})),Y(d,IA.STAT_EVENT,(K=>{K.stat===bg.PROXY?ae(hn,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===bg.NOPROXY&&ae(hn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{j.__()}),0),j}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ag(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n){return new Qx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="PersistentStream";class bb{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ab(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Rs(t.toString()),Rs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new re(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(SS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(SS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FO extends bb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Xx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?Ui(c.readTime):Ae.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Vg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=xg(p)?{documents:Zx(l,p)}:{query:Jx(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=db(l,c.resumeToken);const g=Mg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=qf(l,c.snapshotVersion.toTimestamp());const g=Mg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=tO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Vg(this.serializer),t.removeTarget=e,this.q_(t)}}class HO extends bb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=$x(e.writeResults,e.commitTime),s=Ui(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Vg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Wx(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{}class QO extends GO{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,kg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(X.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,kg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(X.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class YO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rs(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RemoteStore";class KO{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{qa(this)&&(ae(Ma,"Restarting streams for network reachability change."),await(async function(p){const g=be(p);g.Ea.add(4),await Sc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await bd(g)})(this))}))})),this.Ra=new YO(s,a)}}async function bd(n){if(qa(n))for(const e of n.da)await e(!0)}async function Sc(n){for(const e of n.da)await e(!1)}function Cb(n,e){const t=be(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),j_(t)?z_(t):gl(t).O_()&&U_(t,e))}function L_(n,e){const t=be(n),s=gl(t);t.Ia.delete(e),s.O_()&&Rb(t,e),t.Ia.size===0&&(s.O_()?s.L_():qa(t)&&t.Ra.set("Unknown"))}function U_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gl(n).Y_(e)}function Rb(n,e){n.Va.Ue(e),gl(n).Z_(e)}function z_(n){n.Va=new Bx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),gl(n).start(),n.Ra.ua()}function j_(n){return qa(n)&&!gl(n).x_()&&n.Ia.size>0}function qa(n){return be(n).Ea.size===0}function Ib(n){n.Va=void 0}async function XO(n){n.Ra.set("Online")}async function WO(n){n.Ia.forEach(((e,t)=>{U_(n,e)}))}async function $O(n,e){Ib(n),j_(n)?(n.Ra.ha(e),z_(n)):n.Ra.set("Unknown")}async function ZO(n,e,t){if(n.Ra.set("Online"),e instanceof fb&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){ae(Ma,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ff(n,s)}else if(e instanceof Ef?n.Va.Ze(e):e instanceof hb?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await wb(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(on.EMPTY_BYTE_STRING,v.snapshotVersion)),Rb(l,p);const T=new dr(v.target,p,g,v.sequenceNumber);U_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){ae(Ma,"Failed to raise snapshot:",s),await Ff(n,s)}}async function Ff(n,e,t){if(!ml(e))throw e;n.Ea.add(1),await Sc(n),n.Ra.set("Offline"),t||(t=()=>wb(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Ma,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await bd(n)}))}function Nb(n,e){return e().catch((t=>Ff(n,t,e)))}async function Cd(n){const e=be(n),t=Rr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:w_;for(;JO(e);)try{const a=await kO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,eM(e,a)}catch(a){await Ff(e,a)}Db(e)&&xb(e)}function JO(n){return qa(n)&&n.Ta.length<10}function eM(n,e){n.Ta.push(e);const t=Rr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Db(n){return qa(n)&&!Rr(n).x_()&&n.Ta.length>0}function xb(n){Rr(n).start()}async function tM(n){Rr(n).ra()}async function nM(n){const e=Rr(n);for(const t of n.Ta)e.ea(t.mutations)}async function iM(n,e,t){const s=n.Ta.shift(),a=D_.from(s,e,t);await Nb(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Cd(n)}async function sM(n,e){e&&Rr(n).X_&&await(async function(s,a){if((function(c){return zx(c)&&c!==X.ABORTED})(a.code)){const l=s.Ta.shift();Rr(s).B_(),await Nb(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Cd(s)}})(n,e),Db(n)&&xb(n)}async function wS(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),ae(Ma,"RemoteStore received new credentials");const s=qa(t);t.Ea.add(3),await Sc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await bd(t)}async function rM(n,e){const t=be(n);e?(t.Ea.delete(2),await bd(t)):e||(t.Ea.add(2),await Sc(t),t.Ra.set("Unknown"))}function gl(n){return n.ma||(n.ma=(function(t,s,a){const l=be(t);return l.sa(),new FO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:XO.bind(null,n),t_:WO.bind(null,n),r_:$O.bind(null,n),H_:ZO.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),j_(n)?z_(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ib(n))}))),n.ma}function Rr(n){return n.fa||(n.fa=(function(t,s,a){const l=be(t);return l.sa(),new HO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:tM.bind(null,n),r_:sM.bind(null,n),ta:nM.bind(null,n),na:iM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Cd(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(Ma,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new q_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B_(n,e){if(Rs("AsyncQueue",`${e}: ${n}`),ml(n))return new re(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Pu(),this.sortedSet=new Pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.ga=new Pt(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class sl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new sl(e,t,Yo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class oM{constructor(){this.queries=bS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=bS(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new re(X.ABORTED,"Firestore shutting down"))}}function bS(){return new ja((n=>ZA(n)),vd)}async function F_(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new aM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=B_(c,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&G_(t)}async function H_(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function lM(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&G_(t)}function uM(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function G_(n){n.Ca.forEach((e=>{e.next()}))}var zg,CS;(CS=zg||(zg={})).Ma="default",CS.Cache="cache";class Q_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new sl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=sl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.key=e}}class Mb{constructor(e){this.key=e}}class cM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=JA(e),this.tu=new Yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new AS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const w=a.get(v),x=Ed(this.query,T)?T:null,j=!!w&&this.mutatedKeys.has(w.key),Y=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let K=!1;w&&x?w.data.isEqual(x.data)?j!==Y&&(s.track({type:3,doc:x}),K=!0):this.su(w,x)||(s.track({type:2,doc:x}),K=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!w&&x?(s.track({type:0,doc:x}),K=!0):w&&!x&&(s.track({type:1,doc:w}),K=!0,(p||g)&&(d=!0)),K&&(x?(c=c.add(x),l=Y?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(x,j){const Y=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Rt:K})}};return Y(x)-Y(j)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new sl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new AS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Mb(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Ob(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return sl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Y_="SyncEngine";class hM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fM{constructor(e){this.key=e,this.hu=!1}}class dM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ja((d=>ZA(d)),vd),this.Iu=new Map,this.Eu=new Set,this.du=new Pt(de.comparator),this.Au=new Map,this.Ru=new M_,this.Vu={},this.mu=new Map,this.fu=il.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mM(n,e,t=!0){const s=zb(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await kb(s,e,t,!0),a}async function pM(n,e){const t=zb(n);await kb(t,e,!0,!1)}async function kb(n,e,t,s){const a=await PO(n.localStore,Li(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await gM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Cb(n.remoteStore,a),d}async function gM(n,e,t,s,a){n.pu=(T,w,x)=>(async function(Y,K,ce,oe){let ue=K.view.ru(ce);ue.Cs&&(ue=await yS(Y.localStore,K.query,!1).then((({documents:N})=>K.view.ru(N,ue))));const Ue=oe&&oe.targetChanges.get(K.targetId),ve=oe&&oe.targetMismatches.get(K.targetId)!=null,ze=K.view.applyChanges(ue,Y.isPrimaryClient,Ue,ve);return IS(Y,K.targetId,ze.au),ze.snapshot})(n,T,w,x);const l=await yS(n.localStore,e,!0),c=new cM(e,l.Qs),d=c.ru(l.documents),p=Tc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);IS(n,t,g.au);const v=new hM(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function _M(n,e,t){const s=be(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!vd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Lg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&L_(s.remoteStore,a.targetId),jg(s,a.targetId)})).catch(dl)):(jg(s,a.targetId),await Lg(s.localStore,a.targetId,!0))}async function yM(n,e){const t=be(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),L_(t.remoteStore,s.targetId))}async function vM(n,e,t){const s=CM(n);try{const a=await(function(c,d){const p=be(c),g=ht.now(),v=d.reduce(((x,j)=>x.add(j.key)),Le());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let j=Is(),Y=Le();return p.Ns.getEntries(x,v).next((K=>{j=K,j.forEach(((ce,oe)=>{oe.isValidDocument()||(Y=Y.add(ce))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,j))).next((K=>{T=K;const ce=[];for(const oe of d){const ue=kx(oe,T.get(oe.key).overlayedDocument);ue!=null&&ce.push(new kr(oe.key,ue,HA(ue.value.mapValue),Nn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ce,d)})).next((K=>{w=K;const ce=K.applyToLocalDocumentSet(T,Y);return p.documentOverlayCache.saveOverlays(x,K.batchId,ce)}))})).then((()=>({batchId:w.batchId,changes:tb(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Pt(Ve)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await wc(s,a.changes),await Cd(s.remoteStore)}catch(a){const l=B_(a,"Failed to persist write");t.reject(l)}}async function Pb(n,e){const t=be(n);try{const s=await OO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Xe(c.hu,14607):a.removedDocuments.size>0&&(Xe(c.hu,42227),c.hu=!1))})),await wc(t,s,e)}catch(s){await dl(s)}}function RS(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=be(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const w of T.Sa)w.va(d)&&(g=!0)})),g&&G_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function EM(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Pt(de.comparator);c=c.insert(l,dn.newNoDocument(l,Ae.min()));const d=Le().add(l),p=new wd(Ae.min(),new Map,new Pt(Ve),c,d);await Pb(s,p),s.du=s.du.remove(l),s.Au.delete(e),K_(s)}else await Lg(s.localStore,e,!1).then((()=>jg(s,e,t))).catch(dl)}async function TM(n,e){const t=be(n),s=e.batch.batchId;try{const a=await xO(t.localStore,e);Lb(t,s,null),Vb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await wc(t,a)}catch(a){await dl(a)}}async function SM(n,e,t){const s=be(n);try{const a=await(function(c,d){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Xe(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);Lb(s,e,t),Vb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await wc(s,a)}catch(a){await dl(a)}}function Vb(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Lb(n,e,t){const s=be(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function jg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Ub(n,s)}))}function Ub(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(L_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),K_(n))}function IS(n,e,t){for(const s of t)s instanceof Ob?(n.Ru.addReference(s.key,e),wM(n,s)):s instanceof Mb?(ae(Y_,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Ub(n,s.key)):ye(19791,{wu:s})}function wM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ae(Y_,"New document in limbo: "+t),n.Eu.add(s),K_(n))}function K_(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new de(lt.fromString(e)),s=n.fu.next();n.Au.set(s,new fM(t)),n.du=n.du.insert(t,s),Cb(n.remoteStore,new dr(Li(yd(t.path)),s,"TargetPurposeLimboResolution",pd.ce))}}async function wc(n,e,t){const s=be(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=P_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=be(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Z.forEach(g,(w=>Z.forEach(w.Es,(x=>v.persistence.referenceDelegate.addReference(T,w.targetId,x))).next((()=>Z.forEach(w.ds,(x=>v.persistence.referenceDelegate.removeReference(T,w.targetId,x)))))))))}catch(T){if(!ml(T))throw T;ae(V_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const x=v.Ms.get(w),j=x.snapshotVersion,Y=x.withLastLimboFreeSnapshotVersion(j);v.Ms=v.Ms.insert(w,Y)}}})(s.localStore,l))}async function AM(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){ae(Y_,"User change. New user:",e.toKey());const s=await Sb(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new re(X.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wc(t,s.Ls)}}function bM(n,e){const t=be(n),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let a=Le();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function zb(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EM.bind(null,e),e.Pu.H_=lM.bind(null,e.eventManager),e.Pu.yu=uM.bind(null,e.eventManager),e}function CM(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SM.bind(null,e),e}class Hf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ad(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return DO(this.persistence,new RO,e.initialUser,this.serializer)}Cu(e){return new Tb(k_.mi,this.serializer)}Du(e){return new LO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hf.provider={build:()=>new Hf};class RM extends Hf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Xe(this.persistence.referenceDelegate instanceof Bf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new Tb((s=>Bf.mi(s,t)),this.serializer)}}class qg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>RS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=AM.bind(null,this.syncEngine),await rM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oM})()}createDatastore(e){const t=Ad(e.databaseInfo.databaseId),s=(function(l){return new BO(l)})(e.databaseInfo);return(function(l,c,d,p){return new QO(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new KO(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>RS(this.syncEngine,t,0)),(function(){return TS.v()?new TS:new UO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new dM(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=be(t);ae(Ma,"RemoteStore shutting down."),s.Ea.add(5),await Sc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}qg.provider={build:()=>new qg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class IM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=fn.UNAUTHENTICATED,this.clientId=S_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ae(Ir,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ae(Ir,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=B_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function og(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await Sb(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function NS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NM(n);ae(Ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>wS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>wS(e.remoteStore,a))),n._onlineComponents=e}async function NM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Ir,"Using user provided OfflineComponentProvider");try{await og(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===X.FAILED_PRECONDITION||a.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;Jo("Error using user provided cache. Falling back to memory cache: "+t),await og(n,new Hf)}}else ae(Ir,"Using default OfflineComponentProvider"),await og(n,new RM(void 0));return n._offlineComponents}async function jb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Ir,"Using user provided OnlineComponentProvider"),await NS(n,n._uninitializedComponentsProvider._online)):(ae(Ir,"Using default OnlineComponentProvider"),await NS(n,new qg))),n._onlineComponents}function DM(n){return jb(n).then((e=>e.syncEngine))}async function Gf(n){const e=await jb(n),t=e.eventManager;return t.onListen=mM.bind(null,e.syncEngine),t.onUnlisten=_M.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yM.bind(null,e.syncEngine),t}function xM(n,e,t={}){const s=new ws;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new X_({next:w=>{v.Nu(),c.enqueueAndForget((()=>H_(l,T)));const x=w.docs.has(d);!x&&w.fromCache?g.reject(new re(X.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&p&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Q_(yd(d.path),v,{includeMetadataChanges:!0,qa:!0});return F_(l,T)})(await Gf(n),n.asyncQueue,e,t,s))),s.promise}function OM(n,e,t={}){const s=new ws;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new X_({next:w=>{v.Nu(),c.enqueueAndForget((()=>H_(l,T))),w.fromCache&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Q_(d,v,{includeMetadataChanges:!0,qa:!0});return F_(l,T)})(await Gf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function qb(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="firestore.googleapis.com",xS=!0;class OS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bb,this.ssl=xS}else this.host=e.host,this.ssl=e.ssl??xS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Eb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cO)throw new re(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Y2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qb(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new OS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new OS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new L2;switch(s.type){case"firstParty":return new q2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=DS.get(t);s&&(ae("ComponentProvider","Removing Datastore"),DS.delete(t),s.terminate())})(this),Promise.resolve()}}function MM(n,e,t,s={}){n=In(n,Rd);const a=Or(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(o_(`https://${d}`),l_("Firestore",!0)),l.host!==Bb&&l.host!==d&&Jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Tr(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=fn.MOCK_USER;else{g=jw(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new re(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new fn(T)}n._authCredentials=new U2(new OA(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(vc(t,Et._jsonSchema))return new Et(e,s||null,new de(lt.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:kt("string",Et._jsonSchemaVersion),referencePath:kt("string")};class vr extends Ms{constructor(e,t,s){super(e,t,yd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new de(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function si(n,e,...t){if(n=ut(n),MA("collection","path",e),n instanceof Rd){const s=lt.fromString(e,...t);return G0(s),new vr(n,null,s)}{if(!(n instanceof Et||n instanceof vr))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return G0(s),new vr(n.firestore,null,s)}}function ka(n,e,...t){if(n=ut(n),arguments.length===1&&(e=S_.newId()),MA("doc","path",e),n instanceof Rd){const s=lt.fromString(e,...t);return H0(s),new Et(n,null,new de(s))}{if(!(n instanceof Et||n instanceof vr))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return H0(s),new Et(n.firestore,n instanceof vr?n.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="AsyncQueue";class kS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ab(this,"async_queue_retry"),this._c=()=>{const s=ag();s&&ae(MS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ag();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ag();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ws;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ml(e))throw e;ae(MS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rs("INTERNAL UNHANDLED ERROR: ",PS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=q_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&ye(47125,{Pc:PS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function PS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function VS(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Ns extends Rd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new kS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kS(e),this._firestoreClient=void 0,await e}}}function kM(n,e){const t=typeof n=="object"?n:h_(),s=typeof n=="string"?n:Vf,a=cd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Lw("firestore");l&&MM(a,...l)}return a}function Ac(n){if(n._terminated)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PM(n),n._firestoreClient}function PM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new sx(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,qb(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new IM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(on.fromBase64String(e))}catch(t){throw new re(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ni(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ni._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vc(e,ni._jsonSchema))return ni.fromBase64String(e.bytes)}}ni._jsonSchemaVersion="firestore/bytes/1.0",ni._jsonSchema={type:kt("string",ni._jsonSchemaVersion),bytes:kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zi._jsonSchemaVersion}}static fromJSON(e){if(vc(e,zi._jsonSchema))return new zi(e.latitude,e.longitude)}}zi._jsonSchemaVersion="firestore/geoPoint/1.0",zi._jsonSchema={type:kt("string",zi._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
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
 */class ji{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ji._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vc(e,ji._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ji(e.vectorValues);throw new re(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ji._jsonSchemaVersion="firestore/vectorValue/1.0",ji._jsonSchema={type:kt("string",ji._jsonSchemaVersion),vectorValues:kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=/^__.*__$/;class LM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ec(e,this.data,t,this.fieldTransforms)}}class Fb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new kr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ac:n})}}class W_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new W_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Qf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Hb(this.Ac)&&VM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ad(e)}Cc(e,t,s,a=!1){return new W_({Ac:e,methodName:t,Dc:s,path:an.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cc(n){const e=n._freezeSettings(),t=Ad(n._databaseId);return new UM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $_(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);J_("Data must be an object, but it was:",c,s);const d=Yb(s,c);let p,g;if(l.merge)p=new qn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=Bg(e,T,t);if(!c.contains(w))throw new re(X.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Xb(v,w)||v.push(w)}p=new qn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new LM(new bn(d),p,g)}class Nd extends Id{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nd}}class Z_ extends Id{_toFieldTransform(e){return new Dx(e.path,new ic)}isEqual(e){return e instanceof Z_}}function Gb(n,e,t,s){const a=n.Cc(1,e,t);J_("Data must be an object, but it was:",a,s);const l=[],c=bn.empty();Mr(s,((p,g)=>{const v=ey(e,p,t);g=ut(g);const T=a.yc(v);if(g instanceof Nd)l.push(v);else{const w=Rc(g,T);w!=null&&(l.push(v),c.set(v,w))}}));const d=new qn(l);return new Fb(c,d,a.fieldTransforms)}function Qb(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Bg(e,s,t)],p=[a];if(l.length%2!=0)throw new re(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Bg(e,l[w])),p.push(l[w+1]);const g=[],v=bn.empty();for(let w=d.length-1;w>=0;--w)if(!Xb(g,d[w])){const x=d[w];let j=p[w];j=ut(j);const Y=c.yc(x);if(j instanceof Nd)g.push(x);else{const K=Rc(j,Y);K!=null&&(g.push(x),v.set(x,K))}}const T=new qn(g);return new Fb(v,T,c.fieldTransforms)}function zM(n,e,t,s=!1){return Rc(t,n.Cc(s?4:3,e))}function Rc(n,e){if(Kb(n=ut(n)))return J_("Unsupported field value:",e,n),Yb(n,e);if(n instanceof Id)return(function(s,a){if(!Hb(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Rc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Rx(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ht.fromDate(s);return{timestampValue:qf(a.serializer,l)}}if(s instanceof ht){const l=new ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:qf(a.serializer,l)}}if(s instanceof zi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ni)return{bytesValue:db(a.serializer,s._byteString)};if(s instanceof Et){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:O_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ji)return(function(c,d){return{mapValue:{fields:{[BA]:{stringValue:FA},[Lf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return I_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${md(s)}`)})(n,e)}function Yb(n,e){const t={};return VA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(n,((s,a)=>{const l=Rc(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Kb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof zi||n instanceof ni||n instanceof Et||n instanceof Id||n instanceof ji)}function J_(n,e,t){if(!Kb(t)||!kA(t)){const s=md(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Bg(n,e,t){if((e=ut(e))instanceof bc)return e._internalPath;if(typeof e=="string")return ey(n,e);throw Qf("Field path arguments must be of type string or ",n,!1,void 0,t)}const jM=new RegExp("[~\\*/\\[\\]]");function ey(n,e,t){if(e.search(jM)>=0)throw Qf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bc(...e.split("."))._internalPath}catch{throw Qf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new re(X.INVALID_ARGUMENT,d+n+p)}function Xb(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qM extends Wb{data(){return super.data()}}function Dd(n,e){return typeof e=="string"?ey(n,e):e instanceof bc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ty{}class ny extends ty{}function Fi(n,e,...t){let s=[];e instanceof ty&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof iy)).length,d=l.filter((p=>p instanceof xd)).length;if(c>1||c>0&&d>0)throw new re(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class xd extends ny{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new xd(e,t,s)}_apply(e){const t=this._parse(e);return Zb(e._query,t),new Ms(e.firestore,e.converter,Og(e._query,t))}_parse(e){const t=Cc(e.firestore);return(function(l,c,d,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new re(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){US(T,v);const j=[];for(const Y of T)j.push(LS(p,l,Y));w={arrayValue:{values:j}}}else w=LS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||US(T,v),w=zM(d,c,T,v==="in"||v==="not-in");return Ot.create(g,v,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mn(n,e,t){const s=e,a=Dd("where",n);return xd._create(a,s,t)}class iy extends ty{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new iy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:gi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Zb(c,p),c=Og(c,p)})(e._query,t),new Ms(e.firestore,e.converter,Og(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sy extends ny{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nc(l,c)})(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new pl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function BM(n,e="asc"){const t=e,s=Dd("orderBy",n);return sy._create(s,t)}class ry extends ny{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ry(e,t,s)}_apply(e){return new Ms(e.firestore,e.converter,zf(e._query,this._limit,this._limitType))}}function FM(n){return ry._create("limit",n,"F")}function LS(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new re(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$A(e)&&t.indexOf("/")!==-1)throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!de.isDocumentKey(s))throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return J0(n,new de(s))}if(t instanceof Et)return J0(n,t._key);throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${md(t)}.`)}function US(n,e){if(!Array.isArray(n)||n.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zb(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class HM{convertValue(e,t="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Mr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Lf].arrayValue?.values?.map((s=>At(s.doubleValue)));return new ji(t)}convertGeoPoint(e){return new zi(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_d(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ju(e));default:return null}}convertTimestamp(e){const t=Ar(e);return new ht(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(vb(s),9688,{name:e});const a=new ec(s.get(1),s.get(3)),l=new de(s.popFirst(5));return a.isEqual(t)||Rs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ba extends Wb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Dd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ba._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ba._jsonSchemaVersion="firestore/documentSnapshot/1.0",ba._jsonSchema={type:kt("string",ba._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class Tf extends ba{data(e={}){return super.data(e)}}class Ca{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Lu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Tf(this._firestore,this._userDataWriter,s.key,s,new Lu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Tf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Lu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Tf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Lu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:GM(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=S_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n){n=In(n,Et);const e=In(n.firestore,Ns);return xM(Ac(e),n._key).then((t=>t1(e,n,t)))}Ca._jsonSchemaVersion="firestore/querySnapshot/1.0",Ca._jsonSchema={type:kt("string",Ca._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};class oy extends HM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ni(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function Fg(n){n=In(n,Ms);const e=In(n.firestore,Ns),t=Ac(e),s=new oy(e);return $b(n._query),OM(t,n._query).then((a=>new Ca(e,s,n,a)))}function QM(n,e,t){n=In(n,Et);const s=In(n.firestore,Ns),a=ay(n.converter,e,t);return Od(s,[$_(Cc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Nn.none())])}function Yf(n,e,t,...s){n=In(n,Et);const a=In(n.firestore,Ns),l=Cc(a);let c;return c=typeof(e=ut(e))=="string"||e instanceof bc?Qb(l,"updateDoc",n._key,e,t,s):Gb(l,"updateDoc",n._key,e),Od(a,[c.toMutation(n._key,Nn.exists(!0))])}function e1(n,e){const t=In(n.firestore,Ns),s=ka(n),a=ay(n.converter,e);return Od(t,[$_(Cc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Nn.exists(!1))]).then((()=>s))}function Nr(n,...e){n=ut(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||VS(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(VS(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Et)c=In(n.firestore,Ns),d=yd(n._key.path),l={next:p=>{e[s]&&e[s](t1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=In(n,Ms);c=In(p.firestore,Ns),d=p._query;const g=new oy(c);l={next:v=>{e[s]&&e[s](new Ca(c,g,p,v))},error:e[s+1],complete:e[s+2]},$b(n._query)}return(function(g,v,T,w){const x=new X_(w),j=new Q_(v,x,T);return g.asyncQueue.enqueueAndForget((async()=>F_(await Gf(g),j))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>H_(await Gf(g),j)))}})(Ac(c),d,a,l)}function Od(n,e){return(function(s,a){const l=new ws;return s.asyncQueue.enqueueAndForget((async()=>vM(await DM(s),a,l))),l.promise})(Ac(n),e)}function t1(n,e,t){const s=t.docs.get(e._key),a=new oy(n);return new ba(n,a,e._key,s,new Lu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Cc(e)}set(e,t,s){this._verifyNotCommitted();const a=lg(e,this._firestore),l=ay(a.converter,t,s),c=$_(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Nn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=lg(e,this._firestore);let c;return c=typeof(t=ut(t))=="string"||t instanceof bc?Qb(this._dataReader,"WriteBatch.update",l._key,t,s,a):Gb(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Nn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=lg(e,this._firestore);return this._mutations=this._mutations.concat(new N_(t._key,Nn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(X.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lg(n,e){if((n=ut(n)).firestore!==e)throw new re(X.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function ac(){return new Z_("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(n){return Ac(n=In(n,Ns)),new YM(n,(e=>Od(n,e)))}(function(e,t=!0){(function(a){fl=a})(za),Na(new Sr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ns(new z2(s.getProvider("auth-internal")),new B2(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new re(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ec(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Pi(j0,q0,e),Pi(j0,q0,"esm2020")})();var jS={};const qS="@firebase/database",BS="1.1.0";/**
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
 */let n1="";function KM(n){n1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$t(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XM(e)}}catch{}return new WM},wa=i1("localStorage"),$M=i1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new ud("@firebase/database"),ZM=(function(){let n=1;return function(){return n++}})(),s1=function(n){const e=AI(n),t=new EI;t.update(e);const s=t.digest();return a_.encodeByteArray(s)},Ic=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ic.apply(null,s):typeof s=="object"?e+=$t(s):e+=s,e+=" "}return e};let Hu=null,FS=!0;const JM=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Ko.logLevel=Pe.VERBOSE,Hu=Ko.log.bind(Ko)},rn=function(...n){if(FS===!0&&(FS=!1,Hu===null&&$M.get("logging_enabled")===!0&&JM()),Hu){const e=Ic.apply(null,n);Hu(e)}},Nc=function(n){return function(...e){rn(n,...e)}},Hg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ic(...n);Ko.error(e)},Ds=function(...n){const e=`FIREBASE FATAL ERROR: ${Ic(...n)}`;throw Ko.error(e),new Error(e)},Dn=function(...n){const e="FIREBASE WARNING: "+Ic(...n);Ko.warn(e)},ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Md=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},rl="[MIN_NAME]",Pa="[MAX_NAME]",Ba=function(n,e){if(n===e)return 0;if(n===rl||e===Pa)return-1;if(e===rl||n===Pa)return 1;{const t=HS(n),s=HS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},nk=function(n,e){return n===e?0:n<e?-1:1},Du=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$t(e))},ly=function(n){if(typeof n!="object"||n===null)return $t(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$t(e[s]),t+=":",t+=ly(n[e[s]]);return t+="}",t},r1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function gn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const a1=function(n){ne(!Md(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},ik=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const ak=new RegExp("^-?(0*)\\d{1,10}$"),ok=-2147483648,lk=2147483647,HS=function(n){if(ak.test(n)){const e=Number(n);if(e>=ok&&e<=lk)return e}return null},_l=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Dn("Exception was thrown by user callback.",t),e},Math.floor(0))}},uk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ck{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,jn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dn(e)}}class Sf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="5",o1="v",l1="s",u1="r",c1="f",h1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f1="ls",d1="p",Gg="ac",m1="websocket",p1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function _1(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===m1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===p1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fk(n)&&(t.ns=n.namespace);const a=[];return gn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.counters_={}}incrementCounter(e,t=1){Hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return JR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={},cg={};function cy(n){const e=n.toString();return ug[e]||(ug[e]=new dk),ug[e]}function mk(n,e){const t=n.toString();return cg[t]||(cg[t]=e()),cg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&_l(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="start",gk="close",_k="pLPCommand",yk="pRTLPCB",y1="id",v1="pw",E1="ser",vk="cb",Ek="seg",Tk="ts",Sk="d",wk="dframe",T1=1870,S1=30,Ak=T1-S1,bk=25e3,Ck=3e4;class Bo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nc(e),this.stats_=cy(t),this.urlFn=p=>(this.appCheckToken&&(p[Gg]=this.appCheckToken),_1(t,p1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ck)),tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===GS)this.id=d,this.password=p;else if(c===gk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[GS]="t",s[E1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[o1]=uy,this.transportSessionId&&(s[l1]=this.transportSessionId),this.lastSessionId&&(s[f1]=this.lastSessionId),this.applicationId&&(s[d1]=this.applicationId),this.appCheckToken&&(s[Gg]=this.appCheckToken),typeof location<"u"&&location.hostname&&h1.test(location.hostname)&&(s[u1]=c1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bo.forceAllow_=!0}static forceDisallow(){Bo.forceDisallow_=!0}static isAvailable(){return Bo.forceAllow_?!0:!Bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ik()&&!sk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=kw(t),a=r1(s,Ak);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[wk]="t",s[y1]=e,s[v1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$t(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZM(),window[_k+this.uniqueCallbackIdentifier]=e,window[yk+this.uniqueCallbackIdentifier]=t,this.myIFrame=hy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){rn("frame writing exception"),d.stack&&rn(d.stack),rn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y1]=this.myID,e[v1]=this.myPW,e[E1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S1+s.length<=T1;){const c=this.pendingSegs.shift();s=s+"&"+Ek+a+"="+c.seg+"&"+Tk+a+"="+c.ts+"&"+Sk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(bk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=16384,Ik=45e3;let Kf=null;typeof MozWebSocket<"u"?Kf=MozWebSocket:typeof WebSocket<"u"&&(Kf=WebSocket);class hi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nc(this.connId),this.stats_=cy(t),this.connURL=hi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[o1]=uy,typeof location<"u"&&location.hostname&&h1.test(location.hostname)&&(c[u1]=c1),t&&(c[l1]=t),s&&(c[f1]=s),a&&(c[Gg]=a),l&&(c[d1]=l),_1(e,m1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wa.set("previous_websocket_failure",!0);try{let s;hI(),this.mySock=new Kf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Kf!==null&&!hi.forceDisallow_}static previouslyFailed(){return wa.isInMemoryStorage||wa.get("previous_websocket_failure")===!0}markConnectionHealthy(){wa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Xu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=r1(t,Rk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ik))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{static get ALL_TRANSPORTS(){return[Bo,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let s=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||Dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hi];else{const a=this.transports_=[];for(const l of oc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);oc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=6e4,Dk=5e3,xk=10*1024,Ok=100*1024,hg="t",QS="d",Mk="s",YS="r",kk="e",KS="o",XS="a",WS="n",$S="p",Pk="h";class Vk{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nc("c:"+this.id+":"),this.transportManager_=new oc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Gu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ok?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hg in e){const t=e[hg];t===XS?this.upgradeIfSecondaryHealthy_():t===YS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===KS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Du("t",e),s=Du("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$S,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:XS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:WS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Du("t",e),s=Du("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Du(hg,e);if(QS in e){const s=e[QS];if(t===Pk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===WS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mk?this.onConnectionShutdown_(s):t===YS?this.onReset_(s):t===kk?Hg("Server Error: "+s):t===KS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),uy!==s&&Dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Gu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$S,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends A1{static getInstance(){return new Xf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!u_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=32,JS=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new Je("")}function Ie(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Dr(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function fy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function lc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function b1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function bt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Je(t,0)}function xe(n){return n.pieceNum_>=n.pieces_.length}function Cn(n,e){const t=Ie(n),s=Ie(e);if(t===null)return e;if(t===s)return Cn(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Uk(n,e){const t=lc(n,0),s=lc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ba(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function dy(n,e){if(Dr(n)!==Dr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ii(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Dr(n)>Dr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class zk{constructor(e,t){this.errorPrefix_=t,this.parts_=lc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ld(this.parts_[s]);C1(this)}}function jk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ld(e),C1(n)}function qk(n){const e=n.parts_.pop();n.byteLength_-=ld(e),n.parts_.length>0&&(n.byteLength_-=1)}function C1(n){if(n.byteLength_>JS)throw new Error(n.errorPrefix_+"has a key path longer than "+JS+" bytes ("+n.byteLength_+").");if(n.parts_.length>ZS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ZS+") or object contains a cycle "+Ea(n))}function Ea(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends A1{static getInstance(){return new my}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=1e3,Bk=300*1e3,ew=30*1e3,Fk=1.3,Hk=3e4,Gk="server_kill",tw=3;class As extends w1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=As.nextPersistentConnectionId_++,this.log_=Nc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xu,this.maxReconnectDelay_=Bk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");my.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_($t(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ys,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;As.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Hi(e,"w")){const s=$o(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ew)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$t(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hg("Unrecognized action received from server: "+$t(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hk&&(this.reconnectDelay_=xu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+As.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new Vk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{Dn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Dn(T),p())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cf(this.interruptReasons_)&&(this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>ly(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tw&&(this.reconnectDelay_=ew,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+n1.replace(/\./g,"-")]=1,u_()?e["framework.cordova"]=1:qw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xf.getInstance().currentlyOnline();return Cf(this.interruptReasons_)&&e}}As.nextPersistentConnectionId_=0;As.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Oe(rl,e),a=new Oe(rl,t);return this.compare(s,a)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf;class R1 extends kd{static get __EMPTY_NODE(){return cf}static set __EMPTY_NODE(e){cf=e}compare(e,t){return Ba(e.name,t.name)}isDefinedOn(e){throw ul("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Pa,cf)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,cf)}toString(){return".key"}}const Xo=new R1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Wt.RED,this.left=a??Rn.EMPTY_NODE,this.right=l??Rn.EMPTY_NODE}copy(e,t,s,a,l){return new Wt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Rn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class Qk{copy(e,t,s,a,l){return this}insert(e,t,s){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hf(this.root_,null,this.comparator_,!0,e)}}Rn.EMPTY_NODE=new Qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(n,e){return Ba(n.name,e.name)}function py(n,e){return Ba(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg;function Kk(n){Qg=n}const I1=function(n){return typeof n=="number"?"number:"+a1(n):"string:"+n},N1=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hi(e,".sv"),"Priority must be a string or number.")}else ne(n===Qg||n.isEmpty(),"priority of unexpected type.");ne(n===Qg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nw;class Kt{static set __childrenNodeConstructor(e){nw=e}static get __childrenNodeConstructor(){return nw}constructor(e,t=Kt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),N1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Kt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:Ie(e)===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Kt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ie(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Kt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+I1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=a1(this.value_):e+=this.value_,this.lazyHash_=s1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Kt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Kt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Kt.VALUE_TYPE_ORDER.indexOf(t),l=Kt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Kt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D1,x1;function Xk(n){D1=n}function Wk(n){x1=n}class $k extends kd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ba(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Pa,new Kt("[PRIORITY-POST]",x1))}makePost(e,t){const s=D1(e);return new Oe(t,new Kt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pt=new $k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=Math.log(2);class Jk{constructor(e){const t=l=>parseInt(Math.log(l)/Zk,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wf=function(n,e,t,s){n.sort(e);const a=function(p,g){const v=g-p;let T,w;if(v===0)return null;if(v===1)return T=n[p],w=t?t(T):T,new Wt(w,T.node,Wt.BLACK,null,null);{const x=parseInt(v/2,10)+p,j=a(p,x),Y=a(x+1,g);return T=n[x],w=t?t(T):T,new Wt(w,T.node,Wt.BLACK,j,Y)}},l=function(p){let g=null,v=null,T=n.length;const w=function(j,Y){const K=T-j,ce=T;T-=j;const oe=a(K+1,ce),ue=n[K],Ue=t?t(ue):ue;x(new Wt(Ue,ue.node,Y,null,oe))},x=function(j){g?(g.left=j,g=j):(v=j,g=j)};for(let j=0;j<p.count;++j){const Y=p.nextBitIsOne(),K=Math.pow(2,p.count-(j+1));Y?w(K,Wt.BLACK):(w(K,Wt.BLACK),w(K,Wt.RED))}return v},c=new Jk(n.length),d=l(c);return new Rn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fg;const Lo={};class Ss{static get Default(){return ne(Lo&&pt,"ChildrenNode.ts has not been loaded"),fg=fg||new Ss({".priority":Lo},{".priority":pt}),fg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$o(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return Hi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Xo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Wf(s,e.getCompare()):d=Lo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new Ss(v,g)}addToIndexes(e,t){const s=Rf(this.indexes_,(a,l)=>{const c=$o(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===Lo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Oe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Wf(d,c.getCompare())}else return Lo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Oe(e.name,d))),p.insert(e,e.node)}});return new Ss(s,this.indexSet_)}removeFromIndexes(e,t){const s=Rf(this.indexes_,a=>{if(a===Lo)return a;{const l=t.get(e.name);return l?a.remove(new Oe(e.name,l)):a}});return new Ss(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;class Te{static get EMPTY_NODE(){return Ou||(Ou=new Te(new Rn(py),null,Ss.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&N1(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ou}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ou:t}}getChild(e){const t=Ie(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Oe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Ou:this.priorityNode_;return new Te(a,c,l)}}updateChild(e,t){const s=Ie(e);if(s===null)return t;{ne(Ie(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(rt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pt,(c,d)=>{t[c]=d.val(e),s++,l&&Te.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+I1(this.getPriority().val())+":"),this.forEachChild(pt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":s1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Oe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dc?-1:0}withIndex(e){if(e===Xo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pt),a=t.getIterator(pt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Xo?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eP extends Te{constructor(){super(new Rn(py),Te.EMPTY_NODE,Ss.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Dc=new eP;Object.defineProperties(Oe,{MIN:{value:new Oe(rl,Te.EMPTY_NODE)},MAX:{value:new Oe(Pa,Dc)}});R1.__EMPTY_NODE=Te.EMPTY_NODE;Kt.__childrenNodeConstructor=Te;Kk(Dc);Wk(Dc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=!0;function xt(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Kt(t,xt(e))}if(!(n instanceof Array)&&tP){const t=[];let s=!1;if(gn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=xt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Oe(c,p)))}}),t.length===0)return Te.EMPTY_NODE;const l=Wf(t,Yk,c=>c.name,py);if(s){const c=Wf(t,pt.getCompare());return new Te(l,xt(e),new Ss({".priority":c},{".priority":pt}))}else return new Te(l,xt(e),Ss.Default)}else{let t=Te.EMPTY_NODE;return gn(n,(s,a)=>{if(Hi(n,s)&&s.substring(0,1)!=="."){const l=xt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(xt(e))}}Xk(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends kd{constructor(e){super(),this.indexPath_=e,ne(!xe(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ba(e.name,t.name):l}makePost(e,t){const s=xt(e),a=Te.EMPTY_NODE.updateChild(this.indexPath_,s);return new Oe(t,a)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Dc);return new Oe(Pa,e)}toString(){return lc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP extends kd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ba(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const s=xt(e);return new Oe(t,s)}toString(){return".value"}}const sP=new iP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n){return{type:"value",snapshotNode:n}}function al(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function uc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(uc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(al(t,s)):c.trackChildChange(cc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pt,(a,l)=>{t.hasChild(a)||s.trackChildChange(uc(a,l))}),t.isLeafNode()||t.forEachChild(pt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(cc(a,l,c))}else s.trackChildChange(al(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.indexedFilter_=new gy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hc.getStartPost_(e),this.endPost_=hc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Oe(t,s))||(s=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Te.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Te.EMPTY_NODE);const l=this;return t.forEachChild(pt,(c,d)=>{l.matches(new Oe(c,d))||(a=a.updateImmediateChild(c,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Oe(t,s))||(s=Te.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Te.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Te.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(w,x)=>T(x,w)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const p=new Oe(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const x=w==null?1:c(w,p);if(v&&!s.isEmpty()&&x>=0)return l?.trackChildChange(cc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(uc(t,T));const Y=d.updateImmediateChild(t,Te.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(al(w.name,w.node)),Y.updateImmediateChild(w.name,w.node)):Y}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(uc(g.name,g.node)),l.trackChildChange(al(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rl}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new _y;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oP(n){return n.loadsAllData()?new gy(n.getIndex()):n.hasLimit()?new aP(n):new hc(n)}function iw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pt?t="$priority":n.index_===sP?t="$value":n.index_===Xo?t="$key":(ne(n.index_ instanceof nP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$t(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$t(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$t(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$t(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$t(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function sw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends w1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Nc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=$f.getListenId_(e,s),d={};this.listens_[c]=d;const p=iw(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),$o(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=$f.getListenId_(e,t);delete this.listens_[s]}get(e){const t=iw(e._queryParams),s=e._path.toString(),a=new ys;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Xu(d.responseText)}catch{Dn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Dn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){return{value:null,children:new Map}}function yl(n,e,t){if(xe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ie(e);n.children.has(s)||n.children.set(s,Zf());const a=n.children.get(s);e=rt(e),yl(a,e,t)}}function Yg(n,e){if(xe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(pt,(s,a)=>{yl(n,new Je(s),a)}),Yg(n,e)}}else if(n.children.size>0){const t=Ie(e);return e=rt(e),n.children.has(t)&&Yg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Kg(n,e,t){n.value!==null?t(e,n.value):uP(n,(s,a)=>{const l=new Je(e.toString()+"/"+s);Kg(a,l,t)})}function uP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&gn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=10*1e3,hP=30*1e3,fP=300*1e3;class dP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cP(e);const s=rw+(hP-rw)*Math.random();Gu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;gn(e,(a,l)=>{l>0&&Hi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Gu(this.reportStats_.bind(this),Math.floor(Math.random()*2*fP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function M1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=di.ACK_USER_WRITE,this.source=M1()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new Jf(Ye(),t,this.revert)}}else return ne(Ie(this.path)===e,"operationForChild called for unrelated child."),new Jf(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new fc(this.source,Ye()):new fc(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=di.OVERWRITE}operationForChild(e){return xe(this.path)?new Va(this.source,Ye(),this.snap.getImmediateChild(e)):new Va(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=di.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new Va(this.source,Ye(),t.value):new dc(this.source,Ye(),t)}else return ne(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pP(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(rP(c.childName,c.snapshotNode))}),Mu(n,a,"child_removed",e,s,t),Mu(n,a,"child_added",e,s,t),Mu(n,a,"child_moved",l,s,t),Mu(n,a,"child_changed",e,s,t),Mu(n,a,"value",e,s,t),a}function Mu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>_P(n,d,p)),c.forEach(d=>{const p=gP(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function gP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _P(n,e,t){if(e.childName==null||t.childName==null)throw ul("Should only compare child_ events.");const s=new Oe(e.childName,e.snapshotNode),a=new Oe(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,e){return{eventCache:n,serverCache:e}}function Qu(n,e,t,s){return Pd(new La(e,t,s),n.serverCache)}function k1(n,e,t,s){return Pd(n.eventCache,new La(e,t,s))}function Xg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ua(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dg;const yP=()=>(dg||(dg=new Rn(nk)),dg);class ct{static fromObject(e){let t=new ct(null);return gn(e,(s,a)=>{t=t.set(new Je(s),a)}),t}constructor(e,t=yP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(xe(e))return null;{const s=Ie(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:bt(new Je(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=Ie(e),s=this.children.get(t);return s!==null?s.subtree(rt(e)):new ct(null)}}set(e,t){if(xe(e))return new ct(t,this.children);{const s=Ie(e),l=(this.children.get(s)||new ct(null)).set(rt(e),t),c=this.children.insert(s,l);return new ct(this.value,c)}}remove(e){if(xe(e))return this.children.isEmpty()?new ct(null):new ct(null,this.children);{const t=Ie(e),s=this.children.get(t);if(s){const a=s.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ct(null):new ct(this.value,l)}else return this}}get(e){if(xe(e))return this.value;{const t=Ie(e),s=this.children.get(t);return s?s.get(rt(e)):null}}setTree(e,t){if(xe(e))return t;{const s=Ie(e),l=(this.children.get(s)||new ct(null)).setTree(rt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ct(this.value,c)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(bt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(xe(e))return null;{const l=Ie(e),c=this.children.get(l);return c?c.findOnPath_(rt(e),bt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(xe(e))return this;{this.value&&s(t,this.value);const a=Ie(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),bt(t,a),s):new ct(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(bt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new ct(null))}}function Yu(n,e,t){if(xe(e))return new pi(new ct(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Cn(a,e);return l=l.updateChild(c,t),new pi(n.writeTree_.set(a,l))}else{const a=new ct(t),l=n.writeTree_.setTree(e,a);return new pi(l)}}}function aw(n,e,t){let s=n;return gn(t,(a,l)=>{s=Yu(s,bt(e,a),l)}),s}function ow(n,e){if(xe(e))return pi.empty();{const t=n.writeTree_.setTree(e,new ct(null));return new pi(t)}}function Wg(n,e){return Fa(n,e)!=null}function Fa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Cn(t.path,e)):null}function lw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pt,(s,a)=>{e.push(new Oe(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Oe(s,a.value))}),e}function Er(n,e){if(xe(e))return n;{const t=Fa(n,e);return t!=null?new pi(new ct(t)):new pi(n.writeTree_.subtree(e))}}function $g(n){return n.writeTree_.isEmpty()}function ol(n,e){return P1(Ye(),n.writeTree_,e)}function P1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=P1(bt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(bt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n,e){return z1(e,n)}function vP(n,e,t,s,a){ne(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Yu(n.visibleWrites,e,t)),n.lastWriteId=s}function EP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function TP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&SP(d,s.path)?a=!1:ii(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return wP(n),!0;if(s.snap)n.visibleWrites=ow(n.visibleWrites,s.path);else{const d=s.children;gn(d,p=>{n.visibleWrites=ow(n.visibleWrites,bt(s.path,p))})}return!0}else return!1}function SP(n,e){if(n.snap)return ii(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ii(bt(n.path,t),e))return!0;return!1}function wP(n){n.visibleWrites=V1(n.allWrites,AP,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function AP(n){return n.visible}function V1(n,e,t){let s=pi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)ii(t,c)?(d=Cn(t,c),s=Yu(s,d,l.snap)):ii(c,t)&&(d=Cn(c,t),s=Yu(s,Ye(),l.snap.getChild(d)));else if(l.children){if(ii(t,c))d=Cn(t,c),s=aw(s,d,l.children);else if(ii(c,t))if(d=Cn(c,t),xe(d))s=aw(s,Ye(),l.children);else{const p=$o(l.children,Ie(d));if(p){const g=p.getChild(rt(d));s=Yu(s,Ye(),g)}}}else throw ul("WriteRecord should have .snap or .children")}}return s}function L1(n,e,t,s,a){if(!s&&!a){const l=Fa(n.visibleWrites,e);if(l!=null)return l;{const c=Er(n.visibleWrites,e);if($g(c))return t;if(t==null&&!Wg(c,Ye()))return null;{const d=t||Te.EMPTY_NODE;return ol(c,d)}}}else{const l=Er(n.visibleWrites,e);if(!a&&$g(l))return t;if(!a&&t==null&&!Wg(l,Ye()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ii(g.path,e)||ii(e,g.path))},d=V1(n.allWrites,c,e),p=t||Te.EMPTY_NODE;return ol(d,p)}}}function bP(n,e,t){let s=Te.EMPTY_NODE;const a=Fa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Er(n.visibleWrites,e);return t.forEachChild(pt,(c,d)=>{const p=ol(Er(l,new Je(c)),d);s=s.updateImmediateChild(c,p)}),lw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Er(n.visibleWrites,e);return lw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function CP(n,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=bt(e,t);if(Wg(n.visibleWrites,l))return null;{const c=Er(n.visibleWrites,l);return $g(c)?a.getChild(t):ol(c,a.getChild(t))}}function RP(n,e,t,s){const a=bt(e,t),l=Fa(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Er(n.visibleWrites,a);return ol(c,s.getNode().getImmediateChild(t))}else return null}function IP(n,e){return Fa(n.visibleWrites,e)}function NP(n,e,t,s,a,l,c){let d;const p=Er(n.visibleWrites,e),g=Fa(p,Ye());if(g!=null)d=g;else if(t!=null)d=ol(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=w.getNext();for(;x&&v.length<a;)T(x,s)!==0&&v.push(x),x=w.getNext();return v}else return[]}function DP(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function ed(n,e,t,s){return L1(n.writeTree,n.treePath,e,t,s)}function Ty(n,e){return bP(n.writeTree,n.treePath,e)}function uw(n,e,t,s){return CP(n.writeTree,n.treePath,e,t,s)}function td(n,e){return IP(n.writeTree,bt(n.treePath,e))}function xP(n,e,t,s,a,l){return NP(n.writeTree,n.treePath,e,t,s,a,l)}function Sy(n,e,t){return RP(n.writeTree,n.treePath,e,t)}function U1(n,e){return z1(bt(n.treePath,e),n.writeTree)}function z1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,cc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,uc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,al(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,cc(s,e.snapshotNode,a.oldSnap));else throw ul("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const j1=new MP;class wy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new La(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ua(this.viewCache_),l=xP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n){return{filter:n}}function PP(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function VP(n,e,t,s,a){const l=new OP;let c,d;if(t.type===di.OVERWRITE){const g=t;g.source.fromUser?c=Zg(n,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!xe(g.path),c=nd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===di.MERGE){const g=t;g.source.fromUser?c=UP(n,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Jg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===di.ACK_USER_WRITE){const g=t;g.revert?c=qP(n,e,g.path,s,a,l):c=zP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===di.LISTEN_COMPLETE)c=jP(n,e,t.path,s,l);else throw ul("Unknown operation type: "+t.type);const p=l.getChanges();return LP(e,c,p),{viewCache:c,changes:p}}function LP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Xg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(O1(Xg(e)))}}function q1(n,e,t,s,a,l){const c=e.eventCache;if(td(s,t)!=null)return e;{let d,p;if(xe(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ua(e),v=g instanceof Te?g:Te.EMPTY_NODE,T=Ty(s,v);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ed(s,Ua(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ie(t);if(g===".priority"){ne(Dr(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=uw(s,t,v,p);T!=null?d=n.filter.updatePriority(v,T):d=c.getNode()}else{const v=rt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=uw(s,t,c.getNode(),p);w!=null?T=c.getNode().getImmediateChild(g).updateChild(v,w):T=c.getNode().getImmediateChild(g)}else T=Sy(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Qu(e,d,c.isFullyInitialized()||xe(t),n.filter.filtersNodes())}}function nd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(xe(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),x,null)}else{const x=Ie(t);if(!p.isCompleteForPath(t)&&Dr(t)>1)return e;const j=rt(t),K=p.getNode().getImmediateChild(x).updateChild(j,s);x===".priority"?g=v.updatePriority(p.getNode(),K):g=v.updateChild(p.getNode(),x,K,j,j1,null)}const T=k1(e,g,p.isFullyInitialized()||xe(t),v.filtersNodes()),w=new wy(a,T,l);return q1(n,T,t,a,w,d)}function Zg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new wy(a,e,l);if(xe(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Qu(e,g,!0,n.filter.filtersNodes());else{const T=Ie(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Qu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=rt(t),x=d.getNode().getImmediateChild(T);let j;if(xe(w))j=s;else{const Y=v.getCompleteChild(T);Y!=null?fy(w)===".priority"&&Y.getChild(b1(w)).isEmpty()?j=Y:j=Y.updateChild(w,s):j=Te.EMPTY_NODE}if(x.equals(j))p=e;else{const Y=n.filter.updateChild(d.getNode(),T,j,w,v,c);p=Qu(e,Y,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function cw(n,e){return n.eventCache.isCompleteForChild(e)}function UP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=bt(t,p);cw(e,Ie(v))&&(d=Zg(n,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=bt(t,p);cw(e,Ie(v))||(d=Zg(n,d,v,g,a,l,c))}),d}function hw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Jg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;xe(t)?g=s:g=new ct(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(v.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),j=hw(n,x,w);p=nd(n,p,new Je(T),j,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const x=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!v.hasChild(T)&&!x){const j=e.serverCache.getNode().getImmediateChild(T),Y=hw(n,j,w);p=nd(n,p,new Je(T),Y,a,l,c,d)}}),p}function zP(n,e,t,s,a,l,c){if(td(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(xe(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return nd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(xe(t)){let g=new ct(null);return p.getNode().forEachChild(Xo,(v,T)=>{g=g.set(new Je(v),T)}),Jg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ct(null);return s.foreach((v,T)=>{const w=bt(t,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),Jg(n,e,t,g,a,l,d,c)}}function jP(n,e,t,s,a){const l=e.serverCache,c=k1(e,l.getNode(),l.isFullyInitialized()||xe(t),l.isFiltered());return q1(n,c,t,s,j1,a)}function qP(n,e,t,s,a,l){let c;if(td(s,t)!=null)return e;{const d=new wy(s,e,a),p=e.eventCache.getNode();let g;if(xe(t)||Ie(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=ed(s,Ua(e));else{const T=e.serverCache.getNode();ne(T instanceof Te,"serverChildren would be complete if leaf node"),v=Ty(s,T)}v=v,g=n.filter.updateFullNode(p,v,l)}else{const v=Ie(t);let T=Sy(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=n.filter.updateChild(p,v,T,rt(t),d,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,Te.EMPTY_NODE,rt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ed(s,Ua(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||td(s,Ye())!=null,Qu(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new gy(s.getIndex()),l=oP(s);this.processor_=kP(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Te.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),v=new La(p,c.isFullyInitialized(),a.filtersNodes()),T=new La(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Pd(T,v),this.eventGenerator_=new mP(this.query_)}get query(){return this.query_}}function FP(n){return n.viewCache_.serverCache.getNode()}function HP(n,e){const t=Ua(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(Ie(e)).isEmpty())?t.getChild(e):null}function fw(n){return n.eventRegistrations_.length===0}function GP(n,e){n.eventRegistrations_.push(e)}function dw(n,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function mw(n,e,t,s){e.type===di.MERGE&&e.source.queryId!==null&&(ne(Ua(n.viewCache_),"We should always have a full cache before handling merges"),ne(Xg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=VP(n.processor_,a,e,t,s);return PP(n.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,B1(n,l.changes,l.viewCache.eventCache.getNode(),null)}function QP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(pt,(l,c)=>{s.push(al(l,c))}),t.isFullyInitialized()&&s.push(O1(t.getNode())),B1(n,s,t.getNode(),e)}function B1(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return pP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id;class YP{constructor(){this.views=new Map}}function KP(n){ne(!id,"__referenceConstructor has already been defined"),id=n}function XP(){return ne(id,"Reference.ts has not been loaded"),id}function WP(n){return n.views.size===0}function Ay(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),mw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(mw(c,e,t,s));return l}}function $P(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ed(t,a?s:null),p=!1;d?p=!0:s instanceof Te?(d=Ty(t,s),p=!1):(d=Te.EMPTY_NODE,p=!1);const g=Pd(new La(d,p,!1),new La(s,a,!1));return new BP(e,g)}return c}function ZP(n,e,t,s,a,l){const c=$P(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),GP(c,t),QP(c,t)}function JP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=xr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(dw(g,t,s)),fw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(dw(p,t,s)),fw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!xr(n)&&l.push(new(XP())(e._repo,e._path)),{removed:l,events:c}}function F1(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Wo(n,e){let t=null;for(const s of n.views.values())t=t||HP(s,e);return t}function H1(n,e){if(e._queryParams.loadsAllData())return Vd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function G1(n,e){return H1(n,e)!=null}function xr(n){return Vd(n)!=null}function Vd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd;function e4(n){ne(!sd,"__referenceConstructor has already been defined"),sd=n}function t4(){return ne(sd,"Reference.ts has not been loaded"),sd}let n4=1;class pw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ct(null),this.pendingWriteTree_=DP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q1(n,e,t,s,a){return vP(n.pendingWriteTree_,e,t,s,a),a?xc(n,new Va(M1(),e,t)):[]}function Aa(n,e,t=!1){const s=EP(n.pendingWriteTree_,e);if(TP(n.pendingWriteTree_,e)){let l=new ct(null);return s.snap!=null?l=l.set(Ye(),!0):gn(s.children,c=>{l=l.set(new Je(c),!0)}),xc(n,new Jf(s.path,l,t))}else return[]}function Ld(n,e,t){return xc(n,new Va(yy(),e,t))}function i4(n,e,t){const s=ct.fromObject(t);return xc(n,new dc(yy(),e,s))}function s4(n,e){return xc(n,new fc(yy(),e))}function r4(n,e,t){const s=Cy(n,t);if(s){const a=Ry(s),l=a.path,c=a.queryId,d=Cn(l,e),p=new fc(vy(c),d);return Iy(n,l,p)}else return[]}function e_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||G1(c,e))){const p=JP(c,e,t,s);WP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(w,x)=>xr(x));if(v&&!T){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const x=l4(w);for(let j=0;j<x.length;++j){const Y=x[j],K=Y.query,ce=X1(n,Y);n.listenProvider_.startListening(Ku(K),rd(n,K),ce.hashFn,ce.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening(Ku(e),null):g.forEach(w=>{const x=n.queryToTagMap.get(Ud(w));n.listenProvider_.stopListening(Ku(w),x)}))}u4(n,g)}return d}function a4(n,e,t,s){const a=Cy(n,s);if(a!=null){const l=Ry(a),c=l.path,d=l.queryId,p=Cn(c,e),g=new Va(vy(d),p,t);return Iy(n,c,g)}else return[]}function o4(n,e,t,s){const a=Cy(n,s);if(a){const l=Ry(a),c=l.path,d=l.queryId,p=Cn(c,e),g=ct.fromObject(t),v=new dc(vy(d),p,g);return Iy(n,c,v)}else return[]}function gw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,x)=>{const j=Cn(w,a);l=l||Wo(x,j),c=c||xr(x)});let d=n.syncPointTree_.get(a);d?(c=c||xr(d),l=l||Wo(d,Ye())):(d=new YP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Te.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,j)=>{const Y=Wo(j,Ye());Y&&(l=l.updateImmediateChild(x,Y))}));const g=G1(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Ud(e);ne(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const x=c4();n.queryToTagMap.set(w,x),n.tagToQueryMap.set(x,w)}const v=Ey(n.pendingWriteTree_,a);let T=ZP(d,e,t,v,l,p);if(!g&&!c&&!s){const w=H1(d,e);T=T.concat(h4(n,e,w))}return T}function by(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Cn(c,e),g=Wo(d,p);if(g)return g});return L1(a,e,l,t,!0)}function xc(n,e){return Y1(e,n.syncPointTree_,null,Ey(n.pendingWriteTree_,Ye()))}function Y1(n,e,t,s){if(xe(n.path))return K1(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Wo(a,Ye()));let l=[];const c=Ie(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=U1(s,c);l=l.concat(Y1(d,p,g,v))}return a&&(l=l.concat(Ay(a,n,s,t))),l}}function K1(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Wo(a,Ye()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=U1(s,c),v=n.operationForChild(c);v&&(l=l.concat(K1(v,d,p,g)))}),a&&(l=l.concat(Ay(a,n,s,t))),l}function X1(n,e){const t=e.query,s=rd(n,t);return{hashFn:()=>(FP(e)||Te.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?r4(n,t._path,s):s4(n,t._path);{const l=rk(a,t);return e_(n,t,null,l)}}}}function rd(n,e){const t=Ud(e);return n.queryToTagMap.get(t)}function Ud(n){return n._path.toString()+"$"+n._queryIdentifier}function Cy(n,e){return n.tagToQueryMap.get(e)}function Ry(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function Iy(n,e,t){const s=n.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=Ey(n.pendingWriteTree_,e);return Ay(s,t,a,null)}function l4(n){return n.fold((e,t,s)=>{if(t&&xr(t))return[Vd(t)];{let a=[];return t&&(a=F1(t)),gn(s,(l,c)=>{a=a.concat(c)}),a}})}function Ku(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(t4())(n._repo,n._path):n}function u4(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Ud(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function c4(){return n4++}function h4(n,e,t){const s=e._path,a=rd(n,e),l=X1(n,t),c=n.listenProvider_.startListening(Ku(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ne(!xr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!xe(g)&&v&&xr(v))return[Vd(v).query];{let w=[];return v&&(w=w.concat(F1(v).map(x=>x.query))),gn(T,(x,j)=>{w=w.concat(j)}),w}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening(Ku(v),rd(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ny(t)}node(){return this.node_}}class Dy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new Dy(this.syncTree_,t)}node(){return by(this.syncTree_,this.path_)}}const f4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_w=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return d4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return m4(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},d4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},m4=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},p4=function(n,e,t,s){return xy(e,new Dy(t,n),s)},W1=function(n,e,t){return xy(n,new Ny(e),t)};function xy(n,e,t){const s=n.getPriority().val(),a=_w(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=_w(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Kt(d,xt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Kt(a))),c.forEachChild(pt,(d,p)=>{const g=xy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function My(n,e){let t=e instanceof Je?e:new Je(e),s=n,a=Ie(t);for(;a!==null;){const l=$o(s.node.children,a)||{children:{},childCount:0};s=new Oy(a,s,l),t=rt(t),a=Ie(t)}return s}function vl(n){return n.node.value}function $1(n,e){n.node.value=e,t_(n)}function Z1(n){return n.node.childCount>0}function g4(n){return vl(n)===void 0&&!Z1(n)}function zd(n,e){gn(n.node.children,(t,s)=>{e(new Oy(t,n,s))})}function J1(n,e,t,s){t&&e(n),zd(n,a=>{J1(a,e,!0)})}function _4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Oc(n){return new Je(n.parent===null?n.name:Oc(n.parent)+"/"+n.name)}function t_(n){n.parent!==null&&y4(n.parent,n.name,n)}function y4(n,e,t){const s=g4(t),a=Hi(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,t_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,t_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=/[\[\].#$\/\u0000-\u001F\u007F]/,E4=/[\[\].#$\u0000-\u001F\u007F]/,mg=10*1024*1024,ky=function(n){return typeof n=="string"&&n.length!==0&&!v4.test(n)},eC=function(n){return typeof n=="string"&&n.length!==0&&!E4.test(n)},T4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eC(n)},tC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Md(n)||n&&typeof n=="object"&&Hi(n,".sv")},n_=function(n,e,t,s){jd(Zo(n,"value"),e,t)},jd=function(n,e,t){const s=t instanceof Je?new zk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ea(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ea(s)+" with contents = "+e.toString());if(Md(e))throw new Error(n+"contains "+e.toString()+" "+Ea(s));if(typeof e=="string"&&e.length>mg/3&&ld(e)>mg)throw new Error(n+"contains a string greater than "+mg+" utf8 bytes "+Ea(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(gn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!ky(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ea(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jk(s,c),jd(n,d,s),qk(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ea(s)+" in addition to actual children.")}},S4=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=lc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!ky(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Uk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&ii(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},w4=function(n,e,t,s){const a=Zo(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];gn(e,(c,d)=>{const p=new Je(c);if(jd(a,d,bt(t,p)),fy(p)===".priority"&&!tC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),S4(a,l)},A4=function(n,e,t){if(Md(e))throw new Error(Zo(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!tC(e))throw new Error(Zo(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},nC=function(n,e,t,s){if(!eC(t))throw new Error(Zo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},b4=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nC(n,e,t)},Fo=function(n,e){if(Ie(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},C4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ky(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!T4(t))throw new Error(Zo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Py(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!dy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function iC(n,e,t){Py(n,t),sC(n,s=>dy(s,e))}function xs(n,e,t){Py(n,t),sC(n,s=>ii(s,e)||ii(e,s))}function sC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(I4(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function I4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Hu&&rn("event: "+t.toString()),_l(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4="repo_interrupt",D4=25;class x4{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new R4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zf(),this.transactionQueueTree_=new Oy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function O4(n,e,t){if(n.stats_=cy(n.repoInfo_),n.forceRestClient_||uk())n.server_=new $f(n.repoInfo_,(s,a,l,c)=>{yw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>vw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new As(n.repoInfo_,e,(s,a,l,c)=>{yw(n,s,a,l,c)},s=>{vw(n,s)},s=>{k4(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=mk(n.repoInfo_,()=>new dP(n.stats_,n.server_)),n.infoData_=new lP,n.infoSyncTree_=new pw({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Ld(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Ly(n,"connected",!1),n.serverSyncTree_=new pw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);xs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function M4(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vy(n){return f4({timestamp:M4(n)})}function yw(n,e,t,s,a){n.dataUpdateCount++;const l=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Rf(t,g=>xt(g));c=o4(n.serverSyncTree_,l,p,a)}else{const p=xt(t);c=a4(n.serverSyncTree_,l,p,a)}else if(s){const p=Rf(t,g=>xt(g));c=i4(n.serverSyncTree_,l,p)}else{const p=xt(t);c=Ld(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=qd(n,l)),xs(n.eventQueue_,d,c)}function vw(n,e){Ly(n,"connected",e),e===!1&&V4(n)}function k4(n,e){gn(e,(t,s)=>{Ly(n,t,s)})}function Ly(n,e,t){const s=new Je("/.info/"+e),a=xt(t);n.infoData_.updateSnapshot(s,a);const l=Ld(n.infoSyncTree_,s,a);xs(n.eventQueue_,s,l)}function rC(n){return n.nextWriteId_++}function P4(n,e,t,s,a){Uy(n,"set",{path:e.toString(),value:t,priority:s});const l=Vy(n),c=xt(t,s),d=by(n.serverSyncTree_,e),p=W1(c,d,l),g=rC(n),v=Q1(n.serverSyncTree_,e,p,g,!0);Py(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(w,x)=>{const j=w==="ok";j||Dn("set at "+e+" failed: "+w);const Y=Aa(n.serverSyncTree_,g,!j);xs(n.eventQueue_,e,Y),ll(n,a,w,x)});const T=cC(n,e);qd(n,T),xs(n.eventQueue_,T,[])}function V4(n){Uy(n,"onDisconnectEvents");const e=Vy(n),t=Zf();Kg(n.onDisconnect_,Ye(),(a,l)=>{const c=p4(a,l,n.serverSyncTree_,e);yl(t,a,c)});let s=[];Kg(t,Ye(),(a,l)=>{s=s.concat(Ld(n.serverSyncTree_,a,l));const c=cC(n,a);qd(n,c)}),n.onDisconnect_=Zf(),xs(n.eventQueue_,Ye(),s)}function L4(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&Yg(n.onDisconnect_,e),ll(n,t,s,a)})}function Ew(n,e,t,s){const a=xt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&yl(n.onDisconnect_,e,a),ll(n,s,l,c)})}function U4(n,e,t,s,a){const l=xt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&yl(n.onDisconnect_,e,l),ll(n,a,c,d)})}function z4(n,e,t,s){if(Cf(t)){rn("onDisconnect().update() called with empty data.  Don't do anything."),ll(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&gn(t,(c,d)=>{const p=xt(d);yl(n.onDisconnect_,bt(e,c),p)}),ll(n,s,a,l)})}function j4(n,e,t){let s;Ie(e._path)===".info"?s=gw(n.infoSyncTree_,e,t):s=gw(n.serverSyncTree_,e,t),iC(n.eventQueue_,e._path,s)}function q4(n,e,t){let s;Ie(e._path)===".info"?s=e_(n.infoSyncTree_,e,t):s=e_(n.serverSyncTree_,e,t),iC(n.eventQueue_,e._path,s)}function B4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(N4)}function Uy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function ll(n,e,t,s){e&&_l(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function aC(n,e,t){return by(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function zy(n,e=n.transactionQueueTree_){if(e||Bd(n,e),vl(e)){const t=lC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&F4(n,Oc(e),t)}else Z1(e)&&zd(e,t=>{zy(n,t)})}function F4(n,e,t){const s=t.map(g=>g.currentWriteId),a=aC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=Cn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Uy(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,v=v.concat(Aa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Bd(n,My(n.transactionQueueTree_,e)),zy(n,n.transactionQueueTree_),xs(n.eventQueue_,e,v);for(let w=0;w<T.length;w++)_l(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Dn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}qd(n,e)}},c)}function qd(n,e){const t=oC(n,e),s=Oc(t),a=lC(n,t);return H4(n,a,s),s}function H4(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Cn(t,p.path);let v=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=D4)v=!0,T="maxretry",a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=aC(n,p.path,c);p.currentInputSnapshot=w;const x=e[d].update(w.val());if(x!==void 0){jd("transaction failed: Data returned ",x,p.path);let j=xt(x);typeof x=="object"&&x!=null&&Hi(x,".priority")||(j=j.updatePriority(w.getPriority()));const K=p.currentWriteId,ce=Vy(n),oe=W1(j,w,ce);p.currentOutputSnapshotRaw=j,p.currentOutputSnapshotResolved=oe,p.currentWriteId=rC(n),c.splice(c.indexOf(K),1),a=a.concat(Q1(n.serverSyncTree_,p.path,oe,p.currentWriteId,p.applyLocally)),a=a.concat(Aa(n.serverSyncTree_,K,!0))}else v=!0,T="nodata",a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0))}xs(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Bd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)_l(s[d]);zy(n,n.transactionQueueTree_)}function oC(n,e){let t,s=n.transactionQueueTree_;for(t=Ie(e);t!==null&&vl(s)===void 0;)s=My(s,t),e=rt(e),t=Ie(e);return s}function lC(n,e){const t=[];return uC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function uC(n,e,t){const s=vl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);zd(e,a=>{uC(n,a,t)})}function Bd(n,e){const t=vl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,$1(e,t.length>0?t:void 0)}zd(e,s=>{Bd(n,s)})}function cC(n,e){const t=Oc(oC(n,e)),s=My(n.transactionQueueTree_,e);return _4(s,a=>{pg(n,a)}),pg(n,s),J1(s,a=>{pg(n,a)}),t}function pg(n,e){const t=vl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Aa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?$1(e,void 0):t.length=l+1,xs(n.eventQueue_,Oc(e),a);for(let c=0;c<s.length;c++)_l(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function Q4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Tw=function(n,e){const t=Y4(n),s=t.namespace;t.domain==="firebase.com"&&Ds(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ek();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new g1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Je(t.pathString)}},Y4=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=G4(n.substring(v,T)));const w=Q4(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const j=e.indexOf(".");s=e.substring(0,j).toLowerCase(),t=e.substring(j+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class X4{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $4{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ys;return L4(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Fo("OnDisconnect.remove",this._path);const e=new ys;return Ew(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Fo("OnDisconnect.set",this._path),n_("OnDisconnect.set",e,this._path);const t=new ys;return Ew(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Fo("OnDisconnect.setWithPriority",this._path),n_("OnDisconnect.setWithPriority",e,this._path),A4("OnDisconnect.setWithPriority",t);const s=new ys;return U4(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Fo("OnDisconnect.update",this._path),w4("OnDisconnect.update",e,this._path);const t=new ys;return z4(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return xe(this._path)?null:fy(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=sw(this._queryParams),t=ly(e);return t==="{}"?"default":t}get _queryObject(){return sw(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof jy))return!1;const t=this._repo===e._repo,s=dy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lk(this._path)}}class Pr extends jy{constructor(e,t){super(e,t,new _y,!1)}get parent(){const e=b1(this._path);return e===null?null:new Pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ad{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),s=i_(this.ref,e);return new ad(this._node.getChild(t),s,pt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ad(a,i_(this.ref,s),pt)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ra(n,e){return n=ut(n),n._checkNotDeleted("ref"),e!==void 0?i_(n._root,e):n._root}function i_(n,e){return n=ut(n),Ie(n._path)===null?b4("child","path",e):nC("child","path",e),new Pr(n._repo,bt(n._path,e))}function Z4(n){return n=ut(n),new $4(n._repo,n._path)}function gg(n){return Fo("remove",n._path),Fd(n,null)}function Fd(n,e){n=ut(n),Fo("set",n._path),n_("set",e,n._path);const t=new ys;return P4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class qy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new K4("value",this,new ad(e.snapshotNode,new Pr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new X4(this,e,t):null}matches(e){return e instanceof qy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function J4(n,e,t,s,a){const l=new W4(t,void 0),c=new qy(l);return j4(n._repo,n,c),()=>q4(n._repo,n,c)}function By(n,e,t,s){return J4(n,"value",e)}KP(Pr);e4(Pr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV="FIREBASE_DATABASE_EMULATOR_HOST",s_={};let tV=!1;function nV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Or(l);n.repoInfo_=new g1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function iV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Tw(l,a),d=c.repoInfo,p;typeof process<"u"&&jS&&(p=jS[eV]),p?(l=`http://${p}?ns=${d.namespace}`,c=Tw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new hk(n.name,n.options,e);C4("Invalid Firebase Database URL",c),xe(c.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const v=rV(d,n,g,new ck(n,t));return new aV(v,n)}function sV(n,e){const t=s_[e];(!t||t[n.key]!==n)&&Ds(`Database ${e}(${n.repoInfo_}) has already been deleted.`),B4(n),delete t[n.key]}function rV(n,e,t,s){let a=s_[e.name];a||(a={},s_[e.name]=a);let l=a[n.toURLString()];return l&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new x4(n,tV,t,s),a[n.toURLString()]=l,l}class aV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(O4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ds("Cannot call "+e+" on a deleted database.")}}function oV(n=h_(),e){const t=cd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Lw("database");s&&lV(t,...s)}return t}function lV(n,e,t,s={}){n=ut(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Tr(s,l.repoInfo_.emulatorOptions))return;Ds("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ds('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Sf(Sf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:jw(s.mockUserToken,n.app.options.projectId);c=new Sf(d)}Or(e)&&(o_(e),l_("Database",!0)),nV(l,a,s,c)}/**
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
 */function uV(n){KM(za),Na(new Sr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return iV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Pi(qS,BS,n),Pi(qS,BS,"esm2020")}As.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};As.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Sw=n=>{const e=hV(n);return e.charAt(0).toUpperCase()+e.slice(1)},hC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),fV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=me.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>me.createElement("svg",{ref:p,...dV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:hC("lucide",a),...!l&&!fV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>me.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=(n,e)=>{const t=me.forwardRef(({className:s,...a},l)=>me.createElement(mV,{ref:l,iconNode:e,className:hC(`lucide-${cV(Sw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Sw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gV=Bn("arrow-left",pV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ww=Bn("bell",_V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Aw=Bn("check-check",yV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fC=Bn("check",vV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],TV=Bn("corner-up-left",EV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],dC=Bn("loader-circle",SV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],bw=Bn("log-out",wV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Fy=Bn("message-square",AV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],CV=Bn("send",bV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],IV=Bn("smile",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Cw=Bn("user-plus",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Rw=Bn("users",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],mC=Bn("x",xV),OV={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Hy=Gw(OV),wf=P2(Hy),Mt=kM(Hy),Ia=oV(Hy),MV=n=>{me.useEffect(()=>{if(!n)return;const e=Ra(Ia,`/status/${n.uid}`),t=ka(Mt,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ra(Ia,".info/connected"),c=By(l,d=>{if(d.val()===!1){Yf(t,{state:"offline",last_changed:ac()});return}Z4(e).set(s).then(()=>{Fd(e,a),Yf(t,{state:"online",last_changed:ac()})})});return()=>c()},[n])},pC=n=>{const[e,t]=me.useState(null);return me.useEffect(()=>{if(!n){t(null);return}const s=Nr(ka(Mt,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=Ra(Ia,`/status/${n}`),l=By(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[n]),e},kV=n=>{const[e,t]=me.useState(0);return me.useEffect(()=>{if(!n?.uid)return;const s=Fi(si(Mt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","pending")),a=Nr(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},PV=n=>{const[e,t]=me.useState(0),[s,a]=me.useState([]);return me.useEffect(()=>{if(!n?.uid)return;const l=Fi(si(Mt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","accepted")),c=Nr(l,d=>{const p=d.docs.map(g=>g.data().users.find(v=>v!==n.uid));a(p)});return()=>c()},[n]),me.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=Fi(si(Mt,`conversations/${p}/messages`),mn("receiverId","==",n.uid),mn("status","in",["sent","delivered"]));return Nr(g,v=>{l[p]=v.size;const T=Object.values(l).reduce((w,x)=>w+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},VV=n=>{const e=me.useRef(n);me.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),me.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},LV=({text:n="Preparando seu bate-papo..."})=>L.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:L.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[L.jsx(Fy,{size:80,className:"text-blue-400 mb-6 mx-auto"}),L.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),L.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[L.jsx(dC,{className:"animate-spin h-10 w-10 text-blue-400"}),L.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),UV=()=>{const n=async()=>{const e=new vs;try{const s=(await HD(wf,e)).user,a=ka(Mt,"users",s.uid);(await Jb(a)).exists()||await QM(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return L.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:L.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[L.jsx(Fy,{size:80,className:"text-blue-400 mb-6 mx-auto"}),L.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),L.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),L.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[L.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},zV=({user:n,onClose:e})=>n?L.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:L.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[L.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),L.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),L.jsx("p",{className:"text-gray-400",children:n.email}),L.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,Iw=({currentUser:n})=>{const[e,t]=me.useState(""),[s,a]=me.useState([]),[l,c]=me.useState({}),[d,p]=me.useState(!1),[g,v]=me.useState(""),[T,w]=me.useState(""),x=async Y=>{if(Y.preventDefault(),e.trim()!==""){p(!0),v(""),w(""),a([]);try{const K=Fi(si(Mt,"users"),mn("email","==",e.trim()),FM(1)),oe=(await Fg(K)).docs.map(ue=>ue.data())[0];if(oe&&oe.uid!==n.uid){a([oe]);const ue=Fi(si(Mt,"friendships"),mn("users","array-contains",n.uid)),ve=(await Fg(ue)).docs.find(ze=>ze.data().users.includes(oe.uid));c({[oe.uid]:ve?ve.data().status:"not_friends"})}else oe&&oe.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(K){v("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(K)}finally{p(!1)}}},j=async Y=>{try{await e1(si(Mt,"friendships"),{users:[n.uid,Y.uid],status:"pending",requestedBy:n.uid,createdAt:ac()}),c(K=>({...K,[Y.uid]:"pending"}))}catch(K){v("Falha ao enviar pedido."),console.error(K)}};return L.jsxs("div",{className:"p-4",children:[L.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),L.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[L.jsx("input",{type:"email",value:e,onChange:Y=>t(Y.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),L.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?L.jsx(dC,{className:"animate-spin"}):"Buscar"})]}),L.jsxs("div",{className:"mt-4 h-24",children:[g&&L.jsx("p",{className:"text-red-400",children:g}),T&&L.jsx("p",{className:"text-yellow-400",children:T}),s.map(Y=>L.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("img",{src:Y.photoURL,alt:Y.displayName,className:"w-10 h-10 rounded-full"}),L.jsx("span",{className:"text-white",children:Y.displayName})]}),L.jsxs("div",{children:[l[Y.uid]==="not_friends"&&L.jsx("button",{onClick:()=>j(Y),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Y.uid]==="pending"&&L.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Y.uid]==="accepted"&&L.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Y.uid]==="declined"&&L.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Y.uid))]})]})},Nw=({currentUser:n})=>{const[e,t]=me.useState([]);me.useEffect(()=>{if(!n?.uid)return;const a=Fi(si(Mt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","pending")),l=Nr(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const v=g.users.find(w=>w!==n.uid),T=await Jb(ka(Mt,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Yf(ka(Mt,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return L.jsxs("div",{className:"p-4",children:[L.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?L.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):L.jsx("ul",{className:"space-y-2",children:e.map(a=>L.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),L.jsx("span",{className:"text-white",children:a.displayName})]}),L.jsxs("div",{className:"flex gap-2",children:[L.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:L.jsx(fC,{size:16})}),L.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:L.jsx(mC,{size:16})})]})]},a.id))})]})},Dw=({currentUser:n,onSelectUser:e})=>{const[t,s]=me.useState([]);return me.useEffect(()=>{if(!n?.uid)return;const a=Fi(si(Mt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","accepted")),l=Nr(a,c=>{const d=c.docs.map(p=>p.data().users.find(g=>g!==n.uid));s(d)});return()=>l()},[n.uid]),L.jsxs("div",{className:"flex-grow overflow-y-auto",children:[L.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Contatos"}),t.length===0?L.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):L.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(a=>L.jsx(jV,{friendId:a,currentUser:n,onSelectUser:e},a))})]})},jV=({friendId:n,currentUser:e,onSelectUser:t})=>{const s=pC(n),[a,l]=me.useState(0);if(me.useEffect(()=>{if(!n||!e)return;const d=[e.uid,n].sort().join("_"),p=Fi(si(Mt,`conversations/${d}/messages`),mn("receiverId","==",e.uid),mn("status","in",["sent","delivered"])),g=Nr(p,v=>l(v.size));return()=>g()},[n,e]),!s||!s.uid)return L.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const c=d=>{if(!d||typeof d.seconds!="number")return"Offline";const p=new Date(d.seconds*1e3),g=new Date,v=new Date(g.getFullYear(),g.getMonth(),g.getDate()),T=new Date(g.getFullYear(),g.getMonth(),g.getDate()-1),w={hour:"2-digit",minute:"2-digit"},x=p.toLocaleTimeString("pt-BR",w);if(p>=v)return`Visto por último hoje às ${x}`;if(p>=T)return`Visto por último ontem às ${x}`;{const j={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${p.toLocaleDateString("pt-BR",j)}`}};return L.jsxs("li",{onClick:()=>t(s),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200",children:[L.jsxs("div",{className:"flex items-center gap-4 relative",children:[L.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),L.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${s.presence==="online"?"bg-green-500":"bg-gray-500"}`}),L.jsxs("div",{children:[L.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName}),L.jsx("p",{className:"text-sm text-gray-400",children:s.presence==="online"?"Online":c(s.last_changed)})]})]}),a>0&&L.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:a})]})},qV=({msg:n,isCurrentUser:e,onReply:t})=>{const[s,a]=me.useState(0),l=me.useRef(0),c=me.useRef(!1),d=T=>{l.current=T.touches[0].clientX,c.current=!0},p=T=>{if(!c.current)return;const x=T.touches[0].clientX-l.current;x>0&&!e?a(Math.min(x,70)):x<0&&e&&a(Math.max(x,-70))},g=()=>{Math.abs(s)>50&&t(),a(0),c.current=!1},v=({msg:T})=>{if(!e||!T.status)return null;switch(T.status){case"read":return L.jsx(Aw,{size:16,className:"text-sky-400"});case"delivered":return L.jsx(Aw,{size:16,className:"opacity-60"});case"sent":return L.jsx(fC,{size:16,className:"opacity-60"});default:return null}};return L.jsxs("div",{className:"relative group w-full flex",style:{justifyContent:e?"flex-end":"flex-start"},onTouchStart:d,onTouchMove:p,onTouchEnd:g,children:[L.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${e?"left-0":"right-0"} transition-opacity duration-200 opacity-0 ${Math.abs(s)>50?"opacity-100":"group-hover:opacity-100"}`,style:{transform:`translateX(${e?"calc(-100% - 0.5rem)":"calc(100% + 0.5rem)"})`},children:L.jsx("button",{onClick:t,className:"p-1 rounded-full bg-gray-600 hover:bg-gray-500",children:L.jsx(TV,{size:16})})}),L.jsx("div",{className:"transition-transform duration-200 ease-out",style:{transform:`translateX(${s}px)`},children:L.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${e?"bg-blue-600 text-white rounded-br-none":"bg-gray-700 text-white rounded-bl-none"}`,children:[n.replyTo&&L.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[L.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),L.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),L.jsx("p",{className:"break-words",children:n.text}),L.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[L.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),L.jsx(v,{msg:n})]})]})})]})},xw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=me.useState([]),[l,c]=me.useState(""),[d,p]=me.useState(!1),[g,v]=me.useState(!1),[T,w]=me.useState(null),[x,j]=me.useState(!1),Y=me.useRef(null),K=me.useRef(null),ce=[n.uid,e.uid].sort().join("_"),oe=pC(e.uid),ue=me.useRef();me.useEffect(()=>{ue.current=oe?.presence},[oe?.presence]),me.useEffect(()=>{if(ue.current!=="online"&&oe?.presence==="online"){const N=Fi(si(Mt,`conversations/${ce}/messages`),mn("senderId","==",n.uid),mn("status","==","sent"));Fg(N).then(b=>{const R=zS(Mt);b.docs.forEach(M=>R.update(M.ref,{status:"delivered"})),R.commit()})}},[oe?.presence,ce,n.uid]),me.useEffect(()=>{const N=`conversations/${ce}/messages`,b=Fi(si(Mt,N),BM("createdAt","asc")),R=Nr(b,M=>{a(M.docs.map(P=>({id:P.id,...P.data()})));const k=zS(Mt);M.docs.forEach(P=>{P.data().receiverId===n.uid&&P.data().status!=="read"&&k.update(P.ref,{status:"read"})}),k.commit()});return()=>R()},[ce,n.uid]),me.useEffect(()=>{const N=Ra(Ia,`typing/${ce}/${e.uid}`),b=By(N,R=>p(R.exists()));return()=>b()},[ce,e.uid]),me.useEffect(()=>{Y.current?.scrollIntoView({behavior:"smooth"})},[s]);const Ue=N=>{c(N.target.value);const b=Ra(Ia,`typing/${ce}/${n.uid}`);N.target.value.trim().length>0?(Fd(b,!0),K.current&&clearTimeout(K.current),K.current=setTimeout(()=>gg(b),3e3)):gg(b)},ve=async N=>{if(N.preventDefault(),l.trim()==="")return;const b=l;c(""),gg(Ra(Ia,`typing/${ce}/${n.uid}`)),K.current&&clearTimeout(K.current);const R={text:b,createdAt:ac(),senderId:n.uid,receiverId:e.uid,status:oe?.presence==="online"?"delivered":"sent"};T&&(R.replyTo={id:T.id,text:T.text,senderName:T.senderId===n.uid?"Você":e.displayName});try{await e1(si(Mt,`conversations/${ce}/messages`),R),w(null)}catch(M){console.error("Falha ao enviar mensagem:",M),c(b)}},ze=["😀","😂","❤️","👍","🙏","😢","🎉","🤔","🔥","💀","✨","😊"];return L.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[L.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md cursor-pointer",onClick:()=>v(!0),children:[L.jsx("button",{onClick:N=>{N.stopPropagation(),t()},className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:L.jsx(gV,{size:24})}),L.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),L.jsxs("div",{children:[L.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName}),L.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":oe?.presence==="online"?"Online":""})]})]}),L.jsxs("main",{className:"flex-grow p-4 overflow-y-auto",children:[L.jsx("div",{className:"space-y-2",children:s.map(N=>{const b=N.senderId===n.uid;return L.jsx(qV,{msg:N,isCurrentUser:b,onReply:()=>w(N)},N.id)})}),L.jsx("div",{ref:Y})]}),L.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[T&&L.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[L.jsxs("div",{className:"flex justify-between items-center text-sm",children:[L.jsxs("p",{className:"font-bold",children:["Respondendo a ",T.senderId===n.uid?"Você":e.displayName]}),L.jsx("button",{onClick:()=>w(null),className:"p-1",children:L.jsx(mC,{size:16})})]}),L.jsx("p",{className:"text-xs text-gray-400 truncate",children:T.text})]}),L.jsxs("div",{className:"relative flex items-center gap-2",children:[x&&L.jsx("div",{className:"absolute bottom-full mb-2 p-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700",children:L.jsx("div",{className:"grid grid-cols-4 gap-2",children:ze.map(N=>L.jsx("button",{onClick:()=>c(b=>b+N),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:N},N))})}),L.jsx("button",{type:"button",onClick:()=>j(N=>!N),className:"p-2 text-gray-400 hover:text-white",children:L.jsx(IV,{})}),L.jsxs("form",{onSubmit:ve,className:"flex-grow flex items-center gap-2",children:[L.jsx("input",{type:"text",value:l,onChange:Ue,placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),L.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim(),children:L.jsx(CV,{size:20})})]})]})]}),g&&L.jsx(zV,{user:e,onClose:()=>v(!1)})]})},BV=({user:n,onLogout:e})=>{const[t,s]=me.useState(null),[a,l]=me.useState("contacts"),[c,d]=me.useState("list"),p=kV(n),g=PV(n);VV(g),me.useEffect(()=>{d(t?"chat":"list")},[t]);const v=j=>{s(j)},T=()=>{s(null)},w=({count:j})=>j===0?null:L.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:j}),x=({count:j})=>j===0?null:L.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[L.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),L.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return L.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[L.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[L.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),L.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),L.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:L.jsx(bw,{size:20})})]}),L.jsxs("div",{className:"flex border-b border-gray-700/50",children:[L.jsxs("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[L.jsx(Rw,{className:"mx-auto"}),L.jsx(x,{count:g})]}),L.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:L.jsx(Cw,{className:"mx-auto"})}),L.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[L.jsx(ww,{className:"mx-auto"}),L.jsx(w,{count:p})]})]}),L.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&L.jsx(Dw,{currentUser:n,onSelectUser:v}),a==="add"&&L.jsx(Iw,{currentUser:n}),a==="requests"&&L.jsx(Nw,{currentUser:n})]})]}),L.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:c==="list"?L.jsxs(L.Fragment,{children:[L.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),L.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),L.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:L.jsx(bw,{size:20})})]}),L.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&L.jsx(Dw,{currentUser:n,onSelectUser:v}),a==="add"&&L.jsx(Iw,{currentUser:n}),a==="requests"&&L.jsx(Nw,{currentUser:n})]}),L.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[L.jsxs("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:[L.jsx(Rw,{}),L.jsx(x,{count:g})]}),L.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:L.jsx(Cw,{})}),L.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[L.jsx(ww,{}),L.jsx(w,{count:p})]})]})]}):L.jsx(xw,{currentUser:n,otherUser:t,onLeave:T})}),L.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?L.jsx(xw,{currentUser:n,otherUser:t,onLeave:T}):L.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[L.jsx(Fy,{size:60,className:"mb-4"}),L.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um contato"}),L.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function FV(){const[n,e]=me.useState(null),[t,s]=me.useState(!0);MV(n),me.useEffect(()=>{const l=wD(wf,async c=>{if(c)e(c);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await ED(wf,__initial_auth_token):e(null)}catch(d){console.error("Falha na autenticação automática, mostrando tela de login.",d),e(null)}s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=Ra(Ia,`/status/${n.uid}`);await Fd(l,{state:"offline",last_changed:Date.now()}),await Yf(ka(Mt,`/users/${n.uid}`),{state:"offline",last_changed:ac()}),await AD(wf),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return L.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:t?L.jsx(LV,{}):n?L.jsx(BV,{user:n,onLogout:a}):L.jsx(UV,{})})}XR.createRoot(document.getElementById("root")).render(L.jsx(me.StrictMode,{children:L.jsx(FV,{})}));
